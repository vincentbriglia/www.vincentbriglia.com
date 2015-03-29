"format register";



System.register("github:angular/bower-angular@1.3.15/angular", [], false, function(__require, __exports, __module) {
  System.get("@@global-helpers").prepareGlobal(__module.id, []);
  (function() {
    "format global";
    "exports angular";
    (function(window, document, undefined) {
      'use strict';
      function minErr(module, ErrorConstructor) {
        ErrorConstructor = ErrorConstructor || Error;
        return function() {
          var code = arguments[0],
              prefix = '[' + (module ? module + ':' : '') + code + '] ',
              template = arguments[1],
              templateArgs = arguments,
              message,
              i;
          message = prefix + template.replace(/\{\d+\}/g, function(match) {
            var index = +match.slice(1, -1),
                arg;
            if (index + 2 < templateArgs.length) {
              return toDebugString(templateArgs[index + 2]);
            }
            return match;
          });
          message = message + '\nhttp://errors.angularjs.org/1.3.15/' + (module ? module + '/' : '') + code;
          for (i = 2; i < arguments.length; i++) {
            message = message + (i == 2 ? '?' : '&') + 'p' + (i - 2) + '=' + encodeURIComponent(toDebugString(arguments[i]));
          }
          return new ErrorConstructor(message);
        };
      }
      var REGEX_STRING_REGEXP = /^\/(.+)\/([a-z]*)$/;
      var VALIDITY_STATE_PROPERTY = 'validity';
      var lowercase = function(string) {
        return isString(string) ? string.toLowerCase() : string;
      };
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var uppercase = function(string) {
        return isString(string) ? string.toUpperCase() : string;
      };
      var manualLowercase = function(s) {
        return isString(s) ? s.replace(/[A-Z]/g, function(ch) {
          return String.fromCharCode(ch.charCodeAt(0) | 32);
        }) : s;
      };
      var manualUppercase = function(s) {
        return isString(s) ? s.replace(/[a-z]/g, function(ch) {
          return String.fromCharCode(ch.charCodeAt(0) & ~32);
        }) : s;
      };
      if ('i' !== 'I'.toLowerCase()) {
        lowercase = manualLowercase;
        uppercase = manualUppercase;
      }
      var msie,
          jqLite,
          jQuery,
          slice = [].slice,
          splice = [].splice,
          push = [].push,
          toString = Object.prototype.toString,
          ngMinErr = minErr('ng'),
          angular = window.angular || (window.angular = {}),
          angularModule,
          uid = 0;
      msie = document.documentMode;
      function isArrayLike(obj) {
        if (obj == null || isWindow(obj)) {
          return false;
        }
        var length = obj.length;
        if (obj.nodeType === NODE_TYPE_ELEMENT && length) {
          return true;
        }
        return isString(obj) || isArray(obj) || length === 0 || typeof length === 'number' && length > 0 && (length - 1) in obj;
      }
      function forEach(obj, iterator, context) {
        var key,
            length;
        if (obj) {
          if (isFunction(obj)) {
            for (key in obj) {
              if (key != 'prototype' && key != 'length' && key != 'name' && (!obj.hasOwnProperty || obj.hasOwnProperty(key))) {
                iterator.call(context, obj[key], key, obj);
              }
            }
          } else if (isArray(obj) || isArrayLike(obj)) {
            var isPrimitive = typeof obj !== 'object';
            for (key = 0, length = obj.length; key < length; key++) {
              if (isPrimitive || key in obj) {
                iterator.call(context, obj[key], key, obj);
              }
            }
          } else if (obj.forEach && obj.forEach !== forEach) {
            obj.forEach(iterator, context, obj);
          } else {
            for (key in obj) {
              if (obj.hasOwnProperty(key)) {
                iterator.call(context, obj[key], key, obj);
              }
            }
          }
        }
        return obj;
      }
      function sortedKeys(obj) {
        return Object.keys(obj).sort();
      }
      function forEachSorted(obj, iterator, context) {
        var keys = sortedKeys(obj);
        for (var i = 0; i < keys.length; i++) {
          iterator.call(context, obj[keys[i]], keys[i]);
        }
        return keys;
      }
      function reverseParams(iteratorFn) {
        return function(value, key) {
          iteratorFn(key, value);
        };
      }
      function nextUid() {
        return ++uid;
      }
      function setHashKey(obj, h) {
        if (h) {
          obj.$$hashKey = h;
        } else {
          delete obj.$$hashKey;
        }
      }
      function extend(dst) {
        var h = dst.$$hashKey;
        for (var i = 1,
            ii = arguments.length; i < ii; i++) {
          var obj = arguments[i];
          if (obj) {
            var keys = Object.keys(obj);
            for (var j = 0,
                jj = keys.length; j < jj; j++) {
              var key = keys[j];
              dst[key] = obj[key];
            }
          }
        }
        setHashKey(dst, h);
        return dst;
      }
      function int(str) {
        return parseInt(str, 10);
      }
      function inherit(parent, extra) {
        return extend(Object.create(parent), extra);
      }
      function noop() {}
      noop.$inject = [];
      function identity($) {
        return $;
      }
      identity.$inject = [];
      function valueFn(value) {
        return function() {
          return value;
        };
      }
      function isUndefined(value) {
        return typeof value === 'undefined';
      }
      function isDefined(value) {
        return typeof value !== 'undefined';
      }
      function isObject(value) {
        return value !== null && typeof value === 'object';
      }
      function isString(value) {
        return typeof value === 'string';
      }
      function isNumber(value) {
        return typeof value === 'number';
      }
      function isDate(value) {
        return toString.call(value) === '[object Date]';
      }
      var isArray = Array.isArray;
      function isFunction(value) {
        return typeof value === 'function';
      }
      function isRegExp(value) {
        return toString.call(value) === '[object RegExp]';
      }
      function isWindow(obj) {
        return obj && obj.window === obj;
      }
      function isScope(obj) {
        return obj && obj.$evalAsync && obj.$watch;
      }
      function isFile(obj) {
        return toString.call(obj) === '[object File]';
      }
      function isFormData(obj) {
        return toString.call(obj) === '[object FormData]';
      }
      function isBlob(obj) {
        return toString.call(obj) === '[object Blob]';
      }
      function isBoolean(value) {
        return typeof value === 'boolean';
      }
      function isPromiseLike(obj) {
        return obj && isFunction(obj.then);
      }
      var trim = function(value) {
        return isString(value) ? value.trim() : value;
      };
      var escapeForRegexp = function(s) {
        return s.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08');
      };
      function isElement(node) {
        return !!(node && (node.nodeName || (node.prop && node.attr && node.find)));
      }
      function makeMap(str) {
        var obj = {},
            items = str.split(","),
            i;
        for (i = 0; i < items.length; i++)
          obj[items[i]] = true;
        return obj;
      }
      function nodeName_(element) {
        return lowercase(element.nodeName || (element[0] && element[0].nodeName));
      }
      function includes(array, obj) {
        return Array.prototype.indexOf.call(array, obj) != -1;
      }
      function arrayRemove(array, value) {
        var index = array.indexOf(value);
        if (index >= 0)
          array.splice(index, 1);
        return value;
      }
      function copy(source, destination, stackSource, stackDest) {
        if (isWindow(source) || isScope(source)) {
          throw ngMinErr('cpws', "Can't copy! Making copies of Window or Scope instances is not supported.");
        }
        if (!destination) {
          destination = source;
          if (source) {
            if (isArray(source)) {
              destination = copy(source, [], stackSource, stackDest);
            } else if (isDate(source)) {
              destination = new Date(source.getTime());
            } else if (isRegExp(source)) {
              destination = new RegExp(source.source, source.toString().match(/[^\/]*$/)[0]);
              destination.lastIndex = source.lastIndex;
            } else if (isObject(source)) {
              var emptyObject = Object.create(Object.getPrototypeOf(source));
              destination = copy(source, emptyObject, stackSource, stackDest);
            }
          }
        } else {
          if (source === destination)
            throw ngMinErr('cpi', "Can't copy! Source and destination are identical.");
          stackSource = stackSource || [];
          stackDest = stackDest || [];
          if (isObject(source)) {
            var index = stackSource.indexOf(source);
            if (index !== -1)
              return stackDest[index];
            stackSource.push(source);
            stackDest.push(destination);
          }
          var result;
          if (isArray(source)) {
            destination.length = 0;
            for (var i = 0; i < source.length; i++) {
              result = copy(source[i], null, stackSource, stackDest);
              if (isObject(source[i])) {
                stackSource.push(source[i]);
                stackDest.push(result);
              }
              destination.push(result);
            }
          } else {
            var h = destination.$$hashKey;
            if (isArray(destination)) {
              destination.length = 0;
            } else {
              forEach(destination, function(value, key) {
                delete destination[key];
              });
            }
            for (var key in source) {
              if (source.hasOwnProperty(key)) {
                result = copy(source[key], null, stackSource, stackDest);
                if (isObject(source[key])) {
                  stackSource.push(source[key]);
                  stackDest.push(result);
                }
                destination[key] = result;
              }
            }
            setHashKey(destination, h);
          }
        }
        return destination;
      }
      function shallowCopy(src, dst) {
        if (isArray(src)) {
          dst = dst || [];
          for (var i = 0,
              ii = src.length; i < ii; i++) {
            dst[i] = src[i];
          }
        } else if (isObject(src)) {
          dst = dst || {};
          for (var key in src) {
            if (!(key.charAt(0) === '$' && key.charAt(1) === '$')) {
              dst[key] = src[key];
            }
          }
        }
        return dst || src;
      }
      function equals(o1, o2) {
        if (o1 === o2)
          return true;
        if (o1 === null || o2 === null)
          return false;
        if (o1 !== o1 && o2 !== o2)
          return true;
        var t1 = typeof o1,
            t2 = typeof o2,
            length,
            key,
            keySet;
        if (t1 == t2) {
          if (t1 == 'object') {
            if (isArray(o1)) {
              if (!isArray(o2))
                return false;
              if ((length = o1.length) == o2.length) {
                for (key = 0; key < length; key++) {
                  if (!equals(o1[key], o2[key]))
                    return false;
                }
                return true;
              }
            } else if (isDate(o1)) {
              if (!isDate(o2))
                return false;
              return equals(o1.getTime(), o2.getTime());
            } else if (isRegExp(o1)) {
              return isRegExp(o2) ? o1.toString() == o2.toString() : false;
            } else {
              if (isScope(o1) || isScope(o2) || isWindow(o1) || isWindow(o2) || isArray(o2) || isDate(o2) || isRegExp(o2))
                return false;
              keySet = {};
              for (key in o1) {
                if (key.charAt(0) === '$' || isFunction(o1[key]))
                  continue;
                if (!equals(o1[key], o2[key]))
                  return false;
                keySet[key] = true;
              }
              for (key in o2) {
                if (!keySet.hasOwnProperty(key) && key.charAt(0) !== '$' && o2[key] !== undefined && !isFunction(o2[key]))
                  return false;
              }
              return true;
            }
          }
        }
        return false;
      }
      var csp = function() {
        if (isDefined(csp.isActive_))
          return csp.isActive_;
        var active = !!(document.querySelector('[ng-csp]') || document.querySelector('[data-ng-csp]'));
        if (!active) {
          try {
            new Function('');
          } catch (e) {
            active = true;
          }
        }
        return (csp.isActive_ = active);
      };
      function concat(array1, array2, index) {
        return array1.concat(slice.call(array2, index));
      }
      function sliceArgs(args, startIndex) {
        return slice.call(args, startIndex || 0);
      }
      function bind(self, fn) {
        var curryArgs = arguments.length > 2 ? sliceArgs(arguments, 2) : [];
        if (isFunction(fn) && !(fn instanceof RegExp)) {
          return curryArgs.length ? function() {
            return arguments.length ? fn.apply(self, concat(curryArgs, arguments, 0)) : fn.apply(self, curryArgs);
          } : function() {
            return arguments.length ? fn.apply(self, arguments) : fn.call(self);
          };
        } else {
          return fn;
        }
      }
      function toJsonReplacer(key, value) {
        var val = value;
        if (typeof key === 'string' && key.charAt(0) === '$' && key.charAt(1) === '$') {
          val = undefined;
        } else if (isWindow(value)) {
          val = '$WINDOW';
        } else if (value && document === value) {
          val = '$DOCUMENT';
        } else if (isScope(value)) {
          val = '$SCOPE';
        }
        return val;
      }
      function toJson(obj, pretty) {
        if (typeof obj === 'undefined')
          return undefined;
        if (!isNumber(pretty)) {
          pretty = pretty ? 2 : null;
        }
        return JSON.stringify(obj, toJsonReplacer, pretty);
      }
      function fromJson(json) {
        return isString(json) ? JSON.parse(json) : json;
      }
      function startingTag(element) {
        element = jqLite(element).clone();
        try {
          element.empty();
        } catch (e) {}
        var elemHtml = jqLite('<div>').append(element).html();
        try {
          return element[0].nodeType === NODE_TYPE_TEXT ? lowercase(elemHtml) : elemHtml.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(match, nodeName) {
            return '<' + lowercase(nodeName);
          });
        } catch (e) {
          return lowercase(elemHtml);
        }
      }
      function tryDecodeURIComponent(value) {
        try {
          return decodeURIComponent(value);
        } catch (e) {}
      }
      function parseKeyValue(keyValue) {
        var obj = {},
            key_value,
            key;
        forEach((keyValue || "").split('&'), function(keyValue) {
          if (keyValue) {
            key_value = keyValue.replace(/\+/g, '%20').split('=');
            key = tryDecodeURIComponent(key_value[0]);
            if (isDefined(key)) {
              var val = isDefined(key_value[1]) ? tryDecodeURIComponent(key_value[1]) : true;
              if (!hasOwnProperty.call(obj, key)) {
                obj[key] = val;
              } else if (isArray(obj[key])) {
                obj[key].push(val);
              } else {
                obj[key] = [obj[key], val];
              }
            }
          }
        });
        return obj;
      }
      function toKeyValue(obj) {
        var parts = [];
        forEach(obj, function(value, key) {
          if (isArray(value)) {
            forEach(value, function(arrayValue) {
              parts.push(encodeUriQuery(key, true) + (arrayValue === true ? '' : '=' + encodeUriQuery(arrayValue, true)));
            });
          } else {
            parts.push(encodeUriQuery(key, true) + (value === true ? '' : '=' + encodeUriQuery(value, true)));
          }
        });
        return parts.length ? parts.join('&') : '';
      }
      function encodeUriSegment(val) {
        return encodeUriQuery(val, true).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+');
      }
      function encodeUriQuery(val, pctEncodeSpaces) {
        return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%3B/gi, ';').replace(/%20/g, (pctEncodeSpaces ? '%20' : '+'));
      }
      var ngAttrPrefixes = ['ng-', 'data-ng-', 'ng:', 'x-ng-'];
      function getNgAttribute(element, ngAttr) {
        var attr,
            i,
            ii = ngAttrPrefixes.length;
        element = jqLite(element);
        for (i = 0; i < ii; ++i) {
          attr = ngAttrPrefixes[i] + ngAttr;
          if (isString(attr = element.attr(attr))) {
            return attr;
          }
        }
        return null;
      }
      function angularInit(element, bootstrap) {
        var appElement,
            module,
            config = {};
        forEach(ngAttrPrefixes, function(prefix) {
          var name = prefix + 'app';
          if (!appElement && element.hasAttribute && element.hasAttribute(name)) {
            appElement = element;
            module = element.getAttribute(name);
          }
        });
        forEach(ngAttrPrefixes, function(prefix) {
          var name = prefix + 'app';
          var candidate;
          if (!appElement && (candidate = element.querySelector('[' + name.replace(':', '\\:') + ']'))) {
            appElement = candidate;
            module = candidate.getAttribute(name);
          }
        });
        if (appElement) {
          config.strictDi = getNgAttribute(appElement, "strict-di") !== null;
          bootstrap(appElement, module ? [module] : [], config);
        }
      }
      function bootstrap(element, modules, config) {
        if (!isObject(config))
          config = {};
        var defaultConfig = {strictDi: false};
        config = extend(defaultConfig, config);
        var doBootstrap = function() {
          element = jqLite(element);
          if (element.injector()) {
            var tag = (element[0] === document) ? 'document' : startingTag(element);
            throw ngMinErr('btstrpd', "App Already Bootstrapped with this Element '{0}'", tag.replace(/</, '&lt;').replace(/>/, '&gt;'));
          }
          modules = modules || [];
          modules.unshift(['$provide', function($provide) {
            $provide.value('$rootElement', element);
          }]);
          if (config.debugInfoEnabled) {
            modules.push(['$compileProvider', function($compileProvider) {
              $compileProvider.debugInfoEnabled(true);
            }]);
          }
          modules.unshift('ng');
          var injector = createInjector(modules, config.strictDi);
          injector.invoke(['$rootScope', '$rootElement', '$compile', '$injector', function bootstrapApply(scope, element, compile, injector) {
            scope.$apply(function() {
              element.data('$injector', injector);
              compile(element)(scope);
            });
          }]);
          return injector;
        };
        var NG_ENABLE_DEBUG_INFO = /^NG_ENABLE_DEBUG_INFO!/;
        var NG_DEFER_BOOTSTRAP = /^NG_DEFER_BOOTSTRAP!/;
        if (window && NG_ENABLE_DEBUG_INFO.test(window.name)) {
          config.debugInfoEnabled = true;
          window.name = window.name.replace(NG_ENABLE_DEBUG_INFO, '');
        }
        if (window && !NG_DEFER_BOOTSTRAP.test(window.name)) {
          return doBootstrap();
        }
        window.name = window.name.replace(NG_DEFER_BOOTSTRAP, '');
        angular.resumeBootstrap = function(extraModules) {
          forEach(extraModules, function(module) {
            modules.push(module);
          });
          return doBootstrap();
        };
        if (isFunction(angular.resumeDeferredBootstrap)) {
          angular.resumeDeferredBootstrap();
        }
      }
      function reloadWithDebugInfo() {
        window.name = 'NG_ENABLE_DEBUG_INFO!' + window.name;
        window.location.reload();
      }
      function getTestability(rootElement) {
        var injector = angular.element(rootElement).injector();
        if (!injector) {
          throw ngMinErr('test', 'no injector found for element argument to getTestability');
        }
        return injector.get('$$testability');
      }
      var SNAKE_CASE_REGEXP = /[A-Z]/g;
      function snake_case(name, separator) {
        separator = separator || '_';
        return name.replace(SNAKE_CASE_REGEXP, function(letter, pos) {
          return (pos ? separator : '') + letter.toLowerCase();
        });
      }
      var bindJQueryFired = false;
      var skipDestroyOnNextJQueryCleanData;
      function bindJQuery() {
        var originalCleanData;
        if (bindJQueryFired) {
          return ;
        }
        jQuery = window.jQuery;
        if (jQuery && jQuery.fn.on) {
          jqLite = jQuery;
          extend(jQuery.fn, {
            scope: JQLitePrototype.scope,
            isolateScope: JQLitePrototype.isolateScope,
            controller: JQLitePrototype.controller,
            injector: JQLitePrototype.injector,
            inheritedData: JQLitePrototype.inheritedData
          });
          originalCleanData = jQuery.cleanData;
          jQuery.cleanData = function(elems) {
            var events;
            if (!skipDestroyOnNextJQueryCleanData) {
              for (var i = 0,
                  elem; (elem = elems[i]) != null; i++) {
                events = jQuery._data(elem, "events");
                if (events && events.$destroy) {
                  jQuery(elem).triggerHandler('$destroy');
                }
              }
            } else {
              skipDestroyOnNextJQueryCleanData = false;
            }
            originalCleanData(elems);
          };
        } else {
          jqLite = JQLite;
        }
        angular.element = jqLite;
        bindJQueryFired = true;
      }
      function assertArg(arg, name, reason) {
        if (!arg) {
          throw ngMinErr('areq', "Argument '{0}' is {1}", (name || '?'), (reason || "required"));
        }
        return arg;
      }
      function assertArgFn(arg, name, acceptArrayAnnotation) {
        if (acceptArrayAnnotation && isArray(arg)) {
          arg = arg[arg.length - 1];
        }
        assertArg(isFunction(arg), name, 'not a function, got ' + (arg && typeof arg === 'object' ? arg.constructor.name || 'Object' : typeof arg));
        return arg;
      }
      function assertNotHasOwnProperty(name, context) {
        if (name === 'hasOwnProperty') {
          throw ngMinErr('badname', "hasOwnProperty is not a valid {0} name", context);
        }
      }
      function getter(obj, path, bindFnToScope) {
        if (!path)
          return obj;
        var keys = path.split('.');
        var key;
        var lastInstance = obj;
        var len = keys.length;
        for (var i = 0; i < len; i++) {
          key = keys[i];
          if (obj) {
            obj = (lastInstance = obj)[key];
          }
        }
        if (!bindFnToScope && isFunction(obj)) {
          return bind(lastInstance, obj);
        }
        return obj;
      }
      function getBlockNodes(nodes) {
        var node = nodes[0];
        var endNode = nodes[nodes.length - 1];
        var blockNodes = [node];
        do {
          node = node.nextSibling;
          if (!node)
            break;
          blockNodes.push(node);
        } while (node !== endNode);
        return jqLite(blockNodes);
      }
      function createMap() {
        return Object.create(null);
      }
      var NODE_TYPE_ELEMENT = 1;
      var NODE_TYPE_TEXT = 3;
      var NODE_TYPE_COMMENT = 8;
      var NODE_TYPE_DOCUMENT = 9;
      var NODE_TYPE_DOCUMENT_FRAGMENT = 11;
      function setupModuleLoader(window) {
        var $injectorMinErr = minErr('$injector');
        var ngMinErr = minErr('ng');
        function ensure(obj, name, factory) {
          return obj[name] || (obj[name] = factory());
        }
        var angular = ensure(window, 'angular', Object);
        angular.$$minErr = angular.$$minErr || minErr;
        return ensure(angular, 'module', function() {
          var modules = {};
          return function module(name, requires, configFn) {
            var assertNotHasOwnProperty = function(name, context) {
              if (name === 'hasOwnProperty') {
                throw ngMinErr('badname', 'hasOwnProperty is not a valid {0} name', context);
              }
            };
            assertNotHasOwnProperty(name, 'module');
            if (requires && modules.hasOwnProperty(name)) {
              modules[name] = null;
            }
            return ensure(modules, name, function() {
              if (!requires) {
                throw $injectorMinErr('nomod', "Module '{0}' is not available! You either misspelled " + "the module name or forgot to load it. If registering a module ensure that you " + "specify the dependencies as the second argument.", name);
              }
              var invokeQueue = [];
              var configBlocks = [];
              var runBlocks = [];
              var config = invokeLater('$injector', 'invoke', 'push', configBlocks);
              var moduleInstance = {
                _invokeQueue: invokeQueue,
                _configBlocks: configBlocks,
                _runBlocks: runBlocks,
                requires: requires,
                name: name,
                provider: invokeLater('$provide', 'provider'),
                factory: invokeLater('$provide', 'factory'),
                service: invokeLater('$provide', 'service'),
                value: invokeLater('$provide', 'value'),
                constant: invokeLater('$provide', 'constant', 'unshift'),
                animation: invokeLater('$animateProvider', 'register'),
                filter: invokeLater('$filterProvider', 'register'),
                controller: invokeLater('$controllerProvider', 'register'),
                directive: invokeLater('$compileProvider', 'directive'),
                config: config,
                run: function(block) {
                  runBlocks.push(block);
                  return this;
                }
              };
              if (configFn) {
                config(configFn);
              }
              return moduleInstance;
              function invokeLater(provider, method, insertMethod, queue) {
                if (!queue)
                  queue = invokeQueue;
                return function() {
                  queue[insertMethod || 'push']([provider, method, arguments]);
                  return moduleInstance;
                };
              }
            });
          };
        });
      }
      function serializeObject(obj) {
        var seen = [];
        return JSON.stringify(obj, function(key, val) {
          val = toJsonReplacer(key, val);
          if (isObject(val)) {
            if (seen.indexOf(val) >= 0)
              return '<<already seen>>';
            seen.push(val);
          }
          return val;
        });
      }
      function toDebugString(obj) {
        if (typeof obj === 'function') {
          return obj.toString().replace(/ \{[\s\S]*$/, '');
        } else if (typeof obj === 'undefined') {
          return 'undefined';
        } else if (typeof obj !== 'string') {
          return serializeObject(obj);
        }
        return obj;
      }
      var version = {
        full: '1.3.15',
        major: 1,
        minor: 3,
        dot: 15,
        codeName: 'locality-filtration'
      };
      function publishExternalAPI(angular) {
        extend(angular, {
          'bootstrap': bootstrap,
          'copy': copy,
          'extend': extend,
          'equals': equals,
          'element': jqLite,
          'forEach': forEach,
          'injector': createInjector,
          'noop': noop,
          'bind': bind,
          'toJson': toJson,
          'fromJson': fromJson,
          'identity': identity,
          'isUndefined': isUndefined,
          'isDefined': isDefined,
          'isString': isString,
          'isFunction': isFunction,
          'isObject': isObject,
          'isNumber': isNumber,
          'isElement': isElement,
          'isArray': isArray,
          'version': version,
          'isDate': isDate,
          'lowercase': lowercase,
          'uppercase': uppercase,
          'callbacks': {counter: 0},
          'getTestability': getTestability,
          '$$minErr': minErr,
          '$$csp': csp,
          'reloadWithDebugInfo': reloadWithDebugInfo
        });
        angularModule = setupModuleLoader(window);
        try {
          angularModule('ngLocale');
        } catch (e) {
          angularModule('ngLocale', []).provider('$locale', $LocaleProvider);
        }
        angularModule('ng', ['ngLocale'], ['$provide', function ngModule($provide) {
          $provide.provider({$$sanitizeUri: $$SanitizeUriProvider});
          $provide.provider('$compile', $CompileProvider).directive({
            a: htmlAnchorDirective,
            input: inputDirective,
            textarea: inputDirective,
            form: formDirective,
            script: scriptDirective,
            select: selectDirective,
            style: styleDirective,
            option: optionDirective,
            ngBind: ngBindDirective,
            ngBindHtml: ngBindHtmlDirective,
            ngBindTemplate: ngBindTemplateDirective,
            ngClass: ngClassDirective,
            ngClassEven: ngClassEvenDirective,
            ngClassOdd: ngClassOddDirective,
            ngCloak: ngCloakDirective,
            ngController: ngControllerDirective,
            ngForm: ngFormDirective,
            ngHide: ngHideDirective,
            ngIf: ngIfDirective,
            ngInclude: ngIncludeDirective,
            ngInit: ngInitDirective,
            ngNonBindable: ngNonBindableDirective,
            ngPluralize: ngPluralizeDirective,
            ngRepeat: ngRepeatDirective,
            ngShow: ngShowDirective,
            ngStyle: ngStyleDirective,
            ngSwitch: ngSwitchDirective,
            ngSwitchWhen: ngSwitchWhenDirective,
            ngSwitchDefault: ngSwitchDefaultDirective,
            ngOptions: ngOptionsDirective,
            ngTransclude: ngTranscludeDirective,
            ngModel: ngModelDirective,
            ngList: ngListDirective,
            ngChange: ngChangeDirective,
            pattern: patternDirective,
            ngPattern: patternDirective,
            required: requiredDirective,
            ngRequired: requiredDirective,
            minlength: minlengthDirective,
            ngMinlength: minlengthDirective,
            maxlength: maxlengthDirective,
            ngMaxlength: maxlengthDirective,
            ngValue: ngValueDirective,
            ngModelOptions: ngModelOptionsDirective
          }).directive({ngInclude: ngIncludeFillContentDirective}).directive(ngAttributeAliasDirectives).directive(ngEventDirectives);
          $provide.provider({
            $anchorScroll: $AnchorScrollProvider,
            $animate: $AnimateProvider,
            $browser: $BrowserProvider,
            $cacheFactory: $CacheFactoryProvider,
            $controller: $ControllerProvider,
            $document: $DocumentProvider,
            $exceptionHandler: $ExceptionHandlerProvider,
            $filter: $FilterProvider,
            $interpolate: $InterpolateProvider,
            $interval: $IntervalProvider,
            $http: $HttpProvider,
            $httpBackend: $HttpBackendProvider,
            $location: $LocationProvider,
            $log: $LogProvider,
            $parse: $ParseProvider,
            $rootScope: $RootScopeProvider,
            $q: $QProvider,
            $$q: $$QProvider,
            $sce: $SceProvider,
            $sceDelegate: $SceDelegateProvider,
            $sniffer: $SnifferProvider,
            $templateCache: $TemplateCacheProvider,
            $templateRequest: $TemplateRequestProvider,
            $$testability: $$TestabilityProvider,
            $timeout: $TimeoutProvider,
            $window: $WindowProvider,
            $$rAF: $$RAFProvider,
            $$asyncCallback: $$AsyncCallbackProvider,
            $$jqLite: $$jqLiteProvider
          });
        }]);
      }
      JQLite.expando = 'ng339';
      var jqCache = JQLite.cache = {},
          jqId = 1,
          addEventListenerFn = function(element, type, fn) {
            element.addEventListener(type, fn, false);
          },
          removeEventListenerFn = function(element, type, fn) {
            element.removeEventListener(type, fn, false);
          };
      JQLite._data = function(node) {
        return this.cache[node[this.expando]] || {};
      };
      function jqNextId() {
        return ++jqId;
      }
      var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
      var MOZ_HACK_REGEXP = /^moz([A-Z])/;
      var MOUSE_EVENT_MAP = {
        mouseleave: "mouseout",
        mouseenter: "mouseover"
      };
      var jqLiteMinErr = minErr('jqLite');
      function camelCase(name) {
        return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
          return offset ? letter.toUpperCase() : letter;
        }).replace(MOZ_HACK_REGEXP, 'Moz$1');
      }
      var SINGLE_TAG_REGEXP = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
      var HTML_REGEXP = /<|&#?\w+;/;
      var TAG_NAME_REGEXP = /<([\w:]+)/;
      var XHTML_TAG_REGEXP = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi;
      var wrapMap = {
        'option': [1, '<select multiple="multiple">', '</select>'],
        'thead': [1, '<table>', '</table>'],
        'col': [2, '<table><colgroup>', '</colgroup></table>'],
        'tr': [2, '<table><tbody>', '</tbody></table>'],
        'td': [3, '<table><tbody><tr>', '</tr></tbody></table>'],
        '_default': [0, "", ""]
      };
      wrapMap.optgroup = wrapMap.option;
      wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
      wrapMap.th = wrapMap.td;
      function jqLiteIsTextNode(html) {
        return !HTML_REGEXP.test(html);
      }
      function jqLiteAcceptsData(node) {
        var nodeType = node.nodeType;
        return nodeType === NODE_TYPE_ELEMENT || !nodeType || nodeType === NODE_TYPE_DOCUMENT;
      }
      function jqLiteBuildFragment(html, context) {
        var tmp,
            tag,
            wrap,
            fragment = context.createDocumentFragment(),
            nodes = [],
            i;
        if (jqLiteIsTextNode(html)) {
          nodes.push(context.createTextNode(html));
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div"));
          tag = (TAG_NAME_REGEXP.exec(html) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + html.replace(XHTML_TAG_REGEXP, "<$1></$2>") + wrap[2];
          i = wrap[0];
          while (i--) {
            tmp = tmp.lastChild;
          }
          nodes = concat(nodes, tmp.childNodes);
          tmp = fragment.firstChild;
          tmp.textContent = "";
        }
        fragment.textContent = "";
        fragment.innerHTML = "";
        forEach(nodes, function(node) {
          fragment.appendChild(node);
        });
        return fragment;
      }
      function jqLiteParseHTML(html, context) {
        context = context || document;
        var parsed;
        if ((parsed = SINGLE_TAG_REGEXP.exec(html))) {
          return [context.createElement(parsed[1])];
        }
        if ((parsed = jqLiteBuildFragment(html, context))) {
          return parsed.childNodes;
        }
        return [];
      }
      function JQLite(element) {
        if (element instanceof JQLite) {
          return element;
        }
        var argIsString;
        if (isString(element)) {
          element = trim(element);
          argIsString = true;
        }
        if (!(this instanceof JQLite)) {
          if (argIsString && element.charAt(0) != '<') {
            throw jqLiteMinErr('nosel', 'Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element');
          }
          return new JQLite(element);
        }
        if (argIsString) {
          jqLiteAddNodes(this, jqLiteParseHTML(element));
        } else {
          jqLiteAddNodes(this, element);
        }
      }
      function jqLiteClone(element) {
        return element.cloneNode(true);
      }
      function jqLiteDealoc(element, onlyDescendants) {
        if (!onlyDescendants)
          jqLiteRemoveData(element);
        if (element.querySelectorAll) {
          var descendants = element.querySelectorAll('*');
          for (var i = 0,
              l = descendants.length; i < l; i++) {
            jqLiteRemoveData(descendants[i]);
          }
        }
      }
      function jqLiteOff(element, type, fn, unsupported) {
        if (isDefined(unsupported))
          throw jqLiteMinErr('offargs', 'jqLite#off() does not support the `selector` argument');
        var expandoStore = jqLiteExpandoStore(element);
        var events = expandoStore && expandoStore.events;
        var handle = expandoStore && expandoStore.handle;
        if (!handle)
          return ;
        if (!type) {
          for (type in events) {
            if (type !== '$destroy') {
              removeEventListenerFn(element, type, handle);
            }
            delete events[type];
          }
        } else {
          forEach(type.split(' '), function(type) {
            if (isDefined(fn)) {
              var listenerFns = events[type];
              arrayRemove(listenerFns || [], fn);
              if (listenerFns && listenerFns.length > 0) {
                return ;
              }
            }
            removeEventListenerFn(element, type, handle);
            delete events[type];
          });
        }
      }
      function jqLiteRemoveData(element, name) {
        var expandoId = element.ng339;
        var expandoStore = expandoId && jqCache[expandoId];
        if (expandoStore) {
          if (name) {
            delete expandoStore.data[name];
            return ;
          }
          if (expandoStore.handle) {
            if (expandoStore.events.$destroy) {
              expandoStore.handle({}, '$destroy');
            }
            jqLiteOff(element);
          }
          delete jqCache[expandoId];
          element.ng339 = undefined;
        }
      }
      function jqLiteExpandoStore(element, createIfNecessary) {
        var expandoId = element.ng339,
            expandoStore = expandoId && jqCache[expandoId];
        if (createIfNecessary && !expandoStore) {
          element.ng339 = expandoId = jqNextId();
          expandoStore = jqCache[expandoId] = {
            events: {},
            data: {},
            handle: undefined
          };
        }
        return expandoStore;
      }
      function jqLiteData(element, key, value) {
        if (jqLiteAcceptsData(element)) {
          var isSimpleSetter = isDefined(value);
          var isSimpleGetter = !isSimpleSetter && key && !isObject(key);
          var massGetter = !key;
          var expandoStore = jqLiteExpandoStore(element, !isSimpleGetter);
          var data = expandoStore && expandoStore.data;
          if (isSimpleSetter) {
            data[key] = value;
          } else {
            if (massGetter) {
              return data;
            } else {
              if (isSimpleGetter) {
                return data && data[key];
              } else {
                extend(data, key);
              }
            }
          }
        }
      }
      function jqLiteHasClass(element, selector) {
        if (!element.getAttribute)
          return false;
        return ((" " + (element.getAttribute('class') || '') + " ").replace(/[\n\t]/g, " ").indexOf(" " + selector + " ") > -1);
      }
      function jqLiteRemoveClass(element, cssClasses) {
        if (cssClasses && element.setAttribute) {
          forEach(cssClasses.split(' '), function(cssClass) {
            element.setAttribute('class', trim((" " + (element.getAttribute('class') || '') + " ").replace(/[\n\t]/g, " ").replace(" " + trim(cssClass) + " ", " ")));
          });
        }
      }
      function jqLiteAddClass(element, cssClasses) {
        if (cssClasses && element.setAttribute) {
          var existingClasses = (' ' + (element.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, " ");
          forEach(cssClasses.split(' '), function(cssClass) {
            cssClass = trim(cssClass);
            if (existingClasses.indexOf(' ' + cssClass + ' ') === -1) {
              existingClasses += cssClass + ' ';
            }
          });
          element.setAttribute('class', trim(existingClasses));
        }
      }
      function jqLiteAddNodes(root, elements) {
        if (elements) {
          if (elements.nodeType) {
            root[root.length++] = elements;
          } else {
            var length = elements.length;
            if (typeof length === 'number' && elements.window !== elements) {
              if (length) {
                for (var i = 0; i < length; i++) {
                  root[root.length++] = elements[i];
                }
              }
            } else {
              root[root.length++] = elements;
            }
          }
        }
      }
      function jqLiteController(element, name) {
        return jqLiteInheritedData(element, '$' + (name || 'ngController') + 'Controller');
      }
      function jqLiteInheritedData(element, name, value) {
        if (element.nodeType == NODE_TYPE_DOCUMENT) {
          element = element.documentElement;
        }
        var names = isArray(name) ? name : [name];
        while (element) {
          for (var i = 0,
              ii = names.length; i < ii; i++) {
            if ((value = jqLite.data(element, names[i])) !== undefined)
              return value;
          }
          element = element.parentNode || (element.nodeType === NODE_TYPE_DOCUMENT_FRAGMENT && element.host);
        }
      }
      function jqLiteEmpty(element) {
        jqLiteDealoc(element, true);
        while (element.firstChild) {
          element.removeChild(element.firstChild);
        }
      }
      function jqLiteRemove(element, keepData) {
        if (!keepData)
          jqLiteDealoc(element);
        var parent = element.parentNode;
        if (parent)
          parent.removeChild(element);
      }
      function jqLiteDocumentLoaded(action, win) {
        win = win || window;
        if (win.document.readyState === 'complete') {
          win.setTimeout(action);
        } else {
          jqLite(win).on('load', action);
        }
      }
      var JQLitePrototype = JQLite.prototype = {
        ready: function(fn) {
          var fired = false;
          function trigger() {
            if (fired)
              return ;
            fired = true;
            fn();
          }
          if (document.readyState === 'complete') {
            setTimeout(trigger);
          } else {
            this.on('DOMContentLoaded', trigger);
            JQLite(window).on('load', trigger);
          }
        },
        toString: function() {
          var value = [];
          forEach(this, function(e) {
            value.push('' + e);
          });
          return '[' + value.join(', ') + ']';
        },
        eq: function(index) {
          return (index >= 0) ? jqLite(this[index]) : jqLite(this[this.length + index]);
        },
        length: 0,
        push: push,
        sort: [].sort,
        splice: [].splice
      };
      var BOOLEAN_ATTR = {};
      forEach('multiple,selected,checked,disabled,readOnly,required,open'.split(','), function(value) {
        BOOLEAN_ATTR[lowercase(value)] = value;
      });
      var BOOLEAN_ELEMENTS = {};
      forEach('input,select,option,textarea,button,form,details'.split(','), function(value) {
        BOOLEAN_ELEMENTS[value] = true;
      });
      var ALIASED_ATTR = {
        'ngMinlength': 'minlength',
        'ngMaxlength': 'maxlength',
        'ngMin': 'min',
        'ngMax': 'max',
        'ngPattern': 'pattern'
      };
      function getBooleanAttrName(element, name) {
        var booleanAttr = BOOLEAN_ATTR[name.toLowerCase()];
        return booleanAttr && BOOLEAN_ELEMENTS[nodeName_(element)] && booleanAttr;
      }
      function getAliasedAttrName(element, name) {
        var nodeName = element.nodeName;
        return (nodeName === 'INPUT' || nodeName === 'TEXTAREA') && ALIASED_ATTR[name];
      }
      forEach({
        data: jqLiteData,
        removeData: jqLiteRemoveData
      }, function(fn, name) {
        JQLite[name] = fn;
      });
      forEach({
        data: jqLiteData,
        inheritedData: jqLiteInheritedData,
        scope: function(element) {
          return jqLite.data(element, '$scope') || jqLiteInheritedData(element.parentNode || element, ['$isolateScope', '$scope']);
        },
        isolateScope: function(element) {
          return jqLite.data(element, '$isolateScope') || jqLite.data(element, '$isolateScopeNoTemplate');
        },
        controller: jqLiteController,
        injector: function(element) {
          return jqLiteInheritedData(element, '$injector');
        },
        removeAttr: function(element, name) {
          element.removeAttribute(name);
        },
        hasClass: jqLiteHasClass,
        css: function(element, name, value) {
          name = camelCase(name);
          if (isDefined(value)) {
            element.style[name] = value;
          } else {
            return element.style[name];
          }
        },
        attr: function(element, name, value) {
          var lowercasedName = lowercase(name);
          if (BOOLEAN_ATTR[lowercasedName]) {
            if (isDefined(value)) {
              if (!!value) {
                element[name] = true;
                element.setAttribute(name, lowercasedName);
              } else {
                element[name] = false;
                element.removeAttribute(lowercasedName);
              }
            } else {
              return (element[name] || (element.attributes.getNamedItem(name) || noop).specified) ? lowercasedName : undefined;
            }
          } else if (isDefined(value)) {
            element.setAttribute(name, value);
          } else if (element.getAttribute) {
            var ret = element.getAttribute(name, 2);
            return ret === null ? undefined : ret;
          }
        },
        prop: function(element, name, value) {
          if (isDefined(value)) {
            element[name] = value;
          } else {
            return element[name];
          }
        },
        text: (function() {
          getText.$dv = '';
          return getText;
          function getText(element, value) {
            if (isUndefined(value)) {
              var nodeType = element.nodeType;
              return (nodeType === NODE_TYPE_ELEMENT || nodeType === NODE_TYPE_TEXT) ? element.textContent : '';
            }
            element.textContent = value;
          }
        })(),
        val: function(element, value) {
          if (isUndefined(value)) {
            if (element.multiple && nodeName_(element) === 'select') {
              var result = [];
              forEach(element.options, function(option) {
                if (option.selected) {
                  result.push(option.value || option.text);
                }
              });
              return result.length === 0 ? null : result;
            }
            return element.value;
          }
          element.value = value;
        },
        html: function(element, value) {
          if (isUndefined(value)) {
            return element.innerHTML;
          }
          jqLiteDealoc(element, true);
          element.innerHTML = value;
        },
        empty: jqLiteEmpty
      }, function(fn, name) {
        JQLite.prototype[name] = function(arg1, arg2) {
          var i,
              key;
          var nodeCount = this.length;
          if (fn !== jqLiteEmpty && (((fn.length == 2 && (fn !== jqLiteHasClass && fn !== jqLiteController)) ? arg1 : arg2) === undefined)) {
            if (isObject(arg1)) {
              for (i = 0; i < nodeCount; i++) {
                if (fn === jqLiteData) {
                  fn(this[i], arg1);
                } else {
                  for (key in arg1) {
                    fn(this[i], key, arg1[key]);
                  }
                }
              }
              return this;
            } else {
              var value = fn.$dv;
              var jj = (value === undefined) ? Math.min(nodeCount, 1) : nodeCount;
              for (var j = 0; j < jj; j++) {
                var nodeValue = fn(this[j], arg1, arg2);
                value = value ? value + nodeValue : nodeValue;
              }
              return value;
            }
          } else {
            for (i = 0; i < nodeCount; i++) {
              fn(this[i], arg1, arg2);
            }
            return this;
          }
        };
      });
      function createEventHandler(element, events) {
        var eventHandler = function(event, type) {
          event.isDefaultPrevented = function() {
            return event.defaultPrevented;
          };
          var eventFns = events[type || event.type];
          var eventFnsLength = eventFns ? eventFns.length : 0;
          if (!eventFnsLength)
            return ;
          if (isUndefined(event.immediatePropagationStopped)) {
            var originalStopImmediatePropagation = event.stopImmediatePropagation;
            event.stopImmediatePropagation = function() {
              event.immediatePropagationStopped = true;
              if (event.stopPropagation) {
                event.stopPropagation();
              }
              if (originalStopImmediatePropagation) {
                originalStopImmediatePropagation.call(event);
              }
            };
          }
          event.isImmediatePropagationStopped = function() {
            return event.immediatePropagationStopped === true;
          };
          if ((eventFnsLength > 1)) {
            eventFns = shallowCopy(eventFns);
          }
          for (var i = 0; i < eventFnsLength; i++) {
            if (!event.isImmediatePropagationStopped()) {
              eventFns[i].call(element, event);
            }
          }
        };
        eventHandler.elem = element;
        return eventHandler;
      }
      forEach({
        removeData: jqLiteRemoveData,
        on: function jqLiteOn(element, type, fn, unsupported) {
          if (isDefined(unsupported))
            throw jqLiteMinErr('onargs', 'jqLite#on() does not support the `selector` or `eventData` parameters');
          if (!jqLiteAcceptsData(element)) {
            return ;
          }
          var expandoStore = jqLiteExpandoStore(element, true);
          var events = expandoStore.events;
          var handle = expandoStore.handle;
          if (!handle) {
            handle = expandoStore.handle = createEventHandler(element, events);
          }
          var types = type.indexOf(' ') >= 0 ? type.split(' ') : [type];
          var i = types.length;
          while (i--) {
            type = types[i];
            var eventFns = events[type];
            if (!eventFns) {
              events[type] = [];
              if (type === 'mouseenter' || type === 'mouseleave') {
                jqLiteOn(element, MOUSE_EVENT_MAP[type], function(event) {
                  var target = this,
                      related = event.relatedTarget;
                  if (!related || (related !== target && !target.contains(related))) {
                    handle(event, type);
                  }
                });
              } else {
                if (type !== '$destroy') {
                  addEventListenerFn(element, type, handle);
                }
              }
              eventFns = events[type];
            }
            eventFns.push(fn);
          }
        },
        off: jqLiteOff,
        one: function(element, type, fn) {
          element = jqLite(element);
          element.on(type, function onFn() {
            element.off(type, fn);
            element.off(type, onFn);
          });
          element.on(type, fn);
        },
        replaceWith: function(element, replaceNode) {
          var index,
              parent = element.parentNode;
          jqLiteDealoc(element);
          forEach(new JQLite(replaceNode), function(node) {
            if (index) {
              parent.insertBefore(node, index.nextSibling);
            } else {
              parent.replaceChild(node, element);
            }
            index = node;
          });
        },
        children: function(element) {
          var children = [];
          forEach(element.childNodes, function(element) {
            if (element.nodeType === NODE_TYPE_ELEMENT)
              children.push(element);
          });
          return children;
        },
        contents: function(element) {
          return element.contentDocument || element.childNodes || [];
        },
        append: function(element, node) {
          var nodeType = element.nodeType;
          if (nodeType !== NODE_TYPE_ELEMENT && nodeType !== NODE_TYPE_DOCUMENT_FRAGMENT)
            return ;
          node = new JQLite(node);
          for (var i = 0,
              ii = node.length; i < ii; i++) {
            var child = node[i];
            element.appendChild(child);
          }
        },
        prepend: function(element, node) {
          if (element.nodeType === NODE_TYPE_ELEMENT) {
            var index = element.firstChild;
            forEach(new JQLite(node), function(child) {
              element.insertBefore(child, index);
            });
          }
        },
        wrap: function(element, wrapNode) {
          wrapNode = jqLite(wrapNode).eq(0).clone()[0];
          var parent = element.parentNode;
          if (parent) {
            parent.replaceChild(wrapNode, element);
          }
          wrapNode.appendChild(element);
        },
        remove: jqLiteRemove,
        detach: function(element) {
          jqLiteRemove(element, true);
        },
        after: function(element, newElement) {
          var index = element,
              parent = element.parentNode;
          newElement = new JQLite(newElement);
          for (var i = 0,
              ii = newElement.length; i < ii; i++) {
            var node = newElement[i];
            parent.insertBefore(node, index.nextSibling);
            index = node;
          }
        },
        addClass: jqLiteAddClass,
        removeClass: jqLiteRemoveClass,
        toggleClass: function(element, selector, condition) {
          if (selector) {
            forEach(selector.split(' '), function(className) {
              var classCondition = condition;
              if (isUndefined(classCondition)) {
                classCondition = !jqLiteHasClass(element, className);
              }
              (classCondition ? jqLiteAddClass : jqLiteRemoveClass)(element, className);
            });
          }
        },
        parent: function(element) {
          var parent = element.parentNode;
          return parent && parent.nodeType !== NODE_TYPE_DOCUMENT_FRAGMENT ? parent : null;
        },
        next: function(element) {
          return element.nextElementSibling;
        },
        find: function(element, selector) {
          if (element.getElementsByTagName) {
            return element.getElementsByTagName(selector);
          } else {
            return [];
          }
        },
        clone: jqLiteClone,
        triggerHandler: function(element, event, extraParameters) {
          var dummyEvent,
              eventFnsCopy,
              handlerArgs;
          var eventName = event.type || event;
          var expandoStore = jqLiteExpandoStore(element);
          var events = expandoStore && expandoStore.events;
          var eventFns = events && events[eventName];
          if (eventFns) {
            dummyEvent = {
              preventDefault: function() {
                this.defaultPrevented = true;
              },
              isDefaultPrevented: function() {
                return this.defaultPrevented === true;
              },
              stopImmediatePropagation: function() {
                this.immediatePropagationStopped = true;
              },
              isImmediatePropagationStopped: function() {
                return this.immediatePropagationStopped === true;
              },
              stopPropagation: noop,
              type: eventName,
              target: element
            };
            if (event.type) {
              dummyEvent = extend(dummyEvent, event);
            }
            eventFnsCopy = shallowCopy(eventFns);
            handlerArgs = extraParameters ? [dummyEvent].concat(extraParameters) : [dummyEvent];
            forEach(eventFnsCopy, function(fn) {
              if (!dummyEvent.isImmediatePropagationStopped()) {
                fn.apply(element, handlerArgs);
              }
            });
          }
        }
      }, function(fn, name) {
        JQLite.prototype[name] = function(arg1, arg2, arg3) {
          var value;
          for (var i = 0,
              ii = this.length; i < ii; i++) {
            if (isUndefined(value)) {
              value = fn(this[i], arg1, arg2, arg3);
              if (isDefined(value)) {
                value = jqLite(value);
              }
            } else {
              jqLiteAddNodes(value, fn(this[i], arg1, arg2, arg3));
            }
          }
          return isDefined(value) ? value : this;
        };
        JQLite.prototype.bind = JQLite.prototype.on;
        JQLite.prototype.unbind = JQLite.prototype.off;
      });
      function $$jqLiteProvider() {
        this.$get = function $$jqLite() {
          return extend(JQLite, {
            hasClass: function(node, classes) {
              if (node.attr)
                node = node[0];
              return jqLiteHasClass(node, classes);
            },
            addClass: function(node, classes) {
              if (node.attr)
                node = node[0];
              return jqLiteAddClass(node, classes);
            },
            removeClass: function(node, classes) {
              if (node.attr)
                node = node[0];
              return jqLiteRemoveClass(node, classes);
            }
          });
        };
      }
      function hashKey(obj, nextUidFn) {
        var key = obj && obj.$$hashKey;
        if (key) {
          if (typeof key === 'function') {
            key = obj.$$hashKey();
          }
          return key;
        }
        var objType = typeof obj;
        if (objType == 'function' || (objType == 'object' && obj !== null)) {
          key = obj.$$hashKey = objType + ':' + (nextUidFn || nextUid)();
        } else {
          key = objType + ':' + obj;
        }
        return key;
      }
      function HashMap(array, isolatedUid) {
        if (isolatedUid) {
          var uid = 0;
          this.nextUid = function() {
            return ++uid;
          };
        }
        forEach(array, this.put, this);
      }
      HashMap.prototype = {
        put: function(key, value) {
          this[hashKey(key, this.nextUid)] = value;
        },
        get: function(key) {
          return this[hashKey(key, this.nextUid)];
        },
        remove: function(key) {
          var value = this[key = hashKey(key, this.nextUid)];
          delete this[key];
          return value;
        }
      };
      var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
      var FN_ARG_SPLIT = /,/;
      var FN_ARG = /^\s*(_?)(\S+?)\1\s*$/;
      var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
      var $injectorMinErr = minErr('$injector');
      function anonFn(fn) {
        var fnText = fn.toString().replace(STRIP_COMMENTS, ''),
            args = fnText.match(FN_ARGS);
        if (args) {
          return 'function(' + (args[1] || '').replace(/[\s\r\n]+/, ' ') + ')';
        }
        return 'fn';
      }
      function annotate(fn, strictDi, name) {
        var $inject,
            fnText,
            argDecl,
            last;
        if (typeof fn === 'function') {
          if (!($inject = fn.$inject)) {
            $inject = [];
            if (fn.length) {
              if (strictDi) {
                if (!isString(name) || !name) {
                  name = fn.name || anonFn(fn);
                }
                throw $injectorMinErr('strictdi', '{0} is not using explicit annotation and cannot be invoked in strict mode', name);
              }
              fnText = fn.toString().replace(STRIP_COMMENTS, '');
              argDecl = fnText.match(FN_ARGS);
              forEach(argDecl[1].split(FN_ARG_SPLIT), function(arg) {
                arg.replace(FN_ARG, function(all, underscore, name) {
                  $inject.push(name);
                });
              });
            }
            fn.$inject = $inject;
          }
        } else if (isArray(fn)) {
          last = fn.length - 1;
          assertArgFn(fn[last], 'fn');
          $inject = fn.slice(0, last);
        } else {
          assertArgFn(fn, 'fn', true);
        }
        return $inject;
      }
      function createInjector(modulesToLoad, strictDi) {
        strictDi = (strictDi === true);
        var INSTANTIATING = {},
            providerSuffix = 'Provider',
            path = [],
            loadedModules = new HashMap([], true),
            providerCache = {$provide: {
                provider: supportObject(provider),
                factory: supportObject(factory),
                service: supportObject(service),
                value: supportObject(value),
                constant: supportObject(constant),
                decorator: decorator
              }},
            providerInjector = (providerCache.$injector = createInternalInjector(providerCache, function(serviceName, caller) {
              if (angular.isString(caller)) {
                path.push(caller);
              }
              throw $injectorMinErr('unpr', "Unknown provider: {0}", path.join(' <- '));
            })),
            instanceCache = {},
            instanceInjector = (instanceCache.$injector = createInternalInjector(instanceCache, function(serviceName, caller) {
              var provider = providerInjector.get(serviceName + providerSuffix, caller);
              return instanceInjector.invoke(provider.$get, provider, undefined, serviceName);
            }));
        forEach(loadModules(modulesToLoad), function(fn) {
          instanceInjector.invoke(fn || noop);
        });
        return instanceInjector;
        function supportObject(delegate) {
          return function(key, value) {
            if (isObject(key)) {
              forEach(key, reverseParams(delegate));
            } else {
              return delegate(key, value);
            }
          };
        }
        function provider(name, provider_) {
          assertNotHasOwnProperty(name, 'service');
          if (isFunction(provider_) || isArray(provider_)) {
            provider_ = providerInjector.instantiate(provider_);
          }
          if (!provider_.$get) {
            throw $injectorMinErr('pget', "Provider '{0}' must define $get factory method.", name);
          }
          return providerCache[name + providerSuffix] = provider_;
        }
        function enforceReturnValue(name, factory) {
          return function enforcedReturnValue() {
            var result = instanceInjector.invoke(factory, this);
            if (isUndefined(result)) {
              throw $injectorMinErr('undef', "Provider '{0}' must return a value from $get factory method.", name);
            }
            return result;
          };
        }
        function factory(name, factoryFn, enforce) {
          return provider(name, {$get: enforce !== false ? enforceReturnValue(name, factoryFn) : factoryFn});
        }
        function service(name, constructor) {
          return factory(name, ['$injector', function($injector) {
            return $injector.instantiate(constructor);
          }]);
        }
        function value(name, val) {
          return factory(name, valueFn(val), false);
        }
        function constant(name, value) {
          assertNotHasOwnProperty(name, 'constant');
          providerCache[name] = value;
          instanceCache[name] = value;
        }
        function decorator(serviceName, decorFn) {
          var origProvider = providerInjector.get(serviceName + providerSuffix),
              orig$get = origProvider.$get;
          origProvider.$get = function() {
            var origInstance = instanceInjector.invoke(orig$get, origProvider);
            return instanceInjector.invoke(decorFn, null, {$delegate: origInstance});
          };
        }
        function loadModules(modulesToLoad) {
          var runBlocks = [],
              moduleFn;
          forEach(modulesToLoad, function(module) {
            if (loadedModules.get(module))
              return ;
            loadedModules.put(module, true);
            function runInvokeQueue(queue) {
              var i,
                  ii;
              for (i = 0, ii = queue.length; i < ii; i++) {
                var invokeArgs = queue[i],
                    provider = providerInjector.get(invokeArgs[0]);
                provider[invokeArgs[1]].apply(provider, invokeArgs[2]);
              }
            }
            try {
              if (isString(module)) {
                moduleFn = angularModule(module);
                runBlocks = runBlocks.concat(loadModules(moduleFn.requires)).concat(moduleFn._runBlocks);
                runInvokeQueue(moduleFn._invokeQueue);
                runInvokeQueue(moduleFn._configBlocks);
              } else if (isFunction(module)) {
                runBlocks.push(providerInjector.invoke(module));
              } else if (isArray(module)) {
                runBlocks.push(providerInjector.invoke(module));
              } else {
                assertArgFn(module, 'module');
              }
            } catch (e) {
              if (isArray(module)) {
                module = module[module.length - 1];
              }
              if (e.message && e.stack && e.stack.indexOf(e.message) == -1) {
                e = e.message + '\n' + e.stack;
              }
              throw $injectorMinErr('modulerr', "Failed to instantiate module {0} due to:\n{1}", module, e.stack || e.message || e);
            }
          });
          return runBlocks;
        }
        function createInternalInjector(cache, factory) {
          function getService(serviceName, caller) {
            if (cache.hasOwnProperty(serviceName)) {
              if (cache[serviceName] === INSTANTIATING) {
                throw $injectorMinErr('cdep', 'Circular dependency found: {0}', serviceName + ' <- ' + path.join(' <- '));
              }
              return cache[serviceName];
            } else {
              try {
                path.unshift(serviceName);
                cache[serviceName] = INSTANTIATING;
                return cache[serviceName] = factory(serviceName, caller);
              } catch (err) {
                if (cache[serviceName] === INSTANTIATING) {
                  delete cache[serviceName];
                }
                throw err;
              } finally {
                path.shift();
              }
            }
          }
          function invoke(fn, self, locals, serviceName) {
            if (typeof locals === 'string') {
              serviceName = locals;
              locals = null;
            }
            var args = [],
                $inject = createInjector.$$annotate(fn, strictDi, serviceName),
                length,
                i,
                key;
            for (i = 0, length = $inject.length; i < length; i++) {
              key = $inject[i];
              if (typeof key !== 'string') {
                throw $injectorMinErr('itkn', 'Incorrect injection token! Expected service name as string, got {0}', key);
              }
              args.push(locals && locals.hasOwnProperty(key) ? locals[key] : getService(key, serviceName));
            }
            if (isArray(fn)) {
              fn = fn[length];
            }
            return fn.apply(self, args);
          }
          function instantiate(Type, locals, serviceName) {
            var instance = Object.create((isArray(Type) ? Type[Type.length - 1] : Type).prototype || null);
            var returnedValue = invoke(Type, instance, locals, serviceName);
            return isObject(returnedValue) || isFunction(returnedValue) ? returnedValue : instance;
          }
          return {
            invoke: invoke,
            instantiate: instantiate,
            get: getService,
            annotate: createInjector.$$annotate,
            has: function(name) {
              return providerCache.hasOwnProperty(name + providerSuffix) || cache.hasOwnProperty(name);
            }
          };
        }
      }
      createInjector.$$annotate = annotate;
      function $AnchorScrollProvider() {
        var autoScrollingEnabled = true;
        this.disableAutoScrolling = function() {
          autoScrollingEnabled = false;
        };
        this.$get = ['$window', '$location', '$rootScope', function($window, $location, $rootScope) {
          var document = $window.document;
          function getFirstAnchor(list) {
            var result = null;
            Array.prototype.some.call(list, function(element) {
              if (nodeName_(element) === 'a') {
                result = element;
                return true;
              }
            });
            return result;
          }
          function getYOffset() {
            var offset = scroll.yOffset;
            if (isFunction(offset)) {
              offset = offset();
            } else if (isElement(offset)) {
              var elem = offset[0];
              var style = $window.getComputedStyle(elem);
              if (style.position !== 'fixed') {
                offset = 0;
              } else {
                offset = elem.getBoundingClientRect().bottom;
              }
            } else if (!isNumber(offset)) {
              offset = 0;
            }
            return offset;
          }
          function scrollTo(elem) {
            if (elem) {
              elem.scrollIntoView();
              var offset = getYOffset();
              if (offset) {
                var elemTop = elem.getBoundingClientRect().top;
                $window.scrollBy(0, elemTop - offset);
              }
            } else {
              $window.scrollTo(0, 0);
            }
          }
          function scroll() {
            var hash = $location.hash(),
                elm;
            if (!hash)
              scrollTo(null);
            else if ((elm = document.getElementById(hash)))
              scrollTo(elm);
            else if ((elm = getFirstAnchor(document.getElementsByName(hash))))
              scrollTo(elm);
            else if (hash === 'top')
              scrollTo(null);
          }
          if (autoScrollingEnabled) {
            $rootScope.$watch(function autoScrollWatch() {
              return $location.hash();
            }, function autoScrollWatchAction(newVal, oldVal) {
              if (newVal === oldVal && newVal === '')
                return ;
              jqLiteDocumentLoaded(function() {
                $rootScope.$evalAsync(scroll);
              });
            });
          }
          return scroll;
        }];
      }
      var $animateMinErr = minErr('$animate');
      var $AnimateProvider = ['$provide', function($provide) {
        this.$$selectors = {};
        this.register = function(name, factory) {
          var key = name + '-animation';
          if (name && name.charAt(0) != '.')
            throw $animateMinErr('notcsel', "Expecting class selector starting with '.' got '{0}'.", name);
          this.$$selectors[name.substr(1)] = key;
          $provide.factory(key, factory);
        };
        this.classNameFilter = function(expression) {
          if (arguments.length === 1) {
            this.$$classNameFilter = (expression instanceof RegExp) ? expression : null;
          }
          return this.$$classNameFilter;
        };
        this.$get = ['$$q', '$$asyncCallback', '$rootScope', function($$q, $$asyncCallback, $rootScope) {
          var currentDefer;
          function runAnimationPostDigest(fn) {
            var cancelFn,
                defer = $$q.defer();
            defer.promise.$$cancelFn = function ngAnimateMaybeCancel() {
              cancelFn && cancelFn();
            };
            $rootScope.$$postDigest(function ngAnimatePostDigest() {
              cancelFn = fn(function ngAnimateNotifyComplete() {
                defer.resolve();
              });
            });
            return defer.promise;
          }
          function resolveElementClasses(element, classes) {
            var toAdd = [],
                toRemove = [];
            var hasClasses = createMap();
            forEach((element.attr('class') || '').split(/\s+/), function(className) {
              hasClasses[className] = true;
            });
            forEach(classes, function(status, className) {
              var hasClass = hasClasses[className];
              if (status === false && hasClass) {
                toRemove.push(className);
              } else if (status === true && !hasClass) {
                toAdd.push(className);
              }
            });
            return (toAdd.length + toRemove.length) > 0 && [toAdd.length ? toAdd : null, toRemove.length ? toRemove : null];
          }
          function cachedClassManipulation(cache, classes, op) {
            for (var i = 0,
                ii = classes.length; i < ii; ++i) {
              var className = classes[i];
              cache[className] = op;
            }
          }
          function asyncPromise() {
            if (!currentDefer) {
              currentDefer = $$q.defer();
              $$asyncCallback(function() {
                currentDefer.resolve();
                currentDefer = null;
              });
            }
            return currentDefer.promise;
          }
          function applyStyles(element, options) {
            if (angular.isObject(options)) {
              var styles = extend(options.from || {}, options.to || {});
              element.css(styles);
            }
          }
          return {
            animate: function(element, from, to) {
              applyStyles(element, {
                from: from,
                to: to
              });
              return asyncPromise();
            },
            enter: function(element, parent, after, options) {
              applyStyles(element, options);
              after ? after.after(element) : parent.prepend(element);
              return asyncPromise();
            },
            leave: function(element, options) {
              applyStyles(element, options);
              element.remove();
              return asyncPromise();
            },
            move: function(element, parent, after, options) {
              return this.enter(element, parent, after, options);
            },
            addClass: function(element, className, options) {
              return this.setClass(element, className, [], options);
            },
            $$addClassImmediately: function(element, className, options) {
              element = jqLite(element);
              className = !isString(className) ? (isArray(className) ? className.join(' ') : '') : className;
              forEach(element, function(element) {
                jqLiteAddClass(element, className);
              });
              applyStyles(element, options);
              return asyncPromise();
            },
            removeClass: function(element, className, options) {
              return this.setClass(element, [], className, options);
            },
            $$removeClassImmediately: function(element, className, options) {
              element = jqLite(element);
              className = !isString(className) ? (isArray(className) ? className.join(' ') : '') : className;
              forEach(element, function(element) {
                jqLiteRemoveClass(element, className);
              });
              applyStyles(element, options);
              return asyncPromise();
            },
            setClass: function(element, add, remove, options) {
              var self = this;
              var STORAGE_KEY = '$$animateClasses';
              var createdCache = false;
              element = jqLite(element);
              var cache = element.data(STORAGE_KEY);
              if (!cache) {
                cache = {
                  classes: {},
                  options: options
                };
                createdCache = true;
              } else if (options && cache.options) {
                cache.options = angular.extend(cache.options || {}, options);
              }
              var classes = cache.classes;
              add = isArray(add) ? add : add.split(' ');
              remove = isArray(remove) ? remove : remove.split(' ');
              cachedClassManipulation(classes, add, true);
              cachedClassManipulation(classes, remove, false);
              if (createdCache) {
                cache.promise = runAnimationPostDigest(function(done) {
                  var cache = element.data(STORAGE_KEY);
                  element.removeData(STORAGE_KEY);
                  if (cache) {
                    var classes = resolveElementClasses(element, cache.classes);
                    if (classes) {
                      self.$$setClassImmediately(element, classes[0], classes[1], cache.options);
                    }
                  }
                  done();
                });
                element.data(STORAGE_KEY, cache);
              }
              return cache.promise;
            },
            $$setClassImmediately: function(element, add, remove, options) {
              add && this.$$addClassImmediately(element, add);
              remove && this.$$removeClassImmediately(element, remove);
              applyStyles(element, options);
              return asyncPromise();
            },
            enabled: noop,
            cancel: noop
          };
        }];
      }];
      function $$AsyncCallbackProvider() {
        this.$get = ['$$rAF', '$timeout', function($$rAF, $timeout) {
          return $$rAF.supported ? function(fn) {
            return $$rAF(fn);
          } : function(fn) {
            return $timeout(fn, 0, false);
          };
        }];
      }
      function Browser(window, document, $log, $sniffer) {
        var self = this,
            rawDocument = document[0],
            location = window.location,
            history = window.history,
            setTimeout = window.setTimeout,
            clearTimeout = window.clearTimeout,
            pendingDeferIds = {};
        self.isMock = false;
        var outstandingRequestCount = 0;
        var outstandingRequestCallbacks = [];
        self.$$completeOutstandingRequest = completeOutstandingRequest;
        self.$$incOutstandingRequestCount = function() {
          outstandingRequestCount++;
        };
        function completeOutstandingRequest(fn) {
          try {
            fn.apply(null, sliceArgs(arguments, 1));
          } finally {
            outstandingRequestCount--;
            if (outstandingRequestCount === 0) {
              while (outstandingRequestCallbacks.length) {
                try {
                  outstandingRequestCallbacks.pop()();
                } catch (e) {
                  $log.error(e);
                }
              }
            }
          }
        }
        function getHash(url) {
          var index = url.indexOf('#');
          return index === -1 ? '' : url.substr(index + 1);
        }
        self.notifyWhenNoOutstandingRequests = function(callback) {
          forEach(pollFns, function(pollFn) {
            pollFn();
          });
          if (outstandingRequestCount === 0) {
            callback();
          } else {
            outstandingRequestCallbacks.push(callback);
          }
        };
        var pollFns = [],
            pollTimeout;
        self.addPollFn = function(fn) {
          if (isUndefined(pollTimeout))
            startPoller(100, setTimeout);
          pollFns.push(fn);
          return fn;
        };
        function startPoller(interval, setTimeout) {
          (function check() {
            forEach(pollFns, function(pollFn) {
              pollFn();
            });
            pollTimeout = setTimeout(check, interval);
          })();
        }
        var cachedState,
            lastHistoryState,
            lastBrowserUrl = location.href,
            baseElement = document.find('base'),
            reloadLocation = null;
        cacheState();
        lastHistoryState = cachedState;
        self.url = function(url, replace, state) {
          if (isUndefined(state)) {
            state = null;
          }
          if (location !== window.location)
            location = window.location;
          if (history !== window.history)
            history = window.history;
          if (url) {
            var sameState = lastHistoryState === state;
            if (lastBrowserUrl === url && (!$sniffer.history || sameState)) {
              return self;
            }
            var sameBase = lastBrowserUrl && stripHash(lastBrowserUrl) === stripHash(url);
            lastBrowserUrl = url;
            lastHistoryState = state;
            if ($sniffer.history && (!sameBase || !sameState)) {
              history[replace ? 'replaceState' : 'pushState'](state, '', url);
              cacheState();
              lastHistoryState = cachedState;
            } else {
              if (!sameBase) {
                reloadLocation = url;
              }
              if (replace) {
                location.replace(url);
              } else if (!sameBase) {
                location.href = url;
              } else {
                location.hash = getHash(url);
              }
            }
            return self;
          } else {
            return reloadLocation || location.href.replace(/%27/g, "'");
          }
        };
        self.state = function() {
          return cachedState;
        };
        var urlChangeListeners = [],
            urlChangeInit = false;
        function cacheStateAndFireUrlChange() {
          cacheState();
          fireUrlChange();
        }
        function getCurrentState() {
          try {
            return history.state;
          } catch (e) {}
        }
        var lastCachedState = null;
        function cacheState() {
          cachedState = getCurrentState();
          cachedState = isUndefined(cachedState) ? null : cachedState;
          if (equals(cachedState, lastCachedState)) {
            cachedState = lastCachedState;
          }
          lastCachedState = cachedState;
        }
        function fireUrlChange() {
          if (lastBrowserUrl === self.url() && lastHistoryState === cachedState) {
            return ;
          }
          lastBrowserUrl = self.url();
          lastHistoryState = cachedState;
          forEach(urlChangeListeners, function(listener) {
            listener(self.url(), cachedState);
          });
        }
        self.onUrlChange = function(callback) {
          if (!urlChangeInit) {
            if ($sniffer.history)
              jqLite(window).on('popstate', cacheStateAndFireUrlChange);
            jqLite(window).on('hashchange', cacheStateAndFireUrlChange);
            urlChangeInit = true;
          }
          urlChangeListeners.push(callback);
          return callback;
        };
        self.$$checkUrlChange = fireUrlChange;
        self.baseHref = function() {
          var href = baseElement.attr('href');
          return href ? href.replace(/^(https?\:)?\/\/[^\/]*/, '') : '';
        };
        var lastCookies = {};
        var lastCookieString = '';
        var cookiePath = self.baseHref();
        function safeDecodeURIComponent(str) {
          try {
            return decodeURIComponent(str);
          } catch (e) {
            return str;
          }
        }
        self.cookies = function(name, value) {
          var cookieLength,
              cookieArray,
              cookie,
              i,
              index;
          if (name) {
            if (value === undefined) {
              rawDocument.cookie = encodeURIComponent(name) + "=;path=" + cookiePath + ";expires=Thu, 01 Jan 1970 00:00:00 GMT";
            } else {
              if (isString(value)) {
                cookieLength = (rawDocument.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';path=' + cookiePath).length + 1;
                if (cookieLength > 4096) {
                  $log.warn("Cookie '" + name + "' possibly not set or overflowed because it was too large (" + cookieLength + " > 4096 bytes)!");
                }
              }
            }
          } else {
            if (rawDocument.cookie !== lastCookieString) {
              lastCookieString = rawDocument.cookie;
              cookieArray = lastCookieString.split("; ");
              lastCookies = {};
              for (i = 0; i < cookieArray.length; i++) {
                cookie = cookieArray[i];
                index = cookie.indexOf('=');
                if (index > 0) {
                  name = safeDecodeURIComponent(cookie.substring(0, index));
                  if (lastCookies[name] === undefined) {
                    lastCookies[name] = safeDecodeURIComponent(cookie.substring(index + 1));
                  }
                }
              }
            }
            return lastCookies;
          }
        };
        self.defer = function(fn, delay) {
          var timeoutId;
          outstandingRequestCount++;
          timeoutId = setTimeout(function() {
            delete pendingDeferIds[timeoutId];
            completeOutstandingRequest(fn);
          }, delay || 0);
          pendingDeferIds[timeoutId] = true;
          return timeoutId;
        };
        self.defer.cancel = function(deferId) {
          if (pendingDeferIds[deferId]) {
            delete pendingDeferIds[deferId];
            clearTimeout(deferId);
            completeOutstandingRequest(noop);
            return true;
          }
          return false;
        };
      }
      function $BrowserProvider() {
        this.$get = ['$window', '$log', '$sniffer', '$document', function($window, $log, $sniffer, $document) {
          return new Browser($window, $document, $log, $sniffer);
        }];
      }
      function $CacheFactoryProvider() {
        this.$get = function() {
          var caches = {};
          function cacheFactory(cacheId, options) {
            if (cacheId in caches) {
              throw minErr('$cacheFactory')('iid', "CacheId '{0}' is already taken!", cacheId);
            }
            var size = 0,
                stats = extend({}, options, {id: cacheId}),
                data = {},
                capacity = (options && options.capacity) || Number.MAX_VALUE,
                lruHash = {},
                freshEnd = null,
                staleEnd = null;
            return caches[cacheId] = {
              put: function(key, value) {
                if (capacity < Number.MAX_VALUE) {
                  var lruEntry = lruHash[key] || (lruHash[key] = {key: key});
                  refresh(lruEntry);
                }
                if (isUndefined(value))
                  return ;
                if (!(key in data))
                  size++;
                data[key] = value;
                if (size > capacity) {
                  this.remove(staleEnd.key);
                }
                return value;
              },
              get: function(key) {
                if (capacity < Number.MAX_VALUE) {
                  var lruEntry = lruHash[key];
                  if (!lruEntry)
                    return ;
                  refresh(lruEntry);
                }
                return data[key];
              },
              remove: function(key) {
                if (capacity < Number.MAX_VALUE) {
                  var lruEntry = lruHash[key];
                  if (!lruEntry)
                    return ;
                  if (lruEntry == freshEnd)
                    freshEnd = lruEntry.p;
                  if (lruEntry == staleEnd)
                    staleEnd = lruEntry.n;
                  link(lruEntry.n, lruEntry.p);
                  delete lruHash[key];
                }
                delete data[key];
                size--;
              },
              removeAll: function() {
                data = {};
                size = 0;
                lruHash = {};
                freshEnd = staleEnd = null;
              },
              destroy: function() {
                data = null;
                stats = null;
                lruHash = null;
                delete caches[cacheId];
              },
              info: function() {
                return extend({}, stats, {size: size});
              }
            };
            function refresh(entry) {
              if (entry != freshEnd) {
                if (!staleEnd) {
                  staleEnd = entry;
                } else if (staleEnd == entry) {
                  staleEnd = entry.n;
                }
                link(entry.n, entry.p);
                link(entry, freshEnd);
                freshEnd = entry;
                freshEnd.n = null;
              }
            }
            function link(nextEntry, prevEntry) {
              if (nextEntry != prevEntry) {
                if (nextEntry)
                  nextEntry.p = prevEntry;
                if (prevEntry)
                  prevEntry.n = nextEntry;
              }
            }
          }
          cacheFactory.info = function() {
            var info = {};
            forEach(caches, function(cache, cacheId) {
              info[cacheId] = cache.info();
            });
            return info;
          };
          cacheFactory.get = function(cacheId) {
            return caches[cacheId];
          };
          return cacheFactory;
        };
      }
      function $TemplateCacheProvider() {
        this.$get = ['$cacheFactory', function($cacheFactory) {
          return $cacheFactory('templates');
        }];
      }
      var $compileMinErr = minErr('$compile');
      $CompileProvider.$inject = ['$provide', '$$sanitizeUriProvider'];
      function $CompileProvider($provide, $$sanitizeUriProvider) {
        var hasDirectives = {},
            Suffix = 'Directive',
            COMMENT_DIRECTIVE_REGEXP = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
            CLASS_DIRECTIVE_REGEXP = /(([\w\-]+)(?:\:([^;]+))?;?)/,
            ALL_OR_NOTHING_ATTRS = makeMap('ngSrc,ngSrcset,src,srcset'),
            REQUIRE_PREFIX_REGEXP = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/;
        var EVENT_HANDLER_ATTR_REGEXP = /^(on[a-z]+|formaction)$/;
        function parseIsolateBindings(scope, directiveName) {
          var LOCAL_REGEXP = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/;
          var bindings = {};
          forEach(scope, function(definition, scopeName) {
            var match = definition.match(LOCAL_REGEXP);
            if (!match) {
              throw $compileMinErr('iscp', "Invalid isolate scope definition for directive '{0}'." + " Definition: {... {1}: '{2}' ...}", directiveName, scopeName, definition);
            }
            bindings[scopeName] = {
              mode: match[1][0],
              collection: match[2] === '*',
              optional: match[3] === '?',
              attrName: match[4] || scopeName
            };
          });
          return bindings;
        }
        this.directive = function registerDirective(name, directiveFactory) {
          assertNotHasOwnProperty(name, 'directive');
          if (isString(name)) {
            assertArg(directiveFactory, 'directiveFactory');
            if (!hasDirectives.hasOwnProperty(name)) {
              hasDirectives[name] = [];
              $provide.factory(name + Suffix, ['$injector', '$exceptionHandler', function($injector, $exceptionHandler) {
                var directives = [];
                forEach(hasDirectives[name], function(directiveFactory, index) {
                  try {
                    var directive = $injector.invoke(directiveFactory);
                    if (isFunction(directive)) {
                      directive = {compile: valueFn(directive)};
                    } else if (!directive.compile && directive.link) {
                      directive.compile = valueFn(directive.link);
                    }
                    directive.priority = directive.priority || 0;
                    directive.index = index;
                    directive.name = directive.name || name;
                    directive.require = directive.require || (directive.controller && directive.name);
                    directive.restrict = directive.restrict || 'EA';
                    if (isObject(directive.scope)) {
                      directive.$$isolateBindings = parseIsolateBindings(directive.scope, directive.name);
                    }
                    directives.push(directive);
                  } catch (e) {
                    $exceptionHandler(e);
                  }
                });
                return directives;
              }]);
            }
            hasDirectives[name].push(directiveFactory);
          } else {
            forEach(name, reverseParams(registerDirective));
          }
          return this;
        };
        this.aHrefSanitizationWhitelist = function(regexp) {
          if (isDefined(regexp)) {
            $$sanitizeUriProvider.aHrefSanitizationWhitelist(regexp);
            return this;
          } else {
            return $$sanitizeUriProvider.aHrefSanitizationWhitelist();
          }
        };
        this.imgSrcSanitizationWhitelist = function(regexp) {
          if (isDefined(regexp)) {
            $$sanitizeUriProvider.imgSrcSanitizationWhitelist(regexp);
            return this;
          } else {
            return $$sanitizeUriProvider.imgSrcSanitizationWhitelist();
          }
        };
        var debugInfoEnabled = true;
        this.debugInfoEnabled = function(enabled) {
          if (isDefined(enabled)) {
            debugInfoEnabled = enabled;
            return this;
          }
          return debugInfoEnabled;
        };
        this.$get = ['$injector', '$interpolate', '$exceptionHandler', '$templateRequest', '$parse', '$controller', '$rootScope', '$document', '$sce', '$animate', '$$sanitizeUri', function($injector, $interpolate, $exceptionHandler, $templateRequest, $parse, $controller, $rootScope, $document, $sce, $animate, $$sanitizeUri) {
          var Attributes = function(element, attributesToCopy) {
            if (attributesToCopy) {
              var keys = Object.keys(attributesToCopy);
              var i,
                  l,
                  key;
              for (i = 0, l = keys.length; i < l; i++) {
                key = keys[i];
                this[key] = attributesToCopy[key];
              }
            } else {
              this.$attr = {};
            }
            this.$$element = element;
          };
          Attributes.prototype = {
            $normalize: directiveNormalize,
            $addClass: function(classVal) {
              if (classVal && classVal.length > 0) {
                $animate.addClass(this.$$element, classVal);
              }
            },
            $removeClass: function(classVal) {
              if (classVal && classVal.length > 0) {
                $animate.removeClass(this.$$element, classVal);
              }
            },
            $updateClass: function(newClasses, oldClasses) {
              var toAdd = tokenDifference(newClasses, oldClasses);
              if (toAdd && toAdd.length) {
                $animate.addClass(this.$$element, toAdd);
              }
              var toRemove = tokenDifference(oldClasses, newClasses);
              if (toRemove && toRemove.length) {
                $animate.removeClass(this.$$element, toRemove);
              }
            },
            $set: function(key, value, writeAttr, attrName) {
              var node = this.$$element[0],
                  booleanKey = getBooleanAttrName(node, key),
                  aliasedKey = getAliasedAttrName(node, key),
                  observer = key,
                  nodeName;
              if (booleanKey) {
                this.$$element.prop(key, value);
                attrName = booleanKey;
              } else if (aliasedKey) {
                this[aliasedKey] = value;
                observer = aliasedKey;
              }
              this[key] = value;
              if (attrName) {
                this.$attr[key] = attrName;
              } else {
                attrName = this.$attr[key];
                if (!attrName) {
                  this.$attr[key] = attrName = snake_case(key, '-');
                }
              }
              nodeName = nodeName_(this.$$element);
              if ((nodeName === 'a' && key === 'href') || (nodeName === 'img' && key === 'src')) {
                this[key] = value = $$sanitizeUri(value, key === 'src');
              } else if (nodeName === 'img' && key === 'srcset') {
                var result = "";
                var trimmedSrcset = trim(value);
                var srcPattern = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/;
                var pattern = /\s/.test(trimmedSrcset) ? srcPattern : /(,)/;
                var rawUris = trimmedSrcset.split(pattern);
                var nbrUrisWith2parts = Math.floor(rawUris.length / 2);
                for (var i = 0; i < nbrUrisWith2parts; i++) {
                  var innerIdx = i * 2;
                  result += $$sanitizeUri(trim(rawUris[innerIdx]), true);
                  result += (" " + trim(rawUris[innerIdx + 1]));
                }
                var lastTuple = trim(rawUris[i * 2]).split(/\s/);
                result += $$sanitizeUri(trim(lastTuple[0]), true);
                if (lastTuple.length === 2) {
                  result += (" " + trim(lastTuple[1]));
                }
                this[key] = value = result;
              }
              if (writeAttr !== false) {
                if (value === null || value === undefined) {
                  this.$$element.removeAttr(attrName);
                } else {
                  this.$$element.attr(attrName, value);
                }
              }
              var $$observers = this.$$observers;
              $$observers && forEach($$observers[observer], function(fn) {
                try {
                  fn(value);
                } catch (e) {
                  $exceptionHandler(e);
                }
              });
            },
            $observe: function(key, fn) {
              var attrs = this,
                  $$observers = (attrs.$$observers || (attrs.$$observers = createMap())),
                  listeners = ($$observers[key] || ($$observers[key] = []));
              listeners.push(fn);
              $rootScope.$evalAsync(function() {
                if (!listeners.$$inter && attrs.hasOwnProperty(key)) {
                  fn(attrs[key]);
                }
              });
              return function() {
                arrayRemove(listeners, fn);
              };
            }
          };
          function safeAddClass($element, className) {
            try {
              $element.addClass(className);
            } catch (e) {}
          }
          var startSymbol = $interpolate.startSymbol(),
              endSymbol = $interpolate.endSymbol(),
              denormalizeTemplate = (startSymbol == '{{' || endSymbol == '}}') ? identity : function denormalizeTemplate(template) {
                return template.replace(/\{\{/g, startSymbol).replace(/}}/g, endSymbol);
              },
              NG_ATTR_BINDING = /^ngAttr[A-Z]/;
          compile.$$addBindingInfo = debugInfoEnabled ? function $$addBindingInfo($element, binding) {
            var bindings = $element.data('$binding') || [];
            if (isArray(binding)) {
              bindings = bindings.concat(binding);
            } else {
              bindings.push(binding);
            }
            $element.data('$binding', bindings);
          } : noop;
          compile.$$addBindingClass = debugInfoEnabled ? function $$addBindingClass($element) {
            safeAddClass($element, 'ng-binding');
          } : noop;
          compile.$$addScopeInfo = debugInfoEnabled ? function $$addScopeInfo($element, scope, isolated, noTemplate) {
            var dataName = isolated ? (noTemplate ? '$isolateScopeNoTemplate' : '$isolateScope') : '$scope';
            $element.data(dataName, scope);
          } : noop;
          compile.$$addScopeClass = debugInfoEnabled ? function $$addScopeClass($element, isolated) {
            safeAddClass($element, isolated ? 'ng-isolate-scope' : 'ng-scope');
          } : noop;
          return compile;
          function compile($compileNodes, transcludeFn, maxPriority, ignoreDirective, previousCompileContext) {
            if (!($compileNodes instanceof jqLite)) {
              $compileNodes = jqLite($compileNodes);
            }
            forEach($compileNodes, function(node, index) {
              if (node.nodeType == NODE_TYPE_TEXT && node.nodeValue.match(/\S+/)) {
                $compileNodes[index] = jqLite(node).wrap('<span></span>').parent()[0];
              }
            });
            var compositeLinkFn = compileNodes($compileNodes, transcludeFn, $compileNodes, maxPriority, ignoreDirective, previousCompileContext);
            compile.$$addScopeClass($compileNodes);
            var namespace = null;
            return function publicLinkFn(scope, cloneConnectFn, options) {
              assertArg(scope, 'scope');
              options = options || {};
              var parentBoundTranscludeFn = options.parentBoundTranscludeFn,
                  transcludeControllers = options.transcludeControllers,
                  futureParentElement = options.futureParentElement;
              if (parentBoundTranscludeFn && parentBoundTranscludeFn.$$boundTransclude) {
                parentBoundTranscludeFn = parentBoundTranscludeFn.$$boundTransclude;
              }
              if (!namespace) {
                namespace = detectNamespaceForChildElements(futureParentElement);
              }
              var $linkNode;
              if (namespace !== 'html') {
                $linkNode = jqLite(wrapTemplate(namespace, jqLite('<div>').append($compileNodes).html()));
              } else if (cloneConnectFn) {
                $linkNode = JQLitePrototype.clone.call($compileNodes);
              } else {
                $linkNode = $compileNodes;
              }
              if (transcludeControllers) {
                for (var controllerName in transcludeControllers) {
                  $linkNode.data('$' + controllerName + 'Controller', transcludeControllers[controllerName].instance);
                }
              }
              compile.$$addScopeInfo($linkNode, scope);
              if (cloneConnectFn)
                cloneConnectFn($linkNode, scope);
              if (compositeLinkFn)
                compositeLinkFn(scope, $linkNode, $linkNode, parentBoundTranscludeFn);
              return $linkNode;
            };
          }
          function detectNamespaceForChildElements(parentElement) {
            var node = parentElement && parentElement[0];
            if (!node) {
              return 'html';
            } else {
              return nodeName_(node) !== 'foreignobject' && node.toString().match(/SVG/) ? 'svg' : 'html';
            }
          }
          function compileNodes(nodeList, transcludeFn, $rootElement, maxPriority, ignoreDirective, previousCompileContext) {
            var linkFns = [],
                attrs,
                directives,
                nodeLinkFn,
                childNodes,
                childLinkFn,
                linkFnFound,
                nodeLinkFnFound;
            for (var i = 0; i < nodeList.length; i++) {
              attrs = new Attributes();
              directives = collectDirectives(nodeList[i], [], attrs, i === 0 ? maxPriority : undefined, ignoreDirective);
              nodeLinkFn = (directives.length) ? applyDirectivesToNode(directives, nodeList[i], attrs, transcludeFn, $rootElement, null, [], [], previousCompileContext) : null;
              if (nodeLinkFn && nodeLinkFn.scope) {
                compile.$$addScopeClass(attrs.$$element);
              }
              childLinkFn = (nodeLinkFn && nodeLinkFn.terminal || !(childNodes = nodeList[i].childNodes) || !childNodes.length) ? null : compileNodes(childNodes, nodeLinkFn ? ((nodeLinkFn.transcludeOnThisElement || !nodeLinkFn.templateOnThisElement) && nodeLinkFn.transclude) : transcludeFn);
              if (nodeLinkFn || childLinkFn) {
                linkFns.push(i, nodeLinkFn, childLinkFn);
                linkFnFound = true;
                nodeLinkFnFound = nodeLinkFnFound || nodeLinkFn;
              }
              previousCompileContext = null;
            }
            return linkFnFound ? compositeLinkFn : null;
            function compositeLinkFn(scope, nodeList, $rootElement, parentBoundTranscludeFn) {
              var nodeLinkFn,
                  childLinkFn,
                  node,
                  childScope,
                  i,
                  ii,
                  idx,
                  childBoundTranscludeFn;
              var stableNodeList;
              if (nodeLinkFnFound) {
                var nodeListLength = nodeList.length;
                stableNodeList = new Array(nodeListLength);
                for (i = 0; i < linkFns.length; i += 3) {
                  idx = linkFns[i];
                  stableNodeList[idx] = nodeList[idx];
                }
              } else {
                stableNodeList = nodeList;
              }
              for (i = 0, ii = linkFns.length; i < ii; ) {
                node = stableNodeList[linkFns[i++]];
                nodeLinkFn = linkFns[i++];
                childLinkFn = linkFns[i++];
                if (nodeLinkFn) {
                  if (nodeLinkFn.scope) {
                    childScope = scope.$new();
                    compile.$$addScopeInfo(jqLite(node), childScope);
                  } else {
                    childScope = scope;
                  }
                  if (nodeLinkFn.transcludeOnThisElement) {
                    childBoundTranscludeFn = createBoundTranscludeFn(scope, nodeLinkFn.transclude, parentBoundTranscludeFn, nodeLinkFn.elementTranscludeOnThisElement);
                  } else if (!nodeLinkFn.templateOnThisElement && parentBoundTranscludeFn) {
                    childBoundTranscludeFn = parentBoundTranscludeFn;
                  } else if (!parentBoundTranscludeFn && transcludeFn) {
                    childBoundTranscludeFn = createBoundTranscludeFn(scope, transcludeFn);
                  } else {
                    childBoundTranscludeFn = null;
                  }
                  nodeLinkFn(childLinkFn, childScope, node, $rootElement, childBoundTranscludeFn);
                } else if (childLinkFn) {
                  childLinkFn(scope, node.childNodes, undefined, parentBoundTranscludeFn);
                }
              }
            }
          }
          function createBoundTranscludeFn(scope, transcludeFn, previousBoundTranscludeFn, elementTransclusion) {
            var boundTranscludeFn = function(transcludedScope, cloneFn, controllers, futureParentElement, containingScope) {
              if (!transcludedScope) {
                transcludedScope = scope.$new(false, containingScope);
                transcludedScope.$$transcluded = true;
              }
              return transcludeFn(transcludedScope, cloneFn, {
                parentBoundTranscludeFn: previousBoundTranscludeFn,
                transcludeControllers: controllers,
                futureParentElement: futureParentElement
              });
            };
            return boundTranscludeFn;
          }
          function collectDirectives(node, directives, attrs, maxPriority, ignoreDirective) {
            var nodeType = node.nodeType,
                attrsMap = attrs.$attr,
                match,
                className;
            switch (nodeType) {
              case NODE_TYPE_ELEMENT:
                addDirective(directives, directiveNormalize(nodeName_(node)), 'E', maxPriority, ignoreDirective);
                for (var attr,
                    name,
                    nName,
                    ngAttrName,
                    value,
                    isNgAttr,
                    nAttrs = node.attributes,
                    j = 0,
                    jj = nAttrs && nAttrs.length; j < jj; j++) {
                  var attrStartName = false;
                  var attrEndName = false;
                  attr = nAttrs[j];
                  name = attr.name;
                  value = trim(attr.value);
                  ngAttrName = directiveNormalize(name);
                  if (isNgAttr = NG_ATTR_BINDING.test(ngAttrName)) {
                    name = name.replace(PREFIX_REGEXP, '').substr(8).replace(/_(.)/g, function(match, letter) {
                      return letter.toUpperCase();
                    });
                  }
                  var directiveNName = ngAttrName.replace(/(Start|End)$/, '');
                  if (directiveIsMultiElement(directiveNName)) {
                    if (ngAttrName === directiveNName + 'Start') {
                      attrStartName = name;
                      attrEndName = name.substr(0, name.length - 5) + 'end';
                      name = name.substr(0, name.length - 6);
                    }
                  }
                  nName = directiveNormalize(name.toLowerCase());
                  attrsMap[nName] = name;
                  if (isNgAttr || !attrs.hasOwnProperty(nName)) {
                    attrs[nName] = value;
                    if (getBooleanAttrName(node, nName)) {
                      attrs[nName] = true;
                    }
                  }
                  addAttrInterpolateDirective(node, directives, value, nName, isNgAttr);
                  addDirective(directives, nName, 'A', maxPriority, ignoreDirective, attrStartName, attrEndName);
                }
                className = node.className;
                if (isObject(className)) {
                  className = className.animVal;
                }
                if (isString(className) && className !== '') {
                  while (match = CLASS_DIRECTIVE_REGEXP.exec(className)) {
                    nName = directiveNormalize(match[2]);
                    if (addDirective(directives, nName, 'C', maxPriority, ignoreDirective)) {
                      attrs[nName] = trim(match[3]);
                    }
                    className = className.substr(match.index + match[0].length);
                  }
                }
                break;
              case NODE_TYPE_TEXT:
                addTextInterpolateDirective(directives, node.nodeValue);
                break;
              case NODE_TYPE_COMMENT:
                try {
                  match = COMMENT_DIRECTIVE_REGEXP.exec(node.nodeValue);
                  if (match) {
                    nName = directiveNormalize(match[1]);
                    if (addDirective(directives, nName, 'M', maxPriority, ignoreDirective)) {
                      attrs[nName] = trim(match[2]);
                    }
                  }
                } catch (e) {}
                break;
            }
            directives.sort(byPriority);
            return directives;
          }
          function groupScan(node, attrStart, attrEnd) {
            var nodes = [];
            var depth = 0;
            if (attrStart && node.hasAttribute && node.hasAttribute(attrStart)) {
              do {
                if (!node) {
                  throw $compileMinErr('uterdir', "Unterminated attribute, found '{0}' but no matching '{1}' found.", attrStart, attrEnd);
                }
                if (node.nodeType == NODE_TYPE_ELEMENT) {
                  if (node.hasAttribute(attrStart))
                    depth++;
                  if (node.hasAttribute(attrEnd))
                    depth--;
                }
                nodes.push(node);
                node = node.nextSibling;
              } while (depth > 0);
            } else {
              nodes.push(node);
            }
            return jqLite(nodes);
          }
          function groupElementsLinkFnWrapper(linkFn, attrStart, attrEnd) {
            return function(scope, element, attrs, controllers, transcludeFn) {
              element = groupScan(element[0], attrStart, attrEnd);
              return linkFn(scope, element, attrs, controllers, transcludeFn);
            };
          }
          function applyDirectivesToNode(directives, compileNode, templateAttrs, transcludeFn, jqCollection, originalReplaceDirective, preLinkFns, postLinkFns, previousCompileContext) {
            previousCompileContext = previousCompileContext || {};
            var terminalPriority = -Number.MAX_VALUE,
                newScopeDirective,
                controllerDirectives = previousCompileContext.controllerDirectives,
                controllers,
                newIsolateScopeDirective = previousCompileContext.newIsolateScopeDirective,
                templateDirective = previousCompileContext.templateDirective,
                nonTlbTranscludeDirective = previousCompileContext.nonTlbTranscludeDirective,
                hasTranscludeDirective = false,
                hasTemplate = false,
                hasElementTranscludeDirective = previousCompileContext.hasElementTranscludeDirective,
                $compileNode = templateAttrs.$$element = jqLite(compileNode),
                directive,
                directiveName,
                $template,
                replaceDirective = originalReplaceDirective,
                childTranscludeFn = transcludeFn,
                linkFn,
                directiveValue;
            for (var i = 0,
                ii = directives.length; i < ii; i++) {
              directive = directives[i];
              var attrStart = directive.$$start;
              var attrEnd = directive.$$end;
              if (attrStart) {
                $compileNode = groupScan(compileNode, attrStart, attrEnd);
              }
              $template = undefined;
              if (terminalPriority > directive.priority) {
                break;
              }
              if (directiveValue = directive.scope) {
                if (!directive.templateUrl) {
                  if (isObject(directiveValue)) {
                    assertNoDuplicate('new/isolated scope', newIsolateScopeDirective || newScopeDirective, directive, $compileNode);
                    newIsolateScopeDirective = directive;
                  } else {
                    assertNoDuplicate('new/isolated scope', newIsolateScopeDirective, directive, $compileNode);
                  }
                }
                newScopeDirective = newScopeDirective || directive;
              }
              directiveName = directive.name;
              if (!directive.templateUrl && directive.controller) {
                directiveValue = directive.controller;
                controllerDirectives = controllerDirectives || {};
                assertNoDuplicate("'" + directiveName + "' controller", controllerDirectives[directiveName], directive, $compileNode);
                controllerDirectives[directiveName] = directive;
              }
              if (directiveValue = directive.transclude) {
                hasTranscludeDirective = true;
                if (!directive.$$tlb) {
                  assertNoDuplicate('transclusion', nonTlbTranscludeDirective, directive, $compileNode);
                  nonTlbTranscludeDirective = directive;
                }
                if (directiveValue == 'element') {
                  hasElementTranscludeDirective = true;
                  terminalPriority = directive.priority;
                  $template = $compileNode;
                  $compileNode = templateAttrs.$$element = jqLite(document.createComment(' ' + directiveName + ': ' + templateAttrs[directiveName] + ' '));
                  compileNode = $compileNode[0];
                  replaceWith(jqCollection, sliceArgs($template), compileNode);
                  childTranscludeFn = compile($template, transcludeFn, terminalPriority, replaceDirective && replaceDirective.name, {nonTlbTranscludeDirective: nonTlbTranscludeDirective});
                } else {
                  $template = jqLite(jqLiteClone(compileNode)).contents();
                  $compileNode.empty();
                  childTranscludeFn = compile($template, transcludeFn);
                }
              }
              if (directive.template) {
                hasTemplate = true;
                assertNoDuplicate('template', templateDirective, directive, $compileNode);
                templateDirective = directive;
                directiveValue = (isFunction(directive.template)) ? directive.template($compileNode, templateAttrs) : directive.template;
                directiveValue = denormalizeTemplate(directiveValue);
                if (directive.replace) {
                  replaceDirective = directive;
                  if (jqLiteIsTextNode(directiveValue)) {
                    $template = [];
                  } else {
                    $template = removeComments(wrapTemplate(directive.templateNamespace, trim(directiveValue)));
                  }
                  compileNode = $template[0];
                  if ($template.length != 1 || compileNode.nodeType !== NODE_TYPE_ELEMENT) {
                    throw $compileMinErr('tplrt', "Template for directive '{0}' must have exactly one root element. {1}", directiveName, '');
                  }
                  replaceWith(jqCollection, $compileNode, compileNode);
                  var newTemplateAttrs = {$attr: {}};
                  var templateDirectives = collectDirectives(compileNode, [], newTemplateAttrs);
                  var unprocessedDirectives = directives.splice(i + 1, directives.length - (i + 1));
                  if (newIsolateScopeDirective) {
                    markDirectivesAsIsolate(templateDirectives);
                  }
                  directives = directives.concat(templateDirectives).concat(unprocessedDirectives);
                  mergeTemplateAttributes(templateAttrs, newTemplateAttrs);
                  ii = directives.length;
                } else {
                  $compileNode.html(directiveValue);
                }
              }
              if (directive.templateUrl) {
                hasTemplate = true;
                assertNoDuplicate('template', templateDirective, directive, $compileNode);
                templateDirective = directive;
                if (directive.replace) {
                  replaceDirective = directive;
                }
                nodeLinkFn = compileTemplateUrl(directives.splice(i, directives.length - i), $compileNode, templateAttrs, jqCollection, hasTranscludeDirective && childTranscludeFn, preLinkFns, postLinkFns, {
                  controllerDirectives: controllerDirectives,
                  newIsolateScopeDirective: newIsolateScopeDirective,
                  templateDirective: templateDirective,
                  nonTlbTranscludeDirective: nonTlbTranscludeDirective
                });
                ii = directives.length;
              } else if (directive.compile) {
                try {
                  linkFn = directive.compile($compileNode, templateAttrs, childTranscludeFn);
                  if (isFunction(linkFn)) {
                    addLinkFns(null, linkFn, attrStart, attrEnd);
                  } else if (linkFn) {
                    addLinkFns(linkFn.pre, linkFn.post, attrStart, attrEnd);
                  }
                } catch (e) {
                  $exceptionHandler(e, startingTag($compileNode));
                }
              }
              if (directive.terminal) {
                nodeLinkFn.terminal = true;
                terminalPriority = Math.max(terminalPriority, directive.priority);
              }
            }
            nodeLinkFn.scope = newScopeDirective && newScopeDirective.scope === true;
            nodeLinkFn.transcludeOnThisElement = hasTranscludeDirective;
            nodeLinkFn.elementTranscludeOnThisElement = hasElementTranscludeDirective;
            nodeLinkFn.templateOnThisElement = hasTemplate;
            nodeLinkFn.transclude = childTranscludeFn;
            previousCompileContext.hasElementTranscludeDirective = hasElementTranscludeDirective;
            return nodeLinkFn;
            function addLinkFns(pre, post, attrStart, attrEnd) {
              if (pre) {
                if (attrStart)
                  pre = groupElementsLinkFnWrapper(pre, attrStart, attrEnd);
                pre.require = directive.require;
                pre.directiveName = directiveName;
                if (newIsolateScopeDirective === directive || directive.$$isolateScope) {
                  pre = cloneAndAnnotateFn(pre, {isolateScope: true});
                }
                preLinkFns.push(pre);
              }
              if (post) {
                if (attrStart)
                  post = groupElementsLinkFnWrapper(post, attrStart, attrEnd);
                post.require = directive.require;
                post.directiveName = directiveName;
                if (newIsolateScopeDirective === directive || directive.$$isolateScope) {
                  post = cloneAndAnnotateFn(post, {isolateScope: true});
                }
                postLinkFns.push(post);
              }
            }
            function getControllers(directiveName, require, $element, elementControllers) {
              var value,
                  retrievalMethod = 'data',
                  optional = false;
              var $searchElement = $element;
              var match;
              if (isString(require)) {
                match = require.match(REQUIRE_PREFIX_REGEXP);
                require = require.substring(match[0].length);
                if (match[3]) {
                  if (match[1])
                    match[3] = null;
                  else
                    match[1] = match[3];
                }
                if (match[1] === '^') {
                  retrievalMethod = 'inheritedData';
                } else if (match[1] === '^^') {
                  retrievalMethod = 'inheritedData';
                  $searchElement = $element.parent();
                }
                if (match[2] === '?') {
                  optional = true;
                }
                value = null;
                if (elementControllers && retrievalMethod === 'data') {
                  if (value = elementControllers[require]) {
                    value = value.instance;
                  }
                }
                value = value || $searchElement[retrievalMethod]('$' + require + 'Controller');
                if (!value && !optional) {
                  throw $compileMinErr('ctreq', "Controller '{0}', required by directive '{1}', can't be found!", require, directiveName);
                }
                return value || null;
              } else if (isArray(require)) {
                value = [];
                forEach(require, function(require) {
                  value.push(getControllers(directiveName, require, $element, elementControllers));
                });
              }
              return value;
            }
            function nodeLinkFn(childLinkFn, scope, linkNode, $rootElement, boundTranscludeFn) {
              var i,
                  ii,
                  linkFn,
                  controller,
                  isolateScope,
                  elementControllers,
                  transcludeFn,
                  $element,
                  attrs;
              if (compileNode === linkNode) {
                attrs = templateAttrs;
                $element = templateAttrs.$$element;
              } else {
                $element = jqLite(linkNode);
                attrs = new Attributes($element, templateAttrs);
              }
              if (newIsolateScopeDirective) {
                isolateScope = scope.$new(true);
              }
              if (boundTranscludeFn) {
                transcludeFn = controllersBoundTransclude;
                transcludeFn.$$boundTransclude = boundTranscludeFn;
              }
              if (controllerDirectives) {
                controllers = {};
                elementControllers = {};
                forEach(controllerDirectives, function(directive) {
                  var locals = {
                    $scope: directive === newIsolateScopeDirective || directive.$$isolateScope ? isolateScope : scope,
                    $element: $element,
                    $attrs: attrs,
                    $transclude: transcludeFn
                  },
                      controllerInstance;
                  controller = directive.controller;
                  if (controller == '@') {
                    controller = attrs[directive.name];
                  }
                  controllerInstance = $controller(controller, locals, true, directive.controllerAs);
                  elementControllers[directive.name] = controllerInstance;
                  if (!hasElementTranscludeDirective) {
                    $element.data('$' + directive.name + 'Controller', controllerInstance.instance);
                  }
                  controllers[directive.name] = controllerInstance;
                });
              }
              if (newIsolateScopeDirective) {
                compile.$$addScopeInfo($element, isolateScope, true, !(templateDirective && (templateDirective === newIsolateScopeDirective || templateDirective === newIsolateScopeDirective.$$originalDirective)));
                compile.$$addScopeClass($element, true);
                var isolateScopeController = controllers && controllers[newIsolateScopeDirective.name];
                var isolateBindingContext = isolateScope;
                if (isolateScopeController && isolateScopeController.identifier && newIsolateScopeDirective.bindToController === true) {
                  isolateBindingContext = isolateScopeController.instance;
                }
                forEach(isolateScope.$$isolateBindings = newIsolateScopeDirective.$$isolateBindings, function(definition, scopeName) {
                  var attrName = definition.attrName,
                      optional = definition.optional,
                      mode = definition.mode,
                      lastValue,
                      parentGet,
                      parentSet,
                      compare;
                  switch (mode) {
                    case '@':
                      attrs.$observe(attrName, function(value) {
                        isolateBindingContext[scopeName] = value;
                      });
                      attrs.$$observers[attrName].$$scope = scope;
                      if (attrs[attrName]) {
                        isolateBindingContext[scopeName] = $interpolate(attrs[attrName])(scope);
                      }
                      break;
                    case '=':
                      if (optional && !attrs[attrName]) {
                        return ;
                      }
                      parentGet = $parse(attrs[attrName]);
                      if (parentGet.literal) {
                        compare = equals;
                      } else {
                        compare = function(a, b) {
                          return a === b || (a !== a && b !== b);
                        };
                      }
                      parentSet = parentGet.assign || function() {
                        lastValue = isolateBindingContext[scopeName] = parentGet(scope);
                        throw $compileMinErr('nonassign', "Expression '{0}' used with directive '{1}' is non-assignable!", attrs[attrName], newIsolateScopeDirective.name);
                      };
                      lastValue = isolateBindingContext[scopeName] = parentGet(scope);
                      var parentValueWatch = function parentValueWatch(parentValue) {
                        if (!compare(parentValue, isolateBindingContext[scopeName])) {
                          if (!compare(parentValue, lastValue)) {
                            isolateBindingContext[scopeName] = parentValue;
                          } else {
                            parentSet(scope, parentValue = isolateBindingContext[scopeName]);
                          }
                        }
                        return lastValue = parentValue;
                      };
                      parentValueWatch.$stateful = true;
                      var unwatch;
                      if (definition.collection) {
                        unwatch = scope.$watchCollection(attrs[attrName], parentValueWatch);
                      } else {
                        unwatch = scope.$watch($parse(attrs[attrName], parentValueWatch), null, parentGet.literal);
                      }
                      isolateScope.$on('$destroy', unwatch);
                      break;
                    case '&':
                      parentGet = $parse(attrs[attrName]);
                      isolateBindingContext[scopeName] = function(locals) {
                        return parentGet(scope, locals);
                      };
                      break;
                  }
                });
              }
              if (controllers) {
                forEach(controllers, function(controller) {
                  controller();
                });
                controllers = null;
              }
              for (i = 0, ii = preLinkFns.length; i < ii; i++) {
                linkFn = preLinkFns[i];
                invokeLinkFn(linkFn, linkFn.isolateScope ? isolateScope : scope, $element, attrs, linkFn.require && getControllers(linkFn.directiveName, linkFn.require, $element, elementControllers), transcludeFn);
              }
              var scopeToChild = scope;
              if (newIsolateScopeDirective && (newIsolateScopeDirective.template || newIsolateScopeDirective.templateUrl === null)) {
                scopeToChild = isolateScope;
              }
              childLinkFn && childLinkFn(scopeToChild, linkNode.childNodes, undefined, boundTranscludeFn);
              for (i = postLinkFns.length - 1; i >= 0; i--) {
                linkFn = postLinkFns[i];
                invokeLinkFn(linkFn, linkFn.isolateScope ? isolateScope : scope, $element, attrs, linkFn.require && getControllers(linkFn.directiveName, linkFn.require, $element, elementControllers), transcludeFn);
              }
              function controllersBoundTransclude(scope, cloneAttachFn, futureParentElement) {
                var transcludeControllers;
                if (!isScope(scope)) {
                  futureParentElement = cloneAttachFn;
                  cloneAttachFn = scope;
                  scope = undefined;
                }
                if (hasElementTranscludeDirective) {
                  transcludeControllers = elementControllers;
                }
                if (!futureParentElement) {
                  futureParentElement = hasElementTranscludeDirective ? $element.parent() : $element;
                }
                return boundTranscludeFn(scope, cloneAttachFn, transcludeControllers, futureParentElement, scopeToChild);
              }
            }
          }
          function markDirectivesAsIsolate(directives) {
            for (var j = 0,
                jj = directives.length; j < jj; j++) {
              directives[j] = inherit(directives[j], {$$isolateScope: true});
            }
          }
          function addDirective(tDirectives, name, location, maxPriority, ignoreDirective, startAttrName, endAttrName) {
            if (name === ignoreDirective)
              return null;
            var match = null;
            if (hasDirectives.hasOwnProperty(name)) {
              for (var directive,
                  directives = $injector.get(name + Suffix),
                  i = 0,
                  ii = directives.length; i < ii; i++) {
                try {
                  directive = directives[i];
                  if ((maxPriority === undefined || maxPriority > directive.priority) && directive.restrict.indexOf(location) != -1) {
                    if (startAttrName) {
                      directive = inherit(directive, {
                        $$start: startAttrName,
                        $$end: endAttrName
                      });
                    }
                    tDirectives.push(directive);
                    match = directive;
                  }
                } catch (e) {
                  $exceptionHandler(e);
                }
              }
            }
            return match;
          }
          function directiveIsMultiElement(name) {
            if (hasDirectives.hasOwnProperty(name)) {
              for (var directive,
                  directives = $injector.get(name + Suffix),
                  i = 0,
                  ii = directives.length; i < ii; i++) {
                directive = directives[i];
                if (directive.multiElement) {
                  return true;
                }
              }
            }
            return false;
          }
          function mergeTemplateAttributes(dst, src) {
            var srcAttr = src.$attr,
                dstAttr = dst.$attr,
                $element = dst.$$element;
            forEach(dst, function(value, key) {
              if (key.charAt(0) != '$') {
                if (src[key] && src[key] !== value) {
                  value += (key === 'style' ? ';' : ' ') + src[key];
                }
                dst.$set(key, value, true, srcAttr[key]);
              }
            });
            forEach(src, function(value, key) {
              if (key == 'class') {
                safeAddClass($element, value);
                dst['class'] = (dst['class'] ? dst['class'] + ' ' : '') + value;
              } else if (key == 'style') {
                $element.attr('style', $element.attr('style') + ';' + value);
                dst['style'] = (dst['style'] ? dst['style'] + ';' : '') + value;
              } else if (key.charAt(0) != '$' && !dst.hasOwnProperty(key)) {
                dst[key] = value;
                dstAttr[key] = srcAttr[key];
              }
            });
          }
          function compileTemplateUrl(directives, $compileNode, tAttrs, $rootElement, childTranscludeFn, preLinkFns, postLinkFns, previousCompileContext) {
            var linkQueue = [],
                afterTemplateNodeLinkFn,
                afterTemplateChildLinkFn,
                beforeTemplateCompileNode = $compileNode[0],
                origAsyncDirective = directives.shift(),
                derivedSyncDirective = inherit(origAsyncDirective, {
                  templateUrl: null,
                  transclude: null,
                  replace: null,
                  $$originalDirective: origAsyncDirective
                }),
                templateUrl = (isFunction(origAsyncDirective.templateUrl)) ? origAsyncDirective.templateUrl($compileNode, tAttrs) : origAsyncDirective.templateUrl,
                templateNamespace = origAsyncDirective.templateNamespace;
            $compileNode.empty();
            $templateRequest($sce.getTrustedResourceUrl(templateUrl)).then(function(content) {
              var compileNode,
                  tempTemplateAttrs,
                  $template,
                  childBoundTranscludeFn;
              content = denormalizeTemplate(content);
              if (origAsyncDirective.replace) {
                if (jqLiteIsTextNode(content)) {
                  $template = [];
                } else {
                  $template = removeComments(wrapTemplate(templateNamespace, trim(content)));
                }
                compileNode = $template[0];
                if ($template.length != 1 || compileNode.nodeType !== NODE_TYPE_ELEMENT) {
                  throw $compileMinErr('tplrt', "Template for directive '{0}' must have exactly one root element. {1}", origAsyncDirective.name, templateUrl);
                }
                tempTemplateAttrs = {$attr: {}};
                replaceWith($rootElement, $compileNode, compileNode);
                var templateDirectives = collectDirectives(compileNode, [], tempTemplateAttrs);
                if (isObject(origAsyncDirective.scope)) {
                  markDirectivesAsIsolate(templateDirectives);
                }
                directives = templateDirectives.concat(directives);
                mergeTemplateAttributes(tAttrs, tempTemplateAttrs);
              } else {
                compileNode = beforeTemplateCompileNode;
                $compileNode.html(content);
              }
              directives.unshift(derivedSyncDirective);
              afterTemplateNodeLinkFn = applyDirectivesToNode(directives, compileNode, tAttrs, childTranscludeFn, $compileNode, origAsyncDirective, preLinkFns, postLinkFns, previousCompileContext);
              forEach($rootElement, function(node, i) {
                if (node == compileNode) {
                  $rootElement[i] = $compileNode[0];
                }
              });
              afterTemplateChildLinkFn = compileNodes($compileNode[0].childNodes, childTranscludeFn);
              while (linkQueue.length) {
                var scope = linkQueue.shift(),
                    beforeTemplateLinkNode = linkQueue.shift(),
                    linkRootElement = linkQueue.shift(),
                    boundTranscludeFn = linkQueue.shift(),
                    linkNode = $compileNode[0];
                if (scope.$$destroyed)
                  continue;
                if (beforeTemplateLinkNode !== beforeTemplateCompileNode) {
                  var oldClasses = beforeTemplateLinkNode.className;
                  if (!(previousCompileContext.hasElementTranscludeDirective && origAsyncDirective.replace)) {
                    linkNode = jqLiteClone(compileNode);
                  }
                  replaceWith(linkRootElement, jqLite(beforeTemplateLinkNode), linkNode);
                  safeAddClass(jqLite(linkNode), oldClasses);
                }
                if (afterTemplateNodeLinkFn.transcludeOnThisElement) {
                  childBoundTranscludeFn = createBoundTranscludeFn(scope, afterTemplateNodeLinkFn.transclude, boundTranscludeFn);
                } else {
                  childBoundTranscludeFn = boundTranscludeFn;
                }
                afterTemplateNodeLinkFn(afterTemplateChildLinkFn, scope, linkNode, $rootElement, childBoundTranscludeFn);
              }
              linkQueue = null;
            });
            return function delayedNodeLinkFn(ignoreChildLinkFn, scope, node, rootElement, boundTranscludeFn) {
              var childBoundTranscludeFn = boundTranscludeFn;
              if (scope.$$destroyed)
                return ;
              if (linkQueue) {
                linkQueue.push(scope, node, rootElement, childBoundTranscludeFn);
              } else {
                if (afterTemplateNodeLinkFn.transcludeOnThisElement) {
                  childBoundTranscludeFn = createBoundTranscludeFn(scope, afterTemplateNodeLinkFn.transclude, boundTranscludeFn);
                }
                afterTemplateNodeLinkFn(afterTemplateChildLinkFn, scope, node, rootElement, childBoundTranscludeFn);
              }
            };
          }
          function byPriority(a, b) {
            var diff = b.priority - a.priority;
            if (diff !== 0)
              return diff;
            if (a.name !== b.name)
              return (a.name < b.name) ? -1 : 1;
            return a.index - b.index;
          }
          function assertNoDuplicate(what, previousDirective, directive, element) {
            if (previousDirective) {
              throw $compileMinErr('multidir', 'Multiple directives [{0}, {1}] asking for {2} on: {3}', previousDirective.name, directive.name, what, startingTag(element));
            }
          }
          function addTextInterpolateDirective(directives, text) {
            var interpolateFn = $interpolate(text, true);
            if (interpolateFn) {
              directives.push({
                priority: 0,
                compile: function textInterpolateCompileFn(templateNode) {
                  var templateNodeParent = templateNode.parent(),
                      hasCompileParent = !!templateNodeParent.length;
                  if (hasCompileParent)
                    compile.$$addBindingClass(templateNodeParent);
                  return function textInterpolateLinkFn(scope, node) {
                    var parent = node.parent();
                    if (!hasCompileParent)
                      compile.$$addBindingClass(parent);
                    compile.$$addBindingInfo(parent, interpolateFn.expressions);
                    scope.$watch(interpolateFn, function interpolateFnWatchAction(value) {
                      node[0].nodeValue = value;
                    });
                  };
                }
              });
            }
          }
          function wrapTemplate(type, template) {
            type = lowercase(type || 'html');
            switch (type) {
              case 'svg':
              case 'math':
                var wrapper = document.createElement('div');
                wrapper.innerHTML = '<' + type + '>' + template + '</' + type + '>';
                return wrapper.childNodes[0].childNodes;
              default:
                return template;
            }
          }
          function getTrustedContext(node, attrNormalizedName) {
            if (attrNormalizedName == "srcdoc") {
              return $sce.HTML;
            }
            var tag = nodeName_(node);
            if (attrNormalizedName == "xlinkHref" || (tag == "form" && attrNormalizedName == "action") || (tag != "img" && (attrNormalizedName == "src" || attrNormalizedName == "ngSrc"))) {
              return $sce.RESOURCE_URL;
            }
          }
          function addAttrInterpolateDirective(node, directives, value, name, allOrNothing) {
            var trustedContext = getTrustedContext(node, name);
            allOrNothing = ALL_OR_NOTHING_ATTRS[name] || allOrNothing;
            var interpolateFn = $interpolate(value, true, trustedContext, allOrNothing);
            if (!interpolateFn)
              return ;
            if (name === "multiple" && nodeName_(node) === "select") {
              throw $compileMinErr("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", startingTag(node));
            }
            directives.push({
              priority: 100,
              compile: function() {
                return {pre: function attrInterpolatePreLinkFn(scope, element, attr) {
                    var $$observers = (attr.$$observers || (attr.$$observers = {}));
                    if (EVENT_HANDLER_ATTR_REGEXP.test(name)) {
                      throw $compileMinErr('nodomevents', "Interpolations for HTML DOM event attributes are disallowed.  Please use the " + "ng- versions (such as ng-click instead of onclick) instead.");
                    }
                    var newValue = attr[name];
                    if (newValue !== value) {
                      interpolateFn = newValue && $interpolate(newValue, true, trustedContext, allOrNothing);
                      value = newValue;
                    }
                    if (!interpolateFn)
                      return ;
                    attr[name] = interpolateFn(scope);
                    ($$observers[name] || ($$observers[name] = [])).$$inter = true;
                    (attr.$$observers && attr.$$observers[name].$$scope || scope).$watch(interpolateFn, function interpolateFnWatchAction(newValue, oldValue) {
                      if (name === 'class' && newValue != oldValue) {
                        attr.$updateClass(newValue, oldValue);
                      } else {
                        attr.$set(name, newValue);
                      }
                    });
                  }};
              }
            });
          }
          function replaceWith($rootElement, elementsToRemove, newNode) {
            var firstElementToRemove = elementsToRemove[0],
                removeCount = elementsToRemove.length,
                parent = firstElementToRemove.parentNode,
                i,
                ii;
            if ($rootElement) {
              for (i = 0, ii = $rootElement.length; i < ii; i++) {
                if ($rootElement[i] == firstElementToRemove) {
                  $rootElement[i++] = newNode;
                  for (var j = i,
                      j2 = j + removeCount - 1,
                      jj = $rootElement.length; j < jj; j++, j2++) {
                    if (j2 < jj) {
                      $rootElement[j] = $rootElement[j2];
                    } else {
                      delete $rootElement[j];
                    }
                  }
                  $rootElement.length -= removeCount - 1;
                  if ($rootElement.context === firstElementToRemove) {
                    $rootElement.context = newNode;
                  }
                  break;
                }
              }
            }
            if (parent) {
              parent.replaceChild(newNode, firstElementToRemove);
            }
            var fragment = document.createDocumentFragment();
            fragment.appendChild(firstElementToRemove);
            jqLite(newNode).data(jqLite(firstElementToRemove).data());
            if (!jQuery) {
              delete jqLite.cache[firstElementToRemove[jqLite.expando]];
            } else {
              skipDestroyOnNextJQueryCleanData = true;
              jQuery.cleanData([firstElementToRemove]);
            }
            for (var k = 1,
                kk = elementsToRemove.length; k < kk; k++) {
              var element = elementsToRemove[k];
              jqLite(element).remove();
              fragment.appendChild(element);
              delete elementsToRemove[k];
            }
            elementsToRemove[0] = newNode;
            elementsToRemove.length = 1;
          }
          function cloneAndAnnotateFn(fn, annotation) {
            return extend(function() {
              return fn.apply(null, arguments);
            }, fn, annotation);
          }
          function invokeLinkFn(linkFn, scope, $element, attrs, controllers, transcludeFn) {
            try {
              linkFn(scope, $element, attrs, controllers, transcludeFn);
            } catch (e) {
              $exceptionHandler(e, startingTag($element));
            }
          }
        }];
      }
      var PREFIX_REGEXP = /^((?:x|data)[\:\-_])/i;
      function directiveNormalize(name) {
        return camelCase(name.replace(PREFIX_REGEXP, ''));
      }
      function nodesetLinkingFn(scope, nodeList, rootElement, boundTranscludeFn) {}
      function directiveLinkingFn(nodesetLinkingFn, scope, node, rootElement, boundTranscludeFn) {}
      function tokenDifference(str1, str2) {
        var values = '',
            tokens1 = str1.split(/\s+/),
            tokens2 = str2.split(/\s+/);
        outer: for (var i = 0; i < tokens1.length; i++) {
          var token = tokens1[i];
          for (var j = 0; j < tokens2.length; j++) {
            if (token == tokens2[j])
              continue outer;
          }
          values += (values.length > 0 ? ' ' : '') + token;
        }
        return values;
      }
      function removeComments(jqNodes) {
        jqNodes = jqLite(jqNodes);
        var i = jqNodes.length;
        if (i <= 1) {
          return jqNodes;
        }
        while (i--) {
          var node = jqNodes[i];
          if (node.nodeType === NODE_TYPE_COMMENT) {
            splice.call(jqNodes, i, 1);
          }
        }
        return jqNodes;
      }
      var $controllerMinErr = minErr('$controller');
      function $ControllerProvider() {
        var controllers = {},
            globals = false,
            CNTRL_REG = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(name, constructor) {
          assertNotHasOwnProperty(name, 'controller');
          if (isObject(name)) {
            extend(controllers, name);
          } else {
            controllers[name] = constructor;
          }
        };
        this.allowGlobals = function() {
          globals = true;
        };
        this.$get = ['$injector', '$window', function($injector, $window) {
          return function(expression, locals, later, ident) {
            var instance,
                match,
                constructor,
                identifier;
            later = later === true;
            if (ident && isString(ident)) {
              identifier = ident;
            }
            if (isString(expression)) {
              match = expression.match(CNTRL_REG);
              if (!match) {
                throw $controllerMinErr('ctrlfmt', "Badly formed controller string '{0}'. " + "Must match `__name__ as __id__` or `__name__`.", expression);
              }
              constructor = match[1], identifier = identifier || match[3];
              expression = controllers.hasOwnProperty(constructor) ? controllers[constructor] : getter(locals.$scope, constructor, true) || (globals ? getter($window, constructor, true) : undefined);
              assertArgFn(expression, constructor, true);
            }
            if (later) {
              var controllerPrototype = (isArray(expression) ? expression[expression.length - 1] : expression).prototype;
              instance = Object.create(controllerPrototype || null);
              if (identifier) {
                addIdentifier(locals, identifier, instance, constructor || expression.name);
              }
              return extend(function() {
                $injector.invoke(expression, instance, locals, constructor);
                return instance;
              }, {
                instance: instance,
                identifier: identifier
              });
            }
            instance = $injector.instantiate(expression, locals, constructor);
            if (identifier) {
              addIdentifier(locals, identifier, instance, constructor || expression.name);
            }
            return instance;
          };
          function addIdentifier(locals, identifier, instance, name) {
            if (!(locals && isObject(locals.$scope))) {
              throw minErr('$controller')('noscp', "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", name, identifier);
            }
            locals.$scope[identifier] = instance;
          }
        }];
      }
      function $DocumentProvider() {
        this.$get = ['$window', function(window) {
          return jqLite(window.document);
        }];
      }
      function $ExceptionHandlerProvider() {
        this.$get = ['$log', function($log) {
          return function(exception, cause) {
            $log.error.apply($log, arguments);
          };
        }];
      }
      var APPLICATION_JSON = 'application/json';
      var CONTENT_TYPE_APPLICATION_JSON = {'Content-Type': APPLICATION_JSON + ';charset=utf-8'};
      var JSON_START = /^\[|^\{(?!\{)/;
      var JSON_ENDS = {
        '[': /]$/,
        '{': /}$/
      };
      var JSON_PROTECTION_PREFIX = /^\)\]\}',?\n/;
      function defaultHttpResponseTransform(data, headers) {
        if (isString(data)) {
          var tempData = data.replace(JSON_PROTECTION_PREFIX, '').trim();
          if (tempData) {
            var contentType = headers('Content-Type');
            if ((contentType && (contentType.indexOf(APPLICATION_JSON) === 0)) || isJsonLike(tempData)) {
              data = fromJson(tempData);
            }
          }
        }
        return data;
      }
      function isJsonLike(str) {
        var jsonStart = str.match(JSON_START);
        return jsonStart && JSON_ENDS[jsonStart[0]].test(str);
      }
      function parseHeaders(headers) {
        var parsed = createMap(),
            key,
            val,
            i;
        if (!headers)
          return parsed;
        forEach(headers.split('\n'), function(line) {
          i = line.indexOf(':');
          key = lowercase(trim(line.substr(0, i)));
          val = trim(line.substr(i + 1));
          if (key) {
            parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
          }
        });
        return parsed;
      }
      function headersGetter(headers) {
        var headersObj = isObject(headers) ? headers : undefined;
        return function(name) {
          if (!headersObj)
            headersObj = parseHeaders(headers);
          if (name) {
            var value = headersObj[lowercase(name)];
            if (value === void 0) {
              value = null;
            }
            return value;
          }
          return headersObj;
        };
      }
      function transformData(data, headers, status, fns) {
        if (isFunction(fns))
          return fns(data, headers, status);
        forEach(fns, function(fn) {
          data = fn(data, headers, status);
        });
        return data;
      }
      function isSuccess(status) {
        return 200 <= status && status < 300;
      }
      function $HttpProvider() {
        var defaults = this.defaults = {
          transformResponse: [defaultHttpResponseTransform],
          transformRequest: [function(d) {
            return isObject(d) && !isFile(d) && !isBlob(d) && !isFormData(d) ? toJson(d) : d;
          }],
          headers: {
            common: {'Accept': 'application/json, text/plain, */*'},
            post: shallowCopy(CONTENT_TYPE_APPLICATION_JSON),
            put: shallowCopy(CONTENT_TYPE_APPLICATION_JSON),
            patch: shallowCopy(CONTENT_TYPE_APPLICATION_JSON)
          },
          xsrfCookieName: 'XSRF-TOKEN',
          xsrfHeaderName: 'X-XSRF-TOKEN'
        };
        var useApplyAsync = false;
        this.useApplyAsync = function(value) {
          if (isDefined(value)) {
            useApplyAsync = !!value;
            return this;
          }
          return useApplyAsync;
        };
        var interceptorFactories = this.interceptors = [];
        this.$get = ['$httpBackend', '$browser', '$cacheFactory', '$rootScope', '$q', '$injector', function($httpBackend, $browser, $cacheFactory, $rootScope, $q, $injector) {
          var defaultCache = $cacheFactory('$http');
          var reversedInterceptors = [];
          forEach(interceptorFactories, function(interceptorFactory) {
            reversedInterceptors.unshift(isString(interceptorFactory) ? $injector.get(interceptorFactory) : $injector.invoke(interceptorFactory));
          });
          function $http(requestConfig) {
            if (!angular.isObject(requestConfig)) {
              throw minErr('$http')('badreq', 'Http request configuration must be an object.  Received: {0}', requestConfig);
            }
            var config = extend({
              method: 'get',
              transformRequest: defaults.transformRequest,
              transformResponse: defaults.transformResponse
            }, requestConfig);
            config.headers = mergeHeaders(requestConfig);
            config.method = uppercase(config.method);
            var serverRequest = function(config) {
              var headers = config.headers;
              var reqData = transformData(config.data, headersGetter(headers), undefined, config.transformRequest);
              if (isUndefined(reqData)) {
                forEach(headers, function(value, header) {
                  if (lowercase(header) === 'content-type') {
                    delete headers[header];
                  }
                });
              }
              if (isUndefined(config.withCredentials) && !isUndefined(defaults.withCredentials)) {
                config.withCredentials = defaults.withCredentials;
              }
              return sendReq(config, reqData).then(transformResponse, transformResponse);
            };
            var chain = [serverRequest, undefined];
            var promise = $q.when(config);
            forEach(reversedInterceptors, function(interceptor) {
              if (interceptor.request || interceptor.requestError) {
                chain.unshift(interceptor.request, interceptor.requestError);
              }
              if (interceptor.response || interceptor.responseError) {
                chain.push(interceptor.response, interceptor.responseError);
              }
            });
            while (chain.length) {
              var thenFn = chain.shift();
              var rejectFn = chain.shift();
              promise = promise.then(thenFn, rejectFn);
            }
            promise.success = function(fn) {
              promise.then(function(response) {
                fn(response.data, response.status, response.headers, config);
              });
              return promise;
            };
            promise.error = function(fn) {
              promise.then(null, function(response) {
                fn(response.data, response.status, response.headers, config);
              });
              return promise;
            };
            return promise;
            function transformResponse(response) {
              var resp = extend({}, response);
              if (!response.data) {
                resp.data = response.data;
              } else {
                resp.data = transformData(response.data, response.headers, response.status, config.transformResponse);
              }
              return (isSuccess(response.status)) ? resp : $q.reject(resp);
            }
            function executeHeaderFns(headers) {
              var headerContent,
                  processedHeaders = {};
              forEach(headers, function(headerFn, header) {
                if (isFunction(headerFn)) {
                  headerContent = headerFn();
                  if (headerContent != null) {
                    processedHeaders[header] = headerContent;
                  }
                } else {
                  processedHeaders[header] = headerFn;
                }
              });
              return processedHeaders;
            }
            function mergeHeaders(config) {
              var defHeaders = defaults.headers,
                  reqHeaders = extend({}, config.headers),
                  defHeaderName,
                  lowercaseDefHeaderName,
                  reqHeaderName;
              defHeaders = extend({}, defHeaders.common, defHeaders[lowercase(config.method)]);
              defaultHeadersIteration: for (defHeaderName in defHeaders) {
                lowercaseDefHeaderName = lowercase(defHeaderName);
                for (reqHeaderName in reqHeaders) {
                  if (lowercase(reqHeaderName) === lowercaseDefHeaderName) {
                    continue defaultHeadersIteration;
                  }
                }
                reqHeaders[defHeaderName] = defHeaders[defHeaderName];
              }
              return executeHeaderFns(reqHeaders);
            }
          }
          $http.pendingRequests = [];
          createShortMethods('get', 'delete', 'head', 'jsonp');
          createShortMethodsWithData('post', 'put', 'patch');
          $http.defaults = defaults;
          return $http;
          function createShortMethods(names) {
            forEach(arguments, function(name) {
              $http[name] = function(url, config) {
                return $http(extend(config || {}, {
                  method: name,
                  url: url
                }));
              };
            });
          }
          function createShortMethodsWithData(name) {
            forEach(arguments, function(name) {
              $http[name] = function(url, data, config) {
                return $http(extend(config || {}, {
                  method: name,
                  url: url,
                  data: data
                }));
              };
            });
          }
          function sendReq(config, reqData) {
            var deferred = $q.defer(),
                promise = deferred.promise,
                cache,
                cachedResp,
                reqHeaders = config.headers,
                url = buildUrl(config.url, config.params);
            $http.pendingRequests.push(config);
            promise.then(removePendingReq, removePendingReq);
            if ((config.cache || defaults.cache) && config.cache !== false && (config.method === 'GET' || config.method === 'JSONP')) {
              cache = isObject(config.cache) ? config.cache : isObject(defaults.cache) ? defaults.cache : defaultCache;
            }
            if (cache) {
              cachedResp = cache.get(url);
              if (isDefined(cachedResp)) {
                if (isPromiseLike(cachedResp)) {
                  cachedResp.then(resolvePromiseWithResult, resolvePromiseWithResult);
                } else {
                  if (isArray(cachedResp)) {
                    resolvePromise(cachedResp[1], cachedResp[0], shallowCopy(cachedResp[2]), cachedResp[3]);
                  } else {
                    resolvePromise(cachedResp, 200, {}, 'OK');
                  }
                }
              } else {
                cache.put(url, promise);
              }
            }
            if (isUndefined(cachedResp)) {
              var xsrfValue = urlIsSameOrigin(config.url) ? $browser.cookies()[config.xsrfCookieName || defaults.xsrfCookieName] : undefined;
              if (xsrfValue) {
                reqHeaders[(config.xsrfHeaderName || defaults.xsrfHeaderName)] = xsrfValue;
              }
              $httpBackend(config.method, url, reqData, done, reqHeaders, config.timeout, config.withCredentials, config.responseType);
            }
            return promise;
            function done(status, response, headersString, statusText) {
              if (cache) {
                if (isSuccess(status)) {
                  cache.put(url, [status, response, parseHeaders(headersString), statusText]);
                } else {
                  cache.remove(url);
                }
              }
              function resolveHttpPromise() {
                resolvePromise(response, status, headersString, statusText);
              }
              if (useApplyAsync) {
                $rootScope.$applyAsync(resolveHttpPromise);
              } else {
                resolveHttpPromise();
                if (!$rootScope.$$phase)
                  $rootScope.$apply();
              }
            }
            function resolvePromise(response, status, headers, statusText) {
              status = Math.max(status, 0);
              (isSuccess(status) ? deferred.resolve : deferred.reject)({
                data: response,
                status: status,
                headers: headersGetter(headers),
                config: config,
                statusText: statusText
              });
            }
            function resolvePromiseWithResult(result) {
              resolvePromise(result.data, result.status, shallowCopy(result.headers()), result.statusText);
            }
            function removePendingReq() {
              var idx = $http.pendingRequests.indexOf(config);
              if (idx !== -1)
                $http.pendingRequests.splice(idx, 1);
            }
          }
          function buildUrl(url, params) {
            if (!params)
              return url;
            var parts = [];
            forEachSorted(params, function(value, key) {
              if (value === null || isUndefined(value))
                return ;
              if (!isArray(value))
                value = [value];
              forEach(value, function(v) {
                if (isObject(v)) {
                  if (isDate(v)) {
                    v = v.toISOString();
                  } else {
                    v = toJson(v);
                  }
                }
                parts.push(encodeUriQuery(key) + '=' + encodeUriQuery(v));
              });
            });
            if (parts.length > 0) {
              url += ((url.indexOf('?') == -1) ? '?' : '&') + parts.join('&');
            }
            return url;
          }
        }];
      }
      function createXhr() {
        return new window.XMLHttpRequest();
      }
      function $HttpBackendProvider() {
        this.$get = ['$browser', '$window', '$document', function($browser, $window, $document) {
          return createHttpBackend($browser, createXhr, $browser.defer, $window.angular.callbacks, $document[0]);
        }];
      }
      function createHttpBackend($browser, createXhr, $browserDefer, callbacks, rawDocument) {
        return function(method, url, post, callback, headers, timeout, withCredentials, responseType) {
          $browser.$$incOutstandingRequestCount();
          url = url || $browser.url();
          if (lowercase(method) == 'jsonp') {
            var callbackId = '_' + (callbacks.counter++).toString(36);
            callbacks[callbackId] = function(data) {
              callbacks[callbackId].data = data;
              callbacks[callbackId].called = true;
            };
            var jsonpDone = jsonpReq(url.replace('JSON_CALLBACK', 'angular.callbacks.' + callbackId), callbackId, function(status, text) {
              completeRequest(callback, status, callbacks[callbackId].data, "", text);
              callbacks[callbackId] = noop;
            });
          } else {
            var xhr = createXhr();
            xhr.open(method, url, true);
            forEach(headers, function(value, key) {
              if (isDefined(value)) {
                xhr.setRequestHeader(key, value);
              }
            });
            xhr.onload = function requestLoaded() {
              var statusText = xhr.statusText || '';
              var response = ('response' in xhr) ? xhr.response : xhr.responseText;
              var status = xhr.status === 1223 ? 204 : xhr.status;
              if (status === 0) {
                status = response ? 200 : urlResolve(url).protocol == 'file' ? 404 : 0;
              }
              completeRequest(callback, status, response, xhr.getAllResponseHeaders(), statusText);
            };
            var requestError = function() {
              completeRequest(callback, -1, null, null, '');
            };
            xhr.onerror = requestError;
            xhr.onabort = requestError;
            if (withCredentials) {
              xhr.withCredentials = true;
            }
            if (responseType) {
              try {
                xhr.responseType = responseType;
              } catch (e) {
                if (responseType !== 'json') {
                  throw e;
                }
              }
            }
            xhr.send(post || null);
          }
          if (timeout > 0) {
            var timeoutId = $browserDefer(timeoutRequest, timeout);
          } else if (isPromiseLike(timeout)) {
            timeout.then(timeoutRequest);
          }
          function timeoutRequest() {
            jsonpDone && jsonpDone();
            xhr && xhr.abort();
          }
          function completeRequest(callback, status, response, headersString, statusText) {
            if (timeoutId !== undefined) {
              $browserDefer.cancel(timeoutId);
            }
            jsonpDone = xhr = null;
            callback(status, response, headersString, statusText);
            $browser.$$completeOutstandingRequest(noop);
          }
        };
        function jsonpReq(url, callbackId, done) {
          var script = rawDocument.createElement('script'),
              callback = null;
          script.type = "text/javascript";
          script.src = url;
          script.async = true;
          callback = function(event) {
            removeEventListenerFn(script, "load", callback);
            removeEventListenerFn(script, "error", callback);
            rawDocument.body.removeChild(script);
            script = null;
            var status = -1;
            var text = "unknown";
            if (event) {
              if (event.type === "load" && !callbacks[callbackId].called) {
                event = {type: "error"};
              }
              text = event.type;
              status = event.type === "error" ? 404 : 200;
            }
            if (done) {
              done(status, text);
            }
          };
          addEventListenerFn(script, "load", callback);
          addEventListenerFn(script, "error", callback);
          rawDocument.body.appendChild(script);
          return callback;
        }
      }
      var $interpolateMinErr = minErr('$interpolate');
      function $InterpolateProvider() {
        var startSymbol = '{{';
        var endSymbol = '}}';
        this.startSymbol = function(value) {
          if (value) {
            startSymbol = value;
            return this;
          } else {
            return startSymbol;
          }
        };
        this.endSymbol = function(value) {
          if (value) {
            endSymbol = value;
            return this;
          } else {
            return endSymbol;
          }
        };
        this.$get = ['$parse', '$exceptionHandler', '$sce', function($parse, $exceptionHandler, $sce) {
          var startSymbolLength = startSymbol.length,
              endSymbolLength = endSymbol.length,
              escapedStartRegexp = new RegExp(startSymbol.replace(/./g, escape), 'g'),
              escapedEndRegexp = new RegExp(endSymbol.replace(/./g, escape), 'g');
          function escape(ch) {
            return '\\\\\\' + ch;
          }
          function $interpolate(text, mustHaveExpression, trustedContext, allOrNothing) {
            allOrNothing = !!allOrNothing;
            var startIndex,
                endIndex,
                index = 0,
                expressions = [],
                parseFns = [],
                textLength = text.length,
                exp,
                concat = [],
                expressionPositions = [];
            while (index < textLength) {
              if (((startIndex = text.indexOf(startSymbol, index)) != -1) && ((endIndex = text.indexOf(endSymbol, startIndex + startSymbolLength)) != -1)) {
                if (index !== startIndex) {
                  concat.push(unescapeText(text.substring(index, startIndex)));
                }
                exp = text.substring(startIndex + startSymbolLength, endIndex);
                expressions.push(exp);
                parseFns.push($parse(exp, parseStringifyInterceptor));
                index = endIndex + endSymbolLength;
                expressionPositions.push(concat.length);
                concat.push('');
              } else {
                if (index !== textLength) {
                  concat.push(unescapeText(text.substring(index)));
                }
                break;
              }
            }
            if (trustedContext && concat.length > 1) {
              throw $interpolateMinErr('noconcat', "Error while interpolating: {0}\nStrict Contextual Escaping disallows " + "interpolations that concatenate multiple expressions when a trusted value is " + "required.  See http://docs.angularjs.org/api/ng.$sce", text);
            }
            if (!mustHaveExpression || expressions.length) {
              var compute = function(values) {
                for (var i = 0,
                    ii = expressions.length; i < ii; i++) {
                  if (allOrNothing && isUndefined(values[i]))
                    return ;
                  concat[expressionPositions[i]] = values[i];
                }
                return concat.join('');
              };
              var getValue = function(value) {
                return trustedContext ? $sce.getTrusted(trustedContext, value) : $sce.valueOf(value);
              };
              var stringify = function(value) {
                if (value == null) {
                  return '';
                }
                switch (typeof value) {
                  case 'string':
                    break;
                  case 'number':
                    value = '' + value;
                    break;
                  default:
                    value = toJson(value);
                }
                return value;
              };
              return extend(function interpolationFn(context) {
                var i = 0;
                var ii = expressions.length;
                var values = new Array(ii);
                try {
                  for (; i < ii; i++) {
                    values[i] = parseFns[i](context);
                  }
                  return compute(values);
                } catch (err) {
                  var newErr = $interpolateMinErr('interr', "Can't interpolate: {0}\n{1}", text, err.toString());
                  $exceptionHandler(newErr);
                }
              }, {
                exp: text,
                expressions: expressions,
                $$watchDelegate: function(scope, listener, objectEquality) {
                  var lastValue;
                  return scope.$watchGroup(parseFns, function interpolateFnWatcher(values, oldValues) {
                    var currValue = compute(values);
                    if (isFunction(listener)) {
                      listener.call(this, currValue, values !== oldValues ? lastValue : currValue, scope);
                    }
                    lastValue = currValue;
                  }, objectEquality);
                }
              });
            }
            function unescapeText(text) {
              return text.replace(escapedStartRegexp, startSymbol).replace(escapedEndRegexp, endSymbol);
            }
            function parseStringifyInterceptor(value) {
              try {
                value = getValue(value);
                return allOrNothing && !isDefined(value) ? value : stringify(value);
              } catch (err) {
                var newErr = $interpolateMinErr('interr', "Can't interpolate: {0}\n{1}", text, err.toString());
                $exceptionHandler(newErr);
              }
            }
          }
          $interpolate.startSymbol = function() {
            return startSymbol;
          };
          $interpolate.endSymbol = function() {
            return endSymbol;
          };
          return $interpolate;
        }];
      }
      function $IntervalProvider() {
        this.$get = ['$rootScope', '$window', '$q', '$$q', function($rootScope, $window, $q, $$q) {
          var intervals = {};
          function interval(fn, delay, count, invokeApply) {
            var setInterval = $window.setInterval,
                clearInterval = $window.clearInterval,
                iteration = 0,
                skipApply = (isDefined(invokeApply) && !invokeApply),
                deferred = (skipApply ? $$q : $q).defer(),
                promise = deferred.promise;
            count = isDefined(count) ? count : 0;
            promise.then(null, null, fn);
            promise.$$intervalId = setInterval(function tick() {
              deferred.notify(iteration++);
              if (count > 0 && iteration >= count) {
                deferred.resolve(iteration);
                clearInterval(promise.$$intervalId);
                delete intervals[promise.$$intervalId];
              }
              if (!skipApply)
                $rootScope.$apply();
            }, delay);
            intervals[promise.$$intervalId] = deferred;
            return promise;
          }
          interval.cancel = function(promise) {
            if (promise && promise.$$intervalId in intervals) {
              intervals[promise.$$intervalId].reject('canceled');
              $window.clearInterval(promise.$$intervalId);
              delete intervals[promise.$$intervalId];
              return true;
            }
            return false;
          };
          return interval;
        }];
      }
      function $LocaleProvider() {
        this.$get = function() {
          return {
            id: 'en-us',
            NUMBER_FORMATS: {
              DECIMAL_SEP: '.',
              GROUP_SEP: ',',
              PATTERNS: [{
                minInt: 1,
                minFrac: 0,
                maxFrac: 3,
                posPre: '',
                posSuf: '',
                negPre: '-',
                negSuf: '',
                gSize: 3,
                lgSize: 3
              }, {
                minInt: 1,
                minFrac: 2,
                maxFrac: 2,
                posPre: '\u00A4',
                posSuf: '',
                negPre: '(\u00A4',
                negSuf: ')',
                gSize: 3,
                lgSize: 3
              }],
              CURRENCY_SYM: '$'
            },
            DATETIME_FORMATS: {
              MONTH: 'January,February,March,April,May,June,July,August,September,October,November,December'.split(','),
              SHORTMONTH: 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(','),
              DAY: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday'.split(','),
              SHORTDAY: 'Sun,Mon,Tue,Wed,Thu,Fri,Sat'.split(','),
              AMPMS: ['AM', 'PM'],
              medium: 'MMM d, y h:mm:ss a',
              'short': 'M/d/yy h:mm a',
              fullDate: 'EEEE, MMMM d, y',
              longDate: 'MMMM d, y',
              mediumDate: 'MMM d, y',
              shortDate: 'M/d/yy',
              mediumTime: 'h:mm:ss a',
              shortTime: 'h:mm a',
              ERANAMES: ["Before Christ", "Anno Domini"],
              ERAS: ["BC", "AD"]
            },
            pluralCat: function(num) {
              if (num === 1) {
                return 'one';
              }
              return 'other';
            }
          };
        };
      }
      var PATH_MATCH = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
          DEFAULT_PORTS = {
            'http': 80,
            'https': 443,
            'ftp': 21
          };
      var $locationMinErr = minErr('$location');
      function encodePath(path) {
        var segments = path.split('/'),
            i = segments.length;
        while (i--) {
          segments[i] = encodeUriSegment(segments[i]);
        }
        return segments.join('/');
      }
      function parseAbsoluteUrl(absoluteUrl, locationObj) {
        var parsedUrl = urlResolve(absoluteUrl);
        locationObj.$$protocol = parsedUrl.protocol;
        locationObj.$$host = parsedUrl.hostname;
        locationObj.$$port = int(parsedUrl.port) || DEFAULT_PORTS[parsedUrl.protocol] || null;
      }
      function parseAppUrl(relativeUrl, locationObj) {
        var prefixed = (relativeUrl.charAt(0) !== '/');
        if (prefixed) {
          relativeUrl = '/' + relativeUrl;
        }
        var match = urlResolve(relativeUrl);
        locationObj.$$path = decodeURIComponent(prefixed && match.pathname.charAt(0) === '/' ? match.pathname.substring(1) : match.pathname);
        locationObj.$$search = parseKeyValue(match.search);
        locationObj.$$hash = decodeURIComponent(match.hash);
        if (locationObj.$$path && locationObj.$$path.charAt(0) != '/') {
          locationObj.$$path = '/' + locationObj.$$path;
        }
      }
      function beginsWith(begin, whole) {
        if (whole.indexOf(begin) === 0) {
          return whole.substr(begin.length);
        }
      }
      function stripHash(url) {
        var index = url.indexOf('#');
        return index == -1 ? url : url.substr(0, index);
      }
      function trimEmptyHash(url) {
        return url.replace(/(#.+)|#$/, '$1');
      }
      function stripFile(url) {
        return url.substr(0, stripHash(url).lastIndexOf('/') + 1);
      }
      function serverBase(url) {
        return url.substring(0, url.indexOf('/', url.indexOf('//') + 2));
      }
      function LocationHtml5Url(appBase, basePrefix) {
        this.$$html5 = true;
        basePrefix = basePrefix || '';
        var appBaseNoFile = stripFile(appBase);
        parseAbsoluteUrl(appBase, this);
        this.$$parse = function(url) {
          var pathUrl = beginsWith(appBaseNoFile, url);
          if (!isString(pathUrl)) {
            throw $locationMinErr('ipthprfx', 'Invalid url "{0}", missing path prefix "{1}".', url, appBaseNoFile);
          }
          parseAppUrl(pathUrl, this);
          if (!this.$$path) {
            this.$$path = '/';
          }
          this.$$compose();
        };
        this.$$compose = function() {
          var search = toKeyValue(this.$$search),
              hash = this.$$hash ? '#' + encodeUriSegment(this.$$hash) : '';
          this.$$url = encodePath(this.$$path) + (search ? '?' + search : '') + hash;
          this.$$absUrl = appBaseNoFile + this.$$url.substr(1);
        };
        this.$$parseLinkUrl = function(url, relHref) {
          if (relHref && relHref[0] === '#') {
            this.hash(relHref.slice(1));
            return true;
          }
          var appUrl,
              prevAppUrl;
          var rewrittenUrl;
          if ((appUrl = beginsWith(appBase, url)) !== undefined) {
            prevAppUrl = appUrl;
            if ((appUrl = beginsWith(basePrefix, appUrl)) !== undefined) {
              rewrittenUrl = appBaseNoFile + (beginsWith('/', appUrl) || appUrl);
            } else {
              rewrittenUrl = appBase + prevAppUrl;
            }
          } else if ((appUrl = beginsWith(appBaseNoFile, url)) !== undefined) {
            rewrittenUrl = appBaseNoFile + appUrl;
          } else if (appBaseNoFile == url + '/') {
            rewrittenUrl = appBaseNoFile;
          }
          if (rewrittenUrl) {
            this.$$parse(rewrittenUrl);
          }
          return !!rewrittenUrl;
        };
      }
      function LocationHashbangUrl(appBase, hashPrefix) {
        var appBaseNoFile = stripFile(appBase);
        parseAbsoluteUrl(appBase, this);
        this.$$parse = function(url) {
          var withoutBaseUrl = beginsWith(appBase, url) || beginsWith(appBaseNoFile, url);
          var withoutHashUrl;
          if (withoutBaseUrl.charAt(0) === '#') {
            withoutHashUrl = beginsWith(hashPrefix, withoutBaseUrl);
            if (isUndefined(withoutHashUrl)) {
              withoutHashUrl = withoutBaseUrl;
            }
          } else {
            withoutHashUrl = this.$$html5 ? withoutBaseUrl : '';
          }
          parseAppUrl(withoutHashUrl, this);
          this.$$path = removeWindowsDriveName(this.$$path, withoutHashUrl, appBase);
          this.$$compose();
          function removeWindowsDriveName(path, url, base) {
            var windowsFilePathExp = /^\/[A-Z]:(\/.*)/;
            var firstPathSegmentMatch;
            if (url.indexOf(base) === 0) {
              url = url.replace(base, '');
            }
            if (windowsFilePathExp.exec(url)) {
              return path;
            }
            firstPathSegmentMatch = windowsFilePathExp.exec(path);
            return firstPathSegmentMatch ? firstPathSegmentMatch[1] : path;
          }
        };
        this.$$compose = function() {
          var search = toKeyValue(this.$$search),
              hash = this.$$hash ? '#' + encodeUriSegment(this.$$hash) : '';
          this.$$url = encodePath(this.$$path) + (search ? '?' + search : '') + hash;
          this.$$absUrl = appBase + (this.$$url ? hashPrefix + this.$$url : '');
        };
        this.$$parseLinkUrl = function(url, relHref) {
          if (stripHash(appBase) == stripHash(url)) {
            this.$$parse(url);
            return true;
          }
          return false;
        };
      }
      function LocationHashbangInHtml5Url(appBase, hashPrefix) {
        this.$$html5 = true;
        LocationHashbangUrl.apply(this, arguments);
        var appBaseNoFile = stripFile(appBase);
        this.$$parseLinkUrl = function(url, relHref) {
          if (relHref && relHref[0] === '#') {
            this.hash(relHref.slice(1));
            return true;
          }
          var rewrittenUrl;
          var appUrl;
          if (appBase == stripHash(url)) {
            rewrittenUrl = url;
          } else if ((appUrl = beginsWith(appBaseNoFile, url))) {
            rewrittenUrl = appBase + hashPrefix + appUrl;
          } else if (appBaseNoFile === url + '/') {
            rewrittenUrl = appBaseNoFile;
          }
          if (rewrittenUrl) {
            this.$$parse(rewrittenUrl);
          }
          return !!rewrittenUrl;
        };
        this.$$compose = function() {
          var search = toKeyValue(this.$$search),
              hash = this.$$hash ? '#' + encodeUriSegment(this.$$hash) : '';
          this.$$url = encodePath(this.$$path) + (search ? '?' + search : '') + hash;
          this.$$absUrl = appBase + hashPrefix + this.$$url;
        };
      }
      var locationPrototype = {
        $$html5: false,
        $$replace: false,
        absUrl: locationGetter('$$absUrl'),
        url: function(url) {
          if (isUndefined(url))
            return this.$$url;
          var match = PATH_MATCH.exec(url);
          if (match[1] || url === '')
            this.path(decodeURIComponent(match[1]));
          if (match[2] || match[1] || url === '')
            this.search(match[3] || '');
          this.hash(match[5] || '');
          return this;
        },
        protocol: locationGetter('$$protocol'),
        host: locationGetter('$$host'),
        port: locationGetter('$$port'),
        path: locationGetterSetter('$$path', function(path) {
          path = path !== null ? path.toString() : '';
          return path.charAt(0) == '/' ? path : '/' + path;
        }),
        search: function(search, paramValue) {
          switch (arguments.length) {
            case 0:
              return this.$$search;
            case 1:
              if (isString(search) || isNumber(search)) {
                search = search.toString();
                this.$$search = parseKeyValue(search);
              } else if (isObject(search)) {
                search = copy(search, {});
                forEach(search, function(value, key) {
                  if (value == null)
                    delete search[key];
                });
                this.$$search = search;
              } else {
                throw $locationMinErr('isrcharg', 'The first argument of the `$location#search()` call must be a string or an object.');
              }
              break;
            default:
              if (isUndefined(paramValue) || paramValue === null) {
                delete this.$$search[search];
              } else {
                this.$$search[search] = paramValue;
              }
          }
          this.$$compose();
          return this;
        },
        hash: locationGetterSetter('$$hash', function(hash) {
          return hash !== null ? hash.toString() : '';
        }),
        replace: function() {
          this.$$replace = true;
          return this;
        }
      };
      forEach([LocationHashbangInHtml5Url, LocationHashbangUrl, LocationHtml5Url], function(Location) {
        Location.prototype = Object.create(locationPrototype);
        Location.prototype.state = function(state) {
          if (!arguments.length)
            return this.$$state;
          if (Location !== LocationHtml5Url || !this.$$html5) {
            throw $locationMinErr('nostate', 'History API state support is available only ' + 'in HTML5 mode and only in browsers supporting HTML5 History API');
          }
          this.$$state = isUndefined(state) ? null : state;
          return this;
        };
      });
      function locationGetter(property) {
        return function() {
          return this[property];
        };
      }
      function locationGetterSetter(property, preprocess) {
        return function(value) {
          if (isUndefined(value))
            return this[property];
          this[property] = preprocess(value);
          this.$$compose();
          return this;
        };
      }
      function $LocationProvider() {
        var hashPrefix = '',
            html5Mode = {
              enabled: false,
              requireBase: true,
              rewriteLinks: true
            };
        this.hashPrefix = function(prefix) {
          if (isDefined(prefix)) {
            hashPrefix = prefix;
            return this;
          } else {
            return hashPrefix;
          }
        };
        this.html5Mode = function(mode) {
          if (isBoolean(mode)) {
            html5Mode.enabled = mode;
            return this;
          } else if (isObject(mode)) {
            if (isBoolean(mode.enabled)) {
              html5Mode.enabled = mode.enabled;
            }
            if (isBoolean(mode.requireBase)) {
              html5Mode.requireBase = mode.requireBase;
            }
            if (isBoolean(mode.rewriteLinks)) {
              html5Mode.rewriteLinks = mode.rewriteLinks;
            }
            return this;
          } else {
            return html5Mode;
          }
        };
        this.$get = ['$rootScope', '$browser', '$sniffer', '$rootElement', '$window', function($rootScope, $browser, $sniffer, $rootElement, $window) {
          var $location,
              LocationMode,
              baseHref = $browser.baseHref(),
              initialUrl = $browser.url(),
              appBase;
          if (html5Mode.enabled) {
            if (!baseHref && html5Mode.requireBase) {
              throw $locationMinErr('nobase', "$location in HTML5 mode requires a <base> tag to be present!");
            }
            appBase = serverBase(initialUrl) + (baseHref || '/');
            LocationMode = $sniffer.history ? LocationHtml5Url : LocationHashbangInHtml5Url;
          } else {
            appBase = stripHash(initialUrl);
            LocationMode = LocationHashbangUrl;
          }
          $location = new LocationMode(appBase, '#' + hashPrefix);
          $location.$$parseLinkUrl(initialUrl, initialUrl);
          $location.$$state = $browser.state();
          var IGNORE_URI_REGEXP = /^\s*(javascript|mailto):/i;
          function setBrowserUrlWithFallback(url, replace, state) {
            var oldUrl = $location.url();
            var oldState = $location.$$state;
            try {
              $browser.url(url, replace, state);
              $location.$$state = $browser.state();
            } catch (e) {
              $location.url(oldUrl);
              $location.$$state = oldState;
              throw e;
            }
          }
          $rootElement.on('click', function(event) {
            if (!html5Mode.rewriteLinks || event.ctrlKey || event.metaKey || event.shiftKey || event.which == 2 || event.button == 2)
              return ;
            var elm = jqLite(event.target);
            while (nodeName_(elm[0]) !== 'a') {
              if (elm[0] === $rootElement[0] || !(elm = elm.parent())[0])
                return ;
            }
            var absHref = elm.prop('href');
            var relHref = elm.attr('href') || elm.attr('xlink:href');
            if (isObject(absHref) && absHref.toString() === '[object SVGAnimatedString]') {
              absHref = urlResolve(absHref.animVal).href;
            }
            if (IGNORE_URI_REGEXP.test(absHref))
              return ;
            if (absHref && !elm.attr('target') && !event.isDefaultPrevented()) {
              if ($location.$$parseLinkUrl(absHref, relHref)) {
                event.preventDefault();
                if ($location.absUrl() != $browser.url()) {
                  $rootScope.$apply();
                  $window.angular['ff-684208-preventDefault'] = true;
                }
              }
            }
          });
          if (trimEmptyHash($location.absUrl()) != trimEmptyHash(initialUrl)) {
            $browser.url($location.absUrl(), true);
          }
          var initializing = true;
          $browser.onUrlChange(function(newUrl, newState) {
            $rootScope.$evalAsync(function() {
              var oldUrl = $location.absUrl();
              var oldState = $location.$$state;
              var defaultPrevented;
              $location.$$parse(newUrl);
              $location.$$state = newState;
              defaultPrevented = $rootScope.$broadcast('$locationChangeStart', newUrl, oldUrl, newState, oldState).defaultPrevented;
              if ($location.absUrl() !== newUrl)
                return ;
              if (defaultPrevented) {
                $location.$$parse(oldUrl);
                $location.$$state = oldState;
                setBrowserUrlWithFallback(oldUrl, false, oldState);
              } else {
                initializing = false;
                afterLocationChange(oldUrl, oldState);
              }
            });
            if (!$rootScope.$$phase)
              $rootScope.$digest();
          });
          $rootScope.$watch(function $locationWatch() {
            var oldUrl = trimEmptyHash($browser.url());
            var newUrl = trimEmptyHash($location.absUrl());
            var oldState = $browser.state();
            var currentReplace = $location.$$replace;
            var urlOrStateChanged = oldUrl !== newUrl || ($location.$$html5 && $sniffer.history && oldState !== $location.$$state);
            if (initializing || urlOrStateChanged) {
              initializing = false;
              $rootScope.$evalAsync(function() {
                var newUrl = $location.absUrl();
                var defaultPrevented = $rootScope.$broadcast('$locationChangeStart', newUrl, oldUrl, $location.$$state, oldState).defaultPrevented;
                if ($location.absUrl() !== newUrl)
                  return ;
                if (defaultPrevented) {
                  $location.$$parse(oldUrl);
                  $location.$$state = oldState;
                } else {
                  if (urlOrStateChanged) {
                    setBrowserUrlWithFallback(newUrl, currentReplace, oldState === $location.$$state ? null : $location.$$state);
                  }
                  afterLocationChange(oldUrl, oldState);
                }
              });
            }
            $location.$$replace = false;
          });
          return $location;
          function afterLocationChange(oldUrl, oldState) {
            $rootScope.$broadcast('$locationChangeSuccess', $location.absUrl(), oldUrl, $location.$$state, oldState);
          }
        }];
      }
      function $LogProvider() {
        var debug = true,
            self = this;
        this.debugEnabled = function(flag) {
          if (isDefined(flag)) {
            debug = flag;
            return this;
          } else {
            return debug;
          }
        };
        this.$get = ['$window', function($window) {
          return {
            log: consoleLog('log'),
            info: consoleLog('info'),
            warn: consoleLog('warn'),
            error: consoleLog('error'),
            debug: (function() {
              var fn = consoleLog('debug');
              return function() {
                if (debug) {
                  fn.apply(self, arguments);
                }
              };
            }())
          };
          function formatError(arg) {
            if (arg instanceof Error) {
              if (arg.stack) {
                arg = (arg.message && arg.stack.indexOf(arg.message) === -1) ? 'Error: ' + arg.message + '\n' + arg.stack : arg.stack;
              } else if (arg.sourceURL) {
                arg = arg.message + '\n' + arg.sourceURL + ':' + arg.line;
              }
            }
            return arg;
          }
          function consoleLog(type) {
            var console = $window.console || {},
                logFn = console[type] || console.log || noop,
                hasApply = false;
            try {
              hasApply = !!logFn.apply;
            } catch (e) {}
            if (hasApply) {
              return function() {
                var args = [];
                forEach(arguments, function(arg) {
                  args.push(formatError(arg));
                });
                return logFn.apply(console, args);
              };
            }
            return function(arg1, arg2) {
              logFn(arg1, arg2 == null ? '' : arg2);
            };
          }
        }];
      }
      var $parseMinErr = minErr('$parse');
      function ensureSafeMemberName(name, fullExpression) {
        if (name === "__defineGetter__" || name === "__defineSetter__" || name === "__lookupGetter__" || name === "__lookupSetter__" || name === "__proto__") {
          throw $parseMinErr('isecfld', 'Attempting to access a disallowed field in Angular expressions! ' + 'Expression: {0}', fullExpression);
        }
        return name;
      }
      function ensureSafeObject(obj, fullExpression) {
        if (obj) {
          if (obj.constructor === obj) {
            throw $parseMinErr('isecfn', 'Referencing Function in Angular expressions is disallowed! Expression: {0}', fullExpression);
          } else if (obj.window === obj) {
            throw $parseMinErr('isecwindow', 'Referencing the Window in Angular expressions is disallowed! Expression: {0}', fullExpression);
          } else if (obj.children && (obj.nodeName || (obj.prop && obj.attr && obj.find))) {
            throw $parseMinErr('isecdom', 'Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}', fullExpression);
          } else if (obj === Object) {
            throw $parseMinErr('isecobj', 'Referencing Object in Angular expressions is disallowed! Expression: {0}', fullExpression);
          }
        }
        return obj;
      }
      var CALL = Function.prototype.call;
      var APPLY = Function.prototype.apply;
      var BIND = Function.prototype.bind;
      function ensureSafeFunction(obj, fullExpression) {
        if (obj) {
          if (obj.constructor === obj) {
            throw $parseMinErr('isecfn', 'Referencing Function in Angular expressions is disallowed! Expression: {0}', fullExpression);
          } else if (obj === CALL || obj === APPLY || obj === BIND) {
            throw $parseMinErr('isecff', 'Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}', fullExpression);
          }
        }
      }
      var CONSTANTS = createMap();
      forEach({
        'null': function() {
          return null;
        },
        'true': function() {
          return true;
        },
        'false': function() {
          return false;
        },
        'undefined': function() {}
      }, function(constantGetter, name) {
        constantGetter.constant = constantGetter.literal = constantGetter.sharedGetter = true;
        CONSTANTS[name] = constantGetter;
      });
      CONSTANTS['this'] = function(self) {
        return self;
      };
      CONSTANTS['this'].sharedGetter = true;
      var OPERATORS = extend(createMap(), {
        '+': function(self, locals, a, b) {
          a = a(self, locals);
          b = b(self, locals);
          if (isDefined(a)) {
            if (isDefined(b)) {
              return a + b;
            }
            return a;
          }
          return isDefined(b) ? b : undefined;
        },
        '-': function(self, locals, a, b) {
          a = a(self, locals);
          b = b(self, locals);
          return (isDefined(a) ? a : 0) - (isDefined(b) ? b : 0);
        },
        '*': function(self, locals, a, b) {
          return a(self, locals) * b(self, locals);
        },
        '/': function(self, locals, a, b) {
          return a(self, locals) / b(self, locals);
        },
        '%': function(self, locals, a, b) {
          return a(self, locals) % b(self, locals);
        },
        '===': function(self, locals, a, b) {
          return a(self, locals) === b(self, locals);
        },
        '!==': function(self, locals, a, b) {
          return a(self, locals) !== b(self, locals);
        },
        '==': function(self, locals, a, b) {
          return a(self, locals) == b(self, locals);
        },
        '!=': function(self, locals, a, b) {
          return a(self, locals) != b(self, locals);
        },
        '<': function(self, locals, a, b) {
          return a(self, locals) < b(self, locals);
        },
        '>': function(self, locals, a, b) {
          return a(self, locals) > b(self, locals);
        },
        '<=': function(self, locals, a, b) {
          return a(self, locals) <= b(self, locals);
        },
        '>=': function(self, locals, a, b) {
          return a(self, locals) >= b(self, locals);
        },
        '&&': function(self, locals, a, b) {
          return a(self, locals) && b(self, locals);
        },
        '||': function(self, locals, a, b) {
          return a(self, locals) || b(self, locals);
        },
        '!': function(self, locals, a) {
          return !a(self, locals);
        },
        '=': true,
        '|': true
      });
      var ESCAPE = {
        "n": "\n",
        "f": "\f",
        "r": "\r",
        "t": "\t",
        "v": "\v",
        "'": "'",
        '"': '"'
      };
      var Lexer = function(options) {
        this.options = options;
      };
      Lexer.prototype = {
        constructor: Lexer,
        lex: function(text) {
          this.text = text;
          this.index = 0;
          this.tokens = [];
          while (this.index < this.text.length) {
            var ch = this.text.charAt(this.index);
            if (ch === '"' || ch === "'") {
              this.readString(ch);
            } else if (this.isNumber(ch) || ch === '.' && this.isNumber(this.peek())) {
              this.readNumber();
            } else if (this.isIdent(ch)) {
              this.readIdent();
            } else if (this.is(ch, '(){}[].,;:?')) {
              this.tokens.push({
                index: this.index,
                text: ch
              });
              this.index++;
            } else if (this.isWhitespace(ch)) {
              this.index++;
            } else {
              var ch2 = ch + this.peek();
              var ch3 = ch2 + this.peek(2);
              var op1 = OPERATORS[ch];
              var op2 = OPERATORS[ch2];
              var op3 = OPERATORS[ch3];
              if (op1 || op2 || op3) {
                var token = op3 ? ch3 : (op2 ? ch2 : ch);
                this.tokens.push({
                  index: this.index,
                  text: token,
                  operator: true
                });
                this.index += token.length;
              } else {
                this.throwError('Unexpected next character ', this.index, this.index + 1);
              }
            }
          }
          return this.tokens;
        },
        is: function(ch, chars) {
          return chars.indexOf(ch) !== -1;
        },
        peek: function(i) {
          var num = i || 1;
          return (this.index + num < this.text.length) ? this.text.charAt(this.index + num) : false;
        },
        isNumber: function(ch) {
          return ('0' <= ch && ch <= '9') && typeof ch === "string";
        },
        isWhitespace: function(ch) {
          return (ch === ' ' || ch === '\r' || ch === '\t' || ch === '\n' || ch === '\v' || ch === '\u00A0');
        },
        isIdent: function(ch) {
          return ('a' <= ch && ch <= 'z' || 'A' <= ch && ch <= 'Z' || '_' === ch || ch === '$');
        },
        isExpOperator: function(ch) {
          return (ch === '-' || ch === '+' || this.isNumber(ch));
        },
        throwError: function(error, start, end) {
          end = end || this.index;
          var colStr = (isDefined(start) ? 's ' + start + '-' + this.index + ' [' + this.text.substring(start, end) + ']' : ' ' + end);
          throw $parseMinErr('lexerr', 'Lexer Error: {0} at column{1} in expression [{2}].', error, colStr, this.text);
        },
        readNumber: function() {
          var number = '';
          var start = this.index;
          while (this.index < this.text.length) {
            var ch = lowercase(this.text.charAt(this.index));
            if (ch == '.' || this.isNumber(ch)) {
              number += ch;
            } else {
              var peekCh = this.peek();
              if (ch == 'e' && this.isExpOperator(peekCh)) {
                number += ch;
              } else if (this.isExpOperator(ch) && peekCh && this.isNumber(peekCh) && number.charAt(number.length - 1) == 'e') {
                number += ch;
              } else if (this.isExpOperator(ch) && (!peekCh || !this.isNumber(peekCh)) && number.charAt(number.length - 1) == 'e') {
                this.throwError('Invalid exponent');
              } else {
                break;
              }
            }
            this.index++;
          }
          this.tokens.push({
            index: start,
            text: number,
            constant: true,
            value: Number(number)
          });
        },
        readIdent: function() {
          var start = this.index;
          while (this.index < this.text.length) {
            var ch = this.text.charAt(this.index);
            if (!(this.isIdent(ch) || this.isNumber(ch))) {
              break;
            }
            this.index++;
          }
          this.tokens.push({
            index: start,
            text: this.text.slice(start, this.index),
            identifier: true
          });
        },
        readString: function(quote) {
          var start = this.index;
          this.index++;
          var string = '';
          var rawString = quote;
          var escape = false;
          while (this.index < this.text.length) {
            var ch = this.text.charAt(this.index);
            rawString += ch;
            if (escape) {
              if (ch === 'u') {
                var hex = this.text.substring(this.index + 1, this.index + 5);
                if (!hex.match(/[\da-f]{4}/i))
                  this.throwError('Invalid unicode escape [\\u' + hex + ']');
                this.index += 4;
                string += String.fromCharCode(parseInt(hex, 16));
              } else {
                var rep = ESCAPE[ch];
                string = string + (rep || ch);
              }
              escape = false;
            } else if (ch === '\\') {
              escape = true;
            } else if (ch === quote) {
              this.index++;
              this.tokens.push({
                index: start,
                text: rawString,
                constant: true,
                value: string
              });
              return ;
            } else {
              string += ch;
            }
            this.index++;
          }
          this.throwError('Unterminated quote', start);
        }
      };
      function isConstant(exp) {
        return exp.constant;
      }
      var Parser = function(lexer, $filter, options) {
        this.lexer = lexer;
        this.$filter = $filter;
        this.options = options;
      };
      Parser.ZERO = extend(function() {
        return 0;
      }, {
        sharedGetter: true,
        constant: true
      });
      Parser.prototype = {
        constructor: Parser,
        parse: function(text) {
          this.text = text;
          this.tokens = this.lexer.lex(text);
          var value = this.statements();
          if (this.tokens.length !== 0) {
            this.throwError('is an unexpected token', this.tokens[0]);
          }
          value.literal = !!value.literal;
          value.constant = !!value.constant;
          return value;
        },
        primary: function() {
          var primary;
          if (this.expect('(')) {
            primary = this.filterChain();
            this.consume(')');
          } else if (this.expect('[')) {
            primary = this.arrayDeclaration();
          } else if (this.expect('{')) {
            primary = this.object();
          } else if (this.peek().identifier && this.peek().text in CONSTANTS) {
            primary = CONSTANTS[this.consume().text];
          } else if (this.peek().identifier) {
            primary = this.identifier();
          } else if (this.peek().constant) {
            primary = this.constant();
          } else {
            this.throwError('not a primary expression', this.peek());
          }
          var next,
              context;
          while ((next = this.expect('(', '[', '.'))) {
            if (next.text === '(') {
              primary = this.functionCall(primary, context);
              context = null;
            } else if (next.text === '[') {
              context = primary;
              primary = this.objectIndex(primary);
            } else if (next.text === '.') {
              context = primary;
              primary = this.fieldAccess(primary);
            } else {
              this.throwError('IMPOSSIBLE');
            }
          }
          return primary;
        },
        throwError: function(msg, token) {
          throw $parseMinErr('syntax', 'Syntax Error: Token \'{0}\' {1} at column {2} of the expression [{3}] starting at [{4}].', token.text, msg, (token.index + 1), this.text, this.text.substring(token.index));
        },
        peekToken: function() {
          if (this.tokens.length === 0)
            throw $parseMinErr('ueoe', 'Unexpected end of expression: {0}', this.text);
          return this.tokens[0];
        },
        peek: function(e1, e2, e3, e4) {
          return this.peekAhead(0, e1, e2, e3, e4);
        },
        peekAhead: function(i, e1, e2, e3, e4) {
          if (this.tokens.length > i) {
            var token = this.tokens[i];
            var t = token.text;
            if (t === e1 || t === e2 || t === e3 || t === e4 || (!e1 && !e2 && !e3 && !e4)) {
              return token;
            }
          }
          return false;
        },
        expect: function(e1, e2, e3, e4) {
          var token = this.peek(e1, e2, e3, e4);
          if (token) {
            this.tokens.shift();
            return token;
          }
          return false;
        },
        consume: function(e1) {
          if (this.tokens.length === 0) {
            throw $parseMinErr('ueoe', 'Unexpected end of expression: {0}', this.text);
          }
          var token = this.expect(e1);
          if (!token) {
            this.throwError('is unexpected, expecting [' + e1 + ']', this.peek());
          }
          return token;
        },
        unaryFn: function(op, right) {
          var fn = OPERATORS[op];
          return extend(function $parseUnaryFn(self, locals) {
            return fn(self, locals, right);
          }, {
            constant: right.constant,
            inputs: [right]
          });
        },
        binaryFn: function(left, op, right, isBranching) {
          var fn = OPERATORS[op];
          return extend(function $parseBinaryFn(self, locals) {
            return fn(self, locals, left, right);
          }, {
            constant: left.constant && right.constant,
            inputs: !isBranching && [left, right]
          });
        },
        identifier: function() {
          var id = this.consume().text;
          while (this.peek('.') && this.peekAhead(1).identifier && !this.peekAhead(2, '(')) {
            id += this.consume().text + this.consume().text;
          }
          return getterFn(id, this.options, this.text);
        },
        constant: function() {
          var value = this.consume().value;
          return extend(function $parseConstant() {
            return value;
          }, {
            constant: true,
            literal: true
          });
        },
        statements: function() {
          var statements = [];
          while (true) {
            if (this.tokens.length > 0 && !this.peek('}', ')', ';', ']'))
              statements.push(this.filterChain());
            if (!this.expect(';')) {
              return (statements.length === 1) ? statements[0] : function $parseStatements(self, locals) {
                var value;
                for (var i = 0,
                    ii = statements.length; i < ii; i++) {
                  value = statements[i](self, locals);
                }
                return value;
              };
            }
          }
        },
        filterChain: function() {
          var left = this.expression();
          var token;
          while ((token = this.expect('|'))) {
            left = this.filter(left);
          }
          return left;
        },
        filter: function(inputFn) {
          var fn = this.$filter(this.consume().text);
          var argsFn;
          var args;
          if (this.peek(':')) {
            argsFn = [];
            args = [];
            while (this.expect(':')) {
              argsFn.push(this.expression());
            }
          }
          var inputs = [inputFn].concat(argsFn || []);
          return extend(function $parseFilter(self, locals) {
            var input = inputFn(self, locals);
            if (args) {
              args[0] = input;
              var i = argsFn.length;
              while (i--) {
                args[i + 1] = argsFn[i](self, locals);
              }
              return fn.apply(undefined, args);
            }
            return fn(input);
          }, {
            constant: !fn.$stateful && inputs.every(isConstant),
            inputs: !fn.$stateful && inputs
          });
        },
        expression: function() {
          return this.assignment();
        },
        assignment: function() {
          var left = this.ternary();
          var right;
          var token;
          if ((token = this.expect('='))) {
            if (!left.assign) {
              this.throwError('implies assignment but [' + this.text.substring(0, token.index) + '] can not be assigned to', token);
            }
            right = this.ternary();
            return extend(function $parseAssignment(scope, locals) {
              return left.assign(scope, right(scope, locals), locals);
            }, {inputs: [left, right]});
          }
          return left;
        },
        ternary: function() {
          var left = this.logicalOR();
          var middle;
          var token;
          if ((token = this.expect('?'))) {
            middle = this.assignment();
            if (this.consume(':')) {
              var right = this.assignment();
              return extend(function $parseTernary(self, locals) {
                return left(self, locals) ? middle(self, locals) : right(self, locals);
              }, {constant: left.constant && middle.constant && right.constant});
            }
          }
          return left;
        },
        logicalOR: function() {
          var left = this.logicalAND();
          var token;
          while ((token = this.expect('||'))) {
            left = this.binaryFn(left, token.text, this.logicalAND(), true);
          }
          return left;
        },
        logicalAND: function() {
          var left = this.equality();
          var token;
          while ((token = this.expect('&&'))) {
            left = this.binaryFn(left, token.text, this.equality(), true);
          }
          return left;
        },
        equality: function() {
          var left = this.relational();
          var token;
          while ((token = this.expect('==', '!=', '===', '!=='))) {
            left = this.binaryFn(left, token.text, this.relational());
          }
          return left;
        },
        relational: function() {
          var left = this.additive();
          var token;
          while ((token = this.expect('<', '>', '<=', '>='))) {
            left = this.binaryFn(left, token.text, this.additive());
          }
          return left;
        },
        additive: function() {
          var left = this.multiplicative();
          var token;
          while ((token = this.expect('+', '-'))) {
            left = this.binaryFn(left, token.text, this.multiplicative());
          }
          return left;
        },
        multiplicative: function() {
          var left = this.unary();
          var token;
          while ((token = this.expect('*', '/', '%'))) {
            left = this.binaryFn(left, token.text, this.unary());
          }
          return left;
        },
        unary: function() {
          var token;
          if (this.expect('+')) {
            return this.primary();
          } else if ((token = this.expect('-'))) {
            return this.binaryFn(Parser.ZERO, token.text, this.unary());
          } else if ((token = this.expect('!'))) {
            return this.unaryFn(token.text, this.unary());
          } else {
            return this.primary();
          }
        },
        fieldAccess: function(object) {
          var getter = this.identifier();
          return extend(function $parseFieldAccess(scope, locals, self) {
            var o = self || object(scope, locals);
            return (o == null) ? undefined : getter(o);
          }, {assign: function(scope, value, locals) {
              var o = object(scope, locals);
              if (!o)
                object.assign(scope, o = {}, locals);
              return getter.assign(o, value);
            }});
        },
        objectIndex: function(obj) {
          var expression = this.text;
          var indexFn = this.expression();
          this.consume(']');
          return extend(function $parseObjectIndex(self, locals) {
            var o = obj(self, locals),
                i = indexFn(self, locals),
                v;
            ensureSafeMemberName(i, expression);
            if (!o)
              return undefined;
            v = ensureSafeObject(o[i], expression);
            return v;
          }, {assign: function(self, value, locals) {
              var key = ensureSafeMemberName(indexFn(self, locals), expression);
              var o = ensureSafeObject(obj(self, locals), expression);
              if (!o)
                obj.assign(self, o = {}, locals);
              return o[key] = value;
            }});
        },
        functionCall: function(fnGetter, contextGetter) {
          var argsFn = [];
          if (this.peekToken().text !== ')') {
            do {
              argsFn.push(this.expression());
            } while (this.expect(','));
          }
          this.consume(')');
          var expressionText = this.text;
          var args = argsFn.length ? [] : null;
          return function $parseFunctionCall(scope, locals) {
            var context = contextGetter ? contextGetter(scope, locals) : isDefined(contextGetter) ? undefined : scope;
            var fn = fnGetter(scope, locals, context) || noop;
            if (args) {
              var i = argsFn.length;
              while (i--) {
                args[i] = ensureSafeObject(argsFn[i](scope, locals), expressionText);
              }
            }
            ensureSafeObject(context, expressionText);
            ensureSafeFunction(fn, expressionText);
            var v = fn.apply ? fn.apply(context, args) : fn(args[0], args[1], args[2], args[3], args[4]);
            if (args) {
              args.length = 0;
            }
            return ensureSafeObject(v, expressionText);
          };
        },
        arrayDeclaration: function() {
          var elementFns = [];
          if (this.peekToken().text !== ']') {
            do {
              if (this.peek(']')) {
                break;
              }
              elementFns.push(this.expression());
            } while (this.expect(','));
          }
          this.consume(']');
          return extend(function $parseArrayLiteral(self, locals) {
            var array = [];
            for (var i = 0,
                ii = elementFns.length; i < ii; i++) {
              array.push(elementFns[i](self, locals));
            }
            return array;
          }, {
            literal: true,
            constant: elementFns.every(isConstant),
            inputs: elementFns
          });
        },
        object: function() {
          var keys = [],
              valueFns = [];
          if (this.peekToken().text !== '}') {
            do {
              if (this.peek('}')) {
                break;
              }
              var token = this.consume();
              if (token.constant) {
                keys.push(token.value);
              } else if (token.identifier) {
                keys.push(token.text);
              } else {
                this.throwError("invalid key", token);
              }
              this.consume(':');
              valueFns.push(this.expression());
            } while (this.expect(','));
          }
          this.consume('}');
          return extend(function $parseObjectLiteral(self, locals) {
            var object = {};
            for (var i = 0,
                ii = valueFns.length; i < ii; i++) {
              object[keys[i]] = valueFns[i](self, locals);
            }
            return object;
          }, {
            literal: true,
            constant: valueFns.every(isConstant),
            inputs: valueFns
          });
        }
      };
      function setter(obj, locals, path, setValue, fullExp) {
        ensureSafeObject(obj, fullExp);
        ensureSafeObject(locals, fullExp);
        var element = path.split('.'),
            key;
        for (var i = 0; element.length > 1; i++) {
          key = ensureSafeMemberName(element.shift(), fullExp);
          var propertyObj = (i === 0 && locals && locals[key]) || obj[key];
          if (!propertyObj) {
            propertyObj = {};
            obj[key] = propertyObj;
          }
          obj = ensureSafeObject(propertyObj, fullExp);
        }
        key = ensureSafeMemberName(element.shift(), fullExp);
        ensureSafeObject(obj[key], fullExp);
        obj[key] = setValue;
        return setValue;
      }
      var getterFnCacheDefault = createMap();
      var getterFnCacheExpensive = createMap();
      function isPossiblyDangerousMemberName(name) {
        return name == 'constructor';
      }
      function cspSafeGetterFn(key0, key1, key2, key3, key4, fullExp, expensiveChecks) {
        ensureSafeMemberName(key0, fullExp);
        ensureSafeMemberName(key1, fullExp);
        ensureSafeMemberName(key2, fullExp);
        ensureSafeMemberName(key3, fullExp);
        ensureSafeMemberName(key4, fullExp);
        var eso = function(o) {
          return ensureSafeObject(o, fullExp);
        };
        var eso0 = (expensiveChecks || isPossiblyDangerousMemberName(key0)) ? eso : identity;
        var eso1 = (expensiveChecks || isPossiblyDangerousMemberName(key1)) ? eso : identity;
        var eso2 = (expensiveChecks || isPossiblyDangerousMemberName(key2)) ? eso : identity;
        var eso3 = (expensiveChecks || isPossiblyDangerousMemberName(key3)) ? eso : identity;
        var eso4 = (expensiveChecks || isPossiblyDangerousMemberName(key4)) ? eso : identity;
        return function cspSafeGetter(scope, locals) {
          var pathVal = (locals && locals.hasOwnProperty(key0)) ? locals : scope;
          if (pathVal == null)
            return pathVal;
          pathVal = eso0(pathVal[key0]);
          if (!key1)
            return pathVal;
          if (pathVal == null)
            return undefined;
          pathVal = eso1(pathVal[key1]);
          if (!key2)
            return pathVal;
          if (pathVal == null)
            return undefined;
          pathVal = eso2(pathVal[key2]);
          if (!key3)
            return pathVal;
          if (pathVal == null)
            return undefined;
          pathVal = eso3(pathVal[key3]);
          if (!key4)
            return pathVal;
          if (pathVal == null)
            return undefined;
          pathVal = eso4(pathVal[key4]);
          return pathVal;
        };
      }
      function getterFnWithEnsureSafeObject(fn, fullExpression) {
        return function(s, l) {
          return fn(s, l, ensureSafeObject, fullExpression);
        };
      }
      function getterFn(path, options, fullExp) {
        var expensiveChecks = options.expensiveChecks;
        var getterFnCache = (expensiveChecks ? getterFnCacheExpensive : getterFnCacheDefault);
        var fn = getterFnCache[path];
        if (fn)
          return fn;
        var pathKeys = path.split('.'),
            pathKeysLength = pathKeys.length;
        if (options.csp) {
          if (pathKeysLength < 6) {
            fn = cspSafeGetterFn(pathKeys[0], pathKeys[1], pathKeys[2], pathKeys[3], pathKeys[4], fullExp, expensiveChecks);
          } else {
            fn = function cspSafeGetter(scope, locals) {
              var i = 0,
                  val;
              do {
                val = cspSafeGetterFn(pathKeys[i++], pathKeys[i++], pathKeys[i++], pathKeys[i++], pathKeys[i++], fullExp, expensiveChecks)(scope, locals);
                locals = undefined;
                scope = val;
              } while (i < pathKeysLength);
              return val;
            };
          }
        } else {
          var code = '';
          if (expensiveChecks) {
            code += 's = eso(s, fe);\nl = eso(l, fe);\n';
          }
          var needsEnsureSafeObject = expensiveChecks;
          forEach(pathKeys, function(key, index) {
            ensureSafeMemberName(key, fullExp);
            var lookupJs = (index ? 's' : '((l&&l.hasOwnProperty("' + key + '"))?l:s)') + '.' + key;
            if (expensiveChecks || isPossiblyDangerousMemberName(key)) {
              lookupJs = 'eso(' + lookupJs + ', fe)';
              needsEnsureSafeObject = true;
            }
            code += 'if(s == null) return undefined;\n' + 's=' + lookupJs + ';\n';
          });
          code += 'return s;';
          var evaledFnGetter = new Function('s', 'l', 'eso', 'fe', code);
          evaledFnGetter.toString = valueFn(code);
          if (needsEnsureSafeObject) {
            evaledFnGetter = getterFnWithEnsureSafeObject(evaledFnGetter, fullExp);
          }
          fn = evaledFnGetter;
        }
        fn.sharedGetter = true;
        fn.assign = function(self, value, locals) {
          return setter(self, locals, path, value, path);
        };
        getterFnCache[path] = fn;
        return fn;
      }
      var objectValueOf = Object.prototype.valueOf;
      function getValueOf(value) {
        return isFunction(value.valueOf) ? value.valueOf() : objectValueOf.call(value);
      }
      function $ParseProvider() {
        var cacheDefault = createMap();
        var cacheExpensive = createMap();
        this.$get = ['$filter', '$sniffer', function($filter, $sniffer) {
          var $parseOptions = {
            csp: $sniffer.csp,
            expensiveChecks: false
          },
              $parseOptionsExpensive = {
                csp: $sniffer.csp,
                expensiveChecks: true
              };
          function wrapSharedExpression(exp) {
            var wrapped = exp;
            if (exp.sharedGetter) {
              wrapped = function $parseWrapper(self, locals) {
                return exp(self, locals);
              };
              wrapped.literal = exp.literal;
              wrapped.constant = exp.constant;
              wrapped.assign = exp.assign;
            }
            return wrapped;
          }
          return function $parse(exp, interceptorFn, expensiveChecks) {
            var parsedExpression,
                oneTime,
                cacheKey;
            switch (typeof exp) {
              case 'string':
                cacheKey = exp = exp.trim();
                var cache = (expensiveChecks ? cacheExpensive : cacheDefault);
                parsedExpression = cache[cacheKey];
                if (!parsedExpression) {
                  if (exp.charAt(0) === ':' && exp.charAt(1) === ':') {
                    oneTime = true;
                    exp = exp.substring(2);
                  }
                  var parseOptions = expensiveChecks ? $parseOptionsExpensive : $parseOptions;
                  var lexer = new Lexer(parseOptions);
                  var parser = new Parser(lexer, $filter, parseOptions);
                  parsedExpression = parser.parse(exp);
                  if (parsedExpression.constant) {
                    parsedExpression.$$watchDelegate = constantWatchDelegate;
                  } else if (oneTime) {
                    parsedExpression = wrapSharedExpression(parsedExpression);
                    parsedExpression.$$watchDelegate = parsedExpression.literal ? oneTimeLiteralWatchDelegate : oneTimeWatchDelegate;
                  } else if (parsedExpression.inputs) {
                    parsedExpression.$$watchDelegate = inputsWatchDelegate;
                  }
                  cache[cacheKey] = parsedExpression;
                }
                return addInterceptor(parsedExpression, interceptorFn);
              case 'function':
                return addInterceptor(exp, interceptorFn);
              default:
                return addInterceptor(noop, interceptorFn);
            }
          };
          function collectExpressionInputs(inputs, list) {
            for (var i = 0,
                ii = inputs.length; i < ii; i++) {
              var input = inputs[i];
              if (!input.constant) {
                if (input.inputs) {
                  collectExpressionInputs(input.inputs, list);
                } else if (list.indexOf(input) === -1) {
                  list.push(input);
                }
              }
            }
            return list;
          }
          function expressionInputDirtyCheck(newValue, oldValueOfValue) {
            if (newValue == null || oldValueOfValue == null) {
              return newValue === oldValueOfValue;
            }
            if (typeof newValue === 'object') {
              newValue = getValueOf(newValue);
              if (typeof newValue === 'object') {
                return false;
              }
            }
            return newValue === oldValueOfValue || (newValue !== newValue && oldValueOfValue !== oldValueOfValue);
          }
          function inputsWatchDelegate(scope, listener, objectEquality, parsedExpression) {
            var inputExpressions = parsedExpression.$$inputs || (parsedExpression.$$inputs = collectExpressionInputs(parsedExpression.inputs, []));
            var lastResult;
            if (inputExpressions.length === 1) {
              var oldInputValue = expressionInputDirtyCheck;
              inputExpressions = inputExpressions[0];
              return scope.$watch(function expressionInputWatch(scope) {
                var newInputValue = inputExpressions(scope);
                if (!expressionInputDirtyCheck(newInputValue, oldInputValue)) {
                  lastResult = parsedExpression(scope);
                  oldInputValue = newInputValue && getValueOf(newInputValue);
                }
                return lastResult;
              }, listener, objectEquality);
            }
            var oldInputValueOfValues = [];
            for (var i = 0,
                ii = inputExpressions.length; i < ii; i++) {
              oldInputValueOfValues[i] = expressionInputDirtyCheck;
            }
            return scope.$watch(function expressionInputsWatch(scope) {
              var changed = false;
              for (var i = 0,
                  ii = inputExpressions.length; i < ii; i++) {
                var newInputValue = inputExpressions[i](scope);
                if (changed || (changed = !expressionInputDirtyCheck(newInputValue, oldInputValueOfValues[i]))) {
                  oldInputValueOfValues[i] = newInputValue && getValueOf(newInputValue);
                }
              }
              if (changed) {
                lastResult = parsedExpression(scope);
              }
              return lastResult;
            }, listener, objectEquality);
          }
          function oneTimeWatchDelegate(scope, listener, objectEquality, parsedExpression) {
            var unwatch,
                lastValue;
            return unwatch = scope.$watch(function oneTimeWatch(scope) {
              return parsedExpression(scope);
            }, function oneTimeListener(value, old, scope) {
              lastValue = value;
              if (isFunction(listener)) {
                listener.apply(this, arguments);
              }
              if (isDefined(value)) {
                scope.$$postDigest(function() {
                  if (isDefined(lastValue)) {
                    unwatch();
                  }
                });
              }
            }, objectEquality);
          }
          function oneTimeLiteralWatchDelegate(scope, listener, objectEquality, parsedExpression) {
            var unwatch,
                lastValue;
            return unwatch = scope.$watch(function oneTimeWatch(scope) {
              return parsedExpression(scope);
            }, function oneTimeListener(value, old, scope) {
              lastValue = value;
              if (isFunction(listener)) {
                listener.call(this, value, old, scope);
              }
              if (isAllDefined(value)) {
                scope.$$postDigest(function() {
                  if (isAllDefined(lastValue))
                    unwatch();
                });
              }
            }, objectEquality);
            function isAllDefined(value) {
              var allDefined = true;
              forEach(value, function(val) {
                if (!isDefined(val))
                  allDefined = false;
              });
              return allDefined;
            }
          }
          function constantWatchDelegate(scope, listener, objectEquality, parsedExpression) {
            var unwatch;
            return unwatch = scope.$watch(function constantWatch(scope) {
              return parsedExpression(scope);
            }, function constantListener(value, old, scope) {
              if (isFunction(listener)) {
                listener.apply(this, arguments);
              }
              unwatch();
            }, objectEquality);
          }
          function addInterceptor(parsedExpression, interceptorFn) {
            if (!interceptorFn)
              return parsedExpression;
            var watchDelegate = parsedExpression.$$watchDelegate;
            var regularWatch = watchDelegate !== oneTimeLiteralWatchDelegate && watchDelegate !== oneTimeWatchDelegate;
            var fn = regularWatch ? function regularInterceptedExpression(scope, locals) {
              var value = parsedExpression(scope, locals);
              return interceptorFn(value, scope, locals);
            } : function oneTimeInterceptedExpression(scope, locals) {
              var value = parsedExpression(scope, locals);
              var result = interceptorFn(value, scope, locals);
              return isDefined(value) ? result : value;
            };
            if (parsedExpression.$$watchDelegate && parsedExpression.$$watchDelegate !== inputsWatchDelegate) {
              fn.$$watchDelegate = parsedExpression.$$watchDelegate;
            } else if (!interceptorFn.$stateful) {
              fn.$$watchDelegate = inputsWatchDelegate;
              fn.inputs = [parsedExpression];
            }
            return fn;
          }
        }];
      }
      function $QProvider() {
        this.$get = ['$rootScope', '$exceptionHandler', function($rootScope, $exceptionHandler) {
          return qFactory(function(callback) {
            $rootScope.$evalAsync(callback);
          }, $exceptionHandler);
        }];
      }
      function $$QProvider() {
        this.$get = ['$browser', '$exceptionHandler', function($browser, $exceptionHandler) {
          return qFactory(function(callback) {
            $browser.defer(callback);
          }, $exceptionHandler);
        }];
      }
      function qFactory(nextTick, exceptionHandler) {
        var $qMinErr = minErr('$q', TypeError);
        function callOnce(self, resolveFn, rejectFn) {
          var called = false;
          function wrap(fn) {
            return function(value) {
              if (called)
                return ;
              called = true;
              fn.call(self, value);
            };
          }
          return [wrap(resolveFn), wrap(rejectFn)];
        }
        var defer = function() {
          return new Deferred();
        };
        function Promise() {
          this.$$state = {status: 0};
        }
        Promise.prototype = {
          then: function(onFulfilled, onRejected, progressBack) {
            var result = new Deferred();
            this.$$state.pending = this.$$state.pending || [];
            this.$$state.pending.push([result, onFulfilled, onRejected, progressBack]);
            if (this.$$state.status > 0)
              scheduleProcessQueue(this.$$state);
            return result.promise;
          },
          "catch": function(callback) {
            return this.then(null, callback);
          },
          "finally": function(callback, progressBack) {
            return this.then(function(value) {
              return handleCallback(value, true, callback);
            }, function(error) {
              return handleCallback(error, false, callback);
            }, progressBack);
          }
        };
        function simpleBind(context, fn) {
          return function(value) {
            fn.call(context, value);
          };
        }
        function processQueue(state) {
          var fn,
              promise,
              pending;
          pending = state.pending;
          state.processScheduled = false;
          state.pending = undefined;
          for (var i = 0,
              ii = pending.length; i < ii; ++i) {
            promise = pending[i][0];
            fn = pending[i][state.status];
            try {
              if (isFunction(fn)) {
                promise.resolve(fn(state.value));
              } else if (state.status === 1) {
                promise.resolve(state.value);
              } else {
                promise.reject(state.value);
              }
            } catch (e) {
              promise.reject(e);
              exceptionHandler(e);
            }
          }
        }
        function scheduleProcessQueue(state) {
          if (state.processScheduled || !state.pending)
            return ;
          state.processScheduled = true;
          nextTick(function() {
            processQueue(state);
          });
        }
        function Deferred() {
          this.promise = new Promise();
          this.resolve = simpleBind(this, this.resolve);
          this.reject = simpleBind(this, this.reject);
          this.notify = simpleBind(this, this.notify);
        }
        Deferred.prototype = {
          resolve: function(val) {
            if (this.promise.$$state.status)
              return ;
            if (val === this.promise) {
              this.$$reject($qMinErr('qcycle', "Expected promise to be resolved with value other than itself '{0}'", val));
            } else {
              this.$$resolve(val);
            }
          },
          $$resolve: function(val) {
            var then,
                fns;
            fns = callOnce(this, this.$$resolve, this.$$reject);
            try {
              if ((isObject(val) || isFunction(val)))
                then = val && val.then;
              if (isFunction(then)) {
                this.promise.$$state.status = -1;
                then.call(val, fns[0], fns[1], this.notify);
              } else {
                this.promise.$$state.value = val;
                this.promise.$$state.status = 1;
                scheduleProcessQueue(this.promise.$$state);
              }
            } catch (e) {
              fns[1](e);
              exceptionHandler(e);
            }
          },
          reject: function(reason) {
            if (this.promise.$$state.status)
              return ;
            this.$$reject(reason);
          },
          $$reject: function(reason) {
            this.promise.$$state.value = reason;
            this.promise.$$state.status = 2;
            scheduleProcessQueue(this.promise.$$state);
          },
          notify: function(progress) {
            var callbacks = this.promise.$$state.pending;
            if ((this.promise.$$state.status <= 0) && callbacks && callbacks.length) {
              nextTick(function() {
                var callback,
                    result;
                for (var i = 0,
                    ii = callbacks.length; i < ii; i++) {
                  result = callbacks[i][0];
                  callback = callbacks[i][3];
                  try {
                    result.notify(isFunction(callback) ? callback(progress) : progress);
                  } catch (e) {
                    exceptionHandler(e);
                  }
                }
              });
            }
          }
        };
        var reject = function(reason) {
          var result = new Deferred();
          result.reject(reason);
          return result.promise;
        };
        var makePromise = function makePromise(value, resolved) {
          var result = new Deferred();
          if (resolved) {
            result.resolve(value);
          } else {
            result.reject(value);
          }
          return result.promise;
        };
        var handleCallback = function handleCallback(value, isResolved, callback) {
          var callbackOutput = null;
          try {
            if (isFunction(callback))
              callbackOutput = callback();
          } catch (e) {
            return makePromise(e, false);
          }
          if (isPromiseLike(callbackOutput)) {
            return callbackOutput.then(function() {
              return makePromise(value, isResolved);
            }, function(error) {
              return makePromise(error, false);
            });
          } else {
            return makePromise(value, isResolved);
          }
        };
        var when = function(value, callback, errback, progressBack) {
          var result = new Deferred();
          result.resolve(value);
          return result.promise.then(callback, errback, progressBack);
        };
        function all(promises) {
          var deferred = new Deferred(),
              counter = 0,
              results = isArray(promises) ? [] : {};
          forEach(promises, function(promise, key) {
            counter++;
            when(promise).then(function(value) {
              if (results.hasOwnProperty(key))
                return ;
              results[key] = value;
              if (!(--counter))
                deferred.resolve(results);
            }, function(reason) {
              if (results.hasOwnProperty(key))
                return ;
              deferred.reject(reason);
            });
          });
          if (counter === 0) {
            deferred.resolve(results);
          }
          return deferred.promise;
        }
        var $Q = function Q(resolver) {
          if (!isFunction(resolver)) {
            throw $qMinErr('norslvr', "Expected resolverFn, got '{0}'", resolver);
          }
          if (!(this instanceof Q)) {
            return new Q(resolver);
          }
          var deferred = new Deferred();
          function resolveFn(value) {
            deferred.resolve(value);
          }
          function rejectFn(reason) {
            deferred.reject(reason);
          }
          resolver(resolveFn, rejectFn);
          return deferred.promise;
        };
        $Q.defer = defer;
        $Q.reject = reject;
        $Q.when = when;
        $Q.all = all;
        return $Q;
      }
      function $$RAFProvider() {
        this.$get = ['$window', '$timeout', function($window, $timeout) {
          var requestAnimationFrame = $window.requestAnimationFrame || $window.webkitRequestAnimationFrame;
          var cancelAnimationFrame = $window.cancelAnimationFrame || $window.webkitCancelAnimationFrame || $window.webkitCancelRequestAnimationFrame;
          var rafSupported = !!requestAnimationFrame;
          var raf = rafSupported ? function(fn) {
            var id = requestAnimationFrame(fn);
            return function() {
              cancelAnimationFrame(id);
            };
          } : function(fn) {
            var timer = $timeout(fn, 16.66, false);
            return function() {
              $timeout.cancel(timer);
            };
          };
          raf.supported = rafSupported;
          return raf;
        }];
      }
      function $RootScopeProvider() {
        var TTL = 10;
        var $rootScopeMinErr = minErr('$rootScope');
        var lastDirtyWatch = null;
        var applyAsyncId = null;
        this.digestTtl = function(value) {
          if (arguments.length) {
            TTL = value;
          }
          return TTL;
        };
        function createChildScopeClass(parent) {
          function ChildScope() {
            this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
            this.$$listeners = {};
            this.$$listenerCount = {};
            this.$$watchersCount = 0;
            this.$id = nextUid();
            this.$$ChildScope = null;
          }
          ChildScope.prototype = parent;
          return ChildScope;
        }
        this.$get = ['$injector', '$exceptionHandler', '$parse', '$browser', function($injector, $exceptionHandler, $parse, $browser) {
          function destroyChildScope($event) {
            $event.currentScope.$$destroyed = true;
          }
          function Scope() {
            this.$id = nextUid();
            this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
            this.$root = this;
            this.$$destroyed = false;
            this.$$listeners = {};
            this.$$listenerCount = {};
            this.$$isolateBindings = null;
          }
          Scope.prototype = {
            constructor: Scope,
            $new: function(isolate, parent) {
              var child;
              parent = parent || this;
              if (isolate) {
                child = new Scope();
                child.$root = this.$root;
              } else {
                if (!this.$$ChildScope) {
                  this.$$ChildScope = createChildScopeClass(this);
                }
                child = new this.$$ChildScope();
              }
              child.$parent = parent;
              child.$$prevSibling = parent.$$childTail;
              if (parent.$$childHead) {
                parent.$$childTail.$$nextSibling = child;
                parent.$$childTail = child;
              } else {
                parent.$$childHead = parent.$$childTail = child;
              }
              if (isolate || parent != this)
                child.$on('$destroy', destroyChildScope);
              return child;
            },
            $watch: function(watchExp, listener, objectEquality) {
              var get = $parse(watchExp);
              if (get.$$watchDelegate) {
                return get.$$watchDelegate(this, listener, objectEquality, get);
              }
              var scope = this,
                  array = scope.$$watchers,
                  watcher = {
                    fn: listener,
                    last: initWatchVal,
                    get: get,
                    exp: watchExp,
                    eq: !!objectEquality
                  };
              lastDirtyWatch = null;
              if (!isFunction(listener)) {
                watcher.fn = noop;
              }
              if (!array) {
                array = scope.$$watchers = [];
              }
              array.unshift(watcher);
              return function deregisterWatch() {
                arrayRemove(array, watcher);
                lastDirtyWatch = null;
              };
            },
            $watchGroup: function(watchExpressions, listener) {
              var oldValues = new Array(watchExpressions.length);
              var newValues = new Array(watchExpressions.length);
              var deregisterFns = [];
              var self = this;
              var changeReactionScheduled = false;
              var firstRun = true;
              if (!watchExpressions.length) {
                var shouldCall = true;
                self.$evalAsync(function() {
                  if (shouldCall)
                    listener(newValues, newValues, self);
                });
                return function deregisterWatchGroup() {
                  shouldCall = false;
                };
              }
              if (watchExpressions.length === 1) {
                return this.$watch(watchExpressions[0], function watchGroupAction(value, oldValue, scope) {
                  newValues[0] = value;
                  oldValues[0] = oldValue;
                  listener(newValues, (value === oldValue) ? newValues : oldValues, scope);
                });
              }
              forEach(watchExpressions, function(expr, i) {
                var unwatchFn = self.$watch(expr, function watchGroupSubAction(value, oldValue) {
                  newValues[i] = value;
                  oldValues[i] = oldValue;
                  if (!changeReactionScheduled) {
                    changeReactionScheduled = true;
                    self.$evalAsync(watchGroupAction);
                  }
                });
                deregisterFns.push(unwatchFn);
              });
              function watchGroupAction() {
                changeReactionScheduled = false;
                if (firstRun) {
                  firstRun = false;
                  listener(newValues, newValues, self);
                } else {
                  listener(newValues, oldValues, self);
                }
              }
              return function deregisterWatchGroup() {
                while (deregisterFns.length) {
                  deregisterFns.shift()();
                }
              };
            },
            $watchCollection: function(obj, listener) {
              $watchCollectionInterceptor.$stateful = true;
              var self = this;
              var newValue;
              var oldValue;
              var veryOldValue;
              var trackVeryOldValue = (listener.length > 1);
              var changeDetected = 0;
              var changeDetector = $parse(obj, $watchCollectionInterceptor);
              var internalArray = [];
              var internalObject = {};
              var initRun = true;
              var oldLength = 0;
              function $watchCollectionInterceptor(_value) {
                newValue = _value;
                var newLength,
                    key,
                    bothNaN,
                    newItem,
                    oldItem;
                if (isUndefined(newValue))
                  return ;
                if (!isObject(newValue)) {
                  if (oldValue !== newValue) {
                    oldValue = newValue;
                    changeDetected++;
                  }
                } else if (isArrayLike(newValue)) {
                  if (oldValue !== internalArray) {
                    oldValue = internalArray;
                    oldLength = oldValue.length = 0;
                    changeDetected++;
                  }
                  newLength = newValue.length;
                  if (oldLength !== newLength) {
                    changeDetected++;
                    oldValue.length = oldLength = newLength;
                  }
                  for (var i = 0; i < newLength; i++) {
                    oldItem = oldValue[i];
                    newItem = newValue[i];
                    bothNaN = (oldItem !== oldItem) && (newItem !== newItem);
                    if (!bothNaN && (oldItem !== newItem)) {
                      changeDetected++;
                      oldValue[i] = newItem;
                    }
                  }
                } else {
                  if (oldValue !== internalObject) {
                    oldValue = internalObject = {};
                    oldLength = 0;
                    changeDetected++;
                  }
                  newLength = 0;
                  for (key in newValue) {
                    if (newValue.hasOwnProperty(key)) {
                      newLength++;
                      newItem = newValue[key];
                      oldItem = oldValue[key];
                      if (key in oldValue) {
                        bothNaN = (oldItem !== oldItem) && (newItem !== newItem);
                        if (!bothNaN && (oldItem !== newItem)) {
                          changeDetected++;
                          oldValue[key] = newItem;
                        }
                      } else {
                        oldLength++;
                        oldValue[key] = newItem;
                        changeDetected++;
                      }
                    }
                  }
                  if (oldLength > newLength) {
                    changeDetected++;
                    for (key in oldValue) {
                      if (!newValue.hasOwnProperty(key)) {
                        oldLength--;
                        delete oldValue[key];
                      }
                    }
                  }
                }
                return changeDetected;
              }
              function $watchCollectionAction() {
                if (initRun) {
                  initRun = false;
                  listener(newValue, newValue, self);
                } else {
                  listener(newValue, veryOldValue, self);
                }
                if (trackVeryOldValue) {
                  if (!isObject(newValue)) {
                    veryOldValue = newValue;
                  } else if (isArrayLike(newValue)) {
                    veryOldValue = new Array(newValue.length);
                    for (var i = 0; i < newValue.length; i++) {
                      veryOldValue[i] = newValue[i];
                    }
                  } else {
                    veryOldValue = {};
                    for (var key in newValue) {
                      if (hasOwnProperty.call(newValue, key)) {
                        veryOldValue[key] = newValue[key];
                      }
                    }
                  }
                }
              }
              return this.$watch(changeDetector, $watchCollectionAction);
            },
            $digest: function() {
              var watch,
                  value,
                  last,
                  watchers,
                  length,
                  dirty,
                  ttl = TTL,
                  next,
                  current,
                  target = this,
                  watchLog = [],
                  logIdx,
                  logMsg,
                  asyncTask;
              beginPhase('$digest');
              $browser.$$checkUrlChange();
              if (this === $rootScope && applyAsyncId !== null) {
                $browser.defer.cancel(applyAsyncId);
                flushApplyAsync();
              }
              lastDirtyWatch = null;
              do {
                dirty = false;
                current = target;
                while (asyncQueue.length) {
                  try {
                    asyncTask = asyncQueue.shift();
                    asyncTask.scope.$eval(asyncTask.expression, asyncTask.locals);
                  } catch (e) {
                    $exceptionHandler(e);
                  }
                  lastDirtyWatch = null;
                }
                traverseScopesLoop: do {
                  if ((watchers = current.$$watchers)) {
                    length = watchers.length;
                    while (length--) {
                      try {
                        watch = watchers[length];
                        if (watch) {
                          if ((value = watch.get(current)) !== (last = watch.last) && !(watch.eq ? equals(value, last) : (typeof value === 'number' && typeof last === 'number' && isNaN(value) && isNaN(last)))) {
                            dirty = true;
                            lastDirtyWatch = watch;
                            watch.last = watch.eq ? copy(value, null) : value;
                            watch.fn(value, ((last === initWatchVal) ? value : last), current);
                            if (ttl < 5) {
                              logIdx = 4 - ttl;
                              if (!watchLog[logIdx])
                                watchLog[logIdx] = [];
                              watchLog[logIdx].push({
                                msg: isFunction(watch.exp) ? 'fn: ' + (watch.exp.name || watch.exp.toString()) : watch.exp,
                                newVal: value,
                                oldVal: last
                              });
                            }
                          } else if (watch === lastDirtyWatch) {
                            dirty = false;
                            break traverseScopesLoop;
                          }
                        }
                      } catch (e) {
                        $exceptionHandler(e);
                      }
                    }
                  }
                  if (!(next = (current.$$childHead || (current !== target && current.$$nextSibling)))) {
                    while (current !== target && !(next = current.$$nextSibling)) {
                      current = current.$parent;
                    }
                  }
                } while ((current = next));
                if ((dirty || asyncQueue.length) && !(ttl--)) {
                  clearPhase();
                  throw $rootScopeMinErr('infdig', '{0} $digest() iterations reached. Aborting!\n' + 'Watchers fired in the last 5 iterations: {1}', TTL, watchLog);
                }
              } while (dirty || asyncQueue.length);
              clearPhase();
              while (postDigestQueue.length) {
                try {
                  postDigestQueue.shift()();
                } catch (e) {
                  $exceptionHandler(e);
                }
              }
            },
            $destroy: function() {
              if (this.$$destroyed)
                return ;
              var parent = this.$parent;
              this.$broadcast('$destroy');
              this.$$destroyed = true;
              if (this === $rootScope)
                return ;
              for (var eventName in this.$$listenerCount) {
                decrementListenerCount(this, this.$$listenerCount[eventName], eventName);
              }
              if (parent.$$childHead == this)
                parent.$$childHead = this.$$nextSibling;
              if (parent.$$childTail == this)
                parent.$$childTail = this.$$prevSibling;
              if (this.$$prevSibling)
                this.$$prevSibling.$$nextSibling = this.$$nextSibling;
              if (this.$$nextSibling)
                this.$$nextSibling.$$prevSibling = this.$$prevSibling;
              this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = noop;
              this.$on = this.$watch = this.$watchGroup = function() {
                return noop;
              };
              this.$$listeners = {};
              this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null;
            },
            $eval: function(expr, locals) {
              return $parse(expr)(this, locals);
            },
            $evalAsync: function(expr, locals) {
              if (!$rootScope.$$phase && !asyncQueue.length) {
                $browser.defer(function() {
                  if (asyncQueue.length) {
                    $rootScope.$digest();
                  }
                });
              }
              asyncQueue.push({
                scope: this,
                expression: expr,
                locals: locals
              });
            },
            $$postDigest: function(fn) {
              postDigestQueue.push(fn);
            },
            $apply: function(expr) {
              try {
                beginPhase('$apply');
                return this.$eval(expr);
              } catch (e) {
                $exceptionHandler(e);
              } finally {
                clearPhase();
                try {
                  $rootScope.$digest();
                } catch (e) {
                  $exceptionHandler(e);
                  throw e;
                }
              }
            },
            $applyAsync: function(expr) {
              var scope = this;
              expr && applyAsyncQueue.push($applyAsyncExpression);
              scheduleApplyAsync();
              function $applyAsyncExpression() {
                scope.$eval(expr);
              }
            },
            $on: function(name, listener) {
              var namedListeners = this.$$listeners[name];
              if (!namedListeners) {
                this.$$listeners[name] = namedListeners = [];
              }
              namedListeners.push(listener);
              var current = this;
              do {
                if (!current.$$listenerCount[name]) {
                  current.$$listenerCount[name] = 0;
                }
                current.$$listenerCount[name]++;
              } while ((current = current.$parent));
              var self = this;
              return function() {
                var indexOfListener = namedListeners.indexOf(listener);
                if (indexOfListener !== -1) {
                  namedListeners[indexOfListener] = null;
                  decrementListenerCount(self, 1, name);
                }
              };
            },
            $emit: function(name, args) {
              var empty = [],
                  namedListeners,
                  scope = this,
                  stopPropagation = false,
                  event = {
                    name: name,
                    targetScope: scope,
                    stopPropagation: function() {
                      stopPropagation = true;
                    },
                    preventDefault: function() {
                      event.defaultPrevented = true;
                    },
                    defaultPrevented: false
                  },
                  listenerArgs = concat([event], arguments, 1),
                  i,
                  length;
              do {
                namedListeners = scope.$$listeners[name] || empty;
                event.currentScope = scope;
                for (i = 0, length = namedListeners.length; i < length; i++) {
                  if (!namedListeners[i]) {
                    namedListeners.splice(i, 1);
                    i--;
                    length--;
                    continue;
                  }
                  try {
                    namedListeners[i].apply(null, listenerArgs);
                  } catch (e) {
                    $exceptionHandler(e);
                  }
                }
                if (stopPropagation) {
                  event.currentScope = null;
                  return event;
                }
                scope = scope.$parent;
              } while (scope);
              event.currentScope = null;
              return event;
            },
            $broadcast: function(name, args) {
              var target = this,
                  current = target,
                  next = target,
                  event = {
                    name: name,
                    targetScope: target,
                    preventDefault: function() {
                      event.defaultPrevented = true;
                    },
                    defaultPrevented: false
                  };
              if (!target.$$listenerCount[name])
                return event;
              var listenerArgs = concat([event], arguments, 1),
                  listeners,
                  i,
                  length;
              while ((current = next)) {
                event.currentScope = current;
                listeners = current.$$listeners[name] || [];
                for (i = 0, length = listeners.length; i < length; i++) {
                  if (!listeners[i]) {
                    listeners.splice(i, 1);
                    i--;
                    length--;
                    continue;
                  }
                  try {
                    listeners[i].apply(null, listenerArgs);
                  } catch (e) {
                    $exceptionHandler(e);
                  }
                }
                if (!(next = ((current.$$listenerCount[name] && current.$$childHead) || (current !== target && current.$$nextSibling)))) {
                  while (current !== target && !(next = current.$$nextSibling)) {
                    current = current.$parent;
                  }
                }
              }
              event.currentScope = null;
              return event;
            }
          };
          var $rootScope = new Scope();
          var asyncQueue = $rootScope.$$asyncQueue = [];
          var postDigestQueue = $rootScope.$$postDigestQueue = [];
          var applyAsyncQueue = $rootScope.$$applyAsyncQueue = [];
          return $rootScope;
          function beginPhase(phase) {
            if ($rootScope.$$phase) {
              throw $rootScopeMinErr('inprog', '{0} already in progress', $rootScope.$$phase);
            }
            $rootScope.$$phase = phase;
          }
          function clearPhase() {
            $rootScope.$$phase = null;
          }
          function decrementListenerCount(current, count, name) {
            do {
              current.$$listenerCount[name] -= count;
              if (current.$$listenerCount[name] === 0) {
                delete current.$$listenerCount[name];
              }
            } while ((current = current.$parent));
          }
          function initWatchVal() {}
          function flushApplyAsync() {
            while (applyAsyncQueue.length) {
              try {
                applyAsyncQueue.shift()();
              } catch (e) {
                $exceptionHandler(e);
              }
            }
            applyAsyncId = null;
          }
          function scheduleApplyAsync() {
            if (applyAsyncId === null) {
              applyAsyncId = $browser.defer(function() {
                $rootScope.$apply(flushApplyAsync);
              });
            }
          }
        }];
      }
      function $$SanitizeUriProvider() {
        var aHrefSanitizationWhitelist = /^\s*(https?|ftp|mailto|tel|file):/,
            imgSrcSanitizationWhitelist = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(regexp) {
          if (isDefined(regexp)) {
            aHrefSanitizationWhitelist = regexp;
            return this;
          }
          return aHrefSanitizationWhitelist;
        };
        this.imgSrcSanitizationWhitelist = function(regexp) {
          if (isDefined(regexp)) {
            imgSrcSanitizationWhitelist = regexp;
            return this;
          }
          return imgSrcSanitizationWhitelist;
        };
        this.$get = function() {
          return function sanitizeUri(uri, isImage) {
            var regex = isImage ? imgSrcSanitizationWhitelist : aHrefSanitizationWhitelist;
            var normalizedVal;
            normalizedVal = urlResolve(uri).href;
            if (normalizedVal !== '' && !normalizedVal.match(regex)) {
              return 'unsafe:' + normalizedVal;
            }
            return uri;
          };
        };
      }
      var $sceMinErr = minErr('$sce');
      var SCE_CONTEXTS = {
        HTML: 'html',
        CSS: 'css',
        URL: 'url',
        RESOURCE_URL: 'resourceUrl',
        JS: 'js'
      };
      function adjustMatcher(matcher) {
        if (matcher === 'self') {
          return matcher;
        } else if (isString(matcher)) {
          if (matcher.indexOf('***') > -1) {
            throw $sceMinErr('iwcard', 'Illegal sequence *** in string matcher.  String: {0}', matcher);
          }
          matcher = escapeForRegexp(matcher).replace('\\*\\*', '.*').replace('\\*', '[^:/.?&;]*');
          return new RegExp('^' + matcher + '$');
        } else if (isRegExp(matcher)) {
          return new RegExp('^' + matcher.source + '$');
        } else {
          throw $sceMinErr('imatcher', 'Matchers may only be "self", string patterns or RegExp objects');
        }
      }
      function adjustMatchers(matchers) {
        var adjustedMatchers = [];
        if (isDefined(matchers)) {
          forEach(matchers, function(matcher) {
            adjustedMatchers.push(adjustMatcher(matcher));
          });
        }
        return adjustedMatchers;
      }
      function $SceDelegateProvider() {
        this.SCE_CONTEXTS = SCE_CONTEXTS;
        var resourceUrlWhitelist = ['self'],
            resourceUrlBlacklist = [];
        this.resourceUrlWhitelist = function(value) {
          if (arguments.length) {
            resourceUrlWhitelist = adjustMatchers(value);
          }
          return resourceUrlWhitelist;
        };
        this.resourceUrlBlacklist = function(value) {
          if (arguments.length) {
            resourceUrlBlacklist = adjustMatchers(value);
          }
          return resourceUrlBlacklist;
        };
        this.$get = ['$injector', function($injector) {
          var htmlSanitizer = function htmlSanitizer(html) {
            throw $sceMinErr('unsafe', 'Attempting to use an unsafe value in a safe context.');
          };
          if ($injector.has('$sanitize')) {
            htmlSanitizer = $injector.get('$sanitize');
          }
          function matchUrl(matcher, parsedUrl) {
            if (matcher === 'self') {
              return urlIsSameOrigin(parsedUrl);
            } else {
              return !!matcher.exec(parsedUrl.href);
            }
          }
          function isResourceUrlAllowedByPolicy(url) {
            var parsedUrl = urlResolve(url.toString());
            var i,
                n,
                allowed = false;
            for (i = 0, n = resourceUrlWhitelist.length; i < n; i++) {
              if (matchUrl(resourceUrlWhitelist[i], parsedUrl)) {
                allowed = true;
                break;
              }
            }
            if (allowed) {
              for (i = 0, n = resourceUrlBlacklist.length; i < n; i++) {
                if (matchUrl(resourceUrlBlacklist[i], parsedUrl)) {
                  allowed = false;
                  break;
                }
              }
            }
            return allowed;
          }
          function generateHolderType(Base) {
            var holderType = function TrustedValueHolderType(trustedValue) {
              this.$$unwrapTrustedValue = function() {
                return trustedValue;
              };
            };
            if (Base) {
              holderType.prototype = new Base();
            }
            holderType.prototype.valueOf = function sceValueOf() {
              return this.$$unwrapTrustedValue();
            };
            holderType.prototype.toString = function sceToString() {
              return this.$$unwrapTrustedValue().toString();
            };
            return holderType;
          }
          var trustedValueHolderBase = generateHolderType(),
              byType = {};
          byType[SCE_CONTEXTS.HTML] = generateHolderType(trustedValueHolderBase);
          byType[SCE_CONTEXTS.CSS] = generateHolderType(trustedValueHolderBase);
          byType[SCE_CONTEXTS.URL] = generateHolderType(trustedValueHolderBase);
          byType[SCE_CONTEXTS.JS] = generateHolderType(trustedValueHolderBase);
          byType[SCE_CONTEXTS.RESOURCE_URL] = generateHolderType(byType[SCE_CONTEXTS.URL]);
          function trustAs(type, trustedValue) {
            var Constructor = (byType.hasOwnProperty(type) ? byType[type] : null);
            if (!Constructor) {
              throw $sceMinErr('icontext', 'Attempted to trust a value in invalid context. Context: {0}; Value: {1}', type, trustedValue);
            }
            if (trustedValue === null || trustedValue === undefined || trustedValue === '') {
              return trustedValue;
            }
            if (typeof trustedValue !== 'string') {
              throw $sceMinErr('itype', 'Attempted to trust a non-string value in a content requiring a string: Context: {0}', type);
            }
            return new Constructor(trustedValue);
          }
          function valueOf(maybeTrusted) {
            if (maybeTrusted instanceof trustedValueHolderBase) {
              return maybeTrusted.$$unwrapTrustedValue();
            } else {
              return maybeTrusted;
            }
          }
          function getTrusted(type, maybeTrusted) {
            if (maybeTrusted === null || maybeTrusted === undefined || maybeTrusted === '') {
              return maybeTrusted;
            }
            var constructor = (byType.hasOwnProperty(type) ? byType[type] : null);
            if (constructor && maybeTrusted instanceof constructor) {
              return maybeTrusted.$$unwrapTrustedValue();
            }
            if (type === SCE_CONTEXTS.RESOURCE_URL) {
              if (isResourceUrlAllowedByPolicy(maybeTrusted)) {
                return maybeTrusted;
              } else {
                throw $sceMinErr('insecurl', 'Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}', maybeTrusted.toString());
              }
            } else if (type === SCE_CONTEXTS.HTML) {
              return htmlSanitizer(maybeTrusted);
            }
            throw $sceMinErr('unsafe', 'Attempting to use an unsafe value in a safe context.');
          }
          return {
            trustAs: trustAs,
            getTrusted: getTrusted,
            valueOf: valueOf
          };
        }];
      }
      function $SceProvider() {
        var enabled = true;
        this.enabled = function(value) {
          if (arguments.length) {
            enabled = !!value;
          }
          return enabled;
        };
        this.$get = ['$parse', '$sceDelegate', function($parse, $sceDelegate) {
          if (enabled && msie < 8) {
            throw $sceMinErr('iequirks', 'Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks ' + 'mode.  You can fix this by adding the text <!doctype html> to the top of your HTML ' + 'document.  See http://docs.angularjs.org/api/ng.$sce for more information.');
          }
          var sce = shallowCopy(SCE_CONTEXTS);
          sce.isEnabled = function() {
            return enabled;
          };
          sce.trustAs = $sceDelegate.trustAs;
          sce.getTrusted = $sceDelegate.getTrusted;
          sce.valueOf = $sceDelegate.valueOf;
          if (!enabled) {
            sce.trustAs = sce.getTrusted = function(type, value) {
              return value;
            };
            sce.valueOf = identity;
          }
          sce.parseAs = function sceParseAs(type, expr) {
            var parsed = $parse(expr);
            if (parsed.literal && parsed.constant) {
              return parsed;
            } else {
              return $parse(expr, function(value) {
                return sce.getTrusted(type, value);
              });
            }
          };
          var parse = sce.parseAs,
              getTrusted = sce.getTrusted,
              trustAs = sce.trustAs;
          forEach(SCE_CONTEXTS, function(enumValue, name) {
            var lName = lowercase(name);
            sce[camelCase("parse_as_" + lName)] = function(expr) {
              return parse(enumValue, expr);
            };
            sce[camelCase("get_trusted_" + lName)] = function(value) {
              return getTrusted(enumValue, value);
            };
            sce[camelCase("trust_as_" + lName)] = function(value) {
              return trustAs(enumValue, value);
            };
          });
          return sce;
        }];
      }
      function $SnifferProvider() {
        this.$get = ['$window', '$document', function($window, $document) {
          var eventSupport = {},
              android = int((/android (\d+)/.exec(lowercase(($window.navigator || {}).userAgent)) || [])[1]),
              boxee = /Boxee/i.test(($window.navigator || {}).userAgent),
              document = $document[0] || {},
              vendorPrefix,
              vendorRegex = /^(Moz|webkit|ms)(?=[A-Z])/,
              bodyStyle = document.body && document.body.style,
              transitions = false,
              animations = false,
              match;
          if (bodyStyle) {
            for (var prop in bodyStyle) {
              if (match = vendorRegex.exec(prop)) {
                vendorPrefix = match[0];
                vendorPrefix = vendorPrefix.substr(0, 1).toUpperCase() + vendorPrefix.substr(1);
                break;
              }
            }
            if (!vendorPrefix) {
              vendorPrefix = ('WebkitOpacity' in bodyStyle) && 'webkit';
            }
            transitions = !!(('transition' in bodyStyle) || (vendorPrefix + 'Transition' in bodyStyle));
            animations = !!(('animation' in bodyStyle) || (vendorPrefix + 'Animation' in bodyStyle));
            if (android && (!transitions || !animations)) {
              transitions = isString(document.body.style.webkitTransition);
              animations = isString(document.body.style.webkitAnimation);
            }
          }
          return {
            history: !!($window.history && $window.history.pushState && !(android < 4) && !boxee),
            hasEvent: function(event) {
              if (event === 'input' && msie <= 11)
                return false;
              if (isUndefined(eventSupport[event])) {
                var divElm = document.createElement('div');
                eventSupport[event] = 'on' + event in divElm;
              }
              return eventSupport[event];
            },
            csp: csp(),
            vendorPrefix: vendorPrefix,
            transitions: transitions,
            animations: animations,
            android: android
          };
        }];
      }
      var $compileMinErr = minErr('$compile');
      function $TemplateRequestProvider() {
        this.$get = ['$templateCache', '$http', '$q', function($templateCache, $http, $q) {
          function handleRequestFn(tpl, ignoreRequestError) {
            handleRequestFn.totalPendingRequests++;
            var transformResponse = $http.defaults && $http.defaults.transformResponse;
            if (isArray(transformResponse)) {
              transformResponse = transformResponse.filter(function(transformer) {
                return transformer !== defaultHttpResponseTransform;
              });
            } else if (transformResponse === defaultHttpResponseTransform) {
              transformResponse = null;
            }
            var httpOptions = {
              cache: $templateCache,
              transformResponse: transformResponse
            };
            return $http.get(tpl, httpOptions)['finally'](function() {
              handleRequestFn.totalPendingRequests--;
            }).then(function(response) {
              return response.data;
            }, handleError);
            function handleError(resp) {
              if (!ignoreRequestError) {
                throw $compileMinErr('tpload', 'Failed to load template: {0}', tpl);
              }
              return $q.reject(resp);
            }
          }
          handleRequestFn.totalPendingRequests = 0;
          return handleRequestFn;
        }];
      }
      function $$TestabilityProvider() {
        this.$get = ['$rootScope', '$browser', '$location', function($rootScope, $browser, $location) {
          var testability = {};
          testability.findBindings = function(element, expression, opt_exactMatch) {
            var bindings = element.getElementsByClassName('ng-binding');
            var matches = [];
            forEach(bindings, function(binding) {
              var dataBinding = angular.element(binding).data('$binding');
              if (dataBinding) {
                forEach(dataBinding, function(bindingName) {
                  if (opt_exactMatch) {
                    var matcher = new RegExp('(^|\\s)' + escapeForRegexp(expression) + '(\\s|\\||$)');
                    if (matcher.test(bindingName)) {
                      matches.push(binding);
                    }
                  } else {
                    if (bindingName.indexOf(expression) != -1) {
                      matches.push(binding);
                    }
                  }
                });
              }
            });
            return matches;
          };
          testability.findModels = function(element, expression, opt_exactMatch) {
            var prefixes = ['ng-', 'data-ng-', 'ng\\:'];
            for (var p = 0; p < prefixes.length; ++p) {
              var attributeEquals = opt_exactMatch ? '=' : '*=';
              var selector = '[' + prefixes[p] + 'model' + attributeEquals + '"' + expression + '"]';
              var elements = element.querySelectorAll(selector);
              if (elements.length) {
                return elements;
              }
            }
          };
          testability.getLocation = function() {
            return $location.url();
          };
          testability.setLocation = function(url) {
            if (url !== $location.url()) {
              $location.url(url);
              $rootScope.$digest();
            }
          };
          testability.whenStable = function(callback) {
            $browser.notifyWhenNoOutstandingRequests(callback);
          };
          return testability;
        }];
      }
      function $TimeoutProvider() {
        this.$get = ['$rootScope', '$browser', '$q', '$$q', '$exceptionHandler', function($rootScope, $browser, $q, $$q, $exceptionHandler) {
          var deferreds = {};
          function timeout(fn, delay, invokeApply) {
            var skipApply = (isDefined(invokeApply) && !invokeApply),
                deferred = (skipApply ? $$q : $q).defer(),
                promise = deferred.promise,
                timeoutId;
            timeoutId = $browser.defer(function() {
              try {
                deferred.resolve(fn());
              } catch (e) {
                deferred.reject(e);
                $exceptionHandler(e);
              } finally {
                delete deferreds[promise.$$timeoutId];
              }
              if (!skipApply)
                $rootScope.$apply();
            }, delay);
            promise.$$timeoutId = timeoutId;
            deferreds[timeoutId] = deferred;
            return promise;
          }
          timeout.cancel = function(promise) {
            if (promise && promise.$$timeoutId in deferreds) {
              deferreds[promise.$$timeoutId].reject('canceled');
              delete deferreds[promise.$$timeoutId];
              return $browser.defer.cancel(promise.$$timeoutId);
            }
            return false;
          };
          return timeout;
        }];
      }
      var urlParsingNode = document.createElement("a");
      var originUrl = urlResolve(window.location.href);
      function urlResolve(url) {
        var href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute('href', href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
        };
      }
      function urlIsSameOrigin(requestUrl) {
        var parsed = (isString(requestUrl)) ? urlResolve(requestUrl) : requestUrl;
        return (parsed.protocol === originUrl.protocol && parsed.host === originUrl.host);
      }
      function $WindowProvider() {
        this.$get = valueFn(window);
      }
      $FilterProvider.$inject = ['$provide'];
      function $FilterProvider($provide) {
        var suffix = 'Filter';
        function register(name, factory) {
          if (isObject(name)) {
            var filters = {};
            forEach(name, function(filter, key) {
              filters[key] = register(key, filter);
            });
            return filters;
          } else {
            return $provide.factory(name + suffix, factory);
          }
        }
        this.register = register;
        this.$get = ['$injector', function($injector) {
          return function(name) {
            return $injector.get(name + suffix);
          };
        }];
        register('currency', currencyFilter);
        register('date', dateFilter);
        register('filter', filterFilter);
        register('json', jsonFilter);
        register('limitTo', limitToFilter);
        register('lowercase', lowercaseFilter);
        register('number', numberFilter);
        register('orderBy', orderByFilter);
        register('uppercase', uppercaseFilter);
      }
      function filterFilter() {
        return function(array, expression, comparator) {
          if (!isArray(array))
            return array;
          var predicateFn;
          var matchAgainstAnyProp;
          switch (typeof expression) {
            case 'function':
              predicateFn = expression;
              break;
            case 'boolean':
            case 'number':
            case 'string':
              matchAgainstAnyProp = true;
            case 'object':
              predicateFn = createPredicateFn(expression, comparator, matchAgainstAnyProp);
              break;
            default:
              return array;
          }
          return array.filter(predicateFn);
        };
      }
      function createPredicateFn(expression, comparator, matchAgainstAnyProp) {
        var shouldMatchPrimitives = isObject(expression) && ('$' in expression);
        var predicateFn;
        if (comparator === true) {
          comparator = equals;
        } else if (!isFunction(comparator)) {
          comparator = function(actual, expected) {
            if (isObject(actual) || isObject(expected)) {
              return false;
            }
            actual = lowercase('' + actual);
            expected = lowercase('' + expected);
            return actual.indexOf(expected) !== -1;
          };
        }
        predicateFn = function(item) {
          if (shouldMatchPrimitives && !isObject(item)) {
            return deepCompare(item, expression.$, comparator, false);
          }
          return deepCompare(item, expression, comparator, matchAgainstAnyProp);
        };
        return predicateFn;
      }
      function deepCompare(actual, expected, comparator, matchAgainstAnyProp, dontMatchWholeObject) {
        var actualType = (actual !== null) ? typeof actual : 'null';
        var expectedType = (expected !== null) ? typeof expected : 'null';
        if ((expectedType === 'string') && (expected.charAt(0) === '!')) {
          return !deepCompare(actual, expected.substring(1), comparator, matchAgainstAnyProp);
        } else if (isArray(actual)) {
          return actual.some(function(item) {
            return deepCompare(item, expected, comparator, matchAgainstAnyProp);
          });
        }
        switch (actualType) {
          case 'object':
            var key;
            if (matchAgainstAnyProp) {
              for (key in actual) {
                if ((key.charAt(0) !== '$') && deepCompare(actual[key], expected, comparator, true)) {
                  return true;
                }
              }
              return dontMatchWholeObject ? false : deepCompare(actual, expected, comparator, false);
            } else if (expectedType === 'object') {
              for (key in expected) {
                var expectedVal = expected[key];
                if (isFunction(expectedVal) || isUndefined(expectedVal)) {
                  continue;
                }
                var matchAnyProperty = key === '$';
                var actualVal = matchAnyProperty ? actual : actual[key];
                if (!deepCompare(actualVal, expectedVal, comparator, matchAnyProperty, matchAnyProperty)) {
                  return false;
                }
              }
              return true;
            } else {
              return comparator(actual, expected);
            }
            break;
          case 'function':
            return false;
          default:
            return comparator(actual, expected);
        }
      }
      currencyFilter.$inject = ['$locale'];
      function currencyFilter($locale) {
        var formats = $locale.NUMBER_FORMATS;
        return function(amount, currencySymbol, fractionSize) {
          if (isUndefined(currencySymbol)) {
            currencySymbol = formats.CURRENCY_SYM;
          }
          if (isUndefined(fractionSize)) {
            fractionSize = formats.PATTERNS[1].maxFrac;
          }
          return (amount == null) ? amount : formatNumber(amount, formats.PATTERNS[1], formats.GROUP_SEP, formats.DECIMAL_SEP, fractionSize).replace(/\u00A4/g, currencySymbol);
        };
      }
      numberFilter.$inject = ['$locale'];
      function numberFilter($locale) {
        var formats = $locale.NUMBER_FORMATS;
        return function(number, fractionSize) {
          return (number == null) ? number : formatNumber(number, formats.PATTERNS[0], formats.GROUP_SEP, formats.DECIMAL_SEP, fractionSize);
        };
      }
      var DECIMAL_SEP = '.';
      function formatNumber(number, pattern, groupSep, decimalSep, fractionSize) {
        if (!isFinite(number) || isObject(number))
          return '';
        var isNegative = number < 0;
        number = Math.abs(number);
        var numStr = number + '',
            formatedText = '',
            parts = [];
        var hasExponent = false;
        if (numStr.indexOf('e') !== -1) {
          var match = numStr.match(/([\d\.]+)e(-?)(\d+)/);
          if (match && match[2] == '-' && match[3] > fractionSize + 1) {
            number = 0;
          } else {
            formatedText = numStr;
            hasExponent = true;
          }
        }
        if (!hasExponent) {
          var fractionLen = (numStr.split(DECIMAL_SEP)[1] || '').length;
          if (isUndefined(fractionSize)) {
            fractionSize = Math.min(Math.max(pattern.minFrac, fractionLen), pattern.maxFrac);
          }
          number = +(Math.round(+(number.toString() + 'e' + fractionSize)).toString() + 'e' + -fractionSize);
          var fraction = ('' + number).split(DECIMAL_SEP);
          var whole = fraction[0];
          fraction = fraction[1] || '';
          var i,
              pos = 0,
              lgroup = pattern.lgSize,
              group = pattern.gSize;
          if (whole.length >= (lgroup + group)) {
            pos = whole.length - lgroup;
            for (i = 0; i < pos; i++) {
              if ((pos - i) % group === 0 && i !== 0) {
                formatedText += groupSep;
              }
              formatedText += whole.charAt(i);
            }
          }
          for (i = pos; i < whole.length; i++) {
            if ((whole.length - i) % lgroup === 0 && i !== 0) {
              formatedText += groupSep;
            }
            formatedText += whole.charAt(i);
          }
          while (fraction.length < fractionSize) {
            fraction += '0';
          }
          if (fractionSize && fractionSize !== "0")
            formatedText += decimalSep + fraction.substr(0, fractionSize);
        } else {
          if (fractionSize > 0 && number < 1) {
            formatedText = number.toFixed(fractionSize);
            number = parseFloat(formatedText);
          }
        }
        if (number === 0) {
          isNegative = false;
        }
        parts.push(isNegative ? pattern.negPre : pattern.posPre, formatedText, isNegative ? pattern.negSuf : pattern.posSuf);
        return parts.join('');
      }
      function padNumber(num, digits, trim) {
        var neg = '';
        if (num < 0) {
          neg = '-';
          num = -num;
        }
        num = '' + num;
        while (num.length < digits)
          num = '0' + num;
        if (trim)
          num = num.substr(num.length - digits);
        return neg + num;
      }
      function dateGetter(name, size, offset, trim) {
        offset = offset || 0;
        return function(date) {
          var value = date['get' + name]();
          if (offset > 0 || value > -offset)
            value += offset;
          if (value === 0 && offset == -12)
            value = 12;
          return padNumber(value, size, trim);
        };
      }
      function dateStrGetter(name, shortForm) {
        return function(date, formats) {
          var value = date['get' + name]();
          var get = uppercase(shortForm ? ('SHORT' + name) : name);
          return formats[get][value];
        };
      }
      function timeZoneGetter(date) {
        var zone = -1 * date.getTimezoneOffset();
        var paddedZone = (zone >= 0) ? "+" : "";
        paddedZone += padNumber(Math[zone > 0 ? 'floor' : 'ceil'](zone / 60), 2) + padNumber(Math.abs(zone % 60), 2);
        return paddedZone;
      }
      function getFirstThursdayOfYear(year) {
        var dayOfWeekOnFirst = (new Date(year, 0, 1)).getDay();
        return new Date(year, 0, ((dayOfWeekOnFirst <= 4) ? 5 : 12) - dayOfWeekOnFirst);
      }
      function getThursdayThisWeek(datetime) {
        return new Date(datetime.getFullYear(), datetime.getMonth(), datetime.getDate() + (4 - datetime.getDay()));
      }
      function weekGetter(size) {
        return function(date) {
          var firstThurs = getFirstThursdayOfYear(date.getFullYear()),
              thisThurs = getThursdayThisWeek(date);
          var diff = +thisThurs - +firstThurs,
              result = 1 + Math.round(diff / 6.048e8);
          return padNumber(result, size);
        };
      }
      function ampmGetter(date, formats) {
        return date.getHours() < 12 ? formats.AMPMS[0] : formats.AMPMS[1];
      }
      function eraGetter(date, formats) {
        return date.getFullYear() <= 0 ? formats.ERAS[0] : formats.ERAS[1];
      }
      function longEraGetter(date, formats) {
        return date.getFullYear() <= 0 ? formats.ERANAMES[0] : formats.ERANAMES[1];
      }
      var DATE_FORMATS = {
        yyyy: dateGetter('FullYear', 4),
        yy: dateGetter('FullYear', 2, 0, true),
        y: dateGetter('FullYear', 1),
        MMMM: dateStrGetter('Month'),
        MMM: dateStrGetter('Month', true),
        MM: dateGetter('Month', 2, 1),
        M: dateGetter('Month', 1, 1),
        dd: dateGetter('Date', 2),
        d: dateGetter('Date', 1),
        HH: dateGetter('Hours', 2),
        H: dateGetter('Hours', 1),
        hh: dateGetter('Hours', 2, -12),
        h: dateGetter('Hours', 1, -12),
        mm: dateGetter('Minutes', 2),
        m: dateGetter('Minutes', 1),
        ss: dateGetter('Seconds', 2),
        s: dateGetter('Seconds', 1),
        sss: dateGetter('Milliseconds', 3),
        EEEE: dateStrGetter('Day'),
        EEE: dateStrGetter('Day', true),
        a: ampmGetter,
        Z: timeZoneGetter,
        ww: weekGetter(2),
        w: weekGetter(1),
        G: eraGetter,
        GG: eraGetter,
        GGG: eraGetter,
        GGGG: longEraGetter
      };
      var DATE_FORMATS_SPLIT = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
          NUMBER_STRING = /^\-?\d+$/;
      dateFilter.$inject = ['$locale'];
      function dateFilter($locale) {
        var R_ISO8601_STR = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        function jsonStringToDate(string) {
          var match;
          if (match = string.match(R_ISO8601_STR)) {
            var date = new Date(0),
                tzHour = 0,
                tzMin = 0,
                dateSetter = match[8] ? date.setUTCFullYear : date.setFullYear,
                timeSetter = match[8] ? date.setUTCHours : date.setHours;
            if (match[9]) {
              tzHour = int(match[9] + match[10]);
              tzMin = int(match[9] + match[11]);
            }
            dateSetter.call(date, int(match[1]), int(match[2]) - 1, int(match[3]));
            var h = int(match[4] || 0) - tzHour;
            var m = int(match[5] || 0) - tzMin;
            var s = int(match[6] || 0);
            var ms = Math.round(parseFloat('0.' + (match[7] || 0)) * 1000);
            timeSetter.call(date, h, m, s, ms);
            return date;
          }
          return string;
        }
        return function(date, format, timezone) {
          var text = '',
              parts = [],
              fn,
              match;
          format = format || 'mediumDate';
          format = $locale.DATETIME_FORMATS[format] || format;
          if (isString(date)) {
            date = NUMBER_STRING.test(date) ? int(date) : jsonStringToDate(date);
          }
          if (isNumber(date)) {
            date = new Date(date);
          }
          if (!isDate(date)) {
            return date;
          }
          while (format) {
            match = DATE_FORMATS_SPLIT.exec(format);
            if (match) {
              parts = concat(parts, match, 1);
              format = parts.pop();
            } else {
              parts.push(format);
              format = null;
            }
          }
          if (timezone && timezone === 'UTC') {
            date = new Date(date.getTime());
            date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
          }
          forEach(parts, function(value) {
            fn = DATE_FORMATS[value];
            text += fn ? fn(date, $locale.DATETIME_FORMATS) : value.replace(/(^'|'$)/g, '').replace(/''/g, "'");
          });
          return text;
        };
      }
      function jsonFilter() {
        return function(object, spacing) {
          if (isUndefined(spacing)) {
            spacing = 2;
          }
          return toJson(object, spacing);
        };
      }
      var lowercaseFilter = valueFn(lowercase);
      var uppercaseFilter = valueFn(uppercase);
      function limitToFilter() {
        return function(input, limit) {
          if (isNumber(input))
            input = input.toString();
          if (!isArray(input) && !isString(input))
            return input;
          if (Math.abs(Number(limit)) === Infinity) {
            limit = Number(limit);
          } else {
            limit = int(limit);
          }
          if (limit) {
            return limit > 0 ? input.slice(0, limit) : input.slice(limit);
          } else {
            return isString(input) ? "" : [];
          }
        };
      }
      orderByFilter.$inject = ['$parse'];
      function orderByFilter($parse) {
        return function(array, sortPredicate, reverseOrder) {
          if (!(isArrayLike(array)))
            return array;
          sortPredicate = isArray(sortPredicate) ? sortPredicate : [sortPredicate];
          if (sortPredicate.length === 0) {
            sortPredicate = ['+'];
          }
          sortPredicate = sortPredicate.map(function(predicate) {
            var descending = false,
                get = predicate || identity;
            if (isString(predicate)) {
              if ((predicate.charAt(0) == '+' || predicate.charAt(0) == '-')) {
                descending = predicate.charAt(0) == '-';
                predicate = predicate.substring(1);
              }
              if (predicate === '') {
                return reverseComparator(compare, descending);
              }
              get = $parse(predicate);
              if (get.constant) {
                var key = get();
                return reverseComparator(function(a, b) {
                  return compare(a[key], b[key]);
                }, descending);
              }
            }
            return reverseComparator(function(a, b) {
              return compare(get(a), get(b));
            }, descending);
          });
          return slice.call(array).sort(reverseComparator(comparator, reverseOrder));
          function comparator(o1, o2) {
            for (var i = 0; i < sortPredicate.length; i++) {
              var comp = sortPredicate[i](o1, o2);
              if (comp !== 0)
                return comp;
            }
            return 0;
          }
          function reverseComparator(comp, descending) {
            return descending ? function(a, b) {
              return comp(b, a);
            } : comp;
          }
          function isPrimitive(value) {
            switch (typeof value) {
              case 'number':
              case 'boolean':
              case 'string':
                return true;
              default:
                return false;
            }
          }
          function objectToString(value) {
            if (value === null)
              return 'null';
            if (typeof value.valueOf === 'function') {
              value = value.valueOf();
              if (isPrimitive(value))
                return value;
            }
            if (typeof value.toString === 'function') {
              value = value.toString();
              if (isPrimitive(value))
                return value;
            }
            return '';
          }
          function compare(v1, v2) {
            var t1 = typeof v1;
            var t2 = typeof v2;
            if (t1 === t2 && t1 === "object") {
              v1 = objectToString(v1);
              v2 = objectToString(v2);
            }
            if (t1 === t2) {
              if (t1 === "string") {
                v1 = v1.toLowerCase();
                v2 = v2.toLowerCase();
              }
              if (v1 === v2)
                return 0;
              return v1 < v2 ? -1 : 1;
            } else {
              return t1 < t2 ? -1 : 1;
            }
          }
        };
      }
      function ngDirective(directive) {
        if (isFunction(directive)) {
          directive = {link: directive};
        }
        directive.restrict = directive.restrict || 'AC';
        return valueFn(directive);
      }
      var htmlAnchorDirective = valueFn({
        restrict: 'E',
        compile: function(element, attr) {
          if (!attr.href && !attr.xlinkHref && !attr.name) {
            return function(scope, element) {
              if (element[0].nodeName.toLowerCase() !== 'a')
                return ;
              var href = toString.call(element.prop('href')) === '[object SVGAnimatedString]' ? 'xlink:href' : 'href';
              element.on('click', function(event) {
                if (!element.attr(href)) {
                  event.preventDefault();
                }
              });
            };
          }
        }
      });
      var ngAttributeAliasDirectives = {};
      forEach(BOOLEAN_ATTR, function(propName, attrName) {
        if (propName == "multiple")
          return ;
        var normalized = directiveNormalize('ng-' + attrName);
        ngAttributeAliasDirectives[normalized] = function() {
          return {
            restrict: 'A',
            priority: 100,
            link: function(scope, element, attr) {
              scope.$watch(attr[normalized], function ngBooleanAttrWatchAction(value) {
                attr.$set(attrName, !!value);
              });
            }
          };
        };
      });
      forEach(ALIASED_ATTR, function(htmlAttr, ngAttr) {
        ngAttributeAliasDirectives[ngAttr] = function() {
          return {
            priority: 100,
            link: function(scope, element, attr) {
              if (ngAttr === "ngPattern" && attr.ngPattern.charAt(0) == "/") {
                var match = attr.ngPattern.match(REGEX_STRING_REGEXP);
                if (match) {
                  attr.$set("ngPattern", new RegExp(match[1], match[2]));
                  return ;
                }
              }
              scope.$watch(attr[ngAttr], function ngAttrAliasWatchAction(value) {
                attr.$set(ngAttr, value);
              });
            }
          };
        };
      });
      forEach(['src', 'srcset', 'href'], function(attrName) {
        var normalized = directiveNormalize('ng-' + attrName);
        ngAttributeAliasDirectives[normalized] = function() {
          return {
            priority: 99,
            link: function(scope, element, attr) {
              var propName = attrName,
                  name = attrName;
              if (attrName === 'href' && toString.call(element.prop('href')) === '[object SVGAnimatedString]') {
                name = 'xlinkHref';
                attr.$attr[name] = 'xlink:href';
                propName = null;
              }
              attr.$observe(normalized, function(value) {
                if (!value) {
                  if (attrName === 'href') {
                    attr.$set(name, null);
                  }
                  return ;
                }
                attr.$set(name, value);
                if (msie && propName)
                  element.prop(propName, attr[name]);
              });
            }
          };
        };
      });
      var nullFormCtrl = {
        $addControl: noop,
        $$renameControl: nullFormRenameControl,
        $removeControl: noop,
        $setValidity: noop,
        $setDirty: noop,
        $setPristine: noop,
        $setSubmitted: noop
      },
          SUBMITTED_CLASS = 'ng-submitted';
      function nullFormRenameControl(control, name) {
        control.$name = name;
      }
      FormController.$inject = ['$element', '$attrs', '$scope', '$animate', '$interpolate'];
      function FormController(element, attrs, $scope, $animate, $interpolate) {
        var form = this,
            controls = [];
        var parentForm = form.$$parentForm = element.parent().controller('form') || nullFormCtrl;
        form.$error = {};
        form.$$success = {};
        form.$pending = undefined;
        form.$name = $interpolate(attrs.name || attrs.ngForm || '')($scope);
        form.$dirty = false;
        form.$pristine = true;
        form.$valid = true;
        form.$invalid = false;
        form.$submitted = false;
        parentForm.$addControl(form);
        form.$rollbackViewValue = function() {
          forEach(controls, function(control) {
            control.$rollbackViewValue();
          });
        };
        form.$commitViewValue = function() {
          forEach(controls, function(control) {
            control.$commitViewValue();
          });
        };
        form.$addControl = function(control) {
          assertNotHasOwnProperty(control.$name, 'input');
          controls.push(control);
          if (control.$name) {
            form[control.$name] = control;
          }
        };
        form.$$renameControl = function(control, newName) {
          var oldName = control.$name;
          if (form[oldName] === control) {
            delete form[oldName];
          }
          form[newName] = control;
          control.$name = newName;
        };
        form.$removeControl = function(control) {
          if (control.$name && form[control.$name] === control) {
            delete form[control.$name];
          }
          forEach(form.$pending, function(value, name) {
            form.$setValidity(name, null, control);
          });
          forEach(form.$error, function(value, name) {
            form.$setValidity(name, null, control);
          });
          forEach(form.$$success, function(value, name) {
            form.$setValidity(name, null, control);
          });
          arrayRemove(controls, control);
        };
        addSetValidityMethod({
          ctrl: this,
          $element: element,
          set: function(object, property, controller) {
            var list = object[property];
            if (!list) {
              object[property] = [controller];
            } else {
              var index = list.indexOf(controller);
              if (index === -1) {
                list.push(controller);
              }
            }
          },
          unset: function(object, property, controller) {
            var list = object[property];
            if (!list) {
              return ;
            }
            arrayRemove(list, controller);
            if (list.length === 0) {
              delete object[property];
            }
          },
          parentForm: parentForm,
          $animate: $animate
        });
        form.$setDirty = function() {
          $animate.removeClass(element, PRISTINE_CLASS);
          $animate.addClass(element, DIRTY_CLASS);
          form.$dirty = true;
          form.$pristine = false;
          parentForm.$setDirty();
        };
        form.$setPristine = function() {
          $animate.setClass(element, PRISTINE_CLASS, DIRTY_CLASS + ' ' + SUBMITTED_CLASS);
          form.$dirty = false;
          form.$pristine = true;
          form.$submitted = false;
          forEach(controls, function(control) {
            control.$setPristine();
          });
        };
        form.$setUntouched = function() {
          forEach(controls, function(control) {
            control.$setUntouched();
          });
        };
        form.$setSubmitted = function() {
          $animate.addClass(element, SUBMITTED_CLASS);
          form.$submitted = true;
          parentForm.$setSubmitted();
        };
      }
      var formDirectiveFactory = function(isNgForm) {
        return ['$timeout', function($timeout) {
          var formDirective = {
            name: 'form',
            restrict: isNgForm ? 'EAC' : 'E',
            controller: FormController,
            compile: function ngFormCompile(formElement, attr) {
              formElement.addClass(PRISTINE_CLASS).addClass(VALID_CLASS);
              var nameAttr = attr.name ? 'name' : (isNgForm && attr.ngForm ? 'ngForm' : false);
              return {pre: function ngFormPreLink(scope, formElement, attr, controller) {
                  if (!('action' in attr)) {
                    var handleFormSubmission = function(event) {
                      scope.$apply(function() {
                        controller.$commitViewValue();
                        controller.$setSubmitted();
                      });
                      event.preventDefault();
                    };
                    addEventListenerFn(formElement[0], 'submit', handleFormSubmission);
                    formElement.on('$destroy', function() {
                      $timeout(function() {
                        removeEventListenerFn(formElement[0], 'submit', handleFormSubmission);
                      }, 0, false);
                    });
                  }
                  var parentFormCtrl = controller.$$parentForm;
                  if (nameAttr) {
                    setter(scope, null, controller.$name, controller, controller.$name);
                    attr.$observe(nameAttr, function(newValue) {
                      if (controller.$name === newValue)
                        return ;
                      setter(scope, null, controller.$name, undefined, controller.$name);
                      parentFormCtrl.$$renameControl(controller, newValue);
                      setter(scope, null, controller.$name, controller, controller.$name);
                    });
                  }
                  formElement.on('$destroy', function() {
                    parentFormCtrl.$removeControl(controller);
                    if (nameAttr) {
                      setter(scope, null, attr[nameAttr], undefined, controller.$name);
                    }
                    extend(controller, nullFormCtrl);
                  });
                }};
            }
          };
          return formDirective;
        }];
      };
      var formDirective = formDirectiveFactory();
      var ngFormDirective = formDirectiveFactory(true);
      var ISO_DATE_REGEXP = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/;
      var URL_REGEXP = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;
      var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
      var NUMBER_REGEXP = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/;
      var DATE_REGEXP = /^(\d{4})-(\d{2})-(\d{2})$/;
      var DATETIMELOCAL_REGEXP = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/;
      var WEEK_REGEXP = /^(\d{4})-W(\d\d)$/;
      var MONTH_REGEXP = /^(\d{4})-(\d\d)$/;
      var TIME_REGEXP = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/;
      var inputType = {
        'text': textInputType,
        'date': createDateInputType('date', DATE_REGEXP, createDateParser(DATE_REGEXP, ['yyyy', 'MM', 'dd']), 'yyyy-MM-dd'),
        'datetime-local': createDateInputType('datetimelocal', DATETIMELOCAL_REGEXP, createDateParser(DATETIMELOCAL_REGEXP, ['yyyy', 'MM', 'dd', 'HH', 'mm', 'ss', 'sss']), 'yyyy-MM-ddTHH:mm:ss.sss'),
        'time': createDateInputType('time', TIME_REGEXP, createDateParser(TIME_REGEXP, ['HH', 'mm', 'ss', 'sss']), 'HH:mm:ss.sss'),
        'week': createDateInputType('week', WEEK_REGEXP, weekParser, 'yyyy-Www'),
        'month': createDateInputType('month', MONTH_REGEXP, createDateParser(MONTH_REGEXP, ['yyyy', 'MM']), 'yyyy-MM'),
        'number': numberInputType,
        'url': urlInputType,
        'email': emailInputType,
        'radio': radioInputType,
        'checkbox': checkboxInputType,
        'hidden': noop,
        'button': noop,
        'submit': noop,
        'reset': noop,
        'file': noop
      };
      function stringBasedInputType(ctrl) {
        ctrl.$formatters.push(function(value) {
          return ctrl.$isEmpty(value) ? value : value.toString();
        });
      }
      function textInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        baseInputType(scope, element, attr, ctrl, $sniffer, $browser);
        stringBasedInputType(ctrl);
      }
      function baseInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        var type = lowercase(element[0].type);
        if (!$sniffer.android) {
          var composing = false;
          element.on('compositionstart', function(data) {
            composing = true;
          });
          element.on('compositionend', function() {
            composing = false;
            listener();
          });
        }
        var listener = function(ev) {
          if (timeout) {
            $browser.defer.cancel(timeout);
            timeout = null;
          }
          if (composing)
            return ;
          var value = element.val(),
              event = ev && ev.type;
          if (type !== 'password' && (!attr.ngTrim || attr.ngTrim !== 'false')) {
            value = trim(value);
          }
          if (ctrl.$viewValue !== value || (value === '' && ctrl.$$hasNativeValidators)) {
            ctrl.$setViewValue(value, event);
          }
        };
        if ($sniffer.hasEvent('input')) {
          element.on('input', listener);
        } else {
          var timeout;
          var deferListener = function(ev, input, origValue) {
            if (!timeout) {
              timeout = $browser.defer(function() {
                timeout = null;
                if (!input || input.value !== origValue) {
                  listener(ev);
                }
              });
            }
          };
          element.on('keydown', function(event) {
            var key = event.keyCode;
            if (key === 91 || (15 < key && key < 19) || (37 <= key && key <= 40))
              return ;
            deferListener(event, this, this.value);
          });
          if ($sniffer.hasEvent('paste')) {
            element.on('paste cut', deferListener);
          }
        }
        element.on('change', listener);
        ctrl.$render = function() {
          element.val(ctrl.$isEmpty(ctrl.$viewValue) ? '' : ctrl.$viewValue);
        };
      }
      function weekParser(isoWeek, existingDate) {
        if (isDate(isoWeek)) {
          return isoWeek;
        }
        if (isString(isoWeek)) {
          WEEK_REGEXP.lastIndex = 0;
          var parts = WEEK_REGEXP.exec(isoWeek);
          if (parts) {
            var year = +parts[1],
                week = +parts[2],
                hours = 0,
                minutes = 0,
                seconds = 0,
                milliseconds = 0,
                firstThurs = getFirstThursdayOfYear(year),
                addDays = (week - 1) * 7;
            if (existingDate) {
              hours = existingDate.getHours();
              minutes = existingDate.getMinutes();
              seconds = existingDate.getSeconds();
              milliseconds = existingDate.getMilliseconds();
            }
            return new Date(year, 0, firstThurs.getDate() + addDays, hours, minutes, seconds, milliseconds);
          }
        }
        return NaN;
      }
      function createDateParser(regexp, mapping) {
        return function(iso, date) {
          var parts,
              map;
          if (isDate(iso)) {
            return iso;
          }
          if (isString(iso)) {
            if (iso.charAt(0) == '"' && iso.charAt(iso.length - 1) == '"') {
              iso = iso.substring(1, iso.length - 1);
            }
            if (ISO_DATE_REGEXP.test(iso)) {
              return new Date(iso);
            }
            regexp.lastIndex = 0;
            parts = regexp.exec(iso);
            if (parts) {
              parts.shift();
              if (date) {
                map = {
                  yyyy: date.getFullYear(),
                  MM: date.getMonth() + 1,
                  dd: date.getDate(),
                  HH: date.getHours(),
                  mm: date.getMinutes(),
                  ss: date.getSeconds(),
                  sss: date.getMilliseconds() / 1000
                };
              } else {
                map = {
                  yyyy: 1970,
                  MM: 1,
                  dd: 1,
                  HH: 0,
                  mm: 0,
                  ss: 0,
                  sss: 0
                };
              }
              forEach(parts, function(part, index) {
                if (index < mapping.length) {
                  map[mapping[index]] = +part;
                }
              });
              return new Date(map.yyyy, map.MM - 1, map.dd, map.HH, map.mm, map.ss || 0, map.sss * 1000 || 0);
            }
          }
          return NaN;
        };
      }
      function createDateInputType(type, regexp, parseDate, format) {
        return function dynamicDateInputType(scope, element, attr, ctrl, $sniffer, $browser, $filter) {
          badInputChecker(scope, element, attr, ctrl);
          baseInputType(scope, element, attr, ctrl, $sniffer, $browser);
          var timezone = ctrl && ctrl.$options && ctrl.$options.timezone;
          var previousDate;
          ctrl.$$parserName = type;
          ctrl.$parsers.push(function(value) {
            if (ctrl.$isEmpty(value))
              return null;
            if (regexp.test(value)) {
              var parsedDate = parseDate(value, previousDate);
              if (timezone === 'UTC') {
                parsedDate.setMinutes(parsedDate.getMinutes() - parsedDate.getTimezoneOffset());
              }
              return parsedDate;
            }
            return undefined;
          });
          ctrl.$formatters.push(function(value) {
            if (value && !isDate(value)) {
              throw $ngModelMinErr('datefmt', 'Expected `{0}` to be a date', value);
            }
            if (isValidDate(value)) {
              previousDate = value;
              if (previousDate && timezone === 'UTC') {
                var timezoneOffset = 60000 * previousDate.getTimezoneOffset();
                previousDate = new Date(previousDate.getTime() + timezoneOffset);
              }
              return $filter('date')(value, format, timezone);
            } else {
              previousDate = null;
              return '';
            }
          });
          if (isDefined(attr.min) || attr.ngMin) {
            var minVal;
            ctrl.$validators.min = function(value) {
              return !isValidDate(value) || isUndefined(minVal) || parseDate(value) >= minVal;
            };
            attr.$observe('min', function(val) {
              minVal = parseObservedDateValue(val);
              ctrl.$validate();
            });
          }
          if (isDefined(attr.max) || attr.ngMax) {
            var maxVal;
            ctrl.$validators.max = function(value) {
              return !isValidDate(value) || isUndefined(maxVal) || parseDate(value) <= maxVal;
            };
            attr.$observe('max', function(val) {
              maxVal = parseObservedDateValue(val);
              ctrl.$validate();
            });
          }
          function isValidDate(value) {
            return value && !(value.getTime && value.getTime() !== value.getTime());
          }
          function parseObservedDateValue(val) {
            return isDefined(val) ? (isDate(val) ? val : parseDate(val)) : undefined;
          }
        };
      }
      function badInputChecker(scope, element, attr, ctrl) {
        var node = element[0];
        var nativeValidation = ctrl.$$hasNativeValidators = isObject(node.validity);
        if (nativeValidation) {
          ctrl.$parsers.push(function(value) {
            var validity = element.prop(VALIDITY_STATE_PROPERTY) || {};
            return validity.badInput && !validity.typeMismatch ? undefined : value;
          });
        }
      }
      function numberInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        badInputChecker(scope, element, attr, ctrl);
        baseInputType(scope, element, attr, ctrl, $sniffer, $browser);
        ctrl.$$parserName = 'number';
        ctrl.$parsers.push(function(value) {
          if (ctrl.$isEmpty(value))
            return null;
          if (NUMBER_REGEXP.test(value))
            return parseFloat(value);
          return undefined;
        });
        ctrl.$formatters.push(function(value) {
          if (!ctrl.$isEmpty(value)) {
            if (!isNumber(value)) {
              throw $ngModelMinErr('numfmt', 'Expected `{0}` to be a number', value);
            }
            value = value.toString();
          }
          return value;
        });
        if (isDefined(attr.min) || attr.ngMin) {
          var minVal;
          ctrl.$validators.min = function(value) {
            return ctrl.$isEmpty(value) || isUndefined(minVal) || value >= minVal;
          };
          attr.$observe('min', function(val) {
            if (isDefined(val) && !isNumber(val)) {
              val = parseFloat(val, 10);
            }
            minVal = isNumber(val) && !isNaN(val) ? val : undefined;
            ctrl.$validate();
          });
        }
        if (isDefined(attr.max) || attr.ngMax) {
          var maxVal;
          ctrl.$validators.max = function(value) {
            return ctrl.$isEmpty(value) || isUndefined(maxVal) || value <= maxVal;
          };
          attr.$observe('max', function(val) {
            if (isDefined(val) && !isNumber(val)) {
              val = parseFloat(val, 10);
            }
            maxVal = isNumber(val) && !isNaN(val) ? val : undefined;
            ctrl.$validate();
          });
        }
      }
      function urlInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        baseInputType(scope, element, attr, ctrl, $sniffer, $browser);
        stringBasedInputType(ctrl);
        ctrl.$$parserName = 'url';
        ctrl.$validators.url = function(modelValue, viewValue) {
          var value = modelValue || viewValue;
          return ctrl.$isEmpty(value) || URL_REGEXP.test(value);
        };
      }
      function emailInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        baseInputType(scope, element, attr, ctrl, $sniffer, $browser);
        stringBasedInputType(ctrl);
        ctrl.$$parserName = 'email';
        ctrl.$validators.email = function(modelValue, viewValue) {
          var value = modelValue || viewValue;
          return ctrl.$isEmpty(value) || EMAIL_REGEXP.test(value);
        };
      }
      function radioInputType(scope, element, attr, ctrl) {
        if (isUndefined(attr.name)) {
          element.attr('name', nextUid());
        }
        var listener = function(ev) {
          if (element[0].checked) {
            ctrl.$setViewValue(attr.value, ev && ev.type);
          }
        };
        element.on('click', listener);
        ctrl.$render = function() {
          var value = attr.value;
          element[0].checked = (value == ctrl.$viewValue);
        };
        attr.$observe('value', ctrl.$render);
      }
      function parseConstantExpr($parse, context, name, expression, fallback) {
        var parseFn;
        if (isDefined(expression)) {
          parseFn = $parse(expression);
          if (!parseFn.constant) {
            throw minErr('ngModel')('constexpr', 'Expected constant expression for `{0}`, but saw ' + '`{1}`.', name, expression);
          }
          return parseFn(context);
        }
        return fallback;
      }
      function checkboxInputType(scope, element, attr, ctrl, $sniffer, $browser, $filter, $parse) {
        var trueValue = parseConstantExpr($parse, scope, 'ngTrueValue', attr.ngTrueValue, true);
        var falseValue = parseConstantExpr($parse, scope, 'ngFalseValue', attr.ngFalseValue, false);
        var listener = function(ev) {
          ctrl.$setViewValue(element[0].checked, ev && ev.type);
        };
        element.on('click', listener);
        ctrl.$render = function() {
          element[0].checked = ctrl.$viewValue;
        };
        ctrl.$isEmpty = function(value) {
          return value === false;
        };
        ctrl.$formatters.push(function(value) {
          return equals(value, trueValue);
        });
        ctrl.$parsers.push(function(value) {
          return value ? trueValue : falseValue;
        });
      }
      var inputDirective = ['$browser', '$sniffer', '$filter', '$parse', function($browser, $sniffer, $filter, $parse) {
        return {
          restrict: 'E',
          require: ['?ngModel'],
          link: {pre: function(scope, element, attr, ctrls) {
              if (ctrls[0]) {
                (inputType[lowercase(attr.type)] || inputType.text)(scope, element, attr, ctrls[0], $sniffer, $browser, $filter, $parse);
              }
            }}
        };
      }];
      var CONSTANT_VALUE_REGEXP = /^(true|false|\d+)$/;
      var ngValueDirective = function() {
        return {
          restrict: 'A',
          priority: 100,
          compile: function(tpl, tplAttr) {
            if (CONSTANT_VALUE_REGEXP.test(tplAttr.ngValue)) {
              return function ngValueConstantLink(scope, elm, attr) {
                attr.$set('value', scope.$eval(attr.ngValue));
              };
            } else {
              return function ngValueLink(scope, elm, attr) {
                scope.$watch(attr.ngValue, function valueWatchAction(value) {
                  attr.$set('value', value);
                });
              };
            }
          }
        };
      };
      var ngBindDirective = ['$compile', function($compile) {
        return {
          restrict: 'AC',
          compile: function ngBindCompile(templateElement) {
            $compile.$$addBindingClass(templateElement);
            return function ngBindLink(scope, element, attr) {
              $compile.$$addBindingInfo(element, attr.ngBind);
              element = element[0];
              scope.$watch(attr.ngBind, function ngBindWatchAction(value) {
                element.textContent = value === undefined ? '' : value;
              });
            };
          }
        };
      }];
      var ngBindTemplateDirective = ['$interpolate', '$compile', function($interpolate, $compile) {
        return {compile: function ngBindTemplateCompile(templateElement) {
            $compile.$$addBindingClass(templateElement);
            return function ngBindTemplateLink(scope, element, attr) {
              var interpolateFn = $interpolate(element.attr(attr.$attr.ngBindTemplate));
              $compile.$$addBindingInfo(element, interpolateFn.expressions);
              element = element[0];
              attr.$observe('ngBindTemplate', function(value) {
                element.textContent = value === undefined ? '' : value;
              });
            };
          }};
      }];
      var ngBindHtmlDirective = ['$sce', '$parse', '$compile', function($sce, $parse, $compile) {
        return {
          restrict: 'A',
          compile: function ngBindHtmlCompile(tElement, tAttrs) {
            var ngBindHtmlGetter = $parse(tAttrs.ngBindHtml);
            var ngBindHtmlWatch = $parse(tAttrs.ngBindHtml, function getStringValue(value) {
              return (value || '').toString();
            });
            $compile.$$addBindingClass(tElement);
            return function ngBindHtmlLink(scope, element, attr) {
              $compile.$$addBindingInfo(element, attr.ngBindHtml);
              scope.$watch(ngBindHtmlWatch, function ngBindHtmlWatchAction() {
                element.html($sce.getTrustedHtml(ngBindHtmlGetter(scope)) || '');
              });
            };
          }
        };
      }];
      var ngChangeDirective = valueFn({
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attr, ctrl) {
          ctrl.$viewChangeListeners.push(function() {
            scope.$eval(attr.ngChange);
          });
        }
      });
      function classDirective(name, selector) {
        name = 'ngClass' + name;
        return ['$animate', function($animate) {
          return {
            restrict: 'AC',
            link: function(scope, element, attr) {
              var oldVal;
              scope.$watch(attr[name], ngClassWatchAction, true);
              attr.$observe('class', function(value) {
                ngClassWatchAction(scope.$eval(attr[name]));
              });
              if (name !== 'ngClass') {
                scope.$watch('$index', function($index, old$index) {
                  var mod = $index & 1;
                  if (mod !== (old$index & 1)) {
                    var classes = arrayClasses(scope.$eval(attr[name]));
                    mod === selector ? addClasses(classes) : removeClasses(classes);
                  }
                });
              }
              function addClasses(classes) {
                var newClasses = digestClassCounts(classes, 1);
                attr.$addClass(newClasses);
              }
              function removeClasses(classes) {
                var newClasses = digestClassCounts(classes, -1);
                attr.$removeClass(newClasses);
              }
              function digestClassCounts(classes, count) {
                var classCounts = element.data('$classCounts') || {};
                var classesToUpdate = [];
                forEach(classes, function(className) {
                  if (count > 0 || classCounts[className]) {
                    classCounts[className] = (classCounts[className] || 0) + count;
                    if (classCounts[className] === +(count > 0)) {
                      classesToUpdate.push(className);
                    }
                  }
                });
                element.data('$classCounts', classCounts);
                return classesToUpdate.join(' ');
              }
              function updateClasses(oldClasses, newClasses) {
                var toAdd = arrayDifference(newClasses, oldClasses);
                var toRemove = arrayDifference(oldClasses, newClasses);
                toAdd = digestClassCounts(toAdd, 1);
                toRemove = digestClassCounts(toRemove, -1);
                if (toAdd && toAdd.length) {
                  $animate.addClass(element, toAdd);
                }
                if (toRemove && toRemove.length) {
                  $animate.removeClass(element, toRemove);
                }
              }
              function ngClassWatchAction(newVal) {
                if (selector === true || scope.$index % 2 === selector) {
                  var newClasses = arrayClasses(newVal || []);
                  if (!oldVal) {
                    addClasses(newClasses);
                  } else if (!equals(newVal, oldVal)) {
                    var oldClasses = arrayClasses(oldVal);
                    updateClasses(oldClasses, newClasses);
                  }
                }
                oldVal = shallowCopy(newVal);
              }
            }
          };
          function arrayDifference(tokens1, tokens2) {
            var values = [];
            outer: for (var i = 0; i < tokens1.length; i++) {
              var token = tokens1[i];
              for (var j = 0; j < tokens2.length; j++) {
                if (token == tokens2[j])
                  continue outer;
              }
              values.push(token);
            }
            return values;
          }
          function arrayClasses(classVal) {
            if (isArray(classVal)) {
              return classVal;
            } else if (isString(classVal)) {
              return classVal.split(' ');
            } else if (isObject(classVal)) {
              var classes = [];
              forEach(classVal, function(v, k) {
                if (v) {
                  classes = classes.concat(k.split(' '));
                }
              });
              return classes;
            }
            return classVal;
          }
        }];
      }
      var ngClassDirective = classDirective('', true);
      var ngClassOddDirective = classDirective('Odd', 0);
      var ngClassEvenDirective = classDirective('Even', 1);
      var ngCloakDirective = ngDirective({compile: function(element, attr) {
          attr.$set('ngCloak', undefined);
          element.removeClass('ng-cloak');
        }});
      var ngControllerDirective = [function() {
        return {
          restrict: 'A',
          scope: true,
          controller: '@',
          priority: 500
        };
      }];
      var ngEventDirectives = {};
      var forceAsyncEvents = {
        'blur': true,
        'focus': true
      };
      forEach('click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste'.split(' '), function(eventName) {
        var directiveName = directiveNormalize('ng-' + eventName);
        ngEventDirectives[directiveName] = ['$parse', '$rootScope', function($parse, $rootScope) {
          return {
            restrict: 'A',
            compile: function($element, attr) {
              var fn = $parse(attr[directiveName], null, true);
              return function ngEventHandler(scope, element) {
                element.on(eventName, function(event) {
                  var callback = function() {
                    fn(scope, {$event: event});
                  };
                  if (forceAsyncEvents[eventName] && $rootScope.$$phase) {
                    scope.$evalAsync(callback);
                  } else {
                    scope.$apply(callback);
                  }
                });
              };
            }
          };
        }];
      });
      var ngIfDirective = ['$animate', function($animate) {
        return {
          multiElement: true,
          transclude: 'element',
          priority: 600,
          terminal: true,
          restrict: 'A',
          $$tlb: true,
          link: function($scope, $element, $attr, ctrl, $transclude) {
            var block,
                childScope,
                previousElements;
            $scope.$watch($attr.ngIf, function ngIfWatchAction(value) {
              if (value) {
                if (!childScope) {
                  $transclude(function(clone, newScope) {
                    childScope = newScope;
                    clone[clone.length++] = document.createComment(' end ngIf: ' + $attr.ngIf + ' ');
                    block = {clone: clone};
                    $animate.enter(clone, $element.parent(), $element);
                  });
                }
              } else {
                if (previousElements) {
                  previousElements.remove();
                  previousElements = null;
                }
                if (childScope) {
                  childScope.$destroy();
                  childScope = null;
                }
                if (block) {
                  previousElements = getBlockNodes(block.clone);
                  $animate.leave(previousElements).then(function() {
                    previousElements = null;
                  });
                  block = null;
                }
              }
            });
          }
        };
      }];
      var ngIncludeDirective = ['$templateRequest', '$anchorScroll', '$animate', '$sce', function($templateRequest, $anchorScroll, $animate, $sce) {
        return {
          restrict: 'ECA',
          priority: 400,
          terminal: true,
          transclude: 'element',
          controller: angular.noop,
          compile: function(element, attr) {
            var srcExp = attr.ngInclude || attr.src,
                onloadExp = attr.onload || '',
                autoScrollExp = attr.autoscroll;
            return function(scope, $element, $attr, ctrl, $transclude) {
              var changeCounter = 0,
                  currentScope,
                  previousElement,
                  currentElement;
              var cleanupLastIncludeContent = function() {
                if (previousElement) {
                  previousElement.remove();
                  previousElement = null;
                }
                if (currentScope) {
                  currentScope.$destroy();
                  currentScope = null;
                }
                if (currentElement) {
                  $animate.leave(currentElement).then(function() {
                    previousElement = null;
                  });
                  previousElement = currentElement;
                  currentElement = null;
                }
              };
              scope.$watch($sce.parseAsResourceUrl(srcExp), function ngIncludeWatchAction(src) {
                var afterAnimation = function() {
                  if (isDefined(autoScrollExp) && (!autoScrollExp || scope.$eval(autoScrollExp))) {
                    $anchorScroll();
                  }
                };
                var thisChangeId = ++changeCounter;
                if (src) {
                  $templateRequest(src, true).then(function(response) {
                    if (thisChangeId !== changeCounter)
                      return ;
                    var newScope = scope.$new();
                    ctrl.template = response;
                    var clone = $transclude(newScope, function(clone) {
                      cleanupLastIncludeContent();
                      $animate.enter(clone, null, $element).then(afterAnimation);
                    });
                    currentScope = newScope;
                    currentElement = clone;
                    currentScope.$emit('$includeContentLoaded', src);
                    scope.$eval(onloadExp);
                  }, function() {
                    if (thisChangeId === changeCounter) {
                      cleanupLastIncludeContent();
                      scope.$emit('$includeContentError', src);
                    }
                  });
                  scope.$emit('$includeContentRequested', src);
                } else {
                  cleanupLastIncludeContent();
                  ctrl.template = null;
                }
              });
            };
          }
        };
      }];
      var ngIncludeFillContentDirective = ['$compile', function($compile) {
        return {
          restrict: 'ECA',
          priority: -400,
          require: 'ngInclude',
          link: function(scope, $element, $attr, ctrl) {
            if (/SVG/.test($element[0].toString())) {
              $element.empty();
              $compile(jqLiteBuildFragment(ctrl.template, document).childNodes)(scope, function namespaceAdaptedClone(clone) {
                $element.append(clone);
              }, {futureParentElement: $element});
              return ;
            }
            $element.html(ctrl.template);
            $compile($element.contents())(scope);
          }
        };
      }];
      var ngInitDirective = ngDirective({
        priority: 450,
        compile: function() {
          return {pre: function(scope, element, attrs) {
              scope.$eval(attrs.ngInit);
            }};
        }
      });
      var ngListDirective = function() {
        return {
          restrict: 'A',
          priority: 100,
          require: 'ngModel',
          link: function(scope, element, attr, ctrl) {
            var ngList = element.attr(attr.$attr.ngList) || ', ';
            var trimValues = attr.ngTrim !== 'false';
            var separator = trimValues ? trim(ngList) : ngList;
            var parse = function(viewValue) {
              if (isUndefined(viewValue))
                return ;
              var list = [];
              if (viewValue) {
                forEach(viewValue.split(separator), function(value) {
                  if (value)
                    list.push(trimValues ? trim(value) : value);
                });
              }
              return list;
            };
            ctrl.$parsers.push(parse);
            ctrl.$formatters.push(function(value) {
              if (isArray(value)) {
                return value.join(ngList);
              }
              return undefined;
            });
            ctrl.$isEmpty = function(value) {
              return !value || !value.length;
            };
          }
        };
      };
      var VALID_CLASS = 'ng-valid',
          INVALID_CLASS = 'ng-invalid',
          PRISTINE_CLASS = 'ng-pristine',
          DIRTY_CLASS = 'ng-dirty',
          UNTOUCHED_CLASS = 'ng-untouched',
          TOUCHED_CLASS = 'ng-touched',
          PENDING_CLASS = 'ng-pending';
      var $ngModelMinErr = new minErr('ngModel');
      var NgModelController = ['$scope', '$exceptionHandler', '$attrs', '$element', '$parse', '$animate', '$timeout', '$rootScope', '$q', '$interpolate', function($scope, $exceptionHandler, $attr, $element, $parse, $animate, $timeout, $rootScope, $q, $interpolate) {
        this.$viewValue = Number.NaN;
        this.$modelValue = Number.NaN;
        this.$$rawModelValue = undefined;
        this.$validators = {};
        this.$asyncValidators = {};
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$untouched = true;
        this.$touched = false;
        this.$pristine = true;
        this.$dirty = false;
        this.$valid = true;
        this.$invalid = false;
        this.$error = {};
        this.$$success = {};
        this.$pending = undefined;
        this.$name = $interpolate($attr.name || '', false)($scope);
        var parsedNgModel = $parse($attr.ngModel),
            parsedNgModelAssign = parsedNgModel.assign,
            ngModelGet = parsedNgModel,
            ngModelSet = parsedNgModelAssign,
            pendingDebounce = null,
            parserValid,
            ctrl = this;
        this.$$setOptions = function(options) {
          ctrl.$options = options;
          if (options && options.getterSetter) {
            var invokeModelGetter = $parse($attr.ngModel + '()'),
                invokeModelSetter = $parse($attr.ngModel + '($$$p)');
            ngModelGet = function($scope) {
              var modelValue = parsedNgModel($scope);
              if (isFunction(modelValue)) {
                modelValue = invokeModelGetter($scope);
              }
              return modelValue;
            };
            ngModelSet = function($scope, newValue) {
              if (isFunction(parsedNgModel($scope))) {
                invokeModelSetter($scope, {$$$p: ctrl.$modelValue});
              } else {
                parsedNgModelAssign($scope, ctrl.$modelValue);
              }
            };
          } else if (!parsedNgModel.assign) {
            throw $ngModelMinErr('nonassign', "Expression '{0}' is non-assignable. Element: {1}", $attr.ngModel, startingTag($element));
          }
        };
        this.$render = noop;
        this.$isEmpty = function(value) {
          return isUndefined(value) || value === '' || value === null || value !== value;
        };
        var parentForm = $element.inheritedData('$formController') || nullFormCtrl,
            currentValidationRunId = 0;
        addSetValidityMethod({
          ctrl: this,
          $element: $element,
          set: function(object, property) {
            object[property] = true;
          },
          unset: function(object, property) {
            delete object[property];
          },
          parentForm: parentForm,
          $animate: $animate
        });
        this.$setPristine = function() {
          ctrl.$dirty = false;
          ctrl.$pristine = true;
          $animate.removeClass($element, DIRTY_CLASS);
          $animate.addClass($element, PRISTINE_CLASS);
        };
        this.$setDirty = function() {
          ctrl.$dirty = true;
          ctrl.$pristine = false;
          $animate.removeClass($element, PRISTINE_CLASS);
          $animate.addClass($element, DIRTY_CLASS);
          parentForm.$setDirty();
        };
        this.$setUntouched = function() {
          ctrl.$touched = false;
          ctrl.$untouched = true;
          $animate.setClass($element, UNTOUCHED_CLASS, TOUCHED_CLASS);
        };
        this.$setTouched = function() {
          ctrl.$touched = true;
          ctrl.$untouched = false;
          $animate.setClass($element, TOUCHED_CLASS, UNTOUCHED_CLASS);
        };
        this.$rollbackViewValue = function() {
          $timeout.cancel(pendingDebounce);
          ctrl.$viewValue = ctrl.$$lastCommittedViewValue;
          ctrl.$render();
        };
        this.$validate = function() {
          if (isNumber(ctrl.$modelValue) && isNaN(ctrl.$modelValue)) {
            return ;
          }
          var viewValue = ctrl.$$lastCommittedViewValue;
          var modelValue = ctrl.$$rawModelValue;
          var prevValid = ctrl.$valid;
          var prevModelValue = ctrl.$modelValue;
          var allowInvalid = ctrl.$options && ctrl.$options.allowInvalid;
          ctrl.$$runValidators(modelValue, viewValue, function(allValid) {
            if (!allowInvalid && prevValid !== allValid) {
              ctrl.$modelValue = allValid ? modelValue : undefined;
              if (ctrl.$modelValue !== prevModelValue) {
                ctrl.$$writeModelToScope();
              }
            }
          });
        };
        this.$$runValidators = function(modelValue, viewValue, doneCallback) {
          currentValidationRunId++;
          var localValidationRunId = currentValidationRunId;
          if (!processParseErrors()) {
            validationDone(false);
            return ;
          }
          if (!processSyncValidators()) {
            validationDone(false);
            return ;
          }
          processAsyncValidators();
          function processParseErrors() {
            var errorKey = ctrl.$$parserName || 'parse';
            if (parserValid === undefined) {
              setValidity(errorKey, null);
            } else {
              if (!parserValid) {
                forEach(ctrl.$validators, function(v, name) {
                  setValidity(name, null);
                });
                forEach(ctrl.$asyncValidators, function(v, name) {
                  setValidity(name, null);
                });
              }
              setValidity(errorKey, parserValid);
              return parserValid;
            }
            return true;
          }
          function processSyncValidators() {
            var syncValidatorsValid = true;
            forEach(ctrl.$validators, function(validator, name) {
              var result = validator(modelValue, viewValue);
              syncValidatorsValid = syncValidatorsValid && result;
              setValidity(name, result);
            });
            if (!syncValidatorsValid) {
              forEach(ctrl.$asyncValidators, function(v, name) {
                setValidity(name, null);
              });
              return false;
            }
            return true;
          }
          function processAsyncValidators() {
            var validatorPromises = [];
            var allValid = true;
            forEach(ctrl.$asyncValidators, function(validator, name) {
              var promise = validator(modelValue, viewValue);
              if (!isPromiseLike(promise)) {
                throw $ngModelMinErr("$asyncValidators", "Expected asynchronous validator to return a promise but got '{0}' instead.", promise);
              }
              setValidity(name, undefined);
              validatorPromises.push(promise.then(function() {
                setValidity(name, true);
              }, function(error) {
                allValid = false;
                setValidity(name, false);
              }));
            });
            if (!validatorPromises.length) {
              validationDone(true);
            } else {
              $q.all(validatorPromises).then(function() {
                validationDone(allValid);
              }, noop);
            }
          }
          function setValidity(name, isValid) {
            if (localValidationRunId === currentValidationRunId) {
              ctrl.$setValidity(name, isValid);
            }
          }
          function validationDone(allValid) {
            if (localValidationRunId === currentValidationRunId) {
              doneCallback(allValid);
            }
          }
        };
        this.$commitViewValue = function() {
          var viewValue = ctrl.$viewValue;
          $timeout.cancel(pendingDebounce);
          if (ctrl.$$lastCommittedViewValue === viewValue && (viewValue !== '' || !ctrl.$$hasNativeValidators)) {
            return ;
          }
          ctrl.$$lastCommittedViewValue = viewValue;
          if (ctrl.$pristine) {
            this.$setDirty();
          }
          this.$$parseAndValidate();
        };
        this.$$parseAndValidate = function() {
          var viewValue = ctrl.$$lastCommittedViewValue;
          var modelValue = viewValue;
          parserValid = isUndefined(modelValue) ? undefined : true;
          if (parserValid) {
            for (var i = 0; i < ctrl.$parsers.length; i++) {
              modelValue = ctrl.$parsers[i](modelValue);
              if (isUndefined(modelValue)) {
                parserValid = false;
                break;
              }
            }
          }
          if (isNumber(ctrl.$modelValue) && isNaN(ctrl.$modelValue)) {
            ctrl.$modelValue = ngModelGet($scope);
          }
          var prevModelValue = ctrl.$modelValue;
          var allowInvalid = ctrl.$options && ctrl.$options.allowInvalid;
          ctrl.$$rawModelValue = modelValue;
          if (allowInvalid) {
            ctrl.$modelValue = modelValue;
            writeToModelIfNeeded();
          }
          ctrl.$$runValidators(modelValue, ctrl.$$lastCommittedViewValue, function(allValid) {
            if (!allowInvalid) {
              ctrl.$modelValue = allValid ? modelValue : undefined;
              writeToModelIfNeeded();
            }
          });
          function writeToModelIfNeeded() {
            if (ctrl.$modelValue !== prevModelValue) {
              ctrl.$$writeModelToScope();
            }
          }
        };
        this.$$writeModelToScope = function() {
          ngModelSet($scope, ctrl.$modelValue);
          forEach(ctrl.$viewChangeListeners, function(listener) {
            try {
              listener();
            } catch (e) {
              $exceptionHandler(e);
            }
          });
        };
        this.$setViewValue = function(value, trigger) {
          ctrl.$viewValue = value;
          if (!ctrl.$options || ctrl.$options.updateOnDefault) {
            ctrl.$$debounceViewValueCommit(trigger);
          }
        };
        this.$$debounceViewValueCommit = function(trigger) {
          var debounceDelay = 0,
              options = ctrl.$options,
              debounce;
          if (options && isDefined(options.debounce)) {
            debounce = options.debounce;
            if (isNumber(debounce)) {
              debounceDelay = debounce;
            } else if (isNumber(debounce[trigger])) {
              debounceDelay = debounce[trigger];
            } else if (isNumber(debounce['default'])) {
              debounceDelay = debounce['default'];
            }
          }
          $timeout.cancel(pendingDebounce);
          if (debounceDelay) {
            pendingDebounce = $timeout(function() {
              ctrl.$commitViewValue();
            }, debounceDelay);
          } else if ($rootScope.$$phase) {
            ctrl.$commitViewValue();
          } else {
            $scope.$apply(function() {
              ctrl.$commitViewValue();
            });
          }
        };
        $scope.$watch(function ngModelWatch() {
          var modelValue = ngModelGet($scope);
          if (modelValue !== ctrl.$modelValue) {
            ctrl.$modelValue = ctrl.$$rawModelValue = modelValue;
            parserValid = undefined;
            var formatters = ctrl.$formatters,
                idx = formatters.length;
            var viewValue = modelValue;
            while (idx--) {
              viewValue = formatters[idx](viewValue);
            }
            if (ctrl.$viewValue !== viewValue) {
              ctrl.$viewValue = ctrl.$$lastCommittedViewValue = viewValue;
              ctrl.$render();
              ctrl.$$runValidators(modelValue, viewValue, noop);
            }
          }
          return modelValue;
        });
      }];
      var ngModelDirective = ['$rootScope', function($rootScope) {
        return {
          restrict: 'A',
          require: ['ngModel', '^?form', '^?ngModelOptions'],
          controller: NgModelController,
          priority: 1,
          compile: function ngModelCompile(element) {
            element.addClass(PRISTINE_CLASS).addClass(UNTOUCHED_CLASS).addClass(VALID_CLASS);
            return {
              pre: function ngModelPreLink(scope, element, attr, ctrls) {
                var modelCtrl = ctrls[0],
                    formCtrl = ctrls[1] || nullFormCtrl;
                modelCtrl.$$setOptions(ctrls[2] && ctrls[2].$options);
                formCtrl.$addControl(modelCtrl);
                attr.$observe('name', function(newValue) {
                  if (modelCtrl.$name !== newValue) {
                    formCtrl.$$renameControl(modelCtrl, newValue);
                  }
                });
                scope.$on('$destroy', function() {
                  formCtrl.$removeControl(modelCtrl);
                });
              },
              post: function ngModelPostLink(scope, element, attr, ctrls) {
                var modelCtrl = ctrls[0];
                if (modelCtrl.$options && modelCtrl.$options.updateOn) {
                  element.on(modelCtrl.$options.updateOn, function(ev) {
                    modelCtrl.$$debounceViewValueCommit(ev && ev.type);
                  });
                }
                element.on('blur', function(ev) {
                  if (modelCtrl.$touched)
                    return ;
                  if ($rootScope.$$phase) {
                    scope.$evalAsync(modelCtrl.$setTouched);
                  } else {
                    scope.$apply(modelCtrl.$setTouched);
                  }
                });
              }
            };
          }
        };
      }];
      var DEFAULT_REGEXP = /(\s+|^)default(\s+|$)/;
      var ngModelOptionsDirective = function() {
        return {
          restrict: 'A',
          controller: ['$scope', '$attrs', function($scope, $attrs) {
            var that = this;
            this.$options = $scope.$eval($attrs.ngModelOptions);
            if (this.$options.updateOn !== undefined) {
              this.$options.updateOnDefault = false;
              this.$options.updateOn = trim(this.$options.updateOn.replace(DEFAULT_REGEXP, function() {
                that.$options.updateOnDefault = true;
                return ' ';
              }));
            } else {
              this.$options.updateOnDefault = true;
            }
          }]
        };
      };
      function addSetValidityMethod(context) {
        var ctrl = context.ctrl,
            $element = context.$element,
            classCache = {},
            set = context.set,
            unset = context.unset,
            parentForm = context.parentForm,
            $animate = context.$animate;
        classCache[INVALID_CLASS] = !(classCache[VALID_CLASS] = $element.hasClass(VALID_CLASS));
        ctrl.$setValidity = setValidity;
        function setValidity(validationErrorKey, state, controller) {
          if (state === undefined) {
            createAndSet('$pending', validationErrorKey, controller);
          } else {
            unsetAndCleanup('$pending', validationErrorKey, controller);
          }
          if (!isBoolean(state)) {
            unset(ctrl.$error, validationErrorKey, controller);
            unset(ctrl.$$success, validationErrorKey, controller);
          } else {
            if (state) {
              unset(ctrl.$error, validationErrorKey, controller);
              set(ctrl.$$success, validationErrorKey, controller);
            } else {
              set(ctrl.$error, validationErrorKey, controller);
              unset(ctrl.$$success, validationErrorKey, controller);
            }
          }
          if (ctrl.$pending) {
            cachedToggleClass(PENDING_CLASS, true);
            ctrl.$valid = ctrl.$invalid = undefined;
            toggleValidationCss('', null);
          } else {
            cachedToggleClass(PENDING_CLASS, false);
            ctrl.$valid = isObjectEmpty(ctrl.$error);
            ctrl.$invalid = !ctrl.$valid;
            toggleValidationCss('', ctrl.$valid);
          }
          var combinedState;
          if (ctrl.$pending && ctrl.$pending[validationErrorKey]) {
            combinedState = undefined;
          } else if (ctrl.$error[validationErrorKey]) {
            combinedState = false;
          } else if (ctrl.$$success[validationErrorKey]) {
            combinedState = true;
          } else {
            combinedState = null;
          }
          toggleValidationCss(validationErrorKey, combinedState);
          parentForm.$setValidity(validationErrorKey, combinedState, ctrl);
        }
        function createAndSet(name, value, controller) {
          if (!ctrl[name]) {
            ctrl[name] = {};
          }
          set(ctrl[name], value, controller);
        }
        function unsetAndCleanup(name, value, controller) {
          if (ctrl[name]) {
            unset(ctrl[name], value, controller);
          }
          if (isObjectEmpty(ctrl[name])) {
            ctrl[name] = undefined;
          }
        }
        function cachedToggleClass(className, switchValue) {
          if (switchValue && !classCache[className]) {
            $animate.addClass($element, className);
            classCache[className] = true;
          } else if (!switchValue && classCache[className]) {
            $animate.removeClass($element, className);
            classCache[className] = false;
          }
        }
        function toggleValidationCss(validationErrorKey, isValid) {
          validationErrorKey = validationErrorKey ? '-' + snake_case(validationErrorKey, '-') : '';
          cachedToggleClass(VALID_CLASS + validationErrorKey, isValid === true);
          cachedToggleClass(INVALID_CLASS + validationErrorKey, isValid === false);
        }
      }
      function isObjectEmpty(obj) {
        if (obj) {
          for (var prop in obj) {
            return false;
          }
        }
        return true;
      }
      var ngNonBindableDirective = ngDirective({
        terminal: true,
        priority: 1000
      });
      var ngPluralizeDirective = ['$locale', '$interpolate', function($locale, $interpolate) {
        var BRACE = /{}/g,
            IS_WHEN = /^when(Minus)?(.+)$/;
        return {
          restrict: 'EA',
          link: function(scope, element, attr) {
            var numberExp = attr.count,
                whenExp = attr.$attr.when && element.attr(attr.$attr.when),
                offset = attr.offset || 0,
                whens = scope.$eval(whenExp) || {},
                whensExpFns = {},
                startSymbol = $interpolate.startSymbol(),
                endSymbol = $interpolate.endSymbol(),
                braceReplacement = startSymbol + numberExp + '-' + offset + endSymbol,
                watchRemover = angular.noop,
                lastCount;
            forEach(attr, function(expression, attributeName) {
              var tmpMatch = IS_WHEN.exec(attributeName);
              if (tmpMatch) {
                var whenKey = (tmpMatch[1] ? '-' : '') + lowercase(tmpMatch[2]);
                whens[whenKey] = element.attr(attr.$attr[attributeName]);
              }
            });
            forEach(whens, function(expression, key) {
              whensExpFns[key] = $interpolate(expression.replace(BRACE, braceReplacement));
            });
            scope.$watch(numberExp, function ngPluralizeWatchAction(newVal) {
              var count = parseFloat(newVal);
              var countIsNaN = isNaN(count);
              if (!countIsNaN && !(count in whens)) {
                count = $locale.pluralCat(count - offset);
              }
              if ((count !== lastCount) && !(countIsNaN && isNaN(lastCount))) {
                watchRemover();
                watchRemover = scope.$watch(whensExpFns[count], updateElementText);
                lastCount = count;
              }
            });
            function updateElementText(newText) {
              element.text(newText || '');
            }
          }
        };
      }];
      var ngRepeatDirective = ['$parse', '$animate', function($parse, $animate) {
        var NG_REMOVED = '$$NG_REMOVED';
        var ngRepeatMinErr = minErr('ngRepeat');
        var updateScope = function(scope, index, valueIdentifier, value, keyIdentifier, key, arrayLength) {
          scope[valueIdentifier] = value;
          if (keyIdentifier)
            scope[keyIdentifier] = key;
          scope.$index = index;
          scope.$first = (index === 0);
          scope.$last = (index === (arrayLength - 1));
          scope.$middle = !(scope.$first || scope.$last);
          scope.$odd = !(scope.$even = (index & 1) === 0);
        };
        var getBlockStart = function(block) {
          return block.clone[0];
        };
        var getBlockEnd = function(block) {
          return block.clone[block.clone.length - 1];
        };
        return {
          restrict: 'A',
          multiElement: true,
          transclude: 'element',
          priority: 1000,
          terminal: true,
          $$tlb: true,
          compile: function ngRepeatCompile($element, $attr) {
            var expression = $attr.ngRepeat;
            var ngRepeatEndComment = document.createComment(' end ngRepeat: ' + expression + ' ');
            var match = expression.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
            if (!match) {
              throw ngRepeatMinErr('iexp', "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", expression);
            }
            var lhs = match[1];
            var rhs = match[2];
            var aliasAs = match[3];
            var trackByExp = match[4];
            match = lhs.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
            if (!match) {
              throw ngRepeatMinErr('iidexp', "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", lhs);
            }
            var valueIdentifier = match[3] || match[1];
            var keyIdentifier = match[2];
            if (aliasAs && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(aliasAs) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(aliasAs))) {
              throw ngRepeatMinErr('badident', "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", aliasAs);
            }
            var trackByExpGetter,
                trackByIdExpFn,
                trackByIdArrayFn,
                trackByIdObjFn;
            var hashFnLocals = {$id: hashKey};
            if (trackByExp) {
              trackByExpGetter = $parse(trackByExp);
            } else {
              trackByIdArrayFn = function(key, value) {
                return hashKey(value);
              };
              trackByIdObjFn = function(key) {
                return key;
              };
            }
            return function ngRepeatLink($scope, $element, $attr, ctrl, $transclude) {
              if (trackByExpGetter) {
                trackByIdExpFn = function(key, value, index) {
                  if (keyIdentifier)
                    hashFnLocals[keyIdentifier] = key;
                  hashFnLocals[valueIdentifier] = value;
                  hashFnLocals.$index = index;
                  return trackByExpGetter($scope, hashFnLocals);
                };
              }
              var lastBlockMap = createMap();
              $scope.$watchCollection(rhs, function ngRepeatAction(collection) {
                var index,
                    length,
                    previousNode = $element[0],
                    nextNode,
                    nextBlockMap = createMap(),
                    collectionLength,
                    key,
                    value,
                    trackById,
                    trackByIdFn,
                    collectionKeys,
                    block,
                    nextBlockOrder,
                    elementsToRemove;
                if (aliasAs) {
                  $scope[aliasAs] = collection;
                }
                if (isArrayLike(collection)) {
                  collectionKeys = collection;
                  trackByIdFn = trackByIdExpFn || trackByIdArrayFn;
                } else {
                  trackByIdFn = trackByIdExpFn || trackByIdObjFn;
                  collectionKeys = [];
                  for (var itemKey in collection) {
                    if (collection.hasOwnProperty(itemKey) && itemKey.charAt(0) != '$') {
                      collectionKeys.push(itemKey);
                    }
                  }
                  collectionKeys.sort();
                }
                collectionLength = collectionKeys.length;
                nextBlockOrder = new Array(collectionLength);
                for (index = 0; index < collectionLength; index++) {
                  key = (collection === collectionKeys) ? index : collectionKeys[index];
                  value = collection[key];
                  trackById = trackByIdFn(key, value, index);
                  if (lastBlockMap[trackById]) {
                    block = lastBlockMap[trackById];
                    delete lastBlockMap[trackById];
                    nextBlockMap[trackById] = block;
                    nextBlockOrder[index] = block;
                  } else if (nextBlockMap[trackById]) {
                    forEach(nextBlockOrder, function(block) {
                      if (block && block.scope)
                        lastBlockMap[block.id] = block;
                    });
                    throw ngRepeatMinErr('dupes', "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", expression, trackById, value);
                  } else {
                    nextBlockOrder[index] = {
                      id: trackById,
                      scope: undefined,
                      clone: undefined
                    };
                    nextBlockMap[trackById] = true;
                  }
                }
                for (var blockKey in lastBlockMap) {
                  block = lastBlockMap[blockKey];
                  elementsToRemove = getBlockNodes(block.clone);
                  $animate.leave(elementsToRemove);
                  if (elementsToRemove[0].parentNode) {
                    for (index = 0, length = elementsToRemove.length; index < length; index++) {
                      elementsToRemove[index][NG_REMOVED] = true;
                    }
                  }
                  block.scope.$destroy();
                }
                for (index = 0; index < collectionLength; index++) {
                  key = (collection === collectionKeys) ? index : collectionKeys[index];
                  value = collection[key];
                  block = nextBlockOrder[index];
                  if (block.scope) {
                    nextNode = previousNode;
                    do {
                      nextNode = nextNode.nextSibling;
                    } while (nextNode && nextNode[NG_REMOVED]);
                    if (getBlockStart(block) != nextNode) {
                      $animate.move(getBlockNodes(block.clone), null, jqLite(previousNode));
                    }
                    previousNode = getBlockEnd(block);
                    updateScope(block.scope, index, valueIdentifier, value, keyIdentifier, key, collectionLength);
                  } else {
                    $transclude(function ngRepeatTransclude(clone, scope) {
                      block.scope = scope;
                      var endNode = ngRepeatEndComment.cloneNode(false);
                      clone[clone.length++] = endNode;
                      $animate.enter(clone, null, jqLite(previousNode));
                      previousNode = endNode;
                      block.clone = clone;
                      nextBlockMap[block.id] = block;
                      updateScope(block.scope, index, valueIdentifier, value, keyIdentifier, key, collectionLength);
                    });
                  }
                }
                lastBlockMap = nextBlockMap;
              });
            };
          }
        };
      }];
      var NG_HIDE_CLASS = 'ng-hide';
      var NG_HIDE_IN_PROGRESS_CLASS = 'ng-hide-animate';
      var ngShowDirective = ['$animate', function($animate) {
        return {
          restrict: 'A',
          multiElement: true,
          link: function(scope, element, attr) {
            scope.$watch(attr.ngShow, function ngShowWatchAction(value) {
              $animate[value ? 'removeClass' : 'addClass'](element, NG_HIDE_CLASS, {tempClasses: NG_HIDE_IN_PROGRESS_CLASS});
            });
          }
        };
      }];
      var ngHideDirective = ['$animate', function($animate) {
        return {
          restrict: 'A',
          multiElement: true,
          link: function(scope, element, attr) {
            scope.$watch(attr.ngHide, function ngHideWatchAction(value) {
              $animate[value ? 'addClass' : 'removeClass'](element, NG_HIDE_CLASS, {tempClasses: NG_HIDE_IN_PROGRESS_CLASS});
            });
          }
        };
      }];
      var ngStyleDirective = ngDirective(function(scope, element, attr) {
        scope.$watchCollection(attr.ngStyle, function ngStyleWatchAction(newStyles, oldStyles) {
          if (oldStyles && (newStyles !== oldStyles)) {
            forEach(oldStyles, function(val, style) {
              element.css(style, '');
            });
          }
          if (newStyles)
            element.css(newStyles);
        });
      });
      var ngSwitchDirective = ['$animate', function($animate) {
        return {
          restrict: 'EA',
          require: 'ngSwitch',
          controller: ['$scope', function ngSwitchController() {
            this.cases = {};
          }],
          link: function(scope, element, attr, ngSwitchController) {
            var watchExpr = attr.ngSwitch || attr.on,
                selectedTranscludes = [],
                selectedElements = [],
                previousLeaveAnimations = [],
                selectedScopes = [];
            var spliceFactory = function(array, index) {
              return function() {
                array.splice(index, 1);
              };
            };
            scope.$watch(watchExpr, function ngSwitchWatchAction(value) {
              var i,
                  ii;
              for (i = 0, ii = previousLeaveAnimations.length; i < ii; ++i) {
                $animate.cancel(previousLeaveAnimations[i]);
              }
              previousLeaveAnimations.length = 0;
              for (i = 0, ii = selectedScopes.length; i < ii; ++i) {
                var selected = getBlockNodes(selectedElements[i].clone);
                selectedScopes[i].$destroy();
                var promise = previousLeaveAnimations[i] = $animate.leave(selected);
                promise.then(spliceFactory(previousLeaveAnimations, i));
              }
              selectedElements.length = 0;
              selectedScopes.length = 0;
              if ((selectedTranscludes = ngSwitchController.cases['!' + value] || ngSwitchController.cases['?'])) {
                forEach(selectedTranscludes, function(selectedTransclude) {
                  selectedTransclude.transclude(function(caseElement, selectedScope) {
                    selectedScopes.push(selectedScope);
                    var anchor = selectedTransclude.element;
                    caseElement[caseElement.length++] = document.createComment(' end ngSwitchWhen: ');
                    var block = {clone: caseElement};
                    selectedElements.push(block);
                    $animate.enter(caseElement, anchor.parent(), anchor);
                  });
                });
              }
            });
          }
        };
      }];
      var ngSwitchWhenDirective = ngDirective({
        transclude: 'element',
        priority: 1200,
        require: '^ngSwitch',
        multiElement: true,
        link: function(scope, element, attrs, ctrl, $transclude) {
          ctrl.cases['!' + attrs.ngSwitchWhen] = (ctrl.cases['!' + attrs.ngSwitchWhen] || []);
          ctrl.cases['!' + attrs.ngSwitchWhen].push({
            transclude: $transclude,
            element: element
          });
        }
      });
      var ngSwitchDefaultDirective = ngDirective({
        transclude: 'element',
        priority: 1200,
        require: '^ngSwitch',
        multiElement: true,
        link: function(scope, element, attr, ctrl, $transclude) {
          ctrl.cases['?'] = (ctrl.cases['?'] || []);
          ctrl.cases['?'].push({
            transclude: $transclude,
            element: element
          });
        }
      });
      var ngTranscludeDirective = ngDirective({
        restrict: 'EAC',
        link: function($scope, $element, $attrs, controller, $transclude) {
          if (!$transclude) {
            throw minErr('ngTransclude')('orphan', 'Illegal use of ngTransclude directive in the template! ' + 'No parent directive that requires a transclusion found. ' + 'Element: {0}', startingTag($element));
          }
          $transclude(function(clone) {
            $element.empty();
            $element.append(clone);
          });
        }
      });
      var scriptDirective = ['$templateCache', function($templateCache) {
        return {
          restrict: 'E',
          terminal: true,
          compile: function(element, attr) {
            if (attr.type == 'text/ng-template') {
              var templateUrl = attr.id,
                  text = element[0].text;
              $templateCache.put(templateUrl, text);
            }
          }
        };
      }];
      var ngOptionsMinErr = minErr('ngOptions');
      var ngOptionsDirective = valueFn({
        restrict: 'A',
        terminal: true
      });
      var selectDirective = ['$compile', '$parse', function($compile, $parse) {
        var NG_OPTIONS_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
            nullModelCtrl = {$setViewValue: noop};
        return {
          restrict: 'E',
          require: ['select', '?ngModel'],
          controller: ['$element', '$scope', '$attrs', function($element, $scope, $attrs) {
            var self = this,
                optionsMap = {},
                ngModelCtrl = nullModelCtrl,
                nullOption,
                unknownOption;
            self.databound = $attrs.ngModel;
            self.init = function(ngModelCtrl_, nullOption_, unknownOption_) {
              ngModelCtrl = ngModelCtrl_;
              nullOption = nullOption_;
              unknownOption = unknownOption_;
            };
            self.addOption = function(value, element) {
              assertNotHasOwnProperty(value, '"option value"');
              optionsMap[value] = true;
              if (ngModelCtrl.$viewValue == value) {
                $element.val(value);
                if (unknownOption.parent())
                  unknownOption.remove();
              }
              if (element && element[0].hasAttribute('selected')) {
                element[0].selected = true;
              }
            };
            self.removeOption = function(value) {
              if (this.hasOption(value)) {
                delete optionsMap[value];
                if (ngModelCtrl.$viewValue === value) {
                  this.renderUnknownOption(value);
                }
              }
            };
            self.renderUnknownOption = function(val) {
              var unknownVal = '? ' + hashKey(val) + ' ?';
              unknownOption.val(unknownVal);
              $element.prepend(unknownOption);
              $element.val(unknownVal);
              unknownOption.prop('selected', true);
            };
            self.hasOption = function(value) {
              return optionsMap.hasOwnProperty(value);
            };
            $scope.$on('$destroy', function() {
              self.renderUnknownOption = noop;
            });
          }],
          link: function(scope, element, attr, ctrls) {
            if (!ctrls[1])
              return ;
            var selectCtrl = ctrls[0],
                ngModelCtrl = ctrls[1],
                multiple = attr.multiple,
                optionsExp = attr.ngOptions,
                nullOption = false,
                emptyOption,
                renderScheduled = false,
                optionTemplate = jqLite(document.createElement('option')),
                optGroupTemplate = jqLite(document.createElement('optgroup')),
                unknownOption = optionTemplate.clone();
            for (var i = 0,
                children = element.children(),
                ii = children.length; i < ii; i++) {
              if (children[i].value === '') {
                emptyOption = nullOption = children.eq(i);
                break;
              }
            }
            selectCtrl.init(ngModelCtrl, nullOption, unknownOption);
            if (multiple) {
              ngModelCtrl.$isEmpty = function(value) {
                return !value || value.length === 0;
              };
            }
            if (optionsExp)
              setupAsOptions(scope, element, ngModelCtrl);
            else if (multiple)
              setupAsMultiple(scope, element, ngModelCtrl);
            else
              setupAsSingle(scope, element, ngModelCtrl, selectCtrl);
            function setupAsSingle(scope, selectElement, ngModelCtrl, selectCtrl) {
              ngModelCtrl.$render = function() {
                var viewValue = ngModelCtrl.$viewValue;
                if (selectCtrl.hasOption(viewValue)) {
                  if (unknownOption.parent())
                    unknownOption.remove();
                  selectElement.val(viewValue);
                  if (viewValue === '')
                    emptyOption.prop('selected', true);
                } else {
                  if (isUndefined(viewValue) && emptyOption) {
                    selectElement.val('');
                  } else {
                    selectCtrl.renderUnknownOption(viewValue);
                  }
                }
              };
              selectElement.on('change', function() {
                scope.$apply(function() {
                  if (unknownOption.parent())
                    unknownOption.remove();
                  ngModelCtrl.$setViewValue(selectElement.val());
                });
              });
            }
            function setupAsMultiple(scope, selectElement, ctrl) {
              var lastView;
              ctrl.$render = function() {
                var items = new HashMap(ctrl.$viewValue);
                forEach(selectElement.find('option'), function(option) {
                  option.selected = isDefined(items.get(option.value));
                });
              };
              scope.$watch(function selectMultipleWatch() {
                if (!equals(lastView, ctrl.$viewValue)) {
                  lastView = shallowCopy(ctrl.$viewValue);
                  ctrl.$render();
                }
              });
              selectElement.on('change', function() {
                scope.$apply(function() {
                  var array = [];
                  forEach(selectElement.find('option'), function(option) {
                    if (option.selected) {
                      array.push(option.value);
                    }
                  });
                  ctrl.$setViewValue(array);
                });
              });
            }
            function setupAsOptions(scope, selectElement, ctrl) {
              var match;
              if (!(match = optionsExp.match(NG_OPTIONS_REGEXP))) {
                throw ngOptionsMinErr('iexp', "Expected expression in form of " + "'_select_ (as _label_)? for (_key_,)?_value_ in _collection_'" + " but got '{0}'. Element: {1}", optionsExp, startingTag(selectElement));
              }
              var displayFn = $parse(match[2] || match[1]),
                  valueName = match[4] || match[6],
                  selectAs = / as /.test(match[0]) && match[1],
                  selectAsFn = selectAs ? $parse(selectAs) : null,
                  keyName = match[5],
                  groupByFn = $parse(match[3] || ''),
                  valueFn = $parse(match[2] ? match[1] : valueName),
                  valuesFn = $parse(match[7]),
                  track = match[8],
                  trackFn = track ? $parse(match[8]) : null,
                  trackKeysCache = {},
                  optionGroupsCache = [[{
                    element: selectElement,
                    label: ''
                  }]],
                  locals = {};
              if (nullOption) {
                $compile(nullOption)(scope);
                nullOption.removeClass('ng-scope');
                nullOption.remove();
              }
              selectElement.empty();
              selectElement.on('change', selectionChanged);
              ctrl.$render = render;
              scope.$watchCollection(valuesFn, scheduleRendering);
              scope.$watchCollection(getLabels, scheduleRendering);
              if (multiple) {
                scope.$watchCollection(function() {
                  return ctrl.$modelValue;
                }, scheduleRendering);
              }
              function callExpression(exprFn, key, value) {
                locals[valueName] = value;
                if (keyName)
                  locals[keyName] = key;
                return exprFn(scope, locals);
              }
              function selectionChanged() {
                scope.$apply(function() {
                  var collection = valuesFn(scope) || [];
                  var viewValue;
                  if (multiple) {
                    viewValue = [];
                    forEach(selectElement.val(), function(selectedKey) {
                      selectedKey = trackFn ? trackKeysCache[selectedKey] : selectedKey;
                      viewValue.push(getViewValue(selectedKey, collection[selectedKey]));
                    });
                  } else {
                    var selectedKey = trackFn ? trackKeysCache[selectElement.val()] : selectElement.val();
                    viewValue = getViewValue(selectedKey, collection[selectedKey]);
                  }
                  ctrl.$setViewValue(viewValue);
                  render();
                });
              }
              function getViewValue(key, value) {
                if (key === '?') {
                  return undefined;
                } else if (key === '') {
                  return null;
                } else {
                  var viewValueFn = selectAsFn ? selectAsFn : valueFn;
                  return callExpression(viewValueFn, key, value);
                }
              }
              function getLabels() {
                var values = valuesFn(scope);
                var toDisplay;
                if (values && isArray(values)) {
                  toDisplay = new Array(values.length);
                  for (var i = 0,
                      ii = values.length; i < ii; i++) {
                    toDisplay[i] = callExpression(displayFn, i, values[i]);
                  }
                  return toDisplay;
                } else if (values) {
                  toDisplay = {};
                  for (var prop in values) {
                    if (values.hasOwnProperty(prop)) {
                      toDisplay[prop] = callExpression(displayFn, prop, values[prop]);
                    }
                  }
                }
                return toDisplay;
              }
              function createIsSelectedFn(viewValue) {
                var selectedSet;
                if (multiple) {
                  if (trackFn && isArray(viewValue)) {
                    selectedSet = new HashMap([]);
                    for (var trackIndex = 0; trackIndex < viewValue.length; trackIndex++) {
                      selectedSet.put(callExpression(trackFn, null, viewValue[trackIndex]), true);
                    }
                  } else {
                    selectedSet = new HashMap(viewValue);
                  }
                } else if (trackFn) {
                  viewValue = callExpression(trackFn, null, viewValue);
                }
                return function isSelected(key, value) {
                  var compareValueFn;
                  if (trackFn) {
                    compareValueFn = trackFn;
                  } else if (selectAsFn) {
                    compareValueFn = selectAsFn;
                  } else {
                    compareValueFn = valueFn;
                  }
                  if (multiple) {
                    return isDefined(selectedSet.remove(callExpression(compareValueFn, key, value)));
                  } else {
                    return viewValue === callExpression(compareValueFn, key, value);
                  }
                };
              }
              function scheduleRendering() {
                if (!renderScheduled) {
                  scope.$$postDigest(render);
                  renderScheduled = true;
                }
              }
              function updateLabelMap(labelMap, label, added) {
                labelMap[label] = labelMap[label] || 0;
                labelMap[label] += (added ? 1 : -1);
              }
              function render() {
                renderScheduled = false;
                var optionGroups = {'': []},
                    optionGroupNames = [''],
                    optionGroupName,
                    optionGroup,
                    option,
                    existingParent,
                    existingOptions,
                    existingOption,
                    viewValue = ctrl.$viewValue,
                    values = valuesFn(scope) || [],
                    keys = keyName ? sortedKeys(values) : values,
                    key,
                    value,
                    groupLength,
                    length,
                    groupIndex,
                    index,
                    labelMap = {},
                    selected,
                    isSelected = createIsSelectedFn(viewValue),
                    anySelected = false,
                    lastElement,
                    element,
                    label,
                    optionId;
                trackKeysCache = {};
                for (index = 0; length = keys.length, index < length; index++) {
                  key = index;
                  if (keyName) {
                    key = keys[index];
                    if (key.charAt(0) === '$')
                      continue;
                  }
                  value = values[key];
                  optionGroupName = callExpression(groupByFn, key, value) || '';
                  if (!(optionGroup = optionGroups[optionGroupName])) {
                    optionGroup = optionGroups[optionGroupName] = [];
                    optionGroupNames.push(optionGroupName);
                  }
                  selected = isSelected(key, value);
                  anySelected = anySelected || selected;
                  label = callExpression(displayFn, key, value);
                  label = isDefined(label) ? label : '';
                  optionId = trackFn ? trackFn(scope, locals) : (keyName ? keys[index] : index);
                  if (trackFn) {
                    trackKeysCache[optionId] = key;
                  }
                  optionGroup.push({
                    id: optionId,
                    label: label,
                    selected: selected
                  });
                }
                if (!multiple) {
                  if (nullOption || viewValue === null) {
                    optionGroups[''].unshift({
                      id: '',
                      label: '',
                      selected: !anySelected
                    });
                  } else if (!anySelected) {
                    optionGroups[''].unshift({
                      id: '?',
                      label: '',
                      selected: true
                    });
                  }
                }
                for (groupIndex = 0, groupLength = optionGroupNames.length; groupIndex < groupLength; groupIndex++) {
                  optionGroupName = optionGroupNames[groupIndex];
                  optionGroup = optionGroups[optionGroupName];
                  if (optionGroupsCache.length <= groupIndex) {
                    existingParent = {
                      element: optGroupTemplate.clone().attr('label', optionGroupName),
                      label: optionGroup.label
                    };
                    existingOptions = [existingParent];
                    optionGroupsCache.push(existingOptions);
                    selectElement.append(existingParent.element);
                  } else {
                    existingOptions = optionGroupsCache[groupIndex];
                    existingParent = existingOptions[0];
                    if (existingParent.label != optionGroupName) {
                      existingParent.element.attr('label', existingParent.label = optionGroupName);
                    }
                  }
                  lastElement = null;
                  for (index = 0, length = optionGroup.length; index < length; index++) {
                    option = optionGroup[index];
                    if ((existingOption = existingOptions[index + 1])) {
                      lastElement = existingOption.element;
                      if (existingOption.label !== option.label) {
                        updateLabelMap(labelMap, existingOption.label, false);
                        updateLabelMap(labelMap, option.label, true);
                        lastElement.text(existingOption.label = option.label);
                        lastElement.prop('label', existingOption.label);
                      }
                      if (existingOption.id !== option.id) {
                        lastElement.val(existingOption.id = option.id);
                      }
                      if (lastElement[0].selected !== option.selected) {
                        lastElement.prop('selected', (existingOption.selected = option.selected));
                        if (msie) {
                          lastElement.prop('selected', existingOption.selected);
                        }
                      }
                    } else {
                      if (option.id === '' && nullOption) {
                        element = nullOption;
                      } else {
                        (element = optionTemplate.clone()).val(option.id).prop('selected', option.selected).attr('selected', option.selected).prop('label', option.label).text(option.label);
                      }
                      existingOptions.push(existingOption = {
                        element: element,
                        label: option.label,
                        id: option.id,
                        selected: option.selected
                      });
                      updateLabelMap(labelMap, option.label, true);
                      if (lastElement) {
                        lastElement.after(element);
                      } else {
                        existingParent.element.append(element);
                      }
                      lastElement = element;
                    }
                  }
                  index++;
                  while (existingOptions.length > index) {
                    option = existingOptions.pop();
                    updateLabelMap(labelMap, option.label, false);
                    option.element.remove();
                  }
                }
                while (optionGroupsCache.length > groupIndex) {
                  optionGroup = optionGroupsCache.pop();
                  for (index = 1; index < optionGroup.length; ++index) {
                    updateLabelMap(labelMap, optionGroup[index].label, false);
                  }
                  optionGroup[0].element.remove();
                }
                forEach(labelMap, function(count, label) {
                  if (count > 0) {
                    selectCtrl.addOption(label);
                  } else if (count < 0) {
                    selectCtrl.removeOption(label);
                  }
                });
              }
            }
          }
        };
      }];
      var optionDirective = ['$interpolate', function($interpolate) {
        var nullSelectCtrl = {
          addOption: noop,
          removeOption: noop
        };
        return {
          restrict: 'E',
          priority: 100,
          compile: function(element, attr) {
            if (isUndefined(attr.value)) {
              var interpolateFn = $interpolate(element.text(), true);
              if (!interpolateFn) {
                attr.$set('value', element.text());
              }
            }
            return function(scope, element, attr) {
              var selectCtrlName = '$selectController',
                  parent = element.parent(),
                  selectCtrl = parent.data(selectCtrlName) || parent.parent().data(selectCtrlName);
              if (!selectCtrl || !selectCtrl.databound) {
                selectCtrl = nullSelectCtrl;
              }
              if (interpolateFn) {
                scope.$watch(interpolateFn, function interpolateWatchAction(newVal, oldVal) {
                  attr.$set('value', newVal);
                  if (oldVal !== newVal) {
                    selectCtrl.removeOption(oldVal);
                  }
                  selectCtrl.addOption(newVal, element);
                });
              } else {
                selectCtrl.addOption(attr.value, element);
              }
              element.on('$destroy', function() {
                selectCtrl.removeOption(attr.value);
              });
            };
          }
        };
      }];
      var styleDirective = valueFn({
        restrict: 'E',
        terminal: false
      });
      var requiredDirective = function() {
        return {
          restrict: 'A',
          require: '?ngModel',
          link: function(scope, elm, attr, ctrl) {
            if (!ctrl)
              return ;
            attr.required = true;
            ctrl.$validators.required = function(modelValue, viewValue) {
              return !attr.required || !ctrl.$isEmpty(viewValue);
            };
            attr.$observe('required', function() {
              ctrl.$validate();
            });
          }
        };
      };
      var patternDirective = function() {
        return {
          restrict: 'A',
          require: '?ngModel',
          link: function(scope, elm, attr, ctrl) {
            if (!ctrl)
              return ;
            var regexp,
                patternExp = attr.ngPattern || attr.pattern;
            attr.$observe('pattern', function(regex) {
              if (isString(regex) && regex.length > 0) {
                regex = new RegExp('^' + regex + '$');
              }
              if (regex && !regex.test) {
                throw minErr('ngPattern')('noregexp', 'Expected {0} to be a RegExp but was {1}. Element: {2}', patternExp, regex, startingTag(elm));
              }
              regexp = regex || undefined;
              ctrl.$validate();
            });
            ctrl.$validators.pattern = function(value) {
              return ctrl.$isEmpty(value) || isUndefined(regexp) || regexp.test(value);
            };
          }
        };
      };
      var maxlengthDirective = function() {
        return {
          restrict: 'A',
          require: '?ngModel',
          link: function(scope, elm, attr, ctrl) {
            if (!ctrl)
              return ;
            var maxlength = -1;
            attr.$observe('maxlength', function(value) {
              var intVal = int(value);
              maxlength = isNaN(intVal) ? -1 : intVal;
              ctrl.$validate();
            });
            ctrl.$validators.maxlength = function(modelValue, viewValue) {
              return (maxlength < 0) || ctrl.$isEmpty(viewValue) || (viewValue.length <= maxlength);
            };
          }
        };
      };
      var minlengthDirective = function() {
        return {
          restrict: 'A',
          require: '?ngModel',
          link: function(scope, elm, attr, ctrl) {
            if (!ctrl)
              return ;
            var minlength = 0;
            attr.$observe('minlength', function(value) {
              minlength = int(value) || 0;
              ctrl.$validate();
            });
            ctrl.$validators.minlength = function(modelValue, viewValue) {
              return ctrl.$isEmpty(viewValue) || viewValue.length >= minlength;
            };
          }
        };
      };
      if (window.angular.bootstrap) {
        console.log('WARNING: Tried to load angular more than once.');
        return ;
      }
      bindJQuery();
      publishExternalAPI(angular);
      jqLite(document).ready(function() {
        angularInit(document, bootstrap);
      });
    })(window, document);
    !window.angular.$$csp() && window.angular.element(document).find('head').prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
  }).call(System.global);
  return System.get("@@global-helpers").retrieveGlobal(__module.id, "angular");
});



System.register("github:angular/bower-angular-animate@1.3.15/angular-animate", ["angular"], false, function(__require, __exports, __module) {
  System.get("@@global-helpers").prepareGlobal(__module.id, ["angular"]);
  (function() {
    "format global";
    "deps angular";
    (function(window, angular, undefined) {
      'use strict';
      angular.module('ngAnimate', ['ng']).directive('ngAnimateChildren', function() {
        var NG_ANIMATE_CHILDREN = '$$ngAnimateChildren';
        return function(scope, element, attrs) {
          var val = attrs.ngAnimateChildren;
          if (angular.isString(val) && val.length === 0) {
            element.data(NG_ANIMATE_CHILDREN, true);
          } else {
            scope.$watch(val, function(value) {
              element.data(NG_ANIMATE_CHILDREN, !!value);
            });
          }
        };
      }).factory('$$animateReflow', ['$$rAF', '$document', function($$rAF, $document) {
        var bod = $document[0].body;
        return function(fn) {
          return $$rAF(function() {
            var a = bod.offsetWidth + 1;
            fn();
          });
        };
      }]).config(['$provide', '$animateProvider', function($provide, $animateProvider) {
        var noop = angular.noop;
        var forEach = angular.forEach;
        var selectors = $animateProvider.$$selectors;
        var isArray = angular.isArray;
        var isString = angular.isString;
        var isObject = angular.isObject;
        var ELEMENT_NODE = 1;
        var NG_ANIMATE_STATE = '$$ngAnimateState';
        var NG_ANIMATE_CHILDREN = '$$ngAnimateChildren';
        var NG_ANIMATE_CLASS_NAME = 'ng-animate';
        var rootAnimateState = {running: true};
        function extractElementNode(element) {
          for (var i = 0; i < element.length; i++) {
            var elm = element[i];
            if (elm.nodeType == ELEMENT_NODE) {
              return elm;
            }
          }
        }
        function prepareElement(element) {
          return element && angular.element(element);
        }
        function stripCommentsFromElement(element) {
          return angular.element(extractElementNode(element));
        }
        function isMatchingElement(elm1, elm2) {
          return extractElementNode(elm1) == extractElementNode(elm2);
        }
        var $$jqLite;
        $provide.decorator('$animate', ['$delegate', '$$q', '$injector', '$sniffer', '$rootElement', '$$asyncCallback', '$rootScope', '$document', '$templateRequest', '$$jqLite', function($delegate, $$q, $injector, $sniffer, $rootElement, $$asyncCallback, $rootScope, $document, $templateRequest, $$$jqLite) {
          $$jqLite = $$$jqLite;
          $rootElement.data(NG_ANIMATE_STATE, rootAnimateState);
          var deregisterWatch = $rootScope.$watch(function() {
            return $templateRequest.totalPendingRequests;
          }, function(val, oldVal) {
            if (val !== 0)
              return ;
            deregisterWatch();
            $rootScope.$$postDigest(function() {
              $rootScope.$$postDigest(function() {
                rootAnimateState.running = false;
              });
            });
          });
          var globalAnimationCounter = 0;
          var classNameFilter = $animateProvider.classNameFilter();
          var isAnimatableClassName = !classNameFilter ? function() {
            return true;
          } : function(className) {
            return classNameFilter.test(className);
          };
          function classBasedAnimationsBlocked(element, setter) {
            var data = element.data(NG_ANIMATE_STATE) || {};
            if (setter) {
              data.running = true;
              data.structural = true;
              element.data(NG_ANIMATE_STATE, data);
            }
            return data.disabled || (data.running && data.structural);
          }
          function runAnimationPostDigest(fn) {
            var cancelFn,
                defer = $$q.defer();
            defer.promise.$$cancelFn = function() {
              cancelFn && cancelFn();
            };
            $rootScope.$$postDigest(function() {
              cancelFn = fn(function() {
                defer.resolve();
              });
            });
            return defer.promise;
          }
          function parseAnimateOptions(options) {
            if (isObject(options)) {
              if (options.tempClasses && isString(options.tempClasses)) {
                options.tempClasses = options.tempClasses.split(/\s+/);
              }
              return options;
            }
          }
          function resolveElementClasses(element, cache, runningAnimations) {
            runningAnimations = runningAnimations || {};
            var lookup = {};
            forEach(runningAnimations, function(data, selector) {
              forEach(selector.split(' '), function(s) {
                lookup[s] = data;
              });
            });
            var hasClasses = Object.create(null);
            forEach((element.attr('class') || '').split(/\s+/), function(className) {
              hasClasses[className] = true;
            });
            var toAdd = [],
                toRemove = [];
            forEach((cache && cache.classes) || [], function(status, className) {
              var hasClass = hasClasses[className];
              var matchingAnimation = lookup[className] || {};
              if (status === false) {
                if (hasClass || matchingAnimation.event == 'addClass') {
                  toRemove.push(className);
                }
              } else if (status === true) {
                if (!hasClass || matchingAnimation.event == 'removeClass') {
                  toAdd.push(className);
                }
              }
            });
            return (toAdd.length + toRemove.length) > 0 && [toAdd.join(' '), toRemove.join(' ')];
          }
          function lookup(name) {
            if (name) {
              var matches = [],
                  flagMap = {},
                  classes = name.substr(1).split('.');
              if ($sniffer.transitions || $sniffer.animations) {
                matches.push($injector.get(selectors['']));
              }
              for (var i = 0; i < classes.length; i++) {
                var klass = classes[i],
                    selectorFactoryName = selectors[klass];
                if (selectorFactoryName && !flagMap[klass]) {
                  matches.push($injector.get(selectorFactoryName));
                  flagMap[klass] = true;
                }
              }
              return matches;
            }
          }
          function animationRunner(element, animationEvent, className, options) {
            var node = element[0];
            if (!node) {
              return ;
            }
            if (options) {
              options.to = options.to || {};
              options.from = options.from || {};
            }
            var classNameAdd;
            var classNameRemove;
            if (isArray(className)) {
              classNameAdd = className[0];
              classNameRemove = className[1];
              if (!classNameAdd) {
                className = classNameRemove;
                animationEvent = 'removeClass';
              } else if (!classNameRemove) {
                className = classNameAdd;
                animationEvent = 'addClass';
              } else {
                className = classNameAdd + ' ' + classNameRemove;
              }
            }
            var isSetClassOperation = animationEvent == 'setClass';
            var isClassBased = isSetClassOperation || animationEvent == 'addClass' || animationEvent == 'removeClass' || animationEvent == 'animate';
            var currentClassName = element.attr('class');
            var classes = currentClassName + ' ' + className;
            if (!isAnimatableClassName(classes)) {
              return ;
            }
            var beforeComplete = noop,
                beforeCancel = [],
                before = [],
                afterComplete = noop,
                afterCancel = [],
                after = [];
            var animationLookup = (' ' + classes).replace(/\s+/g, '.');
            forEach(lookup(animationLookup), function(animationFactory) {
              var created = registerAnimation(animationFactory, animationEvent);
              if (!created && isSetClassOperation) {
                registerAnimation(animationFactory, 'addClass');
                registerAnimation(animationFactory, 'removeClass');
              }
            });
            function registerAnimation(animationFactory, event) {
              var afterFn = animationFactory[event];
              var beforeFn = animationFactory['before' + event.charAt(0).toUpperCase() + event.substr(1)];
              if (afterFn || beforeFn) {
                if (event == 'leave') {
                  beforeFn = afterFn;
                  afterFn = null;
                }
                after.push({
                  event: event,
                  fn: afterFn
                });
                before.push({
                  event: event,
                  fn: beforeFn
                });
                return true;
              }
            }
            function run(fns, cancellations, allCompleteFn) {
              var animations = [];
              forEach(fns, function(animation) {
                animation.fn && animations.push(animation);
              });
              var count = 0;
              function afterAnimationComplete(index) {
                if (cancellations) {
                  (cancellations[index] || noop)();
                  if (++count < animations.length)
                    return ;
                  cancellations = null;
                }
                allCompleteFn();
              }
              forEach(animations, function(animation, index) {
                var progress = function() {
                  afterAnimationComplete(index);
                };
                switch (animation.event) {
                  case 'setClass':
                    cancellations.push(animation.fn(element, classNameAdd, classNameRemove, progress, options));
                    break;
                  case 'animate':
                    cancellations.push(animation.fn(element, className, options.from, options.to, progress));
                    break;
                  case 'addClass':
                    cancellations.push(animation.fn(element, classNameAdd || className, progress, options));
                    break;
                  case 'removeClass':
                    cancellations.push(animation.fn(element, classNameRemove || className, progress, options));
                    break;
                  default:
                    cancellations.push(animation.fn(element, progress, options));
                    break;
                }
              });
              if (cancellations && cancellations.length === 0) {
                allCompleteFn();
              }
            }
            return {
              node: node,
              event: animationEvent,
              className: className,
              isClassBased: isClassBased,
              isSetClassOperation: isSetClassOperation,
              applyStyles: function() {
                if (options) {
                  element.css(angular.extend(options.from || {}, options.to || {}));
                }
              },
              before: function(allCompleteFn) {
                beforeComplete = allCompleteFn;
                run(before, beforeCancel, function() {
                  beforeComplete = noop;
                  allCompleteFn();
                });
              },
              after: function(allCompleteFn) {
                afterComplete = allCompleteFn;
                run(after, afterCancel, function() {
                  afterComplete = noop;
                  allCompleteFn();
                });
              },
              cancel: function() {
                if (beforeCancel) {
                  forEach(beforeCancel, function(cancelFn) {
                    (cancelFn || noop)(true);
                  });
                  beforeComplete(true);
                }
                if (afterCancel) {
                  forEach(afterCancel, function(cancelFn) {
                    (cancelFn || noop)(true);
                  });
                  afterComplete(true);
                }
              }
            };
          }
          return {
            animate: function(element, from, to, className, options) {
              className = className || 'ng-inline-animate';
              options = parseAnimateOptions(options) || {};
              options.from = to ? from : null;
              options.to = to ? to : from;
              return runAnimationPostDigest(function(done) {
                return performAnimation('animate', className, stripCommentsFromElement(element), null, null, noop, options, done);
              });
            },
            enter: function(element, parentElement, afterElement, options) {
              options = parseAnimateOptions(options);
              element = angular.element(element);
              parentElement = prepareElement(parentElement);
              afterElement = prepareElement(afterElement);
              classBasedAnimationsBlocked(element, true);
              $delegate.enter(element, parentElement, afterElement);
              return runAnimationPostDigest(function(done) {
                return performAnimation('enter', 'ng-enter', stripCommentsFromElement(element), parentElement, afterElement, noop, options, done);
              });
            },
            leave: function(element, options) {
              options = parseAnimateOptions(options);
              element = angular.element(element);
              cancelChildAnimations(element);
              classBasedAnimationsBlocked(element, true);
              return runAnimationPostDigest(function(done) {
                return performAnimation('leave', 'ng-leave', stripCommentsFromElement(element), null, null, function() {
                  $delegate.leave(element);
                }, options, done);
              });
            },
            move: function(element, parentElement, afterElement, options) {
              options = parseAnimateOptions(options);
              element = angular.element(element);
              parentElement = prepareElement(parentElement);
              afterElement = prepareElement(afterElement);
              cancelChildAnimations(element);
              classBasedAnimationsBlocked(element, true);
              $delegate.move(element, parentElement, afterElement);
              return runAnimationPostDigest(function(done) {
                return performAnimation('move', 'ng-move', stripCommentsFromElement(element), parentElement, afterElement, noop, options, done);
              });
            },
            addClass: function(element, className, options) {
              return this.setClass(element, className, [], options);
            },
            removeClass: function(element, className, options) {
              return this.setClass(element, [], className, options);
            },
            setClass: function(element, add, remove, options) {
              options = parseAnimateOptions(options);
              var STORAGE_KEY = '$$animateClasses';
              element = angular.element(element);
              element = stripCommentsFromElement(element);
              if (classBasedAnimationsBlocked(element)) {
                return $delegate.$$setClassImmediately(element, add, remove, options);
              }
              var classes,
                  cache = element.data(STORAGE_KEY);
              var hasCache = !!cache;
              if (!cache) {
                cache = {};
                cache.classes = {};
              }
              classes = cache.classes;
              add = isArray(add) ? add : add.split(' ');
              forEach(add, function(c) {
                if (c && c.length) {
                  classes[c] = true;
                }
              });
              remove = isArray(remove) ? remove : remove.split(' ');
              forEach(remove, function(c) {
                if (c && c.length) {
                  classes[c] = false;
                }
              });
              if (hasCache) {
                if (options && cache.options) {
                  cache.options = angular.extend(cache.options || {}, options);
                }
                return cache.promise;
              } else {
                element.data(STORAGE_KEY, cache = {
                  classes: classes,
                  options: options
                });
              }
              return cache.promise = runAnimationPostDigest(function(done) {
                var parentElement = element.parent();
                var elementNode = extractElementNode(element);
                var parentNode = elementNode.parentNode;
                if (!parentNode || parentNode['$$NG_REMOVED'] || elementNode['$$NG_REMOVED']) {
                  done();
                  return ;
                }
                var cache = element.data(STORAGE_KEY);
                element.removeData(STORAGE_KEY);
                var state = element.data(NG_ANIMATE_STATE) || {};
                var classes = resolveElementClasses(element, cache, state.active);
                return !classes ? done() : performAnimation('setClass', classes, element, parentElement, null, function() {
                  if (classes[0])
                    $delegate.$$addClassImmediately(element, classes[0]);
                  if (classes[1])
                    $delegate.$$removeClassImmediately(element, classes[1]);
                }, cache.options, done);
              });
            },
            cancel: function(promise) {
              promise.$$cancelFn();
            },
            enabled: function(value, element) {
              switch (arguments.length) {
                case 2:
                  if (value) {
                    cleanup(element);
                  } else {
                    var data = element.data(NG_ANIMATE_STATE) || {};
                    data.disabled = true;
                    element.data(NG_ANIMATE_STATE, data);
                  }
                  break;
                case 1:
                  rootAnimateState.disabled = !value;
                  break;
                default:
                  value = !rootAnimateState.disabled;
                  break;
              }
              return !!value;
            }
          };
          function performAnimation(animationEvent, className, element, parentElement, afterElement, domOperation, options, doneCallback) {
            var noopCancel = noop;
            var runner = animationRunner(element, animationEvent, className, options);
            if (!runner) {
              fireDOMOperation();
              fireBeforeCallbackAsync();
              fireAfterCallbackAsync();
              closeAnimation();
              return noopCancel;
            }
            animationEvent = runner.event;
            className = runner.className;
            var elementEvents = angular.element._data(runner.node);
            elementEvents = elementEvents && elementEvents.events;
            if (!parentElement) {
              parentElement = afterElement ? afterElement.parent() : element.parent();
            }
            if (animationsDisabled(element, parentElement)) {
              fireDOMOperation();
              fireBeforeCallbackAsync();
              fireAfterCallbackAsync();
              closeAnimation();
              return noopCancel;
            }
            var ngAnimateState = element.data(NG_ANIMATE_STATE) || {};
            var runningAnimations = ngAnimateState.active || {};
            var totalActiveAnimations = ngAnimateState.totalActive || 0;
            var lastAnimation = ngAnimateState.last;
            var skipAnimation = false;
            if (totalActiveAnimations > 0) {
              var animationsToCancel = [];
              if (!runner.isClassBased) {
                if (animationEvent == 'leave' && runningAnimations['ng-leave']) {
                  skipAnimation = true;
                } else {
                  for (var klass in runningAnimations) {
                    animationsToCancel.push(runningAnimations[klass]);
                  }
                  ngAnimateState = {};
                  cleanup(element, true);
                }
              } else if (lastAnimation.event == 'setClass') {
                animationsToCancel.push(lastAnimation);
                cleanup(element, className);
              } else if (runningAnimations[className]) {
                var current = runningAnimations[className];
                if (current.event == animationEvent) {
                  skipAnimation = true;
                } else {
                  animationsToCancel.push(current);
                  cleanup(element, className);
                }
              }
              if (animationsToCancel.length > 0) {
                forEach(animationsToCancel, function(operation) {
                  operation.cancel();
                });
              }
            }
            if (runner.isClassBased && !runner.isSetClassOperation && animationEvent != 'animate' && !skipAnimation) {
              skipAnimation = (animationEvent == 'addClass') == element.hasClass(className);
            }
            if (skipAnimation) {
              fireDOMOperation();
              fireBeforeCallbackAsync();
              fireAfterCallbackAsync();
              fireDoneCallbackAsync();
              return noopCancel;
            }
            runningAnimations = ngAnimateState.active || {};
            totalActiveAnimations = ngAnimateState.totalActive || 0;
            if (animationEvent == 'leave') {
              element.one('$destroy', function(e) {
                var element = angular.element(this);
                var state = element.data(NG_ANIMATE_STATE);
                if (state) {
                  var activeLeaveAnimation = state.active['ng-leave'];
                  if (activeLeaveAnimation) {
                    activeLeaveAnimation.cancel();
                    cleanup(element, 'ng-leave');
                  }
                }
              });
            }
            $$jqLite.addClass(element, NG_ANIMATE_CLASS_NAME);
            if (options && options.tempClasses) {
              forEach(options.tempClasses, function(className) {
                $$jqLite.addClass(element, className);
              });
            }
            var localAnimationCount = globalAnimationCounter++;
            totalActiveAnimations++;
            runningAnimations[className] = runner;
            element.data(NG_ANIMATE_STATE, {
              last: runner,
              active: runningAnimations,
              index: localAnimationCount,
              totalActive: totalActiveAnimations
            });
            fireBeforeCallbackAsync();
            runner.before(function(cancelled) {
              var data = element.data(NG_ANIMATE_STATE);
              cancelled = cancelled || !data || !data.active[className] || (runner.isClassBased && data.active[className].event != animationEvent);
              fireDOMOperation();
              if (cancelled === true) {
                closeAnimation();
              } else {
                fireAfterCallbackAsync();
                runner.after(closeAnimation);
              }
            });
            return runner.cancel;
            function fireDOMCallback(animationPhase) {
              var eventName = '$animate:' + animationPhase;
              if (elementEvents && elementEvents[eventName] && elementEvents[eventName].length > 0) {
                $$asyncCallback(function() {
                  element.triggerHandler(eventName, {
                    event: animationEvent,
                    className: className
                  });
                });
              }
            }
            function fireBeforeCallbackAsync() {
              fireDOMCallback('before');
            }
            function fireAfterCallbackAsync() {
              fireDOMCallback('after');
            }
            function fireDoneCallbackAsync() {
              fireDOMCallback('close');
              doneCallback();
            }
            function fireDOMOperation() {
              if (!fireDOMOperation.hasBeenRun) {
                fireDOMOperation.hasBeenRun = true;
                domOperation();
              }
            }
            function closeAnimation() {
              if (!closeAnimation.hasBeenRun) {
                if (runner) {
                  runner.applyStyles();
                }
                closeAnimation.hasBeenRun = true;
                if (options && options.tempClasses) {
                  forEach(options.tempClasses, function(className) {
                    $$jqLite.removeClass(element, className);
                  });
                }
                var data = element.data(NG_ANIMATE_STATE);
                if (data) {
                  if (runner && runner.isClassBased) {
                    cleanup(element, className);
                  } else {
                    $$asyncCallback(function() {
                      var data = element.data(NG_ANIMATE_STATE) || {};
                      if (localAnimationCount == data.index) {
                        cleanup(element, className, animationEvent);
                      }
                    });
                    element.data(NG_ANIMATE_STATE, data);
                  }
                }
                fireDoneCallbackAsync();
              }
            }
          }
          function cancelChildAnimations(element) {
            var node = extractElementNode(element);
            if (node) {
              var nodes = angular.isFunction(node.getElementsByClassName) ? node.getElementsByClassName(NG_ANIMATE_CLASS_NAME) : node.querySelectorAll('.' + NG_ANIMATE_CLASS_NAME);
              forEach(nodes, function(element) {
                element = angular.element(element);
                var data = element.data(NG_ANIMATE_STATE);
                if (data && data.active) {
                  forEach(data.active, function(runner) {
                    runner.cancel();
                  });
                }
              });
            }
          }
          function cleanup(element, className) {
            if (isMatchingElement(element, $rootElement)) {
              if (!rootAnimateState.disabled) {
                rootAnimateState.running = false;
                rootAnimateState.structural = false;
              }
            } else if (className) {
              var data = element.data(NG_ANIMATE_STATE) || {};
              var removeAnimations = className === true;
              if (!removeAnimations && data.active && data.active[className]) {
                data.totalActive--;
                delete data.active[className];
              }
              if (removeAnimations || !data.totalActive) {
                $$jqLite.removeClass(element, NG_ANIMATE_CLASS_NAME);
                element.removeData(NG_ANIMATE_STATE);
              }
            }
          }
          function animationsDisabled(element, parentElement) {
            if (rootAnimateState.disabled) {
              return true;
            }
            if (isMatchingElement(element, $rootElement)) {
              return rootAnimateState.running;
            }
            var allowChildAnimations,
                parentRunningAnimation,
                hasParent;
            do {
              if (parentElement.length === 0)
                break;
              var isRoot = isMatchingElement(parentElement, $rootElement);
              var state = isRoot ? rootAnimateState : (parentElement.data(NG_ANIMATE_STATE) || {});
              if (state.disabled) {
                return true;
              }
              if (isRoot) {
                hasParent = true;
              }
              if (allowChildAnimations !== false) {
                var animateChildrenFlag = parentElement.data(NG_ANIMATE_CHILDREN);
                if (angular.isDefined(animateChildrenFlag)) {
                  allowChildAnimations = animateChildrenFlag;
                }
              }
              parentRunningAnimation = parentRunningAnimation || state.running || (state.last && !state.last.isClassBased);
            } while (parentElement = parentElement.parent());
            return !hasParent || (!allowChildAnimations && parentRunningAnimation);
          }
        }]);
        $animateProvider.register('', ['$window', '$sniffer', '$timeout', '$$animateReflow', function($window, $sniffer, $timeout, $$animateReflow) {
          var CSS_PREFIX = '',
              TRANSITION_PROP,
              TRANSITIONEND_EVENT,
              ANIMATION_PROP,
              ANIMATIONEND_EVENT;
          if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
            CSS_PREFIX = '-webkit-';
            TRANSITION_PROP = 'WebkitTransition';
            TRANSITIONEND_EVENT = 'webkitTransitionEnd transitionend';
          } else {
            TRANSITION_PROP = 'transition';
            TRANSITIONEND_EVENT = 'transitionend';
          }
          if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
            CSS_PREFIX = '-webkit-';
            ANIMATION_PROP = 'WebkitAnimation';
            ANIMATIONEND_EVENT = 'webkitAnimationEnd animationend';
          } else {
            ANIMATION_PROP = 'animation';
            ANIMATIONEND_EVENT = 'animationend';
          }
          var DURATION_KEY = 'Duration';
          var PROPERTY_KEY = 'Property';
          var DELAY_KEY = 'Delay';
          var ANIMATION_ITERATION_COUNT_KEY = 'IterationCount';
          var ANIMATION_PLAYSTATE_KEY = 'PlayState';
          var NG_ANIMATE_PARENT_KEY = '$$ngAnimateKey';
          var NG_ANIMATE_CSS_DATA_KEY = '$$ngAnimateCSS3Data';
          var ELAPSED_TIME_MAX_DECIMAL_PLACES = 3;
          var CLOSING_TIME_BUFFER = 1.5;
          var ONE_SECOND = 1000;
          var lookupCache = {};
          var parentCounter = 0;
          var animationReflowQueue = [];
          var cancelAnimationReflow;
          function clearCacheAfterReflow() {
            if (!cancelAnimationReflow) {
              cancelAnimationReflow = $$animateReflow(function() {
                animationReflowQueue = [];
                cancelAnimationReflow = null;
                lookupCache = {};
              });
            }
          }
          function afterReflow(element, callback) {
            if (cancelAnimationReflow) {
              cancelAnimationReflow();
            }
            animationReflowQueue.push(callback);
            cancelAnimationReflow = $$animateReflow(function() {
              forEach(animationReflowQueue, function(fn) {
                fn();
              });
              animationReflowQueue = [];
              cancelAnimationReflow = null;
              lookupCache = {};
            });
          }
          var closingTimer = null;
          var closingTimestamp = 0;
          var animationElementQueue = [];
          function animationCloseHandler(element, totalTime) {
            var node = extractElementNode(element);
            element = angular.element(node);
            animationElementQueue.push(element);
            var futureTimestamp = Date.now() + totalTime;
            if (futureTimestamp <= closingTimestamp) {
              return ;
            }
            $timeout.cancel(closingTimer);
            closingTimestamp = futureTimestamp;
            closingTimer = $timeout(function() {
              closeAllAnimations(animationElementQueue);
              animationElementQueue = [];
            }, totalTime, false);
          }
          function closeAllAnimations(elements) {
            forEach(elements, function(element) {
              var elementData = element.data(NG_ANIMATE_CSS_DATA_KEY);
              if (elementData) {
                forEach(elementData.closeAnimationFns, function(fn) {
                  fn();
                });
              }
            });
          }
          function getElementAnimationDetails(element, cacheKey) {
            var data = cacheKey ? lookupCache[cacheKey] : null;
            if (!data) {
              var transitionDuration = 0;
              var transitionDelay = 0;
              var animationDuration = 0;
              var animationDelay = 0;
              forEach(element, function(element) {
                if (element.nodeType == ELEMENT_NODE) {
                  var elementStyles = $window.getComputedStyle(element) || {};
                  var transitionDurationStyle = elementStyles[TRANSITION_PROP + DURATION_KEY];
                  transitionDuration = Math.max(parseMaxTime(transitionDurationStyle), transitionDuration);
                  var transitionDelayStyle = elementStyles[TRANSITION_PROP + DELAY_KEY];
                  transitionDelay = Math.max(parseMaxTime(transitionDelayStyle), transitionDelay);
                  var animationDelayStyle = elementStyles[ANIMATION_PROP + DELAY_KEY];
                  animationDelay = Math.max(parseMaxTime(elementStyles[ANIMATION_PROP + DELAY_KEY]), animationDelay);
                  var aDuration = parseMaxTime(elementStyles[ANIMATION_PROP + DURATION_KEY]);
                  if (aDuration > 0) {
                    aDuration *= parseInt(elementStyles[ANIMATION_PROP + ANIMATION_ITERATION_COUNT_KEY], 10) || 1;
                  }
                  animationDuration = Math.max(aDuration, animationDuration);
                }
              });
              data = {
                total: 0,
                transitionDelay: transitionDelay,
                transitionDuration: transitionDuration,
                animationDelay: animationDelay,
                animationDuration: animationDuration
              };
              if (cacheKey) {
                lookupCache[cacheKey] = data;
              }
            }
            return data;
          }
          function parseMaxTime(str) {
            var maxValue = 0;
            var values = isString(str) ? str.split(/\s*,\s*/) : [];
            forEach(values, function(value) {
              maxValue = Math.max(parseFloat(value) || 0, maxValue);
            });
            return maxValue;
          }
          function getCacheKey(element) {
            var parentElement = element.parent();
            var parentID = parentElement.data(NG_ANIMATE_PARENT_KEY);
            if (!parentID) {
              parentElement.data(NG_ANIMATE_PARENT_KEY, ++parentCounter);
              parentID = parentCounter;
            }
            return parentID + '-' + extractElementNode(element).getAttribute('class');
          }
          function animateSetup(animationEvent, element, className, styles) {
            var structural = ['ng-enter', 'ng-leave', 'ng-move'].indexOf(className) >= 0;
            var cacheKey = getCacheKey(element);
            var eventCacheKey = cacheKey + ' ' + className;
            var itemIndex = lookupCache[eventCacheKey] ? ++lookupCache[eventCacheKey].total : 0;
            var stagger = {};
            if (itemIndex > 0) {
              var staggerClassName = className + '-stagger';
              var staggerCacheKey = cacheKey + ' ' + staggerClassName;
              var applyClasses = !lookupCache[staggerCacheKey];
              applyClasses && $$jqLite.addClass(element, staggerClassName);
              stagger = getElementAnimationDetails(element, staggerCacheKey);
              applyClasses && $$jqLite.removeClass(element, staggerClassName);
            }
            $$jqLite.addClass(element, className);
            var formerData = element.data(NG_ANIMATE_CSS_DATA_KEY) || {};
            var timings = getElementAnimationDetails(element, eventCacheKey);
            var transitionDuration = timings.transitionDuration;
            var animationDuration = timings.animationDuration;
            if (structural && transitionDuration === 0 && animationDuration === 0) {
              $$jqLite.removeClass(element, className);
              return false;
            }
            var blockTransition = styles || (structural && transitionDuration > 0);
            var blockAnimation = animationDuration > 0 && stagger.animationDelay > 0 && stagger.animationDuration === 0;
            var closeAnimationFns = formerData.closeAnimationFns || [];
            element.data(NG_ANIMATE_CSS_DATA_KEY, {
              stagger: stagger,
              cacheKey: eventCacheKey,
              running: formerData.running || 0,
              itemIndex: itemIndex,
              blockTransition: blockTransition,
              closeAnimationFns: closeAnimationFns
            });
            var node = extractElementNode(element);
            if (blockTransition) {
              blockTransitions(node, true);
              if (styles) {
                element.css(styles);
              }
            }
            if (blockAnimation) {
              blockAnimations(node, true);
            }
            return true;
          }
          function animateRun(animationEvent, element, className, activeAnimationComplete, styles) {
            var node = extractElementNode(element);
            var elementData = element.data(NG_ANIMATE_CSS_DATA_KEY);
            if (node.getAttribute('class').indexOf(className) == -1 || !elementData) {
              activeAnimationComplete();
              return ;
            }
            var activeClassName = '';
            var pendingClassName = '';
            forEach(className.split(' '), function(klass, i) {
              var prefix = (i > 0 ? ' ' : '') + klass;
              activeClassName += prefix + '-active';
              pendingClassName += prefix + '-pending';
            });
            var style = '';
            var appliedStyles = [];
            var itemIndex = elementData.itemIndex;
            var stagger = elementData.stagger;
            var staggerTime = 0;
            if (itemIndex > 0) {
              var transitionStaggerDelay = 0;
              if (stagger.transitionDelay > 0 && stagger.transitionDuration === 0) {
                transitionStaggerDelay = stagger.transitionDelay * itemIndex;
              }
              var animationStaggerDelay = 0;
              if (stagger.animationDelay > 0 && stagger.animationDuration === 0) {
                animationStaggerDelay = stagger.animationDelay * itemIndex;
                appliedStyles.push(CSS_PREFIX + 'animation-play-state');
              }
              staggerTime = Math.round(Math.max(transitionStaggerDelay, animationStaggerDelay) * 100) / 100;
            }
            if (!staggerTime) {
              $$jqLite.addClass(element, activeClassName);
              if (elementData.blockTransition) {
                blockTransitions(node, false);
              }
            }
            var eventCacheKey = elementData.cacheKey + ' ' + activeClassName;
            var timings = getElementAnimationDetails(element, eventCacheKey);
            var maxDuration = Math.max(timings.transitionDuration, timings.animationDuration);
            if (maxDuration === 0) {
              $$jqLite.removeClass(element, activeClassName);
              animateClose(element, className);
              activeAnimationComplete();
              return ;
            }
            if (!staggerTime && styles && Object.keys(styles).length > 0) {
              if (!timings.transitionDuration) {
                element.css('transition', timings.animationDuration + 's linear all');
                appliedStyles.push('transition');
              }
              element.css(styles);
            }
            var maxDelay = Math.max(timings.transitionDelay, timings.animationDelay);
            var maxDelayTime = maxDelay * ONE_SECOND;
            if (appliedStyles.length > 0) {
              var oldStyle = node.getAttribute('style') || '';
              if (oldStyle.charAt(oldStyle.length - 1) !== ';') {
                oldStyle += ';';
              }
              node.setAttribute('style', oldStyle + ' ' + style);
            }
            var startTime = Date.now();
            var css3AnimationEvents = ANIMATIONEND_EVENT + ' ' + TRANSITIONEND_EVENT;
            var animationTime = (maxDelay + maxDuration) * CLOSING_TIME_BUFFER;
            var totalTime = (staggerTime + animationTime) * ONE_SECOND;
            var staggerTimeout;
            if (staggerTime > 0) {
              $$jqLite.addClass(element, pendingClassName);
              staggerTimeout = $timeout(function() {
                staggerTimeout = null;
                if (timings.transitionDuration > 0) {
                  blockTransitions(node, false);
                }
                if (timings.animationDuration > 0) {
                  blockAnimations(node, false);
                }
                $$jqLite.addClass(element, activeClassName);
                $$jqLite.removeClass(element, pendingClassName);
                if (styles) {
                  if (timings.transitionDuration === 0) {
                    element.css('transition', timings.animationDuration + 's linear all');
                  }
                  element.css(styles);
                  appliedStyles.push('transition');
                }
              }, staggerTime * ONE_SECOND, false);
            }
            element.on(css3AnimationEvents, onAnimationProgress);
            elementData.closeAnimationFns.push(function() {
              onEnd();
              activeAnimationComplete();
            });
            elementData.running++;
            animationCloseHandler(element, totalTime);
            return onEnd;
            function onEnd() {
              element.off(css3AnimationEvents, onAnimationProgress);
              $$jqLite.removeClass(element, activeClassName);
              $$jqLite.removeClass(element, pendingClassName);
              if (staggerTimeout) {
                $timeout.cancel(staggerTimeout);
              }
              animateClose(element, className);
              var node = extractElementNode(element);
              for (var i in appliedStyles) {
                node.style.removeProperty(appliedStyles[i]);
              }
            }
            function onAnimationProgress(event) {
              event.stopPropagation();
              var ev = event.originalEvent || event;
              var timeStamp = ev.$manualTimeStamp || ev.timeStamp || Date.now();
              var elapsedTime = parseFloat(ev.elapsedTime.toFixed(ELAPSED_TIME_MAX_DECIMAL_PLACES));
              if (Math.max(timeStamp - startTime, 0) >= maxDelayTime && elapsedTime >= maxDuration) {
                activeAnimationComplete();
              }
            }
          }
          function blockTransitions(node, bool) {
            node.style[TRANSITION_PROP + PROPERTY_KEY] = bool ? 'none' : '';
          }
          function blockAnimations(node, bool) {
            node.style[ANIMATION_PROP + ANIMATION_PLAYSTATE_KEY] = bool ? 'paused' : '';
          }
          function animateBefore(animationEvent, element, className, styles) {
            if (animateSetup(animationEvent, element, className, styles)) {
              return function(cancelled) {
                cancelled && animateClose(element, className);
              };
            }
          }
          function animateAfter(animationEvent, element, className, afterAnimationComplete, styles) {
            if (element.data(NG_ANIMATE_CSS_DATA_KEY)) {
              return animateRun(animationEvent, element, className, afterAnimationComplete, styles);
            } else {
              animateClose(element, className);
              afterAnimationComplete();
            }
          }
          function animate(animationEvent, element, className, animationComplete, options) {
            var preReflowCancellation = animateBefore(animationEvent, element, className, options.from);
            if (!preReflowCancellation) {
              clearCacheAfterReflow();
              animationComplete();
              return ;
            }
            var cancel = preReflowCancellation;
            afterReflow(element, function() {
              cancel = animateAfter(animationEvent, element, className, animationComplete, options.to);
            });
            return function(cancelled) {
              (cancel || noop)(cancelled);
            };
          }
          function animateClose(element, className) {
            $$jqLite.removeClass(element, className);
            var data = element.data(NG_ANIMATE_CSS_DATA_KEY);
            if (data) {
              if (data.running) {
                data.running--;
              }
              if (!data.running || data.running === 0) {
                element.removeData(NG_ANIMATE_CSS_DATA_KEY);
              }
            }
          }
          return {
            animate: function(element, className, from, to, animationCompleted, options) {
              options = options || {};
              options.from = from;
              options.to = to;
              return animate('animate', element, className, animationCompleted, options);
            },
            enter: function(element, animationCompleted, options) {
              options = options || {};
              return animate('enter', element, 'ng-enter', animationCompleted, options);
            },
            leave: function(element, animationCompleted, options) {
              options = options || {};
              return animate('leave', element, 'ng-leave', animationCompleted, options);
            },
            move: function(element, animationCompleted, options) {
              options = options || {};
              return animate('move', element, 'ng-move', animationCompleted, options);
            },
            beforeSetClass: function(element, add, remove, animationCompleted, options) {
              options = options || {};
              var className = suffixClasses(remove, '-remove') + ' ' + suffixClasses(add, '-add');
              var cancellationMethod = animateBefore('setClass', element, className, options.from);
              if (cancellationMethod) {
                afterReflow(element, animationCompleted);
                return cancellationMethod;
              }
              clearCacheAfterReflow();
              animationCompleted();
            },
            beforeAddClass: function(element, className, animationCompleted, options) {
              options = options || {};
              var cancellationMethod = animateBefore('addClass', element, suffixClasses(className, '-add'), options.from);
              if (cancellationMethod) {
                afterReflow(element, animationCompleted);
                return cancellationMethod;
              }
              clearCacheAfterReflow();
              animationCompleted();
            },
            beforeRemoveClass: function(element, className, animationCompleted, options) {
              options = options || {};
              var cancellationMethod = animateBefore('removeClass', element, suffixClasses(className, '-remove'), options.from);
              if (cancellationMethod) {
                afterReflow(element, animationCompleted);
                return cancellationMethod;
              }
              clearCacheAfterReflow();
              animationCompleted();
            },
            setClass: function(element, add, remove, animationCompleted, options) {
              options = options || {};
              remove = suffixClasses(remove, '-remove');
              add = suffixClasses(add, '-add');
              var className = remove + ' ' + add;
              return animateAfter('setClass', element, className, animationCompleted, options.to);
            },
            addClass: function(element, className, animationCompleted, options) {
              options = options || {};
              return animateAfter('addClass', element, suffixClasses(className, '-add'), animationCompleted, options.to);
            },
            removeClass: function(element, className, animationCompleted, options) {
              options = options || {};
              return animateAfter('removeClass', element, suffixClasses(className, '-remove'), animationCompleted, options.to);
            }
          };
          function suffixClasses(classes, suffix) {
            var className = '';
            classes = isArray(classes) ? classes : classes.split(/\s+/);
            forEach(classes, function(klass, i) {
              if (klass && klass.length > 0) {
                className += (i > 0 ? ' ' : '') + klass + suffix;
              }
            });
            return className;
          }
        }]);
      }]);
    })(window, window.angular);
  }).call(System.global);
  return System.get("@@global-helpers").retrieveGlobal(__module.id, false);
});



System.register("github:angular/bower-angular-aria@1.3.15/angular-aria", ["angular"], false, function(__require, __exports, __module) {
  System.get("@@global-helpers").prepareGlobal(__module.id, ["angular"]);
  (function() {
    "format global";
    "deps angular";
    (function(window, angular, undefined) {
      'use strict';
      var ngAriaModule = angular.module('ngAria', ['ng']).provider('$aria', $AriaProvider);
      function $AriaProvider() {
        var config = {
          ariaHidden: true,
          ariaChecked: true,
          ariaDisabled: true,
          ariaRequired: true,
          ariaInvalid: true,
          ariaMultiline: true,
          ariaValue: true,
          tabindex: true,
          bindKeypress: true
        };
        this.config = function(newConfig) {
          config = angular.extend(config, newConfig);
        };
        function watchExpr(attrName, ariaAttr, negate) {
          return function(scope, elem, attr) {
            var ariaCamelName = attr.$normalize(ariaAttr);
            if (config[ariaCamelName] && !attr[ariaCamelName]) {
              scope.$watch(attr[attrName], function(boolVal) {
                if (negate) {
                  boolVal = !boolVal;
                }
                elem.attr(ariaAttr, boolVal);
              });
            }
          };
        }
        this.$get = function() {
          return {
            config: function(key) {
              return config[key];
            },
            $$watchExpr: watchExpr
          };
        };
      }
      ngAriaModule.directive('ngShow', ['$aria', function($aria) {
        return $aria.$$watchExpr('ngShow', 'aria-hidden', true);
      }]).directive('ngHide', ['$aria', function($aria) {
        return $aria.$$watchExpr('ngHide', 'aria-hidden', false);
      }]).directive('ngModel', ['$aria', function($aria) {
        function shouldAttachAttr(attr, normalizedAttr, elem) {
          return $aria.config(normalizedAttr) && !elem.attr(attr);
        }
        function shouldAttachRole(role, elem) {
          return !elem.attr('role') && (elem.attr('type') === role) && (elem[0].nodeName !== 'INPUT');
        }
        function getShape(attr, elem) {
          var type = attr.type,
              role = attr.role;
          return ((type || role) === 'checkbox' || role === 'menuitemcheckbox') ? 'checkbox' : ((type || role) === 'radio' || role === 'menuitemradio') ? 'radio' : (type === 'range' || role === 'progressbar' || role === 'slider') ? 'range' : (type || role) === 'textbox' || elem[0].nodeName === 'TEXTAREA' ? 'multiline' : '';
        }
        return {
          restrict: 'A',
          require: '?ngModel',
          priority: 200,
          link: function(scope, elem, attr, ngModel) {
            var shape = getShape(attr, elem);
            var needsTabIndex = shouldAttachAttr('tabindex', 'tabindex', elem);
            function ngAriaWatchModelValue() {
              return ngModel.$modelValue;
            }
            function getRadioReaction() {
              if (needsTabIndex) {
                needsTabIndex = false;
                return function ngAriaRadioReaction(newVal) {
                  var boolVal = (attr.value == ngModel.$viewValue);
                  elem.attr('aria-checked', boolVal);
                  elem.attr('tabindex', 0 - !boolVal);
                };
              } else {
                return function ngAriaRadioReaction(newVal) {
                  elem.attr('aria-checked', (attr.value == ngModel.$viewValue));
                };
              }
            }
            function ngAriaCheckboxReaction(newVal) {
              elem.attr('aria-checked', !ngModel.$isEmpty(ngModel.$viewValue));
            }
            switch (shape) {
              case 'radio':
              case 'checkbox':
                if (shouldAttachRole(shape, elem)) {
                  elem.attr('role', shape);
                }
                if (shouldAttachAttr('aria-checked', 'ariaChecked', elem)) {
                  scope.$watch(ngAriaWatchModelValue, shape === 'radio' ? getRadioReaction() : ngAriaCheckboxReaction);
                }
                break;
              case 'range':
                if (shouldAttachRole(shape, elem)) {
                  elem.attr('role', 'slider');
                }
                if ($aria.config('ariaValue')) {
                  if (attr.min && !elem.attr('aria-valuemin')) {
                    elem.attr('aria-valuemin', attr.min);
                  }
                  if (attr.max && !elem.attr('aria-valuemax')) {
                    elem.attr('aria-valuemax', attr.max);
                  }
                  if (!elem.attr('aria-valuenow')) {
                    scope.$watch(ngAriaWatchModelValue, function ngAriaValueNowReaction(newVal) {
                      elem.attr('aria-valuenow', newVal);
                    });
                  }
                }
                break;
              case 'multiline':
                if (shouldAttachAttr('aria-multiline', 'ariaMultiline', elem)) {
                  elem.attr('aria-multiline', true);
                }
                break;
            }
            if (needsTabIndex) {
              elem.attr('tabindex', 0);
            }
            if (ngModel.$validators.required && shouldAttachAttr('aria-required', 'ariaRequired', elem)) {
              scope.$watch(function ngAriaRequiredWatch() {
                return ngModel.$error.required;
              }, function ngAriaRequiredReaction(newVal) {
                elem.attr('aria-required', !!newVal);
              });
            }
            if (shouldAttachAttr('aria-invalid', 'ariaInvalid', elem)) {
              scope.$watch(function ngAriaInvalidWatch() {
                return ngModel.$invalid;
              }, function ngAriaInvalidReaction(newVal) {
                elem.attr('aria-invalid', !!newVal);
              });
            }
          }
        };
      }]).directive('ngDisabled', ['$aria', function($aria) {
        return $aria.$$watchExpr('ngDisabled', 'aria-disabled');
      }]).directive('ngMessages', function() {
        return {
          restrict: 'A',
          require: '?ngMessages',
          link: function(scope, elem, attr, ngMessages) {
            if (!elem.attr('aria-live')) {
              elem.attr('aria-live', 'assertive');
            }
          }
        };
      }).directive('ngClick', ['$aria', '$parse', function($aria, $parse) {
        return {
          restrict: 'A',
          compile: function(elem, attr) {
            var fn = $parse(attr.ngClick, null, true);
            return function(scope, elem, attr) {
              var nodeBlackList = ['BUTTON', 'A', 'INPUT', 'TEXTAREA'];
              function isNodeOneOf(elem, nodeTypeArray) {
                if (nodeTypeArray.indexOf(elem[0].nodeName) !== -1) {
                  return true;
                }
              }
              if (!elem.attr('role') && !isNodeOneOf(elem, nodeBlackList)) {
                elem.attr('role', 'button');
              }
              if ($aria.config('tabindex') && !elem.attr('tabindex')) {
                elem.attr('tabindex', 0);
              }
              if ($aria.config('bindKeypress') && !attr.ngKeypress && !isNodeOneOf(elem, nodeBlackList)) {
                elem.on('keypress', function(event) {
                  if (event.keyCode === 32 || event.keyCode === 13) {
                    scope.$apply(callback);
                  }
                  function callback() {
                    fn(scope, {$event: event});
                  }
                });
              }
            };
          }
        };
      }]).directive('ngDblclick', ['$aria', function($aria) {
        return function(scope, elem, attr) {
          if ($aria.config('tabindex') && !elem.attr('tabindex')) {
            elem.attr('tabindex', 0);
          }
        };
      }]);
    })(window, window.angular);
  }).call(System.global);
  return System.get("@@global-helpers").retrieveGlobal(__module.id, false);
});



System.register("github:angular/bower-angular-messages@1.3.15/angular-messages", [], false, function(__require, __exports, __module) {
  System.get("@@global-helpers").prepareGlobal(__module.id, []);
  (function() {
    (function(window, angular, undefined) {
      'use strict';
      angular.module('ngMessages', []).directive('ngMessages', ['$compile', '$animate', '$templateRequest', function($compile, $animate, $templateRequest) {
        var ACTIVE_CLASS = 'ng-active';
        var INACTIVE_CLASS = 'ng-inactive';
        return {
          restrict: 'AE',
          controller: function() {
            this.$renderNgMessageClasses = angular.noop;
            var messages = [];
            this.registerMessage = function(index, message) {
              for (var i = 0; i < messages.length; i++) {
                if (messages[i].type == message.type) {
                  if (index != i) {
                    var temp = messages[index];
                    messages[index] = messages[i];
                    if (index < messages.length) {
                      messages[i] = temp;
                    } else {
                      messages.splice(0, i);
                    }
                  }
                  return ;
                }
              }
              messages.splice(index, 0, message);
            };
            this.renderMessages = function(values, multiple) {
              values = values || {};
              var found;
              angular.forEach(messages, function(message) {
                if ((!found || multiple) && truthyVal(values[message.type])) {
                  message.attach();
                  found = true;
                } else {
                  message.detach();
                }
              });
              this.renderElementClasses(found);
              function truthyVal(value) {
                return value !== null && value !== false && value;
              }
            };
          },
          require: 'ngMessages',
          link: function($scope, element, $attrs, ctrl) {
            ctrl.renderElementClasses = function(bool) {
              bool ? $animate.setClass(element, ACTIVE_CLASS, INACTIVE_CLASS) : $animate.setClass(element, INACTIVE_CLASS, ACTIVE_CLASS);
            };
            var multiple = angular.isString($attrs.ngMessagesMultiple) || angular.isString($attrs.multiple);
            var cachedValues,
                watchAttr = $attrs.ngMessages || $attrs['for'];
            $scope.$watchCollection(watchAttr, function(values) {
              cachedValues = values;
              ctrl.renderMessages(values, multiple);
            });
            var tpl = $attrs.ngMessagesInclude || $attrs.include;
            if (tpl) {
              $templateRequest(tpl).then(function processTemplate(html) {
                var after,
                    container = angular.element('<div/>').html(html);
                angular.forEach(container.children(), function(elm) {
                  elm = angular.element(elm);
                  after ? after.after(elm) : element.prepend(elm);
                  after = elm;
                  $compile(elm)($scope);
                });
                ctrl.renderMessages(cachedValues, multiple);
              });
            }
          }
        };
      }]).directive('ngMessage', ['$animate', function($animate) {
        var COMMENT_NODE = 8;
        return {
          require: '^ngMessages',
          transclude: 'element',
          terminal: true,
          restrict: 'AE',
          link: function($scope, $element, $attrs, ngMessages, $transclude) {
            var index,
                element;
            var commentNode = $element[0];
            var parentNode = commentNode.parentNode;
            for (var i = 0,
                j = 0; i < parentNode.childNodes.length; i++) {
              var node = parentNode.childNodes[i];
              if (node.nodeType == COMMENT_NODE && node.nodeValue.indexOf('ngMessage') >= 0) {
                if (node === commentNode) {
                  index = j;
                  break;
                }
                j++;
              }
            }
            ngMessages.registerMessage(index, {
              type: $attrs.ngMessage || $attrs.when,
              attach: function() {
                if (!element) {
                  $transclude($scope, function(clone) {
                    $animate.enter(clone, null, $element);
                    element = clone;
                  });
                }
              },
              detach: function(now) {
                if (element) {
                  $animate.leave(element);
                  element = null;
                }
              }
            });
          }
        };
      }]);
    })(window, window.angular);
  }).call(System.global);
  return System.get("@@global-helpers").retrieveGlobal(__module.id, false);
});



System.register("github:angular/bower-angular@1.3.15", ["github:angular/bower-angular@1.3.15/angular"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:angular/bower-angular@1.3.15/angular");
  global.define = __define;
  return module.exports;
});



System.register("github:angular/bower-angular-animate@1.3.15", ["github:angular/bower-angular-animate@1.3.15/angular-animate"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:angular/bower-angular-animate@1.3.15/angular-animate");
  global.define = __define;
  return module.exports;
});



System.register("github:angular/bower-angular-aria@1.3.15", ["github:angular/bower-angular-aria@1.3.15/angular-aria"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:angular/bower-angular-aria@1.3.15/angular-aria");
  global.define = __define;
  return module.exports;
});



System.register("github:angular/bower-angular-messages@1.3.15/index", ["./angular-messages"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  require('./angular-messages');
  module.exports = 'ngMessages';
  global.define = __define;
  return module.exports;
});



System.register("github:angular/bower-material@0.8.3/angular-material", ["./angular-material.css!", "angular", "angular-animate", "angular-aria"], false, function(__require, __exports, __module) {
  System.get("@@global-helpers").prepareGlobal(__module.id, ["./angular-material.css!", "angular", "angular-animate", "angular-aria"]);
  (function() {
    "format global";
    "deps ./angular-material.css!";
    "deps angular";
    "deps angular-animate";
    "deps angular-aria";
    angular.module('ngMaterial', ["ng", "ngAnimate", "ngAria", "material.core", "material.core.theming.palette", "material.core.theming", "material.components.autocomplete", "material.components.backdrop", "material.components.bottomSheet", "material.components.button", "material.components.card", "material.components.checkbox", "material.components.content", "material.components.dialog", "material.components.divider", "material.components.gridList", "material.components.icon", "material.components.input", "material.components.list", "material.components.progressCircular", "material.components.progressLinear", "material.components.radioButton", "material.components.select", "material.components.sidenav", "material.components.slider", "material.components.sticky", "material.components.subheader", "material.components.swipe", "material.components.switch", "material.components.tabs", "material.components.textField", "material.components.toast", "material.components.toolbar", "material.components.tooltip", "material.components.whiteframe"]);
    (function() {
      'use strict';
      angular.module('material.core', ['material.core.theming']).config(MdCoreConfigure);
      function MdCoreConfigure($provide, $mdThemingProvider) {
        $provide.decorator('$$rAF', ["$delegate", rAFDecorator]);
        $mdThemingProvider.theme('default').primaryPalette('indigo').accentPalette('pink').warnPalette('red').backgroundPalette('grey');
      }
      MdCoreConfigure.$inject = ["$provide", "$mdThemingProvider"];
      function rAFDecorator($delegate) {
        $delegate.throttle = function(cb) {
          var queueArgs,
              alreadyQueued,
              queueCb,
              context;
          return function debounced() {
            queueArgs = arguments;
            context = this;
            queueCb = cb;
            if (!alreadyQueued) {
              alreadyQueued = true;
              $delegate(function() {
                queueCb.apply(context, queueArgs);
                alreadyQueued = false;
              });
            }
          };
        };
        return $delegate;
      }
    })();
    (function() {
      'use strict';
      angular.module('material.core').factory('$mdConstant', MdConstantFactory);
      function MdConstantFactory($$rAF, $sniffer) {
        var webkit = /webkit/i.test($sniffer.vendorPrefix);
        function vendorProperty(name) {
          return webkit ? ('webkit' + name.charAt(0).toUpperCase() + name.substring(1)) : name;
        }
        return {
          KEY_CODE: {
            ENTER: 13,
            ESCAPE: 27,
            SPACE: 32,
            LEFT_ARROW: 37,
            UP_ARROW: 38,
            RIGHT_ARROW: 39,
            DOWN_ARROW: 40,
            TAB: 9
          },
          CSS: {
            TRANSITIONEND: 'transitionend' + (webkit ? ' webkitTransitionEnd' : ''),
            ANIMATIONEND: 'animationend' + (webkit ? ' webkitAnimationEnd' : ''),
            TRANSFORM: vendorProperty('transform'),
            TRANSFORM_ORIGIN: vendorProperty('transformOrigin'),
            TRANSITION: vendorProperty('transition'),
            TRANSITION_DURATION: vendorProperty('transitionDuration'),
            ANIMATION_PLAY_STATE: vendorProperty('animationPlayState'),
            ANIMATION_DURATION: vendorProperty('animationDuration'),
            ANIMATION_NAME: vendorProperty('animationName'),
            ANIMATION_TIMING: vendorProperty('animationTimingFunction'),
            ANIMATION_DIRECTION: vendorProperty('animationDirection')
          },
          MEDIA: {
            'sm': '(max-width: 600px)',
            'gt-sm': '(min-width: 600px)',
            'md': '(min-width: 600px) and (max-width: 960px)',
            'gt-md': '(min-width: 960px)',
            'lg': '(min-width: 960px) and (max-width: 1200px)',
            'gt-lg': '(min-width: 1200px)'
          },
          MEDIA_PRIORITY: ['gt-lg', 'lg', 'gt-md', 'md', 'gt-sm', 'sm']
        };
      }
      MdConstantFactory.$inject = ["$$rAF", "$sniffer"];
    })();
    (function() {
      angular.module('material.core').config(["$provide", function($provide) {
        $provide.decorator('$mdUtil', ['$delegate', function($delegate) {
          $delegate.iterator = Iterator;
          return $delegate;
        }]);
      }]);
      function Iterator(items, reloop) {
        var trueFn = function() {
          return true;
        };
        if (items && !angular.isArray(items)) {
          items = Array.prototype.slice.call(items);
        }
        reloop = !!reloop;
        var _items = items || [];
        return {
          items: getItems,
          count: count,
          inRange: inRange,
          contains: contains,
          indexOf: indexOf,
          itemAt: itemAt,
          findBy: findBy,
          add: add,
          remove: remove,
          first: first,
          last: last,
          next: angular.bind(null, findSubsequentItem, false),
          previous: angular.bind(null, findSubsequentItem, true),
          hasPrevious: hasPrevious,
          hasNext: hasNext
        };
        function getItems() {
          return [].concat(_items);
        }
        function count() {
          return _items.length;
        }
        function inRange(index) {
          return _items.length && (index > -1) && (index < _items.length);
        }
        function hasNext(item) {
          return item ? inRange(indexOf(item) + 1) : false;
        }
        function hasPrevious(item) {
          return item ? inRange(indexOf(item) - 1) : false;
        }
        function itemAt(index) {
          return inRange(index) ? _items[index] : null;
        }
        function findBy(key, val) {
          return _items.filter(function(item) {
            return item[key] === val;
          });
        }
        function add(item, index) {
          if (!item)
            return -1;
          if (!angular.isNumber(index)) {
            index = _items.length;
          }
          _items.splice(index, 0, item);
          return indexOf(item);
        }
        function remove(item) {
          if (contains(item)) {
            _items.splice(indexOf(item), 1);
          }
        }
        function indexOf(item) {
          return _items.indexOf(item);
        }
        function contains(item) {
          return item && (indexOf(item) > -1);
        }
        function first() {
          return _items.length ? _items[0] : null;
        }
        function last() {
          return _items.length ? _items[_items.length - 1] : null;
        }
        function findSubsequentItem(backwards, item, validate, limit) {
          validate = validate || trueFn;
          var curIndex = indexOf(item);
          while (true) {
            if (!inRange(curIndex))
              return null;
            var nextIndex = curIndex + (backwards ? -1 : 1);
            var foundItem = null;
            if (inRange(nextIndex)) {
              foundItem = _items[nextIndex];
            } else if (reloop) {
              foundItem = backwards ? last() : first();
              nextIndex = indexOf(foundItem);
            }
            if ((foundItem === null) || (nextIndex === limit))
              return null;
            if (validate(foundItem))
              return foundItem;
            if (angular.isUndefined(limit))
              limit = nextIndex;
            curIndex = nextIndex;
          }
        }
      }
    })();
    (function() {
      angular.module('material.core').factory('$mdMedia', mdMediaFactory);
      function mdMediaFactory($mdConstant, $rootScope, $window) {
        var queries = {};
        var mqls = {};
        var results = {};
        var normalizeCache = {};
        $mdMedia.getResponsiveAttribute = getResponsiveAttribute;
        $mdMedia.getQuery = getQuery;
        $mdMedia.watchResponsiveAttributes = watchResponsiveAttributes;
        return $mdMedia;
        function $mdMedia(query) {
          var validated = queries[query];
          if (angular.isUndefined(validated)) {
            validated = queries[query] = validate(query);
          }
          var result = results[validated];
          if (angular.isUndefined(result)) {
            result = add(validated);
          }
          return result;
        }
        function validate(query) {
          return $mdConstant.MEDIA[query] || ((query.charAt(0) !== '(') ? ('(' + query + ')') : query);
        }
        function add(query) {
          var result = mqls[query] = $window.matchMedia(query);
          result.addListener(onQueryChange);
          return (results[result.media] = !!result.matches);
        }
        function onQueryChange(query) {
          $rootScope.$evalAsync(function() {
            results[query.media] = !!query.matches;
          });
        }
        function getQuery(name) {
          return mqls[name];
        }
        function getResponsiveAttribute(attrs, attrName) {
          for (var i = 0; i < $mdConstant.MEDIA_PRIORITY.length; i++) {
            var mediaName = $mdConstant.MEDIA_PRIORITY[i];
            if (!mqls[queries[mediaName]].matches) {
              continue;
            }
            var normalizedName = getNormalizedName(attrs, attrName + '-' + mediaName);
            if (attrs[normalizedName]) {
              return attrs[normalizedName];
            }
          }
          return attrs[getNormalizedName(attrs, attrName)];
        }
        function watchResponsiveAttributes(attrNames, attrs, watchFn) {
          var unwatchFns = [];
          attrNames.forEach(function(attrName) {
            var normalizedName = getNormalizedName(attrs, attrName);
            if (attrs[normalizedName]) {
              unwatchFns.push(attrs.$observe(normalizedName, angular.bind(void 0, watchFn, null)));
            }
            for (var mediaName in $mdConstant.MEDIA) {
              normalizedName = getNormalizedName(attrs, attrName + '-' + mediaName);
              if (!attrs[normalizedName]) {
                return ;
              }
              unwatchFns.push(attrs.$observe(normalizedName, angular.bind(void 0, watchFn, mediaName)));
            }
          });
          return function unwatch() {
            unwatchFns.forEach(function(fn) {
              fn();
            });
          };
        }
        function getNormalizedName(attrs, attrName) {
          return normalizeCache[attrName] || (normalizeCache[attrName] = attrs.$normalize(attrName));
        }
      }
      mdMediaFactory.$inject = ["$mdConstant", "$rootScope", "$window"];
    })();
    (function() {
      'use strict';
      var nextUniqueId = ['0', '0', '0'];
      angular.module('material.core').factory('$mdUtil', ["$cacheFactory", "$document", "$timeout", "$q", "$window", "$mdConstant", function($cacheFactory, $document, $timeout, $q, $window, $mdConstant) {
        var Util;
        function getNode(el) {
          return el[0] || el;
        }
        return Util = {
          now: window.performance ? angular.bind(window.performance, window.performance.now) : Date.now,
          clientRect: function(element, offsetParent, isOffsetRect) {
            var node = getNode(element);
            offsetParent = getNode(offsetParent || node.offsetParent || document.body);
            var nodeRect = node.getBoundingClientRect();
            var offsetRect = isOffsetRect ? offsetParent.getBoundingClientRect() : {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            };
            return {
              left: nodeRect.left - offsetRect.left + offsetParent.scrollLeft,
              top: nodeRect.top - offsetRect.top + offsetParent.scrollTop,
              width: nodeRect.width,
              height: nodeRect.height
            };
          },
          offsetRect: function(element, offsetParent) {
            return Util.clientRect(element, offsetParent, true);
          },
          floatingScrollbars: function() {
            if (this.floatingScrollbars.cached === undefined) {
              var tempNode = angular.element('<div style="z-index: -1; position: absolute; height: 1px; overflow-y: scroll"><div style="height: 2px;"></div></div>');
              $document[0].body.appendChild(tempNode[0]);
              this.floatingScrollbars.cached = (tempNode[0].offsetWidth == tempNode[0].childNodes[0].offsetWidth);
              tempNode.remove();
            }
            return this.floatingScrollbars.cached;
          },
          forceFocus: function(element) {
            var node = element[0] || element;
            document.addEventListener('click', function focusOnClick(ev) {
              if (ev.target === node && ev.$focus) {
                node.focus();
                ev.stopImmediatePropagation();
                ev.preventDefault();
                node.removeEventListener('click', focusOnClick);
              }
            }, true);
            var newEvent = document.createEvent('MouseEvents');
            newEvent.initMouseEvent('click', false, true, window, {}, 0, 0, 0, 0, false, false, false, false, 0, null);
            newEvent.$material = true;
            newEvent.$focus = true;
            node.dispatchEvent(newEvent);
          },
          transitionEndPromise: function(element, opts) {
            opts = opts || {};
            var deferred = $q.defer();
            element.on($mdConstant.CSS.TRANSITIONEND, finished);
            function finished(ev) {
              if (!ev || ev.target === element[0]) {
                element.off($mdConstant.CSS.TRANSITIONEND, finished);
                deferred.resolve();
              }
            }
            if (opts.timeout)
              $timeout(finished, opts.timeout);
            return deferred.promise;
          },
          fakeNgModel: function() {
            return {
              $fake: true,
              $setTouched: angular.noop,
              $setViewValue: function(value) {
                this.$viewValue = value;
                this.$render(value);
                this.$viewChangeListeners.forEach(function(cb) {
                  cb();
                });
              },
              $isEmpty: function(value) {
                return ('' + value).length === 0;
              },
              $parsers: [],
              $formatters: [],
              $viewChangeListeners: [],
              $render: angular.noop
            };
          },
          debounce: function(func, wait, scope, invokeApply) {
            var timer;
            return function debounced() {
              var context = scope,
                  args = Array.prototype.slice.call(arguments);
              $timeout.cancel(timer);
              timer = $timeout(function() {
                timer = undefined;
                func.apply(context, args);
              }, wait || 10, invokeApply);
            };
          },
          throttle: function throttle(func, delay) {
            var recent;
            return function throttled() {
              var context = this;
              var args = arguments;
              var now = Util.now();
              if (!recent || (now - recent > delay)) {
                func.apply(context, args);
                recent = now;
              }
            };
          },
          time: function time(cb) {
            var start = Util.now();
            cb();
            return Util.now() - start;
          },
          nextUid: function() {
            var index = nextUniqueId.length;
            var digit;
            while (index) {
              index--;
              digit = nextUniqueId[index].charCodeAt(0);
              if (digit == 57) {
                nextUniqueId[index] = 'A';
                return nextUniqueId.join('');
              }
              if (digit == 90) {
                nextUniqueId[index] = '0';
              } else {
                nextUniqueId[index] = String.fromCharCode(digit + 1);
                return nextUniqueId.join('');
              }
            }
            nextUniqueId.unshift('0');
            return nextUniqueId.join('');
          },
          disconnectScope: function disconnectScope(scope) {
            if (!scope)
              return ;
            if (scope.$root === scope)
              return ;
            if (scope.$$destroyed)
              return ;
            var parent = scope.$parent;
            scope.$$disconnected = true;
            if (parent.$$childHead === scope)
              parent.$$childHead = scope.$$nextSibling;
            if (parent.$$childTail === scope)
              parent.$$childTail = scope.$$prevSibling;
            if (scope.$$prevSibling)
              scope.$$prevSibling.$$nextSibling = scope.$$nextSibling;
            if (scope.$$nextSibling)
              scope.$$nextSibling.$$prevSibling = scope.$$prevSibling;
            scope.$$nextSibling = scope.$$prevSibling = null;
          },
          reconnectScope: function reconnectScope(scope) {
            if (!scope)
              return ;
            if (scope.$root === scope)
              return ;
            if (!scope.$$disconnected)
              return ;
            var child = scope;
            var parent = child.$parent;
            child.$$disconnected = false;
            child.$$prevSibling = parent.$$childTail;
            if (parent.$$childHead) {
              parent.$$childTail.$$nextSibling = child;
              parent.$$childTail = child;
            } else {
              parent.$$childHead = parent.$$childTail = child;
            }
          },
          getClosest: function getClosest(el, tagName) {
            tagName = tagName.toUpperCase();
            do {
              if (el.nodeName === tagName) {
                return el;
              }
            } while (el = el.parentNode);
            return null;
          }
        };
      }]);
      angular.element.prototype.focus = angular.element.prototype.focus || function() {
        if (this.length) {
          this[0].focus();
        }
        return this;
      };
      angular.element.prototype.blur = angular.element.prototype.blur || function() {
        if (this.length) {
          this[0].blur();
        }
        return this;
      };
    })();
    (function() {
      'use strict';
      angular.module('material.core').service('$mdAria', AriaService);
      function AriaService($$rAF, $log, $window) {
        return {
          expect: expect,
          expectAsync: expectAsync,
          expectWithText: expectWithText
        };
        function expect(element, attrName, defaultValue) {
          var node = element[0];
          if (!node.hasAttribute(attrName) && !childHasAttribute(node, attrName)) {
            defaultValue = angular.isString(defaultValue) ? defaultValue.trim() : '';
            if (defaultValue.length) {
              element.attr(attrName, defaultValue);
            } else {
              $log.warn('ARIA: Attribute "', attrName, '", required for accessibility, is missing on node:', node);
            }
          }
        }
        function expectAsync(element, attrName, defaultValueGetter) {
          $$rAF(function() {
            expect(element, attrName, defaultValueGetter());
          });
        }
        function expectWithText(element, attrName) {
          expectAsync(element, attrName, function() {
            return getText(element);
          });
        }
        function getText(element) {
          return element.text().trim();
        }
        function childHasAttribute(node, attrName) {
          var hasChildren = node.hasChildNodes(),
              hasAttr = false;
          function isHidden(el) {
            var style = el.currentStyle ? el.currentStyle : $window.getComputedStyle(el);
            return (style.display === 'none');
          }
          if (hasChildren) {
            var children = node.childNodes;
            for (var i = 0; i < children.length; i++) {
              var child = children[i];
              if (child.nodeType === 1 && child.hasAttribute(attrName)) {
                if (!isHidden(child)) {
                  hasAttr = true;
                }
              }
            }
          }
          return hasAttr;
        }
      }
      AriaService.$inject = ["$$rAF", "$log", "$window"];
    })();
    (function() {
      'use strict';
      angular.module('material.core').service('$mdCompiler', mdCompilerService);
      function mdCompilerService($q, $http, $injector, $compile, $controller, $templateCache) {
        this.compile = function(options) {
          var templateUrl = options.templateUrl;
          var template = options.template || '';
          var controller = options.controller;
          var controllerAs = options.controllerAs;
          var resolve = options.resolve || {};
          var locals = options.locals || {};
          var transformTemplate = options.transformTemplate || angular.identity;
          var bindToController = options.bindToController;
          angular.forEach(resolve, function(value, key) {
            if (angular.isString(value)) {
              resolve[key] = $injector.get(value);
            } else {
              resolve[key] = $injector.invoke(value);
            }
          });
          angular.extend(resolve, locals);
          if (templateUrl) {
            resolve.$template = $http.get(templateUrl, {cache: $templateCache}).then(function(response) {
              return response.data;
            });
          } else {
            resolve.$template = $q.when(template);
          }
          return $q.all(resolve).then(function(locals) {
            var template = transformTemplate(locals.$template);
            var element = options.element || angular.element('<div>').html(template.trim()).contents();
            var linkFn = $compile(element);
            return {
              locals: locals,
              element: element,
              link: function link(scope) {
                locals.$scope = scope;
                if (controller) {
                  var ctrl = $controller(controller, locals);
                  if (bindToController) {
                    angular.extend(ctrl, locals);
                  }
                  element.data('$ngControllerController', ctrl);
                  element.children().data('$ngControllerController', ctrl);
                  if (controllerAs) {
                    scope[controllerAs] = ctrl;
                  }
                }
                return linkFn(scope);
              }
            };
          });
        };
      }
      mdCompilerService.$inject = ["$q", "$http", "$injector", "$compile", "$controller", "$templateCache"];
    })();
    (function() {
      'use strict';
      var START_EVENTS = 'mousedown touchstart pointerdown';
      var MOVE_EVENTS = 'mousemove touchmove pointermove';
      var END_EVENTS = 'mouseup mouseleave touchend touchcancel pointerup pointercancel';
      var HANDLERS;
      document.contains || (document.contains = function(node) {
        return document.body.contains(node);
      });
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;
      var isIos = userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i);
      var isAndroid = userAgent.match(/Android/i);
      var shouldHijackClicks = isIos || isAndroid;
      if (shouldHijackClicks) {
        document.addEventListener('click', function(ev) {
          var isKeyClick = ev.clientX === 0 && ev.clientY === 0;
          if (window.jQuery || isKeyClick || ev.$material)
            return ;
          ev.preventDefault();
          ev.stopPropagation();
        }, true);
      }
      angular.element(document).on(START_EVENTS, gestureStart).on(MOVE_EVENTS, gestureMove).on(END_EVENTS, gestureEnd).on('$$mdGestureReset', function() {
        lastPointer = pointer = null;
      });
      var pointer,
          lastPointer;
      function runHandlers(handlerEvent, event) {
        var handler;
        for (var handlerName in HANDLERS) {
          handler = HANDLERS[handlerName];
          if (handlerEvent === 'start') {
            handler.cancel();
          }
          handler[handlerEvent](event, pointer);
        }
      }
      function gestureStart(ev) {
        if (pointer)
          return ;
        var now = +Date.now();
        if (lastPointer && !typesMatch(ev, lastPointer) && (now - lastPointer.endTime < 1500)) {
          return ;
        }
        pointer = makeStartPointer(ev);
        runHandlers('start', ev);
      }
      function gestureMove(ev) {
        if (!pointer || !typesMatch(ev, pointer))
          return ;
        updatePointerState(ev, pointer);
        runHandlers('move', ev);
      }
      function gestureEnd(ev) {
        if (!pointer || !typesMatch(ev, pointer))
          return ;
        updatePointerState(ev, pointer);
        pointer.endTime = +Date.now();
        runHandlers('end', ev);
        lastPointer = pointer;
        pointer = null;
      }
      function typesMatch(ev, pointer) {
        return ev && pointer && ev.type.charAt(0) === pointer.type;
      }
      function getEventPoint(ev) {
        ev = ev.originalEvent || ev;
        return (ev.touches && ev.touches[0]) || (ev.changedTouches && ev.changedTouches[0]) || ev;
      }
      function updatePointerState(ev, pointer) {
        var point = getEventPoint(ev);
        var x = pointer.x = point.pageX;
        var y = pointer.y = point.pageY;
        pointer.distanceX = x - pointer.startX;
        pointer.distanceY = y - pointer.startY;
        pointer.distance = Math.sqrt(pointer.distanceX * pointer.distanceX + pointer.distanceY * pointer.distanceY);
        pointer.directionX = pointer.distanceX > 0 ? 'right' : pointer.distanceX < 0 ? 'left' : '';
        pointer.directionY = pointer.distanceY > 0 ? 'up' : pointer.distanceY < 0 ? 'down' : '';
        pointer.duration = +Date.now() - pointer.startTime;
        pointer.velocityX = pointer.distanceX / pointer.duration;
        pointer.velocityY = pointer.distanceY / pointer.duration;
      }
      function makeStartPointer(ev) {
        var point = getEventPoint(ev);
        var startPointer = {
          startTime: +Date.now(),
          target: ev.target,
          type: ev.type.charAt(0)
        };
        startPointer.startX = startPointer.x = point.pageX;
        startPointer.startY = startPointer.y = point.pageY;
        return startPointer;
      }
      angular.module('material.core').run(["$mdGesture", function($mdGesture) {}]).factory('$mdGesture', ["$$MdGestureHandler", "$$rAF", "$timeout", function($$MdGestureHandler, $$rAF, $timeout) {
        HANDLERS = {};
        if (shouldHijackClicks) {
          addHandler('click', {
            options: {maxDistance: 6},
            onEnd: function(ev, pointer) {
              if (pointer.distance < this.state.options.maxDistance) {
                this.dispatchEvent(ev, 'click');
              }
            }
          });
        }
        addHandler('press', {
          onStart: function(ev, pointer) {
            this.dispatchEvent(ev, '$md.pressdown');
          },
          onEnd: function(ev, pointer) {
            this.dispatchEvent(ev, '$md.pressup');
          }
        });
        addHandler('hold', {
          options: {
            maxDistance: 6,
            delay: 500
          },
          onCancel: function() {
            $timeout.cancel(this.state.timeout);
          },
          onStart: function(ev, pointer) {
            if (!this.state.registeredParent)
              return this.cancel();
            this.state.pos = {
              x: pointer.x,
              y: pointer.y
            };
            this.state.timeout = $timeout(angular.bind(this, function holdDelayFn() {
              this.dispatchEvent(ev, '$md.hold');
              this.cancel();
            }), this.state.options.delay, false);
          },
          onMove: function(ev, pointer) {
            ev.preventDefault();
            var dx = this.state.pos.x - pointer.x;
            var dy = this.state.pos.y - pointer.y;
            if (Math.sqrt(dx * dx + dy * dy) > this.options.maxDistance) {
              this.cancel();
            }
          },
          onEnd: function() {
            this.onCancel();
          }
        });
        addHandler('drag', {
          options: {
            minDistance: 6,
            horizontal: true
          },
          onStart: function(ev) {
            if (!this.state.registeredParent)
              this.cancel();
          },
          onMove: function(ev, pointer) {
            var shouldStartDrag,
                shouldCancel;
            ev.preventDefault();
            if (!this.state.dragPointer) {
              if (this.state.options.horizontal) {
                shouldStartDrag = Math.abs(pointer.distanceX) > this.state.options.minDistance;
                shouldCancel = Math.abs(pointer.distanceY) > this.state.options.minDistance * 1.5;
              } else {
                shouldStartDrag = Math.abs(pointer.distanceY) > this.state.options.minDistance;
                shouldCancel = Math.abs(pointer.distanceX) > this.state.options.minDistance * 1.5;
              }
              if (shouldStartDrag) {
                this.state.dragPointer = makeStartPointer(ev);
                updatePointerState(ev, this.state.dragPointer);
                this.dispatchEvent(ev, '$md.dragstart', this.state.dragPointer);
              } else if (shouldCancel) {
                this.cancel();
              }
            } else {
              this.dispatchDragMove(ev);
            }
          },
          dispatchDragMove: $$rAF.throttle(function(ev) {
            if (this.state.isRunning) {
              updatePointerState(ev, this.state.dragPointer);
              this.dispatchEvent(ev, '$md.drag', this.state.dragPointer);
            }
          }),
          onEnd: function(ev, pointer) {
            if (this.state.dragPointer) {
              updatePointerState(ev, this.state.dragPointer);
              this.dispatchEvent(ev, '$md.dragend', this.state.dragPointer);
            }
          }
        });
        addHandler('swipe', {
          options: {
            minVelocity: 0.65,
            minDistance: 10
          },
          onEnd: function(ev, pointer) {
            if (Math.abs(pointer.velocityX) > this.state.options.minVelocity && Math.abs(pointer.distanceX) > this.state.options.minDistance) {
              var eventType = pointer.directionX == 'left' ? '$md.swipeleft' : '$md.swiperight';
              this.dispatchEvent(ev, eventType);
            }
          }
        });
        var self;
        return self = {
          handler: addHandler,
          register: register
        };
        function addHandler(name, definition) {
          var handler = new $$MdGestureHandler(name);
          angular.extend(handler, definition);
          HANDLERS[name] = handler;
          return self;
        }
        function register(element, handlerName, options) {
          var handler = HANDLERS[handlerName.replace(/^\$md./, '')];
          if (!handler) {
            throw new Error('Failed to register element with handler ' + handlerName + '. ' + 'Available handlers: ' + Object.keys(HANDLERS).join(', '));
          }
          return handler.registerElement(element, options);
        }
      }]).factory('$$MdGestureHandler', ["$$rAF", function($$rAF) {
        function GestureHandler(name) {
          this.name = name;
          this.state = {};
        }
        GestureHandler.prototype = {
          onStart: angular.noop,
          onMove: angular.noop,
          onEnd: angular.noop,
          onCancel: angular.noop,
          options: {},
          dispatchEvent: typeof window.jQuery !== 'undefined' && angular.element === window.jQuery ? jQueryDispatchEvent : nativeDispatchEvent,
          start: function(ev, pointer) {
            if (this.state.isRunning)
              return ;
            var parentTarget = this.getNearestParent(ev.target);
            var parentTargetOptions = parentTarget && parentTarget.$mdGesture[this.name] || {};
            this.state = {
              isRunning: true,
              options: angular.extend({}, this.options, parentTargetOptions),
              registeredParent: parentTarget
            };
            this.onStart(ev, pointer);
          },
          move: function(ev, pointer) {
            if (!this.state.isRunning)
              return ;
            this.onMove(ev, pointer);
          },
          end: function(ev, pointer) {
            if (!this.state.isRunning)
              return ;
            this.onEnd(ev, pointer);
            this.state.isRunning = false;
          },
          cancel: function(ev, pointer) {
            this.onCancel(ev, pointer);
            this.state = {};
          },
          getNearestParent: function(node) {
            var current = node;
            while (current) {
              if ((current.$mdGesture || {})[this.name]) {
                return current;
              }
              current = current.parentNode;
            }
          },
          registerElement: function(element, options) {
            var self = this;
            element[0].$mdGesture = element[0].$mdGesture || {};
            element[0].$mdGesture[this.name] = options || {};
            element.on('$destroy', onDestroy);
            return onDestroy;
            function onDestroy() {
              delete element[0].$mdGesture[self.name];
              element.off('$destroy', onDestroy);
            }
          }
        };
        function jQueryDispatchEvent(srcEvent, eventType, eventPointer) {
          eventPointer = eventPointer || pointer;
          var eventObj = new angular.element.Event(eventType);
          eventObj.$material = true;
          eventObj.pointer = eventPointer;
          eventObj.srcEvent = srcEvent;
          angular.extend(eventObj, {
            clientX: eventPointer.x,
            clientY: eventPointer.y,
            screenX: eventPointer.x,
            screenY: eventPointer.y,
            pageX: eventPointer.x,
            pageY: eventPointer.y,
            ctrlKey: srcEvent.ctrlKey,
            altKey: srcEvent.altKey,
            shiftKey: srcEvent.shiftKey,
            metaKey: srcEvent.metaKey
          });
          angular.element(eventPointer.target).trigger(eventObj);
        }
        function nativeDispatchEvent(srcEvent, eventType, eventPointer) {
          eventPointer = eventPointer || pointer;
          var eventObj;
          if (eventType === 'click') {
            eventObj = document.createEvent('MouseEvents');
            eventObj.initMouseEvent('click', true, true, window, srcEvent.detail, eventPointer.x, eventPointer.y, eventPointer.x, eventPointer.y, srcEvent.ctrlKey, srcEvent.altKey, srcEvent.shiftKey, srcEvent.metaKey, srcEvent.button, srcEvent.relatedTarget || null);
          } else {
            eventObj = document.createEvent('CustomEvent');
            eventObj.initCustomEvent(eventType, true, true, {});
          }
          eventObj.$material = true;
          eventObj.pointer = eventPointer;
          eventObj.srcEvent = srcEvent;
          eventPointer.target.dispatchEvent(eventObj);
        }
        return GestureHandler;
      }]);
    })();
    (function() {
      'use strict';
      angular.module('material.core').provider('$$interimElement', InterimElementProvider);
      function InterimElementProvider() {
        createInterimElementProvider.$get = InterimElementFactory;
        InterimElementFactory.$inject = ["$document", "$q", "$rootScope", "$timeout", "$rootElement", "$animate", "$interpolate", "$mdCompiler", "$mdTheming"];
        return createInterimElementProvider;
        function createInterimElementProvider(interimFactoryName) {
          var EXPOSED_METHODS = ['onHide', 'onShow', 'onRemove'];
          var customMethods = {};
          var providerConfig = {presets: {}};
          var provider = {
            setDefaults: setDefaults,
            addPreset: addPreset,
            addMethod: addMethod,
            $get: factory
          };
          provider.addPreset('build', {methods: ['controller', 'controllerAs', 'resolve', 'template', 'templateUrl', 'themable', 'transformTemplate', 'parent']});
          factory.$inject = ["$$interimElement", "$animate", "$injector"];
          return provider;
          function setDefaults(definition) {
            providerConfig.optionsFactory = definition.options;
            providerConfig.methods = (definition.methods || []).concat(EXPOSED_METHODS);
            return provider;
          }
          function addMethod(name, fn) {
            customMethods[name] = fn;
            return provider;
          }
          function addPreset(name, definition) {
            definition = definition || {};
            definition.methods = definition.methods || [];
            definition.options = definition.options || function() {
              return {};
            };
            if (/^cancel|hide|show$/.test(name)) {
              throw new Error("Preset '" + name + "' in " + interimFactoryName + " is reserved!");
            }
            if (definition.methods.indexOf('_options') > -1) {
              throw new Error("Method '_options' in " + interimFactoryName + " is reserved!");
            }
            providerConfig.presets[name] = {
              methods: definition.methods.concat(EXPOSED_METHODS),
              optionsFactory: definition.options,
              argOption: definition.argOption
            };
            return provider;
          }
          function factory($$interimElement, $animate, $injector) {
            var defaultMethods;
            var defaultOptions;
            var interimElementService = $$interimElement();
            var publicService = {
              hide: interimElementService.hide,
              cancel: interimElementService.cancel,
              show: showInterimElement
            };
            defaultMethods = providerConfig.methods || [];
            defaultOptions = invokeFactory(providerConfig.optionsFactory, {});
            angular.forEach(customMethods, function(fn, name) {
              publicService[name] = fn;
            });
            angular.forEach(providerConfig.presets, function(definition, name) {
              var presetDefaults = invokeFactory(definition.optionsFactory, {});
              var presetMethods = (definition.methods || []).concat(defaultMethods);
              angular.extend(presetDefaults, {$type: name});
              function Preset(opts) {
                this._options = angular.extend({}, presetDefaults, opts);
              }
              angular.forEach(presetMethods, function(name) {
                Preset.prototype[name] = function(value) {
                  this._options[name] = value;
                  return this;
                };
              });
              if (definition.argOption) {
                var methodName = 'show' + name.charAt(0).toUpperCase() + name.slice(1);
                publicService[methodName] = function(arg) {
                  var config = publicService[name](arg);
                  return publicService.show(config);
                };
              }
              publicService[name] = function(arg) {
                if (arguments.length && definition.argOption && !angular.isObject(arg) && !angular.isArray(arg)) {
                  return (new Preset())[definition.argOption](arg);
                } else {
                  return new Preset(arg);
                }
              };
            });
            return publicService;
            function showInterimElement(opts) {
              if (opts && opts._options)
                opts = opts._options;
              return interimElementService.show(angular.extend({}, defaultOptions, opts));
            }
            function invokeFactory(factory, defaultVal) {
              var locals = {};
              locals[interimFactoryName] = publicService;
              return $injector.invoke(factory || function() {
                return defaultVal;
              }, {}, locals);
            }
          }
        }
        function InterimElementFactory($document, $q, $rootScope, $timeout, $rootElement, $animate, $interpolate, $mdCompiler, $mdTheming) {
          var startSymbol = $interpolate.startSymbol(),
              endSymbol = $interpolate.endSymbol(),
              usesStandardSymbols = ((startSymbol === '{{') && (endSymbol === '}}')),
              processTemplate = usesStandardSymbols ? angular.identity : replaceInterpolationSymbols;
          return function createInterimElementService() {
            var stack = [];
            var service;
            return service = {
              show: show,
              hide: hide,
              cancel: cancel
            };
            function show(options) {
              if (stack.length) {
                return service.cancel().then(function() {
                  return show(options);
                });
              } else {
                var interimElement = new InterimElement(options);
                stack.push(interimElement);
                return interimElement.show().then(function() {
                  return interimElement.deferred.promise;
                });
              }
            }
            function hide(response) {
              var interimElement = stack.shift();
              return interimElement && interimElement.remove().then(function() {
                interimElement.deferred.resolve(response);
              });
            }
            function cancel(reason) {
              var interimElement = stack.shift();
              return $q.when(interimElement && interimElement.remove().then(function() {
                interimElement.deferred.reject(reason);
              }));
            }
            function InterimElement(options) {
              var self;
              var hideTimeout,
                  element,
                  showDone,
                  removeDone;
              options = options || {};
              options = angular.extend({
                preserveScope: false,
                scope: options.scope || $rootScope.$new(options.isolateScope),
                onShow: function(scope, element, options) {
                  return $animate.enter(element, options.parent);
                },
                onRemove: function(scope, element, options) {
                  return element && $animate.leave(element) || $q.when();
                }
              }, options);
              if (options.template) {
                options.template = processTemplate(options.template);
              }
              return self = {
                options: options,
                deferred: $q.defer(),
                show: function() {
                  var compilePromise;
                  if (options.skipCompile) {
                    compilePromise = $q(function(resolve) {
                      resolve({
                        locals: {},
                        link: function() {
                          return options.element;
                        }
                      });
                    });
                  } else {
                    compilePromise = $mdCompiler.compile(options);
                  }
                  return showDone = compilePromise.then(function(compileData) {
                    angular.extend(compileData.locals, self.options);
                    element = compileData.link(options.scope);
                    if (angular.isFunction(options.parent)) {
                      options.parent = options.parent(options.scope, element, options);
                    } else if (angular.isString(options.parent)) {
                      options.parent = angular.element($document[0].querySelector(options.parent));
                    }
                    if (!(options.parent || {}).length) {
                      options.parent = $rootElement.find('body');
                      if (!options.parent.length)
                        options.parent = $rootElement;
                    }
                    if (options.themable)
                      $mdTheming(element);
                    var ret = options.onShow(options.scope, element, options);
                    return $q.when(ret).then(function() {
                      (options.onComplete || angular.noop)(options.scope, element, options);
                      startHideTimeout();
                    });
                    function startHideTimeout() {
                      if (options.hideDelay) {
                        hideTimeout = $timeout(service.cancel, options.hideDelay);
                      }
                    }
                  }, function(reason) {
                    showDone = true;
                    self.deferred.reject(reason);
                  });
                },
                cancelTimeout: function() {
                  if (hideTimeout) {
                    $timeout.cancel(hideTimeout);
                    hideTimeout = undefined;
                  }
                },
                remove: function() {
                  self.cancelTimeout();
                  return removeDone = $q.when(showDone).then(function() {
                    var ret = element ? options.onRemove(options.scope, element, options) : true;
                    return $q.when(ret).then(function() {
                      if (!options.preserveScope)
                        options.scope.$destroy();
                      removeDone = true;
                    });
                  });
                }
              };
            }
          };
          function replaceInterpolationSymbols(text) {
            if (!text || !angular.isString(text))
              return text;
            return text.replace(/\{\{/g, startSymbol).replace(/}}/g, endSymbol);
          }
        }
      }
    })();
    (function() {
      'use strict';
      angular.module('material.core').factory('$mdComponentRegistry', ComponentRegistry);
      function ComponentRegistry($log, $q) {
        var self;
        var instances = [];
        var pendings = {};
        return self = {
          notFoundError: function(handle) {
            $log.error('No instance found for handle', handle);
          },
          getInstances: function() {
            return instances;
          },
          get: function(handle) {
            if (!isValidID(handle))
              return null;
            var i,
                j,
                instance;
            for (i = 0, j = instances.length; i < j; i++) {
              instance = instances[i];
              if (instance.$$mdHandle === handle) {
                return instance;
              }
            }
            return null;
          },
          register: function(instance, handle) {
            if (!handle)
              return angular.noop;
            instance.$$mdHandle = handle;
            instances.push(instance);
            resolveWhen();
            return deregister;
            function deregister() {
              var index = instances.indexOf(instance);
              if (index !== -1) {
                instances.splice(index, 1);
              }
            }
            function resolveWhen() {
              var dfd = pendings[handle];
              if (dfd) {
                dfd.resolve(instance);
                delete pendings[handle];
              }
            }
          },
          when: function(handle) {
            if (isValidID(handle)) {
              var deferred = $q.defer();
              var instance = self.get(handle);
              if (instance) {
                deferred.resolve(instance);
              } else {
                pendings[handle] = deferred;
              }
              return deferred.promise;
            }
            return $q.reject("Invalid `md-component-id` value.");
          }
        };
        function isValidID(handle) {
          return handle && (handle !== "");
        }
      }
      ComponentRegistry.$inject = ["$log", "$q"];
    })();
    (function() {
      'use strict';
      angular.module('material.core').factory('$mdInkRipple', InkRippleService).directive('mdInkRipple', InkRippleDirective).directive('mdNoInk', attrNoDirective()).directive('mdNoBar', attrNoDirective()).directive('mdNoStretch', attrNoDirective());
      function InkRippleDirective($mdInkRipple) {
        return {
          controller: angular.noop,
          link: function(scope, element, attr) {
            if (attr.hasOwnProperty('mdInkRippleCheckbox')) {
              $mdInkRipple.attachCheckboxBehavior(scope, element);
            } else {
              $mdInkRipple.attachButtonBehavior(scope, element);
            }
          }
        };
      }
      InkRippleDirective.$inject = ["$mdInkRipple"];
      function InkRippleService($window, $timeout) {
        return {
          attachButtonBehavior: attachButtonBehavior,
          attachCheckboxBehavior: attachCheckboxBehavior,
          attachTabBehavior: attachTabBehavior,
          attach: attach
        };
        function attachButtonBehavior(scope, element, options) {
          return attach(scope, element, angular.extend({
            fullRipple: true,
            isMenuItem: element.hasClass('md-menu-item'),
            center: false,
            dimBackground: true
          }, options));
        }
        function attachCheckboxBehavior(scope, element, options) {
          return attach(scope, element, angular.extend({
            center: true,
            dimBackground: false,
            fitRipple: true
          }, options));
        }
        function attachTabBehavior(scope, element, options) {
          return attach(scope, element, angular.extend({
            center: false,
            dimBackground: true,
            outline: false,
            rippleSize: 'full'
          }, options));
        }
        function attach(scope, element, options) {
          if (element.controller('mdNoInk'))
            return angular.noop;
          options = angular.extend({
            colorElement: element,
            mousedown: true,
            hover: true,
            focus: true,
            center: false,
            mousedownPauseTime: 150,
            dimBackground: false,
            outline: false,
            fullRipple: true,
            isMenuItem: false,
            fitRipple: false
          }, options);
          var rippleSize,
              controller = element.controller('mdInkRipple') || {},
              counter = 0,
              ripples = [],
              states = [],
              isActiveExpr = element.attr('md-highlight'),
              isActive = false,
              isHeld = false,
              node = element[0],
              rippleSizeSetting = element.attr('md-ripple-size'),
              color = parseColor(element.attr('md-ink-ripple')) || parseColor($window.getComputedStyle(options.colorElement[0]).color || 'rgb(0, 0, 0)');
          switch (rippleSizeSetting) {
            case 'full':
              options.fullRipple = true;
              break;
            case 'partial':
              options.fullRipple = false;
              break;
          }
          if (options.mousedown) {
            element.on('$md.pressdown', onPressDown).on('$md.pressup', onPressUp);
          }
          controller.createRipple = createRipple;
          if (isActiveExpr) {
            scope.$watch(isActiveExpr, function watchActive(newValue) {
              isActive = newValue;
              if (isActive && !ripples.length) {
                $timeout(function() {
                  createRipple(0, 0);
                }, 0, false);
              }
              angular.forEach(ripples, updateElement);
            });
          }
          return function detach() {
            element.off('$md.pressdown', onPressDown).off('$md.pressup', onPressUp);
            getRippleContainer().remove();
          };
          function getRippleContainer() {
            var container = element.data('$mdRippleContainer');
            if (container)
              return container;
            container = angular.element('<div class="md-ripple-container">');
            element.append(container);
            element.data('$mdRippleContainer', container);
            return container;
          }
          function parseColor(color) {
            if (!color)
              return ;
            if (color.indexOf('rgba') === 0)
              return color.replace(/\d?\.?\d*\s*\)\s*$/, '0.1)');
            if (color.indexOf('rgb') === 0)
              return rgbToRGBA(color);
            if (color.indexOf('#') === 0)
              return hexToRGBA(color);
            function hexToRGBA(color) {
              var hex = color.charAt(0) === '#' ? color.substr(1) : color,
                  dig = hex.length / 3,
                  red = hex.substr(0, dig),
                  grn = hex.substr(dig, dig),
                  blu = hex.substr(dig * 2);
              if (dig === 1) {
                red += red;
                grn += grn;
                blu += blu;
              }
              return 'rgba(' + parseInt(red, 16) + ',' + parseInt(grn, 16) + ',' + parseInt(blu, 16) + ',0.1)';
            }
            function rgbToRGBA(color) {
              return color.replace(')', ', 0.1)').replace('(', 'a(');
            }
          }
          function removeElement(elem, wait) {
            ripples.splice(ripples.indexOf(elem), 1);
            if (ripples.length === 0) {
              getRippleContainer().css({backgroundColor: ''});
            }
            $timeout(function() {
              elem.remove();
            }, wait, false);
          }
          function updateElement(elem) {
            var index = ripples.indexOf(elem),
                state = states[index] || {},
                elemIsActive = ripples.length > 1 ? false : isActive,
                elemIsHeld = ripples.length > 1 ? false : isHeld;
            if (elemIsActive || state.animating || elemIsHeld) {
              elem.addClass('md-ripple-visible');
            } else if (elem) {
              elem.removeClass('md-ripple-visible');
              if (options.outline) {
                elem.css({
                  width: rippleSize + 'px',
                  height: rippleSize + 'px',
                  marginLeft: (rippleSize * -1) + 'px',
                  marginTop: (rippleSize * -1) + 'px'
                });
              }
              removeElement(elem, options.outline ? 450 : 650);
            }
          }
          function createRipple(left, top) {
            color = parseColor(element.attr('md-ink-ripple')) || parseColor($window.getComputedStyle(options.colorElement[0]).color || 'rgb(0, 0, 0)');
            var container = getRippleContainer(),
                size = getRippleSize(left, top),
                css = getRippleCss(size, left, top),
                elem = getRippleElement(css),
                index = ripples.indexOf(elem),
                state = states[index] || {};
            rippleSize = size;
            state.animating = true;
            $timeout(function() {
              if (options.dimBackground) {
                container.css({backgroundColor: color});
              }
              elem.addClass('md-ripple-placed md-ripple-scaled');
              if (options.outline) {
                elem.css({
                  borderWidth: (size * 0.5) + 'px',
                  marginLeft: (size * -0.5) + 'px',
                  marginTop: (size * -0.5) + 'px'
                });
              } else {
                elem.css({
                  left: '50%',
                  top: '50%'
                });
              }
              updateElement(elem);
              $timeout(function() {
                state.animating = false;
                updateElement(elem);
              }, (options.outline ? 450 : 225), false);
            }, 0, false);
            return elem;
            function getRippleElement(css) {
              var elem = angular.element('<div class="md-ripple" data-counter="' + counter++ + '">');
              ripples.unshift(elem);
              states.unshift({animating: true});
              container.append(elem);
              css && elem.css(css);
              return elem;
            }
            function getRippleSize(left, top) {
              var width = container.prop('offsetWidth'),
                  height = container.prop('offsetHeight'),
                  multiplier,
                  size,
                  rect;
              if (options.isMenuItem) {
                size = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
              } else if (options.outline) {
                rect = node.getBoundingClientRect();
                left -= rect.left;
                top -= rect.top;
                width = Math.max(left, width - left);
                height = Math.max(top, height - top);
                size = 2 * Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
              } else {
                multiplier = options.fullRipple ? 1.1 : 0.8;
                size = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) * multiplier;
                if (options.fitRipple) {
                  size = Math.min(height, width, size);
                }
              }
              return size;
            }
            function getRippleCss(size, left, top) {
              var rect,
                  css = {
                    backgroundColor: rgbaToRGB(color),
                    borderColor: rgbaToRGB(color),
                    width: size + 'px',
                    height: size + 'px'
                  };
              if (options.outline) {
                css.width = 0;
                css.height = 0;
              } else {
                css.marginLeft = css.marginTop = (size * -0.5) + 'px';
              }
              if (options.center) {
                css.left = css.top = '50%';
              } else {
                rect = node.getBoundingClientRect();
                css.left = Math.round((left - rect.left) / container.prop('offsetWidth') * 100) + '%';
                css.top = Math.round((top - rect.top) / container.prop('offsetHeight') * 100) + '%';
              }
              return css;
              function rgbaToRGB(color) {
                return color.replace('rgba', 'rgb').replace(/,[^\),]+\)/, ')');
              }
            }
          }
          function onPressDown(ev) {
            if (!isRippleAllowed())
              return ;
            createRipple(ev.pointer.x, ev.pointer.y);
            isHeld = true;
          }
          function onPressUp() {
            isHeld = false;
            var ripple = ripples[ripples.length - 1];
            $timeout(function() {
              updateElement(ripple);
            }, 0, false);
          }
          function isRippleAllowed() {
            var parent = node.parentNode;
            var grandparent = parent && parent.parentNode;
            var ancestor = grandparent && grandparent.parentNode;
            return !isDisabled(node) && !isDisabled(parent) && !isDisabled(grandparent) && !isDisabled(ancestor);
            function isDisabled(elem) {
              return elem && elem.hasAttribute && elem.hasAttribute('disabled');
            }
          }
        }
      }
      InkRippleService.$inject = ["$window", "$timeout"];
      function attrNoDirective() {
        return function() {
          return {controller: angular.noop};
        };
      }
    })();
    (function() {
      'use strict';
      angular.module('material.core.theming.palette', []).constant('$mdColorPalette', {
        'red': {
          '50': '#ffebee',
          '100': '#ffcdd2',
          '200': '#ef9a9a',
          '300': '#e57373',
          '400': '#ef5350',
          '500': '#f44336',
          '600': '#e53935',
          '700': '#d32f2f',
          '800': '#c62828',
          '900': '#b71c1c',
          'A100': '#ff8a80',
          'A200': '#ff5252',
          'A400': '#ff1744',
          'A700': '#d50000',
          'contrastDefaultColor': 'light',
          'contrastDarkColors': '50 100 200 300 400 A100',
          'contrastStrongLightColors': '500 600 700 A200 A400 A700'
        },
        'pink': {
          '50': '#fce4ec',
          '100': '#f8bbd0',
          '200': '#f48fb1',
          '300': '#f06292',
          '400': '#ec407a',
          '500': '#e91e63',
          '600': '#d81b60',
          '700': '#c2185b',
          '800': '#ad1457',
          '900': '#880e4f',
          'A100': '#ff80ab',
          'A200': '#ff4081',
          'A400': '#f50057',
          'A700': '#c51162',
          'contrastDefaultColor': 'light',
          'contrastDarkColors': '50 100 200 300 400 A100',
          'contrastStrongLightColors': '500 600 A200 A400 A700'
        },
        'purple': {
          '50': '#f3e5f5',
          '100': '#e1bee7',
          '200': '#ce93d8',
          '300': '#ba68c8',
          '400': '#ab47bc',
          '500': '#9c27b0',
          '600': '#8e24aa',
          '700': '#7b1fa2',
          '800': '#6a1b9a',
          '900': '#4a148c',
          'A100': '#ea80fc',
          'A200': '#e040fb',
          'A400': '#d500f9',
          'A700': '#aa00ff',
          'contrastDefaultColor': 'light',
          'contrastDarkColors': '50 100 200 A100',
          'contrastStrongLightColors': '300 400 A200 A400 A700'
        },
        'deep-purple': {
          '50': '#ede7f6',
          '100': '#d1c4e9',
          '200': '#b39ddb',
          '300': '#9575cd',
          '400': '#7e57c2',
          '500': '#673ab7',
          '600': '#5e35b1',
          '700': '#512da8',
          '800': '#4527a0',
          '900': '#311b92',
          'A100': '#b388ff',
          'A200': '#7c4dff',
          'A400': '#651fff',
          'A700': '#6200ea',
          'contrastDefaultColor': 'light',
          'contrastDarkColors': '50 100 200 A100',
          'contrastStrongLightColors': '300 400 A200'
        },
        'indigo': {
          '50': '#e8eaf6',
          '100': '#c5cae9',
          '200': '#9fa8da',
          '300': '#7986cb',
          '400': '#5c6bc0',
          '500': '#3f51b5',
          '600': '#3949ab',
          '700': '#303f9f',
          '800': '#283593',
          '900': '#1a237e',
          'A100': '#8c9eff',
          'A200': '#536dfe',
          'A400': '#3d5afe',
          'A700': '#304ffe',
          'contrastDefaultColor': 'light',
          'contrastDarkColors': '50 100 200 A100',
          'contrastStrongLightColors': '300 400 A200 A400'
        },
        'blue': {
          '50': '#e3f2fd',
          '100': '#bbdefb',
          '200': '#90caf9',
          '300': '#64b5f6',
          '400': '#42a5f5',
          '500': '#2196f3',
          '600': '#1e88e5',
          '700': '#1976d2',
          '800': '#1565c0',
          '900': '#0d47a1',
          'A100': '#82b1ff',
          'A200': '#448aff',
          'A400': '#2979ff',
          'A700': '#2962ff',
          'contrastDefaultColor': 'light',
          'contrastDarkColors': '100 200 300 400 A100',
          'contrastStrongLightColors': '500 600 700 A200 A400 A700'
        },
        'light-blue': {
          '50': '#e1f5fe',
          '100': '#b3e5fc',
          '200': '#81d4fa',
          '300': '#4fc3f7',
          '400': '#29b6f6',
          '500': '#03a9f4',
          '600': '#039be5',
          '700': '#0288d1',
          '800': '#0277bd',
          '900': '#01579b',
          'A100': '#80d8ff',
          'A200': '#40c4ff',
          'A400': '#00b0ff',
          'A700': '#0091ea',
          'contrastDefaultColor': 'dark',
          'contrastLightColors': '500 600 700 800 900 A700',
          'contrastStrongLightColors': '500 600 700 800 A700'
        },
        'cyan': {
          '50': '#e0f7fa',
          '100': '#b2ebf2',
          '200': '#80deea',
          '300': '#4dd0e1',
          '400': '#26c6da',
          '500': '#00bcd4',
          '600': '#00acc1',
          '700': '#0097a7',
          '800': '#00838f',
          '900': '#006064',
          'A100': '#84ffff',
          'A200': '#18ffff',
          'A400': '#00e5ff',
          'A700': '#00b8d4',
          'contrastDefaultColor': 'dark',
          'contrastLightColors': '500 600 700 800 900',
          'contrastStrongLightColors': '500 600 700 800'
        },
        'teal': {
          '50': '#e0f2f1',
          '100': '#b2dfdb',
          '200': '#80cbc4',
          '300': '#4db6ac',
          '400': '#26a69a',
          '500': '#009688',
          '600': '#00897b',
          '700': '#00796b',
          '800': '#00695c',
          '900': '#004d40',
          'A100': '#a7ffeb',
          'A200': '#64ffda',
          'A400': '#1de9b6',
          'A700': '#00bfa5',
          'contrastDefaultColor': 'dark',
          'contrastLightColors': '500 600 700 800 900',
          'contrastStrongLightColors': '500 600 700'
        },
        'green': {
          '50': '#e8f5e9',
          '100': '#c8e6c9',
          '200': '#a5d6a7',
          '300': '#81c784',
          '400': '#66bb6a',
          '500': '#4caf50',
          '600': '#43a047',
          '700': '#388e3c',
          '800': '#2e7d32',
          '900': '#1b5e20',
          'A100': '#b9f6ca',
          'A200': '#69f0ae',
          'A400': '#00e676',
          'A700': '#00c853',
          'contrastDefaultColor': 'dark',
          'contrastLightColors': '500 600 700 800 900',
          'contrastStrongLightColors': '500 600 700'
        },
        'light-green': {
          '50': '#f1f8e9',
          '100': '#dcedc8',
          '200': '#c5e1a5',
          '300': '#aed581',
          '400': '#9ccc65',
          '500': '#8bc34a',
          '600': '#7cb342',
          '700': '#689f38',
          '800': '#558b2f',
          '900': '#33691e',
          'A100': '#ccff90',
          'A200': '#b2ff59',
          'A400': '#76ff03',
          'A700': '#64dd17',
          'contrastDefaultColor': 'dark',
          'contrastLightColors': '800 900',
          'contrastStrongLightColors': '800 900'
        },
        'lime': {
          '50': '#f9fbe7',
          '100': '#f0f4c3',
          '200': '#e6ee9c',
          '300': '#dce775',
          '400': '#d4e157',
          '500': '#cddc39',
          '600': '#c0ca33',
          '700': '#afb42b',
          '800': '#9e9d24',
          '900': '#827717',
          'A100': '#f4ff81',
          'A200': '#eeff41',
          'A400': '#c6ff00',
          'A700': '#aeea00',
          'contrastDefaultColor': 'dark',
          'contrastLightColors': '900',
          'contrastStrongLightColors': '900'
        },
        'yellow': {
          '50': '#fffde7',
          '100': '#fff9c4',
          '200': '#fff59d',
          '300': '#fff176',
          '400': '#ffee58',
          '500': '#ffeb3b',
          '600': '#fdd835',
          '700': '#fbc02d',
          '800': '#f9a825',
          '900': '#f57f17',
          'A100': '#ffff8d',
          'A200': '#ffff00',
          'A400': '#ffea00',
          'A700': '#ffd600',
          'contrastDefaultColor': 'dark'
        },
        'amber': {
          '50': '#fff8e1',
          '100': '#ffecb3',
          '200': '#ffe082',
          '300': '#ffd54f',
          '400': '#ffca28',
          '500': '#ffc107',
          '600': '#ffb300',
          '700': '#ffa000',
          '800': '#ff8f00',
          '900': '#ff6f00',
          'A100': '#ffe57f',
          'A200': '#ffd740',
          'A400': '#ffc400',
          'A700': '#ffab00',
          'contrastDefaultColor': 'dark'
        },
        'orange': {
          '50': '#fff3e0',
          '100': '#ffe0b2',
          '200': '#ffcc80',
          '300': '#ffb74d',
          '400': '#ffa726',
          '500': '#ff9800',
          '600': '#fb8c00',
          '700': '#f57c00',
          '800': '#ef6c00',
          '900': '#e65100',
          'A100': '#ffd180',
          'A200': '#ffab40',
          'A400': '#ff9100',
          'A700': '#ff6d00',
          'contrastDefaultColor': 'dark',
          'contrastLightColors': '800 900',
          'contrastStrongLightColors': '800 900'
        },
        'deep-orange': {
          '50': '#fbe9e7',
          '100': '#ffccbc',
          '200': '#ffab91',
          '300': '#ff8a65',
          '400': '#ff7043',
          '500': '#ff5722',
          '600': '#f4511e',
          '700': '#e64a19',
          '800': '#d84315',
          '900': '#bf360c',
          'A100': '#ff9e80',
          'A200': '#ff6e40',
          'A400': '#ff3d00',
          'A700': '#dd2c00',
          'contrastDefaultColor': 'light',
          'contrastDarkColors': '50 100 200 300 400 A100 A200',
          'contrastStrongLightColors': '500 600 700 800 900 A400 A700'
        },
        'brown': {
          '50': '#efebe9',
          '100': '#d7ccc8',
          '200': '#bcaaa4',
          '300': '#a1887f',
          '400': '#8d6e63',
          '500': '#795548',
          '600': '#6d4c41',
          '700': '#5d4037',
          '800': '#4e342e',
          '900': '#3e2723',
          'A100': '#d7ccc8',
          'A200': '#bcaaa4',
          'A400': '#8d6e63',
          'A700': '#5d4037',
          'contrastDefaultColor': 'light',
          'contrastDarkColors': '50 100 200',
          'contrastStrongLightColors': '300 400'
        },
        'grey': {
          '0': '#ffffff',
          '50': '#fafafa',
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
          '1000': '#000000',
          'A100': '#ffffff',
          'A200': '#eeeeee',
          'A400': '#bdbdbd',
          'A700': '#616161',
          'contrastDefaultColor': 'dark',
          'contrastLightColors': '600 700 800 900'
        },
        'blue-grey': {
          '50': '#eceff1',
          '100': '#cfd8dc',
          '200': '#b0bec5',
          '300': '#90a4ae',
          '400': '#78909c',
          '500': '#607d8b',
          '600': '#546e7a',
          '700': '#455a64',
          '800': '#37474f',
          '900': '#263238',
          'A100': '#cfd8dc',
          'A200': '#b0bec5',
          'A400': '#78909c',
          'A700': '#455a64',
          'contrastDefaultColor': 'light',
          'contrastDarkColors': '50 100 200 300',
          'contrastStrongLightColors': '400 500'
        }
      });
    })();
    (function() {
      'use strict';
      angular.module('material.core.theming', ['material.core.theming.palette']).directive('mdTheme', ThemingDirective).directive('mdThemable', ThemableDirective).provider('$mdTheming', ThemingProvider).run(generateThemes);
      var PALETTES;
      var THEMES;
      var themingProvider;
      var generationIsDone;
      var DARK_FOREGROUND = {
        name: 'dark',
        '1': 'rgba(0,0,0,0.87)',
        '2': 'rgba(0,0,0,0.54)',
        '3': 'rgba(0,0,0,0.26)',
        '4': 'rgba(0,0,0,0.12)'
      };
      var LIGHT_FOREGROUND = {
        name: 'light',
        '1': 'rgba(255,255,255,1.0)',
        '2': 'rgba(255,255,255,0.7)',
        '3': 'rgba(255,255,255,0.3)',
        '4': 'rgba(255,255,255,0.12)'
      };
      var DARK_SHADOW = '1px 1px 0px rgba(0,0,0,0.4), -1px -1px 0px rgba(0,0,0,0.4)';
      var LIGHT_SHADOW = '';
      var DARK_CONTRAST_COLOR = colorToRgbaArray('rgba(0,0,0,0.87)');
      var LIGHT_CONTRAST_COLOR = colorToRgbaArray('rgba(255,255,255,0.87');
      var STRONG_LIGHT_CONTRAST_COLOR = colorToRgbaArray('rgb(255,255,255)');
      var THEME_COLOR_TYPES = ['primary', 'accent', 'warn', 'background'];
      var DEFAULT_COLOR_TYPE = 'primary';
      var LIGHT_DEFAULT_HUES = {'accent': {
          'default': 'A200',
          'hue-1': 'A100',
          'hue-2': 'A400',
          'hue-3': 'A700'
        }};
      var DARK_DEFAULT_HUES = {'background': {
          'default': '500',
          'hue-1': '300',
          'hue-2': '600',
          'hue-3': '800'
        }};
      THEME_COLOR_TYPES.forEach(function(colorType) {
        var defaultDefaultHues = {
          'default': '500',
          'hue-1': '300',
          'hue-2': '800',
          'hue-3': 'A100'
        };
        if (!LIGHT_DEFAULT_HUES[colorType])
          LIGHT_DEFAULT_HUES[colorType] = defaultDefaultHues;
        if (!DARK_DEFAULT_HUES[colorType])
          DARK_DEFAULT_HUES[colorType] = defaultDefaultHues;
      });
      var VALID_HUE_VALUES = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'A100', 'A200', 'A400', 'A700'];
      function ThemingProvider($mdColorPalette) {
        PALETTES = {};
        THEMES = {};
        var defaultTheme = 'default';
        var alwaysWatchTheme = false;
        angular.extend(PALETTES, $mdColorPalette);
        ThemingService.$inject = ["$rootScope", "$log"];
        return themingProvider = {
          definePalette: definePalette,
          extendPalette: extendPalette,
          theme: registerTheme,
          setDefaultTheme: function(theme) {
            defaultTheme = theme;
          },
          alwaysWatchTheme: function(alwaysWatch) {
            alwaysWatchTheme = alwaysWatch;
          },
          $get: ThemingService,
          _LIGHT_DEFAULT_HUES: LIGHT_DEFAULT_HUES,
          _DARK_DEFAULT_HUES: DARK_DEFAULT_HUES,
          _PALETTES: PALETTES,
          _THEMES: THEMES,
          _parseRules: parseRules,
          _rgba: rgba
        };
        function definePalette(name, map) {
          map = map || {};
          PALETTES[name] = checkPaletteValid(name, map);
          return themingProvider;
        }
        function extendPalette(name, map) {
          return checkPaletteValid(name, angular.extend({}, PALETTES[name] || {}, map));
        }
        function checkPaletteValid(name, map) {
          var missingColors = VALID_HUE_VALUES.filter(function(field) {
            return !map[field];
          });
          if (missingColors.length) {
            throw new Error("Missing colors %1 in palette %2!".replace('%1', missingColors.join(', ')).replace('%2', name));
          }
          return map;
        }
        function registerTheme(name, inheritFrom) {
          inheritFrom = inheritFrom || 'default';
          if (THEMES[name])
            return THEMES[name];
          var parentTheme = typeof inheritFrom === 'string' ? THEMES[inheritFrom] : inheritFrom;
          var theme = new Theme(name);
          if (parentTheme) {
            angular.forEach(parentTheme.colors, function(color, colorType) {
              theme.colors[colorType] = {
                name: color.name,
                hues: angular.extend({}, color.hues)
              };
            });
          }
          THEMES[name] = theme;
          return theme;
        }
        function Theme(name) {
          var self = this;
          self.name = name;
          self.colors = {};
          self.dark = setDark;
          setDark(false);
          function setDark(isDark) {
            isDark = arguments.length === 0 ? true : !!isDark;
            if (isDark === self.isDark)
              return ;
            self.isDark = isDark;
            self.foregroundPalette = self.isDark ? LIGHT_FOREGROUND : DARK_FOREGROUND;
            self.foregroundShadow = self.isDark ? DARK_SHADOW : LIGHT_SHADOW;
            var newDefaultHues = self.isDark ? DARK_DEFAULT_HUES : LIGHT_DEFAULT_HUES;
            var oldDefaultHues = self.isDark ? LIGHT_DEFAULT_HUES : DARK_DEFAULT_HUES;
            angular.forEach(newDefaultHues, function(newDefaults, colorType) {
              var color = self.colors[colorType];
              var oldDefaults = oldDefaultHues[colorType];
              if (color) {
                for (var hueName in color.hues) {
                  if (color.hues[hueName] === oldDefaults[hueName]) {
                    color.hues[hueName] = newDefaults[hueName];
                  }
                }
              }
            });
            return self;
          }
          THEME_COLOR_TYPES.forEach(function(colorType) {
            var defaultHues = (self.isDark ? DARK_DEFAULT_HUES : LIGHT_DEFAULT_HUES)[colorType];
            self[colorType + 'Palette'] = function setPaletteType(paletteName, hues) {
              var color = self.colors[colorType] = {
                name: paletteName,
                hues: angular.extend({}, defaultHues, hues)
              };
              Object.keys(color.hues).forEach(function(name) {
                if (!defaultHues[name]) {
                  throw new Error("Invalid hue name '%1' in theme %2's %3 color %4. Available hue names: %4".replace('%1', name).replace('%2', self.name).replace('%3', paletteName).replace('%4', Object.keys(defaultHues).join(', ')));
                }
              });
              Object.keys(color.hues).map(function(key) {
                return color.hues[key];
              }).forEach(function(hueValue) {
                if (VALID_HUE_VALUES.indexOf(hueValue) == -1) {
                  throw new Error("Invalid hue value '%1' in theme %2's %3 color %4. Available hue values: %5".replace('%1', hueValue).replace('%2', self.name).replace('%3', colorType).replace('%4', paletteName).replace('%5', VALID_HUE_VALUES.join(', ')));
                }
              });
              return self;
            };
            self[colorType + 'Color'] = function() {
              var args = Array.prototype.slice.call(arguments);
              console.warn('$mdThemingProviderTheme.' + colorType + 'Color() has been deprecated. ' + 'Use $mdThemingProviderTheme.' + colorType + 'Palette() instead.');
              return self[colorType + 'Palette'].apply(self, args);
            };
          });
        }
        function ThemingService($rootScope, $log) {
          applyTheme.inherit = function(el, parent) {
            var ctrl = parent.controller('mdTheme');
            var attrThemeValue = el.attr('md-theme-watch');
            if ((alwaysWatchTheme || angular.isDefined(attrThemeValue)) && attrThemeValue != 'false') {
              var deregisterWatch = $rootScope.$watch(function() {
                return ctrl && ctrl.$mdTheme || defaultTheme;
              }, changeTheme);
              el.on('$destroy', deregisterWatch);
            } else {
              var theme = ctrl && ctrl.$mdTheme || defaultTheme;
              changeTheme(theme);
            }
            function changeTheme(theme) {
              if (!registered(theme)) {
                $log.warn('Attempted to use unregistered theme \'' + theme + '\'. ' + 'Register it with $mdThemingProvider.theme().');
              }
              var oldTheme = el.data('$mdThemeName');
              if (oldTheme)
                el.removeClass('md-' + oldTheme + '-theme');
              el.addClass('md-' + theme + '-theme');
              el.data('$mdThemeName', theme);
            }
          };
          applyTheme.registered = registered;
          applyTheme.defaultTheme = function() {
            return defaultTheme;
          };
          return applyTheme;
          function registered(theme) {
            if (theme === undefined || theme === '')
              return true;
            return THEMES[theme] !== undefined;
          }
          function applyTheme(scope, el) {
            if (el === undefined) {
              el = scope;
              scope = undefined;
            }
            if (scope === undefined) {
              scope = $rootScope;
            }
            applyTheme.inherit(el, el);
          }
        }
      }
      ThemingProvider.$inject = ["$mdColorPalette"];
      function ThemingDirective($mdTheming, $interpolate, $log) {
        return {
          priority: 100,
          link: {pre: function(scope, el, attrs) {
              var ctrl = {$setTheme: function(theme) {
                  if (!$mdTheming.registered(theme)) {
                    $log.warn('attempted to use unregistered theme \'' + theme + '\'');
                  }
                  ctrl.$mdTheme = theme;
                }};
              el.data('$mdThemeController', ctrl);
              ctrl.$setTheme($interpolate(attrs.mdTheme)(scope));
              attrs.$observe('mdTheme', ctrl.$setTheme);
            }}
        };
      }
      ThemingDirective.$inject = ["$mdTheming", "$interpolate", "$log"];
      function ThemableDirective($mdTheming) {
        return $mdTheming;
      }
      ThemableDirective.$inject = ["$mdTheming"];
      function parseRules(theme, colorType, rules) {
        checkValidPalette(theme, colorType);
        rules = rules.replace(/THEME_NAME/g, theme.name);
        var generatedRules = [];
        var color = theme.colors[colorType];
        var themeNameRegex = new RegExp('.md-' + theme.name + '-theme', 'g');
        var hueRegex = new RegExp('(\'|")?{{\\s*(' + colorType + ')-(color|contrast)-?(\\d\\.?\\d*)?\\s*}}(\"|\')?', 'g');
        var simpleVariableRegex = /'?"?\{\{\s*([a-zA-Z]+)-(A?\d+|hue\-[0-3]|shadow)-?(\d\.?\d*)?\s*\}\}'?"?/g;
        var palette = PALETTES[color.name];
        rules = rules.replace(simpleVariableRegex, function(match, colorType, hue, opacity) {
          if (colorType === 'foreground') {
            if (hue == 'shadow') {
              return theme.foregroundShadow;
            } else {
              return theme.foregroundPalette[hue] || theme.foregroundPalette['1'];
            }
          }
          if (hue.indexOf('hue') === 0) {
            hue = theme.colors[colorType].hues[hue];
          }
          return rgba((PALETTES[theme.colors[colorType].name][hue] || '').value, opacity);
        });
        angular.forEach(color.hues, function(hueValue, hueName) {
          var newRule = rules.replace(hueRegex, function(match, _, colorType, hueType, opacity) {
            return rgba(palette[hueValue][hueType === 'color' ? 'value' : 'contrast'], opacity);
          });
          if (hueName !== 'default') {
            newRule = newRule.replace(themeNameRegex, '.md-' + theme.name + '-theme.md-' + hueName);
          }
          generatedRules.push(newRule);
        });
        return generatedRules.join('');
      }
      function generateThemes($injector) {
        var themeCss = $injector.has('$MD_THEME_CSS') ? $injector.get('$MD_THEME_CSS') : '';
        angular.forEach(PALETTES, sanitizePalette);
        var rules = themeCss.split(/\}(?!(\}|'|"|;))/).filter(function(rule) {
          return rule && rule.length;
        }).map(function(rule) {
          return rule.trim() + '}';
        });
        var rulesByType = {};
        THEME_COLOR_TYPES.forEach(function(type) {
          rulesByType[type] = '';
        });
        var ruleMatchRegex = new RegExp('md-(' + THEME_COLOR_TYPES.join('|') + ')', 'g');
        rules.forEach(function(rule) {
          var match = rule.match(ruleMatchRegex);
          for (var i = 0,
              type; type = THEME_COLOR_TYPES[i]; i++) {
            if (rule.indexOf('.md-' + type) > -1) {
              return rulesByType[type] += rule;
            }
          }
          for (i = 0; type = THEME_COLOR_TYPES[i]; i++) {
            if (rule.indexOf(type) > -1) {
              return rulesByType[type] += rule;
            }
          }
          return rulesByType[DEFAULT_COLOR_TYPE] += rule;
        });
        var styleString = '';
        angular.forEach(THEMES, function(theme) {
          THEME_COLOR_TYPES.forEach(function(colorType) {
            styleString += parseRules(theme, colorType, rulesByType[colorType] + '');
          });
          if (theme.colors.primary.name == theme.colors.accent.name) {
            console.warn("$mdThemingProvider: Using the same palette for primary and" + " accent. This violates the material design spec.");
          }
        });
        if (!generationIsDone) {
          var style = document.createElement('style');
          style.innerHTML = styleString;
          var head = document.getElementsByTagName('head')[0];
          head.insertBefore(style, head.firstElementChild);
          generationIsDone = true;
        }
        function sanitizePalette(palette) {
          var defaultContrast = palette.contrastDefaultColor;
          var lightColors = palette.contrastLightColors || [];
          var strongLightColors = palette.contrastStrongLightColors || [];
          var darkColors = palette.contrastDarkColors || [];
          if (typeof lightColors === 'string')
            lightColors = lightColors.split(' ');
          if (typeof strongLightColors === 'string')
            strongLightColors = strongLightColors.split(' ');
          if (typeof darkColors === 'string')
            darkColors = darkColors.split(' ');
          delete palette.contrastDefaultColor;
          delete palette.contrastLightColors;
          delete palette.contrastStrongLightColors;
          delete palette.contrastDarkColors;
          angular.forEach(palette, function(hueValue, hueName) {
            if (angular.isObject(hueValue))
              return ;
            var rgbValue = colorToRgbaArray(hueValue);
            if (!rgbValue) {
              throw new Error("Color %1, in palette %2's hue %3, is invalid. Hex or rgb(a) color expected.".replace('%1', hueValue).replace('%2', palette.name).replace('%3', hueName));
            }
            palette[hueName] = {
              value: rgbValue,
              contrast: getContrastColor()
            };
            function getContrastColor() {
              if (defaultContrast === 'light') {
                if (darkColors.indexOf(hueName) > -1) {
                  return DARK_CONTRAST_COLOR;
                } else {
                  return strongLightColors.indexOf(hueName) > -1 ? STRONG_LIGHT_CONTRAST_COLOR : LIGHT_CONTRAST_COLOR;
                }
              } else {
                if (lightColors.indexOf(hueName) > -1) {
                  return strongLightColors.indexOf(hueName) > -1 ? STRONG_LIGHT_CONTRAST_COLOR : LIGHT_CONTRAST_COLOR;
                } else {
                  return DARK_CONTRAST_COLOR;
                }
              }
            }
          });
        }
      }
      generateThemes.$inject = ["$injector"];
      function checkValidPalette(theme, colorType) {
        if (!PALETTES[(theme.colors[colorType] || {}).name]) {
          throw new Error("You supplied an invalid color palette for theme %1's %2 palette. Available palettes: %3".replace('%1', theme.name).replace('%2', colorType).replace('%3', Object.keys(PALETTES).join(', ')));
        }
      }
      function colorToRgbaArray(clr) {
        if (angular.isArray(clr) && clr.length == 3)
          return clr;
        if (/^rgb/.test(clr)) {
          return clr.replace(/(^\s*rgba?\(|\)\s*$)/g, '').split(',').map(function(value, i) {
            return i == 3 ? parseFloat(value, 10) : parseInt(value, 10);
          });
        }
        if (clr.charAt(0) == '#')
          clr = clr.substring(1);
        if (!/^([a-fA-F0-9]{3}){1,2}$/g.test(clr))
          return ;
        var dig = clr.length / 3;
        var red = clr.substr(0, dig);
        var grn = clr.substr(dig, dig);
        var blu = clr.substr(dig * 2);
        if (dig === 1) {
          red += red;
          grn += grn;
          blu += blu;
        }
        return [parseInt(red, 16), parseInt(grn, 16), parseInt(blu, 16)];
      }
      function rgba(rgbArray, opacity) {
        if (rgbArray.length == 4) {
          rgbArray = angular.copy(rgbArray);
          opacity ? rgbArray.pop() : opacity = rgbArray.pop();
        }
        return opacity && (typeof opacity == 'number' || (typeof opacity == 'string' && opacity.length)) ? 'rgba(' + rgbArray.join(',') + ',' + opacity + ')' : 'rgb(' + rgbArray.join(',') + ')';
      }
    })();
    (function() {
      'use strict';
      angular.module('material.components.autocomplete', ['material.core', 'material.components.icon']);
    })();
    (function() {
      'use strict';
      angular.module('material.components.backdrop', ['material.core']).directive('mdBackdrop', BackdropDirective);
      function BackdropDirective($mdTheming) {
        return $mdTheming;
      }
      BackdropDirective.$inject = ["$mdTheming"];
    })();
    (function() {
      'use strict';
      angular.module('material.components.bottomSheet', ['material.core', 'material.components.backdrop']).directive('mdBottomSheet', MdBottomSheetDirective).provider('$mdBottomSheet', MdBottomSheetProvider);
      function MdBottomSheetDirective() {
        return {restrict: 'E'};
      }
      function MdBottomSheetProvider($$interimElementProvider) {
        var CLOSING_VELOCITY = 0.5;
        var PADDING = 80;
        bottomSheetDefaults.$inject = ["$animate", "$mdConstant", "$timeout", "$$rAF", "$compile", "$mdTheming", "$mdBottomSheet", "$rootElement", "$rootScope", "$mdGesture"];
        return $$interimElementProvider('$mdBottomSheet').setDefaults({
          methods: ['disableParentScroll', 'escapeToClose', 'targetEvent'],
          options: bottomSheetDefaults
        });
        function bottomSheetDefaults($animate, $mdConstant, $timeout, $$rAF, $compile, $mdTheming, $mdBottomSheet, $rootElement, $rootScope, $mdGesture) {
          var backdrop;
          return {
            themable: true,
            targetEvent: null,
            onShow: onShow,
            onRemove: onRemove,
            escapeToClose: true,
            disableParentScroll: true
          };
          function onShow(scope, element, options) {
            backdrop = $compile('<md-backdrop class="md-opaque md-bottom-sheet-backdrop">')(scope);
            backdrop.on('click', function() {
              $timeout($mdBottomSheet.cancel);
            });
            $mdTheming.inherit(backdrop, options.parent);
            $animate.enter(backdrop, options.parent, null);
            var bottomSheet = new BottomSheet(element, options.parent);
            options.bottomSheet = bottomSheet;
            options.targetEvent && angular.element(options.targetEvent.target).blur();
            $mdTheming.inherit(bottomSheet.element, options.parent);
            if (options.disableParentScroll) {
              options.lastOverflow = options.parent.css('overflow');
              options.parent.css('overflow', 'hidden');
            }
            return $animate.enter(bottomSheet.element, options.parent).then(function() {
              var focusable = angular.element(element[0].querySelector('button') || element[0].querySelector('a') || element[0].querySelector('[ng-click]'));
              focusable.focus();
              if (options.escapeToClose) {
                options.rootElementKeyupCallback = function(e) {
                  if (e.keyCode === $mdConstant.KEY_CODE.ESCAPE) {
                    $timeout($mdBottomSheet.cancel);
                  }
                };
                $rootElement.on('keyup', options.rootElementKeyupCallback);
              }
            });
          }
          function onRemove(scope, element, options) {
            var bottomSheet = options.bottomSheet;
            $animate.leave(backdrop);
            return $animate.leave(bottomSheet.element).then(function() {
              if (options.disableParentScroll) {
                options.parent.css('overflow', options.lastOverflow);
                delete options.lastOverflow;
              }
              bottomSheet.cleanup();
              options.targetEvent && angular.element(options.targetEvent.target).focus();
            });
          }
          function BottomSheet(element, parent) {
            var deregister = $mdGesture.register(parent, 'drag', {horizontal: false});
            parent.on('$md.dragstart', onDragStart).on('$md.drag', onDrag).on('$md.dragend', onDragEnd);
            return {
              element: element,
              cleanup: function cleanup() {
                deregister();
                parent.off('$md.dragstart', onDragStart).off('$md.drag', onDrag).off('$md.dragend', onDragEnd);
              }
            };
            function onDragStart(ev) {
              element.css($mdConstant.CSS.TRANSITION_DURATION, '0ms');
            }
            function onDrag(ev) {
              var transform = ev.pointer.distanceY;
              if (transform < 5) {
                transform = Math.max(-PADDING, transform / 2);
              }
              element.css($mdConstant.CSS.TRANSFORM, 'translate3d(0,' + (PADDING + transform) + 'px,0)');
            }
            function onDragEnd(ev) {
              if (ev.pointer.distanceY > 0 && (ev.pointer.distanceY > 20 || Math.abs(ev.pointer.velocityY) > CLOSING_VELOCITY)) {
                var distanceRemaining = element.prop('offsetHeight') - ev.pointer.distanceY;
                var transitionDuration = Math.min(distanceRemaining / ev.pointer.velocityY * 0.75, 500);
                element.css($mdConstant.CSS.TRANSITION_DURATION, transitionDuration + 'ms');
                $timeout($mdBottomSheet.cancel);
              } else {
                element.css($mdConstant.CSS.TRANSITION_DURATION, '');
                element.css($mdConstant.CSS.TRANSFORM, '');
              }
            }
          }
        }
      }
      MdBottomSheetProvider.$inject = ["$$interimElementProvider"];
    })();
    (function() {
      'use strict';
      angular.module('material.components.button', ['material.core']).directive('mdButton', MdButtonDirective);
      function MdButtonDirective($mdInkRipple, $mdTheming, $mdAria) {
        return {
          restrict: 'EA',
          replace: true,
          transclude: true,
          template: getTemplate,
          link: postLink
        };
        function isAnchor(attr) {
          return angular.isDefined(attr.href) || angular.isDefined(attr.ngHref);
        }
        function getTemplate(element, attr) {
          return isAnchor(attr) ? '<a class="md-button" ng-transclude></a>' : '<button class="md-button" ng-transclude></button>';
        }
        function postLink(scope, element, attr) {
          var node = element[0];
          $mdTheming(element);
          $mdInkRipple.attachButtonBehavior(scope, element);
          var elementHasText = node.textContent.trim();
          if (!elementHasText) {
            $mdAria.expect(element, 'aria-label');
          }
          if (isAnchor(attr) && angular.isDefined(attr.ngDisabled)) {
            scope.$watch(attr.ngDisabled, function(isDisabled) {
              element.attr('tabindex', isDisabled ? -1 : 0);
            });
          }
        }
      }
      MdButtonDirective.$inject = ["$mdInkRipple", "$mdTheming", "$mdAria"];
    })();
    (function() {
      'use strict';
      angular.module('material.components.card', ['material.core']).directive('mdCard', mdCardDirective);
      function mdCardDirective($mdTheming) {
        return {
          restrict: 'E',
          link: function($scope, $element, $attr) {
            $mdTheming($element);
          }
        };
      }
      mdCardDirective.$inject = ["$mdTheming"];
    })();
    (function() {
      'use strict';
      angular.module('material.components.checkbox', ['material.core']).directive('mdCheckbox', MdCheckboxDirective);
      function MdCheckboxDirective(inputDirective, $mdInkRipple, $mdAria, $mdConstant, $mdTheming, $mdUtil) {
        inputDirective = inputDirective[0];
        var CHECKED_CSS = 'md-checked';
        return {
          restrict: 'E',
          transclude: true,
          require: '?ngModel',
          template: '<div class="md-container" md-ink-ripple md-ink-ripple-checkbox>' + '<div class="md-icon"></div>' + '</div>' + '<div ng-transclude class="md-label"></div>',
          compile: compile
        };
        function compile(tElement, tAttrs) {
          tAttrs.type = 'checkbox';
          tAttrs.tabIndex = 0;
          tElement.attr('role', tAttrs.type);
          return function postLink(scope, element, attr, ngModelCtrl) {
            ngModelCtrl = ngModelCtrl || $mdUtil.fakeNgModel();
            var checked = false;
            $mdTheming(element);
            if (attr.ngChecked) {
              scope.$watch(scope.$eval.bind(scope, attr.ngChecked), ngModelCtrl.$setViewValue.bind(ngModelCtrl));
            }
            $mdAria.expectWithText(element, 'aria-label');
            inputDirective.link.pre(scope, {
              on: angular.noop,
              0: {}
            }, attr, [ngModelCtrl]);
            element.on('click', listener).on('keypress', keypressHandler);
            ngModelCtrl.$render = render;
            function keypressHandler(ev) {
              if (ev.which === $mdConstant.KEY_CODE.SPACE) {
                ev.preventDefault();
                listener(ev);
              }
            }
            function listener(ev) {
              if (element[0].hasAttribute('disabled'))
                return ;
              scope.$apply(function() {
                checked = !checked;
                ngModelCtrl.$setViewValue(checked, ev && ev.type);
                ngModelCtrl.$render();
              });
            }
            function render() {
              checked = ngModelCtrl.$viewValue;
              if (checked) {
                element.addClass(CHECKED_CSS);
              } else {
                element.removeClass(CHECKED_CSS);
              }
            }
          };
        }
      }
      MdCheckboxDirective.$inject = ["inputDirective", "$mdInkRipple", "$mdAria", "$mdConstant", "$mdTheming", "$mdUtil"];
    })();
    (function() {
      'use strict';
      angular.module('material.components.content', ['material.core']).directive('mdContent', mdContentDirective);
      function mdContentDirective($mdTheming) {
        return {
          restrict: 'E',
          controller: ['$scope', '$element', ContentController],
          link: function(scope, element, attr) {
            var node = element[0];
            $mdTheming(element);
            scope.$broadcast('$mdContentLoaded', element);
            iosScrollFix(element[0]);
          }
        };
        function ContentController($scope, $element) {
          this.$scope = $scope;
          this.$element = $element;
        }
      }
      mdContentDirective.$inject = ["$mdTheming"];
      function iosScrollFix(node) {
        angular.element(node).on('$md.pressdown', function(ev) {
          if (ev.pointer.type !== 't')
            return ;
          if (ev.$materialScrollFixed)
            return ;
          ev.$materialScrollFixed = true;
          if (node.scrollTop === 0) {
            node.scrollTop = 1;
          } else if (node.scrollHeight === node.scrollTop + node.offsetHeight) {
            node.scrollTop -= 1;
          }
        });
      }
    })();
    (function() {
      'use strict';
      angular.module('material.components.dialog', ['material.core', 'material.components.backdrop']).directive('mdDialog', MdDialogDirective).provider('$mdDialog', MdDialogProvider);
      function MdDialogDirective($$rAF, $mdTheming) {
        return {
          restrict: 'E',
          link: function(scope, element, attr) {
            $mdTheming(element);
            $$rAF(function() {
              var content = element[0].querySelector('md-content');
              if (content && content.scrollHeight > content.clientHeight) {
                element.addClass('md-content-overflow');
              }
            });
          }
        };
      }
      MdDialogDirective.$inject = ["$$rAF", "$mdTheming"];
      function MdDialogProvider($$interimElementProvider) {
        var alertDialogMethods = ['title', 'content', 'ariaLabel', 'ok'];
        advancedDialogOptions.$inject = ["$mdDialog", "$mdTheming"];
        dialogDefaultOptions.$inject = ["$timeout", "$rootElement", "$compile", "$animate", "$mdAria", "$document", "$mdUtil", "$mdConstant", "$mdTheming", "$$rAF", "$q", "$mdDialog"];
        return $$interimElementProvider('$mdDialog').setDefaults({
          methods: ['disableParentScroll', 'hasBackdrop', 'clickOutsideToClose', 'escapeToClose', 'targetEvent'],
          options: dialogDefaultOptions
        }).addPreset('alert', {
          methods: ['title', 'content', 'ariaLabel', 'ok', 'theme'],
          options: advancedDialogOptions
        }).addPreset('confirm', {
          methods: ['title', 'content', 'ariaLabel', 'ok', 'cancel', 'theme'],
          options: advancedDialogOptions
        });
        function advancedDialogOptions($mdDialog, $mdTheming) {
          return {
            template: ['<md-dialog md-theme="{{ dialog.theme }}" aria-label="{{ dialog.ariaLabel }}">', '<md-content>', '<h2>{{ dialog.title }}</h2>', '<p>{{ dialog.content }}</p>', '</md-content>', '<div class="md-actions">', '<md-button ng-if="dialog.$type == \'confirm\'" ng-click="dialog.abort()">', '{{ dialog.cancel }}', '</md-button>', '<md-button ng-click="dialog.hide()" class="md-primary">', '{{ dialog.ok }}', '</md-button>', '</div>', '</md-dialog>'].join(''),
            controller: function mdDialogCtrl() {
              this.hide = function() {
                $mdDialog.hide(true);
              };
              this.abort = function() {
                $mdDialog.cancel();
              };
            },
            controllerAs: 'dialog',
            bindToController: true,
            theme: $mdTheming.defaultTheme()
          };
        }
        function dialogDefaultOptions($timeout, $rootElement, $compile, $animate, $mdAria, $document, $mdUtil, $mdConstant, $mdTheming, $$rAF, $q, $mdDialog) {
          return {
            hasBackdrop: true,
            isolateScope: true,
            onShow: onShow,
            onRemove: onRemove,
            clickOutsideToClose: true,
            escapeToClose: true,
            targetEvent: null,
            disableParentScroll: true,
            transformTemplate: function(template) {
              return '<div class="md-dialog-container">' + template + '</div>';
            }
          };
          function onShow(scope, element, options) {
            options.parent = angular.element(options.parent);
            options.popInTarget = angular.element((options.targetEvent || {}).target);
            var closeButton = findCloseButton();
            configureAria(element.find('md-dialog'));
            if (options.hasBackdrop) {
              var computeFrom = (options.parent[0] == $document[0].body && $document[0].documentElement && $document[0].scrollTop) ? angular.element($document[0].documentElement) : options.parent;
              var parentOffset = computeFrom.prop('scrollTop');
              options.backdrop = angular.element('<md-backdrop class="md-dialog-backdrop md-opaque">');
              $mdTheming.inherit(options.backdrop, options.parent);
              $animate.enter(options.backdrop, options.parent);
              element.css('top', parentOffset + 'px');
            }
            if (options.disableParentScroll) {
              options.lastOverflow = options.parent.css('overflow');
              options.parent.css('overflow', 'hidden');
            }
            return dialogPopIn(element, options.parent, options.popInTarget && options.popInTarget.length && options.popInTarget).then(function() {
              if (options.escapeToClose) {
                options.rootElementKeyupCallback = function(e) {
                  if (e.keyCode === $mdConstant.KEY_CODE.ESCAPE) {
                    $timeout($mdDialog.cancel);
                  }
                };
                $rootElement.on('keyup', options.rootElementKeyupCallback);
              }
              if (options.clickOutsideToClose) {
                options.dialogClickOutsideCallback = function(ev) {
                  if (ev.target === element[0]) {
                    $timeout($mdDialog.cancel);
                  }
                };
                element.on('click', options.dialogClickOutsideCallback);
              }
              closeButton.focus();
            });
            function findCloseButton() {
              var closeButton = element[0].querySelector('.dialog-close');
              if (!closeButton) {
                var actionButtons = element[0].querySelectorAll('.md-actions button');
                closeButton = actionButtons[actionButtons.length - 1];
              }
              return angular.element(closeButton);
            }
          }
          function onRemove(scope, element, options) {
            if (options.backdrop) {
              $animate.leave(options.backdrop);
            }
            if (options.disableParentScroll) {
              options.parent.css('overflow', options.lastOverflow);
              delete options.lastOverflow;
            }
            if (options.escapeToClose) {
              $rootElement.off('keyup', options.rootElementKeyupCallback);
            }
            if (options.clickOutsideToClose) {
              element.off('click', options.dialogClickOutsideCallback);
            }
            return dialogPopOut(element, options.parent, options.popInTarget && options.popInTarget.length && options.popInTarget).then(function() {
              options.scope.$destroy();
              element.remove();
              options.popInTarget && options.popInTarget.focus();
            });
          }
          function configureAria(element) {
            element.attr({'role': 'dialog'});
            var dialogContent = element.find('md-content');
            if (dialogContent.length === 0) {
              dialogContent = element;
            }
            $mdAria.expectAsync(element, 'aria-label', function() {
              var words = dialogContent.text().split(/\s+/);
              if (words.length > 3)
                words = words.slice(0, 3).concat('...');
              return words.join(' ');
            });
          }
          function dialogPopIn(container, parentElement, clickElement) {
            var dialogEl = container.find('md-dialog');
            parentElement.append(container);
            transformToClickElement(dialogEl, clickElement);
            $$rAF(function() {
              dialogEl.addClass('transition-in').css($mdConstant.CSS.TRANSFORM, '');
            });
            return $mdUtil.transitionEndPromise(dialogEl);
          }
          function dialogPopOut(container, parentElement, clickElement) {
            var dialogEl = container.find('md-dialog');
            dialogEl.addClass('transition-out').removeClass('transition-in');
            transformToClickElement(dialogEl, clickElement);
            return $mdUtil.transitionEndPromise(dialogEl);
          }
          function transformToClickElement(dialogEl, clickElement) {
            if (clickElement) {
              var clickRect = clickElement[0].getBoundingClientRect();
              var dialogRect = dialogEl[0].getBoundingClientRect();
              var scaleX = Math.min(0.5, clickRect.width / dialogRect.width);
              var scaleY = Math.min(0.5, clickRect.height / dialogRect.height);
              dialogEl.css($mdConstant.CSS.TRANSFORM, 'translate3d(' + (-dialogRect.left + clickRect.left + clickRect.width / 2 - dialogRect.width / 2) + 'px,' + (-dialogRect.top + clickRect.top + clickRect.height / 2 - dialogRect.height / 2) + 'px,' + '0) scale(' + scaleX + ',' + scaleY + ')');
            }
          }
          function dialogTransitionEnd(dialogEl) {
            var deferred = $q.defer();
            dialogEl.on($mdConstant.CSS.TRANSITIONEND, finished);
            function finished(ev) {
              if (ev.target === dialogEl[0]) {
                dialogEl.off($mdConstant.CSS.TRANSITIONEND, finished);
                deferred.resolve();
              }
            }
            return deferred.promise;
          }
        }
      }
      MdDialogProvider.$inject = ["$$interimElementProvider"];
    })();
    (function() {
      'use strict';
      angular.module('material.components.divider', ['material.core']).directive('mdDivider', MdDividerDirective);
      function MdDividerController() {}
      function MdDividerDirective($mdTheming) {
        return {
          restrict: 'E',
          link: $mdTheming,
          controller: [MdDividerController]
        };
      }
      MdDividerDirective.$inject = ["$mdTheming"];
    })();
    (function() {
      'use strict';
      angular.module('material.components.gridList', ['material.core']).directive('mdGridList', GridListDirective).directive('mdGridTile', GridTileDirective).directive('mdGridTileFooter', GridTileCaptionDirective).directive('mdGridTileHeader', GridTileCaptionDirective).factory('$mdGridLayout', GridLayoutFactory);
      function GridListDirective($interpolate, $mdConstant, $mdGridLayout, $mdMedia, $mdUtil) {
        return {
          restrict: 'E',
          controller: GridListController,
          scope: {mdOnLayout: '&'},
          link: postLink
        };
        function postLink(scope, element, attrs, ctrl) {
          element.attr('role', 'list');
          ctrl.layoutDelegate = layoutDelegate;
          var invalidateLayout = angular.bind(ctrl, ctrl.invalidateLayout),
              unwatchAttrs = watchMedia();
          scope.$on('$destroy', unwatchMedia);
          function watchMedia() {
            for (var mediaName in $mdConstant.MEDIA) {
              $mdMedia(mediaName);
              $mdMedia.getQuery($mdConstant.MEDIA[mediaName]).addListener(invalidateLayout);
            }
            return $mdMedia.watchResponsiveAttributes(['md-cols', 'md-row-height'], attrs, layoutIfMediaMatch);
            ;
          }
          function unwatchMedia() {
            unwatchAttrs();
            for (var mediaName in $mdConstant.MEDIA) {
              $mdMedia.getQuery($mdConstant.MEDIA[mediaName]).removeListener(invalidateLayout);
            }
          }
          function layoutIfMediaMatch(mediaName) {
            if (mediaName == null) {
              ctrl.invalidateLayout();
            } else if ($mdMedia(mediaName)) {
              ctrl.invalidateLayout();
            }
          }
          function layoutDelegate() {
            var tiles = getTileElements(),
                colCount = getColumnCount(),
                rowMode = getRowMode(),
                rowHeight = getRowHeight(),
                gutter = getGutter(),
                performance = $mdGridLayout(colCount, getTileSpans(), getTileElements()).map(function(tilePositions, rowCount) {
                  return {
                    grid: {
                      element: element,
                      style: getGridStyle(colCount, rowCount, gutter, rowMode, rowHeight)
                    },
                    tiles: tilePositions.map(function(ps, i) {
                      return {
                        element: angular.element(tiles[i]),
                        style: getTileStyle(ps.position, ps.spans, colCount, rowCount, gutter, rowMode, rowHeight)
                      };
                    })
                  };
                }).reflow().performance();
            scope.mdOnLayout({$event: {performance: performance}});
          }
          var UNIT = $interpolate("{{ share }}% - ({{ gutter }} * {{ gutterShare }})");
          var POSITION = $interpolate("calc(({{ unit }}) * {{ offset }} + {{ offset }} * {{ gutter }})");
          var DIMENSION = $interpolate("calc(({{ unit }}) * {{ span }} + ({{ span }} - 1) * {{ gutter }})");
          function getTileStyle(position, spans, colCount, rowCount, gutter, rowMode, rowHeight) {
            var hShare = (1 / colCount) * 100,
                hGutterShare = colCount === 1 ? 0 : (colCount - 1) / colCount,
                hUnit = UNIT({
                  share: hShare,
                  gutterShare: hGutterShare,
                  gutter: gutter
                });
            var style = {
              left: POSITION({
                unit: hUnit,
                offset: position.col,
                gutter: gutter
              }),
              width: DIMENSION({
                unit: hUnit,
                span: spans.col,
                gutter: gutter
              }),
              paddingTop: '',
              marginTop: '',
              top: '',
              height: ''
            };
            switch (rowMode) {
              case 'fixed':
                style.top = POSITION({
                  unit: rowHeight,
                  offset: position.row,
                  gutter: gutter
                });
                style.height = DIMENSION({
                  unit: rowHeight,
                  span: spans.row,
                  gutter: gutter
                });
                break;
              case 'ratio':
                var vShare = hShare * (1 / rowHeight),
                    vUnit = UNIT({
                      share: vShare,
                      gutterShare: hGutterShare,
                      gutter: gutter
                    });
                style.paddingTop = DIMENSION({
                  unit: vUnit,
                  span: spans.row,
                  gutter: gutter
                });
                style.marginTop = POSITION({
                  unit: vUnit,
                  offset: position.row,
                  gutter: gutter
                });
                break;
              case 'fit':
                var vGutterShare = rowCount === 1 ? 0 : (rowCount - 1) / rowCount,
                    vShare = (1 / rowCount) * 100,
                    vUnit = UNIT({
                      share: vShare,
                      gutterShare: vGutterShare,
                      gutter: gutter
                    });
                style.top = POSITION({
                  unit: vUnit,
                  offset: position.row,
                  gutter: gutter
                });
                style.height = DIMENSION({
                  unit: vUnit,
                  span: spans.row,
                  gutter: gutter
                });
                break;
            }
            return style;
          }
          function getGridStyle(colCount, rowCount, gutter, rowMode, rowHeight) {
            var style = {
              height: '',
              paddingBottom: ''
            };
            switch (rowMode) {
              case 'fixed':
                style.height = DIMENSION({
                  unit: rowHeight,
                  span: rowCount,
                  gutter: gutter
                });
                break;
              case 'ratio':
                var hGutterShare = colCount === 1 ? 0 : (colCount - 1) / colCount,
                    hShare = (1 / colCount) * 100,
                    vShare = hShare * (1 / rowHeight),
                    vUnit = UNIT({
                      share: vShare,
                      gutterShare: hGutterShare,
                      gutter: gutter
                    });
                style.paddingBottom = DIMENSION({
                  unit: vUnit,
                  span: rowCount,
                  gutter: gutter
                });
                break;
              case 'fit':
                break;
            }
            return style;
          }
          function getTileElements() {
            return ctrl.tiles.map(function(tile) {
              return tile.element;
            });
          }
          function getTileSpans() {
            return ctrl.tiles.map(function(tile) {
              return {
                row: parseInt($mdMedia.getResponsiveAttribute(tile.attrs, 'md-rowspan'), 10) || 1,
                col: parseInt($mdMedia.getResponsiveAttribute(tile.attrs, 'md-colspan'), 10) || 1
              };
            });
          }
          function getColumnCount() {
            var colCount = parseInt($mdMedia.getResponsiveAttribute(attrs, 'md-cols'), 10);
            if (isNaN(colCount)) {
              throw 'md-grid-list: md-cols attribute was not found, or contained a non-numeric value';
            }
            return colCount;
          }
          function getGutter() {
            return applyDefaultUnit($mdMedia.getResponsiveAttribute(attrs, 'md-gutter') || 1);
          }
          function getRowHeight() {
            var rowHeight = $mdMedia.getResponsiveAttribute(attrs, 'md-row-height');
            switch (getRowMode()) {
              case 'fixed':
                return applyDefaultUnit(rowHeight);
              case 'ratio':
                var whRatio = rowHeight.split(':');
                return parseFloat(whRatio[0]) / parseFloat(whRatio[1]);
              case 'fit':
                return 0;
            }
          }
          function getRowMode() {
            var rowHeight = $mdMedia.getResponsiveAttribute(attrs, 'md-row-height');
            if (rowHeight == 'fit') {
              return 'fit';
            } else if (rowHeight.indexOf(':') !== -1) {
              return 'ratio';
            } else {
              return 'fixed';
            }
          }
          function applyDefaultUnit(val) {
            return /\D$/.test(val) ? val : val + 'px';
          }
        }
      }
      GridListDirective.$inject = ["$interpolate", "$mdConstant", "$mdGridLayout", "$mdMedia", "$mdUtil"];
      function GridListController($timeout) {
        this.invalidated = false;
        this.$timeout_ = $timeout;
        this.tiles = [];
        this.layoutDelegate = angular.noop;
      }
      GridListController.$inject = ["$timeout"];
      GridListController.prototype = {
        addTile: function(tileElement, tileAttrs, idx) {
          var tile = {
            element: tileElement,
            attrs: tileAttrs
          };
          if (angular.isUndefined(idx)) {
            this.tiles.push(tile);
          } else {
            this.tiles.splice(idx, 0, tile);
          }
          this.invalidateLayout();
        },
        removeTile: function(tileElement, tileAttrs) {
          var idx = this._findTileIndex(tileAttrs);
          if (idx === -1) {
            return ;
          }
          this.tiles.splice(idx, 1);
          this.invalidateLayout();
        },
        invalidateLayout: function() {
          if (this.invalidated) {
            return ;
          }
          this.invalidated = true;
          this.$timeout_(angular.bind(this, this.layout));
        },
        layout: function() {
          try {
            this.layoutDelegate();
          } finally {
            this.invalidated = false;
          }
        },
        _findTileIndex: function(tileAttrs) {
          for (var i = 0; i < this.tiles.length; i++) {
            if (this.tiles[i].attrs == tileAttrs) {
              return i;
            }
          }
          return -1;
        }
      };
      function GridLayoutFactory($mdUtil) {
        var defaultAnimator = GridTileAnimator;
        GridLayout.animateWith = function(customAnimator) {
          defaultAnimator = !angular.isFunction(customAnimator) ? GridTileAnimator : customAnimator;
        };
        return GridLayout;
        function GridLayout(colCount, tileSpans) {
          var self,
              layoutInfo,
              gridStyles,
              layoutTime,
              mapTime,
              reflowTime,
              layoutInfo;
          layoutTime = $mdUtil.time(function() {
            layoutInfo = calculateGridFor(colCount, tileSpans);
          });
          return self = {
            layoutInfo: function() {
              return layoutInfo;
            },
            map: function(updateFn) {
              mapTime = $mdUtil.time(function() {
                var info = self.layoutInfo();
                gridStyles = updateFn(info.positioning, info.rowCount);
              });
              return self;
            },
            reflow: function(animatorFn) {
              reflowTime = $mdUtil.time(function() {
                var animator = animatorFn || defaultAnimator;
                animator(gridStyles.grid, gridStyles.tiles);
              });
              return self;
            },
            performance: function() {
              return {
                tileCount: tileSpans.length,
                layoutTime: layoutTime,
                mapTime: mapTime,
                reflowTime: reflowTime,
                totalTime: layoutTime + mapTime + reflowTime
              };
            }
          };
        }
        function GridTileAnimator(grid, tiles) {
          grid.element.css(grid.style);
          tiles.forEach(function(t) {
            t.element.css(t.style);
          });
        }
        function calculateGridFor(colCount, tileSpans) {
          var curCol = 0,
              curRow = 0,
              spaceTracker = newSpaceTracker();
          return {
            positioning: tileSpans.map(function(spans, i) {
              return {
                spans: spans,
                position: reserveSpace(spans, i)
              };
            }),
            rowCount: curRow + Math.max.apply(Math, spaceTracker)
          };
          function reserveSpace(spans, i) {
            if (spans.col > colCount) {
              throw 'md-grid-list: Tile at position ' + i + ' has a colspan ' + '(' + spans.col + ') that exceeds the column count ' + '(' + colCount + ')';
            }
            var start = 0,
                end = 0;
            while (end - start < spans.col) {
              if (curCol >= colCount) {
                nextRow();
                continue;
              }
              start = spaceTracker.indexOf(0, curCol);
              if (start === -1 || (end = findEnd(start + 1)) === -1) {
                start = end = 0;
                nextRow();
                continue;
              }
              curCol = end + 1;
            }
            adjustRow(start, spans.col, spans.row);
            curCol = start + spans.col;
            return {
              col: start,
              row: curRow
            };
          }
          function nextRow() {
            curCol = 0;
            curRow++;
            adjustRow(0, colCount, -1);
          }
          function adjustRow(from, cols, by) {
            for (var i = from; i < from + cols; i++) {
              spaceTracker[i] = Math.max(spaceTracker[i] + by, 0);
            }
          }
          function findEnd(start) {
            var i;
            for (i = start; i < spaceTracker.length; i++) {
              if (spaceTracker[i] !== 0) {
                return i;
              }
            }
            if (i === spaceTracker.length) {
              return i;
            }
          }
          function newSpaceTracker() {
            var tracker = [];
            for (var i = 0; i < colCount; i++) {
              tracker.push(0);
            }
            return tracker;
          }
        }
      }
      GridLayoutFactory.$inject = ["$mdUtil"];
      function GridTileDirective($mdMedia) {
        return {
          restrict: 'E',
          require: '^mdGridList',
          template: '<figure ng-transclude></figure>',
          transclude: true,
          scope: {},
          link: postLink
        };
        function postLink(scope, element, attrs, gridCtrl) {
          element.attr('role', 'listitem');
          var unwatchAttrs = $mdMedia.watchResponsiveAttributes(['md-colspan', 'md-rowspan'], attrs, angular.bind(gridCtrl, gridCtrl.invalidateLayout));
          gridCtrl.addTile(element, attrs, scope.$parent.$index);
          scope.$on('$destroy', function() {
            unwatchAttrs();
            gridCtrl.removeTile(element, attrs);
          });
        }
      }
      GridTileDirective.$inject = ["$mdMedia"];
      function GridTileCaptionDirective() {
        return {
          template: '<figcaption ng-transclude></figcaption>',
          transclude: true
        };
      }
    })();
    (function() {
      'use strict';
      angular.module('material.components.icon', ['material.core']).directive('mdIcon', mdIconDirective);
      function mdIconDirective($mdIcon, $mdTheming, $mdAria) {
        return {
          scope: {
            fontIcon: '@mdFontIcon',
            svgIcon: '@mdSvgIcon',
            svgSrc: '@mdSvgSrc'
          },
          restrict: 'E',
          template: getTemplate,
          link: postLink
        };
        function getTemplate(element, attr) {
          return attr.mdFontIcon ? '<span class="md-font" ng-class="fontIcon"></span>' : '';
        }
        function postLink(scope, element, attr) {
          $mdTheming(element);
          var ariaLabel = attr.alt || scope.fontIcon || scope.svgIcon;
          var attrName = attr.$normalize(attr.$attr.mdSvgIcon || attr.$attr.mdSvgSrc || '');
          if (attr.alt != '' && !parentsHaveText()) {
            $mdAria.expect(element, 'aria-label', ariaLabel);
            $mdAria.expect(element, 'role', 'img');
          } else {
            $mdAria.expect(element, 'aria-hidden', 'true');
          }
          if (attrName) {
            attr.$observe(attrName, function(attrVal) {
              element.empty();
              if (attrVal) {
                $mdIcon(attrVal).then(function(svg) {
                  element.append(svg);
                });
              }
            });
          }
          function parentsHaveText() {
            var parent = element.parent();
            if (parent.attr('aria-label') || parent.text()) {
              return true;
            } else if (parent.parent().attr('aria-label') || parent.parent().text()) {
              return true;
            }
            return false;
          }
        }
      }
      mdIconDirective.$inject = ["$mdIcon", "$mdTheming", "$mdAria"];
    })();
    (function() {
      'use strict';
      angular.module('material.components.icon').provider('$mdIcon', MdIconProvider);
      var config = {defaultIconSize: 24};
      function MdIconProvider() {}
      MdIconProvider.prototype = {
        icon: function icon(id, url, iconSize) {
          if (id.indexOf(':') == -1)
            id = '$default:' + id;
          config[id] = new ConfigurationItem(url, iconSize);
          return this;
        },
        iconSet: function iconSet(id, url, iconSize) {
          config[id] = new ConfigurationItem(url, iconSize);
          return this;
        },
        defaultIconSet: function defaultIconSet(url, iconSize) {
          var setName = '$default';
          if (!config[setName]) {
            config[setName] = new ConfigurationItem(url, iconSize);
          }
          config[setName].iconSize = iconSize || config.defaultIconSize;
          return this;
        },
        defaultIconSize: function defaultIconSize(iconSize) {
          config.defaultIconSize = iconSize;
          return this;
        },
        preloadIcons: function($templateCache) {
          var iconProvider = this;
          var svgRegistry = [{
            id: 'tabs-arrow',
            url: 'tabs-arrow.svg',
            svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g id="tabs-arrow"><polygon points="15.4,7.4 14,6 8,12 14,18 15.4,16.6 10.8,12 "/></g></svg>'
          }, {
            id: 'close',
            url: 'close.svg',
            svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g id="close"><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/></g></svg>'
          }, {
            id: 'cancel',
            url: 'cancel.svg',
            svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g id="cancel"><path d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5 13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59 3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z"/></g></svg>'
          }];
          svgRegistry.forEach(function(asset) {
            iconProvider.icon(asset.id, asset.url);
            $templateCache.put(asset.url, asset.svg);
          });
        },
        $get: ['$http', '$q', '$log', '$templateCache', function($http, $q, $log, $templateCache) {
          this.preloadIcons($templateCache);
          return new MdIconService(config, $http, $q, $log, $templateCache);
        }]
      };
      function ConfigurationItem(url, iconSize) {
        this.url = url;
        this.iconSize = iconSize || config.defaultIconSize;
      }
      function MdIconService(config, $http, $q, $log, $templateCache) {
        var iconCache = {};
        var urlRegex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/i;
        Icon.prototype = {
          clone: cloneSVG,
          prepare: prepareAndStyle
        };
        return function getIcon(id) {
          id = id || '';
          if (iconCache[id])
            return $q.when(iconCache[id].clone());
          if (urlRegex.test(id))
            return loadByURL(id).then(cacheIcon(id));
          if (id.indexOf(':') == -1)
            id = '$default:' + id;
          return loadByID(id).catch(loadFromIconSet).catch(announceIdNotFound).catch(announceNotFound).then(cacheIcon(id));
        };
        function cacheIcon(id) {
          return function updateCache(icon) {
            iconCache[id] = isIcon(icon) ? icon : new Icon(icon, config[id]);
            return iconCache[id].clone();
          };
        }
        function loadByID(id) {
          var iconConfig = config[id];
          return !iconConfig ? $q.reject(id) : loadByURL(iconConfig.url).then(function(icon) {
            return new Icon(icon, iconConfig);
          });
        }
        function loadFromIconSet(id) {
          var setName = id.substring(0, id.lastIndexOf(':')) || '$default';
          var iconSetConfig = config[setName];
          return !iconSetConfig ? $q.reject(id) : loadByURL(iconSetConfig.url).then(extractFromSet);
          function extractFromSet(set) {
            var iconName = id.slice(id.lastIndexOf(':') + 1);
            var icon = set.querySelector('#' + iconName);
            return !icon ? $q.reject(id) : new Icon(icon, iconSetConfig);
          }
        }
        function loadByURL(url) {
          return $http.get(url, {cache: $templateCache}).then(function(response) {
            var els = angular.element(response.data);
            for (var i = 0; i < els.length; ++i) {
              if (els[i].nodeName == 'svg') {
                return els[i];
              }
            }
          });
        }
        function announceIdNotFound(id) {
          var msg;
          if (angular.isString(id)) {
            msg = 'icon ' + id + ' not found';
            $log.warn(msg);
          }
          return $q.reject(msg || id);
        }
        function announceNotFound(err) {
          var msg = angular.isString(err) ? err : (err.message || err.data || err.statusText);
          $log.warn(msg);
          return $q.reject(msg);
        }
        function isIcon(target) {
          return angular.isDefined(target.element) && angular.isDefined(target.config);
        }
        function Icon(el, config) {
          if (el.tagName != 'svg') {
            el = angular.element('<svg xmlns="http://www.w3.org/2000/svg">').append(el)[0];
          }
          el = angular.element(el);
          if (!el.attr('xmlns')) {
            el.attr('xmlns', "http://www.w3.org/2000/svg");
          }
          this.element = el;
          this.config = config;
          this.prepare();
        }
        function prepareAndStyle() {
          var iconSize = this.config ? this.config.iconSize : config.defaultIconSize;
          var svg = angular.element(this.element);
          svg.attr({
            'fit': '',
            'height': '100%',
            'width': '100%',
            'preserveAspectRatio': 'xMidYMid meet',
            'viewBox': svg.attr('viewBox') || ('0 0 ' + iconSize + ' ' + iconSize)
          }).css({
            'pointer-events': 'none',
            'display': 'block'
          });
          this.element = svg;
        }
        function cloneSVG() {
          return angular.element(this.element[0].cloneNode(true));
        }
      }
    })();
    (function() {
      angular.module('material.components.input', ['material.core']).directive('mdInputContainer', mdInputContainerDirective).directive('label', labelDirective).directive('input', inputTextareaDirective).directive('textarea', inputTextareaDirective).directive('mdMaxlength', mdMaxlengthDirective).directive('placeholder', placeholderDirective);
      function mdInputContainerDirective($mdTheming, $parse) {
        ContainerCtrl.$inject = ["$scope", "$element", "$attrs"];
        return {
          restrict: 'E',
          link: postLink,
          controller: ContainerCtrl
        };
        function postLink(scope, element, attr) {
          $mdTheming(element);
        }
        function ContainerCtrl($scope, $element, $attrs) {
          var self = this;
          self.isErrorGetter = $attrs.mdIsError && $parse($attrs.mdIsError);
          self.element = $element;
          self.setFocused = function(isFocused) {
            $element.toggleClass('md-input-focused', !!isFocused);
          };
          self.setHasValue = function(hasValue) {
            $element.toggleClass('md-input-has-value', !!hasValue);
          };
          self.setInvalid = function(isInvalid) {
            $element.toggleClass('md-input-invalid', !!isInvalid);
          };
          $scope.$watch(function() {
            return self.label && self.input;
          }, function(hasLabelAndInput) {
            if (hasLabelAndInput && !self.label.attr('for')) {
              self.label.attr('for', self.input.attr('id'));
            }
          });
        }
      }
      mdInputContainerDirective.$inject = ["$mdTheming", "$parse"];
      function labelDirective() {
        return {
          restrict: 'E',
          require: '^?mdInputContainer',
          link: function(scope, element, attr, containerCtrl) {
            if (!containerCtrl || attr.mdNoFloat)
              return ;
            containerCtrl.label = element;
            scope.$on('$destroy', function() {
              containerCtrl.label = null;
            });
          }
        };
      }
      function inputTextareaDirective($mdUtil, $window) {
        return {
          restrict: 'E',
          require: ['^?mdInputContainer', '?ngModel'],
          link: postLink
        };
        function postLink(scope, element, attr, ctrls) {
          var containerCtrl = ctrls[0];
          var ngModelCtrl = ctrls[1] || $mdUtil.fakeNgModel();
          var isReadonly = angular.isDefined(attr.readonly);
          if (!containerCtrl)
            return ;
          if (containerCtrl.input) {
            throw new Error("<md-input-container> can only have *one* <input> or <textarea> child element!");
          }
          containerCtrl.input = element;
          element.addClass('md-input');
          if (!element.attr('id')) {
            element.attr('id', 'input_' + $mdUtil.nextUid());
          }
          if (element[0].tagName.toLowerCase() === 'textarea') {
            setupTextarea();
          }
          var touched = false;
          var isErrorGetter = containerCtrl.isErrorGetter || function() {
            return ngModelCtrl.$invalid && (touched || ngModelCtrl.$touched);
          };
          scope.$watch(isErrorGetter, containerCtrl.setInvalid);
          ngModelCtrl.$parsers.push(ngModelPipelineCheckValue);
          ngModelCtrl.$formatters.push(ngModelPipelineCheckValue);
          element.on('input', inputCheckValue);
          if (!isReadonly) {
            element.on('focus', function(ev) {
              touched = true;
              containerCtrl.setFocused(true);
              scope.$evalAsync();
            }).on('blur', function(ev) {
              containerCtrl.setFocused(false);
              inputCheckValue();
            });
          }
          scope.$on('$destroy', function() {
            containerCtrl.setFocused(false);
            containerCtrl.setHasValue(false);
            containerCtrl.input = null;
          });
          function ngModelPipelineCheckValue(arg) {
            containerCtrl.setHasValue(!ngModelCtrl.$isEmpty(arg));
            return arg;
          }
          function inputCheckValue() {
            containerCtrl.setHasValue(element.val().length > 0 || (element[0].validity || {}).badInput);
          }
          function setupTextarea() {
            var node = element[0];
            var onChangeTextarea = $mdUtil.debounce(growTextarea, 1);
            function pipelineListener(value) {
              onChangeTextarea();
              return value;
            }
            if (ngModelCtrl) {
              ngModelCtrl.$formatters.push(pipelineListener);
              ngModelCtrl.$viewChangeListeners.push(pipelineListener);
            } else {
              onChangeTextarea();
            }
            element.on('keydown input', onChangeTextarea);
            element.on('scroll', onScroll);
            angular.element($window).on('resize', onChangeTextarea);
            scope.$on('$destroy', function() {
              angular.element($window).off('resize', onChangeTextarea);
            });
            function growTextarea() {
              node.style.height = "auto";
              node.scrollTop = 0;
              var height = getHeight();
              if (height)
                node.style.height = height + 'px';
            }
            function getHeight() {
              var line = node.scrollHeight - node.offsetHeight;
              return node.offsetHeight + (line > 0 ? line : 0);
            }
            function onScroll(e) {
              node.scrollTop = 0;
              var line = node.scrollHeight - node.offsetHeight;
              var height = node.offsetHeight + line;
              node.style.height = height + 'px';
            }
          }
        }
      }
      inputTextareaDirective.$inject = ["$mdUtil", "$window"];
      function mdMaxlengthDirective($animate) {
        return {
          restrict: 'A',
          require: ['ngModel', '^mdInputContainer'],
          link: postLink
        };
        function postLink(scope, element, attr, ctrls) {
          var maxlength;
          var ngModelCtrl = ctrls[0];
          var containerCtrl = ctrls[1];
          var charCountEl = angular.element('<div class="md-char-counter">');
          attr.$set('ngTrim', 'false');
          containerCtrl.element.append(charCountEl);
          ngModelCtrl.$formatters.push(renderCharCount);
          ngModelCtrl.$viewChangeListeners.push(renderCharCount);
          element.on('input keydown', function() {
            renderCharCount();
          });
          scope.$watch(attr.mdMaxlength, function(value) {
            maxlength = value;
            if (angular.isNumber(value) && value > 0) {
              if (!charCountEl.parent().length) {
                $animate.enter(charCountEl, containerCtrl.element, angular.element(containerCtrl.element[0].lastElementChild));
              }
              renderCharCount();
            } else {
              $animate.leave(charCountEl);
            }
          });
          ngModelCtrl.$validators['md-maxlength'] = function(modelValue, viewValue) {
            if (!angular.isNumber(maxlength) || maxlength < 0) {
              return true;
            }
            return (modelValue || element.val() || viewValue || '').length <= maxlength;
          };
          function renderCharCount(value) {
            charCountEl.text((element.val() || value || '').length + '/' + maxlength);
            return value;
          }
        }
      }
      mdMaxlengthDirective.$inject = ["$animate"];
      function placeholderDirective() {
        return {
          restrict: 'A',
          require: '^^?mdInputContainer',
          link: postLink
        };
        function postLink(scope, element, attr, inputContainer) {
          if (!inputContainer)
            return ;
          if (angular.isDefined(inputContainer.element.attr('md-no-float')))
            return ;
          var placeholderText = attr.placeholder;
          element.removeAttr('placeholder');
          inputContainer.element.append('<div class="md-placeholder">' + placeholderText + '</div>');
        }
      }
    })();
    (function() {
      'use strict';
      angular.module('material.components.list', ['material.core']).directive('mdList', mdListDirective).directive('mdItem', mdItemDirective).directive('mdListItem', mdItemDirective);
      function mdListDirective() {
        return {
          restrict: 'E',
          link: function($scope, $element, $attr) {
            $element.attr({'role': 'list'});
          }
        };
      }
      function mdItemDirective() {
        return {
          restrict: 'E',
          link: function($scope, $element, $attr) {
            $element.attr({'role': 'listitem'});
          }
        };
      }
    })();
    (function() {
      'use strict';
      angular.module('material.components.progressCircular', ['material.core']).directive('mdProgressCircular', MdProgressCircularDirective);
      function MdProgressCircularDirective($$rAF, $mdConstant, $mdTheming) {
        var fillRotations = new Array(101),
            fixRotations = new Array(101);
        for (var i = 0; i < 101; i++) {
          var percent = i / 100;
          var rotation = Math.floor(percent * 180);
          fillRotations[i] = 'rotate(' + rotation.toString() + 'deg)';
          fixRotations[i] = 'rotate(' + (rotation * 2).toString() + 'deg)';
        }
        return {
          restrict: 'E',
          template: '<div class="md-spinner-wrapper">' + '<div class="md-inner">' + '<div class="md-gap"></div>' + '<div class="md-left">' + '<div class="md-half-circle"></div>' + '</div>' + '<div class="md-right">' + '<div class="md-half-circle"></div>' + '</div>' + '</div>' + '</div>',
          compile: compile
        };
        function compile(tElement, tAttrs, transclude) {
          tElement.attr('aria-valuemin', 0);
          tElement.attr('aria-valuemax', 100);
          tElement.attr('role', 'progressbar');
          return postLink;
        }
        function postLink(scope, element, attr) {
          $mdTheming(element);
          var circle = element[0],
              fill = circle.querySelectorAll('.md-fill, .md-mask.md-full'),
              fix = circle.querySelectorAll('.md-fill.md-fix'),
              i,
              clamped,
              fillRotation,
              fixRotation;
          var diameter = attr.mdDiameter || 48;
          var scale = diameter / 48;
          circle.style[$mdConstant.CSS.TRANSFORM] = 'scale(' + scale.toString() + ')';
          attr.$observe('value', function(value) {
            clamped = clamp(value);
            fillRotation = fillRotations[clamped];
            fixRotation = fixRotations[clamped];
            element.attr('aria-valuenow', clamped);
            for (i = 0; i < fill.length; i++) {
              fill[i].style[$mdConstant.CSS.TRANSFORM] = fillRotation;
            }
            for (i = 0; i < fix.length; i++) {
              fix[i].style[$mdConstant.CSS.TRANSFORM] = fixRotation;
            }
          });
        }
        function clamp(value) {
          if (value > 100) {
            return 100;
          }
          if (value < 0) {
            return 0;
          }
          return Math.ceil(value || 0);
        }
      }
      MdProgressCircularDirective.$inject = ["$$rAF", "$mdConstant", "$mdTheming"];
    })();
    (function() {
      'use strict';
      angular.module('material.components.progressLinear', ['material.core']).directive('mdProgressLinear', MdProgressLinearDirective);
      function MdProgressLinearDirective($$rAF, $mdConstant, $mdTheming) {
        return {
          restrict: 'E',
          template: '<div class="md-container">' + '<div class="md-dashed"></div>' + '<div class="md-bar md-bar1"></div>' + '<div class="md-bar md-bar2"></div>' + '</div>',
          compile: compile
        };
        function compile(tElement, tAttrs, transclude) {
          tElement.attr('aria-valuemin', 0);
          tElement.attr('aria-valuemax', 100);
          tElement.attr('role', 'progressbar');
          return postLink;
        }
        function postLink(scope, element, attr) {
          $mdTheming(element);
          var bar1Style = element[0].querySelector('.md-bar1').style,
              bar2Style = element[0].querySelector('.md-bar2').style,
              container = angular.element(element[0].querySelector('.md-container'));
          attr.$observe('value', function(value) {
            if (attr.mdMode == 'query') {
              return ;
            }
            var clamped = clamp(value);
            element.attr('aria-valuenow', clamped);
            bar2Style[$mdConstant.CSS.TRANSFORM] = transforms[clamped];
          });
          attr.$observe('mdBufferValue', function(value) {
            bar1Style[$mdConstant.CSS.TRANSFORM] = transforms[clamp(value)];
          });
          $$rAF(function() {
            container.addClass('md-ready');
          });
        }
        function clamp(value) {
          if (value > 100) {
            return 100;
          }
          if (value < 0) {
            return 0;
          }
          return Math.ceil(value || 0);
        }
      }
      MdProgressLinearDirective.$inject = ["$$rAF", "$mdConstant", "$mdTheming"];
      var transforms = (function() {
        var values = new Array(101);
        for (var i = 0; i < 101; i++) {
          values[i] = makeTransform(i);
        }
        return values;
        function makeTransform(value) {
          var scale = value / 100;
          var translateX = (value - 100) / 2;
          return 'translateX(' + translateX.toString() + '%) scale(' + scale.toString() + ', 1)';
        }
      })();
    })();
    (function() {
      'use strict';
      angular.module('material.components.radioButton', ['material.core']).directive('mdRadioGroup', mdRadioGroupDirective).directive('mdRadioButton', mdRadioButtonDirective);
      function mdRadioGroupDirective($mdUtil, $mdConstant, $mdTheming) {
        RadioGroupController.prototype = createRadioGroupControllerProto();
        return {
          restrict: 'E',
          controller: ['$element', RadioGroupController],
          require: ['mdRadioGroup', '?ngModel'],
          link: {pre: linkRadioGroup}
        };
        function linkRadioGroup(scope, element, attr, ctrls) {
          $mdTheming(element);
          var rgCtrl = ctrls[0];
          var ngModelCtrl = ctrls[1] || $mdUtil.fakeNgModel();
          function keydownListener(ev) {
            switch (ev.keyCode) {
              case $mdConstant.KEY_CODE.LEFT_ARROW:
              case $mdConstant.KEY_CODE.UP_ARROW:
                ev.preventDefault();
                rgCtrl.selectPrevious();
                break;
              case $mdConstant.KEY_CODE.RIGHT_ARROW:
              case $mdConstant.KEY_CODE.DOWN_ARROW:
                ev.preventDefault();
                rgCtrl.selectNext();
                break;
              case $mdConstant.KEY_CODE.ENTER:
                var form = angular.element($mdUtil.getClosest(element[0], 'form'));
                if (form.length > 0) {
                  form.triggerHandler('submit');
                }
                break;
            }
          }
          rgCtrl.init(ngModelCtrl);
          element.attr({
            'role': 'radiogroup',
            'tabIndex': element.attr('tabindex') || '0'
          }).on('keydown', keydownListener);
        }
        function RadioGroupController($element) {
          this._radioButtonRenderFns = [];
          this.$element = $element;
        }
        function createRadioGroupControllerProto() {
          return {
            init: function(ngModelCtrl) {
              this._ngModelCtrl = ngModelCtrl;
              this._ngModelCtrl.$render = angular.bind(this, this.render);
            },
            add: function(rbRender) {
              this._radioButtonRenderFns.push(rbRender);
            },
            remove: function(rbRender) {
              var index = this._radioButtonRenderFns.indexOf(rbRender);
              if (index !== -1) {
                this._radioButtonRenderFns.splice(index, 1);
              }
            },
            render: function() {
              this._radioButtonRenderFns.forEach(function(rbRender) {
                rbRender();
              });
            },
            setViewValue: function(value, eventType) {
              this._ngModelCtrl.$setViewValue(value, eventType);
              this.render();
            },
            getViewValue: function() {
              return this._ngModelCtrl.$viewValue;
            },
            selectNext: function() {
              return changeSelectedButton(this.$element, 1);
            },
            selectPrevious: function() {
              return changeSelectedButton(this.$element, -1);
            },
            setActiveDescendant: function(radioId) {
              this.$element.attr('aria-activedescendant', radioId);
            }
          };
        }
        function changeSelectedButton(parent, increment) {
          var buttons = $mdUtil.iterator(parent[0].querySelectorAll('md-radio-button'), true);
          if (buttons.count()) {
            var validate = function(button) {
              return !angular.element(button).attr("disabled");
            };
            var selected = parent[0].querySelector('md-radio-button.md-checked');
            var target = buttons[increment < 0 ? 'previous' : 'next'](selected, validate) || buttons.first();
            angular.element(target).triggerHandler('click');
          }
        }
      }
      mdRadioGroupDirective.$inject = ["$mdUtil", "$mdConstant", "$mdTheming"];
      function mdRadioButtonDirective($mdAria, $mdUtil, $mdTheming) {
        var CHECKED_CSS = 'md-checked';
        return {
          restrict: 'E',
          require: '^mdRadioGroup',
          transclude: true,
          template: '<div class="md-container" md-ink-ripple md-ink-ripple-checkbox>' + '<div class="md-off"></div>' + '<div class="md-on"></div>' + '</div>' + '<div ng-transclude class="md-label"></div>',
          link: link
        };
        function link(scope, element, attr, rgCtrl) {
          var lastChecked;
          $mdTheming(element);
          configureAria(element, scope);
          rgCtrl.add(render);
          attr.$observe('value', render);
          element.on('click', listener).on('$destroy', function() {
            rgCtrl.remove(render);
          });
          function listener(ev) {
            if (element[0].hasAttribute('disabled'))
              return ;
            scope.$apply(function() {
              rgCtrl.setViewValue(attr.value, ev && ev.type);
            });
          }
          function render() {
            var checked = (rgCtrl.getViewValue() == attr.value);
            if (checked === lastChecked) {
              return ;
            }
            lastChecked = checked;
            element.attr('aria-checked', checked);
            if (checked) {
              element.addClass(CHECKED_CSS);
              rgCtrl.setActiveDescendant(element.attr('id'));
            } else {
              element.removeClass(CHECKED_CSS);
            }
          }
          function configureAria(element, scope) {
            scope.ariaId = buildAriaID();
            element.attr({
              'id': scope.ariaId,
              'role': 'radio',
              'aria-checked': 'false'
            });
            $mdAria.expectWithText(element, 'aria-label');
            function buildAriaID() {
              return attr.id || ('radio' + "_" + $mdUtil.nextUid());
            }
          }
        }
      }
      mdRadioButtonDirective.$inject = ["$mdAria", "$mdUtil", "$mdTheming"];
    })();
    (function() {
      'use strict';
      var SELECT_EDGE_MARGIN = 8;
      var selectNextId = 0;
      angular.module('material.components.select', ['material.core', 'material.components.backdrop']).directive('mdSelect', SelectDirective).directive('mdSelectMenu', SelectMenuDirective).directive('mdOption', OptionDirective).directive('mdOptgroup', OptgroupDirective).provider('$mdSelect', SelectProvider);
      function SelectDirective($mdSelect, $mdUtil, $mdTheming, $interpolate, $compile, $parse) {
        var intStart = $interpolate.startSymbol();
        var intEnd = $interpolate.endSymbol();
        return {
          restrict: 'E',
          require: ['mdSelect', 'ngModel'],
          compile: compile,
          controller: function() {}
        };
        function compile(element, attr) {
          var labelEl = element.find('md-select-label').remove();
          if (!labelEl.length) {
            labelEl = angular.element('<md-select-label><span></span></md-select-label>');
          }
          labelEl.append('<span class="md-select-icon" aria-hidden="true"></span>');
          labelEl.addClass('md-select-label');
          labelEl.attr('id', 'select_label_' + $mdUtil.nextUid());
          if (!element.find('md-content').length) {
            element.append(angular.element('<md-content>').append(element.contents()));
          }
          if (attr.mdOnOpen) {
            element.find('md-content').prepend(angular.element('<md-progress-circular>').attr('md-mode', 'indeterminate').attr('ng-hide', '$$loadingAsyncDone').wrap('<div>').parent());
          }
          var selectTemplate = '<div class="md-select-menu-container">' + '<md-select-menu ' + (angular.isDefined(attr.multiple) ? 'multiple' : '') + '>' + element.html() + '</md-select-menu></div>';
          element.empty().append(labelEl);
          $mdTheming(element);
          return function postLink(scope, element, attr, ctrls) {
            var isOpen;
            var mdSelectCtrl = ctrls[0];
            var ngModel = ctrls[1];
            var labelEl = element.find('md-select-label');
            var customLabel = labelEl.text().length !== 0;
            var selectContainer,
                selectScope;
            createSelect();
            var originalRender = ngModel.$render;
            ngModel.$render = function() {
              originalRender();
              syncLabelText();
            };
            mdSelectCtrl.setLabelText = function(text) {
              if (customLabel)
                return ;
              mdSelectCtrl.setIsPlaceholder(!text);
              var newText = text || attr.placeholder || '';
              var target = customLabel ? labelEl : labelEl.children().eq(0);
              target.text(newText);
            };
            mdSelectCtrl.setIsPlaceholder = function(val) {
              val ? labelEl.addClass('md-placeholder') : labelEl.removeClass('md-placeholder');
            };
            scope.$$postDigest(syncLabelText);
            function syncLabelText() {
              if (selectContainer) {
                var selectMenuCtrl = selectContainer.find('md-select-menu').controller('mdSelectMenu');
                mdSelectCtrl.setLabelText(selectMenuCtrl.selectedLabels());
              }
            }
            attr.$observe('disabled', function(disabled) {
              if (typeof disabled == "string") {
                disabled = true;
              }
              if (disabled) {
                element.attr('tabindex', -1);
                element.off('click', openSelect);
                element.off('keydown', openOnKeypress);
              } else {
                element.attr('tabindex', 0);
                element.on('click', openSelect);
                element.on('keydown', openOnKeypress);
              }
            });
            if (!attr.disabled && !attr.ngDisabled) {
              element.attr('tabindex', 0);
              element.on('click', openSelect);
              element.on('keydown', openOnKeypress);
            }
            element.attr({
              'role': 'combobox',
              'id': 'select_' + $mdUtil.nextUid(),
              'aria-haspopup': true,
              'aria-expanded': 'false',
              'aria-labelledby': labelEl.attr('id')
            });
            scope.$on('$destroy', function() {
              if (isOpen) {
                $mdSelect.cancel().then(function() {
                  selectContainer.remove();
                });
              } else {
                selectContainer.remove();
              }
            });
            function createSelect() {
              selectContainer = angular.element(selectTemplate);
              var selectEl = selectContainer.find('md-select-menu');
              selectEl.data('$ngModelController', ngModel);
              selectEl.data('$mdSelectController', mdSelectCtrl);
              selectScope = scope.$new();
              selectContainer = $compile(selectContainer)(selectScope);
            }
            function openOnKeypress(e) {
              var allowedCodes = [32, 13, 38, 40];
              if (allowedCodes.indexOf(e.keyCode) != -1) {
                e.preventDefault();
                openSelect(e);
              }
            }
            function openSelect() {
              scope.$evalAsync(function() {
                isOpen = true;
                $mdSelect.show({
                  scope: selectScope,
                  preserveScope: true,
                  skipCompile: true,
                  element: selectContainer,
                  target: element[0],
                  hasBackdrop: true,
                  loadingAsync: attr.mdOnOpen ? scope.$eval(attr.mdOnOpen) : false
                }).then(function(selectedText) {
                  isOpen = false;
                });
              });
            }
          };
        }
      }
      SelectDirective.$inject = ["$mdSelect", "$mdUtil", "$mdTheming", "$interpolate", "$compile", "$parse"];
      function SelectMenuDirective($parse, $mdUtil, $mdTheming) {
        SelectMenuController.$inject = ["$scope", "$attrs", "$element"];
        return {
          restrict: 'E',
          require: ['mdSelectMenu', '?ngModel'],
          controller: SelectMenuController,
          link: {pre: preLink}
        };
        function preLink(scope, element, attr, ctrls) {
          var selectCtrl = ctrls[0];
          var ngModel = ctrls[1];
          $mdTheming(element);
          element.on('click', clickListener);
          element.on('keypress', keyListener);
          if (ngModel)
            selectCtrl.init(ngModel);
          configureAria();
          function configureAria() {
            element.attr({
              'id': 'select_menu_' + $mdUtil.nextUid(),
              'role': 'listbox',
              'aria-multiselectable': (selectCtrl.isMultiple ? 'true' : 'false')
            });
          }
          function keyListener(e) {
            if (e.keyCode == 13 || e.keyCode == 32) {
              clickListener(e);
            }
          }
          function clickListener(ev) {
            var option = $mdUtil.getClosest(ev.target, 'md-option');
            var optionCtrl = option && angular.element(option).data('$mdOptionController');
            if (!option || !optionCtrl)
              return ;
            var optionHashKey = selectCtrl.hashGetter(optionCtrl.value);
            var isSelected = angular.isDefined(selectCtrl.selected[optionHashKey]);
            scope.$apply(function() {
              if (selectCtrl.isMultiple) {
                if (isSelected) {
                  selectCtrl.deselect(optionHashKey);
                } else {
                  selectCtrl.select(optionHashKey, optionCtrl.value);
                }
              } else {
                if (!isSelected) {
                  selectCtrl.deselect(Object.keys(selectCtrl.selected)[0]);
                  selectCtrl.select(optionHashKey, optionCtrl.value);
                }
              }
              selectCtrl.refreshViewValue();
            });
          }
        }
        function SelectMenuController($scope, $attrs, $element) {
          var self = this;
          self.isMultiple = angular.isDefined($attrs.multiple);
          self.selected = {};
          self.options = {};
          self.init = function(ngModel) {
            self.ngModel = ngModel;
            if (ngModel.$options && ngModel.$options.trackBy) {
              var trackByLocals = {};
              var trackByParsed = $parse(ngModel.$options.trackBy);
              self.hashGetter = function(value, valueScope) {
                trackByLocals.$value = value;
                return trackByParsed(valueScope || $scope, trackByLocals);
              };
            } else {
              self.hashGetter = function getHashValue(value) {
                if (angular.isObject(value)) {
                  return '$$object_' + (value.$$mdSelectId || (value.$$mdSelectId = ++selectNextId));
                }
                return value;
              };
            }
            if (self.isMultiple) {
              ngModel.$validators['md-multiple'] = validateArray;
              ngModel.$render = renderMultiple;
              $scope.$watchCollection($attrs.ngModel, function(value) {
                if (validateArray(value))
                  renderMultiple(value);
              });
            } else {
              ngModel.$render = renderSingular;
            }
            function validateArray(modelValue, viewValue) {
              return angular.isArray(modelValue || viewValue || []);
            }
          };
          self.selectedLabels = function() {
            var selectedOptionEls = nodesToArray($element[0].querySelectorAll('md-option[selected]'));
            if (selectedOptionEls.length) {
              return selectedOptionEls.map(function(el) {
                return el.textContent;
              }).join(', ');
            } else {
              return '';
            }
          };
          self.select = function(hashKey, hashedValue) {
            var option = self.options[hashKey];
            option && option.setSelected(true);
            self.selected[hashKey] = hashedValue;
          };
          self.deselect = function(hashKey) {
            var option = self.options[hashKey];
            option && option.setSelected(false);
            delete self.selected[hashKey];
          };
          self.addOption = function(hashKey, optionCtrl) {
            if (angular.isDefined(self.options[hashKey])) {
              throw new Error('Duplicate md-option values are not allowed in a select. ' + 'Duplicate value "' + optionCtrl.value + '" found.');
            }
            self.options[hashKey] = optionCtrl;
            if (angular.isDefined(self.selected[hashKey])) {
              self.select(hashKey, optionCtrl.value);
              self.refreshViewValue();
            }
          };
          self.removeOption = function(hashKey) {
            delete self.options[hashKey];
          };
          self.refreshViewValue = function() {
            var values = [];
            var option;
            for (var hashKey in self.selected) {
              if ((option = self.options[hashKey])) {
                values.push(option.value);
              } else {
                values.push(self.selected[hashKey]);
              }
            }
            self.ngModel.$setViewValue(self.isMultiple ? values : values[0]);
          };
          function renderMultiple() {
            var newSelectedValues = self.ngModel.$modelValue || self.ngModel.$viewValue;
            if (!angular.isArray(newSelectedValues))
              return ;
            var oldSelected = Object.keys(self.selected);
            var newSelectedHashes = newSelectedValues.map(self.hashGetter);
            var deselected = oldSelected.filter(function(hash) {
              return newSelectedHashes.indexOf(hash) === -1;
            });
            deselected.forEach(self.deselect);
            newSelectedHashes.forEach(function(hashKey, i) {
              self.select(hashKey, newSelectedValues[i]);
            });
          }
          function renderSingular() {
            var value = self.ngModel.$viewValue || self.ngModel.$modelValue;
            Object.keys(self.selected).forEach(self.deselect);
            self.select(self.hashGetter(value), value);
          }
        }
      }
      SelectMenuDirective.$inject = ["$parse", "$mdUtil", "$mdTheming"];
      function OptionDirective($mdInkRipple, $mdUtil) {
        OptionController.$inject = ["$element"];
        return {
          restrict: 'E',
          require: ['mdOption', '^^mdSelectMenu'],
          controller: OptionController,
          compile: compile
        };
        function compile(element, attr) {
          element.append(angular.element('<div class="md-text">').append(element.contents()));
          if (attr.tabindex === undefined)
            element.attr('tabindex', 0);
          return postLink;
        }
        function postLink(scope, element, attr, ctrls) {
          var optionCtrl = ctrls[0];
          var selectCtrl = ctrls[1];
          if (angular.isDefined(attr.ngValue)) {
            scope.$watch(attr.ngValue, setOptionValue);
          } else if (angular.isDefined(attr.value)) {
            setOptionValue(attr.value);
          } else {
            throw new Error("Expected either ngValue or value attr");
          }
          attr.$observe('selected', function(selected) {
            if (!angular.isDefined(selected))
              return ;
            if (selected) {
              if (!selectCtrl.isMultiple) {
                selectCtrl.deselect(Object.keys(selectCtrl.selected)[0]);
              }
              selectCtrl.select(optionCtrl.hashKey, optionCtrl.value);
            } else {
              selectCtrl.deselect(optionCtrl.hashKey);
            }
            selectCtrl.refreshViewValue();
            selectCtrl.ngModel.$render();
          });
          $mdInkRipple.attachButtonBehavior(scope, element);
          configureAria();
          function setOptionValue(newValue, oldValue) {
            var oldHashKey = selectCtrl.hashGetter(oldValue, scope);
            var newHashKey = selectCtrl.hashGetter(newValue, scope);
            optionCtrl.hashKey = newHashKey;
            optionCtrl.value = newValue;
            selectCtrl.removeOption(oldHashKey, optionCtrl);
            selectCtrl.addOption(newHashKey, optionCtrl);
          }
          scope.$on('$destroy', function() {
            selectCtrl.removeOption(optionCtrl.hashKey, optionCtrl);
          });
          function configureAria() {
            element.attr({
              'role': 'option',
              'aria-selected': 'false',
              'id': 'select_option_' + $mdUtil.nextUid()
            });
          }
        }
        function OptionController($element) {
          this.selected = false;
          this.setSelected = function(isSelected) {
            if (isSelected && !this.selected) {
              $element.attr({
                'selected': 'selected',
                'aria-selected': 'true'
              });
            } else if (!isSelected && this.selected) {
              $element.removeAttr('selected');
              $element.attr('aria-selected', 'false');
            }
            this.selected = isSelected;
          };
        }
      }
      OptionDirective.$inject = ["$mdInkRipple", "$mdUtil"];
      function OptgroupDirective() {
        return {
          restrict: 'E',
          compile: compile
        };
        function compile(el, attrs) {
          var labelElement = el.find('label');
          if (!labelElement.length) {
            labelElement = angular.element('<label>');
            el.prepend(labelElement);
          }
          if (attrs.label)
            labelElement.text(attrs.label);
        }
      }
      function SelectProvider($$interimElementProvider) {
        selectDefaultOptions.$inject = ["$mdSelect", "$mdConstant", "$$rAF", "$mdUtil", "$mdTheming", "$timeout"];
        return $$interimElementProvider('$mdSelect').setDefaults({
          methods: ['target'],
          options: selectDefaultOptions
        });
        function selectDefaultOptions($mdSelect, $mdConstant, $$rAF, $mdUtil, $mdTheming, $timeout) {
          return {
            parent: 'body',
            onShow: onShow,
            onRemove: onRemove,
            hasBackdrop: true,
            disableParentScroll: $mdUtil.floatingScrollbars(),
            themable: true
          };
          function onShow(scope, element, opts) {
            if (!opts.target) {
              throw new Error('$mdSelect.show() expected a target element in options.target but got ' + '"' + opts.target + '"!');
            }
            angular.extend(opts, {
              isRemoved: false,
              target: angular.element(opts.target),
              parent: angular.element(opts.parent),
              selectEl: element.find('md-select-menu'),
              contentEl: element.find('md-content'),
              backdrop: opts.hasBackdrop && angular.element('<md-backdrop class="md-select-backdrop">')
            });
            configureAria();
            element.removeClass('md-leave');
            var optionNodes = opts.selectEl[0].getElementsByTagName('md-option');
            if (opts.loadingAsync && opts.loadingAsync.then) {
              opts.loadingAsync.then(function() {
                scope.$$loadingAsyncDone = true;
                $$rAF(function() {
                  $$rAF(function() {
                    if (opts.isRemoved)
                      return ;
                    animateSelect(scope, element, opts);
                  });
                });
              });
            }
            if (opts.disableParentScroll) {
              opts.disableTarget = opts.parent.find('md-content');
              if (!opts.disableTarget.length)
                opts.disableTarget = opts.parent;
              opts.lastOverflow = opts.disableTarget.css('overflow');
              opts.disableTarget.css('overflow', 'hidden');
            }
            $timeout(activateInteraction, 75, false);
            if (opts.backdrop) {
              $mdTheming.inherit(opts.backdrop, opts.parent);
              opts.parent.append(opts.backdrop);
            }
            opts.parent.append(element);
            $$rAF(function() {
              $$rAF(function() {
                if (opts.isRemoved)
                  return ;
                animateSelect(scope, element, opts);
              });
            });
            return $mdUtil.transitionEndPromise(opts.selectEl, {timeout: 350});
            function configureAria() {
              opts.selectEl.attr('aria-labelledby', opts.target.attr('id'));
              opts.target.attr('aria-owns', opts.selectEl.attr('id'));
              opts.target.attr('aria-expanded', 'true');
            }
            function activateInteraction() {
              if (opts.isRemoved)
                return ;
              var selectCtrl = opts.selectEl.controller('mdSelectMenu') || {};
              element.addClass('md-clickable');
              opts.backdrop && opts.backdrop.on('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                opts.restoreFocus = false;
                scope.$apply($mdSelect.cancel);
              });
              opts.selectEl.on('keydown', function(ev) {
                switch (ev.keyCode) {
                  case $mdConstant.KEY_CODE.SPACE:
                  case $mdConstant.KEY_CODE.ENTER:
                    var option = $mdUtil.getClosest(ev.target, 'md-option');
                    if (option) {
                      opts.selectEl.triggerHandler({
                        type: 'click',
                        target: option
                      });
                      ev.preventDefault();
                    }
                    break;
                  case $mdConstant.KEY_CODE.TAB:
                  case $mdConstant.KEY_CODE.ESCAPE:
                    ev.preventDefault();
                    opts.restoreFocus = true;
                    scope.$apply($mdSelect.cancel);
                }
              });
              opts.selectEl.on('keydown', function(ev) {
                switch (ev.keyCode) {
                  case $mdConstant.KEY_CODE.UP_ARROW:
                    return focusPrevOption();
                  case $mdConstant.KEY_CODE.DOWN_ARROW:
                    return focusNextOption();
                }
              });
              function focusOption(direction) {
                var optionsArray = nodesToArray(optionNodes);
                var index = optionsArray.indexOf(opts.focusedNode);
                if (index === -1) {
                  index = 0;
                } else if (direction === 'next' && index < optionsArray.length - 1) {
                  index++;
                } else if (direction === 'prev' && index > 0) {
                  index--;
                }
                var newOption = opts.focusedNode = optionsArray[index];
                newOption && newOption.focus();
              }
              function focusNextOption() {
                focusOption('next');
              }
              function focusPrevOption() {
                focusOption('prev');
              }
              if (!selectCtrl.isMultiple) {
                opts.selectEl.on('click', closeMenu);
                opts.selectEl.on('keydown', function(e) {
                  if (e.keyCode == 32 || e.keyCode == 13) {
                    closeMenu();
                  }
                });
              }
              function closeMenu() {
                opts.restoreFocus = true;
                scope.$evalAsync(function() {
                  $mdSelect.hide(selectCtrl.ngModel.$viewValue);
                });
              }
            }
          }
          function onRemove(scope, element, opts) {
            opts.isRemoved = true;
            element.addClass('md-leave').removeClass('md-clickable');
            opts.target.attr('aria-expanded', 'false');
            if (opts.disableParentScroll && $mdUtil.floatingScrollbars()) {
              opts.disableTarget.css('overflow', opts.lastOverflow);
              delete opts.lastOverflow;
              delete opts.disableTarget;
            }
            var mdSelect = opts.selectEl.controller('mdSelect');
            if (mdSelect) {
              mdSelect.setLabelText(opts.selectEl.controller('mdSelectMenu').selectedLabels());
            }
            return $mdUtil.transitionEndPromise(element, {timeout: 350}).then(function() {
              element.removeClass('md-active');
              opts.parent[0].removeChild(element[0]);
              opts.backdrop && opts.backdrop.remove();
              if (opts.restoreFocus)
                opts.target.focus();
            });
          }
          function animateSelect(scope, element, opts) {
            var containerNode = element[0],
                targetNode = opts.target[0],
                parentNode = opts.parent[0],
                selectNode = opts.selectEl[0],
                contentNode = opts.contentEl[0],
                parentRect = parentNode.getBoundingClientRect(),
                targetRect = $mdUtil.clientRect(targetNode, parentNode),
                shouldOpenAroundTarget = false,
                bounds = {
                  left: parentNode.scrollLeft + SELECT_EDGE_MARGIN,
                  top: parentNode.scrollTop + SELECT_EDGE_MARGIN,
                  bottom: parentRect.height + parentNode.scrollTop - SELECT_EDGE_MARGIN,
                  right: parentRect.width - SELECT_EDGE_MARGIN
                },
                spaceAvailable = {
                  top: targetRect.top - bounds.top,
                  left: targetRect.left - bounds.left,
                  right: bounds.right - (targetRect.left + targetRect.width),
                  bottom: bounds.bottom - (targetRect.top + targetRect.height)
                },
                maxWidth = parentRect.width - SELECT_EDGE_MARGIN * 2,
                isScrollable = contentNode.scrollHeight > contentNode.offsetHeight,
                selectedNode = selectNode.querySelector('md-option[selected]'),
                optionNodes = selectNode.getElementsByTagName('md-option'),
                optgroupNodes = selectNode.getElementsByTagName('md-optgroup');
            var centeredNode;
            if (selectedNode) {
              centeredNode = selectedNode;
            } else if (optgroupNodes.length) {
              centeredNode = optgroupNodes[0];
            } else if (optionNodes.length) {
              centeredNode = optionNodes[0];
            } else {
              centeredNode = contentNode.firstElementChild || contentNode;
            }
            if (contentNode.offsetWidth > maxWidth) {
              contentNode.style['max-width'] = maxWidth + 'px';
            }
            if (shouldOpenAroundTarget) {
              contentNode.style['min-width'] = targetRect.width + 'px';
            }
            if (isScrollable) {
              selectNode.classList.add('md-overflow');
            }
            var selectMenuRect = selectNode.getBoundingClientRect();
            var centeredRect = getOffsetRect(centeredNode);
            if (centeredNode) {
              var centeredStyle = window.getComputedStyle(centeredNode);
              centeredRect.paddingLeft = parseInt(centeredStyle.paddingLeft, 10) || 0;
              centeredRect.paddingRight = parseInt(centeredStyle.paddingRight, 10) || 0;
            }
            var focusedNode = centeredNode;
            if ((focusedNode.tagName || '').toUpperCase() === 'MD-OPTGROUP') {
              focusedNode = optionNodes[0] || contentNode.firstElementChild || contentNode;
            }
            if (focusedNode) {
              opts.focusedNode = focusedNode;
              focusedNode.focus();
            }
            if (isScrollable) {
              var scrollBuffer = contentNode.offsetHeight / 2;
              contentNode.scrollTop = centeredRect.top + centeredRect.height / 2 - scrollBuffer;
              if (spaceAvailable.top < scrollBuffer) {
                contentNode.scrollTop = Math.min(centeredRect.top, contentNode.scrollTop + scrollBuffer - spaceAvailable.top);
              } else if (spaceAvailable.bottom < scrollBuffer) {
                contentNode.scrollTop = Math.max(centeredRect.top + centeredRect.height - selectMenuRect.height, contentNode.scrollTop - scrollBuffer + spaceAvailable.bottom);
              }
            }
            var left,
                top,
                transformOrigin;
            if (shouldOpenAroundTarget) {
              left = targetRect.left;
              top = targetRect.top + targetRect.height;
              transformOrigin = '50% 0';
              if (top + selectMenuRect.height > bounds.bottom) {
                top = targetRect.top - selectMenuRect.height;
                transformOrigin = '50% 100%';
              }
            } else {
              left = targetRect.left + centeredRect.left - centeredRect.paddingLeft;
              top = targetRect.top + targetRect.height / 2 - centeredRect.height / 2 - centeredRect.top + contentNode.scrollTop;
              transformOrigin = (centeredRect.left + targetRect.width / 2) + 'px ' + (centeredRect.top + centeredRect.height / 2 - contentNode.scrollTop) + 'px 0px';
              containerNode.style.minWidth = targetRect.width + centeredRect.paddingLeft + centeredRect.paddingRight + 'px';
            }
            var containerRect = containerNode.getBoundingClientRect();
            containerNode.style.left = clamp(bounds.left, left, bounds.right - containerRect.width) + 'px';
            containerNode.style.top = clamp(bounds.top, top, bounds.bottom - containerRect.height) + 'px';
            selectNode.style[$mdConstant.CSS.TRANSFORM_ORIGIN] = transformOrigin;
            selectNode.style[$mdConstant.CSS.TRANSFORM] = 'scale(' + Math.min(targetRect.width / selectMenuRect.width, 1.0) + ',' + Math.min(targetRect.height / selectMenuRect.height, 1.0) + ')';
            $$rAF(function() {
              element.addClass('md-active');
              selectNode.style[$mdConstant.CSS.TRANSFORM] = '';
            });
          }
        }
        function clamp(min, n, max) {
          return Math.min(max, Math.max(n, min));
        }
        function getOffsetRect(node) {
          return node ? {
            left: node.offsetLeft,
            top: node.offsetTop,
            width: node.offsetWidth,
            height: node.offsetHeight
          } : {
            left: 0,
            top: 0,
            width: 0,
            height: 0
          };
        }
      }
      SelectProvider.$inject = ["$$interimElementProvider"];
      function nodesToArray(nodes) {
        var results = [];
        for (var i = 0; i < nodes.length; ++i) {
          results.push(nodes.item(i));
        }
        return results;
      }
    })();
    (function() {
      'use strict';
      angular.module('material.components.sidenav', ['material.core', 'material.components.backdrop']).factory('$mdSidenav', SidenavService).directive('mdSidenav', SidenavDirective).controller('$mdSidenavController', SidenavController);
      function SidenavService($mdComponentRegistry, $q) {
        return function(handle) {
          var errorMsg = "SideNav '" + handle + "' is not available!";
          var instance = $mdComponentRegistry.get(handle);
          if (!instance) {
            $mdComponentRegistry.notFoundError(handle);
          }
          return {
            isOpen: function() {
              return instance && instance.isOpen();
            },
            isLockedOpen: function() {
              return instance && instance.isLockedOpen();
            },
            toggle: function() {
              return instance ? instance.toggle() : $q.reject(errorMsg);
            },
            open: function() {
              return instance ? instance.open() : $q.reject(errorMsg);
            },
            close: function() {
              return instance ? instance.close() : $q.reject(errorMsg);
            }
          };
        };
      }
      SidenavService.$inject = ["$mdComponentRegistry", "$q"];
      function SidenavDirective($timeout, $animate, $parse, $log, $mdMedia, $mdConstant, $compile, $mdTheming, $q, $document) {
        return {
          restrict: 'E',
          scope: {isOpen: '=?mdIsOpen'},
          controller: '$mdSidenavController',
          compile: function(element) {
            element.addClass('md-closed');
            element.attr('tabIndex', '-1');
            return postLink;
          }
        };
        function postLink(scope, element, attr, sidenavCtrl) {
          var triggeringElement = null;
          var promise = $q.when(true);
          var isLockedOpenParsed = $parse(attr.mdIsLockedOpen);
          var isLocked = function() {
            return isLockedOpenParsed(scope.$parent, {
              $media: function(arg) {
                $log.warn("$media is deprecated for is-locked-open. Use $mdMedia instead.");
                return $mdMedia(arg);
              },
              $mdMedia: $mdMedia
            });
          };
          var backdrop = $compile('<md-backdrop class="md-sidenav-backdrop md-opaque ng-enter">')(scope);
          element.on('$destroy', sidenavCtrl.destroy);
          $mdTheming.inherit(backdrop, element);
          scope.$watch(isLocked, updateIsLocked);
          scope.$watch('isOpen', updateIsOpen);
          sidenavCtrl.$toggleOpen = toggleOpen;
          function updateIsLocked(isLocked, oldValue) {
            scope.isLockedOpen = isLocked;
            if (isLocked === oldValue) {
              element.toggleClass('md-locked-open', !!isLocked);
            } else {
              $animate[isLocked ? 'addClass' : 'removeClass'](element, 'md-locked-open');
            }
            backdrop.toggleClass('md-locked-open', !!isLocked);
          }
          function updateIsOpen(isOpen) {
            var parent = element.parent();
            parent[isOpen ? 'on' : 'off']('keydown', onKeyDown);
            backdrop[isOpen ? 'on' : 'off']('click', close);
            if (isOpen) {
              triggeringElement = $document[0].activeElement;
            }
            return promise = $q.all([$animate[isOpen ? 'enter' : 'leave'](backdrop, parent), $animate[isOpen ? 'removeClass' : 'addClass'](element, 'md-closed').then(function() {
              if (scope.isOpen) {
                element.focus();
              }
            })]);
          }
          function toggleOpen(isOpen) {
            if (scope.isOpen == isOpen) {
              return $q.when(true);
            } else {
              var deferred = $q.defer();
              scope.isOpen = isOpen;
              $timeout(function() {
                promise.then(function(result) {
                  if (!scope.isOpen) {
                    triggeringElement && triggeringElement.focus();
                    triggeringElement = null;
                  }
                  deferred.resolve(result);
                });
              }, 0, false);
              return deferred.promise;
            }
          }
          function onKeyDown(ev) {
            var isEscape = (ev.keyCode === $mdConstant.KEY_CODE.ESCAPE);
            return isEscape ? close(ev) : $q.when(true);
          }
          function close(ev) {
            ev.preventDefault();
            ev.stopPropagation();
            return sidenavCtrl.close();
          }
        }
      }
      SidenavDirective.$inject = ["$timeout", "$animate", "$parse", "$log", "$mdMedia", "$mdConstant", "$compile", "$mdTheming", "$q", "$document"];
      function SidenavController($scope, $element, $attrs, $mdComponentRegistry, $q) {
        var self = this;
        self.$toggleOpen = function() {
          return $q.when($scope.isOpen);
        };
        self.isOpen = function() {
          return !!$scope.isOpen;
        };
        self.isLockedOpen = function() {
          return !!$scope.isLockedOpen;
        };
        self.open = function() {
          return self.$toggleOpen(true);
        };
        self.close = function() {
          return self.$toggleOpen(false);
        };
        self.toggle = function() {
          return self.$toggleOpen(!$scope.isOpen);
        };
        self.destroy = $mdComponentRegistry.register(self, $attrs.mdComponentId);
      }
      SidenavController.$inject = ["$scope", "$element", "$attrs", "$mdComponentRegistry", "$q"];
    })();
    (function() {
      'use strict';
      angular.module('material.components.slider', ['material.core']).directive('mdSlider', SliderDirective);
      function SliderDirective($$rAF, $window, $mdAria, $mdUtil, $mdConstant, $mdTheming, $mdGesture, $parse) {
        return {
          scope: {},
          require: '?ngModel',
          template: '<div class="md-slider-wrapper">\
        <div class="md-track-container">\
          <div class="md-track"></div>\
          <div class="md-track md-track-fill"></div>\
          <div class="md-track-ticks"></div>\
        </div>\
        <div class="md-thumb-container">\
          <div class="md-thumb"></div>\
          <div class="md-focus-thumb"></div>\
          <div class="md-focus-ring"></div>\
          <div class="md-sign">\
            <span class="md-thumb-text"></span>\
          </div>\
          <div class="md-disabled-thumb"></div>\
        </div>\
      </div>',
          compile: compile
        };
        function compile(tElement, tAttrs) {
          tElement.attr({
            tabIndex: 0,
            role: 'slider'
          });
          $mdAria.expect(tElement, 'aria-label');
          return postLink;
        }
        function postLink(scope, element, attr, ngModelCtrl) {
          $mdTheming(element);
          ngModelCtrl = ngModelCtrl || {
            $setViewValue: function(val) {
              this.$viewValue = val;
              this.$viewChangeListeners.forEach(function(cb) {
                cb();
              });
            },
            $parsers: [],
            $formatters: [],
            $viewChangeListeners: []
          };
          var isDisabledParsed = attr.ngDisabled && $parse(attr.ngDisabled);
          var isDisabledGetter = isDisabledParsed ? function() {
            return isDisabledParsed(scope.$parent);
          } : angular.noop;
          var thumb = angular.element(element[0].querySelector('.md-thumb'));
          var thumbText = angular.element(element[0].querySelector('.md-thumb-text'));
          var thumbContainer = thumb.parent();
          var trackContainer = angular.element(element[0].querySelector('.md-track-container'));
          var activeTrack = angular.element(element[0].querySelector('.md-track-fill'));
          var tickContainer = angular.element(element[0].querySelector('.md-track-ticks'));
          var throttledRefreshDimensions = $mdUtil.throttle(refreshSliderDimensions, 5000);
          attr.min ? attr.$observe('min', updateMin) : updateMin(0);
          attr.max ? attr.$observe('max', updateMax) : updateMax(100);
          attr.step ? attr.$observe('step', updateStep) : updateStep(1);
          var stopDisabledWatch = angular.noop;
          if (attr.ngDisabled) {
            stopDisabledWatch = scope.$parent.$watch(attr.ngDisabled, updateAriaDisabled);
          }
          $mdGesture.register(element, 'drag');
          element.on('keydown', keydownListener).on('$md.pressdown', onPressDown).on('$md.pressup', onPressUp).on('$md.dragstart', onDragStart).on('$md.drag', onDrag).on('$md.dragend', onDragEnd);
          function updateAll() {
            refreshSliderDimensions();
            ngModelRender();
            redrawTicks();
          }
          setTimeout(updateAll);
          var debouncedUpdateAll = $$rAF.throttle(updateAll);
          angular.element($window).on('resize', debouncedUpdateAll);
          scope.$on('$destroy', function() {
            angular.element($window).off('resize', debouncedUpdateAll);
            stopDisabledWatch();
          });
          ngModelCtrl.$render = ngModelRender;
          ngModelCtrl.$viewChangeListeners.push(ngModelRender);
          ngModelCtrl.$formatters.push(minMaxValidator);
          ngModelCtrl.$formatters.push(stepValidator);
          var min;
          var max;
          var step;
          function updateMin(value) {
            min = parseFloat(value);
            element.attr('aria-valuemin', value);
            updateAll();
          }
          function updateMax(value) {
            max = parseFloat(value);
            element.attr('aria-valuemax', value);
            updateAll();
          }
          function updateStep(value) {
            step = parseFloat(value);
            redrawTicks();
          }
          function updateAriaDisabled(isDisabled) {
            element.attr('aria-disabled', !!isDisabled);
          }
          var tickCanvas,
              tickCtx;
          function redrawTicks() {
            if (!angular.isDefined(attr.mdDiscrete))
              return ;
            var numSteps = Math.floor((max - min) / step);
            if (!tickCanvas) {
              var trackTicksStyle = $window.getComputedStyle(tickContainer[0]);
              tickCanvas = angular.element('<canvas style="position:absolute;">');
              tickCtx = tickCanvas[0].getContext('2d');
              tickCtx.fillStyle = trackTicksStyle.backgroundColor || 'black';
              tickContainer.append(tickCanvas);
            }
            var dimensions = getSliderDimensions();
            tickCanvas[0].width = dimensions.width;
            tickCanvas[0].height = dimensions.height;
            var distance;
            for (var i = 0; i <= numSteps; i++) {
              distance = Math.floor(dimensions.width * (i / numSteps));
              tickCtx.fillRect(distance - 1, 0, 2, dimensions.height);
            }
          }
          var sliderDimensions = {};
          refreshSliderDimensions();
          function refreshSliderDimensions() {
            sliderDimensions = trackContainer[0].getBoundingClientRect();
          }
          function getSliderDimensions() {
            throttledRefreshDimensions();
            return sliderDimensions;
          }
          function keydownListener(ev) {
            if (element[0].hasAttribute('disabled')) {
              return ;
            }
            var changeAmount;
            if (ev.keyCode === $mdConstant.KEY_CODE.LEFT_ARROW) {
              changeAmount = -step;
            } else if (ev.keyCode === $mdConstant.KEY_CODE.RIGHT_ARROW) {
              changeAmount = step;
            }
            if (changeAmount) {
              if (ev.metaKey || ev.ctrlKey || ev.altKey) {
                changeAmount *= 4;
              }
              ev.preventDefault();
              ev.stopPropagation();
              scope.$evalAsync(function() {
                setModelValue(ngModelCtrl.$viewValue + changeAmount);
              });
            }
          }
          function setModelValue(value) {
            ngModelCtrl.$setViewValue(minMaxValidator(stepValidator(value)));
          }
          function ngModelRender() {
            if (isNaN(ngModelCtrl.$viewValue)) {
              ngModelCtrl.$viewValue = ngModelCtrl.$modelValue;
            }
            var percent = (ngModelCtrl.$viewValue - min) / (max - min);
            scope.modelValue = ngModelCtrl.$viewValue;
            element.attr('aria-valuenow', ngModelCtrl.$viewValue);
            setSliderPercent(percent);
            thumbText.text(ngModelCtrl.$viewValue);
          }
          function minMaxValidator(value) {
            if (angular.isNumber(value)) {
              return Math.max(min, Math.min(max, value));
            }
          }
          function stepValidator(value) {
            if (angular.isNumber(value)) {
              return Math.round(value / step) * step;
            }
          }
          function setSliderPercent(percent) {
            activeTrack.css('width', (percent * 100) + '%');
            thumbContainer.css('left', (percent * 100) + '%');
            element.toggleClass('md-min', percent === 0);
          }
          var isDragging = false;
          var isDiscrete = angular.isDefined(attr.mdDiscrete);
          function onPressDown(ev) {
            if (isDisabledGetter())
              return ;
            element.addClass('active');
            element[0].focus();
            refreshSliderDimensions();
            var exactVal = percentToValue(positionToPercent(ev.pointer.x));
            var closestVal = minMaxValidator(stepValidator(exactVal));
            scope.$apply(function() {
              setModelValue(closestVal);
              setSliderPercent(valueToPercent(closestVal));
            });
          }
          function onPressUp(ev) {
            if (isDisabledGetter())
              return ;
            element.removeClass('dragging active');
            var exactVal = percentToValue(positionToPercent(ev.pointer.x));
            var closestVal = minMaxValidator(stepValidator(exactVal));
            scope.$apply(function() {
              setModelValue(closestVal);
              ngModelRender();
            });
          }
          function onDragStart(ev) {
            if (isDisabledGetter())
              return ;
            isDragging = true;
            ev.stopPropagation();
            element.addClass('dragging');
            setSliderFromEvent(ev);
          }
          function onDrag(ev) {
            if (!isDragging)
              return ;
            ev.stopPropagation();
            setSliderFromEvent(ev);
          }
          function onDragEnd(ev) {
            if (!isDragging)
              return ;
            ev.stopPropagation();
            isDragging = false;
          }
          function setSliderFromEvent(ev) {
            if (isDiscrete)
              adjustThumbPosition(ev.pointer.x);
            else
              doSlide(ev.pointer.x);
          }
          function doSlide(x) {
            scope.$evalAsync(function() {
              setModelValue(percentToValue(positionToPercent(x)));
            });
          }
          function adjustThumbPosition(x) {
            var exactVal = percentToValue(positionToPercent(x));
            var closestVal = minMaxValidator(stepValidator(exactVal));
            setSliderPercent(positionToPercent(x));
            thumbText.text(closestVal);
          }
          function positionToPercent(x) {
            return Math.max(0, Math.min(1, (x - sliderDimensions.left) / (sliderDimensions.width)));
          }
          function percentToValue(percent) {
            return (min + percent * (max - min));
          }
          function valueToPercent(val) {
            return (val - min) / (max - min);
          }
        }
      }
      SliderDirective.$inject = ["$$rAF", "$window", "$mdAria", "$mdUtil", "$mdConstant", "$mdTheming", "$mdGesture", "$parse"];
    })();
    (function() {
      'use strict';
      angular.module('material.components.sticky', ['material.core', 'material.components.content']).factory('$mdSticky', MdSticky);
      function MdSticky($document, $mdConstant, $compile, $$rAF, $mdUtil) {
        var browserStickySupport = checkStickySupport();
        return function registerStickyElement(scope, element, stickyClone) {
          var contentCtrl = element.controller('mdContent');
          if (!contentCtrl)
            return ;
          if (browserStickySupport) {
            element.css({
              position: browserStickySupport,
              top: 0,
              'z-index': 2
            });
          } else {
            var $$sticky = contentCtrl.$element.data('$$sticky');
            if (!$$sticky) {
              $$sticky = setupSticky(contentCtrl);
              contentCtrl.$element.data('$$sticky', $$sticky);
            }
            var deregister = $$sticky.add(element, stickyClone || element.clone());
            scope.$on('$destroy', deregister);
          }
        };
        function setupSticky(contentCtrl) {
          var contentEl = contentCtrl.$element;
          var debouncedRefreshElements = $$rAF.throttle(refreshElements);
          setupAugmentedScrollEvents(contentEl);
          contentEl.on('$scrollstart', debouncedRefreshElements);
          contentEl.on('$scroll', onScroll);
          var self;
          var stickyBaseoffset = contentEl.prop('offsetTop');
          return self = {
            prev: null,
            current: null,
            next: null,
            items: [],
            add: add,
            refreshElements: refreshElements
          };
          function add(element, stickyClone) {
            stickyClone.addClass('md-sticky-clone');
            stickyClone.css('top', stickyBaseoffset + 'px');
            var item = {
              element: element,
              clone: stickyClone
            };
            self.items.push(item);
            contentEl.parent().prepend(item.clone);
            debouncedRefreshElements();
            return function remove() {
              self.items.forEach(function(item, index) {
                if (item.element[0] === element[0]) {
                  self.items.splice(index, 1);
                  item.clone.remove();
                }
              });
              debouncedRefreshElements();
            };
          }
          function refreshElements() {
            self.items.forEach(refreshPosition);
            self.items = self.items.sort(function(a, b) {
              return a.top < b.top ? -1 : 1;
            });
            var item;
            var currentScrollTop = contentEl.prop('scrollTop');
            for (var i = self.items.length - 1; i >= 0; i--) {
              if (currentScrollTop > self.items[i].top) {
                item = self.items[i];
                break;
              }
            }
            setCurrentItem(item);
          }
          function refreshPosition(item) {
            var current = item.element[0];
            item.top = 0;
            item.left = 0;
            while (current && current !== contentEl[0]) {
              item.top += current.offsetTop;
              item.left += current.offsetLeft;
              current = current.offsetParent;
            }
            item.height = item.element.prop('offsetHeight');
            item.clone.css('margin-left', item.left + 'px');
          }
          function onScroll() {
            var scrollTop = contentEl.prop('scrollTop');
            var isScrollingDown = scrollTop > (onScroll.prevScrollTop || 0);
            onScroll.prevScrollTop = scrollTop;
            if (scrollTop === 0) {
              setCurrentItem(null);
            } else if (isScrollingDown && self.next) {
              if (self.next.top - scrollTop <= 0) {
                setCurrentItem(self.next);
              } else if (self.current) {
                if (self.next.top - scrollTop <= self.next.height) {
                  translate(self.current, self.next.top - self.next.height - scrollTop);
                } else {
                  translate(self.current, null);
                }
              }
            } else if (!isScrollingDown && self.current) {
              if (scrollTop < self.current.top) {
                setCurrentItem(self.prev);
              }
              if (self.current && self.next) {
                if (scrollTop >= self.next.top - self.current.height) {
                  translate(self.current, self.next.top - scrollTop - self.current.height);
                } else {
                  translate(self.current, null);
                }
              }
            }
          }
          function setCurrentItem(item) {
            if (self.current === item)
              return ;
            if (self.current) {
              translate(self.current, null);
              setStickyState(self.current, null);
            }
            if (item) {
              setStickyState(item, 'active');
            }
            self.current = item;
            var index = self.items.indexOf(item);
            self.next = self.items[index + 1];
            self.prev = self.items[index - 1];
            setStickyState(self.next, 'next');
            setStickyState(self.prev, 'prev');
          }
          function setStickyState(item, state) {
            if (!item || item.state === state)
              return ;
            if (item.state) {
              item.clone.attr('sticky-prev-state', item.state);
              item.element.attr('sticky-prev-state', item.state);
            }
            item.clone.attr('sticky-state', state);
            item.element.attr('sticky-state', state);
            item.state = state;
          }
          function translate(item, amount) {
            if (!item)
              return ;
            if (amount === null || amount === undefined) {
              if (item.translateY) {
                item.translateY = null;
                item.clone.css($mdConstant.CSS.TRANSFORM, '');
              }
            } else {
              item.translateY = amount;
              item.clone.css($mdConstant.CSS.TRANSFORM, 'translate3d(' + item.left + 'px,' + amount + 'px,0)');
            }
          }
        }
        function checkStickySupport($el) {
          var stickyProp;
          var testEl = angular.element('<div>');
          $document[0].body.appendChild(testEl[0]);
          var stickyProps = ['sticky', '-webkit-sticky'];
          for (var i = 0; i < stickyProps.length; ++i) {
            testEl.css({
              position: stickyProps[i],
              top: 0,
              'z-index': 2
            });
            if (testEl.css('position') == stickyProps[i]) {
              stickyProp = stickyProps[i];
              break;
            }
          }
          testEl.remove();
          return stickyProp;
        }
        function setupAugmentedScrollEvents(element) {
          var SCROLL_END_DELAY = 200;
          var isScrolling;
          var lastScrollTime;
          element.on('scroll touchmove', function() {
            if (!isScrolling) {
              isScrolling = true;
              $$rAF(loopScrollEvent);
              element.triggerHandler('$scrollstart');
            }
            element.triggerHandler('$scroll');
            lastScrollTime = +$mdUtil.now();
          });
          function loopScrollEvent() {
            if (+$mdUtil.now() - lastScrollTime > SCROLL_END_DELAY) {
              isScrolling = false;
              element.triggerHandler('$scrollend');
            } else {
              element.triggerHandler('$scroll');
              $$rAF(loopScrollEvent);
            }
          }
        }
      }
      MdSticky.$inject = ["$document", "$mdConstant", "$compile", "$$rAF", "$mdUtil"];
    })();
    (function() {
      'use strict';
      angular.module('material.components.subheader', ['material.core', 'material.components.sticky']).directive('mdSubheader', MdSubheaderDirective);
      function MdSubheaderDirective($mdSticky, $compile, $mdTheming) {
        return {
          restrict: 'E',
          replace: true,
          transclude: true,
          template: '<h2 class="md-subheader">' + '<span class="md-subheader-content"></span>' + '</h2>',
          compile: function(element, attr, transclude) {
            var outerHTML = element[0].outerHTML;
            return function postLink(scope, element, attr) {
              $mdTheming(element);
              function getContent(el) {
                return angular.element(el[0].querySelector('.md-subheader-content'));
              }
              transclude(scope, function(clone) {
                getContent(element).append(clone);
              });
              transclude(scope, function(clone) {
                var stickyClone = $compile(angular.element(outerHTML))(scope);
                $mdTheming(stickyClone);
                getContent(stickyClone).append(clone);
                $mdSticky(scope, element, stickyClone);
              });
            };
          }
        };
      }
      MdSubheaderDirective.$inject = ["$mdSticky", "$compile", "$mdTheming"];
    })();
    (function() {
      'use strict';
      var module = angular.module('material.components.swipe', []);
      ['SwipeLeft', 'SwipeRight'].forEach(function(name) {
        var directiveName = 'md' + name;
        var eventName = '$md.' + name.toLowerCase();
        module.directive(directiveName, ["$parse", function($parse) {
          return {
            restrict: 'A',
            link: postLink
          };
          function postLink(scope, element, attr) {
            var fn = $parse(attr[directiveName]);
            element.on(eventName, function(ev) {
              scope.$apply(function() {
                fn(scope, {$event: ev});
              });
            });
          }
        }]);
      });
    })();
    (function() {
      'use strict';
      angular.module('material.components.switch', ['material.core', 'material.components.checkbox']).directive('mdSwitch', MdSwitch);
      function MdSwitch(mdCheckboxDirective, $mdTheming, $mdUtil, $document, $mdConstant, $parse, $$rAF, $mdGesture) {
        var checkboxDirective = mdCheckboxDirective[0];
        return {
          restrict: 'E',
          transclude: true,
          template: '<div class="md-container">' + '<div class="md-bar"></div>' + '<div class="md-thumb-container">' + '<div class="md-thumb" md-ink-ripple md-ink-ripple-checkbox></div>' + '</div>' + '</div>' + '<div ng-transclude class="md-label">' + '</div>',
          require: '?ngModel',
          compile: compile
        };
        function compile(element, attr) {
          var checkboxLink = checkboxDirective.compile(element, attr);
          element.addClass('md-dragging');
          return function(scope, element, attr, ngModel) {
            ngModel = ngModel || $mdUtil.fakeNgModel();
            var disabledGetter = $parse(attr.ngDisabled);
            var thumbContainer = angular.element(element[0].querySelector('.md-thumb-container'));
            var switchContainer = angular.element(element[0].querySelector('.md-container'));
            $$rAF(function() {
              element.removeClass('md-dragging');
            });
            checkboxLink(scope, element, attr, ngModel);
            if (angular.isDefined(attr.ngDisabled)) {
              scope.$watch(disabledGetter, function(isDisabled) {
                element.attr('tabindex', isDisabled ? -1 : 0);
              });
            }
            $mdGesture.register(switchContainer, 'drag');
            switchContainer.on('$md.dragstart', onDragStart).on('$md.drag', onDrag).on('$md.dragend', onDragEnd);
            var drag;
            function onDragStart(ev) {
              if (disabledGetter(scope))
                return ;
              ev.stopPropagation();
              element.addClass('md-dragging');
              drag = {width: thumbContainer.prop('offsetWidth')};
              element.removeClass('transition');
            }
            function onDrag(ev) {
              if (!drag)
                return ;
              ev.stopPropagation();
              ev.srcEvent && ev.srcEvent.preventDefault();
              var percent = ev.pointer.distanceX / drag.width;
              var translate = ngModel.$viewValue ? 1 + percent : percent;
              translate = Math.max(0, Math.min(1, translate));
              thumbContainer.css($mdConstant.CSS.TRANSFORM, 'translate3d(' + (100 * translate) + '%,0,0)');
              drag.translate = translate;
            }
            function onDragEnd(ev) {
              if (!drag)
                return ;
              ev.stopPropagation();
              element.removeClass('md-dragging');
              thumbContainer.css($mdConstant.CSS.TRANSFORM, '');
              var isChanged = ngModel.$viewValue ? drag.translate < 0.5 : drag.translate > 0.5;
              if (isChanged) {
                applyModelValue(!ngModel.$viewValue);
              }
              drag = null;
            }
            function applyModelValue(newValue) {
              scope.$apply(function() {
                ngModel.$setViewValue(newValue);
                ngModel.$render();
              });
            }
          };
        }
      }
      MdSwitch.$inject = ["mdCheckboxDirective", "$mdTheming", "$mdUtil", "$document", "$mdConstant", "$parse", "$$rAF", "$mdGesture"];
    })();
    (function() {
      'use strict';
      angular.module('material.components.tabs', ['material.core', 'material.components.icon']);
    })();
    (function() {
      'use strict';
      angular.module('material.components.textField', ['material.core']).directive('mdInputGroup', mdInputGroupDirective).directive('mdInput', mdInputDirective).directive('mdTextFloat', mdTextFloatDirective);
      function mdTextFloatDirective($mdTheming, $mdUtil, $parse, $log) {
        return {
          restrict: 'E',
          replace: true,
          scope: {
            fid: '@?mdFid',
            label: '@?',
            value: '=ngModel'
          },
          compile: function(element, attr) {
            $log.warn('<md-text-float> is deprecated. Please use `<md-input-container>` and `<input>`.' + 'More information at http://material.angularjs.org/#/api/material.components.input/directive/mdInputContainer');
            if (angular.isUndefined(attr.mdFid)) {
              attr.mdFid = $mdUtil.nextUid();
            }
            return {
              pre: function(scope, element, attrs) {
                var disabledParsed = $parse(attrs.ngDisabled);
                scope.isDisabled = function() {
                  return disabledParsed(scope.$parent);
                };
                scope.inputType = attrs.type || "text";
              },
              post: $mdTheming
            };
          },
          template: '<md-input-group tabindex="-1">' + ' <label for="{{fid}}" >{{label}}</label>' + ' <md-input id="{{fid}}" ng-disabled="isDisabled()" ng-model="value" type="{{inputType}}"></md-input>' + '</md-input-group>'
        };
      }
      mdTextFloatDirective.$inject = ["$mdTheming", "$mdUtil", "$parse", "$log"];
      function mdInputGroupDirective($log) {
        return {
          restrict: 'CE',
          controller: ['$element', function($element) {
            $log.warn('<md-input-group> is deprecated. Please use `<md-input-container>` and `<input>`.' + 'More information at http://material.angularjs.org/#/api/material.components.input/directive/mdInputContainer');
            this.setFocused = function(isFocused) {
              $element.toggleClass('md-input-focused', !!isFocused);
            };
            this.setHasValue = function(hasValue) {
              $element.toggleClass('md-input-has-value', hasValue);
            };
          }]
        };
      }
      mdInputGroupDirective.$inject = ["$log"];
      function mdInputDirective($mdUtil, $log) {
        return {
          restrict: 'E',
          replace: true,
          template: '<input >',
          require: ['^?mdInputGroup', '?ngModel'],
          link: function(scope, element, attr, ctrls) {
            if (!ctrls[0])
              return ;
            $log.warn('<md-input> is deprecated. Please use `<md-input-container>` and `<input>`.' + 'More information at http://material.angularjs.org/#/api/material.components.input/directive/mdInputContainer');
            var inputGroupCtrl = ctrls[0];
            var ngModelCtrl = ctrls[1];
            scope.$watch(scope.isDisabled, function(isDisabled) {
              element.attr('aria-disabled', !!isDisabled);
              element.attr('tabindex', !!isDisabled);
            });
            element.attr('type', attr.type || element.parent().attr('type') || "text");
            if (ngModelCtrl) {
              ngModelCtrl.$formatters.push(function(value) {
                inputGroupCtrl.setHasValue(isNotEmpty(value));
                return value;
              });
            }
            element.on('input', function() {
              inputGroupCtrl.setHasValue(isNotEmpty());
            }).on('focus', function(e) {
              inputGroupCtrl.setFocused(true);
            }).on('blur', function(e) {
              inputGroupCtrl.setFocused(false);
              inputGroupCtrl.setHasValue(isNotEmpty());
            });
            scope.$on('$destroy', function() {
              inputGroupCtrl.setFocused(false);
              inputGroupCtrl.setHasValue(false);
            });
            function isNotEmpty(value) {
              value = angular.isUndefined(value) ? element.val() : value;
              return (angular.isDefined(value) && (value !== null) && (value.toString().trim() !== ""));
            }
          }
        };
      }
      mdInputDirective.$inject = ["$mdUtil", "$log"];
    })();
    (function() {
      'use strict';
      angular.module('material.components.toast', ['material.core', 'material.components.button']).directive('mdToast', MdToastDirective).provider('$mdToast', MdToastProvider);
      function MdToastDirective() {
        return {restrict: 'E'};
      }
      function MdToastProvider($$interimElementProvider) {
        var activeToastContent;
        var $mdToast = $$interimElementProvider('$mdToast').setDefaults({
          methods: ['position', 'hideDelay', 'capsule'],
          options: toastDefaultOptions
        }).addPreset('simple', {
          argOption: 'content',
          methods: ['content', 'action', 'highlightAction', 'theme'],
          options: ["$mdToast", "$mdTheming", function($mdToast, $mdTheming) {
            var opts = {
              template: ['<md-toast md-theme="{{ toast.theme }}" ng-class="{\'md-capsule\': toast.capsule}">', '<span flex>{{ toast.content }}</span>', '<md-button class="md-action" ng-if="toast.action" ng-click="toast.resolve()" ng-class="{\'md-highlight\': toast.highlightAction}">', '{{ toast.action }}', '</md-button>', '</md-toast>'].join(''),
              controller: ["$scope", function mdToastCtrl($scope) {
                var self = this;
                $scope.$watch(function() {
                  return activeToastContent;
                }, function() {
                  self.content = activeToastContent;
                });
                this.resolve = function() {
                  $mdToast.hide();
                };
              }],
              theme: $mdTheming.defaultTheme(),
              controllerAs: 'toast',
              bindToController: true
            };
            return opts;
          }]
        }).addMethod('updateContent', function(newContent) {
          activeToastContent = newContent;
        });
        toastDefaultOptions.$inject = ["$timeout", "$animate", "$mdToast"];
        return $mdToast;
        function toastDefaultOptions($timeout, $animate, $mdToast) {
          return {
            onShow: onShow,
            onRemove: onRemove,
            position: 'bottom left',
            themable: true,
            hideDelay: 3000
          };
          function onShow(scope, element, options) {
            activeToastContent = options.content;
            element.addClass(options.position.split(' ').map(function(pos) {
              return 'md-' + pos;
            }).join(' '));
            options.parent.addClass(toastOpenClass(options.position));
            options.onSwipe = function(ev, gesture) {
              element.addClass('md-' + ev.type.replace('$md.', ''));
              $timeout($mdToast.cancel);
            };
            element.on('$md.swipeleft $md.swiperight', options.onSwipe);
            return $animate.enter(element, options.parent);
          }
          function onRemove(scope, element, options) {
            element.off('$md.swipeleft $md.swiperight', options.onSwipe);
            options.parent.removeClass(toastOpenClass(options.position));
            return $animate.leave(element);
          }
          function toastOpenClass(position) {
            return 'md-toast-open-' + (position.indexOf('top') > -1 ? 'top' : 'bottom');
          }
        }
      }
      MdToastProvider.$inject = ["$$interimElementProvider"];
    })();
    (function() {
      'use strict';
      angular.module('material.components.toolbar', ['material.core', 'material.components.content']).directive('mdToolbar', mdToolbarDirective);
      function mdToolbarDirective($$rAF, $mdConstant, $mdUtil, $mdTheming) {
        return {
          restrict: 'E',
          controller: angular.noop,
          link: function(scope, element, attr) {
            $mdTheming(element);
            if (angular.isDefined(attr.mdScrollShrink)) {
              setupScrollShrink();
            }
            function setupScrollShrink() {
              var y = 0;
              var prevScrollTop = 0;
              var shrinkSpeedFactor = attr.mdShrinkSpeedFactor || 0.5;
              var toolbarHeight;
              var contentElement;
              var debouncedContentScroll = $$rAF.throttle(onContentScroll);
              var debouncedUpdateHeight = $mdUtil.debounce(updateToolbarHeight, 5 * 1000);
              scope.$on('$mdContentLoaded', onMdContentLoad);
              function onMdContentLoad($event, newContentEl) {
                if (element.parent()[0] === newContentEl.parent()[0]) {
                  if (contentElement) {
                    contentElement.off('scroll', debouncedContentScroll);
                  }
                  newContentEl.on('scroll', debouncedContentScroll);
                  newContentEl.attr('scroll-shrink', 'true');
                  contentElement = newContentEl;
                  $$rAF(updateToolbarHeight);
                }
              }
              function updateToolbarHeight() {
                toolbarHeight = element.prop('offsetHeight');
                contentElement.css('margin-top', (-toolbarHeight * shrinkSpeedFactor) + 'px');
                onContentScroll();
              }
              function onContentScroll(e) {
                var scrollTop = e ? e.target.scrollTop : prevScrollTop;
                debouncedUpdateHeight();
                y = Math.min(toolbarHeight / shrinkSpeedFactor, Math.max(0, y + scrollTop - prevScrollTop));
                element.css($mdConstant.CSS.TRANSFORM, 'translate3d(0,' + (-y * shrinkSpeedFactor) + 'px,0)');
                contentElement.css($mdConstant.CSS.TRANSFORM, 'translate3d(0,' + ((toolbarHeight - y) * shrinkSpeedFactor) + 'px,0)');
                prevScrollTop = scrollTop;
              }
            }
          }
        };
      }
      mdToolbarDirective.$inject = ["$$rAF", "$mdConstant", "$mdUtil", "$mdTheming"];
    })();
    (function() {
      'use strict';
      angular.module('material.components.tooltip', ['material.core']).directive('mdTooltip', MdTooltipDirective);
      function MdTooltipDirective($timeout, $window, $$rAF, $document, $mdUtil, $mdTheming, $rootElement, $animate, $q) {
        var TOOLTIP_SHOW_DELAY = 0;
        var TOOLTIP_WINDOW_EDGE_SPACE = 8;
        return {
          restrict: 'E',
          transclude: true,
          template: '<div class="md-background"></div>' + '<div class="md-content" ng-transclude></div>',
          scope: {
            visible: '=?mdVisible',
            delay: '=?mdDelay'
          },
          link: postLink
        };
        function postLink(scope, element, attr, contentCtrl) {
          $mdTheming(element);
          var parent = element.parent();
          var background = angular.element(element[0].getElementsByClassName('md-background')[0]);
          var content = angular.element(element[0].getElementsByClassName('md-content')[0]);
          var direction = attr.mdDirection;
          while ($window.getComputedStyle(parent[0])['pointer-events'] == 'none') {
            parent = parent.parent();
          }
          var current = element.parent()[0];
          while (current && current !== $rootElement[0] && current !== document.body) {
            if (current.tagName && current.tagName.toLowerCase() == 'md-content')
              break;
            current = current.parentNode;
          }
          var tooltipParent = angular.element(current || document.body);
          if (!angular.isDefined(attr.mdDelay)) {
            scope.delay = TOOLTIP_SHOW_DELAY;
          }
          element.detach();
          element.attr('role', 'tooltip');
          element.attr('id', attr.id || ('tooltip_' + $mdUtil.nextUid()));
          parent.on('focus mouseenter touchstart', function() {
            setVisible(true);
          });
          parent.on('blur mouseleave touchend touchcancel', function() {
            if ($document[0].activeElement !== parent[0])
              setVisible(false);
          });
          scope.$watch('visible', function(isVisible) {
            if (isVisible)
              showTooltip();
            else
              hideTooltip();
          });
          var debouncedOnResize = $$rAF.throttle(function() {
            if (scope.visible)
              positionTooltip();
          });
          angular.element($window).on('resize', debouncedOnResize);
          scope.$on('$destroy', function() {
            scope.visible = false;
            element.remove();
            angular.element($window).off('resize', debouncedOnResize);
          });
          function setVisible(value) {
            setVisible.value = !!value;
            if (!setVisible.queued) {
              if (value) {
                setVisible.queued = true;
                $timeout(function() {
                  scope.visible = setVisible.value;
                  setVisible.queued = false;
                }, scope.delay);
              } else {
                $timeout(function() {
                  scope.visible = false;
                });
              }
            }
          }
          function showTooltip() {
            parent.attr('aria-describedby', element.attr('id'));
            tooltipParent.append(element);
            positionTooltip();
            $animate.addClass(element, 'md-show');
            $animate.addClass(background, 'md-show');
            $animate.addClass(content, 'md-show');
          }
          function hideTooltip() {
            parent.removeAttr('aria-describedby');
            $q.all([$animate.removeClass(content, 'md-show'), $animate.removeClass(background, 'md-show'), $animate.removeClass(element, 'md-show')]).then(function() {
              if (!scope.visible)
                element.detach();
            });
          }
          function positionTooltip() {
            var tipRect = $mdUtil.offsetRect(element, tooltipParent);
            var parentRect = $mdUtil.offsetRect(parent, tooltipParent);
            var newPosition = getPosition(direction);
            if (direction) {
              newPosition = fitInParent(newPosition);
            } else if (newPosition.top > tooltipParent.prop('scrollHeight') - tipRect.height - TOOLTIP_WINDOW_EDGE_SPACE) {
              newPosition = fitInParent(getPosition('top'));
            }
            element.css({
              top: newPosition.top + 'px',
              left: newPosition.left + 'px'
            });
            positionBackground();
            function positionBackground() {
              var size = direction === 'left' || direction === 'right' ? Math.sqrt(Math.pow(tipRect.width, 2) + Math.pow(tipRect.height / 2, 2)) * 2 : Math.sqrt(Math.pow(tipRect.width / 2, 2) + Math.pow(tipRect.height, 2)) * 2,
                  position = direction === 'left' ? {
                    left: 100,
                    top: 50
                  } : direction === 'right' ? {
                    left: 0,
                    top: 50
                  } : direction === 'top' ? {
                    left: 50,
                    top: 100
                  } : {
                    left: 50,
                    top: 0
                  };
              background.css({
                width: size + 'px',
                height: size + 'px',
                left: position.left + '%',
                top: position.top + '%'
              });
            }
            function fitInParent(pos) {
              var newPosition = {
                left: pos.left,
                top: pos.top
              };
              newPosition.left = Math.min(newPosition.left, tooltipParent.prop('scrollWidth') - tipRect.width - TOOLTIP_WINDOW_EDGE_SPACE);
              newPosition.left = Math.max(newPosition.left, TOOLTIP_WINDOW_EDGE_SPACE);
              newPosition.top = Math.min(newPosition.top, tooltipParent.prop('scrollHeight') - tipRect.height - TOOLTIP_WINDOW_EDGE_SPACE);
              newPosition.top = Math.max(newPosition.top, TOOLTIP_WINDOW_EDGE_SPACE);
              return newPosition;
            }
            function getPosition(dir) {
              return dir === 'left' ? {
                left: parentRect.left - tipRect.width - TOOLTIP_WINDOW_EDGE_SPACE,
                top: parentRect.top + parentRect.height / 2 - tipRect.height / 2
              } : dir === 'right' ? {
                left: parentRect.left + parentRect.width + TOOLTIP_WINDOW_EDGE_SPACE,
                top: parentRect.top + parentRect.height / 2 - tipRect.height / 2
              } : dir === 'top' ? {
                left: parentRect.left + parentRect.width / 2 - tipRect.width / 2,
                top: parentRect.top - tipRect.height - TOOLTIP_WINDOW_EDGE_SPACE
              } : {
                left: parentRect.left + parentRect.width / 2 - tipRect.width / 2,
                top: parentRect.top + parentRect.height + TOOLTIP_WINDOW_EDGE_SPACE
              };
            }
          }
        }
      }
      MdTooltipDirective.$inject = ["$timeout", "$window", "$$rAF", "$document", "$mdUtil", "$mdTheming", "$rootElement", "$animate", "$q"];
    })();
    (function() {
      'use strict';
      angular.module('material.components.whiteframe', []);
    })();
    (function() {
      'use strict';
      angular.module('material.components.autocomplete').controller('MdAutocompleteCtrl', MdAutocompleteCtrl);
      function MdAutocompleteCtrl($scope, $element, $q, $mdUtil, $mdConstant) {
        var self = this,
            itemParts = $scope.itemsExpr.split(/ in /i),
            itemExpr = itemParts[1],
            elements = {
              main: $element[0],
              ul: $element[0].getElementsByTagName('ul')[0],
              input: $element[0].getElementsByTagName('input')[0]
            },
            promise = null,
            cache = {},
            noBlur = false;
        self.scope = $scope;
        self.parent = $scope.$parent;
        self.itemName = itemParts[0];
        self.matches = [];
        self.loading = false;
        self.hidden = true;
        self.index = 0;
        self.keydown = keydown;
        self.blur = blur;
        self.clear = clearValue;
        self.select = select;
        self.getCurrentDisplayValue = getCurrentDisplayValue;
        self.fetch = $mdUtil.debounce(fetchResults);
        self.messages = [];
        self.listEnter = function() {
          noBlur = true;
        };
        self.listLeave = function() {
          noBlur = false;
        };
        self.mouseUp = function() {
          elements.input.focus();
        };
        return init();
        function init() {
          configureWatchers();
          configureAria();
        }
        function configureAria() {
          var ul = angular.element(elements.ul),
              input = angular.element(elements.input),
              id = ul.attr('id') || 'ul_' + $mdUtil.nextUid();
          ul.attr('id', id);
          input.attr('aria-owns', id);
        }
        function getItemScope(item) {
          if (!item)
            return ;
          var locals = {};
          if (self.itemName)
            locals[self.itemName] = item;
          return locals;
        }
        function configureWatchers() {
          var wait = parseInt($scope.delay, 10) || 0;
          $scope.$watch('searchText', wait ? $mdUtil.debounce(handleSearchText, wait) : handleSearchText);
          $scope.$watch('selectedItem', function(selectedItem, previousSelectedItem) {
            if ($scope.itemChange && selectedItem !== previousSelectedItem)
              $scope.itemChange(getItemScope(selectedItem));
          });
        }
        function handleSearchText(searchText, previousSearchText) {
          self.index = -1;
          if (!searchText || searchText.length < Math.max(parseInt($scope.minLength, 10), 1)) {
            self.loading = false;
            self.matches = [];
            self.hidden = shouldHide();
            updateMessages();
            return ;
          }
          var term = searchText.toLowerCase();
          if (promise && promise.cancel) {
            promise.cancel();
            promise = null;
          }
          if (!$scope.noCache && cache[term]) {
            self.matches = cache[term];
            updateMessages();
          } else {
            self.fetch(searchText);
          }
          self.hidden = shouldHide();
          if ($scope.textChange && searchText !== previousSearchText)
            $scope.textChange(getItemScope($scope.selectedItem));
        }
        function fetchResults(searchText) {
          var items = $scope.$parent.$eval(itemExpr),
              term = searchText.toLowerCase();
          if (angular.isArray(items)) {
            handleResults(items);
          } else {
            self.loading = true;
            promise = $q.when(items).then(handleResults);
          }
          function handleResults(matches) {
            cache[term] = matches;
            if (searchText !== $scope.searchText)
              return ;
            promise = null;
            self.loading = false;
            self.matches = matches;
            self.hidden = shouldHide();
            updateMessages();
          }
        }
        function updateMessages() {
          if (self.hidden)
            return ;
          switch (self.matches.length) {
            case 0:
              return self.messages.splice(0);
            case 1:
              return self.messages.push({display: 'There is 1 match available.'});
            default:
              return self.messages.push({display: 'There are ' + self.matches.length + ' matches available.'});
          }
        }
        function updateSelectionMessage() {
          self.messages.push({display: getCurrentDisplayValue()});
        }
        function blur() {
          if (!noBlur)
            self.hidden = true;
        }
        function keydown(event) {
          switch (event.keyCode) {
            case $mdConstant.KEY_CODE.DOWN_ARROW:
              if (self.loading)
                return ;
              event.preventDefault();
              self.index = Math.min(self.index + 1, self.matches.length - 1);
              updateScroll();
              updateSelectionMessage();
              break;
            case $mdConstant.KEY_CODE.UP_ARROW:
              if (self.loading)
                return ;
              event.preventDefault();
              self.index = Math.max(0, self.index - 1);
              updateScroll();
              updateSelectionMessage();
              break;
            case $mdConstant.KEY_CODE.ENTER:
              if (self.loading || self.index < 0)
                return ;
              event.preventDefault();
              select(self.index);
              break;
            case $mdConstant.KEY_CODE.ESCAPE:
              self.matches = [];
              self.hidden = true;
              self.index = -1;
              break;
            case $mdConstant.KEY_CODE.TAB:
              break;
            default:
          }
        }
        function clearValue() {
          $scope.searchText = '';
          select(-1);
          elements.input.focus();
        }
        function shouldHide() {
          return self.matches.length === 1 && $scope.searchText === getDisplayValue(self.matches[0]);
        }
        function getCurrentDisplayValue() {
          return getDisplayValue(self.matches[self.index]);
        }
        function getDisplayValue(item) {
          return (item && $scope.itemText) ? $scope.itemText(getItemScope(item)) : item;
        }
        function select(index) {
          $scope.selectedItem = self.matches[index];
          $scope.searchText = getDisplayValue($scope.selectedItem) || $scope.searchText;
          self.hidden = true;
          self.index = -1;
          self.matches = [];
        }
        function updateScroll() {
          var top = 41 * self.index,
              bot = top + 41,
              hgt = 41 * 5.5;
          if (top < elements.ul.scrollTop) {
            elements.ul.scrollTop = top;
          } else if (bot > elements.ul.scrollTop + hgt) {
            elements.ul.scrollTop = bot - hgt;
          }
        }
      }
      MdAutocompleteCtrl.$inject = ["$scope", "$element", "$q", "$mdUtil", "$mdConstant"];
    })();
    (function() {
      'use strict';
      angular.module('material.components.autocomplete').directive('mdAutocomplete', MdAutocomplete);
      function MdAutocomplete() {
        return {
          template: '\
        <md-autocomplete-wrap role="listbox">\
          <input type="text"\
              ng-disabled="isDisabled"\
              ng-model="searchText"\
              ng-keydown="$mdAutocompleteCtrl.keydown($event)"\
              ng-blur="$mdAutocompleteCtrl.blur()"\
              placeholder="{{placeholder}}"\
              aria-label="{{placeholder}}"\
              aria-autocomplete="list"\
              aria-haspopup="true"\
              aria-activedescendant=""\
              aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>\
          <button\
              type="button"\
              ng-if="searchText"\
              ng-click="$mdAutocompleteCtrl.clear()">\
            <md-icon md-svg-icon="cancel"></md-icon>\
            <span class="visually-hidden">Clear</span>\
          </button>\
          <md-progress-linear\
              ng-if="$mdAutocompleteCtrl.loading"\
              md-mode="indeterminate"></md-progress-linear>\
        </md-autocomplete-wrap>\
        <ul role="presentation"\
            ng-mouseenter="$mdAutocompleteCtrl.listEnter()"\
            ng-mouseleave="$mdAutocompleteCtrl.listLeave()"\
            ng-mouseup="$mdAutocompleteCtrl.mouseUp()">\
          <li ng-repeat="(index, item) in $mdAutocompleteCtrl.matches"\
              ng-class="{ selected: index === $mdAutocompleteCtrl.index }"\
              ng-show="searchText && !$mdAutocompleteCtrl.hidden"\
              ng-click="$mdAutocompleteCtrl.select(index)"\
              ng-transclude\
              md-autocomplete-list-item="$mdAutocompleteCtrl.itemName">\
          </li>\
        </ul>\
        <aria-status\
            class="visually-hidden"\
            role="status"\
            aria-live="assertive">\
          <p ng-repeat="message in $mdAutocompleteCtrl.messages">{{message.display}}</p>\
        </aria-status>',
          transclude: true,
          controller: 'MdAutocompleteCtrl',
          controllerAs: '$mdAutocompleteCtrl',
          scope: {
            searchText: '=mdSearchText',
            selectedItem: '=mdSelectedItem',
            itemsExpr: '@mdItems',
            itemText: '&mdItemText',
            placeholder: '@placeholder',
            noCache: '=mdNoCache',
            itemChange: '&mdSelectedItemChange',
            textChange: '&mdSearchTextChange',
            isDisabled: '=ngDisabled',
            minLength: '=mdMinLength',
            delay: '=mdDelay'
          }
        };
      }
    })();
    (function() {
      'use strict';
      angular.module('material.components.autocomplete').controller('MdHighlightCtrl', MdHighlightCtrl);
      function MdHighlightCtrl($scope, $element, $interpolate) {
        var term = $element.attr('md-highlight-text'),
            text = $interpolate($element.text())($scope),
            watcher = $scope.$watch(term, function(term) {
              var regex = new RegExp('^' + sanitize(term), 'i'),
                  html = text.replace(regex, '<span class="highlight">$&</span>');
              $element.html(html);
            });
        $element.on('$destroy', function() {
          watcher();
        });
        function sanitize(term) {
          if (!term)
            return term;
          return term.replace(/[\*\[\]\(\)\{\}\\\^\$]/g, '\\$&');
        }
      }
      MdHighlightCtrl.$inject = ["$scope", "$element", "$interpolate"];
    })();
    (function() {
      'use strict';
      angular.module('material.components.autocomplete').directive('mdHighlightText', MdHighlight);
      function MdHighlight() {
        return {
          terminal: true,
          scope: false,
          controller: 'MdHighlightCtrl'
        };
      }
    })();
    (function() {
      'use strict';
      angular.module('material.components.autocomplete').directive('mdAutocompleteListItem', MdAutocompleteListItem);
      function MdAutocompleteListItem($compile, $mdUtil) {
        return {
          require: '^?mdAutocomplete',
          terminal: true,
          link: link,
          scope: false
        };
        function link(scope, element, attr, ctrl) {
          var newScope = ctrl.parent.$new(false, ctrl.parent),
              itemName = ctrl.scope.$eval(attr.mdAutocompleteListItem);
          newScope[itemName] = scope.item;
          $compile(element.contents())(newScope);
          element.attr({
            'role': 'option',
            'id': 'item_' + $mdUtil.nextUid()
          });
        }
      }
      MdAutocompleteListItem.$inject = ["$compile", "$mdUtil"];
    })();
    (function() {
      'use strict';
      angular.module('material.components.tabs').directive('mdTabsInkBar', MdTabInkDirective);
      function MdTabInkDirective($$rAF) {
        var lastIndex = 0;
        return {
          restrict: 'E',
          require: ['^?mdNoBar', '^mdTabs'],
          link: postLink
        };
        function postLink(scope, element, attr, ctrls) {
          var mdNoBar = !!ctrls[0];
          var tabsCtrl = ctrls[1],
              debouncedUpdateBar = $$rAF.throttle(updateBar);
          tabsCtrl.inkBarElement = element;
          scope.$on('$mdTabsPaginationChanged', debouncedUpdateBar);
          function updateBar() {
            var selected = tabsCtrl.getSelectedItem();
            var hideInkBar = !selected || tabsCtrl.count() < 2 || mdNoBar;
            element.css('display', hideInkBar ? 'none' : 'block');
            if (hideInkBar)
              return ;
            if (scope.pagination && scope.pagination.tabData) {
              var index = tabsCtrl.getSelectedIndex();
              var data = scope.pagination.tabData.tabs[index] || {
                left: 0,
                right: 0,
                width: 0
              };
              var right = element.parent().prop('offsetWidth') - data.right;
              var classNames = ['md-transition-left', 'md-transition-right', 'md-no-transition'];
              var classIndex = lastIndex > index ? 0 : lastIndex < index ? 1 : 2;
              element.removeClass(classNames.join(' ')).addClass(classNames[classIndex]).css({
                left: data.left + 'px',
                right: right + 'px'
              });
              lastIndex = index;
            }
          }
        }
      }
      MdTabInkDirective.$inject = ["$$rAF"];
    })();
    (function() {
      'use strict';
      angular.module('material.components.tabs').directive('mdTabsPagination', TabPaginationDirective);
      function TabPaginationDirective($mdConstant, $window, $$rAF, $$q, $timeout, $mdMedia) {
        var PAGINATORS_WIDTH = (8 * 4) * 2;
        return {
          restrict: 'A',
          require: '^mdTabs',
          link: postLink
        };
        function postLink(scope, element, attr, tabsCtrl) {
          var tabs = element[0].getElementsByTagName('md-tab');
          var debouncedUpdatePagination = $$rAF.throttle(updatePagination);
          var tabsParent = element.children();
          var locked = false;
          var state = scope.pagination = {
            page: -1,
            active: false,
            clickNext: function() {
              locked || userChangePage(+1);
            },
            clickPrevious: function() {
              locked || userChangePage(-1);
            }
          };
          scope.$on('$mdTabsChanged', debouncedUpdatePagination);
          angular.element($window).on('resize', debouncedUpdatePagination);
          scope.$on('$destroy', function() {
            angular.element($window).off('resize', debouncedUpdatePagination);
          });
          scope.$watch(function() {
            return tabsCtrl.tabToFocus;
          }, onTabFocus);
          function onTabFocus(tab, oldTab) {
            if (!tab)
              return ;
            var pageIndex = getPageForTab(tab);
            if (!state.active || pageIndex === state.page) {
              tab.element.focus();
            } else {
              oldTab && oldTab.element.blur();
              setPage(pageIndex).then(function() {
                locked = false;
                tab.element.focus();
              });
            }
          }
          function userChangePage(increment) {
            var sizeData = state.tabData;
            var newPage = Math.max(0, Math.min(sizeData.pages.length - 1, state.page + increment));
            var newTabIndex = sizeData.pages[newPage][increment > 0 ? 'firstTabIndex' : 'lastTabIndex'];
            var newTab = tabsCtrl.itemAt(newTabIndex);
            locked = true;
            onTabFocus(newTab);
          }
          function updatePagination() {
            if (!element.prop('offsetParent')) {
              var watcher = waitForVisible();
              return ;
            }
            var tabs = element.find('md-tab');
            disablePagination();
            var sizeData = state.tabData = calculateTabData();
            var needPagination = state.active = sizeData.pages.length > 1;
            if (needPagination) {
              enablePagination();
            }
            scope.$evalAsync(function() {
              scope.$broadcast('$mdTabsPaginationChanged');
            });
            function enablePagination() {
              tabsParent.css('width', '9999px');
              angular.forEach(sizeData.tabs, function(tab) {
                angular.element(tab.element).css('margin-left', tab.filler + 'px');
              });
              setPage(getPageForTab(tabsCtrl.getSelectedItem()));
            }
            function disablePagination() {
              slideTabButtons(0);
              tabsParent.css('width', '');
              tabs.css('width', '');
              tabs.css('margin-left', '');
              state.page = null;
              state.active = false;
            }
            function waitForVisible() {
              return watcher || scope.$watch(function() {
                $timeout(function() {
                  if (element[0].offsetParent) {
                    if (angular.isFunction(watcher)) {
                      watcher();
                    }
                    debouncedUpdatePagination();
                    watcher = null;
                  }
                }, 0, false);
              });
            }
          }
          function slideTabButtons(x) {
            if (tabsCtrl.pagingOffset === x) {
              return $$q.when();
            }
            var deferred = $$q.defer();
            tabsCtrl.$$pagingOffset = x;
            tabsParent.css($mdConstant.CSS.TRANSFORM, 'translate3d(' + x + 'px,0,0)');
            tabsParent.on($mdConstant.CSS.TRANSITIONEND, onTabsParentTransitionEnd);
            return deferred.promise;
            function onTabsParentTransitionEnd(ev) {
              if (ev.target === tabsParent[0]) {
                tabsParent.off($mdConstant.CSS.TRANSITIONEND, onTabsParentTransitionEnd);
                deferred.resolve();
              }
            }
          }
          function shouldStretchTabs() {
            switch (scope.stretchTabs) {
              case 'never':
                return false;
              case 'always':
                return true;
              default:
                return $mdMedia('sm');
            }
          }
          function calculateTabData(noAdjust) {
            var clientWidth = element.parent().prop('offsetWidth');
            var tabsWidth = clientWidth - PAGINATORS_WIDTH - 1;
            var $tabs = angular.element(tabs);
            var totalWidth = 0;
            var max = 0;
            var tabData = [];
            var pages = [];
            var currentPage;
            $tabs.css('max-width', '');
            angular.forEach(tabs, function(tab, index) {
              var tabWidth = Math.min(tabsWidth, tab.offsetWidth);
              var data = {
                element: tab,
                left: totalWidth,
                width: tabWidth,
                right: totalWidth + tabWidth,
                filler: 0
              };
              data.page = Math.ceil(data.right / (pages.length === 1 && index === tabs.length - 1 ? clientWidth : tabsWidth)) - 1;
              if (data.page >= pages.length) {
                data.filler = (tabsWidth * data.page) - data.left;
                data.right += data.filler;
                data.left += data.filler;
                currentPage = {
                  left: data.left,
                  firstTabIndex: index,
                  lastTabIndex: index,
                  tabs: [data]
                };
                pages.push(currentPage);
              } else {
                currentPage.lastTabIndex = index;
                currentPage.tabs.push(data);
              }
              totalWidth = data.right;
              max = Math.max(max, tabWidth);
              tabData.push(data);
            });
            $tabs.css('max-width', tabsWidth + 'px');
            if (!noAdjust && shouldStretchTabs()) {
              return adjustForStretchedTabs();
            } else {
              return {
                width: totalWidth,
                max: max,
                tabs: tabData,
                pages: pages,
                tabElements: tabs
              };
            }
            function adjustForStretchedTabs() {
              var canvasWidth = pages.length === 1 ? clientWidth : tabsWidth;
              var tabsPerPage = Math.min(Math.floor(canvasWidth / max), tabs.length);
              var tabWidth = Math.floor(canvasWidth / tabsPerPage);
              $tabs.css('width', tabWidth + 'px');
              return calculateTabData(true);
            }
          }
          function getPageForTab(tab) {
            var tabIndex = tabsCtrl.indexOf(tab);
            if (tabIndex === -1)
              return 0;
            var sizeData = state.tabData;
            return sizeData ? sizeData.tabs[tabIndex].page : 0;
          }
          function setPage(page) {
            if (page === state.page)
              return ;
            var lastPage = state.tabData.pages.length - 1;
            if (page < 0)
              page = 0;
            if (page > lastPage)
              page = lastPage;
            state.hasPrev = page > 0;
            state.hasNext = page < lastPage;
            state.page = page;
            scope.$broadcast('$mdTabsPaginationChanged');
            return slideTabButtons(-state.tabData.pages[page].left);
          }
        }
      }
      TabPaginationDirective.$inject = ["$mdConstant", "$window", "$$rAF", "$$q", "$timeout", "$mdMedia"];
    })();
    (function() {
      'use strict';
      angular.module('material.components.tabs').controller('$mdTab', TabItemController);
      function TabItemController($scope, $element, $attrs, $compile, $animate, $mdUtil, $parse, $timeout) {
        var self = this;
        var tabsCtrl = $element.controller('mdTabs');
        self.contentContainer = angular.element('<div class="md-tab-content ng-hide">');
        self.element = $element;
        self.isDisabled = isDisabled;
        self.onAdd = onAdd;
        self.onRemove = onRemove;
        self.onSelect = onSelect;
        self.onDeselect = onDeselect;
        var disabledParsed = $parse($attrs.ngDisabled);
        function isDisabled() {
          return disabledParsed($scope.$parent);
        }
        function onAdd(contentArea, shouldDisconnectScope) {
          if (self.content.length) {
            self.contentContainer.append(self.content);
            self.contentScope = $scope.$parent.$new();
            contentArea.append(self.contentContainer);
            $compile(self.contentContainer)(self.contentScope);
            if (shouldDisconnectScope === true) {
              $timeout(function() {
                $mdUtil.disconnectScope(self.contentScope);
              }, 0, false);
            }
          }
        }
        function onRemove() {
          $animate.leave(self.contentContainer).then(function() {
            self.contentScope && self.contentScope.$destroy();
            self.contentScope = null;
          });
        }
        function toggleAnimationClass(rightToLeft) {
          self.contentContainer[rightToLeft ? 'addClass' : 'removeClass']('md-transition-rtl');
        }
        function onSelect(rightToLeft) {
          $mdUtil.reconnectScope(self.contentScope);
          $element.addClass('active').attr({
            'aria-selected': true,
            'tabIndex': 0
          }).on('$md.swipeleft $md.swiperight', onSwipe);
          toggleAnimationClass(rightToLeft);
          $animate.removeClass(self.contentContainer, 'ng-hide');
          $scope.onSelect();
        }
        function onDeselect(rightToLeft) {
          $mdUtil.disconnectScope(self.contentScope);
          $element.removeClass('active').attr({
            'aria-selected': false,
            'tabIndex': -1
          }).off('$md.swipeleft $md.swiperight', onSwipe);
          toggleAnimationClass(rightToLeft);
          $animate.addClass(self.contentContainer, 'ng-hide');
          $scope.onDeselect();
        }
        function onSwipe(ev) {
          $scope.$apply(function() {
            if (/left/.test(ev.type)) {
              tabsCtrl.select(tabsCtrl.next());
            } else {
              tabsCtrl.select(tabsCtrl.previous());
            }
          });
        }
      }
      TabItemController.$inject = ["$scope", "$element", "$attrs", "$compile", "$animate", "$mdUtil", "$parse", "$timeout"];
    })();
    (function() {
      'use strict';
      angular.module('material.components.tabs').directive('mdTab', MdTabDirective);
      function MdTabDirective($mdInkRipple, $compile, $mdUtil, $mdConstant, $timeout) {
        return {
          restrict: 'E',
          require: ['mdTab', '^mdTabs'],
          controller: '$mdTab',
          scope: {
            onSelect: '&mdOnSelect',
            onDeselect: '&mdOnDeselect',
            label: '@'
          },
          compile: compile
        };
        function compile(element, attr) {
          var tabLabel = element.find('md-tab-label');
          if (tabLabel.length) {
            tabLabel.remove();
          } else if (angular.isDefined(attr.label)) {
            tabLabel = angular.element('<md-tab-label>').html(attr.label);
          } else {
            tabLabel = angular.element('<md-tab-label>').append(element.contents().remove());
          }
          var tabContent = element.contents().remove();
          return function postLink(scope, element, attr, ctrls) {
            var tabItemCtrl = ctrls[0];
            var tabsCtrl = ctrls[1];
            $timeout(element.addClass.bind(element, 'md-tab-themed'), 0, false);
            scope.$watch(function() {
              return attr.label;
            }, function() {
              $timeout(function() {
                tabsCtrl.scope.$broadcast('$mdTabsChanged');
              }, 0, false);
            });
            transcludeTabContent();
            configureAria();
            $mdInkRipple.attachTabBehavior(scope, element, {colorElement: tabsCtrl.inkBarElement});
            tabsCtrl.add(tabItemCtrl);
            scope.$on('$destroy', function() {
              tabsCtrl.remove(tabItemCtrl);
            });
            element.on('$destroy', function() {
              $timeout(function() {
                tabsCtrl.scope.$broadcast('$mdTabsChanged');
              }, 0, false);
            });
            if (!angular.isDefined(attr.ngClick)) {
              element.on('click', defaultClickListener);
            }
            element.on('keydown', keydownListener);
            if (angular.isNumber(scope.$parent.$index)) {
              watchNgRepeatIndex();
            }
            if (angular.isDefined(attr.mdActive)) {
              watchActiveAttribute();
            }
            watchDisabled();
            function transcludeTabContent() {
              var label = tabLabel.clone();
              element.append(label);
              $compile(label)(scope.$parent);
              tabItemCtrl.content = tabContent.clone();
            }
            function defaultClickListener() {
              scope.$apply(function() {
                tabsCtrl.select(tabItemCtrl);
                tabsCtrl.focus(tabItemCtrl);
              });
            }
            function keydownListener(ev) {
              if (ev.keyCode == $mdConstant.KEY_CODE.SPACE || ev.keyCode == $mdConstant.KEY_CODE.ENTER) {
                element.triggerHandler('click');
                ev.preventDefault();
              } else if (ev.keyCode === $mdConstant.KEY_CODE.LEFT_ARROW) {
                scope.$evalAsync(function() {
                  tabsCtrl.focus(tabsCtrl.previous(tabItemCtrl));
                });
              } else if (ev.keyCode === $mdConstant.KEY_CODE.RIGHT_ARROW) {
                scope.$evalAsync(function() {
                  tabsCtrl.focus(tabsCtrl.next(tabItemCtrl));
                });
              }
            }
            function watchNgRepeatIndex() {
              scope.$watch('$parent.$index', function $indexWatchAction(newIndex) {
                tabsCtrl.move(tabItemCtrl, newIndex);
              });
            }
            function watchActiveAttribute() {
              var unwatch = scope.$parent.$watch('!!(' + attr.mdActive + ')', activeWatchAction);
              scope.$on('$destroy', unwatch);
              function activeWatchAction(isActive) {
                var isSelected = tabsCtrl.getSelectedItem() === tabItemCtrl;
                if (isActive && !isSelected) {
                  tabsCtrl.select(tabItemCtrl);
                } else if (!isActive && isSelected) {
                  tabsCtrl.deselect(tabItemCtrl);
                }
              }
            }
            function watchDisabled() {
              scope.$watch(tabItemCtrl.isDisabled, disabledWatchAction);
              function disabledWatchAction(isDisabled) {
                element.attr('aria-disabled', isDisabled);
                var isSelected = (tabsCtrl.getSelectedItem() === tabItemCtrl);
                if (isSelected && isDisabled) {
                  tabsCtrl.select(tabsCtrl.next() || tabsCtrl.previous());
                }
              }
            }
            function configureAria() {
              var tabId = attr.id || ('tab_' + $mdUtil.nextUid());
              element.attr({
                id: tabId,
                role: 'tab',
                tabIndex: -1
              });
              if (tabContent.length) {
                var tabContentId = 'content_' + tabId;
                if (!element.attr('aria-controls')) {
                  element.attr('aria-controls', tabContentId);
                }
                tabItemCtrl.contentContainer.attr({
                  id: tabContentId,
                  role: 'tabpanel',
                  'aria-labelledby': tabId
                });
              }
            }
          };
        }
      }
      MdTabDirective.$inject = ["$mdInkRipple", "$compile", "$mdUtil", "$mdConstant", "$timeout"];
    })();
    (function() {
      'use strict';
      angular.module('material.components.tabs').controller('$mdTabs', MdTabsController);
      function MdTabsController($scope, $element, $mdUtil, $timeout) {
        var tabsList = $mdUtil.iterator([], false);
        var self = this;
        self.$element = $element;
        self.scope = $scope;
        var contentArea = self.contentArea = angular.element($element[0].querySelector('.md-tabs-content'));
        var inRange = self.inRange = tabsList.inRange;
        var indexOf = self.indexOf = tabsList.indexOf;
        var itemAt = self.itemAt = tabsList.itemAt;
        self.count = tabsList.count;
        self.getSelectedItem = getSelectedItem;
        self.getSelectedIndex = getSelectedIndex;
        self.add = add;
        self.remove = remove;
        self.move = move;
        self.select = select;
        self.focus = focus;
        self.deselect = deselect;
        self.next = next;
        self.previous = previous;
        $scope.$on('$destroy', function() {
          deselect(getSelectedItem());
          for (var i = tabsList.count() - 1; i >= 0; i--) {
            remove(tabsList[i], true);
          }
        });
        function getSelectedItem() {
          return itemAt($scope.selectedIndex);
        }
        function getSelectedIndex() {
          return $scope.selectedIndex;
        }
        function add(tab, index) {
          tabsList.add(tab, index);
          if (!angular.isDefined(tab.element.attr('md-active')) && ($scope.selectedIndex === -1 || !angular.isNumber($scope.selectedIndex) || $scope.selectedIndex === self.indexOf(tab))) {
            tab.onAdd(self.contentArea, false);
            self.select(tab);
          } else {
            tab.onAdd(self.contentArea, true);
          }
          $scope.$broadcast('$mdTabsChanged');
        }
        function remove(tab, noReselect) {
          if (!tabsList.contains(tab))
            return ;
          if (noReselect)
            return ;
          var isSelectedItem = getSelectedItem() === tab,
              newTab = previous() || next();
          deselect(tab);
          tabsList.remove(tab);
          tab.onRemove();
          $scope.$broadcast('$mdTabsChanged');
          if (isSelectedItem) {
            select(newTab);
          }
        }
        function move(tab, toIndex) {
          var isSelected = getSelectedItem() === tab;
          tabsList.remove(tab);
          tabsList.add(tab, toIndex);
          if (isSelected)
            select(tab);
          $scope.$broadcast('$mdTabsChanged');
        }
        function select(tab, rightToLeft) {
          if (!tab || tab.isSelected || tab.isDisabled())
            return ;
          if (!tabsList.contains(tab))
            return ;
          if (!angular.isDefined(rightToLeft)) {
            rightToLeft = indexOf(tab) < $scope.selectedIndex;
          }
          deselect(getSelectedItem(), rightToLeft);
          $scope.selectedIndex = indexOf(tab);
          tab.isSelected = true;
          tab.onSelect(rightToLeft);
          $scope.$broadcast('$mdTabsChanged');
        }
        function focus(tab) {
          self.tabToFocus = tab;
        }
        function deselect(tab, rightToLeft) {
          if (!tab || !tab.isSelected)
            return ;
          if (!tabsList.contains(tab))
            return ;
          $scope.selectedIndex = -1;
          tab.isSelected = false;
          tab.onDeselect(rightToLeft);
        }
        function next(tab, filterFn) {
          return tabsList.next(tab || getSelectedItem(), filterFn || isTabEnabled);
        }
        function previous(tab, filterFn) {
          return tabsList.previous(tab || getSelectedItem(), filterFn || isTabEnabled);
        }
        function isTabEnabled(tab) {
          return tab && !tab.isDisabled();
        }
      }
      MdTabsController.$inject = ["$scope", "$element", "$mdUtil", "$timeout"];
    })();
    (function() {
      'use strict';
      angular.module('material.components.tabs').directive('mdTabs', TabsDirective);
      function TabsDirective($mdTheming) {
        return {
          restrict: 'E',
          controller: '$mdTabs',
          require: 'mdTabs',
          transclude: true,
          scope: {selectedIndex: '=?mdSelected'},
          template: '<section class="md-header" ' + 'ng-class="{\'md-paginating\': pagination.active}">' + '<button class="md-paginator md-prev" ' + 'ng-if="pagination.active && pagination.hasPrev" ' + 'ng-click="pagination.clickPrevious()" ' + 'aria-hidden="true">' + '<md-icon md-svg-icon="tabs-arrow"></md-icon>' + '</button>' + '<div class="md-header-items-container" md-tabs-pagination>' + '<div class="md-header-items">' + '<md-tabs-ink-bar></md-tabs-ink-bar>' + '</div>' + '</div>' + '<button class="md-paginator md-next" ' + 'ng-if="pagination.active && pagination.hasNext" ' + 'ng-click="pagination.clickNext()" ' + 'aria-hidden="true">' + '<md-icon md-svg-icon="tabs-arrow"></md-icon>' + '</button>' + '</section>' + '<section class="md-tabs-content"></section>',
          link: postLink
        };
        function postLink(scope, element, attr, tabsCtrl, transclude) {
          scope.stretchTabs = attr.hasOwnProperty('mdStretchTabs') ? attr.mdStretchTabs || 'always' : 'auto';
          $mdTheming(element);
          configureAria();
          watchSelected();
          transclude(scope.$parent, function(clone) {
            angular.element(element[0].querySelector('.md-header-items')).append(clone);
          });
          function configureAria() {
            element.attr('role', 'tablist');
          }
          function watchSelected() {
            scope.$watch('selectedIndex', function watchSelectedIndex(newIndex, oldIndex) {
              if (oldIndex == newIndex)
                return ;
              var rightToLeft = oldIndex > newIndex;
              tabsCtrl.deselect(tabsCtrl.itemAt(oldIndex), rightToLeft);
              if (tabsCtrl.inRange(newIndex)) {
                var newTab = tabsCtrl.itemAt(newIndex);
                while (newTab && newTab.isDisabled()) {
                  newTab = newIndex > oldIndex ? tabsCtrl.next(newTab) : tabsCtrl.previous(newTab);
                }
                tabsCtrl.select(newTab, rightToLeft);
              }
            });
          }
        }
      }
      TabsDirective.$inject = ["$mdTheming"];
    })();
    (function() {
      angular.module("material.core").constant("$MD_THEME_CSS", "md-autocomplete {  background: '{{background-50}}'; }  md-autocomplete button md-icon path {    fill: '{{background-600}}'; }  md-autocomplete button:after {    background: '{{background-600-0.3}}'; }  md-autocomplete ul {    background: '{{background-50}}'; }    md-autocomplete ul li {      border-top: 1px solid '{{background-400}}';      color: '{{background-900}}'; }      md-autocomplete ul li .highlight {        color: '{{background-600}}'; }      md-autocomplete ul li:hover, md-autocomplete ul li.selected {        background: '{{background-200}}'; }md-backdrop.md-opaque.md-THEME_NAME-theme {  background-color: '{{foreground-4-0.5}}'; }md-bottom-sheet.md-THEME_NAME-theme {  background-color: '{{background-50}}';  border-top-color: '{{background-300}}'; }  md-bottom-sheet.md-THEME_NAME-theme.md-list md-item {    color: '{{foreground-1}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    background-color: '{{background-50}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    color: '{{foreground-1}}'; }md-toolbar .md-button.md-THEME_NAME-theme.md-fab {  background-color: white; }.md-button.md-THEME_NAME-theme {  border-radius: 3px; }  .md-button.md-THEME_NAME-theme:not([disabled]):hover, .md-button.md-THEME_NAME-theme:not([disabled]):focus {    background-color: '{{background-500-0.2}}'; }  .md-button.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }    .md-button.md-THEME_NAME-theme.md-primary.md-raised, .md-button.md-THEME_NAME-theme.md-primary.md-fab {      color: '{{primary-contrast}}';      background-color: '{{primary-color}}'; }      .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):focus, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):focus {        background-color: '{{primary-600}}'; }  .md-button.md-THEME_NAME-theme.md-fab {    border-radius: 50%;    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }    .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):focus {      background-color: '{{accent-A700}}'; }  .md-button.md-THEME_NAME-theme.md-raised {    color: '{{background-contrast}}';    background-color: '{{background-50}}'; }    .md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-raised:not([disabled]):focus {      background-color: '{{background-200}}'; }  .md-button.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }    .md-button.md-THEME_NAME-theme.md-warn.md-raised, .md-button.md-THEME_NAME-theme.md-warn.md-fab {      color: '{{warn-contrast}}';      background-color: '{{warn-color}}'; }      .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):focus, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):focus {        background-color: '{{warn-700}}'; }  .md-button.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }    .md-button.md-THEME_NAME-theme.md-accent.md-raised, .md-button.md-THEME_NAME-theme.md-accent.md-fab {      color: '{{accent-contrast}}';      background-color: '{{accent-color}}'; }      .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):focus, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):focus {        background-color: '{{accent-700}}'; }  .md-button.md-THEME_NAME-theme[disabled], .md-button.md-THEME_NAME-theme.md-raised[disabled], .md-button.md-THEME_NAME-theme.md-fab[disabled] {    color: '{{foreground-3}}';    background-color: transparent;    cursor: not-allowed; }md-card.md-THEME_NAME-theme {  border-radius: 2px; }  md-card.md-THEME_NAME-theme .md-card-image {    border-radius: 2px 2px 0 0; }md-checkbox.md-THEME_NAME-theme .md-ripple {  color: '{{accent-600}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon {  background-color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ripple {  color: '{{primary-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon {  background-color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ripple {  color: '{{warn-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon {  background-color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-icon {  border-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon {  background-color: '{{foreground-3}}'; }md-content.md-THEME_NAME-theme {  background-color: '{{background-hue-3}}'; }md-dialog.md-THEME_NAME-theme {  border-radius: 4px;  background-color: '{{background-hue-3}}'; }  md-dialog.md-THEME_NAME-theme.md-content-overflow .md-actions {    border-top-color: '{{foreground-4}}'; }md-divider.md-THEME_NAME-theme {  border-top-color: '{{foreground-4}}'; }md-icon.md-THEME_NAME-theme.md-primary {  color: '{{primary-color}}'; }md-icon.md-THEME_NAME-theme.md-accent {  color: '{{accent-color}}'; }md-icon.md-THEME_NAME-theme.md-warn {  color: '{{warn-color}}'; }md-icon.md-THEME_NAME-theme.md-danger {  color: '{{danger-color}}'; }md-input-container.md-THEME_NAME-theme .md-input {  color: '{{foreground-1}}';  border-color: '{{foreground-4}}';  text-shadow: '{{foreground-shadow}}'; }  md-input-container.md-THEME_NAME-theme .md-input::-webkit-input-placeholder, md-input-container.md-THEME_NAME-theme .md-input::-moz-placeholder, md-input-container.md-THEME_NAME-theme .md-input:-moz-placeholder, md-input-container.md-THEME_NAME-theme .md-input:-ms-input-placeholder {    color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme > md-icon {  fill: '{{foreground-1}}'; }md-input-container.md-THEME_NAME-theme label, md-input-container.md-THEME_NAME-theme .md-placeholder {  text-shadow: '{{foreground-shadow}}';  color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-has-value label {  color: '{{foreground-2}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused .md-input {  border-color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused label {  color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused md-icon {  fill: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent .md-input {  border-color: '{{accent-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent label {  color: '{{accent-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn .md-input {  border-color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn label {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input {  border-color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid label {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid data-ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid x-ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid [ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [data-ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [x-ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid .md-char-counter {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme .md-input[disabled], [disabled] md-input-container.md-THEME_NAME-theme .md-input {  border-bottom-color: transparent;  color: '{{foreground-3}}';  background-image: linear-gradient(to right, '{{foreground-4}}' 0%, '{{foreground-4}}' 33%, transparent 0%);  background-image: -ms-linear-gradient(left, transparent 0%, '{{foreground-4}}' 100%); }md-progress-circular.md-THEME_NAME-theme {  background-color: transparent; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-gap {    border-top-color: '{{primary-color}}';    border-bottom-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-top-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-right-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle {    border-left-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-gap {    border-top-color: '{{warn-color}}';    border-bottom-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-top-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-right-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle {    border-left-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-gap {    border-top-color: '{{accent-color}}';    border-bottom-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-top-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-right-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle {    border-left-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme .md-container {  background-color: '{{primary-100}}'; }md-progress-linear.md-THEME_NAME-theme .md-bar {  background-color: '{{primary-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-container {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-bar {  background-color: '{{warn-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-container {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-bar {  background-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-bar1 {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-dashed:before {  background: radial-gradient('{{warn-100}}' 0%, '{{warn-100}}' 16%, transparent 42%); }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-bar1 {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-dashed:before {  background: radial-gradient('{{accent-100}}' 0%, '{{accent-100}}' 16%, transparent 42%); }md-radio-button.md-THEME_NAME-theme .md-off {  border-color: '{{foreground-2}}'; }md-radio-button.md-THEME_NAME-theme .md-on {  background-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-off {  border-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme .md-container .md-ripple {  color: '{{accent-600}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-on {  background-color: '{{primary-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off {  border-color: '{{primary-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple {  color: '{{primary-600}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-on {  background-color: '{{warn-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off {  border-color: '{{warn-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple {  color: '{{warn-600}}'; }md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-off {  border-color: '{{foreground-3}}'; }md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-on {  border-color: '{{foreground-3}}'; }md-radio-group.md-THEME_NAME-theme:focus:not(:empty) {  border-color: '{{foreground-1}}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-label {  border-bottom-color: '{{primary-color}}';  color: '{{ foreground-1 }}'; }  md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-label.md-placeholder {    color: '{{ foreground-1 }}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-accent .md-select-label {  border-bottom-color: '{{accent-color}}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-warn .md-select-label {  border-bottom-color: '{{warn-color}}'; }md-select.md-THEME_NAME-theme[disabled] .md-select-label {  color: '{{foreground-3}}'; }  md-select.md-THEME_NAME-theme[disabled] .md-select-label.md-placeholder {    color: '{{foreground-3}}'; }md-select.md-THEME_NAME-theme .md-select-label {  border-bottom-color: '{{foreground-4}}'; }  md-select.md-THEME_NAME-theme .md-select-label.md-placeholder {    color: '{{foreground-2}}'; }md-select-menu.md-THEME_NAME-theme md-optgroup {  color: '{{foreground-2}}'; }  md-select-menu.md-THEME_NAME-theme md-optgroup md-option {    color: '{{foreground-1}}'; }md-select-menu.md-THEME_NAME-theme md-option[selected] {  background-color: '{{primary-50}}'; }  md-select-menu.md-THEME_NAME-theme md-option[selected]:focus {    background-color: '{{primary-100}}'; }  md-select-menu.md-THEME_NAME-theme md-option[selected].md-accent {    background-color: '{{accent-50}}'; }    md-select-menu.md-THEME_NAME-theme md-option[selected].md-accent:focus {      background-color: '{{accent-100}}'; }md-select-menu.md-THEME_NAME-theme md-option:focus:not([selected]) {  background: '{{background-200}}'; }md-sidenav.md-THEME_NAME-theme {  background-color: '{{background-hue-3}}'; }md-slider.md-THEME_NAME-theme .md-track {  background-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme .md-track-ticks {  background-color: '{{foreground-4}}'; }md-slider.md-THEME_NAME-theme .md-focus-thumb {  background-color: '{{foreground-2}}'; }md-slider.md-THEME_NAME-theme .md-focus-ring {  border-color: '{{foreground-4}}'; }md-slider.md-THEME_NAME-theme .md-disabled-thumb {  border-color: '{{background-hue-3}}'; }md-slider.md-THEME_NAME-theme.md-min .md-thumb:after {  background-color: '{{background-hue-3}}'; }md-slider.md-THEME_NAME-theme .md-track.md-track-fill {  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb:after {  border-color: '{{accent-color}}';  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-sign {  background-color: '{{accent-color}}'; }  md-slider.md-THEME_NAME-theme .md-sign:after {    border-top-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb-text {  color: '{{accent-contrast}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-track.md-track-fill {  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb:after {  border-color: '{{warn-color}}';  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-sign {  background-color: '{{warn-color}}'; }  md-slider.md-THEME_NAME-theme.md-warn .md-sign:after {    border-top-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb-text {  color: '{{warn-contrast}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-track.md-track-fill {  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb:after {  border-color: '{{primary-color}}';  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-sign {  background-color: '{{primary-color}}'; }  md-slider.md-THEME_NAME-theme.md-primary .md-sign:after {    border-top-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb-text {  color: '{{primary-contrast}}'; }md-slider.md-THEME_NAME-theme[disabled] .md-thumb:after {  border-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme[disabled]:not(.md-min) .md-thumb:after {  background-color: '{{foreground-3}}'; }.md-subheader.md-THEME_NAME-theme {  color: '{{ foreground-2-0.23 }}';  background-color: '{{background-hue-3}}'; }  .md-subheader.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme .md-thumb {  background-color: '{{background-50}}'; }md-switch.md-THEME_NAME-theme .md-bar {  background-color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-thumb {  background-color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-bar {  background-color: '{{accent-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-thumb {  background-color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-bar {  background-color: '{{primary-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-thumb {  background-color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-bar {  background-color: '{{warn-color-0.5}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-thumb {  background-color: '{{background-400}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-bar {  background-color: '{{foreground-4}}'; }md-switch.md-THEME_NAME-theme:focus .md-label:not(:empty) {  border-color: '{{foreground-1}}';  border-style: dotted; }md-tabs.md-THEME_NAME-theme .md-header {  background-color: transparent; }md-tabs.md-THEME_NAME-theme .md-paginator md-icon {  color: '{{primary-color}}'; }md-tabs.md-THEME_NAME-theme.md-accent .md-header {  background-color: '{{accent-color}}'; }md-tabs.md-THEME_NAME-theme.md-accent md-tab:not([disabled]) {  color: '{{accent-100}}'; }  md-tabs.md-THEME_NAME-theme.md-accent md-tab:not([disabled]).active {    color: '{{accent-contrast}}'; }md-tabs.md-THEME_NAME-theme.md-primary .md-header {  background-color: '{{primary-color}}'; }md-tabs.md-THEME_NAME-theme.md-primary md-tab:not([disabled]) {  color: '{{primary-100}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab:not([disabled]).active {    color: '{{primary-contrast}}'; }md-tabs.md-THEME_NAME-theme.md-primary md-tab {  color: '{{primary-100}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab[disabled] {    color: '{{foreground-3}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab:focus {    color: '{{primary-contrast}}';    background-color: '{{primary-contrast-0.1}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab.active {    color: '{{primary-contrast}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab .md-ripple-container {    color: '{{primary-contrast}}'; }md-tabs.md-THEME_NAME-theme.md-warn .md-header {  background-color: '{{warn-color}}'; }md-tabs.md-THEME_NAME-theme.md-warn md-tab:not([disabled]) {  color: '{{warn-100}}'; }  md-tabs.md-THEME_NAME-theme.md-warn md-tab:not([disabled]).active {    color: '{{warn-contrast}}'; }md-tabs.md-THEME_NAME-theme md-tabs-ink-bar {  color: '{{accent-color}}';  background: '{{accent-color}}'; }md-tabs.md-THEME_NAME-theme md-tab {  color: '{{foreground-2}}'; }  md-tabs.md-THEME_NAME-theme md-tab[disabled] {    color: '{{foreground-3}}'; }  md-tabs.md-THEME_NAME-theme md-tab:focus {    color: '{{foreground-1}}'; }  md-tabs.md-THEME_NAME-theme md-tab.active {    color: '{{primary-color}}'; }  md-tabs.md-THEME_NAME-theme md-tab .md-ripple-container {    color: '{{accent-100}}'; }md-input-group.md-THEME_NAME-theme input, md-input-group.md-THEME_NAME-theme textarea {  text-shadow: '{{foreground-shadow}}'; }  md-input-group.md-THEME_NAME-theme input::-webkit-input-placeholder, md-input-group.md-THEME_NAME-theme input::-moz-placeholder, md-input-group.md-THEME_NAME-theme input:-moz-placeholder, md-input-group.md-THEME_NAME-theme input:-ms-input-placeholder, md-input-group.md-THEME_NAME-theme textarea::-webkit-input-placeholder, md-input-group.md-THEME_NAME-theme textarea::-moz-placeholder, md-input-group.md-THEME_NAME-theme textarea:-moz-placeholder, md-input-group.md-THEME_NAME-theme textarea:-ms-input-placeholder {    color: '{{foreground-3}}'; }md-input-group.md-THEME_NAME-theme label {  text-shadow: '{{foreground-shadow}}';  color: '{{foreground-3}}'; }md-input-group.md-THEME_NAME-theme input, md-input-group.md-THEME_NAME-theme textarea {  color: '{{foreground-1}}';  border-color: '{{foreground-4}}'; }md-input-group.md-THEME_NAME-theme.md-input-focused input, md-input-group.md-THEME_NAME-theme.md-input-focused textarea {  border-color: '{{primary-500}}'; }md-input-group.md-THEME_NAME-theme.md-input-focused label {  color: '{{primary-500}}'; }md-input-group.md-THEME_NAME-theme.md-input-focused.md-accent input, md-input-group.md-THEME_NAME-theme.md-input-focused.md-accent textarea {  border-color: '{{accent-500}}'; }md-input-group.md-THEME_NAME-theme.md-input-focused.md-accent label {  color: '{{accent-500}}'; }md-input-group.md-THEME_NAME-theme.md-input-has-value:not(.md-input-focused) label {  color: '{{foreground-2}}'; }md-input-group.md-THEME_NAME-theme .md-input[disabled] {  border-bottom-color: '{{foreground-4}}';  color: '{{foreground-3}}'; }md-toast.md-THEME_NAME-theme {  background-color: '{{foreground-1}}';  color: '{{background-50}}'; }  md-toast.md-THEME_NAME-theme .md-button {    color: '{{background-50}}'; }    md-toast.md-THEME_NAME-theme .md-button.md-highlight {      color: '{{primary-A200}}'; }      md-toast.md-THEME_NAME-theme .md-button.md-highlight.md-accent {        color: '{{accent-A200}}'; }      md-toast.md-THEME_NAME-theme .md-button.md-highlight.md-warn {        color: '{{warn-A200}}'; }md-toolbar.md-THEME_NAME-theme {  background-color: '{{primary-color}}';  color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme .md-button {    color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme.md-accent {    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }  md-toolbar.md-THEME_NAME-theme.md-warn {    background-color: '{{warn-color}}';    color: '{{warn-contrast}}'; }md-tooltip.md-THEME_NAME-theme {  color: '{{background-A100}}'; }  md-tooltip.md-THEME_NAME-theme .md-background {    background-color: '{{foreground-2}}'; }");
    })();
  }).call(System.global);
  return System.get("@@global-helpers").retrieveGlobal(__module.id, false);
});



System.register("github:angular/bower-angular-messages@1.3.15", ["github:angular/bower-angular-messages@1.3.15/index"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:angular/bower-angular-messages@1.3.15/index");
  global.define = __define;
  return module.exports;
});



System.register("github:angular/bower-material@0.8.3", ["github:angular/bower-material@0.8.3/angular-material"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:angular/bower-material@0.8.3/angular-material");
  global.define = __define;
  return module.exports;
});



System.register("app/main", ["angular", "angular-material", "angular-messages", "./style.css!"], function($__export) {
  "use strict";
  var __moduleName = "app/main";
  var angular,
      mainModule;
  return {
    setters: [function($__m) {
      angular = $__m.default;
    }, function($__m) {}, function($__m) {}, function($__m) {}],
    execute: function() {
      mainModule = $__export("mainModule", angular.module('jspm-sample', ['ngMaterial', 'ngMessages']));
      mainModule.controller('HomeController', ['$scope', function($scope) {
        $scope.user = {
          title: 'Developer',
          email: 'ipsum@lorem.com',
          firstName: '',
          lastName: '',
          company: 'Google',
          address: '1600 Amphitheatre Pkwy',
          city: 'Mountain View',
          state: 'CA',
          biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
          postalCode: '94043'
        };
      }]);
      mainModule.config(['$mdThemingProvider', function($mdThemingProvider) {
        $mdThemingProvider.theme('docs-dark', 'default').primaryPalette('yellow').dark();
      }]);
    }
  };
});



System.register('github:angular/bower-material@0.8.3/angular-material.css!github:systemjs/plugin-css@0.1.7', [], false, function() {});
System.register('app/style.css!github:systemjs/plugin-css@0.1.7', [], false, function() {});
(function(c){var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
("/*!\n * Angular Material Design\n * https://github.com/angular/material\n * @license MIT\n * v0.8.3\n */*,:after,:before{box-sizing:border-box}:focus{outline:0}body,html{height:100%;color:rgba(0,0,0,.87);background:#fff;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}body p,html p{line-height:1.846}body h3,html h3{display:block;-webkit-margin-before:1em;-webkit-margin-after:1em;-webkit-margin-start:0;-webkit-margin-end:0;font-size:1.17em;font-weight:700}button,html,input,select,textarea{font-family:RobotoDraft,Roboto,'Helvetica Neue',sans-serif}body{margin:0;padding:0;outline:0}.inset{padding:10px}a{background:0 0;outline:0}h1{font-size:2em;margin:.67em 0}h2{font-size:1.5em;margin:.83em 0}h3{font-size:1.17em;margin:1em 0}h4{font-size:1em;margin:1.33em 0}h5{font-size:.83em;margin:1.67em 0}h6{font-size:.75em;margin:2.33em 0}button,input,select,textarea{margin:0;font-size:100%;font-family:inherit;vertical-align:baseline}button,html input[type=button],input[type=reset],input[type=submit]{cursor:pointer;-webkit-appearance:button}button[disabled],html input[type=button][disabled],input[type=reset][disabled],input[type=submit][disabled]{cursor:default}textarea{vertical-align:top;overflow:auto}input[type=radio],input[type=checkbox]{padding:0;box-sizing:border-box}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box;-webkit-box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}.visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;text-transform:none;width:1px}.md-shadow{position:absolute;top:0;left:0;bottom:0;right:0;border-radius:inherit;pointer-events:none}.md-button.md-fab,.md-button.md-raised:not([disabled]),.md-shadow-bottom-z-1{box-shadow:0 2px 5px 0 rgba(0,0,0,.26)}.md-button.md-fab:not([disabled]):focus,.md-button.md-fab:not([disabled]):hover,.md-button.md-raised:not([disabled]):focus,.md-button.md-raised:not([disabled]):hover,.md-shadow-bottom-z-2{box-shadow:0 4px 8px 0 rgba(0,0,0,.4)}.md-shadow-animated.md-shadow{transition:box-shadow .28s cubic-bezier(.4,0,.2,1)}.md-ripple-container{pointer-events:none;position:absolute;overflow:hidden;left:0;top:0;width:100%;height:100%;transition:all .55s cubic-bezier(.25,.8,.25,1)}.md-ripple{position:absolute;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;opacity:0;border-radius:50%}.md-ripple.md-ripple-placed{transition:left 1.8s cubic-bezier(.25,.8,.25,1),top 1.8s cubic-bezier(.25,.8,.25,1),margin 1.3s cubic-bezier(.25,.8,.25,1),border 1.3s cubic-bezier(.25,.8,.25,1),width 1.3s cubic-bezier(.25,.8,.25,1),height 1.3s cubic-bezier(.25,.8,.25,1),opacity 1.3s cubic-bezier(.25,.8,.25,1),-webkit-transform 1.3s cubic-bezier(.25,.8,.25,1);transition:left 1.8s cubic-bezier(.25,.8,.25,1),top 1.8s cubic-bezier(.25,.8,.25,1),margin 1.3s cubic-bezier(.25,.8,.25,1),border 1.3s cubic-bezier(.25,.8,.25,1),width 1.3s cubic-bezier(.25,.8,.25,1),height 1.3s cubic-bezier(.25,.8,.25,1),opacity 1.3s cubic-bezier(.25,.8,.25,1),transform 1.3s cubic-bezier(.25,.8,.25,1)}.md-ripple.md-ripple-scaled{-webkit-transform:scale(1);transform:scale(1)}.md-ripple.md-ripple-active,.md-ripple.md-ripple-full,.md-ripple.md-ripple-visible{opacity:.2}[layout]{box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex}[layout=column]{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}[layout=row]{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}[layout-padding],[layout-padding]>[flex]{padding:8px}[layout-margin],[layout-margin]>[flex]{margin:8px}[layout-wrap]{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}[layout-fill]{margin:0;min-height:100%;width:100%}@-moz-document url-prefix(){[layout-fill]{margin:0;width:100%;min-height:auto;height:inherit}}[flex]{-webkit-flex:1;-ms-flex:1;flex:1}[flex=\"0\"]{-webkit-flex:0 0 0;-ms-flex:0 0 0;flex:0 0 0}[layout=row]>[flex=\"0\"]{max-width:0}[layout=column]>[flex=\"0\"]{max-height:0}[flex=\"5\"]{-webkit-flex:0 0 5%;-ms-flex:0 0 5%;flex:0 0 5%}[layout=row]>[flex=\"5\"]{max-width:5%}[layout=column]>[flex=\"5\"]{max-height:5%}[flex=\"10\"]{-webkit-flex:0 0 10%;-ms-flex:0 0 10%;flex:0 0 10%}[layout=row]>[flex=\"10\"]{max-width:10%}[layout=column]>[flex=\"10\"]{max-height:10%}[flex=\"15\"]{-webkit-flex:0 0 15%;-ms-flex:0 0 15%;flex:0 0 15%}[layout=row]>[flex=\"15\"]{max-width:15%}[layout=column]>[flex=\"15\"]{max-height:15%}[flex=\"20\"]{-webkit-flex:0 0 20%;-ms-flex:0 0 20%;flex:0 0 20%}[layout=row]>[flex=\"20\"]{max-width:20%}[layout=column]>[flex=\"20\"]{max-height:20%}[flex=\"25\"]{-webkit-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%}[layout=row]>[flex=\"25\"]{max-width:25%}[layout=column]>[flex=\"25\"]{max-height:25%}[flex=\"30\"]{-webkit-flex:0 0 30%;-ms-flex:0 0 30%;flex:0 0 30%}[layout=row]>[flex=\"30\"]{max-width:30%}[layout=column]>[flex=\"30\"]{max-height:30%}[flex=\"35\"]{-webkit-flex:0 0 35%;-ms-flex:0 0 35%;flex:0 0 35%}[layout=row]>[flex=\"35\"]{max-width:35%}[layout=column]>[flex=\"35\"]{max-height:35%}[flex=\"40\"]{-webkit-flex:0 0 40%;-ms-flex:0 0 40%;flex:0 0 40%}[layout=row]>[flex=\"40\"]{max-width:40%}[layout=column]>[flex=\"40\"]{max-height:40%}[flex=\"45\"]{-webkit-flex:0 0 45%;-ms-flex:0 0 45%;flex:0 0 45%}[layout=row]>[flex=\"45\"]{max-width:45%}[layout=column]>[flex=\"45\"]{max-height:45%}[flex=\"50\"]{-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%}[layout=row]>[flex=\"50\"]{max-width:50%}[layout=column]>[flex=\"50\"]{max-height:50%}[flex=\"55\"]{-webkit-flex:0 0 55%;-ms-flex:0 0 55%;flex:0 0 55%}[layout=row]>[flex=\"55\"]{max-width:55%}[layout=column]>[flex=\"55\"]{max-height:55%}[flex=\"60\"]{-webkit-flex:0 0 60%;-ms-flex:0 0 60%;flex:0 0 60%}[layout=row]>[flex=\"60\"]{max-width:60%}[layout=column]>[flex=\"60\"]{max-height:60%}[flex=\"65\"]{-webkit-flex:0 0 65%;-ms-flex:0 0 65%;flex:0 0 65%}[layout=row]>[flex=\"65\"]{max-width:65%}[layout=column]>[flex=\"65\"]{max-height:65%}[flex=\"70\"]{-webkit-flex:0 0 70%;-ms-flex:0 0 70%;flex:0 0 70%}[layout=row]>[flex=\"70\"]{max-width:70%}[layout=column]>[flex=\"70\"]{max-height:70%}[flex=\"75\"]{-webkit-flex:0 0 75%;-ms-flex:0 0 75%;flex:0 0 75%}[layout=row]>[flex=\"75\"]{max-width:75%}[layout=column]>[flex=\"75\"]{max-height:75%}[flex=\"80\"]{-webkit-flex:0 0 80%;-ms-flex:0 0 80%;flex:0 0 80%}[layout=row]>[flex=\"80\"]{max-width:80%}[layout=column]>[flex=\"80\"]{max-height:80%}[flex=\"85\"]{-webkit-flex:0 0 85%;-ms-flex:0 0 85%;flex:0 0 85%}[layout=row]>[flex=\"85\"]{max-width:85%}[layout=column]>[flex=\"85\"]{max-height:85%}[flex=\"90\"]{-webkit-flex:0 0 90%;-ms-flex:0 0 90%;flex:0 0 90%}[layout=row]>[flex=\"90\"]{max-width:90%}[layout=column]>[flex=\"90\"]{max-height:90%}[flex=\"95\"]{-webkit-flex:0 0 95%;-ms-flex:0 0 95%;flex:0 0 95%}[layout=row]>[flex=\"95\"]{max-width:95%}[layout=column]>[flex=\"95\"]{max-height:95%}[flex=\"100\"]{-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%}[layout=row]>[flex=\"100\"]{max-width:100%}[layout=column]>[flex=\"100\"]{max-height:100%}[flex=\"33\"],[flex=\"34\"]{-webkit-flex:0 0 33.33%;-ms-flex:0 0 33.33%;flex:0 0 33.33%}[flex=\"66\"],[flex=\"67\"]{-webkit-flex:0 0 66.66%;-ms-flex:0 0 66.66%;flex:0 0 66.66%}[layout=row]>[flex=\"33\"],[layout=row]>[flex=\"34\"]{max-width:33.33%}[layout=row]>[flex=\"66\"],[layout=row]>[flex=\"67\"]{max-width:66.66%}[layout=column]>[flex=\"33\"],[layout=column]>[flex=\"34\"]{max-height:33.33%}[layout=column]>[flex=\"66\"],[layout=column]>[flex=\"67\"]{max-height:66.66%}[layout-align=center],[layout-align=\"center center\"],[layout-align=\"center start\"],[layout-align=\"center end\"]{-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[layout-align=end],[layout-align=\"end center\"],[layout-align=\"end start\"],[layout-align=\"end end\"]{-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[layout-align=space-around],[layout-align=\"space-around center\"],[layout-align=\"space-around start\"],[layout-align=\"space-around end\"]{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}[layout-align=space-between],[layout-align=\"space-between center\"],[layout-align=\"space-between start\"],[layout-align=\"space-between end\"]{-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}[layout-align=\"center center\"],[layout-align=\"end center\"],[layout-align=\"space-around center\"],[layout-align=\"space-between center\"],[layout-align=\"start center\"]{-webkit-align-items:center;-ms-flex-align:center;align-items:center}[layout-align=\"center start\"],[layout-align=\"end start\"],[layout-align=\"space-around start\"],[layout-align=\"space-between start\"],[layout-align=\"start start\"]{-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[layout-align=\"center end\"],[layout-align=\"end end\"],[layout-align=\"space-around end\"],[layout-align=\"space-between end\"],[layout-align=\"start end\"]{-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[flex-order=\"0\"]{-webkit-order:0;-ms-flex-order:0;order:0}[flex-order=\"1\"]{-webkit-order:1;-ms-flex-order:1;order:1}[flex-order=\"2\"]{-webkit-order:2;-ms-flex-order:2;order:2}[flex-order=\"3\"]{-webkit-order:3;-ms-flex-order:3;order:3}[flex-order=\"4\"]{-webkit-order:4;-ms-flex-order:4;order:4}[flex-order=\"5\"]{-webkit-order:5;-ms-flex-order:5;order:5}[flex-order=\"6\"]{-webkit-order:6;-ms-flex-order:6;order:6}[flex-order=\"7\"]{-webkit-order:7;-ms-flex-order:7;order:7}[flex-order=\"8\"]{-webkit-order:8;-ms-flex-order:8;order:8}[flex-order=\"9\"]{-webkit-order:9;-ms-flex-order:9;order:9}@media (max-width:599px){[hide-sm]:not([show-sm]):not([show]),[hide]:not([show-sm]):not([show]){display:none}[flex-order-sm=\"0\"]{-webkit-order:0;-ms-flex-order:0;order:0}[flex-order-sm=\"1\"]{-webkit-order:1;-ms-flex-order:1;order:1}[flex-order-sm=\"2\"]{-webkit-order:2;-ms-flex-order:2;order:2}[flex-order-sm=\"3\"]{-webkit-order:3;-ms-flex-order:3;order:3}[flex-order-sm=\"4\"]{-webkit-order:4;-ms-flex-order:4;order:4}[flex-order-sm=\"5\"]{-webkit-order:5;-ms-flex-order:5;order:5}[flex-order-sm=\"6\"]{-webkit-order:6;-ms-flex-order:6;order:6}[flex-order-sm=\"7\"]{-webkit-order:7;-ms-flex-order:7;order:7}[flex-order-sm=\"8\"]{-webkit-order:8;-ms-flex-order:8;order:8}[flex-order-sm=\"9\"]{-webkit-order:9;-ms-flex-order:9;order:9}[layout-align-sm=center],[layout-align-sm=\"center center\"],[layout-align-sm=\"center start\"],[layout-align-sm=\"center end\"]{-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[layout-align-sm=end],[layout-align-sm=\"end center\"],[layout-align-sm=\"end start\"],[layout-align-sm=\"end end\"]{-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[layout-align-sm=space-around],[layout-align-sm=\"space-around center\"],[layout-align-sm=\"space-around start\"],[layout-align-sm=\"space-around end\"]{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}[layout-align-sm=space-between],[layout-align-sm=\"space-between center\"],[layout-align-sm=\"space-between start\"],[layout-align-sm=\"space-between end\"]{-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}[layout-align-sm=\"center center\"],[layout-align-sm=\"end center\"],[layout-align-sm=\"space-around center\"],[layout-align-sm=\"space-between center\"],[layout-align-sm=\"start center\"]{-webkit-align-items:center;-ms-flex-align:center;align-items:center}[layout-align-sm=\"center start\"],[layout-align-sm=\"end start\"],[layout-align-sm=\"space-around start\"],[layout-align-sm=\"space-between start\"],[layout-align-sm=\"start start\"]{-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[layout-align-sm=\"center end\"],[layout-align-sm=\"end end\"],[layout-align-sm=\"space-around end\"],[layout-align-sm=\"space-between end\"],[layout-align-sm=\"start end\"]{-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[layout-sm]{box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex}[layout-sm=column]{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}[layout-sm=row]{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}[flex-sm]{-webkit-flex:1;-ms-flex:1;flex:1}[flex-sm=\"0\"]{-webkit-flex:0 0 0;-ms-flex:0 0 0;flex:0 0 0}[layout=row]>[flex-sm=\"0\"]{max-width:0}[layout=column]>[flex-sm=\"0\"]{max-height:0}[flex-sm=\"5\"]{-webkit-flex:0 0 5%;-ms-flex:0 0 5%;flex:0 0 5%}[layout=row]>[flex-sm=\"5\"]{max-width:5%}[layout=column]>[flex-sm=\"5\"]{max-height:5%}[flex-sm=\"10\"]{-webkit-flex:0 0 10%;-ms-flex:0 0 10%;flex:0 0 10%}[layout=row]>[flex-sm=\"10\"]{max-width:10%}[layout=column]>[flex-sm=\"10\"]{max-height:10%}[flex-sm=\"15\"]{-webkit-flex:0 0 15%;-ms-flex:0 0 15%;flex:0 0 15%}[layout=row]>[flex-sm=\"15\"]{max-width:15%}[layout=column]>[flex-sm=\"15\"]{max-height:15%}[flex-sm=\"20\"]{-webkit-flex:0 0 20%;-ms-flex:0 0 20%;flex:0 0 20%}[layout=row]>[flex-sm=\"20\"]{max-width:20%}[layout=column]>[flex-sm=\"20\"]{max-height:20%}[flex-sm=\"25\"]{-webkit-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%}[layout=row]>[flex-sm=\"25\"]{max-width:25%}[layout=column]>[flex-sm=\"25\"]{max-height:25%}[flex-sm=\"30\"]{-webkit-flex:0 0 30%;-ms-flex:0 0 30%;flex:0 0 30%}[layout=row]>[flex-sm=\"30\"]{max-width:30%}[layout=column]>[flex-sm=\"30\"]{max-height:30%}[flex-sm=\"35\"]{-webkit-flex:0 0 35%;-ms-flex:0 0 35%;flex:0 0 35%}[layout=row]>[flex-sm=\"35\"]{max-width:35%}[layout=column]>[flex-sm=\"35\"]{max-height:35%}[flex-sm=\"40\"]{-webkit-flex:0 0 40%;-ms-flex:0 0 40%;flex:0 0 40%}[layout=row]>[flex-sm=\"40\"]{max-width:40%}[layout=column]>[flex-sm=\"40\"]{max-height:40%}[flex-sm=\"45\"]{-webkit-flex:0 0 45%;-ms-flex:0 0 45%;flex:0 0 45%}[layout=row]>[flex-sm=\"45\"]{max-width:45%}[layout=column]>[flex-sm=\"45\"]{max-height:45%}[flex-sm=\"50\"]{-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%}[layout=row]>[flex-sm=\"50\"]{max-width:50%}[layout=column]>[flex-sm=\"50\"]{max-height:50%}[flex-sm=\"55\"]{-webkit-flex:0 0 55%;-ms-flex:0 0 55%;flex:0 0 55%}[layout=row]>[flex-sm=\"55\"]{max-width:55%}[layout=column]>[flex-sm=\"55\"]{max-height:55%}[flex-sm=\"60\"]{-webkit-flex:0 0 60%;-ms-flex:0 0 60%;flex:0 0 60%}[layout=row]>[flex-sm=\"60\"]{max-width:60%}[layout=column]>[flex-sm=\"60\"]{max-height:60%}[flex-sm=\"65\"]{-webkit-flex:0 0 65%;-ms-flex:0 0 65%;flex:0 0 65%}[layout=row]>[flex-sm=\"65\"]{max-width:65%}[layout=column]>[flex-sm=\"65\"]{max-height:65%}[flex-sm=\"70\"]{-webkit-flex:0 0 70%;-ms-flex:0 0 70%;flex:0 0 70%}[layout=row]>[flex-sm=\"70\"]{max-width:70%}[layout=column]>[flex-sm=\"70\"]{max-height:70%}[flex-sm=\"75\"]{-webkit-flex:0 0 75%;-ms-flex:0 0 75%;flex:0 0 75%}[layout=row]>[flex-sm=\"75\"]{max-width:75%}[layout=column]>[flex-sm=\"75\"]{max-height:75%}[flex-sm=\"80\"]{-webkit-flex:0 0 80%;-ms-flex:0 0 80%;flex:0 0 80%}[layout=row]>[flex-sm=\"80\"]{max-width:80%}[layout=column]>[flex-sm=\"80\"]{max-height:80%}[flex-sm=\"85\"]{-webkit-flex:0 0 85%;-ms-flex:0 0 85%;flex:0 0 85%}[layout=row]>[flex-sm=\"85\"]{max-width:85%}[layout=column]>[flex-sm=\"85\"]{max-height:85%}[flex-sm=\"90\"]{-webkit-flex:0 0 90%;-ms-flex:0 0 90%;flex:0 0 90%}[layout=row]>[flex-sm=\"90\"]{max-width:90%}[layout=column]>[flex-sm=\"90\"]{max-height:90%}[flex-sm=\"95\"]{-webkit-flex:0 0 95%;-ms-flex:0 0 95%;flex:0 0 95%}[layout=row]>[flex-sm=\"95\"]{max-width:95%}[layout=column]>[flex-sm=\"95\"]{max-height:95%}[flex-sm=\"100\"]{-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%}[layout=row]>[flex-sm=\"100\"]{max-width:100%}[layout=column]>[flex-sm=\"100\"]{max-height:100%}[flex-sm=\"33\"],[flex-sm=\"34\"]{-webkit-flex:0 0 33.33%;-ms-flex:0 0 33.33%;flex:0 0 33.33%}[flex-sm=\"66\"],[flex-sm=\"67\"]{-webkit-flex:0 0 66.66%;-ms-flex:0 0 66.66%;flex:0 0 66.66%}[layout=row]>[flex-sm=\"33\"],[layout=row]>[flex-sm=\"34\"]{max-width:33.33%}[layout=row]>[flex-sm=\"66\"],[layout=row]>[flex-sm=\"67\"]{max-width:66.66%}[layout=column]>[flex-sm=\"33\"],[layout=column]>[flex-sm=\"34\"]{max-height:33.33%}[layout=column]>[flex-sm=\"66\"],[layout=column]>[flex-sm=\"67\"]{max-height:66.66%}}@media (min-width:600px){[flex-order-gt-sm=\"0\"]{-webkit-order:0;-ms-flex-order:0;order:0}[flex-order-gt-sm=\"1\"]{-webkit-order:1;-ms-flex-order:1;order:1}[flex-order-gt-sm=\"2\"]{-webkit-order:2;-ms-flex-order:2;order:2}[flex-order-gt-sm=\"3\"]{-webkit-order:3;-ms-flex-order:3;order:3}[flex-order-gt-sm=\"4\"]{-webkit-order:4;-ms-flex-order:4;order:4}[flex-order-gt-sm=\"5\"]{-webkit-order:5;-ms-flex-order:5;order:5}[flex-order-gt-sm=\"6\"]{-webkit-order:6;-ms-flex-order:6;order:6}[flex-order-gt-sm=\"7\"]{-webkit-order:7;-ms-flex-order:7;order:7}[flex-order-gt-sm=\"8\"]{-webkit-order:8;-ms-flex-order:8;order:8}[flex-order-gt-sm=\"9\"]{-webkit-order:9;-ms-flex-order:9;order:9}[layout-align-gt-sm=center],[layout-align-gt-sm=\"center center\"],[layout-align-gt-sm=\"center start\"],[layout-align-gt-sm=\"center end\"]{-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[layout-align-gt-sm=end],[layout-align-gt-sm=\"end center\"],[layout-align-gt-sm=\"end start\"],[layout-align-gt-sm=\"end end\"]{-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[layout-align-gt-sm=space-around],[layout-align-gt-sm=\"space-around center\"],[layout-align-gt-sm=\"space-around start\"],[layout-align-gt-sm=\"space-around end\"]{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}[layout-align-gt-sm=space-between],[layout-align-gt-sm=\"space-between center\"],[layout-align-gt-sm=\"space-between start\"],[layout-align-gt-sm=\"space-between end\"]{-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}[layout-align-gt-sm=\"center center\"],[layout-align-gt-sm=\"end center\"],[layout-align-gt-sm=\"space-around center\"],[layout-align-gt-sm=\"space-between center\"],[layout-align-gt-sm=\"start center\"]{-webkit-align-items:center;-ms-flex-align:center;align-items:center}[layout-align-gt-sm=\"center start\"],[layout-align-gt-sm=\"end start\"],[layout-align-gt-sm=\"space-around start\"],[layout-align-gt-sm=\"space-between start\"],[layout-align-gt-sm=\"start start\"]{-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[layout-align-gt-sm=\"center end\"],[layout-align-gt-sm=\"end end\"],[layout-align-gt-sm=\"space-around end\"],[layout-align-gt-sm=\"space-between end\"],[layout-align-gt-sm=\"start end\"]{-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[layout-gt-sm]{box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex}[layout-gt-sm=column]{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}[layout-gt-sm=row]{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}[flex-gt-sm]{-webkit-flex:1;-ms-flex:1;flex:1}[flex-gt-sm=\"0\"]{-webkit-flex:0 0 0;-ms-flex:0 0 0;flex:0 0 0}[layout=row]>[flex-gt-sm=\"0\"]{max-width:0}[layout=column]>[flex-gt-sm=\"0\"]{max-height:0}[flex-gt-sm=\"5\"]{-webkit-flex:0 0 5%;-ms-flex:0 0 5%;flex:0 0 5%}[layout=row]>[flex-gt-sm=\"5\"]{max-width:5%}[layout=column]>[flex-gt-sm=\"5\"]{max-height:5%}[flex-gt-sm=\"10\"]{-webkit-flex:0 0 10%;-ms-flex:0 0 10%;flex:0 0 10%}[layout=row]>[flex-gt-sm=\"10\"]{max-width:10%}[layout=column]>[flex-gt-sm=\"10\"]{max-height:10%}[flex-gt-sm=\"15\"]{-webkit-flex:0 0 15%;-ms-flex:0 0 15%;flex:0 0 15%}[layout=row]>[flex-gt-sm=\"15\"]{max-width:15%}[layout=column]>[flex-gt-sm=\"15\"]{max-height:15%}[flex-gt-sm=\"20\"]{-webkit-flex:0 0 20%;-ms-flex:0 0 20%;flex:0 0 20%}[layout=row]>[flex-gt-sm=\"20\"]{max-width:20%}[layout=column]>[flex-gt-sm=\"20\"]{max-height:20%}[flex-gt-sm=\"25\"]{-webkit-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%}[layout=row]>[flex-gt-sm=\"25\"]{max-width:25%}[layout=column]>[flex-gt-sm=\"25\"]{max-height:25%}[flex-gt-sm=\"30\"]{-webkit-flex:0 0 30%;-ms-flex:0 0 30%;flex:0 0 30%}[layout=row]>[flex-gt-sm=\"30\"]{max-width:30%}[layout=column]>[flex-gt-sm=\"30\"]{max-height:30%}[flex-gt-sm=\"35\"]{-webkit-flex:0 0 35%;-ms-flex:0 0 35%;flex:0 0 35%}[layout=row]>[flex-gt-sm=\"35\"]{max-width:35%}[layout=column]>[flex-gt-sm=\"35\"]{max-height:35%}[flex-gt-sm=\"40\"]{-webkit-flex:0 0 40%;-ms-flex:0 0 40%;flex:0 0 40%}[layout=row]>[flex-gt-sm=\"40\"]{max-width:40%}[layout=column]>[flex-gt-sm=\"40\"]{max-height:40%}[flex-gt-sm=\"45\"]{-webkit-flex:0 0 45%;-ms-flex:0 0 45%;flex:0 0 45%}[layout=row]>[flex-gt-sm=\"45\"]{max-width:45%}[layout=column]>[flex-gt-sm=\"45\"]{max-height:45%}[flex-gt-sm=\"50\"]{-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%}[layout=row]>[flex-gt-sm=\"50\"]{max-width:50%}[layout=column]>[flex-gt-sm=\"50\"]{max-height:50%}[flex-gt-sm=\"55\"]{-webkit-flex:0 0 55%;-ms-flex:0 0 55%;flex:0 0 55%}[layout=row]>[flex-gt-sm=\"55\"]{max-width:55%}[layout=column]>[flex-gt-sm=\"55\"]{max-height:55%}[flex-gt-sm=\"60\"]{-webkit-flex:0 0 60%;-ms-flex:0 0 60%;flex:0 0 60%}[layout=row]>[flex-gt-sm=\"60\"]{max-width:60%}[layout=column]>[flex-gt-sm=\"60\"]{max-height:60%}[flex-gt-sm=\"65\"]{-webkit-flex:0 0 65%;-ms-flex:0 0 65%;flex:0 0 65%}[layout=row]>[flex-gt-sm=\"65\"]{max-width:65%}[layout=column]>[flex-gt-sm=\"65\"]{max-height:65%}[flex-gt-sm=\"70\"]{-webkit-flex:0 0 70%;-ms-flex:0 0 70%;flex:0 0 70%}[layout=row]>[flex-gt-sm=\"70\"]{max-width:70%}[layout=column]>[flex-gt-sm=\"70\"]{max-height:70%}[flex-gt-sm=\"75\"]{-webkit-flex:0 0 75%;-ms-flex:0 0 75%;flex:0 0 75%}[layout=row]>[flex-gt-sm=\"75\"]{max-width:75%}[layout=column]>[flex-gt-sm=\"75\"]{max-height:75%}[flex-gt-sm=\"80\"]{-webkit-flex:0 0 80%;-ms-flex:0 0 80%;flex:0 0 80%}[layout=row]>[flex-gt-sm=\"80\"]{max-width:80%}[layout=column]>[flex-gt-sm=\"80\"]{max-height:80%}[flex-gt-sm=\"85\"]{-webkit-flex:0 0 85%;-ms-flex:0 0 85%;flex:0 0 85%}[layout=row]>[flex-gt-sm=\"85\"]{max-width:85%}[layout=column]>[flex-gt-sm=\"85\"]{max-height:85%}[flex-gt-sm=\"90\"]{-webkit-flex:0 0 90%;-ms-flex:0 0 90%;flex:0 0 90%}[layout=row]>[flex-gt-sm=\"90\"]{max-width:90%}[layout=column]>[flex-gt-sm=\"90\"]{max-height:90%}[flex-gt-sm=\"95\"]{-webkit-flex:0 0 95%;-ms-flex:0 0 95%;flex:0 0 95%}[layout=row]>[flex-gt-sm=\"95\"]{max-width:95%}[layout=column]>[flex-gt-sm=\"95\"]{max-height:95%}[flex-gt-sm=\"100\"]{-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%}[layout=row]>[flex-gt-sm=\"100\"]{max-width:100%}[layout=column]>[flex-gt-sm=\"100\"]{max-height:100%}[flex-gt-sm=\"33\"],[flex-gt-sm=\"34\"]{-webkit-flex:0 0 33.33%;-ms-flex:0 0 33.33%;flex:0 0 33.33%}[flex-gt-sm=\"66\"],[flex-gt-sm=\"67\"]{-webkit-flex:0 0 66.66%;-ms-flex:0 0 66.66%;flex:0 0 66.66%}[layout=row]>[flex-gt-sm=\"33\"],[layout=row]>[flex-gt-sm=\"34\"]{max-width:33.33%}[layout=row]>[flex-gt-sm=\"66\"],[layout=row]>[flex-gt-sm=\"67\"]{max-width:66.66%}[layout=column]>[flex-gt-sm=\"33\"],[layout=column]>[flex-gt-sm=\"34\"]{max-height:33.33%}[layout=column]>[flex-gt-sm=\"66\"],[layout=column]>[flex-gt-sm=\"67\"]{max-height:66.66%}}@media (min-width:600px) and (max-width:959px){[hide-gt-sm]:not([show-gt-sm]):not([show-md]):not([show]),[hide-md]:not([show-md]):not([show]),[hide]:not([show-gt-sm]):not([show-md]):not([show]){display:none}[flex-order-md=\"0\"]{-webkit-order:0;-ms-flex-order:0;order:0}[flex-order-md=\"1\"]{-webkit-order:1;-ms-flex-order:1;order:1}[flex-order-md=\"2\"]{-webkit-order:2;-ms-flex-order:2;order:2}[flex-order-md=\"3\"]{-webkit-order:3;-ms-flex-order:3;order:3}[flex-order-md=\"4\"]{-webkit-order:4;-ms-flex-order:4;order:4}[flex-order-md=\"5\"]{-webkit-order:5;-ms-flex-order:5;order:5}[flex-order-md=\"6\"]{-webkit-order:6;-ms-flex-order:6;order:6}[flex-order-md=\"7\"]{-webkit-order:7;-ms-flex-order:7;order:7}[flex-order-md=\"8\"]{-webkit-order:8;-ms-flex-order:8;order:8}[flex-order-md=\"9\"]{-webkit-order:9;-ms-flex-order:9;order:9}[layout-align-md=center],[layout-align-md=\"center center\"],[layout-align-md=\"center start\"],[layout-align-md=\"center end\"]{-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[layout-align-md=end],[layout-align-md=\"end center\"],[layout-align-md=\"end start\"],[layout-align-md=\"end end\"]{-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[layout-align-md=space-around],[layout-align-md=\"space-around center\"],[layout-align-md=\"space-around start\"],[layout-align-md=\"space-around end\"]{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}[layout-align-md=space-between],[layout-align-md=\"space-between center\"],[layout-align-md=\"space-between start\"],[layout-align-md=\"space-between end\"]{-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}[layout-align-md=\"center center\"],[layout-align-md=\"end center\"],[layout-align-md=\"space-around center\"],[layout-align-md=\"space-between center\"],[layout-align-md=\"start center\"]{-webkit-align-items:center;-ms-flex-align:center;align-items:center}[layout-align-md=\"center start\"],[layout-align-md=\"end start\"],[layout-align-md=\"space-around start\"],[layout-align-md=\"space-between start\"],[layout-align-md=\"start start\"]{-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[layout-align-md=\"center end\"],[layout-align-md=\"end end\"],[layout-align-md=\"space-around end\"],[layout-align-md=\"space-between end\"],[layout-align-md=\"start end\"]{-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[layout-md]{box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex}[layout-md=column]{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}[layout-md=row]{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}[flex-md]{-webkit-flex:1;-ms-flex:1;flex:1}[flex-md=\"0\"]{-webkit-flex:0 0 0;-ms-flex:0 0 0;flex:0 0 0}[layout=row]>[flex-md=\"0\"]{max-width:0}[layout=column]>[flex-md=\"0\"]{max-height:0}[flex-md=\"5\"]{-webkit-flex:0 0 5%;-ms-flex:0 0 5%;flex:0 0 5%}[layout=row]>[flex-md=\"5\"]{max-width:5%}[layout=column]>[flex-md=\"5\"]{max-height:5%}[flex-md=\"10\"]{-webkit-flex:0 0 10%;-ms-flex:0 0 10%;flex:0 0 10%}[layout=row]>[flex-md=\"10\"]{max-width:10%}[layout=column]>[flex-md=\"10\"]{max-height:10%}[flex-md=\"15\"]{-webkit-flex:0 0 15%;-ms-flex:0 0 15%;flex:0 0 15%}[layout=row]>[flex-md=\"15\"]{max-width:15%}[layout=column]>[flex-md=\"15\"]{max-height:15%}[flex-md=\"20\"]{-webkit-flex:0 0 20%;-ms-flex:0 0 20%;flex:0 0 20%}[layout=row]>[flex-md=\"20\"]{max-width:20%}[layout=column]>[flex-md=\"20\"]{max-height:20%}[flex-md=\"25\"]{-webkit-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%}[layout=row]>[flex-md=\"25\"]{max-width:25%}[layout=column]>[flex-md=\"25\"]{max-height:25%}[flex-md=\"30\"]{-webkit-flex:0 0 30%;-ms-flex:0 0 30%;flex:0 0 30%}[layout=row]>[flex-md=\"30\"]{max-width:30%}[layout=column]>[flex-md=\"30\"]{max-height:30%}[flex-md=\"35\"]{-webkit-flex:0 0 35%;-ms-flex:0 0 35%;flex:0 0 35%}[layout=row]>[flex-md=\"35\"]{max-width:35%}[layout=column]>[flex-md=\"35\"]{max-height:35%}[flex-md=\"40\"]{-webkit-flex:0 0 40%;-ms-flex:0 0 40%;flex:0 0 40%}[layout=row]>[flex-md=\"40\"]{max-width:40%}[layout=column]>[flex-md=\"40\"]{max-height:40%}[flex-md=\"45\"]{-webkit-flex:0 0 45%;-ms-flex:0 0 45%;flex:0 0 45%}[layout=row]>[flex-md=\"45\"]{max-width:45%}[layout=column]>[flex-md=\"45\"]{max-height:45%}[flex-md=\"50\"]{-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%}[layout=row]>[flex-md=\"50\"]{max-width:50%}[layout=column]>[flex-md=\"50\"]{max-height:50%}[flex-md=\"55\"]{-webkit-flex:0 0 55%;-ms-flex:0 0 55%;flex:0 0 55%}[layout=row]>[flex-md=\"55\"]{max-width:55%}[layout=column]>[flex-md=\"55\"]{max-height:55%}[flex-md=\"60\"]{-webkit-flex:0 0 60%;-ms-flex:0 0 60%;flex:0 0 60%}[layout=row]>[flex-md=\"60\"]{max-width:60%}[layout=column]>[flex-md=\"60\"]{max-height:60%}[flex-md=\"65\"]{-webkit-flex:0 0 65%;-ms-flex:0 0 65%;flex:0 0 65%}[layout=row]>[flex-md=\"65\"]{max-width:65%}[layout=column]>[flex-md=\"65\"]{max-height:65%}[flex-md=\"70\"]{-webkit-flex:0 0 70%;-ms-flex:0 0 70%;flex:0 0 70%}[layout=row]>[flex-md=\"70\"]{max-width:70%}[layout=column]>[flex-md=\"70\"]{max-height:70%}[flex-md=\"75\"]{-webkit-flex:0 0 75%;-ms-flex:0 0 75%;flex:0 0 75%}[layout=row]>[flex-md=\"75\"]{max-width:75%}[layout=column]>[flex-md=\"75\"]{max-height:75%}[flex-md=\"80\"]{-webkit-flex:0 0 80%;-ms-flex:0 0 80%;flex:0 0 80%}[layout=row]>[flex-md=\"80\"]{max-width:80%}[layout=column]>[flex-md=\"80\"]{max-height:80%}[flex-md=\"85\"]{-webkit-flex:0 0 85%;-ms-flex:0 0 85%;flex:0 0 85%}[layout=row]>[flex-md=\"85\"]{max-width:85%}[layout=column]>[flex-md=\"85\"]{max-height:85%}[flex-md=\"90\"]{-webkit-flex:0 0 90%;-ms-flex:0 0 90%;flex:0 0 90%}[layout=row]>[flex-md=\"90\"]{max-width:90%}[layout=column]>[flex-md=\"90\"]{max-height:90%}[flex-md=\"95\"]{-webkit-flex:0 0 95%;-ms-flex:0 0 95%;flex:0 0 95%}[layout=row]>[flex-md=\"95\"]{max-width:95%}[layout=column]>[flex-md=\"95\"]{max-height:95%}[flex-md=\"100\"]{-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%}[layout=row]>[flex-md=\"100\"]{max-width:100%}[layout=column]>[flex-md=\"100\"]{max-height:100%}[flex-md=\"33\"],[flex-md=\"34\"]{-webkit-flex:0 0 33.33%;-ms-flex:0 0 33.33%;flex:0 0 33.33%}[flex-md=\"66\"],[flex-md=\"67\"]{-webkit-flex:0 0 66.66%;-ms-flex:0 0 66.66%;flex:0 0 66.66%}[layout=row]>[flex-md=\"33\"],[layout=row]>[flex-md=\"34\"]{max-width:33.33%}[layout=row]>[flex-md=\"66\"],[layout=row]>[flex-md=\"67\"]{max-width:66.66%}[layout=column]>[flex-md=\"33\"],[layout=column]>[flex-md=\"34\"]{max-height:33.33%}[layout=column]>[flex-md=\"66\"],[layout=column]>[flex-md=\"67\"]{max-height:66.66%}}@media (min-width:960px){[flex-order-gt-md=\"0\"]{-webkit-order:0;-ms-flex-order:0;order:0}[flex-order-gt-md=\"1\"]{-webkit-order:1;-ms-flex-order:1;order:1}[flex-order-gt-md=\"2\"]{-webkit-order:2;-ms-flex-order:2;order:2}[flex-order-gt-md=\"3\"]{-webkit-order:3;-ms-flex-order:3;order:3}[flex-order-gt-md=\"4\"]{-webkit-order:4;-ms-flex-order:4;order:4}[flex-order-gt-md=\"5\"]{-webkit-order:5;-ms-flex-order:5;order:5}[flex-order-gt-md=\"6\"]{-webkit-order:6;-ms-flex-order:6;order:6}[flex-order-gt-md=\"7\"]{-webkit-order:7;-ms-flex-order:7;order:7}[flex-order-gt-md=\"8\"]{-webkit-order:8;-ms-flex-order:8;order:8}[flex-order-gt-md=\"9\"]{-webkit-order:9;-ms-flex-order:9;order:9}[layout-align-gt-md=center],[layout-align-gt-md=\"center center\"],[layout-align-gt-md=\"center start\"],[layout-align-gt-md=\"center end\"]{-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[layout-align-gt-md=end],[layout-align-gt-md=\"end center\"],[layout-align-gt-md=\"end start\"],[layout-align-gt-md=\"end end\"]{-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[layout-align-gt-md=space-around],[layout-align-gt-md=\"space-around center\"],[layout-align-gt-md=\"space-around start\"],[layout-align-gt-md=\"space-around end\"]{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}[layout-align-gt-md=space-between],[layout-align-gt-md=\"space-between center\"],[layout-align-gt-md=\"space-between start\"],[layout-align-gt-md=\"space-between end\"]{-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}[layout-align-gt-md=\"center center\"],[layout-align-gt-md=\"end center\"],[layout-align-gt-md=\"space-around center\"],[layout-align-gt-md=\"space-between center\"],[layout-align-gt-md=\"start center\"]{-webkit-align-items:center;-ms-flex-align:center;align-items:center}[layout-align-gt-md=\"center start\"],[layout-align-gt-md=\"end start\"],[layout-align-gt-md=\"space-around start\"],[layout-align-gt-md=\"space-between start\"],[layout-align-gt-md=\"start start\"]{-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[layout-align-gt-md=\"center end\"],[layout-align-gt-md=\"end end\"],[layout-align-gt-md=\"space-around end\"],[layout-align-gt-md=\"space-between end\"],[layout-align-gt-md=\"start end\"]{-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[layout-gt-md]{box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex}[layout-gt-md=column]{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}[layout-gt-md=row]{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}[flex-gt-md]{-webkit-flex:1;-ms-flex:1;flex:1}[flex-gt-md=\"0\"]{-webkit-flex:0 0 0;-ms-flex:0 0 0;flex:0 0 0}[layout=row]>[flex-gt-md=\"0\"]{max-width:0}[layout=column]>[flex-gt-md=\"0\"]{max-height:0}[flex-gt-md=\"5\"]{-webkit-flex:0 0 5%;-ms-flex:0 0 5%;flex:0 0 5%}[layout=row]>[flex-gt-md=\"5\"]{max-width:5%}[layout=column]>[flex-gt-md=\"5\"]{max-height:5%}[flex-gt-md=\"10\"]{-webkit-flex:0 0 10%;-ms-flex:0 0 10%;flex:0 0 10%}[layout=row]>[flex-gt-md=\"10\"]{max-width:10%}[layout=column]>[flex-gt-md=\"10\"]{max-height:10%}[flex-gt-md=\"15\"]{-webkit-flex:0 0 15%;-ms-flex:0 0 15%;flex:0 0 15%}[layout=row]>[flex-gt-md=\"15\"]{max-width:15%}[layout=column]>[flex-gt-md=\"15\"]{max-height:15%}[flex-gt-md=\"20\"]{-webkit-flex:0 0 20%;-ms-flex:0 0 20%;flex:0 0 20%}[layout=row]>[flex-gt-md=\"20\"]{max-width:20%}[layout=column]>[flex-gt-md=\"20\"]{max-height:20%}[flex-gt-md=\"25\"]{-webkit-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%}[layout=row]>[flex-gt-md=\"25\"]{max-width:25%}[layout=column]>[flex-gt-md=\"25\"]{max-height:25%}[flex-gt-md=\"30\"]{-webkit-flex:0 0 30%;-ms-flex:0 0 30%;flex:0 0 30%}[layout=row]>[flex-gt-md=\"30\"]{max-width:30%}[layout=column]>[flex-gt-md=\"30\"]{max-height:30%}[flex-gt-md=\"35\"]{-webkit-flex:0 0 35%;-ms-flex:0 0 35%;flex:0 0 35%}[layout=row]>[flex-gt-md=\"35\"]{max-width:35%}[layout=column]>[flex-gt-md=\"35\"]{max-height:35%}[flex-gt-md=\"40\"]{-webkit-flex:0 0 40%;-ms-flex:0 0 40%;flex:0 0 40%}[layout=row]>[flex-gt-md=\"40\"]{max-width:40%}[layout=column]>[flex-gt-md=\"40\"]{max-height:40%}[flex-gt-md=\"45\"]{-webkit-flex:0 0 45%;-ms-flex:0 0 45%;flex:0 0 45%}[layout=row]>[flex-gt-md=\"45\"]{max-width:45%}[layout=column]>[flex-gt-md=\"45\"]{max-height:45%}[flex-gt-md=\"50\"]{-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%}[layout=row]>[flex-gt-md=\"50\"]{max-width:50%}[layout=column]>[flex-gt-md=\"50\"]{max-height:50%}[flex-gt-md=\"55\"]{-webkit-flex:0 0 55%;-ms-flex:0 0 55%;flex:0 0 55%}[layout=row]>[flex-gt-md=\"55\"]{max-width:55%}[layout=column]>[flex-gt-md=\"55\"]{max-height:55%}[flex-gt-md=\"60\"]{-webkit-flex:0 0 60%;-ms-flex:0 0 60%;flex:0 0 60%}[layout=row]>[flex-gt-md=\"60\"]{max-width:60%}[layout=column]>[flex-gt-md=\"60\"]{max-height:60%}[flex-gt-md=\"65\"]{-webkit-flex:0 0 65%;-ms-flex:0 0 65%;flex:0 0 65%}[layout=row]>[flex-gt-md=\"65\"]{max-width:65%}[layout=column]>[flex-gt-md=\"65\"]{max-height:65%}[flex-gt-md=\"70\"]{-webkit-flex:0 0 70%;-ms-flex:0 0 70%;flex:0 0 70%}[layout=row]>[flex-gt-md=\"70\"]{max-width:70%}[layout=column]>[flex-gt-md=\"70\"]{max-height:70%}[flex-gt-md=\"75\"]{-webkit-flex:0 0 75%;-ms-flex:0 0 75%;flex:0 0 75%}[layout=row]>[flex-gt-md=\"75\"]{max-width:75%}[layout=column]>[flex-gt-md=\"75\"]{max-height:75%}[flex-gt-md=\"80\"]{-webkit-flex:0 0 80%;-ms-flex:0 0 80%;flex:0 0 80%}[layout=row]>[flex-gt-md=\"80\"]{max-width:80%}[layout=column]>[flex-gt-md=\"80\"]{max-height:80%}[flex-gt-md=\"85\"]{-webkit-flex:0 0 85%;-ms-flex:0 0 85%;flex:0 0 85%}[layout=row]>[flex-gt-md=\"85\"]{max-width:85%}[layout=column]>[flex-gt-md=\"85\"]{max-height:85%}[flex-gt-md=\"90\"]{-webkit-flex:0 0 90%;-ms-flex:0 0 90%;flex:0 0 90%}[layout=row]>[flex-gt-md=\"90\"]{max-width:90%}[layout=column]>[flex-gt-md=\"90\"]{max-height:90%}[flex-gt-md=\"95\"]{-webkit-flex:0 0 95%;-ms-flex:0 0 95%;flex:0 0 95%}[layout=row]>[flex-gt-md=\"95\"]{max-width:95%}[layout=column]>[flex-gt-md=\"95\"]{max-height:95%}[flex-gt-md=\"100\"]{-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%}[layout=row]>[flex-gt-md=\"100\"]{max-width:100%}[layout=column]>[flex-gt-md=\"100\"]{max-height:100%}[flex-gt-md=\"33\"],[flex-gt-md=\"34\"]{-webkit-flex:0 0 33.33%;-ms-flex:0 0 33.33%;flex:0 0 33.33%}[flex-gt-md=\"66\"],[flex-gt-md=\"67\"]{-webkit-flex:0 0 66.66%;-ms-flex:0 0 66.66%;flex:0 0 66.66%}[layout=row]>[flex-gt-md=\"33\"],[layout=row]>[flex-gt-md=\"34\"]{max-width:33.33%}[layout=row]>[flex-gt-md=\"66\"],[layout=row]>[flex-gt-md=\"67\"]{max-width:66.66%}[layout=column]>[flex-gt-md=\"33\"],[layout=column]>[flex-gt-md=\"34\"]{max-height:33.33%}[layout=column]>[flex-gt-md=\"66\"],[layout=column]>[flex-gt-md=\"67\"]{max-height:66.66%}}@media (min-width:960px) and (max-width:1199px){[hide-gt-md]:not([show-gt-sm]):not([show-gt-md]):not([show-lg]):not([show]),[hide-gt-sm]:not([show-gt-sm]):not([show-gt-md]):not([show-lg]):not([show]),[hide-lg]:not([show-lg]):not([show]),[hide]:not([show-gt-sm]):not([show-gt-md]):not([show-lg]):not([show]){display:none}[flex-order-lg=\"0\"]{-webkit-order:0;-ms-flex-order:0;order:0}[flex-order-lg=\"1\"]{-webkit-order:1;-ms-flex-order:1;order:1}[flex-order-lg=\"2\"]{-webkit-order:2;-ms-flex-order:2;order:2}[flex-order-lg=\"3\"]{-webkit-order:3;-ms-flex-order:3;order:3}[flex-order-lg=\"4\"]{-webkit-order:4;-ms-flex-order:4;order:4}[flex-order-lg=\"5\"]{-webkit-order:5;-ms-flex-order:5;order:5}[flex-order-lg=\"6\"]{-webkit-order:6;-ms-flex-order:6;order:6}[flex-order-lg=\"7\"]{-webkit-order:7;-ms-flex-order:7;order:7}[flex-order-lg=\"8\"]{-webkit-order:8;-ms-flex-order:8;order:8}[flex-order-lg=\"9\"]{-webkit-order:9;-ms-flex-order:9;order:9}[layout-align-lg=center],[layout-align-lg=\"center center\"],[layout-align-lg=\"center start\"],[layout-align-lg=\"center end\"]{-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[layout-align-lg=end],[layout-align-lg=\"end center\"],[layout-align-lg=\"end start\"],[layout-align-lg=\"end end\"]{-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[layout-align-lg=space-around],[layout-align-lg=\"space-around center\"],[layout-align-lg=\"space-around start\"],[layout-align-lg=\"space-around end\"]{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}[layout-align-lg=space-between],[layout-align-lg=\"space-between center\"],[layout-align-lg=\"space-between start\"],[layout-align-lg=\"space-between end\"]{-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}[layout-align-lg=\"center center\"],[layout-align-lg=\"end center\"],[layout-align-lg=\"space-around center\"],[layout-align-lg=\"space-between center\"],[layout-align-lg=\"start center\"]{-webkit-align-items:center;-ms-flex-align:center;align-items:center}[layout-align-lg=\"center start\"],[layout-align-lg=\"end start\"],[layout-align-lg=\"space-around start\"],[layout-align-lg=\"space-between start\"],[layout-align-lg=\"start start\"]{-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[layout-align-lg=\"center end\"],[layout-align-lg=\"end end\"],[layout-align-lg=\"space-around end\"],[layout-align-lg=\"space-between end\"],[layout-align-lg=\"start end\"]{-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[layout-lg]{box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex}[layout-lg=column]{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}[layout-lg=row]{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}[flex-lg]{-webkit-flex:1;-ms-flex:1;flex:1}[flex-lg=\"0\"]{-webkit-flex:0 0 0;-ms-flex:0 0 0;flex:0 0 0}[layout=row]>[flex-lg=\"0\"]{max-width:0}[layout=column]>[flex-lg=\"0\"]{max-height:0}[flex-lg=\"5\"]{-webkit-flex:0 0 5%;-ms-flex:0 0 5%;flex:0 0 5%}[layout=row]>[flex-lg=\"5\"]{max-width:5%}[layout=column]>[flex-lg=\"5\"]{max-height:5%}[flex-lg=\"10\"]{-webkit-flex:0 0 10%;-ms-flex:0 0 10%;flex:0 0 10%}[layout=row]>[flex-lg=\"10\"]{max-width:10%}[layout=column]>[flex-lg=\"10\"]{max-height:10%}[flex-lg=\"15\"]{-webkit-flex:0 0 15%;-ms-flex:0 0 15%;flex:0 0 15%}[layout=row]>[flex-lg=\"15\"]{max-width:15%}[layout=column]>[flex-lg=\"15\"]{max-height:15%}[flex-lg=\"20\"]{-webkit-flex:0 0 20%;-ms-flex:0 0 20%;flex:0 0 20%}[layout=row]>[flex-lg=\"20\"]{max-width:20%}[layout=column]>[flex-lg=\"20\"]{max-height:20%}[flex-lg=\"25\"]{-webkit-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%}[layout=row]>[flex-lg=\"25\"]{max-width:25%}[layout=column]>[flex-lg=\"25\"]{max-height:25%}[flex-lg=\"30\"]{-webkit-flex:0 0 30%;-ms-flex:0 0 30%;flex:0 0 30%}[layout=row]>[flex-lg=\"30\"]{max-width:30%}[layout=column]>[flex-lg=\"30\"]{max-height:30%}[flex-lg=\"35\"]{-webkit-flex:0 0 35%;-ms-flex:0 0 35%;flex:0 0 35%}[layout=row]>[flex-lg=\"35\"]{max-width:35%}[layout=column]>[flex-lg=\"35\"]{max-height:35%}[flex-lg=\"40\"]{-webkit-flex:0 0 40%;-ms-flex:0 0 40%;flex:0 0 40%}[layout=row]>[flex-lg=\"40\"]{max-width:40%}[layout=column]>[flex-lg=\"40\"]{max-height:40%}[flex-lg=\"45\"]{-webkit-flex:0 0 45%;-ms-flex:0 0 45%;flex:0 0 45%}[layout=row]>[flex-lg=\"45\"]{max-width:45%}[layout=column]>[flex-lg=\"45\"]{max-height:45%}[flex-lg=\"50\"]{-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%}[layout=row]>[flex-lg=\"50\"]{max-width:50%}[layout=column]>[flex-lg=\"50\"]{max-height:50%}[flex-lg=\"55\"]{-webkit-flex:0 0 55%;-ms-flex:0 0 55%;flex:0 0 55%}[layout=row]>[flex-lg=\"55\"]{max-width:55%}[layout=column]>[flex-lg=\"55\"]{max-height:55%}[flex-lg=\"60\"]{-webkit-flex:0 0 60%;-ms-flex:0 0 60%;flex:0 0 60%}[layout=row]>[flex-lg=\"60\"]{max-width:60%}[layout=column]>[flex-lg=\"60\"]{max-height:60%}[flex-lg=\"65\"]{-webkit-flex:0 0 65%;-ms-flex:0 0 65%;flex:0 0 65%}[layout=row]>[flex-lg=\"65\"]{max-width:65%}[layout=column]>[flex-lg=\"65\"]{max-height:65%}[flex-lg=\"70\"]{-webkit-flex:0 0 70%;-ms-flex:0 0 70%;flex:0 0 70%}[layout=row]>[flex-lg=\"70\"]{max-width:70%}[layout=column]>[flex-lg=\"70\"]{max-height:70%}[flex-lg=\"75\"]{-webkit-flex:0 0 75%;-ms-flex:0 0 75%;flex:0 0 75%}[layout=row]>[flex-lg=\"75\"]{max-width:75%}[layout=column]>[flex-lg=\"75\"]{max-height:75%}[flex-lg=\"80\"]{-webkit-flex:0 0 80%;-ms-flex:0 0 80%;flex:0 0 80%}[layout=row]>[flex-lg=\"80\"]{max-width:80%}[layout=column]>[flex-lg=\"80\"]{max-height:80%}[flex-lg=\"85\"]{-webkit-flex:0 0 85%;-ms-flex:0 0 85%;flex:0 0 85%}[layout=row]>[flex-lg=\"85\"]{max-width:85%}[layout=column]>[flex-lg=\"85\"]{max-height:85%}[flex-lg=\"90\"]{-webkit-flex:0 0 90%;-ms-flex:0 0 90%;flex:0 0 90%}[layout=row]>[flex-lg=\"90\"]{max-width:90%}[layout=column]>[flex-lg=\"90\"]{max-height:90%}[flex-lg=\"95\"]{-webkit-flex:0 0 95%;-ms-flex:0 0 95%;flex:0 0 95%}[layout=row]>[flex-lg=\"95\"]{max-width:95%}[layout=column]>[flex-lg=\"95\"]{max-height:95%}[flex-lg=\"100\"]{-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%}[layout=row]>[flex-lg=\"100\"]{max-width:100%}[layout=column]>[flex-lg=\"100\"]{max-height:100%}[flex-lg=\"33\"],[flex-lg=\"34\"]{-webkit-flex:0 0 33.33%;-ms-flex:0 0 33.33%;flex:0 0 33.33%}[flex-lg=\"66\"],[flex-lg=\"67\"]{-webkit-flex:0 0 66.66%;-ms-flex:0 0 66.66%;flex:0 0 66.66%}[layout=row]>[flex-lg=\"33\"],[layout=row]>[flex-lg=\"34\"]{max-width:33.33%}[layout=row]>[flex-lg=\"66\"],[layout=row]>[flex-lg=\"67\"]{max-width:66.66%}[layout=column]>[flex-lg=\"33\"],[layout=column]>[flex-lg=\"34\"]{max-height:33.33%}[layout=column]>[flex-lg=\"66\"],[layout=column]>[flex-lg=\"67\"]{max-height:66.66%}}@media (min-width:1200px){[hide-gt-lg]:not([show-gt-sm]):not([show-gt-md]):not([show-gt-lg]):not([show]),[hide-gt-md]:not([show-gt-sm]):not([show-gt-md]):not([show-gt-lg]):not([show]),[hide-gt-sm]:not([show-gt-sm]):not([show-gt-md]):not([show-gt-lg]):not([show]),[hide]:not([show-gt-sm]):not([show-gt-md]):not([show-gt-lg]):not([show]){display:none}[flex-order-gt-lg=\"0\"]{-webkit-order:0;-ms-flex-order:0;order:0}[flex-order-gt-lg=\"1\"]{-webkit-order:1;-ms-flex-order:1;order:1}[flex-order-gt-lg=\"2\"]{-webkit-order:2;-ms-flex-order:2;order:2}[flex-order-gt-lg=\"3\"]{-webkit-order:3;-ms-flex-order:3;order:3}[flex-order-gt-lg=\"4\"]{-webkit-order:4;-ms-flex-order:4;order:4}[flex-order-gt-lg=\"5\"]{-webkit-order:5;-ms-flex-order:5;order:5}[flex-order-gt-lg=\"6\"]{-webkit-order:6;-ms-flex-order:6;order:6}[flex-order-gt-lg=\"7\"]{-webkit-order:7;-ms-flex-order:7;order:7}[flex-order-gt-lg=\"8\"]{-webkit-order:8;-ms-flex-order:8;order:8}[flex-order-gt-lg=\"9\"]{-webkit-order:9;-ms-flex-order:9;order:9}[layout-align-gt-lg=center],[layout-align-gt-lg=\"center center\"],[layout-align-gt-lg=\"center start\"],[layout-align-gt-lg=\"center end\"]{-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[layout-align-gt-lg=end],[layout-align-gt-lg=\"end center\"],[layout-align-gt-lg=\"end start\"],[layout-align-gt-lg=\"end end\"]{-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[layout-align-gt-lg=space-around],[layout-align-gt-lg=\"space-around center\"],[layout-align-gt-lg=\"space-around start\"],[layout-align-gt-lg=\"space-around end\"]{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}[layout-align-gt-lg=space-between],[layout-align-gt-lg=\"space-between center\"],[layout-align-gt-lg=\"space-between start\"],[layout-align-gt-lg=\"space-between end\"]{-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}[layout-align-gt-lg=\"center center\"],[layout-align-gt-lg=\"end center\"],[layout-align-gt-lg=\"space-around center\"],[layout-align-gt-lg=\"space-between center\"],[layout-align-gt-lg=\"start center\"]{-webkit-align-items:center;-ms-flex-align:center;align-items:center}[layout-align-gt-lg=\"center start\"],[layout-align-gt-lg=\"end start\"],[layout-align-gt-lg=\"space-around start\"],[layout-align-gt-lg=\"space-between start\"],[layout-align-gt-lg=\"start start\"]{-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[layout-align-gt-lg=\"center end\"],[layout-align-gt-lg=\"end end\"],[layout-align-gt-lg=\"space-around end\"],[layout-align-gt-lg=\"space-between end\"],[layout-align-gt-lg=\"start end\"]{-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[layout-gt-lg]{box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex}[layout-gt-lg=column]{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}[layout-gt-lg=row]{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}[flex-gt-lg]{-webkit-flex:1;-ms-flex:1;flex:1}[flex-gt-lg=\"0\"]{-webkit-flex:0 0 0;-ms-flex:0 0 0;flex:0 0 0}[layout=row]>[flex-gt-lg=\"0\"]{max-width:0}[layout=column]>[flex-gt-lg=\"0\"]{max-height:0}[flex-gt-lg=\"5\"]{-webkit-flex:0 0 5%;-ms-flex:0 0 5%;flex:0 0 5%}[layout=row]>[flex-gt-lg=\"5\"]{max-width:5%}[layout=column]>[flex-gt-lg=\"5\"]{max-height:5%}[flex-gt-lg=\"10\"]{-webkit-flex:0 0 10%;-ms-flex:0 0 10%;flex:0 0 10%}[layout=row]>[flex-gt-lg=\"10\"]{max-width:10%}[layout=column]>[flex-gt-lg=\"10\"]{max-height:10%}[flex-gt-lg=\"15\"]{-webkit-flex:0 0 15%;-ms-flex:0 0 15%;flex:0 0 15%}[layout=row]>[flex-gt-lg=\"15\"]{max-width:15%}[layout=column]>[flex-gt-lg=\"15\"]{max-height:15%}[flex-gt-lg=\"20\"]{-webkit-flex:0 0 20%;-ms-flex:0 0 20%;flex:0 0 20%}[layout=row]>[flex-gt-lg=\"20\"]{max-width:20%}[layout=column]>[flex-gt-lg=\"20\"]{max-height:20%}[flex-gt-lg=\"25\"]{-webkit-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%}[layout=row]>[flex-gt-lg=\"25\"]{max-width:25%}[layout=column]>[flex-gt-lg=\"25\"]{max-height:25%}[flex-gt-lg=\"30\"]{-webkit-flex:0 0 30%;-ms-flex:0 0 30%;flex:0 0 30%}[layout=row]>[flex-gt-lg=\"30\"]{max-width:30%}[layout=column]>[flex-gt-lg=\"30\"]{max-height:30%}[flex-gt-lg=\"35\"]{-webkit-flex:0 0 35%;-ms-flex:0 0 35%;flex:0 0 35%}[layout=row]>[flex-gt-lg=\"35\"]{max-width:35%}[layout=column]>[flex-gt-lg=\"35\"]{max-height:35%}[flex-gt-lg=\"40\"]{-webkit-flex:0 0 40%;-ms-flex:0 0 40%;flex:0 0 40%}[layout=row]>[flex-gt-lg=\"40\"]{max-width:40%}[layout=column]>[flex-gt-lg=\"40\"]{max-height:40%}[flex-gt-lg=\"45\"]{-webkit-flex:0 0 45%;-ms-flex:0 0 45%;flex:0 0 45%}[layout=row]>[flex-gt-lg=\"45\"]{max-width:45%}[layout=column]>[flex-gt-lg=\"45\"]{max-height:45%}[flex-gt-lg=\"50\"]{-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%}[layout=row]>[flex-gt-lg=\"50\"]{max-width:50%}[layout=column]>[flex-gt-lg=\"50\"]{max-height:50%}[flex-gt-lg=\"55\"]{-webkit-flex:0 0 55%;-ms-flex:0 0 55%;flex:0 0 55%}[layout=row]>[flex-gt-lg=\"55\"]{max-width:55%}[layout=column]>[flex-gt-lg=\"55\"]{max-height:55%}[flex-gt-lg=\"60\"]{-webkit-flex:0 0 60%;-ms-flex:0 0 60%;flex:0 0 60%}[layout=row]>[flex-gt-lg=\"60\"]{max-width:60%}[layout=column]>[flex-gt-lg=\"60\"]{max-height:60%}[flex-gt-lg=\"65\"]{-webkit-flex:0 0 65%;-ms-flex:0 0 65%;flex:0 0 65%}[layout=row]>[flex-gt-lg=\"65\"]{max-width:65%}[layout=column]>[flex-gt-lg=\"65\"]{max-height:65%}[flex-gt-lg=\"70\"]{-webkit-flex:0 0 70%;-ms-flex:0 0 70%;flex:0 0 70%}[layout=row]>[flex-gt-lg=\"70\"]{max-width:70%}[layout=column]>[flex-gt-lg=\"70\"]{max-height:70%}[flex-gt-lg=\"75\"]{-webkit-flex:0 0 75%;-ms-flex:0 0 75%;flex:0 0 75%}[layout=row]>[flex-gt-lg=\"75\"]{max-width:75%}[layout=column]>[flex-gt-lg=\"75\"]{max-height:75%}[flex-gt-lg=\"80\"]{-webkit-flex:0 0 80%;-ms-flex:0 0 80%;flex:0 0 80%}[layout=row]>[flex-gt-lg=\"80\"]{max-width:80%}[layout=column]>[flex-gt-lg=\"80\"]{max-height:80%}[flex-gt-lg=\"85\"]{-webkit-flex:0 0 85%;-ms-flex:0 0 85%;flex:0 0 85%}[layout=row]>[flex-gt-lg=\"85\"]{max-width:85%}[layout=column]>[flex-gt-lg=\"85\"]{max-height:85%}[flex-gt-lg=\"90\"]{-webkit-flex:0 0 90%;-ms-flex:0 0 90%;flex:0 0 90%}[layout=row]>[flex-gt-lg=\"90\"]{max-width:90%}[layout=column]>[flex-gt-lg=\"90\"]{max-height:90%}[flex-gt-lg=\"95\"]{-webkit-flex:0 0 95%;-ms-flex:0 0 95%;flex:0 0 95%}[layout=row]>[flex-gt-lg=\"95\"]{max-width:95%}[layout=column]>[flex-gt-lg=\"95\"]{max-height:95%}[flex-gt-lg=\"100\"]{-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%}[layout=row]>[flex-gt-lg=\"100\"]{max-width:100%}[layout=column]>[flex-gt-lg=\"100\"]{max-height:100%}[flex-gt-lg=\"33\"],[flex-gt-lg=\"34\"]{-webkit-flex:0 0 33.33%;-ms-flex:0 0 33.33%;flex:0 0 33.33%}[flex-gt-lg=\"66\"],[flex-gt-lg=\"67\"]{-webkit-flex:0 0 66.66%;-ms-flex:0 0 66.66%;flex:0 0 66.66%}[layout=row]>[flex-gt-lg=\"33\"],[layout=row]>[flex-gt-lg=\"34\"]{max-width:33.33%}[layout=row]>[flex-gt-lg=\"66\"],[layout=row]>[flex-gt-lg=\"67\"]{max-width:66.66%}[layout=column]>[flex-gt-lg=\"33\"],[layout=column]>[flex-gt-lg=\"34\"]{max-height:33.33%}[layout=column]>[flex-gt-lg=\"66\"],[layout=column]>[flex-gt-lg=\"67\"]{max-height:66.66%}}@-webkit-keyframes md-autocomplete-list-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear}50%{opacity:0;height:40px;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}100%{height:0;opacity:0}}@keyframes md-autocomplete-list-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear}50%{opacity:0;height:40px;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}100%{height:0;opacity:0}}@-webkit-keyframes md-autocomplete-list-in{0%{opacity:0;height:0;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{opacity:0;height:40px}100%{opacity:1;height:40px}}@keyframes md-autocomplete-list-in{0%{opacity:0;height:0;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{opacity:0;height:40px}100%{opacity:1;height:40px}}md-autocomplete{box-shadow:0 2px 5px rgba(0,0,0,.25);border-radius:2px;display:block;height:40px;position:relative;overflow:visible}md-autocomplete md-autocomplete-wrap{display:block;position:relative;overflow:visible;height:40px}md-autocomplete md-autocomplete-wrap md-progress-linear{position:absolute;bottom:0;left:0;width:100%;height:3px;transition:none}md-autocomplete md-autocomplete-wrap md-progress-linear .md-container{transition:none;top:auto;height:3px}md-autocomplete md-autocomplete-wrap md-progress-linear.ng-enter{transition:opacity .15s linear}md-autocomplete md-autocomplete-wrap md-progress-linear.ng-enter.ng-enter-active{opacity:1}md-autocomplete md-autocomplete-wrap md-progress-linear.ng-leave{transition:opacity .15s linear}md-autocomplete md-autocomplete-wrap md-progress-linear.ng-leave.ng-leave-active{opacity:0}md-autocomplete input{position:absolute;left:0;top:0;width:100%;box-sizing:border-box;border:none;box-shadow:none;padding:0 15px;font-size:14px;line-height:40px;height:40px;outline:0;z-index:2;background:0 0}md-autocomplete input::-ms-clear{display:none}md-autocomplete button{position:absolute;top:10px;right:10px;line-height:20px;z-index:2;text-align:center;width:20px;height:20px;cursor:pointer;border:none;border-radius:50%;padding:0;font-size:12px;background:0 0}md-autocomplete button:after{content:'';position:absolute;top:-6px;right:-6px;bottom:-6px;left:-6px;border-radius:50%;-webkit-transform:scale(0);transform:scale(0);opacity:0;transition:all .4s cubic-bezier(.25,.8,.25,1);z-index:-1}md-autocomplete button:focus:after{-webkit-transform:scale(1);transform:scale(1);opacity:1}md-autocomplete button md-icon{position:absolute;top:50%;left:50%;-webkit-transform:translate3d(-50%,-50%,0) scale(.9);transform:translate3d(-50%,-50%,0) scale(.9)}md-autocomplete button md-icon path{stroke-width:0}md-autocomplete button.ng-enter{-webkit-transform:scale(0);transform:scale(0);transition:-webkit-transform .15s ease-out;transition:transform .15s ease-out}md-autocomplete button.ng-enter.ng-enter-active{-webkit-transform:scale(1);transform:scale(1)}md-autocomplete button.ng-leave{transition:-webkit-transform .15s ease-out;transition:transform .15s ease-out}md-autocomplete button.ng-leave.ng-leave-active{-webkit-transform:scale(0);transform:scale(0)}md-autocomplete ul{position:absolute;top:100%;left:0;right:0;box-shadow:0 2px 5px rgba(0,0,0,.25);margin:0;list-style:none;padding:0;overflow:auto;max-height:225.5px;z-index:49}md-autocomplete ul li{border-top:1px solid #ddd;padding:0 15px;line-height:40px;font-size:14px;overflow:hidden;height:40px;transition:background .15s linear;cursor:pointer;margin:0}md-autocomplete ul li.ng-enter,md-autocomplete ul li.ng-hide-remove{transition:none;-webkit-animation:md-autocomplete-list-in .2s;animation:md-autocomplete-list-in .2s}md-autocomplete ul li.ng-hide-add,md-autocomplete ul li.ng-leave{transition:none;-webkit-animation:md-autocomplete-list-out .2s;animation:md-autocomplete-list-out .2s}md-backdrop{z-index:50;background-color:transparent;position:fixed;left:0;top:0;right:0;bottom:0}md-backdrop.md-select-backdrop{z-index:81}md-backdrop.md-dialog-backdrop{z-index:79}md-backdrop.md-bottom-sheet-backdrop{z-index:69}md-backdrop.md-sidenav-backdrop{z-index:59}md-backdrop.ng-enter{-webkit-animation:cubic-bezier(.25,.8,.25,1) mdBackdropFadeIn .5s both;animation:cubic-bezier(.25,.8,.25,1) mdBackdropFadeIn .5s both}md-backdrop.ng-leave{-webkit-animation:cubic-bezier(.55,0,.55,.2) mdBackdropFadeOut .2s both;animation:cubic-bezier(.55,0,.55,.2) mdBackdropFadeOut .2s both}@-webkit-keyframes mdBackdropFadeIn{from{opacity:0}to{opacity:1}}@keyframes mdBackdropFadeIn{from{opacity:0}to{opacity:1}}@-webkit-keyframes mdBackdropFadeOut{from{opacity:1}to{opacity:0}}@keyframes mdBackdropFadeOut{from{opacity:1}to{opacity:0}}md-bottom-sheet{position:absolute;left:0;right:0;bottom:0;padding:8px 16px 88px;z-index:70;border-top:1px solid;-webkit-transform:translate3d(0,80px,0);transform:translate3d(0,80px,0);transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:-webkit-transform;transition-property:transform}md-bottom-sheet.md-has-header{padding-top:0}md-bottom-sheet.ng-enter{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}md-bottom-sheet.ng-enter-active{opacity:1;display:block;-webkit-transform:translate3d(0,80px,0)!important;transform:translate3d(0,80px,0)!important}md-bottom-sheet.ng-leave-active{-webkit-transform:translate3d(0,100%,0)!important;transform:translate3d(0,100%,0)!important;transition:all .3s cubic-bezier(.55,0,.55,.2)}md-bottom-sheet .md-subheader{background-color:transparent;font-family:RobotoDraft,Roboto,'Helvetica Neue',sans-serif;line-height:56px;padding:0;white-space:nowrap}md-bottom-sheet md-inline-icon{display:inline-block;height:24px;width:24px;fill:#444}md-bottom-sheet md-item{display:-webkit-flex;display:-ms-flexbox;display:flex;outline:0}md-bottom-sheet md-item:hover{cursor:pointer}md-bottom-sheet.md-list md-item{-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:48px}md-bottom-sheet.md-list md-item div.md-icon-container{display:inline-block;height:24px;margin-right:32px}md-bottom-sheet.md-grid{padding-left:24px;padding-right:24px;padding-top:0}md-bottom-sheet.md-grid md-list{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;transition:all .5s;-webkit-align-items:center;-ms-flex-align:center;align-items:center}md-bottom-sheet.md-grid md-item{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-ms-flex-align:center;align-items:center;transition:all .5s;height:96px;margin-top:8px;margin-bottom:8px}@media screen and (max-width:600px){md-bottom-sheet.md-grid md-item{-webkit-flex:1 1 33.33333%;-ms-flex:1 1 33.33333%;flex:1 1 33.33333%;max-width:33.33333%}md-bottom-sheet.md-grid md-item:nth-of-type(3n+1){-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}md-bottom-sheet.md-grid md-item:nth-of-type(3n){-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}}@media screen and (min-width:600px) and (max-width:960px){md-bottom-sheet.md-grid md-item{-webkit-flex:1 1 25%;-ms-flex:1 1 25%;flex:1 1 25%;max-width:25%}}@media screen and (min-width:960px) and (max-width:1200px){md-bottom-sheet.md-grid md-item{-webkit-flex:1 1 16.66667%;-ms-flex:1 1 16.66667%;flex:1 1 16.66667%;max-width:16.66667%}}@media screen and (min-width:1200px){md-bottom-sheet.md-grid md-item{-webkit-flex:1 1 14.28571%;-ms-flex:1 1 14.28571%;flex:1 1 14.28571%;max-width:14.28571%}}md-bottom-sheet.md-grid md-item .md-item-content{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:48px;padding-bottom:16px}md-bottom-sheet.md-grid md-item .md-grid-item-content{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:80px}md-bottom-sheet.md-grid md-item .md-icon-container{display:inline-block;box-sizing:border-box;height:48px;width:48px;margin:0}md-bottom-sheet.md-grid md-item p.md-grid-text{font-weight:300;line-height:16px;font-size:13px;margin:0;white-space:nowrap;width:64px;text-align:center;padding-top:8px}.md-button{color:currentColor;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;outline:0;border:0;padding:6px;margin:0;background:0 0;white-space:nowrap;text-align:center;text-transform:uppercase;font-weight:500;font-style:inherit;font-variant:inherit;font-size:inherit;font-family:inherit;line-height:inherit;text-decoration:none;cursor:pointer;overflow:hidden;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1),-webkit-transform .4s cubic-bezier(.25,.8,.25,1);transition:box-shadow .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1),transform .4s cubic-bezier(.25,.8,.25,1)}.md-button:focus{outline:0}.md-button:hover{text-decoration:none}.md-button.ng-hide{transition:none}.md-button.md-cornered{border-radius:0}.md-button.md-icon{padding:0;background:0 0}.md-button.md-raised{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.md-button.md-fab{z-index:20;width:56px;height:56px;border-radius:50%;overflow:hidden;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);transition:.2s linear;transition-property:-webkit-transform,box-shadow;transition-property:transform,box-shadow}.md-button.md-fab.md-fab-bottom-right{top:auto;right:20px;bottom:20px;left:auto;position:absolute}.md-button.md-fab.md-fab-bottom-left{top:auto;right:auto;bottom:20px;left:20px;position:absolute}.md-button.md-fab.md-fab-top-right{top:20px;right:20px;bottom:auto;left:auto;position:absolute}.md-button.md-fab.md-fab-top-left{top:20px;right:auto;bottom:auto;left:20px;position:absolute}.md-button.md-fab md-icon{margin-top:0}.md-button.md-fab.md-mini{width:40px;height:40px}.md-button:not([disabled]).md-fab:focus,.md-button:not([disabled]).md-fab:hover,.md-button:not([disabled]).md-raised:focus,.md-button:not([disabled]).md-raised:hover{-webkit-transform:translate3d(0,-1px,0);transform:translate3d(0,-1px,0)}.md-toast-open-top .md-button.md-fab-top-left,.md-toast-open-top .md-button.md-fab-top-right{-webkit-transform:translate3d(0,42px,0);transform:translate3d(0,42px,0)}.md-toast-open-top .md-button.md-fab-top-left:not([disabled]):focus,.md-toast-open-top .md-button.md-fab-top-left:not([disabled]):hover,.md-toast-open-top .md-button.md-fab-top-right:not([disabled]):focus,.md-toast-open-top .md-button.md-fab-top-right:not([disabled]):hover{-webkit-transform:translate3d(0,41px,0);transform:translate3d(0,41px,0)}.md-toast-open-bottom .md-button.md-fab-bottom-left,.md-toast-open-bottom .md-button.md-fab-bottom-right{-webkit-transform:translate3d(0,-42px,0);transform:translate3d(0,-42px,0)}.md-toast-open-bottom .md-button.md-fab-bottom-left:not([disabled]):focus,.md-toast-open-bottom .md-button.md-fab-bottom-left:not([disabled]):hover,.md-toast-open-bottom .md-button.md-fab-bottom-right:not([disabled]):focus,.md-toast-open-bottom .md-button.md-fab-bottom-right:not([disabled]):hover{-webkit-transform:translate3d(0,-43px,0);transform:translate3d(0,-43px,0)}.md-button-group{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;width:100%}.md-button-group>.md-button{-webkit-flex:1;-ms-flex:1;flex:1;display:block;overflow:hidden;width:0;border-width:1px 0 1px 1px;border-radius:0;text-align:center;text-overflow:ellipsis;white-space:nowrap}.md-button-group>.md-button:first-child{border-radius:2px 0 0 2px}.md-button-group>.md-button:last-child{border-right-width:1px;border-radius:0 2px 2px 0}md-card{box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:8px;box-shadow:0 2px 5px 0 rgba(0,0,0,.26)}md-card>:not(md-card-content) img,md-card>img{-webkit-order:0;-ms-flex-order:0;order:0;width:100%}md-card md-card-content{-webkit-order:1;-ms-flex-order:1;order:1;padding:16px}md-checkbox{display:block;margin:15px;white-space:nowrap;cursor:pointer;outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}md-checkbox .md-container{position:relative;top:4px;display:inline-block;width:18px;height:18px}md-checkbox .md-container:after{content:'';position:absolute;top:-10px;right:-10px;bottom:-10px;left:-10px}md-checkbox .md-container .md-ripple-container{position:absolute;display:block;width:auto;height:auto;left:-15px;top:-15px;right:-15px;bottom:-15px}md-checkbox .md-icon{transition:240ms;position:absolute;top:0;left:0;width:18px;height:18px;border:2px solid;border-radius:2px}md-checkbox.md-checked .md-icon{border:none}md-checkbox[disabled]{cursor:no-drop}md-checkbox:focus .md-label:not(:empty){border-color:#000}md-checkbox.md-checked .md-icon:after{-webkit-transform:rotate(45deg);transform:rotate(45deg);position:absolute;left:6px;top:2px;display:table;width:6px;height:12px;border:2px solid;border-top:0;border-left:0;content:' '}md-checkbox .md-label{border:1px dotted transparent;position:relative;display:inline-block;margin-left:10px;vertical-align:middle;white-space:normal;pointer-events:none;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}md-content{display:block;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}md-content[md-scroll-y]{overflow-y:auto;overflow-x:hidden}md-content[md-scroll-x]{overflow-x:auto;overflow-y:hidden}md-content.md-padding{padding:8px}@media (min-width:600px){md-content.md-padding{padding:16px}}.md-dialog-container{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:absolute;top:0;left:0;width:100%;height:100%;z-index:80}md-dialog{opacity:0;min-width:240px;max-width:80%;max-height:80%;position:relative;overflow:hidden;box-shadow:0 27px 24px 0 rgba(0,0,0,.2);display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}md-dialog.transition-in{opacity:1;transition:all .4s cubic-bezier(.25,.8,.25,1);-webkit-transform:translate3d(0,0,0) scale(1);transform:translate3d(0,0,0) scale(1)}md-dialog.transition-out{transition:all .4s cubic-bezier(.25,.8,.25,1);-webkit-transform:translate3d(0,100%,0) scale(.2);transform:translate3d(0,100%,0) scale(.2)}md-dialog md-content{-webkit-order:1;-ms-flex-order:1;order:1;padding:24px;overflow:auto;-webkit-overflow-scrolling:touch}md-dialog md-content:not([layout=row])>:first-child:not(.md-subheader){margin-top:0}md-dialog .md-actions{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-order:2;-ms-flex-order:2;order:2;box-sizing:border-box;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding:16px;min-height:40px}md-dialog .md-actions>*{margin-left:8px}md-dialog.md-content-overflow .md-actions{border-top:1px solid}md-divider{display:block;border-top:1px solid;margin:0}md-divider[md-inset]{margin-left:80px}md-grid-list{display:block;position:relative}md-grid-list md-grid-tile{display:block;position:absolute}md-grid-list md-grid-tile figure{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100%;position:absolute;top:0;right:0;bottom:0;left:0;padding:0;margin:0}md-grid-list md-grid-tile md-grid-tile-footer,md-grid-list md-grid-tile md-grid-tile-header{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.18);overflow:hidden;position:absolute;left:0;right:0}md-grid-list md-grid-tile md-grid-tile-footer h3,md-grid-list md-grid-tile md-grid-tile-footer h4,md-grid-list md-grid-tile md-grid-tile-header h3,md-grid-list md-grid-tile md-grid-tile-header h4{font-weight:400;margin:0 0 0 16px}md-grid-list md-grid-tile md-grid-tile-footer h3,md-grid-list md-grid-tile md-grid-tile-header h3{font-size:14px}md-grid-list md-grid-tile md-grid-tile-footer h4,md-grid-list md-grid-tile md-grid-tile-header h4{font-size:12px}md-grid-list md-grid-tile md-grid-tile-header{top:0}md-grid-list md-grid-tile md-grid-tile-footer{bottom:0}md-icon{margin:auto;background-repeat:no-repeat no-repeat;display:inline-block;vertical-align:middle;fill:currentcolor;height:24px;width:24px}md-input-container{display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;overflow-x:hidden;padding:2px 2px 26px}md-input-container>md-icon{position:absolute;top:5px;left:2px}md-input-container>md-icon+input{margin-left:56px}md-input-container input[type=text],md-input-container input[type=password],md-input-container input[type=datetime],md-input-container input[type=datetime-local],md-input-container input[type=date],md-input-container input[type=month],md-input-container input[type=time],md-input-container input[type=search],md-input-container input[type=week],md-input-container input[type=number],md-input-container input[type=email],md-input-container input[type=url],md-input-container input[type=tel],md-input-container input[type=color],md-input-container textarea{-moz-appearance:none;-webkit-appearance:none}md-input-container textarea{resize:none;overflow:hidden}md-input-container .md-placeholder,md-input-container label:not(.md-no-float){-webkit-order:1;-ms-flex-order:1;order:1;pointer-events:none;-webkit-font-smoothing:antialiased;padding-left:2px;z-index:1;-webkit-transform:translate3d(0,24px,0) scale(1);transform:translate3d(0,24px,0) scale(1);-webkit-transform-origin:left top;transform-origin:left top;transition:-webkit-transform cubic-bezier(.25,.8,.25,1) .25s;transition:transform cubic-bezier(.25,.8,.25,1) .25s}md-input-container .md-placeholder{position:absolute;top:0;opacity:0;transition-property:opacity,-webkit-transform;transition-property:opacity,transform;-webkit-transform:translate3d(0,30px,0);transform:translate3d(0,30px,0)}md-input-container.md-input-focused .md-placeholder{opacity:1;-webkit-transform:translate3d(0,24px,0);transform:translate3d(0,24px,0)}md-input-container.md-input-has-value .md-placeholder{transition:none;opacity:0}md-input-container:not(.md-input-has-value) input:not(:focus){color:transparent}md-input-container .md-input{-webkit-flex:1;-ms-flex:1;flex:1;-webkit-order:2;-ms-flex-order:2;order:2;display:block;background:0 0;padding:2px 2px 1px;border-width:0 0 1px;line-height:26px;-ms-flex-preferred-size:26px;border-radius:0}md-input-container .md-input:focus{outline:0}md-input-container .md-input:invalid{outline:0;box-shadow:none}md-input-container [data-ng-messages],md-input-container [ng-messages],md-input-container [x-ng-messages],md-input-container data-ng-messages,md-input-container ng-messages,md-input-container x-ng-messages{-webkit-order:3;-ms-flex-order:3;order:3;position:relative}md-input-container .md-char-counter,md-input-container [data-ng-message],md-input-container [ng-message],md-input-container [x-ng-message],md-input-container data-ng-message,md-input-container ng-message,md-input-container x-ng-message{-webkit-font-smoothing:antialiased;position:absolute;font-size:12px;line-height:24px}md-input-container .md-char-counter.ng-enter,md-input-container [data-ng-message].ng-enter,md-input-container [ng-message].ng-enter,md-input-container [x-ng-message].ng-enter,md-input-container data-ng-message.ng-enter,md-input-container ng-message.ng-enter,md-input-container x-ng-message.ng-enter{transition:all .4s cubic-bezier(.25,.8,.25,1);transition-delay:.2s}md-input-container .md-char-counter.ng-leave,md-input-container [data-ng-message].ng-leave,md-input-container [ng-message].ng-leave,md-input-container [x-ng-message].ng-leave,md-input-container data-ng-message.ng-leave,md-input-container ng-message.ng-leave,md-input-container x-ng-message.ng-leave{transition:all .3s cubic-bezier(.55,0,.55,.2)}md-input-container .md-char-counter.ng-enter,md-input-container .md-char-counter.ng-leave.ng-leave-active,md-input-container [data-ng-message].ng-enter,md-input-container [data-ng-message].ng-leave.ng-leave-active,md-input-container [ng-message].ng-enter,md-input-container [ng-message].ng-leave.ng-leave-active,md-input-container [x-ng-message].ng-enter,md-input-container [x-ng-message].ng-leave.ng-leave-active,md-input-container data-ng-message.ng-enter,md-input-container data-ng-message.ng-leave.ng-leave-active,md-input-container ng-message.ng-enter,md-input-container ng-message.ng-leave.ng-leave-active,md-input-container x-ng-message.ng-enter,md-input-container x-ng-message.ng-leave.ng-leave-active{opacity:0;-webkit-transform:translate3d(0,-20%,0);transform:translate3d(0,-20%,0)}md-input-container .md-char-counter.ng-enter.ng-enter-active,md-input-container .md-char-counter.ng-leave,md-input-container [data-ng-message].ng-enter.ng-enter-active,md-input-container [data-ng-message].ng-leave,md-input-container [ng-message].ng-enter.ng-enter-active,md-input-container [ng-message].ng-leave,md-input-container [x-ng-message].ng-enter.ng-enter-active,md-input-container [x-ng-message].ng-leave,md-input-container data-ng-message.ng-enter.ng-enter-active,md-input-container data-ng-message.ng-leave,md-input-container ng-message.ng-enter.ng-enter-active,md-input-container ng-message.ng-leave,md-input-container x-ng-message.ng-enter.ng-enter-active,md-input-container x-ng-message.ng-leave{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}md-input-container .md-char-counter{bottom:2px;right:2px}md-input-container.md-input-focused label:not(.md-no-float),md-input-container.md-input-has-value label:not(.md-no-float){-webkit-transform:translate3d(0,4px,0) scale(.75);transform:translate3d(0,4px,0) scale(.75)}md-input-container .md-input.ng-invalid.ng-dirty,md-input-container.md-input-focused .md-input{padding-bottom:0;border-width:0 0 2px}[disabled] md-input-container .md-input,md-input-container .md-input[disabled]{background-position:0 bottom;background-size:3px 1px;background-repeat:repeat-x}md-list{padding:8px 0}md-item-content{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;position:relative;padding:0}.md-tile-left{min-width:56px;margin-right:-16px}.md-tile-content{-webkit-flex:1;-ms-flex:1;flex:1;padding:16px;text-overflow:ellipsis}.md-tile-content h3{margin:0 0 3px;font-weight:400;font-size:1.1em}.md-tile-content h4{margin:0 0 3px;font-weight:400;font-size:.9em}.md-tile-content p{margin:0 0 3px;font-size:.75em}.md-tile-right{padding-right:0}@-webkit-keyframes outer-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes outer-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes left-wobble{0%,100%{-webkit-transform:rotate(130deg);transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}}@keyframes left-wobble{0%,100%{-webkit-transform:rotate(130deg);transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}}@-webkit-keyframes right-wobble{0%,100%{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}}@keyframes right-wobble{0%,100%{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}}@-webkit-keyframes sporadic-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}100%{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}@keyframes sporadic-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}100%{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}md-progress-circular{width:50px;height:50px;display:block;position:relative;padding-top:0!important;margin-bottom:0!important;overflow:hidden}md-progress-circular .md-inner{width:50px;height:50px;position:relative}md-progress-circular .md-inner .md-gap{position:absolute;left:24px;right:24px;top:0;bottom:0;border-top:5px solid #000;box-sizing:border-box}md-progress-circular .md-inner .md-left,md-progress-circular .md-inner .md-right{position:absolute;top:0;height:50px;width:25px;overflow:hidden}md-progress-circular .md-inner .md-left .md-half-circle,md-progress-circular .md-inner .md-right .md-half-circle{position:absolute;top:0;width:50px;height:50px;box-sizing:border-box;border-width:5px;border-style:solid;border-color:#000 #000 transparent;border-radius:50%}md-progress-circular .md-inner .md-left{left:0}md-progress-circular .md-inner .md-left .md-half-circle{left:0;border-right-color:transparent}md-progress-circular .md-inner .md-right{right:0}md-progress-circular .md-inner .md-right .md-half-circle{right:0;border-left-color:transparent}md-progress-circular[value=\"0\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"0\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}md-progress-circular[value=\"0\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"1\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"1\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-131.4deg);transform:rotate(-131.4deg)}md-progress-circular[value=\"1\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"2\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"2\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-127.8deg);transform:rotate(-127.8deg)}md-progress-circular[value=\"2\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"3\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"3\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-124.2deg);transform:rotate(-124.2deg)}md-progress-circular[value=\"3\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"4\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"4\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-120.6deg);transform:rotate(-120.6deg)}md-progress-circular[value=\"4\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"5\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"5\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-117deg);transform:rotate(-117deg)}md-progress-circular[value=\"5\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"6\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"6\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-113.4deg);transform:rotate(-113.4deg)}md-progress-circular[value=\"6\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"7\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"7\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-109.8deg);transform:rotate(-109.8deg)}md-progress-circular[value=\"7\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"8\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"8\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-106.2deg);transform:rotate(-106.2deg)}md-progress-circular[value=\"8\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"9\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"9\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-102.6deg);transform:rotate(-102.6deg)}md-progress-circular[value=\"9\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"10\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"10\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-99deg);transform:rotate(-99deg)}md-progress-circular[value=\"10\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"11\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"11\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-95.4deg);transform:rotate(-95.4deg)}md-progress-circular[value=\"11\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"12\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"12\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-91.8deg);transform:rotate(-91.8deg)}md-progress-circular[value=\"12\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"13\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"13\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-88.2deg);transform:rotate(-88.2deg)}md-progress-circular[value=\"13\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"14\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"14\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-84.6deg);transform:rotate(-84.6deg)}md-progress-circular[value=\"14\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"15\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"15\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-81deg);transform:rotate(-81deg)}md-progress-circular[value=\"15\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"16\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"16\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-77.4deg);transform:rotate(-77.4deg)}md-progress-circular[value=\"16\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"17\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"17\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-73.8deg);transform:rotate(-73.8deg)}md-progress-circular[value=\"17\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"18\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"18\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-70.2deg);transform:rotate(-70.2deg)}md-progress-circular[value=\"18\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"19\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"19\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-66.6deg);transform:rotate(-66.6deg)}md-progress-circular[value=\"19\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"20\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"20\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-63deg);transform:rotate(-63deg)}md-progress-circular[value=\"20\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"21\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"21\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-59.4deg);transform:rotate(-59.4deg)}md-progress-circular[value=\"21\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"22\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"22\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-55.8deg);transform:rotate(-55.8deg)}md-progress-circular[value=\"22\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"23\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"23\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-52.2deg);transform:rotate(-52.2deg)}md-progress-circular[value=\"23\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"24\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"24\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-48.6deg);transform:rotate(-48.6deg)}md-progress-circular[value=\"24\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"25\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"25\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}md-progress-circular[value=\"25\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"26\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"26\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-41.4deg);transform:rotate(-41.4deg)}md-progress-circular[value=\"26\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"27\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"27\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-37.8deg);transform:rotate(-37.8deg)}md-progress-circular[value=\"27\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"28\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"28\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-34.2deg);transform:rotate(-34.2deg)}md-progress-circular[value=\"28\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"29\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"29\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-30.6deg);transform:rotate(-30.6deg)}md-progress-circular[value=\"29\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"30\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"30\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-27deg);transform:rotate(-27deg)}md-progress-circular[value=\"30\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"31\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"31\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-23.4deg);transform:rotate(-23.4deg)}md-progress-circular[value=\"31\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"32\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"32\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-19.8deg);transform:rotate(-19.8deg)}md-progress-circular[value=\"32\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"33\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"33\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-16.2deg);transform:rotate(-16.2deg)}md-progress-circular[value=\"33\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"34\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"34\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-12.6deg);transform:rotate(-12.6deg)}md-progress-circular[value=\"34\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"35\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"35\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-9deg);transform:rotate(-9deg)}md-progress-circular[value=\"35\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"36\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"36\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-5.4deg);transform:rotate(-5.4deg)}md-progress-circular[value=\"36\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"37\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"37\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(-1.8deg);transform:rotate(-1.8deg)}md-progress-circular[value=\"37\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"38\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"38\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(1.8deg);transform:rotate(1.8deg)}md-progress-circular[value=\"38\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"39\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"39\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(5.4deg);transform:rotate(5.4deg)}md-progress-circular[value=\"39\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"40\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"40\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(9deg);transform:rotate(9deg)}md-progress-circular[value=\"40\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"41\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"41\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(12.6deg);transform:rotate(12.6deg)}md-progress-circular[value=\"41\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"42\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"42\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(16.2deg);transform:rotate(16.2deg)}md-progress-circular[value=\"42\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"43\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"43\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(19.8deg);transform:rotate(19.8deg)}md-progress-circular[value=\"43\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"44\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"44\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(23.4deg);transform:rotate(23.4deg)}md-progress-circular[value=\"44\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"45\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"45\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(27deg);transform:rotate(27deg)}md-progress-circular[value=\"45\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"46\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"46\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(30.6deg);transform:rotate(30.6deg)}md-progress-circular[value=\"46\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"47\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"47\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(34.2deg);transform:rotate(34.2deg)}md-progress-circular[value=\"47\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"48\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"48\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(37.8deg);transform:rotate(37.8deg)}md-progress-circular[value=\"48\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"49\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"49\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(41.4deg);transform:rotate(41.4deg)}md-progress-circular[value=\"49\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"50\"] .md-inner .md-left .md-half-circle{-webkit-transform:rotate(135deg);transform:rotate(135deg)}md-progress-circular[value=\"50\"] .md-inner .md-right .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"50\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;border-bottom-color:transparent!important}md-progress-circular[value=\"51\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(138.6deg);transform:rotate(138.6deg)}md-progress-circular[value=\"51\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"51\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"52\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(142.2deg);transform:rotate(142.2deg)}md-progress-circular[value=\"52\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"52\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"53\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(145.8deg);transform:rotate(145.8deg)}md-progress-circular[value=\"53\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"53\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"54\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(149.4deg);transform:rotate(149.4deg)}md-progress-circular[value=\"54\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"54\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"55\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(153deg);transform:rotate(153deg)}md-progress-circular[value=\"55\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"55\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"56\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(156.6deg);transform:rotate(156.6deg)}md-progress-circular[value=\"56\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"56\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"57\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(160.2deg);transform:rotate(160.2deg)}md-progress-circular[value=\"57\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"57\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"58\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(163.8deg);transform:rotate(163.8deg)}md-progress-circular[value=\"58\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"58\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"59\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(167.4deg);transform:rotate(167.4deg)}md-progress-circular[value=\"59\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"59\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"60\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(171deg);transform:rotate(171deg)}md-progress-circular[value=\"60\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"60\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"61\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(174.6deg);transform:rotate(174.6deg)}md-progress-circular[value=\"61\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"61\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"62\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(178.2deg);transform:rotate(178.2deg)}md-progress-circular[value=\"62\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"62\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"63\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(181.8deg);transform:rotate(181.8deg)}md-progress-circular[value=\"63\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"63\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"64\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(185.4deg);transform:rotate(185.4deg)}md-progress-circular[value=\"64\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"64\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"65\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(189deg);transform:rotate(189deg)}md-progress-circular[value=\"65\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"65\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"66\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(192.6deg);transform:rotate(192.6deg)}md-progress-circular[value=\"66\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"66\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"67\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(196.2deg);transform:rotate(196.2deg)}md-progress-circular[value=\"67\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"67\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"68\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(199.8deg);transform:rotate(199.8deg)}md-progress-circular[value=\"68\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"68\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"69\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(203.4deg);transform:rotate(203.4deg)}md-progress-circular[value=\"69\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"69\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"70\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(207deg);transform:rotate(207deg)}md-progress-circular[value=\"70\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"70\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"71\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(210.6deg);transform:rotate(210.6deg)}md-progress-circular[value=\"71\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"71\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"72\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(214.2deg);transform:rotate(214.2deg)}md-progress-circular[value=\"72\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"72\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"73\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(217.8deg);transform:rotate(217.8deg)}md-progress-circular[value=\"73\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"73\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"74\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(221.4deg);transform:rotate(221.4deg)}md-progress-circular[value=\"74\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"74\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"75\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(225deg);transform:rotate(225deg)}md-progress-circular[value=\"75\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"75\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"76\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(228.6deg);transform:rotate(228.6deg)}md-progress-circular[value=\"76\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"76\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"77\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(232.2deg);transform:rotate(232.2deg)}md-progress-circular[value=\"77\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"77\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"78\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(235.8deg);transform:rotate(235.8deg)}md-progress-circular[value=\"78\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"78\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"79\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(239.4deg);transform:rotate(239.4deg)}md-progress-circular[value=\"79\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"79\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"80\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(243deg);transform:rotate(243deg)}md-progress-circular[value=\"80\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"80\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"81\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(246.6deg);transform:rotate(246.6deg)}md-progress-circular[value=\"81\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"81\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"82\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(250.2deg);transform:rotate(250.2deg)}md-progress-circular[value=\"82\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"82\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"83\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(253.8deg);transform:rotate(253.8deg)}md-progress-circular[value=\"83\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"83\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"84\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(257.4deg);transform:rotate(257.4deg)}md-progress-circular[value=\"84\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"84\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"85\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(261deg);transform:rotate(261deg)}md-progress-circular[value=\"85\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"85\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"86\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(264.6deg);transform:rotate(264.6deg)}md-progress-circular[value=\"86\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"86\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"87\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(268.2deg);transform:rotate(268.2deg)}md-progress-circular[value=\"87\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"87\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"88\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(271.8deg);transform:rotate(271.8deg)}md-progress-circular[value=\"88\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"88\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"89\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(275.4deg);transform:rotate(275.4deg)}md-progress-circular[value=\"89\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"89\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"90\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(279deg);transform:rotate(279deg)}md-progress-circular[value=\"90\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"90\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"91\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(282.6deg);transform:rotate(282.6deg)}md-progress-circular[value=\"91\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"91\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"92\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(286.2deg);transform:rotate(286.2deg)}md-progress-circular[value=\"92\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"92\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"93\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(289.8deg);transform:rotate(289.8deg)}md-progress-circular[value=\"93\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"93\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"94\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(293.4deg);transform:rotate(293.4deg)}md-progress-circular[value=\"94\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"94\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"95\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(297deg);transform:rotate(297deg)}md-progress-circular[value=\"95\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"95\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"96\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(300.6deg);transform:rotate(300.6deg)}md-progress-circular[value=\"96\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"96\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"97\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(304.2deg);transform:rotate(304.2deg)}md-progress-circular[value=\"97\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"97\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"98\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(307.8deg);transform:rotate(307.8deg)}md-progress-circular[value=\"98\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"98\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"99\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(311.4deg);transform:rotate(311.4deg)}md-progress-circular[value=\"99\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"99\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[value=\"100\"] .md-inner .md-left .md-half-circle{transition:-webkit-transform .1s linear;transition:transform .1s linear;-webkit-transform:rotate(315deg);transform:rotate(315deg)}md-progress-circular[value=\"100\"] .md-inner .md-right .md-half-circle{-webkit-transform:rotate(45deg);transform:rotate(45deg)}md-progress-circular[value=\"100\"] .md-inner .md-gap{border-bottom-width:5px;border-bottom-style:solid;transition:border-bottom-color .1s linear}md-progress-circular[md-mode=indeterminate] .md-spinner-wrapper{-webkit-animation:outer-rotate 2.91667s linear infinite;animation:outer-rotate 2.91667s linear infinite}md-progress-circular[md-mode=indeterminate] .md-spinner-wrapper .md-inner{-webkit-animation:sporadic-rotate 5.25s cubic-bezier(.35,0,.25,1) infinite;animation:sporadic-rotate 5.25s cubic-bezier(.35,0,.25,1) infinite}md-progress-circular[md-mode=indeterminate] .md-spinner-wrapper .md-inner .md-left .md-half-circle,md-progress-circular[md-mode=indeterminate] .md-spinner-wrapper .md-inner .md-right .md-half-circle{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-duration:1.3125s;animation-duration:1.3125s;-webkit-animation-timing-function:cubic-bezier(.35,0,.25,1);animation-timing-function:cubic-bezier(.35,0,.25,1)}md-progress-circular[md-mode=indeterminate] .md-spinner-wrapper .md-inner .md-left .md-half-circle{-webkit-animation-name:left-wobble;animation-name:left-wobble}md-progress-circular[md-mode=indeterminate] .md-spinner-wrapper .md-inner .md-right .md-half-circle{-webkit-animation-name:right-wobble;animation-name:right-wobble}md-progress-linear{display:block;width:100%;height:5px}md-progress-linear .md-container{overflow:hidden;position:relative;height:5px;top:5px;-webkit-transform:translate(0,5px) scale(1,0);transform:translate(0,5px) scale(1,0);transition:all .3s linear}md-progress-linear .md-container.md-ready{-webkit-transform:translate(0,0) scale(1,1);transform:translate(0,0) scale(1,1)}md-progress-linear .md-bar{height:5px;position:absolute;width:100%}md-progress-linear .md-bar1,md-progress-linear .md-bar2{transition:all .2s linear}md-progress-linear[md-mode=determinate] .md-bar1{display:none}md-progress-linear[md-mode=indeterminate] .md-bar1{-webkit-animation:indeterminate1 4s infinite linear;animation:indeterminate1 4s infinite linear}md-progress-linear[md-mode=indeterminate] .md-bar2{-webkit-animation:indeterminate2 4s infinite linear;animation:indeterminate2 4s infinite linear}md-progress-linear[md-mode=buffer] .md-container{background-color:transparent!important}md-progress-linear[md-mode=buffer] .md-dashed:before{content:\"\";display:block;height:5px;width:100%;margin-top:0;position:absolute;background-color:transparent;background-size:10px 10px!important;background-position:0 -23px;-webkit-animation:buffer 3s infinite linear;animation:buffer 3s infinite linear}md-progress-linear[md-mode=query] .md-bar2{-webkit-animation:query .8s infinite cubic-bezier(.39,.575,.565,1);animation:query .8s infinite cubic-bezier(.39,.575,.565,1)}@-webkit-keyframes indeterminate1{0%{-webkit-transform:translateX(-25%) scale(.5,1);transform:translateX(-25%) scale(.5,1)}10%{-webkit-transform:translateX(25%) scale(.5,1);transform:translateX(25%) scale(.5,1)}19.99%{-webkit-transform:translateX(50%) scale(0,1);transform:translateX(50%) scale(0,1)}20%{-webkit-transform:translateX(-37.5%) scale(.25,1);transform:translateX(-37.5%) scale(.25,1)}30%{-webkit-transform:translateX(37.5%) scale(.25,1);transform:translateX(37.5%) scale(.25,1)}34.99%,36.99%{-webkit-transform:translateX(50%) scale(0,1);transform:translateX(50%) scale(0,1)}37%{-webkit-transform:translateX(-37.5%) scale(.25,1);transform:translateX(-37.5%) scale(.25,1)}47%{-webkit-transform:translateX(20%) scale(.25,1);transform:translateX(20%) scale(.25,1)}52%{-webkit-transform:translateX(35%) scale(.05,1);transform:translateX(35%) scale(.05,1)}55%{-webkit-transform:translateX(35%) scale(.1,1);transform:translateX(35%) scale(.1,1)}58%{-webkit-transform:translateX(50%) scale(.1,1);transform:translateX(50%) scale(.1,1)}61.99%,69.99%{-webkit-transform:translateX(50%) scale(0,1);transform:translateX(50%) scale(0,1)}70%{-webkit-transform:translateX(-37.5%) scale(.25,1);transform:translateX(-37.5%) scale(.25,1)}80%{-webkit-transform:translateX(20%) scale(.25,1);transform:translateX(20%) scale(.25,1)}85%{-webkit-transform:translateX(35%) scale(.05,1);transform:translateX(35%) scale(.05,1)}88%{-webkit-transform:translateX(35%) scale(.1,1);transform:translateX(35%) scale(.1,1)}91%{-webkit-transform:translateX(50%) scale(.1,1);transform:translateX(50%) scale(.1,1)}92.99%{-webkit-transform:translateX(50%) scale(0,1);transform:translateX(50%) scale(0,1)}93%{-webkit-transform:translateX(-50%) scale(0,1);transform:translateX(-50%) scale(0,1)}100%{-webkit-transform:translateX(-25%) scale(.5,1);transform:translateX(-25%) scale(.5,1)}}@keyframes indeterminate1{0%{-webkit-transform:translateX(-25%) scale(.5,1);transform:translateX(-25%) scale(.5,1)}10%{-webkit-transform:translateX(25%) scale(.5,1);transform:translateX(25%) scale(.5,1)}19.99%{-webkit-transform:translateX(50%) scale(0,1);transform:translateX(50%) scale(0,1)}20%{-webkit-transform:translateX(-37.5%) scale(.25,1);transform:translateX(-37.5%) scale(.25,1)}30%{-webkit-transform:translateX(37.5%) scale(.25,1);transform:translateX(37.5%) scale(.25,1)}34.99%,36.99%{-webkit-transform:translateX(50%) scale(0,1);transform:translateX(50%) scale(0,1)}37%{-webkit-transform:translateX(-37.5%) scale(.25,1);transform:translateX(-37.5%) scale(.25,1)}47%{-webkit-transform:translateX(20%) scale(.25,1);transform:translateX(20%) scale(.25,1)}52%{-webkit-transform:translateX(35%) scale(.05,1);transform:translateX(35%) scale(.05,1)}55%{-webkit-transform:translateX(35%) scale(.1,1);transform:translateX(35%) scale(.1,1)}58%{-webkit-transform:translateX(50%) scale(.1,1);transform:translateX(50%) scale(.1,1)}61.99%,69.99%{-webkit-transform:translateX(50%) scale(0,1);transform:translateX(50%) scale(0,1)}70%{-webkit-transform:translateX(-37.5%) scale(.25,1);transform:translateX(-37.5%) scale(.25,1)}80%{-webkit-transform:translateX(20%) scale(.25,1);transform:translateX(20%) scale(.25,1)}85%{-webkit-transform:translateX(35%) scale(.05,1);transform:translateX(35%) scale(.05,1)}88%{-webkit-transform:translateX(35%) scale(.1,1);transform:translateX(35%) scale(.1,1)}91%{-webkit-transform:translateX(50%) scale(.1,1);transform:translateX(50%) scale(.1,1)}92.99%{-webkit-transform:translateX(50%) scale(0,1);transform:translateX(50%) scale(0,1)}93%{-webkit-transform:translateX(-50%) scale(0,1);transform:translateX(-50%) scale(0,1)}100%{-webkit-transform:translateX(-25%) scale(.5,1);transform:translateX(-25%) scale(.5,1)}}@-webkit-keyframes indeterminate2{0%,25.99%{-webkit-transform:translateX(-50%) scale(0,1);transform:translateX(-50%) scale(0,1)}28%{-webkit-transform:translateX(-37.5%) scale(.25,1);transform:translateX(-37.5%) scale(.25,1)}38%{-webkit-transform:translateX(37.5%) scale(.25,1);transform:translateX(37.5%) scale(.25,1)}42.99%,46.99%,49.99%{-webkit-transform:translateX(50%) scale(0,1);transform:translateX(50%) scale(0,1)}50%{-webkit-transform:translateX(-50%) scale(0,1);transform:translateX(-50%) scale(0,1)}60%{-webkit-transform:translateX(-25%) scale(.5,1);transform:translateX(-25%) scale(.5,1)}70%{-webkit-transform:translateX(25%) scale(.5,1);transform:translateX(25%) scale(.5,1)}79.99%{-webkit-transform:translateX(50%) scale(0,1);transform:translateX(50%) scale(0,1)}}@keyframes indeterminate2{0%,25.99%{-webkit-transform:translateX(-50%) scale(0,1);transform:translateX(-50%) scale(0,1)}28%{-webkit-transform:translateX(-37.5%) scale(.25,1);transform:translateX(-37.5%) scale(.25,1)}38%{-webkit-transform:translateX(37.5%) scale(.25,1);transform:translateX(37.5%) scale(.25,1)}42.99%,46.99%,49.99%{-webkit-transform:translateX(50%) scale(0,1);transform:translateX(50%) scale(0,1)}50%{-webkit-transform:translateX(-50%) scale(0,1);transform:translateX(-50%) scale(0,1)}60%{-webkit-transform:translateX(-25%) scale(.5,1);transform:translateX(-25%) scale(.5,1)}70%{-webkit-transform:translateX(25%) scale(.5,1);transform:translateX(25%) scale(.5,1)}79.99%{-webkit-transform:translateX(50%) scale(0,1);transform:translateX(50%) scale(0,1)}}@-webkit-keyframes query{0%{opacity:1;-webkit-transform:translateX(35%) scale(.3,1);transform:translateX(35%) scale(.3,1)}100%{opacity:0;-webkit-transform:translateX(-50%) scale(0,1);transform:translateX(-50%) scale(0,1)}}@keyframes query{0%{opacity:1;-webkit-transform:translateX(35%) scale(.3,1);transform:translateX(35%) scale(.3,1)}100%{opacity:0;-webkit-transform:translateX(-50%) scale(0,1);transform:translateX(-50%) scale(0,1)}}@-webkit-keyframes buffer{0%{opacity:1;background-position:0 -23px}50%{opacity:0}100%{opacity:1;background-position:-200px -23px}}@keyframes buffer{0%{opacity:1;background-position:0 -23px}50%{opacity:0}100%{opacity:1;background-position:-200px -23px}}.md-switch-thumb,md-radio-button{display:block;margin:15px;white-space:nowrap;cursor:pointer}.md-switch-thumb input,md-radio-button input{display:none}.md-switch-thumb .md-container,md-radio-button .md-container{position:relative;top:4px;display:inline-block;width:16px;height:16px;cursor:pointer}.md-switch-thumb .md-container .md-ripple-container,md-radio-button .md-container .md-ripple-container{position:absolute;display:block;width:48px;height:48px;left:-16px;top:-16px}.md-switch-thumb .md-off,md-radio-button .md-off{position:absolute;top:0;left:0;width:16px;height:16px;border:2px solid;border-radius:50%;transition:border-color ease .28s}.md-switch-thumb .md-on,md-radio-button .md-on{position:absolute;top:0;left:0;width:16px;height:16px;border-radius:50%;transition:-webkit-transform ease .28s;transition:transform ease .28s;-webkit-transform:scale(0);transform:scale(0)}.md-switch-thumb.md-checked .md-on,md-radio-button.md-checked .md-on{-webkit-transform:scale(.55);transform:scale(.55)}.md-switch-thumb .md-label,md-radio-button .md-label{position:relative;display:inline-block;margin-left:10px;margin-right:10px;vertical-align:middle;white-space:normal;pointer-events:none;width:auto}.md-switch-thumb .circle,md-radio-button .circle{border-radius:50%}md-radio-group{border:1px dotted transparent;display:block;outline:0}.radioButtondemoBasicUsage md-radio-group{border:none}.md-select-menu-container{position:absolute;left:0;top:0;z-index:99;opacity:0}.md-select-menu-container:not(.md-clickable){pointer-events:none}.md-select-menu-container md-progress-circular{display:table;margin:24px auto!important}.md-select-menu-container.md-active{opacity:1}.md-select-menu-container.md-active md-select-menu{transition:-webkit-transform all .4s cubic-bezier(.25,.8,.25,1);transition:transform all .4s cubic-bezier(.25,.8,.25,1);transition-duration:200ms}.md-select-menu-container.md-active md-select-menu>*{opacity:1;transition:all .3s cubic-bezier(.55,0,.55,.2);transition-duration:200ms;transition-delay:100ms}.md-select-menu-container.md-leave{opacity:0;transition:all .3s cubic-bezier(.55,0,.55,.2);transition-duration:250ms}md-select{display:inline-block;margin-top:1.4em}md-select[disabled]:hover{cursor:default}md-select:not([disabled]):hover{cursor:pointer}md-select:not([disabled]):focus .md-select-label{border-bottom:2px solid;padding-bottom:7px}.md-select-label{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding-top:9px;padding-bottom:8px;border-bottom:1px solid;font-size:1em;line-height:.8em;position:relative;box-sizing:border-box;min-width:64px}.md-select-label .md-select-icon{-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;text-align:end;width:24px;margin:0 4px}.md-select-label .md-select-icon:after{display:block;content:'\\25BC';position:relative;top:2px;speak:none;-webkit-transform:scaleY(.6) scaleX(1);transform:scaleY(.6) scaleX(1)}md-select-menu{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;box-shadow:0 2px 5px 0 rgba(0,0,0,.26);-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(1);transform:scale(1);max-height:256px;overflow-y:hidden}md-select-menu.md-reverse{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}md-select-menu:not(.md-overflow) md-content{padding-top:8px;padding-bottom:8px}md-select-menu md-content{min-width:136px;max-height:256px;overflow-y:auto}md-select-menu>*{opacity:0}md-option{cursor:pointer;position:relative;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:auto;padding:0 16px;height:48px}md-option .md-text{width:auto;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:1em}md-optgroup{display:block}md-optgroup label{display:block;font-size:1em;text-transform:uppercase;padding:16px 8px}md-optgroup md-option{padding-left:24px}md-sidenav{position:absolute;width:304px;min-width:304px;max-width:304px;bottom:0;z-index:60;background-color:#fff;overflow:auto;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}md-sidenav.md-closed{display:none}md-sidenav.md-closed-add,md-sidenav.md-closed-remove{display:-webkit-flex;display:-ms-flexbox;display:flex;transition:0s all}md-sidenav.md-closed-add.md-closed-add-active,md-sidenav.md-closed-remove.md-closed-remove-active{transition:all .4s cubic-bezier(.25,.8,.25,1)}md-sidenav.md-locked-open-add,md-sidenav.md-locked-open-remove{position:static;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}md-sidenav.md-locked-open{width:304px;min-width:304px;max-width:304px}md-sidenav.md-locked-open,md-sidenav.md-locked-open-remove.md-closed,md-sidenav.md-locked-open.md-closed,md-sidenav.md-locked-open.md-closed.md-sidenav-left,md-sidenav.md-locked-open.md-closed.md-sidenav-right{position:static;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}md-sidenav.md-locked-open-remove-active{transition:width .3s cubic-bezier(.55,0,.55,.2),min-width .3s cubic-bezier(.55,0,.55,.2);width:0;min-width:0}md-sidenav.md-closed.md-locked-open-add{width:0;min-width:0;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}md-sidenav.md-closed.md-locked-open-add-active{transition:width .3s cubic-bezier(.55,0,.55,.2),min-width .3s cubic-bezier(.55,0,.55,.2);width:304px;min-width:304px;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.md-sidenav-backdrop.md-locked-open{display:none}.md-sidenav-left,md-sidenav{left:0;top:0;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.md-sidenav-left.md-closed,md-sidenav.md-closed{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.md-sidenav-right{left:100%;top:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.md-sidenav-right.md-closed{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}@media (max-width:360px){md-sidenav{width:85%}}@-webkit-keyframes sliderFocusThumb{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{opacity:0}}@keyframes sliderFocusThumb{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{opacity:0}}md-slider{height:48px;position:relative;display:block;margin-left:4px;margin-right:4px;padding:0}md-slider .md-slider-wrapper{position:relative}md-slider .md-track-container{width:100%;position:absolute;top:23px;height:2px}md-slider .md-track{position:absolute;left:0;right:0;height:100%}md-slider .md-track-fill{transition:width .05s linear}md-slider .md-track-ticks{position:absolute;left:0;right:0;height:100%}md-slider .md-thumb-container{position:absolute;left:0;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);transition:left .1s linear}md-slider .md-thumb{z-index:1;position:absolute;left:-19px;top:5px;width:38px;height:38px;border-radius:38px;-webkit-transform:scale(.5);transform:scale(.5);transition:all .1s linear}md-slider .md-thumb:after{content:'';position:absolute;left:3px;top:3px;width:32px;height:32px;border-radius:32px;border:3px solid}md-slider .md-sign{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;left:-14px;top:-20px;width:28px;height:28px;border-radius:28px;-webkit-transform:scale(.4) translate3d(0,70px,0);transform:scale(.4) translate3d(0,70px,0);transition:all .2s ease-in-out}md-slider .md-sign:after{position:absolute;content:'';left:0;border-radius:16px;top:19px;border-left:14px solid transparent;border-right:14px solid transparent;border-top:16px solid;opacity:0;-webkit-transform:translate3d(0,-8px,0);transform:translate3d(0,-8px,0);transition:all .2s ease-in-out}md-slider .md-sign .md-thumb-text{z-index:1;font-size:12px;font-weight:700}md-slider .md-focus-thumb{position:absolute;left:-24px;top:0;width:48px;height:48px;border-radius:48px;display:none;opacity:0;background-color:silver;-webkit-animation:sliderFocusThumb .4s linear;animation:sliderFocusThumb .4s linear}md-slider .md-focus-ring{position:absolute;left:-24px;top:0;width:48px;height:48px;border-radius:48px;border:2px solid #D6D6D6;background-color:transparent;-webkit-transform:scale(0);transform:scale(0);transition:all .2s linear}md-slider .md-disabled-thumb{position:absolute;left:-22px;top:2px;width:44px;height:44px;border-radius:44px;-webkit-transform:scale(.35);transform:scale(.35);border:6px solid;display:none}md-slider.md-min .md-thumb:after{background-color:#fff}md-slider.md-min .md-sign{opacity:0}md-slider:focus{outline:0}md-slider.dragging .md-thumb-container,md-slider.dragging .md-track-fill{transition:none}md-slider:not([md-discrete]) .md-sign,md-slider:not([md-discrete]) .md-track-ticks{display:none}md-slider:not([md-discrete]):not([disabled]):hover .md-thumb{-webkit-transform:scale(.6);transform:scale(.6)}md-slider:not([md-discrete]):not([disabled]).active .md-focus-thumb,md-slider:not([md-discrete]):not([disabled]):focus .md-focus-thumb{display:block}md-slider:not([md-discrete]):not([disabled]).active .md-focus-ring,md-slider:not([md-discrete]):not([disabled]):focus .md-focus-ring{-webkit-transform:scale(1);transform:scale(1)}md-slider:not([md-discrete]):not([disabled]).active .md-thumb,md-slider:not([md-discrete]):not([disabled]):focus .md-thumb{-webkit-transform:scale(.85);transform:scale(.85)}md-slider[md-discrete] .md-focus-ring,md-slider[md-discrete] .md-focus-thumb{display:none}md-slider[md-discrete]:not([disabled]).active .md-sign,md-slider[md-discrete]:not([disabled]).active .md-sign:after,md-slider[md-discrete]:not([disabled]):focus .md-sign,md-slider[md-discrete]:not([disabled]):focus .md-sign:after{opacity:1;-webkit-transform:translate3d(0,0,0) scale(1);transform:translate3d(0,0,0) scale(1)}md-slider[disabled] .md-sign,md-slider[disabled] .md-track-fill{display:none}md-slider[disabled] .md-thumb{-webkit-transform:scale(.35);transform:scale(.35)}md-slider[disabled] .md-disabled-thumb{display:block}.md-sticky-clone{z-index:2;top:0;left:0;right:0;position:absolute!important;-webkit-transform:translate3d(-9999px,-9999px,0);transform:translate3d(-9999px,-9999px,0)}.md-sticky-clone[sticky-state=active]{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.md-sticky-clone[sticky-state=active]:not(.md-sticky-no-effect):after{-webkit-animation:subheaderStickyHoverIn .3s ease-out both;animation:subheaderStickyHoverIn .3s ease-out both}@-webkit-keyframes subheaderStickyHoverIn{0%{box-shadow:0 0 0 0 transparent}100%{box-shadow:0 2px 4px 0 rgba(0,0,0,.16)}}@keyframes subheaderStickyHoverIn{0%{box-shadow:0 0 0 0 transparent}100%{box-shadow:0 2px 4px 0 rgba(0,0,0,.16)}}@-webkit-keyframes subheaderStickyHoverOut{0%{box-shadow:0 2px 4px 0 rgba(0,0,0,.16)}100%{box-shadow:0 0 0 0 transparent}}@keyframes subheaderStickyHoverOut{0%{box-shadow:0 2px 4px 0 rgba(0,0,0,.16)}100%{box-shadow:0 0 0 0 transparent}}.md-subheader{display:block;font-size:.9em;font-weight:400;line-height:1em;padding:16px 0 16px 16px;margin:0 16px 0 0;position:relative}.md-subheader:not(.md-sticky-no-effect){transition:.2s ease-out margin}.md-subheader:not(.md-sticky-no-effect):after{position:absolute;left:0;bottom:0;top:0;right:-16px;content:''}.md-subheader:not(.md-sticky-no-effect).md-sticky-clone{z-index:2}.md-subheader:not(.md-sticky-no-effect)[sticky-state=active]{margin-top:-2px}.md-subheader:not(.md-sticky-no-effect):not(.md-sticky-clone)[sticky-prev-state=active]:after{-webkit-animation:subheaderStickyHoverOut .3s ease-out both;animation:subheaderStickyHoverOut .3s ease-out both}.md-subheader .md-subheader-content{z-index:1;position:relative}md-switch{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:15px;white-space:nowrap;cursor:pointer;outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}md-switch .md-container{cursor:-webkit-grab;cursor:grab;width:36px;height:24px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-right:8px}md-switch:not([disabled]) .md-dragging,md-switch:not([disabled]).md-dragging .md-container{cursor:-webkit-grabbing;cursor:grabbing}md-switch .md-label{border-color:transparent;border-width:0}md-switch .md-bar{left:1px;width:34px;top:5px;height:14px;border-radius:8px;position:absolute}md-switch .md-thumb-container{top:2px;left:0;width:16px;position:absolute;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:1}md-switch.md-checked .md-thumb-container{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}md-switch .md-thumb{position:absolute;margin:0;left:0;top:0;outline:0;height:20px;width:20px;border-radius:50%;box-shadow:0 2px 5px 0 rgba(0,0,0,.26)}md-switch .md-thumb .md-ripple-container{position:absolute;display:block;width:auto;height:auto;left:-20px;top:-20px;right:-20px;bottom:-20px}md-switch:not(.md-dragging) .md-bar,md-switch:not(.md-dragging) .md-thumb,md-switch:not(.md-dragging) .md-thumb-container{transition:all .5s cubic-bezier(.35,0,.25,1);transition-property:-webkit-transform,background-color;transition-property:transform,background-color}md-switch:not(.md-dragging) .md-bar,md-switch:not(.md-dragging) .md-thumb{transition-delay:.05s}md-tabs{display:block;width:100%;font-weight:500;overflow:auto}.md-header{width:100%;height:48px;box-sizing:border-box;position:relative}.md-paginator{z-index:1;margin-right:-2px;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:32px;min-height:100%;cursor:pointer;border:none;background-color:transparent;background-repeat:no-repeat;background-position:center center;position:absolute}.md-paginator.md-prev{left:0}.md-paginator.md-next{right:0}.md-paginator.md-next md-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}md-tabs[center] .md-header:not(.md-paginating) .md-header-items{-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.md-paginating .md-header-items-container{left:32px;right:32px}.md-header-items-container{overflow:hidden;position:absolute;left:0;right:0;height:100%;white-space:nowrap;font-size:14px;font-weight:500;text-transform:uppercase;margin:auto}.md-header-items-container .md-header-items{display:-webkit-flex;display:-ms-flexbox;display:flex;box-sizing:border-box;transition:-webkit-transform .5s cubic-bezier(.35,0,.25,1);transition:transform .5s cubic-bezier(.35,0,.25,1);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);height:100%;width:99999px}.md-tabs-content{overflow:hidden;width:100%;position:relative}.md-tabs-content .md-tab-content{height:100%}.md-tabs-content .md-tab-content.ng-hide.ng-animate{display:block!important}.md-tabs-content .md-tab-content.ng-animate{transition:-webkit-transform .5s cubic-bezier(.35,0,.25,1);transition:transform .5s cubic-bezier(.35,0,.25,1);-webkit-transform:translateX(0);transform:translateX(0)}.md-tabs-content .md-tab-content.ng-animate.ng-hide-add{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.md-tabs-content .md-tab-content.ng-animate.ng-hide-add.md-transition-rtl{-webkit-transform:translateX(100%);transform:translateX(100%)}.md-tabs-content .md-tab-content.ng-animate.ng-hide-remove{position:absolute;-webkit-transform:translateX(100%);transform:translateX(100%);top:0;left:0;right:0;bottom:0}.md-tabs-content .md-tab-content.ng-animate.ng-hide-remove.md-transition-rtl{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.md-tabs-content .md-tab-content.ng-animate.ng-hide-remove.ng-hide-remove-active{-webkit-transform:translateX(0);transform:translateX(0)}md-tabs-ink-bar{z-index:1;display:none;position:absolute;left:0;bottom:0;box-sizing:border-box;height:2px;margin-top:-2px;-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:0 0;transform-origin:0 0}md-tabs-ink-bar.md-transition-right{transition:right .25s cubic-bezier(.35,0,.25,1),left .25s cubic-bezier(.35,0,.25,1) .075s}md-tabs-ink-bar.md-transition-left{transition:right .25s cubic-bezier(.35,0,.25,1) .075s,left .25s cubic-bezier(.35,0,.25,1)}md-tab{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;z-index:0;overflow:hidden;height:100%;text-align:center;cursor:pointer;padding:20px 24px;box-sizing:border-box;transition:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}md-tab.md-tab-themed{transition:background .35s cubic-bezier(.35,0,.25,1),color .35s cubic-bezier(.35,0,.25,1)}md-tab[disabled]{pointer-events:none;cursor:default}md-tab:focus{outline:0}md-tab md-tab-label{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;z-index:100;opacity:1;overflow:hidden}.md-input-group label,md-input-group label{display:block}.md-input-group input[type=text],.md-input-group input[type=password],.md-input-group input[type=datetime],.md-input-group input[type=datetime-local],.md-input-group input[type=date],.md-input-group input[type=month],.md-input-group input[type=time],.md-input-group input[type=search],.md-input-group input[type=week],.md-input-group input[type=number],.md-input-group input[type=email],.md-input-group input[type=url],.md-input-group input[type=tel],.md-input-group input[type=color],.md-input-group textarea,md-input-group input[type=text],md-input-group input[type=password],md-input-group input[type=datetime],md-input-group input[type=datetime-local],md-input-group input[type=date],md-input-group input[type=month],md-input-group input[type=time],md-input-group input[type=search],md-input-group input[type=week],md-input-group input[type=number],md-input-group input[type=email],md-input-group input[type=url],md-input-group input[type=tel],md-input-group input[type=color],md-input-group textarea{display:block;border-width:0 0 1px;padding-top:2px;line-height:26px;padding-bottom:1px}.md-input-group input[type=text]:focus,.md-input-group input[type=password]:focus,.md-input-group input[type=datetime]:focus,.md-input-group input[type=datetime-local]:focus,.md-input-group input[type=date]:focus,.md-input-group input[type=month]:focus,.md-input-group input[type=time]:focus,.md-input-group input[type=search]:focus,.md-input-group input[type=week]:focus,.md-input-group input[type=number]:focus,.md-input-group input[type=email]:focus,.md-input-group input[type=url]:focus,.md-input-group input[type=tel]:focus,.md-input-group input[type=color]:focus,.md-input-group textarea:focus,md-input-group input[type=text]:focus,md-input-group input[type=password]:focus,md-input-group input[type=datetime]:focus,md-input-group input[type=datetime-local]:focus,md-input-group input[type=date]:focus,md-input-group input[type=month]:focus,md-input-group input[type=time]:focus,md-input-group input[type=search]:focus,md-input-group input[type=week]:focus,md-input-group input[type=number]:focus,md-input-group input[type=email]:focus,md-input-group input[type=url]:focus,md-input-group input[type=tel]:focus,md-input-group input[type=color]:focus,md-input-group textarea:focus{outline:0}.md-input-group input,.md-input-group textarea,md-input-group input,md-input-group textarea{background:0 0}.md-input-group,md-input-group{padding-bottom:2px;margin:10px 0 8px;position:relative;display:block}.md-input-group label,md-input-group label{font-size:1em;z-index:1;pointer-events:none;-webkit-font-smoothing:antialiased}.md-input-group label:hover,md-input-group label:hover{cursor:text}.md-input-group label,md-input-group label{-webkit-transform:translate3d(0,22px,0);transform:translate3d(0,22px,0);-webkit-transform-origin:left center;transform-origin:left center;transition:all .15s cubic-bezier(.35,0,.25,1)}.md-input-group input,.md-input-group textarea,md-input-group input,md-input-group textarea{border-bottom-width:1px;transition:all .15s cubic-bezier(.35,0,.25,1)}.md-input-group.md-input-focused label,md-input-group.md-input-focused label{-webkit-transform:translate3d(0,4px,0) scale(.75);transform:translate3d(0,4px,0) scale(.75)}.md-input-group.md-input-focused input,.md-input-group.md-input-focused textarea,md-input-group.md-input-focused input,md-input-group.md-input-focused textarea{border-bottom-width:2px}.md-input-group.md-input-focused input,md-input-group.md-input-focused input{padding-bottom:0}.md-input-group.md-input-has-value label,.md-input-group.md-input-has-value:not(.md-input-focused) label,md-input-group.md-input-has-value label,md-input-group.md-input-has-value:not(.md-input-focused) label{-webkit-transform:translate3d(0,4px,0) scale(.75);transform:translate3d(0,4px,0) scale(.75)}.md-input-group[disabled] input,.md-input-group[disabled] textarea,md-input-group[disabled] input,md-input-group[disabled] textarea{border-bottom-width:0;background-position:0 bottom;background-size:2px 1px;background-repeat:repeat-x;pointer-events:none}.md-input-group[disabled] label,md-input-group[disabled] label{-webkit-transform:translate3d(0,4px,0) scale(.75);transform:translate3d(0,4px,0) scale(.75)}.md-input-group[disabled] :not(.md-input-has-value) label,md-input-group[disabled] :not(.md-input-has-value) label{-webkit-transform:translate3d(0,22px,0);transform:translate3d(0,22px,0);-webkit-transform-origin:left center;transform-origin:left center;transition:all .15s cubic-bezier(.35,0,.25,1)}md-toast{display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;box-sizing:border-box;-webkit-align-items:center;-ms-flex-align:center;align-items:center;min-height:48px;padding-left:24px;padding-right:24px;box-shadow:0 2px 5px 0 rgba(0,0,0,.26);border-radius:2px;font-size:14px;cursor:default;max-width:879px;max-height:40px;height:24px;z-index:90;opacity:1;-webkit-transform:translate3d(0,0,0) rotateZ(0deg);transform:translate3d(0,0,0) rotateZ(0deg);transition:all .4s cubic-bezier(.25,.8,.25,1)}md-toast.md-capsule{border-radius:24px}md-toast.ng-leave-active{transition:all .3s cubic-bezier(.55,0,.55,.2)}md-toast.md-swipedown,md-toast.md-swipeleft,md-toast.md-swiperight,md-toast.md-swipeup{transition:all .4s cubic-bezier(.25,.8,.25,1)}md-toast.ng-enter{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0}md-toast.ng-enter.md-top{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}md-toast.ng-enter.ng-enter-active{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}md-toast.ng-leave.ng-leave-active{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}md-toast.ng-leave.ng-leave-active.md-top{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}md-toast.ng-leave.ng-leave-active.md-swipeleft{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}md-toast.ng-leave.ng-leave-active.md-swiperight{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}md-toast .md-action{line-height:19px;margin-left:24px;cursor:pointer;text-transform:uppercase;float:right}@media (max-width:600px){md-toast{left:0;right:0;width:100%;max-width:100%;min-width:0;border-radius:0;bottom:0}md-toast.md-top{bottom:auto;top:0}}@media (min-width:600px){md-toast{min-width:288px}md-toast.md-bottom{bottom:8px}md-toast.md-left{left:8px}md-toast.md-right{right:8px}md-toast.md-top{top:8px}md-toast.ng-leave.ng-leave-active.md-swipeleft{-webkit-transform:translate3d(-100%,25%,0) rotateZ(-15deg);transform:translate3d(-100%,25%,0) rotateZ(-15deg)}md-toast.ng-leave.ng-leave-active.md-swiperight{-webkit-transform:translate3d(100%,25%,0) rotateZ(15deg);transform:translate3d(100%,25%,0) rotateZ(15deg)}md-toast.ng-leave.ng-leave-active.md-top.md-swipeleft{-webkit-transform:translate3d(-100%,0,0) rotateZ(-15deg);transform:translate3d(-100%,0,0) rotateZ(-15deg)}md-toast.ng-leave.ng-leave-active.md-top.md-swiperight{-webkit-transform:translate3d(100%,0,0) rotateZ(15deg);transform:translate3d(100%,0,0) rotateZ(15deg)}}md-toolbar{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;z-index:2;font-size:1.3em;min-height:64px;width:100%;box-shadow:0 2px 5px 0 rgba(0,0,0,.26)}md-toolbar.md-tall{height:128px;min-height:128px;max-height:128px}md-toolbar.md-medium-tall{height:88px;min-height:88px;max-height:88px}md-toolbar.md-medium-tall .md-toolbar-tools{height:48px;min-height:48px;max-height:48px}md-toolbar .md-indent{margin-left:64px}.md-toolbar-tools{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;height:64px;max-height:64px;font-size:inherit;font-weight:400;padding:0 16px;margin:0}.md-toolbar-tools>*{font-size:inherit}.md-toolbar-tools h2,.md-toolbar-tools h3{font-weight:400}.md-toolbar-tools a{color:inherit;text-decoration:none}.md-toolbar-tools .fill-height{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.md-toolbar-tools .md-tools{margin-left:auto}.md-toolbar-tools .md-button{font-size:16px}md-tooltip{position:absolute;font-size:14px;z-index:100;overflow:hidden;pointer-events:none;border-radius:4px}md-tooltip .md-background{position:absolute;border-radius:50%;-webkit-transform:translate(-50%,-50%) scale(0);transform:translate(-50%,-50%) scale(0);opacity:1}md-tooltip .md-background.md-show-add{transition:all .4s cubic-bezier(.25,.8,.25,1);-webkit-transform:translate(-50%,-50%) scale(0);transform:translate(-50%,-50%) scale(0);opacity:0}md-tooltip .md-background.md-show,md-tooltip .md-background.md-show-add-active{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);opacity:1}md-tooltip .md-background.md-show-remove{transition:all .3s cubic-bezier(.55,0,.55,.2)}md-tooltip .md-background.md-show-remove.md-show-remove-active{-webkit-transform:translate(-50%,-50%) scale(0);transform:translate(-50%,-50%) scale(0);opacity:0}md-tooltip .md-content{position:relative;max-width:240px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:8px;background:0 0;opacity:0}md-tooltip .md-content.md-show-add{transition:all .4s cubic-bezier(.25,.8,.25,1);opacity:0}md-tooltip .md-content.md-show,md-tooltip .md-content.md-show-add-active{opacity:1}md-tooltip .md-content.md-show-remove{transition:all .3s cubic-bezier(.55,0,.55,.2)}md-tooltip .md-content.md-show-remove.md-show-remove-active{opacity:0}md-tooltip.md-hide{transition:all .3s cubic-bezier(.55,0,.55,.2)}md-tooltip.md-show{transition:all .4s cubic-bezier(.25,.8,.25,1);pointer-events:auto;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.md-whiteframe-z1{box-shadow:0 2px 5px 0 rgba(0,0,0,.26)}.md-whiteframe-z2{box-shadow:0 8px 17px rgba(0,0,0,.2)}.md-whiteframe-z3{box-shadow:0 17px 50px rgba(0,0,0,.19)}.md-whiteframe-z4{box-shadow:0 16px 28px 0 rgba(0,0,0,.22)}.md-whiteframe-z5{box-shadow:0 27px 24px 0 rgba(0,0,0,.2)}.greet_input{margin:5px}");
//# sourceMappingURL=build.js.map