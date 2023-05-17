/*! For license information please see admin-web.js.LICENSE.txt */
!(function () {
  "use strict";
  var e = {
      463: function (e, t, n) {
        var r = n(791),
          a = n(296);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var l = new Set(),
          i = {};
        function u(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (i[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var s = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function v(e, t, n, r, a, o, l) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = l);
        }
        var m = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            m[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            m[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              m[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            m[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              m[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            m[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            m[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            m[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            m[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = m.hasOwnProperty(t) ? m[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(g, y);
            m[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, y);
              m[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, y);
            m[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = Symbol.for("react.element"),
          x = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          P = Symbol.for("react.provider"),
          N = Symbol.for("react.context"),
          _ = Symbol.for("react.forward_ref"),
          L = Symbol.for("react.suspense"),
          O = Symbol.for("react.suspense_list"),
          R = Symbol.for("react.memo"),
          T = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var I = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var j = Symbol.iterator;
        function z(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (j && e[j]) || e["@@iterator"])
            ? e
            : null;
        }
        var F,
          M = Object.assign;
        function D(e) {
          if (void 0 === F)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              F = (t && t[1]) || "";
            }
          return "\n" + F + e;
        }
        var U = !1;
        function A(e, t) {
          if (!e || U) return "";
          U = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (c) {
                  var r = c;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (c) {
                  r = c;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (c) {
                r = c;
              }
              e();
            }
          } catch (c) {
            if (c && r && "string" === typeof c.stack) {
              for (
                var a = c.stack.split("\n"),
                  o = r.stack.split("\n"),
                  l = a.length - 1,
                  i = o.length - 1;
                1 <= l && 0 <= i && a[l] !== o[i];

              )
                i--;
              for (; 1 <= l && 0 <= i; l--, i--)
                if (a[l] !== o[i]) {
                  if (1 !== l || 1 !== i)
                    do {
                      if ((l--, 0 > --i || a[l] !== o[i])) {
                        var u = "\n" + a[l].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= l && 0 <= i);
                  break;
                }
            }
          } finally {
            (U = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? D(e) : "";
        }
        function B(e) {
          switch (e.tag) {
            case 5:
              return D(e.type);
            case 16:
              return D("Lazy");
            case 13:
              return D("Suspense");
            case 19:
              return D("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = A(e.type, !1));
            case 11:
              return (e = A(e.type.render, !1));
            case 1:
              return (e = A(e.type, !0));
            default:
              return "";
          }
        }
        function $(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case x:
              return "Portal";
            case C:
              return "Profiler";
            case E:
              return "StrictMode";
            case L:
              return "Suspense";
            case O:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case N:
                return (e.displayName || "Context") + ".Consumer";
              case P:
                return (e._context.displayName || "Context") + ".Provider";
              case _:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case R:
                return null !== (t = e.displayName || null)
                  ? t
                  : $(e.type) || "Memo";
              case T:
                (t = e._payload), (e = e._init);
                try {
                  return $(e(t));
                } catch (n) {}
            }
          return null;
        }
        function H(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return $(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function V(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function K(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function q(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function G(e, t) {
          var n = t.checked;
          return M({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = V(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function J(e, t) {
          X(e, t);
          var n = V(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, V(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + V(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return M({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: V(n) };
        }
        function oe(e, t) {
          var n = V(t.value),
            r = V(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function le(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function ie(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ie(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ce,
          se,
          fe =
            ((se = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ce = ce || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ce.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return se(e, t);
                  });
                }
              : se);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function ve(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function me(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = ve(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ge = M(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
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
        var we = null;
        function ke(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var xe = null,
          Se = null,
          Ee = null;
        function Ce(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof xe) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = ka(t)), xe(e.stateNode, e.type, t));
          }
        }
        function Pe(e) {
          Se ? (Ee ? Ee.push(e) : (Ee = [e])) : (Se = e);
        }
        function Ne() {
          if (Se) {
            var e = Se,
              t = Ee;
            if (((Ee = Se = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function _e(e, t) {
          return e(t);
        }
        function Le() {}
        var Oe = !1;
        function Re(e, t, n) {
          if (Oe) return e(t, n);
          Oe = !0;
          try {
            return _e(e, t, n);
          } finally {
            (Oe = !1), (null !== Se || null !== Ee) && (Le(), Ne());
          }
        }
        function Te(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ka(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
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
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Ie = !1;
        if (s)
          try {
            var je = {};
            Object.defineProperty(je, "passive", {
              get: function () {
                Ie = !0;
              },
            }),
              window.addEventListener("test", je, je),
              window.removeEventListener("test", je, je);
          } catch (se) {
            Ie = !1;
          }
        function ze(e, t, n, r, a, o, l, i, u) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (s) {
            this.onError(s);
          }
        }
        var Fe = !1,
          Me = null,
          De = !1,
          Ue = null,
          Ae = {
            onError: function (e) {
              (Fe = !0), (Me = e);
            },
          };
        function Be(e, t, n, r, a, o, l, i, u) {
          (Fe = !1), (Me = null), ze.apply(Ae, arguments);
        }
        function $e(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ve(e) {
          if ($e(e) !== e) throw Error(o(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = $e(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var l = a.alternate;
                if (null === l) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === l.child) {
                  for (l = a.child; l; ) {
                    if (l === n) return Ve(a), e;
                    if (l === r) return Ve(a), t;
                    l = l.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = l);
                else {
                  for (var i = !1, u = a.child; u; ) {
                    if (u === n) {
                      (i = !0), (n = a), (r = l);
                      break;
                    }
                    if (u === r) {
                      (i = !0), (r = a), (n = l);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!i) {
                    for (u = l.child; u; ) {
                      if (u === n) {
                        (i = !0), (n = l), (r = a);
                        break;
                      }
                      if (u === r) {
                        (i = !0), (r = l), (n = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!i) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Qe(e)
            : null;
        }
        function Qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ke = a.unstable_scheduleCallback,
          qe = a.unstable_cancelCallback,
          Ge = a.unstable_shouldYield,
          Ye = a.unstable_requestPaint,
          Xe = a.unstable_now,
          Je = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var lt = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((it(e) / ut) | 0)) | 0;
              },
          it = Math.log,
          ut = Math.LN2;
        var ct = 64,
          st = 4194304;
        function ft(e) {
          switch (e & -e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            l = 268435455 & n;
          if (0 !== l) {
            var i = l & ~a;
            0 !== i ? (r = ft(i)) : 0 !== (o &= l) && (r = ft(o));
          } else 0 !== (l = n & ~a) ? (r = ft(l)) : 0 !== o && (r = ft(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - lt(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
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
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function vt() {
          var e = ct;
          return 0 === (4194240 & (ct <<= 1)) && (ct = 64), e;
        }
        function mt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - lt(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - lt(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var kt,
          xt,
          St,
          Et,
          Ct,
          Pt = !1,
          Nt = [],
          _t = null,
          Lt = null,
          Ot = null,
          Rt = new Map(),
          Tt = new Map(),
          It = [],
          jt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function zt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              _t = null;
              break;
            case "dragenter":
            case "dragleave":
              Lt = null;
              break;
            case "mouseover":
            case "mouseout":
              Ot = null;
              break;
            case "pointerover":
            case "pointerout":
              Rt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Tt.delete(t.pointerId);
          }
        }
        function Ft(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && xt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Mt(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = $e(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Dt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && xt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Ut(e, t, n) {
          Dt(e) && n.delete(t);
        }
        function At() {
          (Pt = !1),
            null !== _t && Dt(_t) && (_t = null),
            null !== Lt && Dt(Lt) && (Lt = null),
            null !== Ot && Dt(Ot) && (Ot = null),
            Rt.forEach(Ut),
            Tt.forEach(Ut);
        }
        function Bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Pt ||
              ((Pt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, At)));
        }
        function $t(e) {
          function t(t) {
            return Bt(t, e);
          }
          if (0 < Nt.length) {
            Bt(Nt[0], e);
            for (var n = 1; n < Nt.length; n++) {
              var r = Nt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== _t && Bt(_t, e),
              null !== Lt && Bt(Lt, e),
              null !== Ot && Bt(Ot, e),
              Rt.forEach(t),
              Tt.forEach(t),
              n = 0;
            n < It.length;
            n++
          )
            (r = It[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < It.length && null === (n = It[0]).blockedOn; )
            Mt(n), null === n.blockedOn && It.shift();
        }
        var Ht = w.ReactCurrentBatchConfig,
          Vt = !0;
        function Wt(e, t, n, r) {
          var a = bt,
            o = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 1), Kt(e, t, n, r);
          } finally {
            (bt = a), (Ht.transition = o);
          }
        }
        function Qt(e, t, n, r) {
          var a = bt,
            o = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 4), Kt(e, t, n, r);
          } finally {
            (bt = a), (Ht.transition = o);
          }
        }
        function Kt(e, t, n, r) {
          if (Vt) {
            var a = Gt(e, t, n, r);
            if (null === a) Vr(e, t, r, qt, n), zt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (_t = Ft(_t, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Lt = Ft(Lt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Ot = Ft(Ot, e, t, n, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return Rt.set(o, Ft(Rt.get(o) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      Tt.set(o, Ft(Tt.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((zt(e, r), 4 & t && -1 < jt.indexOf(e))) {
              for (; null !== a; ) {
                var o = ba(a);
                if (
                  (null !== o && kt(o),
                  null === (o = Gt(e, t, n, r)) && Vr(e, t, r, qt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Vr(e, t, r, null, n);
          }
        }
        var qt = null;
        function Gt(e, t, n, r) {
          if (((qt = null), null !== (e = ya((e = ke(r))))))
            if (null === (t = $e(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (qt = e), null;
        }
        function Yt(e) {
          switch (e) {
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
              return 1;
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
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Je()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Jt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Jt,
            r = n.length,
            a = "value" in Xt ? Xt.value : Xt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var l = r - e;
          for (t = 1; t <= l && n[r - t] === a[o - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var l in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(a) : a[l]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            M(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          un,
          cn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          sn = an(cn),
          fn = M({}, cn, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = M({}, fn, {
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
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== un &&
                    (un && "mousemove" === e.type
                      ? ((on = e.screenX - un.screenX),
                        (ln = e.screenY - un.screenY))
                      : (ln = on = 0),
                    (un = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          hn = an(pn),
          vn = an(M({}, pn, { dataTransfer: 0 })),
          mn = an(M({}, fn, { relatedTarget: 0 })),
          gn = an(
            M({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = M({}, cn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          wn = an(M({}, cn, { data: 0 })),
          kn = {
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
          xn = {
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
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function Cn() {
          return En;
        }
        var Pn = M({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = kn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? xn[e.keyCode] || "Unidentified"
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
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Nn = an(Pn),
          _n = an(
            M({}, pn, {
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
            })
          ),
          Ln = an(
            M({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          On = an(
            M({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Rn = M({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Tn = an(Rn),
          In = [9, 13, 27, 32],
          jn = s && "CompositionEvent" in window,
          zn = null;
        s && "documentMode" in document && (zn = document.documentMode);
        var Fn = s && "TextEvent" in window && !zn,
          Mn = s && (!jn || (zn && 8 < zn && 11 >= zn)),
          Dn = String.fromCharCode(32),
          Un = !1;
        function An(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== In.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Bn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var $n = !1;
        var Hn = {
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
        function Vn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Hn[e.type] : "textarea" === t;
        }
        function Wn(e, t, n, r) {
          Pe(r),
            0 < (t = Qr(t, "onChange")).length &&
              ((n = new sn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Qn = null,
          Kn = null;
        function qn(e) {
          Dr(e, 0);
        }
        function Gn(e) {
          if (K(wa(e))) return e;
        }
        function Yn(e, t) {
          if ("change" === e) return t;
        }
        var Xn = !1;
        if (s) {
          var Jn;
          if (s) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Jn = Zn;
          } else Jn = !1;
          Xn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Qn && (Qn.detachEvent("onpropertychange", nr), (Kn = Qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Gn(Kn)) {
            var t = [];
            Wn(t, Kn, e, ke(e)), Re(qn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Kn = n), (Qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Gn(Kn);
        }
        function or(e, t) {
          if ("click" === e) return Gn(t);
        }
        function lr(e, t) {
          if ("input" === e || "change" === e) return Gn(t);
        }
        var ir =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function ur(e, t) {
          if (ir(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !ir(e[a], t[a])) return !1;
          }
          return !0;
        }
        function cr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function sr(e, t) {
          var n,
            r = cr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = cr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = q((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = sr(n, o));
                var l = sr(n, r);
                a &&
                  l &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== l.node ||
                    e.focusOffset !== l.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(l.node, l.offset))
                    : (t.setEnd(l.node, l.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var vr = s && "documentMode" in document && 11 >= document.documentMode,
          mr = null,
          gr = null,
          yr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == mr ||
            mr !== q(r) ||
            ("selectionStart" in (r = mr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && ur(yr, r)) ||
              ((yr = r),
              0 < (r = Qr(gr, "onSelect")).length &&
                ((t = new sn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = mr))));
        }
        function kr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var xr = {
            animationend: kr("Animation", "AnimationEnd"),
            animationiteration: kr("Animation", "AnimationIteration"),
            animationstart: kr("Animation", "AnimationStart"),
            transitionend: kr("Transition", "TransitionEnd"),
          },
          Sr = {},
          Er = {};
        function Cr(e) {
          if (Sr[e]) return Sr[e];
          if (!xr[e]) return e;
          var t,
            n = xr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (Sr[e] = n[t]);
          return e;
        }
        s &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete xr.animationend.animation,
            delete xr.animationiteration.animation,
            delete xr.animationstart.animation),
          "TransitionEvent" in window || delete xr.transitionend.transition);
        var Pr = Cr("animationend"),
          Nr = Cr("animationiteration"),
          _r = Cr("animationstart"),
          Lr = Cr("transitionend"),
          Or = new Map(),
          Rr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Tr(e, t) {
          Or.set(e, t), u(t, [e]);
        }
        for (var Ir = 0; Ir < Rr.length; Ir++) {
          var jr = Rr[Ir];
          Tr(jr.toLowerCase(), "on" + (jr[0].toUpperCase() + jr.slice(1)));
        }
        Tr(Pr, "onAnimationEnd"),
          Tr(Nr, "onAnimationIteration"),
          Tr(_r, "onAnimationStart"),
          Tr("dblclick", "onDoubleClick"),
          Tr("focusin", "onFocus"),
          Tr("focusout", "onBlur"),
          Tr(Lr, "onTransitionEnd"),
          c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var zr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Fr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(zr)
          );
        function Mr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, l, i, u, c) {
              if ((Be.apply(this, arguments), Fe)) {
                if (!Fe) throw Error(o(198));
                var s = Me;
                (Fe = !1), (Me = null), De || ((De = !0), (Ue = s));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Dr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                  var i = r[l],
                    u = i.instance,
                    c = i.currentTarget;
                  if (((i = i.listener), u !== o && a.isPropagationStopped()))
                    break e;
                  Mr(a, i, c), (o = u);
                }
              else
                for (l = 0; l < r.length; l++) {
                  if (
                    ((u = (i = r[l]).instance),
                    (c = i.currentTarget),
                    (i = i.listener),
                    u !== o && a.isPropagationStopped())
                  )
                    break e;
                  Mr(a, i, c), (o = u);
                }
            }
          }
          if (De) throw ((e = Ue), (De = !1), (Ue = null), e);
        }
        function Ur(e, t) {
          var n = t[va];
          void 0 === n && (n = t[va] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Hr(t, e, 2, !1), n.add(r));
        }
        function Ar(e, t, n) {
          var r = 0;
          t && (r |= 4), Hr(n, e, r, t);
        }
        var Br = "_reactListening" + Math.random().toString(36).slice(2);
        function $r(e) {
          if (!e[Br]) {
            (e[Br] = !0),
              l.forEach(function (t) {
                "selectionchange" !== t &&
                  (Fr.has(t) || Ar(t, !1, e), Ar(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || ((t[Br] = !0), Ar("selectionchange", !1, t));
          }
        }
        function Hr(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var a = Wt;
              break;
            case 4:
              a = Qt;
              break;
            default:
              a = Kt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Ie ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Vr(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var l = r.tag;
              if (3 === l || 4 === l) {
                var i = r.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === l)
                  for (l = r.return; null !== l; ) {
                    var u = l.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = l.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    l = l.return;
                  }
                for (; null !== i; ) {
                  if (null === (l = ya(i))) return;
                  if (5 === (u = l.tag) || 6 === u) {
                    r = o = l;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          Re(function () {
            var r = o,
              a = ke(n),
              l = [];
            e: {
              var i = Or.get(e);
              if (void 0 !== i) {
                var u = sn,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = Nn;
                    break;
                  case "focusin":
                    (c = "focus"), (u = mn);
                    break;
                  case "focusout":
                    (c = "blur"), (u = mn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = mn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = vn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = Ln;
                    break;
                  case Pr:
                  case Nr:
                  case _r:
                    u = gn;
                    break;
                  case Lr:
                    u = On;
                    break;
                  case "scroll":
                    u = dn;
                    break;
                  case "wheel":
                    u = Tn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = _n;
                }
                var s = 0 !== (4 & t),
                  f = !s && "scroll" === e,
                  d = s ? (null !== i ? i + "Capture" : null) : i;
                s = [];
                for (var p, h = r; null !== h; ) {
                  var v = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== v &&
                      ((p = v),
                      null !== d &&
                        null != (v = Te(h, d)) &&
                        s.push(Wr(h, v, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < s.length &&
                  ((i = new u(i, c, null, n, a)),
                  l.push({ event: i, listeners: s }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(i = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!ya(c) && !c[ha])) &&
                  (u || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                      ? i.defaultView || i.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (c = (c = n.relatedTarget || n.toElement)
                          ? ya(c)
                          : null) &&
                        (c !== (f = $e(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((u = null), (c = r)),
                  u !== c))
              ) {
                if (
                  ((s = hn),
                  (v = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((s = _n),
                    (v = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == u ? i : wa(u)),
                  (p = null == c ? i : wa(c)),
                  ((i = new s(v, h + "leave", u, n, a)).target = f),
                  (i.relatedTarget = p),
                  (v = null),
                  ya(a) === r &&
                    (((s = new s(d, h + "enter", c, n, a)).target = p),
                    (s.relatedTarget = f),
                    (v = s)),
                  (f = v),
                  u && c)
                )
                  e: {
                    for (d = c, h = 0, p = s = u; p; p = Kr(p)) h++;
                    for (p = 0, v = d; v; v = Kr(v)) p++;
                    for (; 0 < h - p; ) (s = Kr(s)), h--;
                    for (; 0 < p - h; ) (d = Kr(d)), p--;
                    for (; h--; ) {
                      if (s === d || (null !== d && s === d.alternate)) break e;
                      (s = Kr(s)), (d = Kr(d));
                    }
                    s = null;
                  }
                else s = null;
                null !== u && qr(l, i, u, s, !1),
                  null !== c && null !== f && qr(l, f, c, s, !0);
              }
              if (
                "select" ===
                  (u =
                    (i = r ? wa(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ("input" === u && "file" === i.type)
              )
                var m = Yn;
              else if (Vn(i))
                if (Xn) m = lr;
                else {
                  m = ar;
                  var g = rr;
                }
              else
                (u = i.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === i.type || "radio" === i.type) &&
                  (m = or);
              switch (
                (m && (m = m(e, r))
                  ? Wn(l, m, n, a)
                  : (g && g(e, i, r),
                    "focusout" === e &&
                      (g = i._wrapperState) &&
                      g.controlled &&
                      "number" === i.type &&
                      ee(i, "number", i.value)),
                (g = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Vn(g) || "true" === g.contentEditable) &&
                    ((mr = g), (gr = r), (yr = null));
                  break;
                case "focusout":
                  yr = gr = mr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(l, n, a);
                  break;
                case "selectionchange":
                  if (vr) break;
                case "keydown":
                case "keyup":
                  wr(l, n, a);
              }
              var y;
              if (jn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                $n
                  ? An(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Mn &&
                  "ko" !== n.locale &&
                  ($n || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && $n && (y = en())
                    : ((Jt = "value" in (Xt = a) ? Xt.value : Xt.textContent),
                      ($n = !0))),
                0 < (g = Qr(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  l.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Bn(n)) && (b.data = y))),
                (y = Fn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Bn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Un = !0), Dn);
                        case "textInput":
                          return (e = t.data) === Dn && Un ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if ($n)
                        return "compositionend" === e || (!jn && An(e, t))
                          ? ((e = en()), (Zt = Jt = Xt = null), ($n = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Mn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Qr(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  l.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Dr(l, t);
          });
        }
        function Wr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Te(e, n)) && r.unshift(Wr(e, o, a)),
              null != (o = Te(e, t)) && r.push(Wr(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function Kr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function qr(e, t, n, r, a) {
          for (var o = t._reactName, l = []; null !== n && n !== r; ) {
            var i = n,
              u = i.alternate,
              c = i.stateNode;
            if (null !== u && u === r) break;
            5 === i.tag &&
              null !== c &&
              ((i = c),
              a
                ? null != (u = Te(n, o)) && l.unshift(Wr(n, u, i))
                : a || (null != (u = Te(n, o)) && l.push(Wr(n, u, i)))),
              (n = n.return);
          }
          0 !== l.length && e.push({ event: t, listeners: l });
        }
        var Gr = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Gr, "\n")
            .replace(Yr, "");
        }
        function Jr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(o(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" === typeof Promise ? Promise : void 0,
          la =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oa
              ? function (e) {
                  return oa.resolve(null).then(e).catch(ia);
                }
              : ra;
        function ia(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ua(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void $t(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          $t(t);
        }
        function ca(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function sa(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          pa = "__reactProps$" + fa,
          ha = "__reactContainer$" + fa,
          va = "__reactEvents$" + fa,
          ma = "__reactListeners$" + fa,
          ga = "__reactHandles$" + fa;
        function ya(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = sa(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = sa(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[da] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function ka(e) {
          return e[pa] || null;
        }
        var xa = [],
          Sa = -1;
        function Ea(e) {
          return { current: e };
        }
        function Ca(e) {
          0 > Sa || ((e.current = xa[Sa]), (xa[Sa] = null), Sa--);
        }
        function Pa(e, t) {
          Sa++, (xa[Sa] = e.current), (e.current = t);
        }
        var Na = {},
          _a = Ea(Na),
          La = Ea(!1),
          Oa = Na;
        function Ra(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Na;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Ta(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ia() {
          Ca(La), Ca(_a);
        }
        function ja(e, t, n) {
          if (_a.current !== Na) throw Error(o(168));
          Pa(_a, t), Pa(La, n);
        }
        function za(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, H(e) || "Unknown", a));
          return M({}, n, r);
        }
        function Fa(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Na),
            (Oa = _a.current),
            Pa(_a, e),
            Pa(La, La.current),
            !0
          );
        }
        function Ma(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = za(e, t, Oa)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ca(La),
              Ca(_a),
              Pa(_a, e))
            : Ca(La),
            Pa(La, n);
        }
        var Da = null,
          Ua = !1,
          Aa = !1;
        function Ba(e) {
          null === Da ? (Da = [e]) : Da.push(e);
        }
        function $a() {
          if (!Aa && null !== Da) {
            Aa = !0;
            var e = 0,
              t = bt;
            try {
              var n = Da;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Da = null), (Ua = !1);
            } catch (a) {
              throw (null !== Da && (Da = Da.slice(e + 1)), Ke(Ze, $a), a);
            } finally {
              (bt = t), (Aa = !1);
            }
          }
          return null;
        }
        var Ha = [],
          Va = 0,
          Wa = null,
          Qa = 0,
          Ka = [],
          qa = 0,
          Ga = null,
          Ya = 1,
          Xa = "";
        function Ja(e, t) {
          (Ha[Va++] = Qa), (Ha[Va++] = Wa), (Wa = e), (Qa = t);
        }
        function Za(e, t, n) {
          (Ka[qa++] = Ya), (Ka[qa++] = Xa), (Ka[qa++] = Ga), (Ga = e);
          var r = Ya;
          e = Xa;
          var a = 32 - lt(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - lt(t) + a;
          if (30 < o) {
            var l = a - (a % 5);
            (o = (r & ((1 << l) - 1)).toString(32)),
              (r >>= l),
              (a -= l),
              (Ya = (1 << (32 - lt(t) + a)) | (n << a) | r),
              (Xa = o + e);
          } else (Ya = (1 << o) | (n << a) | r), (Xa = e);
        }
        function eo(e) {
          null !== e.return && (Ja(e, 1), Za(e, 1, 0));
        }
        function to(e) {
          for (; e === Wa; )
            (Wa = Ha[--Va]), (Ha[Va] = null), (Qa = Ha[--Va]), (Ha[Va] = null);
          for (; e === Ga; )
            (Ga = Ka[--qa]),
              (Ka[qa] = null),
              (Xa = Ka[--qa]),
              (Ka[qa] = null),
              (Ya = Ka[--qa]),
              (Ka[qa] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function lo(e, t) {
          var n = Tc(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function io(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = ca(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ga ? { id: Ya, overflow: Xa } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Tc(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function uo(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function co(e) {
          if (ao) {
            var t = ro;
            if (t) {
              var n = t;
              if (!io(e, t)) {
                if (uo(e)) throw Error(o(418));
                t = ca(n.nextSibling);
                var r = no;
                t && io(e, t)
                  ? lo(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
              }
            } else {
              if (uo(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
            }
          }
        }
        function so(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!ao) return so(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (uo(e)) throw (po(), Error(o(418)));
            for (; t; ) lo(e, t), (t = ca(t.nextSibling));
          }
          if ((so(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = ca(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? ca(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = ca(e.nextSibling);
        }
        function ho() {
          (ro = no = null), (ao = !1);
        }
        function vo(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var mo = w.ReactCurrentBatchConfig;
        function go(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = M({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var yo = Ea(null),
          bo = null,
          wo = null,
          ko = null;
        function xo() {
          ko = wo = bo = null;
        }
        function So(e) {
          var t = yo.current;
          Ca(yo), (e._currentValue = t);
        }
        function Eo(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Co(e, t) {
          (bo = e),
            (ko = wo = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wi = !0), (e.firstContext = null));
        }
        function Po(e) {
          var t = e._currentValue;
          if (ko !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === wo)
            ) {
              if (null === bo) throw Error(o(308));
              (wo = e), (bo.dependencies = { lanes: 0, firstContext: e });
            } else wo = wo.next = e;
          return t;
        }
        var No = null;
        function _o(e) {
          null === No ? (No = [e]) : No.push(e);
        }
        function Lo(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), _o(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Oo(e, r)
          );
        }
        function Oo(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Ro = !1;
        function To(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Io(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function jo(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function zo(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Lu))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Oo(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), _o(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Oo(e, n)
          );
        }
        function Fo(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Mo(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var l = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = l) : (o = o.next = l), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Do(e, t, n, r) {
          var a = e.updateQueue;
          Ro = !1;
          var o = a.firstBaseUpdate,
            l = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var u = i,
              c = u.next;
            (u.next = null), null === l ? (o = c) : (l.next = c), (l = u);
            var s = e.alternate;
            null !== s &&
              (i = (s = s.updateQueue).lastBaseUpdate) !== l &&
              (null === i ? (s.firstBaseUpdate = c) : (i.next = c),
              (s.lastBaseUpdate = u));
          }
          if (null !== o) {
            var f = a.baseState;
            for (l = 0, s = c = u = null, i = o; ; ) {
              var d = i.lane,
                p = i.eventTime;
              if ((r & d) === d) {
                null !== s &&
                  (s = s.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    v = i;
                  switch (((d = t), (p = n), v.tag)) {
                    case 1:
                      if ("function" === typeof (h = v.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = v.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = M({}, f, d);
                      break e;
                    case 2:
                      Ro = !0;
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [i]) : d.push(i));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === s ? ((c = s = p), (u = f)) : (s = s.next = p),
                  (l |= d);
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                (i = (d = i).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === s && (u = f),
              (a.baseState = u),
              (a.firstBaseUpdate = c),
              (a.lastBaseUpdate = s),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (l |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (Mu |= l), (e.lanes = l), (e.memoizedState = f);
          }
        }
        function Uo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var Ao = new r.Component().refs;
        function Bo(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : M({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var $o = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && $e(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tc(),
              a = nc(e),
              o = jo(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = zo(e, o, a)) && (rc(t, e, a, r), Fo(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tc(),
              a = nc(e),
              o = jo(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = zo(e, o, a)) && (rc(t, e, a, r), Fo(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tc(),
              r = nc(e),
              a = jo(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = zo(e, a, r)) && (rc(t, e, r, n), Fo(t, e, r));
          },
        };
        function Ho(e, t, n, r, a, o, l) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, l)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ur(n, r) ||
                !ur(a, o);
        }
        function Vo(e, t, n) {
          var r = !1,
            a = Na,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = Po(o))
              : ((a = Ta(t) ? Oa : _a.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Ra(e, a)
                  : Na)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = $o),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function Wo(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && $o.enqueueReplaceState(t, t.state, null);
        }
        function Qo(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Ao), To(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (a.context = Po(o))
            : ((o = Ta(t) ? Oa : _a.current), (a.context = Ra(e, o))),
            (a.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (Bo(e, t, o, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && $o.enqueueReplaceState(a, a.state, null),
              Do(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Ko(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                l = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === l
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Ao && (t = a.refs = {}),
                      null === e ? delete t[l] : (t[l] = e);
                  }),
                  (t._stringRef = l),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function qo(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Go(e) {
          return (0, e._init)(e._payload);
        }
        function Yo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = jc(e, t)).index = 0), (e.sibling = null), e;
          }
          function l(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function i(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Dc(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            var o = n.type;
            return o === S
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ("object" === typeof o &&
                    null !== o &&
                    o.$$typeof === T &&
                    Go(o) === t.type))
              ? (((r = a(t, n.props)).ref = Ko(e, t, n)), (r.return = e), r)
              : (((r = zc(n.type, n.key, n.props, null, e.mode, r)).ref = Ko(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function s(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Uc(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Fc(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Dc("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return (
                    ((n = zc(t.type, t.key, t.props, null, e.mode, n)).ref = Ko(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case x:
                  return ((t = Uc(t, e.mode, n)).return = e), t;
                case T:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || z(t))
                return ((t = Fc(t, e.mode, n, null)).return = e), t;
              qo(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === a ? c(e, t, n, r) : null;
                case x:
                  return n.key === a ? s(e, t, n, r) : null;
                case T:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || z(n)) return null !== a ? null : f(e, t, n, r, null);
              qo(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return u(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case x:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case T:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || z(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              qo(t, r);
            }
            return null;
          }
          function v(a, o, i, u) {
            for (
              var c = null, s = null, f = o, v = (o = 0), m = null;
              null !== f && v < i.length;
              v++
            ) {
              f.index > v ? ((m = f), (f = null)) : (m = f.sibling);
              var g = p(a, f, i[v], u);
              if (null === g) {
                null === f && (f = m);
                break;
              }
              e && f && null === g.alternate && t(a, f),
                (o = l(g, o, v)),
                null === s ? (c = g) : (s.sibling = g),
                (s = g),
                (f = m);
            }
            if (v === i.length) return n(a, f), ao && Ja(a, v), c;
            if (null === f) {
              for (; v < i.length; v++)
                null !== (f = d(a, i[v], u)) &&
                  ((o = l(f, o, v)),
                  null === s ? (c = f) : (s.sibling = f),
                  (s = f));
              return ao && Ja(a, v), c;
            }
            for (f = r(a, f); v < i.length; v++)
              null !== (m = h(f, a, v, i[v], u)) &&
                (e &&
                  null !== m.alternate &&
                  f.delete(null === m.key ? v : m.key),
                (o = l(m, o, v)),
                null === s ? (c = m) : (s.sibling = m),
                (s = m));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ja(a, v),
              c
            );
          }
          function m(a, i, u, c) {
            var s = z(u);
            if ("function" !== typeof s) throw Error(o(150));
            if (null == (u = s.call(u))) throw Error(o(151));
            for (
              var f = (s = null), v = i, m = (i = 0), g = null, y = u.next();
              null !== v && !y.done;
              m++, y = u.next()
            ) {
              v.index > m ? ((g = v), (v = null)) : (g = v.sibling);
              var b = p(a, v, y.value, c);
              if (null === b) {
                null === v && (v = g);
                break;
              }
              e && v && null === b.alternate && t(a, v),
                (i = l(b, i, m)),
                null === f ? (s = b) : (f.sibling = b),
                (f = b),
                (v = g);
            }
            if (y.done) return n(a, v), ao && Ja(a, m), s;
            if (null === v) {
              for (; !y.done; m++, y = u.next())
                null !== (y = d(a, y.value, c)) &&
                  ((i = l(y, i, m)),
                  null === f ? (s = y) : (f.sibling = y),
                  (f = y));
              return ao && Ja(a, m), s;
            }
            for (v = r(a, v); !y.done; m++, y = u.next())
              null !== (y = h(v, a, m, y.value, c)) &&
                (e &&
                  null !== y.alternate &&
                  v.delete(null === y.key ? m : y.key),
                (i = l(y, i, m)),
                null === f ? (s = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                v.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ja(a, m),
              s
            );
          }
          return function e(r, o, l, u) {
            if (
              ("object" === typeof l &&
                null !== l &&
                l.type === S &&
                null === l.key &&
                (l = l.props.children),
              "object" === typeof l && null !== l)
            ) {
              switch (l.$$typeof) {
                case k:
                  e: {
                    for (var c = l.key, s = o; null !== s; ) {
                      if (s.key === c) {
                        if ((c = l.type) === S) {
                          if (7 === s.tag) {
                            n(r, s.sibling),
                              ((o = a(s, l.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          s.elementType === c ||
                          ("object" === typeof c &&
                            null !== c &&
                            c.$$typeof === T &&
                            Go(c) === s.type)
                        ) {
                          n(r, s.sibling),
                            ((o = a(s, l.props)).ref = Ko(r, s, l)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, s);
                        break;
                      }
                      t(r, s), (s = s.sibling);
                    }
                    l.type === S
                      ? (((o = Fc(l.props.children, r.mode, u, l.key)).return =
                          r),
                        (r = o))
                      : (((u = zc(
                          l.type,
                          l.key,
                          l.props,
                          null,
                          r.mode,
                          u
                        )).ref = Ko(r, o, l)),
                        (u.return = r),
                        (r = u));
                  }
                  return i(r);
                case x:
                  e: {
                    for (s = l.key; null !== o; ) {
                      if (o.key === s) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === l.containerInfo &&
                          o.stateNode.implementation === l.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = a(o, l.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = Uc(l, r.mode, u)).return = r), (r = o);
                  }
                  return i(r);
                case T:
                  return e(r, o, (s = l._init)(l._payload), u);
              }
              if (te(l)) return v(r, o, l, u);
              if (z(l)) return m(r, o, l, u);
              qo(r, l);
            }
            return ("string" === typeof l && "" !== l) || "number" === typeof l
              ? ((l = "" + l),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, l)).return = r), (r = o))
                  : (n(r, o), ((o = Dc(l, r.mode, u)).return = r), (r = o)),
                i(r))
              : n(r, o);
          };
        }
        var Xo = Yo(!0),
          Jo = Yo(!1),
          Zo = {},
          el = Ea(Zo),
          tl = Ea(Zo),
          nl = Ea(Zo);
        function rl(e) {
          if (e === Zo) throw Error(o(174));
          return e;
        }
        function al(e, t) {
          switch ((Pa(nl, t), Pa(tl, e), Pa(el, Zo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
              break;
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ca(el), Pa(el, t);
        }
        function ol() {
          Ca(el), Ca(tl), Ca(nl);
        }
        function ll(e) {
          rl(nl.current);
          var t = rl(el.current),
            n = ue(t, e.type);
          t !== n && (Pa(tl, e), Pa(el, n));
        }
        function il(e) {
          tl.current === e && (Ca(el), Ca(tl));
        }
        var ul = Ea(0);
        function cl(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var sl = [];
        function fl() {
          for (var e = 0; e < sl.length; e++)
            sl[e]._workInProgressVersionPrimary = null;
          sl.length = 0;
        }
        var dl = w.ReactCurrentDispatcher,
          pl = w.ReactCurrentBatchConfig,
          hl = 0,
          vl = null,
          ml = null,
          gl = null,
          yl = !1,
          bl = !1,
          wl = 0,
          kl = 0;
        function xl() {
          throw Error(o(321));
        }
        function Sl(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ir(e[n], t[n])) return !1;
          return !0;
        }
        function El(e, t, n, r, a, l) {
          if (
            ((hl = l),
            (vl = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (dl.current = null === e || null === e.memoizedState ? ii : ui),
            (e = n(r, a)),
            bl)
          ) {
            l = 0;
            do {
              if (((bl = !1), (wl = 0), 25 <= l)) throw Error(o(301));
              (l += 1),
                (gl = ml = null),
                (t.updateQueue = null),
                (dl.current = ci),
                (e = n(r, a));
            } while (bl);
          }
          if (
            ((dl.current = li),
            (t = null !== ml && null !== ml.next),
            (hl = 0),
            (gl = ml = vl = null),
            (yl = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function Cl() {
          var e = 0 !== wl;
          return (wl = 0), e;
        }
        function Pl() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === gl ? (vl.memoizedState = gl = e) : (gl = gl.next = e), gl
          );
        }
        function Nl() {
          if (null === ml) {
            var e = vl.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ml.next;
          var t = null === gl ? vl.memoizedState : gl.next;
          if (null !== t) (gl = t), (ml = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (ml = e).memoizedState,
              baseState: ml.baseState,
              baseQueue: ml.baseQueue,
              queue: ml.queue,
              next: null,
            }),
              null === gl ? (vl.memoizedState = gl = e) : (gl = gl.next = e);
          }
          return gl;
        }
        function _l(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Ll(e) {
          var t = Nl(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = ml,
            a = r.baseQueue,
            l = n.pending;
          if (null !== l) {
            if (null !== a) {
              var i = a.next;
              (a.next = l.next), (l.next = i);
            }
            (r.baseQueue = a = l), (n.pending = null);
          }
          if (null !== a) {
            (l = a.next), (r = r.baseState);
            var u = (i = null),
              c = null,
              s = l;
            do {
              var f = s.lane;
              if ((hl & f) === f)
                null !== c &&
                  (c = c.next =
                    {
                      lane: 0,
                      action: s.action,
                      hasEagerState: s.hasEagerState,
                      eagerState: s.eagerState,
                      next: null,
                    }),
                  (r = s.hasEagerState ? s.eagerState : e(r, s.action));
              else {
                var d = {
                  lane: f,
                  action: s.action,
                  hasEagerState: s.hasEagerState,
                  eagerState: s.eagerState,
                  next: null,
                };
                null === c ? ((u = c = d), (i = r)) : (c = c.next = d),
                  (vl.lanes |= f),
                  (Mu |= f);
              }
              s = s.next;
            } while (null !== s && s !== l);
            null === c ? (i = r) : (c.next = u),
              ir(r, t.memoizedState) || (wi = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = c),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (l = a.lane), (vl.lanes |= l), (Mu |= l), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Ol(e) {
          var t = Nl(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            l = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var i = (a = a.next);
            do {
              (l = e(l, i.action)), (i = i.next);
            } while (i !== a);
            ir(l, t.memoizedState) || (wi = !0),
              (t.memoizedState = l),
              null === t.baseQueue && (t.baseState = l),
              (n.lastRenderedState = l);
          }
          return [l, r];
        }
        function Rl() {}
        function Tl(e, t) {
          var n = vl,
            r = Nl(),
            a = t(),
            l = !ir(r.memoizedState, a);
          if (
            (l && ((r.memoizedState = a), (wi = !0)),
            (r = r.queue),
            Vl(zl.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              l ||
              (null !== gl && 1 & gl.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ul(9, jl.bind(null, n, r, a, t), void 0, null),
              null === Ou)
            )
              throw Error(o(349));
            0 !== (30 & hl) || Il(n, t, a);
          }
          return a;
        }
        function Il(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = vl.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vl.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function jl(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Fl(t) && Ml(e);
        }
        function zl(e, t, n) {
          return n(function () {
            Fl(t) && Ml(e);
          });
        }
        function Fl(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ir(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Ml(e) {
          var t = Oo(e, 1);
          null !== t && rc(t, e, 1, -1);
        }
        function Dl(e) {
          var t = Pl();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: _l,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ni.bind(null, vl, e)),
            [t.memoizedState, e]
          );
        }
        function Ul(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = vl.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vl.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Al() {
          return Nl().memoizedState;
        }
        function Bl(e, t, n, r) {
          var a = Pl();
          (vl.flags |= e),
            (a.memoizedState = Ul(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function $l(e, t, n, r) {
          var a = Nl();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== ml) {
            var l = ml.memoizedState;
            if (((o = l.destroy), null !== r && Sl(r, l.deps)))
              return void (a.memoizedState = Ul(t, n, o, r));
          }
          (vl.flags |= e), (a.memoizedState = Ul(1 | t, n, o, r));
        }
        function Hl(e, t) {
          return Bl(8390656, 8, e, t);
        }
        function Vl(e, t) {
          return $l(2048, 8, e, t);
        }
        function Wl(e, t) {
          return $l(4, 2, e, t);
        }
        function Ql(e, t) {
          return $l(4, 4, e, t);
        }
        function Kl(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function ql(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            $l(4, 4, Kl.bind(null, t, e), n)
          );
        }
        function Gl() {}
        function Yl(e, t) {
          var n = Nl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Sl(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Xl(e, t) {
          var n = Nl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Sl(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Jl(e, t, n) {
          return 0 === (21 & hl)
            ? (e.baseState && ((e.baseState = !1), (wi = !0)),
              (e.memoizedState = n))
            : (ir(n, t) ||
                ((n = vt()), (vl.lanes |= n), (Mu |= n), (e.baseState = !0)),
              t);
        }
        function Zl(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pl.transition;
          pl.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pl.transition = r);
          }
        }
        function ei() {
          return Nl().memoizedState;
        }
        function ti(e, t, n) {
          var r = nc(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            ri(e))
          )
            ai(t, n);
          else if (null !== (n = Lo(e, t, n, r))) {
            rc(n, e, r, tc()), oi(n, t, r);
          }
        }
        function ni(e, t, n) {
          var r = nc(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (ri(e)) ai(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  i = o(l, n);
                if (((a.hasEagerState = !0), (a.eagerState = i), ir(i, l))) {
                  var u = t.interleaved;
                  return (
                    null === u
                      ? ((a.next = a), _o(t))
                      : ((a.next = u.next), (u.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (c) {}
            null !== (n = Lo(e, t, a, r)) &&
              (rc(n, e, r, (a = tc())), oi(n, t, r));
          }
        }
        function ri(e) {
          var t = e.alternate;
          return e === vl || (null !== t && t === vl);
        }
        function ai(e, t) {
          bl = yl = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function oi(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var li = {
            readContext: Po,
            useCallback: xl,
            useContext: xl,
            useEffect: xl,
            useImperativeHandle: xl,
            useInsertionEffect: xl,
            useLayoutEffect: xl,
            useMemo: xl,
            useReducer: xl,
            useRef: xl,
            useState: xl,
            useDebugValue: xl,
            useDeferredValue: xl,
            useTransition: xl,
            useMutableSource: xl,
            useSyncExternalStore: xl,
            useId: xl,
            unstable_isNewReconciler: !1,
          },
          ii = {
            readContext: Po,
            useCallback: function (e, t) {
              return (Pl().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Po,
            useEffect: Hl,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Bl(4194308, 4, Kl.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Bl(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Bl(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Pl();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Pl();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = ti.bind(null, vl, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Pl().memoizedState = e);
            },
            useState: Dl,
            useDebugValue: Gl,
            useDeferredValue: function (e) {
              return (Pl().memoizedState = e);
            },
            useTransition: function () {
              var e = Dl(!1),
                t = e[0];
              return (
                (e = Zl.bind(null, e[1])), (Pl().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = vl,
                a = Pl();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Ou)) throw Error(o(349));
                0 !== (30 & hl) || Il(r, t, n);
              }
              a.memoizedState = n;
              var l = { value: n, getSnapshot: t };
              return (
                (a.queue = l),
                Hl(zl.bind(null, r, l, e), [e]),
                (r.flags |= 2048),
                Ul(9, jl.bind(null, r, l, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Pl(),
                t = Ou.identifierPrefix;
              if (ao) {
                var n = Xa;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ya & ~(1 << (32 - lt(Ya) - 1))).toString(32) + n)),
                  0 < (n = wl++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = kl++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ui = {
            readContext: Po,
            useCallback: Yl,
            useContext: Po,
            useEffect: Vl,
            useImperativeHandle: ql,
            useInsertionEffect: Wl,
            useLayoutEffect: Ql,
            useMemo: Xl,
            useReducer: Ll,
            useRef: Al,
            useState: function () {
              return Ll(_l);
            },
            useDebugValue: Gl,
            useDeferredValue: function (e) {
              return Jl(Nl(), ml.memoizedState, e);
            },
            useTransition: function () {
              return [Ll(_l)[0], Nl().memoizedState];
            },
            useMutableSource: Rl,
            useSyncExternalStore: Tl,
            useId: ei,
            unstable_isNewReconciler: !1,
          },
          ci = {
            readContext: Po,
            useCallback: Yl,
            useContext: Po,
            useEffect: Vl,
            useImperativeHandle: ql,
            useInsertionEffect: Wl,
            useLayoutEffect: Ql,
            useMemo: Xl,
            useReducer: Ol,
            useRef: Al,
            useState: function () {
              return Ol(_l);
            },
            useDebugValue: Gl,
            useDeferredValue: function (e) {
              var t = Nl();
              return null === ml
                ? (t.memoizedState = e)
                : Jl(t, ml.memoizedState, e);
            },
            useTransition: function () {
              return [Ol(_l)[0], Nl().memoizedState];
            },
            useMutableSource: Rl,
            useSyncExternalStore: Tl,
            useId: ei,
            unstable_isNewReconciler: !1,
          };
        function si(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += B(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function fi(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function di(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pi = "function" === typeof WeakMap ? WeakMap : Map;
        function hi(e, t, n) {
          ((n = jo(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Wu || ((Wu = !0), (Qu = r)), di(0, t);
            }),
            n
          );
        }
        function vi(e, t, n) {
          (n = jo(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                di(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                di(0, t),
                  "function" !== typeof r &&
                    (null === Ku ? (Ku = new Set([this])) : Ku.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function mi(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pi();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Pc.bind(null, e, t, n)), t.then(e, e));
        }
        function gi(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function yi(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = jo(-1, 1)).tag = 2), zo(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bi = w.ReactCurrentOwner,
          wi = !1;
        function ki(e, t, n, r) {
          t.child = null === e ? Jo(t, null, n, r) : Xo(t, e.child, n, r);
        }
        function xi(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            Co(t, a),
            (r = El(e, t, n, r, o, a)),
            (n = Cl()),
            null === e || wi
              ? (ao && n && eo(t), (t.flags |= 1), ki(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wi(e, t, a))
          );
        }
        function Si(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Ic(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = zc(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), Ei(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var l = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ur)(l, r) &&
              e.ref === t.ref
            )
              return Wi(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = jc(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Ei(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (ur(o, r) && e.ref === t.ref) {
              if (((wi = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Wi(e, t, a);
              0 !== (131072 & e.flags) && (wi = !0);
            }
          }
          return Ni(e, t, n, r, a);
        }
        function Ci(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Pa(ju, Iu),
                (Iu |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Pa(ju, Iu),
                  (Iu |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                Pa(ju, Iu),
                (Iu |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Pa(ju, Iu),
              (Iu |= r);
          return ki(e, t, a, n), t.child;
        }
        function Pi(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ni(e, t, n, r, a) {
          var o = Ta(n) ? Oa : _a.current;
          return (
            (o = Ra(t, o)),
            Co(t, a),
            (n = El(e, t, n, r, o, a)),
            (r = Cl()),
            null === e || wi
              ? (ao && r && eo(t), (t.flags |= 1), ki(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wi(e, t, a))
          );
        }
        function _i(e, t, n, r, a) {
          if (Ta(n)) {
            var o = !0;
            Fa(t);
          } else o = !1;
          if ((Co(t, a), null === t.stateNode))
            Vi(e, t), Vo(t, n, r), Qo(t, n, r, a), (r = !0);
          else if (null === e) {
            var l = t.stateNode,
              i = t.memoizedProps;
            l.props = i;
            var u = l.context,
              c = n.contextType;
            "object" === typeof c && null !== c
              ? (c = Po(c))
              : (c = Ra(t, (c = Ta(n) ? Oa : _a.current)));
            var s = n.getDerivedStateFromProps,
              f =
                "function" === typeof s ||
                "function" === typeof l.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof l.componentWillReceiveProps) ||
              ((i !== r || u !== c) && Wo(t, l, r, c)),
              (Ro = !1);
            var d = t.memoizedState;
            (l.state = d),
              Do(t, r, l, a),
              (u = t.memoizedState),
              i !== r || d !== u || La.current || Ro
                ? ("function" === typeof s &&
                    (Bo(t, n, s, r), (u = t.memoizedState)),
                  (i = Ro || Ho(t, n, i, r, d, u, c))
                    ? (f ||
                        ("function" !== typeof l.UNSAFE_componentWillMount &&
                          "function" !== typeof l.componentWillMount) ||
                        ("function" === typeof l.componentWillMount &&
                          l.componentWillMount(),
                        "function" === typeof l.UNSAFE_componentWillMount &&
                          l.UNSAFE_componentWillMount()),
                      "function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (l.props = r),
                  (l.state = u),
                  (l.context = c),
                  (r = i))
                : ("function" === typeof l.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (l = t.stateNode),
              Io(e, t),
              (i = t.memoizedProps),
              (c = t.type === t.elementType ? i : go(t.type, i)),
              (l.props = c),
              (f = t.pendingProps),
              (d = l.context),
              "object" === typeof (u = n.contextType) && null !== u
                ? (u = Po(u))
                : (u = Ra(t, (u = Ta(n) ? Oa : _a.current)));
            var p = n.getDerivedStateFromProps;
            (s =
              "function" === typeof p ||
              "function" === typeof l.getSnapshotBeforeUpdate) ||
              ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof l.componentWillReceiveProps) ||
              ((i !== f || d !== u) && Wo(t, l, r, u)),
              (Ro = !1),
              (d = t.memoizedState),
              (l.state = d),
              Do(t, r, l, a);
            var h = t.memoizedState;
            i !== f || d !== h || La.current || Ro
              ? ("function" === typeof p &&
                  (Bo(t, n, p, r), (h = t.memoizedState)),
                (c = Ro || Ho(t, n, c, r, d, h, u) || !1)
                  ? (s ||
                      ("function" !== typeof l.UNSAFE_componentWillUpdate &&
                        "function" !== typeof l.componentWillUpdate) ||
                      ("function" === typeof l.componentWillUpdate &&
                        l.componentWillUpdate(r, h, u),
                      "function" === typeof l.UNSAFE_componentWillUpdate &&
                        l.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" === typeof l.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof l.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof l.componentDidUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof l.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (l.props = r),
                (l.state = h),
                (l.context = u),
                (r = c))
              : ("function" !== typeof l.componentDidUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof l.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Li(e, t, n, r, o, a);
        }
        function Li(e, t, n, r, a, o) {
          Pi(e, t);
          var l = 0 !== (128 & t.flags);
          if (!r && !l) return a && Ma(t, n, !1), Wi(e, t, o);
          (r = t.stateNode), (bi.current = t);
          var i =
            l && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && l
              ? ((t.child = Xo(t, e.child, null, o)),
                (t.child = Xo(t, null, i, o)))
              : ki(e, t, i, o),
            (t.memoizedState = r.state),
            a && Ma(t, n, !0),
            t.child
          );
        }
        function Oi(e) {
          var t = e.stateNode;
          t.pendingContext
            ? ja(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && ja(0, t.context, !1),
            al(e, t.containerInfo);
        }
        function Ri(e, t, n, r, a) {
          return ho(), vo(a), (t.flags |= 256), ki(e, t, n, r), t.child;
        }
        var Ti,
          Ii,
          ji,
          zi,
          Fi = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Mi(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Di(e, t, n) {
          var r,
            a = t.pendingProps,
            l = ul.current,
            i = !1,
            u = 0 !== (128 & t.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & l)),
            r
              ? ((i = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (l |= 1),
            Pa(ul, 1 & l),
            null === e)
          )
            return (
              co(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((u = a.children),
                  (e = a.fallback),
                  i
                    ? ((a = t.mode),
                      (i = t.child),
                      (u = { mode: "hidden", children: u }),
                      0 === (1 & a) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = u))
                        : (i = Mc(u, a, 0, null)),
                      (e = Fc(e, a, n, null)),
                      (i.return = t),
                      (e.return = t),
                      (i.sibling = e),
                      (t.child = i),
                      (t.child.memoizedState = Mi(n)),
                      (t.memoizedState = Fi),
                      e)
                    : Ui(t, u))
            );
          if (null !== (l = e.memoizedState) && null !== (r = l.dehydrated))
            return (function (e, t, n, r, a, l, i) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Ai(e, t, i, (r = fi(Error(o(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((l = r.fallback),
                    (a = t.mode),
                    (r = Mc(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((l = Fc(l, a, i, null)).flags |= 2),
                    (r.return = t),
                    (l.return = t),
                    (r.sibling = l),
                    (t.child = r),
                    0 !== (1 & t.mode) && Xo(t, e.child, null, i),
                    (t.child.memoizedState = Mi(i)),
                    (t.memoizedState = Fi),
                    l);
              if (0 === (1 & t.mode)) return Ai(e, t, i, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var u = r.dgst;
                return (
                  (r = u), Ai(e, t, i, (r = fi((l = Error(o(419))), r, void 0)))
                );
              }
              if (((u = 0 !== (i & e.childLanes)), wi || u)) {
                if (null !== (r = Ou)) {
                  switch (i & -i) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
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
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | i)) ? 0 : a) &&
                    a !== l.retryLane &&
                    ((l.retryLane = a), Oo(e, a), rc(r, e, a, -1));
                }
                return mc(), Ai(e, t, i, (r = fi(Error(o(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = _c.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = l.treeContext),
                  (ro = ca(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((Ka[qa++] = Ya),
                    (Ka[qa++] = Xa),
                    (Ka[qa++] = Ga),
                    (Ya = e.id),
                    (Xa = e.overflow),
                    (Ga = t)),
                  (t = Ui(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, u, a, r, l, n);
          if (i) {
            (i = a.fallback), (u = t.mode), (r = (l = e.child).sibling);
            var c = { mode: "hidden", children: a.children };
            return (
              0 === (1 & u) && t.child !== l
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = c),
                  (t.deletions = null))
                : ((a = jc(l, c)).subtreeFlags = 14680064 & l.subtreeFlags),
              null !== r
                ? (i = jc(r, i))
                : ((i = Fc(i, u, n, null)).flags |= 2),
              (i.return = t),
              (a.return = t),
              (a.sibling = i),
              (t.child = a),
              (a = i),
              (i = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Mi(n)
                  : {
                      baseLanes: u.baseLanes | n,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (i.memoizedState = u),
              (i.childLanes = e.childLanes & ~n),
              (t.memoizedState = Fi),
              a
            );
          }
          return (
            (e = (i = e.child).sibling),
            (a = jc(i, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Ui(e, t) {
          return (
            ((t = Mc(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Ai(e, t, n, r) {
          return (
            null !== r && vo(r),
            Xo(t, e.child, null, n),
            ((e = Ui(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Bi(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Eo(e.return, t, n);
        }
        function $i(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function Hi(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((ki(e, t, r.children, n), 0 !== (2 & (r = ul.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Bi(e, n, t);
                else if (19 === e.tag) Bi(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Pa(ul, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === cl(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  $i(t, !1, a, n, o);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === cl(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                $i(t, !0, n, null, o);
                break;
              case "together":
                $i(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Vi(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Wi(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Mu |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = jc((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = jc(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Qi(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Ki(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function qi(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Ki(t), null;
            case 1:
            case 17:
              return Ta(t.type) && Ia(), Ki(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ol(),
                Ca(La),
                Ca(_a),
                fl(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (ic(oo), (oo = null)))),
                Ii(e, t),
                Ki(t),
                null
              );
            case 5:
              il(t);
              var a = rl(nl.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                ji(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return Ki(t), null;
                }
                if (((e = rl(el.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var l = t.memoizedProps;
                  switch (
                    ((r[da] = t), (r[pa] = l), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Ur("cancel", r), Ur("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ur("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < zr.length; a++) Ur(zr[a], r);
                      break;
                    case "source":
                      Ur("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ur("error", r), Ur("load", r);
                      break;
                    case "details":
                      Ur("toggle", r);
                      break;
                    case "input":
                      Y(r, l), Ur("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!l.multiple }),
                        Ur("invalid", r);
                      break;
                    case "textarea":
                      ae(r, l), Ur("invalid", r);
                  }
                  for (var u in (ye(n, l), (a = null), l))
                    if (l.hasOwnProperty(u)) {
                      var c = l[u];
                      "children" === u
                        ? "string" === typeof c
                          ? r.textContent !== c &&
                            (!0 !== l.suppressHydrationWarning &&
                              Jr(r.textContent, c, e),
                            (a = ["children", c]))
                          : "number" === typeof c &&
                            r.textContent !== "" + c &&
                            (!0 !== l.suppressHydrationWarning &&
                              Jr(r.textContent, c, e),
                            (a = ["children", "" + c]))
                        : i.hasOwnProperty(u) &&
                          null != c &&
                          "onScroll" === u &&
                          Ur("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      Q(r), Z(r, l, !0);
                      break;
                    case "textarea":
                      Q(r), le(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof l.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ie(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          "select" === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[da] = t),
                    (e[pa] = r),
                    Ti(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case "dialog":
                        Ur("cancel", e), Ur("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ur("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < zr.length; a++) Ur(zr[a], e);
                        a = r;
                        break;
                      case "source":
                        Ur("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ur("error", e), Ur("load", e), (a = r);
                        break;
                      case "details":
                        Ur("toggle", e), (a = r);
                        break;
                      case "input":
                        Y(e, r), (a = G(e, r)), Ur("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = M({}, r, { value: void 0 })),
                          Ur("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Ur("invalid", e);
                    }
                    for (l in (ye(n, a), (c = a)))
                      if (c.hasOwnProperty(l)) {
                        var s = c[l];
                        "style" === l
                          ? me(e, s)
                          : "dangerouslySetInnerHTML" === l
                          ? null != (s = s ? s.__html : void 0) && fe(e, s)
                          : "children" === l
                          ? "string" === typeof s
                            ? ("textarea" !== n || "" !== s) && de(e, s)
                            : "number" === typeof s && de(e, "" + s)
                          : "suppressContentEditableWarning" !== l &&
                            "suppressHydrationWarning" !== l &&
                            "autoFocus" !== l &&
                            (i.hasOwnProperty(l)
                              ? null != s && "onScroll" === l && Ur("scroll", e)
                              : null != s && b(e, l, s, u));
                      }
                    switch (n) {
                      case "input":
                        Q(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        Q(e), le(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + V(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (l = r.value)
                            ? ne(e, !!r.multiple, l, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Ki(t), null;
            case 6:
              if (e && null != t.stateNode) zi(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = rl(nl.current)), rl(el.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (l = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  l && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[da] = t),
                    (t.stateNode = r);
              }
              return Ki(t), null;
            case 13:
              if (
                (Ca(ul),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ao &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  po(), ho(), (t.flags |= 98560), (l = !1);
                else if (((l = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!l) throw Error(o(318));
                    if (
                      !(l =
                        null !== (l = t.memoizedState) ? l.dehydrated : null)
                    )
                      throw Error(o(317));
                    l[da] = t;
                  } else
                    ho(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Ki(t), (l = !1);
                } else null !== oo && (ic(oo), (oo = null)), (l = !0);
                if (!l) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ul.current)
                        ? 0 === zu && (zu = 3)
                        : mc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Ki(t),
                  null);
            case 4:
              return (
                ol(),
                Ii(e, t),
                null === e && $r(t.stateNode.containerInfo),
                Ki(t),
                null
              );
            case 10:
              return So(t.type._context), Ki(t), null;
            case 19:
              if ((Ca(ul), null === (l = t.memoizedState))) return Ki(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (u = l.rendering)))
                if (r) Qi(l, !1);
                else {
                  if (0 !== zu || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = cl(e))) {
                        for (
                          t.flags |= 128,
                            Qi(l, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((l = n).flags &= 14680066),
                            null === (u = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.subtreeFlags = 0),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = u.childLanes),
                                (l.lanes = u.lanes),
                                (l.child = u.child),
                                (l.subtreeFlags = 0),
                                (l.deletions = null),
                                (l.memoizedProps = u.memoizedProps),
                                (l.memoizedState = u.memoizedState),
                                (l.updateQueue = u.updateQueue),
                                (l.type = u.type),
                                (e = u.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Pa(ul, (1 & ul.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== l.tail &&
                    Xe() > Hu &&
                    ((t.flags |= 128),
                    (r = !0),
                    Qi(l, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = cl(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Qi(l, !0),
                      null === l.tail &&
                        "hidden" === l.tailMode &&
                        !u.alternate &&
                        !ao)
                    )
                      return Ki(t), null;
                  } else
                    2 * Xe() - l.renderingStartTime > Hu &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Qi(l, !1),
                      (t.lanes = 4194304));
                l.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = l.last) ? (n.sibling = u) : (t.child = u),
                    (l.last = u));
              }
              return null !== l.tail
                ? ((t = l.tail),
                  (l.rendering = t),
                  (l.tail = t.sibling),
                  (l.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = ul.current),
                  Pa(ul, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Ki(t), null);
            case 22:
            case 23:
              return (
                dc(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Iu) &&
                    (Ki(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Ki(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Gi(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Ta(t.type) && Ia(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ol(),
                Ca(La),
                Ca(_a),
                fl(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return il(t), null;
            case 13:
              if (
                (Ca(ul),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                ho();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ca(ul), null;
            case 4:
              return ol(), null;
            case 10:
              return So(t.type._context), null;
            case 22:
            case 23:
              return dc(), null;
            default:
              return null;
          }
        }
        (Ti = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ii = function () {}),
          (ji = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), rl(el.current);
              var o,
                l = null;
              switch (n) {
                case "input":
                  (a = G(e, a)), (r = G(e, r)), (l = []);
                  break;
                case "select":
                  (a = M({}, a, { value: void 0 })),
                    (r = M({}, r, { value: void 0 })),
                    (l = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (l = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (s in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(s) && a.hasOwnProperty(s) && null != a[s])
                  if ("style" === s) {
                    var u = a[s];
                    for (o in u)
                      u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== s &&
                      "children" !== s &&
                      "suppressContentEditableWarning" !== s &&
                      "suppressHydrationWarning" !== s &&
                      "autoFocus" !== s &&
                      (i.hasOwnProperty(s)
                        ? l || (l = [])
                        : (l = l || []).push(s, null));
              for (s in r) {
                var c = r[s];
                if (
                  ((u = null != a ? a[s] : void 0),
                  r.hasOwnProperty(s) && c !== u && (null != c || null != u))
                )
                  if ("style" === s)
                    if (u) {
                      for (o in u)
                        !u.hasOwnProperty(o) ||
                          (c && c.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in c)
                        c.hasOwnProperty(o) &&
                          u[o] !== c[o] &&
                          (n || (n = {}), (n[o] = c[o]));
                    } else n || (l || (l = []), l.push(s, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === s
                      ? ((c = c ? c.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != c && u !== c && (l = l || []).push(s, c))
                      : "children" === s
                      ? ("string" !== typeof c && "number" !== typeof c) ||
                        (l = l || []).push(s, "" + c)
                      : "suppressContentEditableWarning" !== s &&
                        "suppressHydrationWarning" !== s &&
                        (i.hasOwnProperty(s)
                          ? (null != c && "onScroll" === s && Ur("scroll", e),
                            l || u === c || (l = []))
                          : (l = l || []).push(s, c));
              }
              n && (l = l || []).push("style", n);
              var s = l;
              (t.updateQueue = s) && (t.flags |= 4);
            }
          }),
          (zi = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Yi = !1,
          Xi = !1,
          Ji = "function" === typeof WeakSet ? WeakSet : Set,
          Zi = null;
        function eu(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Cc(e, t, r);
              }
            else n.current = null;
        }
        function tu(e, t, n) {
          try {
            n();
          } catch (r) {
            Cc(e, t, r);
          }
        }
        var nu = !1;
        function ru(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && tu(t, n, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function au(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ou(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function lu(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), lu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[pa],
              delete t[va],
              delete t[ma],
              delete t[ga]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function iu(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function uu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || iu(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function cu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (cu(e, t, n), e = e.sibling; null !== e; )
              cu(e, t, n), (e = e.sibling);
        }
        function su(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e; )
              su(e, t, n), (e = e.sibling);
        }
        var fu = null,
          du = !1;
        function pu(e, t, n) {
          for (n = n.child; null !== n; ) hu(e, t, n), (n = n.sibling);
        }
        function hu(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (i) {}
          switch (n.tag) {
            case 5:
              Xi || eu(n, t);
            case 6:
              var r = fu,
                a = du;
              (fu = null),
                pu(e, t, n),
                (du = a),
                null !== (fu = r) &&
                  (du
                    ? ((e = fu),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : fu.removeChild(n.stateNode));
              break;
            case 18:
              null !== fu &&
                (du
                  ? ((e = fu),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? ua(e.parentNode, n)
                      : 1 === e.nodeType && ua(e, n),
                    $t(e))
                  : ua(fu, n.stateNode));
              break;
            case 4:
              (r = fu),
                (a = du),
                (fu = n.stateNode.containerInfo),
                (du = !0),
                pu(e, t, n),
                (fu = r),
                (du = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Xi &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var o = a,
                    l = o.destroy;
                  (o = o.tag),
                    void 0 !== l &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      tu(n, t, l),
                    (a = a.next);
                } while (a !== r);
              }
              pu(e, t, n);
              break;
            case 1:
              if (
                !Xi &&
                (eu(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (i) {
                  Cc(n, t, i);
                }
              pu(e, t, n);
              break;
            case 21:
              pu(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Xi = (r = Xi) || null !== n.memoizedState),
                  pu(e, t, n),
                  (Xi = r))
                : pu(e, t, n);
              break;
            default:
              pu(e, t, n);
          }
        }
        function vu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Ji()),
              t.forEach(function (t) {
                var r = Lc.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function mu(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var l = e,
                  i = t,
                  u = i;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (fu = u.stateNode), (du = !1);
                      break e;
                    case 3:
                    case 4:
                      (fu = u.stateNode.containerInfo), (du = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === fu) throw Error(o(160));
                hu(l, i, a), (fu = null), (du = !1);
                var c = a.alternate;
                null !== c && (c.return = null), (a.return = null);
              } catch (s) {
                Cc(a, t, s);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gu(t, e), (t = t.sibling);
        }
        function gu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((mu(t, e), yu(e), 4 & r)) {
                try {
                  ru(3, e, e.return), au(3, e);
                } catch (m) {
                  Cc(e, e.return, m);
                }
                try {
                  ru(5, e, e.return);
                } catch (m) {
                  Cc(e, e.return, m);
                }
              }
              break;
            case 1:
              mu(t, e), yu(e), 512 & r && null !== n && eu(n, n.return);
              break;
            case 5:
              if (
                (mu(t, e),
                yu(e),
                512 & r && null !== n && eu(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (m) {
                  Cc(e, e.return, m);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var l = e.memoizedProps,
                  i = null !== n ? n.memoizedProps : l,
                  u = e.type,
                  c = e.updateQueue;
                if (((e.updateQueue = null), null !== c))
                  try {
                    "input" === u &&
                      "radio" === l.type &&
                      null != l.name &&
                      X(a, l),
                      be(u, i);
                    var s = be(u, l);
                    for (i = 0; i < c.length; i += 2) {
                      var f = c[i],
                        d = c[i + 1];
                      "style" === f
                        ? me(a, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(a, d)
                        : "children" === f
                        ? de(a, d)
                        : b(a, f, d, s);
                    }
                    switch (u) {
                      case "input":
                        J(a, l);
                        break;
                      case "textarea":
                        oe(a, l);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!l.multiple;
                        var h = l.value;
                        null != h
                          ? ne(a, !!l.multiple, h, !1)
                          : p !== !!l.multiple &&
                            (null != l.defaultValue
                              ? ne(a, !!l.multiple, l.defaultValue, !0)
                              : ne(a, !!l.multiple, l.multiple ? [] : "", !1));
                    }
                    a[pa] = l;
                  } catch (m) {
                    Cc(e, e.return, m);
                  }
              }
              break;
            case 6:
              if ((mu(t, e), yu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (l = e.memoizedProps);
                try {
                  a.nodeValue = l;
                } catch (m) {
                  Cc(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                (mu(t, e),
                yu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  $t(t.containerInfo);
                } catch (m) {
                  Cc(e, e.return, m);
                }
              break;
            case 4:
            default:
              mu(t, e), yu(e);
              break;
            case 13:
              mu(t, e),
                yu(e),
                8192 & (a = e.child).flags &&
                  ((l = null !== a.memoizedState),
                  (a.stateNode.isHidden = l),
                  !l ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    ($u = Xe())),
                4 & r && vu(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Xi = (s = Xi) || f), mu(t, e), (Xi = s))
                  : mu(t, e),
                yu(e),
                8192 & r)
              ) {
                if (
                  ((s = null !== e.memoizedState),
                  (e.stateNode.isHidden = s) && !f && 0 !== (1 & e.mode))
                )
                  for (Zi = e, f = e.child; null !== f; ) {
                    for (d = Zi = f; null !== Zi; ) {
                      switch (((h = (p = Zi).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ru(4, p, p.return);
                          break;
                        case 1:
                          eu(p, p.return);
                          var v = p.stateNode;
                          if ("function" === typeof v.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (v.props = t.memoizedProps),
                                (v.state = t.memoizedState),
                                v.componentWillUnmount();
                            } catch (m) {
                              Cc(r, n, m);
                            }
                          }
                          break;
                        case 5:
                          eu(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            xu(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Zi = h)) : xu(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          s
                            ? "function" === typeof (l = a.style).setProperty
                              ? l.setProperty("display", "none", "important")
                              : (l.display = "none")
                            : ((u = d.stateNode),
                              (i =
                                void 0 !== (c = d.memoizedProps.style) &&
                                null !== c &&
                                c.hasOwnProperty("display")
                                  ? c.display
                                  : null),
                              (u.style.display = ve("display", i)));
                      } catch (m) {
                        Cc(e, e.return, m);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = s ? "" : d.memoizedProps;
                      } catch (m) {
                        Cc(e, e.return, m);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              mu(t, e), yu(e), 4 & r && vu(e);
            case 21:
          }
        }
        function yu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (iu(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    su(e, uu(e), a);
                  break;
                case 3:
                case 4:
                  var l = r.stateNode.containerInfo;
                  cu(e, uu(e), l);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (i) {
              Cc(e, e.return, i);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bu(e, t, n) {
          (Zi = e), wu(e, t, n);
        }
        function wu(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Zi; ) {
            var a = Zi,
              o = a.child;
            if (22 === a.tag && r) {
              var l = null !== a.memoizedState || Yi;
              if (!l) {
                var i = a.alternate,
                  u = (null !== i && null !== i.memoizedState) || Xi;
                i = Yi;
                var c = Xi;
                if (((Yi = l), (Xi = u) && !c))
                  for (Zi = a; null !== Zi; )
                    (u = (l = Zi).child),
                      22 === l.tag && null !== l.memoizedState
                        ? Su(a)
                        : null !== u
                        ? ((u.return = l), (Zi = u))
                        : Su(a);
                for (; null !== o; ) (Zi = o), wu(o, t, n), (o = o.sibling);
                (Zi = a), (Yi = i), (Xi = c);
              }
              ku(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (Zi = o))
                : ku(e);
          }
        }
        function ku(e) {
          for (; null !== Zi; ) {
            var t = Zi;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xi || au(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Xi)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : go(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var l = t.updateQueue;
                      null !== l && Uo(t, l, r);
                      break;
                    case 3:
                      var i = t.updateQueue;
                      if (null !== i) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Uo(t, i, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
                        var c = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            c.autoFocus && n.focus();
                            break;
                          case "img":
                            c.src && (n.src = c.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var s = t.alternate;
                        if (null !== s) {
                          var f = s.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && $t(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Xi || (512 & t.flags && ou(t));
              } catch (p) {
                Cc(t, t.return, p);
              }
            }
            if (t === e) {
              Zi = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Zi = n);
              break;
            }
            Zi = t.return;
          }
        }
        function xu(e) {
          for (; null !== Zi; ) {
            var t = Zi;
            if (t === e) {
              Zi = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Zi = n);
              break;
            }
            Zi = t.return;
          }
        }
        function Su(e) {
          for (; null !== Zi; ) {
            var t = Zi;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    au(4, t);
                  } catch (u) {
                    Cc(t, n, u);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      Cc(t, a, u);
                    }
                  }
                  var o = t.return;
                  try {
                    ou(t);
                  } catch (u) {
                    Cc(t, o, u);
                  }
                  break;
                case 5:
                  var l = t.return;
                  try {
                    ou(t);
                  } catch (u) {
                    Cc(t, l, u);
                  }
              }
            } catch (u) {
              Cc(t, t.return, u);
            }
            if (t === e) {
              Zi = null;
              break;
            }
            var i = t.sibling;
            if (null !== i) {
              (i.return = t.return), (Zi = i);
              break;
            }
            Zi = t.return;
          }
        }
        var Eu,
          Cu = Math.ceil,
          Pu = w.ReactCurrentDispatcher,
          Nu = w.ReactCurrentOwner,
          _u = w.ReactCurrentBatchConfig,
          Lu = 0,
          Ou = null,
          Ru = null,
          Tu = 0,
          Iu = 0,
          ju = Ea(0),
          zu = 0,
          Fu = null,
          Mu = 0,
          Du = 0,
          Uu = 0,
          Au = null,
          Bu = null,
          $u = 0,
          Hu = 1 / 0,
          Vu = null,
          Wu = !1,
          Qu = null,
          Ku = null,
          qu = !1,
          Gu = null,
          Yu = 0,
          Xu = 0,
          Ju = null,
          Zu = -1,
          ec = 0;
        function tc() {
          return 0 !== (6 & Lu) ? Xe() : -1 !== Zu ? Zu : (Zu = Xe());
        }
        function nc(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Lu) && 0 !== Tu
            ? Tu & -Tu
            : null !== mo.transition
            ? (0 === ec && (ec = vt()), ec)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function rc(e, t, n, r) {
          if (50 < Xu) throw ((Xu = 0), (Ju = null), Error(o(185)));
          gt(e, n, r),
            (0 !== (2 & Lu) && e === Ou) ||
              (e === Ou && (0 === (2 & Lu) && (Du |= n), 4 === zu && uc(e, Tu)),
              ac(e, r),
              1 === n &&
                0 === Lu &&
                0 === (1 & t.mode) &&
                ((Hu = Xe() + 500), Ua && $a()));
        }
        function ac(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var l = 31 - lt(o),
                i = 1 << l,
                u = a[l];
              -1 === u
                ? (0 !== (i & n) && 0 === (i & r)) || (a[l] = pt(i, t))
                : u <= t && (e.expiredLanes |= i),
                (o &= ~i);
            }
          })(e, t);
          var r = dt(e, e === Ou ? Tu : 0);
          if (0 === r)
            null !== n && qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ua = !0), Ba(e);
                  })(cc.bind(null, e))
                : Ba(cc.bind(null, e)),
                la(function () {
                  0 === (6 & Lu) && $a();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Oc(n, oc.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function oc(e, t) {
          if (((Zu = -1), (ec = 0), 0 !== (6 & Lu))) throw Error(o(327));
          var n = e.callbackNode;
          if (Sc() && e.callbackNode !== n) return null;
          var r = dt(e, e === Ou ? Tu : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gc(e, r);
          else {
            t = r;
            var a = Lu;
            Lu |= 2;
            var l = vc();
            for (
              (Ou === e && Tu === t) ||
              ((Vu = null), (Hu = Xe() + 500), pc(e, t));
              ;

            )
              try {
                bc();
                break;
              } catch (u) {
                hc(e, u);
              }
            xo(),
              (Pu.current = l),
              (Lu = a),
              null !== Ru ? (t = 0) : ((Ou = null), (Tu = 0), (t = zu));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = lc(e, a))),
              1 === t)
            )
              throw ((n = Fu), pc(e, 0), uc(e, r), ac(e, Xe()), n);
            if (6 === t) uc(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!ir(o(), a)) return !1;
                            } catch (i) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = gc(e, r)) &&
                    0 !== (l = ht(e)) &&
                    ((r = l), (t = lc(e, l))),
                  1 === t))
              )
                throw ((n = Fu), pc(e, 0), uc(e, r), ac(e, Xe()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  xc(e, Bu, Vu);
                  break;
                case 3:
                  if (
                    (uc(e, r),
                    (130023424 & r) === r && 10 < (t = $u + 500 - Xe()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      tc(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(xc.bind(null, e, Bu, Vu), t);
                    break;
                  }
                  xc(e, Bu, Vu);
                  break;
                case 4:
                  if ((uc(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var i = 31 - lt(r);
                    (l = 1 << i), (i = t[i]) > a && (a = i), (r &= ~l);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Cu(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(xc.bind(null, e, Bu, Vu), r);
                    break;
                  }
                  xc(e, Bu, Vu);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return ac(e, Xe()), e.callbackNode === n ? oc.bind(null, e) : null;
        }
        function lc(e, t) {
          var n = Au;
          return (
            e.current.memoizedState.isDehydrated && (pc(e, t).flags |= 256),
            2 !== (e = gc(e, t)) && ((t = Bu), (Bu = n), null !== t && ic(t)),
            e
          );
        }
        function ic(e) {
          null === Bu ? (Bu = e) : Bu.push.apply(Bu, e);
        }
        function uc(e, t) {
          for (
            t &= ~Uu,
              t &= ~Du,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - lt(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function cc(e) {
          if (0 !== (6 & Lu)) throw Error(o(327));
          Sc();
          var t = dt(e, 0);
          if (0 === (1 & t)) return ac(e, Xe()), null;
          var n = gc(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = lc(e, r)));
          }
          if (1 === n) throw ((n = Fu), pc(e, 0), uc(e, t), ac(e, Xe()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            xc(e, Bu, Vu),
            ac(e, Xe()),
            null
          );
        }
        function sc(e, t) {
          var n = Lu;
          Lu |= 1;
          try {
            return e(t);
          } finally {
            0 === (Lu = n) && ((Hu = Xe() + 500), Ua && $a());
          }
        }
        function fc(e) {
          null !== Gu && 0 === Gu.tag && 0 === (6 & Lu) && Sc();
          var t = Lu;
          Lu |= 1;
          var n = _u.transition,
            r = bt;
          try {
            if (((_u.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (_u.transition = n), 0 === (6 & (Lu = t)) && $a();
          }
        }
        function dc() {
          (Iu = ju.current), Ca(ju);
        }
        function pc(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ru))
            for (n = Ru.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ia();
                  break;
                case 3:
                  ol(), Ca(La), Ca(_a), fl();
                  break;
                case 5:
                  il(r);
                  break;
                case 4:
                  ol();
                  break;
                case 13:
                case 19:
                  Ca(ul);
                  break;
                case 10:
                  So(r.type._context);
                  break;
                case 22:
                case 23:
                  dc();
              }
              n = n.return;
            }
          if (
            ((Ou = e),
            (Ru = e = jc(e.current, null)),
            (Tu = Iu = t),
            (zu = 0),
            (Fu = null),
            (Uu = Du = Mu = 0),
            (Bu = Au = null),
            null !== No)
          ) {
            for (t = 0; t < No.length; t++)
              if (null !== (r = (n = No[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var l = o.next;
                  (o.next = a), (r.next = l);
                }
                n.pending = r;
              }
            No = null;
          }
          return e;
        }
        function hc(e, t) {
          for (;;) {
            var n = Ru;
            try {
              if ((xo(), (dl.current = li), yl)) {
                for (var r = vl.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                yl = !1;
              }
              if (
                ((hl = 0),
                (gl = ml = vl = null),
                (bl = !1),
                (wl = 0),
                (Nu.current = null),
                null === n || null === n.return)
              ) {
                (zu = 1), (Fu = t), (Ru = null);
                break;
              }
              e: {
                var l = e,
                  i = n.return,
                  u = n,
                  c = t;
                if (
                  ((t = Tu),
                  (u.flags |= 32768),
                  null !== c &&
                    "object" === typeof c &&
                    "function" === typeof c.then)
                ) {
                  var s = c,
                    f = u,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = gi(i);
                  if (null !== h) {
                    (h.flags &= -257),
                      yi(h, i, u, 0, t),
                      1 & h.mode && mi(l, s, t),
                      (c = s);
                    var v = (t = h).updateQueue;
                    if (null === v) {
                      var m = new Set();
                      m.add(c), (t.updateQueue = m);
                    } else v.add(c);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    mi(l, s, t), mc();
                    break e;
                  }
                  c = Error(o(426));
                } else if (ao && 1 & u.mode) {
                  var g = gi(i);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      yi(g, i, u, 0, t),
                      vo(si(c, u));
                    break e;
                  }
                }
                (l = c = si(c, u)),
                  4 !== zu && (zu = 2),
                  null === Au ? (Au = [l]) : Au.push(l),
                  (l = i);
                do {
                  switch (l.tag) {
                    case 3:
                      (l.flags |= 65536),
                        (t &= -t),
                        (l.lanes |= t),
                        Mo(l, hi(0, c, t));
                      break e;
                    case 1:
                      u = c;
                      var y = l.type,
                        b = l.stateNode;
                      if (
                        0 === (128 & l.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Ku || !Ku.has(b))))
                      ) {
                        (l.flags |= 65536),
                          (t &= -t),
                          (l.lanes |= t),
                          Mo(l, vi(l, u, t));
                        break e;
                      }
                  }
                  l = l.return;
                } while (null !== l);
              }
              kc(n);
            } catch (w) {
              (t = w), Ru === n && null !== n && (Ru = n = n.return);
              continue;
            }
            break;
          }
        }
        function vc() {
          var e = Pu.current;
          return (Pu.current = li), null === e ? li : e;
        }
        function mc() {
          (0 !== zu && 3 !== zu && 2 !== zu) || (zu = 4),
            null === Ou ||
              (0 === (268435455 & Mu) && 0 === (268435455 & Du)) ||
              uc(Ou, Tu);
        }
        function gc(e, t) {
          var n = Lu;
          Lu |= 2;
          var r = vc();
          for ((Ou === e && Tu === t) || ((Vu = null), pc(e, t)); ; )
            try {
              yc();
              break;
            } catch (a) {
              hc(e, a);
            }
          if ((xo(), (Lu = n), (Pu.current = r), null !== Ru))
            throw Error(o(261));
          return (Ou = null), (Tu = 0), zu;
        }
        function yc() {
          for (; null !== Ru; ) wc(Ru);
        }
        function bc() {
          for (; null !== Ru && !Ge(); ) wc(Ru);
        }
        function wc(e) {
          var t = Eu(e.alternate, e, Iu);
          (e.memoizedProps = e.pendingProps),
            null === t ? kc(e) : (Ru = t),
            (Nu.current = null);
        }
        function kc(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = qi(n, t, Iu))) return void (Ru = n);
            } else {
              if (null !== (n = Gi(n, t)))
                return (n.flags &= 32767), void (Ru = n);
              if (null === e) return (zu = 6), void (Ru = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ru = t);
            Ru = t = e;
          } while (null !== t);
          0 === zu && (zu = 5);
        }
        function xc(e, t, n) {
          var r = bt,
            a = _u.transition;
          try {
            (_u.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  Sc();
                } while (null !== Gu);
                if (0 !== (6 & Lu)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var l = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - lt(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, l),
                  e === Ou && ((Ru = Ou = null), (Tu = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    qu ||
                    ((qu = !0),
                    Oc(tt, function () {
                      return Sc(), null;
                    })),
                  (l = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || l)
                ) {
                  (l = _u.transition), (_u.transition = null);
                  var i = bt;
                  bt = 1;
                  var u = Lu;
                  (Lu |= 4),
                    (Nu.current = null),
                    (function (e, t) {
                      if (((ea = Vt), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                l = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, l.nodeType;
                              } catch (k) {
                                n = null;
                                break e;
                              }
                              var i = 0,
                                u = -1,
                                c = -1,
                                s = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (u = i + a),
                                    d !== l ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (c = i + r),
                                    3 === d.nodeType &&
                                      (i += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++s === a && (u = i),
                                    p === l && ++f === r && (c = i),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === u || -1 === c
                                  ? null
                                  : { start: u, end: c };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Vt = !1,
                          Zi = t;
                        null !== Zi;

                      )
                        if (
                          ((e = (t = Zi).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zi = e);
                        else
                          for (; null !== Zi; ) {
                            t = Zi;
                            try {
                              var v = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== v) {
                                      var m = v.memoizedProps,
                                        g = v.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? m
                                            : go(t.type, m),
                                          g
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (k) {
                              Cc(t, t.return, k);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zi = e);
                              break;
                            }
                            Zi = t.return;
                          }
                      (v = nu), (nu = !1);
                    })(e, n),
                    gu(n, e),
                    hr(ta),
                    (Vt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    bu(n, e, a),
                    Ye(),
                    (Lu = u),
                    (bt = i),
                    (_u.transition = l);
                } else e.current = n;
                if (
                  (qu && ((qu = !1), (Gu = e), (Yu = a)),
                  (l = e.pendingLanes),
                  0 === l && (Ku = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ac(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Wu) throw ((Wu = !1), (e = Qu), (Qu = null), e);
                0 !== (1 & Yu) && 0 !== e.tag && Sc(),
                  (l = e.pendingLanes),
                  0 !== (1 & l)
                    ? e === Ju
                      ? Xu++
                      : ((Xu = 0), (Ju = e))
                    : (Xu = 0),
                  $a();
              })(e, t, n, r);
          } finally {
            (_u.transition = a), (bt = r);
          }
          return null;
        }
        function Sc() {
          if (null !== Gu) {
            var e = wt(Yu),
              t = _u.transition,
              n = bt;
            try {
              if (((_u.transition = null), (bt = 16 > e ? 16 : e), null === Gu))
                var r = !1;
              else {
                if (((e = Gu), (Gu = null), (Yu = 0), 0 !== (6 & Lu)))
                  throw Error(o(331));
                var a = Lu;
                for (Lu |= 4, Zi = e.current; null !== Zi; ) {
                  var l = Zi,
                    i = l.child;
                  if (0 !== (16 & Zi.flags)) {
                    var u = l.deletions;
                    if (null !== u) {
                      for (var c = 0; c < u.length; c++) {
                        var s = u[c];
                        for (Zi = s; null !== Zi; ) {
                          var f = Zi;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(8, f, l);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Zi = d);
                          else
                            for (; null !== Zi; ) {
                              var p = (f = Zi).sibling,
                                h = f.return;
                              if ((lu(f), f === s)) {
                                Zi = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Zi = p);
                                break;
                              }
                              Zi = h;
                            }
                        }
                      }
                      var v = l.alternate;
                      if (null !== v) {
                        var m = v.child;
                        if (null !== m) {
                          v.child = null;
                          do {
                            var g = m.sibling;
                            (m.sibling = null), (m = g);
                          } while (null !== m);
                        }
                      }
                      Zi = l;
                    }
                  }
                  if (0 !== (2064 & l.subtreeFlags) && null !== i)
                    (i.return = l), (Zi = i);
                  else
                    e: for (; null !== Zi; ) {
                      if (0 !== (2048 & (l = Zi).flags))
                        switch (l.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ru(9, l, l.return);
                        }
                      var y = l.sibling;
                      if (null !== y) {
                        (y.return = l.return), (Zi = y);
                        break e;
                      }
                      Zi = l.return;
                    }
                }
                var b = e.current;
                for (Zi = b; null !== Zi; ) {
                  var w = (i = Zi).child;
                  if (0 !== (2064 & i.subtreeFlags) && null !== w)
                    (w.return = i), (Zi = w);
                  else
                    e: for (i = b; null !== Zi; ) {
                      if (0 !== (2048 & (u = Zi).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              au(9, u);
                          }
                        } catch (x) {
                          Cc(u, u.return, x);
                        }
                      if (u === i) {
                        Zi = null;
                        break e;
                      }
                      var k = u.sibling;
                      if (null !== k) {
                        (k.return = u.return), (Zi = k);
                        break e;
                      }
                      Zi = u.return;
                    }
                }
                if (
                  ((Lu = a),
                  $a(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (x) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (_u.transition = t);
            }
          }
          return !1;
        }
        function Ec(e, t, n) {
          (e = zo(e, (t = hi(0, (t = si(n, t)), 1)), 1)),
            (t = tc()),
            null !== e && (gt(e, 1, t), ac(e, t));
        }
        function Cc(e, t, n) {
          if (3 === e.tag) Ec(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Ec(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Ku || !Ku.has(r)))
                ) {
                  (t = zo(t, (e = vi(t, (e = si(n, e)), 1)), 1)),
                    (e = tc()),
                    null !== t && (gt(t, 1, e), ac(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Pc(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = tc()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ou === e &&
              (Tu & n) === n &&
              (4 === zu ||
              (3 === zu && (130023424 & Tu) === Tu && 500 > Xe() - $u)
                ? pc(e, 0)
                : (Uu |= n)),
            ac(e, t);
        }
        function Nc(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = st), 0 === (130023424 & (st <<= 1)) && (st = 4194304)));
          var n = tc();
          null !== (e = Oo(e, t)) && (gt(e, t, n), ac(e, n));
        }
        function _c(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Nc(e, n);
        }
        function Lc(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), Nc(e, n);
        }
        function Oc(e, t) {
          return Ke(e, t);
        }
        function Rc(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Tc(e, t, n, r) {
          return new Rc(e, t, n, r);
        }
        function Ic(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function jc(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Tc(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function zc(e, t, n, r, a, l) {
          var i = 2;
          if (((r = e), "function" === typeof e)) Ic(e) && (i = 1);
          else if ("string" === typeof e) i = 5;
          else
            e: switch (e) {
              case S:
                return Fc(n.children, a, l, t);
              case E:
                (i = 8), (a |= 8);
                break;
              case C:
                return (
                  ((e = Tc(12, n, t, 2 | a)).elementType = C), (e.lanes = l), e
                );
              case L:
                return (
                  ((e = Tc(13, n, t, a)).elementType = L), (e.lanes = l), e
                );
              case O:
                return (
                  ((e = Tc(19, n, t, a)).elementType = O), (e.lanes = l), e
                );
              case I:
                return Mc(n, a, l, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case P:
                      i = 10;
                      break e;
                    case N:
                      i = 9;
                      break e;
                    case _:
                      i = 11;
                      break e;
                    case R:
                      i = 14;
                      break e;
                    case T:
                      (i = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Tc(i, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = l),
            t
          );
        }
        function Fc(e, t, n, r) {
          return ((e = Tc(7, e, r, t)).lanes = n), e;
        }
        function Mc(e, t, n, r) {
          return (
            ((e = Tc(22, e, r, t)).elementType = I),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Dc(e, t, n) {
          return ((e = Tc(6, e, null, t)).lanes = n), e;
        }
        function Uc(e, t, n) {
          return (
            ((t = Tc(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Ac(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = mt(0)),
            (this.expirationTimes = mt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = mt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Bc(e, t, n, r, a, o, l, i, u) {
          return (
            (e = new Ac(e, t, n, i, u)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Tc(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            To(o),
            e
          );
        }
        function $c(e) {
          if (!e) return Na;
          e: {
            if ($e((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ta(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ta(n)) return za(e, n, t);
          }
          return t;
        }
        function Hc(e, t, n, r, a, o, l, i, u) {
          return (
            ((e = Bc(n, r, !0, e, 0, o, 0, i, u)).context = $c(null)),
            (n = e.current),
            ((o = jo((r = tc()), (a = nc(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            zo(n, o, a),
            (e.current.lanes = a),
            gt(e, a, r),
            ac(e, r),
            e
          );
        }
        function Vc(e, t, n, r) {
          var a = t.current,
            o = tc(),
            l = nc(a);
          return (
            (n = $c(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = jo(o, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = zo(a, t, l)) && (rc(e, a, l, o), Fo(e, a, l)),
            l
          );
        }
        function Wc(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Qc(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Kc(e, t) {
          Qc(e, t), (e = e.alternate) && Qc(e, t);
        }
        Eu = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || La.current) wi = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wi = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Oi(t), ho();
                        break;
                      case 5:
                        ll(t);
                        break;
                      case 1:
                        Ta(t.type) && Fa(t);
                        break;
                      case 4:
                        al(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Pa(yo, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Pa(ul, 1 & ul.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Di(e, t, n)
                            : (Pa(ul, 1 & ul.current),
                              null !== (e = Wi(e, t, n)) ? e.sibling : null);
                        Pa(ul, 1 & ul.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Hi(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Pa(ul, ul.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Ci(e, t, n);
                    }
                    return Wi(e, t, n);
                  })(e, t, n)
                );
              wi = 0 !== (131072 & e.flags);
            }
          else (wi = !1), ao && 0 !== (1048576 & t.flags) && Za(t, Qa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Vi(e, t), (e = t.pendingProps);
              var a = Ra(t, _a.current);
              Co(t, n), (a = El(null, t, r, e, a, n));
              var l = Cl();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ta(r) ? ((l = !0), Fa(t)) : (l = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    To(t),
                    (a.updater = $o),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Qo(t, r, e, n),
                    (t = Li(null, t, r, !0, l, n)))
                  : ((t.tag = 0),
                    ao && l && eo(t),
                    ki(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Vi(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Ic(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === _) return 11;
                        if (e === R) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = go(r, e)),
                  a)
                ) {
                  case 0:
                    t = Ni(null, t, r, e, n);
                    break e;
                  case 1:
                    t = _i(null, t, r, e, n);
                    break e;
                  case 11:
                    t = xi(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Si(null, t, r, go(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ni(e, t, r, (a = t.elementType === r ? a : go(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                _i(e, t, r, (a = t.elementType === r ? a : go(r, a)), n)
              );
            case 3:
              e: {
                if ((Oi(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (l = t.memoizedState).element),
                  Io(e, t),
                  Do(t, r, null, n);
                var i = t.memoizedState;
                if (((r = i.element), l.isDehydrated)) {
                  if (
                    ((l = {
                      element: r,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions,
                    }),
                    (t.updateQueue.baseState = l),
                    (t.memoizedState = l),
                    256 & t.flags)
                  ) {
                    t = Ri(e, t, r, n, (a = si(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Ri(e, t, r, n, (a = si(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = ca(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = Jo(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ho(), r === a)) {
                    t = Wi(e, t, n);
                    break e;
                  }
                  ki(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ll(t),
                null === e && co(t),
                (r = t.type),
                (a = t.pendingProps),
                (l = null !== e ? e.memoizedProps : null),
                (i = a.children),
                na(r, a)
                  ? (i = null)
                  : null !== l && na(r, l) && (t.flags |= 32),
                Pi(e, t),
                ki(e, t, i, n),
                t.child
              );
            case 6:
              return null === e && co(t), null;
            case 13:
              return Di(e, t, n);
            case 4:
              return (
                al(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Xo(t, null, r, n)) : ki(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                xi(e, t, r, (a = t.elementType === r ? a : go(r, a)), n)
              );
            case 7:
              return ki(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return ki(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (l = t.memoizedProps),
                  (i = a.value),
                  Pa(yo, r._currentValue),
                  (r._currentValue = i),
                  null !== l)
                )
                  if (ir(l.value, i)) {
                    if (l.children === a.children && !La.current) {
                      t = Wi(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (l = t.child) && (l.return = t);
                      null !== l;

                    ) {
                      var u = l.dependencies;
                      if (null !== u) {
                        i = l.child;
                        for (var c = u.firstContext; null !== c; ) {
                          if (c.context === r) {
                            if (1 === l.tag) {
                              (c = jo(-1, n & -n)).tag = 2;
                              var s = l.updateQueue;
                              if (null !== s) {
                                var f = (s = s.shared).pending;
                                null === f
                                  ? (c.next = c)
                                  : ((c.next = f.next), (f.next = c)),
                                  (s.pending = c);
                              }
                            }
                            (l.lanes |= n),
                              null !== (c = l.alternate) && (c.lanes |= n),
                              Eo(l.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else if (10 === l.tag)
                        i = l.type === t.type ? null : l.child;
                      else if (18 === l.tag) {
                        if (null === (i = l.return)) throw Error(o(341));
                        (i.lanes |= n),
                          null !== (u = i.alternate) && (u.lanes |= n),
                          Eo(i, n, t),
                          (i = l.sibling);
                      } else i = l.child;
                      if (null !== i) i.return = l;
                      else
                        for (i = l; null !== i; ) {
                          if (i === t) {
                            i = null;
                            break;
                          }
                          if (null !== (l = i.sibling)) {
                            (l.return = i.return), (i = l);
                            break;
                          }
                          i = i.return;
                        }
                      l = i;
                    }
                ki(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Co(t, n),
                (r = r((a = Po(a)))),
                (t.flags |= 1),
                ki(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = go((r = t.type), t.pendingProps)),
                Si(e, t, r, (a = go(r.type, a)), n)
              );
            case 15:
              return Ei(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : go(r, a)),
                Vi(e, t),
                (t.tag = 1),
                Ta(r) ? ((e = !0), Fa(t)) : (e = !1),
                Co(t, n),
                Vo(t, r, a),
                Qo(t, r, a, n),
                Li(null, t, r, !0, e, n)
              );
            case 19:
              return Hi(e, t, n);
            case 22:
              return Ci(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var qc =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Gc(e) {
          this._internalRoot = e;
        }
        function Yc(e) {
          this._internalRoot = e;
        }
        function Xc(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Jc(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zc() {}
        function es(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var l = o;
            if ("function" === typeof a) {
              var i = a;
              a = function () {
                var e = Wc(l);
                i.call(e);
              };
            }
            Vc(t, l, e, a);
          } else
            l = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = Wc(l);
                    o.call(e);
                  };
                }
                var l = Hc(t, r, e, 0, null, !1, 0, "", Zc);
                return (
                  (e._reactRootContainer = l),
                  (e[ha] = l.current),
                  $r(8 === e.nodeType ? e.parentNode : e),
                  fc(),
                  l
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var i = r;
                r = function () {
                  var e = Wc(u);
                  i.call(e);
                };
              }
              var u = Bc(e, 0, !1, null, 0, !1, 0, "", Zc);
              return (
                (e._reactRootContainer = u),
                (e[ha] = u.current),
                $r(8 === e.nodeType ? e.parentNode : e),
                fc(function () {
                  Vc(t, u, n, r);
                }),
                u
              );
            })(n, t, e, a, r);
          return Wc(l);
        }
        (Yc.prototype.render = Gc.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Vc(e, t, null, null);
          }),
          (Yc.prototype.unmount = Gc.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                fc(function () {
                  Vc(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Yc.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < It.length && 0 !== t && t < It[n].priority;
                n++
              );
              It.splice(n, 0, e), 0 === n && Mt(e);
            }
          }),
          (kt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    ac(t, Xe()),
                    0 === (6 & Lu) && ((Hu = Xe() + 500), $a()));
                }
                break;
              case 13:
                fc(function () {
                  var t = Oo(e, 1);
                  if (null !== t) {
                    var n = tc();
                    rc(t, e, 1, n);
                  }
                }),
                  Kc(e, 1);
            }
          }),
          (xt = function (e) {
            if (13 === e.tag) {
              var t = Oo(e, 134217728);
              if (null !== t) rc(t, e, 134217728, tc());
              Kc(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = nc(e),
                n = Oo(e, t);
              if (null !== n) rc(n, e, t, tc());
              Kc(e, t);
            }
          }),
          (Et = function () {
            return bt;
          }),
          (Ct = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (xe = function (e, t, n) {
            switch (t) {
              case "input":
                if ((J(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = ka(r);
                      if (!a) throw Error(o(90));
                      K(r), J(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (_e = sc),
          (Le = fc);
        var ts = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, ka, Pe, Ne, sc],
          },
          ns = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rs = {
            bundleType: ns.bundleType,
            version: ns.version,
            rendererPackageName: ns.rendererPackageName,
            rendererConfig: ns.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              ns.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var as = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!as.isDisabled && as.supportsFiber)
            try {
              (at = as.inject(rs)), (ot = as);
            } catch (se) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ts),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Xc(t)) throw Error(o(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: x,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Xc(e)) throw Error(o(299));
            var n = !1,
              r = "",
              a = qc;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Bc(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              $r(8 === e.nodeType ? e.parentNode : e),
              new Gc(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = We(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return fc(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Jc(t)) throw Error(o(200));
            return es(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Xc(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              l = "",
              i = qc;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (l = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
              (t = Hc(t, null, e, 1, null != n ? n : null, a, 0, l, i)),
              (e[ha] = t.current),
              $r(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Yc(t);
          }),
          (t.render = function (e, t, n) {
            if (!Jc(t)) throw Error(o(200));
            return es(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Jc(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (fc(function () {
                es(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = sc),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Jc(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return es(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        var r = n(791),
          a = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          l = Object.prototype.hasOwnProperty,
          i =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function c(e, t, n) {
          var r,
            o = {},
            c = null,
            s = null;
          for (r in (void 0 !== n && (c = "" + n),
          void 0 !== t.key && (c = "" + t.key),
          void 0 !== t.ref && (s = t.ref),
          t))
            l.call(t, r) && !u.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: c,
            ref: s,
            props: o,
            _owner: i.current,
          };
        }
        (t.Fragment = o), (t.jsx = c), (t.jsxs = c);
      },
      117: function (e, t) {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          l = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          s = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = Object.assign,
          m = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = g.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), v(w, g.prototype), (w.isPureReactComponent = !0);
        var k = Array.isArray,
          x = Object.prototype.hasOwnProperty,
          S = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var a,
            o = {},
            l = null,
            i = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (l = "" + t.key),
            t))
              x.call(t, a) && !E.hasOwnProperty(a) && (o[a] = t[a]);
          var u = arguments.length - 2;
          if (1 === u) o.children = r;
          else if (1 < u) {
            for (var c = Array(u), s = 0; s < u; s++) c[s] = arguments[s + 2];
            o.children = c;
          }
          if (e && e.defaultProps)
            for (a in (u = e.defaultProps)) void 0 === o[a] && (o[a] = u[a]);
          return {
            $$typeof: n,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: S.current,
          };
        }
        function P(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var N = /\/+/g;
        function _(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function L(e, t, a, o, l) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (i) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (l = l((u = e))),
              (e = "" === o ? "." + _(u, 0) : o),
              k(l)
                ? ((a = ""),
                  null != e && (a = e.replace(N, "$&/") + "/"),
                  L(l, t, a, "", function (e) {
                    return e;
                  }))
                : null != l &&
                  (P(l) &&
                    (l = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      l,
                      a +
                        (!l.key || (u && u.key === l.key)
                          ? ""
                          : ("" + l.key).replace(N, "$&/") + "/") +
                        e
                    )),
                  t.push(l)),
              1
            );
          if (((u = 0), (o = "" === o ? "." : o + ":"), k(e)))
            for (var c = 0; c < e.length; c++) {
              var s = o + _((i = e[c]), c);
              u += L(i, t, a, s, l);
            }
          else if (
            ((s = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof s)
          )
            for (e = s.call(e), c = 0; !(i = e.next()).done; )
              u += L((i = i.value), t, a, (s = o + _(i, c++)), l);
          else if ("object" === i)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return u;
        }
        function O(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            L(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function R(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var T = { current: null },
          I = { transition: null },
          j = {
            ReactCurrentDispatcher: T,
            ReactCurrentBatchConfig: I,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: O,
          forEach: function (e, t, n) {
            O(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              O(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              O(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!P(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = a),
          (t.Profiler = l),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = s),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = v({}, e.props),
              o = e.key,
              l = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (i = S.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (c in t)
                x.call(t, c) &&
                  !E.hasOwnProperty(c) &&
                  (a[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) a.children = r;
            else if (1 < c) {
              u = Array(c);
              for (var s = 0; s < c; s++) u[s] = arguments[s + 2];
              a.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: l,
              props: a,
              _owner: i,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = P),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: R,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = I.transition;
            I.transition = {};
            try {
              e();
            } finally {
              I.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return T.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return T.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return T.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return T.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return T.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return T.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return T.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return T.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return T.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return T.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return T.current.useRef(e);
          }),
          (t.useState = function (e) {
            return T.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return T.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return T.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        e.exports = n(117);
      },
      184: function (e, t, n) {
        e.exports = n(374);
      },
      813: function (e, t) {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, l = a >>> 1; r < l; ) {
              var i = 2 * (r + 1) - 1,
                u = e[i],
                c = i + 1,
                s = e[c];
              if (0 > o(u, n))
                c < a && 0 > o(s, u)
                  ? ((e[r] = s), (e[c] = n), (r = c))
                  : ((e[r] = u), (e[i] = n), (r = i));
              else {
                if (!(c < a && 0 > o(s, n))) break e;
                (e[r] = s), (e[c] = n), (r = c);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var l = performance;
          t.unstable_now = function () {
            return l.now();
          };
        } else {
          var i = Date,
            u = i.now();
          t.unstable_now = function () {
            return i.now() - u;
          };
        }
        var c = [],
          s = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          v = !1,
          m = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(s); null !== t; ) {
            if (null === t.callback) a(s);
            else {
              if (!(t.startTime <= e)) break;
              a(s), (t.sortIndex = t.expirationTime), n(c, t);
            }
            t = r(s);
          }
        }
        function k(e) {
          if (((m = !1), w(e), !v))
            if (null !== r(c)) (v = !0), I(x);
            else {
              var t = r(s);
              null !== t && j(k, t.startTime - e);
            }
        }
        function x(e, n) {
          (v = !1), m && ((m = !1), y(P), (P = -1)), (h = !0);
          var o = p;
          try {
            for (
              w(n), d = r(c);
              null !== d && (!(d.expirationTime > n) || (e && !L()));

            ) {
              var l = d.callback;
              if ("function" === typeof l) {
                (d.callback = null), (p = d.priorityLevel);
                var i = l(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof i
                    ? (d.callback = i)
                    : d === r(c) && a(c),
                  w(n);
              } else a(c);
              d = r(c);
            }
            if (null !== d) var u = !0;
            else {
              var f = r(s);
              null !== f && j(k, f.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = o), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          E = !1,
          C = null,
          P = -1,
          N = 5,
          _ = -1;
        function L() {
          return !(t.unstable_now() - _ < N);
        }
        function O() {
          if (null !== C) {
            var e = t.unstable_now();
            _ = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? S() : ((E = !1), (C = null));
            }
          } else E = !1;
        }
        if ("function" === typeof b)
          S = function () {
            b(O);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var R = new MessageChannel(),
            T = R.port2;
          (R.port1.onmessage = O),
            (S = function () {
              T.postMessage(null);
            });
        } else
          S = function () {
            g(O, 0);
          };
        function I(e) {
          (C = e), E || ((E = !0), S());
        }
        function j(e, n) {
          P = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            v || h || ((v = !0), I(x));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (N = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(c);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var l = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? l + o : l)
                : (o = l),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (i = o + i),
                sortIndex: -1,
              }),
              o > l
                ? ((e.sortIndex = o),
                  n(s, e),
                  null === r(c) &&
                    e === r(s) &&
                    (m ? (y(P), (P = -1)) : (m = !0), j(k, o - l)))
                : ((e.sortIndex = i), n(c, e), v || h || ((v = !0), I(x))),
              e
            );
          }),
          (t.unstable_shouldYield = L),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  !(function () {
    var e = n(250);
    function t(e) {
      return (
        (t =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        t(e)
      );
    }
    function r() {
      r = function () {
        return e;
      };
      var e = {},
        n = Object.prototype,
        a = n.hasOwnProperty,
        o =
          Object.defineProperty ||
          function (e, t, n) {
            e[t] = n.value;
          },
        l = "function" == typeof Symbol ? Symbol : {},
        i = l.iterator || "@@iterator",
        u = l.asyncIterator || "@@asyncIterator",
        c = l.toStringTag || "@@toStringTag";
      function s(e, t, n) {
        return (
          Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          e[t]
        );
      }
      try {
        s({}, "");
      } catch (O) {
        s = function (e, t, n) {
          return (e[t] = n);
        };
      }
      function f(e, t, n, r) {
        var a = t && t.prototype instanceof h ? t : h,
          l = Object.create(a.prototype),
          i = new N(r || []);
        return o(l, "_invoke", { value: S(e, n, i) }), l;
      }
      function d(e, t, n) {
        try {
          return { type: "normal", arg: e.call(t, n) };
        } catch (O) {
          return { type: "throw", arg: O };
        }
      }
      e.wrap = f;
      var p = {};
      function h() {}
      function v() {}
      function m() {}
      var g = {};
      s(g, i, function () {
        return this;
      });
      var y = Object.getPrototypeOf,
        b = y && y(y(_([])));
      b && b !== n && a.call(b, i) && (g = b);
      var w = (m.prototype = h.prototype = Object.create(g));
      function k(e) {
        ["next", "throw", "return"].forEach(function (t) {
          s(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function x(e, n) {
        function r(o, l, i, u) {
          var c = d(e[o], e, l);
          if ("throw" !== c.type) {
            var s = c.arg,
              f = s.value;
            return f && "object" == t(f) && a.call(f, "__await")
              ? n.resolve(f.__await).then(
                  function (e) {
                    r("next", e, i, u);
                  },
                  function (e) {
                    r("throw", e, i, u);
                  }
                )
              : n.resolve(f).then(
                  function (e) {
                    (s.value = e), i(s);
                  },
                  function (e) {
                    return r("throw", e, i, u);
                  }
                );
          }
          u(c.arg);
        }
        var l;
        o(this, "_invoke", {
          value: function (e, t) {
            function a() {
              return new n(function (n, a) {
                r(e, t, n, a);
              });
            }
            return (l = l ? l.then(a, a) : a());
          },
        });
      }
      function S(e, t, n) {
        var r = "suspendedStart";
        return function (a, o) {
          if ("executing" === r)
            throw new Error("Generator is already running");
          if ("completed" === r) {
            if ("throw" === a) throw o;
            return L();
          }
          for (n.method = a, n.arg = o; ; ) {
            var l = n.delegate;
            if (l) {
              var i = E(l, n);
              if (i) {
                if (i === p) continue;
                return i;
              }
            }
            if ("next" === n.method) n.sent = n._sent = n.arg;
            else if ("throw" === n.method) {
              if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
              n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);
            r = "executing";
            var u = d(e, t, n);
            if ("normal" === u.type) {
              if (((r = n.done ? "completed" : "suspendedYield"), u.arg === p))
                continue;
              return { value: u.arg, done: n.done };
            }
            "throw" === u.type &&
              ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
          }
        };
      }
      function E(e, t) {
        var n = t.method,
          r = e.iterator[n];
        if (void 0 === r)
          return (
            (t.delegate = null),
            ("throw" === n &&
              e.iterator.return &&
              ((t.method = "return"),
              (t.arg = void 0),
              E(e, t),
              "throw" === t.method)) ||
              ("return" !== n &&
                ((t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a '" + n + "' method"
                )))),
            p
          );
        var a = d(r, e.iterator, t.arg);
        if ("throw" === a.type)
          return (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), p;
        var o = a.arg;
        return o
          ? o.done
            ? ((t[e.resultName] = o.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = void 0)),
              (t.delegate = null),
              p)
            : o
          : ((t.method = "throw"),
            (t.arg = new TypeError("iterator result is not an object")),
            (t.delegate = null),
            p);
      }
      function C(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function P(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function N(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(C, this),
          this.reset(!0);
      }
      function _(e) {
        if (e) {
          var t = e[i];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var n = -1,
              r = function t() {
                for (; ++n < e.length; )
                  if (a.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                return (t.value = void 0), (t.done = !0), t;
              };
            return (r.next = r);
          }
        }
        return { next: L };
      }
      function L() {
        return { value: void 0, done: !0 };
      }
      return (
        (v.prototype = m),
        o(w, "constructor", { value: m, configurable: !0 }),
        o(m, "constructor", { value: v, configurable: !0 }),
        (v.displayName = s(m, c, "GeneratorFunction")),
        (e.isGeneratorFunction = function (e) {
          var t = "function" == typeof e && e.constructor;
          return (
            !!t &&
            (t === v || "GeneratorFunction" === (t.displayName || t.name))
          );
        }),
        (e.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, m)
              : ((e.__proto__ = m), s(e, c, "GeneratorFunction")),
            (e.prototype = Object.create(w)),
            e
          );
        }),
        (e.awrap = function (e) {
          return { __await: e };
        }),
        k(x.prototype),
        s(x.prototype, u, function () {
          return this;
        }),
        (e.AsyncIterator = x),
        (e.async = function (t, n, r, a, o) {
          void 0 === o && (o = Promise);
          var l = new x(f(t, n, r, a), o);
          return e.isGeneratorFunction(n)
            ? l
            : l.next().then(function (e) {
                return e.done ? e.value : l.next();
              });
        }),
        k(w),
        s(w, c, "Generator"),
        s(w, i, function () {
          return this;
        }),
        s(w, "toString", function () {
          return "[object Generator]";
        }),
        (e.keys = function (e) {
          var t = Object(e),
            n = [];
          for (var r in t) n.push(r);
          return (
            n.reverse(),
            function e() {
              for (; n.length; ) {
                var r = n.pop();
                if (r in t) return (e.value = r), (e.done = !1), e;
              }
              return (e.done = !0), e;
            }
          );
        }),
        (e.values = _),
        (N.prototype = {
          constructor: N,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(P),
              !e)
            )
              for (var t in this)
                "t" === t.charAt(0) &&
                  a.call(this, t) &&
                  !isNaN(+t.slice(1)) &&
                  (this[t] = void 0);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var t = this;
            function n(n, r) {
              return (
                (l.type = "throw"),
                (l.arg = e),
                (t.next = n),
                r && ((t.method = "next"), (t.arg = void 0)),
                !!r
              );
            }
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var o = this.tryEntries[r],
                l = o.completion;
              if ("root" === o.tryLoc) return n("end");
              if (o.tryLoc <= this.prev) {
                var i = a.call(o, "catchLoc"),
                  u = a.call(o, "finallyLoc");
                if (i && u) {
                  if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                } else if (i) {
                  if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                } else {
                  if (!u)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var r = this.tryEntries[n];
              if (
                r.tryLoc <= this.prev &&
                a.call(r, "finallyLoc") &&
                this.prev < r.finallyLoc
              ) {
                var o = r;
                break;
              }
            }
            o &&
              ("break" === e || "continue" === e) &&
              o.tryLoc <= t &&
              t <= o.finallyLoc &&
              (o = null);
            var l = o ? o.completion : {};
            return (
              (l.type = e),
              (l.arg = t),
              o
                ? ((this.method = "next"), (this.next = o.finallyLoc), p)
                : this.complete(l)
            );
          },
          complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              p
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.finallyLoc === e)
                return this.complete(n.completion, n.afterLoc), P(n), p;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.tryLoc === e) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var a = r.arg;
                  P(n);
                }
                return a;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, t, n) {
            return (
              (this.delegate = { iterator: _(e), resultName: t, nextLoc: n }),
              "next" === this.method && (this.arg = void 0),
              p
            );
          },
        }),
        e
      );
    }
    function a(e, t, n, r, a, o, l) {
      try {
        var i = e[o](l),
          u = i.value;
      } catch (c) {
        return void n(c);
      }
      i.done ? t(u) : Promise.resolve(u).then(r, a);
    }
    function o(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (r, o) {
          var l = e.apply(t, n);
          function i(e) {
            a(l, r, o, i, u, "next", e);
          }
          function u(e) {
            a(l, r, o, i, u, "throw", e);
          }
          i(void 0);
        });
      };
    }
    function l(e) {
      if (Array.isArray(e)) return e;
    }
    function i(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function u(e, t) {
      if (e) {
        if ("string" === typeof e) return i(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === n && e.constructor && (n = e.constructor.name),
          "Map" === n || "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? i(e, t)
            : void 0
        );
      }
    }
    function c() {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    function s(e, t) {
      return (
        l(e) ||
        (function (e, t) {
          var n =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != n) {
            var r,
              a,
              o,
              l,
              i = [],
              u = !0,
              c = !1;
            try {
              if (((o = (n = n.call(e)).next), 0 === t)) {
                if (Object(n) !== n) return;
                u = !1;
              } else
                for (
                  ;
                  !(u = (r = o.call(n)).done) &&
                  (i.push(r.value), i.length !== t);
                  u = !0
                );
            } catch (s) {
              (c = !0), (a = s);
            } finally {
              try {
                if (
                  !u &&
                  null != n.return &&
                  ((l = n.return()), Object(l) !== l)
                )
                  return;
              } finally {
                if (c) throw a;
              }
            }
            return i;
          }
        })(e, t) ||
        u(e, t) ||
        c()
      );
    }
    var f,
      d = n(791),
      p = n(184),
      h = (0, d.createContext)({}),
      v = function (e) {
        var t = e.children,
          n = s((0, d.useState)(null), 2),
          a = n[0],
          l = n[1],
          i = s((0, d.useState)(!0), 2),
          u = i[0],
          c =
            (i[1],
            (function () {
              var e = o(
                r().mark(function e(t) {
                  return r().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          l({ name: "B\xe1rbara", email: "teste@teste.com" });
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })());
        return (0, p.jsx)(h.Provider, {
          value: {
            signed: !!a,
            user: a,
            signIn: c,
            signOut: function () {
              l(null);
            },
            loading: u,
          },
          children: t,
        });
      };
    function m(e) {
      if (
        ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
        null != e["@@iterator"]
      )
        return Array.from(e);
    }
    function g(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return i(e);
        })(e) ||
        m(e) ||
        u(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function y(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function b(e) {
      var n = (function (e, n) {
        if ("object" !== t(e) || null === e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var a = r.call(e, n || "default");
          if ("object" !== t(a)) return a;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === n ? String : Number)(e);
      })(e, "string");
      return "symbol" === t(n) ? n : String(n);
    }
    function w(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, b(r.key), r);
      }
    }
    function k(e, t, n) {
      return (
        t && w(e.prototype, t),
        n && w(e, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    function x(e, t) {
      return (
        (x = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        x(e, t)
      );
    }
    function S(e, t) {
      if ("function" !== typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && x(e, t);
    }
    function E(e) {
      return (
        (E = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        E(e)
      );
    }
    function C() {
      if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" === typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (vt) {
        return !1;
      }
    }
    function P(e, n) {
      if (n && ("object" === t(n) || "function" === typeof n)) return n;
      if (void 0 !== n)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return (function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      })(e);
    }
    function N(e) {
      var t = C();
      return function () {
        var n,
          r = E(e);
        if (t) {
          var a = E(this).constructor;
          n = Reflect.construct(r, arguments, a);
        } else n = r.apply(this, arguments);
        return P(this, n);
      };
    }
    function _(e, t, n) {
      return (
        (_ = C()
          ? Reflect.construct.bind()
          : function (e, t, n) {
              var r = [null];
              r.push.apply(r, t);
              var a = new (Function.bind.apply(e, r))();
              return n && x(a, n.prototype), a;
            }),
        _.apply(null, arguments)
      );
    }
    function L(e) {
      var t = "function" === typeof Map ? new Map() : void 0;
      return (
        (L = function (e) {
          if (
            null === e ||
            ((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))
          )
            return e;
          var n;
          if ("function" !== typeof e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if ("undefined" !== typeof t) {
            if (t.has(e)) return t.get(e);
            t.set(e, r);
          }
          function r() {
            return _(e, arguments, E(this).constructor);
          }
          return (
            (r.prototype = Object.create(e.prototype, {
              constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            x(r, e)
          );
        }),
        L(e)
      );
    }
    function O(e, t) {
      var n =
        ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
        e["@@iterator"];
      if (!n) {
        if (
          Array.isArray(e) ||
          (n = u(e)) ||
          (t && e && "number" === typeof e.length)
        ) {
          n && (e = n);
          var r = 0,
            a = function () {};
          return {
            s: a,
            n: function () {
              return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
            },
            e: function (e) {
              throw e;
            },
            f: a,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var o,
        l = !0,
        i = !1;
      return {
        s: function () {
          n = n.call(e);
        },
        n: function () {
          var e = n.next();
          return (l = e.done), e;
        },
        e: function (e) {
          (i = !0), (o = e);
        },
        f: function () {
          try {
            l || null == n.return || n.return();
          } finally {
            if (i) throw o;
          }
        },
      };
    }
    function R() {
      return (
        (R = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        R.apply(this, arguments)
      );
    }
    !(function (e) {
      (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
    })(f || (f = {}));
    var T,
      I = "popstate";
    function j(e, t) {
      if (!1 === e || null === e || "undefined" === typeof e)
        throw new Error(t);
    }
    function z(e, t) {
      if (!e) {
        "undefined" !== typeof console && console.warn(t);
        try {
          throw new Error(t);
        } catch (vt) {}
      }
    }
    function F(e, t) {
      return { usr: e.state, key: e.key, idx: t };
    }
    function M(e, t, n, r) {
      return (
        void 0 === n && (n = null),
        R(
          {
            pathname: "string" === typeof e ? e : e.pathname,
            search: "",
            hash: "",
          },
          "string" === typeof t ? U(t) : t,
          {
            state: n,
            key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
          }
        )
      );
    }
    function D(e) {
      var t = e.pathname,
        n = void 0 === t ? "/" : t,
        r = e.search,
        a = void 0 === r ? "" : r,
        o = e.hash,
        l = void 0 === o ? "" : o;
      return (
        a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
        l && "#" !== l && (n += "#" === l.charAt(0) ? l : "#" + l),
        n
      );
    }
    function U(e) {
      var t = {};
      if (e) {
        var n = e.indexOf("#");
        n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
        var r = e.indexOf("?");
        r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
          e && (t.pathname = e);
      }
      return t;
    }
    function A(e, t, n, r) {
      void 0 === r && (r = {});
      var a = r,
        o = a.window,
        l = void 0 === o ? document.defaultView : o,
        i = a.v5Compat,
        u = void 0 !== i && i,
        c = l.history,
        s = f.Pop,
        d = null,
        p = h();
      function h() {
        return (c.state || { idx: null }).idx;
      }
      function v() {
        s = f.Pop;
        var e = h(),
          t = null == e ? null : e - p;
        (p = e), d && d({ action: s, location: g.location, delta: t });
      }
      function m(e) {
        var t =
            "null" !== l.location.origin ? l.location.origin : l.location.href,
          n = "string" === typeof e ? e : D(e);
        return (
          j(
            t,
            "No window.location.(origin|href) available to create URL for href: " +
              n
          ),
          new URL(n, t)
        );
      }
      null == p && ((p = 0), c.replaceState(R({}, c.state, { idx: p }), ""));
      var g = {
        get action() {
          return s;
        },
        get location() {
          return e(l, c);
        },
        listen: function (e) {
          if (d) throw new Error("A history only accepts one active listener");
          return (
            l.addEventListener(I, v),
            (d = e),
            function () {
              l.removeEventListener(I, v), (d = null);
            }
          );
        },
        createHref: function (e) {
          return t(l, e);
        },
        createURL: m,
        encodeLocation: function (e) {
          var t = m(e);
          return { pathname: t.pathname, search: t.search, hash: t.hash };
        },
        push: function (e, t) {
          s = f.Push;
          var r = M(g.location, e, t);
          n && n(r, e);
          var a = F(r, (p = h() + 1)),
            o = g.createHref(r);
          try {
            c.pushState(a, "", o);
          } catch (i) {
            l.location.assign(o);
          }
          u && d && d({ action: s, location: g.location, delta: 1 });
        },
        replace: function (e, t) {
          s = f.Replace;
          var r = M(g.location, e, t);
          n && n(r, e);
          var a = F(r, (p = h())),
            o = g.createHref(r);
          c.replaceState(a, "", o),
            u && d && d({ action: s, location: g.location, delta: 0 });
        },
        go: function (e) {
          return c.go(e);
        },
      };
      return g;
    }
    !(function (e) {
      (e.data = "data"),
        (e.deferred = "deferred"),
        (e.redirect = "redirect"),
        (e.error = "error");
    })(T || (T = {}));
    new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
    function B(e, t, n) {
      void 0 === n && (n = "/");
      var r = te(("string" === typeof t ? U(t) : t).pathname || "/", n);
      if (null == r) return null;
      var a = $(e);
      !(function (e) {
        e.sort(function (e, t) {
          return e.score !== t.score
            ? t.score - e.score
            : (function (e, t) {
                var n =
                  e.length === t.length &&
                  e.slice(0, -1).every(function (e, n) {
                    return e === t[n];
                  });
                return n ? e[e.length - 1] - t[t.length - 1] : 0;
              })(
                e.routesMeta.map(function (e) {
                  return e.childrenIndex;
                }),
                t.routesMeta.map(function (e) {
                  return e.childrenIndex;
                })
              );
        });
      })(a);
      for (var o = null, l = 0; null == o && l < a.length; ++l)
        o = J(a[l], ee(r));
      return o;
    }
    function $(e, t, n, r) {
      void 0 === t && (t = []),
        void 0 === n && (n = []),
        void 0 === r && (r = "");
      var a = function (e, a, o) {
        var l = {
          relativePath: void 0 === o ? e.path || "" : o,
          caseSensitive: !0 === e.caseSensitive,
          childrenIndex: a,
          route: e,
        };
        l.relativePath.startsWith("/") &&
          (j(
            l.relativePath.startsWith(r),
            'Absolute route path "' +
              l.relativePath +
              '" nested under path "' +
              r +
              '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
          ),
          (l.relativePath = l.relativePath.slice(r.length)));
        var i = oe([r, l.relativePath]),
          u = n.concat(l);
        e.children &&
          e.children.length > 0 &&
          (j(
            !0 !== e.index,
            'Index routes must not have child routes. Please remove all child routes from route path "' +
              i +
              '".'
          ),
          $(e.children, t, u, i)),
          (null != e.path || e.index) &&
            t.push({ path: i, score: X(i, e.index), routesMeta: u });
      };
      return (
        e.forEach(function (e, t) {
          var n;
          if ("" !== e.path && null != (n = e.path) && n.includes("?")) {
            var r,
              o = O(H(e.path));
            try {
              for (o.s(); !(r = o.n()).done; ) {
                var l = r.value;
                a(e, t, l);
              }
            } catch (i) {
              o.e(i);
            } finally {
              o.f();
            }
          } else a(e, t);
        }),
        t
      );
    }
    function H(e) {
      var t = e.split("/");
      if (0 === t.length) return [];
      var n,
        r = l((n = t)) || m(n) || u(n) || c(),
        a = r[0],
        o = r.slice(1),
        i = a.endsWith("?"),
        s = a.replace(/\?$/, "");
      if (0 === o.length) return i ? [s, ""] : [s];
      var f = H(o.join("/")),
        d = [];
      return (
        d.push.apply(
          d,
          g(
            f.map(function (e) {
              return "" === e ? s : [s, e].join("/");
            })
          )
        ),
        i && d.push.apply(d, g(f)),
        d.map(function (t) {
          return e.startsWith("/") && "" === t ? "/" : t;
        })
      );
    }
    var V = /^:\w+$/,
      W = 3,
      Q = 2,
      K = 1,
      q = 10,
      G = -2,
      Y = function (e) {
        return "*" === e;
      };
    function X(e, t) {
      var n = e.split("/"),
        r = n.length;
      return (
        n.some(Y) && (r += G),
        t && (r += Q),
        n
          .filter(function (e) {
            return !Y(e);
          })
          .reduce(function (e, t) {
            return e + (V.test(t) ? W : "" === t ? K : q);
          }, r)
      );
    }
    function J(e, t) {
      for (
        var n = e.routesMeta, r = {}, a = "/", o = [], l = 0;
        l < n.length;
        ++l
      ) {
        var i = n[l],
          u = l === n.length - 1,
          c = "/" === a ? t : t.slice(a.length) || "/",
          s = Z(
            { path: i.relativePath, caseSensitive: i.caseSensitive, end: u },
            c
          );
        if (!s) return null;
        Object.assign(r, s.params);
        var f = i.route;
        o.push({
          params: r,
          pathname: oe([a, s.pathname]),
          pathnameBase: le(oe([a, s.pathnameBase])),
          route: f,
        }),
          "/" !== s.pathnameBase && (a = oe([a, s.pathnameBase]));
      }
      return o;
    }
    function Z(e, t) {
      "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
      var n = (function (e, t, n) {
          void 0 === t && (t = !1);
          void 0 === n && (n = !0);
          z(
            "*" === e || !e.endsWith("*") || e.endsWith("/*"),
            'Route path "' +
              e +
              '" will be treated as if it were "' +
              e.replace(/\*$/, "/*") +
              '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
              e.replace(/\*$/, "/*") +
              '".'
          );
          var r = [],
            a =
              "^" +
              e
                .replace(/\/*\*?$/, "")
                .replace(/^\/*/, "/")
                .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                .replace(/\/:(\w+)/g, function (e, t) {
                  return r.push(t), "/([^\\/]+)";
                });
          e.endsWith("*")
            ? (r.push("*"),
              (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
            : n
            ? (a += "\\/*$")
            : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
          var o = new RegExp(a, t ? void 0 : "i");
          return [o, r];
        })(e.path, e.caseSensitive, e.end),
        r = s(n, 2),
        a = r[0],
        o = r[1],
        l = t.match(a);
      if (!l) return null;
      var i = l[0],
        u = i.replace(/(.)\/+$/, "$1"),
        c = l.slice(1);
      return {
        params: o.reduce(function (e, t, n) {
          if ("*" === t) {
            var r = c[n] || "";
            u = i.slice(0, i.length - r.length).replace(/(.)\/+$/, "$1");
          }
          return (
            (e[t] = (function (e, t) {
              try {
                return decodeURIComponent(e);
              } catch (n) {
                return (
                  z(
                    !1,
                    'The value for the URL param "' +
                      t +
                      '" will not be decoded because the string "' +
                      e +
                      '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                      n +
                      ")."
                  ),
                  e
                );
              }
            })(c[n] || "", t)),
            e
          );
        }, {}),
        pathname: i,
        pathnameBase: u,
        pattern: e,
      };
    }
    function ee(e) {
      try {
        return decodeURI(e);
      } catch (t) {
        return (
          z(
            !1,
            'The URL path "' +
              e +
              '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
              t +
              ")."
          ),
          e
        );
      }
    }
    function te(e, t) {
      if ("/" === t) return e;
      if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
      var n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
      return r && "/" !== r ? null : e.slice(n) || "/";
    }
    function ne(e, t, n, r) {
      return (
        "Cannot include a '" +
        e +
        "' character in a manually specified `to." +
        t +
        "` field [" +
        JSON.stringify(r) +
        "].  Please separate it out to the `to." +
        n +
        '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
      );
    }
    function re(e) {
      return e.filter(function (e, t) {
        return 0 === t || (e.route.path && e.route.path.length > 0);
      });
    }
    function ae(e, t, n, r) {
      var a;
      void 0 === r && (r = !1),
        "string" === typeof e
          ? (a = U(e))
          : (j(
              !(a = R({}, e)).pathname || !a.pathname.includes("?"),
              ne("?", "pathname", "search", a)
            ),
            j(
              !a.pathname || !a.pathname.includes("#"),
              ne("#", "pathname", "hash", a)
            ),
            j(
              !a.search || !a.search.includes("#"),
              ne("#", "search", "hash", a)
            ));
      var o,
        l = "" === e || "" === a.pathname,
        i = l ? "/" : a.pathname;
      if (r || null == i) o = n;
      else {
        var u = t.length - 1;
        if (i.startsWith("..")) {
          for (var c = i.split("/"); ".." === c[0]; ) c.shift(), (u -= 1);
          a.pathname = c.join("/");
        }
        o = u >= 0 ? t[u] : "/";
      }
      var s = (function (e, t) {
          void 0 === t && (t = "/");
          var n = "string" === typeof e ? U(e) : e,
            r = n.pathname,
            a = n.search,
            o = void 0 === a ? "" : a,
            l = n.hash,
            i = void 0 === l ? "" : l,
            u = r
              ? r.startsWith("/")
                ? r
                : (function (e, t) {
                    var n = t.replace(/\/+$/, "").split("/");
                    return (
                      e.split("/").forEach(function (e) {
                        ".." === e
                          ? n.length > 1 && n.pop()
                          : "." !== e && n.push(e);
                      }),
                      n.length > 1 ? n.join("/") : "/"
                    );
                  })(r, t)
              : t;
          return { pathname: u, search: ie(o), hash: ue(i) };
        })(a, o),
        f = i && "/" !== i && i.endsWith("/"),
        d = (l || "." === i) && n.endsWith("/");
      return s.pathname.endsWith("/") || (!f && !d) || (s.pathname += "/"), s;
    }
    var oe = function (e) {
        return e.join("/").replace(/\/\/+/g, "/");
      },
      le = function (e) {
        return e.replace(/\/+$/, "").replace(/^\/*/, "/");
      },
      ie = function (e) {
        return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
      },
      ue = function (e) {
        return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
      },
      ce = (function (e) {
        S(n, e);
        var t = N(n);
        function n() {
          return y(this, n), t.apply(this, arguments);
        }
        return k(n);
      })(L(Error));
    function se(e) {
      return (
        null != e &&
        "number" === typeof e.status &&
        "string" === typeof e.statusText &&
        "boolean" === typeof e.internal &&
        "data" in e
      );
    }
    var fe = ["post", "put", "patch", "delete"],
      de = (new Set(fe), ["get"].concat(fe));
    new Set(de),
      new Set([301, 302, 303, 307, 308]),
      new Set([307, 308]),
      "undefined" !== typeof window &&
        "undefined" !== typeof window.document &&
        window.document.createElement;
    Symbol("deferred");
    function pe() {
      return (
        (pe = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        pe.apply(this, arguments)
      );
    }
    var he = d.createContext(null);
    var ve = d.createContext(null);
    var me = d.createContext(null);
    var ge = d.createContext(null);
    var ye = d.createContext(null);
    var be = d.createContext({ outlet: null, matches: [], isDataRoute: !1 });
    var we = d.createContext(null);
    function ke() {
      return null != d.useContext(ye);
    }
    function xe() {
      return ke() || j(!1), d.useContext(ye).location;
    }
    function Se(e) {
      d.useContext(ge).static || d.useLayoutEffect(e);
    }
    function Ee() {
      return d.useContext(be).isDataRoute
        ? (function () {
            var e = je(_e.UseNavigateStable).router,
              t = Fe(Le.UseNavigateStable),
              n = d.useRef(!1);
            return (
              Se(function () {
                n.current = !0;
              }),
              d.useCallback(
                function (r, a) {
                  void 0 === a && (a = {}),
                    n.current &&
                      ("number" === typeof r
                        ? e.navigate(r)
                        : e.navigate(r, pe({ fromRouteId: t }, a)));
                },
                [e, t]
              )
            );
          })()
        : (function () {
            ke() || j(!1);
            var e = d.useContext(ge),
              t = e.basename,
              n = e.navigator,
              r = d.useContext(be).matches,
              a = xe().pathname,
              o = JSON.stringify(
                re(r).map(function (e) {
                  return e.pathnameBase;
                })
              ),
              l = d.useRef(!1);
            return (
              Se(function () {
                l.current = !0;
              }),
              d.useCallback(
                function (e, r) {
                  if ((void 0 === r && (r = {}), l.current))
                    if ("number" !== typeof e) {
                      var i = ae(e, JSON.parse(o), a, "path" === r.relative);
                      "/" !== t &&
                        (i.pathname =
                          "/" === i.pathname ? t : oe([t, i.pathname])),
                        (r.replace ? n.replace : n.push)(i, r.state, r);
                    } else n.go(e);
                },
                [t, n, o, a]
              )
            );
          })();
    }
    function Ce(e, t) {
      var n = (void 0 === t ? {} : t).relative,
        r = d.useContext(be).matches,
        a = xe().pathname,
        o = JSON.stringify(
          re(r).map(function (e) {
            return e.pathnameBase;
          })
        );
      return d.useMemo(
        function () {
          return ae(e, JSON.parse(o), a, "path" === n);
        },
        [e, o, a, n]
      );
    }
    function Pe(e, t, n) {
      ke() || j(!1);
      var r,
        a = d.useContext(ge).navigator,
        o = d.useContext(be).matches,
        l = o[o.length - 1],
        i = l ? l.params : {},
        u = (l && l.pathname, l ? l.pathnameBase : "/"),
        c = (l && l.route, xe());
      if (t) {
        var s,
          p = "string" === typeof t ? U(t) : t;
        "/" === u ||
          (null == (s = p.pathname) ? void 0 : s.startsWith(u)) ||
          j(!1),
          (r = p);
      } else r = c;
      var h = r.pathname || "/",
        v = B(e, { pathname: "/" === u ? h : h.slice(u.length) || "/" });
      var m = Ie(
        v &&
          v.map(function (e) {
            return Object.assign({}, e, {
              params: Object.assign({}, i, e.params),
              pathname: oe([
                u,
                a.encodeLocation
                  ? a.encodeLocation(e.pathname).pathname
                  : e.pathname,
              ]),
              pathnameBase:
                "/" === e.pathnameBase
                  ? u
                  : oe([
                      u,
                      a.encodeLocation
                        ? a.encodeLocation(e.pathnameBase).pathname
                        : e.pathnameBase,
                    ]),
            });
          }),
        o,
        n
      );
      return t && m
        ? d.createElement(
            ye.Provider,
            {
              value: {
                location: pe(
                  {
                    pathname: "/",
                    search: "",
                    hash: "",
                    state: null,
                    key: "default",
                  },
                  r
                ),
                navigationType: f.Pop,
              },
            },
            m
          )
        : m;
    }
    function Ne() {
      var e = (function () {
          var e,
            t = d.useContext(we),
            n = ze(Le.UseRouteError),
            r = Fe(Le.UseRouteError);
          if (t) return t;
          return null == (e = n.errors) ? void 0 : e[r];
        })(),
        t = se(e)
          ? e.status + " " + e.statusText
          : e instanceof Error
          ? e.message
          : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        r = "rgba(200,200,200, 0.5)",
        a = { padding: "0.5rem", backgroundColor: r };
      return d.createElement(
        d.Fragment,
        null,
        d.createElement("h2", null, "Unexpected Application Error!"),
        d.createElement("h3", { style: { fontStyle: "italic" } }, t),
        n ? d.createElement("pre", { style: a }, n) : null,
        null
      );
    }
    var _e,
      Le,
      Oe = d.createElement(Ne, null),
      Re = (function (e) {
        S(n, e);
        var t = N(n);
        function n(e) {
          var r;
          return (
            y(this, n),
            ((r = t.call(this, e)).state = {
              location: e.location,
              revalidation: e.revalidation,
              error: e.error,
            }),
            r
          );
        }
        return (
          k(
            n,
            [
              {
                key: "componentDidCatch",
                value: function (e, t) {
                  console.error(
                    "React Router caught the following error during render",
                    e,
                    t
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  return this.state.error
                    ? d.createElement(
                        be.Provider,
                        { value: this.props.routeContext },
                        d.createElement(we.Provider, {
                          value: this.state.error,
                          children: this.props.component,
                        })
                      )
                    : this.props.children;
                },
              },
            ],
            [
              {
                key: "getDerivedStateFromError",
                value: function (e) {
                  return { error: e };
                },
              },
              {
                key: "getDerivedStateFromProps",
                value: function (e, t) {
                  return t.location !== e.location ||
                    ("idle" !== t.revalidation && "idle" === e.revalidation)
                    ? {
                        error: e.error,
                        location: e.location,
                        revalidation: e.revalidation,
                      }
                    : {
                        error: e.error || t.error,
                        location: t.location,
                        revalidation: e.revalidation || t.revalidation,
                      };
                },
              },
            ]
          ),
          n
        );
      })(d.Component);
    function Te(e) {
      var t = e.routeContext,
        n = e.match,
        r = e.children,
        a = d.useContext(he);
      return (
        a &&
          a.static &&
          a.staticContext &&
          (n.route.errorElement || n.route.ErrorBoundary) &&
          (a.staticContext._deepestRenderedBoundaryId = n.route.id),
        d.createElement(be.Provider, { value: t }, r)
      );
    }
    function Ie(e, t, n) {
      var r;
      if ((void 0 === t && (t = []), void 0 === n && (n = null), null == e)) {
        var a;
        if (null == (a = n) || !a.errors) return null;
        e = n.matches;
      }
      var o = e,
        l = null == (r = n) ? void 0 : r.errors;
      if (null != l) {
        var i = o.findIndex(function (e) {
          return e.route.id && (null == l ? void 0 : l[e.route.id]);
        });
        i >= 0 || j(!1), (o = o.slice(0, Math.min(o.length, i + 1)));
      }
      return o.reduceRight(function (e, r, a) {
        var i = r.route.id ? (null == l ? void 0 : l[r.route.id]) : null,
          u = null;
        n && (u = r.route.errorElement || Oe);
        var c = t.concat(o.slice(0, a + 1)),
          s = function () {
            var t;
            return (
              (t = i
                ? u
                : r.route.Component
                ? d.createElement(r.route.Component, null)
                : r.route.element
                ? r.route.element
                : e),
              d.createElement(Te, {
                match: r,
                routeContext: { outlet: e, matches: c, isDataRoute: null != n },
                children: t,
              })
            );
          };
        return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === a)
          ? d.createElement(Re, {
              location: n.location,
              revalidation: n.revalidation,
              component: u,
              error: i,
              children: s(),
              routeContext: { outlet: null, matches: c, isDataRoute: !0 },
            })
          : s();
      }, null);
    }
    function je(e) {
      var t = d.useContext(he);
      return t || j(!1), t;
    }
    function ze(e) {
      var t = d.useContext(ve);
      return t || j(!1), t;
    }
    function Fe(e) {
      var t = (function (e) {
          var t = d.useContext(be);
          return t || j(!1), t;
        })(),
        n = t.matches[t.matches.length - 1];
      return n.route.id || j(!1), n.route.id;
    }
    !(function (e) {
      (e.UseBlocker = "useBlocker"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate");
    })(_e || (_e = {})),
      (function (e) {
        (e.UseBlocker = "useBlocker"),
          (e.UseLoaderData = "useLoaderData"),
          (e.UseActionData = "useActionData"),
          (e.UseRouteError = "useRouteError"),
          (e.UseNavigation = "useNavigation"),
          (e.UseRouteLoaderData = "useRouteLoaderData"),
          (e.UseMatches = "useMatches"),
          (e.UseRevalidator = "useRevalidator"),
          (e.UseNavigateStable = "useNavigate"),
          (e.UseRouteId = "useRouteId");
      })(Le || (Le = {}));
    var Me;
    function De(e) {
      j(!1);
    }
    function Ue(e) {
      var t = e.basename,
        n = void 0 === t ? "/" : t,
        r = e.children,
        a = void 0 === r ? null : r,
        o = e.location,
        l = e.navigationType,
        i = void 0 === l ? f.Pop : l,
        u = e.navigator,
        c = e.static,
        s = void 0 !== c && c;
      ke() && j(!1);
      var p = n.replace(/^\/*/, "/"),
        h = d.useMemo(
          function () {
            return { basename: p, navigator: u, static: s };
          },
          [p, u, s]
        );
      "string" === typeof o && (o = U(o));
      var v = o,
        m = v.pathname,
        g = void 0 === m ? "/" : m,
        y = v.search,
        b = void 0 === y ? "" : y,
        w = v.hash,
        k = void 0 === w ? "" : w,
        x = v.state,
        S = void 0 === x ? null : x,
        E = v.key,
        C = void 0 === E ? "default" : E,
        P = d.useMemo(
          function () {
            var e = te(g, p);
            return null == e
              ? null
              : {
                  location: {
                    pathname: e,
                    search: b,
                    hash: k,
                    state: S,
                    key: C,
                  },
                  navigationType: i,
                };
          },
          [p, g, b, k, S, C, i]
        );
      return null == P
        ? null
        : d.createElement(
            ge.Provider,
            { value: h },
            d.createElement(ye.Provider, { children: a, value: P })
          );
    }
    function Ae(e) {
      var t = e.children,
        n = e.location;
      return Pe($e(t), n);
    }
    !(function (e) {
      (e[(e.pending = 0)] = "pending"),
        (e[(e.success = 1)] = "success"),
        (e[(e.error = 2)] = "error");
    })(Me || (Me = {}));
    var Be = new Promise(function () {});
    d.Component;
    function $e(e, t) {
      void 0 === t && (t = []);
      var n = [];
      return (
        d.Children.forEach(e, function (e, r) {
          if (d.isValidElement(e)) {
            var a = [].concat(g(t), [r]);
            if (e.type !== d.Fragment) {
              e.type !== De && j(!1),
                e.props.index && e.props.children && j(!1);
              var o = {
                id: e.props.id || a.join("-"),
                caseSensitive: e.props.caseSensitive,
                element: e.props.element,
                Component: e.props.Component,
                index: e.props.index,
                path: e.props.path,
                loader: e.props.loader,
                action: e.props.action,
                errorElement: e.props.errorElement,
                ErrorBoundary: e.props.ErrorBoundary,
                hasErrorBoundary:
                  null != e.props.ErrorBoundary || null != e.props.errorElement,
                shouldRevalidate: e.props.shouldRevalidate,
                handle: e.props.handle,
                lazy: e.props.lazy,
              };
              e.props.children && (o.children = $e(e.props.children, a)),
                n.push(o);
            } else n.push.apply(n, $e(e.props.children, a));
          }
        }),
        n
      );
    }
    function He() {
      return (
        (He = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        He.apply(this, arguments)
      );
    }
    function Ve(e, t) {
      if (null == e) return {};
      var n,
        r,
        a = {},
        o = Object.keys(e);
      for (r = 0; r < o.length; r++)
        (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a;
    }
    var We = [
      "onClick",
      "relative",
      "reloadDocument",
      "replace",
      "state",
      "target",
      "to",
      "preventScrollReset",
    ];
    function Qe(e) {
      var t,
        n = e.basename,
        r = e.children,
        a = e.window,
        o = d.useRef();
      null == o.current &&
        (o.current =
          (void 0 === (t = { window: a, v5Compat: !0 }) && (t = {}),
          A(
            function (e, t) {
              var n = U(e.location.hash.substr(1)),
                r = n.pathname,
                a = void 0 === r ? "/" : r,
                o = n.search,
                l = void 0 === o ? "" : o,
                i = n.hash;
              return M(
                "",
                { pathname: a, search: l, hash: void 0 === i ? "" : i },
                (t.state && t.state.usr) || null,
                (t.state && t.state.key) || "default"
              );
            },
            function (e, t) {
              var n = e.document.querySelector("base"),
                r = "";
              if (n && n.getAttribute("href")) {
                var a = e.location.href,
                  o = a.indexOf("#");
                r = -1 === o ? a : a.slice(0, o);
              }
              return r + "#" + ("string" === typeof t ? t : D(t));
            },
            function (e, t) {
              z(
                "/" === e.pathname.charAt(0),
                "relative pathnames are not supported in hash history.push(" +
                  JSON.stringify(t) +
                  ")"
              );
            },
            t
          )));
      var l = o.current,
        i = s(d.useState({ action: l.action, location: l.location }), 2),
        u = i[0],
        c = i[1];
      return (
        d.useLayoutEffect(
          function () {
            return l.listen(c);
          },
          [l]
        ),
        d.createElement(Ue, {
          basename: n,
          children: r,
          location: u.location,
          navigationType: u.action,
          navigator: l,
        })
      );
    }
    var Ke =
        "undefined" !== typeof window &&
        "undefined" !== typeof window.document &&
        "undefined" !== typeof window.document.createElement,
      qe = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
      Ge = d.forwardRef(function (e, t) {
        var n,
          r = e.onClick,
          a = e.relative,
          o = e.reloadDocument,
          l = e.replace,
          i = e.state,
          u = e.target,
          c = e.to,
          s = e.preventScrollReset,
          f = Ve(e, We),
          p = d.useContext(ge).basename,
          h = !1;
        if ("string" === typeof c && qe.test(c) && ((n = c), Ke))
          try {
            var v = new URL(window.location.href),
              m = c.startsWith("//") ? new URL(v.protocol + c) : new URL(c),
              g = te(m.pathname, p);
            m.origin === v.origin && null != g
              ? (c = g + m.search + m.hash)
              : (h = !0);
          } catch (vt) {}
        var y = (function (e, t) {
            var n = (void 0 === t ? {} : t).relative;
            ke() || j(!1);
            var r = d.useContext(ge),
              a = r.basename,
              o = r.navigator,
              l = Ce(e, { relative: n }),
              i = l.hash,
              u = l.pathname,
              c = l.search,
              s = u;
            return (
              "/" !== a && (s = "/" === u ? a : oe([a, u])),
              o.createHref({ pathname: s, search: c, hash: i })
            );
          })(c, { relative: a }),
          b = (function (e, t) {
            var n = void 0 === t ? {} : t,
              r = n.target,
              a = n.replace,
              o = n.state,
              l = n.preventScrollReset,
              i = n.relative,
              u = Ee(),
              c = xe(),
              s = Ce(e, { relative: i });
            return d.useCallback(
              function (t) {
                if (
                  (function (e, t) {
                    return (
                      0 === e.button &&
                      (!t || "_self" === t) &&
                      !(function (e) {
                        return !!(
                          e.metaKey ||
                          e.altKey ||
                          e.ctrlKey ||
                          e.shiftKey
                        );
                      })(e)
                    );
                  })(t, r)
                ) {
                  t.preventDefault();
                  var n = void 0 !== a ? a : D(c) === D(s);
                  u(e, {
                    replace: n,
                    state: o,
                    preventScrollReset: l,
                    relative: i,
                  });
                }
              },
              [c, u, s, a, o, r, e, l, i]
            );
          })(c, {
            replace: l,
            state: i,
            target: u,
            preventScrollReset: s,
            relative: a,
          });
        return d.createElement(
          "a",
          He({}, f, {
            href: n || y,
            onClick:
              h || o
                ? r
                : function (e) {
                    r && r(e), e.defaultPrevented || b(e);
                  },
            ref: t,
            target: u,
          })
        );
      });
    var Ye, Xe;
    (function (e) {
      (e.UseScrollRestoration = "useScrollRestoration"),
        (e.UseSubmitImpl = "useSubmitImpl"),
        (e.UseFetcher = "useFetcher");
    })(Ye || (Ye = {})),
      (function (e) {
        (e.UseFetchers = "useFetchers"),
          (e.UseScrollRestoration = "useScrollRestoration");
      })(Xe || (Xe = {}));
    var Je = (function (e) {
        return (
          (e.HOME = "/home"),
          (e.LOGIN = "/login"),
          (e.LIST_PRODUCT = "/list-product"),
          e
        );
      })(Je || {}),
      Ze = Je,
      et = "https://e-stok.onrender.com/static/SVG/",
      tt = function (e) {
        var t = e.text;
        return (0, p.jsx)("div", {
          className: "sm:py-5 py-3 items-center",
          children: (0, p.jsx)("span", {
            className: "font-bold text-2xl/[10px] text-secondary",
            children: t,
          }),
        });
      },
      nt = function () {
        return (0, p.jsxs)("div", {
          className: "flex justify-between px-6 py-3 items-center bg-white",
          children: [
            (0, p.jsx)(tt, { text: "Dashboard" }),
            (0, p.jsx)("div", { children: "FILTRO" }),
          ],
        });
      },
      rt = function (e) {
        var t = e.children,
          n = s((0, d.useState)(!1), 2),
          r = n[0],
          a = n[1],
          o = (0, d.useContext)(h),
          l = (o.signOut, o.user, xe().pathname);
        return (
          (0, d.useEffect)(
            function () {
              l === Ze.HOME ? a(!0) : a(!1);
            },
            [l]
          ),
          (0, p.jsx)(p.Fragment, {
            children: (0, p.jsxs)("div", {
              className: "flex flex-col w-full ".concat(
                r ? "max-h-screen h-auto lg:bg-default" : "h-screen",
                " "
              ),
              children: [
                (0, p.jsx)("div", {
                  className:
                    "text-white w-full md:w-56 lg:w-72 md:h-full bg-sky-600 rounded-r-[30px] shadow-lg md:fixed z-50 md:z-0",
                  children: (0, p.jsx)("div", {
                    className:
                      "flex flex-row md:flex-col items-center md:items-start",
                    children: (0, p.jsxs)("div", {
                      className:
                        "md:flex flex-col hidden md:w-full mt-14 gap-7",
                      children: [
                        (0, p.jsx)("div", {
                          className: "flex justify-center",
                          children: (0, p.jsx)("img", {
                            src: et + "e-stok.svg",
                            alt: "logo",
                          }),
                        }),
                        (0, p.jsx)("div", {
                          className: "flex justify-center",
                          children: (0, p.jsx)("img", {
                            src: et + "mask-group.svg",
                            alt: "user-picture",
                          }),
                        }),
                        (0, p.jsx)("div", {
                          className: "flex items-center justify-center",
                          children: (0, p.jsx)("span", {
                            className: "capitalize font-medium",
                            children: " Leonardo vieira",
                          }),
                        }),
                        (0, p.jsxs)("div", {
                          className: "flex flex-col mr-10",
                          children: [
                            (0, p.jsx)(Ge, {
                              to: Ze.HOME,
                              children: (0, p.jsxs)("div", {
                                className:
                                  "px-4 py-2 flex gap-2 items-center cursor-pointer w-full font-medium text-base hover:bg-sky-700 hover:rounded-r-[20px] transition-all ease-in-out rounded-sm",
                                children: [
                                  (0, p.jsx)("img", {
                                    src: et + "home.svg",
                                    alt: "home",
                                    className: "w-6 h-6 text-white",
                                  }),
                                  "Home",
                                ],
                              }),
                            }),
                            (0, p.jsx)(Ge, {
                              to: Ze.LIST_PRODUCT,
                              children: (0, p.jsxs)("div", {
                                className:
                                  "px-4 hover:font-semibold py-2 flex gap-2 items-center cursor-pointer w-full font-medium text-base hover:bg-sky-700 hover:rounded-r-[20px] transition-all ease-in-out rounded-sm",
                                children: [
                                  (0, p.jsx)("img", {
                                    src: et + "product.svg",
                                    alt: "product",
                                    className: "w-6 h-6",
                                  }),
                                  "Produto",
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, p.jsx)("span", {
                          className: "border-t-[1px] w-full",
                        }),
                      ],
                    }),
                  }),
                }),
                (0, p.jsxs)("div", {
                  className: "flex flex-col lg:ml-72 md:ml-56 overflow-y-auto",
                  children: [
                    (0, p.jsx)(nt, {}),
                    (0, p.jsx)("div", {
                      className: "flex flex-col bg-neutral-200 h-screen",
                      children: t,
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      },
      at = function () {
        return (0, p.jsx)("div", {
          children: (0, p.jsx)(tt, { text: "Home" }),
        });
      },
      ot = function (e) {
        return (0, p.jsx)("span", {
          className: "p-1 rounded flex items-center transition-all ".concat(
            e.isDisabled
              ? "bg-gray-300 cursor-not-allowed"
              : "cursor-pointer hover:bg-gray-200"
          ),
          onClick: e.onClick,
          children: e.content,
        });
      },
      lt = function (e) {
        return (0, p.jsx)("span", {
          className: "block sm:text-xs text-sm text-gray-500",
          children: "Mostrando "
            .concat(e.contentLenght, " de ")
            .concat(e.totalLenght, " registros"),
        });
      },
      it = function (e) {
        return (0, p.jsx)("span", {
          className:
            "cursor-pointer  transition-all px-[10px] py-1 rounded sm:text-sm text-md ".concat(
              e.isActive
                ? "hover:bg-teal-500 bg-teal-600 font-semibold text-white"
                : "hover:bg-gray-200"
            ),
          onClick: e.onClick,
          children: e.value,
        });
      },
      ut = function (e) {
        var t = l(),
          n = s((0, d.useState)(t), 2),
          r = n[0],
          a = n[1];
        function o(t) {
          if (!(t < 1 || t > r.totalPages)) {
            var n = l(e.totalItems, t, e.pageSize, e.maxPages);
            a(n), e.onChangePage && e.onChangePage(t);
          }
        }
        function l() {
          var e,
            t,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1,
            a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 10,
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 5,
            l = Math.ceil(n / a);
          if ((r < 1 ? (r = 1) : r > l && (r = l), l <= o)) (e = 1), (t = l);
          else {
            var i = Math.floor(o / 2),
              u = Math.ceil(o / 2) - 1;
            r <= i
              ? ((e = 1), (t = o))
              : r + u >= l
              ? ((e = l - o + 1), (t = l))
              : ((e = r - i), (t = r + u));
          }
          var c = Array.from(Array(t + 1 - e).keys()).map(function (t) {
            return e + t;
          });
          return {
            totalItems: n,
            currentPage: r,
            pageSize: a,
            totalPages: l,
            startPage: e,
            endPage: t,
            pages: c,
          };
        }
        (0, d.useEffect)(
          function () {
            var t = l(e.totalItems, e.page, e.pageSize, e.maxPages);
            a(t);
          },
          [e.totalItems, e.maxPages, e.page]
        );
        var i = function (e) {
          return e ? String(e).replace(/(.)(?=(\d{3})+$)/g, "$1.") : String(e);
        };
        return (0, p.jsx)("div", {
          children: (0, p.jsxs)("div", {
            className:
              "flex sm:flex-row flex-col-reverse p-3 items-center justify-end gap-4 select-none",
            children: [
              (0, p.jsx)("div", {
                children: (0, p.jsx)(lt, {
                  contentLenght: i(e.currentPageLength),
                  totalLenght: i(e.totalItems),
                }),
              }),
              (0, p.jsxs)("div", {
                className: "flex flex-row sm:gap-2 gap-3",
                children: [
                  (0, p.jsx)(ot, {
                    isDisabled: 1 === r.currentPage || 0 === r.currentPage,
                    onClick: function () {
                      return o(r.currentPage - 1);
                    },
                    content: (0, p.jsx)("img", {
                      src: et + "chevron-left.svg",
                      className: "sm:w-4 sm:h-4 w-6 h-6 text-gray-500",
                    }),
                  }),
                  r.pages.map(function (e, t) {
                    return (0, p.jsx)(
                      it,
                      {
                        isActive: r.currentPage === e,
                        onClick: function () {
                          return o(e);
                        },
                        value: i(e),
                      },
                      t
                    );
                  }),
                  (0, p.jsx)("div", {
                    className: "sm:contents hidden",
                    children: (0, p.jsx)(ot, {
                      isDisabled: r.currentPage === r.totalPages,
                      onClick: function () {
                        return o(r.totalPages);
                      },
                      content: (0, p.jsx)("img", {
                        src: et + "chevron-left.svg",
                        className: "w-4 h-4 text-gray-500 rotate-180",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
    function ct(e, t) {
      if (null == e) return {};
      var n,
        r,
        a = (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            a = {},
            o = Object.keys(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (a[n] = e[n]));
      }
      return a;
    }
    function st(e, t, n) {
      return (
        (t = b(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function ft(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function dt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ft(Object(n), !0).forEach(function (t) {
              st(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : ft(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function pt(e, t) {
      if (e in t) {
        for (
          var n = t[e],
            r = arguments.length,
            a = new Array(r > 2 ? r - 2 : 0),
            o = 2;
          o < r;
          o++
        )
          a[o - 2] = arguments[o];
        return "function" == typeof n ? n.apply(void 0, a) : n;
      }
      var l = new Error(
        'Tried to handle "'
          .concat(
            e,
            '" but there is no handler defined. Only defined handlers are: '
          )
          .concat(
            Object.keys(t)
              .map(function (e) {
                return '"'.concat(e, '"');
              })
              .join(", "),
            "."
          )
      );
      throw (Error.captureStackTrace && Error.captureStackTrace(l, pt), l);
    }
    function ht() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return t.filter(Boolean).join(" ");
    }
    var vt,
      mt,
      gt = ["static"],
      yt = ["unmount"],
      bt = ["as", "children", "refName"],
      wt =
        (((mt = wt || {})[(mt.None = 0)] = "None"),
        (mt[(mt.RenderStrategy = 1)] = "RenderStrategy"),
        (mt[(mt.Static = 2)] = "Static"),
        mt),
      kt =
        (((vt = kt || {})[(vt.Unmount = 0)] = "Unmount"),
        (vt[(vt.Hidden = 1)] = "Hidden"),
        vt);
    function xt(e) {
      var t = e.ourProps,
        n = e.theirProps,
        r = e.slot,
        a = e.defaultTag,
        o = e.features,
        l = e.visible,
        i = void 0 === l || l,
        u = e.name,
        c = Et(n, t);
      if (i) return St(c, r, a, u);
      var s = null != o ? o : 0;
      if (2 & s) {
        var f = c.static,
          d = void 0 !== f && f,
          p = ct(c, gt);
        if (d) return St(p, r, a, u);
      }
      if (1 & s) {
        var h,
          v = c.unmount,
          m = void 0 === v || v,
          g = ct(c, yt);
        return pt(
          m ? 0 : 1,
          (st((h = {}), 0, function () {
            return null;
          }),
          st(h, 1, function () {
            return St(
              dt(dt({}, g), {}, { hidden: !0, style: { display: "none" } }),
              r,
              a,
              u
            );
          }),
          h)
        );
      }
      return St(c, r, a, u);
    }
    function St(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = arguments.length > 3 ? arguments[3] : void 0,
        a = Nt(e, ["unmount", "static"]),
        o = a.as,
        l = void 0 === o ? n : o,
        i = a.children,
        u = a.refName,
        c = void 0 === u ? "ref" : u,
        f = ct(a, bt),
        p = void 0 !== e.ref ? st({}, c, e.ref) : {},
        h = "function" == typeof i ? i(t) : i;
      "className" in f &&
        f.className &&
        "function" == typeof f.className &&
        (f.className = f.className(t));
      var v = {};
      if (t) {
        for (
          var m = !1, g = [], y = 0, b = Object.entries(t);
          y < b.length;
          y++
        ) {
          var w = s(b[y], 2),
            k = w[0],
            x = w[1];
          "boolean" == typeof x && (m = !0), !0 === x && g.push(k);
        }
        m && (v["data-headlessui-state"] = g.join(" "));
      }
      if (l === d.Fragment && Object.keys(Pt(f)).length > 0) {
        if (!(0, d.isValidElement)(h) || (Array.isArray(h) && h.length > 1))
          throw new Error(
            [
              'Passing props on "Fragment"!',
              "",
              "The current component <".concat(
                r,
                ' /> is rendering a "Fragment".'
              ),
              "However we need to passthrough the following props:",
              Object.keys(f)
                .map(function (e) {
                  return "  - ".concat(e);
                })
                .join("\n"),
              "",
              "You can apply a few solutions:",
              [
                'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                "Render a single element as the child so that we can forward the props onto that element.",
              ]
                .map(function (e) {
                  return "  - ".concat(e);
                })
                .join("\n"),
            ].join("\n")
          );
        var S = h.props,
          E =
            "function" == typeof (null == S ? void 0 : S.className)
              ? function () {
                  return ht(
                    null == S ? void 0 : S.className.apply(S, arguments),
                    f.className
                  );
                }
              : ht(null == S ? void 0 : S.className, f.className),
          C = E ? { className: E } : {};
        return (0, d.cloneElement)(
          h,
          Object.assign(
            {},
            Et(h.props, Pt(Nt(f, ["ref"]))),
            v,
            p,
            (function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return {
                ref: t.every(function (e) {
                  return null == e;
                })
                  ? void 0
                  : function (e) {
                      var n,
                        r = O(t);
                      try {
                        for (r.s(); !(n = r.n()).done; ) {
                          var a = n.value;
                          null != a &&
                            ("function" == typeof a ? a(e) : (a.current = e));
                        }
                      } catch (o) {
                        r.e(o);
                      } finally {
                        r.f();
                      }
                    },
              };
            })(h.ref, p.ref),
            C
          )
        );
      }
      return (0, d.createElement)(
        l,
        Object.assign(
          {},
          Nt(f, ["ref"]),
          l !== d.Fragment && p,
          l !== d.Fragment && v
        ),
        h
      );
    }
    function Et() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      if (0 === t.length) return {};
      if (1 === t.length) return t[0];
      for (var r = {}, a = {}, o = 0, l = t; o < l.length; o++) {
        var i = l[o];
        for (var u in i)
          u.startsWith("on") && "function" == typeof i[u]
            ? (null != a[u] || (a[u] = []), a[u].push(i[u]))
            : (r[u] = i[u]);
      }
      if (r.disabled || r["aria-disabled"])
        return Object.assign(
          r,
          Object.fromEntries(
            Object.keys(a).map(function (e) {
              return [e, void 0];
            })
          )
        );
      var c = function (e) {
        Object.assign(
          r,
          st({}, e, function (t) {
            for (
              var n = a[e],
                r = arguments.length,
                o = new Array(r > 1 ? r - 1 : 0),
                l = 1;
              l < r;
              l++
            )
              o[l - 1] = arguments[l];
            var i,
              u = O(n);
            try {
              for (u.s(); !(i = u.n()).done; ) {
                var c = i.value;
                if (
                  (t instanceof Event ||
                    (null == t ? void 0 : t.nativeEvent) instanceof Event) &&
                  t.defaultPrevented
                )
                  return;
                c.apply(void 0, [t].concat(o));
              }
            } catch (s) {
              u.e(s);
            } finally {
              u.f();
            }
          })
        );
      };
      for (var s in a) c(s);
      return r;
    }
    function Ct(e) {
      var t;
      return Object.assign((0, d.forwardRef)(e), {
        displayName: null != (t = e.displayName) ? t : e.name,
      });
    }
    function Pt(e) {
      var t = Object.assign({}, e);
      for (var n in t) void 0 === t[n] && delete t[n];
      return t;
    }
    function Nt(e) {
      var t,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        r = Object.assign({}, e),
        a = O(n);
      try {
        for (a.s(); !(t = a.n()).done; ) {
          var o = t.value;
          o in r && delete r[o];
        }
      } catch (l) {
        a.e(l);
      } finally {
        a.f();
      }
      return r;
    }
    function _t() {
      var e = [],
        t = {
          addEventListener: function (e, n, r, a) {
            return (
              e.addEventListener(n, r, a),
              t.add(function () {
                return e.removeEventListener(n, r, a);
              })
            );
          },
          requestAnimationFrame: (function (e) {
            function t() {
              return e.apply(this, arguments);
            }
            return (
              (t.toString = function () {
                return e.toString();
              }),
              t
            );
          })(function () {
            var e = requestAnimationFrame.apply(void 0, arguments);
            return t.add(function () {
              return cancelAnimationFrame(e);
            });
          }),
          nextFrame: function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return t.requestAnimationFrame(function () {
              return t.requestAnimationFrame.apply(t, n);
            });
          },
          setTimeout: (function (e) {
            function t() {
              return e.apply(this, arguments);
            }
            return (
              (t.toString = function () {
                return e.toString();
              }),
              t
            );
          })(function () {
            var e = setTimeout.apply(void 0, arguments);
            return t.add(function () {
              return clearTimeout(e);
            });
          }),
          microTask: function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            var a = { current: !0 };
            return (
              (function (e) {
                "function" == typeof queueMicrotask
                  ? queueMicrotask(e)
                  : Promise.resolve()
                      .then(e)
                      .catch(function (e) {
                        return setTimeout(function () {
                          throw e;
                        });
                      });
              })(function () {
                a.current && n[0]();
              }),
              t.add(function () {
                a.current = !1;
              })
            );
          },
          style: function (e, t, n) {
            var r = e.style.getPropertyValue(t);
            return (
              Object.assign(e.style, st({}, t, n)),
              this.add(function () {
                Object.assign(e.style, st({}, t, r));
              })
            );
          },
          group: function (e) {
            var t = _t();
            return (
              e(t),
              this.add(function () {
                return t.dispose();
              })
            );
          },
          add: function (t) {
            return (
              e.push(t),
              function () {
                var n = e.indexOf(t);
                if (n >= 0) {
                  var r,
                    a = O(e.splice(n, 1));
                  try {
                    for (a.s(); !(r = a.n()).done; ) {
                      (0, r.value)();
                    }
                  } catch (o) {
                    a.e(o);
                  } finally {
                    a.f();
                  }
                }
              }
            );
          },
          dispose: function () {
            var t,
              n = O(e.splice(0));
            try {
              for (n.s(); !(t = n.n()).done; ) {
                (0, t.value)();
              }
            } catch (r) {
              n.e(r);
            } finally {
              n.f();
            }
          },
        };
      return t;
    }
    function Lt() {
      var e = s((0, d.useState)(_t), 1)[0];
      return (
        (0, d.useEffect)(
          function () {
            return function () {
              return e.dispose();
            };
          },
          [e]
        ),
        e
      );
    }
    var Ot = Object.defineProperty,
      Rt = function (e, t, n) {
        return (
          (function (e, t, n) {
            t in e
              ? Ot(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (e[t] = n);
          })(e, "symbol" != typeof t ? t + "" : t, n),
          n
        );
      },
      Tt = (function () {
        function e() {
          y(this, e),
            Rt(this, "current", this.detect()),
            Rt(this, "handoffState", "pending"),
            Rt(this, "currentId", 0);
        }
        return (
          k(e, [
            {
              key: "set",
              value: function (e) {
                this.current !== e &&
                  ((this.handoffState = "pending"),
                  (this.currentId = 0),
                  (this.current = e));
              },
            },
            {
              key: "reset",
              value: function () {
                this.set(this.detect());
              },
            },
            {
              key: "nextId",
              value: function () {
                return ++this.currentId;
              },
            },
            {
              key: "isServer",
              get: function () {
                return "server" === this.current;
              },
            },
            {
              key: "isClient",
              get: function () {
                return "client" === this.current;
              },
            },
            {
              key: "detect",
              value: function () {
                return "undefined" == typeof window ||
                  "undefined" == typeof document
                  ? "server"
                  : "client";
              },
            },
            {
              key: "handoff",
              value: function () {
                "pending" === this.handoffState &&
                  (this.handoffState = "complete");
              },
            },
            {
              key: "isHandoffComplete",
              get: function () {
                return "complete" === this.handoffState;
              },
            },
          ]),
          e
        );
      })(),
      It = new Tt(),
      jt = function (e, t) {
        It.isServer ? (0, d.useEffect)(e, t) : (0, d.useLayoutEffect)(e, t);
      };
    function zt(e) {
      var t = (0, d.useRef)(e);
      return (
        jt(
          function () {
            t.current = e;
          },
          [e]
        ),
        t
      );
    }
    var Ft,
      Mt = function (e) {
        var t = zt(e);
        return d.useCallback(
          function () {
            return t.current.apply(t, arguments);
          },
          [t]
        );
      },
      Dt = Symbol();
    function Ut() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var r = (0, d.useRef)(t);
      (0, d.useEffect)(
        function () {
          r.current = t;
        },
        [t]
      );
      var a = Mt(function (e) {
        var t,
          n = O(r.current);
        try {
          for (n.s(); !(t = n.n()).done; ) {
            var a = t.value;
            null != a && ("function" == typeof a ? a(e) : (a.current = e));
          }
        } catch (o) {
          n.e(o);
        } finally {
          n.f();
        }
      });
      return t.every(function (e) {
        return null == e || (null == e ? void 0 : e[Dt]);
      })
        ? void 0
        : a;
    }
    var At =
        null != (Ft = d.useId)
          ? Ft
          : function () {
              var e = (function () {
                  var e = s((0, d.useState)(It.isHandoffComplete), 2),
                    t = e[0],
                    n = e[1];
                  return (
                    t && !1 === It.isHandoffComplete && n(!1),
                    (0, d.useEffect)(
                      function () {
                        !0 !== t && n(!0);
                      },
                      [t]
                    ),
                    (0, d.useEffect)(function () {
                      return It.handoff();
                    }, []),
                    t
                  );
                })(),
                t = s(
                  d.useState(
                    e
                      ? function () {
                          return It.nextId();
                        }
                      : null
                  ),
                  2
                ),
                n = t[0],
                r = t[1];
              return (
                jt(
                  function () {
                    null === n && r(It.nextId());
                  },
                  [n]
                ),
                null != n ? "" + n : void 0
              );
            },
      Bt = (function (e) {
        return (
          (e.Space = " "),
          (e.Enter = "Enter"),
          (e.Escape = "Escape"),
          (e.Backspace = "Backspace"),
          (e.Delete = "Delete"),
          (e.ArrowLeft = "ArrowLeft"),
          (e.ArrowUp = "ArrowUp"),
          (e.ArrowRight = "ArrowRight"),
          (e.ArrowDown = "ArrowDown"),
          (e.Home = "Home"),
          (e.End = "End"),
          (e.PageUp = "PageUp"),
          (e.PageDown = "PageDown"),
          (e.Tab = "Tab"),
          e
        );
      })(Bt || {});
    var $t = (function (e) {
      return (
        (e[(e.First = 0)] = "First"),
        (e[(e.Previous = 1)] = "Previous"),
        (e[(e.Next = 2)] = "Next"),
        (e[(e.Last = 3)] = "Last"),
        (e[(e.Specific = 4)] = "Specific"),
        (e[(e.Nothing = 5)] = "Nothing"),
        e
      );
    })($t || {});
    function Ht(e, t) {
      var n = t.resolveItems();
      if (n.length <= 0) return null;
      var r = t.resolveActiveIndex(),
        a = null != r ? r : -1,
        o = (function () {
          switch (e.focus) {
            case 0:
              return n.findIndex(function (e) {
                return !t.resolveDisabled(e);
              });
            case 1:
              var r = n
                .slice()
                .reverse()
                .findIndex(function (e, n, r) {
                  return (
                    !(-1 !== a && r.length - n - 1 >= a) &&
                    !t.resolveDisabled(e)
                  );
                });
              return -1 === r ? r : n.length - 1 - r;
            case 2:
              return n.findIndex(function (e, n) {
                return !(n <= a) && !t.resolveDisabled(e);
              });
            case 3:
              var o = n
                .slice()
                .reverse()
                .findIndex(function (e) {
                  return !t.resolveDisabled(e);
                });
              return -1 === o ? o : n.length - 1 - o;
            case 4:
              return n.findIndex(function (n) {
                return t.resolveId(n) === e.id;
              });
            case 5:
              return null;
            default:
              !(function (e) {
                throw new Error("Unexpected object: " + e);
              })(e);
          }
        })();
      return -1 === o ? r : o;
    }
    function Vt(e) {
      for (
        var t = e.parentElement, n = null;
        t && !(t instanceof HTMLFieldSetElement);

      )
        t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
      var r = "" === (null == t ? void 0 : t.getAttribute("disabled"));
      return (
        (!r ||
          !(function (e) {
            if (!e) return !1;
            for (var t = e.previousElementSibling; null !== t; ) {
              if (t instanceof HTMLLegendElement) return !1;
              t = t.previousElementSibling;
            }
            return !0;
          })(n)) &&
        r
      );
    }
    function Wt(e) {
      return It.isServer
        ? null
        : e instanceof Node
        ? e.ownerDocument
        : null != e && e.hasOwnProperty("current") && e.current instanceof Node
        ? e.current.ownerDocument
        : document;
    }
    var Qt = [
        "[contentEditable=true]",
        "[tabindex]",
        "a[href]",
        "area[href]",
        "button:not([disabled])",
        "iframe",
        "input:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
      ]
        .map(function (e) {
          return "".concat(e, ":not([tabindex='-1'])");
        })
        .join(","),
      Kt = (function (e) {
        return (
          (e[(e.First = 1)] = "First"),
          (e[(e.Previous = 2)] = "Previous"),
          (e[(e.Next = 4)] = "Next"),
          (e[(e.Last = 8)] = "Last"),
          (e[(e.WrapAround = 16)] = "WrapAround"),
          (e[(e.NoScroll = 32)] = "NoScroll"),
          e
        );
      })(Kt || {}),
      qt = (function (e) {
        return (
          (e[(e.Error = 0)] = "Error"),
          (e[(e.Overflow = 1)] = "Overflow"),
          (e[(e.Success = 2)] = "Success"),
          (e[(e.Underflow = 3)] = "Underflow"),
          e
        );
      })(qt || {}),
      Gt = (function (e) {
        return (
          (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
        );
      })(Gt || {});
    function Yt() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : document.body;
      return null == e
        ? []
        : Array.from(e.querySelectorAll(Qt)).sort(function (e, t) {
            return Math.sign(
              (e.tabIndex || Number.MAX_SAFE_INTEGER) -
                (t.tabIndex || Number.MAX_SAFE_INTEGER)
            );
          });
    }
    var Xt = (function (e) {
      return (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e;
    })(Xt || {});
    function Jt(e) {
      var t,
        n,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return (
        e !== (null == (n = Wt(e)) ? void 0 : n.body) &&
        pt(
          r,
          (st((t = {}), 0, function () {
            return e.matches(Qt);
          }),
          st(t, 1, function () {
            for (var t = e; null !== t; ) {
              if (t.matches(Qt)) return !0;
              t = t.parentElement;
            }
            return !1;
          }),
          t)
        )
      );
    }
    function Zt(e) {
      var t = Wt(e);
      _t().nextFrame(function () {
        t &&
          !Jt(t.activeElement, 0) &&
          (function (e) {
            null == e || e.focus({ preventScroll: !0 });
          })(e);
      });
    }
    var en = (function (e) {
      return (
        (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
      );
    })(en || {});
    "undefined" != typeof window &&
      "undefined" != typeof document &&
      (document.addEventListener(
        "keydown",
        function (e) {
          e.metaKey ||
            e.altKey ||
            e.ctrlKey ||
            (document.documentElement.dataset.headlessuiFocusVisible = "");
        },
        !0
      ),
      document.addEventListener(
        "click",
        function (e) {
          1 === e.detail
            ? delete document.documentElement.dataset.headlessuiFocusVisible
            : 0 === e.detail &&
              (document.documentElement.dataset.headlessuiFocusVisible = "");
        },
        !0
      ));
    var tn = ["textarea", "input"].join(",");
    function nn(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : function (e) {
              return e;
            };
      return e.slice().sort(function (e, n) {
        var r = t(e),
          a = t(n);
        if (null === r || null === a) return 0;
        var o = r.compareDocumentPosition(a);
        return o & Node.DOCUMENT_POSITION_FOLLOWING
          ? -1
          : o & Node.DOCUMENT_POSITION_PRECEDING
          ? 1
          : 0;
      });
    }
    function rn(e, t) {
      return (function (e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.sorted,
          a = void 0 === r || r,
          o = n.relativeTo,
          l = void 0 === o ? null : o,
          i = n.skipElements,
          u = void 0 === i ? [] : i,
          c = Array.isArray(e)
            ? e.length > 0
              ? e[0].ownerDocument
              : document
            : e.ownerDocument,
          s = Array.isArray(e) ? (a ? nn(e) : e) : Yt(e);
        u.length > 0 &&
          s.length > 1 &&
          (s = s.filter(function (e) {
            return !u.includes(e);
          })),
          (l = null != l ? l : c.activeElement);
        var f,
          d = (function () {
            if (5 & t) return 1;
            if (10 & t) return -1;
            throw new Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          p = (function () {
            if (1 & t) return 0;
            if (2 & t) return Math.max(0, s.indexOf(l)) - 1;
            if (4 & t) return Math.max(0, s.indexOf(l)) + 1;
            if (8 & t) return s.length - 1;
            throw new Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          h = 32 & t ? { preventScroll: !0 } : {},
          v = 0,
          m = s.length;
        do {
          if (v >= m || v + m <= 0) return 0;
          var g = p + v;
          if (16 & t) g = (g + m) % m;
          else {
            if (g < 0) return 3;
            if (g >= m) return 1;
          }
          null == (f = s[g]) || f.focus(h), (v += d);
        } while (f !== c.activeElement);
        return (
          6 & t &&
            (function (e) {
              var t, n;
              return (
                null !=
                  (n =
                    null == (t = null == e ? void 0 : e.matches)
                      ? void 0
                      : t.call(e, tn)) && n
              );
            })(f) &&
            f.select(),
          2
        );
      })(Yt(), t, { relativeTo: e });
    }
    function an(e, t, n) {
      var r = zt(t);
      (0, d.useEffect)(
        function () {
          function t(e) {
            r.current(e);
          }
          return (
            document.addEventListener(e, t, n),
            function () {
              return document.removeEventListener(e, t, n);
            }
          );
        },
        [e, n]
      );
    }
    var on = (0, d.createContext)(null);
    on.displayName = "OpenClosedContext";
    var ln = (function (e) {
      return (
        (e[(e.Open = 1)] = "Open"),
        (e[(e.Closed = 2)] = "Closed"),
        (e[(e.Closing = 4)] = "Closing"),
        (e[(e.Opening = 8)] = "Opening"),
        e
      );
    })(ln || {});
    function un(e) {
      var t = e.value,
        n = e.children;
      return d.createElement(on.Provider, { value: t }, n);
    }
    function cn(e) {
      var t;
      if (e.type) return e.type;
      var n = null != (t = e.as) ? t : "button";
      return "string" == typeof n && "button" === n.toLowerCase()
        ? "button"
        : void 0;
    }
    function sn(e, t) {
      var n = s(
          (0, d.useState)(function () {
            return cn(e);
          }),
          2
        ),
        r = n[0],
        a = n[1];
      return (
        jt(
          function () {
            a(cn(e));
          },
          [e.type, e.as]
        ),
        jt(
          function () {
            r ||
              (t.current &&
                t.current instanceof HTMLButtonElement &&
                !t.current.hasAttribute("type") &&
                a("button"));
          },
          [r, t]
        ),
        r
      );
    }
    function fn(e) {
      return [e.screenX, e.screenY];
    }
    function dn() {
      var e = (0, d.useRef)([-1, -1]);
      return {
        wasMoved: function (t) {
          var n = fn(t);
          return (
            (e.current[0] !== n[0] || e.current[1] !== n[1]) &&
            ((e.current = n), !0)
          );
        },
        update: function (t) {
          e.current = fn(t);
        },
      };
    }
    var pn,
      hn = ["id"],
      vn = ["id"],
      mn = ["id", "disabled"],
      gn = (function (e) {
        return (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e;
      })(gn || {}),
      yn = (function (e) {
        return (
          (e[(e.Pointer = 0)] = "Pointer"), (e[(e.Other = 1)] = "Other"), e
        );
      })(yn || {}),
      bn = (function (e) {
        return (
          (e[(e.OpenMenu = 0)] = "OpenMenu"),
          (e[(e.CloseMenu = 1)] = "CloseMenu"),
          (e[(e.GoToItem = 2)] = "GoToItem"),
          (e[(e.Search = 3)] = "Search"),
          (e[(e.ClearSearch = 4)] = "ClearSearch"),
          (e[(e.RegisterItem = 5)] = "RegisterItem"),
          (e[(e.UnregisterItem = 6)] = "UnregisterItem"),
          e
        );
      })(bn || {});
    function wn(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : function (e) {
                return e;
              },
        n = null !== e.activeItemIndex ? e.items[e.activeItemIndex] : null,
        r = nn(t(e.items.slice()), function (e) {
          return e.dataRef.current.domRef.current;
        }),
        a = n ? r.indexOf(n) : null;
      return -1 === a && (a = null), { items: r, activeItemIndex: a };
    }
    var kn =
        (st((pn = {}), 1, function (e) {
          return 1 === e.menuState
            ? e
            : dt(dt({}, e), {}, { activeItemIndex: null, menuState: 1 });
        }),
        st(pn, 0, function (e) {
          return 0 === e.menuState ? e : dt(dt({}, e), {}, { menuState: 0 });
        }),
        st(pn, 2, function (e, t) {
          var n,
            r = wn(e),
            a = Ht(t, {
              resolveItems: function () {
                return r.items;
              },
              resolveActiveIndex: function () {
                return r.activeItemIndex;
              },
              resolveId: function (e) {
                return e.id;
              },
              resolveDisabled: function (e) {
                return e.dataRef.current.disabled;
              },
            });
          return dt(
            dt(dt({}, e), r),
            {},
            {
              searchQuery: "",
              activeItemIndex: a,
              activationTrigger: null != (n = t.trigger) ? n : 1,
            }
          );
        }),
        st(pn, 3, function (e, t) {
          var n = "" !== e.searchQuery ? 0 : 1,
            r = e.searchQuery + t.value.toLowerCase(),
            a = (
              null !== e.activeItemIndex
                ? e.items
                    .slice(e.activeItemIndex + n)
                    .concat(e.items.slice(0, e.activeItemIndex + n))
                : e.items
            ).find(function (e) {
              var t;
              return (
                (null == (t = e.dataRef.current.textValue)
                  ? void 0
                  : t.startsWith(r)) && !e.dataRef.current.disabled
              );
            }),
            o = a ? e.items.indexOf(a) : -1;
          return -1 === o || o === e.activeItemIndex
            ? dt(dt({}, e), {}, { searchQuery: r })
            : dt(
                dt({}, e),
                {},
                { searchQuery: r, activeItemIndex: o, activationTrigger: 1 }
              );
        }),
        st(pn, 4, function (e) {
          return "" === e.searchQuery
            ? e
            : dt(
                dt({}, e),
                {},
                { searchQuery: "", searchActiveItemIndex: null }
              );
        }),
        st(pn, 5, function (e, t) {
          var n = wn(e, function (e) {
            return [].concat(g(e), [{ id: t.id, dataRef: t.dataRef }]);
          });
          return dt(dt({}, e), n);
        }),
        st(pn, 6, function (e, t) {
          var n = wn(e, function (e) {
            var n = e.findIndex(function (e) {
              return e.id === t.id;
            });
            return -1 !== n && e.splice(n, 1), e;
          });
          return dt(dt(dt({}, e), n), {}, { activationTrigger: 1 });
        }),
        pn),
      xn = (0, d.createContext)(null);
    function Sn(e) {
      var t = (0, d.useContext)(xn);
      if (null === t) {
        var n = new Error(
          "<".concat(e, " /> is missing a parent <Menu /> component.")
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(n, Sn), n);
      }
      return t;
    }
    function En(e, t) {
      return pt(t.type, kn, e, t);
    }
    xn.displayName = "MenuContext";
    var Cn = d.Fragment;
    var Pn = wt.RenderStrategy | wt.Static;
    var Nn = d.Fragment;
    var _n = Ct(function (e, t) {
        var n,
          r = (0, d.useReducer)(En, {
            menuState: 1,
            buttonRef: (0, d.createRef)(),
            itemsRef: (0, d.createRef)(),
            items: [],
            searchQuery: "",
            activeItemIndex: null,
            activationTrigger: 1,
          }),
          a = s(r, 2),
          o = a[0],
          l = o.menuState,
          i = o.itemsRef,
          u = o.buttonRef,
          c = a[1],
          f = Ut(t);
        !(function (e, t) {
          var n =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            r = (0, d.useRef)(!1);
          function a(n, a) {
            if (r.current && !n.defaultPrevented) {
              var o = (function e(t) {
                  return "function" == typeof t
                    ? e(t())
                    : Array.isArray(t) || t instanceof Set
                    ? t
                    : [t];
                })(e),
                l = a(n);
              if (null !== l && l.getRootNode().contains(l)) {
                var i,
                  u = O(o);
                try {
                  for (u.s(); !(i = u.n()).done; ) {
                    var c = i.value;
                    if (null !== c) {
                      var s = c instanceof HTMLElement ? c : c.current;
                      if (
                        (null != s && s.contains(l)) ||
                        (n.composed && n.composedPath().includes(s))
                      )
                        return;
                    }
                  }
                } catch (f) {
                  u.e(f);
                } finally {
                  u.f();
                }
                return (
                  !Jt(l, Xt.Loose) && -1 !== l.tabIndex && n.preventDefault(),
                  t(n, l)
                );
              }
            }
          }
          (0, d.useEffect)(
            function () {
              requestAnimationFrame(function () {
                r.current = n;
              });
            },
            [n]
          );
          var o = (0, d.useRef)(null);
          an(
            "mousedown",
            function (e) {
              var t, n;
              r.current &&
                (o.current =
                  (null ==
                  (n = null == (t = e.composedPath) ? void 0 : t.call(e))
                    ? void 0
                    : n[0]) || e.target);
            },
            !0
          ),
            an(
              "click",
              function (e) {
                o.current &&
                  (a(e, function () {
                    return o.current;
                  }),
                  (o.current = null));
              },
              !0
            ),
            an(
              "blur",
              function (e) {
                return a(e, function () {
                  return window.document.activeElement instanceof
                    HTMLIFrameElement
                    ? window.document.activeElement
                    : null;
                });
              },
              !0
            );
        })(
          [u, i],
          function (e, t) {
            var n;
            c({ type: 1 }),
              Jt(t, Xt.Loose) ||
                (e.preventDefault(), null == (n = u.current) || n.focus());
          },
          0 === l
        );
        var p = Mt(function () {
            c({ type: 1 });
          }),
          h = (0, d.useMemo)(
            function () {
              return { open: 0 === l, close: p };
            },
            [l, p]
          ),
          v = e,
          m = { ref: f };
        return d.createElement(
          xn.Provider,
          { value: r },
          d.createElement(
            un,
            {
              value: pt(
                l,
                ((n = {}), st(n, 0, ln.Open), st(n, 1, ln.Closed), n)
              ),
            },
            xt({
              ourProps: m,
              theirProps: v,
              slot: h,
              defaultTag: Cn,
              name: "Menu",
            })
          )
        );
      }),
      Ln = Ct(function (e, t) {
        var n,
          r = At(),
          a = e.id,
          o = void 0 === a ? "headlessui-menu-button-".concat(r) : a,
          l = ct(e, hn),
          i = s(Sn("Menu.Button"), 2),
          u = i[0],
          c = i[1],
          f = Ut(u.buttonRef, t),
          p = Lt(),
          h = Mt(function (e) {
            switch (e.key) {
              case Bt.Space:
              case Bt.Enter:
              case Bt.ArrowDown:
                e.preventDefault(),
                  e.stopPropagation(),
                  c({ type: 0 }),
                  p.nextFrame(function () {
                    return c({ type: 2, focus: $t.First });
                  });
                break;
              case Bt.ArrowUp:
                e.preventDefault(),
                  e.stopPropagation(),
                  c({ type: 0 }),
                  p.nextFrame(function () {
                    return c({ type: 2, focus: $t.Last });
                  });
            }
          }),
          v = Mt(function (e) {
            if (e.key === Bt.Space) e.preventDefault();
          }),
          m = Mt(function (t) {
            if (Vt(t.currentTarget)) return t.preventDefault();
            e.disabled ||
              (0 === u.menuState
                ? (c({ type: 1 }),
                  p.nextFrame(function () {
                    var e;
                    return null == (e = u.buttonRef.current)
                      ? void 0
                      : e.focus({ preventScroll: !0 });
                  }))
                : (t.preventDefault(), c({ type: 0 })));
          }),
          g = (0, d.useMemo)(
            function () {
              return { open: 0 === u.menuState };
            },
            [u]
          );
        return xt({
          ourProps: {
            ref: f,
            id: o,
            type: sn(e, u.buttonRef),
            "aria-haspopup": "menu",
            "aria-controls": null == (n = u.itemsRef.current) ? void 0 : n.id,
            "aria-expanded": e.disabled ? void 0 : 0 === u.menuState,
            onKeyDown: h,
            onKeyUp: v,
            onClick: m,
          },
          theirProps: l,
          slot: g,
          defaultTag: "button",
          name: "Menu.Button",
        });
      }),
      On = Ct(function (e, t) {
        var n,
          r,
          a = At(),
          o = e.id,
          l = void 0 === o ? "headlessui-menu-items-".concat(a) : o,
          i = ct(e, vn),
          u = s(Sn("Menu.Items"), 2),
          c = u[0],
          f = u[1],
          p = Ut(c.itemsRef, t),
          h = (function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return (0, d.useMemo)(function () {
              return Wt.apply(void 0, t);
            }, [].concat(t));
          })(c.itemsRef),
          v = Lt(),
          m = (0, d.useContext)(on),
          g = null !== m ? (m & ln.Open) === ln.Open : 0 === c.menuState;
        (0, d.useEffect)(
          function () {
            var e = c.itemsRef.current;
            e &&
              0 === c.menuState &&
              e !== (null == h ? void 0 : h.activeElement) &&
              e.focus({ preventScroll: !0 });
          },
          [c.menuState, c.itemsRef, h]
        ),
          (function (e) {
            var t = e.container,
              n = e.accept,
              r = e.walk,
              a = e.enabled,
              o = void 0 === a || a,
              l = (0, d.useRef)(n),
              i = (0, d.useRef)(r);
            (0, d.useEffect)(
              function () {
                (l.current = n), (i.current = r);
              },
              [n, r]
            ),
              jt(
                function () {
                  if (t && o) {
                    var e = Wt(t);
                    if (e)
                      for (
                        var n = l.current,
                          r = i.current,
                          a = Object.assign(
                            function (e) {
                              return n(e);
                            },
                            { acceptNode: n }
                          ),
                          u = e.createTreeWalker(
                            t,
                            NodeFilter.SHOW_ELEMENT,
                            a,
                            !1
                          );
                        u.nextNode();

                      )
                        r(u.currentNode);
                  }
                },
                [t, o, l, i]
              );
          })({
            container: c.itemsRef.current,
            enabled: 0 === c.menuState,
            accept: function (e) {
              return "menuitem" === e.getAttribute("role")
                ? NodeFilter.FILTER_REJECT
                : e.hasAttribute("role")
                ? NodeFilter.FILTER_SKIP
                : NodeFilter.FILTER_ACCEPT;
            },
            walk: function (e) {
              e.setAttribute("role", "none");
            },
          });
        var y = Mt(function (e) {
            var t, n;
            switch ((v.dispose(), e.key)) {
              case Bt.Space:
                if ("" !== c.searchQuery)
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    f({ type: 3, value: e.key })
                  );
              case Bt.Enter:
                if (
                  (e.preventDefault(),
                  e.stopPropagation(),
                  f({ type: 1 }),
                  null !== c.activeItemIndex)
                )
                  null ==
                    (n =
                      null == (t = c.items[c.activeItemIndex].dataRef.current)
                        ? void 0
                        : t.domRef.current) || n.click();
                Zt(c.buttonRef.current);
                break;
              case Bt.ArrowDown:
                return (
                  e.preventDefault(),
                  e.stopPropagation(),
                  f({ type: 2, focus: $t.Next })
                );
              case Bt.ArrowUp:
                return (
                  e.preventDefault(),
                  e.stopPropagation(),
                  f({ type: 2, focus: $t.Previous })
                );
              case Bt.Home:
              case Bt.PageUp:
                return (
                  e.preventDefault(),
                  e.stopPropagation(),
                  f({ type: 2, focus: $t.First })
                );
              case Bt.End:
              case Bt.PageDown:
                return (
                  e.preventDefault(),
                  e.stopPropagation(),
                  f({ type: 2, focus: $t.Last })
                );
              case Bt.Escape:
                e.preventDefault(),
                  e.stopPropagation(),
                  f({ type: 1 }),
                  _t().nextFrame(function () {
                    var e;
                    return null == (e = c.buttonRef.current)
                      ? void 0
                      : e.focus({ preventScroll: !0 });
                  });
                break;
              case Bt.Tab:
                e.preventDefault(),
                  e.stopPropagation(),
                  f({ type: 1 }),
                  _t().nextFrame(function () {
                    rn(c.buttonRef.current, e.shiftKey ? Kt.Previous : Kt.Next);
                  });
                break;
              default:
                1 === e.key.length &&
                  (f({ type: 3, value: e.key }),
                  v.setTimeout(function () {
                    return f({ type: 4 });
                  }, 350));
            }
          }),
          b = Mt(function (e) {
            if (e.key === Bt.Space) e.preventDefault();
          }),
          w = (0, d.useMemo)(
            function () {
              return { open: 0 === c.menuState };
            },
            [c]
          );
        return xt({
          ourProps: {
            "aria-activedescendant":
              null === c.activeItemIndex ||
              null == (n = c.items[c.activeItemIndex])
                ? void 0
                : n.id,
            "aria-labelledby":
              null == (r = c.buttonRef.current) ? void 0 : r.id,
            id: l,
            onKeyDown: y,
            onKeyUp: b,
            role: "menu",
            tabIndex: 0,
            ref: p,
          },
          theirProps: i,
          slot: w,
          defaultTag: "div",
          features: Pn,
          visible: g,
          name: "Menu.Items",
        });
      }),
      Rn = Ct(function (e, t) {
        var n = At(),
          r = e.id,
          a = void 0 === r ? "headlessui-menu-item-".concat(n) : r,
          o = e.disabled,
          l = void 0 !== o && o,
          i = ct(e, mn),
          u = s(Sn("Menu.Item"), 2),
          c = u[0],
          f = u[1],
          p = null !== c.activeItemIndex && c.items[c.activeItemIndex].id === a,
          h = (0, d.useRef)(null),
          v = Ut(t, h);
        jt(
          function () {
            if (0 === c.menuState && p && 0 !== c.activationTrigger) {
              var e = _t();
              return (
                e.requestAnimationFrame(function () {
                  var e, t;
                  null ==
                    (t = null == (e = h.current) ? void 0 : e.scrollIntoView) ||
                    t.call(e, { block: "nearest" });
                }),
                e.dispose
              );
            }
          },
          [h, p, c.menuState, c.activationTrigger, c.activeItemIndex]
        );
        var m = (0, d.useRef)({ disabled: l, domRef: h });
        jt(
          function () {
            m.current.disabled = l;
          },
          [m, l]
        ),
          jt(
            function () {
              var e, t;
              m.current.textValue =
                null == (t = null == (e = h.current) ? void 0 : e.textContent)
                  ? void 0
                  : t.toLowerCase();
            },
            [m, h]
          ),
          jt(
            function () {
              return (
                f({ type: 5, id: a, dataRef: m }),
                function () {
                  return f({ type: 6, id: a });
                }
              );
            },
            [m, a]
          );
        var g = Mt(function () {
            f({ type: 1 });
          }),
          y = Mt(function (e) {
            if (l) return e.preventDefault();
            f({ type: 1 }), Zt(c.buttonRef.current);
          }),
          b = Mt(function () {
            if (l) return f({ type: 2, focus: $t.Nothing });
            f({ type: 2, focus: $t.Specific, id: a });
          }),
          w = dn(),
          k = Mt(function (e) {
            return w.update(e);
          }),
          x = Mt(function (e) {
            w.wasMoved(e) &&
              (l || p || f({ type: 2, focus: $t.Specific, id: a, trigger: 0 }));
          }),
          S = Mt(function (e) {
            w.wasMoved(e) && (l || (p && f({ type: 2, focus: $t.Nothing })));
          }),
          E = (0, d.useMemo)(
            function () {
              return { active: p, disabled: l, close: g };
            },
            [p, l, g]
          );
        return xt({
          ourProps: {
            id: a,
            ref: v,
            role: "menuitem",
            tabIndex: !0 === l ? void 0 : -1,
            "aria-disabled": !0 === l || void 0,
            disabled: void 0,
            onClick: y,
            onFocus: b,
            onPointerEnter: k,
            onMouseEnter: k,
            onPointerMove: x,
            onMouseMove: x,
            onPointerLeave: S,
            onMouseLeave: S,
          },
          theirProps: i,
          slot: E,
          defaultTag: Nn,
          name: "Menu.Item",
        });
      }),
      Tn = Object.assign(_n, { Button: Ln, Items: On, Item: Rn }),
      In = function (e) {
        var t = e.children,
          n = e.menuItens,
          r = e.onClick;
        e.size;
        return (0, p.jsxs)(Tn, {
          as: "div",
          className: "relative inline-block",
          children: [
            (0, p.jsx)(Tn.Button, {
              className:
                "inline-flex w-full justify-center rounded-md text-sm font-medium text-white",
              children: t,
            }),
            (0, p.jsx)("div", {
              className: "relative",
              children: (0, p.jsx)(Tn.Items, {
                className:
                  "origin-top-right absolute right-0 mt-2 w-28 bg-white rounded border shadow-md z-20",
                children:
                  n &&
                  n.map(function (e, t) {
                    return (0, p.jsx)(
                      "div",
                      {
                        onClick: function () {
                          return r(e.onClick);
                        },
                        children: (0, p.jsx)(Tn.Item, {
                          children: (0, p.jsx)("span", {
                            className:
                              "block px-2 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200 cursor-pointer",
                            children: e.label,
                          }),
                        }),
                      },
                      t
                    );
                  }),
              }),
            }),
          ],
        });
      },
      jn = function (e) {
        var t = e.columns,
          n = e.values,
          r = e.menuItems,
          a = s((0, d.useState)(), 2),
          o = a[0],
          l = a[1],
          i = function (e, t) {
            var n,
              r = e.key.split(".");
            if (r.length > 1) {
              var a,
                o,
                l = O(r);
              try {
                for (l.s(); !(o = l.n()).done; ) {
                  var i = o.value;
                  a = a ? a[i] : t[i];
                }
              } catch (u) {
                l.e(u);
              } finally {
                l.f();
              }
              n = a;
            } else n = t[e.key];
            return (
              e.transform && (n = e.transform(n)),
              e.component && (n = e.component(n, t)),
              n
            );
          },
          u = function (e) {
            o && e(o);
          };
        return (0, p.jsxs)("div", {
          className: "w-full",
          children: [
            (0, p.jsxs)("table", {
              className:
                "sm:table hidden border-collapse table-auto w-full text-sm ",
              children: [
                (0, p.jsx)("thead", {
                  children: (0, p.jsxs)("tr", {
                    children: [
                      null === t || void 0 === t
                        ? void 0
                        : t.map(function (e, t) {
                            return (0,
                            p.jsx)("th", { className: "border-b-2 border-t-2 font-semibold p-3 text-gray-700 text-left first:pl-5 last:pr-5", children: e.columnName }, t);
                          }),
                      r &&
                        (0, p.jsx)("th", {
                          className:
                            "border-b-2 border-t-2 font-semibold p-3 text-gray-700 text-left first:pl-5 last:pr-5",
                        }),
                    ],
                  }),
                }),
                (0, p.jsx)("tbody", {
                  className: "bg-white border-b-2",
                  children:
                    null === n || void 0 === n
                      ? void 0
                      : n.map(function (e) {
                          return (0, p.jsxs)(
                            "tr",
                            {
                              className: "hover:bg-gray-100 transition-all",
                              children: [
                                null === t || void 0 === t
                                  ? void 0
                                  : t.map(function (t, n) {
                                      return (0,
                                      p.jsx)("td", { className: "p-3 text-gray-500 first:pl-5 last:pr-5", children: i(t, e) }, n);
                                    }),
                                r &&
                                  (0, p.jsx)("td", {
                                    className:
                                      "first:w-72 last:w-2 p-3 text-gray-500",
                                    children: (0, p.jsx)(In, {
                                      menuItens: r,
                                      onClick: u,
                                      size: "default",
                                      children: (0, p.jsx)("div", {
                                        className:
                                          "w-4 h-4 cursor-pointer text-gray-700",
                                        onClick: function () {
                                          return (t = e.id), void l(t);
                                          var t;
                                        },
                                        children: (0, p.jsx)("span", {
                                          children: "AQUI",
                                        }),
                                      }),
                                    }),
                                  }),
                              ],
                            },
                            e.id
                          );
                        }),
                }),
              ],
            }),
            0 == (null === n || void 0 === n ? void 0 : n.length) &&
              (0, p.jsx)("div", {
                className: "flex w-full justify-center py-10",
                children: (0, p.jsx)("span", {
                  className: "text-sm font-semibold text-gray-600",
                  children: "Nenhum registro encontrado",
                }),
              }),
          ],
        });
      },
      zn = function (e) {
        var t = e.onClickEditProduto,
          n = e.onClickDeleteProduto,
          r = e.product;
        return (0, p.jsx)(p.Fragment, {
          children: (0, p.jsx)("div", {
            className: "flex w-full",
            children: (0, p.jsx)(jn, {
              columns: [
                { columnName: "Id do Produto", key: "idProduto" },
                { columnName: "Produto", key: "produto" },
                { columnName: "Categoria", key: "categoria" },
                { columnName: "Estoc\xe1vel", key: "estoc\xe1vel" },
                { columnName: "Fundibilidade", key: "fundibilidade" },
                { columnName: "Quantidade", key: "quantidade" },
                { columnName: "Pre\xe7o", key: "pre\xe7o" },
                {
                  columnName: "",
                  key: "",
                  component: function (e, t) {
                    return (0, p.jsx)("div", {
                      className: "flex justify-end space-x-2",
                      children: (0, p.jsx)("img", {
                        src: et + "trash.svg",
                        alt: "trash",
                        className: "w-6 h-6",
                        onClick: function () {
                          return n(t);
                        },
                      }),
                    });
                  },
                },
                {
                  columnName: "",
                  key: "",
                  component: function (e, n) {
                    return (0, p.jsx)("div", {
                      className: "flex justify-end space-x-2",
                      children: (0, p.jsx)("img", {
                        src: et + "edit.svg",
                        alt: "edit",
                        className: "w-6 h-6",
                        onClick: function () {
                          return t(n.id);
                        },
                      }),
                    });
                  },
                },
              ],
              values: r,
            }),
          }),
        });
      },
      Fn = function () {
        var e = s((0, d.useState)(), 2),
          t = (e[0], e[1]),
          n = s((0, d.useState)(), 2),
          a = n[0],
          l = (n[1], Ee()),
          i = function (e) {
            t(e);
          },
          u = (function () {
            var e = o(
              r().mark(function e(t) {
                return r().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return (0, p.jsxs)("div", {
          className: "flex flex-col mx-8",
          children: [
            (0, p.jsx)("div", {
              className: "flex bg-white mt-6 rounded-[30px] p-6 w-full",
              children: (0, p.jsx)(zn, {
                onClickEditProduto: function (e) {
                  l("/product/".concat(e));
                },
                onClickDeleteProduto: function () {
                  return i;
                },
              }),
            }),
            (0, p.jsx)("div", {
              children: (0, p.jsx)(ut, {
                currentPage:
                  null === a || void 0 === a ? void 0 : a.results.length,
                page: null === a || void 0 === a ? void 0 : a.currentPage,
                pageSize: null === a || void 0 === a ? void 0 : a.limit,
                totalItems: null === a || void 0 === a ? void 0 : a.totalItems,
                onChangePage: u,
              }),
            }),
          ],
        });
      },
      Mn = function () {
        return (0, p.jsx)(Qe, {
          children: (0, p.jsx)(rt, {
            children: (0, p.jsxs)(Ae, {
              children: [
                (0, p.jsx)(De, { index: !0, path: Ze.HOME, Component: at }),
                (0, p.jsx)(De, { path: Ze.LIST_PRODUCT, Component: Fn }),
              ],
            }),
          }),
        });
      },
      Dn = function () {
        return (0, p.jsx)(v, { children: (0, p.jsx)(Mn, {}) });
      };
    e.createRoot(document.getElementById("admin-root")).render(
      (0, p.jsx)(Dn, {})
    );
  })();
})();
//# sourceMappingURL=admin-web.js.map
