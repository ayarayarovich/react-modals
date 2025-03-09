var kr = { exports: {} }, ur = {}, jr = { exports: {} }, C = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vt;
function xn() {
  if (Vt) return C;
  Vt = 1;
  var r = Symbol.for("react.element"), t = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), E = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), L = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), W = Symbol.iterator;
  function B(o) {
    return o === null || typeof o != "object" ? null : (o = W && o[W] || o["@@iterator"], typeof o == "function" ? o : null);
  }
  var H = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, te = Object.assign, _e = {};
  function le(o, l, O) {
    this.props = o, this.context = l, this.refs = _e, this.updater = O || H;
  }
  le.prototype.isReactComponent = {}, le.prototype.setState = function(o, l) {
    if (typeof o != "object" && typeof o != "function" && o != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, o, l, "setState");
  }, le.prototype.forceUpdate = function(o) {
    this.updater.enqueueForceUpdate(this, o, "forceUpdate");
  };
  function de() {
  }
  de.prototype = le.prototype;
  function K(o, l, O) {
    this.props = o, this.context = l, this.refs = _e, this.updater = O || H;
  }
  var Re = K.prototype = new de();
  Re.constructor = K, te(Re, le.prototype), Re.isPureReactComponent = !0;
  var pe = Array.isArray, G = Object.prototype.hasOwnProperty, ne = { current: null }, ye = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ge(o, l, O) {
    var T, A = {}, N = null, $ = null;
    if (l != null) for (T in l.ref !== void 0 && ($ = l.ref), l.key !== void 0 && (N = "" + l.key), l) G.call(l, T) && !ye.hasOwnProperty(T) && (A[T] = l[T]);
    var I = arguments.length - 2;
    if (I === 1) A.children = O;
    else if (1 < I) {
      for (var x = Array(I), J = 0; J < I; J++) x[J] = arguments[J + 2];
      A.children = x;
    }
    if (o && o.defaultProps) for (T in I = o.defaultProps, I) A[T] === void 0 && (A[T] = I[T]);
    return { $$typeof: r, type: o, key: N, ref: $, props: A, _owner: ne.current };
  }
  function Pe(o, l) {
    return { $$typeof: r, type: o.type, key: l, ref: o.ref, props: o.props, _owner: o._owner };
  }
  function Te(o) {
    return typeof o == "object" && o !== null && o.$$typeof === r;
  }
  function Qe(o) {
    var l = { "=": "=0", ":": "=2" };
    return "$" + o.replace(/[=:]/g, function(O) {
      return l[O];
    });
  }
  var ke = /\/+/g;
  function ae(o, l) {
    return typeof o == "object" && o !== null && o.key != null ? Qe("" + o.key) : l.toString(36);
  }
  function oe(o, l, O, T, A) {
    var N = typeof o;
    (N === "undefined" || N === "boolean") && (o = null);
    var $ = !1;
    if (o === null) $ = !0;
    else switch (N) {
      case "string":
      case "number":
        $ = !0;
        break;
      case "object":
        switch (o.$$typeof) {
          case r:
          case t:
            $ = !0;
        }
    }
    if ($) return $ = o, A = A($), o = T === "" ? "." + ae($, 0) : T, pe(A) ? (O = "", o != null && (O = o.replace(ke, "$&/") + "/"), oe(A, l, O, "", function(J) {
      return J;
    })) : A != null && (Te(A) && (A = Pe(A, O + (!A.key || $ && $.key === A.key ? "" : ("" + A.key).replace(ke, "$&/") + "/") + o)), l.push(A)), 1;
    if ($ = 0, T = T === "" ? "." : T + ":", pe(o)) for (var I = 0; I < o.length; I++) {
      N = o[I];
      var x = T + ae(N, I);
      $ += oe(N, l, O, x, A);
    }
    else if (x = B(o), typeof x == "function") for (o = x.call(o), I = 0; !(N = o.next()).done; ) N = N.value, x = T + ae(N, I++), $ += oe(N, l, O, x, A);
    else if (N === "object") throw l = String(o), Error("Objects are not valid as a React child (found: " + (l === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : l) + "). If you meant to render a collection of children, use an array instead.");
    return $;
  }
  function Q(o, l, O) {
    if (o == null) return o;
    var T = [], A = 0;
    return oe(o, T, "", "", function(N) {
      return l.call(O, N, A++);
    }), T;
  }
  function ve(o) {
    if (o._status === -1) {
      var l = o._result;
      l = l(), l.then(function(O) {
        (o._status === 0 || o._status === -1) && (o._status = 1, o._result = O);
      }, function(O) {
        (o._status === 0 || o._status === -1) && (o._status = 2, o._result = O);
      }), o._status === -1 && (o._status = 0, o._result = l);
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var _ = { current: null }, he = { transition: null }, je = { ReactCurrentDispatcher: _, ReactCurrentBatchConfig: he, ReactCurrentOwner: ne };
  function be() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return C.Children = { map: Q, forEach: function(o, l, O) {
    Q(o, function() {
      l.apply(this, arguments);
    }, O);
  }, count: function(o) {
    var l = 0;
    return Q(o, function() {
      l++;
    }), l;
  }, toArray: function(o) {
    return Q(o, function(l) {
      return l;
    }) || [];
  }, only: function(o) {
    if (!Te(o)) throw Error("React.Children.only expected to receive a single React element child.");
    return o;
  } }, C.Component = le, C.Fragment = s, C.Profiler = p, C.PureComponent = K, C.StrictMode = c, C.Suspense = R, C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = je, C.act = be, C.cloneElement = function(o, l, O) {
    if (o == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + o + ".");
    var T = te({}, o.props), A = o.key, N = o.ref, $ = o._owner;
    if (l != null) {
      if (l.ref !== void 0 && (N = l.ref, $ = ne.current), l.key !== void 0 && (A = "" + l.key), o.type && o.type.defaultProps) var I = o.type.defaultProps;
      for (x in l) G.call(l, x) && !ye.hasOwnProperty(x) && (T[x] = l[x] === void 0 && I !== void 0 ? I[x] : l[x]);
    }
    var x = arguments.length - 2;
    if (x === 1) T.children = O;
    else if (1 < x) {
      I = Array(x);
      for (var J = 0; J < x; J++) I[J] = arguments[J + 2];
      T.children = I;
    }
    return { $$typeof: r, type: o.type, key: A, ref: N, props: T, _owner: $ };
  }, C.createContext = function(o) {
    return o = { $$typeof: E, _currentValue: o, _currentValue2: o, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, o.Provider = { $$typeof: m, _context: o }, o.Consumer = o;
  }, C.createElement = ge, C.createFactory = function(o) {
    var l = ge.bind(null, o);
    return l.type = o, l;
  }, C.createRef = function() {
    return { current: null };
  }, C.forwardRef = function(o) {
    return { $$typeof: S, render: o };
  }, C.isValidElement = Te, C.lazy = function(o) {
    return { $$typeof: j, _payload: { _status: -1, _result: o }, _init: ve };
  }, C.memo = function(o, l) {
    return { $$typeof: L, type: o, compare: l === void 0 ? null : l };
  }, C.startTransition = function(o) {
    var l = he.transition;
    he.transition = {};
    try {
      o();
    } finally {
      he.transition = l;
    }
  }, C.unstable_act = be, C.useCallback = function(o, l) {
    return _.current.useCallback(o, l);
  }, C.useContext = function(o) {
    return _.current.useContext(o);
  }, C.useDebugValue = function() {
  }, C.useDeferredValue = function(o) {
    return _.current.useDeferredValue(o);
  }, C.useEffect = function(o, l) {
    return _.current.useEffect(o, l);
  }, C.useId = function() {
    return _.current.useId();
  }, C.useImperativeHandle = function(o, l, O) {
    return _.current.useImperativeHandle(o, l, O);
  }, C.useInsertionEffect = function(o, l) {
    return _.current.useInsertionEffect(o, l);
  }, C.useLayoutEffect = function(o, l) {
    return _.current.useLayoutEffect(o, l);
  }, C.useMemo = function(o, l) {
    return _.current.useMemo(o, l);
  }, C.useReducer = function(o, l, O) {
    return _.current.useReducer(o, l, O);
  }, C.useRef = function(o) {
    return _.current.useRef(o);
  }, C.useState = function(o) {
    return _.current.useState(o);
  }, C.useSyncExternalStore = function(o, l, O) {
    return _.current.useSyncExternalStore(o, l, O);
  }, C.useTransition = function() {
    return _.current.useTransition();
  }, C.version = "18.3.1", C;
}
var cr = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
cr.exports;
var Yt;
function Fn() {
  return Yt || (Yt = 1, function(r, t) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var s = "18.3.1", c = Symbol.for("react.element"), p = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), L = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), _e = Symbol.for("react.offscreen"), le = Symbol.iterator, de = "@@iterator";
      function K(e) {
        if (e === null || typeof e != "object")
          return null;
        var n = le && e[le] || e[de];
        return typeof n == "function" ? n : null;
      }
      var Re = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, pe = {
        transition: null
      }, G = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ne = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ye = {}, ge = null;
      function Pe(e) {
        ge = e;
      }
      ye.setExtraStackFrame = function(e) {
        ge = e;
      }, ye.getCurrentStack = null, ye.getStackAddendum = function() {
        var e = "";
        ge && (e += ge);
        var n = ye.getCurrentStack;
        return n && (e += n() || ""), e;
      };
      var Te = !1, Qe = !1, ke = !1, ae = !1, oe = !1, Q = {
        ReactCurrentDispatcher: Re,
        ReactCurrentBatchConfig: pe,
        ReactCurrentOwner: ne
      };
      Q.ReactDebugCurrentFrame = ye, Q.ReactCurrentActQueue = G;
      function ve(e) {
        {
          for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), u = 1; u < n; u++)
            i[u - 1] = arguments[u];
          he("warn", e, i);
        }
      }
      function _(e) {
        {
          for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), u = 1; u < n; u++)
            i[u - 1] = arguments[u];
          he("error", e, i);
        }
      }
      function he(e, n, i) {
        {
          var u = Q.ReactDebugCurrentFrame, d = u.getStackAddendum();
          d !== "" && (n += "%s", i = i.concat([d]));
          var g = i.map(function(h) {
            return String(h);
          });
          g.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, g);
        }
      }
      var je = {};
      function be(e, n) {
        {
          var i = e.constructor, u = i && (i.displayName || i.name) || "ReactClass", d = u + "." + n;
          if (je[d])
            return;
          _("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", n, u), je[d] = !0;
        }
      }
      var o = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
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
        enqueueForceUpdate: function(e, n, i) {
          be(e, "forceUpdate");
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
        enqueueReplaceState: function(e, n, i, u) {
          be(e, "replaceState");
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
        enqueueSetState: function(e, n, i, u) {
          be(e, "setState");
        }
      }, l = Object.assign, O = {};
      Object.freeze(O);
      function T(e, n, i) {
        this.props = e, this.context = n, this.refs = O, this.updater = i || o;
      }
      T.prototype.isReactComponent = {}, T.prototype.setState = function(e, n) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, n, "setState");
      }, T.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var A = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, N = function(e, n) {
          Object.defineProperty(T.prototype, e, {
            get: function() {
              ve("%s(...) is deprecated in plain JavaScript React classes. %s", n[0], n[1]);
            }
          });
        };
        for (var $ in A)
          A.hasOwnProperty($) && N($, A[$]);
      }
      function I() {
      }
      I.prototype = T.prototype;
      function x(e, n, i) {
        this.props = e, this.context = n, this.refs = O, this.updater = i || o;
      }
      var J = x.prototype = new I();
      J.constructor = x, l(J, T.prototype), J.isPureReactComponent = !0;
      function Nr() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var dr = Array.isArray;
      function ze(e) {
        return dr(e);
      }
      function Lr(e) {
        {
          var n = typeof Symbol == "function" && Symbol.toStringTag, i = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return i;
        }
      }
      function Ue(e) {
        try {
          return we(e), !1;
        } catch {
          return !0;
        }
      }
      function we(e) {
        return "" + e;
      }
      function Ae(e) {
        if (Ue(e))
          return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Lr(e)), we(e);
      }
      function pr(e, n, i) {
        var u = e.displayName;
        if (u)
          return u;
        var d = n.displayName || n.name || "";
        return d !== "" ? i + "(" + d + ")" : i;
      }
      function De(e) {
        return e.displayName || "Context";
      }
      function me(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case m:
            return "Fragment";
          case p:
            return "Portal";
          case S:
            return "Profiler";
          case E:
            return "StrictMode";
          case W:
            return "Suspense";
          case B:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case L:
              var n = e;
              return De(n) + ".Consumer";
            case R:
              var i = e;
              return De(i._context) + ".Provider";
            case j:
              return pr(e, e.render, "ForwardRef");
            case H:
              var u = e.displayName || null;
              return u !== null ? u : me(e.type) || "Memo";
            case te: {
              var d = e, g = d._payload, h = d._init;
              try {
                return me(h(g));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var xe = Object.prototype.hasOwnProperty, Ve = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, vr, yr, Ye;
      Ye = {};
      function Ze(e) {
        if (xe.call(e, "ref")) {
          var n = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (n && n.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function er(e) {
        if (xe.call(e, "key")) {
          var n = Object.getOwnPropertyDescriptor(e, "key").get;
          if (n && n.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Wr(e, n) {
        var i = function() {
          vr || (vr = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
      function hr(e, n) {
        var i = function() {
          yr || (yr = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
      function mr(e) {
        if (typeof e.ref == "string" && ne.current && e.__self && ne.current.stateNode !== e.__self) {
          var n = me(ne.current.type);
          Ye[n] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', n, e.ref), Ye[n] = !0);
        }
      }
      var rr = function(e, n, i, u, d, g, h) {
        var b = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: c,
          // Built-in properties that belong on the element
          type: e,
          key: n,
          ref: i,
          props: h,
          // Record the component responsible for creating this element.
          _owner: g
        };
        return b._store = {}, Object.defineProperty(b._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(b, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: u
        }), Object.defineProperty(b, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: d
        }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
      };
      function zr(e, n, i) {
        var u, d = {}, g = null, h = null, b = null, k = null;
        if (n != null) {
          Ze(n) && (h = n.ref, mr(n)), er(n) && (Ae(n.key), g = "" + n.key), b = n.__self === void 0 ? null : n.__self, k = n.__source === void 0 ? null : n.__source;
          for (u in n)
            xe.call(n, u) && !Ve.hasOwnProperty(u) && (d[u] = n[u]);
        }
        var M = arguments.length - 2;
        if (M === 1)
          d.children = i;
        else if (M > 1) {
          for (var z = Array(M), U = 0; U < M; U++)
            z[U] = arguments[U + 2];
          Object.freeze && Object.freeze(z), d.children = z;
        }
        if (e && e.defaultProps) {
          var Y = e.defaultProps;
          for (u in Y)
            d[u] === void 0 && (d[u] = Y[u]);
        }
        if (g || h) {
          var X = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          g && Wr(d, X), h && hr(d, X);
        }
        return rr(e, g, h, b, k, ne.current, d);
      }
      function Ur(e, n) {
        var i = rr(e.type, n, e.ref, e._self, e._source, e._owner, e.props);
        return i;
      }
      function Vr(e, n, i) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var u, d = l({}, e.props), g = e.key, h = e.ref, b = e._self, k = e._source, M = e._owner;
        if (n != null) {
          Ze(n) && (h = n.ref, M = ne.current), er(n) && (Ae(n.key), g = "" + n.key);
          var z;
          e.type && e.type.defaultProps && (z = e.type.defaultProps);
          for (u in n)
            xe.call(n, u) && !Ve.hasOwnProperty(u) && (n[u] === void 0 && z !== void 0 ? d[u] = z[u] : d[u] = n[u]);
        }
        var U = arguments.length - 2;
        if (U === 1)
          d.children = i;
        else if (U > 1) {
          for (var Y = Array(U), X = 0; X < U; X++)
            Y[X] = arguments[X + 2];
          d.children = Y;
        }
        return rr(e.type, g, h, b, k, M, d);
      }
      function Ce(e) {
        return typeof e == "object" && e !== null && e.$$typeof === c;
      }
      var _r = ".", Yr = ":";
      function tr(e) {
        var n = /[=:]/g, i = {
          "=": "=0",
          ":": "=2"
        }, u = e.replace(n, function(d) {
          return i[d];
        });
        return "$" + u;
      }
      var nr = !1, Se = /\/+/g;
      function Be(e) {
        return e.replace(Se, "$&/");
      }
      function Fe(e, n) {
        return typeof e == "object" && e !== null && e.key != null ? (Ae(e.key), tr("" + e.key)) : n.toString(36);
      }
      function Ie(e, n, i, u, d) {
        var g = typeof e;
        (g === "undefined" || g === "boolean") && (e = null);
        var h = !1;
        if (e === null)
          h = !0;
        else
          switch (g) {
            case "string":
            case "number":
              h = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case c:
                case p:
                  h = !0;
              }
          }
        if (h) {
          var b = e, k = d(b), M = u === "" ? _r + Fe(b, 0) : u;
          if (ze(k)) {
            var z = "";
            M != null && (z = Be(M) + "/"), Ie(k, n, z, "", function(Dn) {
              return Dn;
            });
          } else k != null && (Ce(k) && (k.key && (!b || b.key !== k.key) && Ae(k.key), k = Ur(
            k,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            i + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (k.key && (!b || b.key !== k.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Be("" + k.key) + "/"
            ) : "") + M
          )), n.push(k));
          return 1;
        }
        var U, Y, X = 0, ee = u === "" ? _r : u + Yr;
        if (ze(e))
          for (var Tr = 0; Tr < e.length; Tr++)
            U = e[Tr], Y = ee + Fe(U, Tr), X += Ie(U, n, i, Y, d);
        else {
          var it = K(e);
          if (typeof it == "function") {
            var Wt = e;
            it === Wt.entries && (nr || ve("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), nr = !0);
            for (var jn = it.call(Wt), zt, An = 0; !(zt = jn.next()).done; )
              U = zt.value, Y = ee + Fe(U, An++), X += Ie(U, n, i, Y, d);
          } else if (g === "object") {
            var Ut = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (Ut === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : Ut) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return X;
      }
      function Ke(e, n, i) {
        if (e == null)
          return e;
        var u = [], d = 0;
        return Ie(e, u, "", "", function(g) {
          return n.call(i, g, d++);
        }), u;
      }
      function gr(e) {
        var n = 0;
        return Ke(e, function() {
          n++;
        }), n;
      }
      function Br(e, n, i) {
        Ke(e, function() {
          n.apply(this, arguments);
        }, i);
      }
      function br(e) {
        return Ke(e, function(n) {
          return n;
        }) || [];
      }
      function Er(e) {
        if (!Ce(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function Kr(e) {
        var n = {
          $$typeof: L,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        n.Provider = {
          $$typeof: R,
          _context: n
        };
        var i = !1, u = !1, d = !1;
        {
          var g = {
            $$typeof: L,
            _context: n
          };
          Object.defineProperties(g, {
            Provider: {
              get: function() {
                return u || (u = !0, _("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), n.Provider;
              },
              set: function(h) {
                n.Provider = h;
              }
            },
            _currentValue: {
              get: function() {
                return n._currentValue;
              },
              set: function(h) {
                n._currentValue = h;
              }
            },
            _currentValue2: {
              get: function() {
                return n._currentValue2;
              },
              set: function(h) {
                n._currentValue2 = h;
              }
            },
            _threadCount: {
              get: function() {
                return n._threadCount;
              },
              set: function(h) {
                n._threadCount = h;
              }
            },
            Consumer: {
              get: function() {
                return i || (i = !0, _("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), n.Consumer;
              }
            },
            displayName: {
              get: function() {
                return n.displayName;
              },
              set: function(h) {
                d || (ve("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", h), d = !0);
              }
            }
          }), n.Consumer = g;
        }
        return n._currentRenderer = null, n._currentRenderer2 = null, n;
      }
      var $e = -1, qe = 0, ar = 1, qr = 2;
      function Hr(e) {
        if (e._status === $e) {
          var n = e._result, i = n();
          if (i.then(function(g) {
            if (e._status === qe || e._status === $e) {
              var h = e;
              h._status = ar, h._result = g;
            }
          }, function(g) {
            if (e._status === qe || e._status === $e) {
              var h = e;
              h._status = qr, h._result = g;
            }
          }), e._status === $e) {
            var u = e;
            u._status = qe, u._result = i;
          }
        }
        if (e._status === ar) {
          var d = e._result;
          return d === void 0 && _(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, d), "default" in d || _(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, d), d.default;
        } else
          throw e._result;
      }
      function Gr(e) {
        var n = {
          // We use these fields to store the result.
          _status: $e,
          _result: e
        }, i = {
          $$typeof: te,
          _payload: n,
          _init: Hr
        };
        {
          var u, d;
          Object.defineProperties(i, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return u;
              },
              set: function(g) {
                _("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), u = g, Object.defineProperty(i, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return d;
              },
              set: function(g) {
                _("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), d = g, Object.defineProperty(i, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return i;
      }
      function Jr(e) {
        e != null && e.$$typeof === H ? _("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? _("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && _("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && _("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var n = {
          $$typeof: j,
          render: e
        };
        {
          var i;
          Object.defineProperty(n, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return i;
            },
            set: function(u) {
              i = u, !e.name && !e.displayName && (e.displayName = u);
            }
          });
        }
        return n;
      }
      var a;
      a = Symbol.for("react.module.reference");
      function f(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === m || e === S || oe || e === E || e === W || e === B || ae || e === _e || Te || Qe || ke || typeof e == "object" && e !== null && (e.$$typeof === te || e.$$typeof === H || e.$$typeof === R || e.$$typeof === L || e.$$typeof === j || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === a || e.getModuleId !== void 0));
      }
      function v(e, n) {
        f(e) || _("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var i = {
          $$typeof: H,
          type: e,
          compare: n === void 0 ? null : n
        };
        {
          var u;
          Object.defineProperty(i, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return u;
            },
            set: function(d) {
              u = d, !e.name && !e.displayName && (e.displayName = d);
            }
          });
        }
        return i;
      }
      function y() {
        var e = Re.current;
        return e === null && _(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function D(e) {
        var n = y();
        if (e._context !== void 0) {
          var i = e._context;
          i.Consumer === e ? _("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : i.Provider === e && _("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return n.useContext(e);
      }
      function F(e) {
        var n = y();
        return n.useState(e);
      }
      function P(e, n, i) {
        var u = y();
        return u.useReducer(e, n, i);
      }
      function w(e) {
        var n = y();
        return n.useRef(e);
      }
      function Z(e, n) {
        var i = y();
        return i.useEffect(e, n);
      }
      function V(e, n) {
        var i = y();
        return i.useInsertionEffect(e, n);
      }
      function q(e, n) {
        var i = y();
        return i.useLayoutEffect(e, n);
      }
      function ie(e, n) {
        var i = y();
        return i.useCallback(e, n);
      }
      function Oe(e, n) {
        var i = y();
        return i.useMemo(e, n);
      }
      function Ee(e, n, i) {
        var u = y();
        return u.useImperativeHandle(e, n, i);
      }
      function re(e, n) {
        {
          var i = y();
          return i.useDebugValue(e, n);
        }
      }
      function or() {
        var e = y();
        return e.useTransition();
      }
      function Xr(e) {
        var n = y();
        return n.useDeferredValue(e);
      }
      function Qr() {
        var e = y();
        return e.useId();
      }
      function ln(e, n, i) {
        var u = y();
        return u.useSyncExternalStore(e, n, i);
      }
      var ir = 0, gt, bt, Et, Rt, wt, Ct, St;
      function Ot() {
      }
      Ot.__reactDisabledLog = !0;
      function dn() {
        {
          if (ir === 0) {
            gt = console.log, bt = console.info, Et = console.warn, Rt = console.error, wt = console.group, Ct = console.groupCollapsed, St = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Ot,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          ir++;
        }
      }
      function pn() {
        {
          if (ir--, ir === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: l({}, e, {
                value: gt
              }),
              info: l({}, e, {
                value: bt
              }),
              warn: l({}, e, {
                value: Et
              }),
              error: l({}, e, {
                value: Rt
              }),
              group: l({}, e, {
                value: wt
              }),
              groupCollapsed: l({}, e, {
                value: Ct
              }),
              groupEnd: l({}, e, {
                value: St
              })
            });
          }
          ir < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Zr = Q.ReactCurrentDispatcher, et;
      function Rr(e, n, i) {
        {
          if (et === void 0)
            try {
              throw Error();
            } catch (d) {
              var u = d.stack.trim().match(/\n( *(at )?)/);
              et = u && u[1] || "";
            }
          return `
` + et + e;
        }
      }
      var rt = !1, wr;
      {
        var vn = typeof WeakMap == "function" ? WeakMap : Map;
        wr = new vn();
      }
      function Pt(e, n) {
        if (!e || rt)
          return "";
        {
          var i = wr.get(e);
          if (i !== void 0)
            return i;
        }
        var u;
        rt = !0;
        var d = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var g;
        g = Zr.current, Zr.current = null, dn();
        try {
          if (n) {
            var h = function() {
              throw Error();
            };
            if (Object.defineProperty(h.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(h, []);
              } catch (ee) {
                u = ee;
              }
              Reflect.construct(e, [], h);
            } else {
              try {
                h.call();
              } catch (ee) {
                u = ee;
              }
              e.call(h.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (ee) {
              u = ee;
            }
            e();
          }
        } catch (ee) {
          if (ee && u && typeof ee.stack == "string") {
            for (var b = ee.stack.split(`
`), k = u.stack.split(`
`), M = b.length - 1, z = k.length - 1; M >= 1 && z >= 0 && b[M] !== k[z]; )
              z--;
            for (; M >= 1 && z >= 0; M--, z--)
              if (b[M] !== k[z]) {
                if (M !== 1 || z !== 1)
                  do
                    if (M--, z--, z < 0 || b[M] !== k[z]) {
                      var U = `
` + b[M].replace(" at new ", " at ");
                      return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), typeof e == "function" && wr.set(e, U), U;
                    }
                  while (M >= 1 && z >= 0);
                break;
              }
          }
        } finally {
          rt = !1, Zr.current = g, pn(), Error.prepareStackTrace = d;
        }
        var Y = e ? e.displayName || e.name : "", X = Y ? Rr(Y) : "";
        return typeof e == "function" && wr.set(e, X), X;
      }
      function yn(e, n, i) {
        return Pt(e, !1);
      }
      function hn(e) {
        var n = e.prototype;
        return !!(n && n.isReactComponent);
      }
      function Cr(e, n, i) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Pt(e, hn(e));
        if (typeof e == "string")
          return Rr(e);
        switch (e) {
          case W:
            return Rr("Suspense");
          case B:
            return Rr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case j:
              return yn(e.render);
            case H:
              return Cr(e.type, n, i);
            case te: {
              var u = e, d = u._payload, g = u._init;
              try {
                return Cr(g(d), n, i);
              } catch {
              }
            }
          }
        return "";
      }
      var Tt = {}, kt = Q.ReactDebugCurrentFrame;
      function Sr(e) {
        if (e) {
          var n = e._owner, i = Cr(e.type, e._source, n ? n.type : null);
          kt.setExtraStackFrame(i);
        } else
          kt.setExtraStackFrame(null);
      }
      function mn(e, n, i, u, d) {
        {
          var g = Function.call.bind(xe);
          for (var h in e)
            if (g(e, h)) {
              var b = void 0;
              try {
                if (typeof e[h] != "function") {
                  var k = Error((u || "React class") + ": " + i + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw k.name = "Invariant Violation", k;
                }
                b = e[h](n, h, u, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (M) {
                b = M;
              }
              b && !(b instanceof Error) && (Sr(d), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", i, h, typeof b), Sr(null)), b instanceof Error && !(b.message in Tt) && (Tt[b.message] = !0, Sr(d), _("Failed %s type: %s", i, b.message), Sr(null));
            }
        }
      }
      function He(e) {
        if (e) {
          var n = e._owner, i = Cr(e.type, e._source, n ? n.type : null);
          Pe(i);
        } else
          Pe(null);
      }
      var tt;
      tt = !1;
      function jt() {
        if (ne.current) {
          var e = me(ne.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function _n(e) {
        if (e !== void 0) {
          var n = e.fileName.replace(/^.*[\\\/]/, ""), i = e.lineNumber;
          return `

Check your code at ` + n + ":" + i + ".";
        }
        return "";
      }
      function gn(e) {
        return e != null ? _n(e.__source) : "";
      }
      var At = {};
      function bn(e) {
        var n = jt();
        if (!n) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (n = `

Check the top-level render call using <` + i + ">.");
        }
        return n;
      }
      function Dt(e, n) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var i = bn(n);
          if (!At[i]) {
            At[i] = !0;
            var u = "";
            e && e._owner && e._owner !== ne.current && (u = " It was passed a child from " + me(e._owner.type) + "."), He(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, u), He(null);
          }
        }
      }
      function xt(e, n) {
        if (typeof e == "object") {
          if (ze(e))
            for (var i = 0; i < e.length; i++) {
              var u = e[i];
              Ce(u) && Dt(u, n);
            }
          else if (Ce(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var d = K(e);
            if (typeof d == "function" && d !== e.entries)
              for (var g = d.call(e), h; !(h = g.next()).done; )
                Ce(h.value) && Dt(h.value, n);
          }
        }
      }
      function Ft(e) {
        {
          var n = e.type;
          if (n == null || typeof n == "string")
            return;
          var i;
          if (typeof n == "function")
            i = n.propTypes;
          else if (typeof n == "object" && (n.$$typeof === j || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          n.$$typeof === H))
            i = n.propTypes;
          else
            return;
          if (i) {
            var u = me(n);
            mn(i, e.props, "prop", u, e);
          } else if (n.PropTypes !== void 0 && !tt) {
            tt = !0;
            var d = me(n);
            _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
          }
          typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function En(e) {
        {
          for (var n = Object.keys(e.props), i = 0; i < n.length; i++) {
            var u = n[i];
            if (u !== "children" && u !== "key") {
              He(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), He(null);
              break;
            }
          }
          e.ref !== null && (He(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), He(null));
        }
      }
      function It(e, n, i) {
        var u = f(e);
        if (!u) {
          var d = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = gn(n);
          g ? d += g : d += jt();
          var h;
          e === null ? h = "null" : ze(e) ? h = "array" : e !== void 0 && e.$$typeof === c ? (h = "<" + (me(e.type) || "Unknown") + " />", d = " Did you accidentally export a JSX literal instead of a component?") : h = typeof e, _("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", h, d);
        }
        var b = zr.apply(this, arguments);
        if (b == null)
          return b;
        if (u)
          for (var k = 2; k < arguments.length; k++)
            xt(arguments[k], e);
        return e === m ? En(b) : Ft(b), b;
      }
      var $t = !1;
      function Rn(e) {
        var n = It.bind(null, e);
        return n.type = e, $t || ($t = !0, ve("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(n, "type", {
          enumerable: !1,
          get: function() {
            return ve("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), n;
      }
      function wn(e, n, i) {
        for (var u = Vr.apply(this, arguments), d = 2; d < arguments.length; d++)
          xt(arguments[d], u.type);
        return Ft(u), u;
      }
      function Cn(e, n) {
        var i = pe.transition;
        pe.transition = {};
        var u = pe.transition;
        pe.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (pe.transition = i, i === null && u._updatedFibers) {
            var d = u._updatedFibers.size;
            d > 10 && ve("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), u._updatedFibers.clear();
          }
        }
      }
      var Mt = !1, Or = null;
      function Sn(e) {
        if (Or === null)
          try {
            var n = ("require" + Math.random()).slice(0, 7), i = r && r[n];
            Or = i.call(r, "timers").setImmediate;
          } catch {
            Or = function(d) {
              Mt === !1 && (Mt = !0, typeof MessageChannel > "u" && _("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var g = new MessageChannel();
              g.port1.onmessage = d, g.port2.postMessage(void 0);
            };
          }
        return Or(e);
      }
      var Ge = 0, Nt = !1;
      function Lt(e) {
        {
          var n = Ge;
          Ge++, G.current === null && (G.current = []);
          var i = G.isBatchingLegacy, u;
          try {
            if (G.isBatchingLegacy = !0, u = e(), !i && G.didScheduleLegacyUpdate) {
              var d = G.current;
              d !== null && (G.didScheduleLegacyUpdate = !1, ot(d));
            }
          } catch (Y) {
            throw Pr(n), Y;
          } finally {
            G.isBatchingLegacy = i;
          }
          if (u !== null && typeof u == "object" && typeof u.then == "function") {
            var g = u, h = !1, b = {
              then: function(Y, X) {
                h = !0, g.then(function(ee) {
                  Pr(n), Ge === 0 ? nt(ee, Y, X) : Y(ee);
                }, function(ee) {
                  Pr(n), X(ee);
                });
              }
            };
            return !Nt && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              h || (Nt = !0, _("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), b;
          } else {
            var k = u;
            if (Pr(n), Ge === 0) {
              var M = G.current;
              M !== null && (ot(M), G.current = null);
              var z = {
                then: function(Y, X) {
                  G.current === null ? (G.current = [], nt(k, Y, X)) : Y(k);
                }
              };
              return z;
            } else {
              var U = {
                then: function(Y, X) {
                  Y(k);
                }
              };
              return U;
            }
          }
        }
      }
      function Pr(e) {
        e !== Ge - 1 && _("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ge = e;
      }
      function nt(e, n, i) {
        {
          var u = G.current;
          if (u !== null)
            try {
              ot(u), Sn(function() {
                u.length === 0 ? (G.current = null, n(e)) : nt(e, n, i);
              });
            } catch (d) {
              i(d);
            }
          else
            n(e);
        }
      }
      var at = !1;
      function ot(e) {
        if (!at) {
          at = !0;
          var n = 0;
          try {
            for (; n < e.length; n++) {
              var i = e[n];
              do
                i = i(!0);
              while (i !== null);
            }
            e.length = 0;
          } catch (u) {
            throw e = e.slice(n + 1), u;
          } finally {
            at = !1;
          }
        }
      }
      var On = It, Pn = wn, Tn = Rn, kn = {
        map: Ke,
        forEach: Br,
        count: gr,
        toArray: br,
        only: Er
      };
      t.Children = kn, t.Component = T, t.Fragment = m, t.Profiler = S, t.PureComponent = x, t.StrictMode = E, t.Suspense = W, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q, t.act = Lt, t.cloneElement = Pn, t.createContext = Kr, t.createElement = On, t.createFactory = Tn, t.createRef = Nr, t.forwardRef = Jr, t.isValidElement = Ce, t.lazy = Gr, t.memo = v, t.startTransition = Cn, t.unstable_act = Lt, t.useCallback = ie, t.useContext = D, t.useDebugValue = re, t.useDeferredValue = Xr, t.useEffect = Z, t.useId = Qr, t.useImperativeHandle = Ee, t.useInsertionEffect = V, t.useLayoutEffect = q, t.useMemo = Oe, t.useReducer = P, t.useRef = w, t.useState = F, t.useSyncExternalStore = ln, t.useTransition = or, t.version = s, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(cr, cr.exports)), cr.exports;
}
var Bt;
function yt() {
  return Bt || (Bt = 1, process.env.NODE_ENV === "production" ? jr.exports = xn() : jr.exports = Fn()), jr.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kt;
function In() {
  if (Kt) return ur;
  Kt = 1;
  var r = yt(), t = Symbol.for("react.element"), s = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, p = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(S, R, L) {
    var j, W = {}, B = null, H = null;
    L !== void 0 && (B = "" + L), R.key !== void 0 && (B = "" + R.key), R.ref !== void 0 && (H = R.ref);
    for (j in R) c.call(R, j) && !m.hasOwnProperty(j) && (W[j] = R[j]);
    if (S && S.defaultProps) for (j in R = S.defaultProps, R) W[j] === void 0 && (W[j] = R[j]);
    return { $$typeof: t, type: S, key: B, ref: H, props: W, _owner: p.current };
  }
  return ur.Fragment = s, ur.jsx = E, ur.jsxs = E, ur;
}
var sr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qt;
function $n() {
  return qt || (qt = 1, process.env.NODE_ENV !== "production" && function() {
    var r = yt(), t = Symbol.for("react.element"), s = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), S = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), H = Symbol.for("react.offscreen"), te = Symbol.iterator, _e = "@@iterator";
    function le(a) {
      if (a === null || typeof a != "object")
        return null;
      var f = te && a[te] || a[_e];
      return typeof f == "function" ? f : null;
    }
    var de = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function K(a) {
      {
        for (var f = arguments.length, v = new Array(f > 1 ? f - 1 : 0), y = 1; y < f; y++)
          v[y - 1] = arguments[y];
        Re("error", a, v);
      }
    }
    function Re(a, f, v) {
      {
        var y = de.ReactDebugCurrentFrame, D = y.getStackAddendum();
        D !== "" && (f += "%s", v = v.concat([D]));
        var F = v.map(function(P) {
          return String(P);
        });
        F.unshift("Warning: " + f), Function.prototype.apply.call(console[a], console, F);
      }
    }
    var pe = !1, G = !1, ne = !1, ye = !1, ge = !1, Pe;
    Pe = Symbol.for("react.module.reference");
    function Te(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === c || a === m || ge || a === p || a === L || a === j || ye || a === H || pe || G || ne || typeof a == "object" && a !== null && (a.$$typeof === B || a.$$typeof === W || a.$$typeof === E || a.$$typeof === S || a.$$typeof === R || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === Pe || a.getModuleId !== void 0));
    }
    function Qe(a, f, v) {
      var y = a.displayName;
      if (y)
        return y;
      var D = f.displayName || f.name || "";
      return D !== "" ? v + "(" + D + ")" : v;
    }
    function ke(a) {
      return a.displayName || "Context";
    }
    function ae(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && K("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case c:
          return "Fragment";
        case s:
          return "Portal";
        case m:
          return "Profiler";
        case p:
          return "StrictMode";
        case L:
          return "Suspense";
        case j:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case S:
            var f = a;
            return ke(f) + ".Consumer";
          case E:
            var v = a;
            return ke(v._context) + ".Provider";
          case R:
            return Qe(a, a.render, "ForwardRef");
          case W:
            var y = a.displayName || null;
            return y !== null ? y : ae(a.type) || "Memo";
          case B: {
            var D = a, F = D._payload, P = D._init;
            try {
              return ae(P(F));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var oe = Object.assign, Q = 0, ve, _, he, je, be, o, l;
    function O() {
    }
    O.__reactDisabledLog = !0;
    function T() {
      {
        if (Q === 0) {
          ve = console.log, _ = console.info, he = console.warn, je = console.error, be = console.group, o = console.groupCollapsed, l = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: O,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        Q++;
      }
    }
    function A() {
      {
        if (Q--, Q === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: oe({}, a, {
              value: ve
            }),
            info: oe({}, a, {
              value: _
            }),
            warn: oe({}, a, {
              value: he
            }),
            error: oe({}, a, {
              value: je
            }),
            group: oe({}, a, {
              value: be
            }),
            groupCollapsed: oe({}, a, {
              value: o
            }),
            groupEnd: oe({}, a, {
              value: l
            })
          });
        }
        Q < 0 && K("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var N = de.ReactCurrentDispatcher, $;
    function I(a, f, v) {
      {
        if ($ === void 0)
          try {
            throw Error();
          } catch (D) {
            var y = D.stack.trim().match(/\n( *(at )?)/);
            $ = y && y[1] || "";
          }
        return `
` + $ + a;
      }
    }
    var x = !1, J;
    {
      var Nr = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Nr();
    }
    function dr(a, f) {
      if (!a || x)
        return "";
      {
        var v = J.get(a);
        if (v !== void 0)
          return v;
      }
      var y;
      x = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var F;
      F = N.current, N.current = null, T();
      try {
        if (f) {
          var P = function() {
            throw Error();
          };
          if (Object.defineProperty(P.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(P, []);
            } catch (re) {
              y = re;
            }
            Reflect.construct(a, [], P);
          } else {
            try {
              P.call();
            } catch (re) {
              y = re;
            }
            a.call(P.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (re) {
            y = re;
          }
          a();
        }
      } catch (re) {
        if (re && y && typeof re.stack == "string") {
          for (var w = re.stack.split(`
`), Z = y.stack.split(`
`), V = w.length - 1, q = Z.length - 1; V >= 1 && q >= 0 && w[V] !== Z[q]; )
            q--;
          for (; V >= 1 && q >= 0; V--, q--)
            if (w[V] !== Z[q]) {
              if (V !== 1 || q !== 1)
                do
                  if (V--, q--, q < 0 || w[V] !== Z[q]) {
                    var ie = `
` + w[V].replace(" at new ", " at ");
                    return a.displayName && ie.includes("<anonymous>") && (ie = ie.replace("<anonymous>", a.displayName)), typeof a == "function" && J.set(a, ie), ie;
                  }
                while (V >= 1 && q >= 0);
              break;
            }
        }
      } finally {
        x = !1, N.current = F, A(), Error.prepareStackTrace = D;
      }
      var Oe = a ? a.displayName || a.name : "", Ee = Oe ? I(Oe) : "";
      return typeof a == "function" && J.set(a, Ee), Ee;
    }
    function ze(a, f, v) {
      return dr(a, !1);
    }
    function Lr(a) {
      var f = a.prototype;
      return !!(f && f.isReactComponent);
    }
    function Ue(a, f, v) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return dr(a, Lr(a));
      if (typeof a == "string")
        return I(a);
      switch (a) {
        case L:
          return I("Suspense");
        case j:
          return I("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case R:
            return ze(a.render);
          case W:
            return Ue(a.type, f, v);
          case B: {
            var y = a, D = y._payload, F = y._init;
            try {
              return Ue(F(D), f, v);
            } catch {
            }
          }
        }
      return "";
    }
    var we = Object.prototype.hasOwnProperty, Ae = {}, pr = de.ReactDebugCurrentFrame;
    function De(a) {
      if (a) {
        var f = a._owner, v = Ue(a.type, a._source, f ? f.type : null);
        pr.setExtraStackFrame(v);
      } else
        pr.setExtraStackFrame(null);
    }
    function me(a, f, v, y, D) {
      {
        var F = Function.call.bind(we);
        for (var P in a)
          if (F(a, P)) {
            var w = void 0;
            try {
              if (typeof a[P] != "function") {
                var Z = Error((y || "React class") + ": " + v + " type `" + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[P] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Z.name = "Invariant Violation", Z;
              }
              w = a[P](f, P, y, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (V) {
              w = V;
            }
            w && !(w instanceof Error) && (De(D), K("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", y || "React class", v, P, typeof w), De(null)), w instanceof Error && !(w.message in Ae) && (Ae[w.message] = !0, De(D), K("Failed %s type: %s", v, w.message), De(null));
          }
      }
    }
    var xe = Array.isArray;
    function Ve(a) {
      return xe(a);
    }
    function vr(a) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, v = f && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return v;
      }
    }
    function yr(a) {
      try {
        return Ye(a), !1;
      } catch {
        return !0;
      }
    }
    function Ye(a) {
      return "" + a;
    }
    function Ze(a) {
      if (yr(a))
        return K("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vr(a)), Ye(a);
    }
    var er = de.ReactCurrentOwner, Wr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, hr, mr;
    function rr(a) {
      if (we.call(a, "ref")) {
        var f = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function zr(a) {
      if (we.call(a, "key")) {
        var f = Object.getOwnPropertyDescriptor(a, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function Ur(a, f) {
      typeof a.ref == "string" && er.current;
    }
    function Vr(a, f) {
      {
        var v = function() {
          hr || (hr = !0, K("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        v.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function Ce(a, f) {
      {
        var v = function() {
          mr || (mr = !0, K("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        v.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var _r = function(a, f, v, y, D, F, P) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: a,
        key: f,
        ref: v,
        props: P,
        // Record the component responsible for creating this element.
        _owner: F
      };
      return w._store = {}, Object.defineProperty(w._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(w, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function Yr(a, f, v, y, D) {
      {
        var F, P = {}, w = null, Z = null;
        v !== void 0 && (Ze(v), w = "" + v), zr(f) && (Ze(f.key), w = "" + f.key), rr(f) && (Z = f.ref, Ur(f, D));
        for (F in f)
          we.call(f, F) && !Wr.hasOwnProperty(F) && (P[F] = f[F]);
        if (a && a.defaultProps) {
          var V = a.defaultProps;
          for (F in V)
            P[F] === void 0 && (P[F] = V[F]);
        }
        if (w || Z) {
          var q = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          w && Vr(P, q), Z && Ce(P, q);
        }
        return _r(a, w, Z, D, y, er.current, P);
      }
    }
    var tr = de.ReactCurrentOwner, nr = de.ReactDebugCurrentFrame;
    function Se(a) {
      if (a) {
        var f = a._owner, v = Ue(a.type, a._source, f ? f.type : null);
        nr.setExtraStackFrame(v);
      } else
        nr.setExtraStackFrame(null);
    }
    var Be;
    Be = !1;
    function Fe(a) {
      return typeof a == "object" && a !== null && a.$$typeof === t;
    }
    function Ie() {
      {
        if (tr.current) {
          var a = ae(tr.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function Ke(a) {
      return "";
    }
    var gr = {};
    function Br(a) {
      {
        var f = Ie();
        if (!f) {
          var v = typeof a == "string" ? a : a.displayName || a.name;
          v && (f = `

Check the top-level render call using <` + v + ">.");
        }
        return f;
      }
    }
    function br(a, f) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var v = Br(f);
        if (gr[v])
          return;
        gr[v] = !0;
        var y = "";
        a && a._owner && a._owner !== tr.current && (y = " It was passed a child from " + ae(a._owner.type) + "."), Se(a), K('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, y), Se(null);
      }
    }
    function Er(a, f) {
      {
        if (typeof a != "object")
          return;
        if (Ve(a))
          for (var v = 0; v < a.length; v++) {
            var y = a[v];
            Fe(y) && br(y, f);
          }
        else if (Fe(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var D = le(a);
          if (typeof D == "function" && D !== a.entries)
            for (var F = D.call(a), P; !(P = F.next()).done; )
              Fe(P.value) && br(P.value, f);
        }
      }
    }
    function Kr(a) {
      {
        var f = a.type;
        if (f == null || typeof f == "string")
          return;
        var v;
        if (typeof f == "function")
          v = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === R || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === W))
          v = f.propTypes;
        else
          return;
        if (v) {
          var y = ae(f);
          me(v, a.props, "prop", y, a);
        } else if (f.PropTypes !== void 0 && !Be) {
          Be = !0;
          var D = ae(f);
          K("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && K("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function $e(a) {
      {
        for (var f = Object.keys(a.props), v = 0; v < f.length; v++) {
          var y = f[v];
          if (y !== "children" && y !== "key") {
            Se(a), K("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", y), Se(null);
            break;
          }
        }
        a.ref !== null && (Se(a), K("Invalid attribute `ref` supplied to `React.Fragment`."), Se(null));
      }
    }
    var qe = {};
    function ar(a, f, v, y, D, F) {
      {
        var P = Te(a);
        if (!P) {
          var w = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Z = Ke();
          Z ? w += Z : w += Ie();
          var V;
          a === null ? V = "null" : Ve(a) ? V = "array" : a !== void 0 && a.$$typeof === t ? (V = "<" + (ae(a.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : V = typeof a, K("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", V, w);
        }
        var q = Yr(a, f, v, D, F);
        if (q == null)
          return q;
        if (P) {
          var ie = f.children;
          if (ie !== void 0)
            if (y)
              if (Ve(ie)) {
                for (var Oe = 0; Oe < ie.length; Oe++)
                  Er(ie[Oe], a);
                Object.freeze && Object.freeze(ie);
              } else
                K("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Er(ie, a);
        }
        if (we.call(f, "key")) {
          var Ee = ae(a), re = Object.keys(f).filter(function(Qr) {
            return Qr !== "key";
          }), or = re.length > 0 ? "{key: someKey, " + re.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!qe[Ee + or]) {
            var Xr = re.length > 0 ? "{" + re.join(": ..., ") + ": ...}" : "{}";
            K(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, or, Ee, Xr, Ee), qe[Ee + or] = !0;
          }
        }
        return a === c ? $e(q) : Kr(q), q;
      }
    }
    function qr(a, f, v) {
      return ar(a, f, v, !0);
    }
    function Hr(a, f, v) {
      return ar(a, f, v, !1);
    }
    var Gr = Hr, Jr = qr;
    sr.Fragment = c, sr.jsx = Gr, sr.jsxs = Jr;
  }()), sr;
}
var Ht;
function Mn() {
  return Ht || (Ht = 1, process.env.NODE_ENV === "production" ? kr.exports = In() : kr.exports = $n()), kr.exports;
}
var Ne = Mn(), ue = yt(), tn = Symbol.for("immer-nothing"), Gt = Symbol.for("immer-draftable"), ce = Symbol.for("immer-state"), Nn = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(r) {
    return `The plugin for '${r}' has not been loaded into Immer. To enable the plugin, import and call \`enable${r}()\` when initializing your application.`;
  },
  function(r) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${r}'`;
  },
  "This object has been frozen and should not be mutated",
  function(r) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + r;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(r) {
    return `'current' expects a draft, got: ${r}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(r) {
    return `'original' expects a draft, got: ${r}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function se(r, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const s = Nn[r], c = typeof s == "function" ? s.apply(null, t) : s;
    throw new Error(`[Immer] ${c}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${r}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Je = Object.getPrototypeOf;
function Xe(r) {
  return !!r && !!r[ce];
}
function Le(r) {
  var t;
  return r ? nn(r) || Array.isArray(r) || !!r[Gt] || !!((t = r.constructor) != null && t[Gt]) || Ir(r) || $r(r) : !1;
}
var Ln = Object.prototype.constructor.toString();
function nn(r) {
  if (!r || typeof r != "object")
    return !1;
  const t = Je(r);
  if (t === null)
    return !0;
  const s = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return s === Object ? !0 : typeof s == "function" && Function.toString.call(s) === Ln;
}
function Ar(r, t) {
  Fr(r) === 0 ? Reflect.ownKeys(r).forEach((s) => {
    t(s, r[s], r);
  }) : r.forEach((s, c) => t(c, s, r));
}
function Fr(r) {
  const t = r[ce];
  return t ? t.type_ : Array.isArray(r) ? 1 : Ir(r) ? 2 : $r(r) ? 3 : 0;
}
function ct(r, t) {
  return Fr(r) === 2 ? r.has(t) : Object.prototype.hasOwnProperty.call(r, t);
}
function an(r, t, s) {
  const c = Fr(r);
  c === 2 ? r.set(t, s) : c === 3 ? r.add(s) : r[t] = s;
}
function Wn(r, t) {
  return r === t ? r !== 0 || 1 / r === 1 / t : r !== r && t !== t;
}
function Ir(r) {
  return r instanceof Map;
}
function $r(r) {
  return r instanceof Set;
}
function Me(r) {
  return r.copy_ || r.base_;
}
function ft(r, t) {
  if (Ir(r))
    return new Map(r);
  if ($r(r))
    return new Set(r);
  if (Array.isArray(r))
    return Array.prototype.slice.call(r);
  const s = nn(r);
  if (t === !0 || t === "class_only" && !s) {
    const c = Object.getOwnPropertyDescriptors(r);
    delete c[ce];
    let p = Reflect.ownKeys(c);
    for (let m = 0; m < p.length; m++) {
      const E = p[m], S = c[E];
      S.writable === !1 && (S.writable = !0, S.configurable = !0), (S.get || S.set) && (c[E] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: S.enumerable,
        value: r[E]
      });
    }
    return Object.create(Je(r), c);
  } else {
    const c = Je(r);
    if (c !== null && s)
      return { ...r };
    const p = Object.create(c);
    return Object.assign(p, r);
  }
}
function ht(r, t = !1) {
  return Mr(r) || Xe(r) || !Le(r) || (Fr(r) > 1 && (r.set = r.add = r.clear = r.delete = zn), Object.freeze(r), t && Object.entries(r).forEach(([s, c]) => ht(c, !0))), r;
}
function zn() {
  se(2);
}
function Mr(r) {
  return Object.isFrozen(r);
}
var Un = {};
function We(r) {
  const t = Un[r];
  return t || se(0, r), t;
}
var fr;
function on() {
  return fr;
}
function Vn(r, t) {
  return {
    drafts_: [],
    parent_: r,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function Jt(r, t) {
  t && (We("Patches"), r.patches_ = [], r.inversePatches_ = [], r.patchListener_ = t);
}
function lt(r) {
  dt(r), r.drafts_.forEach(Yn), r.drafts_ = null;
}
function dt(r) {
  r === fr && (fr = r.parent_);
}
function Xt(r) {
  return fr = Vn(fr, r);
}
function Yn(r) {
  const t = r[ce];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Qt(r, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const s = t.drafts_[0];
  return r !== void 0 && r !== s ? (s[ce].modified_ && (lt(t), se(4)), Le(r) && (r = Dr(t, r), t.parent_ || xr(t, r)), t.patches_ && We("Patches").generateReplacementPatches_(
    s[ce].base_,
    r,
    t.patches_,
    t.inversePatches_
  )) : r = Dr(t, s, []), lt(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), r !== tn ? r : void 0;
}
function Dr(r, t, s) {
  if (Mr(t))
    return t;
  const c = t[ce];
  if (!c)
    return Ar(
      t,
      (p, m) => Zt(r, c, t, p, m, s)
    ), t;
  if (c.scope_ !== r)
    return t;
  if (!c.modified_)
    return xr(r, c.base_, !0), c.base_;
  if (!c.finalized_) {
    c.finalized_ = !0, c.scope_.unfinalizedDrafts_--;
    const p = c.copy_;
    let m = p, E = !1;
    c.type_ === 3 && (m = new Set(p), p.clear(), E = !0), Ar(
      m,
      (S, R) => Zt(r, c, p, S, R, s, E)
    ), xr(r, p, !1), s && r.patches_ && We("Patches").generatePatches_(
      c,
      s,
      r.patches_,
      r.inversePatches_
    );
  }
  return c.copy_;
}
function Zt(r, t, s, c, p, m, E) {
  if (process.env.NODE_ENV !== "production" && p === s && se(5), Xe(p)) {
    const S = m && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !ct(t.assigned_, c) ? m.concat(c) : void 0, R = Dr(r, p, S);
    if (an(s, c, R), Xe(R))
      r.canAutoFreeze_ = !1;
    else
      return;
  } else E && s.add(p);
  if (Le(p) && !Mr(p)) {
    if (!r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1)
      return;
    Dr(r, p), (!t || !t.scope_.parent_) && typeof c != "symbol" && Object.prototype.propertyIsEnumerable.call(s, c) && xr(r, p);
  }
}
function xr(r, t, s = !1) {
  !r.parent_ && r.immer_.autoFreeze_ && r.canAutoFreeze_ && ht(t, s);
}
function Bn(r, t) {
  const s = Array.isArray(r), c = {
    type_: s ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : on(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: r,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let p = c, m = mt;
  s && (p = [c], m = lr);
  const { revoke: E, proxy: S } = Proxy.revocable(p, m);
  return c.draft_ = S, c.revoke_ = E, S;
}
var mt = {
  get(r, t) {
    if (t === ce)
      return r;
    const s = Me(r);
    if (!ct(s, t))
      return Kn(r, s, t);
    const c = s[t];
    return r.finalized_ || !Le(c) ? c : c === ut(r.base_, t) ? (st(r), r.copy_[t] = vt(c, r)) : c;
  },
  has(r, t) {
    return t in Me(r);
  },
  ownKeys(r) {
    return Reflect.ownKeys(Me(r));
  },
  set(r, t, s) {
    const c = un(Me(r), t);
    if (c != null && c.set)
      return c.set.call(r.draft_, s), !0;
    if (!r.modified_) {
      const p = ut(Me(r), t), m = p == null ? void 0 : p[ce];
      if (m && m.base_ === s)
        return r.copy_[t] = s, r.assigned_[t] = !1, !0;
      if (Wn(s, p) && (s !== void 0 || ct(r.base_, t)))
        return !0;
      st(r), pt(r);
    }
    return r.copy_[t] === s && // special case: handle new props with value 'undefined'
    (s !== void 0 || t in r.copy_) || // special case: NaN
    Number.isNaN(s) && Number.isNaN(r.copy_[t]) || (r.copy_[t] = s, r.assigned_[t] = !0), !0;
  },
  deleteProperty(r, t) {
    return ut(r.base_, t) !== void 0 || t in r.base_ ? (r.assigned_[t] = !1, st(r), pt(r)) : delete r.assigned_[t], r.copy_ && delete r.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(r, t) {
    const s = Me(r), c = Reflect.getOwnPropertyDescriptor(s, t);
    return c && {
      writable: !0,
      configurable: r.type_ !== 1 || t !== "length",
      enumerable: c.enumerable,
      value: s[t]
    };
  },
  defineProperty() {
    se(11);
  },
  getPrototypeOf(r) {
    return Je(r.base_);
  },
  setPrototypeOf() {
    se(12);
  }
}, lr = {};
Ar(mt, (r, t) => {
  lr[r] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
lr.deleteProperty = function(r, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && se(13), lr.set.call(this, r, t, void 0);
};
lr.set = function(r, t, s) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && se(14), mt.set.call(this, r[0], t, s, r[0]);
};
function ut(r, t) {
  const s = r[ce];
  return (s ? Me(s) : r)[t];
}
function Kn(r, t, s) {
  var p;
  const c = un(t, s);
  return c ? "value" in c ? c.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (p = c.get) == null ? void 0 : p.call(r.draft_)
  ) : void 0;
}
function un(r, t) {
  if (!(t in r))
    return;
  let s = Je(r);
  for (; s; ) {
    const c = Object.getOwnPropertyDescriptor(s, t);
    if (c)
      return c;
    s = Je(s);
  }
}
function pt(r) {
  r.modified_ || (r.modified_ = !0, r.parent_ && pt(r.parent_));
}
function st(r) {
  r.copy_ || (r.copy_ = ft(
    r.base_,
    r.scope_.immer_.useStrictShallowCopy_
  ));
}
var qn = class {
  constructor(r) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, s, c) => {
      if (typeof t == "function" && typeof s != "function") {
        const m = s;
        s = t;
        const E = this;
        return function(R = m, ...L) {
          return E.produce(R, (j) => s.call(this, j, ...L));
        };
      }
      typeof s != "function" && se(6), c !== void 0 && typeof c != "function" && se(7);
      let p;
      if (Le(t)) {
        const m = Xt(this), E = vt(t, void 0);
        let S = !0;
        try {
          p = s(E), S = !1;
        } finally {
          S ? lt(m) : dt(m);
        }
        return Jt(m, c), Qt(p, m);
      } else if (!t || typeof t != "object") {
        if (p = s(t), p === void 0 && (p = t), p === tn && (p = void 0), this.autoFreeze_ && ht(p, !0), c) {
          const m = [], E = [];
          We("Patches").generateReplacementPatches_(t, p, m, E), c(m, E);
        }
        return p;
      } else
        se(1, t);
    }, this.produceWithPatches = (t, s) => {
      if (typeof t == "function")
        return (E, ...S) => this.produceWithPatches(E, (R) => t(R, ...S));
      let c, p;
      return [this.produce(t, s, (E, S) => {
        c = E, p = S;
      }), c, p];
    }, typeof (r == null ? void 0 : r.autoFreeze) == "boolean" && this.setAutoFreeze(r.autoFreeze), typeof (r == null ? void 0 : r.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(r.useStrictShallowCopy);
  }
  createDraft(r) {
    Le(r) || se(8), Xe(r) && (r = Hn(r));
    const t = Xt(this), s = vt(r, void 0);
    return s[ce].isManual_ = !0, dt(t), s;
  }
  finishDraft(r, t) {
    const s = r && r[ce];
    (!s || !s.isManual_) && se(9);
    const { scope_: c } = s;
    return Jt(c, t), Qt(void 0, c);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(r) {
    this.autoFreeze_ = r;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(r) {
    this.useStrictShallowCopy_ = r;
  }
  applyPatches(r, t) {
    let s;
    for (s = t.length - 1; s >= 0; s--) {
      const p = t[s];
      if (p.path.length === 0 && p.op === "replace") {
        r = p.value;
        break;
      }
    }
    s > -1 && (t = t.slice(s + 1));
    const c = We("Patches").applyPatches_;
    return Xe(r) ? c(r, t) : this.produce(
      r,
      (p) => c(p, t)
    );
  }
};
function vt(r, t) {
  const s = Ir(r) ? We("MapSet").proxyMap_(r, t) : $r(r) ? We("MapSet").proxySet_(r, t) : Bn(r, t);
  return (t ? t.scope_ : on()).drafts_.push(s), s;
}
function Hn(r) {
  return Xe(r) || se(10, r), sn(r);
}
function sn(r) {
  if (!Le(r) || Mr(r))
    return r;
  const t = r[ce];
  let s;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, s = ft(r, t.scope_.immer_.useStrictShallowCopy_);
  } else
    s = ft(r, !0);
  return Ar(s, (c, p) => {
    an(s, c, sn(p));
  }), t && (t.finalized_ = !1), s;
}
var fe = new qn(), en = fe.produce;
fe.produceWithPatches.bind(
  fe
);
fe.setAutoFreeze.bind(fe);
fe.setUseStrictShallowCopy.bind(fe);
fe.applyPatches.bind(fe);
fe.createDraft.bind(fe);
fe.finishDraft.bind(fe);
const rn = /* @__PURE__ */ (() => {
  let r = 0;
  const t = /* @__PURE__ */ new WeakMap();
  return (s) => (t.has(s) || t.set(s, ++r), t.get(s));
})(), _t = ue.createContext(null), Xn = ({ children: r }) => {
  const [t, s] = ue.useState({}), c = ue.useCallback((R) => rn(R), []), p = ue.useCallback(
    (R, L) => {
      const j = c(R);
      s(
        en((W) => {
          W[j] || (W[j] = []);
          const B = W[j], H = B[B.length - 1], te = ((H == null ? void 0 : H.id) ?? 0) + 1;
          console.log(te), B.push({
            id: te,
            data: L,
            isOpen: !1
          });
          for (const _e of B)
            if (!_e._scheduledForDeletion) {
              _e.isOpen = !0;
              break;
            }
        })
      );
    },
    [c]
  ), m = ue.useCallback(
    (R) => {
      const L = c(R);
      s(
        en((j) => {
          j[L] || (j[L] = []), j[L] = j[L].filter((te) => !te._scheduledForDeletion);
          const W = j[L], B = W[0];
          if (!B) return;
          B.isOpen = !1, B._scheduledForDeletion = !0;
          const H = W[1];
          H && (H.isOpen = !0);
        })
      );
    },
    [c]
  ), E = ue.useCallback(
    (R) => {
      const L = rn(R);
      return t[L] ?? [];
    },
    [t]
  ), S = ue.useMemo(
    () => ({
      open: p,
      close: m,
      getComponentInstances: E
    }),
    [m, E, p]
  );
  return /* @__PURE__ */ Ne.jsx(_t.Provider, { value: S, children: r });
}, Gn = (r) => {
  const { open: t, close: s } = ue.useContext(_t);
  return {
    open: (m) => {
      t(r, m);
    },
    close: () => {
      s(r);
    }
  };
}, cn = () => ue.useContext(_t), fn = ue.createContext(null), Jn = ({ children: r, data: t, isOpen: s, Component: c }) => {
  const { close: p } = cn(), m = ue.useCallback(() => {
    p(c, t);
  }, [c, p, t]), E = ue.useMemo(
    () => ({
      isOpen: s,
      close: m,
      data: t
    }),
    [m, t, s]
  );
  return /* @__PURE__ */ Ne.jsx(fn.Provider, { value: E, children: r });
}, Qn = () => ue.useContext(fn), Zn = ({ Component: r, ComponentWrapper: t }) => {
  const { getComponentInstances: s } = cn(), c = s(r), p = t ?? ue.Fragment;
  return /* @__PURE__ */ Ne.jsx(Ne.Fragment, { children: c.map((m) => /* @__PURE__ */ Ne.jsx(Jn, { data: m.data, isOpen: m.isOpen, Component: r, children: /* @__PURE__ */ Ne.jsx(p, { children: /* @__PURE__ */ Ne.jsx(r, {}) }) }, m.id)) });
}, ea = (r) => () => {
  const t = Gn(r);
  return {
    open: t.open,
    close: t.close
  };
};
export {
  Xn as ModalProvider,
  Zn as ModalRenderer,
  ea as createModalHook,
  Gn as useModal,
  Qn as useModalInstance
};
