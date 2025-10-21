(function () {
  const c = document.createElement("link").relList;
  if (c && c.supports && c.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const d of o)
      if (d.type === "childList")
        for (const h of d.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && r(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function f(o) {
    const d = {};
    return (
      o.integrity && (d.integrity = o.integrity),
      o.referrerPolicy && (d.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const d = f(o);
    fetch(o.href, d);
  }
})();
function Nm(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var vf = { exports: {} },
  kn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ph;
function Kp() {
  if (Ph) return kn;
  Ph = 1;
  var n = Symbol.for("react.transitional.element"),
    c = Symbol.for("react.fragment");
  function f(r, o, d) {
    var h = null;
    if (
      (d !== void 0 && (h = "" + d),
      o.key !== void 0 && (h = "" + o.key),
      "key" in o)
    ) {
      d = {};
      for (var p in o) p !== "key" && (d[p] = o[p]);
    } else d = o;
    return (
      (o = d.ref),
      { $$typeof: n, type: r, key: h, ref: o !== void 0 ? o : null, props: d }
    );
  }
  return (kn.Fragment = c), (kn.jsx = f), (kn.jsxs = f), kn;
}
var Ih;
function Jp() {
  return Ih || ((Ih = 1), (vf.exports = Kp())), vf.exports;
}
var Y = Jp(),
  gf = { exports: {} },
  et = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tm;
function $p() {
  if (tm) return et;
  tm = 1;
  var n = Symbol.for("react.transitional.element"),
    c = Symbol.for("react.portal"),
    f = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    y = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    T = Symbol.for("react.activity"),
    H = Symbol.iterator;
  function G(S) {
    return S === null || typeof S != "object"
      ? null
      : ((S = (H && S[H]) || S["@@iterator"]),
        typeof S == "function" ? S : null);
  }
  var C = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    L = Object.assign,
    U = {};
  function q(S, w, V) {
    (this.props = S),
      (this.context = w),
      (this.refs = U),
      (this.updater = V || C);
  }
  (q.prototype.isReactComponent = {}),
    (q.prototype.setState = function (S, w) {
      if (typeof S != "object" && typeof S != "function" && S != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, S, w, "setState");
    }),
    (q.prototype.forceUpdate = function (S) {
      this.updater.enqueueForceUpdate(this, S, "forceUpdate");
    });
  function X() {}
  X.prototype = q.prototype;
  function Z(S, w, V) {
    (this.props = S),
      (this.context = w),
      (this.refs = U),
      (this.updater = V || C);
  }
  var I = (Z.prototype = new X());
  (I.constructor = Z), L(I, q.prototype), (I.isPureReactComponent = !0);
  var ot = Array.isArray;
  function At() {}
  var W = { H: null, A: null, T: null, S: null },
    Dt = Object.prototype.hasOwnProperty;
  function Ot(S, w, V) {
    var K = V.ref;
    return {
      $$typeof: n,
      type: S,
      key: w,
      ref: K !== void 0 ? K : null,
      props: V,
    };
  }
  function Pt(S, w) {
    return Ot(S.type, w, S.props);
  }
  function It(S) {
    return typeof S == "object" && S !== null && S.$$typeof === n;
  }
  function Gt(S) {
    var w = { "=": "=0", ":": "=2" };
    return (
      "$" +
      S.replace(/[=:]/g, function (V) {
        return w[V];
      })
    );
  }
  var me = /\/+/g;
  function Kt(S, w) {
    return typeof S == "object" && S !== null && S.key != null
      ? Gt("" + S.key)
      : w.toString(36);
  }
  function ne(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (
          (typeof S.status == "string"
            ? S.then(At, At)
            : ((S.status = "pending"),
              S.then(
                function (w) {
                  S.status === "pending" &&
                    ((S.status = "fulfilled"), (S.value = w));
                },
                function (w) {
                  S.status === "pending" &&
                    ((S.status = "rejected"), (S.reason = w));
                }
              )),
          S.status)
        ) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function D(S, w, V, K, tt) {
    var ut = typeof S;
    (ut === "undefined" || ut === "boolean") && (S = null);
    var pt = !1;
    if (S === null) pt = !0;
    else
      switch (ut) {
        case "bigint":
        case "string":
        case "number":
          pt = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case n:
            case c:
              pt = !0;
              break;
            case g:
              return (pt = S._init), D(pt(S._payload), w, V, K, tt);
          }
      }
    if (pt)
      return (
        (tt = tt(S)),
        (pt = K === "" ? "." + Kt(S, 0) : K),
        ot(tt)
          ? ((V = ""),
            pt != null && (V = pt.replace(me, "$&/") + "/"),
            D(tt, w, V, "", function (ln) {
              return ln;
            }))
          : tt != null &&
            (It(tt) &&
              (tt = Pt(
                tt,
                V +
                  (tt.key == null || (S && S.key === tt.key)
                    ? ""
                    : ("" + tt.key).replace(me, "$&/") + "/") +
                  pt
              )),
            w.push(tt)),
        1
      );
    pt = 0;
    var le = K === "" ? "." : K + ":";
    if (ot(S))
      for (var Ht = 0; Ht < S.length; Ht++)
        (K = S[Ht]), (ut = le + Kt(K, Ht)), (pt += D(K, w, V, ut, tt));
    else if (((Ht = G(S)), typeof Ht == "function"))
      for (S = Ht.call(S), Ht = 0; !(K = S.next()).done; )
        (K = K.value), (ut = le + Kt(K, Ht++)), (pt += D(K, w, V, ut, tt));
    else if (ut === "object") {
      if (typeof S.then == "function") return D(ne(S), w, V, K, tt);
      throw (
        ((w = String(S)),
        Error(
          "Objects are not valid as a React child (found: " +
            (w === "[object Object]"
              ? "object with keys {" + Object.keys(S).join(", ") + "}"
              : w) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return pt;
  }
  function Q(S, w, V) {
    if (S == null) return S;
    var K = [],
      tt = 0;
    return (
      D(S, K, "", "", function (ut) {
        return w.call(V, ut, tt++);
      }),
      K
    );
  }
  function F(S) {
    if (S._status === -1) {
      var w = S._result;
      (w = w()),
        w.then(
          function (V) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 1), (S._result = V));
          },
          function (V) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 2), (S._result = V));
          }
        ),
        S._status === -1 && ((S._status = 0), (S._result = w));
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var mt =
      typeof reportError == "function"
        ? reportError
        : function (S) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var w = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof S == "object" &&
                  S !== null &&
                  typeof S.message == "string"
                    ? String(S.message)
                    : String(S),
                error: S,
              });
              if (!window.dispatchEvent(w)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", S);
              return;
            }
            console.error(S);
          },
    vt = {
      map: Q,
      forEach: function (S, w, V) {
        Q(
          S,
          function () {
            w.apply(this, arguments);
          },
          V
        );
      },
      count: function (S) {
        var w = 0;
        return (
          Q(S, function () {
            w++;
          }),
          w
        );
      },
      toArray: function (S) {
        return (
          Q(S, function (w) {
            return w;
          }) || []
        );
      },
      only: function (S) {
        if (!It(S))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return S;
      },
    };
  return (
    (et.Activity = T),
    (et.Children = vt),
    (et.Component = q),
    (et.Fragment = f),
    (et.Profiler = o),
    (et.PureComponent = Z),
    (et.StrictMode = r),
    (et.Suspense = v),
    (et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W),
    (et.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (S) {
        return W.H.useMemoCache(S);
      },
    }),
    (et.cache = function (S) {
      return function () {
        return S.apply(null, arguments);
      };
    }),
    (et.cacheSignal = function () {
      return null;
    }),
    (et.cloneElement = function (S, w, V) {
      if (S == null)
        throw Error(
          "The argument must be a React element, but you passed " + S + "."
        );
      var K = L({}, S.props),
        tt = S.key;
      if (w != null)
        for (ut in (w.key !== void 0 && (tt = "" + w.key), w))
          !Dt.call(w, ut) ||
            ut === "key" ||
            ut === "__self" ||
            ut === "__source" ||
            (ut === "ref" && w.ref === void 0) ||
            (K[ut] = w[ut]);
      var ut = arguments.length - 2;
      if (ut === 1) K.children = V;
      else if (1 < ut) {
        for (var pt = Array(ut), le = 0; le < ut; le++)
          pt[le] = arguments[le + 2];
        K.children = pt;
      }
      return Ot(S.type, tt, K);
    }),
    (et.createContext = function (S) {
      return (
        (S = {
          $$typeof: h,
          _currentValue: S,
          _currentValue2: S,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (S.Provider = S),
        (S.Consumer = { $$typeof: d, _context: S }),
        S
      );
    }),
    (et.createElement = function (S, w, V) {
      var K,
        tt = {},
        ut = null;
      if (w != null)
        for (K in (w.key !== void 0 && (ut = "" + w.key), w))
          Dt.call(w, K) &&
            K !== "key" &&
            K !== "__self" &&
            K !== "__source" &&
            (tt[K] = w[K]);
      var pt = arguments.length - 2;
      if (pt === 1) tt.children = V;
      else if (1 < pt) {
        for (var le = Array(pt), Ht = 0; Ht < pt; Ht++)
          le[Ht] = arguments[Ht + 2];
        tt.children = le;
      }
      if (S && S.defaultProps)
        for (K in ((pt = S.defaultProps), pt))
          tt[K] === void 0 && (tt[K] = pt[K]);
      return Ot(S, ut, tt);
    }),
    (et.createRef = function () {
      return { current: null };
    }),
    (et.forwardRef = function (S) {
      return { $$typeof: p, render: S };
    }),
    (et.isValidElement = It),
    (et.lazy = function (S) {
      return { $$typeof: g, _payload: { _status: -1, _result: S }, _init: F };
    }),
    (et.memo = function (S, w) {
      return { $$typeof: y, type: S, compare: w === void 0 ? null : w };
    }),
    (et.startTransition = function (S) {
      var w = W.T,
        V = {};
      W.T = V;
      try {
        var K = S(),
          tt = W.S;
        tt !== null && tt(V, K),
          typeof K == "object" &&
            K !== null &&
            typeof K.then == "function" &&
            K.then(At, mt);
      } catch (ut) {
        mt(ut);
      } finally {
        w !== null && V.types !== null && (w.types = V.types), (W.T = w);
      }
    }),
    (et.unstable_useCacheRefresh = function () {
      return W.H.useCacheRefresh();
    }),
    (et.use = function (S) {
      return W.H.use(S);
    }),
    (et.useActionState = function (S, w, V) {
      return W.H.useActionState(S, w, V);
    }),
    (et.useCallback = function (S, w) {
      return W.H.useCallback(S, w);
    }),
    (et.useContext = function (S) {
      return W.H.useContext(S);
    }),
    (et.useDebugValue = function () {}),
    (et.useDeferredValue = function (S, w) {
      return W.H.useDeferredValue(S, w);
    }),
    (et.useEffect = function (S, w) {
      return W.H.useEffect(S, w);
    }),
    (et.useEffectEvent = function (S) {
      return W.H.useEffectEvent(S);
    }),
    (et.useId = function () {
      return W.H.useId();
    }),
    (et.useImperativeHandle = function (S, w, V) {
      return W.H.useImperativeHandle(S, w, V);
    }),
    (et.useInsertionEffect = function (S, w) {
      return W.H.useInsertionEffect(S, w);
    }),
    (et.useLayoutEffect = function (S, w) {
      return W.H.useLayoutEffect(S, w);
    }),
    (et.useMemo = function (S, w) {
      return W.H.useMemo(S, w);
    }),
    (et.useOptimistic = function (S, w) {
      return W.H.useOptimistic(S, w);
    }),
    (et.useReducer = function (S, w, V) {
      return W.H.useReducer(S, w, V);
    }),
    (et.useRef = function (S) {
      return W.H.useRef(S);
    }),
    (et.useState = function (S) {
      return W.H.useState(S);
    }),
    (et.useSyncExternalStore = function (S, w, V) {
      return W.H.useSyncExternalStore(S, w, V);
    }),
    (et.useTransition = function () {
      return W.H.useTransition();
    }),
    (et.version = "19.2.0"),
    et
  );
}
var em;
function Lf() {
  return em || ((em = 1), (gf.exports = $p())), gf.exports;
}
var O = Lf();
const Dm = Nm(O);
var bf = { exports: {} },
  Wn = {},
  Sf = { exports: {} },
  Ef = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lm;
function Fp() {
  return (
    lm ||
      ((lm = 1),
      (function (n) {
        function c(D, Q) {
          var F = D.length;
          D.push(Q);
          t: for (; 0 < F; ) {
            var mt = (F - 1) >>> 1,
              vt = D[mt];
            if (0 < o(vt, Q)) (D[mt] = Q), (D[F] = vt), (F = mt);
            else break t;
          }
        }
        function f(D) {
          return D.length === 0 ? null : D[0];
        }
        function r(D) {
          if (D.length === 0) return null;
          var Q = D[0],
            F = D.pop();
          if (F !== Q) {
            D[0] = F;
            t: for (var mt = 0, vt = D.length, S = vt >>> 1; mt < S; ) {
              var w = 2 * (mt + 1) - 1,
                V = D[w],
                K = w + 1,
                tt = D[K];
              if (0 > o(V, F))
                K < vt && 0 > o(tt, V)
                  ? ((D[mt] = tt), (D[K] = F), (mt = K))
                  : ((D[mt] = V), (D[w] = F), (mt = w));
              else if (K < vt && 0 > o(tt, F))
                (D[mt] = tt), (D[K] = F), (mt = K);
              else break t;
            }
          }
          return Q;
        }
        function o(D, Q) {
          var F = D.sortIndex - Q.sortIndex;
          return F !== 0 ? F : D.id - Q.id;
        }
        if (
          ((n.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          n.unstable_now = function () {
            return d.now();
          };
        } else {
          var h = Date,
            p = h.now();
          n.unstable_now = function () {
            return h.now() - p;
          };
        }
        var v = [],
          y = [],
          g = 1,
          T = null,
          H = 3,
          G = !1,
          C = !1,
          L = !1,
          U = !1,
          q = typeof setTimeout == "function" ? setTimeout : null,
          X = typeof clearTimeout == "function" ? clearTimeout : null,
          Z = typeof setImmediate < "u" ? setImmediate : null;
        function I(D) {
          for (var Q = f(y); Q !== null; ) {
            if (Q.callback === null) r(y);
            else if (Q.startTime <= D)
              r(y), (Q.sortIndex = Q.expirationTime), c(v, Q);
            else break;
            Q = f(y);
          }
        }
        function ot(D) {
          if (((L = !1), I(D), !C))
            if (f(v) !== null) (C = !0), At || ((At = !0), Gt());
            else {
              var Q = f(y);
              Q !== null && ne(ot, Q.startTime - D);
            }
        }
        var At = !1,
          W = -1,
          Dt = 5,
          Ot = -1;
        function Pt() {
          return U ? !0 : !(n.unstable_now() - Ot < Dt);
        }
        function It() {
          if (((U = !1), At)) {
            var D = n.unstable_now();
            Ot = D;
            var Q = !0;
            try {
              t: {
                (C = !1), L && ((L = !1), X(W), (W = -1)), (G = !0);
                var F = H;
                try {
                  e: {
                    for (
                      I(D), T = f(v);
                      T !== null && !(T.expirationTime > D && Pt());

                    ) {
                      var mt = T.callback;
                      if (typeof mt == "function") {
                        (T.callback = null), (H = T.priorityLevel);
                        var vt = mt(T.expirationTime <= D);
                        if (((D = n.unstable_now()), typeof vt == "function")) {
                          (T.callback = vt), I(D), (Q = !0);
                          break e;
                        }
                        T === f(v) && r(v), I(D);
                      } else r(v);
                      T = f(v);
                    }
                    if (T !== null) Q = !0;
                    else {
                      var S = f(y);
                      S !== null && ne(ot, S.startTime - D), (Q = !1);
                    }
                  }
                  break t;
                } finally {
                  (T = null), (H = F), (G = !1);
                }
                Q = void 0;
              }
            } finally {
              Q ? Gt() : (At = !1);
            }
          }
        }
        var Gt;
        if (typeof Z == "function")
          Gt = function () {
            Z(It);
          };
        else if (typeof MessageChannel < "u") {
          var me = new MessageChannel(),
            Kt = me.port2;
          (me.port1.onmessage = It),
            (Gt = function () {
              Kt.postMessage(null);
            });
        } else
          Gt = function () {
            q(It, 0);
          };
        function ne(D, Q) {
          W = q(function () {
            D(n.unstable_now());
          }, Q);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (D) {
            D.callback = null;
          }),
          (n.unstable_forceFrameRate = function (D) {
            0 > D || 125 < D
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Dt = 0 < D ? Math.floor(1e3 / D) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return H;
          }),
          (n.unstable_next = function (D) {
            switch (H) {
              case 1:
              case 2:
              case 3:
                var Q = 3;
                break;
              default:
                Q = H;
            }
            var F = H;
            H = Q;
            try {
              return D();
            } finally {
              H = F;
            }
          }),
          (n.unstable_requestPaint = function () {
            U = !0;
          }),
          (n.unstable_runWithPriority = function (D, Q) {
            switch (D) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                D = 3;
            }
            var F = H;
            H = D;
            try {
              return Q();
            } finally {
              H = F;
            }
          }),
          (n.unstable_scheduleCallback = function (D, Q, F) {
            var mt = n.unstable_now();
            switch (
              (typeof F == "object" && F !== null
                ? ((F = F.delay),
                  (F = typeof F == "number" && 0 < F ? mt + F : mt))
                : (F = mt),
              D)
            ) {
              case 1:
                var vt = -1;
                break;
              case 2:
                vt = 250;
                break;
              case 5:
                vt = 1073741823;
                break;
              case 4:
                vt = 1e4;
                break;
              default:
                vt = 5e3;
            }
            return (
              (vt = F + vt),
              (D = {
                id: g++,
                callback: Q,
                priorityLevel: D,
                startTime: F,
                expirationTime: vt,
                sortIndex: -1,
              }),
              F > mt
                ? ((D.sortIndex = F),
                  c(y, D),
                  f(v) === null &&
                    D === f(y) &&
                    (L ? (X(W), (W = -1)) : (L = !0), ne(ot, F - mt)))
                : ((D.sortIndex = vt),
                  c(v, D),
                  C || G || ((C = !0), At || ((At = !0), Gt()))),
              D
            );
          }),
          (n.unstable_shouldYield = Pt),
          (n.unstable_wrapCallback = function (D) {
            var Q = H;
            return function () {
              var F = H;
              H = Q;
              try {
                return D.apply(this, arguments);
              } finally {
                H = F;
              }
            };
          });
      })(Ef)),
    Ef
  );
}
var am;
function kp() {
  return am || ((am = 1), (Sf.exports = Fp())), Sf.exports;
}
var Tf = { exports: {} },
  te = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nm;
function Wp() {
  if (nm) return te;
  nm = 1;
  var n = Lf();
  function c(v) {
    var y = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        y += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return (
      "Minified React error #" +
      v +
      "; visit " +
      y +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function f() {}
  var r = {
      d: {
        f,
        r: function () {
          throw Error(c(522));
        },
        D: f,
        C: f,
        L: f,
        m: f,
        X: f,
        S: f,
        M: f,
      },
      p: 0,
      findDOMNode: null,
    },
    o = Symbol.for("react.portal");
  function d(v, y, g) {
    var T =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: T == null ? null : "" + T,
      children: v,
      containerInfo: y,
      implementation: g,
    };
  }
  var h = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(v, y) {
    if (v === "font") return "";
    if (typeof y == "string") return y === "use-credentials" ? y : "";
  }
  return (
    (te.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (te.createPortal = function (v, y) {
      var g =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!y || (y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11))
        throw Error(c(299));
      return d(v, y, null, g);
    }),
    (te.flushSync = function (v) {
      var y = h.T,
        g = r.p;
      try {
        if (((h.T = null), (r.p = 2), v)) return v();
      } finally {
        (h.T = y), (r.p = g), r.d.f();
      }
    }),
    (te.preconnect = function (v, y) {
      typeof v == "string" &&
        (y
          ? ((y = y.crossOrigin),
            (y =
              typeof y == "string"
                ? y === "use-credentials"
                  ? y
                  : ""
                : void 0))
          : (y = null),
        r.d.C(v, y));
    }),
    (te.prefetchDNS = function (v) {
      typeof v == "string" && r.d.D(v);
    }),
    (te.preinit = function (v, y) {
      if (typeof v == "string" && y && typeof y.as == "string") {
        var g = y.as,
          T = p(g, y.crossOrigin),
          H = typeof y.integrity == "string" ? y.integrity : void 0,
          G = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
        g === "style"
          ? r.d.S(v, typeof y.precedence == "string" ? y.precedence : void 0, {
              crossOrigin: T,
              integrity: H,
              fetchPriority: G,
            })
          : g === "script" &&
            r.d.X(v, {
              crossOrigin: T,
              integrity: H,
              fetchPriority: G,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
      }
    }),
    (te.preinitModule = function (v, y) {
      if (typeof v == "string")
        if (typeof y == "object" && y !== null) {
          if (y.as == null || y.as === "script") {
            var g = p(y.as, y.crossOrigin);
            r.d.M(v, {
              crossOrigin: g,
              integrity: typeof y.integrity == "string" ? y.integrity : void 0,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
          }
        } else y == null && r.d.M(v);
    }),
    (te.preload = function (v, y) {
      if (
        typeof v == "string" &&
        typeof y == "object" &&
        y !== null &&
        typeof y.as == "string"
      ) {
        var g = y.as,
          T = p(g, y.crossOrigin);
        r.d.L(v, g, {
          crossOrigin: T,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          type: typeof y.type == "string" ? y.type : void 0,
          fetchPriority:
            typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
          referrerPolicy:
            typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
          imageSrcSet:
            typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
          imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
          media: typeof y.media == "string" ? y.media : void 0,
        });
      }
    }),
    (te.preloadModule = function (v, y) {
      if (typeof v == "string")
        if (y) {
          var g = p(y.as, y.crossOrigin);
          r.d.m(v, {
            as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
            crossOrigin: g,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          });
        } else r.d.m(v);
    }),
    (te.requestFormReset = function (v) {
      r.d.r(v);
    }),
    (te.unstable_batchedUpdates = function (v, y) {
      return v(y);
    }),
    (te.useFormState = function (v, y, g) {
      return h.H.useFormState(v, y, g);
    }),
    (te.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (te.version = "19.2.0"),
    te
  );
}
var um;
function Pp() {
  if (um) return Tf.exports;
  um = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (c) {
        console.error(c);
      }
  }
  return n(), (Tf.exports = Wp()), Tf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var im;
function Ip() {
  if (im) return Wn;
  im = 1;
  var n = kp(),
    c = Lf(),
    f = Pp();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function d(t) {
    var e = t,
      l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function h(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function v(t) {
    if (d(t) !== t) throw Error(r(188));
  }
  function y(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = d(t)), e === null)) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var u = l.return;
      if (u === null) break;
      var i = u.alternate;
      if (i === null) {
        if (((a = u.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (u.child === i.child) {
        for (i = u.child; i; ) {
          if (i === l) return v(u), t;
          if (i === a) return v(u), e;
          i = i.sibling;
        }
        throw Error(r(188));
      }
      if (l.return !== a.return) (l = u), (a = i);
      else {
        for (var s = !1, m = u.child; m; ) {
          if (m === l) {
            (s = !0), (l = u), (a = i);
            break;
          }
          if (m === a) {
            (s = !0), (a = u), (l = i);
            break;
          }
          m = m.sibling;
        }
        if (!s) {
          for (m = i.child; m; ) {
            if (m === l) {
              (s = !0), (l = i), (a = u);
              break;
            }
            if (m === a) {
              (s = !0), (a = i), (l = u);
              break;
            }
            m = m.sibling;
          }
          if (!s) throw Error(r(189));
        }
      }
      if (l.alternate !== a) throw Error(r(190));
    }
    if (l.tag !== 3) throw Error(r(188));
    return l.stateNode.current === l ? t : e;
  }
  function g(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = g(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var T = Object.assign,
    H = Symbol.for("react.element"),
    G = Symbol.for("react.transitional.element"),
    C = Symbol.for("react.portal"),
    L = Symbol.for("react.fragment"),
    U = Symbol.for("react.strict_mode"),
    q = Symbol.for("react.profiler"),
    X = Symbol.for("react.consumer"),
    Z = Symbol.for("react.context"),
    I = Symbol.for("react.forward_ref"),
    ot = Symbol.for("react.suspense"),
    At = Symbol.for("react.suspense_list"),
    W = Symbol.for("react.memo"),
    Dt = Symbol.for("react.lazy"),
    Ot = Symbol.for("react.activity"),
    Pt = Symbol.for("react.memo_cache_sentinel"),
    It = Symbol.iterator;
  function Gt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (It && t[It]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var me = Symbol.for("react.client.reference");
  function Kt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === me ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case L:
        return "Fragment";
      case q:
        return "Profiler";
      case U:
        return "StrictMode";
      case ot:
        return "Suspense";
      case At:
        return "SuspenseList";
      case Ot:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case C:
          return "Portal";
        case Z:
          return t.displayName || "Context";
        case X:
          return (t._context.displayName || "Context") + ".Consumer";
        case I:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case W:
          return (
            (e = t.displayName || null), e !== null ? e : Kt(t.type) || "Memo"
          );
        case Dt:
          (e = t._payload), (t = t._init);
          try {
            return Kt(t(e));
          } catch {}
      }
    return null;
  }
  var ne = Array.isArray,
    D = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Q = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    F = { pending: !1, data: null, method: null, action: null },
    mt = [],
    vt = -1;
  function S(t) {
    return { current: t };
  }
  function w(t) {
    0 > vt || ((t.current = mt[vt]), (mt[vt] = null), vt--);
  }
  function V(t, e) {
    vt++, (mt[vt] = t.current), (t.current = e);
  }
  var K = S(null),
    tt = S(null),
    ut = S(null),
    pt = S(null);
  function le(t, e) {
    switch ((V(ut, e), V(tt, t), V(K, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Eh(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = Eh(e)), (t = Th(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    w(K), V(K, t);
  }
  function Ht() {
    w(K), w(tt), w(ut);
  }
  function ln(t) {
    t.memoizedState !== null && V(pt, t);
    var e = K.current,
      l = Th(e, t.type);
    e !== l && (V(tt, t), V(K, l));
  }
  function su(t) {
    tt.current === t && (w(K), w(tt)),
      pt.current === t && (w(pt), (Kn._currentValue = F));
  }
  var Pi, kf;
  function Vl(t) {
    if (Pi === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        (Pi = (e && e[1]) || ""),
          (kf =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Pi +
      t +
      kf
    );
  }
  var Ii = !1;
  function tc(t, e) {
    if (!t || Ii) return "";
    Ii = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var B = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(B.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(B, []);
                } catch (N) {
                  var x = N;
                }
                Reflect.construct(t, [], B);
              } else {
                try {
                  B.call();
                } catch (N) {
                  x = N;
                }
                t.call(B.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (N) {
                x = N;
              }
              (B = t()) &&
                typeof B.catch == "function" &&
                B.catch(function () {});
            }
          } catch (N) {
            if (N && x && typeof N.stack == "string") return [N.stack, x.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      u &&
        u.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var i = a.DetermineComponentFrameRoot(),
        s = i[0],
        m = i[1];
      if (s && m) {
        var b = s.split(`
`),
          z = m.split(`
`);
        for (
          u = a = 0;
          a < b.length && !b[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; u < z.length && !z[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (a === b.length || u === z.length)
          for (
            a = b.length - 1, u = z.length - 1;
            1 <= a && 0 <= u && b[a] !== z[u];

          )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (b[a] !== z[u]) {
            if (a !== 1 || u !== 1)
              do
                if ((a--, u--, 0 > u || b[a] !== z[u])) {
                  var M =
                    `
` + b[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      M.includes("<anonymous>") &&
                      (M = M.replace("<anonymous>", t.displayName)),
                    M
                  );
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      (Ii = !1), (Error.prepareStackTrace = l);
    }
    return (l = t ? t.displayName || t.name : "") ? Vl(l) : "";
  }
  function Ay(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Vl(t.type);
      case 16:
        return Vl("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? Vl("Suspense Fallback")
          : Vl("Suspense");
      case 19:
        return Vl("SuspenseList");
      case 0:
      case 15:
        return tc(t.type, !1);
      case 11:
        return tc(t.type.render, !1);
      case 1:
        return tc(t.type, !0);
      case 31:
        return Vl("Activity");
      default:
        return "";
    }
  }
  function Wf(t) {
    try {
      var e = "",
        l = null;
      do (e += Ay(t, l)), (l = t), (t = t.return);
      while (t);
      return e;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var ec = Object.prototype.hasOwnProperty,
    lc = n.unstable_scheduleCallback,
    ac = n.unstable_cancelCallback,
    Oy = n.unstable_shouldYield,
    Ry = n.unstable_requestPaint,
    ye = n.unstable_now,
    zy = n.unstable_getCurrentPriorityLevel,
    Pf = n.unstable_ImmediatePriority,
    If = n.unstable_UserBlockingPriority,
    ou = n.unstable_NormalPriority,
    xy = n.unstable_LowPriority,
    ts = n.unstable_IdlePriority,
    Cy = n.log,
    _y = n.unstable_setDisableYieldValue,
    an = null,
    pe = null;
  function pl(t) {
    if (
      (typeof Cy == "function" && _y(t),
      pe && typeof pe.setStrictMode == "function")
    )
      try {
        pe.setStrictMode(an, t);
      } catch {}
  }
  var ve = Math.clz32 ? Math.clz32 : My,
    Ny = Math.log,
    Dy = Math.LN2;
  function My(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((Ny(t) / Dy) | 0)) | 0;
  }
  var du = 256,
    hu = 262144,
    mu = 4194304;
  function Zl(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function yu(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var u = 0,
      i = t.suspendedLanes,
      s = t.pingedLanes;
    t = t.warmLanes;
    var m = a & 134217727;
    return (
      m !== 0
        ? ((a = m & ~i),
          a !== 0
            ? (u = Zl(a))
            : ((s &= m),
              s !== 0
                ? (u = Zl(s))
                : l || ((l = m & ~t), l !== 0 && (u = Zl(l)))))
        : ((m = a & ~i),
          m !== 0
            ? (u = Zl(m))
            : s !== 0
            ? (u = Zl(s))
            : l || ((l = a & ~t), l !== 0 && (u = Zl(l)))),
      u === 0
        ? 0
        : e !== 0 &&
          e !== u &&
          (e & i) === 0 &&
          ((i = u & -u),
          (l = e & -e),
          i >= l || (i === 32 && (l & 4194048) !== 0))
        ? e
        : u
    );
  }
  function nn(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Uy(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function es() {
    var t = mu;
    return (mu <<= 1), (mu & 62914560) === 0 && (mu = 4194304), t;
  }
  function nc(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function un(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function Hy(t, e, l, a, u, i) {
    var s = t.pendingLanes;
    (t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0);
    var m = t.entanglements,
      b = t.expirationTimes,
      z = t.hiddenUpdates;
    for (l = s & ~l; 0 < l; ) {
      var M = 31 - ve(l),
        B = 1 << M;
      (m[M] = 0), (b[M] = -1);
      var x = z[M];
      if (x !== null)
        for (z[M] = null, M = 0; M < x.length; M++) {
          var N = x[M];
          N !== null && (N.lane &= -536870913);
        }
      l &= ~B;
    }
    a !== 0 && ls(t, a, 0),
      i !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(s & ~e));
  }
  function ls(t, e, l) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var a = 31 - ve(e);
    (t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (l & 261930));
  }
  function as(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var a = 31 - ve(l),
        u = 1 << a;
      (u & e) | (t[a] & e) && (t[a] |= e), (l &= ~u);
    }
  }
  function ns(t, e) {
    var l = e & -e;
    return (
      (l = (l & 42) !== 0 ? 1 : uc(l)),
      (l & (t.suspendedLanes | e)) !== 0 ? 0 : l
    );
  }
  function uc(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function ic(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function us() {
    var t = Q.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Zh(t.type));
  }
  function is(t, e) {
    var l = Q.p;
    try {
      return (Q.p = t), e();
    } finally {
      Q.p = l;
    }
  }
  var vl = Math.random().toString(36).slice(2),
    Jt = "__reactFiber$" + vl,
    ue = "__reactProps$" + vl,
    da = "__reactContainer$" + vl,
    cc = "__reactEvents$" + vl,
    jy = "__reactListeners$" + vl,
    wy = "__reactHandles$" + vl,
    cs = "__reactResources$" + vl,
    cn = "__reactMarker$" + vl;
  function rc(t) {
    delete t[Jt], delete t[ue], delete t[cc], delete t[jy], delete t[wy];
  }
  function ha(t) {
    var e = t[Jt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[da] || l[Jt])) {
        if (
          ((l = e.alternate),
          e.child !== null || (l !== null && l.child !== null))
        )
          for (t = _h(t); t !== null; ) {
            if ((l = t[Jt])) return l;
            t = _h(t);
          }
        return e;
      }
      (t = l), (l = t.parentNode);
    }
    return null;
  }
  function ma(t) {
    if ((t = t[Jt] || t[da])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function rn(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function ya(t) {
    var e = t[cs];
    return (
      e ||
        (e = t[cs] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Vt(t) {
    t[cn] = !0;
  }
  var rs = new Set(),
    fs = {};
  function Kl(t, e) {
    pa(t, e), pa(t + "Capture", e);
  }
  function pa(t, e) {
    for (fs[t] = e, t = 0; t < e.length; t++) rs.add(e[t]);
  }
  var By = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    ss = {},
    os = {};
  function Ly(t) {
    return ec.call(os, t)
      ? !0
      : ec.call(ss, t)
      ? !1
      : By.test(t)
      ? (os[t] = !0)
      : ((ss[t] = !0), !1);
  }
  function pu(t, e, l) {
    if (Ly(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function vu(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function $e(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  function Re(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function ds(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function qy(t, e, l) {
    var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var u = a.get,
        i = a.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (s) {
            (l = "" + s), i.call(this, s);
          },
        }),
        Object.defineProperty(t, e, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (s) {
            l = "" + s;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function fc(t) {
    if (!t._valueTracker) {
      var e = ds(t) ? "checked" : "value";
      t._valueTracker = qy(t, e, "" + t[e]);
    }
  }
  function hs(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      a = "";
    return (
      t && (a = ds(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== l ? (e.setValue(t), !0) : !1
    );
  }
  function gu(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Yy = /[\n"\\]/g;
  function ze(t) {
    return t.replace(Yy, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function sc(t, e, l, a, u, i, s, m) {
    (t.name = ""),
      s != null &&
      typeof s != "function" &&
      typeof s != "symbol" &&
      typeof s != "boolean"
        ? (t.type = s)
        : t.removeAttribute("type"),
      e != null
        ? s === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + Re(e))
          : t.value !== "" + Re(e) && (t.value = "" + Re(e))
        : (s !== "submit" && s !== "reset") || t.removeAttribute("value"),
      e != null
        ? oc(t, s, Re(e))
        : l != null
        ? oc(t, s, Re(l))
        : a != null && t.removeAttribute("value"),
      u == null && i != null && (t.defaultChecked = !!i),
      u != null &&
        (t.checked = u && typeof u != "function" && typeof u != "symbol"),
      m != null &&
      typeof m != "function" &&
      typeof m != "symbol" &&
      typeof m != "boolean"
        ? (t.name = "" + Re(m))
        : t.removeAttribute("name");
  }
  function ms(t, e, l, a, u, i, s, m) {
    if (
      (i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (t.type = i),
      e != null || l != null)
    ) {
      if (!((i !== "submit" && i !== "reset") || e != null)) {
        fc(t);
        return;
      }
      (l = l != null ? "" + Re(l) : ""),
        (e = e != null ? "" + Re(e) : l),
        m || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (a = a ?? u),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = m ? t.checked : !!a),
      (t.defaultChecked = !!a),
      s != null &&
        typeof s != "function" &&
        typeof s != "symbol" &&
        typeof s != "boolean" &&
        (t.name = s),
      fc(t);
  }
  function oc(t, e, l) {
    (e === "number" && gu(t.ownerDocument) === t) ||
      t.defaultValue === "" + l ||
      (t.defaultValue = "" + l);
  }
  function va(t, e, l, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var u = 0; u < l.length; u++) e["$" + l[u]] = !0;
      for (l = 0; l < t.length; l++)
        (u = e.hasOwnProperty("$" + t[l].value)),
          t[l].selected !== u && (t[l].selected = u),
          u && a && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + Re(l), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === l) {
          (t[u].selected = !0), a && (t[u].defaultSelected = !0);
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function ys(t, e, l) {
    if (
      e != null &&
      ((e = "" + Re(e)), e !== t.value && (t.value = e), l == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + Re(l) : "";
  }
  function ps(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(r(92));
        if (ne(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), (e = l);
    }
    (l = Re(e)),
      (t.defaultValue = l),
      (a = t.textContent),
      a === l && a !== "" && a !== null && (t.value = a),
      fc(t);
  }
  function ga(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Gy = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function vs(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : a
      ? t.setProperty(e, l)
      : typeof l != "number" || l === 0 || Gy.has(e)
      ? e === "float"
        ? (t.cssFloat = l)
        : (t[e] = ("" + l).trim())
      : (t[e] = l + "px");
  }
  function gs(t, e, l) {
    if (e != null && typeof e != "object") throw Error(r(62));
    if (((t = t.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
            ? (t.cssFloat = "")
            : (t[a] = ""));
      for (var u in e)
        (a = e[u]), e.hasOwnProperty(u) && l[u] !== a && vs(t, u, a);
    } else for (var i in e) e.hasOwnProperty(i) && vs(t, i, e[i]);
  }
  function dc(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Xy = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Qy =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function bu(t) {
    return Qy.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function Fe() {}
  var hc = null;
  function mc(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var ba = null,
    Sa = null;
  function bs(t) {
    var e = ma(t);
    if (e && (t = e.stateNode)) {
      var l = t[ue] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (sc(
              t,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (e = l.name),
            l.type === "radio" && e != null)
          ) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + ze("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < l.length;
              e++
            ) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var u = a[ue] || null;
                if (!u) throw Error(r(90));
                sc(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (e = 0; e < l.length; e++)
              (a = l[e]), a.form === t.form && hs(a);
          }
          break t;
        case "textarea":
          ys(t, l.value, l.defaultValue);
          break t;
        case "select":
          (e = l.value), e != null && va(t, !!l.multiple, e, !1);
      }
    }
  }
  var yc = !1;
  function Ss(t, e, l) {
    if (yc) return t(e, l);
    yc = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((yc = !1),
        (ba !== null || Sa !== null) &&
          (ii(), ba && ((e = ba), (t = Sa), (Sa = ba = null), bs(e), t)))
      )
        for (e = 0; e < t.length; e++) bs(t[e]);
    }
  }
  function fn(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[ue] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function") throw Error(r(231, e, typeof l));
    return l;
  }
  var ke = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    pc = !1;
  if (ke)
    try {
      var sn = {};
      Object.defineProperty(sn, "passive", {
        get: function () {
          pc = !0;
        },
      }),
        window.addEventListener("test", sn, sn),
        window.removeEventListener("test", sn, sn);
    } catch {
      pc = !1;
    }
  var gl = null,
    vc = null,
    Su = null;
  function Es() {
    if (Su) return Su;
    var t,
      e = vc,
      l = e.length,
      a,
      u = "value" in gl ? gl.value : gl.textContent,
      i = u.length;
    for (t = 0; t < l && e[t] === u[t]; t++);
    var s = l - t;
    for (a = 1; a <= s && e[l - a] === u[i - a]; a++);
    return (Su = u.slice(t, 1 < a ? 1 - a : void 0));
  }
  function Eu(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Tu() {
    return !0;
  }
  function Ts() {
    return !1;
  }
  function ie(t) {
    function e(l, a, u, i, s) {
      (this._reactName = l),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = i),
        (this.target = s),
        (this.currentTarget = null);
      for (var m in t)
        t.hasOwnProperty(m) && ((l = t[m]), (this[m] = l ? l(i) : i[m]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? Tu
          : Ts),
        (this.isPropagationStopped = Ts),
        this
      );
    }
    return (
      T(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = Tu));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = Tu));
        },
        persist: function () {},
        isPersistent: Tu,
      }),
      e
    );
  }
  var Jl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Au = ie(Jl),
    on = T({}, Jl, { view: 0, detail: 0 }),
    Vy = ie(on),
    gc,
    bc,
    dn,
    Ou = T({}, on, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ec,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== dn &&
              (dn && t.type === "mousemove"
                ? ((gc = t.screenX - dn.screenX), (bc = t.screenY - dn.screenY))
                : (bc = gc = 0),
              (dn = t)),
            gc);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : bc;
      },
    }),
    As = ie(Ou),
    Zy = T({}, Ou, { dataTransfer: 0 }),
    Ky = ie(Zy),
    Jy = T({}, on, { relatedTarget: 0 }),
    Sc = ie(Jy),
    $y = T({}, Jl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Fy = ie($y),
    ky = T({}, Jl, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Wy = ie(ky),
    Py = T({}, Jl, { data: 0 }),
    Os = ie(Py),
    Iy = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    t0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    e0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function l0(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = e0[t])
      ? !!e[t]
      : !1;
  }
  function Ec() {
    return l0;
  }
  var a0 = T({}, on, {
      key: function (t) {
        if (t.key) {
          var e = Iy[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Eu(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? t0[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ec,
      charCode: function (t) {
        return t.type === "keypress" ? Eu(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Eu(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    n0 = ie(a0),
    u0 = T({}, Ou, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Rs = ie(u0),
    i0 = T({}, on, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ec,
    }),
    c0 = ie(i0),
    r0 = T({}, Jl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    f0 = ie(r0),
    s0 = T({}, Ou, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    o0 = ie(s0),
    d0 = T({}, Jl, { newState: 0, oldState: 0 }),
    h0 = ie(d0),
    m0 = [9, 13, 27, 32],
    Tc = ke && "CompositionEvent" in window,
    hn = null;
  ke && "documentMode" in document && (hn = document.documentMode);
  var y0 = ke && "TextEvent" in window && !hn,
    zs = ke && (!Tc || (hn && 8 < hn && 11 >= hn)),
    xs = " ",
    Cs = !1;
  function _s(t, e) {
    switch (t) {
      case "keyup":
        return m0.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ns(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ea = !1;
  function p0(t, e) {
    switch (t) {
      case "compositionend":
        return Ns(e);
      case "keypress":
        return e.which !== 32 ? null : ((Cs = !0), xs);
      case "textInput":
        return (t = e.data), t === xs && Cs ? null : t;
      default:
        return null;
    }
  }
  function v0(t, e) {
    if (Ea)
      return t === "compositionend" || (!Tc && _s(t, e))
        ? ((t = Es()), (Su = vc = gl = null), (Ea = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return zs && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var g0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ds(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!g0[t.type] : e === "textarea";
  }
  function Ms(t, e, l, a) {
    ba ? (Sa ? Sa.push(a) : (Sa = [a])) : (ba = a),
      (e = hi(e, "onChange")),
      0 < e.length &&
        ((l = new Au("onChange", "change", null, l, a)),
        t.push({ event: l, listeners: e }));
  }
  var mn = null,
    yn = null;
  function b0(t) {
    yh(t, 0);
  }
  function Ru(t) {
    var e = rn(t);
    if (hs(e)) return t;
  }
  function Us(t, e) {
    if (t === "change") return e;
  }
  var Hs = !1;
  if (ke) {
    var Ac;
    if (ke) {
      var Oc = "oninput" in document;
      if (!Oc) {
        var js = document.createElement("div");
        js.setAttribute("oninput", "return;"),
          (Oc = typeof js.oninput == "function");
      }
      Ac = Oc;
    } else Ac = !1;
    Hs = Ac && (!document.documentMode || 9 < document.documentMode);
  }
  function ws() {
    mn && (mn.detachEvent("onpropertychange", Bs), (yn = mn = null));
  }
  function Bs(t) {
    if (t.propertyName === "value" && Ru(yn)) {
      var e = [];
      Ms(e, yn, t, mc(t)), Ss(b0, e);
    }
  }
  function S0(t, e, l) {
    t === "focusin"
      ? (ws(), (mn = e), (yn = l), mn.attachEvent("onpropertychange", Bs))
      : t === "focusout" && ws();
  }
  function E0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Ru(yn);
  }
  function T0(t, e) {
    if (t === "click") return Ru(e);
  }
  function A0(t, e) {
    if (t === "input" || t === "change") return Ru(e);
  }
  function O0(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var ge = typeof Object.is == "function" ? Object.is : O0;
  function pn(t, e) {
    if (ge(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var l = Object.keys(t),
      a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var u = l[a];
      if (!ec.call(e, u) || !ge(t[u], e[u])) return !1;
    }
    return !0;
  }
  function Ls(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function qs(t, e) {
    var l = Ls(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = t + l.textContent.length), t <= e && a >= e))
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Ls(l);
    }
  }
  function Ys(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? Ys(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function Gs(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = gu(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = gu(t.document);
    }
    return e;
  }
  function Rc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var R0 = ke && "documentMode" in document && 11 >= document.documentMode,
    Ta = null,
    zc = null,
    vn = null,
    xc = !1;
  function Xs(t, e, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    xc ||
      Ta == null ||
      Ta !== gu(a) ||
      ((a = Ta),
      "selectionStart" in a && Rc(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (vn && pn(vn, a)) ||
        ((vn = a),
        (a = hi(zc, "onSelect")),
        0 < a.length &&
          ((e = new Au("onSelect", "select", null, e, l)),
          t.push({ event: e, listeners: a }),
          (e.target = Ta))));
  }
  function $l(t, e) {
    var l = {};
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l["Webkit" + t] = "webkit" + e),
      (l["Moz" + t] = "moz" + e),
      l
    );
  }
  var Aa = {
      animationend: $l("Animation", "AnimationEnd"),
      animationiteration: $l("Animation", "AnimationIteration"),
      animationstart: $l("Animation", "AnimationStart"),
      transitionrun: $l("Transition", "TransitionRun"),
      transitionstart: $l("Transition", "TransitionStart"),
      transitioncancel: $l("Transition", "TransitionCancel"),
      transitionend: $l("Transition", "TransitionEnd"),
    },
    Cc = {},
    Qs = {};
  ke &&
    ((Qs = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Aa.animationend.animation,
      delete Aa.animationiteration.animation,
      delete Aa.animationstart.animation),
    "TransitionEvent" in window || delete Aa.transitionend.transition);
  function Fl(t) {
    if (Cc[t]) return Cc[t];
    if (!Aa[t]) return t;
    var e = Aa[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in Qs) return (Cc[t] = e[l]);
    return t;
  }
  var Vs = Fl("animationend"),
    Zs = Fl("animationiteration"),
    Ks = Fl("animationstart"),
    z0 = Fl("transitionrun"),
    x0 = Fl("transitionstart"),
    C0 = Fl("transitioncancel"),
    Js = Fl("transitionend"),
    $s = new Map(),
    _c =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  _c.push("scrollEnd");
  function je(t, e) {
    $s.set(t, e), Kl(e, [t]);
  }
  var zu =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    xe = [],
    Oa = 0,
    Nc = 0;
  function xu() {
    for (var t = Oa, e = (Nc = Oa = 0); e < t; ) {
      var l = xe[e];
      xe[e++] = null;
      var a = xe[e];
      xe[e++] = null;
      var u = xe[e];
      xe[e++] = null;
      var i = xe[e];
      if (((xe[e++] = null), a !== null && u !== null)) {
        var s = a.pending;
        s === null ? (u.next = u) : ((u.next = s.next), (s.next = u)),
          (a.pending = u);
      }
      i !== 0 && Fs(l, u, i);
    }
  }
  function Cu(t, e, l, a) {
    (xe[Oa++] = t),
      (xe[Oa++] = e),
      (xe[Oa++] = l),
      (xe[Oa++] = a),
      (Nc |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a);
  }
  function Dc(t, e, l, a) {
    return Cu(t, e, l, a), _u(t);
  }
  function kl(t, e) {
    return Cu(t, null, null, e), _u(t);
  }
  function Fs(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var u = !1, i = t.return; i !== null; )
      (i.childLanes |= l),
        (a = i.alternate),
        a !== null && (a.childLanes |= l),
        i.tag === 22 &&
          ((t = i.stateNode), t === null || t._visibility & 1 || (u = !0)),
        (t = i),
        (i = i.return);
    return t.tag === 3
      ? ((i = t.stateNode),
        u &&
          e !== null &&
          ((u = 31 - ve(l)),
          (t = i.hiddenUpdates),
          (a = t[u]),
          a === null ? (t[u] = [e]) : a.push(e),
          (e.lane = l | 536870912)),
        i)
      : null;
  }
  function _u(t) {
    if (50 < qn) throw ((qn = 0), (Yr = null), Error(r(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ra = {};
  function _0(t, e, l, a) {
    (this.tag = t),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function be(t, e, l, a) {
    return new _0(t, e, l, a);
  }
  function Mc(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function We(t, e) {
    var l = t.alternate;
    return (
      l === null
        ? ((l = be(t.tag, e, t.key, t.mode)),
          (l.elementType = t.elementType),
          (l.type = t.type),
          (l.stateNode = t.stateNode),
          (l.alternate = t),
          (t.alternate = l))
        : ((l.pendingProps = e),
          (l.type = t.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = t.flags & 65011712),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (l.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    );
  }
  function ks(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return (
      l === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = l.childLanes),
          (t.lanes = l.lanes),
          (t.child = l.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = l.memoizedProps),
          (t.memoizedState = l.memoizedState),
          (t.updateQueue = l.updateQueue),
          (t.type = l.type),
          (e = l.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Nu(t, e, l, a, u, i) {
    var s = 0;
    if (((a = t), typeof t == "function")) Mc(t) && (s = 1);
    else if (typeof t == "string")
      s = Hp(t, l, K.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case Ot:
          return (t = be(31, l, e, u)), (t.elementType = Ot), (t.lanes = i), t;
        case L:
          return Wl(l.children, u, i, e);
        case U:
          (s = 8), (u |= 24);
          break;
        case q:
          return (
            (t = be(12, l, e, u | 2)), (t.elementType = q), (t.lanes = i), t
          );
        case ot:
          return (t = be(13, l, e, u)), (t.elementType = ot), (t.lanes = i), t;
        case At:
          return (t = be(19, l, e, u)), (t.elementType = At), (t.lanes = i), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case Z:
                s = 10;
                break t;
              case X:
                s = 9;
                break t;
              case I:
                s = 11;
                break t;
              case W:
                s = 14;
                break t;
              case Dt:
                (s = 16), (a = null);
                break t;
            }
          (s = 29),
            (l = Error(r(130, t === null ? "null" : typeof t, ""))),
            (a = null);
      }
    return (
      (e = be(s, l, e, u)), (e.elementType = t), (e.type = a), (e.lanes = i), e
    );
  }
  function Wl(t, e, l, a) {
    return (t = be(7, t, a, e)), (t.lanes = l), t;
  }
  function Uc(t, e, l) {
    return (t = be(6, t, null, e)), (t.lanes = l), t;
  }
  function Ws(t) {
    var e = be(18, null, null, 0);
    return (e.stateNode = t), e;
  }
  function Hc(t, e, l) {
    return (
      (e = be(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var Ps = new WeakMap();
  function Ce(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Ps.get(t);
      return l !== void 0
        ? l
        : ((e = { value: t, source: e, stack: Wf(e) }), Ps.set(t, e), e);
    }
    return { value: t, source: e, stack: Wf(e) };
  }
  var za = [],
    xa = 0,
    Du = null,
    gn = 0,
    _e = [],
    Ne = 0,
    bl = null,
    Ge = 1,
    Xe = "";
  function Pe(t, e) {
    (za[xa++] = gn), (za[xa++] = Du), (Du = t), (gn = e);
  }
  function Is(t, e, l) {
    (_e[Ne++] = Ge), (_e[Ne++] = Xe), (_e[Ne++] = bl), (bl = t);
    var a = Ge;
    t = Xe;
    var u = 32 - ve(a) - 1;
    (a &= ~(1 << u)), (l += 1);
    var i = 32 - ve(e) + u;
    if (30 < i) {
      var s = u - (u % 5);
      (i = (a & ((1 << s) - 1)).toString(32)),
        (a >>= s),
        (u -= s),
        (Ge = (1 << (32 - ve(e) + u)) | (l << u) | a),
        (Xe = i + t);
    } else (Ge = (1 << i) | (l << u) | a), (Xe = t);
  }
  function jc(t) {
    t.return !== null && (Pe(t, 1), Is(t, 1, 0));
  }
  function wc(t) {
    for (; t === Du; )
      (Du = za[--xa]), (za[xa] = null), (gn = za[--xa]), (za[xa] = null);
    for (; t === bl; )
      (bl = _e[--Ne]),
        (_e[Ne] = null),
        (Xe = _e[--Ne]),
        (_e[Ne] = null),
        (Ge = _e[--Ne]),
        (_e[Ne] = null);
  }
  function to(t, e) {
    (_e[Ne++] = Ge),
      (_e[Ne++] = Xe),
      (_e[Ne++] = bl),
      (Ge = e.id),
      (Xe = e.overflow),
      (bl = t);
  }
  var $t = null,
    xt = null,
    st = !1,
    Sl = null,
    De = !1,
    Bc = Error(r(519));
  function El(t) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (bn(Ce(e, t)), Bc);
  }
  function eo(t) {
    var e = t.stateNode,
      l = t.type,
      a = t.memoizedProps;
    switch (((e[Jt] = t), (e[ue] = a), l)) {
      case "dialog":
        ct("cancel", e), ct("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ct("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Gn.length; l++) ct(Gn[l], e);
        break;
      case "source":
        ct("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ct("error", e), ct("load", e);
        break;
      case "details":
        ct("toggle", e);
        break;
      case "input":
        ct("invalid", e),
          ms(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          );
        break;
      case "select":
        ct("invalid", e);
        break;
      case "textarea":
        ct("invalid", e), ps(e, a.value, a.defaultValue, a.children);
    }
    (l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      e.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      bh(e.textContent, l)
        ? (a.popover != null && (ct("beforetoggle", e), ct("toggle", e)),
          a.onScroll != null && ct("scroll", e),
          a.onScrollEnd != null && ct("scrollend", e),
          a.onClick != null && (e.onclick = Fe),
          (e = !0))
        : (e = !1),
      e || El(t, !0);
  }
  function lo(t) {
    for ($t = t.return; $t; )
      switch ($t.tag) {
        case 5:
        case 31:
        case 13:
          De = !1;
          return;
        case 27:
        case 3:
          De = !0;
          return;
        default:
          $t = $t.return;
      }
  }
  function Ca(t) {
    if (t !== $t) return !1;
    if (!st) return lo(t), (st = !0), !1;
    var e = t.tag,
      l;
    if (
      ((l = e !== 3 && e !== 27) &&
        ((l = e === 5) &&
          ((l = t.type),
          (l =
            !(l !== "form" && l !== "button") || ef(t.type, t.memoizedProps))),
        (l = !l)),
      l && xt && El(t),
      lo(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      xt = Ch(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      xt = Ch(t);
    } else
      e === 27
        ? ((e = xt), jl(t.type) ? ((t = cf), (cf = null), (xt = t)) : (xt = e))
        : (xt = $t ? Ue(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Pl() {
    (xt = $t = null), (st = !1);
  }
  function Lc() {
    var t = Sl;
    return (
      t !== null &&
        (se === null ? (se = t) : se.push.apply(se, t), (Sl = null)),
      t
    );
  }
  function bn(t) {
    Sl === null ? (Sl = [t]) : Sl.push(t);
  }
  var qc = S(null),
    Il = null,
    Ie = null;
  function Tl(t, e, l) {
    V(qc, e._currentValue), (e._currentValue = l);
  }
  function tl(t) {
    (t._currentValue = qc.current), w(qc);
  }
  function Yc(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === l)
      )
        break;
      t = t.return;
    }
  }
  function Gc(t, e, l, a) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var i = u.dependencies;
      if (i !== null) {
        var s = u.child;
        i = i.firstContext;
        t: for (; i !== null; ) {
          var m = i;
          i = u;
          for (var b = 0; b < e.length; b++)
            if (m.context === e[b]) {
              (i.lanes |= l),
                (m = i.alternate),
                m !== null && (m.lanes |= l),
                Yc(i.return, l, t),
                a || (s = null);
              break t;
            }
          i = m.next;
        }
      } else if (u.tag === 18) {
        if (((s = u.return), s === null)) throw Error(r(341));
        (s.lanes |= l),
          (i = s.alternate),
          i !== null && (i.lanes |= l),
          Yc(s, l, t),
          (s = null);
      } else s = u.child;
      if (s !== null) s.return = u;
      else
        for (s = u; s !== null; ) {
          if (s === t) {
            s = null;
            break;
          }
          if (((u = s.sibling), u !== null)) {
            (u.return = s.return), (s = u);
            break;
          }
          s = s.return;
        }
      u = s;
    }
  }
  function _a(t, e, l, a) {
    t = null;
    for (var u = e, i = !1; u !== null; ) {
      if (!i) {
        if ((u.flags & 524288) !== 0) i = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var s = u.alternate;
        if (s === null) throw Error(r(387));
        if (((s = s.memoizedProps), s !== null)) {
          var m = u.type;
          ge(u.pendingProps.value, s.value) ||
            (t !== null ? t.push(m) : (t = [m]));
        }
      } else if (u === pt.current) {
        if (((s = u.alternate), s === null)) throw Error(r(387));
        s.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (t !== null ? t.push(Kn) : (t = [Kn]));
      }
      u = u.return;
    }
    t !== null && Gc(e, t, l, a), (e.flags |= 262144);
  }
  function Mu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ge(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function ta(t) {
    (Il = t),
      (Ie = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function Ft(t) {
    return ao(Il, t);
  }
  function Uu(t, e) {
    return Il === null && ta(t), ao(t, e);
  }
  function ao(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), Ie === null)) {
      if (t === null) throw Error(r(308));
      (Ie = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else Ie = Ie.next = e;
    return l;
  }
  var N0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (l) {
                  return l();
                });
            };
          },
    D0 = n.unstable_scheduleCallback,
    M0 = n.unstable_NormalPriority,
    Bt = {
      $$typeof: Z,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Xc() {
    return { controller: new N0(), data: new Map(), refCount: 0 };
  }
  function Sn(t) {
    t.refCount--,
      t.refCount === 0 &&
        D0(M0, function () {
          t.controller.abort();
        });
  }
  var En = null,
    Qc = 0,
    Na = 0,
    Da = null;
  function U0(t, e) {
    if (En === null) {
      var l = (En = []);
      (Qc = 0),
        (Na = Kr()),
        (Da = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        });
    }
    return Qc++, e.then(no, no), e;
  }
  function no() {
    if (--Qc === 0 && En !== null) {
      Da !== null && (Da.status = "fulfilled");
      var t = En;
      (En = null), (Na = 0), (Da = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function H0(t, e) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          l.push(u);
        },
      };
    return (
      t.then(
        function () {
          (a.status = "fulfilled"), (a.value = e);
          for (var u = 0; u < l.length; u++) (0, l[u])(e);
        },
        function (u) {
          for (a.status = "rejected", a.reason = u, u = 0; u < l.length; u++)
            (0, l[u])(void 0);
        }
      ),
      a
    );
  }
  var uo = D.S;
  D.S = function (t, e) {
    (Qd = ye()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        U0(t, e),
      uo !== null && uo(t, e);
  };
  var ea = S(null);
  function Vc() {
    var t = ea.current;
    return t !== null ? t : Rt.pooledCache;
  }
  function Hu(t, e) {
    e === null ? V(ea, ea.current) : V(ea, e.pool);
  }
  function io() {
    var t = Vc();
    return t === null ? null : { parent: Bt._currentValue, pool: t };
  }
  var Ma = Error(r(460)),
    Zc = Error(r(474)),
    ju = Error(r(542)),
    wu = { then: function () {} };
  function co(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function ro(t, e, l) {
    switch (
      ((l = t[l]),
      l === void 0 ? t.push(e) : l !== e && (e.then(Fe, Fe), (e = l)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), so(t), t);
      default:
        if (typeof e.status == "string") e.then(Fe, Fe);
        else {
          if (((t = Rt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(r(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var u = e;
                  (u.status = "fulfilled"), (u.value = a);
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var u = e;
                  (u.status = "rejected"), (u.reason = a);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), so(t), t);
        }
        throw ((aa = e), Ma);
    }
  }
  function la(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function"
        ? ((aa = l), Ma)
        : l;
    }
  }
  var aa = null;
  function fo() {
    if (aa === null) throw Error(r(459));
    var t = aa;
    return (aa = null), t;
  }
  function so(t) {
    if (t === Ma || t === ju) throw Error(r(483));
  }
  var Ua = null,
    Tn = 0;
  function Bu(t) {
    var e = Tn;
    return (Tn += 1), Ua === null && (Ua = []), ro(Ua, t, e);
  }
  function An(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function Lu(t, e) {
    throw e.$$typeof === H
      ? Error(r(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          r(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function oo(t) {
    function e(A, E) {
      if (t) {
        var R = A.deletions;
        R === null ? ((A.deletions = [E]), (A.flags |= 16)) : R.push(E);
      }
    }
    function l(A, E) {
      if (!t) return null;
      for (; E !== null; ) e(A, E), (E = E.sibling);
      return null;
    }
    function a(A) {
      for (var E = new Map(); A !== null; )
        A.key !== null ? E.set(A.key, A) : E.set(A.index, A), (A = A.sibling);
      return E;
    }
    function u(A, E) {
      return (A = We(A, E)), (A.index = 0), (A.sibling = null), A;
    }
    function i(A, E, R) {
      return (
        (A.index = R),
        t
          ? ((R = A.alternate),
            R !== null
              ? ((R = R.index), R < E ? ((A.flags |= 67108866), E) : R)
              : ((A.flags |= 67108866), E))
          : ((A.flags |= 1048576), E)
      );
    }
    function s(A) {
      return t && A.alternate === null && (A.flags |= 67108866), A;
    }
    function m(A, E, R, j) {
      return E === null || E.tag !== 6
        ? ((E = Uc(R, A.mode, j)), (E.return = A), E)
        : ((E = u(E, R)), (E.return = A), E);
    }
    function b(A, E, R, j) {
      var k = R.type;
      return k === L
        ? M(A, E, R.props.children, j, R.key)
        : E !== null &&
          (E.elementType === k ||
            (typeof k == "object" &&
              k !== null &&
              k.$$typeof === Dt &&
              la(k) === E.type))
        ? ((E = u(E, R.props)), An(E, R), (E.return = A), E)
        : ((E = Nu(R.type, R.key, R.props, null, A.mode, j)),
          An(E, R),
          (E.return = A),
          E);
    }
    function z(A, E, R, j) {
      return E === null ||
        E.tag !== 4 ||
        E.stateNode.containerInfo !== R.containerInfo ||
        E.stateNode.implementation !== R.implementation
        ? ((E = Hc(R, A.mode, j)), (E.return = A), E)
        : ((E = u(E, R.children || [])), (E.return = A), E);
    }
    function M(A, E, R, j, k) {
      return E === null || E.tag !== 7
        ? ((E = Wl(R, A.mode, j, k)), (E.return = A), E)
        : ((E = u(E, R)), (E.return = A), E);
    }
    function B(A, E, R) {
      if (
        (typeof E == "string" && E !== "") ||
        typeof E == "number" ||
        typeof E == "bigint"
      )
        return (E = Uc("" + E, A.mode, R)), (E.return = A), E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case G:
            return (
              (R = Nu(E.type, E.key, E.props, null, A.mode, R)),
              An(R, E),
              (R.return = A),
              R
            );
          case C:
            return (E = Hc(E, A.mode, R)), (E.return = A), E;
          case Dt:
            return (E = la(E)), B(A, E, R);
        }
        if (ne(E) || Gt(E))
          return (E = Wl(E, A.mode, R, null)), (E.return = A), E;
        if (typeof E.then == "function") return B(A, Bu(E), R);
        if (E.$$typeof === Z) return B(A, Uu(A, E), R);
        Lu(A, E);
      }
      return null;
    }
    function x(A, E, R, j) {
      var k = E !== null ? E.key : null;
      if (
        (typeof R == "string" && R !== "") ||
        typeof R == "number" ||
        typeof R == "bigint"
      )
        return k !== null ? null : m(A, E, "" + R, j);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case G:
            return R.key === k ? b(A, E, R, j) : null;
          case C:
            return R.key === k ? z(A, E, R, j) : null;
          case Dt:
            return (R = la(R)), x(A, E, R, j);
        }
        if (ne(R) || Gt(R)) return k !== null ? null : M(A, E, R, j, null);
        if (typeof R.then == "function") return x(A, E, Bu(R), j);
        if (R.$$typeof === Z) return x(A, E, Uu(A, R), j);
        Lu(A, R);
      }
      return null;
    }
    function N(A, E, R, j, k) {
      if (
        (typeof j == "string" && j !== "") ||
        typeof j == "number" ||
        typeof j == "bigint"
      )
        return (A = A.get(R) || null), m(E, A, "" + j, k);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case G:
            return (
              (A = A.get(j.key === null ? R : j.key) || null), b(E, A, j, k)
            );
          case C:
            return (
              (A = A.get(j.key === null ? R : j.key) || null), z(E, A, j, k)
            );
          case Dt:
            return (j = la(j)), N(A, E, R, j, k);
        }
        if (ne(j) || Gt(j)) return (A = A.get(R) || null), M(E, A, j, k, null);
        if (typeof j.then == "function") return N(A, E, R, Bu(j), k);
        if (j.$$typeof === Z) return N(A, E, R, Uu(E, j), k);
        Lu(E, j);
      }
      return null;
    }
    function J(A, E, R, j) {
      for (
        var k = null, dt = null, $ = E, nt = (E = 0), ft = null;
        $ !== null && nt < R.length;
        nt++
      ) {
        $.index > nt ? ((ft = $), ($ = null)) : (ft = $.sibling);
        var ht = x(A, $, R[nt], j);
        if (ht === null) {
          $ === null && ($ = ft);
          break;
        }
        t && $ && ht.alternate === null && e(A, $),
          (E = i(ht, E, nt)),
          dt === null ? (k = ht) : (dt.sibling = ht),
          (dt = ht),
          ($ = ft);
      }
      if (nt === R.length) return l(A, $), st && Pe(A, nt), k;
      if ($ === null) {
        for (; nt < R.length; nt++)
          ($ = B(A, R[nt], j)),
            $ !== null &&
              ((E = i($, E, nt)),
              dt === null ? (k = $) : (dt.sibling = $),
              (dt = $));
        return st && Pe(A, nt), k;
      }
      for ($ = a($); nt < R.length; nt++)
        (ft = N($, A, nt, R[nt], j)),
          ft !== null &&
            (t &&
              ft.alternate !== null &&
              $.delete(ft.key === null ? nt : ft.key),
            (E = i(ft, E, nt)),
            dt === null ? (k = ft) : (dt.sibling = ft),
            (dt = ft));
      return (
        t &&
          $.forEach(function (Yl) {
            return e(A, Yl);
          }),
        st && Pe(A, nt),
        k
      );
    }
    function P(A, E, R, j) {
      if (R == null) throw Error(r(151));
      for (
        var k = null, dt = null, $ = E, nt = (E = 0), ft = null, ht = R.next();
        $ !== null && !ht.done;
        nt++, ht = R.next()
      ) {
        $.index > nt ? ((ft = $), ($ = null)) : (ft = $.sibling);
        var Yl = x(A, $, ht.value, j);
        if (Yl === null) {
          $ === null && ($ = ft);
          break;
        }
        t && $ && Yl.alternate === null && e(A, $),
          (E = i(Yl, E, nt)),
          dt === null ? (k = Yl) : (dt.sibling = Yl),
          (dt = Yl),
          ($ = ft);
      }
      if (ht.done) return l(A, $), st && Pe(A, nt), k;
      if ($ === null) {
        for (; !ht.done; nt++, ht = R.next())
          (ht = B(A, ht.value, j)),
            ht !== null &&
              ((E = i(ht, E, nt)),
              dt === null ? (k = ht) : (dt.sibling = ht),
              (dt = ht));
        return st && Pe(A, nt), k;
      }
      for ($ = a($); !ht.done; nt++, ht = R.next())
        (ht = N($, A, nt, ht.value, j)),
          ht !== null &&
            (t &&
              ht.alternate !== null &&
              $.delete(ht.key === null ? nt : ht.key),
            (E = i(ht, E, nt)),
            dt === null ? (k = ht) : (dt.sibling = ht),
            (dt = ht));
      return (
        t &&
          $.forEach(function (Zp) {
            return e(A, Zp);
          }),
        st && Pe(A, nt),
        k
      );
    }
    function Tt(A, E, R, j) {
      if (
        (typeof R == "object" &&
          R !== null &&
          R.type === L &&
          R.key === null &&
          (R = R.props.children),
        typeof R == "object" && R !== null)
      ) {
        switch (R.$$typeof) {
          case G:
            t: {
              for (var k = R.key; E !== null; ) {
                if (E.key === k) {
                  if (((k = R.type), k === L)) {
                    if (E.tag === 7) {
                      l(A, E.sibling),
                        (j = u(E, R.props.children)),
                        (j.return = A),
                        (A = j);
                      break t;
                    }
                  } else if (
                    E.elementType === k ||
                    (typeof k == "object" &&
                      k !== null &&
                      k.$$typeof === Dt &&
                      la(k) === E.type)
                  ) {
                    l(A, E.sibling),
                      (j = u(E, R.props)),
                      An(j, R),
                      (j.return = A),
                      (A = j);
                    break t;
                  }
                  l(A, E);
                  break;
                } else e(A, E);
                E = E.sibling;
              }
              R.type === L
                ? ((j = Wl(R.props.children, A.mode, j, R.key)),
                  (j.return = A),
                  (A = j))
                : ((j = Nu(R.type, R.key, R.props, null, A.mode, j)),
                  An(j, R),
                  (j.return = A),
                  (A = j));
            }
            return s(A);
          case C:
            t: {
              for (k = R.key; E !== null; ) {
                if (E.key === k)
                  if (
                    E.tag === 4 &&
                    E.stateNode.containerInfo === R.containerInfo &&
                    E.stateNode.implementation === R.implementation
                  ) {
                    l(A, E.sibling),
                      (j = u(E, R.children || [])),
                      (j.return = A),
                      (A = j);
                    break t;
                  } else {
                    l(A, E);
                    break;
                  }
                else e(A, E);
                E = E.sibling;
              }
              (j = Hc(R, A.mode, j)), (j.return = A), (A = j);
            }
            return s(A);
          case Dt:
            return (R = la(R)), Tt(A, E, R, j);
        }
        if (ne(R)) return J(A, E, R, j);
        if (Gt(R)) {
          if (((k = Gt(R)), typeof k != "function")) throw Error(r(150));
          return (R = k.call(R)), P(A, E, R, j);
        }
        if (typeof R.then == "function") return Tt(A, E, Bu(R), j);
        if (R.$$typeof === Z) return Tt(A, E, Uu(A, R), j);
        Lu(A, R);
      }
      return (typeof R == "string" && R !== "") ||
        typeof R == "number" ||
        typeof R == "bigint"
        ? ((R = "" + R),
          E !== null && E.tag === 6
            ? (l(A, E.sibling), (j = u(E, R)), (j.return = A), (A = j))
            : (l(A, E), (j = Uc(R, A.mode, j)), (j.return = A), (A = j)),
          s(A))
        : l(A, E);
    }
    return function (A, E, R, j) {
      try {
        Tn = 0;
        var k = Tt(A, E, R, j);
        return (Ua = null), k;
      } catch ($) {
        if ($ === Ma || $ === ju) throw $;
        var dt = be(29, $, null, A.mode);
        return (dt.lanes = j), (dt.return = A), dt;
      } finally {
      }
    };
  }
  var na = oo(!0),
    ho = oo(!1),
    Al = !1;
  function Kc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Jc(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function Ol(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Rl(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (yt & 2) !== 0)) {
      var u = a.pending;
      return (
        u === null ? (e.next = e) : ((e.next = u.next), (u.next = e)),
        (a.pending = e),
        (e = _u(t)),
        Fs(t, null, l),
        e
      );
    }
    return Cu(t, a, e, l), _u(t);
  }
  function On(t, e, l) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))
    ) {
      var a = e.lanes;
      (a &= t.pendingLanes), (l |= a), (e.lanes = l), as(t, l);
    }
  }
  function $c(t, e) {
    var l = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var u = null,
        i = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var s = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          i === null ? (u = i = s) : (i = i.next = s), (l = l.next);
        } while (l !== null);
        i === null ? (u = i = e) : (i = i.next = e);
      } else u = i = e;
      (l = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = l);
      return;
    }
    (t = l.lastBaseUpdate),
      t === null ? (l.firstBaseUpdate = e) : (t.next = e),
      (l.lastBaseUpdate = e);
  }
  var Fc = !1;
  function Rn() {
    if (Fc) {
      var t = Da;
      if (t !== null) throw t;
    }
  }
  function zn(t, e, l, a) {
    Fc = !1;
    var u = t.updateQueue;
    Al = !1;
    var i = u.firstBaseUpdate,
      s = u.lastBaseUpdate,
      m = u.shared.pending;
    if (m !== null) {
      u.shared.pending = null;
      var b = m,
        z = b.next;
      (b.next = null), s === null ? (i = z) : (s.next = z), (s = b);
      var M = t.alternate;
      M !== null &&
        ((M = M.updateQueue),
        (m = M.lastBaseUpdate),
        m !== s &&
          (m === null ? (M.firstBaseUpdate = z) : (m.next = z),
          (M.lastBaseUpdate = b)));
    }
    if (i !== null) {
      var B = u.baseState;
      (s = 0), (M = z = b = null), (m = i);
      do {
        var x = m.lane & -536870913,
          N = x !== m.lane;
        if (N ? (rt & x) === x : (a & x) === x) {
          x !== 0 && x === Na && (Fc = !0),
            M !== null &&
              (M = M.next =
                {
                  lane: 0,
                  tag: m.tag,
                  payload: m.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var J = t,
              P = m;
            x = e;
            var Tt = l;
            switch (P.tag) {
              case 1:
                if (((J = P.payload), typeof J == "function")) {
                  B = J.call(Tt, B, x);
                  break t;
                }
                B = J;
                break t;
              case 3:
                J.flags = (J.flags & -65537) | 128;
              case 0:
                if (
                  ((J = P.payload),
                  (x = typeof J == "function" ? J.call(Tt, B, x) : J),
                  x == null)
                )
                  break t;
                B = T({}, B, x);
                break t;
              case 2:
                Al = !0;
            }
          }
          (x = m.callback),
            x !== null &&
              ((t.flags |= 64),
              N && (t.flags |= 8192),
              (N = u.callbacks),
              N === null ? (u.callbacks = [x]) : N.push(x));
        } else
          (N = {
            lane: x,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null,
          }),
            M === null ? ((z = M = N), (b = B)) : (M = M.next = N),
            (s |= x);
        if (((m = m.next), m === null)) {
          if (((m = u.shared.pending), m === null)) break;
          (N = m),
            (m = N.next),
            (N.next = null),
            (u.lastBaseUpdate = N),
            (u.shared.pending = null);
        }
      } while (!0);
      M === null && (b = B),
        (u.baseState = b),
        (u.firstBaseUpdate = z),
        (u.lastBaseUpdate = M),
        i === null && (u.shared.lanes = 0),
        (Nl |= s),
        (t.lanes = s),
        (t.memoizedState = B);
    }
  }
  function mo(t, e) {
    if (typeof t != "function") throw Error(r(191, t));
    t.call(e);
  }
  function yo(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) mo(l[t], e);
  }
  var Ha = S(null),
    qu = S(0);
  function po(t, e) {
    (t = fl), V(qu, t), V(Ha, e), (fl = t | e.baseLanes);
  }
  function kc() {
    V(qu, fl), V(Ha, Ha.current);
  }
  function Wc() {
    (fl = qu.current), w(Ha), w(qu);
  }
  var Se = S(null),
    Me = null;
  function zl(t) {
    var e = t.alternate;
    V(jt, jt.current & 1),
      V(Se, t),
      Me === null &&
        (e === null || Ha.current !== null || e.memoizedState !== null) &&
        (Me = t);
  }
  function Pc(t) {
    V(jt, jt.current), V(Se, t), Me === null && (Me = t);
  }
  function vo(t) {
    t.tag === 22
      ? (V(jt, jt.current), V(Se, t), Me === null && (Me = t))
      : xl();
  }
  function xl() {
    V(jt, jt.current), V(Se, Se.current);
  }
  function Ee(t) {
    w(Se), Me === t && (Me = null), w(jt);
  }
  var jt = S(0);
  function Yu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || nf(l) || uf(l)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  var el = 0,
    lt = null,
    St = null,
    Lt = null,
    Gu = !1,
    ja = !1,
    ua = !1,
    Xu = 0,
    xn = 0,
    wa = null,
    j0 = 0;
  function Mt() {
    throw Error(r(321));
  }
  function Ic(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!ge(t[l], e[l])) return !1;
    return !0;
  }
  function tr(t, e, l, a, u, i) {
    return (
      (el = i),
      (lt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (D.H = t === null || t.memoizedState === null ? td : yr),
      (ua = !1),
      (i = l(a, u)),
      (ua = !1),
      ja && (i = bo(e, l, a, u)),
      go(t),
      i
    );
  }
  function go(t) {
    D.H = Nn;
    var e = St !== null && St.next !== null;
    if (((el = 0), (Lt = St = lt = null), (Gu = !1), (xn = 0), (wa = null), e))
      throw Error(r(300));
    t === null ||
      qt ||
      ((t = t.dependencies), t !== null && Mu(t) && (qt = !0));
  }
  function bo(t, e, l, a) {
    lt = t;
    var u = 0;
    do {
      if ((ja && (wa = null), (xn = 0), (ja = !1), 25 <= u))
        throw Error(r(301));
      if (((u += 1), (Lt = St = null), t.updateQueue != null)) {
        var i = t.updateQueue;
        (i.lastEffect = null),
          (i.events = null),
          (i.stores = null),
          i.memoCache != null && (i.memoCache.index = 0);
      }
      (D.H = ed), (i = e(l, a));
    } while (ja);
    return i;
  }
  function w0() {
    var t = D.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Cn(e) : e),
      (t = t.useState()[0]),
      (St !== null ? St.memoizedState : null) !== t && (lt.flags |= 1024),
      e
    );
  }
  function er() {
    var t = Xu !== 0;
    return (Xu = 0), t;
  }
  function lr(t, e, l) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l);
  }
  function ar(t) {
    if (Gu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      Gu = !1;
    }
    (el = 0), (Lt = St = lt = null), (ja = !1), (xn = Xu = 0), (wa = null);
  }
  function ae() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Lt === null ? (lt.memoizedState = Lt = t) : (Lt = Lt.next = t), Lt;
  }
  function wt() {
    if (St === null) {
      var t = lt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = St.next;
    var e = Lt === null ? lt.memoizedState : Lt.next;
    if (e !== null) (Lt = e), (St = t);
    else {
      if (t === null)
        throw lt.alternate === null ? Error(r(467)) : Error(r(310));
      (St = t),
        (t = {
          memoizedState: St.memoizedState,
          baseState: St.baseState,
          baseQueue: St.baseQueue,
          queue: St.queue,
          next: null,
        }),
        Lt === null ? (lt.memoizedState = Lt = t) : (Lt = Lt.next = t);
    }
    return Lt;
  }
  function Qu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Cn(t) {
    var e = xn;
    return (
      (xn += 1),
      wa === null && (wa = []),
      (t = ro(wa, t, e)),
      (e = lt),
      (Lt === null ? e.memoizedState : Lt.next) === null &&
        ((e = e.alternate),
        (D.H = e === null || e.memoizedState === null ? td : yr)),
      t
    );
  }
  function Vu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Cn(t);
      if (t.$$typeof === Z) return Ft(t);
    }
    throw Error(r(438, String(t)));
  }
  function nr(t) {
    var e = null,
      l = lt.updateQueue;
    if ((l !== null && (e = l.memoCache), e == null)) {
      var a = lt.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = Qu()), (lt.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = Pt;
    return e.index++, l;
  }
  function ll(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Zu(t) {
    var e = wt();
    return ur(e, St, t);
  }
  function ur(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = l;
    var u = t.baseQueue,
      i = a.pending;
    if (i !== null) {
      if (u !== null) {
        var s = u.next;
        (u.next = i.next), (i.next = s);
      }
      (e.baseQueue = u = i), (a.pending = null);
    }
    if (((i = t.baseState), u === null)) t.memoizedState = i;
    else {
      e = u.next;
      var m = (s = null),
        b = null,
        z = e,
        M = !1;
      do {
        var B = z.lane & -536870913;
        if (B !== z.lane ? (rt & B) === B : (el & B) === B) {
          var x = z.revertLane;
          if (x === 0)
            b !== null &&
              (b = b.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: z.action,
                  hasEagerState: z.hasEagerState,
                  eagerState: z.eagerState,
                  next: null,
                }),
              B === Na && (M = !0);
          else if ((el & x) === x) {
            (z = z.next), x === Na && (M = !0);
            continue;
          } else
            (B = {
              lane: 0,
              revertLane: z.revertLane,
              gesture: null,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null,
            }),
              b === null ? ((m = b = B), (s = i)) : (b = b.next = B),
              (lt.lanes |= x),
              (Nl |= x);
          (B = z.action),
            ua && l(i, B),
            (i = z.hasEagerState ? z.eagerState : l(i, B));
        } else
          (x = {
            lane: B,
            revertLane: z.revertLane,
            gesture: z.gesture,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null,
          }),
            b === null ? ((m = b = x), (s = i)) : (b = b.next = x),
            (lt.lanes |= B),
            (Nl |= B);
        z = z.next;
      } while (z !== null && z !== e);
      if (
        (b === null ? (s = i) : (b.next = m),
        !ge(i, t.memoizedState) && ((qt = !0), M && ((l = Da), l !== null)))
      )
        throw l;
      (t.memoizedState = i),
        (t.baseState = s),
        (t.baseQueue = b),
        (a.lastRenderedState = i);
    }
    return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function ir(t) {
    var e = wt(),
      l = e.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch,
      u = l.pending,
      i = e.memoizedState;
    if (u !== null) {
      l.pending = null;
      var s = (u = u.next);
      do (i = t(i, s.action)), (s = s.next);
      while (s !== u);
      ge(i, e.memoizedState) || (qt = !0),
        (e.memoizedState = i),
        e.baseQueue === null && (e.baseState = i),
        (l.lastRenderedState = i);
    }
    return [i, a];
  }
  function So(t, e, l) {
    var a = lt,
      u = wt(),
      i = st;
    if (i) {
      if (l === void 0) throw Error(r(407));
      l = l();
    } else l = e();
    var s = !ge((St || u).memoizedState, l);
    if (
      (s && ((u.memoizedState = l), (qt = !0)),
      (u = u.queue),
      fr(Ao.bind(null, a, u, t), [t]),
      u.getSnapshot !== e || s || (Lt !== null && Lt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Ba(9, { destroy: void 0 }, To.bind(null, a, u, l, e), null),
        Rt === null)
      )
        throw Error(r(349));
      i || (el & 127) !== 0 || Eo(a, e, l);
    }
    return l;
  }
  function Eo(t, e, l) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = lt.updateQueue),
      e === null
        ? ((e = Qu()), (lt.updateQueue = e), (e.stores = [t]))
        : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t));
  }
  function To(t, e, l, a) {
    (e.value = l), (e.getSnapshot = a), Oo(e) && Ro(t);
  }
  function Ao(t, e, l) {
    return l(function () {
      Oo(e) && Ro(t);
    });
  }
  function Oo(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !ge(t, l);
    } catch {
      return !0;
    }
  }
  function Ro(t) {
    var e = kl(t, 2);
    e !== null && oe(e, t, 2);
  }
  function cr(t) {
    var e = ae();
    if (typeof t == "function") {
      var l = t;
      if (((t = l()), ua)) {
        pl(!0);
        try {
          l();
        } finally {
          pl(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ll,
        lastRenderedState: t,
      }),
      e
    );
  }
  function zo(t, e, l, a) {
    return (t.baseState = l), ur(t, St, typeof a == "function" ? a : ll);
  }
  function B0(t, e, l, a, u) {
    if ($u(t)) throw Error(r(485));
    if (((t = e.action), t !== null)) {
      var i = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (s) {
          i.listeners.push(s);
        },
      };
      D.T !== null ? l(!0) : (i.isTransition = !1),
        a(i),
        (l = e.pending),
        l === null
          ? ((i.next = e.pending = i), xo(e, i))
          : ((i.next = l.next), (e.pending = l.next = i));
    }
  }
  function xo(t, e) {
    var l = e.action,
      a = e.payload,
      u = t.state;
    if (e.isTransition) {
      var i = D.T,
        s = {};
      D.T = s;
      try {
        var m = l(u, a),
          b = D.S;
        b !== null && b(s, m), Co(t, e, m);
      } catch (z) {
        rr(t, e, z);
      } finally {
        i !== null && s.types !== null && (i.types = s.types), (D.T = i);
      }
    } else
      try {
        (i = l(u, a)), Co(t, e, i);
      } catch (z) {
        rr(t, e, z);
      }
  }
  function Co(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            _o(t, e, a);
          },
          function (a) {
            return rr(t, e, a);
          }
        )
      : _o(t, e, l);
  }
  function _o(t, e, l) {
    (e.status = "fulfilled"),
      (e.value = l),
      No(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next),
        l === e ? (t.pending = null) : ((l = l.next), (e.next = l), xo(t, l)));
  }
  function rr(t, e, l) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do (e.status = "rejected"), (e.reason = l), No(e), (e = e.next);
      while (e !== a);
    }
    t.action = null;
  }
  function No(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Do(t, e) {
    return e;
  }
  function Mo(t, e) {
    if (st) {
      var l = Rt.formState;
      if (l !== null) {
        t: {
          var a = lt;
          if (st) {
            if (xt) {
              e: {
                for (var u = xt, i = De; u.nodeType !== 8; ) {
                  if (!i) {
                    u = null;
                    break e;
                  }
                  if (((u = Ue(u.nextSibling)), u === null)) {
                    u = null;
                    break e;
                  }
                }
                (i = u.data), (u = i === "F!" || i === "F" ? u : null);
              }
              if (u) {
                (xt = Ue(u.nextSibling)), (a = u.data === "F!");
                break t;
              }
            }
            El(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return (
      (l = ae()),
      (l.memoizedState = l.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Do,
        lastRenderedState: e,
      }),
      (l.queue = a),
      (l = Wo.bind(null, lt, a)),
      (a.dispatch = l),
      (a = cr(!1)),
      (i = mr.bind(null, lt, !1, a.queue)),
      (a = ae()),
      (u = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = u),
      (l = B0.bind(null, lt, u, i, l)),
      (u.dispatch = l),
      (a.memoizedState = t),
      [e, l, !1]
    );
  }
  function Uo(t) {
    var e = wt();
    return Ho(e, St, t);
  }
  function Ho(t, e, l) {
    if (
      ((e = ur(t, e, Do)[0]),
      (t = Zu(ll)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = Cn(e);
      } catch (s) {
        throw s === Ma ? ju : s;
      }
    else a = e;
    e = wt();
    var u = e.queue,
      i = u.dispatch;
    return (
      l !== e.memoizedState &&
        ((lt.flags |= 2048),
        Ba(9, { destroy: void 0 }, L0.bind(null, u, l), null)),
      [a, i, t]
    );
  }
  function L0(t, e) {
    t.action = e;
  }
  function jo(t) {
    var e = wt(),
      l = St;
    if (l !== null) return Ho(e, l, t);
    wt(), (e = e.memoizedState), (l = wt());
    var a = l.queue.dispatch;
    return (l.memoizedState = t), [e, a, !1];
  }
  function Ba(t, e, l, a) {
    return (
      (t = { tag: t, create: l, deps: a, inst: e, next: null }),
      (e = lt.updateQueue),
      e === null && ((e = Qu()), (lt.updateQueue = e)),
      (l = e.lastEffect),
      l === null
        ? (e.lastEffect = t.next = t)
        : ((a = l.next), (l.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function wo() {
    return wt().memoizedState;
  }
  function Ku(t, e, l, a) {
    var u = ae();
    (lt.flags |= t),
      (u.memoizedState = Ba(
        1 | e,
        { destroy: void 0 },
        l,
        a === void 0 ? null : a
      ));
  }
  function Ju(t, e, l, a) {
    var u = wt();
    a = a === void 0 ? null : a;
    var i = u.memoizedState.inst;
    St !== null && a !== null && Ic(a, St.memoizedState.deps)
      ? (u.memoizedState = Ba(e, i, l, a))
      : ((lt.flags |= t), (u.memoizedState = Ba(1 | e, i, l, a)));
  }
  function Bo(t, e) {
    Ku(8390656, 8, t, e);
  }
  function fr(t, e) {
    Ju(2048, 8, t, e);
  }
  function q0(t) {
    lt.flags |= 4;
    var e = lt.updateQueue;
    if (e === null) (e = Qu()), (lt.updateQueue = e), (e.events = [t]);
    else {
      var l = e.events;
      l === null ? (e.events = [t]) : l.push(t);
    }
  }
  function Lo(t) {
    var e = wt().memoizedState;
    return (
      q0({ ref: e, nextImpl: t }),
      function () {
        if ((yt & 2) !== 0) throw Error(r(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function qo(t, e) {
    return Ju(4, 2, t, e);
  }
  function Yo(t, e) {
    return Ju(4, 4, t, e);
  }
  function Go(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function () {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Xo(t, e, l) {
    (l = l != null ? l.concat([t]) : null), Ju(4, 4, Go.bind(null, e, t), l);
  }
  function sr() {}
  function Qo(t, e) {
    var l = wt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && Ic(e, a[1]) ? a[0] : ((l.memoizedState = [t, e]), t);
  }
  function Vo(t, e) {
    var l = wt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && Ic(e, a[1])) return a[0];
    if (((a = t()), ua)) {
      pl(!0);
      try {
        t();
      } finally {
        pl(!1);
      }
    }
    return (l.memoizedState = [a, e]), a;
  }
  function or(t, e, l) {
    return l === void 0 || ((el & 1073741824) !== 0 && (rt & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = l), (t = Zd()), (lt.lanes |= t), (Nl |= t), l);
  }
  function Zo(t, e, l, a) {
    return ge(l, e)
      ? l
      : Ha.current !== null
      ? ((t = or(t, l, a)), ge(t, e) || (qt = !0), t)
      : (el & 42) === 0 || ((el & 1073741824) !== 0 && (rt & 261930) === 0)
      ? ((qt = !0), (t.memoizedState = l))
      : ((t = Zd()), (lt.lanes |= t), (Nl |= t), e);
  }
  function Ko(t, e, l, a, u) {
    var i = Q.p;
    Q.p = i !== 0 && 8 > i ? i : 8;
    var s = D.T,
      m = {};
    (D.T = m), mr(t, !1, e, l);
    try {
      var b = u(),
        z = D.S;
      if (
        (z !== null && z(m, b),
        b !== null && typeof b == "object" && typeof b.then == "function")
      ) {
        var M = H0(b, a);
        _n(t, e, M, Oe(t));
      } else _n(t, e, a, Oe(t));
    } catch (B) {
      _n(t, e, { then: function () {}, status: "rejected", reason: B }, Oe());
    } finally {
      (Q.p = i),
        s !== null && m.types !== null && (s.types = m.types),
        (D.T = s);
    }
  }
  function Y0() {}
  function dr(t, e, l, a) {
    if (t.tag !== 5) throw Error(r(476));
    var u = Jo(t).queue;
    Ko(
      t,
      u,
      e,
      F,
      l === null
        ? Y0
        : function () {
            return $o(t), l(a);
          }
    );
  }
  function Jo(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: F,
      baseState: F,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ll,
        lastRenderedState: F,
      },
      next: null,
    };
    var l = {};
    return (
      (e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ll,
          lastRenderedState: l,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function $o(t) {
    var e = Jo(t);
    e.next === null && (e = t.alternate.memoizedState),
      _n(t, e.next.queue, {}, Oe());
  }
  function hr() {
    return Ft(Kn);
  }
  function Fo() {
    return wt().memoizedState;
  }
  function ko() {
    return wt().memoizedState;
  }
  function G0(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = Oe();
          t = Ol(l);
          var a = Rl(e, t, l);
          a !== null && (oe(a, e, l), On(a, e, l)),
            (e = { cache: Xc() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function X0(t, e, l) {
    var a = Oe();
    (l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      $u(t)
        ? Po(e, l)
        : ((l = Dc(t, e, l, a)), l !== null && (oe(l, t, a), Io(l, e, a)));
  }
  function Wo(t, e, l) {
    var a = Oe();
    _n(t, e, l, a);
  }
  function _n(t, e, l, a) {
    var u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if ($u(t)) Po(e, u);
    else {
      var i = t.alternate;
      if (
        t.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = e.lastRenderedReducer), i !== null)
      )
        try {
          var s = e.lastRenderedState,
            m = i(s, l);
          if (((u.hasEagerState = !0), (u.eagerState = m), ge(m, s)))
            return Cu(t, e, u, 0), Rt === null && xu(), !1;
        } catch {
        } finally {
        }
      if (((l = Dc(t, e, u, a)), l !== null))
        return oe(l, t, a), Io(l, e, a), !0;
    }
    return !1;
  }
  function mr(t, e, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Kr(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      $u(t))
    ) {
      if (e) throw Error(r(479));
    } else (e = Dc(t, l, a, 2)), e !== null && oe(e, t, 2);
  }
  function $u(t) {
    var e = t.alternate;
    return t === lt || (e !== null && e === lt);
  }
  function Po(t, e) {
    ja = Gu = !0;
    var l = t.pending;
    l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
      (t.pending = e);
  }
  function Io(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      (a &= t.pendingLanes), (l |= a), (e.lanes = l), as(t, l);
    }
  }
  var Nn = {
    readContext: Ft,
    use: Vu,
    useCallback: Mt,
    useContext: Mt,
    useEffect: Mt,
    useImperativeHandle: Mt,
    useLayoutEffect: Mt,
    useInsertionEffect: Mt,
    useMemo: Mt,
    useReducer: Mt,
    useRef: Mt,
    useState: Mt,
    useDebugValue: Mt,
    useDeferredValue: Mt,
    useTransition: Mt,
    useSyncExternalStore: Mt,
    useId: Mt,
    useHostTransitionStatus: Mt,
    useFormState: Mt,
    useActionState: Mt,
    useOptimistic: Mt,
    useMemoCache: Mt,
    useCacheRefresh: Mt,
  };
  Nn.useEffectEvent = Mt;
  var td = {
      readContext: Ft,
      use: Vu,
      useCallback: function (t, e) {
        return (ae().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: Ft,
      useEffect: Bo,
      useImperativeHandle: function (t, e, l) {
        (l = l != null ? l.concat([t]) : null),
          Ku(4194308, 4, Go.bind(null, e, t), l);
      },
      useLayoutEffect: function (t, e) {
        return Ku(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        Ku(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var l = ae();
        e = e === void 0 ? null : e;
        var a = t();
        if (ua) {
          pl(!0);
          try {
            t();
          } finally {
            pl(!1);
          }
        }
        return (l.memoizedState = [a, e]), a;
      },
      useReducer: function (t, e, l) {
        var a = ae();
        if (l !== void 0) {
          var u = l(e);
          if (ua) {
            pl(!0);
            try {
              l(e);
            } finally {
              pl(!1);
            }
          }
        } else u = e;
        return (
          (a.memoizedState = a.baseState = u),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: u,
          }),
          (a.queue = t),
          (t = t.dispatch = X0.bind(null, lt, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = ae();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = cr(t);
        var e = t.queue,
          l = Wo.bind(null, lt, e);
        return (e.dispatch = l), [t.memoizedState, l];
      },
      useDebugValue: sr,
      useDeferredValue: function (t, e) {
        var l = ae();
        return or(l, t, e);
      },
      useTransition: function () {
        var t = cr(!1);
        return (
          (t = Ko.bind(null, lt, t.queue, !0, !1)),
          (ae().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, l) {
        var a = lt,
          u = ae();
        if (st) {
          if (l === void 0) throw Error(r(407));
          l = l();
        } else {
          if (((l = e()), Rt === null)) throw Error(r(349));
          (rt & 127) !== 0 || Eo(a, e, l);
        }
        u.memoizedState = l;
        var i = { value: l, getSnapshot: e };
        return (
          (u.queue = i),
          Bo(Ao.bind(null, a, i, t), [t]),
          (a.flags |= 2048),
          Ba(9, { destroy: void 0 }, To.bind(null, a, i, l, e), null),
          l
        );
      },
      useId: function () {
        var t = ae(),
          e = Rt.identifierPrefix;
        if (st) {
          var l = Xe,
            a = Ge;
          (l = (a & ~(1 << (32 - ve(a) - 1))).toString(32) + l),
            (e = "_" + e + "R_" + l),
            (l = Xu++),
            0 < l && (e += "H" + l.toString(32)),
            (e += "_");
        } else (l = j0++), (e = "_" + e + "r_" + l.toString(32) + "_");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: hr,
      useFormState: Mo,
      useActionState: Mo,
      useOptimistic: function (t) {
        var e = ae();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = l),
          (e = mr.bind(null, lt, !0, l)),
          (l.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: nr,
      useCacheRefresh: function () {
        return (ae().memoizedState = G0.bind(null, lt));
      },
      useEffectEvent: function (t) {
        var e = ae(),
          l = { impl: t };
        return (
          (e.memoizedState = l),
          function () {
            if ((yt & 2) !== 0) throw Error(r(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    yr = {
      readContext: Ft,
      use: Vu,
      useCallback: Qo,
      useContext: Ft,
      useEffect: fr,
      useImperativeHandle: Xo,
      useInsertionEffect: qo,
      useLayoutEffect: Yo,
      useMemo: Vo,
      useReducer: Zu,
      useRef: wo,
      useState: function () {
        return Zu(ll);
      },
      useDebugValue: sr,
      useDeferredValue: function (t, e) {
        var l = wt();
        return Zo(l, St.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Zu(ll)[0],
          e = wt().memoizedState;
        return [typeof t == "boolean" ? t : Cn(t), e];
      },
      useSyncExternalStore: So,
      useId: Fo,
      useHostTransitionStatus: hr,
      useFormState: Uo,
      useActionState: Uo,
      useOptimistic: function (t, e) {
        var l = wt();
        return zo(l, St, t, e);
      },
      useMemoCache: nr,
      useCacheRefresh: ko,
    };
  yr.useEffectEvent = Lo;
  var ed = {
    readContext: Ft,
    use: Vu,
    useCallback: Qo,
    useContext: Ft,
    useEffect: fr,
    useImperativeHandle: Xo,
    useInsertionEffect: qo,
    useLayoutEffect: Yo,
    useMemo: Vo,
    useReducer: ir,
    useRef: wo,
    useState: function () {
      return ir(ll);
    },
    useDebugValue: sr,
    useDeferredValue: function (t, e) {
      var l = wt();
      return St === null ? or(l, t, e) : Zo(l, St.memoizedState, t, e);
    },
    useTransition: function () {
      var t = ir(ll)[0],
        e = wt().memoizedState;
      return [typeof t == "boolean" ? t : Cn(t), e];
    },
    useSyncExternalStore: So,
    useId: Fo,
    useHostTransitionStatus: hr,
    useFormState: jo,
    useActionState: jo,
    useOptimistic: function (t, e) {
      var l = wt();
      return St !== null
        ? zo(l, St, t, e)
        : ((l.baseState = t), [t, l.queue.dispatch]);
    },
    useMemoCache: nr,
    useCacheRefresh: ko,
  };
  ed.useEffectEvent = Lo;
  function pr(t, e, l, a) {
    (e = t.memoizedState),
      (l = l(a, e)),
      (l = l == null ? e : T({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var vr = {
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var a = Oe(),
        u = Ol(a);
      (u.payload = e),
        l != null && (u.callback = l),
        (e = Rl(t, u, a)),
        e !== null && (oe(e, t, a), On(e, t, a));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var a = Oe(),
        u = Ol(a);
      (u.tag = 1),
        (u.payload = e),
        l != null && (u.callback = l),
        (e = Rl(t, u, a)),
        e !== null && (oe(e, t, a), On(e, t, a));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = Oe(),
        a = Ol(l);
      (a.tag = 2),
        e != null && (a.callback = e),
        (e = Rl(t, a, l)),
        e !== null && (oe(e, t, l), On(e, t, l));
    },
  };
  function ld(t, e, l, a, u, i, s) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, i, s)
        : e.prototype && e.prototype.isPureReactComponent
        ? !pn(l, a) || !pn(u, i)
        : !0
    );
  }
  function ad(t, e, l, a) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(l, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(l, a),
      e.state !== t && vr.enqueueReplaceState(e, e.state, null);
  }
  function ia(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e) a !== "ref" && (l[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = T({}, l));
      for (var u in t) l[u] === void 0 && (l[u] = t[u]);
    }
    return l;
  }
  function nd(t) {
    zu(t);
  }
  function ud(t) {
    console.error(t);
  }
  function id(t) {
    zu(t);
  }
  function Fu(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function cd(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function gr(t, e, l) {
    return (
      (l = Ol(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Fu(t, e);
      }),
      l
    );
  }
  function rd(t) {
    return (t = Ol(t)), (t.tag = 3), t;
  }
  function fd(t, e, l, a) {
    var u = l.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var i = a.value;
      (t.payload = function () {
        return u(i);
      }),
        (t.callback = function () {
          cd(e, l, a);
        });
    }
    var s = l.stateNode;
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (t.callback = function () {
        cd(e, l, a),
          typeof u != "function" &&
            (Dl === null ? (Dl = new Set([this])) : Dl.add(this));
        var m = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: m !== null ? m : "",
        });
      });
  }
  function Q0(t, e, l, a, u) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = l.alternate),
        e !== null && _a(e, l, u, !0),
        (l = Se.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              Me === null ? ci() : l.alternate === null && Ut === 0 && (Ut = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = u),
              a === wu
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null ? (l.updateQueue = new Set([a])) : e.add(a),
                  Qr(t, a, u)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === wu
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = e))
                    : ((l = e.retryQueue),
                      l === null ? (e.retryQueue = new Set([a])) : l.add(a)),
                  Qr(t, a, u)),
              !1
            );
        }
        throw Error(r(435, l.tag));
      }
      return Qr(t, a, u), ci(), !1;
    }
    if (st)
      return (
        (e = Se.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = u),
            a !== Bc && ((t = Error(r(422), { cause: a })), bn(Ce(t, l))))
          : (a !== Bc && ((e = Error(r(423), { cause: a })), bn(Ce(e, l))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (u &= -u),
            (t.lanes |= u),
            (a = Ce(a, l)),
            (u = gr(t.stateNode, a, u)),
            $c(t, u),
            Ut !== 4 && (Ut = 2)),
        !1
      );
    var i = Error(r(520), { cause: a });
    if (
      ((i = Ce(i, l)),
      Ln === null ? (Ln = [i]) : Ln.push(i),
      Ut !== 4 && (Ut = 2),
      e === null)
    )
      return !0;
    (a = Ce(a, l)), (l = e);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = u & -u),
            (l.lanes |= t),
            (t = gr(l.stateNode, a, t)),
            $c(l, t),
            !1
          );
        case 1:
          if (
            ((e = l.type),
            (i = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (i !== null &&
                  typeof i.componentDidCatch == "function" &&
                  (Dl === null || !Dl.has(i)))))
          )
            return (
              (l.flags |= 65536),
              (u &= -u),
              (l.lanes |= u),
              (u = rd(u)),
              fd(u, t, l, a),
              $c(l, u),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var br = Error(r(461)),
    qt = !1;
  function kt(t, e, l, a) {
    e.child = t === null ? ho(e, null, l, a) : na(e, t.child, l, a);
  }
  function sd(t, e, l, a, u) {
    l = l.render;
    var i = e.ref;
    if ("ref" in a) {
      var s = {};
      for (var m in a) m !== "ref" && (s[m] = a[m]);
    } else s = a;
    return (
      ta(e),
      (a = tr(t, e, l, s, i, u)),
      (m = er()),
      t !== null && !qt
        ? (lr(t, e, u), al(t, e, u))
        : (st && m && jc(e), (e.flags |= 1), kt(t, e, a, u), e.child)
    );
  }
  function od(t, e, l, a, u) {
    if (t === null) {
      var i = l.type;
      return typeof i == "function" &&
        !Mc(i) &&
        i.defaultProps === void 0 &&
        l.compare === null
        ? ((e.tag = 15), (e.type = i), dd(t, e, i, a, u))
        : ((t = Nu(l.type, null, a, e, e.mode, u)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((i = t.child), !xr(t, u))) {
      var s = i.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : pn), l(s, a) && t.ref === e.ref)
      )
        return al(t, e, u);
    }
    return (
      (e.flags |= 1),
      (t = We(i, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function dd(t, e, l, a, u) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (pn(i, a) && t.ref === e.ref)
        if (((qt = !1), (e.pendingProps = a = i), xr(t, u)))
          (t.flags & 131072) !== 0 && (qt = !0);
        else return (e.lanes = t.lanes), al(t, e, u);
    }
    return Sr(t, e, l, a, u);
  }
  function hd(t, e, l, a) {
    var u = a.children,
      i = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((i = i !== null ? i.baseLanes | l : l), t !== null)) {
          for (a = e.child = t.child, u = 0; a !== null; )
            (u = u | a.lanes | a.childLanes), (a = a.sibling);
          a = u & ~i;
        } else (a = 0), (e.child = null);
        return md(t, e, i, l, a);
      }
      if ((l & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Hu(e, i !== null ? i.cachePool : null),
          i !== null ? po(e, i) : kc(),
          vo(e);
      else
        return (
          (a = e.lanes = 536870912),
          md(t, e, i !== null ? i.baseLanes | l : l, l, a)
        );
    } else
      i !== null
        ? (Hu(e, i.cachePool), po(e, i), xl(), (e.memoizedState = null))
        : (t !== null && Hu(e, null), kc(), xl());
    return kt(t, e, u, l), e.child;
  }
  function Dn(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function md(t, e, l, a, u) {
    var i = Vc();
    return (
      (i = i === null ? null : { parent: Bt._currentValue, pool: i }),
      (e.memoizedState = { baseLanes: l, cachePool: i }),
      t !== null && Hu(e, null),
      kc(),
      vo(e),
      t !== null && _a(t, e, a, !0),
      (e.childLanes = u),
      null
    );
  }
  function ku(t, e) {
    return (
      (e = Pu({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function yd(t, e, l) {
    return (
      na(e, t.child, null, l),
      (t = ku(e, e.pendingProps)),
      (t.flags |= 2),
      Ee(e),
      (e.memoizedState = null),
      t
    );
  }
  function V0(t, e, l) {
    var a = e.pendingProps,
      u = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (st) {
        if (a.mode === "hidden")
          return (t = ku(e, a)), (e.lanes = 536870912), Dn(null, t);
        if (
          (Pc(e),
          (t = xt)
            ? ((t = xh(t, De)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: bl !== null ? { id: Ge, overflow: Xe } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Ws(t)),
                (l.return = e),
                (e.child = l),
                ($t = e),
                (xt = null)))
            : (t = null),
          t === null)
        )
          throw El(e);
        return (e.lanes = 536870912), null;
      }
      return ku(e, a);
    }
    var i = t.memoizedState;
    if (i !== null) {
      var s = i.dehydrated;
      if ((Pc(e), u))
        if (e.flags & 256) (e.flags &= -257), (e = yd(t, e, l));
        else if (e.memoizedState !== null)
          (e.child = t.child), (e.flags |= 128), (e = null);
        else throw Error(r(558));
      else if (
        (qt || _a(t, e, l, !1), (u = (l & t.childLanes) !== 0), qt || u)
      ) {
        if (
          ((a = Rt),
          a !== null && ((s = ns(a, l)), s !== 0 && s !== i.retryLane))
        )
          throw ((i.retryLane = s), kl(t, s), oe(a, t, s), br);
        ci(), (e = yd(t, e, l));
      } else
        (t = i.treeContext),
          (xt = Ue(s.nextSibling)),
          ($t = e),
          (st = !0),
          (Sl = null),
          (De = !1),
          t !== null && to(e, t),
          (e = ku(e, a)),
          (e.flags |= 4096);
      return e;
    }
    return (
      (t = We(t.child, { mode: a.mode, children: a.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Wu(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(r(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Sr(t, e, l, a, u) {
    return (
      ta(e),
      (l = tr(t, e, l, a, void 0, u)),
      (a = er()),
      t !== null && !qt
        ? (lr(t, e, u), al(t, e, u))
        : (st && a && jc(e), (e.flags |= 1), kt(t, e, l, u), e.child)
    );
  }
  function pd(t, e, l, a, u, i) {
    return (
      ta(e),
      (e.updateQueue = null),
      (l = bo(e, a, l, u)),
      go(t),
      (a = er()),
      t !== null && !qt
        ? (lr(t, e, i), al(t, e, i))
        : (st && a && jc(e), (e.flags |= 1), kt(t, e, l, i), e.child)
    );
  }
  function vd(t, e, l, a, u) {
    if ((ta(e), e.stateNode === null)) {
      var i = Ra,
        s = l.contextType;
      typeof s == "object" && s !== null && (i = Ft(s)),
        (i = new l(a, i)),
        (e.memoizedState =
          i.state !== null && i.state !== void 0 ? i.state : null),
        (i.updater = vr),
        (e.stateNode = i),
        (i._reactInternals = e),
        (i = e.stateNode),
        (i.props = a),
        (i.state = e.memoizedState),
        (i.refs = {}),
        Kc(e),
        (s = l.contextType),
        (i.context = typeof s == "object" && s !== null ? Ft(s) : Ra),
        (i.state = e.memoizedState),
        (s = l.getDerivedStateFromProps),
        typeof s == "function" && (pr(e, l, s, a), (i.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function" ||
          (typeof i.UNSAFE_componentWillMount != "function" &&
            typeof i.componentWillMount != "function") ||
          ((s = i.state),
          typeof i.componentWillMount == "function" && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == "function" &&
            i.UNSAFE_componentWillMount(),
          s !== i.state && vr.enqueueReplaceState(i, i.state, null),
          zn(e, a, i, u),
          Rn(),
          (i.state = e.memoizedState)),
        typeof i.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0);
    } else if (t === null) {
      i = e.stateNode;
      var m = e.memoizedProps,
        b = ia(l, m);
      i.props = b;
      var z = i.context,
        M = l.contextType;
      (s = Ra), typeof M == "object" && M !== null && (s = Ft(M));
      var B = l.getDerivedStateFromProps;
      (M =
        typeof B == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function"),
        (m = e.pendingProps !== m),
        M ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((m || z !== s) && ad(e, i, a, s)),
        (Al = !1);
      var x = e.memoizedState;
      (i.state = x),
        zn(e, a, i, u),
        Rn(),
        (z = e.memoizedState),
        m || x !== z || Al
          ? (typeof B == "function" && (pr(e, l, B, a), (z = e.memoizedState)),
            (b = Al || ld(e, l, b, a, x, z, s))
              ? (M ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = z)),
            (i.props = a),
            (i.state = z),
            (i.context = s),
            (a = b))
          : (typeof i.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1));
    } else {
      (i = e.stateNode),
        Jc(t, e),
        (s = e.memoizedProps),
        (M = ia(l, s)),
        (i.props = M),
        (B = e.pendingProps),
        (x = i.context),
        (z = l.contextType),
        (b = Ra),
        typeof z == "object" && z !== null && (b = Ft(z)),
        (m = l.getDerivedStateFromProps),
        (z =
          typeof m == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function") ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((s !== B || x !== b) && ad(e, i, a, b)),
        (Al = !1),
        (x = e.memoizedState),
        (i.state = x),
        zn(e, a, i, u),
        Rn();
      var N = e.memoizedState;
      s !== B ||
      x !== N ||
      Al ||
      (t !== null && t.dependencies !== null && Mu(t.dependencies))
        ? (typeof m == "function" && (pr(e, l, m, a), (N = e.memoizedState)),
          (M =
            Al ||
            ld(e, l, M, a, x, N, b) ||
            (t !== null && t.dependencies !== null && Mu(t.dependencies)))
            ? (z ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(a, N, b),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(a, N, b)),
              typeof i.componentDidUpdate == "function" && (e.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (s === t.memoizedProps && x === t.memoizedState) ||
                (e.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (s === t.memoizedProps && x === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = N)),
          (i.props = a),
          (i.state = N),
          (i.context = b),
          (a = M))
        : (typeof i.componentDidUpdate != "function" ||
            (s === t.memoizedProps && x === t.memoizedState) ||
            (e.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (s === t.memoizedProps && x === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (i = a),
      Wu(t, e),
      (a = (e.flags & 128) !== 0),
      i || a
        ? ((i = e.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : i.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = na(e, t.child, null, u)),
              (e.child = na(e, null, l, u)))
            : kt(t, e, l, u),
          (e.memoizedState = i.state),
          (t = e.child))
        : (t = al(t, e, u)),
      t
    );
  }
  function gd(t, e, l, a) {
    return Pl(), (e.flags |= 256), kt(t, e, l, a), e.child;
  }
  var Er = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Tr(t) {
    return { baseLanes: t, cachePool: io() };
  }
  function Ar(t, e, l) {
    return (t = t !== null ? t.childLanes & ~l : 0), e && (t |= Ae), t;
  }
  function bd(t, e, l) {
    var a = e.pendingProps,
      u = !1,
      i = (e.flags & 128) !== 0,
      s;
    if (
      ((s = i) ||
        (s =
          t !== null && t.memoizedState === null ? !1 : (jt.current & 2) !== 0),
      s && ((u = !0), (e.flags &= -129)),
      (s = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (st) {
        if (
          (u ? zl(e) : xl(),
          (t = xt)
            ? ((t = xh(t, De)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: bl !== null ? { id: Ge, overflow: Xe } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Ws(t)),
                (l.return = e),
                (e.child = l),
                ($t = e),
                (xt = null)))
            : (t = null),
          t === null)
        )
          throw El(e);
        return uf(t) ? (e.lanes = 32) : (e.lanes = 536870912), null;
      }
      var m = a.children;
      return (
        (a = a.fallback),
        u
          ? (xl(),
            (u = e.mode),
            (m = Pu({ mode: "hidden", children: m }, u)),
            (a = Wl(a, u, l, null)),
            (m.return = e),
            (a.return = e),
            (m.sibling = a),
            (e.child = m),
            (a = e.child),
            (a.memoizedState = Tr(l)),
            (a.childLanes = Ar(t, s, l)),
            (e.memoizedState = Er),
            Dn(null, a))
          : (zl(e), Or(e, m))
      );
    }
    var b = t.memoizedState;
    if (b !== null && ((m = b.dehydrated), m !== null)) {
      if (i)
        e.flags & 256
          ? (zl(e), (e.flags &= -257), (e = Rr(t, e, l)))
          : e.memoizedState !== null
          ? (xl(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (xl(),
            (m = a.fallback),
            (u = e.mode),
            (a = Pu({ mode: "visible", children: a.children }, u)),
            (m = Wl(m, u, l, null)),
            (m.flags |= 2),
            (a.return = e),
            (m.return = e),
            (a.sibling = m),
            (e.child = a),
            na(e, t.child, null, l),
            (a = e.child),
            (a.memoizedState = Tr(l)),
            (a.childLanes = Ar(t, s, l)),
            (e.memoizedState = Er),
            (e = Dn(null, a)));
      else if ((zl(e), uf(m))) {
        if (((s = m.nextSibling && m.nextSibling.dataset), s)) var z = s.dgst;
        (s = z),
          (a = Error(r(419))),
          (a.stack = ""),
          (a.digest = s),
          bn({ value: a, source: null, stack: null }),
          (e = Rr(t, e, l));
      } else if (
        (qt || _a(t, e, l, !1), (s = (l & t.childLanes) !== 0), qt || s)
      ) {
        if (
          ((s = Rt),
          s !== null && ((a = ns(s, l)), a !== 0 && a !== b.retryLane))
        )
          throw ((b.retryLane = a), kl(t, a), oe(s, t, a), br);
        nf(m) || ci(), (e = Rr(t, e, l));
      } else
        nf(m)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = b.treeContext),
            (xt = Ue(m.nextSibling)),
            ($t = e),
            (st = !0),
            (Sl = null),
            (De = !1),
            t !== null && to(e, t),
            (e = Or(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return u
      ? (xl(),
        (m = a.fallback),
        (u = e.mode),
        (b = t.child),
        (z = b.sibling),
        (a = We(b, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = b.subtreeFlags & 65011712),
        z !== null ? (m = We(z, m)) : ((m = Wl(m, u, l, null)), (m.flags |= 2)),
        (m.return = e),
        (a.return = e),
        (a.sibling = m),
        (e.child = a),
        Dn(null, a),
        (a = e.child),
        (m = t.child.memoizedState),
        m === null
          ? (m = Tr(l))
          : ((u = m.cachePool),
            u !== null
              ? ((b = Bt._currentValue),
                (u = u.parent !== b ? { parent: b, pool: b } : u))
              : (u = io()),
            (m = { baseLanes: m.baseLanes | l, cachePool: u })),
        (a.memoizedState = m),
        (a.childLanes = Ar(t, s, l)),
        (e.memoizedState = Er),
        Dn(t.child, a))
      : (zl(e),
        (l = t.child),
        (t = l.sibling),
        (l = We(l, { mode: "visible", children: a.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((s = e.deletions),
          s === null ? ((e.deletions = [t]), (e.flags |= 16)) : s.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function Or(t, e) {
    return (
      (e = Pu({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Pu(t, e) {
    return (t = be(22, t, null, e)), (t.lanes = 0), t;
  }
  function Rr(t, e, l) {
    return (
      na(e, t.child, null, l),
      (t = Or(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Sd(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Yc(t.return, e, l);
  }
  function zr(t, e, l, a, u, i) {
    var s = t.memoizedState;
    s === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: u,
          treeForkCount: i,
        })
      : ((s.isBackwards = e),
        (s.rendering = null),
        (s.renderingStartTime = 0),
        (s.last = a),
        (s.tail = l),
        (s.tailMode = u),
        (s.treeForkCount = i));
  }
  function Ed(t, e, l) {
    var a = e.pendingProps,
      u = a.revealOrder,
      i = a.tail;
    a = a.children;
    var s = jt.current,
      m = (s & 2) !== 0;
    if (
      (m ? ((s = (s & 1) | 2), (e.flags |= 128)) : (s &= 1),
      V(jt, s),
      kt(t, e, a, l),
      (a = st ? gn : 0),
      !m && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Sd(t, l, e);
        else if (t.tag === 19) Sd(t, l, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    switch (u) {
      case "forwards":
        for (l = e.child, u = null; l !== null; )
          (t = l.alternate),
            t !== null && Yu(t) === null && (u = l),
            (l = l.sibling);
        (l = u),
          l === null
            ? ((u = e.child), (e.child = null))
            : ((u = l.sibling), (l.sibling = null)),
          zr(e, !1, u, l, i, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, u = e.child, e.child = null; u !== null; ) {
          if (((t = u.alternate), t !== null && Yu(t) === null)) {
            e.child = u;
            break;
          }
          (t = u.sibling), (u.sibling = l), (l = u), (u = t);
        }
        zr(e, !0, l, null, i, a);
        break;
      case "together":
        zr(e, !1, null, null, void 0, a);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function al(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Nl |= e.lanes),
      (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((_a(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(r(153));
    if (e.child !== null) {
      for (
        t = e.child, l = We(t, t.pendingProps), e.child = l, l.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (l = l.sibling = We(t, t.pendingProps)),
          (l.return = e);
      l.sibling = null;
    }
    return e.child;
  }
  function xr(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Mu(t)));
  }
  function Z0(t, e, l) {
    switch (e.tag) {
      case 3:
        le(e, e.stateNode.containerInfo),
          Tl(e, Bt, t.memoizedState.cache),
          Pl();
        break;
      case 27:
      case 5:
        ln(e);
        break;
      case 4:
        le(e, e.stateNode.containerInfo);
        break;
      case 10:
        Tl(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return (e.flags |= 128), Pc(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (zl(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0
            ? bd(t, e, l)
            : (zl(e), (t = al(t, e, l)), t !== null ? t.sibling : null);
        zl(e);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (
          ((a = (l & e.childLanes) !== 0),
          a || (_a(t, e, l, !1), (a = (l & e.childLanes) !== 0)),
          u)
        ) {
          if (a) return Ed(t, e, l);
          e.flags |= 128;
        }
        if (
          ((u = e.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          V(jt, jt.current),
          a)
        )
          break;
        return null;
      case 22:
        return (e.lanes = 0), hd(t, e, l, e.pendingProps);
      case 24:
        Tl(e, Bt, t.memoizedState.cache);
    }
    return al(t, e, l);
  }
  function Td(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) qt = !0;
      else {
        if (!xr(t, l) && (e.flags & 128) === 0) return (qt = !1), Z0(t, e, l);
        qt = (t.flags & 131072) !== 0;
      }
    else (qt = !1), st && (e.flags & 1048576) !== 0 && Is(e, gn, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (((t = la(e.elementType)), (e.type = t), typeof t == "function"))
            Mc(t)
              ? ((a = ia(t, a)), (e.tag = 1), (e = vd(null, e, t, a, l)))
              : ((e.tag = 0), (e = Sr(null, e, t, a, l)));
          else {
            if (t != null) {
              var u = t.$$typeof;
              if (u === I) {
                (e.tag = 11), (e = sd(null, e, t, a, l));
                break t;
              } else if (u === W) {
                (e.tag = 14), (e = od(null, e, t, a, l));
                break t;
              }
            }
            throw ((e = Kt(t) || t), Error(r(306, e, "")));
          }
        }
        return e;
      case 0:
        return Sr(t, e, e.type, e.pendingProps, l);
      case 1:
        return (a = e.type), (u = ia(a, e.pendingProps)), vd(t, e, a, u, l);
      case 3:
        t: {
          if ((le(e, e.stateNode.containerInfo), t === null))
            throw Error(r(387));
          a = e.pendingProps;
          var i = e.memoizedState;
          (u = i.element), Jc(t, e), zn(e, a, null, l);
          var s = e.memoizedState;
          if (
            ((a = s.cache),
            Tl(e, Bt, a),
            a !== i.cache && Gc(e, [Bt], l, !0),
            Rn(),
            (a = s.element),
            i.isDehydrated)
          )
            if (
              ((i = { element: a, isDehydrated: !1, cache: s.cache }),
              (e.updateQueue.baseState = i),
              (e.memoizedState = i),
              e.flags & 256)
            ) {
              e = gd(t, e, a, l);
              break t;
            } else if (a !== u) {
              (u = Ce(Error(r(424)), e)), bn(u), (e = gd(t, e, a, l));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                xt = Ue(t.firstChild),
                  $t = e,
                  st = !0,
                  Sl = null,
                  De = !0,
                  l = ho(e, null, a, l),
                  e.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
            }
          else {
            if ((Pl(), a === u)) {
              e = al(t, e, l);
              break t;
            }
            kt(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Wu(t, e),
          t === null
            ? (l = Uh(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = l)
              : st ||
                ((l = e.type),
                (t = e.pendingProps),
                (a = mi(ut.current).createElement(l)),
                (a[Jt] = e),
                (a[ue] = t),
                Wt(a, l, t),
                Vt(a),
                (e.stateNode = a))
            : (e.memoizedState = Uh(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          ln(e),
          t === null &&
            st &&
            ((a = e.stateNode = Nh(e.type, e.pendingProps, ut.current)),
            ($t = e),
            (De = !0),
            (u = xt),
            jl(e.type) ? ((cf = u), (xt = Ue(a.firstChild))) : (xt = u)),
          kt(t, e, e.pendingProps.children, l),
          Wu(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            st &&
            ((u = a = xt) &&
              ((a = Ep(a, e.type, e.pendingProps, De)),
              a !== null
                ? ((e.stateNode = a),
                  ($t = e),
                  (xt = Ue(a.firstChild)),
                  (De = !1),
                  (u = !0))
                : (u = !1)),
            u || El(e)),
          ln(e),
          (u = e.type),
          (i = e.pendingProps),
          (s = t !== null ? t.memoizedProps : null),
          (a = i.children),
          ef(u, i) ? (a = null) : s !== null && ef(u, s) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((u = tr(t, e, w0, null, null, l)), (Kn._currentValue = u)),
          Wu(t, e),
          kt(t, e, a, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            st &&
            ((t = l = xt) &&
              ((l = Tp(l, e.pendingProps, De)),
              l !== null
                ? ((e.stateNode = l), ($t = e), (xt = null), (t = !0))
                : (t = !1)),
            t || El(e)),
          null
        );
      case 13:
        return bd(t, e, l);
      case 4:
        return (
          le(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = na(e, null, a, l)) : kt(t, e, a, l),
          e.child
        );
      case 11:
        return sd(t, e, e.type, e.pendingProps, l);
      case 7:
        return kt(t, e, e.pendingProps, l), e.child;
      case 8:
        return kt(t, e, e.pendingProps.children, l), e.child;
      case 12:
        return kt(t, e, e.pendingProps.children, l), e.child;
      case 10:
        return (
          (a = e.pendingProps),
          Tl(e, e.type, a.value),
          kt(t, e, a.children, l),
          e.child
        );
      case 9:
        return (
          (u = e.type._context),
          (a = e.pendingProps.children),
          ta(e),
          (u = Ft(u)),
          (a = a(u)),
          (e.flags |= 1),
          kt(t, e, a, l),
          e.child
        );
      case 14:
        return od(t, e, e.type, e.pendingProps, l);
      case 15:
        return dd(t, e, e.type, e.pendingProps, l);
      case 19:
        return Ed(t, e, l);
      case 31:
        return V0(t, e, l);
      case 22:
        return hd(t, e, l, e.pendingProps);
      case 24:
        return (
          ta(e),
          (a = Ft(Bt)),
          t === null
            ? ((u = Vc()),
              u === null &&
                ((u = Rt),
                (i = Xc()),
                (u.pooledCache = i),
                i.refCount++,
                i !== null && (u.pooledCacheLanes |= l),
                (u = i)),
              (e.memoizedState = { parent: a, cache: u }),
              Kc(e),
              Tl(e, Bt, u))
            : ((t.lanes & l) !== 0 && (Jc(t, e), zn(e, null, null, l), Rn()),
              (u = t.memoizedState),
              (i = e.memoizedState),
              u.parent !== a
                ? ((u = { parent: a, cache: a }),
                  (e.memoizedState = u),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = u),
                  Tl(e, Bt, a))
                : ((a = i.cache),
                  Tl(e, Bt, a),
                  a !== u.cache && Gc(e, [Bt], l, !0))),
          kt(t, e, e.pendingProps.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function nl(t) {
    t.flags |= 4;
  }
  function Cr(t, e, l, a, u) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (u & 335544128) === u))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Fd()) t.flags |= 8192;
        else throw ((aa = wu), Zc);
    } else t.flags &= -16777217;
  }
  function Ad(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Lh(e)))
      if (Fd()) t.flags |= 8192;
      else throw ((aa = wu), Zc);
  }
  function Iu(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? es() : 536870912), (t.lanes |= e), (Ga |= e));
  }
  function Mn(t, e) {
    if (!st)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), (e = e.sibling);
          l === null ? (t.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), (l = l.sibling);
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Ct(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      a = 0;
    if (e)
      for (var u = t.child; u !== null; )
        (l |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags & 65011712),
          (a |= u.flags & 65011712),
          (u.return = t),
          (u = u.sibling);
    else
      for (u = t.child; u !== null; )
        (l |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags),
          (a |= u.flags),
          (u.return = t),
          (u = u.sibling);
    return (t.subtreeFlags |= a), (t.childLanes = l), e;
  }
  function K0(t, e, l) {
    var a = e.pendingProps;
    switch ((wc(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ct(e), null;
      case 1:
        return Ct(e), null;
      case 3:
        return (
          (l = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          tl(Bt),
          Ht(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ca(e)
              ? nl(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Lc())),
          Ct(e),
          null
        );
      case 26:
        var u = e.type,
          i = e.memoizedState;
        return (
          t === null
            ? (nl(e),
              i !== null ? (Ct(e), Ad(e, i)) : (Ct(e), Cr(e, u, null, a, l)))
            : i
            ? i !== t.memoizedState
              ? (nl(e), Ct(e), Ad(e, i))
              : (Ct(e), (e.flags &= -16777217))
            : ((t = t.memoizedProps),
              t !== a && nl(e),
              Ct(e),
              Cr(e, u, t, a, l)),
          null
        );
      case 27:
        if (
          (su(e),
          (l = ut.current),
          (u = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== a && nl(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(r(166));
            return Ct(e), null;
          }
          (t = K.current),
            Ca(e) ? eo(e) : ((t = Nh(u, a, l)), (e.stateNode = t), nl(e));
        }
        return Ct(e), null;
      case 5:
        if ((su(e), (u = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && nl(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(r(166));
            return Ct(e), null;
          }
          if (((i = K.current), Ca(e))) eo(e);
          else {
            var s = mi(ut.current);
            switch (i) {
              case 1:
                i = s.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                i = s.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    i = s.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    i = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    (i = s.createElement("div")),
                      (i.innerHTML = "<script></script>"),
                      (i = i.removeChild(i.firstChild));
                    break;
                  case "select":
                    (i =
                      typeof a.is == "string"
                        ? s.createElement("select", { is: a.is })
                        : s.createElement("select")),
                      a.multiple
                        ? (i.multiple = !0)
                        : a.size && (i.size = a.size);
                    break;
                  default:
                    i =
                      typeof a.is == "string"
                        ? s.createElement(u, { is: a.is })
                        : s.createElement(u);
                }
            }
            (i[Jt] = e), (i[ue] = a);
            t: for (s = e.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6) i.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                (s.child.return = s), (s = s.child);
                continue;
              }
              if (s === e) break t;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === e) break t;
                s = s.return;
              }
              (s.sibling.return = s.return), (s = s.sibling);
            }
            e.stateNode = i;
            t: switch ((Wt(i, u, a), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && nl(e);
          }
        }
        return (
          Ct(e),
          Cr(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && nl(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(r(166));
          if (((t = ut.current), Ca(e))) {
            if (
              ((t = e.stateNode),
              (l = e.memoizedProps),
              (a = null),
              (u = $t),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            (t[Jt] = e),
              (t = !!(
                t.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                bh(t.nodeValue, l)
              )),
              t || El(e, !0);
          } else (t = mi(t).createTextNode(a)), (t[Jt] = e), (e.stateNode = t);
        }
        return Ct(e), null;
      case 31:
        if (((l = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((a = Ca(e)), l !== null)) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(r(557));
              t[Jt] = e;
            } else
              Pl(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Ct(e), (t = !1);
          } else
            (l = Lc()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = l),
              (t = !0);
          if (!t) return e.flags & 256 ? (Ee(e), e) : (Ee(e), null);
          if ((e.flags & 128) !== 0) throw Error(r(558));
        }
        return Ct(e), null;
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((u = Ca(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!u) throw Error(r(318));
              if (
                ((u = e.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(r(317));
              u[Jt] = e;
            } else
              Pl(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Ct(e), (u = !1);
          } else
            (u = Lc()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = u),
              (u = !0);
          if (!u) return e.flags & 256 ? (Ee(e), e) : (Ee(e), null);
        }
        return (
          Ee(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = l), e)
            : ((l = a !== null),
              (t = t !== null && t.memoizedState !== null),
              l &&
                ((a = e.child),
                (u = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (u = a.alternate.memoizedState.cachePool.pool),
                (i = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (i = a.memoizedState.cachePool.pool),
                i !== u && (a.flags |= 2048)),
              l !== t && l && (e.child.flags |= 8192),
              Iu(e, e.updateQueue),
              Ct(e),
              null)
        );
      case 4:
        return Ht(), t === null && kr(e.stateNode.containerInfo), Ct(e), null;
      case 10:
        return tl(e.type), Ct(e), null;
      case 19:
        if ((w(jt), (a = e.memoizedState), a === null)) return Ct(e), null;
        if (((u = (e.flags & 128) !== 0), (i = a.rendering), i === null))
          if (u) Mn(a, !1);
          else {
            if (Ut !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((i = Yu(t)), i !== null)) {
                  for (
                    e.flags |= 128,
                      Mn(a, !1),
                      t = i.updateQueue,
                      e.updateQueue = t,
                      Iu(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;

                  )
                    ks(l, t), (l = l.sibling);
                  return (
                    V(jt, (jt.current & 1) | 2),
                    st && Pe(e, a.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            a.tail !== null &&
              ye() > ni &&
              ((e.flags |= 128), (u = !0), Mn(a, !1), (e.lanes = 4194304));
          }
        else {
          if (!u)
            if (((t = Yu(i)), t !== null)) {
              if (
                ((e.flags |= 128),
                (u = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Iu(e, t),
                Mn(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !i.alternate &&
                  !st)
              )
                return Ct(e), null;
            } else
              2 * ye() - a.renderingStartTime > ni &&
                l !== 536870912 &&
                ((e.flags |= 128), (u = !0), Mn(a, !1), (e.lanes = 4194304));
          a.isBackwards
            ? ((i.sibling = e.child), (e.child = i))
            : ((t = a.last),
              t !== null ? (t.sibling = i) : (e.child = i),
              (a.last = i));
        }
        return a.tail !== null
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = ye()),
            (t.sibling = null),
            (l = jt.current),
            V(jt, u ? (l & 1) | 2 : l & 1),
            st && Pe(e, a.treeForkCount),
            t)
          : (Ct(e), null);
      case 22:
      case 23:
        return (
          Ee(e),
          Wc(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Ct(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Ct(e),
          (l = e.updateQueue),
          l !== null && Iu(e, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== l && (e.flags |= 2048),
          t !== null && w(ea),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          tl(Bt),
          Ct(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function J0(t, e) {
    switch ((wc(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          tl(Bt),
          Ht(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return su(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if ((Ee(e), e.alternate === null)) throw Error(r(340));
          Pl();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (Ee(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(r(340));
          Pl();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return w(jt), null;
      case 4:
        return Ht(), null;
      case 10:
        return tl(e.type), null;
      case 22:
      case 23:
        return (
          Ee(e),
          Wc(),
          t !== null && w(ea),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return tl(Bt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Od(t, e) {
    switch ((wc(e), e.tag)) {
      case 3:
        tl(Bt), Ht();
        break;
      case 26:
      case 27:
      case 5:
        su(e);
        break;
      case 4:
        Ht();
        break;
      case 31:
        e.memoizedState !== null && Ee(e);
        break;
      case 13:
        Ee(e);
        break;
      case 19:
        w(jt);
        break;
      case 10:
        tl(e.type);
        break;
      case 22:
      case 23:
        Ee(e), Wc(), t !== null && w(ea);
        break;
      case 24:
        tl(Bt);
    }
  }
  function Un(t, e) {
    try {
      var l = e.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        l = u;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var i = l.create,
              s = l.inst;
            (a = i()), (s.destroy = a);
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (m) {
      bt(e, e.return, m);
    }
  }
  function Cl(t, e, l) {
    try {
      var a = e.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var i = u.next;
        a = i;
        do {
          if ((a.tag & t) === t) {
            var s = a.inst,
              m = s.destroy;
            if (m !== void 0) {
              (s.destroy = void 0), (u = e);
              var b = l,
                z = m;
              try {
                z();
              } catch (M) {
                bt(u, b, M);
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (M) {
      bt(e, e.return, M);
    }
  }
  function Rd(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        yo(e, l);
      } catch (a) {
        bt(t, t.return, a);
      }
    }
  }
  function zd(t, e, l) {
    (l.props = ia(t.type, t.memoizedProps)), (l.state = t.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (a) {
      bt(t, e, a);
    }
  }
  function Hn(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == "function" ? (t.refCleanup = l(a)) : (l.current = a);
      }
    } catch (u) {
      bt(t, e, u);
    }
  }
  function Qe(t, e) {
    var l = t.ref,
      a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          bt(t, e, u);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (u) {
          bt(t, e, u);
        }
      else l.current = null;
  }
  function xd(t) {
    var e = t.type,
      l = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (u) {
      bt(t, t.return, u);
    }
  }
  function _r(t, e, l) {
    try {
      var a = t.stateNode;
      yp(a, t.type, l, e), (a[ue] = e);
    } catch (u) {
      bt(t, t.return, u);
    }
  }
  function Cd(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && jl(t.type)) ||
      t.tag === 4
    );
  }
  function Nr(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Cd(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && jl(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Dr(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode),
        e
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
              ? l.ownerDocument.body
              : l
            ).insertBefore(t, e)
          : ((e =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l),
            e.appendChild(t),
            (l = l._reactRootContainer),
            l != null || e.onclick !== null || (e.onclick = Fe));
    else if (
      a !== 4 &&
      (a === 27 && jl(t.type) && ((l = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Dr(t, e, l), t = t.sibling; t !== null; )
        Dr(t, e, l), (t = t.sibling);
  }
  function ti(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (
      a !== 4 &&
      (a === 27 && jl(t.type) && (l = t.stateNode), (t = t.child), t !== null)
    )
      for (ti(t, e, l), t = t.sibling; t !== null; )
        ti(t, e, l), (t = t.sibling);
  }
  function _d(t) {
    var e = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var a = t.type, u = e.attributes; u.length; )
        e.removeAttributeNode(u[0]);
      Wt(e, a, l), (e[Jt] = t), (e[ue] = l);
    } catch (i) {
      bt(t, t.return, i);
    }
  }
  var ul = !1,
    Yt = !1,
    Mr = !1,
    Nd = typeof WeakSet == "function" ? WeakSet : Set,
    Zt = null;
  function $0(t, e) {
    if (((t = t.containerInfo), (Ir = Ei), (t = Gs(t)), Rc(t))) {
      if ("selectionStart" in t)
        var l = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var u = a.anchorOffset,
              i = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, i.nodeType;
            } catch {
              l = null;
              break t;
            }
            var s = 0,
              m = -1,
              b = -1,
              z = 0,
              M = 0,
              B = t,
              x = null;
            e: for (;;) {
              for (
                var N;
                B !== l || (u !== 0 && B.nodeType !== 3) || (m = s + u),
                  B !== i || (a !== 0 && B.nodeType !== 3) || (b = s + a),
                  B.nodeType === 3 && (s += B.nodeValue.length),
                  (N = B.firstChild) !== null;

              )
                (x = B), (B = N);
              for (;;) {
                if (B === t) break e;
                if (
                  (x === l && ++z === u && (m = s),
                  x === i && ++M === a && (b = s),
                  (N = B.nextSibling) !== null)
                )
                  break;
                (B = x), (x = B.parentNode);
              }
              B = N;
            }
            l = m === -1 || b === -1 ? null : { start: m, end: b };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      tf = { focusedElem: t, selectionRange: l }, Ei = !1, Zt = e;
      Zt !== null;

    )
      if (
        ((e = Zt), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        (t.return = e), (Zt = t);
      else
        for (; Zt !== null; ) {
          switch (((e = Zt), (i = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (l = 0; l < t.length; l++)
                  (u = t[l]), (u.ref.impl = u.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && i !== null) {
                (t = void 0),
                  (l = e),
                  (u = i.memoizedProps),
                  (i = i.memoizedState),
                  (a = l.stateNode);
                try {
                  var J = ia(l.type, u);
                  (t = a.getSnapshotBeforeUpdate(J, i)),
                    (a.__reactInternalSnapshotBeforeUpdate = t);
                } catch (P) {
                  bt(l, l.return, P);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)
                )
                  af(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      af(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (Zt = t);
            break;
          }
          Zt = e.return;
        }
  }
  function Dd(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        cl(t, l), a & 4 && Un(5, l);
        break;
      case 1:
        if ((cl(t, l), a & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (s) {
              bt(l, l.return, s);
            }
          else {
            var u = ia(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(u, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (s) {
              bt(l, l.return, s);
            }
          }
        a & 64 && Rd(l), a & 512 && Hn(l, l.return);
        break;
      case 3:
        if ((cl(t, l), a & 64 && ((t = l.updateQueue), t !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            yo(t, e);
          } catch (s) {
            bt(l, l.return, s);
          }
        }
        break;
      case 27:
        e === null && a & 4 && _d(l);
      case 26:
      case 5:
        cl(t, l), e === null && a & 4 && xd(l), a & 512 && Hn(l, l.return);
        break;
      case 12:
        cl(t, l);
        break;
      case 31:
        cl(t, l), a & 4 && Hd(t, l);
        break;
      case 13:
        cl(t, l),
          a & 4 && jd(t, l),
          a & 64 &&
            ((t = l.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((l = ap.bind(null, l)), Ap(t, l))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || ul), !a)) {
          (e = (e !== null && e.memoizedState !== null) || Yt), (u = ul);
          var i = Yt;
          (ul = a),
            (Yt = e) && !i ? rl(t, l, (l.subtreeFlags & 8772) !== 0) : cl(t, l),
            (ul = u),
            (Yt = i);
        }
        break;
      case 30:
        break;
      default:
        cl(t, l);
    }
  }
  function Md(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), Md(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && rc(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var _t = null,
    ce = !1;
  function il(t, e, l) {
    for (l = l.child; l !== null; ) Ud(t, e, l), (l = l.sibling);
  }
  function Ud(t, e, l) {
    if (pe && typeof pe.onCommitFiberUnmount == "function")
      try {
        pe.onCommitFiberUnmount(an, l);
      } catch {}
    switch (l.tag) {
      case 26:
        Yt || Qe(l, e),
          il(t, e, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        Yt || Qe(l, e);
        var a = _t,
          u = ce;
        jl(l.type) && ((_t = l.stateNode), (ce = !1)),
          il(t, e, l),
          Qn(l.stateNode),
          (_t = a),
          (ce = u);
        break;
      case 5:
        Yt || Qe(l, e);
      case 6:
        if (
          ((a = _t),
          (u = ce),
          (_t = null),
          il(t, e, l),
          (_t = a),
          (ce = u),
          _t !== null)
        )
          if (ce)
            try {
              (_t.nodeType === 9
                ? _t.body
                : _t.nodeName === "HTML"
                ? _t.ownerDocument.body
                : _t
              ).removeChild(l.stateNode);
            } catch (i) {
              bt(l, e, i);
            }
          else
            try {
              _t.removeChild(l.stateNode);
            } catch (i) {
              bt(l, e, i);
            }
        break;
      case 18:
        _t !== null &&
          (ce
            ? ((t = _t),
              Rh(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                l.stateNode
              ),
              Fa(t))
            : Rh(_t, l.stateNode));
        break;
      case 4:
        (a = _t),
          (u = ce),
          (_t = l.stateNode.containerInfo),
          (ce = !0),
          il(t, e, l),
          (_t = a),
          (ce = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Cl(2, l, e), Yt || Cl(4, l, e), il(t, e, l);
        break;
      case 1:
        Yt ||
          (Qe(l, e),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && zd(l, e, a)),
          il(t, e, l);
        break;
      case 21:
        il(t, e, l);
        break;
      case 22:
        (Yt = (a = Yt) || l.memoizedState !== null), il(t, e, l), (Yt = a);
        break;
      default:
        il(t, e, l);
    }
  }
  function Hd(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        Fa(t);
      } catch (l) {
        bt(e, e.return, l);
      }
    }
  }
  function jd(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Fa(t);
      } catch (l) {
        bt(e, e.return, l);
      }
  }
  function F0(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Nd()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Nd()),
          e
        );
      default:
        throw Error(r(435, t.tag));
    }
  }
  function ei(t, e) {
    var l = F0(t);
    e.forEach(function (a) {
      if (!l.has(a)) {
        l.add(a);
        var u = np.bind(null, t, a);
        a.then(u, u);
      }
    });
  }
  function re(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var u = l[a],
          i = t,
          s = e,
          m = s;
        t: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (jl(m.type)) {
                (_t = m.stateNode), (ce = !1);
                break t;
              }
              break;
            case 5:
              (_t = m.stateNode), (ce = !1);
              break t;
            case 3:
            case 4:
              (_t = m.stateNode.containerInfo), (ce = !0);
              break t;
          }
          m = m.return;
        }
        if (_t === null) throw Error(r(160));
        Ud(i, s, u),
          (_t = null),
          (ce = !1),
          (i = u.alternate),
          i !== null && (i.return = null),
          (u.return = null);
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) wd(e, t), (e = e.sibling);
  }
  var we = null;
  function wd(t, e) {
    var l = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        re(e, t),
          fe(t),
          a & 4 && (Cl(3, t, t.return), Un(3, t), Cl(5, t, t.return));
        break;
      case 1:
        re(e, t),
          fe(t),
          a & 512 && (Yt || l === null || Qe(l, l.return)),
          a & 64 &&
            ul &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? a : l.concat(a)))));
        break;
      case 26:
        var u = we;
        if (
          (re(e, t),
          fe(t),
          a & 512 && (Yt || l === null || Qe(l, l.return)),
          a & 4)
        ) {
          var i = l !== null ? l.memoizedState : null;
          if (((a = t.memoizedState), l === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  (a = t.type),
                    (l = t.memoizedProps),
                    (u = u.ownerDocument || u);
                  e: switch (a) {
                    case "title":
                      (i = u.getElementsByTagName("title")[0]),
                        (!i ||
                          i[cn] ||
                          i[Jt] ||
                          i.namespaceURI === "http://www.w3.org/2000/svg" ||
                          i.hasAttribute("itemprop")) &&
                          ((i = u.createElement(a)),
                          u.head.insertBefore(
                            i,
                            u.querySelector("head > title")
                          )),
                        Wt(i, a, l),
                        (i[Jt] = t),
                        Vt(i),
                        (a = i);
                      break t;
                    case "link":
                      var s = wh("link", "href", u).get(a + (l.href || ""));
                      if (s) {
                        for (var m = 0; m < s.length; m++)
                          if (
                            ((i = s[m]),
                            i.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              i.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              i.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              i.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            s.splice(m, 1);
                            break e;
                          }
                      }
                      (i = u.createElement(a)),
                        Wt(i, a, l),
                        u.head.appendChild(i);
                      break;
                    case "meta":
                      if (
                        (s = wh("meta", "content", u).get(
                          a + (l.content || "")
                        ))
                      ) {
                        for (m = 0; m < s.length; m++)
                          if (
                            ((i = s[m]),
                            i.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              i.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              i.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              i.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              i.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            s.splice(m, 1);
                            break e;
                          }
                      }
                      (i = u.createElement(a)),
                        Wt(i, a, l),
                        u.head.appendChild(i);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  (i[Jt] = t), Vt(i), (a = i);
                }
                t.stateNode = a;
              } else Bh(u, t.type, t.stateNode);
            else t.stateNode = jh(u, a, t.memoizedProps);
          else
            i !== a
              ? (i === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : i.count--,
                a === null
                  ? Bh(u, t.type, t.stateNode)
                  : jh(u, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                _r(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        re(e, t),
          fe(t),
          a & 512 && (Yt || l === null || Qe(l, l.return)),
          l !== null && a & 4 && _r(t, t.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (
          (re(e, t),
          fe(t),
          a & 512 && (Yt || l === null || Qe(l, l.return)),
          t.flags & 32)
        ) {
          u = t.stateNode;
          try {
            ga(u, "");
          } catch (J) {
            bt(t, t.return, J);
          }
        }
        a & 4 &&
          t.stateNode != null &&
          ((u = t.memoizedProps), _r(t, u, l !== null ? l.memoizedProps : u)),
          a & 1024 && (Mr = !0);
        break;
      case 6:
        if ((re(e, t), fe(t), a & 4)) {
          if (t.stateNode === null) throw Error(r(162));
          (a = t.memoizedProps), (l = t.stateNode);
          try {
            l.nodeValue = a;
          } catch (J) {
            bt(t, t.return, J);
          }
        }
        break;
      case 3:
        if (
          ((vi = null),
          (u = we),
          (we = yi(e.containerInfo)),
          re(e, t),
          (we = u),
          fe(t),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Fa(e.containerInfo);
          } catch (J) {
            bt(t, t.return, J);
          }
        Mr && ((Mr = !1), Bd(t));
        break;
      case 4:
        (a = we),
          (we = yi(t.stateNode.containerInfo)),
          re(e, t),
          fe(t),
          (we = a);
        break;
      case 12:
        re(e, t), fe(t);
        break;
      case 31:
        re(e, t),
          fe(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), ei(t, a)));
        break;
      case 13:
        re(e, t),
          fe(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (ai = ye()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), ei(t, a)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var b = l !== null && l.memoizedState !== null,
          z = ul,
          M = Yt;
        if (
          ((ul = z || u),
          (Yt = M || b),
          re(e, t),
          (Yt = M),
          (ul = z),
          fe(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = u ? e._visibility & -2 : e._visibility | 1,
              u && (l === null || b || ul || Yt || ca(t)),
              l = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                b = l = e;
                try {
                  if (((i = b.stateNode), u))
                    (s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none");
                  else {
                    m = b.stateNode;
                    var B = b.memoizedProps.style,
                      x =
                        B != null && B.hasOwnProperty("display")
                          ? B.display
                          : null;
                    m.style.display =
                      x == null || typeof x == "boolean" ? "" : ("" + x).trim();
                  }
                } catch (J) {
                  bt(b, b.return, J);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                b = e;
                try {
                  b.stateNode.nodeValue = u ? "" : b.memoizedProps;
                } catch (J) {
                  bt(b, b.return, J);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                b = e;
                try {
                  var N = b.stateNode;
                  u ? zh(N, !0) : zh(b.stateNode, !1);
                } catch (J) {
                  bt(b, b.return, J);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), (e = e.return);
            }
            l === e && (l = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), ei(t, l))));
        break;
      case 19:
        re(e, t),
          fe(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), ei(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        re(e, t), fe(t);
    }
  }
  function fe(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (Cd(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(r(160));
        switch (l.tag) {
          case 27:
            var u = l.stateNode,
              i = Nr(t);
            ti(t, i, u);
            break;
          case 5:
            var s = l.stateNode;
            l.flags & 32 && (ga(s, ""), (l.flags &= -33));
            var m = Nr(t);
            ti(t, m, s);
            break;
          case 3:
          case 4:
            var b = l.stateNode.containerInfo,
              z = Nr(t);
            Dr(t, z, b);
            break;
          default:
            throw Error(r(161));
        }
      } catch (M) {
        bt(t, t.return, M);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Bd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Bd(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function cl(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) Dd(t, e.alternate, e), (e = e.sibling);
  }
  function ca(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Cl(4, e, e.return), ca(e);
          break;
        case 1:
          Qe(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && zd(e, e.return, l),
            ca(e);
          break;
        case 27:
          Qn(e.stateNode);
        case 26:
        case 5:
          Qe(e, e.return), ca(e);
          break;
        case 22:
          e.memoizedState === null && ca(e);
          break;
        case 30:
          ca(e);
          break;
        default:
          ca(e);
      }
      t = t.sibling;
    }
  }
  function rl(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        u = t,
        i = e,
        s = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          rl(u, i, l), Un(4, i);
          break;
        case 1:
          if (
            (rl(u, i, l),
            (a = i),
            (u = a.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (z) {
              bt(a, a.return, z);
            }
          if (((a = i), (u = a.updateQueue), u !== null)) {
            var m = a.stateNode;
            try {
              var b = u.shared.hiddenCallbacks;
              if (b !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < b.length; u++)
                  mo(b[u], m);
            } catch (z) {
              bt(a, a.return, z);
            }
          }
          l && s & 64 && Rd(i), Hn(i, i.return);
          break;
        case 27:
          _d(i);
        case 26:
        case 5:
          rl(u, i, l), l && a === null && s & 4 && xd(i), Hn(i, i.return);
          break;
        case 12:
          rl(u, i, l);
          break;
        case 31:
          rl(u, i, l), l && s & 4 && Hd(u, i);
          break;
        case 13:
          rl(u, i, l), l && s & 4 && jd(u, i);
          break;
        case 22:
          i.memoizedState === null && rl(u, i, l), Hn(i, i.return);
          break;
        case 30:
          break;
        default:
          rl(u, i, l);
      }
      e = e.sibling;
    }
  }
  function Ur(t, e) {
    var l = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && Sn(l));
  }
  function Hr(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Sn(t));
  }
  function Be(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Ld(t, e, l, a), (e = e.sibling);
  }
  function Ld(t, e, l, a) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Be(t, e, l, a), u & 2048 && Un(9, e);
        break;
      case 1:
        Be(t, e, l, a);
        break;
      case 3:
        Be(t, e, l, a),
          u & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Sn(t)));
        break;
      case 12:
        if (u & 2048) {
          Be(t, e, l, a), (t = e.stateNode);
          try {
            var i = e.memoizedProps,
              s = i.id,
              m = i.onPostCommit;
            typeof m == "function" &&
              m(
                s,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (b) {
            bt(e, e.return, b);
          }
        } else Be(t, e, l, a);
        break;
      case 31:
        Be(t, e, l, a);
        break;
      case 13:
        Be(t, e, l, a);
        break;
      case 23:
        break;
      case 22:
        (i = e.stateNode),
          (s = e.alternate),
          e.memoizedState !== null
            ? i._visibility & 2
              ? Be(t, e, l, a)
              : jn(t, e)
            : i._visibility & 2
            ? Be(t, e, l, a)
            : ((i._visibility |= 2),
              La(t, e, l, a, (e.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && Ur(s, e);
        break;
      case 24:
        Be(t, e, l, a), u & 2048 && Hr(e.alternate, e);
        break;
      default:
        Be(t, e, l, a);
    }
  }
  function La(t, e, l, a, u) {
    for (
      u = u && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;

    ) {
      var i = t,
        s = e,
        m = l,
        b = a,
        z = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          La(i, s, m, b, u), Un(8, s);
          break;
        case 23:
          break;
        case 22:
          var M = s.stateNode;
          s.memoizedState !== null
            ? M._visibility & 2
              ? La(i, s, m, b, u)
              : jn(i, s)
            : ((M._visibility |= 2), La(i, s, m, b, u)),
            u && z & 2048 && Ur(s.alternate, s);
          break;
        case 24:
          La(i, s, m, b, u), u && z & 2048 && Hr(s.alternate, s);
          break;
        default:
          La(i, s, m, b, u);
      }
      e = e.sibling;
    }
  }
  function jn(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          a = e,
          u = a.flags;
        switch (a.tag) {
          case 22:
            jn(l, a), u & 2048 && Ur(a.alternate, a);
            break;
          case 24:
            jn(l, a), u & 2048 && Hr(a.alternate, a);
            break;
          default:
            jn(l, a);
        }
        e = e.sibling;
      }
  }
  var wn = 8192;
  function qa(t, e, l) {
    if (t.subtreeFlags & wn)
      for (t = t.child; t !== null; ) qd(t, e, l), (t = t.sibling);
  }
  function qd(t, e, l) {
    switch (t.tag) {
      case 26:
        qa(t, e, l),
          t.flags & wn &&
            t.memoizedState !== null &&
            jp(l, we, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        qa(t, e, l);
        break;
      case 3:
      case 4:
        var a = we;
        (we = yi(t.stateNode.containerInfo)), qa(t, e, l), (we = a);
        break;
      case 22:
        t.memoizedState === null &&
          ((a = t.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = wn), (wn = 16777216), qa(t, e, l), (wn = a))
            : qa(t, e, l));
        break;
      default:
        qa(t, e, l);
    }
  }
  function Yd(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function Bn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          (Zt = a), Xd(a, t);
        }
      Yd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Gd(t), (t = t.sibling);
  }
  function Gd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Bn(t), t.flags & 2048 && Cl(9, t, t.return);
        break;
      case 3:
        Bn(t);
        break;
      case 12:
        Bn(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), li(t))
          : Bn(t);
        break;
      default:
        Bn(t);
    }
  }
  function li(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          (Zt = a), Xd(a, t);
        }
      Yd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          Cl(8, e, e.return), li(e);
          break;
        case 22:
          (l = e.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), li(e));
          break;
        default:
          li(e);
      }
      t = t.sibling;
    }
  }
  function Xd(t, e) {
    for (; Zt !== null; ) {
      var l = Zt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Cl(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Sn(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) (a.return = l), (Zt = a);
      else
        t: for (l = t; Zt !== null; ) {
          a = Zt;
          var u = a.sibling,
            i = a.return;
          if ((Md(a), a === l)) {
            Zt = null;
            break t;
          }
          if (u !== null) {
            (u.return = i), (Zt = u);
            break t;
          }
          Zt = i;
        }
    }
  }
  var k0 = {
      getCacheForType: function (t) {
        var e = Ft(Bt),
          l = e.data.get(t);
        return l === void 0 && ((l = t()), e.data.set(t, l)), l;
      },
      cacheSignal: function () {
        return Ft(Bt).controller.signal;
      },
    },
    W0 = typeof WeakMap == "function" ? WeakMap : Map,
    yt = 0,
    Rt = null,
    it = null,
    rt = 0,
    gt = 0,
    Te = null,
    _l = !1,
    Ya = !1,
    jr = !1,
    fl = 0,
    Ut = 0,
    Nl = 0,
    ra = 0,
    wr = 0,
    Ae = 0,
    Ga = 0,
    Ln = null,
    se = null,
    Br = !1,
    ai = 0,
    Qd = 0,
    ni = 1 / 0,
    ui = null,
    Dl = null,
    Xt = 0,
    Ml = null,
    Xa = null,
    sl = 0,
    Lr = 0,
    qr = null,
    Vd = null,
    qn = 0,
    Yr = null;
  function Oe() {
    return (yt & 2) !== 0 && rt !== 0 ? rt & -rt : D.T !== null ? Kr() : us();
  }
  function Zd() {
    if (Ae === 0)
      if ((rt & 536870912) === 0 || st) {
        var t = hu;
        (hu <<= 1), (hu & 3932160) === 0 && (hu = 262144), (Ae = t);
      } else Ae = 536870912;
    return (t = Se.current), t !== null && (t.flags |= 32), Ae;
  }
  function oe(t, e, l) {
    ((t === Rt && (gt === 2 || gt === 9)) || t.cancelPendingCommit !== null) &&
      (Qa(t, 0), Ul(t, rt, Ae, !1)),
      un(t, l),
      ((yt & 2) === 0 || t !== Rt) &&
        (t === Rt &&
          ((yt & 2) === 0 && (ra |= l), Ut === 4 && Ul(t, rt, Ae, !1)),
        Ve(t));
  }
  function Kd(t, e, l) {
    if ((yt & 6) !== 0) throw Error(r(327));
    var a = (!l && (e & 127) === 0 && (e & t.expiredLanes) === 0) || nn(t, e),
      u = a ? tp(t, e) : Xr(t, e, !0),
      i = a;
    do {
      if (u === 0) {
        Ya && !a && Ul(t, e, 0, !1);
        break;
      } else {
        if (((l = t.current.alternate), i && !P0(l))) {
          (u = Xr(t, e, !1)), (i = !1);
          continue;
        }
        if (u === 2) {
          if (((i = e), t.errorRecoveryDisabledLanes & i)) var s = 0;
          else
            (s = t.pendingLanes & -536870913),
              (s = s !== 0 ? s : s & 536870912 ? 536870912 : 0);
          if (s !== 0) {
            e = s;
            t: {
              var m = t;
              u = Ln;
              var b = m.current.memoizedState.isDehydrated;
              if ((b && (Qa(m, s).flags |= 256), (s = Xr(m, s, !1)), s !== 2)) {
                if (jr && !b) {
                  (m.errorRecoveryDisabledLanes |= i), (ra |= i), (u = 4);
                  break t;
                }
                (i = se),
                  (se = u),
                  i !== null && (se === null ? (se = i) : se.push.apply(se, i));
              }
              u = s;
            }
            if (((i = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          Qa(t, 0), Ul(t, e, 0, !0);
          break;
        }
        t: {
          switch (((a = t), (i = u), i)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Ul(a, e, Ae, !_l);
              break t;
            case 2:
              se = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && ((u = ai + 300 - ye()), 10 < u)) {
            if ((Ul(a, e, Ae, !_l), yu(a, 0, !0) !== 0)) break t;
            (sl = e),
              (a.timeoutHandle = Ah(
                Jd.bind(
                  null,
                  a,
                  l,
                  se,
                  ui,
                  Br,
                  e,
                  Ae,
                  ra,
                  Ga,
                  _l,
                  i,
                  "Throttled",
                  -0,
                  0
                ),
                u
              ));
            break t;
          }
          Jd(a, l, se, ui, Br, e, Ae, ra, Ga, _l, i, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Ve(t);
  }
  function Jd(t, e, l, a, u, i, s, m, b, z, M, B, x, N) {
    if (
      ((t.timeoutHandle = -1),
      (B = e.subtreeFlags),
      B & 8192 || (B & 16785408) === 16785408)
    ) {
      (B = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Fe,
      }),
        qd(e, i, B);
      var J =
        (i & 62914560) === i ? ai - ye() : (i & 4194048) === i ? Qd - ye() : 0;
      if (((J = wp(B, J)), J !== null)) {
        (sl = i),
          (t.cancelPendingCommit = J(
            eh.bind(null, t, e, i, l, a, u, s, m, b, M, B, null, x, N)
          )),
          Ul(t, i, s, !z);
        return;
      }
    }
    eh(t, e, i, l, a, u, s, m, b);
  }
  function P0(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var u = l[a],
            i = u.getSnapshot;
          u = u.value;
          try {
            if (!ge(i(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null))
        (l.return = e), (e = l);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function Ul(t, e, l, a) {
    (e &= ~wr),
      (e &= ~ra),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes);
    for (var u = e; 0 < u; ) {
      var i = 31 - ve(u),
        s = 1 << i;
      (a[i] = -1), (u &= ~s);
    }
    l !== 0 && ls(t, l, e);
  }
  function ii() {
    return (yt & 6) === 0 ? (Yn(0), !1) : !0;
  }
  function Gr() {
    if (it !== null) {
      if (gt === 0) var t = it.return;
      else (t = it), (Ie = Il = null), ar(t), (Ua = null), (Tn = 0), (t = it);
      for (; t !== null; ) Od(t.alternate, t), (t = t.return);
      it = null;
    }
  }
  function Qa(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && ((t.timeoutHandle = -1), gp(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      (sl = 0),
      Gr(),
      (Rt = t),
      (it = l = We(t.current, null)),
      (rt = e),
      (gt = 0),
      (Te = null),
      (_l = !1),
      (Ya = nn(t, e)),
      (jr = !1),
      (Ga = Ae = wr = ra = Nl = Ut = 0),
      (se = Ln = null),
      (Br = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var u = 31 - ve(a),
          i = 1 << u;
        (e |= t[u]), (a &= ~i);
      }
    return (fl = e), xu(), l;
  }
  function $d(t, e) {
    (lt = null),
      (D.H = Nn),
      e === Ma || e === ju
        ? ((e = fo()), (gt = 3))
        : e === Zc
        ? ((e = fo()), (gt = 4))
        : (gt =
            e === br
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (Te = e),
      it === null && ((Ut = 1), Fu(t, Ce(e, t.current)));
  }
  function Fd() {
    var t = Se.current;
    return t === null
      ? !0
      : (rt & 4194048) === rt
      ? Me === null
      : (rt & 62914560) === rt || (rt & 536870912) !== 0
      ? t === Me
      : !1;
  }
  function kd() {
    var t = D.H;
    return (D.H = Nn), t === null ? Nn : t;
  }
  function Wd() {
    var t = D.A;
    return (D.A = k0), t;
  }
  function ci() {
    (Ut = 4),
      _l || ((rt & 4194048) !== rt && Se.current !== null) || (Ya = !0),
      ((Nl & 134217727) === 0 && (ra & 134217727) === 0) ||
        Rt === null ||
        Ul(Rt, rt, Ae, !1);
  }
  function Xr(t, e, l) {
    var a = yt;
    yt |= 2;
    var u = kd(),
      i = Wd();
    (Rt !== t || rt !== e) && ((ui = null), Qa(t, e)), (e = !1);
    var s = Ut;
    t: do
      try {
        if (gt !== 0 && it !== null) {
          var m = it,
            b = Te;
          switch (gt) {
            case 8:
              Gr(), (s = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Se.current === null && (e = !0);
              var z = gt;
              if (((gt = 0), (Te = null), Va(t, m, b, z), l && Ya)) {
                s = 0;
                break t;
              }
              break;
            default:
              (z = gt), (gt = 0), (Te = null), Va(t, m, b, z);
          }
        }
        I0(), (s = Ut);
        break;
      } catch (M) {
        $d(t, M);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Ie = Il = null),
      (yt = a),
      (D.H = u),
      (D.A = i),
      it === null && ((Rt = null), (rt = 0), xu()),
      s
    );
  }
  function I0() {
    for (; it !== null; ) Pd(it);
  }
  function tp(t, e) {
    var l = yt;
    yt |= 2;
    var a = kd(),
      u = Wd();
    Rt !== t || rt !== e
      ? ((ui = null), (ni = ye() + 500), Qa(t, e))
      : (Ya = nn(t, e));
    t: do
      try {
        if (gt !== 0 && it !== null) {
          e = it;
          var i = Te;
          e: switch (gt) {
            case 1:
              (gt = 0), (Te = null), Va(t, e, i, 1);
              break;
            case 2:
            case 9:
              if (co(i)) {
                (gt = 0), (Te = null), Id(e);
                break;
              }
              (e = function () {
                (gt !== 2 && gt !== 9) || Rt !== t || (gt = 7), Ve(t);
              }),
                i.then(e, e);
              break t;
            case 3:
              gt = 7;
              break t;
            case 4:
              gt = 5;
              break t;
            case 7:
              co(i)
                ? ((gt = 0), (Te = null), Id(e))
                : ((gt = 0), (Te = null), Va(t, e, i, 7));
              break;
            case 5:
              var s = null;
              switch (it.tag) {
                case 26:
                  s = it.memoizedState;
                case 5:
                case 27:
                  var m = it;
                  if (s ? Lh(s) : m.stateNode.complete) {
                    (gt = 0), (Te = null);
                    var b = m.sibling;
                    if (b !== null) it = b;
                    else {
                      var z = m.return;
                      z !== null ? ((it = z), ri(z)) : (it = null);
                    }
                    break e;
                  }
              }
              (gt = 0), (Te = null), Va(t, e, i, 5);
              break;
            case 6:
              (gt = 0), (Te = null), Va(t, e, i, 6);
              break;
            case 8:
              Gr(), (Ut = 6);
              break t;
            default:
              throw Error(r(462));
          }
        }
        ep();
        break;
      } catch (M) {
        $d(t, M);
      }
    while (!0);
    return (
      (Ie = Il = null),
      (D.H = a),
      (D.A = u),
      (yt = l),
      it !== null ? 0 : ((Rt = null), (rt = 0), xu(), Ut)
    );
  }
  function ep() {
    for (; it !== null && !Oy(); ) Pd(it);
  }
  function Pd(t) {
    var e = Td(t.alternate, t, fl);
    (t.memoizedProps = t.pendingProps), e === null ? ri(t) : (it = e);
  }
  function Id(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = pd(l, e, e.pendingProps, e.type, void 0, rt);
        break;
      case 11:
        e = pd(l, e, e.pendingProps, e.type.render, e.ref, rt);
        break;
      case 5:
        ar(e);
      default:
        Od(l, e), (e = it = ks(e, fl)), (e = Td(l, e, fl));
    }
    (t.memoizedProps = t.pendingProps), e === null ? ri(t) : (it = e);
  }
  function Va(t, e, l, a) {
    (Ie = Il = null), ar(e), (Ua = null), (Tn = 0);
    var u = e.return;
    try {
      if (Q0(t, u, e, l, rt)) {
        (Ut = 1), Fu(t, Ce(l, t.current)), (it = null);
        return;
      }
    } catch (i) {
      if (u !== null) throw ((it = u), i);
      (Ut = 1), Fu(t, Ce(l, t.current)), (it = null);
      return;
    }
    e.flags & 32768
      ? (st || a === 1
          ? (t = !0)
          : Ya || (rt & 536870912) !== 0
          ? (t = !1)
          : ((_l = t = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = Se.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        th(e, t))
      : ri(e);
  }
  function ri(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        th(e, _l);
        return;
      }
      t = e.return;
      var l = K0(e.alternate, e, fl);
      if (l !== null) {
        it = l;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        it = e;
        return;
      }
      it = e = t;
    } while (e !== null);
    Ut === 0 && (Ut = 5);
  }
  function th(t, e) {
    do {
      var l = J0(t.alternate, t);
      if (l !== null) {
        (l.flags &= 32767), (it = l);
        return;
      }
      if (
        ((l = t.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        it = t;
        return;
      }
      it = t = l;
    } while (t !== null);
    (Ut = 6), (it = null);
  }
  function eh(t, e, l, a, u, i, s, m, b) {
    t.cancelPendingCommit = null;
    do fi();
    while (Xt !== 0);
    if ((yt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (
        ((i = e.lanes | e.childLanes),
        (i |= Nc),
        Hy(t, l, i, s, m, b),
        t === Rt && ((it = Rt = null), (rt = 0)),
        (Xa = e),
        (Ml = t),
        (sl = l),
        (Lr = i),
        (qr = u),
        (Vd = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            up(ou, function () {
              return ih(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = D.T), (D.T = null), (u = Q.p), (Q.p = 2), (s = yt), (yt |= 4);
        try {
          $0(t, e, l);
        } finally {
          (yt = s), (Q.p = u), (D.T = a);
        }
      }
      (Xt = 1), lh(), ah(), nh();
    }
  }
  function lh() {
    if (Xt === 1) {
      Xt = 0;
      var t = Ml,
        e = Xa,
        l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        (l = D.T), (D.T = null);
        var a = Q.p;
        Q.p = 2;
        var u = yt;
        yt |= 4;
        try {
          wd(e, t);
          var i = tf,
            s = Gs(t.containerInfo),
            m = i.focusedElem,
            b = i.selectionRange;
          if (
            s !== m &&
            m &&
            m.ownerDocument &&
            Ys(m.ownerDocument.documentElement, m)
          ) {
            if (b !== null && Rc(m)) {
              var z = b.start,
                M = b.end;
              if ((M === void 0 && (M = z), "selectionStart" in m))
                (m.selectionStart = z),
                  (m.selectionEnd = Math.min(M, m.value.length));
              else {
                var B = m.ownerDocument || document,
                  x = (B && B.defaultView) || window;
                if (x.getSelection) {
                  var N = x.getSelection(),
                    J = m.textContent.length,
                    P = Math.min(b.start, J),
                    Tt = b.end === void 0 ? P : Math.min(b.end, J);
                  !N.extend && P > Tt && ((s = Tt), (Tt = P), (P = s));
                  var A = qs(m, P),
                    E = qs(m, Tt);
                  if (
                    A &&
                    E &&
                    (N.rangeCount !== 1 ||
                      N.anchorNode !== A.node ||
                      N.anchorOffset !== A.offset ||
                      N.focusNode !== E.node ||
                      N.focusOffset !== E.offset)
                  ) {
                    var R = B.createRange();
                    R.setStart(A.node, A.offset),
                      N.removeAllRanges(),
                      P > Tt
                        ? (N.addRange(R), N.extend(E.node, E.offset))
                        : (R.setEnd(E.node, E.offset), N.addRange(R));
                  }
                }
              }
            }
            for (B = [], N = m; (N = N.parentNode); )
              N.nodeType === 1 &&
                B.push({ element: N, left: N.scrollLeft, top: N.scrollTop });
            for (
              typeof m.focus == "function" && m.focus(), m = 0;
              m < B.length;
              m++
            ) {
              var j = B[m];
              (j.element.scrollLeft = j.left), (j.element.scrollTop = j.top);
            }
          }
          (Ei = !!Ir), (tf = Ir = null);
        } finally {
          (yt = u), (Q.p = a), (D.T = l);
        }
      }
      (t.current = e), (Xt = 2);
    }
  }
  function ah() {
    if (Xt === 2) {
      Xt = 0;
      var t = Ml,
        e = Xa,
        l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        (l = D.T), (D.T = null);
        var a = Q.p;
        Q.p = 2;
        var u = yt;
        yt |= 4;
        try {
          Dd(t, e.alternate, e);
        } finally {
          (yt = u), (Q.p = a), (D.T = l);
        }
      }
      Xt = 3;
    }
  }
  function nh() {
    if (Xt === 4 || Xt === 3) {
      (Xt = 0), Ry();
      var t = Ml,
        e = Xa,
        l = sl,
        a = Vd;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Xt = 5)
        : ((Xt = 0), (Xa = Ml = null), uh(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (
        (u === 0 && (Dl = null),
        ic(l),
        (e = e.stateNode),
        pe && typeof pe.onCommitFiberRoot == "function")
      )
        try {
          pe.onCommitFiberRoot(an, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (e = D.T), (u = Q.p), (Q.p = 2), (D.T = null);
        try {
          for (var i = t.onRecoverableError, s = 0; s < a.length; s++) {
            var m = a[s];
            i(m.value, { componentStack: m.stack });
          }
        } finally {
          (D.T = e), (Q.p = u);
        }
      }
      (sl & 3) !== 0 && fi(),
        Ve(t),
        (u = t.pendingLanes),
        (l & 261930) !== 0 && (u & 42) !== 0
          ? t === Yr
            ? qn++
            : ((qn = 0), (Yr = t))
          : (qn = 0),
        Yn(0);
    }
  }
  function uh(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Sn(e)));
  }
  function fi() {
    return lh(), ah(), nh(), ih();
  }
  function ih() {
    if (Xt !== 5) return !1;
    var t = Ml,
      e = Lr;
    Lr = 0;
    var l = ic(sl),
      a = D.T,
      u = Q.p;
    try {
      (Q.p = 32 > l ? 32 : l), (D.T = null), (l = qr), (qr = null);
      var i = Ml,
        s = sl;
      if (((Xt = 0), (Xa = Ml = null), (sl = 0), (yt & 6) !== 0))
        throw Error(r(331));
      var m = yt;
      if (
        ((yt |= 4),
        Gd(i.current),
        Ld(i, i.current, s, l),
        (yt = m),
        Yn(0, !1),
        pe && typeof pe.onPostCommitFiberRoot == "function")
      )
        try {
          pe.onPostCommitFiberRoot(an, i);
        } catch {}
      return !0;
    } finally {
      (Q.p = u), (D.T = a), uh(t, e);
    }
  }
  function ch(t, e, l) {
    (e = Ce(l, e)),
      (e = gr(t.stateNode, e, 2)),
      (t = Rl(t, e, 2)),
      t !== null && (un(t, 2), Ve(t));
  }
  function bt(t, e, l) {
    if (t.tag === 3) ch(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          ch(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Dl === null || !Dl.has(a)))
          ) {
            (t = Ce(l, t)),
              (l = rd(2)),
              (a = Rl(e, l, 2)),
              a !== null && (fd(l, a, e, t), un(a, 2), Ve(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function Qr(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new W0();
      var u = new Set();
      a.set(e, u);
    } else (u = a.get(e)), u === void 0 && ((u = new Set()), a.set(e, u));
    u.has(l) ||
      ((jr = !0), u.add(l), (t = lp.bind(null, t, e, l)), e.then(t, t));
  }
  function lp(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      Rt === t &&
        (rt & l) === l &&
        (Ut === 4 || (Ut === 3 && (rt & 62914560) === rt && 300 > ye() - ai)
          ? (yt & 2) === 0 && Qa(t, 0)
          : (wr |= l),
        Ga === rt && (Ga = 0)),
      Ve(t);
  }
  function rh(t, e) {
    e === 0 && (e = es()), (t = kl(t, e)), t !== null && (un(t, e), Ve(t));
  }
  function ap(t) {
    var e = t.memoizedState,
      l = 0;
    e !== null && (l = e.retryLane), rh(t, l);
  }
  function np(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode,
          u = t.memoizedState;
        u !== null && (l = u.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(e), rh(t, l);
  }
  function up(t, e) {
    return lc(t, e);
  }
  var si = null,
    Za = null,
    Vr = !1,
    oi = !1,
    Zr = !1,
    Hl = 0;
  function Ve(t) {
    t !== Za &&
      t.next === null &&
      (Za === null ? (si = Za = t) : (Za = Za.next = t)),
      (oi = !0),
      Vr || ((Vr = !0), cp());
  }
  function Yn(t, e) {
    if (!Zr && oi) {
      Zr = !0;
      do
        for (var l = !1, a = si; a !== null; ) {
          if (t !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var i = 0;
            else {
              var s = a.suspendedLanes,
                m = a.pingedLanes;
              (i = (1 << (31 - ve(42 | t) + 1)) - 1),
                (i &= u & ~(s & ~m)),
                (i = i & 201326741 ? (i & 201326741) | 1 : i ? i | 2 : 0);
            }
            i !== 0 && ((l = !0), dh(a, i));
          } else
            (i = rt),
              (i = yu(
                a,
                a === Rt ? i : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (i & 3) === 0 || nn(a, i) || ((l = !0), dh(a, i));
          a = a.next;
        }
      while (l);
      Zr = !1;
    }
  }
  function ip() {
    fh();
  }
  function fh() {
    oi = Vr = !1;
    var t = 0;
    Hl !== 0 && vp() && (t = Hl);
    for (var e = ye(), l = null, a = si; a !== null; ) {
      var u = a.next,
        i = sh(a, e);
      i === 0
        ? ((a.next = null),
          l === null ? (si = u) : (l.next = u),
          u === null && (Za = l))
        : ((l = a), (t !== 0 || (i & 3) !== 0) && (oi = !0)),
        (a = u);
    }
    (Xt !== 0 && Xt !== 5) || Yn(t), Hl !== 0 && (Hl = 0);
  }
  function sh(t, e) {
    for (
      var l = t.suspendedLanes,
        a = t.pingedLanes,
        u = t.expirationTimes,
        i = t.pendingLanes & -62914561;
      0 < i;

    ) {
      var s = 31 - ve(i),
        m = 1 << s,
        b = u[s];
      b === -1
        ? ((m & l) === 0 || (m & a) !== 0) && (u[s] = Uy(m, e))
        : b <= e && (t.expiredLanes |= m),
        (i &= ~m);
    }
    if (
      ((e = Rt),
      (l = rt),
      (l = yu(
        t,
        t === e ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (a = t.callbackNode),
      l === 0 ||
        (t === e && (gt === 2 || gt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && ac(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((l & 3) === 0 || nn(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((a !== null && ac(a), ic(l))) {
        case 2:
        case 8:
          l = If;
          break;
        case 32:
          l = ou;
          break;
        case 268435456:
          l = ts;
          break;
        default:
          l = ou;
      }
      return (
        (a = oh.bind(null, t)),
        (l = lc(l, a)),
        (t.callbackPriority = e),
        (t.callbackNode = l),
        e
      );
    }
    return (
      a !== null && a !== null && ac(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function oh(t, e) {
    if (Xt !== 0 && Xt !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var l = t.callbackNode;
    if (fi() && t.callbackNode !== l) return null;
    var a = rt;
    return (
      (a = yu(
        t,
        t === Rt ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (Kd(t, a, e),
          sh(t, ye()),
          t.callbackNode != null && t.callbackNode === l
            ? oh.bind(null, t)
            : null)
    );
  }
  function dh(t, e) {
    if (fi()) return null;
    Kd(t, e, !0);
  }
  function cp() {
    bp(function () {
      (yt & 6) !== 0 ? lc(Pf, ip) : fh();
    });
  }
  function Kr() {
    if (Hl === 0) {
      var t = Na;
      t === 0 && ((t = du), (du <<= 1), (du & 261888) === 0 && (du = 256)),
        (Hl = t);
    }
    return Hl;
  }
  function hh(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : bu("" + t);
  }
  function mh(t, e) {
    var l = e.ownerDocument.createElement("input");
    return (
      (l.name = e.name),
      (l.value = e.value),
      t.id && l.setAttribute("form", t.id),
      e.parentNode.insertBefore(l, e),
      (t = new FormData(t)),
      l.parentNode.removeChild(l),
      t
    );
  }
  function rp(t, e, l, a, u) {
    if (e === "submit" && l && l.stateNode === u) {
      var i = hh((u[ue] || null).action),
        s = a.submitter;
      s &&
        ((e = (e = s[ue] || null)
          ? hh(e.formAction)
          : s.getAttribute("formAction")),
        e !== null && ((i = e), (s = null)));
      var m = new Au("action", "action", null, a, u);
      t.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Hl !== 0) {
                  var b = s ? mh(u, s) : new FormData(u);
                  dr(
                    l,
                    { pending: !0, data: b, method: u.method, action: i },
                    null,
                    b
                  );
                }
              } else
                typeof i == "function" &&
                  (m.preventDefault(),
                  (b = s ? mh(u, s) : new FormData(u)),
                  dr(
                    l,
                    { pending: !0, data: b, method: u.method, action: i },
                    i,
                    b
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Jr = 0; Jr < _c.length; Jr++) {
    var $r = _c[Jr],
      fp = $r.toLowerCase(),
      sp = $r[0].toUpperCase() + $r.slice(1);
    je(fp, "on" + sp);
  }
  je(Vs, "onAnimationEnd"),
    je(Zs, "onAnimationIteration"),
    je(Ks, "onAnimationStart"),
    je("dblclick", "onDoubleClick"),
    je("focusin", "onFocus"),
    je("focusout", "onBlur"),
    je(z0, "onTransitionRun"),
    je(x0, "onTransitionStart"),
    je(C0, "onTransitionCancel"),
    je(Js, "onTransitionEnd"),
    pa("onMouseEnter", ["mouseout", "mouseover"]),
    pa("onMouseLeave", ["mouseout", "mouseover"]),
    pa("onPointerEnter", ["pointerout", "pointerover"]),
    pa("onPointerLeave", ["pointerout", "pointerover"]),
    Kl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Kl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Kl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Kl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Kl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Kl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Gn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    op = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Gn)
    );
  function yh(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l],
        u = a.event;
      a = a.listeners;
      t: {
        var i = void 0;
        if (e)
          for (var s = a.length - 1; 0 <= s; s--) {
            var m = a[s],
              b = m.instance,
              z = m.currentTarget;
            if (((m = m.listener), b !== i && u.isPropagationStopped()))
              break t;
            (i = m), (u.currentTarget = z);
            try {
              i(u);
            } catch (M) {
              zu(M);
            }
            (u.currentTarget = null), (i = b);
          }
        else
          for (s = 0; s < a.length; s++) {
            if (
              ((m = a[s]),
              (b = m.instance),
              (z = m.currentTarget),
              (m = m.listener),
              b !== i && u.isPropagationStopped())
            )
              break t;
            (i = m), (u.currentTarget = z);
            try {
              i(u);
            } catch (M) {
              zu(M);
            }
            (u.currentTarget = null), (i = b);
          }
      }
    }
  }
  function ct(t, e) {
    var l = e[cc];
    l === void 0 && (l = e[cc] = new Set());
    var a = t + "__bubble";
    l.has(a) || (ph(e, t, 2, !1), l.add(a));
  }
  function Fr(t, e, l) {
    var a = 0;
    e && (a |= 4), ph(l, t, a, e);
  }
  var di = "_reactListening" + Math.random().toString(36).slice(2);
  function kr(t) {
    if (!t[di]) {
      (t[di] = !0),
        rs.forEach(function (l) {
          l !== "selectionchange" && (op.has(l) || Fr(l, !1, t), Fr(l, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[di] || ((e[di] = !0), Fr("selectionchange", !1, e));
    }
  }
  function ph(t, e, l, a) {
    switch (Zh(e)) {
      case 2:
        var u = qp;
        break;
      case 8:
        u = Yp;
        break;
      default:
        u = df;
    }
    (l = u.bind(null, e, l, t)),
      (u = void 0),
      !pc ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (u = !0),
      a
        ? u !== void 0
          ? t.addEventListener(e, l, { capture: !0, passive: u })
          : t.addEventListener(e, l, !0)
        : u !== void 0
        ? t.addEventListener(e, l, { passive: u })
        : t.addEventListener(e, l, !1);
  }
  function Wr(t, e, l, a, u) {
    var i = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var s = a.tag;
        if (s === 3 || s === 4) {
          var m = a.stateNode.containerInfo;
          if (m === u) break;
          if (s === 4)
            for (s = a.return; s !== null; ) {
              var b = s.tag;
              if ((b === 3 || b === 4) && s.stateNode.containerInfo === u)
                return;
              s = s.return;
            }
          for (; m !== null; ) {
            if (((s = ha(m)), s === null)) return;
            if (((b = s.tag), b === 5 || b === 6 || b === 26 || b === 27)) {
              a = i = s;
              continue t;
            }
            m = m.parentNode;
          }
        }
        a = a.return;
      }
    Ss(function () {
      var z = i,
        M = mc(l),
        B = [];
      t: {
        var x = $s.get(t);
        if (x !== void 0) {
          var N = Au,
            J = t;
          switch (t) {
            case "keypress":
              if (Eu(l) === 0) break t;
            case "keydown":
            case "keyup":
              N = n0;
              break;
            case "focusin":
              (J = "focus"), (N = Sc);
              break;
            case "focusout":
              (J = "blur"), (N = Sc);
              break;
            case "beforeblur":
            case "afterblur":
              N = Sc;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              N = As;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = Ky;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = c0;
              break;
            case Vs:
            case Zs:
            case Ks:
              N = Fy;
              break;
            case Js:
              N = f0;
              break;
            case "scroll":
            case "scrollend":
              N = Vy;
              break;
            case "wheel":
              N = o0;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = Wy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = Rs;
              break;
            case "toggle":
            case "beforetoggle":
              N = h0;
          }
          var P = (e & 4) !== 0,
            Tt = !P && (t === "scroll" || t === "scrollend"),
            A = P ? (x !== null ? x + "Capture" : null) : x;
          P = [];
          for (var E = z, R; E !== null; ) {
            var j = E;
            if (
              ((R = j.stateNode),
              (j = j.tag),
              (j !== 5 && j !== 26 && j !== 27) ||
                R === null ||
                A === null ||
                ((j = fn(E, A)), j != null && P.push(Xn(E, j, R))),
              Tt)
            )
              break;
            E = E.return;
          }
          0 < P.length &&
            ((x = new N(x, J, null, l, M)), B.push({ event: x, listeners: P }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((x = t === "mouseover" || t === "pointerover"),
            (N = t === "mouseout" || t === "pointerout"),
            x &&
              l !== hc &&
              (J = l.relatedTarget || l.fromElement) &&
              (ha(J) || J[da]))
          )
            break t;
          if (
            (N || x) &&
            ((x =
              M.window === M
                ? M
                : (x = M.ownerDocument)
                ? x.defaultView || x.parentWindow
                : window),
            N
              ? ((J = l.relatedTarget || l.toElement),
                (N = z),
                (J = J ? ha(J) : null),
                J !== null &&
                  ((Tt = d(J)),
                  (P = J.tag),
                  J !== Tt || (P !== 5 && P !== 27 && P !== 6)) &&
                  (J = null))
              : ((N = null), (J = z)),
            N !== J)
          ) {
            if (
              ((P = As),
              (j = "onMouseLeave"),
              (A = "onMouseEnter"),
              (E = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((P = Rs),
                (j = "onPointerLeave"),
                (A = "onPointerEnter"),
                (E = "pointer")),
              (Tt = N == null ? x : rn(N)),
              (R = J == null ? x : rn(J)),
              (x = new P(j, E + "leave", N, l, M)),
              (x.target = Tt),
              (x.relatedTarget = R),
              (j = null),
              ha(M) === z &&
                ((P = new P(A, E + "enter", J, l, M)),
                (P.target = R),
                (P.relatedTarget = Tt),
                (j = P)),
              (Tt = j),
              N && J)
            )
              e: {
                for (P = dp, A = N, E = J, R = 0, j = A; j; j = P(j)) R++;
                j = 0;
                for (var k = E; k; k = P(k)) j++;
                for (; 0 < R - j; ) (A = P(A)), R--;
                for (; 0 < j - R; ) (E = P(E)), j--;
                for (; R--; ) {
                  if (A === E || (E !== null && A === E.alternate)) {
                    P = A;
                    break e;
                  }
                  (A = P(A)), (E = P(E));
                }
                P = null;
              }
            else P = null;
            N !== null && vh(B, x, N, P, !1),
              J !== null && Tt !== null && vh(B, Tt, J, P, !0);
          }
        }
        t: {
          if (
            ((x = z ? rn(z) : window),
            (N = x.nodeName && x.nodeName.toLowerCase()),
            N === "select" || (N === "input" && x.type === "file"))
          )
            var dt = Us;
          else if (Ds(x))
            if (Hs) dt = A0;
            else {
              dt = E0;
              var $ = S0;
            }
          else
            (N = x.nodeName),
              !N ||
              N.toLowerCase() !== "input" ||
              (x.type !== "checkbox" && x.type !== "radio")
                ? z && dc(z.elementType) && (dt = Us)
                : (dt = T0);
          if (dt && (dt = dt(t, z))) {
            Ms(B, dt, l, M);
            break t;
          }
          $ && $(t, x, z),
            t === "focusout" &&
              z &&
              x.type === "number" &&
              z.memoizedProps.value != null &&
              oc(x, "number", x.value);
        }
        switch ((($ = z ? rn(z) : window), t)) {
          case "focusin":
            (Ds($) || $.contentEditable === "true") &&
              ((Ta = $), (zc = z), (vn = null));
            break;
          case "focusout":
            vn = zc = Ta = null;
            break;
          case "mousedown":
            xc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (xc = !1), Xs(B, l, M);
            break;
          case "selectionchange":
            if (R0) break;
          case "keydown":
          case "keyup":
            Xs(B, l, M);
        }
        var nt;
        if (Tc)
          t: {
            switch (t) {
              case "compositionstart":
                var ft = "onCompositionStart";
                break t;
              case "compositionend":
                ft = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ft = "onCompositionUpdate";
                break t;
            }
            ft = void 0;
          }
        else
          Ea
            ? _s(t, l) && (ft = "onCompositionEnd")
            : t === "keydown" &&
              l.keyCode === 229 &&
              (ft = "onCompositionStart");
        ft &&
          (zs &&
            l.locale !== "ko" &&
            (Ea || ft !== "onCompositionStart"
              ? ft === "onCompositionEnd" && Ea && (nt = Es())
              : ((gl = M),
                (vc = "value" in gl ? gl.value : gl.textContent),
                (Ea = !0))),
          ($ = hi(z, ft)),
          0 < $.length &&
            ((ft = new Os(ft, t, null, l, M)),
            B.push({ event: ft, listeners: $ }),
            nt
              ? (ft.data = nt)
              : ((nt = Ns(l)), nt !== null && (ft.data = nt)))),
          (nt = y0 ? p0(t, l) : v0(t, l)) &&
            ((ft = hi(z, "onBeforeInput")),
            0 < ft.length &&
              (($ = new Os("onBeforeInput", "beforeinput", null, l, M)),
              B.push({ event: $, listeners: ft }),
              ($.data = nt))),
          rp(B, t, z, l, M);
      }
      yh(B, e);
    });
  }
  function Xn(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function hi(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var u = t,
        i = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          i === null ||
          ((u = fn(t, l)),
          u != null && a.unshift(Xn(t, u, i)),
          (u = fn(t, e)),
          u != null && a.push(Xn(t, u, i))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function dp(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function vh(t, e, l, a, u) {
    for (var i = e._reactName, s = []; l !== null && l !== a; ) {
      var m = l,
        b = m.alternate,
        z = m.stateNode;
      if (((m = m.tag), b !== null && b === a)) break;
      (m !== 5 && m !== 26 && m !== 27) ||
        z === null ||
        ((b = z),
        u
          ? ((z = fn(l, i)), z != null && s.unshift(Xn(l, z, b)))
          : u || ((z = fn(l, i)), z != null && s.push(Xn(l, z, b)))),
        (l = l.return);
    }
    s.length !== 0 && t.push({ event: e, listeners: s });
  }
  var hp = /\r\n?/g,
    mp = /\u0000|\uFFFD/g;
  function gh(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        hp,
        `
`
      )
      .replace(mp, "");
  }
  function bh(t, e) {
    return (e = gh(e)), gh(t) === e;
  }
  function Et(t, e, l, a, u, i) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || ga(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            ga(t, "" + a);
        break;
      case "className":
        vu(t, "class", a);
        break;
      case "tabIndex":
        vu(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        vu(t, l, a);
        break;
      case "style":
        gs(t, a, i);
        break;
      case "data":
        if (e !== "object") {
          vu(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(l);
          break;
        }
        (a = bu("" + a)), t.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" &&
            (l === "formAction"
              ? (e !== "input" && Et(t, e, "name", u.name, u, null),
                Et(t, e, "formEncType", u.formEncType, u, null),
                Et(t, e, "formMethod", u.formMethod, u, null),
                Et(t, e, "formTarget", u.formTarget, u, null))
              : (Et(t, e, "encType", u.encType, u, null),
                Et(t, e, "method", u.method, u, null),
                Et(t, e, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        (a = bu("" + a)), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = Fe);
        break;
      case "onScroll":
        a != null && ct("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ct("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (((l = a.__html), l != null)) {
            if (u.children != null) throw Error(r(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (l = bu("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "" + a)
          : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "")
          : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(l, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(l)
          : t.setAttribute(l, a);
        break;
      case "popover":
        ct("beforetoggle", t), ct("toggle", t), pu(t, "popover", a);
        break;
      case "xlinkActuate":
        $e(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        $e(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        $e(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        $e(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        $e(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        $e(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        $e(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        $e(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        $e(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        pu(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = Xy.get(l) || l), pu(t, l, a));
    }
  }
  function Pr(t, e, l, a, u, i) {
    switch (l) {
      case "style":
        gs(t, a, i);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (((l = a.__html), l != null)) {
            if (u.children != null) throw Error(r(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? ga(t, a)
          : (typeof a == "number" || typeof a == "bigint") && ga(t, "" + a);
        break;
      case "onScroll":
        a != null && ct("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ct("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Fe);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!fs.hasOwnProperty(l))
          t: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((u = l.endsWith("Capture")),
              (e = l.slice(2, u ? l.length - 7 : void 0)),
              (i = t[ue] || null),
              (i = i != null ? i[l] : null),
              typeof i == "function" && t.removeEventListener(e, i, u),
              typeof a == "function")
            ) {
              typeof i != "function" &&
                i !== null &&
                (l in t
                  ? (t[l] = null)
                  : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, a, u);
              break t;
            }
            l in t
              ? (t[l] = a)
              : a === !0
              ? t.setAttribute(l, "")
              : pu(t, l, a);
          }
    }
  }
  function Wt(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ct("error", t), ct("load", t);
        var a = !1,
          u = !1,
          i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var s = l[i];
            if (s != null)
              switch (i) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  Et(t, e, i, s, l, null);
              }
          }
        u && Et(t, e, "srcSet", l.srcSet, l, null),
          a && Et(t, e, "src", l.src, l, null);
        return;
      case "input":
        ct("invalid", t);
        var m = (i = s = u = null),
          b = null,
          z = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var M = l[a];
            if (M != null)
              switch (a) {
                case "name":
                  u = M;
                  break;
                case "type":
                  s = M;
                  break;
                case "checked":
                  b = M;
                  break;
                case "defaultChecked":
                  z = M;
                  break;
                case "value":
                  i = M;
                  break;
                case "defaultValue":
                  m = M;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (M != null) throw Error(r(137, e));
                  break;
                default:
                  Et(t, e, a, M, l, null);
              }
          }
        ms(t, i, m, b, z, s, u, !1);
        return;
      case "select":
        ct("invalid", t), (a = s = i = null);
        for (u in l)
          if (l.hasOwnProperty(u) && ((m = l[u]), m != null))
            switch (u) {
              case "value":
                i = m;
                break;
              case "defaultValue":
                s = m;
                break;
              case "multiple":
                a = m;
              default:
                Et(t, e, u, m, l, null);
            }
        (e = i),
          (l = s),
          (t.multiple = !!a),
          e != null ? va(t, !!a, e, !1) : l != null && va(t, !!a, l, !0);
        return;
      case "textarea":
        ct("invalid", t), (i = u = a = null);
        for (s in l)
          if (l.hasOwnProperty(s) && ((m = l[s]), m != null))
            switch (s) {
              case "value":
                a = m;
                break;
              case "defaultValue":
                u = m;
                break;
              case "children":
                i = m;
                break;
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(r(91));
                break;
              default:
                Et(t, e, s, m, l, null);
            }
        ps(t, a, u, i);
        return;
      case "option":
        for (b in l)
          if (l.hasOwnProperty(b) && ((a = l[b]), a != null))
            switch (b) {
              case "selected":
                t.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                Et(t, e, b, a, l, null);
            }
        return;
      case "dialog":
        ct("beforetoggle", t), ct("toggle", t), ct("cancel", t), ct("close", t);
        break;
      case "iframe":
      case "object":
        ct("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Gn.length; a++) ct(Gn[a], t);
        break;
      case "image":
        ct("error", t), ct("load", t);
        break;
      case "details":
        ct("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ct("error", t), ct("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (z in l)
          if (l.hasOwnProperty(z) && ((a = l[z]), a != null))
            switch (z) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                Et(t, e, z, a, l, null);
            }
        return;
      default:
        if (dc(e)) {
          for (M in l)
            l.hasOwnProperty(M) &&
              ((a = l[M]), a !== void 0 && Pr(t, e, M, a, l, void 0));
          return;
        }
    }
    for (m in l)
      l.hasOwnProperty(m) && ((a = l[m]), a != null && Et(t, e, m, a, l, null));
  }
  function yp(t, e, l, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          i = null,
          s = null,
          m = null,
          b = null,
          z = null,
          M = null;
        for (N in l) {
          var B = l[N];
          if (l.hasOwnProperty(N) && B != null)
            switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                b = B;
              default:
                a.hasOwnProperty(N) || Et(t, e, N, null, a, B);
            }
        }
        for (var x in a) {
          var N = a[x];
          if (((B = l[x]), a.hasOwnProperty(x) && (N != null || B != null)))
            switch (x) {
              case "type":
                i = N;
                break;
              case "name":
                u = N;
                break;
              case "checked":
                z = N;
                break;
              case "defaultChecked":
                M = N;
                break;
              case "value":
                s = N;
                break;
              case "defaultValue":
                m = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null) throw Error(r(137, e));
                break;
              default:
                N !== B && Et(t, e, x, N, a, B);
            }
        }
        sc(t, s, m, b, z, M, i, u);
        return;
      case "select":
        N = s = m = x = null;
        for (i in l)
          if (((b = l[i]), l.hasOwnProperty(i) && b != null))
            switch (i) {
              case "value":
                break;
              case "multiple":
                N = b;
              default:
                a.hasOwnProperty(i) || Et(t, e, i, null, a, b);
            }
        for (u in a)
          if (
            ((i = a[u]),
            (b = l[u]),
            a.hasOwnProperty(u) && (i != null || b != null))
          )
            switch (u) {
              case "value":
                x = i;
                break;
              case "defaultValue":
                m = i;
                break;
              case "multiple":
                s = i;
              default:
                i !== b && Et(t, e, u, i, a, b);
            }
        (e = m),
          (l = s),
          (a = N),
          x != null
            ? va(t, !!l, x, !1)
            : !!a != !!l &&
              (e != null ? va(t, !!l, e, !0) : va(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        N = x = null;
        for (m in l)
          if (
            ((u = l[m]),
            l.hasOwnProperty(m) && u != null && !a.hasOwnProperty(m))
          )
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                Et(t, e, m, null, a, u);
            }
        for (s in a)
          if (
            ((u = a[s]),
            (i = l[s]),
            a.hasOwnProperty(s) && (u != null || i != null))
          )
            switch (s) {
              case "value":
                x = u;
                break;
              case "defaultValue":
                N = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== i && Et(t, e, s, u, a, i);
            }
        ys(t, x, N);
        return;
      case "option":
        for (var J in l)
          if (
            ((x = l[J]),
            l.hasOwnProperty(J) && x != null && !a.hasOwnProperty(J))
          )
            switch (J) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Et(t, e, J, null, a, x);
            }
        for (b in a)
          if (
            ((x = a[b]),
            (N = l[b]),
            a.hasOwnProperty(b) && x !== N && (x != null || N != null))
          )
            switch (b) {
              case "selected":
                t.selected =
                  x && typeof x != "function" && typeof x != "symbol";
                break;
              default:
                Et(t, e, b, x, a, N);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var P in l)
          (x = l[P]),
            l.hasOwnProperty(P) &&
              x != null &&
              !a.hasOwnProperty(P) &&
              Et(t, e, P, null, a, x);
        for (z in a)
          if (
            ((x = a[z]),
            (N = l[z]),
            a.hasOwnProperty(z) && x !== N && (x != null || N != null))
          )
            switch (z) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null) throw Error(r(137, e));
                break;
              default:
                Et(t, e, z, x, a, N);
            }
        return;
      default:
        if (dc(e)) {
          for (var Tt in l)
            (x = l[Tt]),
              l.hasOwnProperty(Tt) &&
                x !== void 0 &&
                !a.hasOwnProperty(Tt) &&
                Pr(t, e, Tt, void 0, a, x);
          for (M in a)
            (x = a[M]),
              (N = l[M]),
              !a.hasOwnProperty(M) ||
                x === N ||
                (x === void 0 && N === void 0) ||
                Pr(t, e, M, x, a, N);
          return;
        }
    }
    for (var A in l)
      (x = l[A]),
        l.hasOwnProperty(A) &&
          x != null &&
          !a.hasOwnProperty(A) &&
          Et(t, e, A, null, a, x);
    for (B in a)
      (x = a[B]),
        (N = l[B]),
        !a.hasOwnProperty(B) ||
          x === N ||
          (x == null && N == null) ||
          Et(t, e, B, x, a, N);
  }
  function Sh(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function pp() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0;
        a < l.length;
        a++
      ) {
        var u = l[a],
          i = u.transferSize,
          s = u.initiatorType,
          m = u.duration;
        if (i && m && Sh(s)) {
          for (s = 0, m = u.responseEnd, a += 1; a < l.length; a++) {
            var b = l[a],
              z = b.startTime;
            if (z > m) break;
            var M = b.transferSize,
              B = b.initiatorType;
            M &&
              Sh(B) &&
              ((b = b.responseEnd), (s += M * (b < m ? 1 : (m - z) / (b - z))));
          }
          if ((--a, (e += (8 * (i + s)) / (u.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var Ir = null,
    tf = null;
  function mi(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Eh(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Th(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function ef(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var lf = null;
  function vp() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === lf
        ? !1
        : ((lf = t), !0)
      : ((lf = null), !1);
  }
  var Ah = typeof setTimeout == "function" ? setTimeout : void 0,
    gp = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Oh = typeof Promise == "function" ? Promise : void 0,
    bp =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Oh < "u"
        ? function (t) {
            return Oh.resolve(null).then(t).catch(Sp);
          }
        : Ah;
  function Sp(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function jl(t) {
    return t === "head";
  }
  function Rh(t, e) {
    var l = e,
      a = 0;
    do {
      var u = l.nextSibling;
      if ((t.removeChild(l), u && u.nodeType === 8))
        if (((l = u.data), l === "/$" || l === "/&")) {
          if (a === 0) {
            t.removeChild(u), Fa(e);
            return;
          }
          a--;
        } else if (
          l === "$" ||
          l === "$?" ||
          l === "$~" ||
          l === "$!" ||
          l === "&"
        )
          a++;
        else if (l === "html") Qn(t.ownerDocument.documentElement);
        else if (l === "head") {
          (l = t.ownerDocument.head), Qn(l);
          for (var i = l.firstChild; i; ) {
            var s = i.nextSibling,
              m = i.nodeName;
            i[cn] ||
              m === "SCRIPT" ||
              m === "STYLE" ||
              (m === "LINK" && i.rel.toLowerCase() === "stylesheet") ||
              l.removeChild(i),
              (i = s);
          }
        } else l === "body" && Qn(t.ownerDocument.body);
      l = u;
    } while (l);
    Fa(e);
  }
  function zh(t, e) {
    var l = t;
    t = 0;
    do {
      var a = l.nextSibling;
      if (
        (l.nodeType === 1
          ? e
            ? ((l._stashedDisplay = l.style.display),
              (l.style.display = "none"))
            : ((l.style.display = l._stashedDisplay || ""),
              l.getAttribute("style") === "" && l.removeAttribute("style"))
          : l.nodeType === 3 &&
            (e
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ""))
              : (l.nodeValue = l._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((l = a.data), l === "/$")) {
          if (t === 0) break;
          t--;
        } else (l !== "$" && l !== "$?" && l !== "$~" && l !== "$!") || t++;
      l = a;
    } while (l);
  }
  function af(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          af(l), rc(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function Ep(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var u = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[cn])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((i = t.getAttribute("rel")),
                i === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                i !== u.rel ||
                t.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                t.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                t.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((i = t.getAttribute("src")),
                (i !== (u.src == null ? null : u.src) ||
                  t.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  t.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  i &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var i = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === i) return t;
      } else return t;
      if (((t = Ue(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Tp(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !l) ||
        ((t = Ue(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function xh(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = Ue(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function nf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function uf(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function Ap(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading") e();
    else {
      var a = function () {
        e(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), (t._reactRetry = a);
    }
  }
  function Ue(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var cf = null;
  function Ch(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0) return Ue(t.nextSibling);
          e--;
        } else
          (l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function _h(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else (l !== "/$" && l !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Nh(t, e, l) {
    switch (((e = mi(l)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(r(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(r(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function Qn(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    rc(t);
  }
  var He = new Map(),
    Dh = new Set();
  function yi(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var ol = Q.d;
  Q.d = { f: Op, r: Rp, D: zp, C: xp, L: Cp, m: _p, X: Dp, S: Np, M: Mp };
  function Op() {
    var t = ol.f(),
      e = ii();
    return t || e;
  }
  function Rp(t) {
    var e = ma(t);
    e !== null && e.tag === 5 && e.type === "form" ? $o(e) : ol.r(t);
  }
  var Ka = typeof document > "u" ? null : document;
  function Mh(t, e, l) {
    var a = Ka;
    if (a && typeof e == "string" && e) {
      var u = ze(e);
      (u = 'link[rel="' + t + '"][href="' + u + '"]'),
        typeof l == "string" && (u += '[crossorigin="' + l + '"]'),
        Dh.has(u) ||
          (Dh.add(u),
          (t = { rel: t, crossOrigin: l, href: e }),
          a.querySelector(u) === null &&
            ((e = a.createElement("link")),
            Wt(e, "link", t),
            Vt(e),
            a.head.appendChild(e)));
    }
  }
  function zp(t) {
    ol.D(t), Mh("dns-prefetch", t, null);
  }
  function xp(t, e) {
    ol.C(t, e), Mh("preconnect", t, e);
  }
  function Cp(t, e, l) {
    ol.L(t, e, l);
    var a = Ka;
    if (a && t && e) {
      var u = 'link[rel="preload"][as="' + ze(e) + '"]';
      e === "image" && l && l.imageSrcSet
        ? ((u += '[imagesrcset="' + ze(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (u += '[imagesizes="' + ze(l.imageSizes) + '"]'))
        : (u += '[href="' + ze(t) + '"]');
      var i = u;
      switch (e) {
        case "style":
          i = Ja(t);
          break;
        case "script":
          i = $a(t);
      }
      He.has(i) ||
        ((t = T(
          {
            rel: "preload",
            href: e === "image" && l && l.imageSrcSet ? void 0 : t,
            as: e,
          },
          l
        )),
        He.set(i, t),
        a.querySelector(u) !== null ||
          (e === "style" && a.querySelector(Vn(i))) ||
          (e === "script" && a.querySelector(Zn(i))) ||
          ((e = a.createElement("link")),
          Wt(e, "link", t),
          Vt(e),
          a.head.appendChild(e)));
    }
  }
  function _p(t, e) {
    ol.m(t, e);
    var l = Ka;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        u =
          'link[rel="modulepreload"][as="' + ze(a) + '"][href="' + ze(t) + '"]',
        i = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = $a(t);
      }
      if (
        !He.has(i) &&
        ((t = T({ rel: "modulepreload", href: t }, e)),
        He.set(i, t),
        l.querySelector(u) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Zn(i))) return;
        }
        (a = l.createElement("link")),
          Wt(a, "link", t),
          Vt(a),
          l.head.appendChild(a);
      }
    }
  }
  function Np(t, e, l) {
    ol.S(t, e, l);
    var a = Ka;
    if (a && t) {
      var u = ya(a).hoistableStyles,
        i = Ja(t);
      e = e || "default";
      var s = u.get(i);
      if (!s) {
        var m = { loading: 0, preload: null };
        if ((s = a.querySelector(Vn(i)))) m.loading = 5;
        else {
          (t = T({ rel: "stylesheet", href: t, "data-precedence": e }, l)),
            (l = He.get(i)) && rf(t, l);
          var b = (s = a.createElement("link"));
          Vt(b),
            Wt(b, "link", t),
            (b._p = new Promise(function (z, M) {
              (b.onload = z), (b.onerror = M);
            })),
            b.addEventListener("load", function () {
              m.loading |= 1;
            }),
            b.addEventListener("error", function () {
              m.loading |= 2;
            }),
            (m.loading |= 4),
            pi(s, e, a);
        }
        (s = { type: "stylesheet", instance: s, count: 1, state: m }),
          u.set(i, s);
      }
    }
  }
  function Dp(t, e) {
    ol.X(t, e);
    var l = Ka;
    if (l && t) {
      var a = ya(l).hoistableScripts,
        u = $a(t),
        i = a.get(u);
      i ||
        ((i = l.querySelector(Zn(u))),
        i ||
          ((t = T({ src: t, async: !0 }, e)),
          (e = He.get(u)) && ff(t, e),
          (i = l.createElement("script")),
          Vt(i),
          Wt(i, "link", t),
          l.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        a.set(u, i));
    }
  }
  function Mp(t, e) {
    ol.M(t, e);
    var l = Ka;
    if (l && t) {
      var a = ya(l).hoistableScripts,
        u = $a(t),
        i = a.get(u);
      i ||
        ((i = l.querySelector(Zn(u))),
        i ||
          ((t = T({ src: t, async: !0, type: "module" }, e)),
          (e = He.get(u)) && ff(t, e),
          (i = l.createElement("script")),
          Vt(i),
          Wt(i, "link", t),
          l.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        a.set(u, i));
    }
  }
  function Uh(t, e, l, a) {
    var u = (u = ut.current) ? yi(u) : null;
    if (!u) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((e = Ja(l.href)),
            (l = ya(u).hoistableStyles),
            (a = l.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          t = Ja(l.href);
          var i = ya(u).hoistableStyles,
            s = i.get(t);
          if (
            (s ||
              ((u = u.ownerDocument || u),
              (s = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              i.set(t, s),
              (i = u.querySelector(Vn(t))) &&
                !i._p &&
                ((s.instance = i), (s.state.loading = 5)),
              He.has(t) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                He.set(t, l),
                i || Up(u, t, l, s.state))),
            e && a === null)
          )
            throw Error(r(528, ""));
          return s;
        }
        if (e && a !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (e = l.async),
          (l = l.src),
          typeof l == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = $a(l)),
              (l = ya(u).hoistableScripts),
              (a = l.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, t));
    }
  }
  function Ja(t) {
    return 'href="' + ze(t) + '"';
  }
  function Vn(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Hh(t) {
    return T({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Up(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Wt(e, "link", l),
        Vt(e),
        t.head.appendChild(e));
  }
  function $a(t) {
    return '[src="' + ze(t) + '"]';
  }
  function Zn(t) {
    return "script[async]" + t;
  }
  function jh(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + ze(l.href) + '"]');
          if (a) return (e.instance = a), Vt(a), a;
          var u = T({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            Vt(a),
            Wt(a, "style", u),
            pi(a, l.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          u = Ja(l.href);
          var i = t.querySelector(Vn(u));
          if (i) return (e.state.loading |= 4), (e.instance = i), Vt(i), i;
          (a = Hh(l)),
            (u = He.get(u)) && rf(a, u),
            (i = (t.ownerDocument || t).createElement("link")),
            Vt(i);
          var s = i;
          return (
            (s._p = new Promise(function (m, b) {
              (s.onload = m), (s.onerror = b);
            })),
            Wt(i, "link", a),
            (e.state.loading |= 4),
            pi(i, l.precedence, t),
            (e.instance = i)
          );
        case "script":
          return (
            (i = $a(l.src)),
            (u = t.querySelector(Zn(i)))
              ? ((e.instance = u), Vt(u), u)
              : ((a = l),
                (u = He.get(i)) && ((a = T({}, l)), ff(a, u)),
                (t = t.ownerDocument || t),
                (u = t.createElement("script")),
                Vt(u),
                Wt(u, "link", a),
                t.head.appendChild(u),
                (e.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), pi(a, l.precedence, t));
    return e.instance;
  }
  function pi(t, e, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        u = a.length ? a[a.length - 1] : null,
        i = u,
        s = 0;
      s < a.length;
      s++
    ) {
      var m = a[s];
      if (m.dataset.precedence === e) i = m;
      else if (i !== u) break;
    }
    i
      ? i.parentNode.insertBefore(t, i.nextSibling)
      : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
  }
  function rf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function ff(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var vi = null;
  function wh(t, e, l) {
    if (vi === null) {
      var a = new Map(),
        u = (vi = new Map());
      u.set(l, a);
    } else (u = vi), (a = u.get(l)), a || ((a = new Map()), u.set(l, a));
    if (a.has(t)) return a;
    for (
      a.set(t, null), l = l.getElementsByTagName(t), u = 0;
      u < l.length;
      u++
    ) {
      var i = l[u];
      if (
        !(
          i[cn] ||
          i[Jt] ||
          (t === "link" && i.getAttribute("rel") === "stylesheet")
        ) &&
        i.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var s = i.getAttribute(e) || "";
        s = t + s;
        var m = a.get(s);
        m ? m.push(i) : a.set(s, [i]);
      }
    }
    return a;
  }
  function Bh(t, e, l) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        l,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function Hp(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Lh(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function jp(t, e, l, a) {
    if (
      l.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var u = Ja(a.href),
          i = e.querySelector(Vn(u));
        if (i) {
          (e = i._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = gi.bind(t)), e.then(t, t)),
            (l.state.loading |= 4),
            (l.instance = i),
            Vt(i);
          return;
        }
        (i = e.ownerDocument || e),
          (a = Hh(a)),
          (u = He.get(u)) && rf(a, u),
          (i = i.createElement("link")),
          Vt(i);
        var s = i;
        (s._p = new Promise(function (m, b) {
          (s.onload = m), (s.onerror = b);
        })),
          Wt(i, "link", a),
          (l.instance = i);
      }
      t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(l, e),
        (e = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (t.count++,
          (l = gi.bind(t)),
          e.addEventListener("load", l),
          e.addEventListener("error", l));
    }
  }
  var sf = 0;
  function wp(t, e) {
    return (
      t.stylesheets && t.count === 0 && Si(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (l) {
            var a = setTimeout(function () {
              if ((t.stylesheets && Si(t, t.stylesheets), t.unsuspend)) {
                var i = t.unsuspend;
                (t.unsuspend = null), i();
              }
            }, 6e4 + e);
            0 < t.imgBytes && sf === 0 && (sf = 62500 * pp());
            var u = setTimeout(function () {
              if (
                ((t.waitingForImages = !1),
                t.count === 0 &&
                  (t.stylesheets && Si(t, t.stylesheets), t.unsuspend))
              ) {
                var i = t.unsuspend;
                (t.unsuspend = null), i();
              }
            }, (t.imgBytes > sf ? 50 : 800) + e);
            return (
              (t.unsuspend = l),
              function () {
                (t.unsuspend = null), clearTimeout(a), clearTimeout(u);
              }
            );
          }
        : null
    );
  }
  function gi() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Si(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var bi = null;
  function Si(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (bi = new Map()),
        e.forEach(Bp, t),
        (bi = null),
        gi.call(t));
  }
  function Bp(t, e) {
    if (!(e.state.loading & 4)) {
      var l = bi.get(t);
      if (l) var a = l.get(null);
      else {
        (l = new Map()), bi.set(t, l);
        for (
          var u = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            i = 0;
          i < u.length;
          i++
        ) {
          var s = u[i];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") &&
            (l.set(s.dataset.precedence, s), (a = s));
        }
        a && l.set(null, a);
      }
      (u = e.instance),
        (s = u.getAttribute("data-precedence")),
        (i = l.get(s) || a),
        i === a && l.set(null, u),
        l.set(s, u),
        this.count++,
        (a = gi.bind(this)),
        u.addEventListener("load", a),
        u.addEventListener("error", a),
        i
          ? i.parentNode.insertBefore(u, i.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(u, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var Kn = {
    $$typeof: Z,
    Provider: null,
    Consumer: null,
    _currentValue: F,
    _currentValue2: F,
    _threadCount: 0,
  };
  function Lp(t, e, l, a, u, i, s, m, b) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = nc(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = nc(0)),
      (this.hiddenUpdates = nc(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = u),
      (this.onCaughtError = i),
      (this.onRecoverableError = s),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = b),
      (this.incompleteTransitions = new Map());
  }
  function qh(t, e, l, a, u, i, s, m, b, z, M, B) {
    return (
      (t = new Lp(t, e, l, s, b, z, M, B, m)),
      (e = 1),
      i === !0 && (e |= 24),
      (i = be(3, null, null, e)),
      (t.current = i),
      (i.stateNode = t),
      (e = Xc()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (i.memoizedState = { element: a, isDehydrated: l, cache: e }),
      Kc(i),
      t
    );
  }
  function Yh(t) {
    return t ? ((t = Ra), t) : Ra;
  }
  function Gh(t, e, l, a, u, i) {
    (u = Yh(u)),
      a.context === null ? (a.context = u) : (a.pendingContext = u),
      (a = Ol(e)),
      (a.payload = { element: l }),
      (i = i === void 0 ? null : i),
      i !== null && (a.callback = i),
      (l = Rl(t, a, e)),
      l !== null && (oe(l, t, e), On(l, t, e));
  }
  function Xh(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function of(t, e) {
    Xh(t, e), (t = t.alternate) && Xh(t, e);
  }
  function Qh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = kl(t, 67108864);
      e !== null && oe(e, t, 67108864), of(t, 67108864);
    }
  }
  function Vh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Oe();
      e = uc(e);
      var l = kl(t, e);
      l !== null && oe(l, t, e), of(t, e);
    }
  }
  var Ei = !0;
  function qp(t, e, l, a) {
    var u = D.T;
    D.T = null;
    var i = Q.p;
    try {
      (Q.p = 2), df(t, e, l, a);
    } finally {
      (Q.p = i), (D.T = u);
    }
  }
  function Yp(t, e, l, a) {
    var u = D.T;
    D.T = null;
    var i = Q.p;
    try {
      (Q.p = 8), df(t, e, l, a);
    } finally {
      (Q.p = i), (D.T = u);
    }
  }
  function df(t, e, l, a) {
    if (Ei) {
      var u = hf(a);
      if (u === null) Wr(t, e, a, Ti, l), Kh(t, a);
      else if (Xp(u, t, e, l, a)) a.stopPropagation();
      else if ((Kh(t, a), e & 4 && -1 < Gp.indexOf(t))) {
        for (; u !== null; ) {
          var i = ma(u);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (((i = i.stateNode), i.current.memoizedState.isDehydrated)) {
                  var s = Zl(i.pendingLanes);
                  if (s !== 0) {
                    var m = i;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; s; ) {
                      var b = 1 << (31 - ve(s));
                      (m.entanglements[1] |= b), (s &= ~b);
                    }
                    Ve(i), (yt & 6) === 0 && ((ni = ye() + 500), Yn(0));
                  }
                }
                break;
              case 31:
              case 13:
                (m = kl(i, 2)), m !== null && oe(m, i, 2), ii(), of(i, 2);
            }
          if (((i = hf(a)), i === null && Wr(t, e, a, Ti, l), i === u)) break;
          u = i;
        }
        u !== null && a.stopPropagation();
      } else Wr(t, e, a, null, l);
    }
  }
  function hf(t) {
    return (t = mc(t)), mf(t);
  }
  var Ti = null;
  function mf(t) {
    if (((Ti = null), (t = ha(t)), t !== null)) {
      var e = d(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = h(e)), t !== null)) return t;
          t = null;
        } else if (l === 31) {
          if (((t = p(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Ti = t), null;
  }
  function Zh(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (zy()) {
          case Pf:
            return 2;
          case If:
            return 8;
          case ou:
          case xy:
            return 32;
          case ts:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var yf = !1,
    wl = null,
    Bl = null,
    Ll = null,
    Jn = new Map(),
    $n = new Map(),
    ql = [],
    Gp =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Kh(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        wl = null;
        break;
      case "dragenter":
      case "dragleave":
        Bl = null;
        break;
      case "mouseover":
      case "mouseout":
        Ll = null;
        break;
      case "pointerover":
      case "pointerout":
        Jn.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        $n.delete(e.pointerId);
    }
  }
  function Fn(t, e, l, a, u, i) {
    return t === null || t.nativeEvent !== i
      ? ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: i,
          targetContainers: [u],
        }),
        e !== null && ((e = ma(e)), e !== null && Qh(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        u !== null && e.indexOf(u) === -1 && e.push(u),
        t);
  }
  function Xp(t, e, l, a, u) {
    switch (e) {
      case "focusin":
        return (wl = Fn(wl, t, e, l, a, u)), !0;
      case "dragenter":
        return (Bl = Fn(Bl, t, e, l, a, u)), !0;
      case "mouseover":
        return (Ll = Fn(Ll, t, e, l, a, u)), !0;
      case "pointerover":
        var i = u.pointerId;
        return Jn.set(i, Fn(Jn.get(i) || null, t, e, l, a, u)), !0;
      case "gotpointercapture":
        return (
          (i = u.pointerId), $n.set(i, Fn($n.get(i) || null, t, e, l, a, u)), !0
        );
    }
    return !1;
  }
  function Jh(t) {
    var e = ha(t.target);
    if (e !== null) {
      var l = d(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = h(l)), e !== null)) {
            (t.blockedOn = e),
              is(t.priority, function () {
                Vh(l);
              });
            return;
          }
        } else if (e === 31) {
          if (((e = p(l)), e !== null)) {
            (t.blockedOn = e),
              is(t.priority, function () {
                Vh(l);
              });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Ai(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = hf(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(l.type, l);
        (hc = a), l.target.dispatchEvent(a), (hc = null);
      } else return (e = ma(l)), e !== null && Qh(e), (t.blockedOn = l), !1;
      e.shift();
    }
    return !0;
  }
  function $h(t, e, l) {
    Ai(t) && l.delete(e);
  }
  function Qp() {
    (yf = !1),
      wl !== null && Ai(wl) && (wl = null),
      Bl !== null && Ai(Bl) && (Bl = null),
      Ll !== null && Ai(Ll) && (Ll = null),
      Jn.forEach($h),
      $n.forEach($h);
  }
  function Oi(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      yf ||
        ((yf = !0),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, Qp)));
  }
  var Ri = null;
  function Fh(t) {
    Ri !== t &&
      ((Ri = t),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        Ri === t && (Ri = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            a = t[e + 1],
            u = t[e + 2];
          if (typeof a != "function") {
            if (mf(a || l) === null) continue;
            break;
          }
          var i = ma(l);
          i !== null &&
            (t.splice(e, 3),
            (e -= 3),
            dr(i, { pending: !0, data: u, method: l.method, action: a }, a, u));
        }
      }));
  }
  function Fa(t) {
    function e(b) {
      return Oi(b, t);
    }
    wl !== null && Oi(wl, t),
      Bl !== null && Oi(Bl, t),
      Ll !== null && Oi(Ll, t),
      Jn.forEach(e),
      $n.forEach(e);
    for (var l = 0; l < ql.length; l++) {
      var a = ql[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < ql.length && ((l = ql[0]), l.blockedOn === null); )
      Jh(l), l.blockedOn === null && ql.shift();
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var u = l[a],
          i = l[a + 1],
          s = u[ue] || null;
        if (typeof i == "function") s || Fh(l);
        else if (s) {
          var m = null;
          if (i && i.hasAttribute("formAction")) {
            if (((u = i), (s = i[ue] || null))) m = s.formAction;
            else if (mf(u) !== null) continue;
          } else m = s.action;
          typeof m == "function" ? (l[a + 1] = m) : (l.splice(a, 3), (a -= 3)),
            Fh(l);
        }
      }
  }
  function kh() {
    function t(i) {
      i.canIntercept &&
        i.info === "react-transition" &&
        i.intercept({
          handler: function () {
            return new Promise(function (s) {
              return (u = s);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      u !== null && (u(), (u = null)), a || setTimeout(l, 20);
    }
    function l() {
      if (!a && !navigation.transition) {
        var i = navigation.currentEntry;
        i &&
          i.url != null &&
          navigation.navigate(i.url, {
            state: i.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        u = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(l, 100),
        function () {
          (a = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            u !== null && (u(), (u = null));
        }
      );
    }
  }
  function pf(t) {
    this._internalRoot = t;
  }
  (zi.prototype.render = pf.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(r(409));
      var l = e.current,
        a = Oe();
      Gh(l, a, t, e, null, null);
    }),
    (zi.prototype.unmount = pf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          Gh(t.current, 2, null, t, null, null), ii(), (e[da] = null);
        }
      });
  function zi(t) {
    this._internalRoot = t;
  }
  zi.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = us();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < ql.length && e !== 0 && e < ql[l].priority; l++);
      ql.splice(l, 0, t), l === 0 && Jh(t);
    }
  };
  var Wh = c.version;
  if (Wh !== "19.2.0") throw Error(r(527, Wh, "19.2.0"));
  Q.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(r(188))
        : ((t = Object.keys(t).join(",")), Error(r(268, t)));
    return (
      (t = y(e)),
      (t = t !== null ? g(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Vp = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: D,
    reconcilerVersion: "19.2.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xi.isDisabled && xi.supportsFiber)
      try {
        (an = xi.inject(Vp)), (pe = xi);
      } catch {}
  }
  return (
    (Wn.createRoot = function (t, e) {
      if (!o(t)) throw Error(r(299));
      var l = !1,
        a = "",
        u = nd,
        i = ud,
        s = id;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
          e.onCaughtError !== void 0 && (i = e.onCaughtError),
          e.onRecoverableError !== void 0 && (s = e.onRecoverableError)),
        (e = qh(t, 1, !1, null, null, l, a, null, u, i, s, kh)),
        (t[da] = e.current),
        kr(t),
        new pf(e)
      );
    }),
    (Wn.hydrateRoot = function (t, e, l) {
      if (!o(t)) throw Error(r(299));
      var a = !1,
        u = "",
        i = nd,
        s = ud,
        m = id,
        b = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (u = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (i = l.onUncaughtError),
          l.onCaughtError !== void 0 && (s = l.onCaughtError),
          l.onRecoverableError !== void 0 && (m = l.onRecoverableError),
          l.formState !== void 0 && (b = l.formState)),
        (e = qh(t, 1, !0, e, l ?? null, a, u, b, i, s, m, kh)),
        (e.context = Yh(null)),
        (l = e.current),
        (a = Oe()),
        (a = uc(a)),
        (u = Ol(a)),
        (u.callback = null),
        Rl(l, u, a),
        (l = a),
        (e.current.lanes = l),
        un(e, l),
        Ve(e),
        (t[da] = e.current),
        kr(t),
        new zi(e)
      );
    }),
    (Wn.version = "19.2.0"),
    Wn
  );
}
var cm;
function tv() {
  if (cm) return bf.exports;
  cm = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (c) {
        console.error(c);
      }
  }
  return n(), (bf.exports = Ip()), bf.exports;
}
var ev = tv();
const lv = Nm(ev);
/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var rm = "popstate";
function av(n = {}) {
  function c(r, o) {
    let { pathname: d, search: h, hash: p } = r.location;
    return _f(
      "",
      { pathname: d, search: h, hash: p },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function f(r, o) {
    return typeof o == "string" ? o : eu(o);
  }
  return uv(c, f, null, n);
}
function Nt(n, c) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(c);
}
function Le(n, c) {
  if (!n) {
    typeof console < "u" && console.warn(c);
    try {
      throw new Error(c);
    } catch {}
  }
}
function nv() {
  return Math.random().toString(36).substring(2, 10);
}
function fm(n, c) {
  return { usr: n.state, key: n.key, idx: c };
}
function _f(n, c, f = null, r) {
  return {
    pathname: typeof n == "string" ? n : n.pathname,
    search: "",
    hash: "",
    ...(typeof c == "string" ? Wa(c) : c),
    state: f,
    key: (c && c.key) || r || nv(),
  };
}
function eu({ pathname: n = "/", search: c = "", hash: f = "" }) {
  return (
    c && c !== "?" && (n += c.charAt(0) === "?" ? c : "?" + c),
    f && f !== "#" && (n += f.charAt(0) === "#" ? f : "#" + f),
    n
  );
}
function Wa(n) {
  let c = {};
  if (n) {
    let f = n.indexOf("#");
    f >= 0 && ((c.hash = n.substring(f)), (n = n.substring(0, f)));
    let r = n.indexOf("?");
    r >= 0 && ((c.search = n.substring(r)), (n = n.substring(0, r))),
      n && (c.pathname = n);
  }
  return c;
}
function uv(n, c, f, r = {}) {
  let { window: o = document.defaultView, v5Compat: d = !1 } = r,
    h = o.history,
    p = "POP",
    v = null,
    y = g();
  y == null && ((y = 0), h.replaceState({ ...h.state, idx: y }, ""));
  function g() {
    return (h.state || { idx: null }).idx;
  }
  function T() {
    p = "POP";
    let U = g(),
      q = U == null ? null : U - y;
    (y = U), v && v({ action: p, location: L.location, delta: q });
  }
  function H(U, q) {
    p = "PUSH";
    let X = _f(L.location, U, q);
    y = g() + 1;
    let Z = fm(X, y),
      I = L.createHref(X);
    try {
      h.pushState(Z, "", I);
    } catch (ot) {
      if (ot instanceof DOMException && ot.name === "DataCloneError") throw ot;
      o.location.assign(I);
    }
    d && v && v({ action: p, location: L.location, delta: 1 });
  }
  function G(U, q) {
    p = "REPLACE";
    let X = _f(L.location, U, q);
    y = g();
    let Z = fm(X, y),
      I = L.createHref(X);
    h.replaceState(Z, "", I),
      d && v && v({ action: p, location: L.location, delta: 0 });
  }
  function C(U) {
    return iv(U);
  }
  let L = {
    get action() {
      return p;
    },
    get location() {
      return n(o, h);
    },
    listen(U) {
      if (v) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(rm, T),
        (v = U),
        () => {
          o.removeEventListener(rm, T), (v = null);
        }
      );
    },
    createHref(U) {
      return c(o, U);
    },
    createURL: C,
    encodeLocation(U) {
      let q = C(U);
      return { pathname: q.pathname, search: q.search, hash: q.hash };
    },
    push: H,
    replace: G,
    go(U) {
      return h.go(U);
    },
  };
  return L;
}
function iv(n, c = !1) {
  let f = "http://localhost";
  typeof window < "u" &&
    (f =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Nt(f, "No window.location.(origin|href) available to create URL");
  let r = typeof n == "string" ? n : eu(n);
  return (
    (r = r.replace(/ $/, "%20")),
    !c && r.startsWith("//") && (r = f + r),
    new URL(r, f)
  );
}
function Mm(n, c, f = "/") {
  return cv(n, c, f, !1);
}
function cv(n, c, f, r) {
  let o = typeof c == "string" ? Wa(c) : c,
    d = ml(o.pathname || "/", f);
  if (d == null) return null;
  let h = Um(n);
  rv(h);
  let p = null;
  for (let v = 0; p == null && v < h.length; ++v) {
    let y = bv(d);
    p = vv(h[v], y, r);
  }
  return p;
}
function Um(n, c = [], f = [], r = "", o = !1) {
  let d = (h, p, v = o, y) => {
    let g = {
      relativePath: y === void 0 ? h.path || "" : y,
      caseSensitive: h.caseSensitive === !0,
      childrenIndex: p,
      route: h,
    };
    if (g.relativePath.startsWith("/")) {
      if (!g.relativePath.startsWith(r) && v) return;
      Nt(
        g.relativePath.startsWith(r),
        `Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (g.relativePath = g.relativePath.slice(r.length));
    }
    let T = hl([r, g.relativePath]),
      H = f.concat(g);
    h.children &&
      h.children.length > 0 &&
      (Nt(
        h.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${T}".`
      ),
      Um(h.children, c, H, T, v)),
      !(h.path == null && !h.index) &&
        c.push({ path: T, score: yv(T, h.index), routesMeta: H });
  };
  return (
    n.forEach((h, p) => {
      if (h.path === "" || !h.path?.includes("?")) d(h, p);
      else for (let v of Hm(h.path)) d(h, p, !0, v);
    }),
    c
  );
}
function Hm(n) {
  let c = n.split("/");
  if (c.length === 0) return [];
  let [f, ...r] = c,
    o = f.endsWith("?"),
    d = f.replace(/\?$/, "");
  if (r.length === 0) return o ? [d, ""] : [d];
  let h = Hm(r.join("/")),
    p = [];
  return (
    p.push(...h.map((v) => (v === "" ? d : [d, v].join("/")))),
    o && p.push(...h),
    p.map((v) => (n.startsWith("/") && v === "" ? "/" : v))
  );
}
function rv(n) {
  n.sort((c, f) =>
    c.score !== f.score
      ? f.score - c.score
      : pv(
          c.routesMeta.map((r) => r.childrenIndex),
          f.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
var fv = /^:[\w-]+$/,
  sv = 3,
  ov = 2,
  dv = 1,
  hv = 10,
  mv = -2,
  sm = (n) => n === "*";
function yv(n, c) {
  let f = n.split("/"),
    r = f.length;
  return (
    f.some(sm) && (r += mv),
    c && (r += ov),
    f
      .filter((o) => !sm(o))
      .reduce((o, d) => o + (fv.test(d) ? sv : d === "" ? dv : hv), r)
  );
}
function pv(n, c) {
  return n.length === c.length && n.slice(0, -1).every((r, o) => r === c[o])
    ? n[n.length - 1] - c[c.length - 1]
    : 0;
}
function vv(n, c, f = !1) {
  let { routesMeta: r } = n,
    o = {},
    d = "/",
    h = [];
  for (let p = 0; p < r.length; ++p) {
    let v = r[p],
      y = p === r.length - 1,
      g = d === "/" ? c : c.slice(d.length) || "/",
      T = qi(
        { path: v.relativePath, caseSensitive: v.caseSensitive, end: y },
        g
      ),
      H = v.route;
    if (
      (!T &&
        y &&
        f &&
        !r[r.length - 1].route.index &&
        (T = qi(
          { path: v.relativePath, caseSensitive: v.caseSensitive, end: !1 },
          g
        )),
      !T)
    )
      return null;
    Object.assign(o, T.params),
      h.push({
        params: o,
        pathname: hl([d, T.pathname]),
        pathnameBase: Av(hl([d, T.pathnameBase])),
        route: H,
      }),
      T.pathnameBase !== "/" && (d = hl([d, T.pathnameBase]));
  }
  return h;
}
function qi(n, c) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [f, r] = gv(n.path, n.caseSensitive, n.end),
    o = c.match(f);
  if (!o) return null;
  let d = o[0],
    h = d.replace(/(.)\/+$/, "$1"),
    p = o.slice(1);
  return {
    params: r.reduce((y, { paramName: g, isOptional: T }, H) => {
      if (g === "*") {
        let C = p[H] || "";
        h = d.slice(0, d.length - C.length).replace(/(.)\/+$/, "$1");
      }
      const G = p[H];
      return (
        T && !G ? (y[g] = void 0) : (y[g] = (G || "").replace(/%2F/g, "/")), y
      );
    }, {}),
    pathname: d,
    pathnameBase: h,
    pattern: n,
  };
}
function gv(n, c = !1, f = !0) {
  Le(
    n === "*" || !n.endsWith("*") || n.endsWith("/*"),
    `Route path "${n}" will be treated as if it were "${n.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let r = [],
    o =
      "^" +
      n
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (h, p, v) => (
            r.push({ paramName: p, isOptional: v != null }),
            v ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    n.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : f
      ? (o += "\\/*$")
      : n !== "" && n !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, c ? void 0 : "i"), r]
  );
}
function bv(n) {
  try {
    return n
      .split("/")
      .map((c) => decodeURIComponent(c).replace(/\//g, "%2F"))
      .join("/");
  } catch (c) {
    return (
      Le(
        !1,
        `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`
      ),
      n
    );
  }
}
function ml(n, c) {
  if (c === "/") return n;
  if (!n.toLowerCase().startsWith(c.toLowerCase())) return null;
  let f = c.endsWith("/") ? c.length - 1 : c.length,
    r = n.charAt(f);
  return r && r !== "/" ? null : n.slice(f) || "/";
}
function Sv(n, c = "/") {
  let {
    pathname: f,
    search: r = "",
    hash: o = "",
  } = typeof n == "string" ? Wa(n) : n;
  return {
    pathname: f ? (f.startsWith("/") ? f : Ev(f, c)) : c,
    search: Ov(r),
    hash: Rv(o),
  };
}
function Ev(n, c) {
  let f = c.replace(/\/+$/, "").split("/");
  return (
    n.split("/").forEach((o) => {
      o === ".." ? f.length > 1 && f.pop() : o !== "." && f.push(o);
    }),
    f.length > 1 ? f.join("/") : "/"
  );
}
function Af(n, c, f, r) {
  return `Cannot include a '${n}' character in a manually specified \`to.${c}\` field [${JSON.stringify(
    r
  )}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Tv(n) {
  return n.filter(
    (c, f) => f === 0 || (c.route.path && c.route.path.length > 0)
  );
}
function qf(n) {
  let c = Tv(n);
  return c.map((f, r) => (r === c.length - 1 ? f.pathname : f.pathnameBase));
}
function Yf(n, c, f, r = !1) {
  let o;
  typeof n == "string"
    ? (o = Wa(n))
    : ((o = { ...n }),
      Nt(
        !o.pathname || !o.pathname.includes("?"),
        Af("?", "pathname", "search", o)
      ),
      Nt(
        !o.pathname || !o.pathname.includes("#"),
        Af("#", "pathname", "hash", o)
      ),
      Nt(!o.search || !o.search.includes("#"), Af("#", "search", "hash", o)));
  let d = n === "" || o.pathname === "",
    h = d ? "/" : o.pathname,
    p;
  if (h == null) p = f;
  else {
    let T = c.length - 1;
    if (!r && h.startsWith("..")) {
      let H = h.split("/");
      for (; H[0] === ".."; ) H.shift(), (T -= 1);
      o.pathname = H.join("/");
    }
    p = T >= 0 ? c[T] : "/";
  }
  let v = Sv(o, p),
    y = h && h !== "/" && h.endsWith("/"),
    g = (d || h === ".") && f.endsWith("/");
  return !v.pathname.endsWith("/") && (y || g) && (v.pathname += "/"), v;
}
var hl = (n) => n.join("/").replace(/\/\/+/g, "/"),
  Av = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Ov = (n) => (!n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n),
  Rv = (n) => (!n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n);
function zv(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.internal == "boolean" &&
    "data" in n
  );
}
var jm = ["POST", "PUT", "PATCH", "DELETE"];
new Set(jm);
var xv = ["GET", ...jm];
new Set(xv);
var Pa = O.createContext(null);
Pa.displayName = "DataRouter";
var Xi = O.createContext(null);
Xi.displayName = "DataRouterState";
O.createContext(!1);
var wm = O.createContext({ isTransitioning: !1 });
wm.displayName = "ViewTransition";
var Cv = O.createContext(new Map());
Cv.displayName = "Fetchers";
var _v = O.createContext(null);
_v.displayName = "Await";
var qe = O.createContext(null);
qe.displayName = "Navigation";
var lu = O.createContext(null);
lu.displayName = "Location";
var Je = O.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Je.displayName = "Route";
var Gf = O.createContext(null);
Gf.displayName = "RouteError";
function Nv(n, { relative: c } = {}) {
  Nt(
    Ia(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: f, navigator: r } = O.useContext(qe),
    { hash: o, pathname: d, search: h } = nu(n, { relative: c }),
    p = d;
  return (
    f !== "/" && (p = d === "/" ? f : hl([f, d])),
    r.createHref({ pathname: p, search: h, hash: o })
  );
}
function Ia() {
  return O.useContext(lu) != null;
}
function Xl() {
  return (
    Nt(
      Ia(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    O.useContext(lu).location
  );
}
var Bm =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Lm(n) {
  O.useContext(qe).static || O.useLayoutEffect(n);
}
function au() {
  let { isDataRoute: n } = O.useContext(Je);
  return n ? Qv() : Dv();
}
function Dv() {
  Nt(
    Ia(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let n = O.useContext(Pa),
    { basename: c, navigator: f } = O.useContext(qe),
    { matches: r } = O.useContext(Je),
    { pathname: o } = Xl(),
    d = JSON.stringify(qf(r)),
    h = O.useRef(!1);
  return (
    Lm(() => {
      h.current = !0;
    }),
    O.useCallback(
      (v, y = {}) => {
        if ((Le(h.current, Bm), !h.current)) return;
        if (typeof v == "number") {
          f.go(v);
          return;
        }
        let g = Yf(v, JSON.parse(d), o, y.relative === "path");
        n == null &&
          c !== "/" &&
          (g.pathname = g.pathname === "/" ? c : hl([c, g.pathname])),
          (y.replace ? f.replace : f.push)(g, y.state, y);
      },
      [c, f, d, o, n]
    )
  );
}
O.createContext(null);
function nu(n, { relative: c } = {}) {
  let { matches: f } = O.useContext(Je),
    { pathname: r } = Xl(),
    o = JSON.stringify(qf(f));
  return O.useMemo(() => Yf(n, JSON.parse(o), r, c === "path"), [n, o, r, c]);
}
function Mv(n, c) {
  return qm(n, c);
}
function qm(n, c, f, r, o) {
  Nt(
    Ia(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: d } = O.useContext(qe),
    { matches: h } = O.useContext(Je),
    p = h[h.length - 1],
    v = p ? p.params : {},
    y = p ? p.pathname : "/",
    g = p ? p.pathnameBase : "/",
    T = p && p.route;
  {
    let X = (T && T.path) || "";
    Ym(
      y,
      !T || X.endsWith("*") || X.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${
        X === "/" ? "*" : `${X}/*`
      }">.`
    );
  }
  let H = Xl(),
    G;
  if (c) {
    let X = typeof c == "string" ? Wa(c) : c;
    Nt(
      g === "/" || X.pathname?.startsWith(g),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${X.pathname}" was given in the \`location\` prop.`
    ),
      (G = X);
  } else G = H;
  let C = G.pathname || "/",
    L = C;
  if (g !== "/") {
    let X = g.replace(/^\//, "").split("/");
    L = "/" + C.replace(/^\//, "").split("/").slice(X.length).join("/");
  }
  let U = Mm(n, { pathname: L });
  Le(
    T || U != null,
    `No routes matched location "${G.pathname}${G.search}${G.hash}" `
  ),
    Le(
      U == null ||
        U[U.length - 1].route.element !== void 0 ||
        U[U.length - 1].route.Component !== void 0 ||
        U[U.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${G.pathname}${G.search}${G.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let q = Bv(
    U &&
      U.map((X) =>
        Object.assign({}, X, {
          params: Object.assign({}, v, X.params),
          pathname: hl([
            g,
            d.encodeLocation
              ? d.encodeLocation(
                  X.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
                ).pathname
              : X.pathname,
          ]),
          pathnameBase:
            X.pathnameBase === "/"
              ? g
              : hl([
                  g,
                  d.encodeLocation
                    ? d.encodeLocation(
                        X.pathnameBase
                          .replace(/\?/g, "%3F")
                          .replace(/#/g, "%23")
                      ).pathname
                    : X.pathnameBase,
                ]),
        })
      ),
    h,
    f,
    r,
    o
  );
  return c && q
    ? O.createElement(
        lu.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...G,
            },
            navigationType: "POP",
          },
        },
        q
      )
    : q;
}
function Uv() {
  let n = Xv(),
    c = zv(n)
      ? `${n.status} ${n.statusText}`
      : n instanceof Error
      ? n.message
      : JSON.stringify(n),
    f = n instanceof Error ? n.stack : null,
    r = "rgba(200,200,200, 0.5)",
    o = { padding: "0.5rem", backgroundColor: r },
    d = { padding: "2px 4px", backgroundColor: r },
    h = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", n),
    (h = O.createElement(
      O.Fragment,
      null,
      O.createElement("p", null, "💿 Hey developer 👋"),
      O.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        O.createElement("code", { style: d }, "ErrorBoundary"),
        " or",
        " ",
        O.createElement("code", { style: d }, "errorElement"),
        " prop on your route."
      )
    )),
    O.createElement(
      O.Fragment,
      null,
      O.createElement("h2", null, "Unexpected Application Error!"),
      O.createElement("h3", { style: { fontStyle: "italic" } }, c),
      f ? O.createElement("pre", { style: o }, f) : null,
      h
    )
  );
}
var Hv = O.createElement(Uv, null),
  jv = class extends O.Component {
    constructor(n) {
      super(n),
        (this.state = {
          location: n.location,
          revalidation: n.revalidation,
          error: n.error,
        });
    }
    static getDerivedStateFromError(n) {
      return { error: n };
    }
    static getDerivedStateFromProps(n, c) {
      return c.location !== n.location ||
        (c.revalidation !== "idle" && n.revalidation === "idle")
        ? { error: n.error, location: n.location, revalidation: n.revalidation }
        : {
            error: n.error !== void 0 ? n.error : c.error,
            location: c.location,
            revalidation: n.revalidation || c.revalidation,
          };
    }
    componentDidCatch(n, c) {
      this.props.unstable_onError
        ? this.props.unstable_onError(n, c)
        : console.error(
            "React Router caught the following error during render",
            n
          );
    }
    render() {
      return this.state.error !== void 0
        ? O.createElement(
            Je.Provider,
            { value: this.props.routeContext },
            O.createElement(Gf.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function wv({ routeContext: n, match: c, children: f }) {
  let r = O.useContext(Pa);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (c.route.errorElement || c.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = c.route.id),
    O.createElement(Je.Provider, { value: n }, f)
  );
}
function Bv(n, c = [], f = null, r = null, o = null) {
  if (n == null) {
    if (!f) return null;
    if (f.errors) n = f.matches;
    else if (c.length === 0 && !f.initialized && f.matches.length > 0)
      n = f.matches;
    else return null;
  }
  let d = n,
    h = f?.errors;
  if (h != null) {
    let y = d.findIndex((g) => g.route.id && h?.[g.route.id] !== void 0);
    Nt(
      y >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        h
      ).join(",")}`
    ),
      (d = d.slice(0, Math.min(d.length, y + 1)));
  }
  let p = !1,
    v = -1;
  if (f)
    for (let y = 0; y < d.length; y++) {
      let g = d[y];
      if (
        ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (v = y),
        g.route.id)
      ) {
        let { loaderData: T, errors: H } = f,
          G =
            g.route.loader &&
            !T.hasOwnProperty(g.route.id) &&
            (!H || H[g.route.id] === void 0);
        if (g.route.lazy || G) {
          (p = !0), v >= 0 ? (d = d.slice(0, v + 1)) : (d = [d[0]]);
          break;
        }
      }
    }
  return d.reduceRight((y, g, T) => {
    let H,
      G = !1,
      C = null,
      L = null;
    f &&
      ((H = h && g.route.id ? h[g.route.id] : void 0),
      (C = g.route.errorElement || Hv),
      p &&
        (v < 0 && T === 0
          ? (Ym(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (G = !0),
            (L = null))
          : v === T &&
            ((G = !0), (L = g.route.hydrateFallbackElement || null))));
    let U = c.concat(d.slice(0, T + 1)),
      q = () => {
        let X;
        return (
          H
            ? (X = C)
            : G
            ? (X = L)
            : g.route.Component
            ? (X = O.createElement(g.route.Component, null))
            : g.route.element
            ? (X = g.route.element)
            : (X = y),
          O.createElement(wv, {
            match: g,
            routeContext: { outlet: y, matches: U, isDataRoute: f != null },
            children: X,
          })
        );
      };
    return f && (g.route.ErrorBoundary || g.route.errorElement || T === 0)
      ? O.createElement(jv, {
          location: f.location,
          revalidation: f.revalidation,
          component: C,
          error: H,
          children: q(),
          routeContext: { outlet: null, matches: U, isDataRoute: !0 },
          unstable_onError: r,
        })
      : q();
  }, null);
}
function Xf(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Lv(n) {
  let c = O.useContext(Pa);
  return Nt(c, Xf(n)), c;
}
function qv(n) {
  let c = O.useContext(Xi);
  return Nt(c, Xf(n)), c;
}
function Yv(n) {
  let c = O.useContext(Je);
  return Nt(c, Xf(n)), c;
}
function Qf(n) {
  let c = Yv(n),
    f = c.matches[c.matches.length - 1];
  return (
    Nt(
      f.route.id,
      `${n} can only be used on routes that contain a unique "id"`
    ),
    f.route.id
  );
}
function Gv() {
  return Qf("useRouteId");
}
function Xv() {
  let n = O.useContext(Gf),
    c = qv("useRouteError"),
    f = Qf("useRouteError");
  return n !== void 0 ? n : c.errors?.[f];
}
function Qv() {
  let { router: n } = Lv("useNavigate"),
    c = Qf("useNavigate"),
    f = O.useRef(!1);
  return (
    Lm(() => {
      f.current = !0;
    }),
    O.useCallback(
      async (o, d = {}) => {
        Le(f.current, Bm),
          f.current &&
            (typeof o == "number"
              ? n.navigate(o)
              : await n.navigate(o, { fromRouteId: c, ...d }));
      },
      [n, c]
    )
  );
}
var om = {};
function Ym(n, c, f) {
  !c && !om[n] && ((om[n] = !0), Le(!1, f));
}
O.memo(Vv);
function Vv({ routes: n, future: c, state: f, unstable_onError: r }) {
  return qm(n, void 0, f, r, c);
}
function Of({ to: n, replace: c, state: f, relative: r }) {
  Nt(
    Ia(),
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: o } = O.useContext(qe);
  Le(
    !o,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: d } = O.useContext(Je),
    { pathname: h } = Xl(),
    p = au(),
    v = Yf(n, qf(d), h, r === "path"),
    y = JSON.stringify(v);
  return (
    O.useEffect(() => {
      p(JSON.parse(y), { replace: c, state: f, relative: r });
    }, [p, y, r, c, f]),
    null
  );
}
function Mi(n) {
  Nt(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Zv({
  basename: n = "/",
  children: c = null,
  location: f,
  navigationType: r = "POP",
  navigator: o,
  static: d = !1,
}) {
  Nt(
    !Ia(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let h = n.replace(/^\/*/, "/"),
    p = O.useMemo(
      () => ({ basename: h, navigator: o, static: d, future: {} }),
      [h, o, d]
    );
  typeof f == "string" && (f = Wa(f));
  let {
      pathname: v = "/",
      search: y = "",
      hash: g = "",
      state: T = null,
      key: H = "default",
    } = f,
    G = O.useMemo(() => {
      let C = ml(v, h);
      return C == null
        ? null
        : {
            location: { pathname: C, search: y, hash: g, state: T, key: H },
            navigationType: r,
          };
    }, [h, v, y, g, T, H, r]);
  return (
    Le(
      G != null,
      `<Router basename="${h}"> is not able to match the URL "${v}${y}${g}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    G == null
      ? null
      : O.createElement(
          qe.Provider,
          { value: p },
          O.createElement(lu.Provider, { children: c, value: G })
        )
  );
}
function Kv({ children: n, location: c }) {
  return Mv(Nf(n), c);
}
function Nf(n, c = []) {
  let f = [];
  return (
    O.Children.forEach(n, (r, o) => {
      if (!O.isValidElement(r)) return;
      let d = [...c, o];
      if (r.type === O.Fragment) {
        f.push.apply(f, Nf(r.props.children, d));
        return;
      }
      Nt(
        r.type === Mi,
        `[${
          typeof r.type == "string" ? r.type : r.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Nt(
          !r.props.index || !r.props.children,
          "An index route cannot have child routes."
        );
      let h = {
        id: r.props.id || d.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        middleware: r.props.middleware,
        loader: r.props.loader,
        action: r.props.action,
        hydrateFallbackElement: r.props.hydrateFallbackElement,
        HydrateFallback: r.props.HydrateFallback,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.hasErrorBoundary === !0 ||
          r.props.ErrorBoundary != null ||
          r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (h.children = Nf(r.props.children, d)), f.push(h);
    }),
    f
  );
}
var Ui = "get",
  Hi = "application/x-www-form-urlencoded";
function Qi(n) {
  return n != null && typeof n.tagName == "string";
}
function Jv(n) {
  return Qi(n) && n.tagName.toLowerCase() === "button";
}
function $v(n) {
  return Qi(n) && n.tagName.toLowerCase() === "form";
}
function Fv(n) {
  return Qi(n) && n.tagName.toLowerCase() === "input";
}
function kv(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function Wv(n, c) {
  return n.button === 0 && (!c || c === "_self") && !kv(n);
}
var Ci = null;
function Pv() {
  if (Ci === null)
    try {
      new FormData(document.createElement("form"), 0), (Ci = !1);
    } catch {
      Ci = !0;
    }
  return Ci;
}
var Iv = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Rf(n) {
  return n != null && !Iv.has(n)
    ? (Le(
        !1,
        `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Hi}"`
      ),
      null)
    : n;
}
function tg(n, c) {
  let f, r, o, d, h;
  if ($v(n)) {
    let p = n.getAttribute("action");
    (r = p ? ml(p, c) : null),
      (f = n.getAttribute("method") || Ui),
      (o = Rf(n.getAttribute("enctype")) || Hi),
      (d = new FormData(n));
  } else if (Jv(n) || (Fv(n) && (n.type === "submit" || n.type === "image"))) {
    let p = n.form;
    if (p == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let v = n.getAttribute("formaction") || p.getAttribute("action");
    if (
      ((r = v ? ml(v, c) : null),
      (f = n.getAttribute("formmethod") || p.getAttribute("method") || Ui),
      (o =
        Rf(n.getAttribute("formenctype")) ||
        Rf(p.getAttribute("enctype")) ||
        Hi),
      (d = new FormData(p, n)),
      !Pv())
    ) {
      let { name: y, type: g, value: T } = n;
      if (g === "image") {
        let H = y ? `${y}.` : "";
        d.append(`${H}x`, "0"), d.append(`${H}y`, "0");
      } else y && d.append(y, T);
    }
  } else {
    if (Qi(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (f = Ui), (r = null), (o = Hi), (h = n);
  }
  return (
    d && o === "text/plain" && ((h = d), (d = void 0)),
    { action: r, method: f.toLowerCase(), encType: o, formData: d, body: h }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Vf(n, c) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(c);
}
function eg(n, c, f) {
  let r =
    typeof n == "string"
      ? new URL(
          n,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : n;
  return (
    r.pathname === "/"
      ? (r.pathname = `_root.${f}`)
      : c && ml(r.pathname, c) === "/"
      ? (r.pathname = `${c.replace(/\/$/, "")}/_root.${f}`)
      : (r.pathname = `${r.pathname.replace(/\/$/, "")}.${f}`),
    r
  );
}
async function lg(n, c) {
  if (n.id in c) return c[n.id];
  try {
    let f = await import(n.module);
    return (c[n.id] = f), f;
  } catch (f) {
    return (
      console.error(
        `Error loading route module \`${n.module}\`, reloading page...`
      ),
      console.error(f),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function ag(n) {
  return n == null
    ? !1
    : n.href == null
    ? n.rel === "preload" &&
      typeof n.imageSrcSet == "string" &&
      typeof n.imageSizes == "string"
    : typeof n.rel == "string" && typeof n.href == "string";
}
async function ng(n, c, f) {
  let r = await Promise.all(
    n.map(async (o) => {
      let d = c.routes[o.route.id];
      if (d) {
        let h = await lg(d, f);
        return h.links ? h.links() : [];
      }
      return [];
    })
  );
  return rg(
    r
      .flat(1)
      .filter(ag)
      .filter((o) => o.rel === "stylesheet" || o.rel === "preload")
      .map((o) =>
        o.rel === "stylesheet"
          ? { ...o, rel: "prefetch", as: "style" }
          : { ...o, rel: "prefetch" }
      )
  );
}
function dm(n, c, f, r, o, d) {
  let h = (v, y) => (f[y] ? v.route.id !== f[y].route.id : !0),
    p = (v, y) =>
      f[y].pathname !== v.pathname ||
      (f[y].route.path?.endsWith("*") && f[y].params["*"] !== v.params["*"]);
  return d === "assets"
    ? c.filter((v, y) => h(v, y) || p(v, y))
    : d === "data"
    ? c.filter((v, y) => {
        let g = r.routes[v.route.id];
        if (!g || !g.hasLoader) return !1;
        if (h(v, y) || p(v, y)) return !0;
        if (v.route.shouldRevalidate) {
          let T = v.route.shouldRevalidate({
            currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
            currentParams: f[0]?.params || {},
            nextUrl: new URL(n, window.origin),
            nextParams: v.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof T == "boolean") return T;
        }
        return !0;
      })
    : [];
}
function ug(n, c, { includeHydrateFallback: f } = {}) {
  return ig(
    n
      .map((r) => {
        let o = c.routes[r.route.id];
        if (!o) return [];
        let d = [o.module];
        return (
          o.clientActionModule && (d = d.concat(o.clientActionModule)),
          o.clientLoaderModule && (d = d.concat(o.clientLoaderModule)),
          f &&
            o.hydrateFallbackModule &&
            (d = d.concat(o.hydrateFallbackModule)),
          o.imports && (d = d.concat(o.imports)),
          d
        );
      })
      .flat(1)
  );
}
function ig(n) {
  return [...new Set(n)];
}
function cg(n) {
  let c = {},
    f = Object.keys(n).sort();
  for (let r of f) c[r] = n[r];
  return c;
}
function rg(n, c) {
  let f = new Set();
  return (
    new Set(c),
    n.reduce((r, o) => {
      let d = JSON.stringify(cg(o));
      return f.has(d) || (f.add(d), r.push({ key: d, link: o })), r;
    }, [])
  );
}
function Gm() {
  let n = O.useContext(Pa);
  return (
    Vf(
      n,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    n
  );
}
function fg() {
  let n = O.useContext(Xi);
  return (
    Vf(
      n,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    n
  );
}
var Zf = O.createContext(void 0);
Zf.displayName = "FrameworkContext";
function Xm() {
  let n = O.useContext(Zf);
  return (
    Vf(n, "You must render this element inside a <HydratedRouter> element"), n
  );
}
function sg(n, c) {
  let f = O.useContext(Zf),
    [r, o] = O.useState(!1),
    [d, h] = O.useState(!1),
    {
      onFocus: p,
      onBlur: v,
      onMouseEnter: y,
      onMouseLeave: g,
      onTouchStart: T,
    } = c,
    H = O.useRef(null);
  O.useEffect(() => {
    if ((n === "render" && h(!0), n === "viewport")) {
      let L = (q) => {
          q.forEach((X) => {
            h(X.isIntersecting);
          });
        },
        U = new IntersectionObserver(L, { threshold: 0.5 });
      return (
        H.current && U.observe(H.current),
        () => {
          U.disconnect();
        }
      );
    }
  }, [n]),
    O.useEffect(() => {
      if (r) {
        let L = setTimeout(() => {
          h(!0);
        }, 100);
        return () => {
          clearTimeout(L);
        };
      }
    }, [r]);
  let G = () => {
      o(!0);
    },
    C = () => {
      o(!1), h(!1);
    };
  return f
    ? n !== "intent"
      ? [d, H, {}]
      : [
          d,
          H,
          {
            onFocus: Pn(p, G),
            onBlur: Pn(v, C),
            onMouseEnter: Pn(y, G),
            onMouseLeave: Pn(g, C),
            onTouchStart: Pn(T, G),
          },
        ]
    : [!1, H, {}];
}
function Pn(n, c) {
  return (f) => {
    n && n(f), f.defaultPrevented || c(f);
  };
}
function og({ page: n, ...c }) {
  let { router: f } = Gm(),
    r = O.useMemo(() => Mm(f.routes, n, f.basename), [f.routes, n, f.basename]);
  return r ? O.createElement(hg, { page: n, matches: r, ...c }) : null;
}
function dg(n) {
  let { manifest: c, routeModules: f } = Xm(),
    [r, o] = O.useState([]);
  return (
    O.useEffect(() => {
      let d = !1;
      return (
        ng(n, c, f).then((h) => {
          d || o(h);
        }),
        () => {
          d = !0;
        }
      );
    }, [n, c, f]),
    r
  );
}
function hg({ page: n, matches: c, ...f }) {
  let r = Xl(),
    { manifest: o, routeModules: d } = Xm(),
    { basename: h } = Gm(),
    { loaderData: p, matches: v } = fg(),
    y = O.useMemo(() => dm(n, c, v, o, r, "data"), [n, c, v, o, r]),
    g = O.useMemo(() => dm(n, c, v, o, r, "assets"), [n, c, v, o, r]),
    T = O.useMemo(() => {
      if (n === r.pathname + r.search + r.hash) return [];
      let C = new Set(),
        L = !1;
      if (
        (c.forEach((q) => {
          let X = o.routes[q.route.id];
          !X ||
            !X.hasLoader ||
            ((!y.some((Z) => Z.route.id === q.route.id) &&
              q.route.id in p &&
              d[q.route.id]?.shouldRevalidate) ||
            X.hasClientLoader
              ? (L = !0)
              : C.add(q.route.id));
        }),
        C.size === 0)
      )
        return [];
      let U = eg(n, h, "data");
      return (
        L &&
          C.size > 0 &&
          U.searchParams.set(
            "_routes",
            c
              .filter((q) => C.has(q.route.id))
              .map((q) => q.route.id)
              .join(",")
          ),
        [U.pathname + U.search]
      );
    }, [h, p, r, o, y, c, n, d]),
    H = O.useMemo(() => ug(g, o), [g, o]),
    G = dg(g);
  return O.createElement(
    O.Fragment,
    null,
    T.map((C) =>
      O.createElement("link", {
        key: C,
        rel: "prefetch",
        as: "fetch",
        href: C,
        ...f,
      })
    ),
    H.map((C) =>
      O.createElement("link", { key: C, rel: "modulepreload", href: C, ...f })
    ),
    G.map(({ key: C, link: L }) =>
      O.createElement("link", { key: C, nonce: f.nonce, ...L })
    )
  );
}
function mg(...n) {
  return (c) => {
    n.forEach((f) => {
      typeof f == "function" ? f(c) : f != null && (f.current = c);
    });
  };
}
var Qm =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Qm && (window.__reactRouterVersion = "7.9.4");
} catch {}
function yg({ basename: n, children: c, window: f }) {
  let r = O.useRef();
  r.current == null && (r.current = av({ window: f, v5Compat: !0 }));
  let o = r.current,
    [d, h] = O.useState({ action: o.action, location: o.location }),
    p = O.useCallback(
      (v) => {
        O.startTransition(() => h(v));
      },
      [h]
    );
  return (
    O.useLayoutEffect(() => o.listen(p), [o, p]),
    O.createElement(Zv, {
      basename: n,
      children: c,
      location: d.location,
      navigationType: d.action,
      navigator: o,
    })
  );
}
var Vm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  tu = O.forwardRef(function (
    {
      onClick: c,
      discover: f = "render",
      prefetch: r = "none",
      relative: o,
      reloadDocument: d,
      replace: h,
      state: p,
      target: v,
      to: y,
      preventScrollReset: g,
      viewTransition: T,
      ...H
    },
    G
  ) {
    let { basename: C } = O.useContext(qe),
      L = typeof y == "string" && Vm.test(y),
      U,
      q = !1;
    if (typeof y == "string" && L && ((U = y), Qm))
      try {
        let Ot = new URL(window.location.href),
          Pt = y.startsWith("//") ? new URL(Ot.protocol + y) : new URL(y),
          It = ml(Pt.pathname, C);
        Pt.origin === Ot.origin && It != null
          ? (y = It + Pt.search + Pt.hash)
          : (q = !0);
      } catch {
        Le(
          !1,
          `<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let X = Nv(y, { relative: o }),
      [Z, I, ot] = sg(r, H),
      At = bg(y, {
        replace: h,
        state: p,
        target: v,
        preventScrollReset: g,
        relative: o,
        viewTransition: T,
      });
    function W(Ot) {
      c && c(Ot), Ot.defaultPrevented || At(Ot);
    }
    let Dt = O.createElement("a", {
      ...H,
      ...ot,
      href: U || X,
      onClick: q || d ? c : W,
      ref: mg(G, I),
      target: v,
      "data-discover": !L && f === "render" ? "true" : void 0,
    });
    return Z && !L
      ? O.createElement(O.Fragment, null, Dt, O.createElement(og, { page: X }))
      : Dt;
  });
tu.displayName = "Link";
var pg = O.forwardRef(function (
  {
    "aria-current": c = "page",
    caseSensitive: f = !1,
    className: r = "",
    end: o = !1,
    style: d,
    to: h,
    viewTransition: p,
    children: v,
    ...y
  },
  g
) {
  let T = nu(h, { relative: y.relative }),
    H = Xl(),
    G = O.useContext(Xi),
    { navigator: C, basename: L } = O.useContext(qe),
    U = G != null && Og(T) && p === !0,
    q = C.encodeLocation ? C.encodeLocation(T).pathname : T.pathname,
    X = H.pathname,
    Z =
      G && G.navigation && G.navigation.location
        ? G.navigation.location.pathname
        : null;
  f ||
    ((X = X.toLowerCase()),
    (Z = Z ? Z.toLowerCase() : null),
    (q = q.toLowerCase())),
    Z && L && (Z = ml(Z, L) || Z);
  const I = q !== "/" && q.endsWith("/") ? q.length - 1 : q.length;
  let ot = X === q || (!o && X.startsWith(q) && X.charAt(I) === "/"),
    At =
      Z != null &&
      (Z === q || (!o && Z.startsWith(q) && Z.charAt(q.length) === "/")),
    W = { isActive: ot, isPending: At, isTransitioning: U },
    Dt = ot ? c : void 0,
    Ot;
  typeof r == "function"
    ? (Ot = r(W))
    : (Ot = [
        r,
        ot ? "active" : null,
        At ? "pending" : null,
        U ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Pt = typeof d == "function" ? d(W) : d;
  return O.createElement(
    tu,
    {
      ...y,
      "aria-current": Dt,
      className: Ot,
      ref: g,
      style: Pt,
      to: h,
      viewTransition: p,
    },
    typeof v == "function" ? v(W) : v
  );
});
pg.displayName = "NavLink";
var vg = O.forwardRef(
  (
    {
      discover: n = "render",
      fetcherKey: c,
      navigate: f,
      reloadDocument: r,
      replace: o,
      state: d,
      method: h = Ui,
      action: p,
      onSubmit: v,
      relative: y,
      preventScrollReset: g,
      viewTransition: T,
      ...H
    },
    G
  ) => {
    let C = Tg(),
      L = Ag(p, { relative: y }),
      U = h.toLowerCase() === "get" ? "get" : "post",
      q = typeof p == "string" && Vm.test(p),
      X = (Z) => {
        if ((v && v(Z), Z.defaultPrevented)) return;
        Z.preventDefault();
        let I = Z.nativeEvent.submitter,
          ot = I?.getAttribute("formmethod") || h;
        C(I || Z.currentTarget, {
          fetcherKey: c,
          method: ot,
          navigate: f,
          replace: o,
          state: d,
          relative: y,
          preventScrollReset: g,
          viewTransition: T,
        });
      };
    return O.createElement("form", {
      ref: G,
      method: U,
      action: L,
      onSubmit: r ? v : X,
      ...H,
      "data-discover": !q && n === "render" ? "true" : void 0,
    });
  }
);
vg.displayName = "Form";
function gg(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Zm(n) {
  let c = O.useContext(Pa);
  return Nt(c, gg(n)), c;
}
function bg(
  n,
  {
    target: c,
    replace: f,
    state: r,
    preventScrollReset: o,
    relative: d,
    viewTransition: h,
  } = {}
) {
  let p = au(),
    v = Xl(),
    y = nu(n, { relative: d });
  return O.useCallback(
    (g) => {
      if (Wv(g, c)) {
        g.preventDefault();
        let T = f !== void 0 ? f : eu(v) === eu(y);
        p(n, {
          replace: T,
          state: r,
          preventScrollReset: o,
          relative: d,
          viewTransition: h,
        });
      }
    },
    [v, p, y, f, r, c, n, o, d, h]
  );
}
var Sg = 0,
  Eg = () => `__${String(++Sg)}__`;
function Tg() {
  let { router: n } = Zm("useSubmit"),
    { basename: c } = O.useContext(qe),
    f = Gv();
  return O.useCallback(
    async (r, o = {}) => {
      let { action: d, method: h, encType: p, formData: v, body: y } = tg(r, c);
      if (o.navigate === !1) {
        let g = o.fetcherKey || Eg();
        await n.fetch(g, f, o.action || d, {
          preventScrollReset: o.preventScrollReset,
          formData: v,
          body: y,
          formMethod: o.method || h,
          formEncType: o.encType || p,
          flushSync: o.flushSync,
        });
      } else
        await n.navigate(o.action || d, {
          preventScrollReset: o.preventScrollReset,
          formData: v,
          body: y,
          formMethod: o.method || h,
          formEncType: o.encType || p,
          replace: o.replace,
          state: o.state,
          fromRouteId: f,
          flushSync: o.flushSync,
          viewTransition: o.viewTransition,
        });
    },
    [n, c, f]
  );
}
function Ag(n, { relative: c } = {}) {
  let { basename: f } = O.useContext(qe),
    r = O.useContext(Je);
  Nt(r, "useFormAction must be used inside a RouteContext");
  let [o] = r.matches.slice(-1),
    d = { ...nu(n || ".", { relative: c }) },
    h = Xl();
  if (n == null) {
    d.search = h.search;
    let p = new URLSearchParams(d.search),
      v = p.getAll("index");
    if (v.some((g) => g === "")) {
      p.delete("index"),
        v.filter((T) => T).forEach((T) => p.append("index", T));
      let g = p.toString();
      d.search = g ? `?${g}` : "";
    }
  }
  return (
    (!n || n === ".") &&
      o.route.index &&
      (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"),
    f !== "/" && (d.pathname = d.pathname === "/" ? f : hl([f, d.pathname])),
    eu(d)
  );
}
function Og(n, { relative: c } = {}) {
  let f = O.useContext(wm);
  Nt(
    f != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: r } = Zm("useViewTransitionState"),
    o = nu(n, { relative: c });
  if (!f.isTransitioning) return !1;
  let d = ml(f.currentLocation.pathname, r) || f.currentLocation.pathname,
    h = ml(f.nextLocation.pathname, r) || f.nextLocation.pathname;
  return qi(o.pathname, h) != null || qi(o.pathname, d) != null;
}
function Km(n, c) {
  return function () {
    return n.apply(c, arguments);
  };
}
const { toString: Rg } = Object.prototype,
  { getPrototypeOf: Kf } = Object,
  { iterator: Vi, toStringTag: Jm } = Symbol,
  Zi = ((n) => (c) => {
    const f = Rg.call(c);
    return n[f] || (n[f] = f.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ye = (n) => ((n = n.toLowerCase()), (c) => Zi(c) === n),
  Ki = (n) => (c) => typeof c === n,
  { isArray: tn } = Array,
  ka = Ki("undefined");
function uu(n) {
  return (
    n !== null &&
    !ka(n) &&
    n.constructor !== null &&
    !ka(n.constructor) &&
    de(n.constructor.isBuffer) &&
    n.constructor.isBuffer(n)
  );
}
const $m = Ye("ArrayBuffer");
function zg(n) {
  let c;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (c = ArrayBuffer.isView(n))
      : (c = n && n.buffer && $m(n.buffer)),
    c
  );
}
const xg = Ki("string"),
  de = Ki("function"),
  Fm = Ki("number"),
  iu = (n) => n !== null && typeof n == "object",
  Cg = (n) => n === !0 || n === !1,
  ji = (n) => {
    if (Zi(n) !== "object") return !1;
    const c = Kf(n);
    return (
      (c === null ||
        c === Object.prototype ||
        Object.getPrototypeOf(c) === null) &&
      !(Jm in n) &&
      !(Vi in n)
    );
  },
  _g = (n) => {
    if (!iu(n) || uu(n)) return !1;
    try {
      return (
        Object.keys(n).length === 0 &&
        Object.getPrototypeOf(n) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  Ng = Ye("Date"),
  Dg = Ye("File"),
  Mg = Ye("Blob"),
  Ug = Ye("FileList"),
  Hg = (n) => iu(n) && de(n.pipe),
  jg = (n) => {
    let c;
    return (
      n &&
      ((typeof FormData == "function" && n instanceof FormData) ||
        (de(n.append) &&
          ((c = Zi(n)) === "formdata" ||
            (c === "object" &&
              de(n.toString) &&
              n.toString() === "[object FormData]"))))
    );
  },
  wg = Ye("URLSearchParams"),
  [Bg, Lg, qg, Yg] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Ye
  ),
  Gg = (n) =>
    n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function cu(n, c, { allOwnKeys: f = !1 } = {}) {
  if (n === null || typeof n > "u") return;
  let r, o;
  if ((typeof n != "object" && (n = [n]), tn(n)))
    for (r = 0, o = n.length; r < o; r++) c.call(null, n[r], r, n);
  else {
    if (uu(n)) return;
    const d = f ? Object.getOwnPropertyNames(n) : Object.keys(n),
      h = d.length;
    let p;
    for (r = 0; r < h; r++) (p = d[r]), c.call(null, n[p], p, n);
  }
}
function km(n, c) {
  if (uu(n)) return null;
  c = c.toLowerCase();
  const f = Object.keys(n);
  let r = f.length,
    o;
  for (; r-- > 0; ) if (((o = f[r]), c === o.toLowerCase())) return o;
  return null;
}
const fa =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Wm = (n) => !ka(n) && n !== fa;
function Df() {
  const { caseless: n, skipUndefined: c } = (Wm(this) && this) || {},
    f = {},
    r = (o, d) => {
      const h = (n && km(f, d)) || d;
      ji(f[h]) && ji(o)
        ? (f[h] = Df(f[h], o))
        : ji(o)
        ? (f[h] = Df({}, o))
        : tn(o)
        ? (f[h] = o.slice())
        : (!c || !ka(o)) && (f[h] = o);
    };
  for (let o = 0, d = arguments.length; o < d; o++)
    arguments[o] && cu(arguments[o], r);
  return f;
}
const Xg = (n, c, f, { allOwnKeys: r } = {}) => (
    cu(
      c,
      (o, d) => {
        f && de(o) ? (n[d] = Km(o, f)) : (n[d] = o);
      },
      { allOwnKeys: r }
    ),
    n
  ),
  Qg = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n),
  Vg = (n, c, f, r) => {
    (n.prototype = Object.create(c.prototype, r)),
      (n.prototype.constructor = n),
      Object.defineProperty(n, "super", { value: c.prototype }),
      f && Object.assign(n.prototype, f);
  },
  Zg = (n, c, f, r) => {
    let o, d, h;
    const p = {};
    if (((c = c || {}), n == null)) return c;
    do {
      for (o = Object.getOwnPropertyNames(n), d = o.length; d-- > 0; )
        (h = o[d]), (!r || r(h, n, c)) && !p[h] && ((c[h] = n[h]), (p[h] = !0));
      n = f !== !1 && Kf(n);
    } while (n && (!f || f(n, c)) && n !== Object.prototype);
    return c;
  },
  Kg = (n, c, f) => {
    (n = String(n)),
      (f === void 0 || f > n.length) && (f = n.length),
      (f -= c.length);
    const r = n.indexOf(c, f);
    return r !== -1 && r === f;
  },
  Jg = (n) => {
    if (!n) return null;
    if (tn(n)) return n;
    let c = n.length;
    if (!Fm(c)) return null;
    const f = new Array(c);
    for (; c-- > 0; ) f[c] = n[c];
    return f;
  },
  $g = (
    (n) => (c) =>
      n && c instanceof n
  )(typeof Uint8Array < "u" && Kf(Uint8Array)),
  Fg = (n, c) => {
    const r = (n && n[Vi]).call(n);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const d = o.value;
      c.call(n, d[0], d[1]);
    }
  },
  kg = (n, c) => {
    let f;
    const r = [];
    for (; (f = n.exec(c)) !== null; ) r.push(f);
    return r;
  },
  Wg = Ye("HTMLFormElement"),
  Pg = (n) =>
    n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (f, r, o) {
      return r.toUpperCase() + o;
    }),
  hm = (
    ({ hasOwnProperty: n }) =>
    (c, f) =>
      n.call(c, f)
  )(Object.prototype),
  Ig = Ye("RegExp"),
  Pm = (n, c) => {
    const f = Object.getOwnPropertyDescriptors(n),
      r = {};
    cu(f, (o, d) => {
      let h;
      (h = c(o, d, n)) !== !1 && (r[d] = h || o);
    }),
      Object.defineProperties(n, r);
  },
  t1 = (n) => {
    Pm(n, (c, f) => {
      if (de(n) && ["arguments", "caller", "callee"].indexOf(f) !== -1)
        return !1;
      const r = n[f];
      if (de(r)) {
        if (((c.enumerable = !1), "writable" in c)) {
          c.writable = !1;
          return;
        }
        c.set ||
          (c.set = () => {
            throw Error("Can not rewrite read-only method '" + f + "'");
          });
      }
    });
  },
  e1 = (n, c) => {
    const f = {},
      r = (o) => {
        o.forEach((d) => {
          f[d] = !0;
        });
      };
    return tn(n) ? r(n) : r(String(n).split(c)), f;
  },
  l1 = () => {},
  a1 = (n, c) => (n != null && Number.isFinite((n = +n)) ? n : c);
function n1(n) {
  return !!(n && de(n.append) && n[Jm] === "FormData" && n[Vi]);
}
const u1 = (n) => {
    const c = new Array(10),
      f = (r, o) => {
        if (iu(r)) {
          if (c.indexOf(r) >= 0) return;
          if (uu(r)) return r;
          if (!("toJSON" in r)) {
            c[o] = r;
            const d = tn(r) ? [] : {};
            return (
              cu(r, (h, p) => {
                const v = f(h, o + 1);
                !ka(v) && (d[p] = v);
              }),
              (c[o] = void 0),
              d
            );
          }
        }
        return r;
      };
    return f(n, 0);
  },
  i1 = Ye("AsyncFunction"),
  c1 = (n) => n && (iu(n) || de(n)) && de(n.then) && de(n.catch),
  Im = ((n, c) =>
    n
      ? setImmediate
      : c
      ? ((f, r) => (
          fa.addEventListener(
            "message",
            ({ source: o, data: d }) => {
              o === fa && d === f && r.length && r.shift()();
            },
            !1
          ),
          (o) => {
            r.push(o), fa.postMessage(f, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (f) => setTimeout(f))(
    typeof setImmediate == "function",
    de(fa.postMessage)
  ),
  r1 =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(fa)
      : (typeof process < "u" && process.nextTick) || Im,
  f1 = (n) => n != null && de(n[Vi]),
  _ = {
    isArray: tn,
    isArrayBuffer: $m,
    isBuffer: uu,
    isFormData: jg,
    isArrayBufferView: zg,
    isString: xg,
    isNumber: Fm,
    isBoolean: Cg,
    isObject: iu,
    isPlainObject: ji,
    isEmptyObject: _g,
    isReadableStream: Bg,
    isRequest: Lg,
    isResponse: qg,
    isHeaders: Yg,
    isUndefined: ka,
    isDate: Ng,
    isFile: Dg,
    isBlob: Mg,
    isRegExp: Ig,
    isFunction: de,
    isStream: Hg,
    isURLSearchParams: wg,
    isTypedArray: $g,
    isFileList: Ug,
    forEach: cu,
    merge: Df,
    extend: Xg,
    trim: Gg,
    stripBOM: Qg,
    inherits: Vg,
    toFlatObject: Zg,
    kindOf: Zi,
    kindOfTest: Ye,
    endsWith: Kg,
    toArray: Jg,
    forEachEntry: Fg,
    matchAll: kg,
    isHTMLForm: Wg,
    hasOwnProperty: hm,
    hasOwnProp: hm,
    reduceDescriptors: Pm,
    freezeMethods: t1,
    toObjectSet: e1,
    toCamelCase: Pg,
    noop: l1,
    toFiniteNumber: a1,
    findKey: km,
    global: fa,
    isContextDefined: Wm,
    isSpecCompliantForm: n1,
    toJSONObject: u1,
    isAsyncFn: i1,
    isThenable: c1,
    setImmediate: Im,
    asap: r1,
    isIterable: f1,
  };
function at(n, c, f, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = n),
    (this.name = "AxiosError"),
    c && (this.code = c),
    f && (this.config = f),
    r && (this.request = r),
    o && ((this.response = o), (this.status = o.status ? o.status : null));
}
_.inherits(at, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: _.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const ty = at.prototype,
  ey = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((n) => {
  ey[n] = { value: n };
});
Object.defineProperties(at, ey);
Object.defineProperty(ty, "isAxiosError", { value: !0 });
at.from = (n, c, f, r, o, d) => {
  const h = Object.create(ty);
  _.toFlatObject(
    n,
    h,
    function (g) {
      return g !== Error.prototype;
    },
    (y) => y !== "isAxiosError"
  );
  const p = n && n.message ? n.message : "Error",
    v = c == null && n ? n.code : c;
  return (
    at.call(h, p, v, f, r, o),
    n &&
      h.cause == null &&
      Object.defineProperty(h, "cause", { value: n, configurable: !0 }),
    (h.name = (n && n.name) || "Error"),
    d && Object.assign(h, d),
    h
  );
};
const s1 = null;
function Mf(n) {
  return _.isPlainObject(n) || _.isArray(n);
}
function ly(n) {
  return _.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function mm(n, c, f) {
  return n
    ? n
        .concat(c)
        .map(function (o, d) {
          return (o = ly(o)), !f && d ? "[" + o + "]" : o;
        })
        .join(f ? "." : "")
    : c;
}
function o1(n) {
  return _.isArray(n) && !n.some(Mf);
}
const d1 = _.toFlatObject(_, {}, null, function (c) {
  return /^is[A-Z]/.test(c);
});
function Ji(n, c, f) {
  if (!_.isObject(n)) throw new TypeError("target must be an object");
  (c = c || new FormData()),
    (f = _.toFlatObject(
      f,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (L, U) {
        return !_.isUndefined(U[L]);
      }
    ));
  const r = f.metaTokens,
    o = f.visitor || g,
    d = f.dots,
    h = f.indexes,
    v = (f.Blob || (typeof Blob < "u" && Blob)) && _.isSpecCompliantForm(c);
  if (!_.isFunction(o)) throw new TypeError("visitor must be a function");
  function y(C) {
    if (C === null) return "";
    if (_.isDate(C)) return C.toISOString();
    if (_.isBoolean(C)) return C.toString();
    if (!v && _.isBlob(C))
      throw new at("Blob is not supported. Use a Buffer instead.");
    return _.isArrayBuffer(C) || _.isTypedArray(C)
      ? v && typeof Blob == "function"
        ? new Blob([C])
        : Buffer.from(C)
      : C;
  }
  function g(C, L, U) {
    let q = C;
    if (C && !U && typeof C == "object") {
      if (_.endsWith(L, "{}"))
        (L = r ? L : L.slice(0, -2)), (C = JSON.stringify(C));
      else if (
        (_.isArray(C) && o1(C)) ||
        ((_.isFileList(C) || _.endsWith(L, "[]")) && (q = _.toArray(C)))
      )
        return (
          (L = ly(L)),
          q.forEach(function (Z, I) {
            !(_.isUndefined(Z) || Z === null) &&
              c.append(
                h === !0 ? mm([L], I, d) : h === null ? L : L + "[]",
                y(Z)
              );
          }),
          !1
        );
    }
    return Mf(C) ? !0 : (c.append(mm(U, L, d), y(C)), !1);
  }
  const T = [],
    H = Object.assign(d1, {
      defaultVisitor: g,
      convertValue: y,
      isVisitable: Mf,
    });
  function G(C, L) {
    if (!_.isUndefined(C)) {
      if (T.indexOf(C) !== -1)
        throw Error("Circular reference detected in " + L.join("."));
      T.push(C),
        _.forEach(C, function (q, X) {
          (!(_.isUndefined(q) || q === null) &&
            o.call(c, q, _.isString(X) ? X.trim() : X, L, H)) === !0 &&
            G(q, L ? L.concat(X) : [X]);
        }),
        T.pop();
    }
  }
  if (!_.isObject(n)) throw new TypeError("data must be an object");
  return G(n), c;
}
function ym(n) {
  const c = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function (r) {
    return c[r];
  });
}
function Jf(n, c) {
  (this._pairs = []), n && Ji(n, this, c);
}
const ay = Jf.prototype;
ay.append = function (c, f) {
  this._pairs.push([c, f]);
};
ay.toString = function (c) {
  const f = c
    ? function (r) {
        return c.call(this, r, ym);
      }
    : ym;
  return this._pairs
    .map(function (o) {
      return f(o[0]) + "=" + f(o[1]);
    }, "")
    .join("&");
};
function h1(n) {
  return encodeURIComponent(n)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+");
}
function ny(n, c, f) {
  if (!c) return n;
  const r = (f && f.encode) || h1;
  _.isFunction(f) && (f = { serialize: f });
  const o = f && f.serialize;
  let d;
  if (
    (o
      ? (d = o(c, f))
      : (d = _.isURLSearchParams(c) ? c.toString() : new Jf(c, f).toString(r)),
    d)
  ) {
    const h = n.indexOf("#");
    h !== -1 && (n = n.slice(0, h)),
      (n += (n.indexOf("?") === -1 ? "?" : "&") + d);
  }
  return n;
}
class pm {
  constructor() {
    this.handlers = [];
  }
  use(c, f, r) {
    return (
      this.handlers.push({
        fulfilled: c,
        rejected: f,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(c) {
    this.handlers[c] && (this.handlers[c] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(c) {
    _.forEach(this.handlers, function (r) {
      r !== null && c(r);
    });
  }
}
const uy = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  m1 = typeof URLSearchParams < "u" ? URLSearchParams : Jf,
  y1 = typeof FormData < "u" ? FormData : null,
  p1 = typeof Blob < "u" ? Blob : null,
  v1 = {
    isBrowser: !0,
    classes: { URLSearchParams: m1, FormData: y1, Blob: p1 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  $f = typeof window < "u" && typeof document < "u",
  Uf = (typeof navigator == "object" && navigator) || void 0,
  g1 =
    $f &&
    (!Uf || ["ReactNative", "NativeScript", "NS"].indexOf(Uf.product) < 0),
  b1 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  S1 = ($f && window.location.href) || "http://localhost",
  E1 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: $f,
        hasStandardBrowserEnv: g1,
        hasStandardBrowserWebWorkerEnv: b1,
        navigator: Uf,
        origin: S1,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ee = { ...E1, ...v1 };
function T1(n, c) {
  return Ji(n, new ee.classes.URLSearchParams(), {
    visitor: function (f, r, o, d) {
      return ee.isNode && _.isBuffer(f)
        ? (this.append(r, f.toString("base64")), !1)
        : d.defaultVisitor.apply(this, arguments);
    },
    ...c,
  });
}
function A1(n) {
  return _.matchAll(/\w+|\[(\w*)]/g, n).map((c) =>
    c[0] === "[]" ? "" : c[1] || c[0]
  );
}
function O1(n) {
  const c = {},
    f = Object.keys(n);
  let r;
  const o = f.length;
  let d;
  for (r = 0; r < o; r++) (d = f[r]), (c[d] = n[d]);
  return c;
}
function iy(n) {
  function c(f, r, o, d) {
    let h = f[d++];
    if (h === "__proto__") return !0;
    const p = Number.isFinite(+h),
      v = d >= f.length;
    return (
      (h = !h && _.isArray(o) ? o.length : h),
      v
        ? (_.hasOwnProp(o, h) ? (o[h] = [o[h], r]) : (o[h] = r), !p)
        : ((!o[h] || !_.isObject(o[h])) && (o[h] = []),
          c(f, r, o[h], d) && _.isArray(o[h]) && (o[h] = O1(o[h])),
          !p)
    );
  }
  if (_.isFormData(n) && _.isFunction(n.entries)) {
    const f = {};
    return (
      _.forEachEntry(n, (r, o) => {
        c(A1(r), o, f, 0);
      }),
      f
    );
  }
  return null;
}
function R1(n, c, f) {
  if (_.isString(n))
    try {
      return (c || JSON.parse)(n), _.trim(n);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (f || JSON.stringify)(n);
}
const ru = {
  transitional: uy,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (c, f) {
      const r = f.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        d = _.isObject(c);
      if ((d && _.isHTMLForm(c) && (c = new FormData(c)), _.isFormData(c)))
        return o ? JSON.stringify(iy(c)) : c;
      if (
        _.isArrayBuffer(c) ||
        _.isBuffer(c) ||
        _.isStream(c) ||
        _.isFile(c) ||
        _.isBlob(c) ||
        _.isReadableStream(c)
      )
        return c;
      if (_.isArrayBufferView(c)) return c.buffer;
      if (_.isURLSearchParams(c))
        return (
          f.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          c.toString()
        );
      let p;
      if (d) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return T1(c, this.formSerializer).toString();
        if ((p = _.isFileList(c)) || r.indexOf("multipart/form-data") > -1) {
          const v = this.env && this.env.FormData;
          return Ji(
            p ? { "files[]": c } : c,
            v && new v(),
            this.formSerializer
          );
        }
      }
      return d || o ? (f.setContentType("application/json", !1), R1(c)) : c;
    },
  ],
  transformResponse: [
    function (c) {
      const f = this.transitional || ru.transitional,
        r = f && f.forcedJSONParsing,
        o = this.responseType === "json";
      if (_.isResponse(c) || _.isReadableStream(c)) return c;
      if (c && _.isString(c) && ((r && !this.responseType) || o)) {
        const h = !(f && f.silentJSONParsing) && o;
        try {
          return JSON.parse(c, this.parseReviver);
        } catch (p) {
          if (h)
            throw p.name === "SyntaxError"
              ? at.from(p, at.ERR_BAD_RESPONSE, this, null, this.response)
              : p;
        }
      }
      return c;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: ee.classes.FormData, Blob: ee.classes.Blob },
  validateStatus: function (c) {
    return c >= 200 && c < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
_.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  ru.headers[n] = {};
});
const z1 = _.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  x1 = (n) => {
    const c = {};
    let f, r, o;
    return (
      n &&
        n
          .split(
            `
`
          )
          .forEach(function (h) {
            (o = h.indexOf(":")),
              (f = h.substring(0, o).trim().toLowerCase()),
              (r = h.substring(o + 1).trim()),
              !(!f || (c[f] && z1[f])) &&
                (f === "set-cookie"
                  ? c[f]
                    ? c[f].push(r)
                    : (c[f] = [r])
                  : (c[f] = c[f] ? c[f] + ", " + r : r));
          }),
      c
    );
  },
  vm = Symbol("internals");
function In(n) {
  return n && String(n).trim().toLowerCase();
}
function wi(n) {
  return n === !1 || n == null ? n : _.isArray(n) ? n.map(wi) : String(n);
}
function C1(n) {
  const c = Object.create(null),
    f = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = f.exec(n)); ) c[r[1]] = r[2];
  return c;
}
const _1 = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function zf(n, c, f, r, o) {
  if (_.isFunction(r)) return r.call(this, c, f);
  if ((o && (c = f), !!_.isString(c))) {
    if (_.isString(r)) return c.indexOf(r) !== -1;
    if (_.isRegExp(r)) return r.test(c);
  }
}
function N1(n) {
  return n
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (c, f, r) => f.toUpperCase() + r);
}
function D1(n, c) {
  const f = _.toCamelCase(" " + c);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(n, r + f, {
      value: function (o, d, h) {
        return this[r].call(this, c, o, d, h);
      },
      configurable: !0,
    });
  });
}
let he = class {
  constructor(c) {
    c && this.set(c);
  }
  set(c, f, r) {
    const o = this;
    function d(p, v, y) {
      const g = In(v);
      if (!g) throw new Error("header name must be a non-empty string");
      const T = _.findKey(o, g);
      (!T || o[T] === void 0 || y === !0 || (y === void 0 && o[T] !== !1)) &&
        (o[T || v] = wi(p));
    }
    const h = (p, v) => _.forEach(p, (y, g) => d(y, g, v));
    if (_.isPlainObject(c) || c instanceof this.constructor) h(c, f);
    else if (_.isString(c) && (c = c.trim()) && !_1(c)) h(x1(c), f);
    else if (_.isObject(c) && _.isIterable(c)) {
      let p = {},
        v,
        y;
      for (const g of c) {
        if (!_.isArray(g))
          throw TypeError("Object iterator must return a key-value pair");
        p[(y = g[0])] = (v = p[y])
          ? _.isArray(v)
            ? [...v, g[1]]
            : [v, g[1]]
          : g[1];
      }
      h(p, f);
    } else c != null && d(f, c, r);
    return this;
  }
  get(c, f) {
    if (((c = In(c)), c)) {
      const r = _.findKey(this, c);
      if (r) {
        const o = this[r];
        if (!f) return o;
        if (f === !0) return C1(o);
        if (_.isFunction(f)) return f.call(this, o, r);
        if (_.isRegExp(f)) return f.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(c, f) {
    if (((c = In(c)), c)) {
      const r = _.findKey(this, c);
      return !!(r && this[r] !== void 0 && (!f || zf(this, this[r], r, f)));
    }
    return !1;
  }
  delete(c, f) {
    const r = this;
    let o = !1;
    function d(h) {
      if (((h = In(h)), h)) {
        const p = _.findKey(r, h);
        p && (!f || zf(r, r[p], p, f)) && (delete r[p], (o = !0));
      }
    }
    return _.isArray(c) ? c.forEach(d) : d(c), o;
  }
  clear(c) {
    const f = Object.keys(this);
    let r = f.length,
      o = !1;
    for (; r--; ) {
      const d = f[r];
      (!c || zf(this, this[d], d, c, !0)) && (delete this[d], (o = !0));
    }
    return o;
  }
  normalize(c) {
    const f = this,
      r = {};
    return (
      _.forEach(this, (o, d) => {
        const h = _.findKey(r, d);
        if (h) {
          (f[h] = wi(o)), delete f[d];
          return;
        }
        const p = c ? N1(d) : String(d).trim();
        p !== d && delete f[d], (f[p] = wi(o)), (r[p] = !0);
      }),
      this
    );
  }
  concat(...c) {
    return this.constructor.concat(this, ...c);
  }
  toJSON(c) {
    const f = Object.create(null);
    return (
      _.forEach(this, (r, o) => {
        r != null && r !== !1 && (f[o] = c && _.isArray(r) ? r.join(", ") : r);
      }),
      f
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([c, f]) => c + ": " + f).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(c) {
    return c instanceof this ? c : new this(c);
  }
  static concat(c, ...f) {
    const r = new this(c);
    return f.forEach((o) => r.set(o)), r;
  }
  static accessor(c) {
    const r = (this[vm] = this[vm] = { accessors: {} }).accessors,
      o = this.prototype;
    function d(h) {
      const p = In(h);
      r[p] || (D1(o, h), (r[p] = !0));
    }
    return _.isArray(c) ? c.forEach(d) : d(c), this;
  }
};
he.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
_.reduceDescriptors(he.prototype, ({ value: n }, c) => {
  let f = c[0].toUpperCase() + c.slice(1);
  return {
    get: () => n,
    set(r) {
      this[f] = r;
    },
  };
});
_.freezeMethods(he);
function xf(n, c) {
  const f = this || ru,
    r = c || f,
    o = he.from(r.headers);
  let d = r.data;
  return (
    _.forEach(n, function (p) {
      d = p.call(f, d, o.normalize(), c ? c.status : void 0);
    }),
    o.normalize(),
    d
  );
}
function cy(n) {
  return !!(n && n.__CANCEL__);
}
function en(n, c, f) {
  at.call(this, n ?? "canceled", at.ERR_CANCELED, c, f),
    (this.name = "CanceledError");
}
_.inherits(en, at, { __CANCEL__: !0 });
function ry(n, c, f) {
  const r = f.config.validateStatus;
  !f.status || !r || r(f.status)
    ? n(f)
    : c(
        new at(
          "Request failed with status code " + f.status,
          [at.ERR_BAD_REQUEST, at.ERR_BAD_RESPONSE][
            Math.floor(f.status / 100) - 4
          ],
          f.config,
          f.request,
          f
        )
      );
}
function M1(n) {
  const c = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return (c && c[1]) || "";
}
function U1(n, c) {
  n = n || 10;
  const f = new Array(n),
    r = new Array(n);
  let o = 0,
    d = 0,
    h;
  return (
    (c = c !== void 0 ? c : 1e3),
    function (v) {
      const y = Date.now(),
        g = r[d];
      h || (h = y), (f[o] = v), (r[o] = y);
      let T = d,
        H = 0;
      for (; T !== o; ) (H += f[T++]), (T = T % n);
      if (((o = (o + 1) % n), o === d && (d = (d + 1) % n), y - h < c)) return;
      const G = g && y - g;
      return G ? Math.round((H * 1e3) / G) : void 0;
    }
  );
}
function H1(n, c) {
  let f = 0,
    r = 1e3 / c,
    o,
    d;
  const h = (y, g = Date.now()) => {
    (f = g), (o = null), d && (clearTimeout(d), (d = null)), n(...y);
  };
  return [
    (...y) => {
      const g = Date.now(),
        T = g - f;
      T >= r
        ? h(y, g)
        : ((o = y),
          d ||
            (d = setTimeout(() => {
              (d = null), h(o);
            }, r - T)));
    },
    () => o && h(o),
  ];
}
const Yi = (n, c, f = 3) => {
    let r = 0;
    const o = U1(50, 250);
    return H1((d) => {
      const h = d.loaded,
        p = d.lengthComputable ? d.total : void 0,
        v = h - r,
        y = o(v),
        g = h <= p;
      r = h;
      const T = {
        loaded: h,
        total: p,
        progress: p ? h / p : void 0,
        bytes: v,
        rate: y || void 0,
        estimated: y && p && g ? (p - h) / y : void 0,
        event: d,
        lengthComputable: p != null,
        [c ? "download" : "upload"]: !0,
      };
      n(T);
    }, f);
  },
  gm = (n, c) => {
    const f = n != null;
    return [(r) => c[0]({ lengthComputable: f, total: n, loaded: r }), c[1]];
  },
  bm =
    (n) =>
    (...c) =>
      _.asap(() => n(...c)),
  j1 = ee.hasStandardBrowserEnv
    ? ((n, c) => (f) => (
        (f = new URL(f, ee.origin)),
        n.protocol === f.protocol &&
          n.host === f.host &&
          (c || n.port === f.port)
      ))(
        new URL(ee.origin),
        ee.navigator && /(msie|trident)/i.test(ee.navigator.userAgent)
      )
    : () => !0,
  w1 = ee.hasStandardBrowserEnv
    ? {
        write(n, c, f, r, o, d) {
          const h = [n + "=" + encodeURIComponent(c)];
          _.isNumber(f) && h.push("expires=" + new Date(f).toGMTString()),
            _.isString(r) && h.push("path=" + r),
            _.isString(o) && h.push("domain=" + o),
            d === !0 && h.push("secure"),
            (document.cookie = h.join("; "));
        },
        read(n) {
          const c = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
          );
          return c ? decodeURIComponent(c[3]) : null;
        },
        remove(n) {
          this.write(n, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function B1(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function L1(n, c) {
  return c ? n.replace(/\/?\/$/, "") + "/" + c.replace(/^\/+/, "") : n;
}
function fy(n, c, f) {
  let r = !B1(c);
  return n && (r || f == !1) ? L1(n, c) : c;
}
const Sm = (n) => (n instanceof he ? { ...n } : n);
function oa(n, c) {
  c = c || {};
  const f = {};
  function r(y, g, T, H) {
    return _.isPlainObject(y) && _.isPlainObject(g)
      ? _.merge.call({ caseless: H }, y, g)
      : _.isPlainObject(g)
      ? _.merge({}, g)
      : _.isArray(g)
      ? g.slice()
      : g;
  }
  function o(y, g, T, H) {
    if (_.isUndefined(g)) {
      if (!_.isUndefined(y)) return r(void 0, y, T, H);
    } else return r(y, g, T, H);
  }
  function d(y, g) {
    if (!_.isUndefined(g)) return r(void 0, g);
  }
  function h(y, g) {
    if (_.isUndefined(g)) {
      if (!_.isUndefined(y)) return r(void 0, y);
    } else return r(void 0, g);
  }
  function p(y, g, T) {
    if (T in c) return r(y, g);
    if (T in n) return r(void 0, y);
  }
  const v = {
    url: d,
    method: d,
    data: d,
    baseURL: h,
    transformRequest: h,
    transformResponse: h,
    paramsSerializer: h,
    timeout: h,
    timeoutMessage: h,
    withCredentials: h,
    withXSRFToken: h,
    adapter: h,
    responseType: h,
    xsrfCookieName: h,
    xsrfHeaderName: h,
    onUploadProgress: h,
    onDownloadProgress: h,
    decompress: h,
    maxContentLength: h,
    maxBodyLength: h,
    beforeRedirect: h,
    transport: h,
    httpAgent: h,
    httpsAgent: h,
    cancelToken: h,
    socketPath: h,
    responseEncoding: h,
    validateStatus: p,
    headers: (y, g, T) => o(Sm(y), Sm(g), T, !0),
  };
  return (
    _.forEach(Object.keys({ ...n, ...c }), function (g) {
      const T = v[g] || o,
        H = T(n[g], c[g], g);
      (_.isUndefined(H) && T !== p) || (f[g] = H);
    }),
    f
  );
}
const sy = (n) => {
    const c = oa({}, n);
    let {
      data: f,
      withXSRFToken: r,
      xsrfHeaderName: o,
      xsrfCookieName: d,
      headers: h,
      auth: p,
    } = c;
    if (
      ((c.headers = h = he.from(h)),
      (c.url = ny(
        fy(c.baseURL, c.url, c.allowAbsoluteUrls),
        n.params,
        n.paramsSerializer
      )),
      p &&
        h.set(
          "Authorization",
          "Basic " +
            btoa(
              (p.username || "") +
                ":" +
                (p.password ? unescape(encodeURIComponent(p.password)) : "")
            )
        ),
      _.isFormData(f))
    ) {
      if (ee.hasStandardBrowserEnv || ee.hasStandardBrowserWebWorkerEnv)
        h.setContentType(void 0);
      else if (_.isFunction(f.getHeaders)) {
        const v = f.getHeaders(),
          y = ["content-type", "content-length"];
        Object.entries(v).forEach(([g, T]) => {
          y.includes(g.toLowerCase()) && h.set(g, T);
        });
      }
    }
    if (
      ee.hasStandardBrowserEnv &&
      (r && _.isFunction(r) && (r = r(c)), r || (r !== !1 && j1(c.url)))
    ) {
      const v = o && d && w1.read(d);
      v && h.set(o, v);
    }
    return c;
  },
  q1 = typeof XMLHttpRequest < "u",
  Y1 =
    q1 &&
    function (n) {
      return new Promise(function (f, r) {
        const o = sy(n);
        let d = o.data;
        const h = he.from(o.headers).normalize();
        let { responseType: p, onUploadProgress: v, onDownloadProgress: y } = o,
          g,
          T,
          H,
          G,
          C;
        function L() {
          G && G(),
            C && C(),
            o.cancelToken && o.cancelToken.unsubscribe(g),
            o.signal && o.signal.removeEventListener("abort", g);
        }
        let U = new XMLHttpRequest();
        U.open(o.method.toUpperCase(), o.url, !0), (U.timeout = o.timeout);
        function q() {
          if (!U) return;
          const Z = he.from(
              "getAllResponseHeaders" in U && U.getAllResponseHeaders()
            ),
            ot = {
              data:
                !p || p === "text" || p === "json"
                  ? U.responseText
                  : U.response,
              status: U.status,
              statusText: U.statusText,
              headers: Z,
              config: n,
              request: U,
            };
          ry(
            function (W) {
              f(W), L();
            },
            function (W) {
              r(W), L();
            },
            ot
          ),
            (U = null);
        }
        "onloadend" in U
          ? (U.onloadend = q)
          : (U.onreadystatechange = function () {
              !U ||
                U.readyState !== 4 ||
                (U.status === 0 &&
                  !(U.responseURL && U.responseURL.indexOf("file:") === 0)) ||
                setTimeout(q);
            }),
          (U.onabort = function () {
            U &&
              (r(new at("Request aborted", at.ECONNABORTED, n, U)), (U = null));
          }),
          (U.onerror = function (I) {
            const ot = I && I.message ? I.message : "Network Error",
              At = new at(ot, at.ERR_NETWORK, n, U);
            (At.event = I || null), r(At), (U = null);
          }),
          (U.ontimeout = function () {
            let I = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const ot = o.transitional || uy;
            o.timeoutErrorMessage && (I = o.timeoutErrorMessage),
              r(
                new at(
                  I,
                  ot.clarifyTimeoutError ? at.ETIMEDOUT : at.ECONNABORTED,
                  n,
                  U
                )
              ),
              (U = null);
          }),
          d === void 0 && h.setContentType(null),
          "setRequestHeader" in U &&
            _.forEach(h.toJSON(), function (I, ot) {
              U.setRequestHeader(ot, I);
            }),
          _.isUndefined(o.withCredentials) ||
            (U.withCredentials = !!o.withCredentials),
          p && p !== "json" && (U.responseType = o.responseType),
          y && (([H, C] = Yi(y, !0)), U.addEventListener("progress", H)),
          v &&
            U.upload &&
            (([T, G] = Yi(v)),
            U.upload.addEventListener("progress", T),
            U.upload.addEventListener("loadend", G)),
          (o.cancelToken || o.signal) &&
            ((g = (Z) => {
              U &&
                (r(!Z || Z.type ? new en(null, n, U) : Z),
                U.abort(),
                (U = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(g),
            o.signal &&
              (o.signal.aborted ? g() : o.signal.addEventListener("abort", g)));
        const X = M1(o.url);
        if (X && ee.protocols.indexOf(X) === -1) {
          r(new at("Unsupported protocol " + X + ":", at.ERR_BAD_REQUEST, n));
          return;
        }
        U.send(d || null);
      });
    },
  G1 = (n, c) => {
    const { length: f } = (n = n ? n.filter(Boolean) : []);
    if (c || f) {
      let r = new AbortController(),
        o;
      const d = function (y) {
        if (!o) {
          (o = !0), p();
          const g = y instanceof Error ? y : this.reason;
          r.abort(
            g instanceof at ? g : new en(g instanceof Error ? g.message : g)
          );
        }
      };
      let h =
        c &&
        setTimeout(() => {
          (h = null), d(new at(`timeout ${c} of ms exceeded`, at.ETIMEDOUT));
        }, c);
      const p = () => {
        n &&
          (h && clearTimeout(h),
          (h = null),
          n.forEach((y) => {
            y.unsubscribe
              ? y.unsubscribe(d)
              : y.removeEventListener("abort", d);
          }),
          (n = null));
      };
      n.forEach((y) => y.addEventListener("abort", d));
      const { signal: v } = r;
      return (v.unsubscribe = () => _.asap(p)), v;
    }
  },
  X1 = function* (n, c) {
    let f = n.byteLength;
    if (f < c) {
      yield n;
      return;
    }
    let r = 0,
      o;
    for (; r < f; ) (o = r + c), yield n.slice(r, o), (r = o);
  },
  Q1 = async function* (n, c) {
    for await (const f of V1(n)) yield* X1(f, c);
  },
  V1 = async function* (n) {
    if (n[Symbol.asyncIterator]) {
      yield* n;
      return;
    }
    const c = n.getReader();
    try {
      for (;;) {
        const { done: f, value: r } = await c.read();
        if (f) break;
        yield r;
      }
    } finally {
      await c.cancel();
    }
  },
  Em = (n, c, f, r) => {
    const o = Q1(n, c);
    let d = 0,
      h,
      p = (v) => {
        h || ((h = !0), r && r(v));
      };
    return new ReadableStream(
      {
        async pull(v) {
          try {
            const { done: y, value: g } = await o.next();
            if (y) {
              p(), v.close();
              return;
            }
            let T = g.byteLength;
            if (f) {
              let H = (d += T);
              f(H);
            }
            v.enqueue(new Uint8Array(g));
          } catch (y) {
            throw (p(y), y);
          }
        },
        cancel(v) {
          return p(v), o.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Tm = 64 * 1024,
  { isFunction: _i } = _,
  Z1 = (({ Request: n, Response: c }) => ({ Request: n, Response: c }))(
    _.global
  ),
  { ReadableStream: Am, TextEncoder: Om } = _.global,
  Rm = (n, ...c) => {
    try {
      return !!n(...c);
    } catch {
      return !1;
    }
  },
  K1 = (n) => {
    n = _.merge.call({ skipUndefined: !0 }, Z1, n);
    const { fetch: c, Request: f, Response: r } = n,
      o = c ? _i(c) : typeof fetch == "function",
      d = _i(f),
      h = _i(r);
    if (!o) return !1;
    const p = o && _i(Am),
      v =
        o &&
        (typeof Om == "function"
          ? (
              (C) => (L) =>
                C.encode(L)
            )(new Om())
          : async (C) => new Uint8Array(await new f(C).arrayBuffer())),
      y =
        d &&
        p &&
        Rm(() => {
          let C = !1;
          const L = new f(ee.origin, {
            body: new Am(),
            method: "POST",
            get duplex() {
              return (C = !0), "half";
            },
          }).headers.has("Content-Type");
          return C && !L;
        }),
      g = h && p && Rm(() => _.isReadableStream(new r("").body)),
      T = { stream: g && ((C) => C.body) };
    o &&
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((C) => {
        !T[C] &&
          (T[C] = (L, U) => {
            let q = L && L[C];
            if (q) return q.call(L);
            throw new at(
              `Response type '${C}' is not supported`,
              at.ERR_NOT_SUPPORT,
              U
            );
          });
      });
    const H = async (C) => {
        if (C == null) return 0;
        if (_.isBlob(C)) return C.size;
        if (_.isSpecCompliantForm(C))
          return (
            await new f(ee.origin, { method: "POST", body: C }).arrayBuffer()
          ).byteLength;
        if (_.isArrayBufferView(C) || _.isArrayBuffer(C)) return C.byteLength;
        if ((_.isURLSearchParams(C) && (C = C + ""), _.isString(C)))
          return (await v(C)).byteLength;
      },
      G = async (C, L) => {
        const U = _.toFiniteNumber(C.getContentLength());
        return U ?? H(L);
      };
    return async (C) => {
      let {
          url: L,
          method: U,
          data: q,
          signal: X,
          cancelToken: Z,
          timeout: I,
          onDownloadProgress: ot,
          onUploadProgress: At,
          responseType: W,
          headers: Dt,
          withCredentials: Ot = "same-origin",
          fetchOptions: Pt,
        } = sy(C),
        It = c || fetch;
      W = W ? (W + "").toLowerCase() : "text";
      let Gt = G1([X, Z && Z.toAbortSignal()], I),
        me = null;
      const Kt =
        Gt &&
        Gt.unsubscribe &&
        (() => {
          Gt.unsubscribe();
        });
      let ne;
      try {
        if (
          At &&
          y &&
          U !== "get" &&
          U !== "head" &&
          (ne = await G(Dt, q)) !== 0
        ) {
          let S = new f(L, { method: "POST", body: q, duplex: "half" }),
            w;
          if (
            (_.isFormData(q) &&
              (w = S.headers.get("content-type")) &&
              Dt.setContentType(w),
            S.body)
          ) {
            const [V, K] = gm(ne, Yi(bm(At)));
            q = Em(S.body, Tm, V, K);
          }
        }
        _.isString(Ot) || (Ot = Ot ? "include" : "omit");
        const D = d && "credentials" in f.prototype,
          Q = {
            ...Pt,
            signal: Gt,
            method: U.toUpperCase(),
            headers: Dt.normalize().toJSON(),
            body: q,
            duplex: "half",
            credentials: D ? Ot : void 0,
          };
        me = d && new f(L, Q);
        let F = await (d ? It(me, Pt) : It(L, Q));
        const mt = g && (W === "stream" || W === "response");
        if (g && (ot || (mt && Kt))) {
          const S = {};
          ["status", "statusText", "headers"].forEach((tt) => {
            S[tt] = F[tt];
          });
          const w = _.toFiniteNumber(F.headers.get("content-length")),
            [V, K] = (ot && gm(w, Yi(bm(ot), !0))) || [];
          F = new r(
            Em(F.body, Tm, V, () => {
              K && K(), Kt && Kt();
            }),
            S
          );
        }
        W = W || "text";
        let vt = await T[_.findKey(T, W) || "text"](F, C);
        return (
          !mt && Kt && Kt(),
          await new Promise((S, w) => {
            ry(S, w, {
              data: vt,
              headers: he.from(F.headers),
              status: F.status,
              statusText: F.statusText,
              config: C,
              request: me,
            });
          })
        );
      } catch (D) {
        throw (
          (Kt && Kt(),
          D && D.name === "TypeError" && /Load failed|fetch/i.test(D.message)
            ? Object.assign(new at("Network Error", at.ERR_NETWORK, C, me), {
                cause: D.cause || D,
              })
            : at.from(D, D && D.code, C, me))
        );
      }
    };
  },
  J1 = new Map(),
  oy = (n) => {
    let c = n ? n.env : {};
    const { fetch: f, Request: r, Response: o } = c,
      d = [r, o, f];
    let h = d.length,
      p = h,
      v,
      y,
      g = J1;
    for (; p--; )
      (v = d[p]),
        (y = g.get(v)),
        y === void 0 && g.set(v, (y = p ? new Map() : K1(c))),
        (g = y);
    return y;
  };
oy();
const Hf = { http: s1, xhr: Y1, fetch: { get: oy } };
_.forEach(Hf, (n, c) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: c });
    } catch {}
    Object.defineProperty(n, "adapterName", { value: c });
  }
});
const zm = (n) => `- ${n}`,
  $1 = (n) => _.isFunction(n) || n === null || n === !1,
  dy = {
    getAdapter: (n, c) => {
      n = _.isArray(n) ? n : [n];
      const { length: f } = n;
      let r, o;
      const d = {};
      for (let h = 0; h < f; h++) {
        r = n[h];
        let p;
        if (
          ((o = r),
          !$1(r) && ((o = Hf[(p = String(r)).toLowerCase()]), o === void 0))
        )
          throw new at(`Unknown adapter '${p}'`);
        if (o && (_.isFunction(o) || (o = o.get(c)))) break;
        d[p || "#" + h] = o;
      }
      if (!o) {
        const h = Object.entries(d).map(
          ([v, y]) =>
            `adapter ${v} ` +
            (y === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let p = f
          ? h.length > 1
            ? `since :
` +
              h.map(zm).join(`
`)
            : " " + zm(h[0])
          : "as no adapter specified";
        throw new at(
          "There is no suitable adapter to dispatch the request " + p,
          "ERR_NOT_SUPPORT"
        );
      }
      return o;
    },
    adapters: Hf,
  };
function Cf(n) {
  if (
    (n.cancelToken && n.cancelToken.throwIfRequested(),
    n.signal && n.signal.aborted)
  )
    throw new en(null, n);
}
function xm(n) {
  return (
    Cf(n),
    (n.headers = he.from(n.headers)),
    (n.data = xf.call(n, n.transformRequest)),
    ["post", "put", "patch"].indexOf(n.method) !== -1 &&
      n.headers.setContentType("application/x-www-form-urlencoded", !1),
    dy
      .getAdapter(
        n.adapter || ru.adapter,
        n
      )(n)
      .then(
        function (r) {
          return (
            Cf(n),
            (r.data = xf.call(n, n.transformResponse, r)),
            (r.headers = he.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            cy(r) ||
              (Cf(n),
              r &&
                r.response &&
                ((r.response.data = xf.call(
                  n,
                  n.transformResponse,
                  r.response
                )),
                (r.response.headers = he.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const hy = "1.12.2",
  $i = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (n, c) => {
    $i[n] = function (r) {
      return typeof r === n || "a" + (c < 1 ? "n " : " ") + n;
    };
  }
);
const Cm = {};
$i.transitional = function (c, f, r) {
  function o(d, h) {
    return (
      "[Axios v" +
      hy +
      "] Transitional option '" +
      d +
      "'" +
      h +
      (r ? ". " + r : "")
    );
  }
  return (d, h, p) => {
    if (c === !1)
      throw new at(
        o(h, " has been removed" + (f ? " in " + f : "")),
        at.ERR_DEPRECATED
      );
    return (
      f &&
        !Cm[h] &&
        ((Cm[h] = !0),
        console.warn(
          o(
            h,
            " has been deprecated since v" +
              f +
              " and will be removed in the near future"
          )
        )),
      c ? c(d, h, p) : !0
    );
  };
};
$i.spelling = function (c) {
  return (f, r) => (console.warn(`${r} is likely a misspelling of ${c}`), !0);
};
function F1(n, c, f) {
  if (typeof n != "object")
    throw new at("options must be an object", at.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(n);
  let o = r.length;
  for (; o-- > 0; ) {
    const d = r[o],
      h = c[d];
    if (h) {
      const p = n[d],
        v = p === void 0 || h(p, d, n);
      if (v !== !0)
        throw new at("option " + d + " must be " + v, at.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (f !== !0) throw new at("Unknown option " + d, at.ERR_BAD_OPTION);
  }
}
const Bi = { assertOptions: F1, validators: $i },
  Ze = Bi.validators;
let sa = class {
  constructor(c) {
    (this.defaults = c || {}),
      (this.interceptors = { request: new pm(), response: new pm() });
  }
  async request(c, f) {
    try {
      return await this._request(c, f);
    } catch (r) {
      if (r instanceof Error) {
        let o = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(o)
          : (o = new Error());
        const d = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? d &&
              !String(r.stack).endsWith(d.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + d)
            : (r.stack = d);
        } catch {}
      }
      throw r;
    }
  }
  _request(c, f) {
    typeof c == "string" ? ((f = f || {}), (f.url = c)) : (f = c || {}),
      (f = oa(this.defaults, f));
    const { transitional: r, paramsSerializer: o, headers: d } = f;
    r !== void 0 &&
      Bi.assertOptions(
        r,
        {
          silentJSONParsing: Ze.transitional(Ze.boolean),
          forcedJSONParsing: Ze.transitional(Ze.boolean),
          clarifyTimeoutError: Ze.transitional(Ze.boolean),
        },
        !1
      ),
      o != null &&
        (_.isFunction(o)
          ? (f.paramsSerializer = { serialize: o })
          : Bi.assertOptions(
              o,
              { encode: Ze.function, serialize: Ze.function },
              !0
            )),
      f.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (f.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (f.allowAbsoluteUrls = !0)),
      Bi.assertOptions(
        f,
        {
          baseUrl: Ze.spelling("baseURL"),
          withXsrfToken: Ze.spelling("withXSRFToken"),
        },
        !0
      ),
      (f.method = (f.method || this.defaults.method || "get").toLowerCase());
    let h = d && _.merge(d.common, d[f.method]);
    d &&
      _.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (C) => {
          delete d[C];
        }
      ),
      (f.headers = he.concat(h, d));
    const p = [];
    let v = !0;
    this.interceptors.request.forEach(function (L) {
      (typeof L.runWhen == "function" && L.runWhen(f) === !1) ||
        ((v = v && L.synchronous), p.unshift(L.fulfilled, L.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function (L) {
      y.push(L.fulfilled, L.rejected);
    });
    let g,
      T = 0,
      H;
    if (!v) {
      const C = [xm.bind(this), void 0];
      for (
        C.unshift(...p), C.push(...y), H = C.length, g = Promise.resolve(f);
        T < H;

      )
        g = g.then(C[T++], C[T++]);
      return g;
    }
    H = p.length;
    let G = f;
    for (; T < H; ) {
      const C = p[T++],
        L = p[T++];
      try {
        G = C(G);
      } catch (U) {
        L.call(this, U);
        break;
      }
    }
    try {
      g = xm.call(this, G);
    } catch (C) {
      return Promise.reject(C);
    }
    for (T = 0, H = y.length; T < H; ) g = g.then(y[T++], y[T++]);
    return g;
  }
  getUri(c) {
    c = oa(this.defaults, c);
    const f = fy(c.baseURL, c.url, c.allowAbsoluteUrls);
    return ny(f, c.params, c.paramsSerializer);
  }
};
_.forEach(["delete", "get", "head", "options"], function (c) {
  sa.prototype[c] = function (f, r) {
    return this.request(
      oa(r || {}, { method: c, url: f, data: (r || {}).data })
    );
  };
});
_.forEach(["post", "put", "patch"], function (c) {
  function f(r) {
    return function (d, h, p) {
      return this.request(
        oa(p || {}, {
          method: c,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: d,
          data: h,
        })
      );
    };
  }
  (sa.prototype[c] = f()), (sa.prototype[c + "Form"] = f(!0));
});
let k1 = class my {
  constructor(c) {
    if (typeof c != "function")
      throw new TypeError("executor must be a function.");
    let f;
    this.promise = new Promise(function (d) {
      f = d;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let d = r._listeners.length;
      for (; d-- > 0; ) r._listeners[d](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let d;
        const h = new Promise((p) => {
          r.subscribe(p), (d = p);
        }).then(o);
        return (
          (h.cancel = function () {
            r.unsubscribe(d);
          }),
          h
        );
      }),
      c(function (d, h, p) {
        r.reason || ((r.reason = new en(d, h, p)), f(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(c) {
    if (this.reason) {
      c(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(c) : (this._listeners = [c]);
  }
  unsubscribe(c) {
    if (!this._listeners) return;
    const f = this._listeners.indexOf(c);
    f !== -1 && this._listeners.splice(f, 1);
  }
  toAbortSignal() {
    const c = new AbortController(),
      f = (r) => {
        c.abort(r);
      };
    return (
      this.subscribe(f),
      (c.signal.unsubscribe = () => this.unsubscribe(f)),
      c.signal
    );
  }
  static source() {
    let c;
    return {
      token: new my(function (o) {
        c = o;
      }),
      cancel: c,
    };
  }
};
function W1(n) {
  return function (f) {
    return n.apply(null, f);
  };
}
function P1(n) {
  return _.isObject(n) && n.isAxiosError === !0;
}
const jf = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(jf).forEach(([n, c]) => {
  jf[c] = n;
});
function yy(n) {
  const c = new sa(n),
    f = Km(sa.prototype.request, c);
  return (
    _.extend(f, sa.prototype, c, { allOwnKeys: !0 }),
    _.extend(f, c, null, { allOwnKeys: !0 }),
    (f.create = function (o) {
      return yy(oa(n, o));
    }),
    f
  );
}
const zt = yy(ru);
zt.Axios = sa;
zt.CanceledError = en;
zt.CancelToken = k1;
zt.isCancel = cy;
zt.VERSION = hy;
zt.toFormData = Ji;
zt.AxiosError = at;
zt.Cancel = zt.CanceledError;
zt.all = function (c) {
  return Promise.all(c);
};
zt.spread = W1;
zt.isAxiosError = P1;
zt.mergeConfig = oa;
zt.AxiosHeaders = he;
zt.formToJSON = (n) => iy(_.isHTMLForm(n) ? new FormData(n) : n);
zt.getAdapter = dy.getAdapter;
zt.HttpStatusCode = jf;
zt.default = zt;
const {
    Axios: kb,
    AxiosError: Wb,
    CanceledError: Pb,
    isCancel: Ib,
    CancelToken: tS,
    VERSION: eS,
    all: lS,
    Cancel: aS,
    isAxiosError: nS,
    spread: uS,
    toFormData: iS,
    AxiosHeaders: cS,
    HttpStatusCode: rS,
    formToJSON: fS,
    getAdapter: sS,
    mergeConfig: oS,
  } = zt,
  Fi = O.createContext(null),
  I1 = ({ children: n }) => {
    const [c, f] = O.useState(null);
    O.useEffect(() => {
      const d = localStorage.getItem("user");
      d && f(JSON.parse(d));
    }, []);
    const r = async (d, h) => {
        const p = await zt.post("/api/auth/login", {
          username: d,
          password: h,
        });
        localStorage.setItem("user", JSON.stringify(p.data.user)),
          f(p.data.user);
      },
      o = () => {
        localStorage.removeItem("user"), f(null);
      };
    return Y.jsx(Fi.Provider, {
      value: { user: c, login: r, logout: o },
      children: n,
    });
  };
let tb = { data: "" },
  eb = (n) => {
    if (typeof window == "object") {
      let c =
        (n ? n.querySelector("#_goober") : window._goober) ||
        Object.assign(document.createElement("style"), {
          innerHTML: " ",
          id: "_goober",
        });
      return (
        (c.nonce = window.__nonce__),
        c.parentNode || (n || document.head).appendChild(c),
        c.firstChild
      );
    }
    return n || tb;
  },
  lb = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  ab = /\/\*[^]*?\*\/|  +/g,
  _m = /\n+/g,
  Gl = (n, c) => {
    let f = "",
      r = "",
      o = "";
    for (let d in n) {
      let h = n[d];
      d[0] == "@"
        ? d[1] == "i"
          ? (f = d + " " + h + ";")
          : (r +=
              d[1] == "f"
                ? Gl(h, d)
                : d + "{" + Gl(h, d[1] == "k" ? "" : c) + "}")
        : typeof h == "object"
        ? (r += Gl(
            h,
            c
              ? c.replace(/([^,])+/g, (p) =>
                  d.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (v) =>
                    /&/.test(v) ? v.replace(/&/g, p) : p ? p + " " + v : v
                  )
                )
              : d
          ))
        : h != null &&
          ((d = /^--/.test(d) ? d : d.replace(/[A-Z]/g, "-$&").toLowerCase()),
          (o += Gl.p ? Gl.p(d, h) : d + ":" + h + ";"));
    }
    return f + (c && o ? c + "{" + o + "}" : o) + r;
  },
  dl = {},
  py = (n) => {
    if (typeof n == "object") {
      let c = "";
      for (let f in n) c += f + py(n[f]);
      return c;
    }
    return n;
  },
  nb = (n, c, f, r, o) => {
    let d = py(n),
      h =
        dl[d] ||
        (dl[d] = ((v) => {
          let y = 0,
            g = 11;
          for (; y < v.length; ) g = (101 * g + v.charCodeAt(y++)) >>> 0;
          return "go" + g;
        })(d));
    if (!dl[h]) {
      let v =
        d !== n
          ? n
          : ((y) => {
              let g,
                T,
                H = [{}];
              for (; (g = lb.exec(y.replace(ab, ""))); )
                g[4]
                  ? H.shift()
                  : g[3]
                  ? ((T = g[3].replace(_m, " ").trim()),
                    H.unshift((H[0][T] = H[0][T] || {})))
                  : (H[0][g[1]] = g[2].replace(_m, " ").trim());
              return H[0];
            })(n);
      dl[h] = Gl(o ? { ["@keyframes " + h]: v } : v, f ? "" : "." + h);
    }
    let p = f && dl.g ? dl.g : null;
    return (
      f && (dl.g = dl[h]),
      ((v, y, g, T) => {
        T
          ? (y.data = y.data.replace(T, v))
          : y.data.indexOf(v) === -1 && (y.data = g ? v + y.data : y.data + v);
      })(dl[h], c, r, p),
      h
    );
  },
  ub = (n, c, f) =>
    n.reduce((r, o, d) => {
      let h = c[d];
      if (h && h.call) {
        let p = h(f),
          v = (p && p.props && p.props.className) || (/^go/.test(p) && p);
        h = v
          ? "." + v
          : p && typeof p == "object"
          ? p.props
            ? ""
            : Gl(p, "")
          : p === !1
          ? ""
          : p;
      }
      return r + o + (h ?? "");
    }, "");
function ki(n) {
  let c = this || {},
    f = n.call ? n(c.p) : n;
  return nb(
    f.unshift
      ? f.raw
        ? ub(f, [].slice.call(arguments, 1), c.p)
        : f.reduce((r, o) => Object.assign(r, o && o.call ? o(c.p) : o), {})
      : f,
    eb(c.target),
    c.g,
    c.o,
    c.k
  );
}
let vy, wf, Bf;
ki.bind({ g: 1 });
let yl = ki.bind({ k: 1 });
function ib(n, c, f, r) {
  (Gl.p = c), (vy = n), (wf = f), (Bf = r);
}
function Ql(n, c) {
  let f = this || {};
  return function () {
    let r = arguments;
    function o(d, h) {
      let p = Object.assign({}, d),
        v = p.className || o.className;
      (f.p = Object.assign({ theme: wf && wf() }, p)),
        (f.o = / *go\d+/.test(v)),
        (p.className = ki.apply(f, r) + (v ? " " + v : ""));
      let y = n;
      return (
        n[0] && ((y = p.as || n), delete p.as), Bf && y[0] && Bf(p), vy(y, p)
      );
    }
    return o;
  };
}
var cb = (n) => typeof n == "function",
  Gi = (n, c) => (cb(n) ? n(c) : n),
  rb = (() => {
    let n = 0;
    return () => (++n).toString();
  })(),
  gy = (() => {
    let n;
    return () => {
      if (n === void 0 && typeof window < "u") {
        let c = matchMedia("(prefers-reduced-motion: reduce)");
        n = !c || c.matches;
      }
      return n;
    };
  })(),
  fb = 20,
  Ff = "default",
  by = (n, c) => {
    let { toastLimit: f } = n.settings;
    switch (c.type) {
      case 0:
        return { ...n, toasts: [c.toast, ...n.toasts].slice(0, f) };
      case 1:
        return {
          ...n,
          toasts: n.toasts.map((h) =>
            h.id === c.toast.id ? { ...h, ...c.toast } : h
          ),
        };
      case 2:
        let { toast: r } = c;
        return by(n, {
          type: n.toasts.find((h) => h.id === r.id) ? 1 : 0,
          toast: r,
        });
      case 3:
        let { toastId: o } = c;
        return {
          ...n,
          toasts: n.toasts.map((h) =>
            h.id === o || o === void 0
              ? { ...h, dismissed: !0, visible: !1 }
              : h
          ),
        };
      case 4:
        return c.toastId === void 0
          ? { ...n, toasts: [] }
          : { ...n, toasts: n.toasts.filter((h) => h.id !== c.toastId) };
      case 5:
        return { ...n, pausedAt: c.time };
      case 6:
        let d = c.time - (n.pausedAt || 0);
        return {
          ...n,
          pausedAt: void 0,
          toasts: n.toasts.map((h) => ({
            ...h,
            pauseDuration: h.pauseDuration + d,
          })),
        };
    }
  },
  Li = [],
  Sy = { toasts: [], pausedAt: void 0, settings: { toastLimit: fb } },
  Ke = {},
  Ey = (n, c = Ff) => {
    (Ke[c] = by(Ke[c] || Sy, n)),
      Li.forEach(([f, r]) => {
        f === c && r(Ke[c]);
      });
  },
  Ty = (n) => Object.keys(Ke).forEach((c) => Ey(n, c)),
  sb = (n) => Object.keys(Ke).find((c) => Ke[c].toasts.some((f) => f.id === n)),
  Wi =
    (n = Ff) =>
    (c) => {
      Ey(c, n);
    },
  ob = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  db = (n = {}, c = Ff) => {
    let [f, r] = O.useState(Ke[c] || Sy),
      o = O.useRef(Ke[c]);
    O.useEffect(
      () => (
        o.current !== Ke[c] && r(Ke[c]),
        Li.push([c, r]),
        () => {
          let h = Li.findIndex(([p]) => p === c);
          h > -1 && Li.splice(h, 1);
        }
      ),
      [c]
    );
    let d = f.toasts.map((h) => {
      var p, v, y;
      return {
        ...n,
        ...n[h.type],
        ...h,
        removeDelay:
          h.removeDelay ||
          ((p = n[h.type]) == null ? void 0 : p.removeDelay) ||
          n?.removeDelay,
        duration:
          h.duration ||
          ((v = n[h.type]) == null ? void 0 : v.duration) ||
          n?.duration ||
          ob[h.type],
        style: {
          ...n.style,
          ...((y = n[h.type]) == null ? void 0 : y.style),
          ...h.style,
        },
      };
    });
    return { ...f, toasts: d };
  },
  hb = (n, c = "blank", f) => ({
    createdAt: Date.now(),
    visible: !0,
    dismissed: !1,
    type: c,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: n,
    pauseDuration: 0,
    ...f,
    id: f?.id || rb(),
  }),
  fu = (n) => (c, f) => {
    let r = hb(c, n, f);
    return Wi(r.toasterId || sb(r.id))({ type: 2, toast: r }), r.id;
  },
  Qt = (n, c) => fu("blank")(n, c);
Qt.error = fu("error");
Qt.success = fu("success");
Qt.loading = fu("loading");
Qt.custom = fu("custom");
Qt.dismiss = (n, c) => {
  let f = { type: 3, toastId: n };
  c ? Wi(c)(f) : Ty(f);
};
Qt.dismissAll = (n) => Qt.dismiss(void 0, n);
Qt.remove = (n, c) => {
  let f = { type: 4, toastId: n };
  c ? Wi(c)(f) : Ty(f);
};
Qt.removeAll = (n) => Qt.remove(void 0, n);
Qt.promise = (n, c, f) => {
  let r = Qt.loading(c.loading, { ...f, ...f?.loading });
  return (
    typeof n == "function" && (n = n()),
    n
      .then((o) => {
        let d = c.success ? Gi(c.success, o) : void 0;
        return (
          d ? Qt.success(d, { id: r, ...f, ...f?.success }) : Qt.dismiss(r), o
        );
      })
      .catch((o) => {
        let d = c.error ? Gi(c.error, o) : void 0;
        d ? Qt.error(d, { id: r, ...f, ...f?.error }) : Qt.dismiss(r);
      }),
    n
  );
};
var mb = 1e3,
  yb = (n, c = "default") => {
    let { toasts: f, pausedAt: r } = db(n, c),
      o = O.useRef(new Map()).current,
      d = O.useCallback((T, H = mb) => {
        if (o.has(T)) return;
        let G = setTimeout(() => {
          o.delete(T), h({ type: 4, toastId: T });
        }, H);
        o.set(T, G);
      }, []);
    O.useEffect(() => {
      if (r) return;
      let T = Date.now(),
        H = f.map((G) => {
          if (G.duration === 1 / 0) return;
          let C = (G.duration || 0) + G.pauseDuration - (T - G.createdAt);
          if (C < 0) {
            G.visible && Qt.dismiss(G.id);
            return;
          }
          return setTimeout(() => Qt.dismiss(G.id, c), C);
        });
      return () => {
        H.forEach((G) => G && clearTimeout(G));
      };
    }, [f, r, c]);
    let h = O.useCallback(Wi(c), [c]),
      p = O.useCallback(() => {
        h({ type: 5, time: Date.now() });
      }, [h]),
      v = O.useCallback(
        (T, H) => {
          h({ type: 1, toast: { id: T, height: H } });
        },
        [h]
      ),
      y = O.useCallback(() => {
        r && h({ type: 6, time: Date.now() });
      }, [r, h]),
      g = O.useCallback(
        (T, H) => {
          let {
              reverseOrder: G = !1,
              gutter: C = 8,
              defaultPosition: L,
            } = H || {},
            U = f.filter(
              (Z) => (Z.position || L) === (T.position || L) && Z.height
            ),
            q = U.findIndex((Z) => Z.id === T.id),
            X = U.filter((Z, I) => I < q && Z.visible).length;
          return U.filter((Z) => Z.visible)
            .slice(...(G ? [X + 1] : [0, X]))
            .reduce((Z, I) => Z + (I.height || 0) + C, 0);
        },
        [f]
      );
    return (
      O.useEffect(() => {
        f.forEach((T) => {
          if (T.dismissed) d(T.id, T.removeDelay);
          else {
            let H = o.get(T.id);
            H && (clearTimeout(H), o.delete(T.id));
          }
        });
      }, [f, d]),
      {
        toasts: f,
        handlers: {
          updateHeight: v,
          startPause: p,
          endPause: y,
          calculateOffset: g,
        },
      }
    );
  },
  pb = yl`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  vb = yl`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  gb = yl`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  bb = Ql("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(n) => n.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${pb} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${vb} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(n) => n.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${gb} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  Sb = yl`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  Eb = Ql("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(n) => n.secondary || "#e0e0e0"};
  border-right-color: ${(n) => n.primary || "#616161"};
  animation: ${Sb} 1s linear infinite;
`,
  Tb = yl`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  Ab = yl`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  Ob = Ql("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(n) => n.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Tb} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ab} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(n) => n.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  Rb = Ql("div")`
  position: absolute;
`,
  zb = Ql("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  xb = yl`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  Cb = Ql("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${xb} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  _b = ({ toast: n }) => {
    let { icon: c, type: f, iconTheme: r } = n;
    return c !== void 0
      ? typeof c == "string"
        ? O.createElement(Cb, null, c)
        : c
      : f === "blank"
      ? null
      : O.createElement(
          zb,
          null,
          O.createElement(Eb, { ...r }),
          f !== "loading" &&
            O.createElement(
              Rb,
              null,
              f === "error"
                ? O.createElement(bb, { ...r })
                : O.createElement(Ob, { ...r })
            )
        );
  },
  Nb = (n) => `
0% {transform: translate3d(0,${n * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  Db = (n) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${n * -150}%,-1px) scale(.6); opacity:0;}
`,
  Mb = "0%{opacity:0;} 100%{opacity:1;}",
  Ub = "0%{opacity:1;} 100%{opacity:0;}",
  Hb = Ql("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  jb = Ql("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  wb = (n, c) => {
    let f = n.includes("top") ? 1 : -1,
      [r, o] = gy() ? [Mb, Ub] : [Nb(f), Db(f)];
    return {
      animation: c
        ? `${yl(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${yl(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  Bb = O.memo(({ toast: n, position: c, style: f, children: r }) => {
    let o = n.height
        ? wb(n.position || c || "top-center", n.visible)
        : { opacity: 0 },
      d = O.createElement(_b, { toast: n }),
      h = O.createElement(jb, { ...n.ariaProps }, Gi(n.message, n));
    return O.createElement(
      Hb,
      { className: n.className, style: { ...o, ...f, ...n.style } },
      typeof r == "function"
        ? r({ icon: d, message: h })
        : O.createElement(O.Fragment, null, d, h)
    );
  });
ib(O.createElement);
var Lb = ({
    id: n,
    className: c,
    style: f,
    onHeightUpdate: r,
    children: o,
  }) => {
    let d = O.useCallback(
      (h) => {
        if (h) {
          let p = () => {
            let v = h.getBoundingClientRect().height;
            r(n, v);
          };
          p(),
            new MutationObserver(p).observe(h, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            });
        }
      },
      [n, r]
    );
    return O.createElement("div", { ref: d, className: c, style: f }, o);
  },
  qb = (n, c) => {
    let f = n.includes("top"),
      r = f ? { top: 0 } : { bottom: 0 },
      o = n.includes("center")
        ? { justifyContent: "center" }
        : n.includes("right")
        ? { justifyContent: "flex-end" }
        : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: gy() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${c * (f ? 1 : -1)}px)`,
      ...r,
      ...o,
    };
  },
  Yb = ki`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  Ni = 16,
  Gb = ({
    reverseOrder: n,
    position: c = "top-center",
    toastOptions: f,
    gutter: r,
    children: o,
    toasterId: d,
    containerStyle: h,
    containerClassName: p,
  }) => {
    let { toasts: v, handlers: y } = yb(f, d);
    return O.createElement(
      "div",
      {
        "data-rht-toaster": d || "",
        style: {
          position: "fixed",
          zIndex: 9999,
          top: Ni,
          left: Ni,
          right: Ni,
          bottom: Ni,
          pointerEvents: "none",
          ...h,
        },
        className: p,
        onMouseEnter: y.startPause,
        onMouseLeave: y.endPause,
      },
      v.map((g) => {
        let T = g.position || c,
          H = y.calculateOffset(g, {
            reverseOrder: n,
            gutter: r,
            defaultPosition: c,
          }),
          G = qb(T, H);
        return O.createElement(
          Lb,
          {
            id: g.id,
            key: g.id,
            onHeightUpdate: y.updateHeight,
            className: g.visible ? Yb : "",
            style: G,
          },
          g.type === "custom"
            ? Gi(g.message, g)
            : o
            ? o(g)
            : O.createElement(Bb, { toast: g, position: T })
        );
      })
    );
  },
  Di = Qt;
function Xb() {
  const [n, c] = O.useState(null),
    [f, r] = O.useState(""),
    [o, d] = O.useState(""),
    [h, p] = O.useState(!1),
    [v, y] = O.useState(""),
    g = O.useRef(null),
    [T, H] = O.useState([]);
  O.useEffect(() => {
    (async () => {
      try {
        const X = await zt.get("/api/posts", { withCredentials: !0 });
        H(X.data);
      } catch (X) {
        console.error("Failed to fetch history:", X);
      }
    })();
  }, []),
    O.useEffect(
      () => () => {
        f && URL.revokeObjectURL(f);
      },
      [f]
    );
  const G = (q) => {
      const X = q.target.files[0];
      if ((y(""), d(""), X)) {
        if (X.size > 5 * 1024 * 1024) {
          y("File size must be under 5MB.");
          return;
        }
        c(X), r(URL.createObjectURL(X));
      }
    },
    C = async () => {
      if (!n) {
        y("Please upload an image first.");
        return;
      }
      y(""), p(!0), d("");
      const q = new FormData();
      q.append("image", n);
      try {
        const Z = (await zt.post("/api/posts", q, { withCredentials: !0 })).data
          .post;
        d(Z.caption), H((I) => [Z, ...I]);
      } catch (X) {
        y(X.response?.data?.message || "Failed to generate caption.");
      } finally {
        p(!1);
      }
    },
    L = async (q) => {
      try {
        await zt.delete(`/api/posts/${q}`, { withCredentials: !0 }),
          H(T.filter((X) => X._id !== q)),
          Di.success("Post deleted!", { className: "toast-style" });
      } catch (X) {
        console.error("Failed to delete post:", X),
          Di.error("Could not delete post.", { className: "toast-style" });
      }
    },
    U = () => {
      o &&
        navigator.clipboard
          .writeText(o)
          .then(() => {
            Di.success("Caption copied!", { className: "toast-style" });
          })
          .catch(() => {
            Di.error("Failed to copy.", { className: "toast-style" });
          });
    };
  return Y.jsxs("div", {
    className: "home-grid",
    children: [
      Y.jsx("div", {
        className: "generator-column",
        children: Y.jsxs("div", {
          className: "generator-card glass-card",
          children: [
            Y.jsxs("div", {
              className: "generator-header",
              children: [
                Y.jsx("h1", { children: "AI Caption Generator" }),
                Y.jsx("p", {
                  children: "Transform your images into compelling captions",
                }),
              ],
            }),
            Y.jsxs("div", {
              className: "upload-box",
              onClick: () => g.current.click(),
              children: [
                f
                  ? Y.jsx("img", {
                      src: f,
                      alt: "Preview",
                      className: "image-preview",
                    })
                  : Y.jsxs("div", {
                      className: "upload-placeholder",
                      children: [
                        Y.jsxs("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "48",
                          height: "48",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          children: [
                            Y.jsx("path", {
                              d: "M21.2 15c.7-1.2 1-2.5.7-3.9-.6-2.4-2.4-4.2-4.8-4.8-.9-.3-1.8-.5-2.7-.5-1.5 0-2.8.6-3.9 1.6l-1.8 1.8c-.3.3-.5.7-.7 1a4 4 0 0 0-3.3 1.2c-1.2 1.2-1.8 2.8-1.8 4.4 0 3.3 2.7 6 6 6h7.8c1.6 0 3-1.3 3-3 0-1.1-.6-2-1.4-2.5",
                            }),
                            Y.jsx("path", { d: "M12 12v9" }),
                            Y.jsx("path", { d: "m16 16-4-4-4 4" }),
                          ],
                        }),
                        Y.jsx("p", { children: "Drop or click to upload" }),
                      ],
                    }),
                Y.jsx("input", {
                  type: "file",
                  ref: g,
                  onChange: G,
                  accept: "image/*",
                  style: { display: "none" },
                }),
              ],
            }),
            v && Y.jsx("p", { className: "error-text", children: v }),
            Y.jsx("button", {
              className: "generate-button",
              onClick: C,
              disabled: !n || h,
              children: h ? "Generating..." : "Generate Caption",
            }),
            o &&
              !h &&
              Y.jsxs("div", {
                className: "caption-display",
                children: [
                  Y.jsx("p", { children: o }),
                  Y.jsxs("div", {
                    className: "caption-actions",
                    children: [
                      Y.jsx("button", { onClick: U, children: "Copy" }),
                      Y.jsx("button", {
                        onClick: C,
                        disabled: h,
                        children: "Regenerate",
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
      }),
      Y.jsx("div", {
        className: "history-column",
        children: Y.jsxs("div", {
          className: "history-card glass-card",
          children: [
            Y.jsx("h2", { children: "History" }),
            Y.jsx("div", {
              className: "history-feed",
              children:
                T.length > 0
                  ? T.map((q) =>
                      Y.jsxs(
                        "div",
                        {
                          className: "history-item",
                          children: [
                            Y.jsx("img", {
                              src: q.image,
                              alt: "Generated post",
                              className: "history-item-image",
                            }),
                            Y.jsx("div", {
                              className: "history-item-details",
                              children: Y.jsx("p", { children: q.caption }),
                            }),
                            Y.jsx("button", {
                              className: "delete-button",
                              onClick: () => L(q._id),
                              children: Y.jsxs("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                  Y.jsx("polyline", { points: "3 6 5 6 21 6" }),
                                  Y.jsx("path", {
                                    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        },
                        q._id
                      )
                    )
                  : Y.jsx("div", {
                      className: "no-history",
                      children: Y.jsx("p", { children: "No history yet." }),
                    }),
            }),
          ],
        }),
      }),
    ],
  });
}
function Qb() {
  const [n, c] = O.useState(""),
    [f, r] = O.useState(""),
    [o, d] = O.useState(""),
    { login: h } = O.useContext(Fi),
    p = au(),
    v = async (y) => {
      y.preventDefault(), d("");
      try {
        await h(n, f), p("/");
      } catch (g) {
        d(g.response?.data?.message || "Login failed");
      }
    };
  return Y.jsx("div", {
    className: "form-page-container",
    children: Y.jsx("div", {
      className: "form-glass-card glass-card",
      children: Y.jsxs("form", {
        onSubmit: v,
        children: [
          Y.jsx("h2", { children: "Welcome Back" }),
          o && Y.jsx("p", { className: "error-message", children: o }),
          Y.jsxs("div", {
            className: "form-group",
            children: [
              Y.jsx("label", { children: "Username" }),
              Y.jsx("input", {
                type: "text",
                value: n,
                onChange: (y) => c(y.target.value),
                className: "form-input",
                required: !0,
              }),
            ],
          }),
          Y.jsxs("div", {
            className: "form-group",
            children: [
              Y.jsx("label", { children: "Password" }),
              Y.jsx("input", {
                type: "password",
                value: f,
                onChange: (y) => r(y.target.value),
                className: "form-input",
                required: !0,
              }),
            ],
          }),
          Y.jsx("button", {
            type: "submit",
            className: "form-button",
            children: "Login",
          }),
        ],
      }),
    }),
  });
}
function Vb() {
  const [n, c] = O.useState(""),
    [f, r] = O.useState(""),
    [o, d] = O.useState(""),
    h = au(),
    p = async (v) => {
      v.preventDefault(), d("");
      try {
        await zt.post("/api/auth/register", { username: n, password: f }),
          h("/login");
      } catch (y) {
        d(y.response?.data?.message || "Registration failed");
      }
    };
  return Y.jsx("div", {
    className: "form-page-container",
    children: Y.jsx("div", {
      className: "form-glass-card glass-card",
      children: Y.jsxs("form", {
        onSubmit: p,
        children: [
          Y.jsx("h2", { children: "Create Account" }),
          o && Y.jsx("p", { className: "error-message", children: o }),
          Y.jsxs("div", {
            className: "form-group",
            children: [
              Y.jsx("label", { children: "Username" }),
              Y.jsx("input", {
                type: "text",
                value: n,
                onChange: (v) => c(v.target.value),
                className: "form-input",
                required: !0,
              }),
            ],
          }),
          Y.jsxs("div", {
            className: "form-group",
            children: [
              Y.jsx("label", { children: "Password" }),
              Y.jsx("input", {
                type: "password",
                value: f,
                onChange: (v) => r(v.target.value),
                className: "form-input",
                required: !0,
              }),
            ],
          }),
          Y.jsx("button", {
            type: "submit",
            className: "form-button",
            children: "Register",
          }),
        ],
      }),
    }),
  });
}
function Zb() {
  const { user: n, logout: c } = O.useContext(Fi),
    f = au(),
    r = () => {
      c(), f("/login");
    };
  return Y.jsx("nav", {
    className: "navbar-container",
    children: Y.jsxs("div", {
      className: "navbar glass-card",
      children: [
        Y.jsx(tu, { to: "/", className: "nav-logo", children: "GenCap" }),
        Y.jsx("div", {
          className: "nav-menu",
          children: n
            ? Y.jsxs("div", {
                className: "nav-user-info",
                children: [
                  Y.jsxs("span", {
                    className: "nav-greeting",
                    children: ["Hi, ", n.username],
                  }),
                  Y.jsx("button", {
                    onClick: r,
                    className: "nav-button logout",
                    children: "Logout",
                  }),
                ],
              })
            : Y.jsxs("div", {
                className: "nav-links",
                children: [
                  Y.jsx(tu, {
                    to: "/login",
                    className: "nav-button",
                    children: "Login",
                  }),
                  Y.jsx(tu, {
                    to: "/register",
                    className: "nav-button primary",
                    children: "Register",
                  }),
                ],
              }),
        }),
      ],
    }),
  });
}
function Kb() {
  const { user: n } = O.useContext(Fi);
  return Y.jsxs(Y.Fragment, {
    children: [
      Y.jsx(Gb, { position: "top-center", reverseOrder: !1 }),
      Y.jsx(Zb, {}),
      Y.jsx("main", {
        className: "container",
        children: Y.jsxs(Kv, {
          children: [
            Y.jsx(Mi, {
              path: "/login",
              element: n ? Y.jsx(Of, { to: "/" }) : Y.jsx(Qb, {}),
            }),
            Y.jsx(Mi, {
              path: "/register",
              element: n ? Y.jsx(Of, { to: "/" }) : Y.jsx(Vb, {}),
            }),
            Y.jsx(Mi, {
              path: "/",
              element: n ? Y.jsx(Xb, {}) : Y.jsx(Of, { to: "/login" }),
            }),
          ],
        }),
      }),
    ],
  });
}
class Jb extends Dm.Component {
  constructor(c) {
    super(c), (this.state = { hasError: !1 });
  }
  static getDerivedStateFromError(c) {
    return { hasError: !0 };
  }
  componentDidCatch(c, f) {
    console.log("Error caught by boundary:", c, f);
  }
  render() {
    return this.state.hasError
      ? Y.jsx("div", {
          children: "Something went wrong. Please try refreshing the page.",
        })
      : this.props.children;
  }
}
zt.defaults.baseURL = "https://backend-three-phi-30.vercel.app/";
zt.defaults.withCredentials = !0;
lv.createRoot(document.getElementById("root")).render(
  Y.jsx(Dm.StrictMode, {
    children: Y.jsx(Jb, {
      children: Y.jsx(yg, { children: Y.jsx(I1, { children: Y.jsx(Kb, {}) }) }),
    }),
  })
);
