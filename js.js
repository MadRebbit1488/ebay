/** eBay Autocomplete - 2023-11-07T23:24:56Z **/
!(function (i) {
  var a = {};
  function n(e) {
    var t;
    return (
      a[e] ||
      ((t = a[e] =
        {
          i: e,
          l: !1,
          exports: {},
        }),
      i[e].call(t.exports, t, t.exports, n),
      (t.l = !0),
      t)
    ).exports;
  }
  (n.m = i),
    (n.c = a),
    (n.d = function (e, t, i) {
      n.o(e, t) ||
        Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: i,
        });
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function (L, N, P) {
    const t = (GH.__private && GH.__private.AC) || {};
    var r,
      l,
      E,
      i,
      R,
      H,
      u,
      h,
      M,
      d,
      B,
      o,
      a,
      g,
      q,
      z,
      p,
      $,
      n,
      m,
      f,
      V,
      v,
      b,
      K,
      y,
      Q,
      e = t.SearchBox || {};
    function U(e, t) {
      var i,
        a,
        n,
        s = e.nodeName.toLowerCase();
      return "area" === s
        ? ((a = (i = e.parentNode).name),
          !(
            !e.href ||
            !a ||
            "map" !== i.nodeName.toLowerCase() ||
            !(n = r("img[usemap=#" + a + "]")[0])
          ) && W(n))
        : (/input|select|textarea|button|object/.test(s)
            ? !e.disabled
            : ("a" === s && e.href) || t) && W(e);
    }
    function W(e) {
      return (
        r.expr.filters.visible(e) &&
        !r(e)
          .parents()
          .addBack()
          .filter(function () {
            return "hidden" === r.css(this, "visibility");
          }).length
      );
    }
    (ebayAC = {
      gh: {
        pageID: (t.getPageID ? t : GH.Util).getPageID(),
        siteID: (t.getSiteID ? t : GH.Util).getSiteID(),
        compID: t.componentID || GH.componentID,
        formID: e.formID || GH.SearchBox.formID,
        outerBoxID: e.outerBoxID || GH.SearchBox.outerBoxID,
        innerBoxID: e.innerBoxID || GH.SearchBox.innerBoxID,
        searchBoxID: e.controlID || GH.SearchBox.controlID,
        acDisabledClass:
          e.SearchBox_AutoComplete_acDisabledClass ||
          GH.SearchBox_AutoComplete.acDisabledClass,
        categorySelectID:
          t.CategorySelect_controlID || GH.CategorySelect.controlID,
        btnID: e.btnID || GH.SearchBox.btnID,
        isGeo: (t.isGeo ? t : GH.Util).isGeo(),
        isQAPool: (t.isQAPool ? t : GH.Util).isQAPool(),
        factorEnabled: function (e) {
          return (t.factorEnabled ? t : GH.Util).factorEnabled(e);
        },
        getPrevCategoryID: t.getPrevCategoryID || GH.Util.getPrevCategoryID,
        getBundle: t.getBundle || GH.Util.getBundle,
        mergeContent: t.mergeContent || GH.Util.mergeContent,
        getHref: t.getHref || GH.Util.getHref,
        cookieMethods: t.vCJar || GH.vCJar,
        jQ: t.jQ || GH.jQ,
      },
      debug: window.acDebugMode || !1,
      cacheAC: {},
      caretFlag: 0,
      caretPos: 0,
      xtTag: void 0,
      generateTrackID: function (e) {
        return (
          (ebayAC.gh.pageID ? "p" + ebayAC.gh.pageID + "." : "") +
          "m570" +
          (e ? ".l" + e : "")
        );
      },
      generateTrackImg: function (e) {
        return t.cTImg ? t.cTImg(e) : GH.Util.cTImg("/" + e);
      },
      useRegularAutoSug: function () {
        var e = /^(0|1|2|31|77|210|215|248)$/;
        return (
          ebayAC.gh.factorEnabled("ac4") && (e = /^(0|1|2|31|210|215|248)$/),
          !ebayAC.debug && e.test(ebayAC.gh.siteID)
        );
      },
      getAutocompleteDomainUrl: function (e) {
        return (
          "https://autosug." +
          (ebayAC.useRegularAutoSug()
            ? (ebayAC.gh.isQAPool ? "qa." : "") + "ebay"
            : "ebaystatic") +
          ".com" +
          "/autosug"
        );
      },
      trackingObj: {},
    }),
      (r = ebayAC.gh.jQ),
      (R = 0),
      (H = /^ui-id-\d+$/),
      (r.ui = r.ui || {}),
      r.extend(r.ui, {
        version: "1.10.2",
        keyCode: {
          BACKSPACE: 8,
          COMMA: 188,
          DELETE: 46,
          DOWN: 40,
          END: 35,
          ENTER: 13,
          ESCAPE: 27,
          HOME: 36,
          LEFT: 37,
          NUMPAD_ADD: 107,
          NUMPAD_DECIMAL: 110,
          NUMPAD_DIVIDE: 111,
          NUMPAD_ENTER: 108,
          NUMPAD_MULTIPLY: 106,
          NUMPAD_SUBTRACT: 109,
          PAGE_DOWN: 34,
          PAGE_UP: 33,
          PERIOD: 190,
          RIGHT: 39,
          SPACE: 32,
          TAB: 9,
          UP: 38,
        },
      }),
      r.fn.extend({
        focus:
          ((E = r.fn.focus),
          function (t, i) {
            return "number" == typeof t
              ? this.each(function () {
                  var e = this;
                  setTimeout(function () {
                    r(e).focus(), i && i.call(e);
                  }, t);
                })
              : E.apply(this, arguments);
          }),
        scrollParent: function () {
          var e = (
            (r.ui.ie && /(static|relative)/.test(this.css("position"))) ||
            /absolute/.test(this.css("position"))
              ? this.parents().filter(function () {
                  return (
                    /(relative|absolute|fixed)/.test(r.css(this, "position")) &&
                    /(auto|scroll)/.test(
                      r.css(this, "overflow") +
                        r.css(this, "overflow-y") +
                        r.css(this, "overflow-x")
                    )
                  );
                })
              : this.parents().filter(function () {
                  return /(auto|scroll)/.test(
                    r.css(this, "overflow") +
                      r.css(this, "overflow-y") +
                      r.css(this, "overflow-x")
                  );
                })
          ).eq(0);
          return /fixed/.test(this.css("position")) || !e.length
            ? r(document)
            : e;
        },
        zIndex: function (e) {
          if (e !== l) return this.css("zIndex", e);
          if (this.length)
            for (var t, i = r(this[0]); i.length && i[0] !== document; ) {
              if (
                ("absolute" === (t = i.css("position")) ||
                  "relative" === t ||
                  "fixed" === t) &&
                ((t = parseInt(i.css("zIndex"), 10)), !isNaN(t)) &&
                0 !== t
              )
                return t;
              i = i.parent();
            }
          return 0;
        },
        uniqueId: function () {
          return this.each(function () {
            this.id || (this.id = "ui-id-" + ++R);
          });
        },
        removeUniqueId: function () {
          return this.each(function () {
            H.test(this.id) && r(this).removeAttr("id");
          });
        },
      }),
      r.extend(r.expr[":"], {
        data: r.expr.createPseudo
          ? r.expr.createPseudo(function (t) {
              return function (e) {
                return !!r.data(e, t);
              };
            })
          : function (e, t, i) {
              return !!r.data(e, i[3]);
            },
        focusable: function (e) {
          return U(e, !isNaN(r.attr(e, "tabindex")));
        },
        tabbable: function (e) {
          var t = r.attr(e, "tabindex"),
            i = isNaN(t);
          return (i || 0 <= t) && U(e, !i);
        },
      }),
      r("<a>").outerWidth(1).jquery ||
        r.each(["Width", "Height"], function (e, i) {
          var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            a = i.toLowerCase(),
            s = {
              innerWidth: r.fn.innerWidth,
              innerHeight: r.fn.innerHeight,
              outerWidth: r.fn.outerWidth,
              outerHeight: r.fn.outerHeight,
            };
          function o(e, t, i, a) {
            return (
              r.each(n, function () {
                (t -= parseFloat(r.css(e, "padding" + this)) || 0),
                  i &&
                    (t -= parseFloat(r.css(e, "border" + this + "Width")) || 0),
                  a && (t -= parseFloat(r.css(e, "margin" + this)) || 0);
              }),
              t
            );
          }
          (r.fn["inner" + i] = function (e) {
            return e === l
              ? s["inner" + i].call(this)
              : this.each(function () {
                  r(this).css(a, o(this, e) + "px");
                });
          }),
            (r.fn["outer" + i] = function (e, t) {
              return "number" != typeof e
                ? s["outer" + i].call(this, e)
                : this.each(function () {
                    r(this).css(a, o(this, e, !0, t) + "px");
                  });
            });
        }),
      r.fn.addBack ||
        (r.fn.addBack = function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        }),
      r("<a>").data("a-b", "a").removeData("a-b").data("a-b") &&
        (r.fn.removeData =
          ((i = r.fn.removeData),
          function (e) {
            return arguments.length
              ? i.call(this, r.camelCase(e))
              : i.call(this);
          })),
      (r.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
      (r.support.selectstart =
        "onselectstart" in document.createElement("div")),
      r.fn.extend({
        disableSelection: function () {
          return this.bind(
            (r.support.selectstart ? "selectstart" : "mousedown") +
              ".ui-disableSelection",
            function (e) {
              e.preventDefault();
            }
          );
        },
        enableSelection: function () {
          return this.unbind(".ui-disableSelection");
        },
      }),
      r.extend(r.ui, {
        plugin: {
          add: function (e, t, i) {
            var a,
              n = r.ui[e].prototype;
            for (a in i)
              (n.plugins[a] = n.plugins[a] || []), n.plugins[a].push([t, i[a]]);
          },
          call: function (e, t, i) {
            var a,
              n = e.plugins[t];
            if (
              n &&
              e.element[0].parentNode &&
              11 !== e.element[0].parentNode.nodeType
            )
              for (a = 0; a < n.length; a++)
                e.options[n[a][0]] && n[a][1].apply(e.element, i);
          },
        },
        hasScroll: function (e, t) {
          var i;
          return (
            "hidden" !== r(e).css("overflow") &&
            ((i = !1),
            0 < e[(t = t && "left" === t ? "scrollLeft" : "scrollTop")] ||
              ((e[t] = 1), (i = 0 < e[t]), (e[t] = 0), i))
          );
        },
      }),
      (u = ebayAC.gh.jQ),
      (M = 0),
      (d = Array.prototype.slice),
      (B = u.cleanData),
      (u.cleanData = function (e) {
        for (var t, i = 0; null != (t = e[i]); i++)
          try {
            u(t).triggerHandler("remove");
          } catch (e) {}
        B(e);
      }),
      (u.widget = function (e, i, t) {
        var a,
          n,
          s,
          o,
          r = {},
          c = e.split(".")[0];
        (e = e.split(".")[1]),
          (a = c + "-" + e),
          t || ((t = i), (i = u.Widget)),
          (u.expr[":"][a.toLowerCase()] = function (e) {
            return !!u.data(e, a);
          }),
          (u[c] = u[c] || {}),
          (n = u[c][e]),
          (s = u[c][e] =
            function (e, t) {
              if (!this._createWidget) return new s(e, t);
              arguments.length && this._createWidget(e, t);
            }),
          u.extend(s, n, {
            version: t.version,
            _proto: u.extend({}, t),
            _childConstructors: [],
          }),
          ((o = new i()).options = u.widget.extend({}, o.options)),
          u.each(t, function (t, a) {
            function n() {
              return i.prototype[t].apply(this, arguments);
            }
            function s(e) {
              return i.prototype[t].apply(this, e);
            }
            u.isFunction(a)
              ? (r[t] = function () {
                  var e,
                    t = this._super,
                    i = this._superApply;
                  return (
                    (this._super = n),
                    (this._superApply = s),
                    (e = a.apply(this, arguments)),
                    (this._super = t),
                    (this._superApply = i),
                    e
                  );
                })
              : (r[t] = a);
          }),
          (s.prototype = u.widget.extend(
            o,
            {
              widgetEventPrefix: n ? o.widgetEventPrefix : e,
            },
            r,
            {
              constructor: s,
              namespace: c,
              widgetName: e,
              widgetFullName: a,
            }
          )),
          n
            ? (u.each(n._childConstructors, function (e, t) {
                var i = t.prototype;
                u.widget(i.namespace + "." + i.widgetName, s, t._proto);
              }),
              delete n._childConstructors)
            : i._childConstructors.push(s),
          u.widget.bridge(e, s);
      }),
      (u.widget.extend = function (e) {
        for (
          var t, i, a = d.call(arguments, 1), n = 0, s = a.length;
          n < s;
          n++
        )
          for (t in a[n])
            (i = a[n][t]),
              a[n].hasOwnProperty(t) &&
                i !== h &&
                (u.isPlainObject(i)
                  ? (e[t] = u.isPlainObject(e[t])
                      ? u.widget.extend({}, e[t], i)
                      : u.widget.extend({}, i))
                  : (e[t] = i));
        return e;
      }),
      (u.widget.bridge = function (s, t) {
        var o = t.prototype.widgetFullName || s;
        u.fn[s] = function (i) {
          var e = "string" == typeof i,
            a = d.call(arguments, 1),
            n = this;
          return (
            (i =
              !e && a.length ? u.widget.extend.apply(null, [i].concat(a)) : i),
            e
              ? this.each(function () {
                  var e,
                    t = u.data(this, o);
                  return t
                    ? u.isFunction(t[i]) && "_" !== i.charAt(0)
                      ? (e = t[i].apply(t, a)) !== t && e !== h
                        ? ((n = e && e.jquery ? n.pushStack(e.get()) : e), !1)
                        : void 0
                      : u.error(
                          "no such method '" +
                            i +
                            "' for " +
                            s +
                            " widget instance"
                        )
                    : u.error(
                        "cannot call methods on " +
                          s +
                          " prior to initialization; attempted to call method '" +
                          i +
                          "'"
                      );
                })
              : this.each(function () {
                  var e = u.data(this, o);
                  e
                    ? e.option(i || {})._init()
                    : u.data(this, o, new t(i, this));
                }),
            n
          );
        };
      }),
      (u.Widget = function () {}),
      (u.Widget._childConstructors = []),
      (u.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
          disabled: !1,
          create: null,
        },
        _createWidget: function (e, t) {
          (t = u(t || this.defaultElement || this)[0]),
            (this.element = u(t)),
            (this.uuid = M++),
            (this.eventNamespace = "." + this.widgetName + this.uuid),
            (this.options = u.widget.extend(
              {},
              this.options,
              this._getCreateOptions(),
              e
            )),
            (this.bindings = u()),
            (this.hoverable = u()),
            (this.focusable = u()),
            t !== this &&
              (u.data(t, this.widgetFullName, this),
              this._on(!0, this.element, {
                remove: function (e) {
                  e.target === t && this.destroy();
                },
              }),
              (this.document = u(t.style ? t.ownerDocument : t.document || t)),
              (this.window = u(
                this.document[0].defaultView || this.document[0].parentWindow
              ))),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init();
        },
        _getCreateOptions: u.noop,
        _getCreateEventData: u.noop,
        _create: u.noop,
        _init: u.noop,
        destroy: function () {
          this._destroy(),
            this.element
              .unbind(this.eventNamespace)
              .removeData(this.widgetName)
              .removeData(this.widgetFullName)
              .removeData(u.camelCase(this.widgetFullName)),
            this.widget()
              .unbind(this.eventNamespace)
              .removeAttr("aria-disabled")
              .removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus");
        },
        _destroy: u.noop,
        widget: function () {
          return this.element;
        },
        option: function (e, t) {
          var i,
            a,
            n,
            s = e;
          if (0 === arguments.length) return u.widget.extend({}, this.options);
          if ("string" == typeof e)
            if (((s = {}), (e = (i = e.split(".")).shift()), i.length)) {
              for (
                a = s[e] = u.widget.extend({}, this.options[e]), n = 0;
                n < i.length - 1;
                n++
              )
                (a[i[n]] = a[i[n]] || {}), (a = a[i[n]]);
              if (((e = i.pop()), t === h)) return a[e] === h ? null : a[e];
              a[e] = t;
            } else {
              if (t === h)
                return this.options[e] === h ? null : this.options[e];
              s[e] = t;
            }
          return this._setOptions(s), this;
        },
        _setOptions: function (e) {
          for (var t in e) this._setOption(t, e[t]);
          return this;
        },
        _setOption: function (e, t) {
          return (
            (this.options[e] = t),
            "disabled" === e &&
              (this.widget()
                .toggleClass(
                  this.widgetFullName + "-disabled ui-state-disabled",
                  !!t
                )
                .attr("aria-disabled", t),
              this.hoverable.removeClass("ui-state-hover"),
              this.focusable.removeClass("ui-state-focus")),
            this
          );
        },
        enable: function () {
          return this._setOption("disabled", !1);
        },
        disable: function () {
          return this._setOption("disabled", !0);
        },
        _on: function (n, s, e) {
          var o,
            r = this;
          "boolean" != typeof n && ((e = s), (s = n), (n = !1)),
            e
              ? ((s = o = u(s)), (this.bindings = this.bindings.add(s)))
              : ((e = s), (s = this.element), (o = this.widget())),
            u.each(e, function (e, t) {
              function i() {
                if (
                  n ||
                  (!0 !== r.options.disabled &&
                    !u(this).hasClass("ui-state-disabled"))
                )
                  return ("string" == typeof t ? r[t] : t).apply(r, arguments);
              }
              "string" != typeof t &&
                (i.guid = t.guid = t.guid || i.guid || u.guid++);
              var e = e.match(/^(\w+)\s*(.*)$/),
                a = e[1] + r.eventNamespace,
                e = e[2];
              e ? o.delegate(e, a, i) : s.bind(a, i);
            });
        },
        _off: function (e, t) {
          (t =
            (t || "").split(" ").join(this.eventNamespace + " ") +
            this.eventNamespace),
            e.unbind(t).undelegate(t);
        },
        _delay: function (e, t) {
          var i = this;
          return setTimeout(function () {
            return ("string" == typeof e ? i[e] : e).apply(i, arguments);
          }, t || 0);
        },
        _hoverable: function (e) {
          (this.hoverable = this.hoverable.add(e)),
            this._on(e, {
              mouseenter: function (e) {
                u(e.currentTarget).addClass("ui-state-hover");
              },
              mouseleave: function (e) {
                u(e.currentTarget).removeClass("ui-state-hover");
              },
            });
        },
        _focusable: function (e) {
          (this.focusable = this.focusable.add(e)),
            this._on(e, {
              focusin: function (e) {
                u(e.currentTarget).addClass("ui-state-focus");
              },
              focusout: function (e) {
                u(e.currentTarget).removeClass("ui-state-focus");
              },
            });
        },
        _trigger: function (e, t, i) {
          var a,
            n,
            s = this.options[e];
          if (
            ((i = i || {}),
            ((t = u.Event(t)).type = (
              e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e
            ).toLowerCase()),
            (t.target = this.element[0]),
            (n = t.originalEvent))
          )
            for (a in n) a in t || (t[a] = n[a]);
          return (
            this.element.trigger(t, i),
            !(
              (u.isFunction(s) &&
                !1 === s.apply(this.element[0], [t].concat(i))) ||
              t.isDefaultPrevented()
            )
          );
        },
      }),
      u.each(
        {
          show: "fadeIn",
          hide: "fadeOut",
        },
        function (s, o) {
          u.Widget.prototype["_" + s] = function (t, e, i) {
            var a = (e =
                "string" == typeof e
                  ? {
                      effect: e,
                    }
                  : e)
                ? (!0 !== e && "number" != typeof e && e.effect) || o
                : s,
              n = !u.isEmptyObject(
                (e =
                  "number" == typeof (e = e || {})
                    ? {
                        duration: e,
                      }
                    : e)
              );
            (e.complete = i),
              e.delay && t.delay(e.delay),
              n && u.effects && u.effects.effect[a]
                ? t[s](e)
                : a !== s && t[a]
                ? t[a](e.duration, e.easing, i)
                : t.queue(function (e) {
                    u(this)[s](), i && i.call(t[0]), e();
                  });
          };
        }
      );
    var _ = ebayAC.gh.jQ;
    _.ui = _.ui || {};
    var C,
      w = Math.max,
      k = Math.abs,
      O = Math.round,
      j = /left|center|right/,
      G = /top|center|bottom/,
      F = /[\+\-]\d+(\.[\d]+)?%?/,
      Y = /^\w+/,
      ee = /%$/,
      te = _.fn.position;
    function ie(e, t, i) {
      return [
        parseFloat(e[0]) * (ee.test(e[0]) ? t / 100 : 1),
        parseFloat(e[1]) * (ee.test(e[1]) ? i / 100 : 1),
      ];
    }
    function x(e, t) {
      return parseInt(_.css(e, t), 10) || 0;
    }
    (_.position = {
      scrollbarWidth: function () {
        var e, t, i;
        return void 0 !== C
          ? C
          : ((i = (t = _(
              "<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
            )).children()[0]),
            _("body").append(t),
            (e = i.offsetWidth),
            t.css("overflow", "scroll"),
            e === (i = i.offsetWidth) && (i = t[0].clientWidth),
            t.remove(),
            (C = e - i));
      },
      getScrollInfo: function (e) {
        var t = e.isWindow ? "" : e.element.css("overflow-x"),
          i = e.isWindow ? "" : e.element.css("overflow-y"),
          t =
            "scroll" === t ||
            ("auto" === t && e.width < e.element[0].scrollWidth);
        return {
          width:
            "scroll" === i ||
            ("auto" === i && e.height < e.element[0].scrollHeight)
              ? _.position.scrollbarWidth()
              : 0,
          height: t ? _.position.scrollbarWidth() : 0,
        };
      },
      getWithinInfo: function (e) {
        var e = _(e || window),
          t = _.isWindow(e[0]),
          i = {
            left: 0,
            top: 0,
          };
        return {
          element: e,
          isWindow: t,
          offset: (!t && e.offset()) || i,
          scrollLeft: e.scrollLeft(),
          scrollTop: e.scrollTop(),
          width: t ? e.width() : e.outerWidth(),
          height: t ? e.height() : e.outerHeight(),
        };
      },
    }),
      (_.fn.position = function (h) {
        if (!h || !h.of) return te.apply(this, arguments);
        h = _.extend({}, h);
        var d,
          g,
          p,
          m,
          f,
          e,
          v = _(h.of),
          b = _.position.getWithinInfo(h.within),
          y = _.position.getScrollInfo(b),
          C = (h.collision || "flip").split(" "),
          A = {},
          t =
            9 === (t = (e = v)[0]).nodeType
              ? {
                  width: e.width(),
                  height: e.height(),
                  offset: {
                    top: 0,
                    left: 0,
                  },
                }
              : _.isWindow(t)
              ? {
                  width: e.width(),
                  height: e.height(),
                  offset: {
                    top: e.scrollTop(),
                    left: e.scrollLeft(),
                  },
                }
              : t.preventDefault
              ? {
                  width: 0,
                  height: 0,
                  offset: {
                    top: t.pageY,
                    left: t.pageX,
                  },
                }
              : {
                  width: e.outerWidth(),
                  height: e.outerHeight(),
                  offset: e.offset(),
                };
        return (
          v[0].preventDefault && (h.at = "left top"),
          (g = t.width),
          (p = t.height),
          (f = _.extend({}, (m = t.offset))),
          _.each(["my", "at"], function () {
            var e,
              t,
              i = (h[this] || "").split(" ");
            ((i =
              1 === i.length
                ? j.test(i[0])
                  ? i.concat(["center"])
                  : G.test(i[0])
                  ? ["center"].concat(i)
                  : ["center", "center"]
                : i)[0] = j.test(i[0]) ? i[0] : "center"),
              (i[1] = G.test(i[1]) ? i[1] : "center"),
              (e = F.exec(i[0])),
              (t = F.exec(i[1])),
              (A[this] = [e ? e[0] : 0, t ? t[0] : 0]),
              (h[this] = [Y.exec(i[0])[0], Y.exec(i[1])[0]]);
          }),
          1 === C.length && (C[1] = C[0]),
          "right" === h.at[0]
            ? (f.left += g)
            : "center" === h.at[0] && (f.left += g / 2),
          "bottom" === h.at[1]
            ? (f.top += p)
            : "center" === h.at[1] && (f.top += p / 2),
          (d = ie(A.at, g, p)),
          (f.left += d[0]),
          (f.top += d[1]),
          this.each(function () {
            var i,
              e,
              o = _(this),
              r = o.outerWidth(),
              c = o.outerHeight(),
              t = x(this, "marginLeft"),
              a = x(this, "marginTop"),
              n = r + t + x(this, "marginRight") + y.width,
              s = c + a + x(this, "marginBottom") + y.height,
              l = _.extend({}, f),
              u = ie(A.my, o.outerWidth(), o.outerHeight());
            "right" === h.my[0]
              ? (l.left -= r)
              : "center" === h.my[0] && (l.left -= r / 2),
              "bottom" === h.my[1]
                ? (l.top -= c)
                : "center" === h.my[1] && (l.top -= c / 2),
              (l.left += u[0]),
              (l.top += u[1]),
              _.support.offsetFractions ||
                ((l.left = O(l.left)), (l.top = O(l.top))),
              (i = {
                marginLeft: t,
                marginTop: a,
              }),
              _.each(["left", "top"], function (e, t) {
                _.ui.position[C[e]] &&
                  _.ui.position[C[e]][t](l, {
                    targetWidth: g,
                    targetHeight: p,
                    elemWidth: r,
                    elemHeight: c,
                    collisionPosition: i,
                    collisionWidth: n,
                    collisionHeight: s,
                    offset: [d[0] + u[0], d[1] + u[1]],
                    my: h.my,
                    at: h.at,
                    within: b,
                    elem: o,
                  });
              }),
              h.using &&
                (e = function (e) {
                  var t = m.left - l.left,
                    i = t + g - r,
                    a = m.top - l.top,
                    n = a + p - c,
                    s = {
                      target: {
                        element: v,
                        left: m.left,
                        top: m.top,
                        width: g,
                        height: p,
                      },
                      element: {
                        element: o,
                        left: l.left,
                        top: l.top,
                        width: r,
                        height: c,
                      },
                      horizontal: i < 0 ? "left" : 0 < t ? "right" : "center",
                      vertical: n < 0 ? "top" : 0 < a ? "bottom" : "middle",
                    };
                  g < r && k(t + i) < g && (s.horizontal = "center"),
                    p < c && k(a + n) < p && (s.vertical = "middle"),
                    w(k(t), k(i)) > w(k(a), k(n))
                      ? (s.important = "horizontal")
                      : (s.important = "vertical"),
                    h.using.call(this, e, s);
                }),
              o.offset(
                _.extend(l, {
                  using: e,
                })
              );
          })
        );
      }),
      (_.ui.position = {
        fit: {
          left: function (e, t) {
            var i,
              a = t.within,
              n = a.isWindow ? a.scrollLeft : a.offset.left,
              a = a.width,
              s = e.left - t.collisionPosition.marginLeft,
              o = n - s,
              r = s + t.collisionWidth - a - n;
            t.collisionWidth > a
              ? 0 < o && r <= 0
                ? ((i = e.left + o + t.collisionWidth - a - n),
                  (e.left += o - i))
                : (e.left =
                    !(0 < r && o <= 0) && r < o ? n + a - t.collisionWidth : n)
              : 0 < o
              ? (e.left += o)
              : 0 < r
              ? (e.left -= r)
              : (e.left = w(e.left - s, e.left));
          },
          top: function (e, t) {
            var i,
              a = t.within,
              a = a.isWindow ? a.scrollTop : a.offset.top,
              n = t.within.height,
              s = e.top - t.collisionPosition.marginTop,
              o = a - s,
              r = s + t.collisionHeight - n - a;
            t.collisionHeight > n
              ? 0 < o && r <= 0
                ? ((i = e.top + o + t.collisionHeight - n - a),
                  (e.top += o - i))
                : (e.top =
                    !(0 < r && o <= 0) && r < o ? a + n - t.collisionHeight : a)
              : 0 < o
              ? (e.top += o)
              : 0 < r
              ? (e.top -= r)
              : (e.top = w(e.top - s, e.top));
          },
        },
        flip: {
          left: function (e, t) {
            var i = t.within,
              a = i.offset.left + i.scrollLeft,
              n = i.width,
              i = i.isWindow ? i.scrollLeft : i.offset.left,
              s = e.left - t.collisionPosition.marginLeft,
              o = s - i,
              s = s + t.collisionWidth - n - i,
              r =
                "left" === t.my[0]
                  ? -t.elemWidth
                  : "right" === t.my[0]
                  ? t.elemWidth
                  : 0,
              c =
                "left" === t.at[0]
                  ? t.targetWidth
                  : "right" === t.at[0]
                  ? -t.targetWidth
                  : 0,
              l = -2 * t.offset[0];
            o < 0
              ? ((n = e.left + r + c + l + t.collisionWidth - n - a) < 0 ||
                  n < k(o)) &&
                (e.left += r + c + l)
              : 0 < s &&
                (0 <
                  (a =
                    e.left - t.collisionPosition.marginLeft + r + c + l - i) ||
                  k(a) < s) &&
                (e.left += r + c + l);
          },
          top: function (e, t) {
            var i = t.within,
              a = i.offset.top + i.scrollTop,
              n = i.height,
              i = i.isWindow ? i.scrollTop : i.offset.top,
              s = e.top - t.collisionPosition.marginTop,
              o = s - i,
              s = s + t.collisionHeight - n - i,
              r =
                "top" === t.my[1]
                  ? -t.elemHeight
                  : "bottom" === t.my[1]
                  ? t.elemHeight
                  : 0,
              c =
                "top" === t.at[1]
                  ? t.targetHeight
                  : "bottom" === t.at[1]
                  ? -t.targetHeight
                  : 0,
              l = -2 * t.offset[1];
            o < 0
              ? ((n = e.top + r + c + l + t.collisionHeight - n - a),
                e.top + r + c + l > o &&
                  (n < 0 || n < k(o)) &&
                  (e.top += r + c + l))
              : 0 < s &&
                ((a = e.top - t.collisionPosition.marginTop + r + c + l - i),
                e.top + r + c + l > s) &&
                (0 < a || k(a) < s) &&
                (e.top += r + c + l);
          },
        },
        flipfit: {
          left: function () {
            _.ui.position.flip.left.apply(this, arguments),
              _.ui.position.fit.left.apply(this, arguments);
          },
          top: function () {
            _.ui.position.flip.top.apply(this, arguments),
              _.ui.position.fit.top.apply(this, arguments);
          },
        },
      });
    var A,
      e = document.getElementsByTagName("body")[0],
      I = document.createElement("div"),
      D = document.createElement(e ? "div" : "body"),
      T = {
        visibility: "hidden",
        width: 0,
        height: 0,
        border: 0,
        margin: 0,
        background: "none",
      };
    for (A in (e &&
      _.extend(T, {
        position: "absolute",
        left: "-1000px",
        top: "-1000px",
      }),
    T))
      D.style[A] = T[A];
    function Z(e) {
      return P(1)(e, ebayAC.gh.siteID);
    }
    function X(e, t) {
      var i = /localhost/.test(e),
        a = /\.qa\./.test(e),
        e = /\.latest\./.test(e),
        n = "https://www.",
        t = {
          _0: {
            domain: "ebay.com",
          },
          _210: {
            domain: "ebay.ca",
            hasSubdomain: !0,
            cc: "cafr",
          },
          _123: {
            domain: "ebay.be",
            hasSubdomain: !0,
            cc: "benl",
          },
          _23: {
            domain: "ebay.be",
            hasSubdomain: !0,
            cc: "befr",
          },
          _101: {
            domain: "ebay.it",
            cc: "it",
          },
          _203: {
            domain: "ebay.in",
            cc: "in",
          },
          _15: {
            domain: "ebay.com.au",
            cc: "au",
          },
          _193: {
            domain: "ebay.ch",
            cc: "ch",
          },
          _201: {
            domain: "ebay.com.hk",
            cc: "hk",
          },
          _2: {
            domain: "ebay.ca",
            cc: "ca",
          },
          _186: {
            domain: "ebay.es",
            cc: "es",
          },
          _3: {
            domain: "ebay.co.uk",
            cc: "uk",
          },
          _146: {
            domain: "ebay.nl",
            cc: "nl",
          },
          _71: {
            domain: "ebay.fr",
            cc: "fr",
          },
          _205: {
            domain: "ebay.ie",
            cc: "ie",
          },
          _16: {
            domain: "ebay.at",
            cc: "at",
          },
          _211: {
            domain: "ebay.ph",
            cc: "ph",
          },
          _77: {
            domain: "ebay.de",
            cc: "de",
          },
          _207: {
            domain: "ebay.com.my",
            cc: "my",
          },
          _212: {
            domain: "ebay.pl",
            cc: "pl",
          },
          _216: {
            domain: "ebay.com.sg",
            cc: "sg",
          },
        }["_" + t];
      return a || i
        ? t && t.cc
          ? n + t.cc + ".paradise.qa.ebay.com"
          : "https://www.qa.ebay.com"
        : e
        ? t && t.hasSubdomain
          ? n + t.cc + ".latest." + t.domain
          : t
          ? n + "latest." + t.domain
          : "https://www.latest.ebay.com"
        : t && t.hasSubdomain
        ? n + t.cc + "." + t.domain
        : t
        ? n + t.domain
        : "https://www.ebay.com";
    }
    function S(e) {
      (this.collection = void 0),
        Set ? (this.collection = new Set(e)) : (this.collection = e);
    }
    function J(e, t, a) {
      const n = new S(["string", "number", "bigint", "boolean", "symbol"]);
      return e
        ? t.split(".").reduce(
            (e, t) => {
              var i;
              return e.isTerminated
                ? e
                : (e = e.target) && "function" == typeof e[t]
                ? {
                    target: e[t].bind(e),
                  }
                : !e || ((i = e), n.has(typeof i)) || Array.isArray(i)
                ? e && void 0 !== e[t] && null !== e[t]
                  ? {
                      target: e[t],
                    }
                  : {
                      target: a,
                      isTerminated: !0,
                    }
                : new S(Object.keys(e)).has(t) || void 0 !== e[t]
                ? {
                    target: e[t],
                  }
                : {
                    target: a,
                    isTerminated: !0,
                  };
            },
            {
              target: e,
              isTerminated: !1,
            }
          ).target
        : a;
    }
    D.appendChild(I),
      (e = e || document.documentElement).insertBefore(D, e.firstChild),
      (I.style.cssText = "position: absolute; left: 10.7432222px;"),
      (I = _(I).offset().left),
      (_.support.offsetFractions = 10 < I && I < 11),
      (D.innerHTML = ""),
      e.removeChild(D),
      (o = ebayAC.gh.jQ),
      (a = 0),
      o.widget("ui.autocomplete", {
        version: "1.10.2",
        defaultElement: "<input>",
        options: {
          appendTo: null,
          autoFocus: !1,
          delay: 0 == ebayAC.gh.siteID ? 100 : 300,
          minLength: 0,
          position: {
            my: "left top",
            at: "left bottom",
            collision: "none",
          },
          source: null,
          change: null,
          close: null,
          focus: null,
          open: null,
          response: null,
          search: null,
          select: null,
        },
        pending: 0,
        _create: function () {
          var i,
            a,
            n,
            e = this.element[0].nodeName.toLowerCase(),
            t = "textarea" === e,
            e = "input" === e;
          (this.isMultiLine =
            t || (!e && this.element.prop("isContentEditable"))),
            (this.valueMethod = this.element[t || e ? "val" : "text"]),
            (this.isNewMenu = !0),
            this.element.addClass("ui-autocomplete-input").attr({
              autocomplete: "off",
              autocapitalize: "off",
              autocorrect: "off",
              spellcheck: "false",
              "aria-haspopup": "false",
              role: "combobox",
            }),
            this._on(this.element, {
              keydown: function (e) {
                if (this.element.prop("readOnly")) a = n = i = !0;
                else {
                  a = n = i = !1;
                  var t = o.ui.keyCode;
                  switch (e.keyCode) {
                    case t.PAGE_UP:
                      (i = !0), this._move("previousPage", e);
                      break;
                    case t.PAGE_DOWN:
                      (i = !0), this._move("nextPage", e);
                      break;
                    case t.UP:
                      (i = !0), this._keyEvent("previous", e);
                      break;
                    case t.DOWN:
                      (i = !0), this._keyEvent("next", e);
                      break;
                    case t.ENTER:
                    case t.NUMPAD_ENTER:
                      this.menu.active &&
                        ((i = !0), e.preventDefault(), this.menu.select(e));
                      break;
                    case t.ESCAPE:
                      this.menu.element.is(":visible") &&
                        (this._value(this.term),
                        this.close(e),
                        e.preventDefault());
                      break;
                    default:
                      (a = !0), this._searchTimeout(e);
                  }
                }
              },
              keypress: function (e) {
                if (i) (i = !1), e.preventDefault();
                else if (!a) {
                  var t = o.ui.keyCode;
                  switch (e.keyCode) {
                    case t.PAGE_UP:
                      this._move("previousPage", e);
                      break;
                    case t.PAGE_DOWN:
                      this._move("nextPage", e);
                      break;
                    case t.UP:
                      this._keyEvent("previous", e);
                      break;
                    case t.DOWN:
                      this._keyEvent("next", e);
                  }
                }
              },
              input: function (e) {
                n ? ((n = !1), e.preventDefault()) : this._searchTimeout(e);
              },
              focus: function () {
                (this.selectedItem = null), (this.previous = this._value());
              },
              blur: function (e) {
                this.cancelBlur
                  ? delete this.cancelBlur
                  : (clearTimeout(this.searching),
                    this.close(e),
                    this._change(e),
                    this.liveRegion.text(this.options.messages.noResults));
              },
            }),
            this._initSource(),
            (this.response = function () {
              return this._response().apply(this, arguments);
            }),
            (this.menu = o("<ul>")
              .addClass("ui-autocomplete ui-front")
              .appendTo(this._appendTo())
              .menu({
                input: o(),
                role: null,
              })
              .hide()
              .data("ui-menu")),
            this._on(this.menu.element, {
              mousedown: function (e) {
                e.preventDefault(),
                  (this.cancelBlur = !0),
                  this._delay(function () {
                    delete this.cancelBlur;
                  });
                var i = this.menu.element[0];
                o(e.target).closest(".ui-menu-item").length ||
                  this._delay(function () {
                    var t = this;
                    this.document.one("mousedown", function (e) {
                      e.target === t.element[0] ||
                        e.target === i ||
                        o.contains(i, e.target) ||
                        t.close();
                    });
                  });
              },
              menufocus: function (e, t) {
                this.isNewMenu &&
                ((this.isNewMenu = !1), e.originalEvent) &&
                /^mouse/.test(e.originalEvent.type)
                  ? (this.menu.blur(),
                    this.document.one("mousemove", function () {
                      o(e.target).trigger(e.originalEvent);
                    }))
                  : ((t = t.item.data("ui-autocomplete-item")),
                    !1 !==
                    this._trigger("focus", e, {
                      item: t,
                    })
                      ? e.originalEvent &&
                        /^key/.test(e.originalEvent.type) &&
                        this._value(t.value)
                      : this.liveRegion.text(t.value));
              },
              menuselect: function (e, t) {
                var i = t.item.data("ui-autocomplete-item"),
                  a = this.previous;
                this.element[0] !== this.document[0].activeElement &&
                  (this.element.focus(),
                  (this.previous = a),
                  this._delay(function () {
                    (this.previous = a), (this.selectedItem = i);
                  })),
                  !1 !==
                    this._trigger("select", e, {
                      item: i,
                    }) && this._value(unEscapeSplChars(i.value)),
                  (this.term = this._value()),
                  this.close(e),
                  (this.selectedItem = i);
              },
            }),
            (this.liveRegion = o("<span>", {
              role: "status",
              "aria-live": "polite",
            })
              .addClass("ui-helper-hidden-accessible")
              .insertAfter(this.element));
        },
        _destroy: function () {
          clearTimeout(this.searching),
            this.element.removeClass("ui-autocomplete-input"),
            this.menu.element.remove(),
            this.liveRegion.remove();
        },
        _setOption: function (e, t) {
          this._super(e, t),
            "source" === e && this._initSource(),
            "appendTo" === e && this.menu.element.appendTo(this._appendTo()),
            "disabled" === e && t && this.xhr && this.xhr.abort();
        },
        _appendTo: function () {
          var e = this.options.appendTo;
          return (e = (e =
            (e =
              e &&
              (e.jquery || e.nodeType ? o(e) : this.document.find(e).eq(0))) ||
            this.element.closest(".ui-front")).length
            ? e
            : this.document[0].body);
        },
        _initSource: function () {
          var i,
            a,
            n = this;
          o.isArray(this.options.source)
            ? ((i = this.options.source),
              (this.source = function (e, t) {
                t(o.ui.autocomplete.filter(i, e.term));
              }))
            : "string" == typeof this.options.source
            ? ((a = this.options.source),
              (this.source = function (e, t) {
                n.xhr && n.xhr.abort(),
                  (n.xhr = o.ajax({
                    url: a,
                    data: e,
                    dataType: "json",
                    success: function (e) {
                      t(e);
                    },
                    error: function () {
                      t([]);
                    },
                  }));
              }))
            : (this.source = this.options.source);
        },
        _searchTimeout: function (e) {
          clearTimeout(this.searching),
            (this.searching = this._delay(function () {
              this.term !== this._value() &&
                ((this.selectedItem = null), this.search(null, e));
            }, this.options.delay));
        },
        search: function (e, t) {
          return (
            (e = null != e ? e : this._value()),
            (this.term = this._value()),
            e.length < this.options.minLength
              ? this.close(t)
              : !1 !== this._trigger("search", t)
              ? this._search(e)
              : void 0
          );
        },
        _search: function (e) {
          this.pending++,
            this.element.addClass("ui-autocomplete-loading"),
            (this.cancelSearch = !1),
            this.source(
              {
                term: e,
              },
              this._response()
            );
        },
        _response: function () {
          var t = this,
            i = ++a;
          return function (e) {
            i === a && t.__response(e),
              t.pending--,
              t.pending || t.element.removeClass("ui-autocomplete-loading");
          };
        },
        __response: function (e) {
          (e = e && this._normalize(e)),
            this._trigger("response", null, {
              content: e,
            }),
            !this.options.disabled && e && e.length && !this.cancelSearch
              ? (this._suggest(e), this._trigger("open"))
              : this._close();
        },
        close: function (e) {
          (this.cancelSearch = !0), this._close(e);
        },
        _close: function (e) {
          this.menu.element.is(":visible") &&
            (this.menu.element.hide(),
            this.menu.blur(),
            (this.isNewMenu = !0),
            this._trigger("close", e));
        },
        _change: function (e) {
          this.previous !== this._value() &&
            this._trigger("change", e, {
              item: this.selectedItem,
            });
        },
        _normalize: function (e) {
          return e.length && e[0].label && e[0].value
            ? e
            : o.map(e, function (e) {
                return "string" == typeof e
                  ? {
                      label: e,
                      value: e,
                    }
                  : o.extend(
                      {
                        label: e.label || e.value,
                        value: e.value || e.label,
                      },
                      e
                    );
              });
        },
        _suggest: function (e) {
          var t = this.menu.element.empty();
          this._renderMenu(t, e),
            (this.isNewMenu = !0),
            this.menu.refresh(),
            t.show(),
            this._resizeMenu(),
            t.position(
              o.extend(
                {
                  of: this.element,
                },
                this.options.position
              )
            ),
            this.options.autoFocus && this.menu.next();
        },
        _resizeMenu: function () {
          var e = this.menu.element;
          e.outerWidth(
            Math.max(e.width("").outerWidth() + 1, this.element.outerWidth())
          );
        },
        _renderMenu: function (i, e) {
          var a = this;
          o.each(e, function (e, t) {
            a._renderItemData(i, t);
          });
        },
        _renderItemData: function (e, t) {
          return this._renderItem(e, t).data("ui-autocomplete-item", t);
        },
        _renderItem: function (e, t) {
          return o("<li>").append(o("<a>").text(t.label)).appendTo(e);
        },
        _move: function (e, t) {
          this.menu.element.is(":visible")
            ? (this.menu.isFirstItem() && /^previous/.test(e)) ||
              (this.menu.isLastItem() && /^next/.test(e))
              ? (this._value(this.term), this.menu.blur())
              : this.menu[e](t)
            : this.search(null, t);
        },
        widget: function () {
          return this.menu.element;
        },
        _value: function () {
          return this.valueMethod.apply(this.element, arguments);
        },
        _keyEvent: function (e, t) {
          (this.isMultiLine && !this.menu.element.is(":visible")) ||
            (this._move(e, t), t.preventDefault());
        },
      }),
      o.extend(o.ui.autocomplete, {
        escapeRegex: function (e) {
          return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        },
        filter: function (e, t) {
          var i = new RegExp(o.ui.autocomplete.escapeRegex(t), "i");
          return o.grep(e, function (e) {
            return i.test(e.label || e.value || e);
          });
        },
      }),
      o.widget("ui.autocomplete", o.ui.autocomplete, {
        options: {
          messages: {
            noResults: "",
            results: function (e) {
              var t = ebayAC.getLocaleString("ac_results_count");
              return t
                ? t.replace("${count}", e)
                : e +
                    (1 < e ? " results are" : " result is") +
                    " available; to navigate, use up and down arrow keys on desktop or swipe left and right on touch devices.";
            },
          },
        },
        __response: function (e) {
          var t;
          this._superApply(arguments),
            this.options.disabled ||
              this.cancelSearch ||
              ((t =
                e && e.length
                  ? ((t =
                      !0 ===
                      (e = e.filter(function (e) {
                        if (1 != e.isHeading) return !0;
                      }))[e.length - 1].exclLiveRegionCnt
                        ? e.length - 1
                        : e.length),
                    this.options.messages.results(t))
                  : this.options.messages.noResults),
              0 == ebayAC.gh.siteID && this.liveRegion.text(t));
        },
      }),
      (g = ebayAC.gh.jQ).widget("ui.menu", {
        version: "1.10.2",
        defaultElement: "<ul>",
        delay: 300,
        options: {
          icons: {
            submenu: "ui-icon-carat-1-e",
          },
          menus: "ul",
          position: {
            my: "left top",
            at: "right top",
          },
          role: "menu",
          blur: null,
          focus: null,
          select: null,
        },
        _create: function () {
          (this.activeMenu = this.element),
            (this.mouseHandled = !1),
            this.element
              .uniqueId()
              .addClass("ui-menu ui-widget ui-widget-content ui-corner-all")
              .toggleClass(
                "ui-menu-icons",
                !!this.element.find(".ui-icon").length
              )
              .attr({
                role: "listbox",
                tabIndex: -1,
              })
              .bind(
                "click" + this.eventNamespace,
                g.proxy(function (e) {
                  this.options.disabled && e.preventDefault();
                }, this)
              ),
            g(ebayAC.gh.searchBoxID).attr("aria-owns", this.element.attr("id")),
            this.options.disabled &&
              this.element
                .addClass("ui-state-disabled")
                .attr("aria-disabled", "true"),
            this._on({
              "mousedown .ui-menu-item > a": function (e) {
                e.preventDefault();
              },
              "click .ui-state-disabled > a": function (e) {
                e.preventDefault();
              },
              "click .ui-menu-item:has(a)": function (e) {
                var t = g(e.target).closest(".ui-menu-item");
                (0 === e.originalEvent.screenX && !this.element.is(":focus")) ||
                  (g(e.target)
                    .closest("span.ac-button")
                    .hasClass("ac-recent-remove")
                    ? (this.clearItem(t),
                      e.preventDefault(),
                      e.stopPropagation())
                    : !this.mouseHandled &&
                      t.not(".ui-state-disabled").length &&
                      ((this.mouseHandled = !0),
                      this.select(e),
                      t.has(".ui-menu").length
                        ? this.expand(e)
                        : this.element.is(":focus") ||
                          (this.element.trigger("focus", [!0]),
                          this.active &&
                            1 === this.active.parents(".ui-menu").length &&
                            clearTimeout(this.timer))));
              },
              "mouseenter .ui-menu-item": function (e) {
                var t = g(e.currentTarget);
                t
                  .siblings()
                  .children(".ui-state-active")
                  .removeClass("ui-state-active"),
                  this.focus(e, t);
              },
              mouseleave: "collapseAll",
              "mouseleave .ui-menu": "collapseAll",
              focus: function (e, t) {
                var i =
                  this.active || this.element.children(".ui-menu-item").eq(0);
                t || this.focus(e, i);
              },
              blur: function (e) {
                this._delay(function () {
                  g.contains(this.element[0], this.document[0].activeElement) ||
                    this.collapseAll(e);
                });
              },
              keydown: "_keydown",
            }),
            this.refresh(),
            this._on(this.document, {
              click: function (e) {
                g(e.target).closest(".ui-menu").length || this.collapseAll(e),
                  (this.mouseHandled = !1);
              },
            });
        },
        clearItem: function (i) {
          var e = g(i).data("item.autocomplete"),
            e = {
              eventFamily: "KWSUG",
              eventAction: "ACTN",
              actionKind: "CLICK",
              p: 3202727,
              pagename: "autocomplete",
              flushImmediately: !0,
              kw: encodeURIComponent(e.value),
              sid: "p3202727.m50521.l50521",
            };
          document.dispatchEvent(
            new CustomEvent("rover", {
              detail: e,
            })
          ),
            (ebayAC.cacheAC = {}),
            g(i).animate(
              {
                opacity: 0,
                height: 0,
              },
              250,
              function (e) {
                var t;
                g(i).css("display", "none"),
                  g(i).remove(),
                  0 === g(".ac-recent").length &&
                    ((t = g(".ac-recent-heading").parent("div").parent("li")),
                    g(t).animate(
                      {
                        opacity: 0,
                        height: 0,
                      },
                      250,
                      function () {
                        t.remove();
                      }
                    ));
              }
            );
        },
        _destroy: function () {
          this.element
            .removeAttr("aria-activedescendant")
            .find(".ui-menu")
            .addBack()
            .removeClass(
              "ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons"
            )
            .removeAttr("role")
            .removeAttr("tabIndex")
            .removeAttr("aria-labelledby")
            .removeAttr("aria-expanded")
            .removeAttr("aria-hidden")
            .removeAttr("aria-disabled")
            .removeUniqueId()
            .show(),
            this.element
              .find(".ui-menu-item")
              .removeClass("ui-menu-item")
              .removeAttr("role")
              .removeAttr("aria-disabled")
              .children("a")
              .removeUniqueId()
              .removeClass("ui-corner-all ui-state-hover")
              .removeAttr("tabIndex")
              .removeAttr("role")
              .removeAttr("aria-haspopup")
              .children()
              .each(function () {
                var e = g(this);
                e.data("ui-menu-submenu-carat") && e.remove();
              }),
            this.element
              .find(".ui-menu-divider")
              .removeClass("ui-menu-divider ui-widget-content");
        },
        _keydown: function (e) {
          var t,
            i,
            a,
            n,
            s = !0;
          function o(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
          }
          switch (e.keyCode) {
            case g.ui.keyCode.PAGE_UP:
              this.previousPage(e);
              break;
            case g.ui.keyCode.PAGE_DOWN:
              this.nextPage(e);
              break;
            case g.ui.keyCode.HOME:
              this._move("first", "first", e);
              break;
            case g.ui.keyCode.END:
              this._move("last", "last", e);
              break;
            case g.ui.keyCode.UP:
              this.previous(e);
              break;
            case g.ui.keyCode.DOWN:
              this.next(e);
              break;
            case g.ui.keyCode.LEFT:
              this.collapse(e);
              break;
            case g.ui.keyCode.RIGHT:
              this.active &&
                !this.active.is(".ui-state-disabled") &&
                this.expand(e);
              break;
            case g.ui.keyCode.ENTER:
            case g.ui.keyCode.SPACE:
              this._activate(e);
              break;
            case g.ui.keyCode.ESCAPE:
              this.collapse(e);
              break;
            default:
              (s = !1),
                (t = this.previousFilter || ""),
                (i = String.fromCharCode(e.keyCode)),
                (a = !1),
                clearTimeout(this.filterTimer),
                i === t ? (a = !0) : (i = t + i),
                (n = new RegExp("^" + o(i), "i")),
                (t = this.activeMenu
                  .children(".ui-menu-item")
                  .filter(function () {
                    return n.test(g(this).children("a").text());
                  })),
                (t =
                  a && -1 !== t.index(this.active.next())
                    ? this.active.nextAll(".ui-menu-item")
                    : t).length ||
                  ((i = String.fromCharCode(e.keyCode)),
                  (n = new RegExp("^" + o(i), "i")),
                  (t = this.activeMenu
                    .children(".ui-menu-item")
                    .filter(function () {
                      return n.test(g(this).children("a").text());
                    }))),
                t.length && (this.focus(e, t), 1 < t.length)
                  ? ((this.previousFilter = i),
                    (this.filterTimer = this._delay(function () {
                      delete this.previousFilter;
                    }, 1e3)))
                  : delete this.previousFilter;
          }
          s && e.preventDefault();
        },
        _activate: function (e) {
          this.active.is(".ui-state-disabled") ||
            (this.active.children("a[aria-haspopup='true']").length
              ? this.expand(e)
              : this.select(e));
        },
        refresh: function () {
          var a = this.options.icons.submenu,
            e = this.element.find(this.options.menus);
          e
            .filter(":not(.ui-menu)")
            .addClass("ui-menu ui-widget ui-widget-content ui-corner-all")
            .hide()
            .attr({
              role: this.options.role,
              "aria-hidden": "true",
              "aria-expanded": "false",
            })
            .each(function () {
              var e = g(this),
                t = e.prev("a"),
                i = g("<span>")
                  .addClass("ui-menu-icon ui-icon " + a)
                  .data("ui-menu-submenu-carat", !0);
              t.attr("aria-haspopup", "true").prepend(i),
                e.attr("aria-labelledby", t.attr("id"));
            }),
            (e = e.add(this.element))
              .children(":not(.ui-menu-item):has(a)")
              .not(".ac-heading")
              .addClass("ui-menu-item")
              .attr("role", "presentation")
              .children("a")
              .uniqueId()
              .addClass("ui-corner-all")
              .attr({
                tabIndex: -1,
                role: "option",
              }),
            e.children(":not(.ui-menu-item)").each(function () {
              var e = g(this);
              /[^\-\u2014\u2013\s]/.test(e.text()) ||
                e.addClass("ui-widget-content ui-menu-divider");
            }),
            g(ebayAC.gh.searchBoxID).attr("aria-haspopup", !0),
            e.children(".ui-state-disabled").attr("aria-disabled", "true"),
            this.active &&
              !g.contains(this.element[0], this.active[0]) &&
              this.blur();
        },
        _itemRole: function () {
          return {
            menu: "menuitem",
            listbox: "option",
          }[this.options.role];
        },
        _setOption: function (e, t) {
          "icons" === e &&
            this.element
              .find(".ui-menu-icon")
              .removeClass(this.options.icons.submenu)
              .addClass(t.submenu),
            this._super(e, t);
        },
        focus: function (e, t) {
          var i;
          this.blur(e, e && "focus" === e.type),
            this._scrollIntoView(t),
            (this.active = t.first()),
            (i = this.active
              .children("a")
              .addClass("ui-state-focus")
              .attr("aria-selected", "true")),
            g(ebayAC.gh.searchBoxID).attr(
              "aria-activedescendant",
              i.attr("id")
            ),
            this.options.role &&
              this.element.attr("aria-activedescendant", i.attr("id")),
            this.active
              .parent()
              .closest(".ui-menu-item")
              .children("a:first")
              .addClass("ui-state-active"),
            e && "keydown" === e.type
              ? this._close()
              : (this.timer = this._delay(function () {
                  this._close();
                }, this.delay)),
            (i = t.children(".ui-menu")).length &&
              /^mouse/.test(e.type) &&
              this._startOpening(i),
            (this.activeMenu = t.parent()),
            this._trigger("focus", e, {
              item: t,
            });
        },
        _scrollIntoView: function (e) {
          var t, i, a;
          this._hasScroll() &&
            ((t = parseFloat(g.css(this.activeMenu[0], "borderTopWidth")) || 0),
            (i = parseFloat(g.css(this.activeMenu[0], "paddingTop")) || 0),
            (t = e.offset().top - this.activeMenu.offset().top - t - i),
            (i = this.activeMenu.scrollTop()),
            (a = this.activeMenu.height()),
            (e = e.height()),
            t < 0
              ? this.activeMenu.scrollTop(i + t)
              : a < t + e && this.activeMenu.scrollTop(i + t - a + e));
        },
        blur: function (e, t) {
          t || clearTimeout(this.timer),
            this.active &&
              (this.active
                .children("a")
                .removeClass("ui-state-focus")
                .removeAttr("aria-selected"),
              (this.active = null),
              this._trigger("blur", e, {
                item: this.active,
              }));
        },
        _startOpening: function (e) {
          clearTimeout(this.timer),
            "true" === e.attr("aria-hidden") &&
              (this.timer = this._delay(function () {
                this._close(), this._open(e);
              }, this.delay));
        },
        _open: function (e) {
          var t = g.extend(
            {
              of: this.active,
            },
            this.options.position
          );
          clearTimeout(this.timer),
            this.element
              .find(".ui-menu")
              .not(e.parents(".ui-menu"))
              .hide()
              .attr("aria-hidden", "true"),
            e
              .show()
              .removeAttr("aria-hidden")
              .attr("aria-expanded", "true")
              .position(t);
        },
        collapseAll: function (t, i) {
          clearTimeout(this.timer),
            (this.timer = this._delay(function () {
              var e = i
                ? this.element
                : g(t && t.target).closest(this.element.find(".ui-menu"));
              e.length || (e = this.element),
                this._close(e),
                this.blur(t),
                (this.activeMenu = e);
            }, this.delay));
        },
        _close: function (e) {
          (e = e || (this.active ? this.active.parent() : this.element))
            .find(".ui-menu")
            .hide()
            .attr("aria-hidden", "true")
            .attr("aria-expanded", "false")
            .end()
            .find("a.ui-state-active")
            .removeClass("ui-state-active");
        },
        collapse: function (e) {
          var t =
            this.active &&
            this.active.parent().closest(".ui-menu-item", this.element);
          t && t.length && (this._close(), this.focus(e, t));
        },
        expand: function (e) {
          var t =
            this.active &&
            this.active.children(".ui-menu ").children(".ui-menu-item").first();
          t &&
            t.length &&
            (this._open(t.parent()),
            this._delay(function () {
              this.focus(e, t);
            }));
        },
        next: function (e) {
          this._move("next", "first", e);
        },
        previous: function (e) {
          this._move("prev", "last", e);
        },
        isFirstItem: function () {
          return this.active && !this.active.prevAll(".ui-menu-item").length;
        },
        isLastItem: function () {
          return this.active && !this.active.nextAll(".ui-menu-item").length;
        },
        _move: function (e, t, i) {
          var a;
          ((a = this.active
            ? "first" === e || "last" === e
              ? this.active["first" === e ? "prevAll" : "nextAll"](
                  ".ui-menu-item"
                ).eq(-1)
              : this.active[e + "All"](".ui-menu-item").eq(0)
            : a) &&
            a.length &&
            this.active) ||
            (a = this.activeMenu
              .children(".ui-menu-item")
              .not(".ac-heading")
              [t]()),
            this.focus(i, a);
        },
        nextPage: function (e) {
          var t, i, a;
          this.active
            ? this.isLastItem() ||
              (this._hasScroll()
                ? ((i = this.active.offset().top),
                  (a = this.element.height()),
                  this.active.nextAll(".ui-menu-item").each(function () {
                    return (t = g(this)).offset().top - i - a < 0;
                  }),
                  this.focus(e, t))
                : this.focus(
                    e,
                    this.activeMenu
                      .children(".ui-menu-item")
                      [this.active ? "last" : "first"]()
                  ))
            : this.next(e);
        },
        previousPage: function (e) {
          var t, i, a;
          this.active
            ? this.isFirstItem() ||
              (this._hasScroll()
                ? ((i = this.active.offset().top),
                  (a = this.element.height()),
                  this.active.prevAll(".ui-menu-item").each(function () {
                    return 0 < (t = g(this)).offset().top - i + a;
                  }),
                  this.focus(e, t))
                : this.focus(
                    e,
                    this.activeMenu.children(".ui-menu-item").first()
                  ))
            : this.next(e);
        },
        _hasScroll: function () {
          return this.element.outerHeight() < this.element.prop("scrollHeight");
        },
        select: function (e) {
          this.active = this.active || g(e.target).closest(".ui-menu-item");
          var t = {
            item: this.active,
          };
          this.active.has(".ui-menu").length || this.collapseAll(e, !0),
            this._trigger("select", e, t);
        },
      }),
      (q = ebayAC.gh.jQ),
      ($ = !1),
      (n = ""),
      (m = q(ebayAC.gh.formID + " input[name=_trksid]")),
      (f = !1),
      (v = null),
      (K = !(V = {})),
      void (b = 0) !== ebayAC.gh.getBundle
        ? (V = ebayAC.gh.getBundle("AutocompleteJavascriptContent"))
        : "undefined" != typeof raptor &&
          void 0 !== raptor.require &&
          (V = raptor
            .require("ebay.content")
            .get("GlobalHeaderWeb/AutocompleteJavascriptContent")),
      (ebayAC.L10N = V),
      (ebayAC.getLocaleString = Z),
      /^(0)$/.test(ebayAC.gh.siteID) && (K = !0),
      ((I = document.createElement("div")).style.display = "none"),
      (I.innerHTML =
        '<svg id="ac-icon-clock" viewBox="0 0 22 22"><path fill="#707070" fill-rule="evenodd" d="M22 11c0 6.075-4.925 11-11 11S0 17.075 0 11 4.925 0 11 0s11 4.925 11 11zm-2 0a9 9 0 01-9 9 9 9 0 01-9-9 9 9 0 019-9 9 9 0 019 9zM10 5a1 1 0 012 0v5.59l2.7 2.71a1 1 0 01-1.41 1.41l-3-3A1 1 0 0110 11V5z"></path></svg><svg id="ac-icon-clear" viewBox="0 0 18 18"><path fill="#707070" d="M10.41 9l7.294-7.287A1.004 1.004 0 0016.285.294L9 7.59 1.715.294a1.002 1.002 0 10-1.42 1.42l7.296 7.285-7.295 7.286a1 1 0 000 1.42 1 1 0 001.419 0L9 10.407l7.285 7.296a1 1 0 001.42 0 1 1 0 000-1.419l-7.296-7.286z"></path></svg><svg id="ac-icon-saved" viewBox="0 0 22 20"><path fill="#707070" d="M20.262 1.86a5.81 5.81 0 00-8.524 0l-.74.78-.74-.78a5.81 5.81 0 00-8.525 0 6.508 6.508 0 000 8.845l8.544 8.985a1 1 0 001.45 0l8.545-8.985a6.508 6.508 0 00-.01-8.844z"></path></svg><svg id="ac-icon-trend" viewBox="0 0 16 16"><path d="M1 14L4.63287 9.29673C4.74191 9.15556 4.95947 9.17073 5.04787 9.32566L7.75503 14.0706C7.8566 14.2487 8.11746 14.2355 8.20065 14.0482L13.5517 2M13.5517 2L9.68966 3.5M13.5517 2L15 5" stroke="#707070" stroke-width="2" stroke-linecap="round"/></svg><svg id="ac-icon-help" viewBox="0 0 16 16"><path d="M5.3108 5.66459C5.6112 4.86384 6.54349 3.75 8.00115 3.75C8.86129 3.75 9.62636 4.11263 10.1332 4.69091C10.6381 5.26693 10.9124 6.1036 10.6472 6.95208C10.5058 7.40426 10.2349 7.66683 9.95067 7.84466C9.81284 7.9309 9.67148 7.9975 9.54816 8.05457L9.52095 8.06715C9.40478 8.12084 9.30987 8.16471 9.22802 8.21408C9.0978 8.29262 9.00121 8.34723 8.92091 8.39263L8.87641 8.41783V8.66974C8.87641 8.92693 8.77326 9.13236 8.58636 9.26281C8.41407 9.38307 8.19904 9.41974 8.00115 9.41974C7.80327 9.41974 7.58823 9.38307 7.41595 9.26281C7.22905 9.13236 7.1259 8.92693 7.1259 8.66974V8.00307C7.1259 7.59061 7.35392 7.3248 7.45216 7.2235L8.13673 6.75186C8.22049 6.70377 8.29718 6.65972 8.35407 6.62541C8.43889 6.57425 8.51266 6.5318 8.57424 6.49637L8.62037 6.46978C8.69278 6.4279 8.73928 6.39977 8.77376 6.37481C8.80571 6.35168 8.81967 6.33658 8.82821 6.32483C8.83673 6.31308 8.84769 6.29385 8.86029 6.25353C8.87584 6.20378 8.87934 6.124 8.86649 6.03935C8.86189 5.99978 8.84406 5.94463 8.83571 5.922C8.67237 5.74102 8.38506 5.58333 8.00115 5.58333C7.79411 5.61249 7.29202 5.80373 6.94 6.33541C6.76589 6.79952 6.25735 7.04609 5.79511 6.84894C5.34214 6.65575 5.1392 6.122 5.3108 5.66459Z" fill="#707070"/><path d="M9 11C9 10.4477 8.55229 10 8 10C7.44771 10 7 10.4477 7 11C7 11.5523 7.44771 12 8 12C8.55229 12 9 11.5523 9 11Z" fill="#707070"/><path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8Z" fill="#707070"/></svg><svg id="ac-icon-store" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.8927 2L3.0881 3H12.6444L11.6789 2H3.8927ZM2.59715 0.419764C2.8107 0.154354 3.133 0 3.47366 0H12.0504C12.3556 0 12.6477 0.12401 12.8597 0.343581L15.5149 3.09358C15.5515 3.13154 15.5848 3.17086 15.6148 3.21127C15.8493 3.39428 16 3.67954 16 4V7C16 7.54597 15.8052 8.29461 15.2433 8.91896C15.1675 9.00321 15.0864 9.08364 15 9.15984V14.875C15 15.4963 14.4963 16 13.875 16H2.125C1.50368 16 1 15.4963 1 14.875V9.15984C0.913617 9.08364 0.832527 9.00321 0.756706 8.91896C0.194786 8.29461 0 7.54597 0 7V4C0 3.71773 0.11695 3.46278 0.305038 3.28095C0.328875 3.24314 0.355336 3.20602 0.384504 3.16976L2.59715 0.419764ZM3 9.97578V14H7L7 9.8421C6.58199 9.70124 6.23205 9.47552 5.94951 9.20339C5.36604 9.69539 4.55188 10 3.5 10C3.32691 10 3.16025 9.99175 3 9.97578ZM13 9.97578V14H9V9.8421C9.43066 9.69698 9.78907 9.46177 10.076 9.17855C10.6378 9.65923 11.4344 10 12.5 10C12.6731 10 12.8397 9.99175 13 9.97578ZM8.7625 7.65C8.62061 7.83918 8.40603 8 8 8C7.59397 8 7.37939 7.83918 7.2375 7.65C7.06374 7.41832 7 7.13232 7 7C7 6.44772 6.55228 6 6 6C5.44772 6 5 6.44772 5 7C5 7.1207 4.94479 7.37206 4.75671 7.58104C4.59745 7.75799 4.25802 8 3.5 8C2.74198 8 2.40255 7.75799 2.24329 7.58104C2.05521 7.37206 2 7.1207 2 7V5H14V7C14 7.1207 13.9448 7.37206 13.7567 7.58104C13.5974 7.75799 13.258 8 12.5 8C11.828 8 11.4715 7.77031 11.2786 7.56509C11.054 7.32611 11 7.06835 11 7C11 6.44772 10.5523 6 10 6C9.44772 6 9 6.44772 9 7C9 7.13232 8.93626 7.41832 8.7625 7.65ZM10.25 11C10.1119 11 10 11.1119 10 11.25V12.75C10 12.8881 10.1119 13 10.25 13H11.75C11.8881 13 12 12.8881 12 12.75V11.25C12 11.1119 11.8881 11 11.75 11H10.25Z" fill="#707070"/></svg>'),
      q(document.body).append(I),
      K &&
        (((I = document.createElement("style")).innerHTML =
          "#gAC .ui-menu .ui-menu-item a {padding: 4px 4px 1px 8px}"),
        q(document.body).append(I)),
      q(ebayAC.gh.searchBoxID).keyup(function (e) {
        var t = q(this).get(0),
          t =
            (document.selection && t.focus(),
            (ebayAC.caretPos =
              "selectionStart" in t
                ? t.selectionStart
                : Math.abs(
                    document.selection
                      .createRange()
                      .moveStart("character", -t.value.length)
                  )),
            q(this).val());
        0 == ebayAC.caretFlag &&
        " " == t.charAt(ebayAC.caretPos) &&
        " " != t.charAt(ebayAC.caretPos - 1)
          ? (ebayAC.caretFlag = ebayAC.caretPos)
          : 0 != ebayAC.caretFlag &&
            " " != t.charAt(ebayAC.caretPos) &&
            (ebayAC.caretFlag = 0);
        return (
          -1 == q.inArray(e.which, [37, 38, 39, 40, 13, 9]) &&
            q(this).val().substring(0, 79),
          !0
        );
      }),
      (z = function () {
        var e = [],
          t = (p(ebayAC.generateTrackID("1313")), ebayAC.tracking);
        e.push({
          key: "H",
          val: b || 0,
        }),
          ebayAC.savedserversion &&
            "Control" !== ebayAC.savedserversion &&
            e.push({
              key: "TSS",
              val: t.savedCount || 0,
            }),
          emitTrackingData("1313", e),
          y();
      }),
      (p = function (e) {
        var t,
          i = m.val();
        (t =
          i && (i = i.match(/((\.|\b)G\|\d+\|\d+)/)) && i[1]
            ? "." === (t = i[1]).charAt(0)
              ? t
              : "." + t
            : t)
          ? m.val(e + t)
          : m.val(e);
      }),
      (emitTrackingData = function (e, t) {
        var i,
          a = ebayAC.trackingObj,
          n = {},
          s = {},
          o = "",
          r = [],
          c =
            ((a.timerFirstTimeTyping = Date.now() - a.timerFirstTimeTyping),
            (i = formatTrackingData(a.suggestionList)),
            (i = "XS[" + encodeURIComponent(i) + "]"),
            q(ebayAC.gh.searchBoxID).val() || ""),
          l = a.nullStateSuggestionList,
          r = [
            {
              key: "0X",
              val: a.emptyResponseKew || "",
            },
            {
              key: "DUR",
              val: a.timerFirstTimeTyping || 0,
            },
            {
              key: "X",
              val: c,
            },
            {
              key: "",
              val: a.ghostTracking || "",
            },
          ];
        t && (r = r.concat(t)),
          (i += constructTracking(r, ",")),
          (o = "mi:570|li:" + e),
          window.GH &&
            window.GH.GHSW &&
            void 0 !== window.GH.GHSW.GH_STICKYHEADER &&
            (o = (o += "|SH:") + (window.GH.GHSW.GH_STICKYHEADER ? "1" : "0")),
          ebayAC.gh.pageID && (n.operationId = ebayAC.gh.pageID),
          (n.actionKind = "CLICK"),
          (n.eventProperty = {}),
          0 != c.length
            ? ((s.qacc = i),
              0 < l.length &&
                (s.nullqacc =
                  "XS[" + encodeURIComponent(formatTrackingData(l)) + "]"))
            : (s.nullqacc = i),
          (n.eventFamily = "KWSUG"),
          (n.eventAction = "ACTN"),
          (n.eventProperty.trkp = s),
          (n.eventProperty.moduledtl = o),
          (n.eventProperty["!xt"] = ebayAC.xtTag),
          document.dispatchEvent(
            new CustomEvent("pulsar", {
              detail: n,
            })
          );
      }),
      (escapeSplChars = function (e) {
        var t = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
          "/": "&#x2F;",
          "`": "&#x60;",
          "=": "&#x3D;",
        };
        return String(e).replace(/[&<>"'`=\/]/g, function (e) {
          return t[e];
        });
      }),
      (unEscapeSplChars = function (e) {
        var t = {
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&#39;": "'",
          "&#x2F;": "/",
          "&#x60;": "`",
          "&#x3D;": "=",
        };
        return String(e).replace(
          /&amp;|&lt;|&gt;|&quot;|&#39;|&#x2F;|&#x60;|&#x3D;/g,
          function (e) {
            return t[e];
          }
        );
      }),
      (formatTrackingData = function (e) {
        return e
          .map(function (e, t) {
            var i = "",
              i = e.type + "|" + e.sug;
            return (
              e.cat && 0 != e.cat && (i += "|" + e.cat),
              e.banner && (i += "|" + e.banner),
              e.url && (i += "|" + e.url),
              (i = e.isStore ? e.type + "|" + e.trackingTarget : i)
            );
          })
          .join(",");
      }),
      (constructTracking = function (e, a) {
        return e
          .map(function (e, t) {
            var i = e.val,
              e = -1 !== i && "" !== i ? a + e.key + i : "";
            return e;
          })
          .join("");
      }),
      (y = function () {
        var e = "acTimer1",
          t = "acTimer1_ts";
        if (window.performance && performance.getEntriesByName) {
          var i = performance.getEntriesByName("ac_timer_start"),
            a = performance.getEntriesByName("ac_timer_end"),
            n = a.length,
            s = [];
          if (0 < n && i.length === n) {
            for (var o, r, c = 0; c < n; c++)
              s.push(a[c].startTime - i[c].startTime);
            window.localStorage &&
              ((o = localStorage.getItem(e)),
              (r = localStorage.getItem(t)),
              (!o || 24 < (Date.now() - r) / 36e5) &&
                (localStorage.setItem(e, s[0]),
                localStorage.setItem(t, Date.now()),
                s.shift()),
              s.sort(),
              (o = s.length),
              (r = Math.floor(o / 2)),
              o % 2 == 0 ? s[r] : s[r - 1]) &&
              localStorage.setItem("acTimerMedian", s[r]);
          }
        }
      }),
      q(ebayAC.gh.formID + " input[type=hidden][name=_sacat]").val(0),
      q(ebayAC.gh.categorySelectID).bind("mouseenter mouseleave", function (e) {
        q(ebayAC.gh.searchBoxID).data("ui-autocomplete")._resizeMenu();
      }),
      q(ebayAC.gh.outerBoxID).after("<div id=gAC></div>"),
      q(ebayAC.gh.compID).on("mouseleave", ".ui-autocomplete", function (e) {
        clearTimeout(v);
      }),
      (q(ebayAC.gh.searchBoxID)
        .bind("click", function () {
          var e = q(ebayAC.gh.searchBoxID);
          e.val() && e.data("ui-autocomplete").options.open();
        })
        .bind("focusin", function () {
          q(ebayAC.gh.searchBoxID).autocomplete("search");
        })
        .autocomplete({
          appendTo: "#gAC",
          open: function () {
            q("ul.ui-autocomplete").addClass("ghAC_opened ghAC_newui"),
              q(".ui-menu-item").addClass("ghAC_visible");
          },
          close: function () {
            q("ul.ui-autocomplete")
              .removeClass("ghAC_opened")
              .css("display", "block"),
              q(".ui-menu-item")
                .removeClass("ghAC_visible")
                .addClass("ghAC_hidden");
          },
          search: function (e, t) {},
          source: function (e) {
            var e = e.term
                .replace(/^\s+/, "")
                .replace(/  +/g, " ")
                .toLowerCase(),
              t =
                ((n.length > e.length || -1 == e.indexOf(n)) && ($ = !1),
                -1 == e.indexOf(n) && n.indexOf(e),
                "" === (n = e) ? "recentsearchesunique" : e);
            ebayAC.cacheAC.hasOwnProperty(t)
              ? ebayAC.autoComplete_compileResponse(ebayAC.cacheAC[t], e)
              : $ || ebayAC.initiateACAjax(e);
          },
          focus: function (e, t) {
            return "AC_RtmAd" == t.item.label
              ? (q("#ghAC_RTM_Ads")
                  .closest("a")
                  .removeClass("ui-state-focus")
                  .find("img")
                  .attr("style", "opacity:1"),
                !1)
              : (q("#ghAC_RTM_Ads").find("img").attr("style", ""),
                clearTimeout(v),
                (v = setTimeout(function () {
                  b++;
                }, 1e3)),
                void 0 !== e.which &&
                  0 !== e.which &&
                  1 !== e.which &&
                  "" != t.item.value &&
                  (q(ebayAC.gh.searchBoxID).val(t.item.label),
                  void (
                    0 != q(ebayAC.gh.categorySelectID).length &&
                    (-1 < t.item.customHTML.indexOf("ghAC_cat")
                      ? (q(ebayAC.gh.categorySelectID).val(t.item.catID),
                        q(ebayAC.gh.categorySelectID).val() != t.item.catID &&
                          (t.item.catName, 1) &&
                          t.item.catName &&
                          q(ebayAC.gh.categorySelectID).append(
                            "<option value=" +
                              t.item.catID +
                              " selected>" +
                              t.item.catName +
                              "</option>"
                          ))
                      : q(ebayAC.gh.categorySelectID).val(
                          ebayAC.gh.getPrevCategoryID()
                        ))
                  )));
          },
          select: function (e, t) {
            var i,
              t = t.item,
              a =
                q("#gAC a.ui-corner-all").index(q(".ui-state-focus")) + 1 || -1,
              n = ebayAC.tracking,
              a = [
                {
                  key: "H",
                  val: b || 0,
                },
                {
                  key: "R",
                  val: a || 0,
                },
              ];
            ebayAC.savedserversion &&
              "Control" !== ebayAC.savedserversion &&
              a.push({
                key: "TSS",
                val: n.savedCount || 0,
              });
            if (t.savedURL)
              return (
                "savedsel" === t.RS
                  ? emitTrackingData("50838", a)
                  : "savedser" === t.RS && emitTrackingData("10046", a),
                y(),
                (document.location = t.savedURL),
                !1
              );
            if (
              (q(ebayAC.gh.formID + " input[type=hidden][name=_sacat]").val(
                t.catID || 0
              ),
              9 != e.which)
            ) {
              if (t.prodID)
                return (
                  emitTrackingData("1428"),
                  y(),
                  (document.location =
                    ebayAC.gh.getHref(V.acCatalog).replace(/#P#/, t.prodID) +
                    ebayAC.generateTrackID("1428")),
                  !1
                );
              if (t.logoLink) {
                let e = t.logoLink;
                return (
                  "ghAC_logo" == t.classN
                    ? (emitTrackingData("1523"),
                      (e =
                        e +
                        (0 < t.logoLink.indexOf("?") ? "&" : "?") +
                        "_trksid=" +
                        ebayAC.generateTrackID("1523")))
                    : "ghAC_store_suggestion" === t.classN
                    ? ((e =
                        e +
                        (0 < t.logoLink.indexOf("?") ? "&" : "?") +
                        "_trksid=" +
                        ebayAC.generateTrackID("113337")),
                      emitTrackingData("113337", a))
                    : "ghAC_help_suggestion" === t.classN
                    ? emitTrackingData("131990", a)
                    : "ghAC_rich_suggestion" === t.classN
                    ? emitTrackingData("159010", a)
                    : "ghAC_program_suggestion" === t.classN &&
                      emitTrackingData(t.clickLinkId, a),
                  y(),
                  (document.location = e),
                  !1
                );
              }
              if ("AC_RtmAd" == t.label)
                return (
                  (n = q("#ghAC_RTM_Ads a").attr("href")),
                  emitTrackingData("1523", [
                    {
                      key: "H",
                      val: b || 0,
                    },
                    {
                      key: "A",
                      val: 0,
                    },
                  ]),
                  y(),
                  (document.location =
                    n +
                    (0 < n.indexOf("?") ? "&" : "?") +
                    "_trksid=" +
                    ebayAC.generateTrackID("1523")),
                  !1
                );
              if (-1 < t.customHTML.indexOf("ghAC_cat"))
                0 < q(ebayAC.gh.categorySelectID).length &&
                  (q(ebayAC.gh.categorySelectID).val(t.catID),
                  q(ebayAC.gh.categorySelectID).val() != t.catID) &&
                  void 0 !== t.catName &&
                  t.catName &&
                  q(ebayAC.gh.categorySelectID).append(
                    "<option value=" +
                      t.catID +
                      " selected>" +
                      t.catName +
                      "</option>"
                  ),
                  (i = "recser" === t.RS ? "1312" : "2632"),
                  p(
                    ebayAC.generateTrackID("recser" === t.RS ? "1312" : "2632")
                  );
              else {
                if (0 < t.customHTML.indexOf("ghAC-hide"))
                  return ebayAC.disableAC(), !1;
                if ("" == t.value) return !1;
                (i = "recser" === t.RS ? "1312" : "1311"),
                  "ghAC_rich_suggestion" === t.classN
                    ? (i = "159010")
                    : "ghAC_trending_search" === t.classN
                    ? (i = "160631")
                    : "ghAC_sugg ghAC_nearme" === t.classN && (i = "169417"),
                  p(ebayAC.generateTrackID(i));
              }
              (e = t.formParams), (n = J(ebayAC, "gh.formID", void 0));
              if (e) {
                const s = document.querySelector(n || "gh-f");
                e.forEach((e) => {
                  var t =
                    s.querySelector(`[name="${e.name}"]`) ||
                    document.createElement("input");
                  t.setAttribute("hidden", ""),
                    t.setAttribute("name", e.name),
                    t.setAttribute("value", e.value),
                    s.appendChild(t);
                });
              }
              emitTrackingData(i, a),
                (f = !0),
                q(ebayAC.gh.searchBoxID).val(unEscapeSplChars(t.label)),
                q(ebayAC.gh.formID).submit();
            }
          },
        })
        .data("ui-autocomplete")._renderItem = function (e, t) {
        var i = q("<li " + (t.isHeading ? "class='ac-heading'" : "") + "></li>")
            .data("item.autocomplete", t)
            .data(
              "data-form-params",
              J(t, "formParams", [])
                .map(
                  (e) =>
                    J(e, "name", "") +
                    ":" +
                    encodeURIComponent(J(e, "value", ""))
                )
                .join(";")
            )
            .append(t.title || ""),
          a = t.isHeading
            ? q(
                "<div style='padding:14px 0 8px 8px;font-size:12px; color: #707070;'></div>"
              )
            : q(
                "<a " +
                  (t.ariaRole ? 'aria-role="' + t.ariaRole + '"' : "") +
                  (t.ariaText
                    ? 'aria-label="' +
                      escapeSplChars(unEscapeSplChars(t.ariaText)) +
                      '"'
                    : "") +
                  "></a>"
              ).attr("class", t.classN || "");
        return a.append(t.customHTML), i.append(a).appendTo(e);
      }),
      (q(ebayAC.gh.searchBoxID).data("ui-autocomplete")._resizeMenu =
        function () {
          var e = this.menu.element,
            t = q(ebayAC.gh.outerBoxID).outerWidth();
          e.outerWidth(t),
            2 <= window.devicePixelRatio &&
              null != window.mozInnerScreenX &&
              e.outerWidth(t - 0.5);
        }),
      q(window).bind("resize.gh", function () {
        q(ebayAC.gh.searchBoxID).data("ui-autocomplete")._resizeMenu();
      }),
      (ebayAC.disableAC = function () {
        var e,
          t = ebayAC.gh.cookieMethods;
        t &&
          ((e = t.readCookie("dp1", "pbf")),
          t.writeCookielet("dp1", "pbf", t.setBitFlag(e, 29, 1))),
          ebayAC.generateTrackImg(
            "roverclk/0/0/9?trknvp=sid%3D" + ebayAC.generateTrackID("1316")
          ),
          q(ebayAC.gh.searchBoxID).autocomplete("disable").attr({
            autocomplete: "on",
            autocapitalize: "on",
            autocorrect: "on",
            spellcheck: "true",
            "aria-haspopup": "false",
          }),
          q(ebayAC.gh.compID).addClass(ebayAC.gh.acDisabledClass),
          0 == q("#ghAC-show").length
            ? (q(ebayAC.gh.searchBoxID).after(
                "<a id=ghAC-show class='gh-spr icas' title='" +
                  V.acShowSuggestions +
                  "' href='#' role='button'></a>"
              ),
              q("#ghAC-show").bind("click", function () {
                var e,
                  t = ebayAC.gh.cookieMethods;
                t &&
                  ((e = t.readCookie("dp1", "pbf")),
                  t.writeCookielet("dp1", "pbf", t.setBitFlag(e, 29, 0))),
                  q(ebayAC.gh.compID).removeClass(ebayAC.gh.acDisabledClass),
                  q("#ghAC-show").hide(),
                  q(ebayAC.gh.searchBoxID)
                    .autocomplete("enable")
                    .attr({
                      autocomplete: "off",
                      autocapitalize: "off",
                      autocorrect: "off",
                      spellcheck: "false",
                      "aria-haspopup": "false",
                    })
                    .autocomplete("search")
                    .focus(),
                  ebayAC.generateTrackImg(
                    "roverclk/0/0/9?trknvp=sid%3D" +
                      ebayAC.generateTrackID("1315")
                  );
              }))
            : q("#ghAC-show").show();
      }),
      (ebayAC.initiateACAjax = function (e) {
        var t,
          i,
          a = [];
        for (const n of ["ac1", "ac2", "ac3", "ac4", "ac5", "ac6"])
          ebayAC.gh.factorEnabled(n) && a.push(n);
        if (
          ((a = a.join(",")), !ebayAC.savedserversion && window.localStorage)
        ) {
          var n,
            s = JSON.parse(localStorage.getItem("__ac_ss_factor__"));
          if (s && new Date() - Date.parse(s.time) < 36e5) {
            switch (s.factor) {
              case "a":
                n = "WithSave";
                break;
              case "b":
                n = "designWithSave";
                break;
              case "c":
                n = "Control";
            }
            ebayAC.savedserversion = n;
          }
        }
        if (
          ((s = ebayAC.getAutocompleteDomainUrl(ebayAC.gh.siteID)),
          (r = ebayAC.gh.siteID),
          (i = [0]),
          ebayAC.gh.factorEnabled("ac6") && (i.push(15), i.push(77)),
          (i = i.join("|")),
          (i =
            (s =
              new RegExp(`^(${i})$`).test(r) || ebayAC.gh.isQAPool
                ? X(window.location.origin, ebayAC.gh.siteID) + "/autosug"
                : s) +
            "?kwd=" +
            encodeURIComponent(e) +
            "&sId=" +
            ((!ebayAC.gh.isGeo && ebayAC.gh.siteID) || 0) +
            (ebayAC.useRegularAutoSug ? "&_ch=0" : "") +
            (ebayAC.gh.factorEnabled("ac1") ||
            ebayAC.gh.factorEnabled("ac2") ||
            ebayAC.gh.factorEnabled("ac3") ||
            ebayAC.gh.factorEnabled("ac4") ||
            ebayAC.gh.factorEnabled("ac5") ||
            ebayAC.gh.factorEnabled("ac6")
              ? "&_ac=" +
                (q(ebayAC.gh.categorySelectID).val() || "") +
                "&_f=" +
                a +
                "&_cp=" +
                (0 != ebayAC.caretFlag ? ebayAC.caretFlag : ebayAC.caretPos)
              : "") +
            "&_rs=1&_ss=1&_sl=1" +
            (ebayAC.savedserversion
              ? "&_ssfactor=" + ebayAC.savedserversion
              : "") +
            "&_richres=1&callback=0"),
          e)
        ) {
          i +=
            "&_store=1&_help=" +
            (ebayAC.gh.isGeo ? 0 : 1) +
            "&_richsug=1&_eprogram=1&_td=1&_nearme=" +
            ("/vlp/ebaylokal" === window.location.pathname ? 0 : 1);
          try {
            var o =
              window.localStorage &&
              JSON.parse(localStorage.getItem("autocomplete_active_factors"));
            localStorage.getItem("autocomplete_last_user") &&
              o &&
              o.zipcode &&
              (i += "&_stpos=" + o.zipcode);
          } catch (e) {
            console.error(e);
          }
        } else i += "&_ts=1";
        var r = !i.startsWith(window.location.origin);
        !r &&
          window.cosHeadersInfo &&
          (t = {
            "X-EBAY-C-TRACKING": window.cosHeadersInfo.getTrackingHeaders(),
          }),
          window.performance && performance.mark("ac_timer_start"),
          q.ajax({
            url: i,
            dataType: "json",
            cache: !0,
            headers: t,
            xhrFields: {
              withCredentials: !r,
            },
            success: function (e, t, i) {
              var i = i.getResponseHeader("XT"),
                i =
                  (i && (ebayAC.xtTag = i),
                  e.prefix
                    .replace(/^\s+/, "")
                    .replace(/  +/g, " ")
                    .toLowerCase()),
                a = "" === i ? "recentsearchesunique" : i;
              ebayAC.cacheAC[a] || (ebayAC.cacheAC[a] = Object.assign({}, e)),
                ebayAC.autoComplete_compileResponse(e, i),
                window.performance && performance.mark("ac_timer_end");
            },
          });
      }),
      (Q = []),
      (S.prototype.has = function (e) {
        return Set ? this.collection.has(e) : -1 < this.collection.indexOf(e);
      }),
      (ebayAC.autoComplete_compileResponse = function (n, l) {
        function u(e, t, i) {
          var a =
            "designWithSave" === ebayAC.savedserversion
              ? ((a = V.acSuggCategoryIn),
                i === p && 0 < l.length
                  ? (a = V.acSuggCategorySaved)
                  : i === m && 0 < l.length && (a = V.acSuggCategoryRecent),
                (a = (a = a.replace(/<u>/, "<u class=ghAC_cat>")).replace(
                  /<span>/,
                  "<span class=ghAC_cat>"
                )).replace(/<em>/, '<em class="ghAC_cat ghAC_separator">'))
              : V.acSuggCategory;
          return (
            (a = a.replace(/<i>/, "<i class=ghAC_cat>")),
            v.catCount++,
            A(a, {
              suggestion: e,
              category: t,
            })
          );
        }
        function h(e, t) {
          var i;
          return "designWithSave" === ebayAC.savedserversion &&
            t &&
            0 < l.length
            ? (t === p
                ? (i = V.acSuggSaved)
                : t === m
                ? (i = V.acSuggRecent)
                : t === f && (i = V.acHedSavedSeller),
              (i = (i = i.replace(/<span>/, "<span class=ghAC_cat>")).replace(
                /<em>/,
                '<em class="ghAC_cat ghAC_separator">'
              )),
              A(i, {
                suggestion: e,
              }))
            : e;
        }
        function d(e, t, i) {
          return (
            (e = A(V.acSuggCategoryInAria, {
              suggestion: e,
              category: t,
            })),
            i && (e += " — " + i),
            e
          );
        }
        var o,
          g,
          r = [],
          z = q(ebayAC.gh.searchBoxID).data("ui-autocomplete"),
          p = 1,
          m = 2,
          f = 3,
          v = {
            sugCount: 0,
            recentCount: 0,
            savedCount: 0,
            totalSugs: 0,
            catCount: 0,
            savedSellerCount: 0,
          },
          b = 5276,
          y = [],
          C = new RegExp(
            "(^|\\s)(" +
              q
                .trim(l.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\\\$&"))
                .replace(/ /gi, "|") +
              ")",
            "gi"
          ),
          A = function (e, t) {
            var i;
            return (
              void 0 !== ebayAC.gh.getBundle
                ? (i = ebayAC.gh.mergeContent(e, t))
                : "undefined" != typeof raptor &&
                  void 0 !== raptor.require &&
                  (i = raptor.require("ebay.content").merge(e, t)),
              i
            );
          };
        function _(e) {
          var t = e.image && e.image.replace(/s-l(\d+)/, "s-l64"),
            t = t
              ? '<span style="align-items:center;background:rgba(0,0,0,0.05);border-radius:8px;display:inline-flex;height:40px;margin-right:8px;overflow:hidden;width:40px;"><img aria-hidden="true" src="' +
                t +
                '" width="100%"/></span>'
              : "";
          const i = "color:#767676;font-size:12px";
          var a =
              {
                r: "Recent",
                ts: "Trending",
              }[e.type] || "",
            a =
              0 < a.length ? '<span style="' + i + '">' + a + " - </span>" : "",
            n = (e.categories || [])
              .reduce(
                (e, t) => (
                  0 < J(t, "catName.length", 0) &&
                    e.push('<span style="' + i + '">' + t.catName + "</span>"),
                  e
                ),
                []
              )
              .join(""),
            s = J(e, "aspectName", void 0)
              ? e.aspectName + ":" + J(e, "aspectValue", "")
              : "",
            s = J(e, "aspects", !1)
              ? e.aspects
                  .reduce(
                    (e, t) => (
                      e.push(t.aspectName + ":" + t.aspectValues.join(",")), e
                    ),
                    []
                  )
                  .join(";")
              : s,
            o = 0 < s.length ? '<span style="' + i + '">' + s + "</span>" : "",
            e =
              '<span style="display:-moz-box;display:-webkit-box;-moz-box-orient:vertical;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2;overflow:hidden">' +
              e.text +
              "</span>";
          return (
            '<span style="display:inline-flex;line-height:20px' +
            (0 < s.length ? "" : ";align-items:center") +
            '">' +
            t +
            (n || s ? "<span>" + e + a + (n || o) + "</span>" : e) +
            "</span>"
          );
        }
        function w(e) {
          var e = k(
              "string" == typeof e
                ? {
                    kwd: e,
                  }
                : e
            ),
            t = e.text.replace(C, "$1<b class=ghAC_hl>$2</b>"),
            t = e.image
              ? _(
                  Object.assign(e, {
                    text: t,
                  })
                )
              : t,
            i =
              0 < J(e, "categories.length", 0) ? e.categories[0].catId : void 0,
            a =
              0 < J(e, "categories.length", 0)
                ? e.categories[0].catName
                : void 0,
            n =
              ((cat = "<span class=ghAC_cat>" + a + "</span>"),
              (t = a ? u(e.kwd, cat) : t),
              a ? d(e.kwd, a) : e.kwd),
            e = {
              label: e.kwd,
              customHTML: t,
              catID: i,
              catName: a,
              classN: "ghAC_sugg",
              ariaText: n,
            };
          return g && ((e.title = g), (g = "")), e;
        }
        function k(e) {
          return Object.assign(e, {
            kwd: e.kwd || e.text,
            text: e.kwd || e.text,
          });
        }
        function e(e, t) {
          return {
            label: "",
            isHeading: !0,
            customHTML: t ? "<span class=" + t + ">" + e + "</span>" : e,
            exclLiveRegionCnt: !0,
          };
        }
        0 === l.length && (Q = []);
        var i,
          x,
          I,
          t = !1 !== J(n, "richRes", !1);
        function U(e, t) {
          var i = escapeSplChars(unEscapeSplChars(e.kwd));
          let a = void 0,
            n = void 0;
          function s(e) {
            var t;
            return K
              ? ((t = e.replace(C, "$1<b class=ghAC_hl>$2</b>")),
                0 === l.length ? "<b class=ghAC_hl>" + e + "</b>" : t)
              : e;
          }
          var o,
            r,
            c = K
              ? '<span data-keyword="' +
                encodeURIComponent(e.kwd) +
                '" style="font-weight:bold;" class="ac-recent"><span aria-hidden="true" style="padding: 0 16px 0 0;vertical-align: middle;"><svg focusable="false" height="16" width="16"><use xlink:href="#ac-icon-clock"></use></svg></span>' +
                s(i) +
                '<span aria-hidden="true" class="ac-button ac-recent-remove" style="float:right; padding:0 5px; background-color: transparent;background-repeat:no-repeat;border: none;cursor:pointer;overflow: hidden;outline:none;"><svg aria-hidden="true" focusable="false" height="14" width="14"><use xlink:href="#ac-icon-clear"></use></svg></span>'
              : '<span class="ghAC-recser ac-recent">' + s(e.kwd);
          if (
            ((c += "</span>"),
            (e.categories = e.categories || []),
            0 < e.categories.length || e.category
              ? (e.categories.forEach((e) => {
                  (a = e.catId),
                    (n = e.catName),
                    (o = "<span class=ghAC_cat>" + e.catName + "</span>"),
                    (r = u(c, o, m));
                }),
                e.category &&
                  ((a = e.category[0]),
                  (n = e.category[1]),
                  (o = "<span class=ghAC_cat>" + e.category[1] + "</span>"),
                  (r = u(c, o, m))))
              : (c = h(c, m)),
            0 == ebayAC.gh.getPrevCategoryID() ||
              (!e.category && 0 === J(e, "categories", []).length) ||
              ebayAC.gh.getPrevCategoryID() == e.category[0])
          )
            return (
              (i =
                (e.category || 0 < e.categories.length) &&
                ebayAC.gh.getPrevCategoryID() != a
                  ? {
                      label: e.kwd,
                      RS: "recser",
                      customHTML: r,
                      catID: a,
                      catName: n,
                      title: g,
                      ariaText: d(e.kwd, n, t),
                    }
                  : {
                      label: e.kwd,
                      RS: "recser",
                      customHTML: c,
                      title: g,
                      ariaText: e.kwd + " — " + t,
                    }),
              (g = ""),
              i
            );
        }
        function D(e) {
          e = new URLSearchParams({
            imp: b,
            trknvp: new URLSearchParams({
              kw: e.kwd + "." + ebayAC.generateTrackID("160630"),
            }),
          });
          ebayAC.generateTrackImg("roverimp/0/0/9/?" + e);
        }
        function a(e) {
          var t = (e) =>
              '<svg style="margin-right:1rem;vertical-align:text-bottom" width="16" height="16" fill="none"><use xlink:href="#ac-icon-trend"></use></svg><span>' +
              e.kwd +
              "</span>",
            i =
              (D(e),
              Q.push({
                sug: e.kwd,
                type: "ts",
              }),
              0 < J(e, "categories.length", 0)
                ? e.categories[0].catId
                : void 0),
            a =
              0 < J(e, "categories.length", 0)
                ? e.categories[0].catName
                : void 0;
          return (
            (cat = a ? "<span class=ghAC_cat>" + a + "</span>" : ""),
            {
              label: e.kwd,
              customHTML: 0 < cat.length ? u(t(e), cat, m) : t(e),
              catID: i,
              catName: a,
              classN: "ghAC_trending_search",
              ariaText: e.kwd,
            }
          );
        }
        if (
          (n.recser &&
            n.recser.sug &&
            ((i = Z("recent_searches")),
            (r = (r =
              K && 0 === l.length
                ? r.concat(e(i, "ac-recent-heading"))
                : r).concat(
              q.map(n.recser.sug, function (e, t) {
                return (
                  (trackingCat = e.category ? e.category[0] : 0),
                  y.push({
                    sug: e.kwd,
                    cat: trackingCat,
                    type: "r",
                  }),
                  0 === l.length &&
                    Q.push({
                      sug: e.kwd,
                      cat: trackingCat,
                      type: "r",
                    }),
                  U(e, i)
                );
              })
            )),
            (v.recentCount = n.recser.sug.length)),
          !l && n.trending && n.trending.sug && n.trending.sug.length)
        ) {
          var T = Z("trending_searches");
          r.push(e(T, "ac-trend-heading"));
          for (const N of n.trending.sug)
            r.push(a(N)),
              Q.push({
                sug: N.kwd,
                type: "ts",
              });
        }
        !l &&
          0 < J(n, "richNullState.sug.length", 0) &&
          t &&
          ((T = Z("trending_searches")),
          0 <
            (S = J(n, "richNullState.sug", []).filter((e) => "ts" === e.type))
              .length && r.push(e(T, "ac-trend-heading")),
          (r = r.concat(
            S.map((e) => {
              D(e),
                Q.push({
                  sug: e.kwd,
                  type: "ts",
                });
              var e = k(e),
                t = J(e, "image", ""),
                i = e.text.replace(C, "$1<b class=ghAC_hl>$2</b>");
              return 0 < t.length
                ? {
                    label: e.kwd,
                    customHTML: _(
                      Object.assign(e, {
                        text: i,
                      })
                    ),
                  }
                : a(e);
            })
          ))),
          K &&
            n.savedser &&
            n.savedser.sug &&
            ((x = Z("saved_searches")),
            (r = (r = 0 === l.length ? r.concat(e(x)) : r).concat(
              q.map(n.savedser.sug, function (e, t) {
                var i,
                  a,
                  n = [],
                  s =
                    '<span><span style="padding: 0 16px 0 0;vertical-align: middle;"><svg aria-hidden="true" focusable="false" height="16" width="16"><use xlink:href="#ac-icon-saved"></use></svg></span>' +
                    e.kwd +
                    "</span>";
                e.category
                  ? ((i = "<span class=ghAC_cat>" + e.category[1] + "</span>"),
                    (i = u(s, i, p)),
                    e.category[0])
                  : (s = h(s, p));
                if (
                  (y.push({
                    sug: e.kwd,
                    cat: e.savedSearchId,
                    type: "ss",
                  }),
                  0 === l.length &&
                    Q.push({
                      sug: e.kwd,
                      cat: e.savedSearchId,
                      type: "ss",
                    }),
                  0 == ebayAC.gh.getPrevCategoryID() ||
                    !e.category ||
                    ebayAC.gh.getPrevCategoryID() == e.category[0])
                )
                  return (
                    (a =
                      e.searchURI +
                      "&_trksid=" +
                      ebayAC.generateTrackID("10046")),
                    (n =
                      e.category &&
                      ebayAC.gh.getPrevCategoryID() != e.category[0]
                        ? {
                            label: e.kwd,
                            RS: "savedser",
                            customHTML: i,
                            catID: e.category[0],
                            catName: e.category[1],
                            title: g,
                            ariaText: d(e.kwd, e.category[1], x),
                            savedURL: a,
                          }
                        : {
                            label: e.kwd,
                            RS: "savedser",
                            customHTML: s,
                            title: g,
                            ariaText: e.kwd + " — " + x,
                            savedURL: a,
                          }),
                    (g = ""),
                    n
                  );
              })
            )),
            (v.savedCount = n.savedser.sug.length)),
          K &&
            n.savedSellerResponse &&
            n.savedSellerResponse.sug &&
            ((I = Z("saved_sellers")),
            (r = (r = 0 === l.length ? r.concat(e(I)) : r).concat(
              q.map(n.savedSellerResponse.sug, function (e, t) {
                var i =
                    '<span><span aria-hidden="true" style="padding: 0 16px 0 0;vertical-align: middle;"><svg focusable="false" height="16" width="16"><use xlink:href="#ac-icon-saved"></use></svg></span>' +
                    e.sellerName +
                    "</span>",
                  i = h(i, f),
                  a =
                    (y.push({
                      sug: e.sellerName,
                      cat: 0,
                      type: "sl",
                    }),
                    0 === l.length &&
                      Q.push({
                        sug: e.sellerName,
                        cat: 0,
                        type: "sl",
                      }),
                    "/sch/i.html?_ssn=" +
                      encodeURIComponent(e.sellerName) +
                      "&_trksid=" +
                      ebayAC.generateTrackID("50838")),
                  i = {
                    label: e.sellerName,
                    RS: "savedsel",
                    customHTML: i,
                    title: g,
                    ariaText: e.sellerName + " — " + I,
                    savedURL: a,
                  };
                return (g = ""), i;
              })
            )),
            (v.savedSellerCount = n.savedSellerResponse.sug.length)),
          void 0 !== ebayAC.ghostText.ghost &&
            ebayAC.ghostText.ghost.handleAcResponse(n.res);
        var W,
          O,
          T = Object.assign(
            {},
            J(n, "richRes", {
              sug: [],
            })
          ),
          S = J(n, "res", {
            sug: [],
          }),
          S = t
            ? ((W = n.prefix),
              (O = !0),
              T.sug
                .map((a) => {
                  var e = [],
                    t =
                      (W !== a.kwd &&
                        O &&
                        ((t = Object.assign({}, a)),
                        e.push(
                          Object.assign(t, {
                            categories: [],
                          })
                        )),
                      J(a, "categories", []));
                  return t.length
                    ? t.reduce((e, t) => {
                        var i = Object.assign({}, a);
                        return (
                          e.push(
                            Object.assign(i, {
                              categories: [
                                {
                                  catId: t.catId,
                                  catName: t.catName,
                                },
                              ],
                            })
                          ),
                          e
                        );
                      }, e)
                    : [a];
                })
                .reduce((e, t) => e.concat(t), []))
            : S.sug;
        function L(e) {
          return (
            "<b>" + e.replace(C, "$1<span class=ghAC_hl>$2</span>") + "</b>"
          );
        }
        function j(e, t) {
          var i = new URLSearchParams({
              imp: b,
              trknvp: new URLSearchParams({
                kw: l + "." + ebayAC.generateTrackID("169483"),
              }),
            }),
            a = (ebayAC.generateTrackImg("roverimp/0/0/9/?" + i), []);
          for (const o in t)
            a.push({
              name: o,
              value: t[o],
            });
          (i = Z("pickup_near_me") + t._stpos),
            (i = {
              label: e,
              customHTML:
                L(e) +
                ' <u>–</u> <span style="color:#0654ba;font-weight:400;margin:0">' +
                i +
                "</span>",
              classN: "ghAC_sugg ghAC_nearme",
              ariaText: e + " - " + i,
              formParams: a,
            });
          let n = !1,
            s = 0;
          for (; s < r.length - 1; s++)
            if (r[s].catID) {
              n = !0;
              break;
            }
          (s = n ? s : 0),
            r.splice(s + 1, 0, i),
            y.splice(s + 1, 0, {
              sug: e,
              type: "ns",
            });
        }
        t
          ? (r = r.concat(
              q.map(S, function (t, e) {
                v.sugCount++;
                var i =
                    "string" == typeof t
                      ? {
                          kwd: t,
                        }
                      : t,
                  a =
                    ((i.text = i.kwd),
                    i.text.replace(C, "$1<b class=ghAC_hl>$2</b>")),
                  n =
                    0 < J(i, "categories.length", 0)
                      ? i.categories[0].catId
                      : void 0;
                if (
                  (y.push({
                    sug: t.kwd,
                    cat: n || 0,
                    type: t.type,
                  }),
                  0 === l.length &&
                    Q.push({
                      sug: t.kwd,
                      cat: n || 0,
                      type: t.type,
                    }),
                  i.image)
                ) {
                  var s,
                    n = Object.assign(i, {
                      text: a,
                    }),
                    t = _(k(n)),
                    a =
                      0 < J(n, "categories.length", 0)
                        ? n.categories[0].catId
                        : void 0,
                    o =
                      0 < J(n, "categories.length", 0)
                        ? n.categories[0].catName
                        : void 0,
                    r = o ? d(n.kwd, o) : n.kwd;
                  let e = [];
                  return (
                    !n.bnId &&
                      n.zoomId &&
                      (e = [
                        {
                          name: "modelZoomId",
                          value: n.zoomId,
                        },
                      ]),
                    "ms" === n.type &&
                      ((s = new URLSearchParams({
                        imp: b,
                        trknvp: new URLSearchParams({
                          kw: l + "." + ebayAC.generateTrackID("159009"),
                        }),
                      })),
                      ebayAC.generateTrackImg("roverimp/0/0/9/?" + s)),
                    {
                      label: n.kwd,
                      customHTML: t,
                      catID: a,
                      catName: o,
                      ariaText: r,
                      formParams: e,
                    }
                  );
                }
                return w(i);
              })
            ))
          : S && 0 < S.length
          ? (($ = !1),
            (S = q.map(S, function (e, t) {
              var i = [];
              if (
                ((highlightedItem = e.replace(C, "$1<b class=ghAC_hl>$2</b>")),
                v.sugCount++,
                i.push(w(e)),
                0 == t &&
                  (c = n.res.categories) &&
                  0 == ebayAC.gh.getPrevCategoryID())
              )
                for (
                  y.push({
                    sug: e,
                    cat: 0,
                    type: "s",
                  }),
                    0 === l.length &&
                      Q.push({
                        sug: e,
                        cat: 0,
                        type: "s",
                      }),
                    o = 0;
                  o < c.length;
                  o++
                ) {
                  s = u(highlightedItem, c[o][1]);
                  var a = {
                    label: e,
                    title: g,
                    customHTML: s,
                    catID: c[o][0],
                    catName: c[o][1],
                    classN: "ghAC_sugg",
                    ariaText: d(e, c[o][1]),
                  };
                  n.prefix === e ? (i[o] = a) : (i[o + 1] = a),
                    v.sugCount++,
                    (g = ""),
                    y.push({
                      sug: e,
                      cat: c[o][0],
                      type: "s",
                    }),
                    0 === l.length &&
                      Q.push({
                        sug: e,
                        cat: c[o][0],
                        type: "s",
                      });
                }
              else
                y.push({
                  sug: e,
                  cat: 0,
                  type: "s",
                }),
                  0 === l.length &&
                    Q.push({
                      sug: e,
                      cat: 0,
                      type: "s",
                    });
              return i;
            })),
            (r = r.concat(S)),
            (g =
              "<p class=ghAC_title><em class=ghAC_titletxt>" +
              V.acPopularProducts +
              "</em></p>"),
            n.res &&
              n.res.prd &&
              (r = r.concat(
                q.map(n.res.prd, function (e) {
                  e = {
                    label: e[1],
                    customHTML:
                      "<img class=ghAC_prd_img src='" +
                      e[2] +
                      "'>" +
                      e[1].replace(C, "<b class=ghAC_hl>$1</b>"),
                    prodID: e[0],
                    classN: "ghAC_prd",
                    title: g,
                  };
                  return (g = null), e;
                })
              )))
          : 0 !== l.length && (ebayAC.trackingObj.emptyResponseKew = l);
        let N = J(n, "richRes.sug", []);
        var P,
          E,
          S = N.find((e) => e && "ns" === e.type);
        if (
          (S
            ? j(S.kwd, S.params)
            : ((N = J(n, "res.sug", [])),
              (S = J(n, "res.nearMe")) && N.length && j(N[0], S)),
          !t && 0 < J(n, "res.richSugs.sugs.length", 0))
        )
          for (const N of n.res.richSugs.sugs) {
            var R = new URLSearchParams({
                imp: b,
                trknvp: new URLSearchParams({
                  kw: N.text + "." + ebayAC.generateTrackID("159009"),
                }),
              }),
              H =
                (ebayAC.generateTrackImg("roverimp/0/0/9/?" + R),
                y.push({
                  sug: N.text,
                  type: n.res.richSugs.type,
                }),
                {
                  label: N.text,
                  customHTML:
                    ((R = N),
                    void 0,
                    (P = H = void 0),
                    (H = (H = R.image && R.image.replace(/s-l(\d+)/, "s-l64"))
                      ? '<span class="rich-image-container" style="align-items:center;background:rgba(0,0,0,0.05);border-radius:8px;display:inline-flex;height:40px;margin-right:8px;overflow:hidden;width:40px;"><img aria-hidden="true" src="' +
                        H +
                        '" width="100%"/></span>'
                      : ""),
                    (P =
                      R.aspectName && R.aspectValue
                        ? '<span style="color:#707070;font-size:12px">' +
                          R.aspectName +
                          ": " +
                          R.aspectValue +
                          "</span>"
                        : ""),
                    (R =
                      '<span style="display:-moz-box;display:-webkit-box;-moz-box-orient:vertical;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2;overflow:hidden">' +
                      L(R.text) +
                      "</span>"),
                    '<span style="display:inline-flex;line-height:20px' +
                      (P ? "" : ";align-items:center") +
                      '">' +
                      H +
                      (P ? "<span>" + R + P + "</span>" : R) +
                      "</span>"),
                  classN: "ghAC_rich_suggestion",
                  logoLink: ((e) => {
                    if (e.bnId)
                      return (
                        (e = new URL(
                          "/b/bn_" + e.bnId,
                          X(window.location.origin, ebayAC.gh.siteID)
                        )).searchParams.set(
                          "_trksid",
                          ebayAC.generateTrackID("159010")
                        ),
                        e
                      );
                  })(N),
                  ariaText: N.text,
                });
            N.bnId ||
              (H.formParams = [
                {
                  name: "modelZoomId",
                  value: N.zoomId,
                },
              ]),
              r.push(H);
          }
        if (n.res && n.res.helpIntents) {
          const M = Z("in_customer_service");
          S = n.res.helpIntents.map(function (e) {
            var t = e[0],
              i = e[1],
              e = e[2],
              a = new URL(
                "/help/sr",
                X(window.location.origin, ebayAC.gh.siteID)
              ),
              e =
                (a.searchParams.set("query", t),
                a.searchParams.set("refPgId", ebayAC.gh.pageID),
                a.searchParams.set("origin", e),
                a.searchParams.set("_trksid", ebayAC.generateTrackID("131990")),
                new URLSearchParams({
                  imp: b,
                  trknvp: new URLSearchParams({
                    kw: t + "." + ebayAC.generateTrackID("131994"),
                    classConfScr: i,
                  }),
                }));
            return (
              ebayAC.generateTrackImg("roverimp/0/0/9/?" + e),
              y.push({
                sug: t,
                type: "hp",
                link: a,
              }),
              {
                label: t,
                customHTML:
                  '<svg style="margin-right:1rem;vertical-align:text-bottom" width="16" height="16" fill="none"><use xlink:href="#ac-icon-help"></use></svg><span>' +
                  L(t) +
                  ' <u>–</u> <span style="color:#0654ba">' +
                  M +
                  "</span></span>",
                classN: "ghAC_help_suggestion",
                logoLink: a,
                title: "",
                ariaText: t + " - " + M,
              }
            );
          });
          r = r.concat(S);
        }
        if (n.res && n.res.program) {
          t = new URLSearchParams({
            imp: b,
            trknvp: new URLSearchParams({
              kw: l + "." + ebayAC.generateTrackID("161897"),
            }),
          });
          ebayAC.generateTrackImg("roverimp/0/0/9/?" + t);
          const N = n.res.program;
          (S = N.clickLinkId), (t = new URL(N.webProgramUrl));
          t.searchParams.set("_trksid", ebayAC.generateTrackID(S)),
            y.push({
              sug: N.text,
              type: "pgm",
              link: t,
            }),
            r.push({
              label: N.text,
              customHTML:
                '<svg style="margin-right:1rem;vertical-align:text-bottom;-webkit-mask-image:url(' +
                (E = N).webImage +
                ');-webkit-mask-repeat:round,no-repeat;-webkit-mask-size:contain;background:#707070" width="16" height="16"></svg>' +
                "<span>" +
                L(E.text) +
                ' <u>–</u> <span style="color:#0654ba">' +
                E.name +
                "</span></span>",
              clickLinkId: S,
              classN: "ghAC_program_suggestion",
              logoLink: t,
              ariaText: N.text + " - " + N.name,
            });
        }
        if (
          n &&
          n.res &&
          !n.res.td &&
          n.res.stores &&
          0 < n.res.stores.length
        ) {
          const F = X(window.location.origin, ebayAC.gh.siteID) + "/",
            B = Z("in_ebay_stores");
          r = r.concat(
            q.map(n.res.stores, function (e) {
              var t = e[1],
                i = escapeSplChars(unEscapeSplChars(t));
              return (
                ebayAC.generateTrackImg(
                  "roverimp/0/0/9/?imp=" +
                    b +
                    "&trknvp=" +
                    encodeURIComponent(
                      "kw=" +
                        l +
                        "." +
                        ebayAC.generateTrackID("113336") +
                        "&storeid=" +
                        e[0]
                    )
                ),
                y.push({
                  sug: t,
                  type: "st",
                  trackingTarget: e[0],
                  isStore: !0,
                }),
                {
                  label: t,
                  customHTML:
                    '<svg style="margin-right:1rem;vertical-align:text-bottom" width="16" height="16" fill="none"><use xlink:href="#ac-icon-store"></svg><span>' +
                    i +
                    ' <u>–</u> <span style="color:#0654ba">' +
                    B +
                    "</span></span>",
                  classN: "ghAC_store_suggestion",
                  logoLink: F + "str/" + e[2],
                  title: "",
                  ariaText: t + " - " + B,
                }
              );
            })
          );
        }
        function G(e) {
          z.response(e),
            window.localStorage &&
              !localStorage.getItem("ac_first_interact_timer") &&
              window.performance &&
              performance.getEntriesByName &&
              performance.getEntriesByName("ac_first_interact_timer_start")
                .length &&
              (performance.mark("ac_first_interact_timer_end"),
              (e = performance.measure(
                "ac_first_interact_timer",
                "ac_first_interact_timer_start",
                "ac_first_interact_timer_end"
              )),
              localStorage.setItem("ac_first_interact_timer", e.duration));
        }
        n.res &&
          n.res.td &&
          (r = r.concat(
            q.map(n.res.td, function (e) {
              return (
                ebayAC.generateTrackImg(
                  "roverimp/0/0/9/?imp=5276&trknvp=kw%3D" +
                    l +
                    (ebayAC.gh.pageID ? "%26rpg%3D" + ebayAC.gh.pageID : "") +
                    "%26td%3D" +
                    e[0]
                ),
                y.push({
                  sug: e[0],
                  cat: 0,
                  type: "td",
                  banner: e[1],
                  url: e[2],
                }),
                {
                  label: "",
                  customHTML:
                    "<img alt='" +
                    e[0] +
                    "' class=ghAC_logo_img src='" +
                    e[1] +
                    "'>",
                  classN: "ghAC_logo",
                  logoLink: e[2],
                  title: "<p class=ghAC_title></p>",
                }
              );
            })
          )),
          (ebayAC.trackingObj.suggestionList = y),
          (ebayAC.trackingObj.nullStateSuggestionList = Q),
          0 === r.length
            ? (G([]),
              document
                .querySelector(ebayAC.gh.searchBoxID)
                .setAttribute("aria-expanded", !1))
            : ((ebayAC.tracking = v),
              G(r),
              document
                .querySelector(ebayAC.gh.searchBoxID)
                .setAttribute("aria-expanded", !0),
              l &&
                0 !== l.length &&
                !ebayAC.trackingObj.timerFirstTimeTyping &&
                (ebayAC.trackingObj.timerFirstTimeTyping = Date.now()));
      }),
      q(ebayAC.gh.formID).unbind("submit"),
      q(ebayAC.gh.formID).bind("submit", function (e) {
        var t = ebayAC.trackingObj.suggestionList || [],
          i = {
            hp: "131990",
            pgm: "",
          };
        1 === t.length && Object.keys(i).includes(t[0].type)
          ? (e.preventDefault(),
            emitTrackingData(i[t[0].type] || t[0].clickLinkId, [
              {
                key: "H",
                val: b || 0,
              },
              {
                key: "R",
                val: 0,
              },
            ]),
            y(),
            (e = new URL(t[0].link)),
            "hp" === t[0].type && e.searchParams.set("origin", 4),
            (document.location = e))
          : f || z();
      }),
      document.activeElement.id === ebayAC.gh.searchBoxID.substring(1) &&
        q(ebayAC.gh.searchBoxID).autocomplete("search"),
      (ebayAC.ghostText = function (e) {
        "use strict";
        var i,
          r,
          o,
          n,
          s,
          c,
          l,
          a,
          u,
          h,
          d,
          g,
          p = ebayAC.gh.jQ || jQuery,
          m = e,
          f = [16, 17, 18, 91],
          v = function (e) {
            (i = p(e.inputWrapId)),
              (r = p(e.inputId)),
              (o = p(e.trackingInputSel)),
              i.append(t(r)),
              r.css("position", "absolute"),
              r.css("z-index", 2),
              (u = !1),
              (h = {}),
              (g = !(d = {})),
              r.on("keydown", function (e) {
                var t = e.keyCode;
                (a = this.selectionStart),
                  (h[t] = !!_(t)),
                  (u = 8 === t),
                  b(e, t, a, this.selectionEnd, u);
              }),
              r.on("keyup", function (e) {
                var e = e.keyCode,
                  t = p(this).val();
                _(e) && (h[e] = !1),
                  (0 < t.indexOf("  ") || 0 === t.length || !x(t, l, c)) && k();
              }),
              r.on("focus", function (e) {
                x(p(this).val(), l, c) || k();
              });
          },
          b = function (e, t, i, a, n) {
            var s, o;
            (39 === t && A()) ||
              (9 === t || 39 === t
                ? ((s = c && i < c.length),
                  (o = c && r.val() && r.val().length === c.length),
                  s &&
                    !o &&
                    x(r.val(), l, c) &&
                    (r.focus().val(c), D(!0), C(), 39 !== t) &&
                    e.preventDefault())
                : 88 === t && A()
                ? (k(), D(!1))
                : 1 === i && n && k(),
              n && (D(!1), y(i, a)));
          },
          y = function (e, t) {
            var i = n.html(),
              a = s.html(),
              i =
                e === t
                  ? ((a = i.substring(--t, e) + a), i.substring(0, t))
                  : ((a = i.substring(t, e) + a), i.substring(0, e));
            n.html(i), s.html(a);
          },
          C = function () {
            var e = n.html(),
              t = s.html();
            n.html(e + t), s.html("");
          },
          A = function () {
            for (var e = 0, t = f.length; e < t; e++)
              if (!0 === h[f[e]]) return !0;
            return !1;
          },
          _ = function (e) {
            for (var t = 0, i = f.length; t < i; t++) if (f[t] === e) return !0;
            return !1;
          },
          w = function (e, t, i, a) {
            a && 0 === i
              ? k()
              : (i && i++,
                (a = t.substring(e.length, t.length)),
                x(e, t, (c = e + a)) && (n.html(e), s.html(a), I(c)));
          },
          k = function () {
            n.html(""), s.html(""), (c = "");
          },
          t = function (e) {
            var t = p(
              '<div data="ghostText"><span id="ghostPrefix"></span><span id="ghostSuffix"></span></div>'
            );
            return (
              (n = t.find("#ghostPrefix")),
              (s = t.find("#ghostSuffix")),
              t.attr("class", e.attr("class")),
              t.css({
                "font-size": e.css("font-size"),
                "font-family": e.css("font-family"),
                padding: e.css("padding"),
                "padding-top": e.css("padding-top"),
                "padding-left": e.css("padding-left"),
                height: e.css("height"),
                "line-height": e.css("line-height"),
                "vertical-align": e.css("vertical-align"),
                "-webkit-box-sizing": e.css("box-sizing"),
                "-moz-box-sizing": e.css("box-sizing"),
                "box-sizing": e.css("box-sizing"),
                top: e.css("top"),
                margin: e.css("margin"),
                "margin-top": e.css("margin-top"),
              }),
              t.css({
                color: "#ccc",
                position: "absolute",
                "z-index": 1,
                "border-color": "transparent",
                "background-color": "transparent",
                outline: "transparent",
              }),
              n.css({
                color: "#fff",
              }),
              t
            );
          },
          x = function (e, t, i) {
            return (
              !!(e && t && i) &&
              t === i.toLowerCase() &&
              e === i.substring(0, e.length)
            );
          },
          I = function (e) {
            e && 0 < e.trim().length && ((d[e.trim().toLowerCase()] = 1), T());
          },
          D = function (e) {
            (g = e), T();
          },
          T = function () {
            var e,
              t,
              i,
              a,
              n = o.val(),
              s = [];
            if (n) {
              for (t = 0, i = (e = n.trim().split(".")).length; t < i; t++)
                L(e[t]) || s.push(e[t]);
              (n = S(d)),
                g
                  ? s.push((a = "G|" + (n = n <= 0 ? 1 : n) + "|1"))
                  : 0 < n && s.push((a = "G|" + n + "|0"));
            }
            ebayAC.trackingObj.ghostTracking = a;
          },
          S = function (e) {
            var t,
              i = 0;
            for (t in e) e.hasOwnProperty(t) && i++;
            return i;
          },
          L = function (e) {
            return null !== e.match(/^G\|\d+\|\d+$/);
          };
        return {
          init: v,
          handleAcResponse: function (e) {
            var t = !!(void 0 !== e && e.ghostText && 0 < e.ghostText.length);
            t && !i && v(m),
              i &&
                (r.val() && t
                  ? ((l = e.ghostText),
                    u
                      ? l !== c.toLowerCase() && k()
                      : t
                      ? ((c = l), w(r.val(), l, a, u))
                      : k())
                  : k());
          },
          handleKeyDown: b,
          setKeysDown: function (e) {
            h = e;
          },
          isComboKeyDown: A,
          isComboKey: _,
          getComboKeys: function () {
            return f;
          },
          insertGhostText: w,
          clearGhostText: k,
          getCurrGhostText: function () {
            return c;
          },
          isGhostTextValid: x,
          getMapSize: S,
          equalsTrackingString: L,
          keepTrackOfText: I,
          setHasUsedGhostText: D,
          getGhostTextMap: function () {
            return d;
          },
          setGhostTextMap: function (e) {
            d = e;
          },
        };
      }),
      (ebayAC.ghostText.ghost = new ebayAC.ghostText({
        inputWrapId: ebayAC.gh.innerBoxID,
        inputId: ebayAC.gh.searchBoxID,
        trackingInputSel: ebayAC.gh.formID + " input[name=_trksid]",
      }));
  },
  function (e, t, i) {
    const a = {
        0: "en-US",
        22: "ru-RU",
        23: "fr-FR",
        31: "pt-BR",
        71: "fr-FR",
        77: "de-DE",
        101: "it-IT",
        123: "nl-NL",
        146: "nl-NL",
        186: "es-ES",
        201: "zh-HK",
        210: "fr-CA",
        212: "pl-PL",
        213: "pt-BR",
        215: "ru-RU",
        223: "zh-CN",
      },
      n = {
        in_customer_service: i(2),
        in_ebay_stores: i(3),
        trending_searches: i(4),
        recent_searches: i(5),
        pickup_near_me: i(6),
        save_searches: i(7),
        saved_sellers: i(8),
        ac_results_count: i(9),
      };
    e.exports = function (e, t) {
      var i;
      return (
        (e &&
          ((i = a[0]), (t = a[t || 0] || i), (e = n[e] || {})[t] || e[i])) ||
        ""
      );
    };
  },
  function (e, t) {
    e.exports = {
      "de-DE": "in Kundenservice",
      "es-ES": "en Atención al cliente",
      "en-US": "in Customer Service",
      "fr-FR": "dans Service clients",
      "it-IT": "in Servizio clienti",
    };
  },
  function (e, t) {
    e.exports = {
      "de-DE": "in eBay Shops",
      "es-ES": "en Tiendas eBay",
      "en-US": "in eBay stores",
      "fr-FR": "dans les boutiques eBay",
      "it-IT": "nei Negozi eBay",
      "nl-NL": "in eBay-winkels",
      "pl-PL": "w Sklepach eBay",
      "pt-BR": "nas lojas do eBay",
      "ru-RU": "в Магазины eBay",
      "zh-CN": "在 eBay 商店",
      "zh-HK": "在 eBay 店铺",
    };
  },
  function (e, t) {
    e.exports = {
      "de-DE": "Beliebte Suchen",
      "es-CO": "Búsquedas más populares",
      "es-ES": "Búsquedas habituales",
      "en-US": "Trending searches",
      "fr-CA": "Recherches dans les tendances",
      "fr-FR": "Recherches populaires",
      "it-IT": "Ricerche di tendenza",
      "nl-NL": "Populaire zoekopdrachten",
      "pl-PL": "Popularne wyszukiwania",
      "pt-BR": "Tendências de pesquisas",
      "zh-CN": "热门搜索",
      "zh-HK": "熱門搜尋",
    };
  },
  function (e, t) {
    e.exports = {
      "de-DE": "Aktuelle Suchen",
      "es-CO": "Búsquedas recientes",
      "es-ES": "Búsquedas recientes",
      "en-US": "Recent Searches",
      "fr-CA": "Recherches récentes",
      "fr-FR": "Recherches récentes",
      "it-IT": "Ricerche recenti",
      "nl-NL": "Recente zoekopdrachten",
      "pl-PL": "Niedawne wyszukiwania",
      "pt-BR": "Pesquisas recentes",
      "zh-CN": "最近搜索",
      "zh-HK": "最近的搜尋",
    };
  },
  function (e, t) {
    e.exports = {
      "de-DE": "Abholung in der Nähe von ",
      "en-US": "Pickup near ",
    };
  },
  function (e, t) {
    e.exports = {
      "de-DE": "Gespeicherte Suchen",
      "es-ES": "Búsquedas guardadas",
      "en-US": "Saved searches",
      "fr-CA": "Recherches favorites",
      "fr-FR": "Recherches favorites",
      "it-IT": "Ricerche salvate",
      "nl-NL": "Opgeslagen zoekopdrachten",
      "pl-PL": "Zapisane wyszukiwania",
    };
  },
  function (e, t) {
    e.exports = {
      "de-DE": "Gespeicherte Verkäufer",
      "es-ES": "Vendedores guardados",
      "en-US": "Saved sellers",
      "fr-CA": "Vendeurs favoris",
      "fr-FR": "Vendeurs favoris",
      "it-IT": "Venditori salvati",
      "nl-NL": "Opgeslagen verkopers",
      "pl-PL": "Zapisani sprzedawcy",
    };
  },
  function (e, t) {
    e.exports = {
      "de-DE":
        "${count} Ergebnisse gefunden; nutzen Sie zum Navigieren die Pfeiltasten nach oben und unten oder streichen Sie bei Touch-Geräten nach links und rechts.",
      "es-ES":
        "${count} resultados disponibles; para desplazarte, utiliza las flechas hacia arriba o hacia abajo, o desliza a izquierda y derecha en dispositivos táctiles.",
      "en-US":
        "${count} results available; to navigate, use up and down arrow keys or swipe left and right on touch devices.",
      "fr-CA":
        "${count} résultats disponibles. Utilisez les flèches de défilement ou balayez vers la droite et la gauche sur les appareils tactiles pour parcourir les résultats.",
      "fr-FR":
        "${count} résultats disponibles. Pour vous déplacer, utilisez les flèches vers le haut et vers le bas, ou, sur les appareils à écran tactile, balayez vers la gauche ou vers la droite.",
      "it-IT":
        "${count} risultati disponibili; per navigare, usa i tasti freccia su/giù oppure scorri a destra e a sinistra sui dispositivi touch screen.",
      "nl-NL":
        "${count} resultaten beschikbaar. Gebruik de pijltjestoetsen of veeg naar links en rechts op apparaten met aanraakfunctionaliteit om te navigeren.",
      "pl-PL":
        "Dostępne wyniki: ${count}. Do nawigacji użyj klawiszy strzałek w górę i w dół lub przesuwaj palcem w lewo i w prawo na urządzeniach dotykowych.",
    };
  },
]);
