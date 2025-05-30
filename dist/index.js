var cn = Object.defineProperty;
var ln = (e, r, t) => r in e ? cn(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var er = (e, r, t) => (ln(e, typeof r != "symbol" ? r + "" : r, t), t);
import { jsx as O, jsxs as oe, Fragment as jt } from "react/jsx-runtime";
import * as z from "react";
import Ie, { useRef as ve, useContext as Re, useLayoutEffect as Or, useMemo as Pe, useDebugValue as tr, createElement as dn, createContext as Ar, useState as fe, useCallback as ge, useEffect as ue, forwardRef as un } from "react";
var me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ze = {}, hn = {
  get exports() {
    return ze;
  },
  set exports(e) {
    ze = e;
  }
}, re = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rr;
function fn() {
  if (rr)
    return re;
  rr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, T = e ? Symbol.for("react.block") : 60121, M = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, L = e ? Symbol.for("react.scope") : 60119;
  function Y(p) {
    if (typeof p == "object" && p !== null) {
      var C = p.$$typeof;
      switch (C) {
        case r:
          switch (p = p.type, p) {
            case l:
            case c:
            case n:
            case s:
            case o:
            case u:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case a:
                case d:
                case y:
                case m:
                case i:
                  return p;
                default:
                  return C;
              }
          }
        case t:
          return C;
      }
    }
  }
  function A(p) {
    return Y(p) === c;
  }
  return re.AsyncMode = l, re.ConcurrentMode = c, re.ContextConsumer = a, re.ContextProvider = i, re.Element = r, re.ForwardRef = d, re.Fragment = n, re.Lazy = y, re.Memo = m, re.Portal = t, re.Profiler = s, re.StrictMode = o, re.Suspense = u, re.isAsyncMode = function(p) {
    return A(p) || Y(p) === l;
  }, re.isConcurrentMode = A, re.isContextConsumer = function(p) {
    return Y(p) === a;
  }, re.isContextProvider = function(p) {
    return Y(p) === i;
  }, re.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === r;
  }, re.isForwardRef = function(p) {
    return Y(p) === d;
  }, re.isFragment = function(p) {
    return Y(p) === n;
  }, re.isLazy = function(p) {
    return Y(p) === y;
  }, re.isMemo = function(p) {
    return Y(p) === m;
  }, re.isPortal = function(p) {
    return Y(p) === t;
  }, re.isProfiler = function(p) {
    return Y(p) === s;
  }, re.isStrictMode = function(p) {
    return Y(p) === o;
  }, re.isSuspense = function(p) {
    return Y(p) === u;
  }, re.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === c || p === s || p === o || p === u || p === f || typeof p == "object" && p !== null && (p.$$typeof === y || p.$$typeof === m || p.$$typeof === i || p.$$typeof === a || p.$$typeof === d || p.$$typeof === M || p.$$typeof === _ || p.$$typeof === L || p.$$typeof === T);
  }, re.typeOf = Y, re;
}
var ne = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nr;
function pn() {
  return nr || (nr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, T = e ? Symbol.for("react.block") : 60121, M = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, L = e ? Symbol.for("react.scope") : 60119;
    function Y(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === n || g === c || g === s || g === o || g === u || g === f || typeof g == "object" && g !== null && (g.$$typeof === y || g.$$typeof === m || g.$$typeof === i || g.$$typeof === a || g.$$typeof === d || g.$$typeof === M || g.$$typeof === _ || g.$$typeof === L || g.$$typeof === T);
    }
    function A(g) {
      if (typeof g == "object" && g !== null) {
        var se = g.$$typeof;
        switch (se) {
          case r:
            var ae = g.type;
            switch (ae) {
              case l:
              case c:
              case n:
              case s:
              case o:
              case u:
                return ae;
              default:
                var Q = ae && ae.$$typeof;
                switch (Q) {
                  case a:
                  case d:
                  case y:
                  case m:
                  case i:
                    return Q;
                  default:
                    return se;
                }
            }
          case t:
            return se;
        }
      }
    }
    var p = l, C = c, E = a, W = i, j = r, I = d, X = n, K = y, D = m, S = t, b = s, F = o, v = u, P = !1;
    function B(g) {
      return P || (P = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), U(g) || A(g) === l;
    }
    function U(g) {
      return A(g) === c;
    }
    function ee(g) {
      return A(g) === a;
    }
    function $(g) {
      return A(g) === i;
    }
    function k(g) {
      return typeof g == "object" && g !== null && g.$$typeof === r;
    }
    function x(g) {
      return A(g) === d;
    }
    function N(g) {
      return A(g) === n;
    }
    function h(g) {
      return A(g) === y;
    }
    function V(g) {
      return A(g) === m;
    }
    function w(g) {
      return A(g) === t;
    }
    function J(g) {
      return A(g) === s;
    }
    function Z(g) {
      return A(g) === o;
    }
    function q(g) {
      return A(g) === u;
    }
    ne.AsyncMode = p, ne.ConcurrentMode = C, ne.ContextConsumer = E, ne.ContextProvider = W, ne.Element = j, ne.ForwardRef = I, ne.Fragment = X, ne.Lazy = K, ne.Memo = D, ne.Portal = S, ne.Profiler = b, ne.StrictMode = F, ne.Suspense = v, ne.isAsyncMode = B, ne.isConcurrentMode = U, ne.isContextConsumer = ee, ne.isContextProvider = $, ne.isElement = k, ne.isForwardRef = x, ne.isFragment = N, ne.isLazy = h, ne.isMemo = V, ne.isPortal = w, ne.isProfiler = J, ne.isStrictMode = Z, ne.isSuspense = q, ne.isValidElementType = Y, ne.typeOf = A;
  }()), ne;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = fn() : e.exports = pn();
})(hn);
function mn(e) {
  function r($, k, x, N, h) {
    for (var V = 0, w = 0, J = 0, Z = 0, q, g, se = 0, ae = 0, Q, he = Q = q = 0, te = 0, le = 0, et = 0, de = 0, it = x.length, tt = it - 1, Ce, G = "", ie = "", gt = "", vt = "", Te; te < it; ) {
      if (g = x.charCodeAt(te), te === tt && w + Z + J + V !== 0 && (w !== 0 && (g = w === 47 ? 10 : 47), Z = J = V = 0, it++, tt++), w + Z + J + V === 0) {
        if (te === tt && (0 < le && (G = G.replace(f, "")), 0 < G.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              G += x.charAt(te);
          }
          g = 59;
        }
        switch (g) {
          case 123:
            for (G = G.trim(), q = G.charCodeAt(0), Q = 1, de = ++te; te < it; ) {
              switch (g = x.charCodeAt(te)) {
                case 123:
                  Q++;
                  break;
                case 125:
                  Q--;
                  break;
                case 47:
                  switch (g = x.charCodeAt(te + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (he = te + 1; he < tt; ++he)
                          switch (x.charCodeAt(he)) {
                            case 47:
                              if (g === 42 && x.charCodeAt(he - 1) === 42 && te + 2 !== he) {
                                te = he + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (g === 47) {
                                te = he + 1;
                                break e;
                              }
                          }
                        te = he;
                      }
                  }
                  break;
                case 91:
                  g++;
                case 40:
                  g++;
                case 34:
                case 39:
                  for (; te++ < tt && x.charCodeAt(te) !== g; )
                    ;
              }
              if (Q === 0)
                break;
              te++;
            }
            switch (Q = x.substring(de, te), q === 0 && (q = (G = G.replace(u, "").trim()).charCodeAt(0)), q) {
              case 64:
                switch (0 < le && (G = G.replace(f, "")), g = G.charCodeAt(1), g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = k;
                    break;
                  default:
                    le = F;
                }
                if (Q = r(k, le, Q, g, h + 1), de = Q.length, 0 < P && (le = t(F, G, et), Te = a(3, Q, le, k, D, K, de, g, h, N), G = le.join(""), Te !== void 0 && (de = (Q = Te.trim()).length) === 0 && (g = 0, Q = "")), 0 < de)
                  switch (g) {
                    case 115:
                      G = G.replace(C, i);
                    case 100:
                    case 109:
                    case 45:
                      Q = G + "{" + Q + "}";
                      break;
                    case 107:
                      G = G.replace(L, "$1 $2"), Q = G + "{" + Q + "}", Q = b === 1 || b === 2 && s("@" + Q, 3) ? "@-webkit-" + Q + "@" + Q : "@" + Q;
                      break;
                    default:
                      Q = G + Q, N === 112 && (Q = (ie += Q, ""));
                  }
                else
                  Q = "";
                break;
              default:
                Q = r(k, t(k, G, et), Q, N, h + 1);
            }
            gt += Q, Q = et = le = he = q = 0, G = "", g = x.charCodeAt(++te);
            break;
          case 125:
          case 59:
            if (G = (0 < le ? G.replace(f, "") : G).trim(), 1 < (de = G.length))
              switch (he === 0 && (q = G.charCodeAt(0), q === 45 || 96 < q && 123 > q) && (de = (G = G.replace(" ", ":")).length), 0 < P && (Te = a(1, G, k, $, D, K, ie.length, N, h, N)) !== void 0 && (de = (G = Te.trim()).length) === 0 && (G = "\0\0"), q = G.charCodeAt(0), g = G.charCodeAt(1), q) {
                case 0:
                  break;
                case 64:
                  if (g === 105 || g === 99) {
                    vt += G + x.charAt(te);
                    break;
                  }
                default:
                  G.charCodeAt(de - 1) !== 58 && (ie += o(G, q, g, G.charCodeAt(2)));
              }
            et = le = he = q = 0, G = "", g = x.charCodeAt(++te);
        }
      }
      switch (g) {
        case 13:
        case 10:
          w === 47 ? w = 0 : 1 + q === 0 && N !== 107 && 0 < G.length && (le = 1, G += "\0"), 0 < P * U && a(0, G, k, $, D, K, ie.length, N, h, N), K = 1, D++;
          break;
        case 59:
        case 125:
          if (w + Z + J + V === 0) {
            K++;
            break;
          }
        default:
          switch (K++, Ce = x.charAt(te), g) {
            case 9:
            case 32:
              if (Z + V + w === 0)
                switch (se) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Ce = "";
                    break;
                  default:
                    g !== 32 && (Ce = " ");
                }
              break;
            case 0:
              Ce = "\\0";
              break;
            case 12:
              Ce = "\\f";
              break;
            case 11:
              Ce = "\\v";
              break;
            case 38:
              Z + w + V === 0 && (le = et = 1, Ce = "\f" + Ce);
              break;
            case 108:
              if (Z + w + V + S === 0 && 0 < he)
                switch (te - he) {
                  case 2:
                    se === 112 && x.charCodeAt(te - 3) === 58 && (S = se);
                  case 8:
                    ae === 111 && (S = ae);
                }
              break;
            case 58:
              Z + w + V === 0 && (he = te);
              break;
            case 44:
              w + J + Z + V === 0 && (le = 1, Ce += "\r");
              break;
            case 34:
            case 39:
              w === 0 && (Z = Z === g ? 0 : Z === 0 ? g : Z);
              break;
            case 91:
              Z + w + J === 0 && V++;
              break;
            case 93:
              Z + w + J === 0 && V--;
              break;
            case 41:
              Z + w + V === 0 && J--;
              break;
            case 40:
              if (Z + w + V === 0) {
                if (q === 0)
                  switch (2 * se + 3 * ae) {
                    case 533:
                      break;
                    default:
                      q = 1;
                  }
                J++;
              }
              break;
            case 64:
              w + J + Z + V + he + Q === 0 && (Q = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Z + V + J))
                switch (w) {
                  case 0:
                    switch (2 * g + 3 * x.charCodeAt(te + 1)) {
                      case 235:
                        w = 47;
                        break;
                      case 220:
                        de = te, w = 42;
                    }
                    break;
                  case 42:
                    g === 47 && se === 42 && de + 2 !== te && (x.charCodeAt(de + 2) === 33 && (ie += x.substring(de, te + 1)), Ce = "", w = 0);
                }
          }
          w === 0 && (G += Ce);
      }
      ae = se, se = g, te++;
    }
    if (de = ie.length, 0 < de) {
      if (le = k, 0 < P && (Te = a(2, ie, le, $, D, K, de, N, h, N), Te !== void 0 && (ie = Te).length === 0))
        return vt + ie + gt;
      if (ie = le.join(",") + "{" + ie + "}", b * S !== 0) {
        switch (b !== 2 || s(ie, 2) || (S = 0), S) {
          case 111:
            ie = ie.replace(A, ":-moz-$1") + ie;
            break;
          case 112:
            ie = ie.replace(Y, "::-webkit-input-$1") + ie.replace(Y, "::-moz-$1") + ie.replace(Y, ":-ms-input-$1") + ie;
        }
        S = 0;
      }
    }
    return vt + ie + gt;
  }
  function t($, k, x) {
    var N = k.trim().split(M);
    k = N;
    var h = N.length, V = $.length;
    switch (V) {
      case 0:
      case 1:
        var w = 0;
        for ($ = V === 0 ? "" : $[0] + " "; w < h; ++w)
          k[w] = n($, k[w], x).trim();
        break;
      default:
        var J = w = 0;
        for (k = []; w < h; ++w)
          for (var Z = 0; Z < V; ++Z)
            k[J++] = n($[Z] + " ", N[w], x).trim();
    }
    return k;
  }
  function n($, k, x) {
    var N = k.charCodeAt(0);
    switch (33 > N && (N = (k = k.trim()).charCodeAt(0)), N) {
      case 38:
        return k.replace(_, "$1" + $.trim());
      case 58:
        return $.trim() + k.replace(_, "$1" + $.trim());
      default:
        if (0 < 1 * x && 0 < k.indexOf("\f"))
          return k.replace(_, ($.charCodeAt(0) === 58 ? "" : "$1") + $.trim());
    }
    return $ + k;
  }
  function o($, k, x, N) {
    var h = $ + ";", V = 2 * k + 3 * x + 4 * N;
    if (V === 944) {
      $ = h.indexOf(":", 9) + 1;
      var w = h.substring($, h.length - 1).trim();
      return w = h.substring(0, $).trim() + w + ";", b === 1 || b === 2 && s(w, 1) ? "-webkit-" + w + w : w;
    }
    if (b === 0 || b === 2 && !s(h, 1))
      return h;
    switch (V) {
      case 1015:
        return h.charCodeAt(10) === 97 ? "-webkit-" + h + h : h;
      case 951:
        return h.charCodeAt(3) === 116 ? "-webkit-" + h + h : h;
      case 963:
        return h.charCodeAt(5) === 110 ? "-webkit-" + h + h : h;
      case 1009:
        if (h.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + h + h;
      case 978:
        return "-webkit-" + h + "-moz-" + h + h;
      case 1019:
      case 983:
        return "-webkit-" + h + "-moz-" + h + "-ms-" + h + h;
      case 883:
        if (h.charCodeAt(8) === 45)
          return "-webkit-" + h + h;
        if (0 < h.indexOf("image-set(", 11))
          return h.replace(X, "$1-webkit-$2") + h;
        break;
      case 932:
        if (h.charCodeAt(4) === 45)
          switch (h.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + h.replace("-grow", "") + "-webkit-" + h + "-ms-" + h.replace("grow", "positive") + h;
            case 115:
              return "-webkit-" + h + "-ms-" + h.replace("shrink", "negative") + h;
            case 98:
              return "-webkit-" + h + "-ms-" + h.replace("basis", "preferred-size") + h;
          }
        return "-webkit-" + h + "-ms-" + h + h;
      case 964:
        return "-webkit-" + h + "-ms-flex-" + h + h;
      case 1023:
        if (h.charCodeAt(8) !== 99)
          break;
        return w = h.substring(h.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + w + "-webkit-" + h + "-ms-flex-pack" + w + h;
      case 1005:
        return y.test(h) ? h.replace(m, ":-webkit-") + h.replace(m, ":-moz-") + h : h;
      case 1e3:
        switch (w = h.substring(13).trim(), k = w.indexOf("-") + 1, w.charCodeAt(0) + w.charCodeAt(k)) {
          case 226:
            w = h.replace(p, "tb");
            break;
          case 232:
            w = h.replace(p, "tb-rl");
            break;
          case 220:
            w = h.replace(p, "lr");
            break;
          default:
            return h;
        }
        return "-webkit-" + h + "-ms-" + w + h;
      case 1017:
        if (h.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (k = (h = $).length - 10, w = (h.charCodeAt(k) === 33 ? h.substring(0, k) : h).substring($.indexOf(":", 7) + 1).trim(), V = w.charCodeAt(0) + (w.charCodeAt(7) | 0)) {
          case 203:
            if (111 > w.charCodeAt(8))
              break;
          case 115:
            h = h.replace(w, "-webkit-" + w) + ";" + h;
            break;
          case 207:
          case 102:
            h = h.replace(w, "-webkit-" + (102 < V ? "inline-" : "") + "box") + ";" + h.replace(w, "-webkit-" + w) + ";" + h.replace(w, "-ms-" + w + "box") + ";" + h;
        }
        return h + ";";
      case 938:
        if (h.charCodeAt(5) === 45)
          switch (h.charCodeAt(6)) {
            case 105:
              return w = h.replace("-items", ""), "-webkit-" + h + "-webkit-box-" + w + "-ms-flex-" + w + h;
            case 115:
              return "-webkit-" + h + "-ms-flex-item-" + h.replace(W, "") + h;
            default:
              return "-webkit-" + h + "-ms-flex-line-pack" + h.replace("align-content", "").replace(W, "") + h;
          }
        break;
      case 973:
      case 989:
        if (h.charCodeAt(3) !== 45 || h.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (I.test($) === !0)
          return (w = $.substring($.indexOf(":") + 1)).charCodeAt(0) === 115 ? o($.replace("stretch", "fill-available"), k, x, N).replace(":fill-available", ":stretch") : h.replace(w, "-webkit-" + w) + h.replace(w, "-moz-" + w.replace("fill-", "")) + h;
        break;
      case 962:
        if (h = "-webkit-" + h + (h.charCodeAt(5) === 102 ? "-ms-" + h : "") + h, x + N === 211 && h.charCodeAt(13) === 105 && 0 < h.indexOf("transform", 10))
          return h.substring(0, h.indexOf(";", 27) + 1).replace(T, "$1-webkit-$2") + h;
    }
    return h;
  }
  function s($, k) {
    var x = $.indexOf(k === 1 ? ":" : "{"), N = $.substring(0, k !== 3 ? x : 10);
    return x = $.substring(x + 1, $.length - 1), B(k !== 2 ? N : N.replace(j, "$1"), x, k);
  }
  function i($, k) {
    var x = o(k, k.charCodeAt(0), k.charCodeAt(1), k.charCodeAt(2));
    return x !== k + ";" ? x.replace(E, " or ($1)").substring(4) : "(" + k + ")";
  }
  function a($, k, x, N, h, V, w, J, Z, q) {
    for (var g = 0, se = k, ae; g < P; ++g)
      switch (ae = v[g].call(d, $, se, x, N, h, V, w, J, Z, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          se = ae;
      }
    if (se !== k)
      return se;
  }
  function l($) {
    switch ($) {
      case void 0:
      case null:
        P = v.length = 0;
        break;
      default:
        if (typeof $ == "function")
          v[P++] = $;
        else if (typeof $ == "object")
          for (var k = 0, x = $.length; k < x; ++k)
            l($[k]);
        else
          U = !!$ | 0;
    }
    return l;
  }
  function c($) {
    return $ = $.prefix, $ !== void 0 && (B = null, $ ? typeof $ != "function" ? b = 1 : (b = 2, B = $) : b = 0), c;
  }
  function d($, k) {
    var x = $;
    if (33 > x.charCodeAt(0) && (x = x.trim()), ee = x, x = [ee], 0 < P) {
      var N = a(-1, k, x, x, D, K, 0, 0, 0, 0);
      N !== void 0 && typeof N == "string" && (k = N);
    }
    var h = r(F, x, k, 0, 0);
    return 0 < P && (N = a(-2, h, x, x, D, K, h.length, 0, 0, 0), N !== void 0 && (h = N)), ee = "", S = 0, K = D = 1, h;
  }
  var u = /^\0+/g, f = /[\0\r\f]/g, m = /: */g, y = /zoo|gra/, T = /([,: ])(transform)/g, M = /,\r+?/g, _ = /([\t\r\n ])*\f?&/g, L = /@(k\w+)\s*(\S*)\s*/, Y = /::(place)/g, A = /:(read-only)/g, p = /[svh]\w+-[tblr]{2}/, C = /\(\s*(.*)\s*\)/g, E = /([\s\S]*?);/g, W = /-self|flex-/g, j = /[^]*?(:[rp][el]a[\w-]+)[^]*/, I = /stretch|:\s*\w+\-(?:conte|avail)/, X = /([^-])(image-set\()/, K = 1, D = 1, S = 0, b = 1, F = [], v = [], P = 0, B = null, U = 0, ee = "";
  return d.use = l, d.set = c, e !== void 0 && c(e), d;
}
var yn = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function gn(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var vn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, or = /* @__PURE__ */ gn(
  function(e) {
    return vn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Bt = ze, wn = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, bn = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, xn = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Rr = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, zt = {};
zt[Bt.ForwardRef] = xn;
zt[Bt.Memo] = Rr;
function sr(e) {
  return Bt.isMemo(e) ? Rr : zt[e.$$typeof] || wn;
}
var Cn = Object.defineProperty, Sn = Object.getOwnPropertyNames, ir = Object.getOwnPropertySymbols, kn = Object.getOwnPropertyDescriptor, Mn = Object.getPrototypeOf, ar = Object.prototype;
function Lr(e, r, t) {
  if (typeof r != "string") {
    if (ar) {
      var n = Mn(r);
      n && n !== ar && Lr(e, n, t);
    }
    var o = Sn(r);
    ir && (o = o.concat(ir(r)));
    for (var s = sr(e), i = sr(r), a = 0; a < o.length; ++a) {
      var l = o[a];
      if (!bn[l] && !(t && t[l]) && !(i && i[l]) && !(s && s[l])) {
        var c = kn(r, l);
        try {
          Cn(e, l, c);
        } catch {
        }
      }
    }
  }
  return e;
}
var $n = Lr;
function Se() {
  return (Se = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var cr = function(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1)
    t.push(r[n], e[n + 1]);
  return t;
}, St = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !ze.typeOf(e);
}, ht = Object.freeze([]), Oe = Object.freeze({});
function Ve(e) {
  return typeof e == "function";
}
function kt(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Vt(e) {
  return e && typeof e.styledComponentId == "string";
}
var Ze = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Zt = typeof window < "u" && "HTMLElement" in window, _n = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), En = {}, Tn = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function Dn() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1)
    r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function $e(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(Dn.apply(void 0, [Tn[e]].concat(t)).trim());
}
var Pn = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var r = e.prototype;
  return r.indexOfGroup = function(t) {
    for (var n = 0, o = 0; o < t; o++)
      n += this.groupSizes[o];
    return n;
  }, r.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, s = o.length, i = s; t >= i; )
        (i <<= 1) < 0 && $e(16, "" + t);
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(o), this.length = i;
      for (var a = s; a < i; a++)
        this.groupSizes[a] = 0;
    }
    for (var l = this.indexOfGroup(t + 1), c = 0, d = n.length; c < d; c++)
      this.tag.insertRule(l, n[c]) && (this.groupSizes[t]++, l++);
  }, r.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], o = this.indexOfGroup(t), s = o + n;
      this.groupSizes[t] = 0;
      for (var i = o; i < s; i++)
        this.tag.deleteRule(o);
    }
  }, r.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return n;
    for (var o = this.groupSizes[t], s = this.indexOfGroup(t), i = s + o, a = s; a < i; a++)
      n += this.tag.getRule(a) + `/*!sc*/
`;
    return n;
  }, e;
}(), dt = /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ new Map(), nt = 1, at = function(e) {
  if (dt.has(e))
    return dt.get(e);
  for (; ft.has(nt); )
    nt++;
  var r = nt++;
  return process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && $e(16, "" + r), dt.set(e, r), ft.set(r, e), r;
}, On = function(e) {
  return ft.get(e);
}, An = function(e, r) {
  r >= nt && (nt = r + 1), dt.set(e, r), ft.set(r, e);
}, Rn = "style[" + Ze + '][data-styled-version="5.3.8"]', Ln = new RegExp("^" + Ze + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Yn = function(e, r, t) {
  for (var n, o = t.split(","), s = 0, i = o.length; s < i; s++)
    (n = o[s]) && e.registerName(r, n);
}, In = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = t.length; o < s; o++) {
    var i = t[o].trim();
    if (i) {
      var a = i.match(Ln);
      if (a) {
        var l = 0 | parseInt(a[1], 10), c = a[2];
        l !== 0 && (An(c, l), Yn(e, c, a[3]), e.getTag().insertRules(l, n)), n.length = 0;
      } else
        n.push(i);
    }
  }
}, Nn = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Yr = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(a) {
    for (var l = a.childNodes, c = l.length; c >= 0; c--) {
      var d = l[c];
      if (d && d.nodeType === 1 && d.hasAttribute(Ze))
        return d;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Ze, "active"), n.setAttribute("data-styled-version", "5.3.8");
  var i = Nn();
  return i && n.setAttribute("nonce", i), t.insertBefore(n, s), n;
}, Hn = function() {
  function e(t) {
    var n = this.element = Yr(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var s = document.styleSheets, i = 0, a = s.length; i < a; i++) {
        var l = s[i];
        if (l.ownerNode === o)
          return l;
      }
      $e(17);
    }(n), this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, r.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, r.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
}(), Wn = function() {
  function e(t) {
    var n = this.element = Yr(t);
    this.nodes = n.childNodes, this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(n), s = this.nodes[t];
      return this.element.insertBefore(o, s || null), this.length++, !0;
    }
    return !1;
  }, r.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Fn = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, r.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), lr = Zt, jn = { isServer: !Zt, useCSSOMInjection: !_n }, pt = function() {
  function e(t, n, o) {
    t === void 0 && (t = Oe), n === void 0 && (n = {}), this.options = Se({}, jn, {}, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && Zt && lr && (lr = !1, function(s) {
      for (var i = document.querySelectorAll(Rn), a = 0, l = i.length; a < l; a++) {
        var c = i[a];
        c && c.getAttribute(Ze) !== "active" && (In(s, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this));
  }
  e.registerId = function(t) {
    return at(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Se({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, i = n.target, t = o ? new Fn(i) : s ? new Hn(i) : new Wn(i), new Pn(t)));
    var t, n, o, s, i;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (at(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(t, o);
    }
  }, r.insertRules = function(t, n, o) {
    this.registerName(t, n), this.getTag().insertRules(at(t), o);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(at(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), o = n.length, s = "", i = 0; i < o; i++) {
        var a = On(i);
        if (a !== void 0) {
          var l = t.names.get(a), c = n.getGroup(i);
          if (l && c && l.size) {
            var d = Ze + ".g" + i + '[id="' + a + '"]', u = "";
            l !== void 0 && l.forEach(function(f) {
              f.length > 0 && (u += f + ",");
            }), s += "" + c + d + '{content:"' + u + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), Bn = /(a)(d)/gi, dr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Mt(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = dr(r % 52) + t;
  return (dr(r % 52) + t).replace(Bn, "$1-$2");
}
var Le = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, Ir = function(e) {
  return Le(5381, e);
};
function Nr(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (Ve(t) && !Vt(t))
      return !1;
  }
  return !0;
}
var zn = Ir("5.3.8"), Vn = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Nr(r), this.componentId = t, this.baseHash = Le(zn, t), this.baseStyle = n, pt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = Ne(this.rules, r, t, n).join(""), a = Mt(Le(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, a)) {
          var l = n(i, "." + a, void 0, o);
          t.insertRules(o, a, l);
        }
        s.push(a), this.staticRulesId = a;
      }
    else {
      for (var c = this.rules.length, d = Le(this.baseHash, n.hash), u = "", f = 0; f < c; f++) {
        var m = this.rules[f];
        if (typeof m == "string")
          u += m, process.env.NODE_ENV !== "production" && (d = Le(d, m + f));
        else if (m) {
          var y = Ne(m, r, t, n), T = Array.isArray(y) ? y.join("") : y;
          d = Le(d, T + f), u += T;
        }
      }
      if (u) {
        var M = Mt(d >>> 0);
        if (!t.hasNameForId(o, M)) {
          var _ = n(u, "." + M, void 0, o);
          t.insertRules(o, M, _);
        }
        s.push(M);
      }
    }
    return s.join(" ");
  }, e;
}(), Zn = /^\s*\/\/.*$/gm, Gn = [":", "[", ".", "#"];
function Un(e) {
  var r, t, n, o, s = e === void 0 ? Oe : e, i = s.options, a = i === void 0 ? Oe : i, l = s.plugins, c = l === void 0 ? ht : l, d = new mn(a), u = [], f = function(T) {
    function M(_) {
      if (_)
        try {
          T(_ + "}");
        } catch {
        }
    }
    return function(_, L, Y, A, p, C, E, W, j, I) {
      switch (_) {
        case 1:
          if (j === 0 && L.charCodeAt(0) === 64)
            return T(L + ";"), "";
          break;
        case 2:
          if (W === 0)
            return L + "/*|*/";
          break;
        case 3:
          switch (W) {
            case 102:
            case 112:
              return T(Y[0] + L), "";
            default:
              return L + (I === 0 ? "/*|*/" : "");
          }
        case -2:
          L.split("/*|*/}").forEach(M);
      }
    };
  }(function(T) {
    u.push(T);
  }), m = function(T, M, _) {
    return M === 0 && Gn.indexOf(_[t.length]) !== -1 || _.match(o) ? T : "." + r;
  };
  function y(T, M, _, L) {
    L === void 0 && (L = "&");
    var Y = T.replace(Zn, ""), A = M && _ ? _ + " " + M + " { " + Y + " }" : Y;
    return r = L, t = M, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), d(_ || !M ? "" : M, A);
  }
  return d.use([].concat(c, [function(T, M, _) {
    T === 2 && _.length && _[0].lastIndexOf(t) > 0 && (_[0] = _[0].replace(n, m));
  }, f, function(T) {
    if (T === -2) {
      var M = u;
      return u = [], M;
    }
  }])), y.hash = c.length ? c.reduce(function(T, M) {
    return M.name || $e(15), Le(T, M.name);
  }, 5381).toString() : "", y;
}
var Hr = Ie.createContext();
Hr.Consumer;
var Wr = Ie.createContext(), Jn = (Wr.Consumer, new pt()), $t = Un();
function Fr() {
  return Re(Hr) || Jn;
}
function jr() {
  return Re(Wr) || $t;
}
var Br = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = $t);
      var i = n.name + s.hash;
      o.hasNameForId(n.id, i) || o.insertRules(n.id, i, s(n.rules, i, "@keyframes"));
    }, this.toString = function() {
      return $e(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = $t), this.name + r.hash;
  }, e;
}(), Xn = /([A-Z])/, qn = /([A-Z])/g, Kn = /^ms-/, Qn = function(e) {
  return "-" + e.toLowerCase();
};
function ur(e) {
  return Xn.test(e) ? e.replace(qn, Qn).replace(Kn, "-ms-") : e;
}
var hr = function(e) {
  return e == null || e === !1 || e === "";
};
function Ne(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], i = 0, a = e.length; i < a; i += 1)
      (o = Ne(e[i], r, t, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (hr(e))
    return "";
  if (Vt(e))
    return "." + e.styledComponentId;
  if (Ve(e)) {
    if (typeof (c = e) != "function" || c.prototype && c.prototype.isReactComponent || !r)
      return e;
    var l = e(r);
    return process.env.NODE_ENV !== "production" && ze.isElement(l) && console.warn(kt(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Ne(l, r, t, n);
  }
  var c;
  return e instanceof Br ? t ? (e.inject(t, n), e.getName(n)) : e : St(e) ? function d(u, f) {
    var m, y, T = [];
    for (var M in u)
      u.hasOwnProperty(M) && !hr(u[M]) && (Array.isArray(u[M]) && u[M].isCss || Ve(u[M]) ? T.push(ur(M) + ":", u[M], ";") : St(u[M]) ? T.push.apply(T, d(u[M], M)) : T.push(ur(M) + ": " + (m = M, (y = u[M]) == null || typeof y == "boolean" || y === "" ? "" : typeof y != "number" || y === 0 || m in yn ? String(y).trim() : y + "px") + ";"));
    return f ? [f + " {"].concat(T, ["}"]) : T;
  }(e) : e.toString();
}
var fr = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Gt(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  return Ve(e) || St(e) ? fr(Ne(cr(ht, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : fr(Ne(cr(e, t)));
}
var pr = /invalid hook call/i, ct = /* @__PURE__ */ new Set(), zr = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (pr.test(s))
          o = !1, ct.delete(t);
        else {
          for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
            a[l - 1] = arguments[l];
          n.apply(void 0, [s].concat(a));
        }
      }, ve(), o && !ct.has(t) && (console.warn(t), ct.add(t));
    } catch (s) {
      pr.test(s.message) && ct.delete(t);
    } finally {
      console.error = n;
    }
  }
}, Vr = function(e, r, t) {
  return t === void 0 && (t = Oe), e.theme !== t.theme && e.theme || r || t.theme;
}, eo = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, to = /(^-|-$)/g;
function wt(e) {
  return e.replace(eo, "-").replace(to, "");
}
var Ut = function(e) {
  return Mt(Ir(e) >>> 0);
};
function lt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var _t = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, ro = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function no(e, r, t) {
  var n = e[t];
  _t(r) && _t(n) ? Zr(n, r) : e[t] = r;
}
function Zr(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  for (var o = 0, s = t; o < s.length; o++) {
    var i = s[o];
    if (_t(i))
      for (var a in i)
        ro(a) && no(e, i[a], a);
  }
  return e;
}
var Ge = Ie.createContext();
Ge.Consumer;
function oo(e) {
  var r = Re(Ge), t = Pe(function() {
    return function(n, o) {
      if (!n)
        return $e(14);
      if (Ve(n)) {
        var s = n(o);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : $e(7);
      }
      return Array.isArray(n) || typeof n != "object" ? $e(8) : o ? Se({}, o, {}, n) : n;
    }(e.theme, r);
  }, [e.theme, r]);
  return e.children ? Ie.createElement(Ge.Provider, { value: t }, e.children) : null;
}
var bt = {};
function Gr(e, r, t) {
  var n = Vt(e), o = !lt(e), s = r.attrs, i = s === void 0 ? ht : s, a = r.componentId, l = a === void 0 ? function(L, Y) {
    var A = typeof L != "string" ? "sc" : wt(L);
    bt[A] = (bt[A] || 0) + 1;
    var p = A + "-" + Ut("5.3.8" + A + bt[A]);
    return Y ? Y + "-" + p : p;
  }(r.displayName, r.parentComponentId) : a, c = r.displayName, d = c === void 0 ? function(L) {
    return lt(L) ? "styled." + L : "Styled(" + kt(L) + ")";
  }(e) : c, u = r.displayName && r.componentId ? wt(r.displayName) + "-" + r.componentId : r.componentId || l, f = n && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, m = r.shouldForwardProp;
  n && e.shouldForwardProp && (m = r.shouldForwardProp ? function(L, Y, A) {
    return e.shouldForwardProp(L, Y, A) && r.shouldForwardProp(L, Y, A);
  } : e.shouldForwardProp);
  var y, T = new Vn(t, u, n ? e.componentStyle : void 0), M = T.isStatic && i.length === 0, _ = function(L, Y) {
    return function(A, p, C, E) {
      var W = A.attrs, j = A.componentStyle, I = A.defaultProps, X = A.foldedComponentIds, K = A.shouldForwardProp, D = A.styledComponentId, S = A.target;
      process.env.NODE_ENV !== "production" && tr(D);
      var b = function(N, h, V) {
        N === void 0 && (N = Oe);
        var w = Se({}, h, { theme: N }), J = {};
        return V.forEach(function(Z) {
          var q, g, se, ae = Z;
          for (q in Ve(ae) && (ae = ae(w)), ae)
            w[q] = J[q] = q === "className" ? (g = J[q], se = ae[q], g && se ? g + " " + se : g || se) : ae[q];
        }), [w, J];
      }(Vr(p, Re(Ge), I) || Oe, p, W), F = b[0], v = b[1], P = function(N, h, V, w) {
        var J = Fr(), Z = jr(), q = h ? N.generateAndInjectStyles(Oe, J, Z) : N.generateAndInjectStyles(V, J, Z);
        return process.env.NODE_ENV !== "production" && tr(q), process.env.NODE_ENV !== "production" && !h && w && w(q), q;
      }(j, E, F, process.env.NODE_ENV !== "production" ? A.warnTooManyClasses : void 0), B = C, U = v.$as || p.$as || v.as || p.as || S, ee = lt(U), $ = v !== p ? Se({}, p, {}, v) : p, k = {};
      for (var x in $)
        x[0] !== "$" && x !== "as" && (x === "forwardedAs" ? k.as = $[x] : (K ? K(x, or, U) : !ee || or(x)) && (k[x] = $[x]));
      return p.style && v.style !== p.style && (k.style = Se({}, p.style, {}, v.style)), k.className = Array.prototype.concat(X, D, P !== D ? P : null, p.className, v.className).filter(Boolean).join(" "), k.ref = B, dn(U, k);
    }(y, L, Y, M);
  };
  return _.displayName = d, (y = Ie.forwardRef(_)).attrs = f, y.componentStyle = T, y.displayName = d, y.shouldForwardProp = m, y.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : ht, y.styledComponentId = u, y.target = n ? e.target : e, y.withComponent = function(L) {
    var Y = r.componentId, A = function(C, E) {
      if (C == null)
        return {};
      var W, j, I = {}, X = Object.keys(C);
      for (j = 0; j < X.length; j++)
        W = X[j], E.indexOf(W) >= 0 || (I[W] = C[W]);
      return I;
    }(r, ["componentId"]), p = Y && Y + "-" + (lt(L) ? L : wt(kt(L)));
    return Gr(L, Se({}, A, { attrs: f, componentId: p }), t);
  }, Object.defineProperty(y, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(L) {
    this._foldedDefaultProps = n ? Zr({}, e.defaultProps, L) : L;
  } }), process.env.NODE_ENV !== "production" && (zr(d, u), y.warnTooManyClasses = function(L, Y) {
    var A = {}, p = !1;
    return function(C) {
      if (!p && (A[C] = !0, Object.keys(A).length >= 200)) {
        var E = Y ? ' with the id of "' + Y + '"' : "";
        console.warn("Over 200 classes were generated for component " + L + E + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), p = !0, A = {};
      }
    };
  }(d, u)), y.toString = function() {
    return "." + y.styledComponentId;
  }, o && $n(y, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), y;
}
var Et = function(e) {
  return function r(t, n, o) {
    if (o === void 0 && (o = Oe), !ze.isValidElementType(n))
      return $e(1, String(n));
    var s = function() {
      return t(n, o, Gt.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return r(t, n, Se({}, o, {}, i));
    }, s.attrs = function(i) {
      return r(t, n, Se({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(Gr, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Et[e] = Et(e);
});
var so = function() {
  function e(t, n) {
    this.rules = t, this.componentId = n, this.isStatic = Nr(t), pt.registerId(this.componentId + 1);
  }
  var r = e.prototype;
  return r.createStyles = function(t, n, o, s) {
    var i = s(Ne(this.rules, n, o, s).join(""), ""), a = this.componentId + t;
    o.insertRules(a, a, i);
  }, r.removeStyles = function(t, n) {
    n.clearRules(this.componentId + t);
  }, r.renderStyles = function(t, n, o, s) {
    t > 2 && pt.registerId(this.componentId + t), this.removeStyles(t, o), this.createStyles(t, n, o, s);
  }, e;
}();
function io(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = Gt.apply(void 0, [e].concat(t)), s = "sc-global-" + Ut(JSON.stringify(o)), i = new so(o, s);
  function a(c) {
    var d = Fr(), u = jr(), f = Re(Ge), m = ve(d.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && Ie.Children.count(c.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(y) {
      return typeof y == "string" && y.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), d.server && l(m, c, d, f, u), Or(function() {
      if (!d.server)
        return l(m, c, d, f, u), function() {
          return i.removeStyles(m, d);
        };
    }, [m, c, d, f, u]), null;
  }
  function l(c, d, u, f, m) {
    if (i.isStatic)
      i.renderStyles(c, En, u, m);
    else {
      var y = Se({}, d, { theme: Vr(d, f, a.defaultProps) });
      i.renderStyles(c, y, u, m);
    }
  }
  return process.env.NODE_ENV !== "production" && zr(s), Ie.memo(a);
}
function ao(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = Gt.apply(void 0, [e].concat(t)).join(""), s = Ut(o);
  return new Br(s, o);
}
var We = function() {
  return Re(Ge);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const H = Et, rt = "reactSchedulerOutsideWrapper", co = io`

  #${rt} {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${rt} *,
 #${rt} *:before,
 #${rt} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`, lo = {
  mode: "light",
  navHeight: "44px",
  colors: {
    background: "#FFFFFF",
    gridBackground: "#FFFFFF",
    primary: "#F8F8FD",
    secondary: "#E6F3FF",
    tertiary: "#C9E5FF",
    mycolor: "#FFF8DC",
    textPrimary: "#1C222F",
    textSecondary: "#FFFFFF",
    placeholder: "#777777",
    button: "#FFFFFF",
    border: "#D2D2D2",
    tooltip: "#3B3C5F",
    hover: "#E6F3FF",
    disabled: "#777777",
    warning: "#EF4444",
    defaultTile: "#728DE2",
    accent: "#0A11EB"
  }
}, uo = {
  mode: "dark",
  navHeight: "44px",
  colors: {
    background: "#161B22",
    gridBackground: "#1E252E",
    primary: "#303b49",
    secondary: "#444e5b",
    tertiary: "#6E757F",
    mycolor: "#BEB799",
    textPrimary: "#DADCE0",
    textSecondary: "#EAEBED",
    placeholder: "#bbbbbb",
    button: "#60676f",
    border: "#2C333A",
    hover: "#303439",
    tooltip: "#3B3C5F",
    disabled: "#38414a",
    warning: "#FF4C4C",
    defaultTile: "#728DE2",
    accent: "#1798c2"
  }
}, qe = `
margin: 0;
padding: 0;
`, Ur = `
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;
H.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;
const ye = 100, _e = 24, Ke = 16, Ye = 40, Ue = Ye + Ke + _e, Ae = 84, we = 56, xe = 196, Me = 12, pe = 50, Je = 24, ot = 16, Tt = 40, ho = Je + ot + Tt, mr = 1, yr = 52, ke = {
  topRow: "600 14px Inter",
  middleRow: "400 10px Inter",
  bottomRow: {
    name: "600 14px Inter",
    number: "600 10px Inter"
  }
}, Be = 3, fo = 1.6, po = 4.5, Dt = 12, mt = 24, mo = "reactSchedulerCanvasHeaderWrapper", Jr = "reactSchedulerCanvasWrapper", He = rt, yo = 4, go = 48, De = 5, vo = 40, gr = 8, Jt = _e / 2 + 2, Xr = Ke / 2 + _e + 1, vr = 2, ce = 60;
var Xe = {}, wo = {
  get exports() {
    return Xe;
  },
  set exports(e) {
    Xe = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(me, function() {
    var t = 1e3, n = 6e4, o = 36e5, s = "millisecond", i = "second", a = "minute", l = "hour", c = "day", d = "week", u = "month", f = "quarter", m = "year", y = "date", T = "Invalid Date", M = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, _ = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, L = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(D) {
      var S = ["th", "st", "nd", "rd"], b = D % 100;
      return "[" + D + (S[(b - 20) % 10] || S[b] || S[0]) + "]";
    } }, Y = function(D, S, b) {
      var F = String(D);
      return !F || F.length >= S ? D : "" + Array(S + 1 - F.length).join(b) + D;
    }, A = { s: Y, z: function(D) {
      var S = -D.utcOffset(), b = Math.abs(S), F = Math.floor(b / 60), v = b % 60;
      return (S <= 0 ? "+" : "-") + Y(F, 2, "0") + ":" + Y(v, 2, "0");
    }, m: function D(S, b) {
      if (S.date() < b.date())
        return -D(b, S);
      var F = 12 * (b.year() - S.year()) + (b.month() - S.month()), v = S.clone().add(F, u), P = b - v < 0, B = S.clone().add(F + (P ? -1 : 1), u);
      return +(-(F + (b - v) / (P ? v - B : B - v)) || 0);
    }, a: function(D) {
      return D < 0 ? Math.ceil(D) || 0 : Math.floor(D);
    }, p: function(D) {
      return { M: u, y: m, w: d, d: c, D: y, h: l, m: a, s: i, ms: s, Q: f }[D] || String(D || "").toLowerCase().replace(/s$/, "");
    }, u: function(D) {
      return D === void 0;
    } }, p = "en", C = {};
    C[p] = L;
    var E = function(D) {
      return D instanceof X;
    }, W = function D(S, b, F) {
      var v;
      if (!S)
        return p;
      if (typeof S == "string") {
        var P = S.toLowerCase();
        C[P] && (v = P), b && (C[P] = b, v = P);
        var B = S.split("-");
        if (!v && B.length > 1)
          return D(B[0]);
      } else {
        var U = S.name;
        C[U] = S, v = U;
      }
      return !F && v && (p = v), v || !F && p;
    }, j = function(D, S) {
      if (E(D))
        return D.clone();
      var b = typeof S == "object" ? S : {};
      return b.date = D, b.args = arguments, new X(b);
    }, I = A;
    I.l = W, I.i = E, I.w = function(D, S) {
      return j(D, { locale: S.$L, utc: S.$u, x: S.$x, $offset: S.$offset });
    };
    var X = function() {
      function D(b) {
        this.$L = W(b.locale, null, !0), this.parse(b);
      }
      var S = D.prototype;
      return S.parse = function(b) {
        this.$d = function(F) {
          var v = F.date, P = F.utc;
          if (v === null)
            return new Date(NaN);
          if (I.u(v))
            return new Date();
          if (v instanceof Date)
            return new Date(v);
          if (typeof v == "string" && !/Z$/i.test(v)) {
            var B = v.match(M);
            if (B) {
              var U = B[2] - 1 || 0, ee = (B[7] || "0").substring(0, 3);
              return P ? new Date(Date.UTC(B[1], U, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, ee)) : new Date(B[1], U, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, ee);
            }
          }
          return new Date(v);
        }(b), this.$x = b.x || {}, this.init();
      }, S.init = function() {
        var b = this.$d;
        this.$y = b.getFullYear(), this.$M = b.getMonth(), this.$D = b.getDate(), this.$W = b.getDay(), this.$H = b.getHours(), this.$m = b.getMinutes(), this.$s = b.getSeconds(), this.$ms = b.getMilliseconds();
      }, S.$utils = function() {
        return I;
      }, S.isValid = function() {
        return this.$d.toString() !== T;
      }, S.isSame = function(b, F) {
        var v = j(b);
        return this.startOf(F) <= v && v <= this.endOf(F);
      }, S.isAfter = function(b, F) {
        return j(b) < this.startOf(F);
      }, S.isBefore = function(b, F) {
        return this.endOf(F) < j(b);
      }, S.$g = function(b, F, v) {
        return I.u(b) ? this[F] : this.set(v, b);
      }, S.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, S.valueOf = function() {
        return this.$d.getTime();
      }, S.startOf = function(b, F) {
        var v = this, P = !!I.u(F) || F, B = I.p(b), U = function(w, J) {
          var Z = I.w(v.$u ? Date.UTC(v.$y, J, w) : new Date(v.$y, J, w), v);
          return P ? Z : Z.endOf(c);
        }, ee = function(w, J) {
          return I.w(v.toDate()[w].apply(v.toDate("s"), (P ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(J)), v);
        }, $ = this.$W, k = this.$M, x = this.$D, N = "set" + (this.$u ? "UTC" : "");
        switch (B) {
          case m:
            return P ? U(1, 0) : U(31, 11);
          case u:
            return P ? U(1, k) : U(0, k + 1);
          case d:
            var h = this.$locale().weekStart || 0, V = ($ < h ? $ + 7 : $) - h;
            return U(P ? x - V : x + (6 - V), k);
          case c:
          case y:
            return ee(N + "Hours", 0);
          case l:
            return ee(N + "Minutes", 1);
          case a:
            return ee(N + "Seconds", 2);
          case i:
            return ee(N + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, S.endOf = function(b) {
        return this.startOf(b, !1);
      }, S.$set = function(b, F) {
        var v, P = I.p(b), B = "set" + (this.$u ? "UTC" : ""), U = (v = {}, v[c] = B + "Date", v[y] = B + "Date", v[u] = B + "Month", v[m] = B + "FullYear", v[l] = B + "Hours", v[a] = B + "Minutes", v[i] = B + "Seconds", v[s] = B + "Milliseconds", v)[P], ee = P === c ? this.$D + (F - this.$W) : F;
        if (P === u || P === m) {
          var $ = this.clone().set(y, 1);
          $.$d[U](ee), $.init(), this.$d = $.set(y, Math.min(this.$D, $.daysInMonth())).$d;
        } else
          U && this.$d[U](ee);
        return this.init(), this;
      }, S.set = function(b, F) {
        return this.clone().$set(b, F);
      }, S.get = function(b) {
        return this[I.p(b)]();
      }, S.add = function(b, F) {
        var v, P = this;
        b = Number(b);
        var B = I.p(F), U = function(k) {
          var x = j(P);
          return I.w(x.date(x.date() + Math.round(k * b)), P);
        };
        if (B === u)
          return this.set(u, this.$M + b);
        if (B === m)
          return this.set(m, this.$y + b);
        if (B === c)
          return U(1);
        if (B === d)
          return U(7);
        var ee = (v = {}, v[a] = n, v[l] = o, v[i] = t, v)[B] || 1, $ = this.$d.getTime() + b * ee;
        return I.w($, this);
      }, S.subtract = function(b, F) {
        return this.add(-1 * b, F);
      }, S.format = function(b) {
        var F = this, v = this.$locale();
        if (!this.isValid())
          return v.invalidDate || T;
        var P = b || "YYYY-MM-DDTHH:mm:ssZ", B = I.z(this), U = this.$H, ee = this.$m, $ = this.$M, k = v.weekdays, x = v.months, N = function(J, Z, q, g) {
          return J && (J[Z] || J(F, P)) || q[Z].slice(0, g);
        }, h = function(J) {
          return I.s(U % 12 || 12, J, "0");
        }, V = v.meridiem || function(J, Z, q) {
          var g = J < 12 ? "AM" : "PM";
          return q ? g.toLowerCase() : g;
        }, w = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: $ + 1, MM: I.s($ + 1, 2, "0"), MMM: N(v.monthsShort, $, x, 3), MMMM: N(x, $), D: this.$D, DD: I.s(this.$D, 2, "0"), d: String(this.$W), dd: N(v.weekdaysMin, this.$W, k, 2), ddd: N(v.weekdaysShort, this.$W, k, 3), dddd: k[this.$W], H: String(U), HH: I.s(U, 2, "0"), h: h(1), hh: h(2), a: V(U, ee, !0), A: V(U, ee, !1), m: String(ee), mm: I.s(ee, 2, "0"), s: String(this.$s), ss: I.s(this.$s, 2, "0"), SSS: I.s(this.$ms, 3, "0"), Z: B };
        return P.replace(_, function(J, Z) {
          return Z || w[J] || B.replace(":", "");
        });
      }, S.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, S.diff = function(b, F, v) {
        var P, B = I.p(F), U = j(b), ee = (U.utcOffset() - this.utcOffset()) * n, $ = this - U, k = I.m(this, U);
        return k = (P = {}, P[m] = k / 12, P[u] = k, P[f] = k / 3, P[d] = ($ - ee) / 6048e5, P[c] = ($ - ee) / 864e5, P[l] = $ / o, P[a] = $ / n, P[i] = $ / t, P)[B] || $, v ? k : I.a(k);
      }, S.daysInMonth = function() {
        return this.endOf(u).$D;
      }, S.$locale = function() {
        return C[this.$L];
      }, S.locale = function(b, F) {
        if (!b)
          return this.$L;
        var v = this.clone(), P = W(b, F, !0);
        return P && (v.$L = P), v;
      }, S.clone = function() {
        return I.w(this.$d, this);
      }, S.toDate = function() {
        return new Date(this.valueOf());
      }, S.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, S.toISOString = function() {
        return this.$d.toISOString();
      }, S.toString = function() {
        return this.$d.toUTCString();
      }, D;
    }(), K = X.prototype;
    return j.prototype = K, [["$ms", s], ["$s", i], ["$m", a], ["$H", l], ["$W", c], ["$M", u], ["$y", m], ["$D", y]].forEach(function(D) {
      K[D[1]] = function(S) {
        return this.$g(S, D[0], D[1]);
      };
    }), j.extend = function(D, S) {
      return D.$i || (D(S, X, j), D.$i = !0), j;
    }, j.locale = W, j.isDayjs = E, j.unix = function(D) {
      return j(1e3 * D);
    }, j.en = C[p], j.Ls = C, j.p = {}, j;
  });
})(wo);
const R = Xe, wr = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, Xt = (e) => {
  const r = e.day();
  return r !== 0 && r !== 6;
}, qr = (e, r) => R(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(r, "months").daysInMonth(), Kr = (e) => ({
  hour: e.hour(),
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: Xt(e),
  isCurrentDay: e.isSame(R(), "day"),
  year: parseInt(e.format("YYYY"))
}), qt = (e, r, t, n, o, s, i) => {
  e.strokeStyle = i.colors.border, s ? e.fillStyle = i.colors.secondary : e.fillStyle = "transparent", e.beginPath(), e.setLineDash([]), e.fillRect(r, t, n, we), e.strokeRect(r + 0.5, t + 0.5, n, we);
}, bo = (e, r, t, n, o) => {
  for (let s = 0; s < r; s++)
    for (let i = 0; i <= t; i++) {
      const a = R(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
        i,
        "days"
      ), l = a.isSame(R(), "day");
      qt(
        e,
        i * ye,
        s * we,
        ye,
        Xt(a),
        l,
        o
      );
    }
}, xo = (e, r, t, n) => {
  e.setLineDash([5, 5]), e.strokeStyle = n.colors.border, e.moveTo(r + 0.5, 0.5), e.lineTo(r + 0.5, t + 0.5), e.stroke();
}, Co = (e, r, t, n, o) => {
  let s = 0, i = -(n.dayOfMonth - 1) * Me;
  for (let a = 0; a <= t; a++) {
    const c = R(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
      a,
      "weeks"
    ).isSame(R(), "week");
    for (let d = 0; d < r; d++)
      qt(e, s, d * we, Ae, !0, c, o);
    s += Ae;
  }
  for (let a = 0; a < t; a++) {
    const l = qr(n, a) * Me;
    xo(e, i, r * we, o), i += l;
  }
}, So = (e, r, t, n, o) => {
  const s = R(`${n.year}-${n.month + 1}-${n.dayOfMonth + 1}`);
  for (let i = 0; i < r; i++)
    for (let a = 0; a <= t; a++) {
      let l;
      a === Math.floor(t / 2) ? l = R() : a > Math.floor(t / 2) ? l = R().add(a - Math.floor(t / 2), "hours") : l = R().subtract(Math.floor(t / 2) - i, "hours");
      const c = s.isSame(R(), "day") && l.isSame(R(), "hour");
      qt(
        e,
        a * pe + pe / 2 - 0.5,
        // -0.5 to make borders better aligned with hour axis
        i * we,
        pe,
        Xt(l),
        c,
        o
      );
    }
}, ko = (e, r, t, n, o, s) => {
  if (e.clearRect(0, 0, e.canvas.width, e.canvas.height), !!document.getElementById(Jr))
    switch (r) {
      case 0:
        Co(e, t, n, o, s);
        break;
      case 1:
        bo(e, t, n, o, s);
        break;
      case 2:
        So(e, t, n, o, s);
        break;
    }
};
var Pt = {}, Mo = {
  get exports() {
    return Pt;
  },
  set exports(e) {
    Pt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(me, function() {
    var t = "week", n = "year";
    return function(o, s, i) {
      var a = s.prototype;
      a.week = function(l) {
        if (l === void 0 && (l = null), l !== null)
          return this.add(7 * (l - this.week()), "day");
        var c = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var d = i(this).startOf(n).add(1, n).date(c), u = i(this).endOf(t);
          if (d.isBefore(u))
            return 1;
        }
        var f = i(this).startOf(n).date(c).startOf(t).subtract(1, "millisecond"), m = this.diff(f, t, !0);
        return m < 0 ? i(this).startOf("week").week() : Math.ceil(m);
      }, a.weeks = function(l) {
        return l === void 0 && (l = null), this.week(l);
      };
    };
  });
})(Mo);
const $o = Pt;
var Ot = {}, _o = {
  get exports() {
    return Ot;
  },
  set exports(e) {
    Ot = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(me, function() {
    return function(t, n, o) {
      n.prototype.dayOfYear = function(s) {
        var i = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
        return s == null ? i : this.add(s - i, "day");
      };
    };
  });
})(_o);
const Eo = Ot;
var At = {}, To = {
  get exports() {
    return At;
  },
  set exports(e) {
    At = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(me, function() {
    var t = "day";
    return function(n, o, s) {
      var i = function(c) {
        return c.add(4 - c.isoWeekday(), t);
      }, a = o.prototype;
      a.isoWeekYear = function() {
        return i(this).year();
      }, a.isoWeek = function(c) {
        if (!this.$utils().u(c))
          return this.add(7 * (c - this.isoWeek()), t);
        var d, u, f, m, y = i(this), T = (d = this.isoWeekYear(), u = this.$u, f = (u ? s.utc : s)().year(d).startOf("year"), m = 4 - f.isoWeekday(), f.isoWeekday() > 4 && (m += 7), f.add(m, t));
        return y.diff(T, "week") + 1;
      }, a.isoWeekday = function(c) {
        return this.$utils().u(c) ? this.day() || 7 : this.day(this.day() % 7 ? c : c - 7);
      };
      var l = a.startOf;
      a.startOf = function(c, d) {
        var u = this.$utils(), f = !!u.u(d) || d;
        return u.p(c) === "isoweek" ? f ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : l.bind(this)(c, d);
      };
    };
  });
})(To);
const Do = At;
var Rt = {}, Po = {
  get exports() {
    return Rt;
  },
  set exports(e) {
    Rt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(me, function() {
    return function(t, n, o) {
      n.prototype.isBetween = function(s, i, a, l) {
        var c = o(s), d = o(i), u = (l = l || "()")[0] === "(", f = l[1] === ")";
        return (u ? this.isAfter(c, a) : !this.isBefore(c, a)) && (f ? this.isBefore(d, a) : !this.isAfter(d, a)) || (u ? this.isBefore(c, a) : !this.isAfter(c, a)) && (f ? this.isAfter(d, a) : !this.isBefore(d, a));
      };
    };
  });
})(Po);
const Oo = Rt;
var Lt = {}, Ao = {
  get exports() {
    return Lt;
  },
  set exports(e) {
    Lt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(me, function() {
    var t, n, o = 1e3, s = 6e4, i = 36e5, a = 864e5, l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, c = 31536e6, d = 2592e6, u = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, f = { years: c, months: d, days: a, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, m = function(p) {
      return p instanceof A;
    }, y = function(p, C, E) {
      return new A(p, E, C.$l);
    }, T = function(p) {
      return n.p(p) + "s";
    }, M = function(p) {
      return p < 0;
    }, _ = function(p) {
      return M(p) ? Math.ceil(p) : Math.floor(p);
    }, L = function(p) {
      return Math.abs(p);
    }, Y = function(p, C) {
      return p ? M(p) ? { negative: !0, format: "" + L(p) + C } : { negative: !1, format: "" + p + C } : { negative: !1, format: "" };
    }, A = function() {
      function p(E, W, j) {
        var I = this;
        if (this.$d = {}, this.$l = j, E === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), W)
          return y(E * f[T(W)], this);
        if (typeof E == "number")
          return this.$ms = E, this.parseFromMilliseconds(), this;
        if (typeof E == "object")
          return Object.keys(E).forEach(function(D) {
            I.$d[T(D)] = E[D];
          }), this.calMilliseconds(), this;
        if (typeof E == "string") {
          var X = E.match(u);
          if (X) {
            var K = X.slice(2).map(function(D) {
              return D != null ? Number(D) : 0;
            });
            return this.$d.years = K[0], this.$d.months = K[1], this.$d.weeks = K[2], this.$d.days = K[3], this.$d.hours = K[4], this.$d.minutes = K[5], this.$d.seconds = K[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var C = p.prototype;
      return C.calMilliseconds = function() {
        var E = this;
        this.$ms = Object.keys(this.$d).reduce(function(W, j) {
          return W + (E.$d[j] || 0) * f[j];
        }, 0);
      }, C.parseFromMilliseconds = function() {
        var E = this.$ms;
        this.$d.years = _(E / c), E %= c, this.$d.months = _(E / d), E %= d, this.$d.days = _(E / a), E %= a, this.$d.hours = _(E / i), E %= i, this.$d.minutes = _(E / s), E %= s, this.$d.seconds = _(E / o), E %= o, this.$d.milliseconds = E;
      }, C.toISOString = function() {
        var E = Y(this.$d.years, "Y"), W = Y(this.$d.months, "M"), j = +this.$d.days || 0;
        this.$d.weeks && (j += 7 * this.$d.weeks);
        var I = Y(j, "D"), X = Y(this.$d.hours, "H"), K = Y(this.$d.minutes, "M"), D = this.$d.seconds || 0;
        this.$d.milliseconds && (D += this.$d.milliseconds / 1e3);
        var S = Y(D, "S"), b = E.negative || W.negative || I.negative || X.negative || K.negative || S.negative, F = X.format || K.format || S.format ? "T" : "", v = (b ? "-" : "") + "P" + E.format + W.format + I.format + F + X.format + K.format + S.format;
        return v === "P" || v === "-P" ? "P0D" : v;
      }, C.toJSON = function() {
        return this.toISOString();
      }, C.format = function(E) {
        var W = E || "YYYY-MM-DDTHH:mm:ss", j = { Y: this.$d.years, YY: n.s(this.$d.years, 2, "0"), YYYY: n.s(this.$d.years, 4, "0"), M: this.$d.months, MM: n.s(this.$d.months, 2, "0"), D: this.$d.days, DD: n.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: n.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: n.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: n.s(this.$d.seconds, 2, "0"), SSS: n.s(this.$d.milliseconds, 3, "0") };
        return W.replace(l, function(I, X) {
          return X || String(j[I]);
        });
      }, C.as = function(E) {
        return this.$ms / f[T(E)];
      }, C.get = function(E) {
        var W = this.$ms, j = T(E);
        return j === "milliseconds" ? W %= 1e3 : W = j === "weeks" ? _(W / f[j]) : this.$d[j], W === 0 ? 0 : W;
      }, C.add = function(E, W, j) {
        var I;
        return I = W ? E * f[T(W)] : m(E) ? E.$ms : y(E, this).$ms, y(this.$ms + I * (j ? -1 : 1), this);
      }, C.subtract = function(E, W) {
        return this.add(E, W, !0);
      }, C.locale = function(E) {
        var W = this.clone();
        return W.$l = E, W;
      }, C.clone = function() {
        return y(this.$ms, this);
      }, C.humanize = function(E) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!E);
      }, C.milliseconds = function() {
        return this.get("milliseconds");
      }, C.asMilliseconds = function() {
        return this.as("milliseconds");
      }, C.seconds = function() {
        return this.get("seconds");
      }, C.asSeconds = function() {
        return this.as("seconds");
      }, C.minutes = function() {
        return this.get("minutes");
      }, C.asMinutes = function() {
        return this.as("minutes");
      }, C.hours = function() {
        return this.get("hours");
      }, C.asHours = function() {
        return this.as("hours");
      }, C.days = function() {
        return this.get("days");
      }, C.asDays = function() {
        return this.as("days");
      }, C.weeks = function() {
        return this.get("weeks");
      }, C.asWeeks = function() {
        return this.as("weeks");
      }, C.months = function() {
        return this.get("months");
      }, C.asMonths = function() {
        return this.as("months");
      }, C.years = function() {
        return this.get("years");
      }, C.asYears = function() {
        return this.as("years");
      }, p;
    }();
    return function(p, C, E) {
      t = E, n = E().$utils(), E.duration = function(I, X) {
        var K = E.locale();
        return y(I, { $l: K }, X);
      }, E.isDuration = m;
      var W = C.prototype.add, j = C.prototype.subtract;
      C.prototype.add = function(I, X) {
        return m(I) && (I = I.asMilliseconds()), W.bind(this)(I, X);
      }, C.prototype.subtract = function(I, X) {
        return m(I) && (I = I.asMilliseconds()), j.bind(this)(I, X);
      };
    };
  });
})(Ao);
const Ro = Lt;
var Lo = "Expected a function", br = 0 / 0, Yo = "[object Symbol]", Io = /^\s+|\s+$/g, No = /^[-+]0x[0-9a-f]+$/i, Ho = /^0b[01]+$/i, Wo = /^0o[0-7]+$/i, Fo = parseInt, jo = typeof me == "object" && me && me.Object === Object && me, Bo = typeof self == "object" && self && self.Object === Object && self, zo = jo || Bo || Function("return this")(), Vo = Object.prototype, Zo = Vo.toString, Go = Math.max, Uo = Math.min, xt = function() {
  return zo.Date.now();
};
function Jo(e, r, t) {
  var n, o, s, i, a, l, c = 0, d = !1, u = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(Lo);
  r = xr(r) || 0, Yt(t) && (d = !!t.leading, u = "maxWait" in t, s = u ? Go(xr(t.maxWait) || 0, r) : s, f = "trailing" in t ? !!t.trailing : f);
  function m(C) {
    var E = n, W = o;
    return n = o = void 0, c = C, i = e.apply(W, E), i;
  }
  function y(C) {
    return c = C, a = setTimeout(_, r), d ? m(C) : i;
  }
  function T(C) {
    var E = C - l, W = C - c, j = r - E;
    return u ? Uo(j, s - W) : j;
  }
  function M(C) {
    var E = C - l, W = C - c;
    return l === void 0 || E >= r || E < 0 || u && W >= s;
  }
  function _() {
    var C = xt();
    if (M(C))
      return L(C);
    a = setTimeout(_, T(C));
  }
  function L(C) {
    return a = void 0, f && n ? m(C) : (n = o = void 0, i);
  }
  function Y() {
    a !== void 0 && clearTimeout(a), c = 0, n = l = o = a = void 0;
  }
  function A() {
    return a === void 0 ? i : L(xt());
  }
  function p() {
    var C = xt(), E = M(C);
    if (n = arguments, o = this, l = C, E) {
      if (a === void 0)
        return y(l);
      if (u)
        return a = setTimeout(_, r), m(l);
    }
    return a === void 0 && (a = setTimeout(_, r)), i;
  }
  return p.cancel = Y, p.flush = A, p;
}
function Yt(e) {
  var r = typeof e;
  return !!e && (r == "object" || r == "function");
}
function Xo(e) {
  return !!e && typeof e == "object";
}
function qo(e) {
  return typeof e == "symbol" || Xo(e) && Zo.call(e) == Yo;
}
function xr(e) {
  if (typeof e == "number")
    return e;
  if (qo(e))
    return br;
  if (Yt(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Yt(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Io, "");
  var t = Ho.test(e);
  return t || Wo.test(e) ? Fo(e.slice(2), t ? 2 : 8) : No.test(e) ? br : +e;
}
var Fe = Jo;
const ut = [0, 1, 2], Ko = (e) => ut.includes(e), je = (e) => {
  var n;
  const t = (((n = document.getElementById(He)) == null ? void 0 : n.clientWidth) || 0) - xe;
  switch (e) {
    case 1:
      return Math.ceil(t / ye) * Be;
    case 2:
      return Math.ceil(t / pe) * Be;
    default:
      return Math.ceil(t / Ae) * Be;
  }
}, Qo = (e) => je(e) / Be, Kt = (e, r) => {
  const t = je(r) / 2;
  let n;
  switch (r) {
    case 1:
      n = e.subtract(t, "days");
      break;
    case 2:
      n = e.subtract(t, "hours");
      break;
    default:
      n = e.subtract(t, "weeks");
      break;
  }
  let o;
  switch (r) {
    case 1:
      o = e.add(t, "days");
      break;
    case 2:
      o = e.add(t, "hours");
      break;
    default:
      o = e.add(t, "weeks");
      break;
  }
  return {
    startDate: n,
    endDate: o
  };
}, es = (e, r) => {
  const t = Kt(e, r);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, Qt = () => {
  var t;
  return ((((t = document.getElementById(He)) == null ? void 0 : t.clientWidth) || 0) - xe) * Be;
}, Qr = Ar({
  handleGoNext: () => {
  },
  handleScrollNext: () => {
  },
  handleGoPrev: () => {
  },
  handleScrollPrev: () => {
  },
  handleGoToday: () => {
  },
  zoomIn: () => {
  },
  zoomOut: () => {
  },
  handleFilterData: () => {
  },
  updateTilesCoords: () => {
  },
  tilesCoords: [],
  zoom: 0,
  isNextZoom: !1,
  isPrevZoom: !1,
  date: R(),
  isLoading: !1,
  cols: 0,
  startDate: {
    hour: 0,
    dayName: "",
    dayOfMonth: 0,
    weekOfYear: 0,
    month: 0,
    monthName: "",
    isCurrentDay: !1,
    isBusinessDay: !1,
    year: 0
  },
  dayOfYear: 0,
  recordsThreshold: 0,
  config: {
    zoom: 0
  }
});
R.extend($o);
R.extend(Eo);
R.extend(Do);
R.extend(Oo);
R.extend(Ro);
const ts = ({
  data: e,
  children: r,
  isLoading: t,
  config: n,
  defaultStartDate: o = R(),
  onRangeChange: s,
  onFilterData: i,
  onClearFilterData: a
}) => {
  const { zoom: l, maxRecordsPerPage: c = 50 } = n, [d, u] = fe(l), [f, m] = fe(R()), [y, T] = fe(!1), [M, _] = fe(je(d)), L = ut[d] !== ut[ut.length - 1], Y = d !== 0, A = Pe(() => es(f, d), [f, d]), p = Kt(f, d).startDate, C = R(p).dayOfYear(), E = Kr(p), W = ve(null), [j, I] = fe([{ x: 0, y: 0 }]), X = ge(
    (x, N = "auto") => {
      var V, w, J, Z;
      const h = Qt();
      switch (x) {
        case "back":
          return (V = W.current) == null ? void 0 : V.scrollTo({
            behavior: N,
            left: h / 3
          });
        case "forward":
          return (w = W.current) == null ? void 0 : w.scrollTo({
            behavior: N,
            left: h / 3
          });
        case "middle": {
          const q = h / Be / 4;
          return (J = W.current) == null ? void 0 : J.scrollTo({
            behavior: N,
            left: h / 2 - q
          });
        }
        default:
          return (Z = W.current) == null ? void 0 : Z.scrollTo({
            behavior: N,
            left: h / 2
          });
      }
    },
    []
  ), K = (x) => {
    I(x);
  }, D = ge(
    (x) => {
      const N = Qo(d);
      let h;
      switch (d) {
        case 0:
          h = N * 7;
          break;
        case 1:
          h = N;
          break;
        case 2:
          h = Math.ceil(N / mt);
          break;
      }
      Fe(() => {
        switch (x) {
          case "back":
            m((w) => w.subtract(h, "days"));
            break;
          case "forward":
            m((w) => w.add(h, "days"));
            break;
          case "middle":
            m(R());
            break;
        }
        s == null || s(A);
      }, 300)();
    },
    [s, A, d]
  );
  ue(() => {
    W.current = document.getElementById(He), _(je(d));
  }, [d]), ue(() => {
    const x = () => _(je(d));
    return window.addEventListener("resize", x), () => window.removeEventListener("resize", x);
  }, [d]), ue(() => {
    s == null || s(A);
  }, [s, A]), ue(() => {
    T(!1);
  }, [o]), ue(() => {
    y || (X("middle"), T(!0), m(o));
  }, [o, y, X]);
  const S = () => {
    t || (m(
      (x) => d === 2 ? x.add(mr, "hours") : x.add(vr, "weeks")
    ), s == null || s(A));
  }, b = ge(() => {
    t || (D("forward"), Fe(() => {
      X("forward");
    }, 300)());
  }, [t, D, X]), F = () => {
    t || (m(
      (x) => d === 2 ? x.subtract(mr, "hours") : x.subtract(vr, "weeks")
    ), s == null || s(A));
  }, v = ge(() => {
    !y || t || (D("back"), Fe(() => {
      X("back");
    }, 300)());
  }, [y, t, D, X]), P = ge(() => {
    t || (D("middle"), Fe(() => {
      X("middle", "smooth");
    }, 300)());
  }, [t, D, X]), B = () => ee(d + 1), U = () => ee(d - 1), ee = (x) => {
    Ko(x) && (u(x), _(je(x)), s == null || s(A));
  }, $ = () => i == null ? void 0 : i(), { Provider: k } = Qr;
  return /* @__PURE__ */ O(
    k,
    {
      value: {
        data: e,
        config: n,
        handleGoNext: S,
        handleScrollNext: b,
        handleGoPrev: F,
        handleScrollPrev: v,
        handleGoToday: P,
        zoomIn: B,
        zoomOut: U,
        zoom: d,
        isNextZoom: L,
        isPrevZoom: Y,
        date: f,
        isLoading: t,
        cols: M,
        startDate: E,
        dayOfYear: C,
        handleFilterData: $,
        tilesCoords: j,
        updateTilesCoords: K,
        recordsThreshold: c,
        onClearFilterData: a
      },
      children: r
    }
  );
}, Qe = () => Re(Qr), en = (e, r, t) => {
  e.canvas.width = r * window.devicePixelRatio, e.canvas.height = t * window.devicePixelRatio, e.canvas.style.width = r + "px", e.canvas.style.height = t + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, rs = H.div`
  height: calc(100vh - headerHeight);
`, ns = H.div`
  position: relative;
`, os = H.canvas``;
H.canvas``;
const Cr = H.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`, ss = un(function({ zoom: r, rows: t, data: n, onTileClick: o }, s) {
  const { handleScrollNext: i, handleScrollPrev: a, date: l, isLoading: c, cols: d, startDate: u } = Qe(), f = ve(null), m = ve(null), y = ve(null), T = We(), M = ge(
    (_) => {
      const L = Qt(), Y = t * we + 1;
      en(_, L, Y), ko(_, r, t, d, u, T);
    },
    [d, u, t, r, T]
  );
  return ue(() => {
    if (!f.current)
      return;
    const _ = f.current.getContext("2d");
    if (!_)
      return;
    const L = () => M(_);
    return window.addEventListener("resize", L), () => window.removeEventListener("resize", L);
  }, [M]), ue(() => {
    const _ = f.current;
    if (!_)
      return;
    _.style.letterSpacing = "1px";
    const L = _.getContext("2d");
    L && M(L);
  }, [l, t, r, M]), ue(() => {
    if (!m.current)
      return;
    const _ = new IntersectionObserver(
      (L) => L[0].isIntersecting ? i() : null,
      { root: document.getElementById(He) }
    );
    return _.observe(m.current), () => _.disconnect();
  }, [i]), ue(() => {
    if (!y.current)
      return;
    const _ = new IntersectionObserver(
      (L) => L[0].isIntersecting ? a() : null,
      {
        root: document.getElementById(He),
        rootMargin: `0px 0px 0px -${xe}px`
      }
    );
    return _.observe(y.current), () => _.disconnect();
  }, [a]), /* @__PURE__ */ O(rs, { id: Jr, children: /* @__PURE__ */ oe(ns, { ref: s, children: [
    /* @__PURE__ */ O(Cr, { position: "left", ref: y }),
    /* @__PURE__ */ O(_r, { isLoading: c, position: "left" }),
    /* @__PURE__ */ O(os, { ref: f }),
    /* @__PURE__ */ O(Ui, { data: n, zoom: r, onTileClick: o }),
    /* @__PURE__ */ O(Cr, { ref: m, position: "right" }),
    /* @__PURE__ */ O(_r, { isLoading: c, position: "right" })
  ] }) });
}), tn = (e) => {
  const r = R.duration(e, "seconds"), t = r.hours(), n = r.minutes();
  return { hours: t, minutes: n };
}, rn = (e) => {
  let r = 0, t = 0, n = 0;
  return e.forEach((o) => {
    r += o.minutes;
    const s = Math.floor(r / ce);
    t += o.hours + s, n += r % ce, n >= ce && (t++, n -= ce);
  }), { hours: t, minutes: n };
}, nn = (e, r) => {
  let t = gr;
  switch (r) {
    case 0:
      t = vo;
      break;
    case 1:
      t = gr;
      break;
    case 2:
      t = 1;
      break;
  }
  const n = () => {
    let s = t - e.hours - 1, i = ce - e.minutes;
    return i === ce && (s++, i = 0), { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  }, o = () => {
    const s = e.hours - t, i = e.minutes;
    return { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  };
  return {
    free: n(),
    overtime: o()
  };
}, is = (e, r, t) => {
  const n = r.isoWeek(), o = e.map((c) => {
    const d = R(c.startDate).isoWeek(), u = R(c.startDate).isoWeekday(), f = R(c.endDate).isoWeek(), m = R(c.endDate).isoWeekday(), { hours: y, minutes: T } = tn(c.occupancy);
    if (n === d) {
      const M = (De + 1 - u) * y, _ = (De + 1 - u) * T;
      return { hours: Math.max(0, M), minutes: _ };
    } else if (n === f) {
      const M = m > De ? De * y : m * y, _ = m > De ? De * T : m * T;
      return { hours: M, minutes: _ };
    } else if (R(r).isBetween(c.startDate, c.endDate))
      return { hours: De * y, minutes: De * T };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = rn(o), { free: a, overtime: l } = nn({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: a,
    overtime: l
  };
}, as = (e, r, t, n) => {
  const o = r.isoWeekday(), s = e.map((d) => {
    const { hours: u, minutes: f } = tn(d.occupancy);
    return o <= (n ? 7 : 5) ? { hours: u, minutes: f } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: a } = rn(s), { free: l, overtime: c } = nn({ hours: i, minutes: a }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, a) },
    free: l,
    overtime: c
  };
}, cs = (e, r) => {
  let t = 0;
  e.forEach((a) => {
    const l = R(a.startDate).hour(), c = R(a.endDate).hour(), d = r.hour(), u = R(a.endDate).minute(), f = R(a.startDate).minute();
    l < d && c > d ? t += ce : l === d && c === d && f && u ? t += u ? u - f : ce - f : l === d && c >= d ? t += f ? ce - f : ce : c === d && u && (t += u);
  });
  const n = Math.floor(t / ce), o = t % ce, s = n || o ? 0 : 1, i = n ? 0 : o ? ce - o : 0;
  return {
    taken: { hours: n, minutes: o },
    free: { hours: s, minutes: i },
    overtime: { hours: 0, minutes: 0 }
  };
}, ls = (e, r, t, n, o = !1) => {
  if (r < 0)
    return {
      taken: { hours: 0, minutes: 0 },
      free: { hours: 0, minutes: 0 },
      overtime: { hours: 0, minutes: 0 }
    };
  const s = e.flat(2).filter((i) => n === 1 ? R(t).isBetween(i.startDate, i.endDate, "day", "[]") : n === 2 ? R(t).isBetween(i.startDate, i.endDate, "hour", "[]") : R(i.startDate).isBetween(
    R(t),
    R(t).add(6, "days"),
    "day",
    "[]"
  ) || R(t).isBetween(R(i.startDate), R(i.endDate), "day", "[]"));
  switch (n) {
    case 1:
      return as(s, t, n, o);
    case 2:
      return cs(s, t);
    default:
      return is(s, t, n);
  }
}, ds = (e, r, t, n, o, s = !1) => {
  let i = "weeks", a;
  switch (o) {
    case 0:
      i = "weeks", a = Ae;
      break;
    case 1:
      i = "days", a = ye;
      break;
    case 2:
      i = "hours", a = pe;
      break;
  }
  const l = Math.ceil(o === 2 ? (r.x - 0.5 * a) / a : r.x / a), c = R(
    `${e.year}-${e.month + 1}-${e.dayOfMonth}T${e.hour}:00:00`
  ).add(l - 1, i), d = Math.ceil(r.y / we), u = t.findIndex((T, M, _) => _.slice(0, M + 1).reduce((Y, A) => Y + A, 0) >= d), f = o === 2 ? (l + 1) * a : l * a, m = (d - 1) * we + we, y = ls(
    n[u],
    u,
    c,
    o,
    s
  );
  return { coords: { x: f, y: m }, resourceIndex: u, disposition: y };
}, us = (e, r, t, n) => {
  const o = [];
  let s = 0, i = [], a = 0;
  return r.length > n ? (r.forEach((l, c) => {
    const d = { id: e[c].id, label: e[c].label, data: l };
    a >= n && (o.push(i), s += i.length, i = [], a = 0), a++, i.push(d);
  }), t.slice(s).length <= n && (i = [], r.slice(s).forEach((l, c) => {
    const d = {
      id: e[c + s].id,
      label: e[c + s].label,
      data: l
    };
    i.push(d), c === r.length - s - 1 && o.push(i);
  })), o) : (r.forEach((l, c) => {
    const d = { id: e[c].id, label: e[c].label, data: l };
    i.push(d);
  }), o.push(i), o);
}, hs = (e) => {
  const r = [];
  for (const t of e) {
    let n = !1;
    if (r.length)
      for (const o of r) {
        let s = !1;
        for (let i = 0; i < o.length; i++) {
          if (R(t.startDate).isBetween(o[i].startDate, o[i].endDate, null, "[]") || R(t.endDate).isBetween(o[i].startDate, o[i].endDate, null, "[]")) {
            s = !0;
            break;
          }
          if (R(t.startDate).isBefore(o[i].startDate, "day") && R(t.endDate).isAfter(o[i].endDate, "day")) {
            s = !0;
            break;
          }
        }
        if (!s) {
          o.push(t), n = !0;
          break;
        }
      }
    n || r.push([t]);
  }
  return r;
}, fs = (e) => {
  const r = [[], []], [t, n] = e.reduce((o, s) => {
    const i = hs(s.data);
    return o[0].push(i), o[1].push(Math.max(i.length, 1)), o;
  }, r);
  return { projectsPerPerson: t, rowsPerPerson: n };
}, ps = (e) => e ? e.map((r) => r.data.length).reduce((r, t) => r + Math.max(t, 1), 0) : 0, ms = (e) => {
  const { recordsThreshold: r } = Qe(), [t, n] = fe(0), [o, s] = fe(0), i = ve(null);
  ue(() => {
    i.current = document.getElementById(He);
  }, []);
  const { projectsPerPerson: a, rowsPerPerson: l } = Pe(() => fs(e), [e]), c = Pe(
    () => us(e, a, l, r),
    [e, a, r, l]
  ), d = ge(() => {
    c[o].length && i.current && (i.current.scroll({ top: 0 }), n((M) => M + c[Math.max(o, 0)].length), s((M) => Math.min(M + 1, c.length - 1)), window.scroll({ top: 0 }));
  }, [o, c]), u = ge(() => {
    c[o].length && (n((M) => Math.max(M - c[o - 1].length, 0)), s((M) => Math.max(M - 1, 0)));
  }, [o, c]), f = ge(() => {
    n(0), s(0);
  }, []), m = t + c[o].length, y = Pe(
    () => l.slice(t, m),
    [m, l, t]
  ), T = Pe(
    () => a.slice(t, m),
    [m, a, t]
  );
  return {
    page: c[o],
    currentPageNum: o,
    pagesAmount: c.length,
    projectsPerPerson: T,
    rowsPerItem: y,
    totalRowsPerPage: ps(c[o]),
    next: d,
    previous: u,
    reset: f
  };
}, ys = H.div`
  position: relative;
  display: flex;
`, gs = H.div`
  position: relative;
  margin-left: ${xe};
  display: flex;
  flex-direction: column;
  contain: paint;
`;
H.div`
  width: calc(${({ width: e }) => e}px - ${xe}px);
  position: sticky;
  top: 0;
  height: 100%;
  left: ${xe}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Sr = {
  coords: { x: 0, y: 0 },
  resourceIndex: 0,
  disposition: {
    taken: { hours: 0, minutes: 0 },
    free: { hours: 0, minutes: 0 },
    overtime: { hours: 0, minutes: 0 }
  }
}, vs = ({
  data: e,
  onTileClick: r,
  onItemClick: t,
  toggleTheme: n,
  topBarWidth: o
}) => {
  const [s, i] = fe(Sr), [a, l] = fe(e), [c, d] = fe(!1), [u, f] = fe(""), {
    zoom: m,
    startDate: y,
    config: { includeTakenHoursOnWeekendsInDayView: T, showTooltip: M, showThemeToggle: _, showZoomToggle: L }
  } = Qe(), Y = ve(null), {
    page: A,
    projectsPerPerson: p,
    totalRowsPerPage: C,
    rowsPerItem: E,
    currentPageNum: W,
    pagesAmount: j,
    next: I,
    previous: X,
    reset: K
  } = ms(a), D = ve(
    Fe(
      (v, P, B, U, ee) => {
        if (!Y.current)
          return;
        const { left: $, top: k } = Y.current.getBoundingClientRect(), x = { x: v.clientX - $, y: v.clientY - k }, {
          coords: { x: N, y: h },
          resourceIndex: V,
          disposition: w
        } = ds(
          P,
          x,
          B,
          U,
          ee,
          T
        );
        i({ coords: { x: N, y: h }, resourceIndex: V, disposition: w }), d(!0);
      },
      300
    )
  ), S = ve(
    Fe((v, P) => {
      K(), l(
        v.filter(
          (B) => B.label.title.toLowerCase().includes(P.toLowerCase())
        )
      );
    }, 500)
  ), b = (v) => {
    const P = v.target.value;
    f(P), S.current.cancel(), S.current(e, P);
  }, F = ge(() => {
    D.current.cancel(), d(!1), i(Sr);
  }, []);
  return ue(() => {
    const v = (B) => D.current(B, y, E, p, m), P = Y.current;
    if (P)
      return P.addEventListener("mousemove", v), P.addEventListener("mouseleave", F), () => {
        P.removeEventListener("mousemove", v), P.removeEventListener("mouseleave", F);
      };
  }, [D, F, p, E, y, m]), ue(() => {
    u || l(e);
  }, [e, u]), /* @__PURE__ */ oe(ys, { children: [
    /* @__PURE__ */ O(
      bi,
      {
        data: A,
        pageNum: W,
        pagesAmount: j,
        rows: E,
        onLoadNext: I,
        onLoadPrevious: X,
        searchInputValue: u,
        onSearchInputChange: b,
        onItemClick: t
      }
    ),
    /* @__PURE__ */ oe(gs, { children: [
      /* @__PURE__ */ O(
        Ni,
        {
          zoom: m,
          topBarWidth: o,
          showThemeToggle: _,
          showZoomToggle: L,
          toggleTheme: n
        }
      ),
      /* @__PURE__ */ O(
        ss,
        {
          data: A,
          zoom: m,
          rows: C,
          ref: Y,
          onTileClick: r
        }
      ),
      M && c && (s == null ? void 0 : s.resourceIndex) > -1 && /* @__PURE__ */ O(ea, { tooltipData: s, zoom: m })
    ] })
  ] });
};
var It = {}, ws = {
  get exports() {
    return It;
  },
  set exports(e) {
    It = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(me, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
      var n = ["th", "st", "nd", "rd"], o = t % 100;
      return "[" + t + (n[(o - 20) % 10] || n[o] || n[0]) + "]";
    } };
  });
})(ws);
const bs = It;
var Nt = {}, xs = {
  get exports() {
    return Nt;
  },
  set exports(e) {
    Nt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(Xe);
  })(me, function(t) {
    function n(f) {
      return f && typeof f == "object" && "default" in f ? f : { default: f };
    }
    var o = n(t);
    function s(f) {
      return f % 10 < 5 && f % 10 > 1 && ~~(f / 10) % 10 != 1;
    }
    function i(f, m, y) {
      var T = f + " ";
      switch (y) {
        case "m":
          return m ? "minuta" : "minutę";
        case "mm":
          return T + (s(f) ? "minuty" : "minut");
        case "h":
          return m ? "godzina" : "godzinę";
        case "hh":
          return T + (s(f) ? "godziny" : "godzin");
        case "MM":
          return T + (s(f) ? "miesiące" : "miesięcy");
        case "yy":
          return T + (s(f) ? "lata" : "lat");
      }
    }
    var a = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), l = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), c = /D MMMM/, d = function(f, m) {
      return c.test(m) ? a[f.month()] : l[f.month()];
    };
    d.s = l, d.f = a;
    var u = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: d, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(f) {
      return f + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: i, mm: i, h: i, hh: i, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: i, y: "rok", yy: i }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return o.default.locale(u, null, !0), u;
  });
})(xs);
const Cs = Nt;
var Ht = {}, Ss = {
  get exports() {
    return Ht;
  },
  set exports(e) {
    Ht = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(Xe);
  })(me, function(t) {
    function n(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var o = n(t), s = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };
    function i(l, c, d) {
      var u = s[d];
      return Array.isArray(u) && (u = u[c ? 0 : 1]), u.replace("%d", l);
    }
    var a = { name: "de", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"), ordinal: function(l) {
      return l + ".";
    }, weekStart: 1, yearStart: 4, formats: { LTS: "HH:mm:ss", LT: "HH:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s: i, m: i, mm: i, h: i, hh: i, d: i, dd: i, M: i, MM: i, y: i, yy: i } };
    return o.default.locale(a, null, !0), a;
  });
})(Ss);
const ks = Ht;
var Wt = {}, Ms = {
  get exports() {
    return Wt;
  },
  set exports(e) {
    Wt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(Xe);
  })(me, function(t) {
    function n(d) {
      return d && typeof d == "object" && "default" in d ? d : { default: d };
    }
    var o = n(t), s = "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), i = "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"), a = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/, l = function(d, u) {
      return a.test(u) ? s[d.month()] : i[d.month()];
    };
    l.s = i, l.f = s;
    var c = { name: "lt", weekdays: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), weekdaysShort: "sek_pir_ant_tre_ket_pen_šeš".split("_"), weekdaysMin: "s_p_a_t_k_pn_š".split("_"), months: l, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), ordinal: function(d) {
      return d + ".";
    }, weekStart: 1, relativeTime: { future: "už %s", past: "prieš %s", s: "kelias sekundes", m: "minutę", mm: "%d minutes", h: "valandą", hh: "%d valandas", d: "dieną", dd: "%d dienas", M: "mėnesį", MM: "%d mėnesius", y: "metus", yy: "%d metus" }, format: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" } };
    return o.default.locale(c, null, !0), c;
  });
})(Ms);
const $s = Wt, _s = {
  feelingEmpty: "Czuję się taki pusty...",
  free: "Wolne",
  loadNext: "Następne",
  loadPrevious: "Poprzednie",
  over: "ponad",
  taken: "Zajęte",
  topbar: {
    filters: "Filtry",
    next: "następny",
    prev: "poprzedni",
    today: "Dziś",
    view: "Widok"
  },
  search: "szukaj",
  week: "tydzień"
}, Es = {
  feelingEmpty: "I feel so empty...",
  free: "Free",
  loadNext: "Next",
  loadPrevious: "Previous",
  over: "over",
  taken: "Taken",
  topbar: {
    filters: "Filters",
    next: "next",
    prev: "prev",
    today: "Today",
    view: "View"
  },
  search: "search",
  week: "week"
}, Ts = {
  feelingEmpty: "Keine Ergebnisse...",
  free: "Frei",
  loadNext: "Weiter",
  loadPrevious: "Zurück",
  over: "über",
  taken: "Gebucht",
  topbar: {
    filters: "Filter",
    next: "vor",
    prev: "zurück",
    today: "Heute",
    view: "Ansicht"
  },
  search: "Suche",
  week: "Woche"
}, Ds = {
  feelingEmpty: "Jaučiuosi toks tuščias...",
  free: "Laisva",
  loadNext: "Kitas",
  loadPrevious: "Ankstesnis",
  over: "virš",
  taken: "Užimta",
  topbar: {
    filters: "Filtras",
    next: "kitas",
    prev: "ankstesnis",
    today: "Šiandien",
    view: "Rodinys"
  },
  search: "ieškoti",
  week: "savaitė"
}, Ps = [
  {
    id: "en",
    lang: Es,
    translateCode: "en-GB",
    dayjsTranslations: bs
  },
  {
    id: "pl",
    lang: _s,
    translateCode: "pl-PL",
    dayjsTranslations: Cs
  },
  {
    id: "lt",
    lang: Ds,
    translateCode: "lt-LT",
    dayjsTranslations: $s
  },
  {
    id: "de",
    lang: Ts,
    translateCode: "de-DE",
    dayjsTranslations: ks
  }
];
class Os {
  constructor() {
    er(this, "locales", Ps);
  }
  getLocales() {
    return this.locales;
  }
  addLocales(r) {
    this.locales.push(r);
  }
}
const yt = new Os(), on = Ar({
  localesData: yt.getLocales(),
  currentLocale: yt.getLocales()[0],
  setCurrentLocale: () => {
  }
}), As = ({ children: e, lang: r, translations: t }) => {
  const [n, o] = fe("en"), s = yt.getLocales(), i = ge(() => {
    const u = s.find((f) => f.id === n);
    return typeof (u == null ? void 0 : u.dayjsTranslations) == "object" && R.locale(u.dayjsTranslations), u || s[0];
  }, [n, s]), [a, l] = fe(i()), c = (u) => {
    localStorage.setItem("locale", u.translateCode), l(u);
  };
  ue(() => {
    t == null || t.forEach((u) => {
      s.find((m) => m.id === u.id) || yt.addLocales(u);
    });
  }, [s, t]), ue(() => {
    const u = localStorage.getItem("locale"), f = r ?? u ?? "en";
    localStorage.setItem("locale", f), o(f), l(i());
  }, [i, r]);
  const { Provider: d } = on;
  return /* @__PURE__ */ O(d, { value: { currentLocale: a, localesData: s, setCurrentLocale: c }, children: e });
}, st = () => Re(on).currentLocale.lang, sn = `
  background: none;
  outline: none;
  border: none;
  font-size: 100%;
  line-height: 1.15
  margin: 0
`, Rs = H.div`
  width: calc(${({ width: e }) => e}px - ${xe}px);
  position: sticky;
  top: 0;
  left: ${xe}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme: e }) => e.navHeight};
  padding: 0.625rem 1rem;
  background-color: ${({ theme: e }) => e.colors.background};
  z-index: 3;
`, Ls = H.div`
  display: flex;
  gap: 1.875rem;
`, kr = H.button`
  ${sn};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme: e }) => e.colors.textPrimary};
  :not(:disabled) {
    cursor: pointer;
  }
`, Ys = H.button`
  ${sn};
  position: relative;
  font-weight: 600;
  cursor: pointer;
  line-height: 1.5rem;
  color: ${({ theme: e }) => e.colors.textPrimary};

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 1.5rem;
    background-color: ${({ theme: e }) => e.colors.textPrimary};
  }
  &::before {
    left: -1.125rem;
  }
  &::after {
    right: -1.125rem;
  }
`, Is = H.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Ns = H.div`
  display: flex;
`, Hs = H.div`
  display: flex;
  align-items: "center";
  gap: 1.25rem;
`, Ws = ({ width: e, showThemeToggle: r, showZoomToggle: t, toggleTheme: n }) => {
  const { topbar: o } = st(), {
    data: s,
    config: i,
    handleGoNext: a,
    handleGoPrev: l,
    handleGoToday: c,
    zoomIn: d,
    zoomOut: u,
    isNextZoom: f,
    isPrevZoom: m,
    handleFilterData: y,
    onClearFilterData: T
  } = Qe(), { colors: M } = We(), { filterButtonState: _ = -1 } = i, L = (Y) => {
    Y.stopPropagation(), T == null || T();
  };
  return /* @__PURE__ */ oe(Rs, { width: e, children: [
    /* @__PURE__ */ O(Ns, { children: _ >= 0 && /* @__PURE__ */ oe(
      Ct,
      {
        variant: _ ? "filled" : "outlined",
        iconName: "filter",
        width: "16",
        height: "16",
        onClick: y,
        children: [
          o.filters,
          !!_ && /* @__PURE__ */ O("span", { onClick: L, children: /* @__PURE__ */ O(be, { iconName: "close", height: "16", width: "16", fill: M.textSecondary }) })
        ]
      }
    ) }),
    /* @__PURE__ */ oe(Ls, { children: [
      /* @__PURE__ */ oe(kr, { disabled: !1, onClick: l, children: [
        /* @__PURE__ */ O(be, { iconName: "arrowLeft", height: "15", fill: M.textPrimary }),
        o.prev
      ] }),
      /* @__PURE__ */ O(Ys, { onClick: c, children: o.today }),
      /* @__PURE__ */ oe(kr, { disabled: !1, onClick: a, children: [
        o.next,
        /* @__PURE__ */ O(be, { iconName: "arrowRight", height: "15", fill: M.textPrimary })
      ] })
    ] }),
    /* @__PURE__ */ oe(Hs, { children: [
      r && /* @__PURE__ */ O(oa, { toggleTheme: n }),
      t && /* @__PURE__ */ oe(Is, { children: [
        o.view,
        /* @__PURE__ */ O(
          Ct,
          {
            isDisabled: !m,
            onClick: u,
            isFullRounded: !0,
            iconName: "subtract",
            width: "14"
          }
        ),
        /* @__PURE__ */ O(
          Ct,
          {
            isDisabled: !f,
            onClick: d,
            isFullRounded: !0,
            iconName: "add",
            width: "14"
          }
        )
      ] })
    ] })
  ] });
}, Fs = (e) => /* @__PURE__ */ z.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), js = (e) => /* @__PURE__ */ z.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), Bs = (e) => /* @__PURE__ */ z.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), zs = (e) => /* @__PURE__ */ z.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), Vs = (e) => /* @__PURE__ */ z.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), Zs = (e) => /* @__PURE__ */ z.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), Gs = (e) => /* @__PURE__ */ z.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), Us = (e) => /* @__PURE__ */ z.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), Js = (e) => /* @__PURE__ */ z.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), Xs = (e) => /* @__PURE__ */ z.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), qs = (e) => /* @__PURE__ */ z.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), Ks = (e) => /* @__PURE__ */ z.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), Qs = (e) => /* @__PURE__ */ z.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ z.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), ei = (e) => /* @__PURE__ */ z.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ z.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ z.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ z.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ z.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ z.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ z.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ z.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ z.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ z.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), ti = {
  add: Fs,
  subtract: js,
  filter: Bs,
  arrowLeft: zs,
  arrowRight: Vs,
  defaultAvatar: Zs,
  calendarWarning: Gs,
  calendarFree: Us,
  arrowDown: Xs,
  arrowUp: Js,
  search: qs,
  close: Ks,
  moon: Qs,
  sun: ei
}, be = ({ iconName: e, width: r, height: t, fill: n, className: o }) => {
  const { colors: s } = We(), i = ti[e];
  return i ? /* @__PURE__ */ O(
    i,
    {
      style: { transition: ".5s ease" },
      fill: n ?? s.accent,
      width: r,
      height: t,
      className: o
    }
  ) : null;
}, ri = (e, r, t) => ({
  outlined: {
    color: t ? e.colors.disabled : e.colors.accent,
    border: `1px solid ${t ? e.colors.disabled : e.colors.accent}`,
    background: "transparent"
  },
  filled: {
    color: t ? e.colors.primary : e.colors.textSecondary,
    background: t ? e.colors.disabled : e.colors.accent,
    border: "1px solid transparent"
  }
})[r], ni = H.button`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  min-height: 24px;
  border-radius: ${({ isFullRounded: e }) => e ? "50%" : "4px"};
  cursor: ${({ disabled: e }) => e ? "auto" : "pointer"};
  font-size: 14px;
  gap: 4px;
  padding: ${({ hasChildren: e }) => e ? "0 10px" : "0"};
  transition: 0.5s ease;
  ${({ theme: e, variant: r, disabled: t }) => ri(e, r, t)}
`, Ct = ({
  iconName: e,
  width: r,
  height: t,
  fill: n,
  className: o,
  onClick: s,
  children: i,
  isFullRounded: a,
  isDisabled: l,
  variant: c = "outlined"
}) => {
  const { colors: d } = We();
  return /* @__PURE__ */ oe(
    ni,
    {
      onClick: s,
      isFullRounded: a,
      hasChildren: !!i,
      disabled: l,
      variant: c,
      children: [
        /* @__PURE__ */ O(
          be,
          {
            iconName: e,
            width: r,
            height: t,
            fill: l ? d.disabled : n,
            className: o
          }
        ),
        i
      ]
    }
  );
}, oi = H.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, si = H.div`
  position: relative;
`, ca = ({
  data: e,
  config: r,
  startDate: t,
  onRangeChange: n,
  onTileClick: o,
  onFilterData: s,
  onClearFilterData: i,
  onItemClick: a,
  isLoading: l
}) => {
  var A;
  const c = Pe(
    () => ({
      zoom: 0,
      filterButtonState: 1,
      includeTakenHoursOnWeekendsInDayView: !1,
      showTooltip: !0,
      translations: void 0,
      ...r
    }),
    [r]
  ), d = ve(null), [u, f] = fe((A = d.current) == null ? void 0 : A.clientWidth), m = Pe(() => R(t), [t]), [y, T] = fe(c.defaultTheme ?? "light"), M = () => {
    T(y === "light" ? "dark" : "light");
  }, _ = y === "light" ? lo : uo, L = c.theme ? c.theme[_.mode] : {}, Y = {
    ..._,
    colors: {
      ..._.colors,
      ...L
    }
  };
  return ue(() => {
    const p = () => {
      d.current && f(d.current.clientWidth);
    };
    return p(), window.addEventListener("resize", p), () => window.removeEventListener("resize", p);
  }, []), d.current, /* @__PURE__ */ oe(jt, { children: [
    /* @__PURE__ */ O(co, {}),
    /* @__PURE__ */ O(oo, { theme: Y, children: /* @__PURE__ */ O(As, { lang: c.lang, translations: c.translations, children: /* @__PURE__ */ O(
      ts,
      {
        data: e,
        isLoading: !!l,
        config: c,
        onRangeChange: n,
        defaultStartDate: m,
        onFilterData: s,
        onClearFilterData: i,
        children: /* @__PURE__ */ O(
          oi,
          {
            showScroll: !!e.length,
            id: He,
            ref: d,
            children: /* @__PURE__ */ O(si, { children: /* @__PURE__ */ O(
              vs,
              {
                data: e,
                onTileClick: o,
                topBarWidth: u ?? 0,
                onItemClick: a,
                toggleTheme: M
              }
            ) })
          }
        )
      }
    ) }) })
  ] });
}, ii = H.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: r }) => e === "next" ? `1px solid ${r.colors.border}` : "none"};
`, ai = H.button`
  margin-top: 0px;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid ${({ theme: e }) => e.colors.accent};
  border-radius: 4px;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.accent};
  line-height: 150%;
  letter-spacing: 1px;
  cursor: pointer;
  opacity: ${({ isVisible: e }) => e ? "1" : "0"};
  pointer-events: ${({ isVisible: e }) => e ? "auto" : "none"};
  &:hover {
    transition: 0.5s ease;
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, ci = H.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, li = H.p`
  ${qe}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`, Mr = ({
  intent: e,
  onClick: r,
  icon: t,
  isVisible: n,
  pageNum: o,
  pagesAmount: s
}) => {
  const { loadNext: i, loadPrevious: a } = st(), l = e === "next" ? `${i} ${o + 2}/${s}` : `${a} ${o}/${s}`;
  return /* @__PURE__ */ O(ii, { intent: e, children: /* @__PURE__ */ oe(ai, { onClick: r, isVisible: n, children: [
    t && /* @__PURE__ */ O(ci, { children: t }),
    /* @__PURE__ */ O(li, { children: l })
  ] }) });
}, di = H.div`
  min-width: ${xe + "px"};
  max-width: ${xe + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, ui = H.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: 124px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${xe}px;
  background-color: ${({ theme: e }) => e.colors.background};
  z-index: 3;
`, hi = H.input`
  height: 100%;
  width: calc(100% - 44px);
  background-color: transparent;
  color: ${({ theme: e }) => e.colors.textPrimary};
  padding: 7px 0 7px 12px;
  border: 0;
  outline: none;
  &::placeholder {
    color: ${({ theme: e }) => e.colors.placeholder};
  }
`, fi = H.div`
  margin-left: 10px;
  height: 36px;
  width: calc(100% - 20px); //20px = 10px margin each side
  background-color: ${({ theme: e }) => e.colors.primary};
  border: 1px solid
    ${({ theme: e, isFocused: r }) => r ? e.colors.accent : e.colors.border};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    margin-left: auto;
    margin-right: 12px;
    height: 24px;
    width: 24px;
  }
`, pi = H.div`
  display: flex;
  align-items: ${({ rows: e }) => e > 1 ? "start" : "center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${we}px;
  height: calc(${we}px * ${({ rows: e }) => e});
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
  transition: 0.5s ease;
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, mi = H.div`
  display: flex;
  align-items: center;
`, yi = H.div`
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`, gi = H.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, vi = H.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, $r = H.p`
  margin: 0;
  padding: 0;
  font-size: ${({ isMain: e }) => e ? 0.75 + "rem" : 0.625 + "rem"};
  letter-spacing: ${({ isMain: e }) => e ? 1 + "px" : 0.5 + "px"};
  line-height: ${({ isMain: e }) => e ? 1.125 + "rem" : 0.75 + "rem"};
  color: ${({ isMain: e, theme: r }) => e ? r.colors.textPrimary : r.colors.placeholder};
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 144px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
`, wi = ({ id: e, item: r, rows: t, onItemClick: n }) => /* @__PURE__ */ O(
  pi,
  {
    title: r.title + " | " + r.subtitle,
    clickable: typeof n == "function",
    rows: t,
    onClick: () => n == null ? void 0 : n({ id: e, label: r }),
    children: /* @__PURE__ */ oe(mi, { children: [
      /* @__PURE__ */ O(yi, { children: r.icon ? /* @__PURE__ */ O(gi, { src: r.icon, alt: "Icon" }) : /* @__PURE__ */ O(be, { iconName: "defaultAvatar" }) }),
      /* @__PURE__ */ oe(vi, { children: [
        /* @__PURE__ */ O($r, { isMain: !0, children: r.title }),
        /* @__PURE__ */ O($r, { children: r.subtitle })
      ] })
    ] })
  }
), bi = ({
  data: e,
  rows: r,
  onLoadNext: t,
  onLoadPrevious: n,
  pageNum: o,
  pagesAmount: s,
  searchInputValue: i,
  onSearchInputChange: a,
  onItemClick: l
}) => {
  const [c, d] = fe(!1), { search: u } = st(), f = () => d((m) => !m);
  return /* @__PURE__ */ oe(di, { children: [
    /* @__PURE__ */ oe(ui, { children: [
      /* @__PURE__ */ oe(fi, { isFocused: c, children: [
        /* @__PURE__ */ O(
          hi,
          {
            placeholder: u,
            value: i,
            onChange: a,
            onFocus: f,
            onBlur: f
          }
        ),
        /* @__PURE__ */ O(be, { iconName: "search" })
      ] }),
      /* @__PURE__ */ O(
        Mr,
        {
          intent: "previous",
          isVisible: o !== 0,
          onClick: n,
          icon: /* @__PURE__ */ O(be, { iconName: "arrowUp", width: "16", height: "16" }),
          pageNum: o,
          pagesAmount: s
        }
      )
    ] }),
    e.map((m, y) => /* @__PURE__ */ O(
      wi,
      {
        id: m.id,
        item: m.label,
        rows: r[y],
        onItemClick: l
      },
      m.id
    )),
    /* @__PURE__ */ O(
      Mr,
      {
        intent: "next",
        isVisible: o !== s - 1,
        onClick: t,
        icon: /* @__PURE__ */ O(be, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: o,
        pagesAmount: s
      }
    )
  ] });
}, xi = H.div`
  width: 388px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
  background-color: ${({ theme: e }) => e.colors.secondary};
  opacity: 0.7;
  overflow: hidden;
  z-index: 1;
`, Ci = ao`
from{
    left: -100%;
}
to{
    left: 100%;
}`, Si = H.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Ci} 1s infinite;
`, ki = ({ isLoading: e, position: r }) => e ? /* @__PURE__ */ O(xi, { position: r, children: /* @__PURE__ */ O(Si, {}) }) : null, _r = ki, Ee = (e, r) => {
  const {
    ctx: t,
    x: n,
    y: o,
    width: s,
    height: i,
    textYPos: a,
    label: l,
    font: c,
    isBottomRow: d,
    fillStyle: u,
    topText: f,
    bottomText: m,
    labelBetweenCells: y
  } = e;
  if (t.beginPath(), t.strokeStyle = r.colors.border, t.setLineDash([]), l && c && a) {
    t.fillStyle = r.colors.gridBackground, t.fillRect(n, o, s, i), y ? (t.moveTo(n, o), t.lineTo(n + s, o), t.stroke(), t.moveTo(n, o + i), t.lineTo(n + s, o + i), t.stroke(), t.moveTo(n + s / 2, o + i), t.lineTo(n + s / 2, o + i - 5), t.stroke()) : t.strokeRect(n + 0.5, o + 0.5, s, i), t.font = c;
    const T = n + s / 2 - t.measureText(l).width / 2;
    t.textBaseline = "middle", t.fillStyle = r.colors.placeholder, t.fillText(l, T, a);
  }
  if (d && u && f && m) {
    t.fillStyle = u, t.fillRect(n, o, s, i), t.strokeRect(n + 0.5, o + 0.5, s, i), t.font = f.font;
    const T = n + s / 2 - t.measureText(f.label).width / 2;
    t.fillStyle = f.color, t.fillText(f.label, T, f.y), t.font = m.font;
    const M = n + s / 2 - t.measureText(m.label).width / 2;
    t.fillStyle = m.color, t.fillText(m.label, M, m.y);
  }
}, an = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return o === "yearView" ? t ? r.colors.tertiary : r.colors.gridBackground : t ? r.colors.secondary : r.colors.primary;
}, Ft = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return t ? o === "bottomRow" ? r.colors.placeholder : r.colors.accent : n ? o === "bottomRow" ? r.colors.placeholder : r.colors.textPrimary : r.colors.placeholder;
}, Mi = (e, r, t, n) => {
  const o = Ue - Ye / fo, s = Ue - Ye / po, i = _e + Ke;
  let a = 0;
  for (let l = 0; l < r; l++) {
    const c = Kr(
      R(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(l, "days")
    );
    Ee(
      {
        ctx: e,
        x: a,
        y: i,
        width: ye,
        height: Ye,
        isBottomRow: !0,
        fillStyle: an(
          {
            isCurrent: c.isCurrentDay,
            isBusinessDay: c.isBusinessDay
          },
          n
        ),
        topText: {
          y: o,
          label: c.dayName.toUpperCase(),
          font: ke.bottomRow.name,
          color: Ft(
            { isCurrent: c.isCurrentDay, isBusinessDay: c.isBusinessDay },
            n
          )
        },
        bottomText: {
          y: s,
          label: `${c.dayOfMonth}`,
          font: ke.bottomRow.number,
          color: Ft(
            {
              isCurrent: c.isCurrentDay,
              isBusinessDay: c.isBusinessDay,
              variant: "bottomRow"
            },
            n
          )
        }
      },
      n
    ), a += ye;
  }
}, $i = (e, r, t, n) => {
  let o = -(t.dayOfMonth - 1) * Me;
  const s = _e;
  let a = t.month;
  for (let l = 0; l < r; l++) {
    a >= Dt && (a = 0);
    const c = qr(t, l) * Me;
    Ee(
      {
        ctx: e,
        x: o,
        y: s,
        width: c,
        height: Ke,
        textYPos: Xr,
        label: R().month(a).format("MMMM").toUpperCase(),
        font: ke.bottomRow.number
      },
      n
    ), o += c, a++;
  }
}, _i = (e, r, t) => {
  let o = 0, s = 0, i = 0, a = R(
    `${r.year}-${r.month + 1}-${r.dayOfMonth}`
  ).month();
  o = -r.dayOfMonth * ye + ye;
  for (let l = 0; l < Dt; l++)
    a > Dt - 1 && (a = 0, i++), s = R(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(l, "months").daysInMonth() * ye, Ee(
      {
        ctx: e,
        x: o,
        y: 0,
        width: s,
        height: _e,
        textYPos: Jt,
        label: R(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).month(a).format("MMMM").toUpperCase() + ` ${R(`${r.year + i}-${r.month + 1}-${r.dayOfMonth}`).month(a).format("YYYY")}`,
        font: ke.topRow
      },
      t
    ), o += s, a++;
}, Ei = (e, r, t, n) => {
  const o = 7 * ye, s = _e, i = e.canvas.width / o + o, a = r.weekOfYear;
  let l = 0;
  for (let c = 0; c < i; c++) {
    const d = R(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).day();
    let u = (a + c) % yr;
    u <= 0 && (u += yr), d !== 1 && c === 0 && (l = -d * ye + ye), Ee(
      {
        ctx: e,
        x: l,
        y: s,
        width: o,
        height: Ke,
        textYPos: Xr,
        label: `${t.toUpperCase()} ${u}`,
        font: ke.middleRow
      },
      n
    ), l += o;
  }
}, Ti = (e, r, t, n, o) => {
  const s = Ue - Ye / 1.6, i = Ue - Ye / 4.5, a = _e + Ke;
  let l = 0;
  for (let c = 0; c < r; c++) {
    const d = R(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      c,
      "weeks"
    ), u = d.isSame(R(), "week");
    Ee(
      {
        ctx: e,
        x: l,
        y: a,
        width: Ae,
        height: Ye,
        isBottomRow: !0,
        fillStyle: an({ isCurrent: u, variant: "yearView" }, o),
        topText: {
          y: s,
          label: d.isoWeek().toString(),
          font: ke.bottomRow.name,
          color: Ft({ isCurrent: u }, o)
        },
        bottomText: {
          y: i,
          label: n.toUpperCase(),
          font: ke.middleRow,
          color: o.colors.placeholder
        }
      },
      o
    ), l += Ae;
  }
}, Di = (e, r, t, n) => {
  const s = r.year, i = e.canvas.width * 2;
  let a = 0, l = 0, c = (wr(s) - t + 1) * Me, d = 0;
  for (; a + d <= i; )
    l > 0 && (c = wr(s + l) * Me), d + c > i && l > 0 && (c = Math.ceil((i - d) / Me) * Me), Ee(
      {
        ctx: e,
        x: a,
        y: 0,
        width: c,
        height: _e,
        textYPos: Jt,
        label: (s + l).toString(),
        font: ke.topRow
      },
      n
    ), a += c, d += c, l++;
}, Pi = (e, r, t, n) => {
  const o = Math.floor(r / mt) + 2, s = mt * pe;
  let l = -R(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ).hour() * pe + 0.5 * pe;
  for (let c = 0; c < o; c++) {
    const d = R(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(c, "day").format("YYYY/MM/DD dddd").toUpperCase();
    Ee(
      {
        ctx: e,
        x: l,
        y: Je,
        width: s,
        height: ot,
        textYPos: Je + ot / 2 + 2,
        label: d,
        font: ke.bottomRow.number
      },
      n
    ), l += s;
  }
}, Oi = (e, r, t, n) => {
  const o = Math.ceil(r / mt), s = R(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), i = s.add(o - 1, "days"), a = s.month(), l = i.add(1, "day").month(), c = a === l ? 1 : 2;
  let d = 0.5 * pe;
  for (let u = 0; u < c; u++) {
    const f = R(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), y = R(`${t.year}-${t.month + u + 1}-01T:23:59:59`).endOf("month"), T = y.format("MMMM").toUpperCase(), M = y.diff(f, "hour") + 1, _ = u === 0 ? M * pe : r * pe;
    Ee(
      {
        ctx: e,
        x: d,
        y: 0,
        width: _,
        height: Je,
        textYPos: Jt,
        label: T,
        font: ke.topRow
      },
      n
    ), d += _;
  }
}, Ai = (e, r, t, n) => {
  let o = 0;
  const s = Je + ot, i = R(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ), a = pe;
  for (let l = 0; l < r; l++) {
    const c = i.add(l, "hours").format("HH:00").toUpperCase();
    Ee(
      {
        ctx: e,
        x: o,
        y: s,
        width: a,
        height: Tt,
        label: c,
        font: ke.bottomRow.number,
        textYPos: Je + ot + Tt / 2 + 2,
        labelBetweenCells: !0
      },
      n
    ), o += pe;
  }
}, Ri = (e, r, t, n, o, s, i) => {
  switch (r) {
    case 0:
      Di(e, n, s, i), $i(e, t, n, i), Ti(e, t, n, o, i);
      break;
    case 1:
      _i(e, n, i), Ei(e, n, o, i), Mi(e, t, n, i);
      break;
    case 2:
      Oi(e, t, n, i), Pi(e, t, n, i), Ai(e, t, n, i);
      break;
  }
}, Li = H.div`
  position: sticky;
  top: 0;
  z-index: 1;
`, Yi = H.div`
  height: ${Ue}px;
  display: block;
`, Ii = H.canvas``, Ni = ({
  zoom: e,
  topBarWidth: r,
  showThemeToggle: t,
  showZoomToggle: n,
  toggleTheme: o
}) => {
  const { week: s } = st(), { date: i, cols: a, dayOfYear: l, startDate: c } = Qe(), d = ve(null), u = We(), f = ge(
    (m) => {
      const y = Qt(), M = (e === 2 ? ho : Ue) + 1;
      en(m, y, M), Ri(m, e, a, c, s, l, u);
    },
    [a, l, c, s, e, u]
  );
  return ue(() => {
    if (!d.current)
      return;
    const m = d.current.getContext("2d");
    if (!m)
      return;
    const y = () => f(m);
    return window.addEventListener("resize", y), () => window.removeEventListener("resize", y);
  }, [f]), ue(() => {
    const m = d.current;
    if (!m)
      return;
    m.style.letterSpacing = "1px";
    const y = m.getContext("2d");
    y && f(y);
  }, [i, e, f]), /* @__PURE__ */ oe(Li, { children: [
    /* @__PURE__ */ O(
      Ws,
      {
        width: r,
        showThemeToggle: t,
        showZoomToggle: n,
        toggleTheme: o
      }
    ),
    /* @__PURE__ */ O(Yi, { id: mo, children: /* @__PURE__ */ O(Ii, { ref: d }) })
  ] });
}, Hi = (e, r, t) => {
  let n;
  switch (t) {
    case 0:
      n = Me;
      break;
    case 2:
      n = pe;
      break;
    default:
      n = ye;
  }
  const o = () => {
    let s;
    switch (t) {
      case 2:
        s = (e.startDate.diff(r.startDate, "minute") / ce + 1) * n - n / 2;
        break;
      default:
        s = (e.startDate.diff(r.startDate, "day") + 1) * n;
    }
    return Math.max(0, s);
  };
  if (e.startDate.isAfter(r.startDate) && e.endDate.isBefore(r.endDate)) {
    let s;
    switch (t) {
      case 2:
        s = e.endDate.diff(e.startDate, "minute") / ce * n;
        break;
      default:
        s = e.endDate.diff(e.startDate, "day") * n + n;
    }
    return { x: o(), width: s };
  }
  if (e.startDate.isBefore(r.startDate) && e.endDate.isBefore(r.endDate)) {
    let s;
    switch (t) {
      case 2:
        s = e.endDate.diff(r.startDate, "minute") / ce * n + 0.5 * n;
        break;
      default:
        s = e.endDate.diff(r.startDate, "day") * n + n;
    }
    return { x: o(), width: s };
  }
  if (e.startDate.isAfter(r.startDate) && e.endDate.isAfter(r.endDate)) {
    let s;
    switch (t) {
      case 2:
        s = r.endDate.diff(e.startDate, "minute") / ce * n;
        break;
      default:
        s = r.endDate.diff(e.startDate, "day") * n + n;
    }
    return { x: o(), width: s };
  }
  if (e.startDate.isBefore(r.startDate) && e.endDate.isAfter(r.endDate)) {
    let s;
    switch (t) {
      case 2:
        s = r.endDate.diff(r.startDate, "minute") / ce * n;
        break;
      default:
        s = r.endDate.diff(r.startDate, "day") * n + n;
    }
    return { x: o(), width: s };
  }
  return { x: o(), width: 0 };
}, Wi = (e, r, t, n, o, s) => {
  const i = e * we + yo, a = r.hour(), l = t.hour();
  let c, d, u, f;
  switch (s) {
    case 2: {
      c = R(n), d = R(o), u = R(r).hour(a).minute(0), f = R(t).hour(l).minute(0);
      break;
    }
    default: {
      c = R(n).hour(0).minute(0), d = R(o).hour(23).minute(59), u = r, f = t;
      break;
    }
  }
  return {
    ...Hi(
      { startDate: c, endDate: d },
      { startDate: u, endDate: f },
      s
    ),
    y: i
  };
}, Fi = (e) => {
  if (!e)
    return "white";
  const r = [];
  for (let o = 1; o < 6; o += 2)
    r.push(parseInt(e.slice(o, o + 2), 16) / 255);
  const t = r.map(
    (o) => o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2] > 0.5 ? "black" : "white";
}, ji = H.button`
  ${qe}
  height: ${go}px;
  position: absolute;
  outline: none;
  border: none;
  border-radius: 30px;
  text-align: left;
  color: ${({ theme: e }) => e.colors.textPrimary};
  width: 100%;
  cursor: pointer;
`, Bi = H.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, Er = H.p`
  ${qe}
  ${Ur}
  display: inline;
  font-weight: ${({ bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, zi = H.p`
  ${qe}
  ${Ur}
`, Vi = H.div`
  position: sticky;
  left: ${xe + 16}px;
  overflow: hidden;
`, Zi = ({ row: e, data: r, zoom: t, onTileClick: n }) => {
  const { date: o } = Qe(), s = Kt(o, t), { y: i, x: a, width: l } = Wi(
    e,
    s.startDate,
    s.endDate,
    r.startDate,
    r.endDate,
    t
  ), { colors: c } = We();
  return /* @__PURE__ */ O(
    ji,
    {
      style: {
        left: `${a}px`,
        top: `${i}px`,
        backgroundColor: `${r.bgColor ?? c.defaultTile}`,
        width: `${l}px`,
        color: Fi(r.bgColor ?? "")
      },
      onClick: () => n == null ? void 0 : n(r),
      children: /* @__PURE__ */ O(Bi, { children: /* @__PURE__ */ oe(Vi, { children: [
        /* @__PURE__ */ O(Er, { bold: !0, children: r.title }),
        /* @__PURE__ */ O(Er, { children: r.subtitle }),
        /* @__PURE__ */ O(zi, { children: r.description })
      ] }) })
    }
  );
}, Gi = ({ data: e, zoom: r, onTileClick: t }) => {
  const n = ge(() => {
    let o = 0;
    return e.map((s, i) => (i > 0 && (o += Math.max(e[i - 1].data.length, 1)), s.data.map(
      (a, l) => a.map((c) => /* @__PURE__ */ O(
        Zi,
        {
          row: l + o,
          data: c,
          zoom: r,
          onTileClick: t
        },
        c.id
      ))
    ))).flat(2);
  }, [e, t, r]);
  return /* @__PURE__ */ O(jt, { children: n() });
}, Ui = Gi;
H.div`
  box-sizing: border-box;
  font-family: Inter;
  padding: 0 0.5rem;
  height: 125px;
  position: fixed;
  top: ${({ isExpanded: e }) => e ? 0 : "-129px"};
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 999;
`;
H.div`
  width: 100%;
  margin-top: 2px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.5px;
  background-color: white;
`;
H.label`
  font-size: 14px;
`;
H.input`
  width: 45px;
  height: 18px;
  font-size: 14px;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  background-color: white;
  outline: none;
`;
H.input`
  height: 18px;
  width: 18px;
`;
H.button`
  width: 100%;
  font-size: 14px;
  outline: none;
  background-color: #fff;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  color: #0a11eb;
  cursor: pointer;
  &:hover {
    background-color: #c9e5ff;
  }
`;
H.form`
  background-color: rgba(255, 255, 255, 0.75);
`;
const Ji = H.div`
  padding: 8px 16px;
  position: absolute;
  background-color: ${({ theme: e }) => e.colors.tooltip};
  border-radius: 8px;
  z-index: 3;
  transition: all 0.25s;
  transition-timing-function: ease-out;
  pointer-events: none;
`, Xi = H.div`
  width: 100%;
`, qi = H.div`
  position: absolute;
  width: 0;
  height: 0;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-top: 14px solid ${({ theme: e }) => e.colors.tooltip};
`, Ki = H.div``, Tr = H.div`
  display: flex;
  align-items: center;
  &:first-child {
    margin-bottom: 8px;
  }
`, Dr = H.div`
  ${qe}
  display: flex;
  align-items: center;
  font-size: 10px;
  color: ${({ theme: e }) => e.colors.textSecondary};
  line-height: 12px;
  letter-spacing: 0.5px;
`, Pr = H.p`
  ${qe}
  margin-left: 4px;
  color: ${({ theme: e }) => e.colors.textSecondary};
`, Qi = H.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.warning};
`, ea = ({ tooltipData: e, zoom: r }) => {
  const { taken: t, free: n, over: o } = st(), { coords: s, disposition: i } = e, a = ve(null);
  let l = Ae;
  switch (r) {
    case 0:
      l = Ae;
      break;
    case 1:
      l = ye;
      break;
    case 2:
      l = pe;
      break;
  }
  return Or(() => {
    if (!a.current)
      return;
    const { width: c } = a.current.getBoundingClientRect();
    let d;
    switch (r) {
      case 2:
        d = c / 2 + l;
        break;
      default:
        d = c / 2 + l / 2;
        break;
    }
    a.current.style.left = `${s.x - d}px`, a.current.style.top = `${s.y + 8}px`;
  }, [s.x, l, i.overtime, s.y, r]), /* @__PURE__ */ oe(Ji, { ref: a, children: [
    /* @__PURE__ */ O(Xi, { children: /* @__PURE__ */ oe(Ki, { children: [
      /* @__PURE__ */ oe(Tr, { children: [
        /* @__PURE__ */ O(be, { iconName: "calendarWarning", height: "14" }),
        /* @__PURE__ */ oe(Dr, { children: [
          /* @__PURE__ */ O(Pr, { children: `${t}: ${i.taken.hours}h ${i.taken.minutes}m` }),
          (i.overtime.hours > 0 || i.overtime.minutes > 0) && /* @__PURE__ */ oe(jt, { children: [
            " ",
            "-",
            " ",
            /* @__PURE__ */ O(Qi, { children: `${i.overtime.hours}h ${i.overtime.minutes}m ${o}` })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ oe(Tr, { children: [
        /* @__PURE__ */ O(be, { iconName: "calendarFree", height: "14" }),
        /* @__PURE__ */ O(Dr, { children: /* @__PURE__ */ O(Pr, { children: `${n}: ${i.free.hours}h ${i.free.minutes}m` }) })
      ] })
    ] }) }),
    /* @__PURE__ */ O(qi, {})
  ] });
}, ta = H.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 26px;
  background-color: ${({ theme: e }) => e.colors.secondary};
  border-radius: 30px;
  position: relative;
  transition: background-color 0.3s ease;
`, ra = H.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme: e }) => e.colors.button};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({ theme: e }) => e.mode === "light" ? "4px" : "34px"};
  transition: left 0.3s ease;
`, na = H.div`
  position: absolute;
  top: 5px;
  left: ${({ theme: e }) => e.mode === "light" ? "38px" : "4px"};
  transition: left 0.3s ease;
`, oa = ({ toggleTheme: e }) => {
  const r = We();
  return /* @__PURE__ */ oe(ta, { onClick: e, children: [
    /* @__PURE__ */ O(ra, {}),
    /* @__PURE__ */ O(na, { children: r.mode === "light" ? /* @__PURE__ */ O(be, { iconName: "sun", height: "16", width: "16" }) : /* @__PURE__ */ O(be, { iconName: "moon", height: "16", width: "16" }) })
  ] });
};
export {
  ca as Scheduler
};
