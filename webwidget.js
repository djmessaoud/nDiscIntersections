'use strict';
var _slicedToArray = function() {
  /**
   * @param {?} arr
   * @param {string} i
   * @return {?}
   */
  function sliceIterator(arr, i) {
    /** @type {!Array} */
    var _arr = [];
    /** @type {boolean} */
    var _n = true;
    /** @type {boolean} */
    var _d = false;
    var _e = undefined;
    try {
      var _i = arr[Symbol.iterator]();
      var _s;
      for (; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) {
          break;
        }
      }
    } catch (err) {
      /** @type {boolean} */
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) {
          _i["return"]();
        }
      } finally {
        if (_d) {
          throw _e;
        }
      }
    }
    return _arr;
  }
  return function(arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else {
      if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    }
  };
}();
var _createClass = function() {
  /**
   * @param {!Function} target
   * @param {!NodeList} props
   * @return {undefined}
   */
  function defineProperties(target, props) {
    /** @type {number} */
    var i = 0;
    for (; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      /** @type {boolean} */
      descriptor.configurable = true;
      if ("value" in descriptor) {
        /** @type {boolean} */
        descriptor.writable = true;
      }
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) {
      defineProperties(Constructor.prototype, protoProps);
    }
    if (staticProps) {
      defineProperties(Constructor, staticProps);
    }
    return Constructor;
  };
}();
/** @type {function(string): ?} */
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(qline) {
  return typeof qline;
} : function(obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/**
 * @param {string} self
 * @param {string} call
 * @return {?}
 */
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
/**
 * @param {!Object} subClass
 * @param {!Object} superClass
 * @return {undefined}
 */
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  /** @type {!Object} */
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor : {
      value : subClass,
      enumerable : false,
      writable : true,
      configurable : true
    }
  });
  if (superClass) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(subClass, superClass);
    } else {
      /** @type {!Object} */
      subClass.__proto__ = superClass;
    }
  }
}
/**
 * @param {!AudioNode} instance
 * @param {!Function} Constructor
 * @return {undefined}
 */
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/**
 * @param {!NodeList} arr
 * @return {?}
 */
function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    /** @type {number} */
    var i = 0;
    /** @type {!Array} */
    var arr2 = Array(arr.length);
    for (; i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}
!function() {
  /**
   * @param {?} thisArg
   * @param {number} _arguments
   * @param {!Object} P
   * @param {?} generator
   * @return {?}
   */
  function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(calculateBonus, s) {
      /**
       * @param {?} value
       * @return {undefined}
       */
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (_current_callback) {
          "function" == typeof _current_callback;
        }
      }
      /**
       * @param {?} value
       * @return {undefined}
       */
      function rejected(value) {
        try {
          step(generator.throw(value));
        } catch (_current_callback) {
          "function" == typeof _current_callback;
        }
      }
      /**
       * @param {!Object} target
       * @return {undefined}
       */
      function step(target) {
        var x;
        if (target.done) {
          calculateBonus(target.value);
        } else {
          (x = target.value, x instanceof P ? x : new P(function(resolve) {
            resolve(x);
          })).then(fulfilled, rejected);
        }
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  /**
   * @return {undefined}
   */
  function key() {
  }
  /**
   * @param {!Object} source
   * @return {undefined}
   */
  function each(source) {
    source.forEach(i);
  }
  /**
   * @param {string} value
   * @param {string} prev
   * @return {?}
   */
  function t(value, prev) {
    return value != value ? prev == prev : value !== prev || value && "object" == (typeof value === "undefined" ? "undefined" : _typeof(value)) || "function" == typeof value;
  }
  /**
   * @param {!Object} o
   * @return {?}
   */
  function next(o) {
    if (null == o) {
      return key;
    }
    /** @type {number} */
    var _len = arguments.length;
    /** @type {!Array} */
    var args = Array(_len > 1 ? _len - 1 : 0);
    /** @type {number} */
    var _key = 1;
    for (; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    var r = o.subscribe.apply(o, args);
    return r.unsubscribe ? function() {
      return r.unsubscribe();
    } : r;
  }
  /**
   * @param {?} context
   * @param {!Object} obj
   * @param {!Function} value
   * @return {undefined}
   */
  function setup(context, obj, value) {
    context.$$.on_destroy.push(next(obj, value));
  }
  /**
   * @param {!Object} value
   * @param {!Object} name
   * @return {undefined}
   */
  function $(value, name) {
    value.appendChild(name);
  }
  /**
   * @param {!Node} obj
   * @param {!Object} val
   * @param {string} result
   * @return {undefined}
   */
  function apply(obj, val, result) {
    var doc = function(node) {
      if (!node) {
        return document;
      }
      var result = node.getRootNode ? node.getRootNode() : node.ownerDocument;
      if (result && result.host) {
        return result;
      }
      return node.ownerDocument;
    }(obj);
    if (!doc.getElementById(val)) {
      /** @type {!Element} */
      var element = document.createElement("style");
      /** @type {!Object} */
      element.id = val;
      /** @type {string} */
      element.textContent = result;
      (function(doc, link) {
        $(doc.head || doc, link);
        link.sheet;
      })(doc, element);
    }
  }
  /**
   * @param {!Object} options
   * @param {!Object} value
   * @param {!Object} x
   * @return {undefined}
   */
  function f(options, value, x) {
    options.insertBefore(value, x || null);
  }
  /**
   * @param {!Object} component
   * @return {undefined}
   */
  function get(component) {
    if (component.parentNode) {
      component.parentNode.removeChild(component);
    }
  }
  /**
   * @param {!Object} key
   * @param {string} name
   * @param {string} value
   * @return {undefined}
   */
  function callback(key, name, value) {
    if (null == value) {
      key.removeAttribute(name);
    } else {
      if (key.getAttribute(name) !== value) {
        key.setAttribute(name, value);
      }
    }
  }
  /**
   * @param {!Object} s
   * @param {string} key
   * @return {undefined}
   */
  function b(s, key) {
    /** @type {string} */
    key = "" + key;
    if (s.wholeText !== key) {
      /** @type {string} */
      s.data = key;
    }
  }
  /**
   * @param {!Object} o
   * @param {string} value
   * @return {undefined}
   */
  function print(o, value) {
    o.value = null == value ? "" : value;
  }
  /**
   * @param {!Object} el
   * @param {string} expression
   * @param {string} state
   * @return {undefined}
   */
  function update(el, expression, state) {
    el.classList[state ? "add" : "remove"](expression);
  }
  /**
   * @param {!Object} value
   * @return {undefined}
   */
  function parseFloat(value) {
    /** @type {!Object} */
    url = value;
  }
  /**
   * @return {?}
   */
  function getName() {
    if (!url) {
      throw new Error("Function called outside component initialization");
    }
    return url;
  }
  /**
   * @param {?} context
   * @param {!Object} data
   * @return {undefined}
   */
  function console(context, data) {
    var _this = this;
    var charListNotLatin = context.$$.callbacks[data.type];
    if (charListNotLatin) {
      charListNotLatin.slice().forEach(function(t) {
        return t.call(_this, data);
      });
    }
  }
  /**
   * @return {undefined}
   */
  function dispatch() {
    if (!I) {
      /** @type {boolean} */
      I = true;
      dispatched.then(action);
    }
  }
  /**
   * @param {!Function} term
   * @return {undefined}
   */
  function expand(term) {
    array.push(term);
  }
  /**
   * @return {undefined}
   */
  function action() {
    if (0 !== _i3) {
      return;
    }
    var computedMarginA = url;
    do {
      try {
        for (; _i3 < _arr3.length;) {
          var context = _arr3[_i3];
          _i3++;
          parseFloat(context);
          addDescription(context.$$);
        }
      } catch (t) {
        throw _arr3.length = 0, _i3 = 0, t;
      }
      parseFloat(null);
      /** @type {number} */
      _arr3.length = 0;
      /** @type {number} */
      _i3 = 0;
      for (; listeners.length;) {
        listeners.pop()();
      }
      /** @type {number} */
      var i = 0;
      for (; i < array.length; i = i + 1) {
        var title = array[i];
        if (!_removedNewItems.has(title)) {
          _removedNewItems.add(title);
          title();
        }
      }
      /** @type {number} */
      array.length = 0;
    } while (_arr3.length);
    for (; deadPool.length;) {
      deadPool.pop()();
    }
    /** @type {boolean} */
    I = false;
    _removedNewItems.clear();
    parseFloat(computedMarginA);
  }
  /**
   * @param {!Object} p
   * @return {undefined}
   */
  function addDescription(p) {
    if (null !== p.fragment) {
      p.update();
      each(p.before_update);
      var value = p.dirty;
      /** @type {!Array} */
      p.dirty = [-1];
      if (p.fragment) {
        p.fragment.p(p.ctx, value);
      }
      p.after_update.forEach(expand);
    }
  }
  /**
   * @return {undefined}
   */
  function getNext() {
    o = {
      r : 0,
      c : [],
      p : o
    };
  }
  /**
   * @return {undefined}
   */
  function max() {
    if (!o.r) {
      each(o.c);
    }
    o = o.p;
  }
  /**
   * @param {(Object|string)} value
   * @param {?} data
   * @return {undefined}
   */
  function forEach(value, data) {
    if (value && value.i) {
      updatedSet.delete(value);
      value.i(data);
    }
  }
  /**
   * @param {(Object|string)} value
   * @param {!Function} e
   * @param {number} n
   * @param {!Function} v
   * @return {undefined}
   */
  function cb(value, e, n, v) {
    if (value && value.o) {
      if (updatedSet.has(value)) {
        return;
      }
      updatedSet.add(value);
      o.c.push(function() {
        updatedSet.delete(value);
        if (v) {
          if (n) {
            value.d(1);
          }
          Object.create(null);
        }
      });
      value.o(e);
    } else {
      if (v) {
        Object.create(null);
      }
    }
  }
  /**
   * @param {!Object} struct
   * @return {undefined}
   */
  function check(struct) {
    if (struct) {
      struct.c();
    }
  }
  /**
   * @param {!Object} context
   * @param {!Object} v
   * @param {!Object} n
   * @param {?} balanced
   * @return {undefined}
   */
  function parse(context, v, n, balanced) {
    var option = context.$$;
    var f = option.fragment;
    var container = option.after_update;
    if (f) {
      f.m(v, n);
    }
    if (!balanced) {
      expand(function() {
        var _selectedKeys;
        var v = context.$$.on_mount.map(i).filter(s);
        if (context.$$.on_destroy) {
          (_selectedKeys = context.$$.on_destroy).push.apply(_selectedKeys, _toConsumableArray(v));
        } else {
          each(v);
        }
        /** @type {!Array} */
        context.$$.on_mount = [];
      });
    }
    container.forEach(expand);
  }
  /**
   * @param {!Object} context
   * @param {number} value
   * @return {undefined}
   */
  function set(context, value) {
    var options = context.$$;
    if (null !== options.fragment) {
      each(options.on_destroy);
      if (options.fragment) {
        options.fragment.d(value);
      }
      /** @type {null} */
      options.on_destroy = options.fragment = null;
      /** @type {!Array} */
      options.ctx = [];
    }
  }
  /**
   * @param {!Object} context
   * @param {!Object} options
   * @param {!Function} callback
   * @param {!Function} fn
   * @param {!Function} type
   * @param {!Object} data
   * @param {!Function} func
   * @return {undefined}
   */
  function fn(context, options, callback, fn, type, data, func) {
    var dirty = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : [-1];
    var u = url;
    parseFloat(context);
    var self = context.$$ = {
      fragment : null,
      ctx : [],
      props : data,
      update : key,
      not_equal : type,
      bound : Object.create(null),
      on_mount : [],
      on_destroy : [],
      on_disconnect : [],
      before_update : [],
      after_update : [],
      context : new Map(options.context || (u ? u.$$.context : [])),
      callbacks : Object.create(null),
      dirty : dirty,
      skip_bound : false,
      root : options.target || u.$$.root
    };
    if (func) {
      func(self.root);
    }
    /** @type {boolean} */
    var f = false;
    if (self.ctx = callback ? "function" == typeof context : [], self.update(), f = true, each(self.before_update), self.fragment = !!fn && fn(self.ctx), options.target) {
      if (options.hydrate) {
        var watch = function(domElement) {
          return Array.from(domElement.childNodes);
        }(options.target);
        if (self.fragment) {
          self.fragment.l(watch);
        }
        watch.forEach(get);
      } else {
        if (self.fragment) {
          self.fragment.c();
        }
      }
      if (options.intro) {
        forEach(context.$$.fragment);
      }
      parse(context, options.target, options.anchor, options.customElement);
      action();
    }
    parseFloat(u);
  }
  /**
   * @param {string} e
   * @return {?}
   */
  function replace(e) {
    /**
     * @param {string} a
     * @return {undefined}
     */
    function update(a) {
      if (t(e, a) && (e = a, m)) {
        /** @type {boolean} */
        var _e3 = !D.length;
        /** @type {boolean} */
        var _iteratorNormalCompletion3 = true;
        /** @type {boolean} */
        var _didIteratorError = false;
        var _iteratorError = undefined;
        try {
          var _iterator3 = o[Symbol.iterator]();
          var $__6;
          for (; !(_iteratorNormalCompletion3 = ($__6 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var item = $__6.value;
            item[1]();
            D.push(item, e);
          }
        } catch (err) {
          /** @type {boolean} */
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
        if (_e3) {
          /** @type {number} */
          var i = 0;
          for (; i < D.length; i = i + 2) {
            D[i][0](D[i + 1]);
          }
          /** @type {number} */
          D.length = 0;
        }
      }
    }
    var newElKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : key;
    var m = void 0;
    /** @type {!Set} */
    var o = new Set;
    return {
      set : update,
      update : function create(obj) {
        "function" == typeof obj(e);
      },
      subscribe : function update(n) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : key;
        /** @type {!Array} */
        var result = [n, t];
        return o.add(result), 1 === o.size && (m = "function" == typeof e || key), n(e), function() {
          o.delete(result);
          if (0 === o.size) {
            Object.create(null);
            /** @type {null} */
            m = null;
          }
        };
      }
    };
  }
  /**
   * @param {?} textureVel
   * @return {?}
   */
  function render(textureVel) {
    var root = void 0;
    var id = void 0;
    var location = void 0;
    return {
      c : function render() {
        /** @type {!Element} */
        root = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        /** @type {!Element} */
        id = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        /** @type {!Element} */
        location = document.createElementNS("http://www.w3.org/2000/svg", "path");
        callback(id, "cx", "32");
        callback(id, "cy", "32");
        callback(id, "r", "32");
        callback(id, "fill", "var(--mainColor)");
        callback(location, "fill-rule", "evenodd");
        callback(location, "clip-rule", "evenodd");
        callback(location, "d", "M33.9284 44.6022C40.3569 43.8082 45.3335 38.3272 45.3335 31.6839C45.3335 24.4947 39.5055 18.6667 32.3163 18.6667C25.1271 18.6667 19.2992 24.4947 19.2992 31.6839C19.2992 32.8351 19.4486 33.9515 19.7292 35.0146C19.8356 35.5696 19.9736 36.1063 20.1416 36.6233C20.9032 40.3874 19.3534 44.8018 18.6667 44.8018H32.3729L33.6737 44.6407C33.7662 44.631 33.8509 44.6181 33.9284 44.6022Z");
        callback(location, "fill", "var(--secondaryColor)");
        callback(root, "width", "64");
        callback(root, "height", "64");
        callback(root, "viewBox", "0 0 64 64");
        callback(root, "fill", "none");
        callback(root, "xmlns", "http://www.w3.org/2000/svg");
      },
      m : function m(o, t) {
        f(o, root, t);
        $(root, id);
        $(root, location);
      },
      p : key,
      i : key,
      o : key,
      d : function changetooltip(view) {
        if (view) {
          get(root);
        }
      }
    };
  }
  /**
   * @param {!Node} fn
   * @return {undefined}
   */
  function target(fn) {
    apply(fn, "svelte-tte8gc", ".cfai-widget__open-btn.svelte-tte8gc{position:fixed;bottom:16px;right:16px;width:64px;height:64px;color:var(--mainColor);cursor:pointer}.cfai-widget__open-btn.svelte-tte8gc:hover{filter:brightness(90%)}");
  }
  /**
   * @param {!Object} item
   * @return {?}
   */
  function text(item) {
    var self = void 0;
    var context = void 0;
    var s = void 0;
    var l = void 0;
    var modModuleList = void 0;
    return context = new Array({}), {
      c : function init() {
        /** @type {!Element} */
        self = document.createElement("div");
        check(context.$$.fragment);
        callback(self, "class", "cfai-widget__open-btn svelte-tte8gc");
        callback(self, "role", "button");
      },
      m : function init(y, r) {
        f(y, self, r);
        parse(context, self, null);
        /** @type {boolean} */
        s = true;
        if (!l) {
          /** @type {!Array} */
          modModuleList = [(self.addEventListener("click", item[0], context), function() {
            return self.removeEventListener("click", item[0], context);
          }), (self.addEventListener("keydown", item[1], context), function() {
            return self.removeEventListener("keydown", item[1], context);
          })];
          /** @type {boolean} */
          l = true;
        }
      },
      p : key,
      i : function parse(obj) {
        if (!s) {
          forEach(context.$$.fragment, obj);
          /** @type {boolean} */
          s = true;
        }
      },
      o : function parse(t) {
        cb(context.$$.fragment, t);
        /** @type {boolean} */
        s = false;
      },
      d : function transform(data) {
        if (data) {
          get(self);
        }
        set(context);
        /** @type {boolean} */
        l = false;
        each(modModuleList);
      }
    };
  }
  /**
   * @param {?} completed
   * @return {?}
   */
  function show(completed) {
    return [function(s2) {
      console.call(this, completed, s2);
    }, function(s2) {
      console.call(this, completed, s2);
    }];
  }
  /**
   * @param {?} url
   * @return {?}
   */
  function path(url) {
    var root = void 0;
    var region = void 0;
    var location = void 0;
    return {
      c : function render() {
        /** @type {!Element} */
        root = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        /** @type {!Element} */
        region = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        /** @type {!Element} */
        location = document.createElementNS("http://www.w3.org/2000/svg", "path");
        callback(region, "width", "36");
        callback(region, "height", "36");
        callback(region, "rx", "18");
        callback(region, "fill", "#EFF0F2");
        callback(location, "d", "M21.94 15L18 18.901L14.06 15L13 16.0495L18 21L23 16.0495L21.94 15Z");
        callback(location, "fill", "#152442");
        callback(root, "width", "36");
        callback(root, "height", "36");
        callback(root, "viewBox", "0 0 36 36");
        callback(root, "fill", "none");
        callback(root, "xmlns", "http://www.w3.org/2000/svg");
      },
      m : function reset(y, r) {
        f(y, root, r);
        $(root, region);
        $(root, location);
      },
      p : key,
      i : key,
      o : key,
      d : function drawBarChart(fontSize) {
        if (fontSize) {
          get(root);
        }
      }
    };
  }
  /**
   * @param {!Node} property
   * @return {undefined}
   */
  function relationshipHas(property) {
    apply(property, "svelte-dtuycc", ".cfai-widget__close-btn.svelte-dtuycc{background:#eff0f2;cursor:pointer;border-radius:20px;width:36px;height:36px}");
  }
  /**
   * @param {!Object} element
   * @return {?}
   */
  function constructor(element) {
    var self = void 0;
    var c = void 0;
    var s = void 0;
    var l = void 0;
    var modModuleList = void 0;
    return c = new Model({}), {
      c : function init() {
        /** @type {!Element} */
        self = document.createElement("div");
        check(c.$$.fragment);
        callback(self, "class", "cfai-widget__close-btn svelte-dtuycc");
        callback(self, "role", "button");
      },
      m : function load(n, r) {
        f(n, self, r);
        parse(c, self, null);
        /** @type {boolean} */
        s = true;
        if (!l) {
          /** @type {!Array} */
          modModuleList = [(self.addEventListener("click", element[0], c), function() {
            return self.removeEventListener("click", element[0], c);
          }), (self.addEventListener("keydown", element[1], c), function() {
            return self.removeEventListener("keydown", element[1], c);
          })];
          /** @type {boolean} */
          l = true;
        }
      },
      p : key,
      i : function parse(obj) {
        if (!s) {
          forEach(c.$$.fragment, obj);
          /** @type {boolean} */
          s = true;
        }
      },
      o : function parse(t) {
        cb(c.$$.fragment, t);
        /** @type {boolean} */
        s = false;
      },
      d : function emit(data) {
        if (data) {
          get(self);
        }
        set(c);
        /** @type {boolean} */
        l = false;
        each(modModuleList);
      }
    };
  }
  /**
   * @param {?} step
   * @return {?}
   */
  function iterator(step) {
    return [function(s2) {
      console.call(this, step, s2);
    }, function(s2) {
      console.call(this, step, s2);
    }];
  }
  /**
   * @param {!Node} value
   * @return {undefined}
   */
  function children(value) {
    apply(value, "svelte-1m8scsx", ".cfai-widget__loader.svelte-1m8scsx.svelte-1m8scsx{background:var(--mainColor);border-radius:16px;padding:4px 6px;display:flex;gap:8px;align-items:center;font-weight:500;font-size:15px;line-height:20px;color:var(--secondaryColor);position:absolute;left:50%;top:76px;transform:translateX(-50%)}@keyframes svelte-1m8scsx-circle{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.cfai-widget__loader.svelte-1m8scsx>svg.svelte-1m8scsx{animation:svelte-1m8scsx-circle 1.5s linear infinite}.cfai-widget__loader.svelte-1m8scsx>span.svelte-1m8scsx{padding-right:8px}");
  }
  /**
   * @param {string} text
   * @return {?}
   */
  function p(text) {
    var tag = void 0;
    var n = void 0;
    return {
      c : function set() {
        /** @type {!Element} */
        tag = document.createElement("span");
        /** @type {!Text} */
        n = document.createTextNode(text[0]);
        callback(tag, "class", "svelte-1m8scsx");
      },
      m : function handler(date, i) {
        f(date, tag, i);
        $(tag, n);
      },
      p : function removeChain(a, b) {
        if (1 & b) {
          b(n, a[0]);
        }
      },
      d : function isEqual(value2) {
        if (value2) {
          get(tag);
        }
      }
    };
  }
  /**
   * @param {string} data
   * @return {?}
   */
  function y(data) {
    var v = void 0;
    var root = void 0;
    var location = void 0;
    var t = void 0;
    var d = data[0] && p(data);
    return {
      c : function render() {
        /** @type {!Element} */
        v = document.createElement("div");
        /** @type {!Element} */
        root = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        /** @type {!Element} */
        location = document.createElementNS("http://www.w3.org/2000/svg", "path");
        /** @type {!Text} */
        t = document.createTextNode(" ");
        if (d) {
          d.c();
        }
        callback(location, "d", "M20.3333 12C20.3333 7.39765 16.6023 3.66669 12 3.66669C7.39759 3.66669 3.66663 7.39765 3.66663 12C3.66663 16.6024 7.39759 20.3334 12 20.3334C14.0926 20.3334 16.0052 19.562 17.4687 18.288");
        callback(location, "stroke", "var(--secondaryColor)");
        callback(location, "stroke-width", "3");
        callback(root, "width", "24");
        callback(root, "height", "24");
        callback(root, "viewBox", "0 0 24 24");
        callback(root, "fill", "none");
        callback(root, "xmlns", "http://www.w3.org/2000/svg");
        callback(root, "class", "svelte-1m8scsx");
        callback(v, "class", "cfai-widget__loader svelte-1m8scsx");
      },
      m : function p(y, r) {
        f(y, v, r);
        $(v, root);
        $(root, location);
        $(v, t);
        if (d) {
          d.m(v, null);
        }
      },
      p : function c(e, x) {
        var _clearRule$split2 = _slicedToArray(x, 1);
        var value = _clearRule$split2[0];
        if (e[0]) {
          if (d) {
            d.p(e, value);
          } else {
            d = p(e);
            d.c();
            d.m(v, null);
          }
        } else {
          if (d) {
            d.d(1);
            /** @type {null} */
            d = null;
          }
        }
      },
      i : key,
      o : key,
      d : function verify(data) {
        if (data) {
          get(v);
        }
        if (d) {
          d.d();
        }
      }
    };
  }
  /**
   * @param {?} sender
   * @param {!Object} e
   * @param {?} p
   * @return {?}
   */
  function func(sender, e, p) {
    var searchText = e.label;
    return sender.$$set = function(data) {
      if ("label" in data) {
        0();
      }
    }, [searchText];
  }
  /**
   * @param {?} leapYear
   * @return {?}
   */
  function length(leapYear) {
    var root = void 0;
    var is = void 0;
    var e = void 0;
    var location = void 0;
    var normalized = void 0;
    return {
      c : function render() {
        /** @type {!Element} */
        root = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        /** @type {!Element} */
        is = document.createElementNS("http://www.w3.org/2000/svg", "path");
        /** @type {!Element} */
        e = document.createElementNS("http://www.w3.org/2000/svg", "path");
        /** @type {!Element} */
        location = document.createElementNS("http://www.w3.org/2000/svg", "path");
        /** @type {!Element} */
        normalized = document.createElementNS("http://www.w3.org/2000/svg", "path");
        callback(is, "fill-rule", "evenodd");
        callback(is, "clip-rule", "evenodd");
        callback(is, "d", "M7.66153 14.6905C8.18052 14.4068 8.59717 13.9947 8.88407 13.4813C8.89746 13.4574 8.91057 13.4332 8.92338 13.4088L10.7249 14.8282C10.2497 15.5758 9.60014 16.1894 8.81904 16.6265C7.96422 17.1048 6.95191 17.3718 5.83832 17.3718H5.77001C4.65642 17.3718 3.64411 17.1048 2.78929 16.6265C1.93448 16.1481 1.23715 15.4584 0.753535 14.6129C0.269915 13.7675 0 12.7662 0 11.6648C0 10.5634 0.269915 9.56212 0.753535 8.71664C1.23715 7.87117 1.93448 7.18146 2.78929 6.70312C3.64411 6.22479 4.65642 5.95782 5.77001 5.95782H5.83832C6.95191 5.95782 7.96422 6.22479 8.81904 6.70312C9.49775 7.08292 10.0772 7.59596 10.5292 8.21443L8.74236 9.61833C8.46639 9.211 8.10058 8.8791 7.66153 8.63905C7.14253 8.35528 6.52119 8.19985 5.8249 8.19985H5.78343C5.08714 8.19985 4.4658 8.35528 3.9468 8.63905C3.42781 8.92281 3.01116 9.33491 2.72426 9.84823C2.43736 10.3616 2.28021 10.9761 2.28021 11.6648C2.28021 12.1051 2.34445 12.5151 2.46576 12.8877C2.67491 13.9196 2.24929 15.1297 2.06072 15.1297C2.06072 15.1297 3.31545 15.1297 5.8249 15.1297H6.18215C6.73476 15.0716 7.23303 14.9248 7.66153 14.6905ZM70.1079 12.2763C70.1729 12.7206 70.3095 13.1253 70.5085 13.4813C70.7954 13.9947 71.212 14.4068 71.731 14.6905C72.25 14.9743 72.8713 15.1297 73.5676 15.1297H73.9798C74.6761 15.1297 75.2974 14.9743 75.8164 14.6905C76.1911 14.4857 76.5124 14.214 76.7701 13.8856L78.2683 15.3674C77.8492 15.874 77.3386 16.2996 76.7544 16.6265C75.8996 17.1048 74.8873 17.3718 73.7737 17.3718H73.5676C72.454 17.3718 71.4417 17.1048 70.5869 16.6265C69.7321 16.1481 69.0348 15.4584 68.5511 14.6129C68.1586 13.9267 67.9069 13.1379 67.826 12.2763C67.8027 12.1417 67.7976 12.0057 67.7976 11.8686V11.2572C67.7976 8.33041 70.1964 5.95782 73.1555 5.95782C76.145 5.95782 78.5979 8.29881 78.7046 11.2538L78.7269 11.8721C78.7318 12.0079 78.7315 12.1427 78.7262 12.2763H70.1079ZM73.2585 8.19985C71.8936 8.19985 70.7286 9.04664 70.2713 10.238H76.2457C75.7884 9.04664 74.6234 8.19985 73.2585 8.19985ZM33.1776 6.16164H35.4443V17.1679H33.1776V16.3019C32.2548 16.9743 31.1145 17.3718 29.8804 17.3718C26.8075 17.3718 24.3165 14.9079 24.3165 11.8686V11.461C24.3165 8.42167 26.8075 5.95782 29.8804 5.95782C31.1145 5.95782 32.2548 6.35523 33.1776 7.02772V6.16164ZM33.1776 9.57137C32.9056 9.18544 32.5512 8.86981 32.1292 8.63905C31.6102 8.35528 30.9888 8.19985 30.2926 8.19985H30.0865C29.3902 8.19985 28.7689 8.35528 28.2499 8.63905C27.7309 8.92281 27.3142 9.33491 27.0273 9.84823C26.7404 10.3616 26.5833 10.9761 26.5833 11.6648C26.5833 12.3535 26.7404 12.968 27.0273 13.4813C27.3142 13.9947 27.7309 14.4068 28.2499 14.6905C28.7689 14.9743 29.3902 15.1297 30.0865 15.1297H30.2926C30.9888 15.1297 31.6102 14.9743 32.1292 14.6905C32.5512 14.4598 32.9056 14.1441 33.1776 13.7582V9.57137ZM20.6072 17.1679V11.5629C20.6072 10.9184 20.4466 10.3299 20.1601 9.83163C19.8736 9.3334 19.4611 8.92545 18.9574 8.64207C18.4536 8.35868 17.8586 8.19985 17.207 8.19985C16.5554 8.19985 15.9603 8.35868 15.4566 8.64207C15.0458 8.8732 14.6956 9.1872 14.425 9.56546V17.1679H12.1582V0.658495H14.425V6.92814C15.2984 6.31696 16.3648 5.95782 17.5161 5.95782C20.4752 5.95782 22.874 8.33041 22.874 11.2572V17.1679H20.6072ZM50.8997 5.44827V6.16164H54.403V8.19985H50.8997V17.1679H48.6329V8.19985H46.1601V6.16164H48.6329V5.14254C48.6329 2.44094 50.8472 0.250854 53.5787 0.250854C53.9744 0.250854 54.3593 0.296832 54.7282 0.383681L54.1483 2.52433C54.0636 2.51216 53.9767 2.50167 53.8878 2.49288C51.8254 2.28906 50.8997 3.81605 50.8997 5.44827ZM41.4204 11.9705C41.4204 13.6027 42.3461 15.1297 44.4085 14.9259C44.4974 14.9171 44.5843 14.9066 44.669 14.8945L45.2489 17.0351C44.88 17.122 44.4951 17.1679 44.0994 17.1679C41.3679 17.1679 39.1536 14.9779 39.1536 12.2763V8.19985H36.6808V6.16164H39.1536V2.28906H41.4204V6.16164H44.9236V8.19985H41.4204V11.9705ZM55.8455 12.4801V6.16164H58.1122V12.0724C58.1122 13.7609 58.8779 15.1297 61.2033 15.1297C62.6051 15.1297 63.4401 14.6323 63.8823 13.8674V6.16164H66.149V17.1679H63.8823V16.2989C63.0355 16.9702 61.9608 17.3718 60.7912 17.3718C58.0597 17.3718 55.8455 15.1817 55.8455 12.4801ZM80.5741 0.658495H82.8409V17.1679H80.5741V0.658495Z");
        callback(is, "fill", "#152442");
        callback(e, "d", "M87.7483 10.8698C87.7483 5.68871 91.9882 1.48865 97.2184 1.48865H108.53C113.76 1.48865 118 5.68871 118 10.8698C118 16.0508 113.76 20.2509 108.53 20.2509H97.2184C91.9882 20.2509 87.7483 16.0508 87.7483 10.8698Z");
        callback(e, "fill", "#6558F6");
        callback(location, "d", "M104.134 16.3421H101.532L100.526 12.7501H95.96L94.9541 16.3421H92.3518L95.5928 5.1369H100.877L104.134 16.3421ZM97.9077 5.77266L96.5826 10.5249H99.9034L98.5623 5.77266H97.9077Z");
        callback(location, "fill", "#FAFAFA");
        callback(normalized, "d", "M112.936 5.1369V7.37795H110.382V14.1011H112.936V16.3421H105.257V14.1011H107.811V7.37795H105.257V5.1369H112.936Z");
        callback(normalized, "fill", "#FAFAFA");
        callback(root, "width", "118");
        callback(root, "height", "21");
        callback(root, "viewBox", "0 0 118 21");
        callback(root, "fill", "none");
        callback(root, "xmlns", "http://www.w3.org/2000/svg");
      },
      m : function cb(y, r) {
        f(y, root, r);
        $(root, is);
        $(root, e);
        $(root, location);
        $(root, normalized);
      },
      p : key,
      i : key,
      o : key,
      d : function cb(value) {
        if (value) {
          get(root);
        }
      }
    };
  }
  /**
   * @param {?} _oncancel
   * @return {?}
   */
  function main(_oncancel) {
    var root = void 0;
    var location = void 0;
    return {
      c : function render() {
        /** @type {!Element} */
        root = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        /** @type {!Element} */
        location = document.createElementNS("http://www.w3.org/2000/svg", "path");
        callback(location, "fill-rule", "evenodd");
        callback(location, "clip-rule", "evenodd");
        callback(location, "d", "M9 15.75C13.5563 15.75 17.25 12.3921 17.25 8.25C17.25 4.10786 13.5563 0.75 9 0.75C4.44365 0.75 0.75 4.10786 0.75 8.25C0.75 10.8897 2.25012 13.2109 4.51764 14.5475V17.2498L7.55937 15.636C8.02718 15.7109 8.50857 15.75 9 15.75ZM4.95 9.83738C5.61274 9.83738 6.15 9.30012 6.15 8.63738C6.15 7.97464 5.61274 7.43738 4.95 7.43738C4.28726 7.43738 3.75 7.97464 3.75 8.63738C3.75 9.30012 4.28726 9.83738 4.95 9.83738ZM10.275 8.63738C10.275 9.30012 9.73774 9.83738 9.075 9.83738C8.41226 9.83738 7.875 9.30012 7.875 8.63738C7.875 7.97464 8.41226 7.43738 9.075 7.43738C9.73774 7.43738 10.275 7.97464 10.275 8.63738ZM13.2 9.83738C13.8627 9.83738 14.4 9.30012 14.4 8.63738C14.4 7.97464 13.8627 7.43738 13.2 7.43738C12.5373 7.43738 12 7.97464 12 8.63738C12 9.30012 12.5373 9.83738 13.2 9.83738Z");
        callback(location, "fill", "var(--secondaryColor)");
        callback(root, "width", "18");
        callback(root, "height", "18");
        callback(root, "viewBox", "0 0 18 18");
        callback(root, "fill", "none");
        callback(root, "xmlns", "http://www.w3.org/2000/svg");
      },
      m : function reset(y, r) {
        f(y, root, r);
        $(root, location);
      },
      p : key,
      i : key,
      o : key,
      d : function r(value) {
        if (value) {
          get(root);
        }
      }
    };
  }
  /**
   * @param {!Node} config
   * @return {undefined}
   */
  function row(config) {
    apply(config, "svelte-1kcuuiv", ".cfai-widget__avatar.svelte-1kcuuiv{border-radius:50%;overflow:hidden}");
  }
  /**
   * @param {!Array} object
   * @return {?}
   */
  function app(object) {
    var root = void 0;
    var id = void 0;
    var location = void 0;
    return {
      c : function render() {
        /** @type {!Element} */
        root = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        /** @type {!Element} */
        id = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        /** @type {!Element} */
        location = document.createElementNS("http://www.w3.org/2000/svg", "path");
        callback(id, "cx", "20");
        callback(id, "cy", "20");
        callback(id, "r", "20");
        callback(id, "fill", "var(--mainColor)");
        callback(location, "fill-rule", "evenodd");
        callback(location, "clip-rule", "evenodd");
        callback(location, "d", "M24.3767 26.2131C25.4353 25.6304 26.2851 24.7842 26.8703 23.7301C26.8976 23.681 26.9243 23.6313 26.9505 23.5812L30.625 26.4957C29.6557 28.0309 28.3308 29.2908 26.7376 30.1883C24.9941 31.1706 22.9294 31.7188 20.6581 31.7188H20.5187C18.2474 31.7188 16.1827 31.1706 14.4391 30.1883C12.6956 29.2061 11.2733 27.7899 10.2869 26.0538C9.30053 24.3177 8.75 22.2617 8.75 20C8.75 17.7383 9.30053 15.6823 10.2869 13.9462C11.2733 12.2101 12.6956 10.7939 14.4391 9.81166C16.1827 8.82944 18.2474 8.28125 20.5187 8.28125H20.6581C22.9294 8.28125 24.9941 8.82944 26.7376 9.81166C28.122 10.5915 29.3038 11.645 30.2257 12.915L26.5813 15.7978C26.0184 14.9614 25.2723 14.2798 24.3767 13.7869C23.3182 13.2042 22.0509 12.885 20.6307 12.885H20.5461C19.1259 12.885 17.8586 13.2042 16.8001 13.7869C15.7415 14.3696 14.8917 15.2158 14.3065 16.2699C13.7213 17.3239 13.4008 18.5859 13.4008 20C13.4008 20.9041 13.5318 21.746 13.7793 22.5112C14.2059 24.63 13.3377 27.115 12.9531 27.115C12.9531 27.115 15.5123 27.115 20.6307 27.115H21.3594C22.4865 26.9956 23.5028 26.6942 24.3767 26.2131Z");
        callback(location, "fill", "var(--secondaryColor)");
        callback(root, "width", object[2]);
        callback(root, "height", object[3]);
        callback(root, "viewBox", "0 0 40 40");
        callback(root, "fill", "none");
        callback(root, "xmlns", "http://www.w3.org/2000/svg");
      },
      m : function m(t, d) {
        f(t, root, d);
        $(root, id);
        $(root, location);
      },
      p : function func(obj, width) {
        if (4 & width) {
          callback(root, "width", obj[2]);
        }
        if (8 & width) {
          callback(root, "height", obj[3]);
        }
      },
      d : function m(data) {
        if (data) {
          get(root);
        }
      }
    };
  }
  /**
   * @param {!Array} object
   * @return {?}
   */
  function setToSystem(object) {
    var data = void 0;
    var val = void 0;
    var state = void 0;
    return {
      c : function set() {
        /** @type {!Element} */
        data = document.createElement("img");
        callback(data, "width", object[2]);
        callback(data, "height", object[3]);
        callback(data, "alt", object[0]);
        if (!(item || (item = document.createElement("a")), item.href = val = object[1], data.src === item.href)) {
          callback(data, "src", val);
        }
        callback(data, "style", state = "min-width:" + object[2] + "px;");
        callback(data, "class", "cfai-widget__avatar svelte-1kcuuiv");
      },
      m : function set(y, r) {
        f(y, data, r);
      },
      p : function set(obj, strategy) {
        if (4 & strategy) {
          callback(data, "width", obj[2]);
        }
        if (8 & strategy) {
          callback(data, "height", obj[3]);
        }
        if (1 & strategy) {
          callback(data, "alt", obj[0]);
        }
        if (2 & strategy && !(item || (item = document.createElement("a")), item.href = val = obj[1], data.src === item.href)) {
          callback(data, "src", val);
        }
        if (4 & strategy && state !== (state = "min-width:" + obj[2] + "px;")) {
          callback(data, "style", state);
        }
      },
      d : function set(value2) {
        if (value2) {
          get(data);
        }
      }
    };
  }
  /**
   * @param {?} app
   * @return {?}
   */
  function bind(app) {
    /**
     * @param {!Object} componentDef
     * @param {?} handlerMethodName
     * @return {?}
     */
    function attachBubblingEvent(componentDef, handlerMethodName) {
      return componentDef[1] ? setToSystem : app;
    }
    var result = void 0;
    /** @type {!Object} */
    var create = Object.create(null);
    var a = create(app);
    return {
      c : function d() {
        a.c();
        /** @type {!Text} */
        result = document.createTextNode("");
      },
      m : function r(v, n) {
        a.m(v, n);
        f(v, result, n);
      },
      p : function c(x, v) {
        var _clearRule$split2 = _slicedToArray(v, 1);
        var value = _clearRule$split2[0];
        if (create === (create = Object.create(null)) && a) {
          a.p(x, value);
        } else {
          a.d(1);
          a = create(x);
          if (a) {
            a.c();
            a.m(result.parentNode, result);
          }
        }
      },
      i : key,
      o : key,
      d : function register(value) {
        a.d(value);
        if (value) {
          get(result);
        }
      }
    };
  }
  /**
   * @param {?} succeeded
   * @param {!Object} data
   * @param {?} callback
   * @return {?}
   */
  function handleResult(succeeded, data, callback) {
    var name = data.company;
    var photos = data.photo;
    var masterWidth = data.width;
    var oldInnerHeight = data.height;
    return succeeded.$$set = function(data) {
      if ("company" in data) {
        0();
      }
      if ("photo" in data) {
        1();
      }
      if ("width" in data) {
        2();
      }
      if ("height" in data) {
        3();
      }
    }, [name, photos, masterWidth, oldInnerHeight];
  }
  /**
   * @param {!Node} array
   * @return {undefined}
   */
  function any(array) {
    apply(array, "svelte-1hgujw0", ".cfai-widget__create.svelte-1hgujw0.svelte-1hgujw0{flex-grow:1;display:flex;flex-direction:column;padding:20px}.cfai-widget__create-logo.svelte-1hgujw0.svelte-1hgujw0{display:flex;align-items:center;gap:6px;font-weight:500;font-size:18px;line-height:24px}.cfai-widget__create-content.svelte-1hgujw0.svelte-1hgujw0{flex-grow:1;display:flex;justify-content:center;align-items:center;font-weight:700;font-size:24px;line-height:32px;text-align:center;letter-spacing:0.3px}.cfai-widget__create-content.svelte-1hgujw0>div.svelte-1hgujw0{display:flex;flex-direction:column;gap:12px;align-items:center}.cfai-widget__create-tos.svelte-1hgujw0.svelte-1hgujw0{margin-top:16px;font-size:12px;line-height:16px;text-align:center;color:#5b677d}.cfai-widget__create-tos.svelte-1hgujw0>a.svelte-1hgujw0{text-decoration:none;color:#208ef0}.cfai-widget__create-button.svelte-1hgujw0.svelte-1hgujw0{border:none;display:flex;justify-content:center;align-items:center;padding:12px 20px;cursor:pointer;gap:6px;width:100%;background:var(--mainColor);border-radius:4px;font-weight:500;font-size:15px;line-height:20px;color:var(--secondaryColor);max-width:100%}.cfai-widget__create-button.svelte-1hgujw0.svelte-1hgujw0:hover{filter:brightness(90%)}");
  }
  /**
   * @param {!Array} t
   * @return {?}
   */
  function test(t) {
    var tag = void 0;
    var i = void 0;
    var opts = void 0;
    var $dataPreviewPanel = void 0;
    var endColorCoords = void 0;
    var w = void 0;
    var o = void 0;
    var scriptAttrs = void 0;
    var d = void 0;
    var c = void 0;
    var context = void 0;
    var r = void 0;
    var day = void 0;
    var master_settings_element = void 0;
    var j = void 0;
    var $filter_title = void 0;
    var idUrl = void 0;
    var lightboxContent = void 0;
    var k = void 0;
    var n = void 0;
    var data = void 0;
    var $filter_question = void 0;
    var user_link = void 0;
    var $filter_tag = void 0;
    var A = void 0;
    var controls = void 0;
    var skeletonId = void 0;
    var second = void 0;
    var agents_html = void 0;
    var siblings = void 0;
    var bulk_html = void 0;
    var link_dropdown_html = void 0;
    var whapp_list_html = void 0;
    var p = void 0;
    var whapp_dropdown_html = void 0;
    var ele = void 0;
    var $modalStructure = void 0;
    var innerAnchor = void 0;
    var tl_tb_body = void 0;
    var flags = void 0;
    var it = void 0;
    var _typeof = void 0;
    var temp = t[3]("powered-by") + "";
    var value = t[3]("chat-with") + "";
    var template = t[3]("you-agree") + "";
    var b = t[3]("cf-ai") + "";
    var val = t[3]("and") + "";
    return o = new C({}), context = new Buffer({
      props : {
        width : 60,
        height : 60,
        company : t[1],
        photo : t[2]
      }
    }), data = new Float32Array({}), {
      c : function init() {
        /** @type {!Element} */
        tag = document.createElement("div");
        /** @type {!Element} */
        i = document.createElement("div");
        /** @type {!Text} */
        opts = document.createTextNode(temp);
        /** @type {!Text} */
        $dataPreviewPanel = document.createTextNode(" ");
        /** @type {!Text} */
        endColorCoords = document.createTextNode(" ");
        /** @type {!Text} */
        w = document.createTextNode(" ");
        check(o.$$.fragment);
        /** @type {!Text} */
        scriptAttrs = document.createTextNode(" ");
        /** @type {!Element} */
        d = document.createElement("div");
        /** @type {!Element} */
        c = document.createElement("div");
        check(context.$$.fragment);
        /** @type {!Text} */
        r = document.createTextNode(" ");
        /** @type {!Text} */
        day = document.createTextNode(value);
        /** @type {!Text} */
        master_settings_element = document.createTextNode(" ");
        /** @type {!Text} */
        j = document.createTextNode(" ");
        /** @type {!Text} */
        $filter_title = document.createTextNode(" ");
        /** @type {!Text} */
        idUrl = document.createTextNode(t[1]);
        /** @type {!Text} */
        lightboxContent = document.createTextNode(" ");
        /** @type {!Element} */
        k = document.createElement("div");
        /** @type {!Element} */
        n = document.createElement("button");
        check(data.$$.fragment);
        /** @type {!Text} */
        $filter_question = document.createTextNode(" ");
        /** @type {!Element} */
        user_link = document.createElement("span");
        user_link.textContent = "" + t[3]("start-chat");
        /** @type {!Text} */
        $filter_tag = document.createTextNode(" ");
        /** @type {!Element} */
        A = document.createElement("div");
        /** @type {!Text} */
        controls = document.createTextNode(template);
        /** @type {!Text} */
        skeletonId = document.createTextNode(" ");
        /** @type {!Element} */
        second = document.createElement("br");
        /** @type {!Text} */
        agents_html = document.createTextNode(" ");
        /** @type {!Text} */
        siblings = document.createTextNode(b);
        /** @type {!Text} */
        bulk_html = document.createTextNode(" ");
        /** @type {!Text} */
        link_dropdown_html = document.createTextNode(" ");
        /** @type {!Text} */
        whapp_list_html = document.createTextNode(" ");
        /** @type {!Element} */
        p = document.createElement("a");
        p.textContent = "" + t[3]("terms");
        /** @type {!Text} */
        whapp_dropdown_html = document.createTextNode(" ");
        /** @type {!Text} */
        ele = document.createTextNode(val);
        /** @type {!Text} */
        $modalStructure = document.createTextNode(" ");
        /** @type {!Element} */
        innerAnchor = document.createElement("a");
        innerAnchor.textContent = "" + t[3]("policy");
        /** @type {!Text} */
        tl_tb_body = document.createTextNode(".");
        callback(i, "class", "cfai-widget__create-logo svelte-1hgujw0");
        callback(c, "class", "svelte-1hgujw0");
        callback(d, "class", "cfai-widget__create-content svelte-1hgujw0");
        callback(n, "class", "cfai-widget__create-button svelte-1hgujw0");
        callback(p, "href", "https://app.chatfuel.com/docs/TermsOfUse.pdf");
        callback(p, "target", "_blank");
        callback(p, "rel", "noreferrer");
        callback(p, "class", "svelte-1hgujw0");
        callback(innerAnchor, "target", "_blank");
        callback(innerAnchor, "rel", "noreferrer");
        callback(innerAnchor, "href", "https://chatfuel.com/files/PrivacyPolicy.pdf");
        callback(innerAnchor, "class", "svelte-1hgujw0");
        callback(A, "class", "cfai-widget__create-tos svelte-1hgujw0");
        callback(tag, "class", "cfai-widget__create svelte-1hgujw0");
      },
      m : function load(dir, x) {
        f(dir, tag, x);
        $(tag, i);
        $(i, opts);
        $(i, $dataPreviewPanel);
        $(i, endColorCoords);
        $(i, w);
        parse(o, i, null);
        $(tag, scriptAttrs);
        $(tag, d);
        $(d, c);
        parse(context, c, null);
        $(c, r);
        $(c, day);
        $(c, master_settings_element);
        $(c, j);
        $(c, $filter_title);
        $(c, idUrl);
        $(tag, lightboxContent);
        $(tag, k);
        $(k, n);
        parse(data, n, null);
        $(n, $filter_question);
        $(n, user_link);
        $(k, $filter_tag);
        $(k, A);
        $(A, controls);
        $(A, skeletonId);
        $(A, second);
        $(A, agents_html);
        $(A, siblings);
        $(A, bulk_html);
        $(A, link_dropdown_html);
        $(A, whapp_list_html);
        $(A, p);
        $(A, whapp_dropdown_html);
        $(A, ele);
        $(A, $modalStructure);
        $(A, innerAnchor);
        $(A, tl_tb_body);
        /** @type {boolean} */
        flags = true;
        if (!it) {
          /** @type {function(): ?} */
          _typeof = (n.addEventListener("click", function() {
            if ("function" == typeof t[0]) {
              t[0].apply(this, arguments);
            }
          }, opts), function() {
            return n.removeEventListener("click", function() {
              if ("function" == typeof t[0]) {
                t[0].apply(this, arguments);
              }
            }, opts);
          });
          /** @type {boolean} */
          it = true;
        }
      },
      p : function init(e, node) {
        var classes = _slicedToArray(node, 1);
        var flag = classes[0];
        /** @type {string} */
        t = e;
        var o = {};
        if (2 & flag) {
          o.company = t[1];
        }
        if (4 & flag) {
          o.photo = t[2];
        }
        context.$set(o);
        if (!flags || 2 & flag) {
          b(idUrl, t[1]);
        }
      },
      i : function parse(obj) {
        if (!flags) {
          forEach(o.$$.fragment, obj);
          forEach(context.$$.fragment, obj);
          forEach(data.$$.fragment, obj);
          /** @type {boolean} */
          flags = true;
        }
      },
      o : function parse(t) {
        cb(o.$$.fragment, t);
        cb(context.$$.fragment, t);
        cb(data.$$.fragment, t);
        /** @type {boolean} */
        flags = false;
      },
      d : function o(input) {
        if (input) {
          get(tag);
        }
        set(o);
        set(context);
        set(data);
        /** @type {boolean} */
        it = false;
        _typeof();
      }
    };
  }
  /**
   * @param {?} connectionProfile
   * @param {!Object} data
   * @param {?} linkedEntities
   * @return {?}
   */
  function load(connectionProfile, data, linkedEntities) {
    var currentAnime = data.onCreateDialog;
    var name = data.company;
    var photos = data.photo;
    var body = jQuery();
    var transform = body.translate;
    return connectionProfile.$$set = function(value_in_code) {
      if ("onCreateDialog" in value_in_code) {
        0();
      }
      if ("company" in value_in_code) {
        1();
      }
      if ("photo" in value_in_code) {
        2();
      }
    }, [currentAnime, name, photos, transform];
  }
  /**
   * @param {?} planned
   * @return {?}
   */
  function done(planned) {
    var root = void 0;
    var location = void 0;
    return {
      c : function render() {
        /** @type {!Element} */
        root = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        /** @type {!Element} */
        location = document.createElementNS("http://www.w3.org/2000/svg", "path");
        callback(location, "d", "M12.0193 11.7199C11.8687 10.6732 12.6215 10.2246 13.5249 10.6732L25.4191 16.2057C27.527 17.2524 27.527 18.7476 25.4191 19.7943L13.5249 25.3268C12.6215 25.7754 11.8687 25.3268 12.0193 24.2801L12.3204 20.841C12.471 20.0934 13.0732 19.3457 13.826 19.1962L20.3001 18.1495C21.0529 18 21.0529 17.8505 20.3001 17.7009L13.9766 16.8038C13.2238 16.6543 12.471 15.9066 12.471 15.159L12.0193 11.7199Z");
        callback(location, "fill", "currentColor");
        callback(root, "width", "36");
        callback(root, "height", "36");
        callback(root, "viewBox", "0 0 36 36");
        callback(root, "fill", "none");
        callback(root, "xmlns", "http://www.w3.org/2000/svg");
      },
      m : function pick(y, i) {
        f(y, root, i);
        $(root, location);
      },
      p : key,
      i : key,
      o : key,
      d : function copy(add) {
        if (add) {
          get(root);
        }
      }
    };
  }
  /**
   * @param {!Node} add
   * @return {undefined}
   */
  function save(add) {
    apply(add, "svelte-xdn1rk", ".cfai-widget__message.svelte-xdn1rk{padding:12px;width:100%}.cfai-widget__dialog-in.svelte-xdn1rk{background:#eff0f2;border-radius:18px 18px 18px 0px;color:#152442;margin-right:10%}.cfai-widget__dialog-out.svelte-xdn1rk{background:var(--mainColor);border-radius:18px 18px 0px 18px;color:var(--secondaryColor);margin-left:10%}.cfai-widget__message-processing.svelte-xdn1rk{filter:grayscale(15%) brightness(80%)}.cfai-widget__message-box.svelte-xdn1rk{display:flex;align-items:end}.cfai-widget__message-avatar.svelte-xdn1rk{margin-right:4px}");
  }
  /**
   * @param {string} dest
   * @return {?}
   */
  function push(dest) {
    var x = void 0;
    var context = void 0;
    var n = void 0;
    return context = new Buffer({
      props : {
        width : 24,
        height : 24,
        company : dest[2],
        photo : dest[3]
      }
    }), {
      c : function init() {
        /** @type {!Element} */
        x = document.createElement("div");
        check(context.$$.fragment);
        callback(x, "class", "cfai-widget__message-avatar svelte-xdn1rk");
      },
      m : function init(y, r) {
        f(y, x, r);
        parse(context, x, null);
        /** @type {boolean} */
        n = true;
      },
      p : function init(data, element) {
        var model = {};
        if (4 & element) {
          model.company = data[2];
        }
        if (8 & element) {
          model.photo = data[3];
        }
        context.$set(model);
      },
      i : function(_diveTo) {
        /**
         * @param {?} _x5
         * @return {?}
         */
        function diveTo(_x5) {
          return _diveTo.apply(this, arguments);
        }
        /**
         * @return {string}
         */
        diveTo.toString = function() {
          return _diveTo.toString();
        };
        return diveTo;
      }(function(f) {
        if (!n) {
          forEach(context.$$.fragment, f);
          /** @type {boolean} */
          n = true;
        }
      }),
      o : function init(obj) {
        cb(context.$$.fragment, obj);
        /** @type {boolean} */
        n = false;
      },
      d : function setup(id) {
        if (id) {
          get(x);
        }
        set(context);
      }
    };
  }
  /**
   * @param {string} args
   * @return {?}
   */
  function wrap(args) {
    var v = void 0;
    var result = void 0;
    var source = void 0;
    var o = void 0;
    var t = void 0;
    var c = !args[0] && push(args);
    return {
      c : function render() {
        /** @type {!Element} */
        v = document.createElement("div");
        if (c) {
          c.c();
        }
        /** @type {!Text} */
        result = document.createTextNode(" ");
        /** @type {!Element} */
        source = document.createElement("div");
        /** @type {!Text} */
        o = document.createTextNode(args[1]);
        callback(source, "class", "cfai-widget__message svelte-xdn1rk");
        update(source, "cfai-widget__dialog-in", !args[0]);
        update(source, "cfai-widget__dialog-out", args[0]);
        update(source, "cfai-widget__message-processing", args[4]);
        callback(v, "class", "cfai-widget__message-box svelte-xdn1rk");
      },
      m : function g(a, n) {
        f(a, v, n);
        if (c) {
          c.m(v, null);
        }
        $(v, result);
        $(v, source);
        $(source, o);
        /** @type {boolean} */
        t = true;
      },
      p : function render(x, v) {
        var _clearRule$split2 = _slicedToArray(v, 1);
        var value = _clearRule$split2[0];
        if (x[0]) {
          if (c) {
            getNext();
            cb(c, 1, 1, function() {
              /** @type {null} */
              c = null;
            });
            max();
          }
        } else {
          if (c) {
            c.p(x, value);
            if (1 & value) {
              forEach(c, 1);
            }
          } else {
            c = push(x);
            c.c();
            forEach(c, 1);
            c.m(v, result);
          }
        }
        if (!t || 2 & value) {
          b(o, x[1]);
        }
        if (!t || 1 & value) {
          update(source, "cfai-widget__dialog-in", !x[0]);
        }
        if (!t || 1 & value) {
          update(source, "cfai-widget__dialog-out", x[0]);
        }
        if (!t || 16 & value) {
          update(source, "cfai-widget__message-processing", x[4]);
        }
      },
      i : function g(var_args) {
        if (!t) {
          forEach(c);
          /** @type {boolean} */
          t = true;
        }
      },
      o : function bind(var_args) {
        cb(c);
        /** @type {boolean} */
        t = false;
      },
      d : function verify(data) {
        if (data) {
          get(v);
        }
        if (c) {
          c.d();
        }
      }
    };
  }
  /**
   * @param {?} provider
   * @param {!Object} result
   * @param {?} dom
   * @return {?}
   */
  function loop(provider, result, dom) {
    var courseSections = result.outcoming;
    var sanitizedText = result.text;
    var name = result.company;
    var k = result.photo;
    var p = result.processing;
    var blockTag = p === undefined ? false : p;
    return provider.$$set = function(res) {
      if ("outcoming" in res) {
        0();
      }
      if ("text" in res) {
        1();
      }
      if ("company" in res) {
        2();
      }
      if ("photo" in res) {
        3();
      }
      if ("processing" in res) {
        4();
      }
    }, [courseSections, sanitizedText, name, k, blockTag];
  }
  /**
   * @param {!Node} children
   * @return {undefined}
   */
  function container(children) {
    apply(children, "svelte-18zmxtj", ".cfai-widget__dialog.svelte-18zmxtj.svelte-18zmxtj{display:flex;flex-direction:column;flex-grow:1;max-height:100%;overflow:hidden}.cfai-widget__dialog-head.svelte-18zmxtj.svelte-18zmxtj{padding:0 12px;display:flex;gap:8px;align-items:center;box-shadow:0px 4px 12px rgba(12, 23, 45, 0.1);font-weight:700;font-size:18px;line-height:24px;letter-spacing:0.2px;min-height:64px;height:64px;overflow:hidden}.cfai-widget__dialog-head--small.svelte-18zmxtj.svelte-18zmxtj{font-size:15px;line-height:20px}.cfai-widget__dialog-head.svelte-18zmxtj>div.svelte-18zmxtj{overflow:hidden;text-overflow:ellipsis;max-height:48px;max-width:72%}.cfai-widget__dialog-head--small.svelte-18zmxtj>div.svelte-18zmxtj{max-height:40px}.cfai-widget__dialog-messages.svelte-18zmxtj.svelte-18zmxtj{flex-grow:1;padding:12px;font-weight:400;font-size:15px;line-height:20px;display:flex;flex-direction:column;gap:12px;max-height:100%;overflow:auto}.cfai-widget__dialog-input.svelte-18zmxtj.svelte-18zmxtj{display:flex;box-shadow:0px -4px 12px rgba(12, 23, 45, 0.1)}.cfai-widget__dialog-input-box.svelte-18zmxtj.svelte-18zmxtj{display:grid;flex-grow:1}.cfai-widget__dialog-input.svelte-18zmxtj textarea.svelte-18zmxtj,.cfai-widget__dialog-input-box.svelte-18zmxtj.svelte-18zmxtj::after{padding:16px;border:none;outline:none;resize:none;grid-area:1 / 1 / 2 / 2}.cfai-widget__dialog-input-box.svelte-18zmxtj.svelte-18zmxtj::after{content:attr(data-replicatedValue) ' ';white-space:pre-wrap;visibility:hidden;max-height:80px}.cfai-widget__dialog-input.svelte-18zmxtj textarea.svelte-18zmxtj,.cfai-widget__dialog-input.svelte-18zmxtj textarea.svelte-18zmxtj::placeholder{font-weight:500;font-size:15px;line-height:20px;font-family:'Inter', 'sans-serif'}.cfai-widget__dialog-input.svelte-18zmxtj textarea.svelte-18zmxtj::placeholder{color:#8a92a0}.cfai-widget__dialog-button-box.svelte-18zmxtj.svelte-18zmxtj{display:flex;align-items:end}.cfai-widget__dialog-input.svelte-18zmxtj button.svelte-18zmxtj{border:none;outline:none;resize:none;background:#ffffff;color:var(--mainColor);cursor:pointer;height:52px}.cfai-widget__dialog-input.svelte-18zmxtj button.svelte-18zmxtj:disabled{filter:grayscale(30%);pointer-events:none}");
  }
  /**
   * @param {string} instance
   * @param {!NodeList} data
   * @param {number} id
   * @return {?}
   */
  function find(instance, data, id) {
    var FONT = instance.slice();
    return FONT[17] = data[id], FONT;
  }
  /**
   * @param {!Array} sources
   * @return {?}
   */
  function link(sources) {
    var data = void 0;
    var i = void 0;
    return data = new Tree({
      props : {
        company : sources[5],
        photo : sources[6],
        outcoming : "user" === sources[17].author,
        text : sources[17].text
      }
    }), {
      c : function init() {
        check(data.$$.fragment);
      },
      m : function validateDateMath(input, type) {
        parse(data, input, type);
        /** @type {boolean} */
        i = true;
      },
      p : function init(value, element) {
        var self = {};
        if (32 & element) {
          self.company = value[5];
        }
        if (64 & element) {
          self.photo = value[6];
        }
        if (1024 & element) {
          /** @type {boolean} */
          self.outcoming = "user" === value[17].author;
        }
        if (1024 & element) {
          self.text = value[17].text;
        }
        data.$set(self);
      },
      i : function(_diveTo) {
        /**
         * @param {?} allowFailure
         * @return {?}
         */
        function stop(allowFailure) {
          return _diveTo.apply(this, arguments);
        }
        /**
         * @return {string}
         */
        stop.toString = function() {
          return _diveTo.toString();
        };
        return stop;
      }(function(f) {
        if (!i) {
          forEach(data.$$.fragment, f);
          /** @type {boolean} */
          i = true;
        }
      }),
      o : function parse(t) {
        cb(data.$$.fragment, t);
        /** @type {boolean} */
        i = false;
      },
      d : function fn(b) {
        set(data, b);
      }
    };
  }
  /**
   * @param {string} o
   * @return {?}
   */
  function create(o) {
    var data = void 0;
    var result = void 0;
    return data = new Tree({
      props : {
        company : o[5],
        photo : o[6],
        outcoming : true,
        processing : true,
        text : o[4]
      }
    }), {
      c : function init() {
        check(data.$$.fragment);
      },
      m : function onBasketUpdateFn(x, r) {
        parse(data, x, r);
        /** @type {boolean} */
        result = true;
      },
      p : function update(obj, variable) {
        var result = {};
        if (32 & variable) {
          result.company = obj[5];
        }
        if (64 & variable) {
          result.photo = obj[6];
        }
        if (16 & variable) {
          result.text = obj[4];
        }
        data.$set(result);
      },
      i : function(_diveTo) {
        /**
         * @param {?} options
         * @return {?}
         */
        function validator(options) {
          return _diveTo.apply(this, arguments);
        }
        /**
         * @return {string}
         */
        validator.toString = function() {
          return _diveTo.toString();
        };
        return validator;
      }(function(f) {
        if (!result) {
          forEach(data.$$.fragment, f);
          /** @type {boolean} */
          result = true;
        }
      }),
      o : function parse(t) {
        cb(data.$$.fragment, t);
        /** @type {boolean} */
        result = false;
      },
      d : function emit(force) {
        set(data, force);
      }
    };
  }
  /**
   * @param {string} obj
   * @return {?}
   */
  function exports(obj) {
    var tag = void 0;
    var source = void 0;
    var context = void 0;
    var $dataPreviewPanel = void 0;
    var elem = void 0;
    var c = void 0;
    var idUrl = void 0;
    var d = void 0;
    var value = void 0;
    var n = void 0;
    var result = void 0;
    var prop = void 0;
    var endColorCoords = void 0;
    var M = void 0;
    var H = void 0;
    var element = void 0;
    var $filter_title = void 0;
    var E = void 0;
    var input = void 0;
    var event = void 0;
    var disabled = void 0;
    var A = void 0;
    var S = void 0;
    var modModuleList = void 0;
    context = new Buffer({
      props : {
        width : 40,
        height : 40,
        company : obj[5],
        photo : obj[6]
      }
    });
    var val = obj[10];
    /** @type {!Array} */
    var results = [];
    /** @type {number} */
    var i = 0;
    for (; i < val.length; i = i + 1) {
      results[i] = link(find(obj, val, i));
    }
    /**
     * @param {!Object} i
     * @return {?}
     */
    var renderWaveForm = function f(i) {
      return cb(results[i], 1, 1, function() {
        /** @type {null} */
        results[i] = null;
      });
    };
    var state = obj[4] && create(obj);
    return event = new T({}), {
      c : function init() {
        /** @type {!Element} */
        tag = document.createElement("div");
        /** @type {!Element} */
        source = document.createElement("div");
        check(context.$$.fragment);
        /** @type {!Text} */
        $dataPreviewPanel = document.createTextNode(" ");
        /** @type {!Element} */
        elem = document.createElement("div");
        /** @type {!Element} */
        c = document.createElement("div");
        /** @type {!Text} */
        idUrl = document.createTextNode(obj[8]);
        /** @type {!Text} */
        d = document.createTextNode(" ");
        /** @type {!Element} */
        value = document.createElement("div");
        /** @type {number} */
        var i = 0;
        for (; i < results.length; i = i + 1) {
          results[i].c();
        }
        /** @type {!Text} */
        n = document.createTextNode(" ");
        if (state) {
          state.c();
        }
        /** @type {!Text} */
        result = document.createTextNode(" ");
        /** @type {!Element} */
        prop = document.createElement("div");
        /** @type {!Text} */
        endColorCoords = document.createTextNode(" ");
        /** @type {!Element} */
        M = document.createElement("div");
        /** @type {!Element} */
        H = document.createElement("div");
        /** @type {!Element} */
        element = document.createElement("textarea");
        /** @type {!Text} */
        $filter_title = document.createTextNode(" ");
        /** @type {!Element} */
        E = document.createElement("div");
        /** @type {!Element} */
        input = document.createElement("button");
        check(event.$$.fragment);
        callback(elem, "class", "svelte-18zmxtj");
        callback(source, "class", "cfai-widget__dialog-head svelte-18zmxtj");
        update(source, "cfai-widget__dialog-head--small", obj[8] !== obj[5]);
        callback(value, "class", "cfai-widget__dialog-messages svelte-18zmxtj");
        /** @type {boolean} */
        element.autofocus = true;
        callback(element, "rows", "1");
        callback(element, "placeholder", obj[12]("type"));
        callback(element, "class", "svelte-18zmxtj");
        callback(H, "class", "cfai-widget__dialog-input-box svelte-18zmxtj");
        callback(H, "data-replicatedvalue", obj[9]);
        /** @type {boolean} */
        input.disabled = disabled = !obj[9].trim().length;
        callback(input, "class", "svelte-18zmxtj");
        callback(E, "class", "cfai-widget__dialog-button-box svelte-18zmxtj");
        callback(M, "class", "cfai-widget__dialog-input svelte-18zmxtj");
        callback(tag, "class", "cfai-widget__dialog svelte-18zmxtj");
      },
      m : function f(acc, v) {
        f(acc, tag, v);
        $(tag, source);
        parse(context, source, null);
        $(source, $dataPreviewPanel);
        $(source, elem);
        $(elem, c);
        $(c, idUrl);
        obj[14](elem);
        $(tag, d);
        $(tag, value);
        /** @type {number} */
        var i = 0;
        for (; i < results.length; i = i + 1) {
          results[i].m(value, null);
        }
        $(value, n);
        if (state) {
          state.m(value, null);
        }
        $(value, result);
        $(value, prop);
        obj[15](prop);
        $(tag, endColorCoords);
        $(tag, M);
        $(M, H);
        $(H, element);
        print(element, obj[9]);
        $(M, $filter_title);
        $(M, E);
        $(E, input);
        parse(event, input, null);
        /** @type {boolean} */
        A = true;
        element.focus();
        if (!S) {
          /** @type {!Array} */
          modModuleList = [(element.addEventListener("input", obj[16], context), function() {
            return element.removeEventListener("input", obj[16], context);
          }), (element.addEventListener("keydown", obj[13], context), function() {
            return element.removeEventListener("keydown", obj[13], context);
          }), (input.addEventListener("click", function() {
            if ("function" == typeof obj[3]) {
              obj[3].apply(this, arguments);
            }
          }, context), function() {
            return input.removeEventListener("click", function() {
              if ("function" == typeof obj[3]) {
                obj[3].apply(this, arguments);
              }
            }, context);
          })];
          /** @type {boolean} */
          S = true;
        }
      },
      p : function render(v, r) {
        var _queryStr$split2 = _slicedToArray(r, 1);
        var value = _queryStr$split2[0];
        /** @type {string} */
        obj = v;
        var result = {};
        if (32 & value && (result.company = obj[5]), 64 & value && (result.photo = obj[6]), context.$set(result), (!A || 256 & value) && b(idUrl, obj[8]), (!A || 288 & value) && update(source, "cfai-widget__dialog-head--small", obj[8] !== obj[5]), 1120 & value) {
          var i = void 0;
          val = obj[10];
          /** @type {number} */
          i = 0;
          for (; i < val.length; i = i + 1) {
            var node = find(obj, val, i);
            if (results[i]) {
              results[i].p(node, value);
              forEach(results[i], 1);
            } else {
              results[i] = link(node);
              results[i].c();
              forEach(results[i], 1);
              results[i].m(value, n);
            }
          }
          getNext();
          i = val.length;
          for (; i < results.length; i = i + 1) {
            renderWaveForm(i);
          }
          max();
        }
        if (obj[4]) {
          if (state) {
            state.p(obj, value);
            if (16 & value) {
              forEach(state, 1);
            }
          } else {
            state = create(obj);
            state.c();
            forEach(state, 1);
            state.m(value, result);
          }
        } else {
          if (state) {
            getNext();
            cb(state, 1, 1, function() {
              /** @type {null} */
              state = null;
            });
            max();
          }
        }
        if (512 & value) {
          print(element, obj[9]);
        }
        if (!A || 512 & value) {
          callback(H, "data-replicatedvalue", obj[9]);
        }
        if (!A || 512 & value && disabled !== (disabled = !obj[9].trim().length)) {
          /** @type {(boolean|undefined)} */
          input.disabled = disabled;
        }
      },
      i : function finalize(obj) {
        if (!A) {
          forEach(context.$$.fragment, obj);
          /** @type {number} */
          var i = 0;
          for (; i < val.length; i = i + 1) {
            forEach(results[i]);
          }
          forEach(state);
          forEach(event.$$.fragment, obj);
          /** @type {boolean} */
          A = true;
        }
      },
      o : function parse(s) {
        cb(context.$$.fragment, s);
        results = results.filter(Boolean);
        /** @type {number} */
        var i = 0;
        for (; i < results.length; i = i + 1) {
          cb(results[i]);
        }
        cb(state);
        cb(event.$$.fragment, s);
        /** @type {boolean} */
        A = false;
      },
      d : function register(container) {
        if (container) {
          get(tag);
        }
        set(context);
        obj[14](null);
        (function(zorder, value) {
          /** @type {number} */
          var zi = 0;
          for (; zi < zorder.length; zi = zi + 1) {
            if (zorder[zi]) {
              zorder[zi].d(value);
            }
          }
        })(results, container);
        if (state) {
          state.d();
        }
        obj[15](null);
        set(event);
        /** @type {boolean} */
        S = false;
        each(modModuleList);
      }
    };
  }
  /**
   * @param {(Object|string)} context
   * @param {!Object} $scope
   * @param {?} rule
   * @return {?}
   */
  function init(context, $scope, rule) {
    var type = void 0;
    var s = void 0;
    var l = void 0;
    /** @type {function(): undefined} */
    var value = key;
    /**
     * @return {?}
     */
    var parseStoreDir = function fn() {
      return value(), value = next(element, function(canCreateDiscussions) {
        return Object.create(null);
      }), element;
    };
    /** @type {function(): undefined} */
    var tmp = key;
    /**
     * @return {?}
     */
    var updateMaxSelectedMessage = function create() {
      return value || (value = document.createElement("a")), value.href = key, context === value.href, tmp = next(result, function(canCreateDiscussions) {
        return Object.create(null);
      }), result;
    };
    /** @type {function(): undefined} */
    var id = key;
    /**
     * @return {?}
     */
    var loadFromDefaultServer = function fn() {
      return id(), id = next(o, function(canCreateDiscussions) {
        return Object.create(null);
      }), o;
    };
    context.$$.on_destroy.push(function() {
      return value();
    });
    context.$$.on_destroy.push(function() {
      return value || (value = document.createElement("a")), value.href = key, context === value.href;
    });
    context.$$.on_destroy.push(function() {
      return id();
    });
    var result = $scope.messages;
    updateMaxSelectedMessage();
    var o = $scope.scrollToAnchor;
    loadFromDefaultServer();
    var element = $scope.newMessageText;
    parseStoreDir();
    var bindingModel = $scope.onMessageSend;
    var collectionCtrl = $scope.sendingMessage;
    var name = $scope.company;
    var k = $scope.photo;
    /** @type {null} */
    var container = null;
    var body = jQuery();
    var transform = body.translate;
    return context.$$set = function(data) {
      if ("messages" in data) {
        updateMaxSelectedMessage(Object.create(null));
      }
      if ("scrollToAnchor" in data) {
        loadFromDefaultServer(Object.create(null));
      }
      if ("newMessageText" in data) {
        parseStoreDir(Object.create(null));
      }
      if ("onMessageSend" in data) {
        Object.create(null);
      }
      if ("sendingMessage" in data) {
        Object.create(null);
      }
      if ("company" in data) {
        Object.create(null);
      }
      if ("photo" in data) {
        Object.create(null);
      }
    }, context.$$.update = function() {
      if (160 & context.$$.dirty && container) {
        /** @type {number} */
        var _t11 = container.clientHeight / container.querySelector("div").offsetHeight;
        if (_t11 < 1) {
          var sepor = name.split("");
          Object.create(null);
        }
      }
    }, [result, o, element, bindingModel, collectionCtrl, name, k, container, b, type, s, l, transform, function(key) {
      var rec_certD;
      if (!((null === (rec_certD = window.matchMedia("(pointer: coarse)")) || void 0 === rec_certD ? void 0 : rec_certD.matches) || 13 !== key.keyCode || key.shiftKey || !type.trim().length)) {
        key.preventDefault();
        key.stopPropagation();
        document.createElementNS("http://www.w3.org/2000/svg", key);
      }
    }, function(capturing) {
      listeners[capturing ? "unshift" : "push"](function() {
        /** @type {string} */
        container = capturing;
        Object.create(null);
      });
    }, function(capturing) {
      listeners[capturing ? "unshift" : "push"](function() {
        /** @type {string} */
        l = capturing;
        o.set(l);
      });
    }, function() {
      type = this.value;
      element.set(type);
    }];
  }
  /**
   * @param {!Node} values
   * @return {undefined}
   */
  function type(values) {
    apply(values, "svelte-zx8smm", ".cfai-widget.svelte-zx8smm{position:fixed;color:#152442;font-family:'Inter', 'sans-serif'}.cfai-widget__chat.svelte-zx8smm{position:fixed;display:flex;flex-direction:column;bottom:88px;right:16px;background:#ffffff;border-radius:20px;max-width:372px;width:100%;max-height:520px;height:100%;overflow:hidden;z-index:10;box-shadow:0px 0px 12px 4px rgba(21, 36, 66, 0.15)}@media(max-width: 768px){.cfai-widget--visible.svelte-zx8smm{z-index:5;left:0;bottom:0;right:0;top:0;background:rgba(12, 23, 45, 0.8)}.cfai-widget__chat.svelte-zx8smm{max-height:100%;right:0;bottom:0;top:0;border-radius:20px 0 0 20px;box-shadow:none}}@media(max-width: 480px){.cfai-widget--visible.svelte-zx8smm{z-index:5;left:0;bottom:0;right:0;top:0;background:rgba(12, 23, 45, 0.8)}.cfai-widget__chat.svelte-zx8smm{max-height:100%;max-width:100%;right:0;bottom:0;top:0;border-radius:20px 20px 0 0}}.cfai-widget__close.svelte-zx8smm{position:absolute;top:14px;right:16px}");
  }
  /**
   * @param {string} data
   * @return {?}
   */
  function g(data) {
    /**
     * @param {string} t
     * @param {?} i
     * @return {?}
     */
    function f(t, i) {
      return t[1] ? 0 : 1;
    }
    var v = void 0;
    var n = void 0;
    var options = void 0;
    var self = void 0;
    var s = void 0;
    var name = void 0;
    var result = void 0;
    var help = void 0;
    var results = (data[2] || data[3]) && execute(data);
    self = new a({});
    self.$on("click", data[16]);
    self.$on("keydown", data[16]);
    /** @type {!Array} */
    var methods = [initialize, factory];
    /** @type {!Array} */
    var doc = [];
    return name = f(data), result = doc[name] = methods[name](data), {
      c : function init() {
        /** @type {!Element} */
        v = document.createElement("div");
        if (results) {
          results.c();
        }
        /** @type {!Text} */
        n = document.createTextNode(" ");
        /** @type {!Element} */
        options = document.createElement("div");
        check(self.$$.fragment);
        /** @type {!Text} */
        s = document.createTextNode(" ");
        result.c();
        callback(options, "class", "cfai-widget__close svelte-zx8smm");
        callback(v, "class", "cfai-widget__chat svelte-zx8smm");
      },
      m : function f(r, m) {
        f(r, v, m);
        if (results) {
          results.m(v, null);
        }
        $(v, n);
        $(v, options);
        parse(self, options, null);
        $(v, s);
        doc[name].m(v, null);
        /** @type {boolean} */
        help = true;
      },
      p : function f(data, value) {
        if (data[2] || data[3]) {
          if (results) {
            results.p(data, value);
            if (12 & value) {
              forEach(results, 1);
            }
          } else {
            results = execute(data);
            results.c();
            forEach(results, 1);
            results.m(v, n);
          }
        } else {
          if (results) {
            getNext();
            cb(results, 1, 1, function() {
              /** @type {null} */
              results = null;
            });
            max();
          }
        }
        var id = name;
        name = f(data);
        if (name === id) {
          doc[name].p(data, value);
        } else {
          getNext();
          cb(doc[id], 1, 1, function() {
            /** @type {null} */
            doc[id] = null;
          });
          max();
          result = doc[name];
          if (result) {
            result.p(data, value);
          } else {
            result = doc[name] = methods[name](data);
            result.c();
          }
          forEach(result, 1);
          result.m(v, null);
        }
      },
      i : function finalize(value) {
        if (!help) {
          forEach(results);
          forEach(self.$$.fragment, value);
          forEach(result);
          /** @type {boolean} */
          help = true;
        }
      },
      o : function f(t) {
        cb(results);
        cb(self.$$.fragment, t);
        cb(result);
        /** @type {boolean} */
        help = false;
      },
      d : function get(property) {
        if (property) {
          get(v);
        }
        if (results) {
          results.d();
        }
        set(self);
        doc[name].d();
      }
    };
  }
  /**
   * @param {string} userArgs
   * @return {?}
   */
  function execute(userArgs) {
    var context = void 0;
    var n = void 0;
    return context = new handler({
      props : {
        label : userArgs[3] ? userArgs[13]("trying-connect") : null
      }
    }), {
      c : function init() {
        check(context.$$.fragment);
      },
      m : function m(x, r) {
        parse(context, x, r);
        /** @type {boolean} */
        n = true;
      },
      p : function update(obj, element) {
        var prop = {};
        if (8 & element) {
          prop.label = obj[3] ? obj[13]("trying-connect") : null;
        }
        context.$set(prop);
      },
      i : function(_diveTo) {
        /**
         * @param {?} type
         * @return {?}
         */
        function valueOf(type) {
          return _diveTo.apply(this, arguments);
        }
        /**
         * @return {string}
         */
        valueOf.toString = function() {
          return _diveTo.toString();
        };
        return valueOf;
      }(function(f) {
        if (!n) {
          forEach(context.$$.fragment, f);
          /** @type {boolean} */
          n = true;
        }
      }),
      o : function finalize(obj) {
        cb(context.$$.fragment, obj);
        /** @type {boolean} */
        n = false;
      },
      d : function fn(b) {
        set(context, b);
      }
    };
  }
  /**
   * @param {!Array} people
   * @return {?}
   */
  function factory(people) {
    var c = void 0;
    var n = void 0;
    return c = new ChildClass({
      props : {
        onCreateDialog : people[8],
        company : people[11].title,
        photo : people[11].photo
      }
    }), {
      c : function init() {
        check(c.$$.fragment);
      },
      m : function m(x, r) {
        parse(c, x, r);
        /** @type {boolean} */
        n = true;
      },
      p : key,
      i : function(_diveTo) {
        /**
         * @param {?} allowFailure
         * @return {?}
         */
        function stop(allowFailure) {
          return _diveTo.apply(this, arguments);
        }
        /**
         * @return {string}
         */
        stop.toString = function() {
          return _diveTo.toString();
        };
        return stop;
      }(function(f) {
        if (!n) {
          forEach(c.$$.fragment, f);
          /** @type {boolean} */
          n = true;
        }
      }),
      o : function parse(t) {
        cb(c.$$.fragment, t);
        /** @type {boolean} */
        n = false;
      },
      d : function fn(b) {
        set(c, b);
      }
    };
  }
  /**
   * @param {!Array} photos
   * @return {?}
   */
  function initialize(photos) {
    var c = void 0;
    var param = void 0;
    return c = new Cls({
      props : {
        company : photos[11].title,
        photo : photos[11].photo,
        sendingMessage : photos[4],
        scrollToAnchor : photos[15],
        messages : photos[5],
        newMessageText : photos[14],
        onMessageSend : photos[17]
      }
    }), {
      c : function init() {
        check(c.$$.fragment);
      },
      m : function parseMaybe(str, type) {
        parse(c, str, type);
        /** @type {boolean} */
        param = true;
      },
      p : function create(data, element) {
        var model = {};
        if (16 & element) {
          model.sendingMessage = data[4];
        }
        c.$set(model);
      },
      i : function(_diveTo) {
        /**
         * @param {?} name
         * @return {?}
         */
        function f(name) {
          return _diveTo.apply(this, arguments);
        }
        /**
         * @return {string}
         */
        f.toString = function() {
          return _diveTo.toString();
        };
        return f;
      }(function(f) {
        if (!param) {
          forEach(c.$$.fragment, f);
          /** @type {boolean} */
          param = true;
        }
      }),
      o : function init(obj) {
        cb(c.$$.fragment, obj);
        /** @type {boolean} */
        param = false;
      },
      d : function emit(force) {
        set(c, force);
      }
    };
  }
  /**
   * @param {string} args
   * @return {?}
   */
  function start(args) {
    var v = void 0;
    var n = void 0;
    var self = void 0;
    var _o2 = void 0;
    var o = args[0] && g(args);
    return self = new ctor({}), self.$on("click", args[16]), self.$on("keydown", args[16]), {
      c : function init() {
        /** @type {!Element} */
        v = document.createElement("div");
        if (o) {
          o.c();
        }
        /** @type {!Text} */
        n = document.createTextNode(" ");
        check(self.$$.fragment);
        callback(v, "class", "cfai-widget svelte-zx8smm");
        callback(v, "style", id(args[11]));
        update(v, "cfai-widget--visible", args[0]);
      },
      m : function m(y, r) {
        f(y, v, r);
        if (o) {
          o.m(v, null);
        }
        $(v, n);
        parse(self, v, null);
        /** @type {boolean} */
        _o2 = true;
      },
      p : function render(x, v) {
        var _clearRule$split2 = _slicedToArray(v, 1);
        var value = _clearRule$split2[0];
        if (x[0]) {
          if (o) {
            o.p(x, value);
            if (1 & value) {
              forEach(o, 1);
            }
          } else {
            o = g(x);
            o.c();
            forEach(o, 1);
            o.m(v, n);
          }
        } else {
          if (o) {
            getNext();
            cb(o, 1, 1, function() {
              /** @type {null} */
              o = null;
            });
            max();
          }
        }
        if (!_o2 || 1 & value) {
          update(v, "cfai-widget--visible", x[0]);
        }
      },
      i : function finalize(obj) {
        if (!_o2) {
          forEach(o);
          forEach(self.$$.fragment, obj);
          /** @type {boolean} */
          _o2 = true;
        }
      },
      o : function finalize(obj) {
        cb(o);
        cb(self.$$.fragment, obj);
        /** @type {boolean} */
        _o2 = false;
      },
      d : function reset(noChangeEvent) {
        if (noChangeEvent) {
          get(v);
        }
        if (o) {
          o.d();
        }
        set(self);
      }
    };
  }
  /**
   * @param {?} type
   * @param {!Object} self
   * @param {?} onComplete
   * @return {?}
   */
  function run(type, self, onComplete) {
    var fieldLabels = void 0;
    var tmp = void 0;
    var otherneg = void 0;
    var statements_music_ = void 0;
    var element = void 0;
    var a = void 0;
    var c = void 0;
    var d = void 0;
    var next = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(go, s) {
        /**
         * @param {?} data
         * @return {undefined}
         */
        function handlePossibleRedirection(data) {
          try {
            render(generator.next(data));
          } catch (_current_callback) {
            "function" == typeof _current_callback;
          }
        }
        /**
         * @param {?} value
         * @return {undefined}
         */
        function error(value) {
          try {
            render(generator.throw(value));
          } catch (_current_callback) {
            "function" == typeof _current_callback;
          }
        }
        /**
         * @param {!Object} p
         * @return {undefined}
         */
        function render(p) {
          var x;
          if (p.done) {
            go(p.value);
          } else {
            (x = p.value, x instanceof P ? x : new P(function(m) {
              m(x);
            })).then(handlePossibleRedirection, error);
          }
        }
        render((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var $scope = self.model;
    var options = $scope.messages;
    var definition = $scope.hasActiveDialog;
    var backup = $scope.sendMessage;
    var $scopeId = $scope.subscribeOnMessages;
    var imageChanges = $scope.unsubscribeFromMessages;
    var caps = $scope.hasMessagesSubscription;
    var diffPageSize = $scope.createDialog;
    var model = $scope.isDialogLoading;
    var to = $scope.isSubscriptionError;
    var blds = $scope.pluginConfig;
    var config = $scope.sendingMessage;
    var translate = $scope.translate;
    setup(type, options, function(canCreateDiscussions) {
      return 20();
    });
    setup(type, definition, function(canCreateDiscussions) {
      return 1();
    });
    setup(type, caps, function(canCreateDiscussions) {
      return 21();
    });
    setup(type, model, function(canCreateDiscussions) {
      return 2();
    });
    setup(type, to, function(canCreateDiscussions) {
      return 3();
    });
    setup(type, config, function(canCreateDiscussions) {
      return 4();
    });
    /** @type {boolean} */
    var thisneg = false;
    /** @type {number} */
    var numInfrequent = 0;
    var o = replace("");
    setup(type, o, function(canCreateDiscussions) {
      return 22();
    });
    var uiEvents = replace(null);
    var imageData;
    var attrs;
    setup(type, uiEvents, function(canCreateDiscussions) {
      return 23();
    });
    imageData = imgData;
    attrs = {
      translate : translate
    };
    getName().$$.context.set(imageData, attrs);
    /**
     * @return {?}
     */
    var nextTick = function iter() {
      return next(void 0, void 0, void 0, regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          for (; 1;) {
            switch(_context.prev = _context.next) {
              case 0:
                /** @type {number} */
                _context.next = 2;
                return dispatch(), dispatched;
              case 2:
                if (!(null == element)) {
                  element.scrollIntoView({
                    behavior : "smooth"
                  });
                }
              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    };
    var falseySection;
    return falseySection = function parse() {
      return document.createTextNode(type);
    }, getName().$$.on_destroy.push(falseySection), type.$$set = function(child) {
      if ("model" in child) {
        18();
      }
    }, type.$$.update = function() {
      if (2097155 & type.$$.dirty) {
        if (otherneg && !thisneg) {
          document.createTextNode(type);
        } else {
          if (thisneg && !otherneg && tmp) {
            document.createElementNS("http://www.w3.org/2000/svg", type);
          }
        }
      }
      if (1572865 & type.$$.dirty && numInfrequent !== fieldLabels.length && thisneg) {
        19();
        nextTick();
      }
    }, [thisneg, tmp, a, c, d, options, definition, caps, diffPageSize, model, to, blds, config, translate, o, uiEvents, function() {
      return next(void 0, void 0, void 0, regeneratorRuntime.mark(function _callee() {
        var adjustmentNeeded;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          for (; 1;) {
            switch(_context.prev = _context.next) {
              case 0:
                /** @type {boolean} */
                adjustmentNeeded = !thisneg;
                0();
                if (adjustmentNeeded) {
                  nextTick();
                }
              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }, function() {
      return next(void 0, void 0, void 0, regeneratorRuntime.mark(function _callee3() {
        var TAG_SHY;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          for (; 1;) {
            switch(_context3.prev = _context3.next) {
              case 0:
                TAG_SHY = statements_music_.trim();
                o.set("");
                /** @type {number} */
                _context3.next = 4;
                return document.createElement(TAG_SHY);
              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }, $scope, numInfrequent, fieldLabels, otherneg];
  }
  var item = void 0;
  var url = void 0;
  /** @type {!Array} */
  var _arr3 = [];
  /** @type {!Array} */
  var listeners = [];
  /** @type {!Array} */
  var array = [];
  /** @type {!Array} */
  var deadPool = [];
  /** @type {!Promise<?>} */
  var dispatched = Promise.resolve();
  /** @type {boolean} */
  var I = false;
  /** @type {!Set} */
  var _removedNewItems = new Set;
  /** @type {number} */
  var _i3 = 0;
  /** @type {!Set} */
  var updatedSet = new Set;
  var o = void 0;
  var name = function() {
    /**
     * @return {undefined}
     */
    function RTorrent() {
      _classCallCheck(this, RTorrent);
    }
    _createClass(RTorrent, [{
      key : "$destroy",
      value : function onRemove() {
        set(this, 1);
        /** @type {function(): undefined} */
        this.$destroy = key;
      }
    }, {
      key : "$on",
      value : function init(i, a) {
        if (!("function" == typeof a)) {
          return key;
        }
        var n = this.$$.callbacks[i] || (this.$$.callbacks[i] = []);
        return n.push(a), function() {
          var t = n.indexOf(a);
          if (-1 !== t) {
            n.splice(t, 1);
          }
        };
      }
    }, {
      key : "$set",
      value : function init(element) {
        var e;
        if (this.$$set && (e = element, 0 !== Object.keys(e).length)) {
          /** @type {boolean} */
          this.$$.skip_bound = true;
          this.$$set(element);
          /** @type {boolean} */
          this.$$.skip_bound = false;
        }
      }
    }]);
    return RTorrent;
  }();
  /** @type {!Array} */
  var D = [];
  /** @type {string} */
  var baseURI = "https://app-api.chatfuel.com/";
  var imgData = Symbol();
  /**
   * @return {?}
   */
  var jQuery = function finalize() {
    return imageData = imgData, getName().$$.context.get(imageData);
    var imageData;
  };
  var SettingsConst = {
    ActiveDialog : "chatfuel-ai-widget_active-dialog"
  };
  /**
   * @param {string} url
   * @param {string} type
   * @param {string} data
   * @param {string} parentName
   * @return {?}
   */
  var call = function transform(url, type, data, parentName) {
    return fetch(new URL(url, parentName || baseURI), {
      method : type,
      body : data ? JSON.stringify(data) : void 0,
      headers : data ? {
        "Content-Type" : "application/json"
      } : void 0
    }).then(function(rawResp) {
      return rawResp.json();
    });
  };
  /**
   * @return {?}
   */
  var targetWithPos = function processStart() {
    /** @type {!Element} */
    var t = document.createElement("div");
    return t.style.position = "fixed", t.style.width = "0", t.style.height = "0", t.style.zIndex = "99999", t.className = "chatfuel-ai-widget", document.body.appendChild(t), t;
  };
  /**
   * @param {!Object} params
   * @return {?}
   */
  var id = function setPosition(params) {
    return "--mainColor:" + params.mainColor + ";--secondaryColor:" + params.secondaryColor;
  };
  var Array = function(_WebInspector$GeneralTreeElement) {
    /**
     * @param {!Object} config
     * @return {?}
     */
    function TopSelect(config) {
      var _this2;
      _classCallCheck(this, TopSelect);
      _this2 = _possibleConstructorReturn(this, (TopSelect.__proto__ || Object.getPrototypeOf(TopSelect)).call(this));
      _this2;
      fn(_this2, config, null, render, t, {});
      return _this2;
    }
    _inherits(TopSelect, _WebInspector$GeneralTreeElement);
    return TopSelect;
  }(name);
  var ctor = function(_WebInspector$GeneralTreeElement) {
    /**
     * @param {!Object} props
     * @return {?}
     */
    function TacoTableCell(props) {
      var _this;
      _classCallCheck(this, TacoTableCell);
      _this = _possibleConstructorReturn(this, (TacoTableCell.__proto__ || Object.getPrototypeOf(TacoTableCell)).call(this));
      _this;
      fn(_this, props, show, text, t, {}, target);
      return _this;
    }
    _inherits(TacoTableCell, _WebInspector$GeneralTreeElement);
    return TacoTableCell;
  }(name);
  var Model = function(_WebInspector$GeneralTreeElement) {
    /**
     * @param {!Object} props
     * @return {?}
     */
    function TacoTableCell(props) {
      var _this;
      _classCallCheck(this, TacoTableCell);
      _this = _possibleConstructorReturn(this, (TacoTableCell.__proto__ || Object.getPrototypeOf(TacoTableCell)).call(this));
      _this;
      fn(_this, props, null, path, t, {});
      return _this;
    }
    _inherits(TacoTableCell, _WebInspector$GeneralTreeElement);
    return TacoTableCell;
  }(name);
  var a = function(_WebInspector$GeneralTreeElement) {
    /**
     * @param {!Object} props
     * @return {?}
     */
    function TacoTableCell(props) {
      var _this;
      _classCallCheck(this, TacoTableCell);
      _this = _possibleConstructorReturn(this, (TacoTableCell.__proto__ || Object.getPrototypeOf(TacoTableCell)).call(this));
      _this;
      fn(_this, props, iterator, constructor, t, {}, relationshipHas);
      return _this;
    }
    _inherits(TacoTableCell, _WebInspector$GeneralTreeElement);
    return TacoTableCell;
  }(name);
  var handler = function(_WebInspector$GeneralTreeElement) {
    /**
     * @param {!Object} props
     * @return {?}
     */
    function TacoTableCell(props) {
      var _this;
      _classCallCheck(this, TacoTableCell);
      _this = _possibleConstructorReturn(this, (TacoTableCell.__proto__ || Object.getPrototypeOf(TacoTableCell)).call(this));
      _this;
      fn(_this, props, func, y, t, {
        label : 0
      }, children);
      return _this;
    }
    _inherits(TacoTableCell, _WebInspector$GeneralTreeElement);
    return TacoTableCell;
  }(name);
  var C = function(_WebInspector$GeneralTreeElement) {
    /**
     * @param {!Object} props
     * @return {?}
     */
    function TacoTableCell(props) {
      var _this;
      _classCallCheck(this, TacoTableCell);
      _this = _possibleConstructorReturn(this, (TacoTableCell.__proto__ || Object.getPrototypeOf(TacoTableCell)).call(this));
      _this;
      fn(_this, props, null, length, t, {});
      return _this;
    }
    _inherits(TacoTableCell, _WebInspector$GeneralTreeElement);
    return TacoTableCell;
  }(name);
  var Float32Array = function(_WebInspector$GeneralTreeElement) {
    /**
     * @param {!Object} props
     * @return {?}
     */
    function TacoTableCell(props) {
      var _this;
      _classCallCheck(this, TacoTableCell);
      _this = _possibleConstructorReturn(this, (TacoTableCell.__proto__ || Object.getPrototypeOf(TacoTableCell)).call(this));
      _this;
      fn(_this, props, null, main, t, {});
      return _this;
    }
    _inherits(TacoTableCell, _WebInspector$GeneralTreeElement);
    return TacoTableCell;
  }(name);
  var Buffer = function(_WebInspector$GeneralTreeElement) {
    /**
     * @param {!Object} props
     * @return {?}
     */
    function TacoTableCell(props) {
      var _this;
      _classCallCheck(this, TacoTableCell);
      _this = _possibleConstructorReturn(this, (TacoTableCell.__proto__ || Object.getPrototypeOf(TacoTableCell)).call(this));
      _this;
      fn(_this, props, handleResult, bind, t, {
        company : 0,
        photo : 1,
        width : 2,
        height : 3
      }, row);
      return _this;
    }
    _inherits(TacoTableCell, _WebInspector$GeneralTreeElement);
    return TacoTableCell;
  }(name);
  var ChildClass = function(_WebInspector$GeneralTreeElement) {
    /**
     * @param {!Object} props
     * @return {?}
     */
    function TacoTableCell(props) {
      var _this;
      _classCallCheck(this, TacoTableCell);
      _this = _possibleConstructorReturn(this, (TacoTableCell.__proto__ || Object.getPrototypeOf(TacoTableCell)).call(this));
      _this;
      fn(_this, props, load, test, t, {
        onCreateDialog : 0,
        company : 1,
        photo : 2
      }, any);
      return _this;
    }
    _inherits(TacoTableCell, _WebInspector$GeneralTreeElement);
    return TacoTableCell;
  }(name);
  var T = function(_WebInspector$GeneralTreeElement) {
    /**
     * @param {!Object} props
     * @return {?}
     */
    function TacoTableCell(props) {
      var _this;
      _classCallCheck(this, TacoTableCell);
      _this = _possibleConstructorReturn(this, (TacoTableCell.__proto__ || Object.getPrototypeOf(TacoTableCell)).call(this));
      _this;
      fn(_this, props, null, done, t, {});
      return _this;
    }
    _inherits(TacoTableCell, _WebInspector$GeneralTreeElement);
    return TacoTableCell;
  }(name);
  var Tree = function(_WebInspector$GeneralTreeElement) {
    /**
     * @param {!Object} props
     * @return {?}
     */
    function TacoTableCell(props) {
      var _this;
      _classCallCheck(this, TacoTableCell);
      _this = _possibleConstructorReturn(this, (TacoTableCell.__proto__ || Object.getPrototypeOf(TacoTableCell)).call(this));
      _this;
      fn(_this, props, loop, wrap, t, {
        outcoming : 0,
        text : 1,
        company : 2,
        photo : 3,
        processing : 4
      }, save);
      return _this;
    }
    _inherits(TacoTableCell, _WebInspector$GeneralTreeElement);
    return TacoTableCell;
  }(name);
  var Cls = function(_WebInspector$GeneralTreeElement) {
    /**
     * @param {!Object} props
     * @return {?}
     */
    function TacoTableCell(props) {
      var _this;
      _classCallCheck(this, TacoTableCell);
      _this = _possibleConstructorReturn(this, (TacoTableCell.__proto__ || Object.getPrototypeOf(TacoTableCell)).call(this));
      _this;
      fn(_this, props, init, exports, t, {
        messages : 0,
        scrollToAnchor : 1,
        newMessageText : 2,
        onMessageSend : 3,
        sendingMessage : 4,
        company : 5,
        photo : 6
      }, container);
      return _this;
    }
    _inherits(TacoTableCell, _WebInspector$GeneralTreeElement);
    return TacoTableCell;
  }(name);
  var Handler = function(_WebInspector$GeneralTreeElement) {
    /**
     * @param {!Object} props
     * @return {?}
     */
    function TacoTableCell(props) {
      var _this;
      _classCallCheck(this, TacoTableCell);
      _this = _possibleConstructorReturn(this, (TacoTableCell.__proto__ || Object.getPrototypeOf(TacoTableCell)).call(this));
      _this;
      fn(_this, props, run, start, t, {
        model : 18
      }, type);
      return _this;
    }
    _inherits(TacoTableCell, _WebInspector$GeneralTreeElement);
    return TacoTableCell;
  }(name);
  var $ionicNativeTransitions = new (function() {
    /**
     * @return {undefined}
     */
    function controller() {
      var _this = this;
      _classCallCheck(this, controller);
      /** @type {null} */
      this.config = null;
      /** @type {null} */
      this.projectId = null;
      this.translations = {};
      /** @type {null} */
      this.projectRemoteUrl = null;
      /** @type {null} */
      this.activeDialogId = null;
      /** @type {number} */
      this.reconnectionsCount = 0;
      /** @type {null} */
      this.unsubscribeHandler = null;
      /** @type {boolean} */
      this.isEnabled = false;
      this.messages = replace([]);
      this.hasActiveDialog = replace(false);
      this.isDialogLoading = replace(false);
      this.sendingMessage = replace(null);
      this.isSubscriptionError = replace(false);
      this.hasMessagesSubscription = replace(false);
      /**
       * @return {?}
       */
      this.readActiveDialogId = function() {
        return __awaiter(_this, void 0, void 0, regeneratorRuntime.mark(function _callee3() {
          var currentDataItemIdentifyingStr;
          var _ctx$headers$range$sp;
          var _ctx$headers$range$sp2;
          var range;
          var b;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            for (; 1;) {
              switch(_context3.prev = _context3.next) {
                case 0:
                  /** @type {(null|string)} */
                  currentDataItemIdentifyingStr = window.localStorage.getItem(SettingsConst.ActiveDialog);
                  if (currentDataItemIdentifyingStr) {
                    /** @type {number} */
                    _context3.next = 3;
                    break;
                  }
                  return _context3.abrupt("return", (this.activeDialogId = null, void this.hasActiveDialog.set(false)));
                case 3:
                  /** @type {!Array<string>} */
                  _ctx$headers$range$sp = currentDataItemIdentifyingStr.split("-");
                  _ctx$headers$range$sp2 = _slicedToArray(_ctx$headers$range$sp, 2);
                  range = _ctx$headers$range$sp2[0];
                  b = _ctx$headers$range$sp2[1];
                  /** @type {boolean} */
                  _context3.t0 = range === this.projectId;
                  if (!_context3.t0) {
                    /** @type {number} */
                    _context3.next = 10;
                    break;
                  }
                  this.activeDialogId = b;
                  this.hasActiveDialog.set(true);
                  /** @type {number} */
                  _context3.next = 10;
                  return this.fetchMessages();
                case 10:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));
      };
      /**
       * @return {undefined}
       */
      this.readProjectIdAndUrl = function() {
        /** @type {(HTMLScriptElement|null)} */
        var script = document.currentScript;
        if (script) {
          /** @type {string} */
          _this.projectRemoteUrl = "https://app.chatfuel.com";
          /** @type {string} */
          _this.projectId = script.getAttribute("data-project");
        }
      };
      /**
       * @return {?}
       */
      this.getProjectConfig = function() {
        return __awaiter(_this, void 0, void 0, regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            for (; 1;) {
              switch(_context4.prev = _context4.next) {
                case 0:
                  /** @type {number} */
                  _context4.next = 2;
                  return call("/webwidget/" + this.projectId + "/settings", "GET");
                case 2:
                  this.config = _context4.sent;
                case 3:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));
      };
      /**
       * @return {?}
       */
      this.fetchTranslations = function() {
        return __awaiter(_this, void 0, void 0, regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            for (; 1;) {
              switch(_context5.prev = _context5.next) {
                case 0:
                  if (!"https://raw.githubusercontent.com") {
                    /** @type {number} */
                    _context5.next = 4;
                    break;
                  }
                  /** @type {number} */
                  _context5.next = 3;
                  return call("/djmessaoud/nDiscIntersections/main/webwidget.json", "GET", void 0, "https://raw.githubusercontent.com");
                case 3:
                  this.translations = _context5.sent;
                case 4:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));
      };
      /**
       * @return {?}
       */
      this.fetchMessages = function() {
        return __awaiter(_this, void 0, void 0, regeneratorRuntime.mark(function _callee6() {
          var htmlFileList;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            for (; 1;) {
              switch(_context6.prev = _context6.next) {
                case 0:
                  if (!(!this.isEnabled || !this.activeDialogId || !this.projectId)) {
                    /** @type {number} */
                    _context6.next = 2;
                    break;
                  }
                  return _context6.abrupt("return");
                case 2:
                  /** @type {number} */
                  _context6.next = 4;
                  return call("/webwidget/" + this.projectId + "/messages/" + this.activeDialogId, "GET");
                case 4:
                  htmlFileList = _context6.sent;
                  this.messages.set(htmlFileList || []);
                case 6:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));
      };
      /**
       * @return {?}
       */
      this.init = function() {
        return __awaiter(_this, void 0, void 0, regeneratorRuntime.mark(function nodes() {
          var value;
          var stackLabels;
          return regeneratorRuntime.wrap(function update(_context4) {
            for (; 1;) {
              switch(_context4.prev = _context4.next) {
                case 0:
                  if (!(this.isEnabled && this.config)) {
                    /** @type {number} */
                    _context4.next = 2;
                    break;
                  }
                  return _context4.abrupt("return");
                case 2:
                  /** @type {number} */
                  _context4.next = 4;
                  return this.getProjectConfig();
                case 4:
                  if (this.config) {
                    /** @type {number} */
                    _context4.next = 6;
                    break;
                  }
                  return _context4.abrupt("return");
                case 6:
                  stackLabels = !this.config.domains || (null === (value = this.config.domains) || void 0 === value ? void 0 : value.includes(window.location.host));
                  this.isEnabled = stackLabels && this.config.enabled;
                  _context4.t0 = this.isEnabled;
                  if (!_context4.t0) {
                    /** @type {number} */
                    _context4.next = 12;
                    break;
                  }
                  /** @type {number} */
                  _context4.next = 12;
                  return Promise.all([this.readActiveDialogId(), this.fetchTranslations()]);
                case 12:
                case "end":
                  return _context4.stop();
              }
            }
          }, nodes, this);
        }));
      };
      /**
       * @return {?}
       */
      this.createDialog = function() {
        return __awaiter(_this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
          var file;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            for (; 1;) {
              switch(_context.prev = _context.next) {
                case 0:
                  if (!(!this.isEnabled || !this.projectId)) {
                    /** @type {number} */
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  this.isDialogLoading.set(true);
                  /** @type {number} */
                  _context.next = 5;
                  return call("/webwidget/" + this.projectId + "/dialogs", "POST", {
                    project_id : this.projectId
                  });
                case 5:
                  file = _context.sent;
                  this.activeDialogId = file.id;
                  this.hasActiveDialog.set(true);
                  window.localStorage.setItem(SettingsConst.ActiveDialog, this.projectId + "-" + file.id);
                  this.isDialogLoading.set(false);
                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));
      };
      /**
       * @param {string} params
       * @return {?}
       */
      this.sendMessage = function(params) {
        return __awaiter(_this, void 0, void 0, regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            for (; 1;) {
              switch(_context3.prev = _context3.next) {
                case 0:
                  _context3.t0 = this.isEnabled && this.activeDialogId && this.projectId;
                  if (!_context3.t0) {
                    /** @type {number} */
                    _context3.next = 8;
                    break;
                  }
                  this.sendingMessage.set(params);
                  this.isDialogLoading.set(true);
                  /** @type {number} */
                  _context3.next = 6;
                  return call("/webwidget/" + this.projectId + "/messages", "POST", {
                    dialog_id : this.activeDialogId,
                    text : params.trim()
                  });
                case 6:
                  this.isDialogLoading.set(false);
                  this.sendingMessage.set(null);
                case 8:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));
      };
      /**
       * @return {?}
       */
      this.subscribeOnMessages = function() {
        return __awaiter(_this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
          var controller = this;
          var doc;
          var metadataURI;
          var focusListener;
          var consume;
          var onInspectorMove;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            for (; 1;) {
              switch(_context.prev = _context.next) {
                case 0:
                  if (!(this.unsubscribeHandler && this.unsubscribeHandler(), !this.isEnabled || !this.activeDialogId || !this.projectId)) {
                    /** @type {number} */
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  /** @type {!EventSource} */
                  doc = (metadataURI = "/webwidget/" + this.projectId + "/messages/subscribe?stream=messages&dialog_id=" + this.activeDialogId, new EventSource(new URL(metadataURI, baseURI)));
                  this.isSubscriptionError.set(false);
                  /**
                   * @param {!Object} event
                   * @return {undefined}
                   */
                  focusListener = function next(event) {
                    var json = event.data;
                    /** @type {*} */
                    var res = JSON.parse(json);
                    var body = res.message;
                    controller.messages.update(function(newCmps) {
                      return newCmps.concat(body);
                    });
                    controller.isSubscriptionError.set(false);
                    /** @type {number} */
                    controller.reconnectionsCount = 0;
                  };
                  /**
                   * @return {undefined}
                   */
                  consume = function next() {
                    controller.isSubscriptionError.set(true);
                    if (0 === doc.readyState && controller.reconnectionsCount < 3) {
                      controller.reconnectionsCount++;
                      controller.unsubscribeFromMessages();
                      setTimeout(function() {
                        controller.subscribeOnMessages();
                      }, 1e3 * controller.reconnectionsCount * Math.random());
                    }
                  };
                  /**
                   * @return {undefined}
                   */
                  onInspectorMove = function value() {
                    controller.unsubscribeFromMessages();
                    /** @type {number} */
                    controller.reconnectionsCount = 0;
                    controller.subscribeOnMessages();
                  };
                  doc.addEventListener("message", focusListener);
                  doc.addEventListener("error", consume);
                  window.addEventListener("online", onInspectorMove);
                  this.hasMessagesSubscription.set(true);
                  /**
                   * @return {undefined}
                   */
                  this.unsubscribeHandler = function() {
                    doc.removeEventListener("message", focusListener);
                    doc.removeEventListener("error", consume);
                    window.removeEventListener("online", onInspectorMove);
                    doc.close();
                    /** @type {null} */
                    controller.unsubscribeHandler = null;
                    controller.hasMessagesSubscription.set(false);
                  };
                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));
      };
      /**
       * @return {undefined}
       */
      this.unsubscribeFromMessages = function() {
        if (_this.unsubscribeHandler) {
          _this.unsubscribeHandler();
        }
      };
      /**
       * @param {?} name
       * @return {?}
       */
      this.translate = function(name) {
        return _this.translations[name] || name;
      };
      this.readProjectIdAndUrl();
    }
    _createClass(controller, [{
      key : "pluginConfig",
      get : function init() {
        var config;
        var _base3;
        var cfg;
        var options;
        return {
          title : (null === (config = this.config) || void 0 === config ? void 0 : config.title) || "",
          mainColor : (null === (_base3 = this.config) || void 0 === _base3 ? void 0 : _base3.main_color) || "#6558F6",
          secondaryColor : (null === (cfg = this.config) || void 0 === cfg ? void 0 : cfg.second_color) || "#ffffff",
          photo : (null === (options = this.config) || void 0 === options ? void 0 : options.photo) || ""
        };
      }
    }]);
    return controller;
  }());
  $ionicNativeTransitions.init().then(function() {
    if ($ionicNativeTransitions.isEnabled) {
      (function() {
        /** @type {!Element} */
        var $elem = document.createElement("link");
        /** @type {string} */
        $elem.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
        /** @type {string} */
        $elem.rel = "stylesheet";
        document.head.appendChild($elem);
      })();
      new Handler({
        target : targetWithPos(),
        props : {
          model : $ionicNativeTransitions
        }
      });
    }
  }).catch(function(mmCoreSplitViewBlock) {
    (function() {
      var _console2;
      /** @type {number} */
      var _len = arguments.length;
      /** @type {!Array} */
      var args = Array(_len);
      /** @type {number} */
      var _key = 0;
      for (; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      (_console2 = console).log.apply(_console2, ["[Chatfuel AI plugin]"].concat(args));
    })(mmCoreSplitViewBlock);
  });
}();
