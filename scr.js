!(function (j, l) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = l())
    : "function" == typeof define && define.amd
    ? define("HttpClient", l())
    : ((j = j || self).HttpClient = l());
})(this, function () {
  var j =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (a) {
          return typeof a;
        }
      : function (a) {
          return a &&
            "function" == typeof Symbol &&
            a.constructor === Symbol &&
            a !== Symbol.prototype
            ? "symbol"
            : typeof a;
        };
  "function" == typeof Symbol && Symbol.for && Symbol.for("react.element");
  var l = function (a, d) {
      if (!(a instanceof d))
        throw new TypeError("Cannot call a class as a function");
    },
    i,
    o = function (a, d) {
      for (var b = 0; b < d.length; b++) {
        var e = d[b];
        e.enumerable = e.enumerable || !1;
        e.configurable = !0;
        "value" in e && (e.writable = !0);
        Object.defineProperty(a, e.key, e);
      }
    };
  i = function (a, d, b) {
    return d && o(a.prototype, d), b && o(a, b), a;
  };
  var n =
    (Object.assign,
    function d(b, a, p) {
      null === b && (b = Function.prototype);
      var f = Object.getOwnPropertyDescriptor(b, a);
      if (void 0 === f)
        return (b = Object.getPrototypeOf(b)), null === b ? void 0 : d(b, a, p);
      if ("value" in f) return f.value;
      a = f.get;
      return void 0 !== a ? a.call(p) : void 0;
    });
  "undefined" == typeof global ? self : global;
  var g,
    h = function (a) {
      l(this, h);
      this.VERSION = "2";
      this.win = a || window;
      this.initialize();
    };
  g =
    (i(
      h,
      [
        {
          key: "initialize",
          value: function () {
            var a;
            this.HOST_NAME = this.win.location.hostname;
            this.IS_DEV_MACHINE_HOST =
              5 < this.win.location.origin.lastIndexOf(":") &&
              -1 === this.HOST_NAME.indexOf("lvs") &&
              -1 === this.HOST_NAME.indexOf("slc") &&
              -1 === this.HOST_NAME.indexOf("phx");
            this.ENV =
              ((a =
                (j(this.win.GH) !== h.TYPE_UNDEFINED &&
                  j(this.win.GH.C) !== h.TYPE_UNDEFINED &&
                  this.win.GH.C.env) ||
                h.ENV_ENUM.PRODUCTION),
              this.IS_DEV_MACHINE_HOST && (a = h.ENV_ENUM.DEV),
              a);
            var b = {};
            a = this.win.location.search.split("?");
            2 === a.length &&
              a[1].split("&").forEach(function (a) {
                (a = a.split("=")) &&
                  2 === a.length &&
                  a[0] &&
                  a[1] &&
                  (b[a[0]] = a[1]);
              });
            this.URL_QUERY_MAP = b;
          },
        },
        {
          key: "sanitizeRequestUrlByEnv",
          value: function (a) {
            if (a) {
              var b = this.win.GH && this.win.GH.C && this.win.GH.C.xhrBaseUrl;
              return (
                this.ENV === h.ENV_ENUM.DEV && (b = h.QA),
                this.URL_QUERY_MAP._ghpool &&
                  this.ENV !== h.ENV_ENUM.PRODUCTION &&
                  (b = decodeURIComponent(this.URL_QUERY_MAP._ghpool)),
                b + a
              );
            }
          },
        },
        {
          key: "addQueryParam",
          value: function (a) {
            var b =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              e = Object.assign({}, this.URL_QUERY_MAP),
              e = Object.assign(e, b),
              e = Object.assign(e, {
                v: this.VERSION,
              }),
              b = Object.keys(e);
            return (
              b.length &&
                (a = b.reduce(function (a, b) {
                  var d = e[b];
                  if (d)
                    var h = -1 < a.indexOf("?") ? "&" : "?",
                      a = a + h + b + "=" + encodeURIComponent(d);
                  return a;
                }, a)),
              a
                .replace(/[^=&]+=(&|$)/g, "")
                .replace(/&$/, "")
                .replace(/\?$/, "")
            );
          },
        },
      ],
      [
        {
          key: "QA",
          get: function () {
            return "https://www.qa.ebay.com";
          },
        },
        {
          key: "TYPE_UNDEFINED",
          get: function () {
            return "undefined";
          },
        },
        {
          key: "ENV_ENUM",
          get: function () {
            return {
              PRODUCTION: "production",
              DEV: "dev",
            };
          },
        },
      ]
    ),
    h);
  var a = function () {
      var d =
          0 < arguments.length && void 0 !== arguments[0]
            ? arguments[0]
            : "/gh/useracquistion",
        b =
          1 < arguments.length && void 0 !== arguments[1]
            ? arguments[1]
            : "GET",
        e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
        h = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {},
        f =
          4 < arguments.length && void 0 !== arguments[4]
            ? arguments[4]
            : {
                timeout: 5e3,
                shouldRetry: !1,
                async: !0,
                maxRetries: 1,
                hasFullXhrUrl: !1,
              },
        m = f.timeout,
        m = void 0 === m ? 5e3 : m,
        g = f.shouldRetry,
        g = void 0 !== g && g,
        i = f.async,
        i = void 0 === i || i,
        j = f.maxRetries,
        j = void 0 === j ? 1 : j,
        f = f.hasFullXhrUrl,
        f = void 0 !== f && f,
        k =
          5 < arguments.length && void 0 !== arguments[5]
            ? arguments[5]
            : "undefined" != typeof window
            ? window
            : {};
      l(this, a);
      var c;
      c = (a.__proto__ || Object.getPrototypeOf(a)).call(this, k);
      if (!this)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      c = !c || ("object" != typeof c && "function" != typeof c) ? this : c;
      return (
        (c.route = d),
        (b = b.toUpperCase()),
        (c.method = -1 !== a.ALLOWED_METHODS.indexOf(b) ? b : "GET"),
        (c.queryParamObj = e),
        (c.payload = h),
        (c.shouldRetry = g),
        (c.maxRetries = j),
        (c.timeout = m),
        (c.async = !0),
        (c.hasFullXhrUrl = f),
        (c.ctx = k),
        "boolean" == typeof i && !1 === i && (c.async = !1),
        c.hasFullXhrUrl
          ? ((c.baseUrl = ""),
            (c.requestUrl = n(
              a.prototype.__proto__ || Object.getPrototypeOf(a.prototype),
              "addQueryParam",
              c
            ).call(c, c.route, c.queryParamObj)))
          : ((c.baseUrl = n(
              a.prototype.__proto__ || Object.getPrototypeOf(a.prototype),
              "sanitizeRequestUrlByEnv",
              c
            ).call(c, c.route)),
            (c.requestUrl = n(
              a.prototype.__proto__ || Object.getPrototypeOf(a.prototype),
              "addQueryParam",
              c
            ).call(c, c.baseUrl, c.queryParamObj))),
        (c.retries = 0),
        c
      );
    },
    k = a;
  if ("function" != typeof g && null !== g)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof g
    );
  k.prototype = Object.create(g && g.prototype, {
    constructor: {
      value: k,
      enumerable: !1,
      writable: !0,
      configurable: !0,
    },
  });
  g &&
    (Object.setPrototypeOf ? Object.setPrototypeOf(k, g) : (k.__proto__ = g));
  i =
    (i(
      a,
      [
        {
          key: "handlers",
          value: function () {
            return (
              (this.handlers =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}),
              this
            );
          },
        },
        {
          key: "delay",
          value: function (a, b) {
            setTimeout(a.bind(this), b);
          },
        },
        {
          key: "maybeRetry",
          value: function () {
            var a = this;
            this.shouldRetry &&
              !(this.retries >= this.maxRetries) &&
              (this.retries++,
              this.delay(function () {
                a.initializeAndTrigger();
              }, this.retryTimeout));
          },
        },
        {
          key: "initializeAndTrigger",
          value: function () {
            var d,
              b = this;
            try {
              this.xhr = new XMLHttpRequest();
              var e = this.ctx.location && this.ctx.location.hostname;
              ((this.hasFullXhrUrl && a.ROUTE_REGEX_CHECK.test(this.route)) ||
                (!this.hasFullXhrUrl && a.DOMAIN_REGEX_CHECK.test(e))) &&
                (this.xhr.withCredentials = !0);
              this.xhr.open(this.method, this.requestUrl, this.async);
              this.async && (this.xhr.timeout = this.timeout);
              this.xhr.setRequestHeader("Content-Type", "text/plain");
              var g = this.shouldRetry
                ? ((d = this),
                  function (a) {
                    a instanceof ProgressEvent && d.maybeRetry(d);
                  })
                : a.NOOP;
              a.DEFAULT_XHR_EVENTS.forEach(function (d) {
                var e = -1 !== a.DEFAULT_RETRY_EVENTS.indexOf(d);
                b.xhr[d] = b.handlers[d] || (e ? g : a.NOOP);
              });
              this.xhr.send(this.payload);
            } catch (f) {
              console.debug("Global HTTPClient requests failing", f);
            }
          },
        },
        {
          key: "retryTimeout",
          get: function () {
            return Math.min(a.MAX_TIMEOUT, 100 * (2 ^ this.retries));
          },
        },
      ],
      [
        {
          key: "ALLOWED_METHODS",
          get: function () {
            return ["GET", "POST", "HEAD"];
          },
        },
        {
          key: "NOOP",
          get: function () {
            return function () {};
          },
        },
        {
          key: "DOMAIN_REGEX_CHECK",
          get: function () {
            return /(www\.)?(.*)\.ebay\.(com|com.au|at|be|ca|cn|fr|de|com.hk|in|ie|it|co.jp|com.my|nl|ph|pl|com.sg|es|se|ch|com.tw|co.th|co.uk|vn)$/i;
          },
        },
        {
          key: "ROUTE_REGEX_CHECK",
          get: function () {
            return /(www\.)?(.*)\.ebay\.(com|com.au|at|be|ca|cn|fr|de|com.hk|in|ie|it|co.jp|com.my|nl|ph|pl|com.sg|es|se|ch|com.tw|co.th|co.uk|vn)/i;
          },
        },
        {
          key: "DEFAULT_XHR_EVENTS",
          get: function () {
            return "onload onloadstart onloadend onprogress onreadystatechange onerror onabort ontimeout".split(
              " "
            );
          },
        },
        {
          key: "DEFAULT_RETRY_EVENTS",
          get: function () {
            return ["onerror", "onabort", "ontimeout"];
          },
        },
      ]
    ),
    a);
  "undefined" != typeof window &&
    "function" == typeof window.define &&
    window.define.amd &&
    (window.HttpClient = i);
  return i;
});
(function () {
  if ("undefined" != typeof vjo) {
    vjo
      .itype("vjo.dsf.common.IJsHandler")
      .protos({
        handle: function () {},
      })
      .endType();
    vjo
      .ctype("vjo.darwin.core.utils.ElementUtils")
      .needs("vjo.dsf.Element", "E")
      .needs("vjo.dsf.EventDispatcher")
      .props({
        oLst: [],
        get: function (a, b) {
          var c = [];
          if ("object" == typeof a) {
            for (var d in a) c[d] = this.get(a[d], b);
            return c;
          }
          c = this.oLst[a];
          if (!c || !c.parentNode || b) this.oLst[a] = this.vj$.E.get(a);
          return this.oLst[a];
        },
      })
      .inits(function () {
        vjo.dsf.EventDispatcher.addEventListener(window, "unload", function () {
          vjo.darwin.core.utils.ElementUtils.oLst = null;
        });
      })
      .endType();
    vjo
      .ctype("vjo.darwin.core.utils.WindowDimension")
      .props({
        getBrowserDimension: function () {
          var a = self,
            b = document,
            c = b.documentElement;
          return a.innerHeight
            ? [a.innerWidth, a.innerHeight]
            : c && c.clientHeight
            ? [c.clientWidth, c.clientHeight]
            : [b.body.clientWidth, b.body.clientHeight];
        },
        getScrollXY: function () {
          var a = document.documentElement || document.body;
          return "number" == typeof window.pageYOffset
            ? [
                window.pageXOffset,
                window.pageYOffset,
                document.height,
                document.width,
              ]
            : a
            ? [a.scrollLeft, a.scrollTop, a.scrollHeight, a.scrollWidth]
            : [0, 0, 0, 0];
        },
        getOffsetPosition: function (a) {
          for (
            var b = 0, c = 0, d = 0, e, f = a.offsetHeight, g = a.offsetWidth;
            a;

          )
            (b += a.offsetLeft),
              (c += a.offsetTop),
              a.style &&
                ((e = parseInt(a.style.zIndex, 10)),
                (d = !isNaN(e) && e > d ? e : d)),
              (a = a.offsetParent);
          return [b, c, d, f, g];
        },
      })
      .endType();
    vjo
      .ctype("vjo.darwin.globalnav.overlay.Overlay")
      .needs("vjo.darwin.core.utils.ElementUtils", "EU")
      .needs("vjo.darwin.core.utils.WindowDimension", "W")
      .needs("vjo.dsf.EventDispatcher", "ED")
      .props({
        timer: null,
        currObj: [],
        contentObjRef: null,
        id: null,
        keepOpen: !1,
        iOpen: !1,
        init: function (a) {
          var b = this;
          b.id = a;
          b.callFnOnClose = [];
          b.callFnOnOpen = [];
          window.overlayinit ||
            (b.vj$.ED.add(
              "body",
              "load",
              function () {
                var c = vjo.dsf.Element.get(a);
                if (c) {
                  document.body.appendChild(c);
                  var d = b.vj$.ED;
                  d.addEventListener(
                    c,
                    "mouseout",
                    function () {
                      b.closeOverlay(b.closeDelay);
                    },
                    b
                  );
                  d.addEventListener(c, "mouseover", b.cancelOpen, b);
                }
              },
              b
            ),
            (window.overlayinit = !0));
        },
        openOverlay: function (a, b, c) {
          var d = this;
          clearTimeout(d.timer);
          var e = function () {
            if (d.callFnOnOpen[a[0]]) d.callFnOnOpen[a[0]]();
            d.open(a);
          };
          a[0] && !d.callFnOnOpen[a[0]] && c && (d.callFnOnOpen[a[0]] = c);
          if (d.iOpen && d.currObj[0] != a[0] && d.callFnOnClose[d.currObj[0]])
            if (b && a[9] && "BrowseCategories" == a[9])
              setTimeout(d.callFnOnClose[d.currObj[0]], b);
            else d.callFnOnClose[d.currObj[0]]();
          b && !d.iOpen
            ? (d.openTimer = setTimeout(e, b))
            : b && a[9] && "BrowseCategories" == a[9]
            ? (d.openTimer = setTimeout(e, b))
            : e(a);
        },
        open: function (a) {
          var b = /chevron[0-9]+/,
            c = this.vj$,
            d = c.EU,
            c = c.W;
          this.closeDelay = a[8];
          if (a[0] && !b.test(a[0]) && d.get(a[0])) {
            var e = d.get(a[0]),
              f = d.get("BrowseCategories"),
              g = d.get("headerWrapper");
            g && (g.className = g.className.replace(" gh-zidx", ""));
            b.test(a[0]) && (e.className = "gh-ai");
            f &&
              ((f.className = f.className.replace(" gh-hbdr", "")),
              (f.className = f.className.replace(" gh-hs", "")));
          }
          a && (this.keepOpen = a[6]);
          a = a || this.currObj;
          f = d.get(a[7] || a[0]);
          e = c.getBrowserDimension();
          b = d.get(this.id);
          g = "object" == typeof a[1] ? a[1] : d.get(a[1]);
          this.currObj = a;
          if (-1 == (a[2] || "").indexOf("gh-vsmn")) b.style.width = "";
          if (b && f) {
            var d = b.childNodes,
              h = void 0 == d[0].innerHTML ? d[1] : d[0];
            clearTimeout(this.timer);
            d = h.offsetWidth > b.offsetWidth;
            b.className = "gh-ovr " + a[2];
            h.className = "gh-iovr ";
            var j = d ? h : b,
              i = h.childNodes;
            this.contentObjRef &&
              0 < i.length &&
              this.contentObjRef.appendChild(i[0]);
            a[4] = a[4] ? a[4] : 0;
            a[5] = a[5] ? a[5] : 0;
            g.style.minWidth = f.offsetWidth - 12 + "px";
            var k,
              d = f.offsetWidth - 2 - a[5];
            (i[0] && i[0].id == g.id) ||
              ((h.innerHTML = ""),
              (this.contentObjRef = g.parentNode),
              (k = document.createElement("div")),
              (i = document.createElement("div")),
              i.appendChild(k),
              i.appendChild(g),
              h.appendChild(i),
              (k.className = "gh-ext"),
              (k.style.width = d + "px"));
            g = j.offsetWidth;
            c = c.getOffsetPosition(f, e);
            f = c[0] + c[4] - g;
            e = e[0] - (c[0] + g);
            e = !a[3] && (10 < e || e > f);
            0 <= a[0].indexOf("gh_vnl") && (e = !0);
            g = c[1] + c[3] + a[4] + "px";
            a = e ? c[0] + a[5] + "px" : f + a[5] + "px";
            k && !e && (k.style.marginLeft = b.offsetWidth - d - 2 + "px");
            this.applyStyle(b, a, g);
            this.iOpen = !0;
          }
        },
        applyStyle: function (a, b, c) {
          a && ((a = a.style), (a.left = b), (a.top = c));
        },
        cancelOpen: function () {
          clearTimeout(this.timer);
        },
        closeOverlay: function (a, b) {
          var c = this;
          clearTimeout(c.openTimer);
          clearTimeout(c.timer);
          c.keepOpen ||
            (c.currObj[0] &&
              !c.callFnOnClose[c.currObj[0]] &&
              b &&
              (c.callFnOnClose[c.currObj[0]] = b),
            (a = "number" == typeof a ? a : c.closeDelay),
            (c.timer = setTimeout(function () {
              c.close();
              c.iOpen = !1;
            }, a)));
        },
        close: function (a) {
          a = a ? a.nativeEvent.srcElement || a.nativeEvent.target : null;
          if (!(a && this.currObj[0] == a.id)) {
            if ((a = this.vj$.EU.get("BrowseCategories")))
              a.className = a.className.replace(" gh-hbdr", "");
            this.callFn();
            this.applyStyle(this.vj$.EU.get(this.id), "-1000px", "-1000px");
            this.currObj = [];
            this.keepOpen = null;
            this.iOpen = !1;
          }
        },
        callFn: function () {
          if (this.callFnOnClose[this.currObj[0]])
            this.callFnOnClose[this.currObj[0]]();
        },
      })
      .endType();
    vjo
      .ctype("vjo.darwin.tracking.impression.Manager")
      .needs(["vjo.dsf.cookie.VjCookieJar", "vjo.dsf.EventDispatcher"])
      .protos({
        constructs: function (a) {
          if (a) {
            var b = vjo.Registry,
              c = b.get("_pim");
            c ||
              ((c = this),
              c.vj$.EventDispatcher.add("body", "mousedown", c.onMouseDown, c),
              b.put("_pim", c));
            c.sID = a;
          }
        },
        onMouseDown: function () {
          this.vj$.VjCookieJar.writeCookielet("ebay", "psi", this.sID);
        },
      })
      .endType();
    vjo
      .ctype("vjo.dsf.utils.Css")
      .needs("vjo.dsf.Element")
      .props({
        apply: function (a, b) {
          var c = vjo.dsf.Element.get(a),
            d;
          c && b && (d = this.createStyle(b)) && c.appendChild(d);
          return d;
        },
        createStyle: function (a) {
          var b = document.createElement("style");
          b.type = "text/css";
          a &&
            (b.styleSheet
              ? (b.styleSheet.cssText = a)
              : ((a = document.createTextNode(a)), b.appendChild(a)));
          return b;
        },
      })
      .endType();
    vjo
      .ctype("vjo.darwin.globalnav.util.EventReg")
      .needs("vjo.dsf.EventDispatcher", "ED")
      .needs("vjo.darwin.core.utils.ElementUtils", "E")
      .needs("vjo.darwin.core.utils.WindowDimension", "W")
      .needs("vjo.darwin.globalnav.overlay.Overlay", "O")
      .needs("vjo.darwin.tracking.impression.Manager", "IM")
      .needs("vjo.dsf.client.Browser", "BR")
      .needs("vjo.dsf.utils.Css", "CS")
      .needs("vjo.Registry", "R")
      .props({
        fn4Array: [],
        fn4Aggregated: function (a) {
          for (var b = this.fn4Array, c = b.length; c--; )
            b[c].apply(this, [a]);
        },
        onloadHdls: [],
        onloadHdlAggregated: function (a) {
          for (var b = this.onloadHdls, c = b.length; c--; )
            b[c].apply(this, [a]);
        },
        languageSwitch: function (a, b) {
          this.vj$.ED.add(a, "click", vjo.Registry.get(b));
        },
        aggregate: function (a) {
          var b = this.onloadHdls;
          b[b.length] = a;
          1 == b.length &&
            this.vj$.ED.add("body", "load", this.onloadHdlAggregated, this);
        },
        impression: function (a) {
          new this.vj$.IM(a);
        },
        convert: function (a) {
          var b = a.algoVerMap,
            c = a.idList,
            d = a.siteId;
          if (0 >= (a.algorithm || "").length) a.algorithm = null;
          if (b) {
            for (
              var b = b.split(",") || [], e = {}, f = 0, g = b.length;
              f < g;

            ) {
              var h = b[f].split(":");
              e[h[0]] = h[1];
              f++;
            }
            a.algoVerMap = e;
          }
          c && ((c = c.split(",") || []), (a.idList = c));
          d && ((d = parseInt(d)), (a.siteId = d));
          return a;
        },
        autoCompleteLayerLoad: function () {},
        autoCompleteLayerInit: function () {},
        browseCategories: function (a, b) {
          var c = this.vj$.R.get(a);
          c && c.setHandlerSource(b);
        },
        searchBarResize: function () {
          var a = this.vj$,
            b = function () {
              var b = a.E.get("headerSearch");
              if (b) {
                var b = b.offsetWidth,
                  d = a.E.get("_nkw");
                d &&
                  !(759 > b) &&
                  (d.style.width = 864 > b ? 400 - (864 - b) + "px" : "400px");
              }
            };
          a.ED.addEventListener(window, "resize", b, window);
          setTimeout(b, 200);
        },
        registerMouseEvent: function (a, b, c, d, e, f, g, h, j, i) {
          var k = this,
            b = function () {
              l = k.vj$;
              E = l.E;
              ED = l.ED;
              O = l.O;
              d = d || "mouseout";
              for (var b in a) {
                var c = b,
                  f;
                for (f in e) if (e[f] == b) break;
                d && ED.add(c, d, k.closeMenu(c));
              }
            };
          i ? b() : k.aggregate(b);
        },
        closeMenu: function (a) {
          var b = this;
          return function () {
            b.vj$.O.closeOverlay(500, function () {
              b.trCss(a, !0);
            });
            b.vj$.VM.abortLoadJs();
            b.vj$.O.iOpen ? b.trCss(a) : b.trCss(a, !0);
          };
        },
        trCss: function (a, b) {
          var c = this.vj$.E.get(a),
            d = c ? c.className || "" : "";
          if ((b || !(-1 < d.indexOf("gh-hso"))) && c)
            c.className = b ? d.replace(/gh-hso/g, "") : d + " gh-hso";
        },
        openOvl: function (a, b, c, d, e, f) {
          var g = this;
          return function () {
            g.vj$.O.openOverlay([a, b, c, d, e, f]);
          };
        },
        registerVerisign: function (a, b, c, d) {
          var e = this,
            f = e.vj$,
            g = function () {
              var d = f.E.get(a),
                d = f.W.getOffsetPosition(d),
                e = f.E.get(c),
                g = f.W.getOffsetPosition(e);
              f.O.openOverlay([a, e, b, !1, -g[3], -d[4], !0]);
            },
            h = function () {
              f.O.close();
            };
          e.aggregate(function () {
            f.ED.add(a, "click", g, e);
            f.ED.add(d, "click", h, e);
          });
        },
        changeBtStyle: function (a) {
          var b = this,
            c = b.vj$.ED;
          b.aggregate(function () {
            var d = b.vj$.E.get(a);
            d &&
              (c.add(
                a,
                "mousedown",
                function () {
                  d.className = "gh-btn gh-bc";
                },
                b
              ),
              c.add(
                a,
                "mouseup",
                function () {
                  d.className = "gh-btn";
                },
                b
              ));
          });
        },
        registerAndCreateHeaderButtons: function () {},
        changeHover: function (a, b, c, d, e) {
          var f = this,
            g = f.vj$.E,
            h = f.vj$.ED,
            j = g.get(a),
            i = g.get(b),
            k = function () {
              f.vj$.O.bound = {
                baseElm: j,
                link: i,
              };
              f.setBdr(j, i);
              i && (i.className += " " + c);
              var a = vjo.Registry.get(d);
              a && a.loadJs(!1, e);
              return !1;
            },
            g = function () {
              f.vj$.O.closeOverlay(500, function () {
                f.setBdr(j, i, !0);
              });
              if (!f.vj$.O.iOpen) {
                var a = f.vj$.O.bound;
                a && a.link && i != a.link
                  ? (a.link && (a.link.className = "gh-ai"),
                    f.setBdr(a.baseElm, a.link, !0),
                    k())
                  : (i && (i.className = "gh-ai"), f.setBdr(j, i, !0));
              }
            };
          "" != a &&
            "" != b &&
            ("BrowseCategories" != a
              ? (h.add(b, "mouseover", k),
                h.add(b, "mouseout", g),
                h.add(a, "mouseover", k),
                h.add(a, "mouseout", g))
              : (h.add(b, "click", k), h.add(b, "mouseout", g)),
            (f.fn4Array[f.fn4Array.length] = g));
        },
        setBdr: function (a, b, c) {
          var d = this.vj$.E.get("headerWrapper");
          if (d) {
            var e = d.className || "";
            d.className = c ? e.replace(/gh-zidx/g, "") : e + " gh-zidx";
          }
          a && (a.className = c ? "" : "gh-hbdr");
          b && (b.className = c ? "gh-ai" : "gh-ai gh-hbdp");
        },
        registerClickEvent: function (a, b, c, d, e) {
          var f = this.vj$,
            g = [a, b, c, d, e];
          f.ED.add(
            b,
            "click",
            function () {
              f.C.loadJs(g);
            },
            this.vj$.C
          );
        },
        open: function (a) {
          var b = this;
          return function () {
            var c = b.vj$.O.bound;
            c &&
              c.link &&
              (c.link && (c.link.className = "gh-ai"),
              b.setBdr(c.baseElm, c.link, !0));
            a.getMenuHtml();
          };
        },
        doctypeFix: function () {
          var a = document,
            b = this.vj$.BR,
            c = a.childNodes[0].nodeValue,
            d = c ? c.toLowerCase() : null;
          return b.bIE &&
            7 < b.iVer &&
            (!c || 0 > d.indexOf("doctype") || 0 > d.indexOf(".dtd"))
            ? ((b = this.vj$.CS.createStyle(".gh-w {font-size: x-small}")) &&
                a.getElementsByTagName("head")[0].appendChild(b),
              !0)
            : !1;
        },
      })
      .endType();
    vjo.ctype("vjo.dsf.typeextensions.string.Comparison").endType();
    String.prototype.has = function (a) {
      return -1 != this.indexOf(a);
    };
    String.prototype.hasArg = function (a) {
      var b = !1;
      if ("string" == typeof a) b = this.has(a);
      else for (var c = a.length, d = 0; d < c && !b; d++) b = this.has(a[d]);
      return b;
    };
    String.prototype.hasAny = function () {
      for (var a = arguments, b = a.length, c = !1, d = 0; d < b && !c; d++)
        c = this.hasArg(a[d]);
      return c;
    };
    String.prototype.hasAll = function () {
      for (var a = arguments, b = a.length, c = 0; c < b; c++)
        if (!this.hasArg(a[c])) return !1;
      return !0;
    };
    String.prototype.is = function (a) {
      return this == a;
    };
    String.prototype.isAny = function () {
      for (var a = arguments, b = a.length, c = !1, d, e = 0; e < b && !c; e++)
        if ("string" == typeof a[e]) c = this == a[e];
        else {
          d = a[e].length;
          for (var f = 0; f < d && !c; f++) c = this == a[e][f];
        }
      return c;
    };
    vjo
      .ctype("vjo.darwin.tracking.enabler.TrackingEnablerUtil")
      .needs("vjo.dsf.EventDispatcher")
      .needs("vjo.dsf.utils.URL")
      .needs("vjo.dsf.cookie.VjCookieJar")
      .props({
        seekParent: function (a, b) {
          return !a || !a.tagName
            ? ""
            : "a" == a.tagName.toLowerCase() ||
              "area" == a.tagName.toLowerCase() ||
              ("INPUT" == a.tagName.toUpperCase() &&
                a.getAttribute("type") &&
                "SUBMIT" == a.getAttribute("type").toUpperCase())
            ? a
            : 0 < b
            ? this.seekParent(a.parentNode, b - 1)
            : "";
        },
        splitParm: function (a) {
          for (
            var b = [-1, -1, -1, -1], a = a.split("."), c = 0;
            c < a.length;
            c++
          ) {
            var d = a[c].substr(0, 1);
            "p" == d && (b[0] = a[c].substr(1));
            "c" == d && (b[1] = a[c].substr(1));
            "m" == d && (b[2] = a[c].substr(1));
            "l" == d && (b[3] = a[c].substr(1));
          }
          return b;
        },
        enc: function (a) {
          var b =
              "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy-_!".split(
                ""
              ),
            c = "",
            d = b.length,
            e;
          if (-1 == a) return "z";
          for (; a >= d; ) (e = a % d), (c = b[e] + c), (a = (a / d) | 0);
          return (c = b[a] + c);
        },
        checkSiteDomain: function (a) {
          var b = document.domain,
            c = b.indexOf(".ebay.");
          -1 != c && (b = b.substr(c + 1));
          return a && 0 < a.length
            ? "/" != a.charAt(0) &&
              -1 == a.indexOf(b) &&
              -1 == a.indexOf(".ebayclassifieds.com")
              ? !1
              : !0
            : b;
        },
        getLinkId: function (a) {
          return a &&
            -1 != a.indexOf("_lk=") &&
            ((a = a.substr(a.indexOf("_lk=") + 4).split("&")),
            a[0] && 0 < a[0].length)
            ? a[0]
            : -1;
        },
      })
      .endType();
    vjo.ctype("vjo.darwin.globalnav.rtm.GlobalHeaderRtmDec").endType();
    "undefined" == typeof _oGlobalNavRTMInfo &&
      (_oGlobalNavRTMInfo = {
        aRTMPlacementData: [],
      });
    vjo.ctype("vjo.dsf.typeextensions.string.Decode").endType();
    String.prototype.decodeBase64 = function () {
      var a = this.length,
        b = "",
        c = 0;
      if (0 === a) return b;
      var d,
        e,
        f = "",
        g,
        h = "";
      if (!/[^A-Za-z0-9+/=*]/.exec(this)) {
        do
          (d =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=*".indexOf(
              this.charAt(c++)
            )),
            (e =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=*".indexOf(
                this.charAt(c++)
              )),
            (g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=*".indexOf(
                this.charAt(c++)
              )),
            (h =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=*".indexOf(
                this.charAt(c++)
              )),
            (d = (d << 2) | (e >> 4)),
            (e = ((e & 15) << 4) | (g >> 2)),
            (f = ((g & 3) << 6) | h),
            (b += String.fromCharCode(d)),
            64 <= g || (b += String.fromCharCode(e)),
            64 <= h || (b += String.fromCharCode(f));
        while (c < a);
        return b;
      }
    };
    String.prototype.decodeUTF8 = function () {
      for (var a = this.length, b = "", c = 0, d = 0, e = 0; c < a; )
        (d = this.charCodeAt(c)),
          128 > d
            ? ((b += String.fromCharCode(d)), c++)
            : 191 < d && 224 > d
            ? ((e = this.charCodeAt(c + 1)),
              (b += String.fromCharCode(((d & 31) << 6) | (e & 63))),
              (c += 2))
            : ((e = this.charCodeAt(c + 1)),
              (c3 = this.charCodeAt(c + 2)),
              (b += String.fromCharCode(
                ((d & 15) << 12) | ((e & 63) << 6) | (c3 & 63)
              )),
              (c += 3));
      return b;
    };
    vjo
      .ctype("vjo.darwin.globalnav.rtm.GlobalHeaderRtmCall")
      .needs([
        "vjo.dsf.typeextensions.string.Decode",
        "vjo.dsf.cookie.VjCookieJar",
        "vjo.dsf.utils.Object",
      ])
      .props({
        iTimer: null,
        submitRTMCall: function () {
          var a = window.location.href;
          "undefined" != typeof pageHasRtmPlacements ||
            "undefined" == typeof _oGlobalNavRTMInfo ||
            "undefined" == typeof _oGlobalNavRTMInfo.aRTMPlacementData ||
            0 == _oGlobalNavRTMInfo.aRTMPlacementData.length ||
            (!a.hasAny("catalog.") &&
            (a.hasAny("offer.") ||
              !(
                "undefined" != typeof ebay &&
                "undefined" != typeof ebay.oDocument &&
                ebay.oDocument._getControl("rtm")
              )) &&
            !(
              "undefined" != typeof vjo &&
              "undefined" != typeof vjo.dsf &&
              "undefined" != typeof vjo.dsf.ServiceEngine &&
              "undefined" != typeof vjo.dsf.ServiceEngine.inProcHdl &&
              "undefined" != typeof vjo.dsf.ServiceEngine.inProcHdl.svcHdls &&
              "undefined" !=
                typeof vjo.dsf.ServiceEngine.inProcHdl.svcHdls
                  .RTM_CALLBACK_SERVICE
            ) &&
            "undefined" !== typeof _oGlobalNavRTMInfo &&
            "undefined" == typeof rtm
              ? 0 < _oGlobalNavRTMInfo.aRTMPlacementData.length &&
                !a.hasAny("my.") &&
                !a.hasAny("k2b-bulk.") &&
                (this.iTimer = window.setInterval(
                  this.vj$.Object.hitch(this, "init"),
                  1
                ))
              : 0 < _oGlobalNavRTMInfo.aRTMPlacementData.length &&
                a.hasAny("shop.", "icatalog.", "catalog.") &&
                !a.hasAny("hub.") &&
                this.init());
        },
        getUid: function () {
          var a = this.vj$.VjCookieJar.readCookie("dp1", "u1p"),
            b = "";
          a && (b = a.decodeBase64().decodeUTF8());
          return b;
        },
        getGuid: function () {
          return this.vj$.VjCookieJar.readCookie("npii", "tguid");
        },
        hasUid: function (a) {
          return a
            ? !0
            : this.getUid() && this.getUid().has("@@__@@__@@")
            ? !1
            : !0;
        },
        getTime: function () {
          return new Date().getTime();
        },
        init: function () {
          if ("undefined" != typeof vjo.darwin.core.rtm) {
            null != this.iTimer && window.clearInterval(this.iTimer);
            for (
              var a = _oGlobalNavRTMInfo.aRTMPlacementData,
                b,
                c = [],
                d = [],
                e = [],
                f = [],
                g = [],
                h = [],
                j = 0;
              j < a.length;
              j++
            )
              (b = a[j]),
                (c[j] = b.maxWidth),
                (d[j] = b.htmlId),
                (e[j] = b.maxHeight),
                (f[j] = b.pid),
                (g[j] = ""),
                (h[j] = ""),
                (b =
                  b.rtmUrl +
                  "?RtmCmd&a=json" +
                  (this.hasUid(b.userId)
                    ? "&l=" + (b.userId ? b.userId : this.getUid())
                    : "") +
                  "&g=" +
                  (b.gUid ? b.gUid : this.getGuid()) +
                  "&ord=" +
                  this.getTime() +
                  (b.oid ? "&i=" + b.oid : ""));
            b += "&p=" + f.join(":");
            _oGlobalNavRTMInfo.sRTMUrl = b;
            0 < a.length &&
              new vjo.darwin.core.rtm.RTMInit({
                url: b,
                widths: c,
                htmlIds: d,
                heights: e,
                pids: f,
                dblclkUrls: g,
                defaultUrls: h,
              }).invoke({});
          }
        },
      })
      .endType();
    vjo
      .ctype("vjo.darwin.core.rtm.RTMOnDemand")
      .needs([
        "vjo.darwin.core.utils.WindowDimension",
        "vjo.dsf.Message",
        "vjo.dsf.EventDispatcher",
        "vjo.dsf.Element",
        "vjo.dsf.ServiceEngine",
      ])
      .props({
        isRenderedOnScroll: !1,
        isRenderedOnLoadAndScroll: !1,
        isWinLoaded: !1,
        onScrollVisiblePids: null,
        onLoadAndScrollVisiblePids: null,
        onScroll: function (a) {
          this.isRenderedOnScroll ||
            (this.onScrollVisiblePids = this.getOnScrollVisiblePlacements(a));
          !this.isRenderedOnScroll &&
            this.onScrollVisiblePids &&
            0 < this.onScrollVisiblePids.length &&
            this.callRtmForOnScroll();
        },
        onLoad: function (a) {
          this.isWinLoaded = !0;
          this.isRenderedOnLoadAndScroll ||
            (this.onLoadAndScrollVisiblePids = a.json.onLoadAndScrollPids);
          !this.isRenderedOnLoadAndScroll &&
            this.onLoadAndScrollVisiblePids &&
            0 < this.onLoadAndScrollVisiblePids.length &&
            this.callRtmForOnLoadAndScroll();
        },
        callRtmForOnScroll: function () {
          this.onScrollVisiblePids &&
            0 < this.onScrollVisiblePids.length &&
            (this.callRtm(this.onScrollVisiblePids),
            (this.isRenderedOnScroll = !0));
        },
        callRtmForOnLoadAndScroll: function () {
          this.onLoadAndScrollVisiblePids &&
            0 < this.onLoadAndScrollVisiblePids.length &&
            (this.callRtm(this.onLoadAndScrollVisiblePids),
            (this.isRenderedOnLoadAndScroll = !0));
        },
        callRtm: function (a) {
          if (a && 0 < a.length) {
            var b = new vjo.dsf.Message("RTM_CALLBACK_SERVICE");
            b.pIds = a;
            vjo.dsf.ServiceEngine.handleRequest(b);
          }
        },
        getOnScrollVisiblePlacements: function (a) {
          return this.getVisiblePlacements(a, a.json.onScrollPids, 0);
        },
        getOnLoadAndScrollVisiblePlacements: function (a) {
          return this.getVisiblePlacements(a, a.json.onLoadAndScrollPids, 1e3);
        },
        getVisiblePlacements: function (a, b, c) {
          for (
            var d = vjo.darwin.core.utils.WindowDimension,
              e = d.getScrollXY()[1],
              a = a.json,
              f = b.length,
              g = 0;
            g < f;
            g++
          ) {
            var h = "rtm_html_" + b[g],
              j = vjo.dsf.Element.get(h),
              h = a.th && a.th[h] ? +a.th[h] : c,
              i = d.getBrowserDimension()[1];
            if (d.getOffsetPosition(j)[1] <= e + i + h) return b;
          }
          return null;
        },
      })
      .endType();
    vjo.needs("vjo.dsf.typeextensions.string.Comparison");
    vjo.ctype("vjo.dsf.typeextensions.string.Trim").endType();
    String.prototype.trim = function () {
      for (var a = this; a.substring(0, 1).isAny(" ", "\n", "\r"); )
        a = a.substring(1, a.length);
      for (; a.substring(a.length - 1, a.length).isAny(" ", "\n", "\r"); )
        a = a.substring(0, a.length - 1);
      return a;
    };
    vjo
      .ctype("vjo.dsf.window.utils.VjWindowUtils")
      .props({
        getBrowserWindowHeight: function () {
          var a = self,
            b = document,
            c = b.documentElement;
          return a.innerHeight
            ? a.innerHeight
            : c && c.clientHeight
            ? c.clientHeight
            : b.body.clientHeight;
        },
        getBrowserWindowWidth: function () {
          var a = self,
            b = document,
            c = b.documentElement;
          return a.innerWidth
            ? a.innerWidth
            : c && c.clientWidth
            ? c.clientWidth
            : b.body.clientWidth;
        },
        getScrollXY: function () {
          var a = 0,
            b = 0;
          if ("number" == typeof window.pageYOffset)
            (b = window.pageYOffset), (a = window.pageXOffset);
          else if (
            document.body &&
            (document.body.scrollLeft || document.body.scrollTop)
          )
            (b = document.body.scrollTop), (a = document.body.scrollLeft);
          else if (
            document.documentElement &&
            (document.documentElement.scrollLeft ||
              document.documentElement.scrollTop)
          )
            (b = document.documentElement.scrollTop),
              (a = document.documentElement.scrollLeft);
          return [a, b];
        },
        toPixels: function (a) {
          return a + "px";
        },
        scrollTop: function () {
          return null != window.pageYOffset
            ? window.pageYOffset
            : document.documentElement
            ? Math.max(
                document.documentElement.scrollTop,
                document.body.scrollTop
              )
            : document.body.scrollTop;
        },
        scrollLeft: function () {
          return null != window.pageXOffset
            ? window.pageXOffset
            : document.documentElement
            ? Math.max(
                document.documentElement.scrollLeft,
                document.body.scrollLeft
              )
            : document.body.scrollLeft;
        },
        scrollWidth: function () {
          return document.documentElement
            ? document.documentElement.scrollWidth
            : Math.max(document.body.scrollWidth, document.body.offsetWidth);
        },
        scrollHeight: function () {
          return document.documentElement
            ? document.documentElement.scrollHeight
            : Math.max(document.body.scrollHeight, document.body.offsetHeight);
        },
        clientTop: function () {
          return document.documentElement
            ? document.documentElement.clientTop
            : document.body.clientTop;
        },
        clientLeft: function () {
          return document.documentElement
            ? document.documentElement.clientLeft
            : document.body.clientLeft;
        },
        clientWidth: function () {
          var a = document.documentElement;
          return a && window.innerWidth
            ? Math.min(a.clientWidth, window.innerWidth)
            : a && a.clientWidth
            ? a.clientWidth
            : window.innerWidth
            ? window.innerWidth
            : document.body.clientWidth
            ? document.body.clientWidth
            : document.body.offsetWidth;
        },
        clientHeight: function () {
          var a = document.documentElement;
          return a && window.innerHeight
            ? Math.min(a.clientHeight, window.innerHeight)
            : a && a.clientHeight
            ? a.clientHeight
            : window.innerHeight
            ? window.innerHeight
            : document.body.clientHeight
            ? document.body.clientHeight
            : document.body.offsetHeight;
        },
        browserTop: function () {
          return window.innerHeight
            ? window.screenY + (window.outerHeight - window.innerHeight)
            : window.screenTop;
        },
        browserLeft: function () {
          return window.innerWidth
            ? window.screenX + (window.outerWidth - window.innerWidth)
            : window.screenLeft;
        },
        eventTop: function (a) {
          return null != a.pageY
            ? a.pageY
            : document.documentElement
            ? a.clientY +
              Math.max(
                document.documentElement.scrollTop,
                document.body.scrollTop
              )
            : a.clientY + document.body.scrollTop;
        },
        eventLeft: function (a) {
          return null != a.pageX
            ? a.pageX
            : document.documentElement
            ? a.clientX +
              Math.max(
                document.documentElement.scrollLeft,
                document.body.scrollLeft
              )
            : a.clientX + document.body.scrollLeft;
        },
        offsetTop: function (a) {
          for (
            var b =
                document.documentElement && document.documentElement.clientTop
                  ? document.documentElement.clientTop
                  : 0,
              c = 0;
            null != a;
            a = a.offsetParent
          )
            c += a.offsetTop;
          return c + b;
        },
        offsetLeft: function (a) {
          for (
            var b =
                document.documentElement && document.documentElement.clientLeft
                  ? document.documentElement.clientLeft
                  : 0,
              c = 0;
            null != a;
            a = a.offsetParent
          )
            c += a.offsetLeft;
          return c + b;
        },
        openWindow: function (a, b, c) {
          var d = [],
            e = vjo.dsf.window.utils.VjWindowUtils;
          c.top =
            e.browserTop() + Math.round((e.clientHeight() - c.height) / 2) + 25;
          c.left =
            e.browserLeft() + Math.round((e.clientWidth() - c.width) / 2);
          for (var f in c) d.push(f.concat("=", c[f]));
          return window.open(a, b, d.join(","), !0);
        },
      })
      .endType();
    vjo
      .ctype("vjo.dsf.document.Shim")
      .needs("vjo.dsf.client.Browser")
      .props({
        add: function (a, b, c) {
          var d, e;
          return this.check()
            ? ((d = a.offsetWidth),
              (e = a.offsetHeight),
              (d += b ? b : 0),
              (e += c ? c : 0),
              (b = document.createElement("IFRAME")),
              (c = b.style),
              (c.width = d + "px"),
              (c.height = e + "px"),
              (c.filter = "chroma(color='white')"),
              (b.frameBorder = 0),
              (c.position = "absolute"),
              (c.left = "0px"),
              (c.top = "0px"),
              (c.zIndex = "-1"),
              (c.filter = 'Alpha(Opacity="0")'),
              "https:" == document.location.protocol &&
                (b.src = "https://securepics.ebaystatic.com/aw/pics/s.gif"),
              a.appendChild(b),
              b)
            : null;
        },
        remove: function (a, b) {
          this.check() && b && b.parentNode && b.parentNode.removeChild(b);
        },
        check: function () {
          var a = vjo.dsf.client.Browser;
          return a.bIE || a.bFirefox;
        },
      })
      .endType();
    vjo
      .ctype("vjo.dsf.utils.Timer")
      .protos({
        timer: null,
        isRunning: !1,
        interval: null,
        onTick: function () {},
        onStart: null,
        onStop: null,
        constructs: function (a) {
          this.interval = a;
        },
        setInterval: function (a) {
          this.isRunning && window.clearInterval(this.timer);
          this.interval = a;
          this.isRunning && this.setInt();
        },
        start: function () {
          if ("function" == typeof this.onStart) this.onStart();
          this.isRunning = !0;
          this.setInt();
        },
        stop: function () {
          if ("function" == typeof this.onStop) this.onStop();
          this.isRunning = !1;
          window.clearInterval(this.timer);
        },
        setInt: function () {
          this.timer = window.setInterval(
            vjo.hitch(this, this.onTick),
            this.interval
          );
        },
      })
      .endType();
    vjo.needs("vjo.dsf.typeextensions.string.Comparison");
    vjo.ctype("vjo.dsf.typeextensions.string.TokenReplacement").endType();
    String.prototype.replaceToken = function (a, b, c) {
      if (b == c) return a;
      for (; a.has(b); ) a = a.replace(b, c);
      return a;
    };
    String.prototype.replaceTokensEx = function (a) {
      for (var b = this, c = arguments, d = c.length, e = 1; e < d + 1; e++)
        b = this.replaceToken(b, a.replace("n", e), c[e]);
      return b;
    };
    String.prototype.replaceTokens = function () {
      for (var a = this, b = arguments, c = b.length, d = 0; d < c; d++)
        a = this.replaceToken(a, "<#" + (d + 1) + "#>", b[d]);
      return a;
    };
    vjo
      .ctype("vjo.darwin.core.greetings.VjGreetingsClient")
      .props({
        writePersonalHeader: function () {},
      })
      .endType();
    vjo
      .ctype("vjo.darwin.globalnav.footer.sitemap")
      .needs("vjo.dsf.Element", "E")
      .needs("vjo.dsf.EventDispatcher", "ed")
      .needs("vjo.dsf.utils.Handlers", "vh")
      .needs("vjo.dsf.window.utils.VjWindowUtils", "vw")
      .props({
        addEvents: function () {
          var a = this.vj$;
          this.flg = a.E.get("gf-US");
          this.lyr = a.E.get("sitemapflags");
          this.flg &&
            ((this.btn = this.flg.parentNode),
            a.vh.attachEvt(this.btn, "mouseover", this.onShowMenu, this),
            a.vh.attachEvt(this.lyr, "mouseover", this.onShowMenu, this),
            a.vh.attachEvt(this.btn, "mouseout", this.onHideMenu, this),
            a.vh.attachEvt(this.lyr, "mouseout", this.onHideMenu, this));
        },
        onShowMenu: function () {
          var a = this.vj$;
          this.flg = a.E.get("gf-US");
          this.lyr = a.E.get("sitemapflags");
          this.olyr = a.E.get("gf-BIG");
          this.btn = this.flg.parentNode;
          this.lyr.style.display = "block";
          this.lyr.style.top =
            a.vw.offsetTop(this.btn) - this.lyr.offsetHeight + 1 + "px";
          this.lyr.style.left =
            a.vw.offsetLeft(this.btn) -
            this.lyr.offsetWidth +
            this.btn.offsetWidth +
            "px";
        },
        onHideMenu: function () {
          this.lyr = this.vj$.E.get("sitemapflags");
          this.lyr.style.display = "none";
        },
      })
      .endType();
    var n =
        "http" +
        ("https:" == document.location.protocol ? "s://secure" : "://"),
      o = document.domain,
      m;
    _GlobalNavHeaderUtf8Encoding = !0;
    _GlobalNavHeaderStatic = !1;
    _GlobalNavHeaderCookieTracking = !0;
    m = o.indexOf(".ebay.");
    includeHost =
      -1 != m
        ? n + "include." + o.substr(m + 1) + "/"
        : n + "include.ebaystatic.com/";
  }
})();
(function () {
  function q() {
    return {
      handle: function () {
        vjo.dsf.EventDispatcher.add(
          "glbfooter",
          "click",
          function (a) {
            this.handle(a);
          },
          vjo.Registry._ReskinFooterTrackingCompSpecGenerator_0
        );
      },
    };
  }
  function r() {
    return {
      handle: function () {
        var a = function () {
            return function (a) {
              return this.handle(a);
            };
          },
          b = vjo.dsf.EventDispatcher,
          c = vjo.Registry;
        b.add(
          "BrowseCategories-menu",
          "click",
          a(),
          c._ReskinHeaderTrackingCompSpecGenerator_0
        );
        b.add("gh", "click", a(), c._ReskinHeaderTrackingCompSpecGenerator_1);
        b.add(
          "gbh_ovl",
          "click",
          a(),
          c._ReskinHeaderTrackingCompSpecGenerator_2
        );
        b.add("body", "click", function (a) {
          vjo.darwin.tracking.enabler.TrackingEnabler.copySIDToCookie(
            a,
            "_trksid",
            "_sp",
            "_trkparms"
          );
        });
      },
    };
  }
  if ("undefined" != typeof vjo) {
    vjo
      .ctype("vjo.darwin.tracking.enabler.TrackingModuleEnabler")
      .needs("vjo.dsf.utils.URL")
      .needs("vjo.dsf.typeextensions.string.Comparison")
      .needs("vjo.dsf.cookie.VjCookieJar")
      .needs("vjo.darwin.tracking.enabler.TrackingEnablerUtil")
      .satisfies("vjo.dsf.common.IJsHandler")
      .protos({
        constructs: function (a, b, c, f) {
          this.sCid = a;
          this.sParms = b;
          this.sCidParms = c;
          this.sDelim = f;
          this.oCJ = vjo.dsf.cookie.VjCookieJar;
          this.oU = vjo.darwin.tracking.enabler.TrackingEnablerUtil;
        },
        logModuleId: function (a) {
          if (
            a.nativeEvent &&
            !(null === a.nativeEvent || void 0 === a.nativeEvent)
          ) {
            var b = !1;
            "undefined" != typeof _GlobalNavHeaderCookieTracking &&
              _GlobalNavHeaderCookieTracking &&
              (b = !0);
            var c = a.nativeEvent.srcElement || a.nativeEvent.target;
            if (c && !(null === c || void 0 === c))
              if ((c = this.oU.seekParent(c, 3)))
                (a = this.sCidParms.split(this.sDelim)),
                  a[0] &&
                    c &&
                    c.href &&
                    !c.href.has("javascript:") &&
                    (b
                      ? ((b = [-1, -1, -1, -1]),
                        (b = this.oU.splitParm(a[0])),
                        (a = "b" + (this.oU.enc(b[0]) + "zzzz").substr(0, 4)),
                        (a += this.oU.enc(b[1])),
                        (a += (this.oU.enc(b[2]) + "zzzz").substr(0, 3)),
                        (a += (this.oU.enc(b[3]) + "zzzz").substr(0, 3)),
                        this.oCJ.writeCookielet("ds2", "sotr", a))
                      : ((b = vjo.dsf.utils.URL.addArg(
                          c.href,
                          this.sCid,
                          a[0]
                        )),
                        a[1] &&
                          (b = vjo.dsf.utils.URL.addArg(b, this.sParms, a[1])),
                        (c.href = " " + b)));
          }
        },
        getAnchor: function (a) {
          if (a && a.tagName)
            return (
              !a.tagName.is("A") &&
                !a.tagName.is("INPUT") &&
                a.tagName.is("INPUT") &&
                "SUBMIT" != a.getAttribute("type") &&
                (a = this.getAnchor(a.parentNode)),
              a
            );
        },
        handle: function (a) {
          this.logModuleId(a);
        },
      })
      .endType();
    vjo
      .ctype("vjo.darwin.tracking.enabler.TrackingEnabler")
      .needs("vjo.dsf.utils.URL")
      .needs("vjo.dsf.cookie.VjCookieJar")
      .needs("vjo.darwin.tracking.enabler.TrackingEnablerUtil")
      .props({
        rewriteURLs: function (a, b, c, f, h) {
          if (!(null === a.nativeEvent || void 0 === a.nativeEvent))
            if (
              ((a = a.nativeEvent.srcElement || a.nativeEvent.target),
              !(null === a || void 0 === a))
            ) {
              if (
                "img" == a.tagName.toLowerCase() ||
                "span" == a.tagName.toLowerCase()
              )
                a = a.parentNode;
              f = a.getAttribute(f);
              if (
                null !== f &&
                ((f = f.split(h)),
                f[0] &&
                  (h = a.href) &&
                  vjo.darwin.tracking.enabler.TrackingEnablerUtil.checkSiteDomain(
                    h
                  ))
              )
                (h = vjo.dsf.utils.URL.addArg(h, b, f[0])),
                  f[1] && (h = vjo.dsf.utils.URL.addArg(h, c, f[1])),
                  (a.href = " " + h);
            }
        },
        copySIDToCookie: function (a, b, c, f) {
          var h = vjo.dsf.cookie.VjCookieJar,
            l = vjo.darwin.tracking.enabler.TrackingEnablerUtil;
          if (
            "undefined" == typeof _GlobalNavHeaderCookieTracking ||
            !_GlobalNavHeaderCookieTracking
          )
            return this.rewriteURLs(a, b, f, c, ";");
          if (
            "undefined" != typeof _GlobalNavHeaderStatic &&
            _GlobalNavHeaderStatic
          )
            h.writeCookielet("ds2", "sotr");
          else {
            "undefined" == typeof _GlobalNavHeaderSrcPageId &&
              "undefined" !== typeof GH &&
              "undefined" !== typeof GH.C &&
              (_GlobalNavHeaderSrcPageId = GH.C.pageId || 0);
            "undefined" == typeof _GlobalNavHeaderSrcPageId &&
              (_GlobalNavHeaderSrcPageId = 0);
            var n = _GlobalNavHeaderSrcPageId,
              k = a.nativeEvent.srcElement || a.nativeEvent.target;
            if (k && (k = l.seekParent(k, 3))) {
              var i = k.href,
                m = !1,
                c = k.getAttribute(c);
              if (
                "INPUT" == k.tagName &&
                "SUBMIT" == k.getAttribute("type").toUpperCase()
              )
                for (
                  var d = document.getElementsByName(b),
                    i = k.form.action,
                    e = 0;
                  e < d.length;
                  e++
                )
                  "INPUT" == d[e].tagName &&
                    d[e].getAttribute("type") &&
                    "HIDDEN" == d[e].getAttribute("type").toUpperCase() &&
                    d[e].form == k.form &&
                    ((m = !0), (c = d[e].value));
              if (l.checkSiteDomain(i)) {
                var d = [-1, -1, -1, -1],
                  e = [-1, -1, -1, -1],
                  g = h.readCookie("ds2", "sotr");
                if (g && 12 == g.length && "b" == g.substr(0, 1)) {
                  var j = g.substr(1, 4);
                  "zzzz" != j && (e[0] = j);
                  j = g.substr(5, 1);
                  "z" != j && (e[1] = j);
                  j = g.substr(6, 3);
                  "zzz" != j && (e[2] = j);
                  j = g.substr(9, 3);
                  "zzz" != j && (e[3] = j);
                }
                g = !1;
                if (c) {
                  var c = c.split(";"),
                    o;
                  if (i && c[0]) {
                    o = c[0];
                    if (c[1])
                      try {
                        (i = vjo.dsf.utils.URL.addArg(i, f, c[1])),
                          (k.href = " " + i);
                      } catch (p) {}
                    d = l.splitParm(o);
                    g = !0;
                  }
                }
                if (!g && ((b += "="), i && -1 != i.indexOf(b)))
                  try {
                    (o = i.substr(i.indexOf(b) + b.length).split("&")[0]),
                      (d = l.splitParm(o)),
                      (g = !0);
                  } catch (q) {}
                if (!g && -1 == d[0]) {
                  if (!n || !a.nativeEvent) return;
                  d[0] = n;
                  g = !0;
                }
                -1 == d[0] && n && (d[0] = n);
                m && 0 == d[0] && n && (d[0] = n);
                g &&
                  ((a = "b"),
                  (a =
                    -1 == d[0] && -1 != e[0]
                      ? a + e[0]
                      : a + (l.enc(d[0]) + "zzzz").substr(0, 4)),
                  (a = -1 == d[1] && -1 != e[1] ? a + e[1] : a + l.enc(d[1])),
                  (a =
                    -1 == d[2] && -1 != e[2]
                      ? a + e[2]
                      : a + (l.enc(d[2]) + "zzzz").substr(0, 3)),
                  -1 == d[3] && !m && (d[3] = l.getLinkId(i)),
                  (a =
                    -1 == d[3] && -1 != e[3]
                      ? a + e[3]
                      : a + (l.enc(d[3]) + "zzzz").substr(0, 3)),
                  h.writeCookielet("ds2", "sotr", a));
              }
            }
          }
        },
      })
      .endType();
    vjo
      .ctype("vjo.darwin.tracking.rover.Rover")
      .needs("vjo.dsf.cookie.VjCookieJar")
      .props({
        roverTrack: function () {
          var a = new Date().getTime(),
            b = vjo.darwin.tracking.rover.Rover.getClientOffset(a),
            c = vjo.dsf.cookie.VjCookieJar.readCookieObj("npii", "tpim");
          null == c ||
            "" == c.value ||
            ((c = 1e3 * parseInt(c.maxage, 16)),
            0 < c &&
              ((a = c - a + b),
              (15552e6 < a || 0 > a) &&
                "undefined" == typeof RoverSyncDropped &&
                "undefined" == typeof RoverNsCapable &&
                vjo.darwin.tracking.rover.Rover.dropRoverSyncImage()));
        },
        dropRoverSyncImage: function () {
          if (
            "undefined" !== typeof RoverDomainBaseUrl &&
            0 < RoverDomainBaseUrl.length
          ) {
            var a = document.createElement("img");
            a.width = "1";
            a.height = "1";
            a.src =
              RoverDomainBaseUrl +
              "/roversync/?rtpim=1&mpt=" +
              new Date().getTime();
            a.alt = "";
            document.body.appendChild(a);
          }
        },
        getClientOffset: function (a) {
          var b,
            c = vjo.dsf.cookie.VjCookieJar.readCookie("ebay", "cos");
          null !== c && 0 < c.length
            ? (b = 1e3 * parseInt(c, 16))
            : "undefined" !== typeof svrGMT &&
              ((b = a - svrGMT),
              (a = Math.round(b / 1e3)),
              isNaN(a) ||
                vjo.dsf.cookie.VjCookieJar.writeCookielet(
                  "ebay",
                  "cos",
                  a.toString(16)
                ));
          isNaN(b) && (b = 18e5);
          return b;
        },
      })
      .endType();
    vjo
      .ctype("vjo.darwin.core.ebayheader.rover.FooterRover")
      .needs("vjo.dsf.cookie.VjCookieJar")
      .needs("vjo.dsf.assembly.VjClientAssemblerRequest")
      .props({
        VA: vjo.dsf.assembly.VjClientAssembler,
        command: null,
        roverService: function (a) {
          document.location.protocol.has("https:") ||
            ((this.command = a) && this.isCookieValid() && this.sendRequest());
        },
        sendRequest: function () {
          var a = new vjo.dsf.assembly.VjClientAssemblerRequest(
            this.command,
            this.handleResponse,
            this,
            "cb",
            !1
          );
          this.VA.load(a);
        },
        isCookieValid: function () {
          return vjo.dsf.cookie.VjCookieJar.readCookie("dp1", "idm") ? !1 : !0;
        },
        handleResponse: function (a) {
          if (a && 1 < a.length) {
            for (var b = a.length - 1, c = 0; c < b; c++)
              this.createImage(a[c]);
            this.setCookieExpiration(a[b]);
          }
        },
        createImage: function (a) {
          if (a && 1 < a.length) {
            var b = document.createElement("IMG");
            b.width = "1";
            b.height = "1";
            b.src = a;
            b.alt = "";
            document.body.appendChild(b);
          }
        },
        setCookieExpiration: function (a) {
          "number" == typeof a &&
            0 < a &&
            vjo.dsf.cookie.VjCookieJar.writeCookielet(
              "dp1",
              "idm",
              "1",
              a / 86400,
              ""
            );
        },
      })
      .endType();
    vjo
      .ctype("vjo.darwin.globalnav.util.SGuid")
      .needs("vjo.dsf.cookie.VjCookieJar")
      .props({
        writeSessionGuid: function (a) {
          a &&
            0 < a.length &&
            vjo.dsf.cookie.VjCookieJar.writeCookieEx("cssg", a, 1);
        },
      })
      .endType();
    vjo.Registry.put(
      "ReskinFooterTrackingCompSpecGenerator_0",
      new vjo.darwin.tracking.enabler.TrackingModuleEnabler(
        "_trksid",
        "_trkparms",
        "m571;",
        ";"
      )
    );
    vjo.dsf.EventDispatcher.add("body", "load", new q());
    var m = function () {
        return new vjo.darwin.tracking.enabler.TrackingModuleEnabler(
          "_trksid",
          "_trkparms",
          "m570;",
          ";"
        );
      },
      p = vjo.Registry;
    p.put("ReskinHeaderTrackingCompSpecGenerator_0", m());
    p.put("ReskinHeaderTrackingCompSpecGenerator_1", m());
    p.put("ReskinHeaderTrackingCompSpecGenerator_2", m());
    vjo.dsf.EventDispatcher.add("body", "load", new r());
    vjo.dsf.EventDispatcher.addEventListener(window, "load", function () {
      GH &&
        GH.Util &&
        vjo.darwin.core.ebayheader.rover.FooterRover.roverService(
          GH.Util.getRoverUrl() + "/idmap/0?footer"
        );
      vjo.dsf.cookie.VjCookieJar.writeCookielet(
        "dp1",
        "tzo",
        parseInt(new Date().getTimezoneOffset(), 10).toString(16)
      );
      var a;
      "undefined" !== typeof GH &&
        "undefined" !== typeof GH.C &&
        (a = GH.C.impId || "");
      vjo.darwin.globalnav.util.EventReg.impression(a);
    });
  }
})();
(function (p) {
  function Ma(a) {
    var b = a.length,
      d = c.type(a);
    return c.isWindow(a)
      ? !1
      : 1 === a.nodeType && b
      ? !0
      : "array" === d ||
        ("function" !== d &&
          (0 === b || ("number" === typeof b && 0 < b && b - 1 in a)));
  }
  function ub(a, b, d, e) {
    if (c.acceptData(a)) {
      var f = c.expando,
        g = "string" === typeof b,
        h = a.nodeType,
        i = h ? c.cache : a,
        j = h ? a[f] : a[f] && f;
      if ((j && i[j] && (e || i[j].data)) || !(g && void 0 === d)) {
        j || (h ? (a[f] = j = $.pop() || c.guid++) : (j = f));
        i[j] || ((i[j] = {}), h || (i[j].toJSON = c.noop));
        if ("object" === typeof b || "function" === typeof b)
          e ? (i[j] = c.extend(i[j], b)) : (i[j].data = c.extend(i[j].data, b));
        a = i[j];
        e || (a.data || (a.data = {}), (a = a.data));
        void 0 !== d && (a[c.camelCase(b)] = d);
        g ? ((d = a[b]), null == d && (d = a[c.camelCase(b)])) : (d = a);
        return d;
      }
    }
  }
  function vb(a, b, d) {
    if (c.acceptData(a)) {
      var e,
        f,
        g,
        h = a.nodeType,
        i = h ? c.cache : a,
        j = h ? a[c.expando] : c.expando;
      if (i[j]) {
        if (b && (g = d ? i[j] : i[j].data)) {
          c.isArray(b)
            ? (b = b.concat(c.map(b, c.camelCase)))
            : b in g
            ? (b = [b])
            : ((b = c.camelCase(b)), (b = b in g ? [b] : b.split(" ")));
          e = 0;
          for (f = b.length; e < f; e++) delete g[b[e]];
          if (!(d ? Na : c.isEmptyObject)(g)) return;
        }
        if (!d && (delete i[j].data, !Na(i[j]))) return;
        h
          ? c.cleanData([a], !0)
          : c.support.deleteExpando || i != i.window
          ? delete i[j]
          : (i[j] = null);
      }
    }
  }
  function wb(a, b, d) {
    if (void 0 === d && 1 === a.nodeType)
      if (
        ((d = "data-" + b.replace(Cc, "-$1").toLowerCase()),
        (d = a.getAttribute(d)),
        "string" === typeof d)
      ) {
        try {
          d =
            "true" === d
              ? !0
              : "false" === d
              ? !1
              : "null" === d
              ? null
              : +d + "" === d
              ? +d
              : Dc.test(d)
              ? c.parseJSON(d)
              : d;
        } catch (e) {}
        c.data(a, b, d);
      } else d = void 0;
    return d;
  }
  function Na(a) {
    for (var b in a)
      if (!("data" === b && c.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    return !0;
  }
  function qa() {
    return !0;
  }
  function aa() {
    return !1;
  }
  function xb(a, b) {
    do a = a[b];
    while (a && 1 !== a.nodeType);
    return a;
  }
  function yb(a, b, d) {
    b = b || 0;
    if (c.isFunction(b))
      return c.grep(a, function (a, e) {
        return !!b.call(a, e, a) === d;
      });
    if (b.nodeType)
      return c.grep(a, function (a) {
        return (a === b) === d;
      });
    if ("string" === typeof b) {
      var e = c.grep(a, function (a) {
        return 1 === a.nodeType;
      });
      if (Ec.test(b)) return c.filter(b, e, !d);
      b = c.filter(b, e);
    }
    return c.grep(a, function (a) {
      return 0 <= c.inArray(a, b) === d;
    });
  }
  function zb(a) {
    var b = Ab.split("|"),
      a = a.createDocumentFragment();
    if (a.createElement) for (; b.length; ) a.createElement(b.pop());
    return a;
  }
  function Bb(a) {
    var b = a.getAttributeNode("type");
    a.type = (b && b.specified) + "/" + a.type;
    return a;
  }
  function Cb(a) {
    var b = Fc.exec(a.type);
    b ? (a.type = b[1]) : a.removeAttribute("type");
    return a;
  }
  function Oa(a, b) {
    for (var d, e = 0; null != (d = a[e]); e++)
      c._data(d, "globalEval", !b || c._data(b[e], "globalEval"));
  }
  function Db(a, b) {
    if (1 === b.nodeType && c.hasData(a)) {
      var d, e, f;
      e = c._data(a);
      var g = c._data(b, e),
        h = e.events;
      if (h)
        for (d in (delete g.handle, (g.events = {}), h)) {
          e = 0;
          for (f = h[d].length; e < f; e++) c.event.add(b, d, h[d][e]);
        }
      g.data && (g.data = c.extend({}, g.data));
    }
  }
  function A(a, b) {
    var d,
      e,
      f = 0,
      g =
        typeof a.getElementsByTagName !== I
          ? a.getElementsByTagName(b || "*")
          : typeof a.querySelectorAll !== I
          ? a.querySelectorAll(b || "*")
          : void 0;
    if (!g) {
      g = [];
      for (d = a.childNodes || a; null != (e = d[f]); f++)
        !b || c.nodeName(e, b) ? g.push(e) : c.merge(g, A(e, b));
    }
    return void 0 === b || (b && c.nodeName(a, b)) ? c.merge([a], g) : g;
  }
  function Gc(a) {
    Pa.test(a.type) && (a.defaultChecked = a.checked);
  }
  function Eb(a, b) {
    if (b in a) return b;
    for (
      var d = b.charAt(0).toUpperCase() + b.slice(1), e = b, c = Fb.length;
      c--;

    )
      if (((b = Fb[c] + d), b in a)) return b;
    return e;
  }
  function ka(a, b) {
    a = b || a;
    return "none" === c.css(a, "display") || !c.contains(a.ownerDocument, a);
  }
  function Gb(a, b) {
    for (var d, e, f, g = [], h = 0, i = a.length; h < i; h++)
      if (((e = a[h]), e.style))
        if (((g[h] = c._data(e, "olddisplay")), (d = e.style.display), b))
          !g[h] && "none" === d && (e.style.display = ""),
            "" === e.style.display &&
              ka(e) &&
              (g[h] = c._data(e, "olddisplay", Hb(e.nodeName)));
        else if (!g[h] && ((f = ka(e)), (d && "none" !== d) || !f))
          c._data(e, "olddisplay", f ? d : c.css(e, "display"));
    for (h = 0; h < i; h++)
      if (
        ((e = a[h]),
        e.style && (!b || "none" === e.style.display || "" === e.style.display))
      )
        e.style.display = b ? g[h] || "" : "none";
    return a;
  }
  function Ib(a, b, d) {
    return (a = Hc.exec(b)) ? Math.max(0, a[1] - (d || 0)) + (a[2] || "px") : b;
  }
  function Jb(a, b, d, e, f) {
    for (
      var b = d === (e ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
        g = 0;
      4 > b;
      b += 2
    )
      "margin" === d && (g += c.css(a, d + S[b], !0, f)),
        e
          ? ("content" === d && (g -= c.css(a, "padding" + S[b], !0, f)),
            "margin" !== d && (g -= c.css(a, "border" + S[b] + "Width", !0, f)))
          : ((g += c.css(a, "padding" + S[b], !0, f)),
            "padding" !== d &&
              (g += c.css(a, "border" + S[b] + "Width", !0, f)));
    return g;
  }
  function Kb(a, b, d) {
    var e = !0,
      f = "width" === b ? a.offsetWidth : a.offsetHeight,
      g = T(a),
      h = c.support.boxSizing && "border-box" === c.css(a, "boxSizing", !1, g);
    if (0 >= f || null == f) {
      f = U(a, b, g);
      if (0 > f || null == f) f = a.style[b];
      if (ra.test(f)) return f;
      e = h && (c.support.boxSizingReliable || f === a.style[b]);
      f = parseFloat(f) || 0;
    }
    return f + Jb(a, b, d || (h ? "border" : "content"), e, g) + "px";
  }
  function Hb(a) {
    var b = n,
      d = Lb[a];
    if (!d) {
      d = Mb(a, b);
      if ("none" === d || !d)
        (la = (
          la ||
          c("<iframe frameborder='0' width='0' height='0'/>").css(
            "cssText",
            "display:block !important"
          )
        ).appendTo(b.documentElement)),
          (b = (la[0].contentWindow || la[0].contentDocument).document),
          b.write("<!doctype html><html><body>"),
          b.close(),
          (d = Mb(a, b)),
          la.detach();
      Lb[a] = d;
    }
    return d;
  }
  function Mb(a, b) {
    var d = c(b.createElement(a)).appendTo(b.body),
      e = c.css(d[0], "display");
    d.remove();
    return e;
  }
  function Qa(a, b, d, e) {
    var f;
    if (c.isArray(b))
      c.each(b, function (b, c) {
        d || Ic.test(a)
          ? e(a, c)
          : Qa(a + "[" + ("object" === typeof c ? b : "") + "]", c, d, e);
      });
    else if (!d && "object" === c.type(b))
      for (f in b) Qa(a + "[" + f + "]", b[f], d, e);
    else e(a, b);
  }
  function Nb(a) {
    return function (b, d) {
      "string" !== typeof b && ((d = b), (b = "*"));
      var e,
        f = 0,
        g = b.toLowerCase().match(L) || [];
      if (c.isFunction(d))
        for (; (e = g[f++]); )
          "+" === e[0]
            ? ((e = e.slice(1) || "*"), (a[e] = a[e] || []).unshift(d))
            : (a[e] = a[e] || []).push(d);
    };
  }
  function Ob(a, b, d, e) {
    function f(i) {
      var j;
      g[i] = !0;
      c.each(a[i] || [], function (a, c) {
        var i = c(b, d, e);
        if ("string" === typeof i && !h && !g[i])
          return b.dataTypes.unshift(i), f(i), !1;
        if (h) return !(j = i);
      });
      return j;
    }
    var g = {},
      h = a === Ra;
    return f(b.dataTypes[0]) || (!g["*"] && f("*"));
  }
  function Sa(a, b) {
    var d,
      e,
      f = c.ajaxSettings.flatOptions || {};
    for (e in b) void 0 !== b[e] && ((f[e] ? a : d || (d = {}))[e] = b[e]);
    d && c.extend(!0, a, d);
    return a;
  }
  function Pb() {
    try {
      return new p.XMLHttpRequest();
    } catch (a) {}
  }
  function Qb() {
    setTimeout(function () {
      ba = void 0;
    });
    return (ba = c.now());
  }
  function Rb(a, b, d) {
    var e,
      f,
      g = 0,
      h = sa.length,
      i = c.Deferred().always(function () {
        delete j.elem;
      }),
      j = function () {
        if (f) return !1;
        for (
          var b = ba || Qb(),
            b = Math.max(0, k.startTime + k.duration - b),
            d = 1 - (b / k.duration || 0),
            e = 0,
            c = k.tweens.length;
          e < c;
          e++
        )
          k.tweens[e].run(d);
        i.notifyWith(a, [k, d, b]);
        if (1 > d && c) return b;
        i.resolveWith(a, [k]);
        return !1;
      },
      k = i.promise({
        elem: a,
        props: c.extend({}, b),
        opts: c.extend(
          !0,
          {
            specialEasing: {},
          },
          d
        ),
        originalProperties: b,
        originalOptions: d,
        startTime: ba || Qb(),
        duration: d.duration,
        tweens: [],
        createTween: function (b, d) {
          var e = c.Tween(
            a,
            k.opts,
            b,
            d,
            k.opts.specialEasing[b] || k.opts.easing
          );
          k.tweens.push(e);
          return e;
        },
        stop: function (b) {
          var d = 0,
            e = b ? k.tweens.length : 0;
          if (f) return this;
          for (f = !0; d < e; d++) k.tweens[d].run(1);
          b ? i.resolveWith(a, [k, b]) : i.rejectWith(a, [k, b]);
          return this;
        },
      }),
      b = k.props,
      d = k.opts.specialEasing,
      m,
      l,
      o,
      t;
    for (e in b)
      if (
        ((l = c.camelCase(e)),
        (o = d[l]),
        (m = b[e]),
        c.isArray(m) && ((o = m[1]), (m = b[e] = m[0])),
        e !== l && ((b[l] = m), delete b[e]),
        (t = c.cssHooks[l]) && "expand" in t)
      )
        for (e in ((m = t.expand(m)), delete b[l], m))
          e in b || ((b[e] = m[e]), (d[e] = o));
      else d[l] = o;
    for (; g < h; g++) if ((e = sa[g].call(k, a, b, k.opts))) return e;
    var n = k;
    c.each(b, function (a, b) {
      for (
        var d = (ma[a] || []).concat(ma["*"]), e = 0, c = d.length;
        e < c && !d[e].call(n, a, b);
        e++
      );
    });
    c.isFunction(k.opts.start) && k.opts.start.call(a, k);
    c.fx.timer(
      c.extend(j, {
        elem: a,
        anim: k,
        queue: k.opts.queue,
      })
    );
    return k
      .progress(k.opts.progress)
      .done(k.opts.done, k.opts.complete)
      .fail(k.opts.fail)
      .always(k.opts.always);
  }
  function B(a, b, d, e, c) {
    return new B.prototype.init(a, b, d, e, c);
  }
  function ta(a, b) {
    for (
      var d,
        e = {
          height: a,
        },
        c = 0,
        b = b ? 1 : 0;
      4 > c;
      c += 2 - b
    )
      (d = S[c]), (e["margin" + d] = e["padding" + d] = a);
    b && (e.opacity = e.width = a);
    return e;
  }
  function Sb(a) {
    return c.isWindow(a)
      ? a
      : 9 === a.nodeType
      ? a.defaultView || a.parentWindow
      : !1;
  }
  var ua,
    Tb,
    I = "undefined",
    n = p.document,
    Kc = p.location,
    Lc = p.jQuery,
    Mc = p.$,
    va = {},
    $ = [],
    Ub = $.concat,
    Ta = $.push,
    V = $.slice,
    Vb = $.indexOf,
    Nc = va.toString,
    na = va.hasOwnProperty,
    Ua = "1.9.1".trim,
    c = function (a, b) {
      return new c.fn.init(a, b, Tb);
    },
    wa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    L = /\S+/g,
    Oc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    Pc = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    Wb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    Qc = /^[\],:{}\s]*$/,
    Rc = /(?:^|:|,)(?:\s*\[)+/g,
    Sc = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    Tc = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    Uc = /^-ms-/,
    Vc = /-([\da-z])/gi,
    Wc = function (a, b) {
      return b.toUpperCase();
    },
    M = function (a) {
      if (
        n.addEventListener ||
        "load" === a.type ||
        "complete" === n.readyState
      )
        Xb(), c.ready();
    },
    Xb = function () {
      n.addEventListener
        ? (n.removeEventListener("DOMContentLoaded", M, !1),
          p.removeEventListener("load", M, !1))
        : (n.detachEvent("onreadystatechange", M), p.detachEvent("onload", M));
    };
  c.fn = c.prototype = {
    jquery: "1.9.1",
    constructor: c,
    init: function (a, b, d) {
      var e;
      if (!a) return this;
      if ("string" === typeof a) {
        if (
          (e =
            "<" === a.charAt(0) &&
            ">" === a.charAt(a.length - 1) &&
            3 <= a.length
              ? [null, a, null]
              : Pc.exec(a)) &&
          (e[1] || !b)
        ) {
          if (e[1]) {
            if (
              ((b = b instanceof c ? b[0] : b),
              c.merge(
                this,
                c.parseHTML(
                  e[1],
                  b && b.nodeType ? b.ownerDocument || b : n,
                  !0
                )
              ),
              Wb.test(e[1]) && c.isPlainObject(b))
            )
              for (e in b)
                if (c.isFunction(this[e])) this[e](b[e]);
                else this.attr(e, b[e]);
          } else {
            if ((b = n.getElementById(e[2])) && b.parentNode) {
              if (b.id !== e[2]) return d.find(a);
              this.length = 1;
              this[0] = b;
            }
            this.context = n;
            this.selector = a;
          }
          return this;
        }
        return !b || b.jquery ? (b || d).find(a) : this.constructor(b).find(a);
      }
      if (a.nodeType)
        return (this.context = this[0] = a), (this.length = 1), this;
      if (c.isFunction(a)) return d.ready(a);
      void 0 !== a.selector &&
        ((this.selector = a.selector), (this.context = a.context));
      return c.makeArray(a, this);
    },
    selector: "",
    length: 0,
    size: function () {
      return this.length;
    },
    toArray: function () {
      return V.call(this);
    },
    get: function (a) {
      return null == a
        ? this.toArray()
        : 0 > a
        ? this[this.length + a]
        : this[a];
    },
    pushStack: function (a) {
      a = c.merge(this.constructor(), a);
      a.prevObject = this;
      a.context = this.context;
      return a;
    },
    each: function (a, b) {
      return c.each(this, a, b);
    },
    ready: function (a) {
      c.ready.promise().done(a);
      return this;
    },
    slice: function () {
      return this.pushStack(V.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (a) {
      var b = this.length,
        a = +a + (0 > a ? b : 0);
      return this.pushStack(0 <= a && a < b ? [this[a]] : []);
    },
    map: function (a) {
      return this.pushStack(
        c.map(this, function (b, d) {
          return a.call(b, d, b);
        })
      );
    },
    end: function () {
      return this.prevObject || this.constructor(null);
    },
    push: Ta,
    sort: [].sort,
    splice: [].splice,
  };
  c.fn.init.prototype = c.fn;
  c.extend = c.fn.extend = function () {
    var a,
      b,
      d,
      e,
      f,
      g = arguments[0] || {},
      h = 1,
      i = arguments.length,
      j = !1;
    "boolean" === typeof g && ((j = g), (g = arguments[1] || {}), (h = 2));
    "object" !== typeof g && !c.isFunction(g) && (g = {});
    i === h && ((g = this), --h);
    for (; h < i; h++)
      if (null != (f = arguments[h]))
        for (e in f)
          (a = g[e]),
            (d = f[e]),
            g !== d &&
              (j && d && (c.isPlainObject(d) || (b = c.isArray(d)))
                ? (b
                    ? ((b = !1), (a = a && c.isArray(a) ? a : []))
                    : (a = a && c.isPlainObject(a) ? a : {}),
                  (g[e] = c.extend(j, a, d)))
                : void 0 !== d && (g[e] = d));
    return g;
  };
  c.extend({
    noConflict: function (a) {
      p.$ === c && (p.$ = Mc);
      a && p.jQuery === c && (p.jQuery = Lc);
      return c;
    },
    isReady: !1,
    readyWait: 1,
    holdReady: function (a) {
      a ? c.readyWait++ : c.ready(!0);
    },
    ready: function (a) {
      if (!(!0 === a ? --c.readyWait : c.isReady)) {
        if (!n.body) return setTimeout(c.ready);
        c.isReady = !0;
        (!0 !== a && 0 < --c.readyWait) ||
          (ua.resolveWith(n, [c]),
          c.fn.trigger && c(n).trigger("ready").off("ready"));
      }
    },
    isFunction: function (a) {
      return "function" === c.type(a);
    },
    isArray:
      Array.isArray ||
      function (a) {
        return "array" === c.type(a);
      },
    isWindow: function (a) {
      return null != a && a == a.window;
    },
    isNumeric: function (a) {
      return !isNaN(parseFloat(a)) && isFinite(a);
    },
    type: function (a) {
      return null == a
        ? String(a)
        : "object" === typeof a || "function" === typeof a
        ? va[Nc.call(a)] || "object"
        : typeof a;
    },
    isPlainObject: function (a) {
      if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a))
        return !1;
      try {
        if (
          a.constructor &&
          !na.call(a, "constructor") &&
          !na.call(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (b) {
        return !1;
      }
      for (var d in a);
      return void 0 === d || na.call(a, d);
    },
    isEmptyObject: function (a) {
      for (var b in a) return !1;
      return !0;
    },
    error: function (a) {
      throw Error(a);
    },
    parseHTML: function (a, b, d) {
      if (!a || "string" !== typeof a) return null;
      "boolean" === typeof b && ((d = b), (b = !1));
      var b = b || n,
        e = Wb.exec(a),
        d = !d && [];
      if (e) return [b.createElement(e[1])];
      e = c.buildFragment([a], b, d);
      d && c(d).remove();
      return c.merge([], e.childNodes);
    },
    parseJSON: function (a) {
      if (p.JSON && p.JSON.parse) return p.JSON.parse(a);
      if (null === a) return a;
      if (
        "string" === typeof a &&
        (a = c.trim(a)) &&
        Qc.test(a.replace(Sc, "@").replace(Tc, "]").replace(Rc, ""))
      )
        return new Function("return " + a)();
      c.error("Invalid JSON: " + a);
    },
    parseXML: function (a) {
      var b, d;
      if (!a || "string" !== typeof a) return null;
      try {
        p.DOMParser
          ? ((d = new DOMParser()), (b = d.parseFromString(a, "text/xml")))
          : ((b = new ActiveXObject("Microsoft.XMLDOM")),
            (b.async = "false"),
            b.loadXML(a));
      } catch (e) {
        b = void 0;
      }
      (!b ||
        !b.documentElement ||
        b.getElementsByTagName("parsererror").length) &&
        c.error("Invalid XML: " + a);
      return b;
    },
    noop: function () {},
    globalEval: function (a) {
      a &&
        c.trim(a) &&
        (
          p.execScript ||
          function (a) {
            p.eval.call(p, a);
          }
        )(a);
    },
    camelCase: function (a) {
      return a.replace(Uc, "ms-").replace(Vc, Wc);
    },
    nodeName: function (a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    },
    each: function (a, b, d) {
      var e,
        c = 0,
        g = a.length;
      e = Ma(a);
      if (d)
        if (e) for (; c < g && !((e = b.apply(a[c], d)), !1 === e); c++);
        else
          for (c in a) {
            if (((e = b.apply(a[c], d)), !1 === e)) break;
          }
      else if (e)
        for (; c < g && !((e = b.call(a[c], c, a[c])), !1 === e); c++);
      else for (c in a) if (((e = b.call(a[c], c, a[c])), !1 === e)) break;
      return a;
    },
    trim:
      Ua && !Ua.call("\ufeff\u00a0")
        ? function (a) {
            return null == a ? "" : Ua.call(a);
          }
        : function (a) {
            return null == a ? "" : (a + "").replace(Oc, "");
          },
    makeArray: function (a, b) {
      var d = b || [];
      null != a &&
        (Ma(Object(a))
          ? c.merge(d, "string" === typeof a ? [a] : a)
          : Ta.call(d, a));
      return d;
    },
    inArray: function (a, b, d) {
      var c;
      if (b) {
        if (Vb) return Vb.call(b, a, d);
        c = b.length;
        for (d = d ? (0 > d ? Math.max(0, c + d) : d) : 0; d < c; d++)
          if (d in b && b[d] === a) return d;
      }
      return -1;
    },
    merge: function (a, b) {
      var d = b.length,
        c = a.length,
        f = 0;
      if ("number" === typeof d) for (; f < d; f++) a[c++] = b[f];
      else for (; void 0 !== b[f]; ) a[c++] = b[f++];
      a.length = c;
      return a;
    },
    grep: function (a, b, d) {
      for (var c, f = [], g = 0, h = a.length, d = !!d; g < h; g++)
        (c = !!b(a[g], g)), d !== c && f.push(a[g]);
      return f;
    },
    map: function (a, b, d) {
      var c,
        f = 0,
        g = a.length,
        h = [];
      if (Ma(a))
        for (; f < g; f++) (c = b(a[f], f, d)), null != c && (h[h.length] = c);
      else for (f in a) (c = b(a[f], f, d)), null != c && (h[h.length] = c);
      return Ub.apply([], h);
    },
    guid: 1,
    proxy: function (a, b) {
      var d, e;
      "string" === typeof b && ((e = a[b]), (b = a), (a = e));
      if (c.isFunction(a))
        return (
          (d = V.call(arguments, 2)),
          (e = function () {
            return a.apply(b || this, d.concat(V.call(arguments)));
          }),
          (e.guid = a.guid = a.guid || c.guid++),
          e
        );
    },
    access: function (a, b, d, e, f, g, h) {
      var i = 0,
        j = a.length,
        k = null == d;
      if ("object" === c.type(d))
        for (i in ((f = !0), d)) c.access(a, b, i, d[i], !0, g, h);
      else if (
        void 0 !== e &&
        ((f = !0),
        c.isFunction(e) || (h = !0),
        k &&
          (h
            ? (b.call(a, e), (b = null))
            : ((k = b),
              (b = function (a, b, d) {
                return k.call(c(a), d);
              }))),
        b)
      )
        for (; i < j; i++) b(a[i], d, h ? e : e.call(a[i], i, b(a[i], d)));
      return f ? a : k ? b.call(a) : j ? b(a[0], d) : g;
    },
    now: function () {
      return new Date().getTime();
    },
  });
  c.ready.promise = function (a) {
    if (!ua)
      if (((ua = c.Deferred()), "complete" === n.readyState))
        setTimeout(c.ready);
      else if (n.addEventListener)
        n.addEventListener("DOMContentLoaded", M, !1),
          p.addEventListener("load", M, !1);
      else {
        n.attachEvent("onreadystatechange", M);
        p.attachEvent("onload", M);
        var b = !1;
        try {
          b = null == p.frameElement && n.documentElement;
        } catch (d) {}
        b &&
          b.doScroll &&
          (function f() {
            if (!c.isReady) {
              try {
                b.doScroll("left");
              } catch (a) {
                return setTimeout(f, 50);
              }
              Xb();
              c.ready();
            }
          })();
      }
    return ua.promise(a);
  };
  c.each(
    "Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function (a, b) {
      va["[object " + b + "]"] = b.toLowerCase();
    }
  );
  Tb = c(n);
  var Yb = {};
  c.Callbacks = function (a) {
    var b;
    if ("string" === typeof a) {
      if (!(b = Yb[a])) {
        b = a;
        var d = (Yb[b] = {});
        c.each(b.match(L) || [], function (a, b) {
          d[b] = !0;
        });
        b = d;
      }
    } else b = c.extend({}, a);
    var a = b,
      e,
      f,
      g,
      h,
      i,
      j,
      k = [],
      m = !a.once && [],
      l = function (b) {
        f = a.memory && b;
        g = !0;
        i = j || 0;
        j = 0;
        h = k.length;
        for (e = !0; k && i < h; i++)
          if (!1 === k[i].apply(b[0], b[1]) && a.stopOnFalse) {
            f = !1;
            break;
          }
        e = !1;
        k && (m ? m.length && l(m.shift()) : f ? (k = []) : o.disable());
      },
      o = {
        add: function () {
          if (k) {
            var b = k.length;
            (function Jc(b) {
              c.each(b, function (b, d) {
                var e = c.type(d);
                "function" === e
                  ? (!a.unique || !o.has(d)) && k.push(d)
                  : d && d.length && "string" !== e && Jc(d);
              });
            })(arguments);
            e ? (h = k.length) : f && ((j = b), l(f));
          }
          return this;
        },
        remove: function () {
          k &&
            c.each(arguments, function (a, b) {
              for (var d; -1 < (d = c.inArray(b, k, d)); )
                k.splice(d, 1), e && (d <= h && h--, d <= i && i--);
            });
          return this;
        },
        has: function (a) {
          return a ? -1 < c.inArray(a, k) : !(!k || !k.length);
        },
        empty: function () {
          k = [];
          return this;
        },
        disable: function () {
          k = m = f = void 0;
          return this;
        },
        disabled: function () {
          return !k;
        },
        lock: function () {
          m = void 0;
          f || o.disable();
          return this;
        },
        locked: function () {
          return !m;
        },
        fireWith: function (a, b) {
          b = b || [];
          b = [a, b.slice ? b.slice() : b];
          if (k && (!g || m)) e ? m.push(b) : l(b);
          return this;
        },
        fire: function () {
          o.fireWith(this, arguments);
          return this;
        },
        fired: function () {
          return !!g;
        },
      };
    return o;
  };
  c.extend({
    Deferred: function (a) {
      var b = [
          ["resolve", "done", c.Callbacks("once memory"), "resolved"],
          ["reject", "fail", c.Callbacks("once memory"), "rejected"],
          ["notify", "progress", c.Callbacks("memory")],
        ],
        d = "pending",
        e = {
          state: function () {
            return d;
          },
          always: function () {
            f.done(arguments).fail(arguments);
            return this;
          },
          then: function () {
            var a = arguments;
            return c
              .Deferred(function (d) {
                c.each(b, function (b, j) {
                  var k = j[0],
                    m = c.isFunction(a[b]) && a[b];
                  f[j[1]](function () {
                    var a = m && m.apply(this, arguments);
                    if (a && c.isFunction(a.promise))
                      a.promise()
                        .done(d.resolve)
                        .fail(d.reject)
                        .progress(d.notify);
                    else
                      d[k + "With"](
                        this === e ? d.promise() : this,
                        m ? [a] : arguments
                      );
                  });
                });
                a = null;
              })
              .promise();
          },
          promise: function (a) {
            return null != a ? c.extend(a, e) : e;
          },
        },
        f = {};
      e.pipe = e.then;
      c.each(b, function (a, c) {
        var i = c[2],
          j = c[3];
        e[c[1]] = i.add;
        j &&
          i.add(
            function () {
              d = j;
            },
            b[a ^ 1][2].disable,
            b[2][2].lock
          );
        f[c[0]] = function () {
          f[c[0] + "With"](this === f ? e : this, arguments);
          return this;
        };
        f[c[0] + "With"] = i.fireWith;
      });
      e.promise(f);
      a && a.call(f, f);
      return f;
    },
    when: function (a) {
      var b = 0,
        d = V.call(arguments),
        e = d.length,
        f = 1 !== e || (a && c.isFunction(a.promise)) ? e : 0,
        g = 1 === f ? a : c.Deferred(),
        h = function (a, b, d) {
          return function (c) {
            b[a] = this;
            d[a] = 1 < arguments.length ? V.call(arguments) : c;
            d === i ? g.notifyWith(b, d) : --f || g.resolveWith(b, d);
          };
        },
        i,
        j,
        k;
      if (1 < e) {
        i = Array(e);
        j = Array(e);
        for (k = Array(e); b < e; b++)
          d[b] && c.isFunction(d[b].promise)
            ? d[b]
                .promise()
                .done(h(b, k, d))
                .fail(g.reject)
                .progress(h(b, j, i))
            : --f;
      }
      f || g.resolveWith(k, d);
      return g.promise();
    },
  });
  var Xc = c,
    Va;
  var u,
    xa,
    N,
    C,
    ya,
    za,
    Aa,
    Wa,
    Zb,
    Xa,
    q = n.createElement("div");
  q.setAttribute("className", "t");
  q.innerHTML =
    "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
  xa = q.getElementsByTagName("*");
  N = q.getElementsByTagName("a")[0];
  if (!xa || !N || !xa.length) Va = {};
  else {
    ya = n.createElement("select");
    Aa = ya.appendChild(n.createElement("option"));
    C = q.getElementsByTagName("input")[0];
    N.style.cssText = "top:1px;float:left;opacity:.5";
    u = {
      getSetAttribute: "t" !== q.className,
      leadingWhitespace: 3 === q.firstChild.nodeType,
      tbody: !q.getElementsByTagName("tbody").length,
      htmlSerialize: !!q.getElementsByTagName("link").length,
      style: /top/.test(N.getAttribute("style")),
      hrefNormalized: "/a" === N.getAttribute("href"),
      opacity: /^0.5/.test(N.style.opacity),
      cssFloat: !!N.style.cssFloat,
      checkOn: !!C.value,
      optSelected: Aa.selected,
      enctype: !!n.createElement("form").enctype,
      html5Clone:
        "<:nav></:nav>" !== n.createElement("nav").cloneNode(!0).outerHTML,
      boxModel: "CSS1Compat" === n.compatMode,
      deleteExpando: !0,
      noCloneEvent: !0,
      inlineBlockNeedsLayout: !1,
      shrinkWrapBlocks: !1,
      reliableMarginRight: !0,
      boxSizingReliable: !0,
      pixelPosition: !1,
    };
    C.checked = !0;
    u.noCloneChecked = C.cloneNode(!0).checked;
    ya.disabled = !0;
    u.optDisabled = !Aa.disabled;
    try {
      delete q.test;
    } catch (Nd) {
      u.deleteExpando = !1;
    }
    C = n.createElement("input");
    C.setAttribute("value", "");
    u.input = "" === C.getAttribute("value");
    C.value = "t";
    C.setAttribute("type", "radio");
    u.radioValue = "t" === C.value;
    C.setAttribute("checked", "t");
    C.setAttribute("name", "t");
    za = n.createDocumentFragment();
    za.appendChild(C);
    u.appendChecked = C.checked;
    u.checkClone = za.cloneNode(!0).cloneNode(!0).lastChild.checked;
    q.attachEvent &&
      (q.attachEvent("onclick", function () {
        u.noCloneEvent = !1;
      }),
      q.cloneNode(!0).click());
    for (Xa in {
      submit: !0,
      change: !0,
      focusin: !0,
    })
      q.setAttribute((Wa = "on" + Xa), "t"),
        (u[Xa + "Bubbles"] = Wa in p || !1 === q.attributes[Wa].expando);
    q.style.backgroundClip = "content-box";
    q.cloneNode(!0).style.backgroundClip = "";
    u.clearCloneStyle = "content-box" === q.style.backgroundClip;
    c(function () {
      var a,
        b,
        d = n.getElementsByTagName("body")[0];
      d &&
        ((a = n.createElement("div")),
        (a.style.cssText =
          "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"),
        d.appendChild(a).appendChild(q),
        (q.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
        (b = q.getElementsByTagName("td")),
        (b[0].style.cssText = "padding:0;margin:0;border:0;display:none"),
        (Zb = 0 === b[0].offsetHeight),
        (b[0].style.display = ""),
        (b[1].style.display = "none"),
        (u.reliableHiddenOffsets = Zb && 0 === b[0].offsetHeight),
        (q.innerHTML = ""),
        (q.style.cssText =
          "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;"),
        (u.boxSizing = 4 === q.offsetWidth),
        (u.doesNotIncludeMarginInBodyOffset = 1 !== d.offsetTop),
        p.getComputedStyle &&
          ((u.pixelPosition = "1%" !== (p.getComputedStyle(q, null) || {}).top),
          (u.boxSizingReliable =
            "4px" ===
            (
              p.getComputedStyle(q, null) || {
                width: "4px",
              }
            ).width),
          (b = q.appendChild(n.createElement("div"))),
          (b.style.cssText = q.style.cssText =
            "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;"),
          (b.style.marginRight = b.style.width = "0"),
          (q.style.width = "1px"),
          (u.reliableMarginRight = !parseFloat(
            (p.getComputedStyle(b, null) || {}).marginRight
          ))),
        typeof q.style.zoom !== I &&
          ((q.innerHTML = ""),
          (q.style.cssText =
            "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;width:1px;padding:1px;display:inline;zoom:1"),
          (u.inlineBlockNeedsLayout = 3 === q.offsetWidth),
          (q.style.display = "block"),
          (q.innerHTML = "<div></div>"),
          (q.firstChild.style.width = "5px"),
          (u.shrinkWrapBlocks = 3 !== q.offsetWidth),
          u.inlineBlockNeedsLayout && (d.style.zoom = 1)),
        d.removeChild(a),
        (q = null));
    });
    xa = ya = za = Aa = N = C = null;
    Va = u;
  }
  Xc.support = Va;
  var Dc = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    Cc = /([A-Z])/g;
  c.extend({
    cache: {},
    expando: "jQuery" + ("1.9.1" + Math.random()).replace(/\D/g, ""),
    noData: {
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: !0,
    },
    hasData: function (a) {
      a = a.nodeType ? c.cache[a[c.expando]] : a[c.expando];
      return !!a && !Na(a);
    },
    data: function (a, b, d) {
      return ub(a, b, d);
    },
    removeData: function (a, b) {
      return vb(a, b);
    },
    _data: function (a, b, d) {
      return ub(a, b, d, !0);
    },
    _removeData: function (a, b) {
      return vb(a, b, !0);
    },
    acceptData: function (a) {
      if (a.nodeType && 1 !== a.nodeType && 9 !== a.nodeType) return !1;
      var b = a.nodeName && c.noData[a.nodeName.toLowerCase()];
      return !b || (!0 !== b && a.getAttribute("classid") === b);
    },
  });
  c.fn.extend({
    data: function (a, b) {
      var d,
        e,
        f = this[0],
        g = 0,
        h = null;
      if (void 0 === a) {
        if (
          this.length &&
          ((h = c.data(f)), 1 === f.nodeType && !c._data(f, "parsedAttrs"))
        ) {
          for (d = f.attributes; g < d.length; g++)
            (e = d[g].name),
              e.indexOf("data-") ||
                ((e = c.camelCase(e.slice(5))), wb(f, e, h[e]));
          c._data(f, "parsedAttrs", !0);
        }
        return h;
      }
      return "object" === typeof a
        ? this.each(function () {
            c.data(this, a);
          })
        : c.access(
            this,
            function (b) {
              if (void 0 === b) return f ? wb(f, a, c.data(f, a)) : null;
              this.each(function () {
                c.data(this, a, b);
              });
            },
            null,
            b,
            1 < arguments.length,
            null,
            !0
          );
    },
    removeData: function (a) {
      return this.each(function () {
        c.removeData(this, a);
      });
    },
  });
  c.extend({
    queue: function (a, b, d) {
      var e;
      if (a)
        return (
          (b = (b || "fx") + "queue"),
          (e = c._data(a, b)),
          d &&
            (!e || c.isArray(d)
              ? (e = c._data(a, b, c.makeArray(d)))
              : e.push(d)),
          e || []
        );
    },
    dequeue: function (a, b) {
      var b = b || "fx",
        d = c.queue(a, b),
        e = d.length,
        f = d.shift(),
        g = c._queueHooks(a, b),
        h = function () {
          c.dequeue(a, b);
        };
      "inprogress" === f && ((f = d.shift()), e--);
      if ((g.cur = f))
        "fx" === b && d.unshift("inprogress"), delete g.stop, f.call(a, h, g);
      !e && g && g.empty.fire();
    },
    _queueHooks: function (a, b) {
      var d = b + "queueHooks";
      return (
        c._data(a, d) ||
        c._data(a, d, {
          empty: c.Callbacks("once memory").add(function () {
            c._removeData(a, b + "queue");
            c._removeData(a, d);
          }),
        })
      );
    },
  });
  c.fn.extend({
    queue: function (a, b) {
      var d = 2;
      "string" !== typeof a && ((b = a), (a = "fx"), d--);
      return arguments.length < d
        ? c.queue(this[0], a)
        : void 0 === b
        ? this
        : this.each(function () {
            var d = c.queue(this, a, b);
            c._queueHooks(this, a);
            "fx" === a && "inprogress" !== d[0] && c.dequeue(this, a);
          });
    },
    dequeue: function (a) {
      return this.each(function () {
        c.dequeue(this, a);
      });
    },
    delay: function (a, b) {
      a = c.fx ? c.fx.speeds[a] || a : a;
      return this.queue(b || "fx", function (b, c) {
        var f = setTimeout(b, a);
        c.stop = function () {
          clearTimeout(f);
        };
      });
    },
    clearQueue: function (a) {
      return this.queue(a || "fx", []);
    },
    promise: function (a, b) {
      var d,
        e = 1,
        f = c.Deferred(),
        g = this,
        h = this.length,
        i = function () {
          --e || f.resolveWith(g, [g]);
        };
      "string" !== typeof a && ((b = a), (a = void 0));
      for (a = a || "fx"; h--; )
        if ((d = c._data(g[h], a + "queueHooks")) && d.empty)
          e++, d.empty.add(i);
      i();
      return f.promise(b);
    },
  });
  var ca,
    $b,
    Ya = /[\t\r\n]/g,
    Yc = /\r/g,
    Zc = /^(?:input|select|textarea|button|object)$/i,
    $c = /^(?:a|area)$/i,
    ac =
      /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
    Za = /^(?:checked|selected)$/i,
    W = c.support.getSetAttribute,
    $a = c.support.input;
  c.fn.extend({
    attr: function (a, b) {
      return c.access(this, c.attr, a, b, 1 < arguments.length);
    },
    removeAttr: function (a) {
      return this.each(function () {
        c.removeAttr(this, a);
      });
    },
    prop: function (a, b) {
      return c.access(this, c.prop, a, b, 1 < arguments.length);
    },
    removeProp: function (a) {
      a = c.propFix[a] || a;
      return this.each(function () {
        try {
          (this[a] = void 0), delete this[a];
        } catch (b) {}
      });
    },
    addClass: function (a) {
      var b,
        d,
        e,
        f,
        g,
        h = 0,
        i = this.length;
      b = "string" === typeof a && a;
      if (c.isFunction(a))
        return this.each(function (b) {
          c(this).addClass(a.call(this, b, this.className));
        });
      if (b)
        for (b = (a || "").match(L) || []; h < i; h++)
          if (
            ((d = this[h]),
            (e =
              1 === d.nodeType &&
              (d.className ? (" " + d.className + " ").replace(Ya, " ") : " ")))
          ) {
            for (g = 0; (f = b[g++]); )
              0 > e.indexOf(" " + f + " ") && (e += f + " ");
            d.className = c.trim(e);
          }
      return this;
    },
    removeClass: function (a) {
      var b,
        d,
        e,
        f,
        g,
        h = 0,
        i = this.length;
      b = 0 === arguments.length || ("string" === typeof a && a);
      if (c.isFunction(a))
        return this.each(function (b) {
          c(this).removeClass(a.call(this, b, this.className));
        });
      if (b)
        for (b = (a || "").match(L) || []; h < i; h++)
          if (
            ((d = this[h]),
            (e =
              1 === d.nodeType &&
              (d.className ? (" " + d.className + " ").replace(Ya, " ") : "")))
          ) {
            for (g = 0; (f = b[g++]); )
              for (; 0 <= e.indexOf(" " + f + " "); )
                e = e.replace(" " + f + " ", " ");
            d.className = a ? c.trim(e) : "";
          }
      return this;
    },
    toggleClass: function (a, b) {
      var d = typeof a,
        e = "boolean" === typeof b;
      return c.isFunction(a)
        ? this.each(function (d) {
            c(this).toggleClass(a.call(this, d, this.className, b), b);
          })
        : this.each(function () {
            if ("string" === d)
              for (
                var f, g = 0, h = c(this), i = b, j = a.match(L) || [];
                (f = j[g++]);

              )
                (i = e ? i : !h.hasClass(f)),
                  h[i ? "addClass" : "removeClass"](f);
            else if (d === I || "boolean" === d)
              this.className && c._data(this, "__className__", this.className),
                (this.className =
                  this.className || !1 === a
                    ? ""
                    : c._data(this, "__className__") || "");
          });
    },
    hasClass: function (a) {
      for (var a = " " + a + " ", b = 0, d = this.length; b < d; b++)
        if (
          1 === this[b].nodeType &&
          0 <= (" " + this[b].className + " ").replace(Ya, " ").indexOf(a)
        )
          return !0;
      return !1;
    },
    val: function (a) {
      var b,
        d,
        e,
        f = this[0];
      if (arguments.length)
        return (
          (e = c.isFunction(a)),
          this.each(function (b) {
            var f = c(this);
            if (
              1 === this.nodeType &&
              ((b = e ? a.call(this, b, f.val()) : a),
              null == b
                ? (b = "")
                : "number" === typeof b
                ? (b += "")
                : c.isArray(b) &&
                  (b = c.map(b, function (a) {
                    return null == a ? "" : a + "";
                  })),
              (d =
                c.valHooks[this.type] ||
                c.valHooks[this.nodeName.toLowerCase()]),
              !d || !("set" in d) || void 0 === d.set(this, b, "value"))
            )
              this.value = b;
          })
        );
      if (f) {
        if (
          (d = c.valHooks[f.type] || c.valHooks[f.nodeName.toLowerCase()]) &&
          "get" in d &&
          void 0 !== (b = d.get(f, "value"))
        )
          return b;
        b = f.value;
        return "string" === typeof b ? b.replace(Yc, "") : null == b ? "" : b;
      }
    },
  });
  c.extend({
    valHooks: {
      option: {
        get: function (a) {
          var b = a.attributes.value;
          return !b || b.specified ? a.value : a.text;
        },
      },
      select: {
        get: function (a) {
          for (
            var b,
              d = a.options,
              e = a.selectedIndex,
              f = (a = "select-one" === a.type || 0 > e) ? null : [],
              g = a ? e + 1 : d.length,
              h = 0 > e ? g : a ? e : 0;
            h < g;
            h++
          )
            if (
              ((b = d[h]),
              (b.selected || h === e) &&
                (c.support.optDisabled
                  ? !b.disabled
                  : null === b.getAttribute("disabled")) &&
                (!b.parentNode.disabled ||
                  !c.nodeName(b.parentNode, "optgroup")))
            ) {
              b = c(b).val();
              if (a) return b;
              f.push(b);
            }
          return f;
        },
        set: function (a, b) {
          var d = c.makeArray(b);
          c(a)
            .find("option")
            .each(function () {
              this.selected = 0 <= c.inArray(c(this).val(), d);
            });
          d.length || (a.selectedIndex = -1);
          return d;
        },
      },
    },
    attr: function (a, b, d) {
      var e, f, g;
      f = a.nodeType;
      if (a && !(3 === f || 8 === f || 2 === f)) {
        if (typeof a.getAttribute === I) return c.prop(a, b, d);
        if ((f = 1 !== f || !c.isXMLDoc(a)))
          (b = b.toLowerCase()), (e = c.attrHooks[b] || (ac.test(b) ? $b : ca));
        if (void 0 !== d)
          if (null === d) c.removeAttr(a, b);
          else {
            if (e && f && "set" in e && void 0 !== (g = e.set(a, d, b)))
              return g;
            a.setAttribute(b, d + "");
            return d;
          }
        else {
          if (e && f && "get" in e && null !== (g = e.get(a, b))) return g;
          typeof a.getAttribute !== I && (g = a.getAttribute(b));
          return null == g ? void 0 : g;
        }
      }
    },
    removeAttr: function (a, b) {
      var d,
        e,
        f = 0,
        g = b && b.match(L);
      if (g && 1 === a.nodeType)
        for (; (d = g[f++]); )
          (e = c.propFix[d] || d),
            ac.test(d)
              ? !W && Za.test(d)
                ? (a[c.camelCase("default-" + d)] = a[e] = !1)
                : (a[e] = !1)
              : c.attr(a, d, ""),
            a.removeAttribute(W ? d : e);
    },
    attrHooks: {
      type: {
        set: function (a, b) {
          if (
            !c.support.radioValue &&
            "radio" === b &&
            c.nodeName(a, "input")
          ) {
            var d = a.value;
            a.setAttribute("type", b);
            d && (a.value = d);
            return b;
          }
        },
      },
    },
    propFix: {
      tabindex: "tabIndex",
      readonly: "readOnly",
      for: "htmlFor",
      class: "className",
      maxlength: "maxLength",
      cellspacing: "cellSpacing",
      cellpadding: "cellPadding",
      rowspan: "rowSpan",
      colspan: "colSpan",
      usemap: "useMap",
      frameborder: "frameBorder",
      contenteditable: "contentEditable",
    },
    prop: function (a, b, d) {
      var e, f, g;
      g = a.nodeType;
      if (a && !(3 === g || 8 === g || 2 === g)) {
        if ((g = 1 !== g || !c.isXMLDoc(a)))
          (b = c.propFix[b] || b), (f = c.propHooks[b]);
        return void 0 !== d
          ? f && "set" in f && void 0 !== (e = f.set(a, d, b))
            ? e
            : (a[b] = d)
          : f && "get" in f && null !== (e = f.get(a, b))
          ? e
          : a[b];
      }
    },
    propHooks: {
      tabIndex: {
        get: function (a) {
          var b = a.getAttributeNode("tabindex");
          return b && b.specified
            ? parseInt(b.value, 10)
            : Zc.test(a.nodeName) || ($c.test(a.nodeName) && a.href)
            ? 0
            : void 0;
        },
      },
    },
  });
  $b = {
    get: function (a, b) {
      var d = c.prop(a, b),
        e = "boolean" === typeof d && a.getAttribute(b);
      return (d =
        "boolean" === typeof d
          ? $a && W
            ? null != e
            : Za.test(b)
            ? a[c.camelCase("default-" + b)]
            : !!e
          : a.getAttributeNode(b)) && !1 !== d.value
        ? b.toLowerCase()
        : void 0;
    },
    set: function (a, b, d) {
      !1 === b
        ? c.removeAttr(a, d)
        : ($a && W) || !Za.test(d)
        ? a.setAttribute((!W && c.propFix[d]) || d, d)
        : (a[c.camelCase("default-" + d)] = a[d] = !0);
      return d;
    },
  };
  if (!$a || !W)
    c.attrHooks.value = {
      get: function (a, b) {
        var d = a.getAttributeNode(b);
        return c.nodeName(a, "input")
          ? a.defaultValue
          : d && d.specified
          ? d.value
          : void 0;
      },
      set: function (a, b, d) {
        if (c.nodeName(a, "input")) a.defaultValue = b;
        else return ca && ca.set(a, b, d);
      },
    };
  W ||
    ((ca = c.valHooks.button =
      {
        get: function (a, b) {
          var d = a.getAttributeNode(b);
          return d &&
            ("id" === b || "name" === b || "coords" === b
              ? "" !== d.value
              : d.specified)
            ? d.value
            : void 0;
        },
        set: function (a, b, d) {
          var c = a.getAttributeNode(d);
          c || a.setAttributeNode((c = a.ownerDocument.createAttribute(d)));
          c.value = b += "";
          return "value" === d || b === a.getAttribute(d) ? b : void 0;
        },
      }),
    (c.attrHooks.contenteditable = {
      get: ca.get,
      set: function (a, b, d) {
        ca.set(a, "" === b ? !1 : b, d);
      },
    }),
    c.each(["width", "height"], function (a, b) {
      c.attrHooks[b] = c.extend(c.attrHooks[b], {
        set: function (a, c) {
          if ("" === c) return a.setAttribute(b, "auto"), c;
        },
      });
    }));
  c.support.hrefNormalized ||
    (c.each(["href", "src", "width", "height"], function (a, b) {
      c.attrHooks[b] = c.extend(c.attrHooks[b], {
        get: function (a) {
          a = a.getAttribute(b, 2);
          return null == a ? void 0 : a;
        },
      });
    }),
    c.each(["href", "src"], function (a, b) {
      c.propHooks[b] = {
        get: function (a) {
          return a.getAttribute(b, 4);
        },
      };
    }));
  c.support.style ||
    (c.attrHooks.style = {
      get: function (a) {
        return a.style.cssText || void 0;
      },
      set: function (a, b) {
        return (a.style.cssText = b + "");
      },
    });
  c.support.optSelected ||
    (c.propHooks.selected = c.extend(c.propHooks.selected, {
      get: function (a) {
        if ((a = a.parentNode))
          a.selectedIndex, a.parentNode && a.parentNode.selectedIndex;
        return null;
      },
    }));
  c.support.enctype || (c.propFix.enctype = "encoding");
  c.support.checkOn ||
    c.each(["radio", "checkbox"], function () {
      c.valHooks[this] = {
        get: function (a) {
          return null === a.getAttribute("value") ? "on" : a.value;
        },
      };
    });
  c.each(["radio", "checkbox"], function () {
    c.valHooks[this] = c.extend(c.valHooks[this], {
      set: function (a, b) {
        if (c.isArray(b)) return (a.checked = 0 <= c.inArray(c(a).val(), b));
      },
    });
  });
  var ab = /^(?:input|select|textarea)$/i,
    ad = /^key/,
    bd = /^(?:mouse|contextmenu)|click/,
    bc = /^(?:focusinfocus|focusoutblur)$/,
    cc = /^([^.]*)(?:\.(.+)|)$/;
  c.event = {
    global: {},
    add: function (a, b, d, e, f) {
      var g, h, i, j, k, m, l, o, t;
      if ((i = c._data(a))) {
        d.handler && ((j = d), (d = j.handler), (f = j.selector));
        d.guid || (d.guid = c.guid++);
        if (!(h = i.events)) h = i.events = {};
        if (!(k = i.handle))
          (k = i.handle =
            function (a) {
              return typeof c !== I && (!a || c.event.triggered !== a.type)
                ? c.event.dispatch.apply(k.elem, arguments)
                : void 0;
            }),
            (k.elem = a);
        b = (b || "").match(L) || [""];
        for (i = b.length; i--; ) {
          g = cc.exec(b[i]) || [];
          o = m = g[1];
          t = (g[2] || "").split(".").sort();
          g = c.event.special[o] || {};
          o = (f ? g.delegateType : g.bindType) || o;
          g = c.event.special[o] || {};
          m = c.extend(
            {
              type: o,
              origType: m,
              data: e,
              handler: d,
              guid: d.guid,
              selector: f,
              needsContext: f && c.expr.match.needsContext.test(f),
              namespace: t.join("."),
            },
            j
          );
          if (!(l = h[o]))
            if (
              ((l = h[o] = []),
              (l.delegateCount = 0),
              !g.setup || !1 === g.setup.call(a, e, t, k))
            )
              a.addEventListener
                ? a.addEventListener(o, k, !1)
                : a.attachEvent && a.attachEvent("on" + o, k);
          g.add &&
            (g.add.call(a, m), m.handler.guid || (m.handler.guid = d.guid));
          f ? l.splice(l.delegateCount++, 0, m) : l.push(m);
          c.event.global[o] = !0;
        }
        a = null;
      }
    },
    remove: function (a, b, d, e, f) {
      var g,
        h,
        i,
        j,
        k,
        m,
        l,
        o,
        t,
        n,
        p,
        y = c.hasData(a) && c._data(a);
      if (y && (m = y.events)) {
        b = (b || "").match(L) || [""];
        for (k = b.length; k--; )
          if (
            ((i = cc.exec(b[k]) || []),
            (t = p = i[1]),
            (n = (i[2] || "").split(".").sort()),
            t)
          ) {
            l = c.event.special[t] || {};
            t = (e ? l.delegateType : l.bindType) || t;
            o = m[t] || [];
            i = i[2] && RegExp("(^|\\.)" + n.join("\\.(?:.*\\.|)") + "(\\.|$)");
            for (j = g = o.length; g--; )
              if (
                ((h = o[g]),
                (f || p === h.origType) &&
                  (!d || d.guid === h.guid) &&
                  (!i || i.test(h.namespace)) &&
                  (!e || e === h.selector || ("**" === e && h.selector)))
              )
                o.splice(g, 1),
                  h.selector && o.delegateCount--,
                  l.remove && l.remove.call(a, h);
            j &&
              !o.length &&
              ((!l.teardown || !1 === l.teardown.call(a, n, y.handle)) &&
                c.removeEvent(a, t, y.handle),
              delete m[t]);
          } else for (t in m) c.event.remove(a, t + b[k], d, e, !0);
        c.isEmptyObject(m) && (delete y.handle, c._removeData(a, "events"));
      }
    },
    trigger: function (a, b, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        m = [d || n],
        l = na.call(a, "type") ? a.type : a;
      j = na.call(a, "namespace") ? a.namespace.split(".") : [];
      h = f = d = d || n;
      if (
        !(3 === d.nodeType || 8 === d.nodeType) &&
        !bc.test(l + c.event.triggered)
      )
        if (
          (0 <= l.indexOf(".") &&
            ((j = l.split(".")), (l = j.shift()), j.sort()),
          (g = 0 > l.indexOf(":") && "on" + l),
          (a = a[c.expando] ? a : new c.Event(l, "object" === typeof a && a)),
          (a.isTrigger = !0),
          (a.namespace = j.join(".")),
          (a.namespace_re = a.namespace
            ? RegExp("(^|\\.)" + j.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (a.result = void 0),
          a.target || (a.target = d),
          (b = null == b ? [a] : c.makeArray(b, [a])),
          (j = c.event.special[l] || {}),
          e || !(j.trigger && !1 === j.trigger.apply(d, b)))
        ) {
          if (!e && !j.noBubble && !c.isWindow(d)) {
            i = j.delegateType || l;
            bc.test(i + l) || (h = h.parentNode);
            for (; h; h = h.parentNode) m.push(h), (f = h);
            if (f === (d.ownerDocument || n))
              m.push(f.defaultView || f.parentWindow || p);
          }
          for (k = 0; (h = m[k++]) && !a.isPropagationStopped(); )
            (a.type = 1 < k ? i : j.bindType || l),
              (f =
                (c._data(h, "events") || {})[a.type] && c._data(h, "handle")) &&
                f.apply(h, b),
              (f = g && h[g]) &&
                c.acceptData(h) &&
                f.apply &&
                !1 === f.apply(h, b) &&
                a.preventDefault();
          a.type = l;
          if (
            !e &&
            !a.isDefaultPrevented() &&
            (!j._default || !1 === j._default.apply(d.ownerDocument, b)) &&
            !("click" === l && c.nodeName(d, "a")) &&
            c.acceptData(d) &&
            g &&
            d[l] &&
            !c.isWindow(d)
          ) {
            (f = d[g]) && (d[g] = null);
            c.event.triggered = l;
            try {
              d[l]();
            } catch (o) {}
            c.event.triggered = void 0;
            f && (d[g] = f);
          }
          return a.result;
        }
    },
    dispatch: function (a) {
      var a = c.event.fix(a),
        b,
        d,
        e,
        f,
        g = [],
        h = V.call(arguments);
      b = (c._data(this, "events") || {})[a.type] || [];
      var i = c.event.special[a.type] || {};
      h[0] = a;
      a.delegateTarget = this;
      if (!(i.preDispatch && !1 === i.preDispatch.call(this, a))) {
        g = c.event.handlers.call(this, a, b);
        for (b = 0; (e = g[b++]) && !a.isPropagationStopped(); ) {
          a.currentTarget = e.elem;
          for (
            f = 0;
            (d = e.handlers[f++]) && !a.isImmediatePropagationStopped();

          )
            if (!a.namespace_re || a.namespace_re.test(d.namespace))
              if (
                ((a.handleObj = d),
                (a.data = d.data),
                (d = (
                  (c.event.special[d.origType] || {}).handle || d.handler
                ).apply(e.elem, h)),
                void 0 !== d && !1 === (a.result = d))
              )
                a.preventDefault(), a.stopPropagation();
        }
        i.postDispatch && i.postDispatch.call(this, a);
        return a.result;
      }
    },
    handlers: function (a, b) {
      var d,
        e,
        f,
        g,
        h = [],
        i = b.delegateCount,
        j = a.target;
      if (i && j.nodeType && (!a.button || "click" !== a.type))
        for (; j != this; j = j.parentNode || this)
          if (1 === j.nodeType && (!0 !== j.disabled || "click" !== a.type)) {
            f = [];
            for (g = 0; g < i; g++)
              (e = b[g]),
                (d = e.selector + " "),
                void 0 === f[d] &&
                  (f[d] = e.needsContext
                    ? 0 <= c(d, this).index(j)
                    : c.find(d, this, null, [j]).length),
                f[d] && f.push(e);
            f.length &&
              h.push({
                elem: j,
                handlers: f,
              });
          }
      i < b.length &&
        h.push({
          elem: this,
          handlers: b.slice(i),
        });
      return h;
    },
    fix: function (a) {
      if (a[c.expando]) return a;
      var b, d, e;
      b = a.type;
      var f = a,
        g = this.fixHooks[b];
      g ||
        (this.fixHooks[b] = g =
          bd.test(b) ? this.mouseHooks : ad.test(b) ? this.keyHooks : {});
      e = g.props ? this.props.concat(g.props) : this.props;
      a = new c.Event(f);
      for (b = e.length; b--; ) (d = e[b]), (a[d] = f[d]);
      a.target || (a.target = f.srcElement || n);
      3 === a.target.nodeType && (a.target = a.target.parentNode);
      a.metaKey = !!a.metaKey;
      return g.filter ? g.filter(a, f) : a;
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: ["char", "charCode", "key", "keyCode"],
      filter: function (a, b) {
        null == a.which &&
          (a.which = null != b.charCode ? b.charCode : b.keyCode);
        return a;
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (a, b) {
        var d,
          c,
          f = b.button,
          g = b.fromElement;
        null == a.pageX &&
          null != b.clientX &&
          ((d = a.target.ownerDocument || n),
          (c = d.documentElement),
          (d = d.body),
          (a.pageX =
            b.clientX +
            ((c && c.scrollLeft) || (d && d.scrollLeft) || 0) -
            ((c && c.clientLeft) || (d && d.clientLeft) || 0)),
          (a.pageY =
            b.clientY +
            ((c && c.scrollTop) || (d && d.scrollTop) || 0) -
            ((c && c.clientTop) || (d && d.clientTop) || 0)));
        !a.relatedTarget &&
          g &&
          (a.relatedTarget = g === a.target ? b.toElement : g);
        !a.which &&
          void 0 !== f &&
          (a.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0);
        return a;
      },
    },
    special: {
      load: {
        noBubble: !0,
      },
      click: {
        trigger: function () {
          if (
            c.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
          )
            return this.click(), !1;
        },
      },
      focus: {
        trigger: function () {
          if (this !== n.activeElement && this.focus)
            try {
              return this.focus(), !1;
            } catch (a) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === n.activeElement && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result && (a.originalEvent.returnValue = a.result);
        },
      },
    },
    simulate: function (a, b, d, e) {
      a = c.extend(new c.Event(), d, {
        type: a,
        isSimulated: !0,
        originalEvent: {},
      });
      e ? c.event.trigger(a, null, b) : c.event.dispatch.call(b, a);
      a.isDefaultPrevented() && d.preventDefault();
    },
  };
  c.removeEvent = n.removeEventListener
    ? function (a, b, d) {
        a.removeEventListener && a.removeEventListener(b, d, !1);
      }
    : function (a, b, d) {
        b = "on" + b;
        a.detachEvent &&
          (typeof a[b] === I && (a[b] = null), a.detachEvent(b, d));
      };
  c.Event = function (a, b) {
    if (!(this instanceof c.Event)) return new c.Event(a, b);
    a && a.type
      ? ((this.originalEvent = a),
        (this.type = a.type),
        (this.isDefaultPrevented =
          a.defaultPrevented ||
          !1 === a.returnValue ||
          (a.getPreventDefault && a.getPreventDefault())
            ? qa
            : aa))
      : (this.type = a);
    b && c.extend(this, b);
    this.timeStamp = (a && a.timeStamp) || c.now();
    this[c.expando] = !0;
  };
  c.Event.prototype = {
    isDefaultPrevented: aa,
    isPropagationStopped: aa,
    isImmediatePropagationStopped: aa,
    preventDefault: function () {
      var a = this.originalEvent;
      this.isDefaultPrevented = qa;
      a && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1));
    },
    stopPropagation: function () {
      var a = this.originalEvent;
      this.isPropagationStopped = qa;
      a && (a.stopPropagation && a.stopPropagation(), (a.cancelBubble = !0));
    },
    stopImmediatePropagation: function () {
      this.isImmediatePropagationStopped = qa;
      this.stopPropagation();
    },
  };
  c.each(
    {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
    },
    function (a, b) {
      c.event.special[a] = {
        delegateType: b,
        bindType: b,
        handle: function (a) {
          var e,
            f = a.relatedTarget,
            g = a.handleObj;
          if (!f || (f !== this && !c.contains(this, f)))
            (a.type = g.origType),
              (e = g.handler.apply(this, arguments)),
              (a.type = b);
          return e;
        },
      };
    }
  );
  c.support.submitBubbles ||
    (c.event.special.submit = {
      setup: function () {
        if (c.nodeName(this, "form")) return !1;
        c.event.add(this, "click._submit keypress._submit", function (a) {
          a = a.target;
          if (
            (a =
              c.nodeName(a, "input") || c.nodeName(a, "button")
                ? a.form
                : void 0) &&
            !c._data(a, "submitBubbles")
          )
            c.event.add(a, "submit._submit", function (a) {
              a._submit_bubble = !0;
            }),
              c._data(a, "submitBubbles", !0);
        });
      },
      postDispatch: function (a) {
        a._submit_bubble &&
          (delete a._submit_bubble,
          this.parentNode &&
            !a.isTrigger &&
            c.event.simulate("submit", this.parentNode, a, !0));
      },
      teardown: function () {
        if (c.nodeName(this, "form")) return !1;
        c.event.remove(this, "._submit");
      },
    });
  c.support.changeBubbles ||
    (c.event.special.change = {
      setup: function () {
        if (ab.test(this.nodeName)) {
          if ("checkbox" === this.type || "radio" === this.type)
            c.event.add(this, "propertychange._change", function (a) {
              "checked" === a.originalEvent.propertyName &&
                (this._just_changed = !0);
            }),
              c.event.add(this, "click._change", function (a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1);
                c.event.simulate("change", this, a, !0);
              });
          return !1;
        }
        c.event.add(this, "beforeactivate._change", function (a) {
          a = a.target;
          ab.test(a.nodeName) &&
            !c._data(a, "changeBubbles") &&
            (c.event.add(a, "change._change", function (a) {
              this.parentNode &&
                !a.isSimulated &&
                !a.isTrigger &&
                c.event.simulate("change", this.parentNode, a, !0);
            }),
            c._data(a, "changeBubbles", !0));
        });
      },
      handle: function (a) {
        var b = a.target;
        if (
          this !== b ||
          a.isSimulated ||
          a.isTrigger ||
          ("radio" !== b.type && "checkbox" !== b.type)
        )
          return a.handleObj.handler.apply(this, arguments);
      },
      teardown: function () {
        c.event.remove(this, "._change");
        return !ab.test(this.nodeName);
      },
    });
  c.support.focusinBubbles ||
    c.each(
      {
        focus: "focusin",
        blur: "focusout",
      },
      function (a, b) {
        var d = 0,
          e = function (a) {
            c.event.simulate(b, a.target, c.event.fix(a), !0);
          };
        c.event.special[b] = {
          setup: function () {
            0 === d++ && n.addEventListener(a, e, !0);
          },
          teardown: function () {
            0 === --d && n.removeEventListener(a, e, !0);
          },
        };
      }
    );
  c.fn.extend({
    on: function (a, b, d, e, f) {
      var g, h;
      if ("object" === typeof a) {
        "string" !== typeof b && ((d = d || b), (b = void 0));
        for (g in a) this.on(g, b, d, a[g], f);
        return this;
      }
      null == d && null == e
        ? ((e = b), (d = b = void 0))
        : null == e &&
          ("string" === typeof b
            ? ((e = d), (d = void 0))
            : ((e = d), (d = b), (b = void 0)));
      if (!1 === e) e = aa;
      else if (!e) return this;
      1 === f &&
        ((h = e),
        (e = function (a) {
          c().off(a);
          return h.apply(this, arguments);
        }),
        (e.guid = h.guid || (h.guid = c.guid++)));
      return this.each(function () {
        c.event.add(this, a, e, d, b);
      });
    },
    one: function (a, b, d, c) {
      return this.on(a, b, d, c, 1);
    },
    off: function (a, b, d) {
      var e;
      if (a && a.preventDefault && a.handleObj)
        return (
          (e = a.handleObj),
          c(a.delegateTarget).off(
            e.namespace ? e.origType + "." + e.namespace : e.origType,
            e.selector,
            e.handler
          ),
          this
        );
      if ("object" === typeof a) {
        for (e in a) this.off(e, b, a[e]);
        return this;
      }
      if (!1 === b || "function" === typeof b) (d = b), (b = void 0);
      !1 === d && (d = aa);
      return this.each(function () {
        c.event.remove(this, a, d, b);
      });
    },
    bind: function (a, b, d) {
      return this.on(a, null, b, d);
    },
    unbind: function (a, b) {
      return this.off(a, null, b);
    },
    delegate: function (a, b, d, c) {
      return this.on(b, a, d, c);
    },
    undelegate: function (a, b, d) {
      return 1 === arguments.length
        ? this.off(a, "**")
        : this.off(b, a || "**", d);
    },
    trigger: function (a, b) {
      return this.each(function () {
        c.event.trigger(a, b, this);
      });
    },
    triggerHandler: function (a, b) {
      var d = this[0];
      if (d) return c.event.trigger(a, b, d, !0);
    },
  });
  var bb = p,
    cb = function () {
      var a,
        b = [];
      return (a = function (d, c) {
        b.push((d += " ")) > v.cacheLength && delete a[b.shift()];
        return (a[d] = c);
      });
    },
    G = function (a) {
      a[r] = !0;
      return a;
    },
    O = function (a) {
      var b = z.createElement("div");
      try {
        return a(b);
      } catch (d) {
        return !1;
      } finally {
      }
    },
    w = function (a, b, d, c) {
      var f, g, h, i, j;
      (b ? b.ownerDocument || b : X) !== z && da(b);
      b = b || z;
      d = d || [];
      if (!a || "string" !== typeof a) return d;
      if (1 !== (i = b.nodeType) && 9 !== i) return [];
      if (!F && !c) {
        if ((f = cd.exec(a)))
          if ((h = f[1]))
            if (9 === i)
              if ((g = b.getElementById(h)) && g.parentNode) {
                if (g.id === h) return d.push(g), d;
              } else return d;
            else {
              if (
                b.ownerDocument &&
                (g = b.ownerDocument.getElementById(h)) &&
                oa(b, g) &&
                g.id === h
              )
                return d.push(g), d;
            }
          else {
            if (f[2])
              return ea.apply(d, fa.call(b.getElementsByTagName(a), 0)), d;
            if ((h = f[3]) && s.getByClassName && b.getElementsByClassName)
              return ea.apply(d, fa.call(b.getElementsByClassName(h), 0)), d;
          }
        if (s.qsa && !J.test(a)) {
          f = !0;
          g = r;
          h = b;
          j = 9 === i && a;
          if (1 === i && "object" !== b.nodeName.toLowerCase()) {
            i = Ba(a);
            (f = b.getAttribute("id"))
              ? (g = f.replace(dd, "\\$&"))
              : b.setAttribute("id", g);
            g = "[id='" + g + "'] ";
            for (h = i.length; h--; ) i[h] = g + Ca(i[h]);
            h = (db.test(a) && b.parentNode) || b;
            j = i.join(",");
          }
          if (j)
            try {
              return ea.apply(d, fa.call(h.querySelectorAll(j), 0)), d;
            } catch (k) {
            } finally {
              f || b.removeAttribute("id");
            }
        }
      }
      var m;
      a: {
        a = a.replace(Da, "$1");
        g = Ba(a);
        if (!c && 1 === g.length) {
          f = g[0] = g[0].slice(0);
          if (
            2 < f.length &&
            "ID" === (m = f[0]).type &&
            9 === b.nodeType &&
            !F &&
            v.relative[f[1].type]
          ) {
            b = v.find.ID(m.matches[0].replace(P, Q), b)[0];
            if (!b) {
              m = d;
              break a;
            }
            a = a.slice(f.shift().value.length);
          }
          for (i = Ea.needsContext.test(a) ? 0 : f.length; i--; ) {
            m = f[i];
            if (v.relative[(h = m.type)]) break;
            if ((h = v.find[h]))
              if (
                (c = h(
                  m.matches[0].replace(P, Q),
                  (db.test(f[0].type) && b.parentNode) || b
                ))
              ) {
                f.splice(i, 1);
                a = c.length && Ca(f);
                if (!a) {
                  ea.apply(d, fa.call(c, 0));
                  m = d;
                  break a;
                }
                break;
              }
          }
        }
        eb(a, g)(c, b, F, d, db.test(a));
        m = d;
      }
      return m;
    },
    ec = function (a, b) {
      var d = b && a,
        c = d && (~b.sourceIndex || dc) - (~a.sourceIndex || dc);
      if (c) return c;
      if (d) for (; (d = d.nextSibling); ) if (d === b) return -1;
      return a ? 1 : -1;
    },
    ed = function (a) {
      return function (b) {
        return "input" === b.nodeName.toLowerCase() && b.type === a;
      };
    },
    fd = function (a) {
      return function (b) {
        var d = b.nodeName.toLowerCase();
        return ("input" === d || "button" === d) && b.type === a;
      };
    },
    Y = function (a) {
      return G(function (b) {
        b = +b;
        return G(function (d, c) {
          for (var f, g = a([], d.length, b), h = g.length; h--; )
            if (d[(f = g[h])]) d[f] = !(c[f] = d[f]);
        });
      });
    },
    Ba = function (a, b) {
      var d, c, f, g, h, i, j;
      if ((h = fc[a + " "])) return b ? 0 : h.slice(0);
      h = a;
      i = [];
      for (j = v.preFilter; h; ) {
        if (!d || (c = gd.exec(h)))
          c && (h = h.slice(c[0].length) || h), i.push((f = []));
        d = !1;
        if ((c = hd.exec(h)))
          (d = c.shift()),
            f.push({
              value: d,
              type: c[0].replace(Da, " "),
            }),
            (h = h.slice(d.length));
        for (g in v.filter)
          if ((c = Ea[g].exec(h)) && (!j[g] || (c = j[g](c))))
            (d = c.shift()),
              f.push({
                value: d,
                type: g,
                matches: c,
              }),
              (h = h.slice(d.length));
        if (!d) break;
      }
      return b ? h.length : h ? w.error(a) : fc(a, i).slice(0);
    },
    Ca = function (a) {
      for (var b = 0, d = a.length, c = ""; b < d; b++) c += a[b].value;
      return c;
    },
    fb = function (a, b, d) {
      var c = b.dir,
        f = d && "parentNode" === c,
        g = id++;
      return b.first
        ? function (b, d, g) {
            for (; (b = b[c]); ) if (1 === b.nodeType || f) return a(b, d, g);
          }
        : function (b, d, j) {
            var k,
              m,
              l,
              o = K + " " + g;
            if (j)
              for (; (b = b[c]); ) {
                if ((1 === b.nodeType || f) && a(b, d, j)) return !0;
              }
            else
              for (; (b = b[c]); )
                if (1 === b.nodeType || f)
                  if (((l = b[r] || (b[r] = {})), (m = l[c]) && m[0] === o)) {
                    if (!0 === (k = m[1]) || k === Fa) return !0 === k;
                  } else if (
                    ((m = l[c] = [o]), (m[1] = a(b, d, j) || Fa), !0 === m[1])
                  )
                    return !0;
          };
    },
    gb = function (a) {
      return 1 < a.length
        ? function (b, d, c) {
            for (var f = a.length; f--; ) if (!a[f](b, d, c)) return !1;
            return !0;
          }
        : a[0];
    },
    Ga = function (a, b, d, c, f) {
      for (var g, h = [], i = 0, j = a.length, k = null != b; i < j; i++)
        if ((g = a[i])) if (!d || d(g, c, f)) h.push(g), k && b.push(i);
      return h;
    },
    hb = function (a, b, d, c, f, g) {
      c && !c[r] && (c = hb(c));
      f && !f[r] && (f = hb(f, g));
      return G(function (g, i, j, k) {
        var m,
          l,
          o = [],
          t = [],
          n = i.length,
          p;
        if (!(p = g)) {
          p = b || "*";
          for (
            var y = j.nodeType ? [j] : j, q = [], v = 0, r = y.length;
            v < r;
            v++
          )
            w(p, y[v], q);
          p = q;
        }
        p = a && (g || !b) ? Ga(p, o, a, j, k) : p;
        y = d ? (f || (g ? a : n || c) ? [] : i) : p;
        d && d(p, y, j, k);
        if (c) {
          m = Ga(y, t);
          c(m, [], j, k);
          for (j = m.length; j--; ) if ((l = m[j])) y[t[j]] = !(p[t[j]] = l);
        }
        if (g) {
          if (f || a) {
            if (f) {
              m = [];
              for (j = y.length; j--; ) if ((l = y[j])) m.push((p[j] = l));
              f(null, (y = []), m, k);
            }
            for (j = y.length; j--; )
              if ((l = y[j]) && -1 < (m = f ? ib.call(g, l) : o[j]))
                g[m] = !(i[m] = l);
          }
        } else (y = Ga(y === i ? y.splice(n, y.length) : y)), f ? f(null, i, y, k) : ea.apply(i, y);
      });
    },
    jb = function (a) {
      var b,
        d,
        c,
        f = a.length,
        g = v.relative[a[0].type];
      d = g || v.relative[" "];
      for (
        var h = g ? 1 : 0,
          i = fb(
            function (a) {
              return a === b;
            },
            d,
            !0
          ),
          j = fb(
            function (a) {
              return -1 < ib.call(b, a);
            },
            d,
            !0
          ),
          k = [
            function (a, d, c) {
              return (
                (!g && (c || d !== Ha)) ||
                ((b = d).nodeType ? i(a, d, c) : j(a, d, c))
              );
            },
          ];
        h < f;
        h++
      )
        if ((d = v.relative[a[h].type])) k = [fb(gb(k), d)];
        else {
          d = v.filter[a[h].type].apply(null, a[h].matches);
          if (d[r]) {
            for (c = ++h; c < f && !v.relative[a[c].type]; c++);
            return hb(
              1 < h && gb(k),
              1 < h && Ca(a.slice(0, h - 1)).replace(Da, "$1"),
              d,
              h < c && jb(a.slice(h, c)),
              c < f && jb((a = a.slice(c))),
              c < f && Ca(a)
            );
          }
          k.push(d);
        }
      return gb(k);
    },
    gc = function () {},
    ga,
    Fa,
    v,
    Ia,
    hc,
    eb,
    ha,
    Ha,
    da,
    z,
    E,
    F,
    J,
    ia,
    Ja,
    oa,
    kb,
    r = "sizzle" + -new Date(),
    X = bb.document,
    s = {},
    K = 0,
    id = 0,
    ic = cb(),
    fc = cb(),
    jc = cb(),
    dc = -2147483648,
    Ka = [],
    jd = Ka.pop,
    ea = Ka.push,
    fa = Ka.slice,
    ib =
      Ka.indexOf ||
      function (a) {
        for (var b = 0, d = this.length; b < d; b++)
          if (this[b] === a) return b;
        return -1;
      },
    kc = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"),
    lc =
      "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
      kc +
      ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
    lb =
      ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
      lc.replace(3, 8) +
      ")*)|.*)\\)|)",
    Da = RegExp(
      "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
      "g"
    ),
    gd = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
    hd = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,
    kd = RegExp(lb),
    ld = RegExp("^" + kc + "$"),
    Ea = {
      ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
      CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
      NAME: /^\[name=['"]?((?:\\.|[\w-]|[^\x00-\xa0])+)['"]?\]/,
      TAG: RegExp(
        "^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"
      ),
      ATTR: RegExp("^" + lc),
      PSEUDO: RegExp("^" + lb),
      CHILD: RegExp(
        "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
        "i"
      ),
      needsContext: RegExp(
        "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
        "i"
      ),
    },
    db = /[\x20\t\r\n\f]*[+~]/,
    mb = /^[^{]+\{\s*\[native code/,
    cd = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
    md = /^(?:input|select|textarea|button)$/i,
    nd = /^h\d$/i,
    dd = /'|\\/g,
    od = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
    P = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
    Q = function (a, b) {
      var d = "0x" + b - 65536;
      return d !== d
        ? b
        : 0 > d
        ? String.fromCharCode(d + 65536)
        : String.fromCharCode((d >> 10) | 55296, (d & 1023) | 56320);
    };
  try {
    fa.call(X.documentElement.childNodes, 0)[0].nodeType;
  } catch (Od) {
    fa = function (a) {
      for (var b, d = []; (b = this[a++]); ) d.push(b);
      return d;
    };
  }
  hc = w.isXML = function (a) {
    return (a = a && (a.ownerDocument || a).documentElement)
      ? "HTML" !== a.nodeName
      : !1;
  };
  da = w.setDocument = function (a) {
    var b = a ? a.ownerDocument || a : X;
    if (b === z || 9 !== b.nodeType || !b.documentElement) return z;
    z = b;
    E = b.documentElement;
    F = hc(b);
    s.tagNameNoComments = O(function (a) {
      a.appendChild(b.createComment(""));
      return !a.getElementsByTagName("*").length;
    });
    s.attributes = O(function (a) {
      a.innerHTML = "<select></select>";
      a = typeof a.lastChild.getAttribute("multiple");
      return "boolean" !== a && "string" !== a;
    });
    s.getByClassName = O(function (a) {
      a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
      if (!a.getElementsByClassName || !a.getElementsByClassName("e").length)
        return !1;
      a.lastChild.className = "e";
      return 2 === a.getElementsByClassName("e").length;
    });
    s.getByName = O(function (a) {
      a.id = r + 0;
      a.innerHTML = "<a name='" + r + "'></a><div name='" + r + "'></div>";
      E.insertBefore(a, E.firstChild);
      var d =
        b.getElementsByName &&
        b.getElementsByName(r).length === 2 + b.getElementsByName(r + 0).length;
      s.getIdNotName = !b.getElementById(r);
      E.removeChild(a);
      return d;
    });
    v.attrHandle = O(function (a) {
      a.innerHTML = "<a href='#'></a>";
      return (
        a.firstChild &&
        "undefined" !== typeof a.firstChild.getAttribute &&
        "#" === a.firstChild.getAttribute("href")
      );
    })
      ? {}
      : {
          href: function (a) {
            return a.getAttribute("href", 2);
          },
          type: function (a) {
            return a.getAttribute("type");
          },
        };
    s.getIdNotName
      ? ((v.find.ID = function (a, b) {
          if ("undefined" !== typeof b.getElementById && !F) {
            var d = b.getElementById(a);
            return d && d.parentNode ? [d] : [];
          }
        }),
        (v.filter.ID = function (a) {
          var b = a.replace(P, Q);
          return function (a) {
            return a.getAttribute("id") === b;
          };
        }))
      : ((v.find.ID = function (a, b) {
          if ("undefined" !== typeof b.getElementById && !F) {
            var d = b.getElementById(a);
            return d
              ? d.id === a ||
                ("undefined" !== typeof d.getAttributeNode &&
                  d.getAttributeNode("id").value === a)
                ? [d]
                : void 0
              : [];
          }
        }),
        (v.filter.ID = function (a) {
          var b = a.replace(P, Q);
          return function (a) {
            return (
              (a =
                "undefined" !== typeof a.getAttributeNode &&
                a.getAttributeNode("id")) && a.value === b
            );
          };
        }));
    v.find.TAG = s.tagNameNoComments
      ? function (a, b) {
          if ("undefined" !== typeof b.getElementsByTagName)
            return b.getElementsByTagName(a);
        }
      : function (a, b) {
          var d,
            c = [],
            i = 0,
            j = b.getElementsByTagName(a);
          if ("*" === a) {
            for (; (d = j[i++]); ) 1 === d.nodeType && c.push(d);
            return c;
          }
          return j;
        };
    v.find.NAME =
      s.getByName &&
      function (a, b) {
        if ("undefined" !== typeof b.getElementsByName)
          return b.getElementsByName(name);
      };
    v.find.CLASS =
      s.getByClassName &&
      function (a, b) {
        if ("undefined" !== typeof b.getElementsByClassName && !F)
          return b.getElementsByClassName(a);
      };
    ia = [];
    J = [":focus"];
    if ((s.qsa = mb.test(b.querySelectorAll + "")))
      O(function (a) {
        a.innerHTML = "<select><option selected=''></option></select>";
        a.querySelectorAll("[selected]").length ||
          J.push(
            "\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)"
          );
        a.querySelectorAll(":checked").length || J.push(":checked");
      }),
        O(function (a) {
          a.innerHTML = "<input type='hidden' i=''/>";
          a.querySelectorAll("[i^='']").length &&
            J.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
          a.querySelectorAll(":enabled").length ||
            J.push(":enabled", ":disabled");
          a.querySelectorAll("*,:x");
          J.push(",.*:");
        });
    var a = s,
      d;
    d = Ja =
      E.matchesSelector ||
      E.mozMatchesSelector ||
      E.webkitMatchesSelector ||
      E.oMatchesSelector ||
      E.msMatchesSelector;
    d = mb.test(d + "");
    (a.matchesSelector = d) &&
      O(function (a) {
        s.disconnectedMatch = Ja.call(a, "div");
        Ja.call(a, "[s!='']:x");
        ia.push("!=", lb);
      });
    J = RegExp(J.join("|"));
    ia = RegExp(ia.join("|"));
    oa =
      mb.test(E.contains + "") || E.compareDocumentPosition
        ? function (a, b) {
            var d = 9 === a.nodeType ? a.documentElement : a,
              c = b && b.parentNode;
            return (
              a === c ||
              !(
                !c ||
                !(
                  1 === c.nodeType &&
                  (d.contains
                    ? d.contains(c)
                    : a.compareDocumentPosition &&
                      a.compareDocumentPosition(c) & 16)
                )
              )
            );
          }
        : function (a, b) {
            if (b) for (; (b = b.parentNode); ) if (b === a) return !0;
            return !1;
          };
    kb = E.compareDocumentPosition
      ? function (a, d) {
          var c;
          return a === d
            ? ((ha = !0), 0)
            : (c =
                d.compareDocumentPosition &&
                a.compareDocumentPosition &&
                a.compareDocumentPosition(d))
            ? c & 1 || (a.parentNode && 11 === a.parentNode.nodeType)
              ? a === b || oa(X, a)
                ? -1
                : d === b || oa(X, d)
                ? 1
                : 0
              : c & 4
              ? -1
              : 1
            : a.compareDocumentPosition
            ? -1
            : 1;
        }
      : function (a, d) {
          var c,
            h = 0;
          c = a.parentNode;
          var i = d.parentNode,
            j = [a],
            k = [d];
          if (a === d) return (ha = !0), 0;
          if (!c || !i) return a === b ? -1 : d === b ? 1 : c ? -1 : i ? 1 : 0;
          if (c === i) return ec(a, d);
          for (c = a; (c = c.parentNode); ) j.unshift(c);
          for (c = d; (c = c.parentNode); ) k.unshift(c);
          for (; j[h] === k[h]; ) h++;
          return h ? ec(j[h], k[h]) : j[h] === X ? -1 : k[h] === X ? 1 : 0;
        };
    ha = !1;
    [0, 0].sort(kb);
    s.detectDuplicates = ha;
    return z;
  };
  w.matches = function (a, b) {
    return w(a, null, null, b);
  };
  w.matchesSelector = function (a, b) {
    (a.ownerDocument || a) !== z && da(a);
    b = b.replace(od, "='$1']");
    if (s.matchesSelector && !F && (!ia || !ia.test(b)) && !J.test(b))
      try {
        var d = Ja.call(a, b);
        if (
          d ||
          s.disconnectedMatch ||
          (a.document && 11 !== a.document.nodeType)
        )
          return d;
      } catch (c) {}
    return 0 < w(b, z, null, [a]).length;
  };
  w.contains = function (a, b) {
    (a.ownerDocument || a) !== z && da(a);
    return oa(a, b);
  };
  w.attr = function (a, b) {
    var d;
    (a.ownerDocument || a) !== z && da(a);
    F || (b = b.toLowerCase());
    return (d = v.attrHandle[b])
      ? d(a)
      : F || s.attributes
      ? a.getAttribute(b)
      : ((d = a.getAttributeNode(b)) || a.getAttribute(b)) && !0 === a[b]
      ? b
      : d && d.specified
      ? d.value
      : null;
  };
  w.error = function (a) {
    throw Error("Syntax error, unrecognized expression: " + a);
  };
  w.uniqueSort = function (a) {
    var b,
      d = [],
      c = 1,
      f = 0;
    ha = !s.detectDuplicates;
    a.sort(kb);
    if (ha) {
      for (; (b = a[c]); c++) b === a[c - 1] && (f = d.push(c));
      for (; f--; ) a.splice(d[f], 1);
    }
    return a;
  };
  Ia = w.getText = function (a) {
    var b,
      d = "",
      c = 0;
    if ((b = a.nodeType))
      if (1 === b || 9 === b || 11 === b) {
        if ("string" === typeof a.textContent) return a.textContent;
        for (a = a.firstChild; a; a = a.nextSibling) d += Ia(a);
      } else {
        if (3 === b || 4 === b) return a.nodeValue;
      }
    else for (; (b = a[c]); c++) d += Ia(b);
    return d;
  };
  v = w.selectors = {
    cacheLength: 50,
    createPseudo: G,
    match: Ea,
    find: {},
    relative: {
      ">": {
        dir: "parentNode",
        first: !0,
      },
      " ": {
        dir: "parentNode",
      },
      "+": {
        dir: "previousSibling",
        first: !0,
      },
      "~": {
        dir: "previousSibling",
      },
    },
    preFilter: {
      ATTR: function (a) {
        a[1] = a[1].replace(P, Q);
        a[3] = (a[4] || a[5] || "").replace(P, Q);
        "~=" === a[2] && (a[3] = " " + a[3] + " ");
        return a.slice(0, 4);
      },
      CHILD: function (a) {
        a[1] = a[1].toLowerCase();
        "nth" === a[1].slice(0, 3)
          ? (a[3] || w.error(a[0]),
            (a[4] = +(a[4]
              ? a[5] + (a[6] || 1)
              : 2 * ("even" === a[3] || "odd" === a[3]))),
            (a[5] = +(a[7] + a[8] || "odd" === a[3])))
          : a[3] && w.error(a[0]);
        return a;
      },
      PSEUDO: function (a) {
        var b,
          d = !a[5] && a[2];
        if (Ea.CHILD.test(a[0])) return null;
        if (a[4]) a[2] = a[4];
        else if (
          d &&
          kd.test(d) &&
          (b = Ba(d, !0)) &&
          (b = d.indexOf(")", d.length - b) - d.length)
        )
          (a[0] = a[0].slice(0, b)), (a[2] = d.slice(0, b));
        return a.slice(0, 3);
      },
    },
    filter: {
      TAG: function (a) {
        if ("*" === a)
          return function () {
            return !0;
          };
        a = a.replace(P, Q).toLowerCase();
        return function (b) {
          return b.nodeName && b.nodeName.toLowerCase() === a;
        };
      },
      CLASS: function (a) {
        var b = ic[a + " "];
        return (
          b ||
          ((b = RegExp(
            "(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)"
          )) &&
            ic(a, function (a) {
              return b.test(
                a.className ||
                  ("undefined" !== typeof a.getAttribute &&
                    a.getAttribute("class")) ||
                  ""
              );
            }))
        );
      },
      ATTR: function (a, b, d) {
        return function (c) {
          c = w.attr(c, a);
          if (null == c) return "!=" === b;
          if (!b) return !0;
          c += "";
          return "=" === b
            ? c === d
            : "!=" === b
            ? c !== d
            : "^=" === b
            ? d && 0 === c.indexOf(d)
            : "*=" === b
            ? d && -1 < c.indexOf(d)
            : "$=" === b
            ? d && c.slice(-d.length) === d
            : "~=" === b
            ? -1 < (" " + c + " ").indexOf(d)
            : "|=" === b
            ? c === d || c.slice(0, d.length + 1) === d + "-"
            : !1;
        };
      },
      CHILD: function (a, b, d, c, f) {
        var g = "nth" !== a.slice(0, 3),
          h = "last" !== a.slice(-4),
          i = "of-type" === b;
        return 1 === c && 0 === f
          ? function (a) {
              return !!a.parentNode;
            }
          : function (b, d, m) {
              var l,
                o,
                t,
                n,
                p,
                d = g !== h ? "nextSibling" : "previousSibling",
                y = b.parentNode,
                q = i && b.nodeName.toLowerCase(),
                m = !m && !i;
              if (y) {
                if (g) {
                  for (; d; ) {
                    for (o = b; (o = o[d]); )
                      if (i ? o.nodeName.toLowerCase() === q : 1 === o.nodeType)
                        return !1;
                    p = d = "only" === a && !p && "nextSibling";
                  }
                  return !0;
                }
                p = [h ? y.firstChild : y.lastChild];
                if (h && m) {
                  m = y[r] || (y[r] = {});
                  l = m[a] || [];
                  n = l[0] === K && l[1];
                  t = l[0] === K && l[2];
                  for (
                    o = n && y.childNodes[n];
                    (o = (++n && o && o[d]) || (t = n = 0) || p.pop());

                  )
                    if (1 === o.nodeType && ++t && o === b) {
                      m[a] = [K, n, t];
                      break;
                    }
                } else if (m && (l = (b[r] || (b[r] = {}))[a]) && l[0] === K)
                  t = l[1];
                else
                  for (; (o = (++n && o && o[d]) || (t = n = 0) || p.pop()); )
                    if (
                      (i ? o.nodeName.toLowerCase() === q : 1 === o.nodeType) &&
                      ++t
                    )
                      if ((m && ((o[r] || (o[r] = {}))[a] = [K, t]), o === b))
                        break;
                t -= f;
                return t === c || (0 === t % c && 0 <= t / c);
              }
            };
      },
      PSEUDO: function (a, b) {
        var d,
          c =
            v.pseudos[a] ||
            v.setFilters[a.toLowerCase()] ||
            w.error("unsupported pseudo: " + a);
        return c[r]
          ? c(b)
          : 1 < c.length
          ? ((d = [a, a, "", b]),
            v.setFilters.hasOwnProperty(a.toLowerCase())
              ? G(function (a, d) {
                  for (var h, i = c(a, b), j = i.length; j--; )
                    (h = ib.call(a, i[j])), (a[h] = !(d[h] = i[j]));
                })
              : function (a) {
                  return c(a, 0, d);
                })
          : c;
      },
    },
    pseudos: {
      not: G(function (a) {
        var b = [],
          d = [],
          c = eb(a.replace(Da, "$1"));
        return c[r]
          ? G(function (a, b, d, i) {
              for (var i = c(a, null, i, []), j = a.length; j--; )
                if ((d = i[j])) a[j] = !(b[j] = d);
            })
          : function (a, g, h) {
              b[0] = a;
              c(b, null, h, d);
              return !d.pop();
            };
      }),
      has: G(function (a) {
        return function (b) {
          return 0 < w(a, b).length;
        };
      }),
      contains: G(function (a) {
        return function (b) {
          return -1 < (b.textContent || b.innerText || Ia(b)).indexOf(a);
        };
      }),
      lang: G(function (a) {
        ld.test(a || "") || w.error("unsupported lang: " + a);
        a = a.replace(P, Q).toLowerCase();
        return function (b) {
          var d;
          do
            if (
              (d = F
                ? b.getAttribute("xml:lang") || b.getAttribute("lang")
                : b.lang)
            )
              return (d = d.toLowerCase()), d === a || 0 === d.indexOf(a + "-");
          while ((b = b.parentNode) && 1 === b.nodeType);
          return !1;
        };
      }),
      target: function (a) {
        var b = bb.location && bb.location.hash;
        return b && b.slice(1) === a.id;
      },
      root: function (a) {
        return a === E;
      },
      focus: function (a) {
        return (
          a === z.activeElement &&
          (!z.hasFocus || z.hasFocus()) &&
          !(!a.type && !a.href && !~a.tabIndex)
        );
      },
      enabled: function (a) {
        return !1 === a.disabled;
      },
      disabled: function (a) {
        return !0 === a.disabled;
      },
      checked: function (a) {
        var b = a.nodeName.toLowerCase();
        return (
          ("input" === b && !!a.checked) || ("option" === b && !!a.selected)
        );
      },
      selected: function (a) {
        a.parentNode && a.parentNode.selectedIndex;
        return !0 === a.selected;
      },
      empty: function (a) {
        for (a = a.firstChild; a; a = a.nextSibling)
          if ("@" < a.nodeName || 3 === a.nodeType || 4 === a.nodeType)
            return !1;
        return !0;
      },
      parent: function (a) {
        return !v.pseudos.empty(a);
      },
      header: function (a) {
        return nd.test(a.nodeName);
      },
      input: function (a) {
        return md.test(a.nodeName);
      },
      button: function (a) {
        var b = a.nodeName.toLowerCase();
        return ("input" === b && "button" === a.type) || "button" === b;
      },
      text: function (a) {
        var b;
        return (
          "input" === a.nodeName.toLowerCase() &&
          "text" === a.type &&
          (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
        );
      },
      first: Y(function () {
        return [0];
      }),
      last: Y(function (a, b) {
        return [b - 1];
      }),
      eq: Y(function (a, b, d) {
        return [0 > d ? d + b : d];
      }),
      even: Y(function (a, b) {
        for (var d = 0; d < b; d += 2) a.push(d);
        return a;
      }),
      odd: Y(function (a, b) {
        for (var d = 1; d < b; d += 2) a.push(d);
        return a;
      }),
      lt: Y(function (a, b, d) {
        for (b = 0 > d ? d + b : d; 0 <= --b; ) a.push(b);
        return a;
      }),
      gt: Y(function (a, b, d) {
        for (d = 0 > d ? d + b : d; ++d < b; ) a.push(d);
        return a;
      }),
    },
  };
  for (ga in {
    radio: !0,
    checkbox: !0,
    file: !0,
    password: !0,
    image: !0,
  })
    v.pseudos[ga] = ed(ga);
  for (ga in {
    submit: !0,
    reset: !0,
  })
    v.pseudos[ga] = fd(ga);
  eb = w.compile = function (a, b) {
    var d,
      c = [],
      f = [],
      g = jc[a + " "];
    if (!g) {
      b || (b = Ba(a));
      for (d = b.length; d--; ) (g = jb(b[d])), g[r] ? c.push(g) : f.push(g);
      var h = 0,
        i = 0 < c.length,
        j = 0 < f.length;
      d = function (a, b, d, g, t) {
        var n,
          p,
          q = [],
          r = 0,
          u = "0",
          s = a && [],
          A = null != t,
          x = Ha,
          C = a || (j && v.find.TAG("*", (t && b.parentNode) || b)),
          mc = (K += null == x ? 1 : Math.random() || 0.1);
        A && ((Ha = b !== z && b), (Fa = h));
        for (; null != (t = C[u]); u++) {
          if (j && t) {
            for (n = 0; (p = f[n++]); )
              if (p(t, b, d)) {
                g.push(t);
                break;
              }
            A && ((K = mc), (Fa = ++h));
          }
          i && ((t = !p && t) && r--, a && s.push(t));
        }
        r += u;
        if (i && u !== r) {
          for (n = 0; (p = c[n++]); ) p(s, q, b, d);
          if (a) {
            if (0 < r) for (; u--; ) !s[u] && !q[u] && (q[u] = jd.call(g));
            q = Ga(q);
          }
          ea.apply(g, q);
          A && !a && 0 < q.length && 1 < r + c.length && w.uniqueSort(g);
        }
        A && ((K = mc), (Ha = x));
        return s;
      };
      d = i ? G(d) : d;
      g = jc(a, d);
    }
    return g;
  };
  v.pseudos.nth = v.pseudos.eq;
  v.filters = gc.prototype = v.pseudos;
  v.setFilters = new gc();
  da();
  w.attr = c.attr;
  c.find = w;
  c.expr = w.selectors;
  c.expr[":"] = c.expr.pseudos;
  c.unique = w.uniqueSort;
  c.text = w.getText;
  c.isXMLDoc = w.isXML;
  c.contains = w.contains;
  var pd = /Until$/,
    qd = /^(?:parents|prev(?:Until|All))/,
    Ec = /^.[^:#\[\.,]*$/,
    nc = c.expr.match.needsContext,
    rd = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0,
    };
  c.fn.extend({
    find: function (a) {
      var b,
        d,
        e,
        f = this.length;
      if ("string" !== typeof a)
        return (
          (e = this),
          this.pushStack(
            c(a).filter(function () {
              for (b = 0; b < f; b++) if (c.contains(e[b], this)) return !0;
            })
          )
        );
      d = [];
      for (b = 0; b < f; b++) c.find(a, this[b], d);
      d = this.pushStack(1 < f ? c.unique(d) : d);
      d.selector = (this.selector ? this.selector + " " : "") + a;
      return d;
    },
    has: function (a) {
      var b,
        d = c(a, this),
        e = d.length;
      return this.filter(function () {
        for (b = 0; b < e; b++) if (c.contains(this, d[b])) return !0;
      });
    },
    not: function (a) {
      return this.pushStack(yb(this, a, !1));
    },
    filter: function (a) {
      return this.pushStack(yb(this, a, !0));
    },
    is: function (a) {
      return (
        !!a &&
        ("string" === typeof a
          ? nc.test(a)
            ? 0 <= c(a, this.context).index(this[0])
            : 0 < c.filter(a, this).length
          : 0 < this.filter(a).length)
      );
    },
    closest: function (a, b) {
      for (
        var d,
          e = 0,
          f = this.length,
          g = [],
          h = nc.test(a) || "string" !== typeof a ? c(a, b || this.context) : 0;
        e < f;
        e++
      )
        for (
          d = this[e];
          d && d.ownerDocument && d !== b && 11 !== d.nodeType;

        ) {
          if (h ? -1 < h.index(d) : c.find.matchesSelector(d, a)) {
            g.push(d);
            break;
          }
          d = d.parentNode;
        }
      return this.pushStack(1 < g.length ? c.unique(g) : g);
    },
    index: function (a) {
      return !a
        ? this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1
        : "string" === typeof a
        ? c.inArray(this[0], c(a))
        : c.inArray(a.jquery ? a[0] : a, this);
    },
    add: function (a, b) {
      var d =
          "string" === typeof a
            ? c(a, b)
            : c.makeArray(a && a.nodeType ? [a] : a),
        d = c.merge(this.get(), d);
      return this.pushStack(c.unique(d));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    },
  });
  c.fn.andSelf = c.fn.addBack;
  c.each(
    {
      parent: function (a) {
        return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
      },
      parents: function (a) {
        return c.dir(a, "parentNode");
      },
      parentsUntil: function (a, b, d) {
        return c.dir(a, "parentNode", d);
      },
      next: function (a) {
        return xb(a, "nextSibling");
      },
      prev: function (a) {
        return xb(a, "previousSibling");
      },
      nextAll: function (a) {
        return c.dir(a, "nextSibling");
      },
      prevAll: function (a) {
        return c.dir(a, "previousSibling");
      },
      nextUntil: function (a, b, d) {
        return c.dir(a, "nextSibling", d);
      },
      prevUntil: function (a, b, d) {
        return c.dir(a, "previousSibling", d);
      },
      siblings: function (a) {
        return c.sibling((a.parentNode || {}).firstChild, a);
      },
      children: function (a) {
        return c.sibling(a.firstChild);
      },
      contents: function (a) {
        return c.nodeName(a, "iframe")
          ? a.contentDocument || a.contentWindow.document
          : c.merge([], a.childNodes);
      },
    },
    function (a, b) {
      c.fn[a] = function (d, e) {
        var f = c.map(this, b, d);
        pd.test(a) || (e = d);
        e && "string" === typeof e && (f = c.filter(e, f));
        f = 1 < this.length && !rd[a] ? c.unique(f) : f;
        1 < this.length && qd.test(a) && (f = f.reverse());
        return this.pushStack(f);
      };
    }
  );
  c.extend({
    filter: function (a, b, d) {
      d && (a = ":not(" + a + ")");
      return 1 === b.length
        ? c.find.matchesSelector(b[0], a)
          ? [b[0]]
          : []
        : c.find.matches(a, b);
    },
    dir: function (a, b, d) {
      for (
        var e = [], a = a[b];
        a &&
        9 !== a.nodeType &&
        (void 0 === d || 1 !== a.nodeType || !c(a).is(d));

      )
        1 === a.nodeType && e.push(a), (a = a[b]);
      return e;
    },
    sibling: function (a, b) {
      for (var d = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && d.push(a);
      return d;
    },
  });
  var Ab =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    sd = / jQuery\d+="(?:null|\d+)"/g,
    oc = RegExp("<(?:" + Ab + ")[\\s/>]", "i"),
    nb = /^\s+/,
    pc =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    qc = /<([\w:]+)/,
    rc = /<tbody/i,
    td = /<|&#?\w+;/,
    ud = /<(?:script|style|link)/i,
    Pa = /^(?:checkbox|radio)$/i,
    vd = /checked\s*(?:[^=]|=\s*.checked.)/i,
    sc = /^$|\/(?:java|ecma)script/i,
    Fc = /^true\/(.*)/,
    wd = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    D = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: c.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
    },
    ob = zb(n).appendChild(n.createElement("div"));
  D.optgroup = D.option;
  D.tbody = D.tfoot = D.colgroup = D.caption = D.thead;
  D.th = D.td;
  c.fn.extend({
    text: function (a) {
      return c.access(
        this,
        function (a) {
          return void 0 === a
            ? c.text(this)
            : this.empty().append(
                ((this[0] && this[0].ownerDocument) || n).createTextNode(a)
              );
        },
        null,
        a,
        arguments.length
      );
    },
    wrapAll: function (a) {
      if (c.isFunction(a))
        return this.each(function (b) {
          c(this).wrapAll(a.call(this, b));
        });
      if (this[0]) {
        var b = c(a, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && b.insertBefore(this[0]);
        b.map(function () {
          for (var a = this; a.firstChild && 1 === a.firstChild.nodeType; )
            a = a.firstChild;
          return a;
        }).append(this);
      }
      return this;
    },
    wrapInner: function (a) {
      return c.isFunction(a)
        ? this.each(function (b) {
            c(this).wrapInner(a.call(this, b));
          })
        : this.each(function () {
            var b = c(this),
              d = b.contents();
            d.length ? d.wrapAll(a) : b.append(a);
          });
    },
    wrap: function (a) {
      var b = c.isFunction(a);
      return this.each(function (d) {
        c(this).wrapAll(b ? a.call(this, d) : a);
      });
    },
    unwrap: function () {
      return this.parent()
        .each(function () {
          c.nodeName(this, "body") || c(this).replaceWith(this.childNodes);
        })
        .end();
    },
    append: function () {
      return this.domManip(arguments, !0, function (a) {
        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) &&
          this.appendChild(a);
      });
    },
    prepend: function () {
      return this.domManip(arguments, !0, function (a) {
        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) &&
          this.insertBefore(a, this.firstChild);
      });
    },
    before: function () {
      return this.domManip(arguments, !1, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    },
    after: function () {
      return this.domManip(arguments, !1, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    },
    remove: function (a, b) {
      for (var d, e = 0; null != (d = this[e]); e++)
        if (!a || 0 < c.filter(a, [d]).length)
          !b && 1 === d.nodeType && c.cleanData(A(d)),
            d.parentNode &&
              (b && c.contains(d.ownerDocument, d) && Oa(A(d, "script")),
              d.parentNode.removeChild(d));
      return this;
    },
    empty: function () {
      for (var a, b = 0; null != (a = this[b]); b++) {
        for (1 === a.nodeType && c.cleanData(A(a, !1)); a.firstChild; )
          a.removeChild(a.firstChild);
        a.options && c.nodeName(a, "select") && (a.options.length = 0);
      }
      return this;
    },
    clone: function (a, b) {
      a = null == a ? !1 : a;
      b = null == b ? a : b;
      return this.map(function () {
        return c.clone(this, a, b);
      });
    },
    html: function (a) {
      return c.access(
        this,
        function (a) {
          var d = this[0] || {},
            e = 0,
            f = this.length;
          if (void 0 === a)
            return 1 === d.nodeType ? d.innerHTML.replace(sd, "") : void 0;
          if (
            "string" === typeof a &&
            !ud.test(a) &&
            (c.support.htmlSerialize || !oc.test(a)) &&
            (c.support.leadingWhitespace || !nb.test(a)) &&
            !D[(qc.exec(a) || ["", ""])[1].toLowerCase()]
          ) {
            a = a.replace(pc, "<$1></$2>");
            try {
              for (; e < f; e++)
                (d = this[e] || {}),
                  1 === d.nodeType &&
                    (c.cleanData(A(d, !1)), (d.innerHTML = a));
              d = 0;
            } catch (g) {}
          }
          d && this.empty().append(a);
        },
        null,
        a,
        arguments.length
      );
    },
    replaceWith: function (a) {
      !c.isFunction(a) &&
        "string" !== typeof a &&
        (a = c(a).not(this).detach());
      return this.domManip([a], !0, function (a) {
        var d = this.nextSibling,
          e = this.parentNode;
        e && (c(this).remove(), e.insertBefore(a, d));
      });
    },
    detach: function (a) {
      return this.remove(a, !0);
    },
    domManip: function (a, b, d) {
      var a = Ub.apply([], a),
        e,
        f,
        g,
        h,
        i = 0,
        j = this.length,
        k = this,
        m = j - 1,
        l = a[0],
        o = c.isFunction(l);
      if (
        o ||
        !(
          1 >= j ||
          "string" !== typeof l ||
          c.support.checkClone ||
          !vd.test(l)
        )
      )
        return this.each(function (c) {
          var e = k.eq(c);
          o && (a[0] = l.call(this, c, b ? e.html() : void 0));
          e.domManip(a, b, d);
        });
      if (
        j &&
        ((h = c.buildFragment(a, this[0].ownerDocument, !1, this)),
        (e = h.firstChild),
        1 === h.childNodes.length && (h = e),
        e)
      ) {
        b = b && c.nodeName(e, "tr");
        g = c.map(A(h, "script"), Bb);
        for (f = g.length; i < j; i++)
          (e = h),
            i !== m &&
              ((e = c.clone(e, !0, !0)), f && c.merge(g, A(e, "script"))),
            d.call(
              b && c.nodeName(this[i], "table")
                ? this[i].getElementsByTagName("tbody")[0] ||
                    this[i].appendChild(
                      this[i].ownerDocument.createElement("tbody")
                    )
                : this[i],
              e,
              i
            );
        if (f) {
          h = g[g.length - 1].ownerDocument;
          c.map(g, Cb);
          for (i = 0; i < f; i++)
            if (
              ((e = g[i]),
              sc.test(e.type || "") &&
                !c._data(e, "globalEval") &&
                c.contains(h, e))
            )
              e.src
                ? c.ajax({
                    url: e.src,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    throws: !0,
                  })
                : c.globalEval(
                    (e.text || e.textContent || e.innerHTML || "").replace(
                      wd,
                      ""
                    )
                  );
        }
        h = e = null;
      }
      return this;
    },
  });
  c.each(
    {
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith",
    },
    function (a, b) {
      c.fn[a] = function (a) {
        for (var e = 0, f = [], g = c(a), h = g.length - 1; e <= h; e++)
          (a = e === h ? this : this.clone(!0)),
            c(g[e])[b](a),
            Ta.apply(f, a.get());
        return this.pushStack(f);
      };
    }
  );
  c.extend({
    clone: function (a, b, d) {
      var e,
        f,
        g,
        h,
        i,
        j = c.contains(a.ownerDocument, a);
      c.support.html5Clone || c.isXMLDoc(a) || !oc.test("<" + a.nodeName + ">")
        ? (g = a.cloneNode(!0))
        : ((ob.innerHTML = a.outerHTML), ob.removeChild((g = ob.firstChild)));
      if (
        (!c.support.noCloneEvent || !c.support.noCloneChecked) &&
        (1 === a.nodeType || 11 === a.nodeType) &&
        !c.isXMLDoc(a)
      ) {
        e = A(g);
        i = A(a);
        for (h = 0; null != (f = i[h]); ++h)
          if (e[h]) {
            var k = e[h],
              m = void 0,
              l = void 0,
              o = void 0;
            if (1 === k.nodeType) {
              m = k.nodeName.toLowerCase();
              if (!c.support.noCloneEvent && k[c.expando]) {
                o = c._data(k);
                for (l in o.events) c.removeEvent(k, l, o.handle);
                k.removeAttribute(c.expando);
              }
              if ("script" === m && k.text !== f.text)
                (Bb(k).text = f.text), Cb(k);
              else if ("object" === m)
                k.parentNode && (k.outerHTML = f.outerHTML),
                  c.support.html5Clone &&
                    f.innerHTML &&
                    !c.trim(k.innerHTML) &&
                    (k.innerHTML = f.innerHTML);
              else if ("input" === m && Pa.test(f.type))
                (k.defaultChecked = k.checked = f.checked),
                  k.value !== f.value && (k.value = f.value);
              else if ("option" === m)
                k.defaultSelected = k.selected = f.defaultSelected;
              else if ("input" === m || "textarea" === m)
                k.defaultValue = f.defaultValue;
            }
          }
      }
      if (b)
        if (d) {
          i = i || A(a);
          e = e || A(g);
          for (h = 0; null != (f = i[h]); h++) Db(f, e[h]);
        } else Db(a, g);
      e = A(g, "script");
      0 < e.length && Oa(e, !j && A(a, "script"));
      return g;
    },
    buildFragment: function (a, b, d, e) {
      for (
        var f, g, h, i, j, k, m = a.length, l = zb(b), o = [], n = 0;
        n < m;
        n++
      )
        if ((g = a[n]) || 0 === g)
          if ("object" === c.type(g)) c.merge(o, g.nodeType ? [g] : g);
          else if (td.test(g)) {
            h = h || l.appendChild(b.createElement("div"));
            i = (qc.exec(g) || ["", ""])[1].toLowerCase();
            k = D[i] || D._default;
            h.innerHTML = k[1] + g.replace(pc, "<$1></$2>") + k[2];
            for (f = k[0]; f--; ) h = h.lastChild;
            !c.support.leadingWhitespace &&
              nb.test(g) &&
              o.push(b.createTextNode(nb.exec(g)[0]));
            if (!c.support.tbody)
              for (
                f =
                  (g =
                    "table" === i && !rc.test(g)
                      ? h.firstChild
                      : "<table>" === k[1] && !rc.test(g)
                      ? h
                      : 0) && g.childNodes.length;
                f--;

              )
                c.nodeName((j = g.childNodes[f]), "tbody") &&
                  !j.childNodes.length &&
                  g.removeChild(j);
            c.merge(o, h.childNodes);
            for (h.textContent = ""; h.firstChild; )
              h.removeChild(h.firstChild);
            h = l.lastChild;
          } else o.push(b.createTextNode(g));
      h && l.removeChild(h);
      c.support.appendChecked || c.grep(A(o, "input"), Gc);
      for (n = 0; (g = o[n++]); )
        if (
          !(e && -1 !== c.inArray(g, e)) &&
          ((a = c.contains(g.ownerDocument, g)),
          (h = A(l.appendChild(g), "script")),
          a && Oa(h),
          d)
        )
          for (f = 0; (g = h[f++]); ) sc.test(g.type || "") && d.push(g);
      return l;
    },
    cleanData: function (a, b) {
      for (
        var d,
          e,
          f,
          g,
          h = 0,
          i = c.expando,
          j = c.cache,
          k = c.support.deleteExpando,
          m = c.event.special;
        null != (d = a[h]);
        h++
      )
        if (b || c.acceptData(d))
          if ((g = (f = d[i]) && j[f])) {
            if (g.events)
              for (e in g.events)
                m[e] ? c.event.remove(d, e) : c.removeEvent(d, e, g.handle);
            j[f] &&
              (delete j[f],
              k
                ? delete d[i]
                : typeof d.removeAttribute !== I
                ? d.removeAttribute(i)
                : (d[i] = null),
              $.push(f));
          }
    },
  });
  var la,
    T,
    U,
    pb = /alpha\([^)]*\)/i,
    xd = /opacity\s*=\s*([^)]*)/,
    yd = /^(top|right|bottom|left)$/,
    zd = /^(none|table(?!-c[ea]).+)/,
    tc = /^margin/,
    Hc = RegExp("^(" + wa + ")(.*)$", "i"),
    ra = RegExp("^(" + wa + ")(?!px)[a-z%]+$", "i"),
    Ad = RegExp("^([+-])=(" + wa + ")", "i"),
    Lb = {
      BODY: "block",
    },
    Bd = {
      position: "absolute",
      visibility: "hidden",
      display: "block",
    },
    uc = {
      letterSpacing: 0,
      fontWeight: 400,
    },
    S = ["Top", "Right", "Bottom", "Left"],
    Fb = ["Webkit", "O", "Moz", "ms"];
  c.fn.extend({
    css: function (a, b) {
      return c.access(
        this,
        function (a, b, f) {
          var g,
            h = {},
            i = 0;
          if (c.isArray(b)) {
            g = T(a);
            for (f = b.length; i < f; i++) h[b[i]] = c.css(a, b[i], !1, g);
            return h;
          }
          return void 0 !== f ? c.style(a, b, f) : c.css(a, b);
        },
        a,
        b,
        1 < arguments.length
      );
    },
    show: function () {
      return Gb(this, !0);
    },
    hide: function () {
      return Gb(this);
    },
    toggle: function (a) {
      var b = "boolean" === typeof a;
      return this.each(function () {
        (b ? a : ka(this)) ? c(this).show() : c(this).hide();
      });
    },
  });
  c.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = U(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {
      float: c.support.cssFloat ? "cssFloat" : "styleFloat",
    },
    style: function (a, b, d, e) {
      if (a && !(3 === a.nodeType || 8 === a.nodeType || !a.style)) {
        var f,
          g,
          h,
          i = c.camelCase(b),
          j = a.style,
          b = c.cssProps[i] || (c.cssProps[i] = Eb(j, i));
        h = c.cssHooks[b] || c.cssHooks[i];
        if (void 0 !== d) {
          g = typeof d;
          if ("string" === g && (f = Ad.exec(d)))
            (d = (f[1] + 1) * f[2] + parseFloat(c.css(a, b))), (g = "number");
          if (!(null == d || ("number" === g && isNaN(d))))
            if (
              ("number" === g && !c.cssNumber[i] && (d += "px"),
              !c.support.clearCloneStyle &&
                "" === d &&
                0 === b.indexOf("background") &&
                (j[b] = "inherit"),
              !h || !("set" in h) || void 0 !== (d = h.set(a, d, e)))
            )
              try {
                j[b] = d;
              } catch (k) {}
        } else
          return h && "get" in h && void 0 !== (f = h.get(a, !1, e)) ? f : j[b];
      }
    },
    css: function (a, b, d, e) {
      var f, g;
      g = c.camelCase(b);
      b = c.cssProps[g] || (c.cssProps[g] = Eb(a.style, g));
      (g = c.cssHooks[b] || c.cssHooks[g]) &&
        "get" in g &&
        (f = g.get(a, !0, d));
      void 0 === f && (f = U(a, b, e));
      "normal" === f && b in uc && (f = uc[b]);
      return "" === d || d
        ? ((a = parseFloat(f)), !0 === d || c.isNumeric(a) ? a || 0 : f)
        : f;
    },
    swap: function (a, b, c, e) {
      var f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      c = c.apply(a, e || []);
      for (f in b) a.style[f] = g[f];
      return c;
    },
  });
  p.getComputedStyle
    ? ((T = function (a) {
        return p.getComputedStyle(a, null);
      }),
      (U = function (a, b, d) {
        var e,
          f = (d = d || T(a)) ? d.getPropertyValue(b) || d[b] : void 0,
          g = a.style;
        d &&
          ("" === f && !c.contains(a.ownerDocument, a) && (f = c.style(a, b)),
          ra.test(f) &&
            tc.test(b) &&
            ((a = g.width),
            (b = g.minWidth),
            (e = g.maxWidth),
            (g.minWidth = g.maxWidth = g.width = f),
            (f = d.width),
            (g.width = a),
            (g.minWidth = b),
            (g.maxWidth = e)));
        return f;
      }))
    : n.documentElement.currentStyle &&
      ((T = function (a) {
        return a.currentStyle;
      }),
      (U = function (a, b, c) {
        var e,
          f,
          g = (c = c || T(a)) ? c[b] : void 0,
          h = a.style;
        null == g && h && h[b] && (g = h[b]);
        if (ra.test(g) && !yd.test(b)) {
          c = h.left;
          if ((f = (e = a.runtimeStyle) && e.left))
            e.left = a.currentStyle.left;
          h.left = "fontSize" === b ? "1em" : g;
          g = h.pixelLeft + "px";
          h.left = c;
          f && (e.left = f);
        }
        return "" === g ? "auto" : g;
      }));
  c.each(["height", "width"], function (a, b) {
    c.cssHooks[b] = {
      get: function (a, e, f) {
        if (e)
          return 0 === a.offsetWidth && zd.test(c.css(a, "display"))
            ? c.swap(a, Bd, function () {
                return Kb(a, b, f);
              })
            : Kb(a, b, f);
      },
      set: function (a, e, f) {
        var g = f && T(a);
        return Ib(
          a,
          e,
          f
            ? Jb(
                a,
                b,
                f,
                c.support.boxSizing &&
                  "border-box" === c.css(a, "boxSizing", !1, g),
                g
              )
            : 0
        );
      },
    };
  });
  c.support.opacity ||
    (c.cssHooks.opacity = {
      get: function (a, b) {
        return xd.test(
          (b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || ""
        )
          ? 0.01 * parseFloat(RegExp.$1) + ""
          : b
          ? "1"
          : "";
      },
      set: function (a, b) {
        var d = a.style,
          e = a.currentStyle,
          f = c.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
          g = (e && e.filter) || d.filter || "";
        d.zoom = 1;
        if (
          (1 <= b || "" === b) &&
          "" === c.trim(g.replace(pb, "")) &&
          d.removeAttribute
        )
          if ((d.removeAttribute("filter"), "" === b || (e && !e.filter)))
            return;
        d.filter = pb.test(g) ? g.replace(pb, f) : g + " " + f;
      },
    });
  c(function () {
    c.support.reliableMarginRight ||
      (c.cssHooks.marginRight = {
        get: function (a, b) {
          if (b)
            return c.swap(
              a,
              {
                display: "inline-block",
              },
              U,
              [a, "marginRight"]
            );
        },
      });
    !c.support.pixelPosition &&
      c.fn.position &&
      c.each(["top", "left"], function (a, b) {
        c.cssHooks[b] = {
          get: function (a, e) {
            if (e)
              return (e = U(a, b)), ra.test(e) ? c(a).position()[b] + "px" : e;
          },
        };
      });
  });
  c.expr &&
    c.expr.filters &&
    ((c.expr.filters.hidden = function (a) {
      return (
        (0 >= a.offsetWidth && 0 >= a.offsetHeight) ||
        (!c.support.reliableHiddenOffsets &&
          "none" === ((a.style && a.style.display) || c.css(a, "display")))
      );
    }),
    (c.expr.filters.visible = function (a) {
      return !c.expr.filters.hidden(a);
    }));
  c.each(
    {
      margin: "",
      padding: "",
      border: "Width",
    },
    function (a, b) {
      c.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var e = 0, f = {}, c = "string" === typeof c ? c.split(" ") : [c];
            4 > e;
            e++
          )
            f[a + S[e] + b] = c[e] || c[e - 2] || c[0];
          return f;
        },
      };
      tc.test(a) || (c.cssHooks[a + b].set = Ib);
    }
  );
  var Cd = /%20/g,
    Ic = /\[\]$/,
    vc = /\r?\n/g,
    Dd = /^(?:submit|button|image|reset|file)$/i,
    Ed = /^(?:input|select|textarea|keygen)/i;
  c.fn.extend({
    serialize: function () {
      return c.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var a = c.prop(this, "elements");
        return a ? c.makeArray(a) : this;
      })
        .filter(function () {
          var a = this.type;
          return (
            this.name &&
            !c(this).is(":disabled") &&
            Ed.test(this.nodeName) &&
            !Dd.test(a) &&
            (this.checked || !Pa.test(a))
          );
        })
        .map(function (a, b) {
          var d = c(this).val();
          return null == d
            ? null
            : c.isArray(d)
            ? c.map(d, function (a) {
                return {
                  name: b.name,
                  value: a.replace(vc, "\r\n"),
                };
              })
            : {
                name: b.name,
                value: d.replace(vc, "\r\n"),
              };
        })
        .get();
    },
  });
  c.param = function (a, b) {
    var d,
      e = [],
      f = function (a, b) {
        b = c.isFunction(b) ? b() : null == b ? "" : b;
        e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
      };
    void 0 === b && (b = c.ajaxSettings && c.ajaxSettings.traditional);
    if (c.isArray(a) || (a.jquery && !c.isPlainObject(a)))
      c.each(a, function () {
        f(this.name, this.value);
      });
    else for (d in a) Qa(d, a[d], b, f);
    return e.join("&").replace(Cd, "+");
  };
  c.each(
    "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
      " "
    ),
    function (a, b) {
      c.fn[b] = function (a, c) {
        return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b);
      };
    }
  );
  c.fn.hover = function (a, b) {
    return this.mouseenter(a).mouseleave(b || a);
  };
  var Z,
    R,
    qb = c.now(),
    rb = /\?/,
    Fd = /#.*$/,
    wc = /([?&])_=[^&]*/,
    Gd = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Hd = /^(?:GET|HEAD)$/,
    Id = /^\/\//,
    xc = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    yc = c.fn.load,
    zc = {},
    Ra = {},
    Ac = "*/".concat("*");
  try {
    R = Kc.href;
  } catch (Pd) {
    (R = n.createElement("a")), (R.href = ""), (R = R.href);
  }
  Z = xc.exec(R.toLowerCase()) || [];
  c.fn.load = function (a, b, d) {
    if ("string" !== typeof a && yc) return yc.apply(this, arguments);
    var e,
      f,
      g,
      h = this,
      i = a.indexOf(" ");
    0 <= i && ((e = a.slice(i, a.length)), (a = a.slice(0, i)));
    c.isFunction(b)
      ? ((d = b), (b = void 0))
      : b && "object" === typeof b && (g = "POST");
    0 < h.length &&
      c
        .ajax({
          url: a,
          type: g,
          dataType: "html",
          data: b,
        })
        .done(function (a) {
          f = arguments;
          h.html(e ? c("<div>").append(c.parseHTML(a)).find(e) : a);
        })
        .complete(
          d &&
            function (a, b) {
              h.each(d, f || [a.responseText, b, a]);
            }
        );
    return this;
  };
  c.each(
    "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
    function (a, b) {
      c.fn[b] = function (a) {
        return this.on(b, a);
      };
    }
  );
  c.each(["get", "post"], function (a, b) {
    c[b] = function (a, e, f, g) {
      c.isFunction(e) && ((g = g || f), (f = e), (e = void 0));
      return c.ajax({
        url: a,
        type: b,
        dataType: g,
        data: e,
        success: f,
      });
    };
  });
  c.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: R,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
        Z[1]
      ),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Ac,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/,
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
      },
      converters: {
        "* text": p.String,
        "text html": !0,
        "text json": c.parseJSON,
        "text xml": c.parseXML,
      },
      flatOptions: {
        url: !0,
        context: !0,
      },
    },
    ajaxSetup: function (a, b) {
      return b ? Sa(Sa(a, c.ajaxSettings), b) : Sa(c.ajaxSettings, a);
    },
    ajaxPrefilter: Nb(zc),
    ajaxTransport: Nb(Ra),
    ajax: function (a, b) {
      function d(a, b, d, e) {
        var f,
          m,
          r,
          u,
          s = b;
        if (2 !== w) {
          w = 2;
          i && clearTimeout(i);
          k = void 0;
          h = e || "";
          x.readyState = 0 < a ? 4 : 0;
          if (d) {
            u = l;
            var e = x,
              A,
              C,
              z,
              B,
              E = u.contents,
              D = u.dataTypes,
              G = u.responseFields;
            for (B in G) B in d && (e[G[B]] = d[B]);
            for (; "*" === D[0]; )
              D.shift(),
                void 0 === C &&
                  (C = u.mimeType || e.getResponseHeader("Content-Type"));
            if (C)
              for (B in E)
                if (E[B] && E[B].test(C)) {
                  D.unshift(B);
                  break;
                }
            if (D[0] in d) z = D[0];
            else {
              for (B in d) {
                if (!D[0] || u.converters[B + " " + D[0]]) {
                  z = B;
                  break;
                }
                A || (A = B);
              }
              z = z || A;
            }
            z ? (z !== D[0] && D.unshift(z), (u = d[z])) : (u = void 0);
          }
          if ((200 <= a && 300 > a) || 304 === a)
            if (
              (l.ifModified &&
                ((d = x.getResponseHeader("Last-Modified")) &&
                  (c.lastModified[g] = d),
                (d = x.getResponseHeader("etag")) && (c.etag[g] = d)),
              204 === a)
            )
              (f = !0), (s = "nocontent");
            else if (304 === a) (f = !0), (s = "notmodified");
            else {
              a: {
                m = l;
                r = u;
                var F,
                  H,
                  s = {};
                A = 0;
                C = m.dataTypes.slice();
                z = C[0];
                m.dataFilter && (r = m.dataFilter(r, m.dataType));
                if (C[1])
                  for (H in m.converters) s[H.toLowerCase()] = m.converters[H];
                for (; (d = C[++A]); )
                  if ("*" !== d) {
                    if ("*" !== z && z !== d) {
                      H = s[z + " " + d] || s["* " + d];
                      if (!H)
                        for (F in s)
                          if (
                            ((f = F.split(" ")),
                            f[1] === d &&
                              (H = s[z + " " + f[0]] || s["* " + f[0]]))
                          ) {
                            !0 === H
                              ? (H = s[F])
                              : !0 !== s[F] &&
                                ((d = f[0]), C.splice(A--, 0, d));
                            break;
                          }
                      if (!0 !== H)
                        if (H && m["throws"]) r = H(r);
                        else
                          try {
                            r = H(r);
                          } catch (I) {
                            f = {
                              state: "parsererror",
                              error: H
                                ? I
                                : "No conversion from " + z + " to " + d,
                            };
                            break a;
                          }
                    }
                    z = d;
                  }
                f = {
                  state: "success",
                  data: r,
                };
              }
              s = f.state;
              m = f.data;
              r = f.error;
              f = !r;
            }
          else if (((r = s), a || !s)) (s = "error"), 0 > a && (a = 0);
          x.status = a;
          x.statusText = (b || s) + "";
          f ? p.resolveWith(o, [m, s, x]) : p.rejectWith(o, [x, s, r]);
          x.statusCode(v);
          v = void 0;
          j && n.trigger(f ? "ajaxSuccess" : "ajaxError", [x, l, f ? m : r]);
          q.fireWith(o, [x, s]);
          j &&
            (n.trigger("ajaxComplete", [x, l]),
            --c.active || c.event.trigger("ajaxStop"));
        }
      }
      "object" === typeof a && ((b = a), (a = void 0));
      var b = b || {},
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        m,
        l = c.ajaxSetup({}, b),
        o = l.context || l,
        n = l.context && (o.nodeType || o.jquery) ? c(o) : c.event,
        p = c.Deferred(),
        q = c.Callbacks("once memory"),
        v = l.statusCode || {},
        r = {},
        u = {},
        w = 0,
        s = "canceled",
        x = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (2 === w) {
              if (!m)
                for (m = {}; (b = Gd.exec(h)); ) m[b[1].toLowerCase()] = b[2];
              b = m[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return 2 === w ? h : null;
          },
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            w || ((a = u[c] = u[c] || a), (r[a] = b));
            return this;
          },
          overrideMimeType: function (a) {
            w || (l.mimeType = a);
            return this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (2 > w) for (b in a) v[b] = [v[b], a[b]];
              else x.always(a[x.status]);
            return this;
          },
          abort: function (a) {
            a = a || s;
            k && k.abort(a);
            d(0, a);
            return this;
          },
        };
      p.promise(x).complete = q.add;
      x.success = x.done;
      x.error = x.fail;
      l.url = ((a || l.url || R) + "").replace(Fd, "").replace(Id, Z[1] + "//");
      l.type = b.method || b.type || l.method || l.type;
      l.dataTypes = c
        .trim(l.dataType || "*")
        .toLowerCase()
        .match(L) || [""];
      null == l.crossDomain &&
        ((e = xc.exec(l.url.toLowerCase())),
        (l.crossDomain = !(
          !e ||
          !(
            e[1] !== Z[1] ||
            e[2] !== Z[2] ||
            (e[3] || ("http:" === e[1] ? 80 : 443)) !=
              (Z[3] || ("http:" === Z[1] ? 80 : 443))
          )
        )));
      l.data &&
        l.processData &&
        "string" !== typeof l.data &&
        (l.data = c.param(l.data, l.traditional));
      Ob(zc, l, b, x);
      if (2 === w) return x;
      (j = l.global) && 0 === c.active++ && c.event.trigger("ajaxStart");
      l.type = l.type.toUpperCase();
      l.hasContent = !Hd.test(l.type);
      g = l.url;
      l.hasContent ||
        (l.data &&
          ((g = l.url += (rb.test(g) ? "&" : "?") + l.data), delete l.data),
        !1 === l.cache &&
          (l.url = wc.test(g)
            ? g.replace(wc, "$1_=" + qb++)
            : g + (rb.test(g) ? "&" : "?") + "_=" + qb++));
      l.ifModified &&
        (c.lastModified[g] &&
          x.setRequestHeader("If-Modified-Since", c.lastModified[g]),
        c.etag[g] && x.setRequestHeader("If-None-Match", c.etag[g]));
      ((l.data && l.hasContent && !1 !== l.contentType) || b.contentType) &&
        x.setRequestHeader("Content-Type", l.contentType);
      x.setRequestHeader(
        "Accept",
        l.dataTypes[0] && l.accepts[l.dataTypes[0]]
          ? l.accepts[l.dataTypes[0]] +
              ("*" !== l.dataTypes[0] ? ", " + Ac + "; q=0.01" : "")
          : l.accepts["*"]
      );
      for (f in l.headers) x.setRequestHeader(f, l.headers[f]);
      if (l.beforeSend && (!1 === l.beforeSend.call(o, x, l) || 2 === w))
        return x.abort();
      s = "abort";
      for (f in {
        success: 1,
        error: 1,
        complete: 1,
      })
        x[f](l[f]);
      if ((k = Ob(Ra, l, b, x))) {
        x.readyState = 1;
        j && n.trigger("ajaxSend", [x, l]);
        l.async &&
          0 < l.timeout &&
          (i = setTimeout(function () {
            x.abort("timeout");
          }, l.timeout));
        try {
          (w = 1), k.send(r, d);
        } catch (A) {
          if (2 > w) d(-1, A);
          else throw A;
        }
      } else d(-1, "No Transport");
      return x;
    },
    getScript: function (a, b) {
      return c.get(a, void 0, b, "script");
    },
    getJSON: function (a, b, d) {
      return c.get(a, b, d, "json");
    },
  });
  c.ajaxSetup({
    accepts: {
      script:
        "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
    },
    contents: {
      script: /(?:java|ecma)script/,
    },
    converters: {
      "text script": function (a) {
        c.globalEval(a);
        return a;
      },
    },
  });
  c.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1);
    a.crossDomain && ((a.type = "GET"), (a.global = !1));
  });
  c.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b,
        d = n.head || c("head")[0] || n.documentElement;
      return {
        send: function (c, f) {
          b = n.createElement("script");
          b.async = !0;
          a.scriptCharset && (b.charset = a.scriptCharset);
          b.src = a.url;
          b.onload = b.onreadystatechange = function (a, c) {
            if (c || !b.readyState || /loaded|complete/.test(b.readyState))
              (b.onload = b.onreadystatechange = null),
                b.parentNode && b.parentNode.removeChild(b),
                (b = null),
                c || f(200, "success");
          };
          d.insertBefore(b, d.firstChild);
        },
        abort: function () {
          if (b) b.onload(void 0, !0);
        },
      };
    }
  });
  var Bc = [],
    sb = /(=)\?(?=&|$)|\?\?/;
  c.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = Bc.pop() || c.expando + "_" + qb++;
      this[a] = !0;
      return a;
    },
  });
  c.ajaxPrefilter("json jsonp", function (a, b, d) {
    var e,
      f,
      g,
      h =
        !1 !== a.jsonp &&
        (sb.test(a.url)
          ? "url"
          : "string" === typeof a.data &&
            !(a.contentType || "").indexOf(
              "application/x-www-form-urlencoded"
            ) &&
            sb.test(a.data) &&
            "data");
    if (h || "jsonp" === a.dataTypes[0])
      return (
        (e = a.jsonpCallback =
          c.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback),
        h
          ? (a[h] = a[h].replace(sb, "$1" + e))
          : !1 !== a.jsonp &&
            (a.url += (rb.test(a.url) ? "&" : "?") + a.jsonp + "=" + e),
        (a.converters["script json"] = function () {
          g || c.error(e + " was not called");
          return g[0];
        }),
        (a.dataTypes[0] = "json"),
        (f = p[e]),
        (p[e] = function () {
          g = arguments;
        }),
        d.always(function () {
          p[e] = f;
          a[e] && ((a.jsonpCallback = b.jsonpCallback), Bc.push(e));
          g && c.isFunction(f) && f(g[0]);
          g = f = void 0;
        }),
        "script"
      );
  });
  var ja,
    pa,
    Jd = 0,
    tb =
      p.ActiveXObject &&
      function () {
        for (var a in ja) ja[a](void 0, !0);
      };
  c.ajaxSettings.xhr = p.ActiveXObject
    ? function () {
        var a;
        if (!(a = !this.isLocal && Pb()))
          a: {
            try {
              a = new p.ActiveXObject("Microsoft.XMLHTTP");
              break a;
            } catch (b) {}
            a = void 0;
          }
        return a;
      }
    : Pb;
  pa = c.ajaxSettings.xhr();
  c.support.cors = !!pa && "withCredentials" in pa;
  (pa = c.support.ajax = !!pa) &&
    c.ajaxTransport(function (a) {
      if (!a.crossDomain || c.support.cors) {
        var b;
        return {
          send: function (d, e) {
            var f,
              g,
              h = a.xhr();
            a.username
              ? h.open(a.type, a.url, a.async, a.username, a.password)
              : h.open(a.type, a.url, a.async);
            if (a.xhrFields) for (g in a.xhrFields) h[g] = a.xhrFields[g];
            a.mimeType && h.overrideMimeType && h.overrideMimeType(a.mimeType);
            !a.crossDomain &&
              !d["X-Requested-With"] &&
              (d["X-Requested-With"] = "XMLHttpRequest");
            try {
              for (g in d) h.setRequestHeader(g, d[g]);
            } catch (i) {}
            h.send((a.hasContent && a.data) || null);
            b = function (d, g) {
              var i, l, o, n;
              try {
                if (b && (g || 4 === h.readyState))
                  if (
                    ((b = void 0),
                    f && ((h.onreadystatechange = c.noop), tb && delete ja[f]),
                    g)
                  )
                    4 !== h.readyState && h.abort();
                  else {
                    n = {};
                    i = h.status;
                    l = h.getAllResponseHeaders();
                    "string" === typeof h.responseText &&
                      (n.text = h.responseText);
                    try {
                      o = h.statusText;
                    } catch (p) {
                      o = "";
                    }
                    !i && a.isLocal && !a.crossDomain
                      ? (i = n.text ? 200 : 404)
                      : 1223 === i && (i = 204);
                  }
              } catch (q) {
                g || e(-1, q);
              }
              n && e(i, o, n, l);
            };
            a.async
              ? 4 === h.readyState
                ? setTimeout(b)
                : ((f = ++Jd),
                  tb && (ja || ((ja = {}), c(p).unload(tb)), (ja[f] = b)),
                  (h.onreadystatechange = b))
              : b();
          },
          abort: function () {
            b && b(void 0, !0);
          },
        };
      }
    });
  var ba,
    La,
    Kd = /^(?:toggle|show|hide)$/,
    Ld = RegExp("^(?:([+-])=|)(" + wa + ")([a-z%]*)$", "i"),
    Md = /queueHooks$/,
    sa = [
      function (a, b, d) {
        var e,
          f,
          g,
          h,
          i,
          j,
          k = this,
          m = a.style,
          l = {},
          n = [],
          p = a.nodeType && ka(a);
        d.queue ||
          ((i = c._queueHooks(a, "fx")),
          null == i.unqueued &&
            ((i.unqueued = 0),
            (j = i.empty.fire),
            (i.empty.fire = function () {
              i.unqueued || j();
            })),
          i.unqueued++,
          k.always(function () {
            k.always(function () {
              i.unqueued--;
              c.queue(a, "fx").length || i.empty.fire();
            });
          }));
        if (1 === a.nodeType && ("height" in b || "width" in b))
          (d.overflow = [m.overflow, m.overflowX, m.overflowY]),
            "inline" === c.css(a, "display") &&
              "none" === c.css(a, "float") &&
              (!c.support.inlineBlockNeedsLayout || "inline" === Hb(a.nodeName)
                ? (m.display = "inline-block")
                : (m.zoom = 1));
        d.overflow &&
          ((m.overflow = "hidden"),
          c.support.shrinkWrapBlocks ||
            k.always(function () {
              m.overflow = d.overflow[0];
              m.overflowX = d.overflow[1];
              m.overflowY = d.overflow[2];
            }));
        for (f in b)
          (g = b[f]),
            Kd.exec(g) &&
              (delete b[f],
              (e = e || "toggle" === g),
              g !== (p ? "hide" : "show") && n.push(f));
        if ((b = n.length)) {
          g = c._data(a, "fxshow") || c._data(a, "fxshow", {});
          "hidden" in g && (p = g.hidden);
          e && (g.hidden = !p);
          p
            ? c(a).show()
            : k.done(function () {
                c(a).hide();
              });
          k.done(function () {
            var b;
            c._removeData(a, "fxshow");
            for (b in l) c.style(a, b, l[b]);
          });
          for (f = 0; f < b; f++)
            (e = n[f]),
              (h = k.createTween(e, p ? g[e] : 0)),
              (l[e] = g[e] || c.style(a, e)),
              e in g ||
                ((g[e] = h.start),
                p &&
                  ((h.end = h.start),
                  (h.start = "width" === e || "height" === e ? 1 : 0)));
        }
      },
    ],
    ma = {
      "*": [
        function (a, b) {
          var d,
            e,
            f = this.createTween(a, b),
            g = Ld.exec(b),
            h = f.cur(),
            i = +h || 0,
            j = 1,
            k = 20;
          if (g) {
            d = +g[2];
            e = g[3] || (c.cssNumber[a] ? "" : "px");
            if ("px" !== e && i) {
              i = c.css(f.elem, a, !0) || d || 1;
              do (j = j || ".5"), (i /= j), c.style(f.elem, a, i + e);
              while (j !== (j = f.cur() / h) && 1 !== j && --k);
            }
            f.unit = e;
            f.start = i;
            f.end = g[1] ? i + (g[1] + 1) * d : d;
          }
          return f;
        },
      ],
    };
  c.Animation = c.extend(Rb, {
    tweener: function (a, b) {
      c.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.split(" "));
      for (var d, e = 0, f = a.length; e < f; e++)
        (d = a[e]), (ma[d] = ma[d] || []), ma[d].unshift(b);
    },
    prefilter: function (a, b) {
      b ? sa.unshift(a) : sa.push(a);
    },
  });
  c.Tween = B;
  B.prototype = {
    constructor: B,
    init: function (a, b, d, e, f, g) {
      this.elem = a;
      this.prop = d;
      this.easing = f || "swing";
      this.options = b;
      this.start = this.now = this.cur();
      this.end = e;
      this.unit = g || (c.cssNumber[d] ? "" : "px");
    },
    cur: function () {
      var a = B.propHooks[this.prop];
      return a && a.get ? a.get(this) : B.propHooks._default.get(this);
    },
    run: function (a) {
      var b,
        d = B.propHooks[this.prop];
      this.pos = this.options.duration
        ? (b = c.easing[this.easing](
            a,
            this.options.duration * a,
            0,
            1,
            this.options.duration
          ))
        : (b = a);
      this.now = (this.end - this.start) * b + this.start;
      this.options.step && this.options.step.call(this.elem, this.now, this);
      d && d.set ? d.set(this) : B.propHooks._default.set(this);
      return this;
    },
  };
  B.prototype.init.prototype = B.prototype;
  B.propHooks = {
    _default: {
      get: function (a) {
        if (
          null != a.elem[a.prop] &&
          (!a.elem.style || null == a.elem.style[a.prop])
        )
          return a.elem[a.prop];
        a = c.css(a.elem, a.prop, "");
        return !a || "auto" === a ? 0 : a;
      },
      set: function (a) {
        if (c.fx.step[a.prop]) c.fx.step[a.prop](a);
        else
          a.elem.style &&
          (null != a.elem.style[c.cssProps[a.prop]] || c.cssHooks[a.prop])
            ? c.style(a.elem, a.prop, a.now + a.unit)
            : (a.elem[a.prop] = a.now);
      },
    },
  };
  B.propHooks.scrollTop = B.propHooks.scrollLeft = {
    set: function (a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    },
  };
  c.each(["toggle", "show", "hide"], function (a, b) {
    var d = c.fn[b];
    c.fn[b] = function (a, c, g) {
      return null == a || "boolean" === typeof a
        ? d.apply(this, arguments)
        : this.animate(ta(b, !0), a, c, g);
    };
  });
  c.fn.extend({
    fadeTo: function (a, b, c, e) {
      return this.filter(ka).css("opacity", 0).show().end().animate(
        {
          opacity: b,
        },
        a,
        c,
        e
      );
    },
    animate: function (a, b, d, e) {
      var f = c.isEmptyObject(a),
        g = c.speed(b, d, e),
        h = function () {
          var b = Rb(this, c.extend({}, a), g);
          h.finish = function () {
            b.stop(!0);
          };
          (f || c._data(this, "finish")) && b.stop(!0);
        };
      h.finish = h;
      return f || !1 === g.queue ? this.each(h) : this.queue(g.queue, h);
    },
    stop: function (a, b, d) {
      var e = function (a) {
        var b = a.stop;
        delete a.stop;
        b(d);
      };
      "string" !== typeof a && ((d = b), (b = a), (a = void 0));
      b && !1 !== a && this.queue(a || "fx", []);
      return this.each(function () {
        var b = !0,
          g = null != a && a + "queueHooks",
          h = c.timers,
          i = c._data(this);
        if (g) i[g] && i[g].stop && e(i[g]);
        else for (g in i) i[g] && i[g].stop && Md.test(g) && e(i[g]);
        for (g = h.length; g--; )
          if (h[g].elem === this && (null == a || h[g].queue === a))
            h[g].anim.stop(d), (b = !1), h.splice(g, 1);
        (b || !d) && c.dequeue(this, a);
      });
    },
    finish: function (a) {
      !1 !== a && (a = a || "fx");
      return this.each(function () {
        var b,
          d = c._data(this),
          e = d[a + "queue"];
        b = d[a + "queueHooks"];
        var f = c.timers,
          g = e ? e.length : 0;
        d.finish = !0;
        c.queue(this, a, []);
        b && b.cur && b.cur.finish && b.cur.finish.call(this);
        for (b = f.length; b--; )
          f[b].elem === this &&
            f[b].queue === a &&
            (f[b].anim.stop(!0), f.splice(b, 1));
        for (b = 0; b < g; b++) e[b] && e[b].finish && e[b].finish.call(this);
        delete d.finish;
      });
    },
  });
  c.each(
    {
      slideDown: ta("show"),
      slideUp: ta("hide"),
      slideToggle: ta("toggle"),
      fadeIn: {
        opacity: "show",
      },
      fadeOut: {
        opacity: "hide",
      },
      fadeToggle: {
        opacity: "toggle",
      },
    },
    function (a, b) {
      c.fn[a] = function (a, c, f) {
        return this.animate(b, a, c, f);
      };
    }
  );
  c.speed = function (a, b, d) {
    var e =
      a && "object" === typeof a
        ? c.extend({}, a)
        : {
            complete: d || (!d && b) || (c.isFunction(a) && a),
            duration: a,
            easing: (d && b) || (b && !c.isFunction(b) && b),
          };
    e.duration = c.fx.off
      ? 0
      : "number" === typeof e.duration
      ? e.duration
      : e.duration in c.fx.speeds
      ? c.fx.speeds[e.duration]
      : c.fx.speeds._default;
    if (null == e.queue || !0 === e.queue) e.queue = "fx";
    e.old = e.complete;
    e.complete = function () {
      c.isFunction(e.old) && e.old.call(this);
      e.queue && c.dequeue(this, e.queue);
    };
    return e;
  };
  c.easing = {
    linear: function (a) {
      return a;
    },
    swing: function (a) {
      return 0.5 - Math.cos(a * Math.PI) / 2;
    },
  };
  c.timers = [];
  c.fx = B.prototype.init;
  c.fx.tick = function () {
    var a,
      b = c.timers,
      d = 0;
    for (ba = c.now(); d < b.length; d++)
      (a = b[d]), !a() && b[d] === a && b.splice(d--, 1);
    b.length || c.fx.stop();
    ba = void 0;
  };
  c.fx.timer = function (a) {
    a() && c.timers.push(a) && c.fx.start();
  };
  c.fx.interval = 13;
  c.fx.start = function () {
    La || (La = setInterval(c.fx.tick, c.fx.interval));
  };
  c.fx.stop = function () {
    clearInterval(La);
    La = null;
  };
  c.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400,
  };
  c.fx.step = {};
  c.expr &&
    c.expr.filters &&
    (c.expr.filters.animated = function (a) {
      return c.grep(c.timers, function (b) {
        return a === b.elem;
      }).length;
    });
  c.fn.offset = function (a) {
    if (arguments.length)
      return void 0 === a
        ? this
        : this.each(function (b) {
            c.offset.setOffset(this, a, b);
          });
    var b,
      d,
      e = {
        top: 0,
        left: 0,
      },
      f = (d = this[0]) && d.ownerDocument;
    if (f) {
      b = f.documentElement;
      if (!c.contains(b, d)) return e;
      typeof d.getBoundingClientRect !== I && (e = d.getBoundingClientRect());
      d = Sb(f);
      return {
        top: e.top + (d.pageYOffset || b.scrollTop) - (b.clientTop || 0),
        left: e.left + (d.pageXOffset || b.scrollLeft) - (b.clientLeft || 0),
      };
    }
  };
  c.offset = {
    setOffset: function (a, b, d) {
      var e = c.css(a, "position");
      "static" === e && (a.style.position = "relative");
      var f = c(a),
        g = f.offset(),
        h = c.css(a, "top"),
        i = c.css(a, "left"),
        j = {},
        k = {};
      ("absolute" === e || "fixed" === e) && -1 < c.inArray("auto", [h, i])
        ? ((k = f.position()), (e = k.top), (i = k.left))
        : ((e = parseFloat(h) || 0), (i = parseFloat(i) || 0));
      c.isFunction(b) && (b = b.call(a, d, g));
      null != b.top && (j.top = b.top - g.top + e);
      null != b.left && (j.left = b.left - g.left + i);
      "using" in b ? b.using.call(a, j) : f.css(j);
    },
  };
  c.fn.extend({
    position: function () {
      if (this[0]) {
        var a,
          b,
          d = {
            top: 0,
            left: 0,
          },
          e = this[0];
        "fixed" === c.css(e, "position")
          ? (b = e.getBoundingClientRect())
          : ((a = this.offsetParent()),
            (b = this.offset()),
            c.nodeName(a[0], "html") || (d = a.offset()),
            (d.top += c.css(a[0], "borderTopWidth", !0)),
            (d.left += c.css(a[0], "borderLeftWidth", !0)));
        return {
          top: b.top - d.top - c.css(e, "marginTop", !0),
          left: b.left - d.left - c.css(e, "marginLeft", !0),
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        for (
          var a = this.offsetParent || n.documentElement;
          a && !c.nodeName(a, "html") && "static" === c.css(a, "position");

        )
          a = a.offsetParent;
        return a || n.documentElement;
      });
    },
  });
  c.each(
    {
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset",
    },
    function (a, b) {
      var d = /Y/.test(b);
      c.fn[a] = function (e) {
        return c.access(
          this,
          function (a, e, h) {
            var i = Sb(a);
            if (void 0 === h)
              return i ? (b in i ? i[b] : i.document.documentElement[e]) : a[e];
            i
              ? i.scrollTo(!d ? h : c(i).scrollLeft(), d ? h : c(i).scrollTop())
              : (a[e] = h);
          },
          a,
          e,
          arguments.length,
          null
        );
      };
    }
  );
  c.each(
    {
      Height: "height",
      Width: "width",
    },
    function (a, b) {
      c.each(
        {
          padding: "inner" + a,
          content: b,
          "": "outer" + a,
        },
        function (d, e) {
          c.fn[e] = function (e, g) {
            var h = arguments.length && (d || "boolean" !== typeof e),
              i = d || (!0 === e || !0 === g ? "margin" : "border");
            return c.access(
              this,
              function (b, d, e) {
                return c.isWindow(b)
                  ? b.document.documentElement["client" + a]
                  : 9 === b.nodeType
                  ? ((d = b.documentElement),
                    Math.max(
                      b.body["scroll" + a],
                      d["scroll" + a],
                      b.body["offset" + a],
                      d["offset" + a],
                      d["client" + a]
                    ))
                  : void 0 === e
                  ? c.css(b, d, i)
                  : c.style(b, d, e, i);
              },
              b,
              h ? e : void 0,
              h,
              null
            );
          };
        }
      );
    }
  );
  p.jQuery = p.$ = p.GHjQ = c;
  "function" === typeof define &&
    define.amd &&
    define.amd.jQuery &&
    define("jquery", [], function () {
      return c;
    });
})(window);
jQuery.noConflict("undefined" !== typeof GHjQDeep);
GHebayContent = ebayContent = window.ebayContent || {};
ebayContent["GlobalHeaderWeb/GHJavascriptContent"] = {
  msg_loading: "\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435",
  signinURL: '<a href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn"></a>',
  errL10n:
    "\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u044d\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0432 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435.",
  roverurl: '<a href="http://rover.ebay.com"></a>',
  switchToMobile:
    "\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0441\u0430\u0439\u0442\u0430",
  close: "\u0417\u0430\u043a\u0440\u044b\u0442\u044c",
  dismiss: "\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",
};
GHJSLoaded = 1;
(function (c) {
  if ("undefined" !== typeof c && ("undefined" === typeof GH || !GH)) {
    var d = "https:" == document.location.protocol ? !0 : !1;
    GH = {
      componentID: "#gh",
      CompConstructors: {},
      jQ: c,
      userRecog: !1,
      userAuth: !1,
      cacheAC: {},
      alerts: {},
      acPrevCatID: 0,
      build: "114rcb",
      isSelectOptionsBoxShown: !1,
      vCJar: null,
      L10N: ebayContent["GlobalHeaderWeb/GHJavascriptContent"],
      sec: d,
      isDefined: function (a) {
        return "undefined" !== typeof window[a];
      },
      userFN: "",
      userID: "",
      ghEBActive_id: "gh-eb-active",
      ghEBAlerts_id: "#gh-eb-Alerts",
      ghAC_id: "#gh-ac",
      currentTime: ~~(new Date().getTime() / 6e4),
      userAgent: navigator.userAgent,
      GHlocalStorage:
        "undefined" !== typeof localStorage && null !== localStorage
          ? localStorage
          : 0,
      oldRaptor: "undefined" !== typeof ejo && "undefined" !== typeof ejo.dom,
      pi: "http" + (d ? "s://securepics" : "://p") + ".ebaystatic.com/aw/pics/",
      oldDT: "BackCompat" == document.compatMode,
      isIE: /msie/.test(navigator.userAgent.toLowerCase()),
      isIE8: window.attachEvent && !window.addEventListener,
      docMode: document.documentMode || 0,
      undefinedStr: "undefined",
      functionStr: "function",
      fnetEnabled: !0,
      disablePDS: !0,
      isMweb: !1,
      Events: {
        eventsList: {},
        publish: function (a, b) {
          this.eventsList[a] &&
            !(1 > this.eventsList[a].length) &&
            this.eventsList[a].forEach(function (a) {
              a(b || {});
            });
        },
        subscribe: function (a, b) {
          this.eventsList[a] || (this.eventsList[a] = []);
          this.eventsList[a].push(b);
        },
      },
      init: function () {
        var a, b;
        c.extend(ebayContent, GHebayContent);
        GH.C = GH.isDefined("GH_config") ? GH_config : {};
        GH.GHSW = GH.GHSW || {};
        "GadgetPlatform" in window &&
          window.GH &&
          window.GH.C &&
          "function" === typeof window.GadgetPlatform.init &&
          window.GadgetPlatform.init();
        GH.isIE8 ||
          (delete GH_config,
          delete GHjQ,
          delete GHJSLoaded,
          delete GHebayContent);
        for (b in GH.CompConstructors)
          try {
            (a = GH[b] = new GH.CompConstructors[b]()),
              "function" === typeof a.execute_immediately &&
                a.execute_immediately();
          } catch (d) {
            "undefined" !== typeof console &&
              console.log("GH " + b + " const: " + d);
          }
        c(window).on("load.gh", function () {
          "function" == typeof window.requestAnimationFrame
            ? window.requestAnimationFrame(GH.windowLoad)
            : GH.windowLoad();
        });
        setTimeout(GH.windowLoad, 2e4);
        var e = function (a) {
            if (
              document.addEventListener ||
              "load" === a.type ||
              "complete" === document.readyState
            )
              document.addEventListener
                ? document.removeEventListener("DOMContentLoaded", e, !1)
                : document.detachEvent("onreadystatechange", e),
                f();
          },
          f = function () {
            for (b in GH.CompConstructors)
              if (GH[b]) {
                var a = null;
                "object" === typeof GH.CompConstructors[b + "__INIT_DATA"] &&
                  (a = GH.CompConstructors[b + "__INIT_DATA"]);
                if ("function" === typeof GH[b].init)
                  try {
                    GH[b].init(a);
                  } catch (c) {
                    "undefined" !== typeof console &&
                      console.log("GH " + b + " init: " + c);
                  }
              }
            if (
              "complete" === document.readyState ||
              "interactive" === document.readyState
            )
              GH.windowLoad(), GH.Util.cTImg(GH.ghiIMP + 98);
          };
        "complete" === document.readyState ||
        "interactive" === document.readyState
          ? setTimeout(f)
          : document.addEventListener
          ? document.addEventListener("DOMContentLoaded", e, !1)
          : document.attachEvent("onreadystatechange", e);
      },
      windowLoad: function () {
        var a;
        if (!GH.windowLoaded)
          for (objName in ((GH.windowLoaded = !0), GH.CompConstructors))
            try {
              (a = GH[objName]),
                "function" === typeof a.execute_at_windowload &&
                  a.execute_at_windowload();
            } catch (b) {
              "undefined" !== typeof console &&
                console.log("GH " + objName + " ex on load: " + b);
            }
      },
      add: function (a, b) {
        GH.CompConstructors[a] = b;
        GHebayContent = ebayContent;
      },
    };
  }
})("undefined" !== typeof GHjQ ? GHjQ : jQuery);
(function (c) {
  GH.add("Util", function () {
    var l,
      n,
      q = GH.L10N,
      s = GH.GHSW,
      r = GH.isDefined,
      t = GH.sec,
      p = {},
      o;
    c.browser ||
      ((o = navigator.userAgent.toLowerCase()),
      (o =
        /(chrome)[ \/]([\w.]+)/.exec(o) ||
        /(webkit)[ \/]([\w.]+)/.exec(o) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(o) ||
        /(msie) ([\w.]+)/.exec(o) ||
        (0 > o.indexOf("compatible") &&
          /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(o)) ||
        []),
      (p[o[1] || ""] = !0),
      (p.version = o[2] || "0"),
      p.chrome ? (p.webkit = !0) : p.webkit && (p.safari = !0),
      (c.browser = p));
    return {
      sec: t,
      geo: !1,
      getPageID: function () {
        return GH.C.pageId;
      },
      getSiteID: function () {
        return GH.C.siteId;
      },
      getPrevCategoryID: function () {
        return GH.acPrevCatID;
      },
      isGeo: function () {
        return "object" === typeof GH.Geo;
      },
      isQAPool: function () {
        return void 0 !== GH.C.qapool;
      },
      factorEnabled: function (a) {
        return GH.GHSW[a];
      },
      getHTTPSURL: function (a) {
        GH.Util.factorEnabled("ENABLE_HTTPS") &&
          (a = a.replace(/^http:/, "https:"));
        return a;
      },
      init: function () {
        c(window).on("load.gh", function () {
          l.execute_on_windowload();
        });
        if (2046732 == n || 2045573 == n || 2334524 == n) {
          var a = c(GH.SearchBox.formID + " input[name=LH_TitleDesc]"),
            b = window.location.href,
            d = c("#gh-as-a"),
            e,
            h,
            f;
          a.length ||
            (0 <= b.indexOf("LH_TitleDesc=1") &&
              c(GH.SearchBox.formID).append(
                '<input type="hidden" name="LH_TitleDesc" value="1"/>'
              ));
          0 < d.length &&
            ((e = d.attr("href")),
            c(
              GH.SearchBox.formID +
                ' input[type="hidden"],' +
                GH.SearchBox.formID +
                ' input[type="text"],' +
                GH.SearchBox.formID +
                " input:checked,select" +
                GH.CategorySelect.controlID
            ).each(function () {
              h = c(this);
              "_trksid" != h.attr("name") &&
                ((f = h.attr("name") + "=" + encodeURIComponent(h.val())),
                (e = 0 > e.indexOf("?") ? e + ("?" + f) : e + ("&" + f)));
            }),
            d.attr("href", e));
        }
        s.raptor || l.initLegacyVJO();
        GH.isIE &&
          GH.oldDT &&
          6 > GH.docMode &&
          c(GH.componentID).addClass("gh-oldDT");
        c("#gh-shop, #gh-eb-u, .gh-eb-li,.gh-dd").bind("focusout", function () {
          setTimeout(
            "if(!GH.jQ(document.activeElement).parents('#" +
              this.id +
              "').length) GH.Util.hideOverlays(1); ",
            500
          );
        });
        c(".gh-survey").click(l.surveyClicked);
        document.implementation.hasFeature(
          "http://www.w3.org/TR/SVG11/feature#BasicStructure",
          "1.1"
        ) ||
          (c("#glbfooter").addClass("gf-nosvg"), c("#gh").addClass("gh-nosvg"));
      },
      getBundle: function (a) {
        return ebayContent["GlobalHeaderWeb/" + a] || 0;
      },
      mergeContent: function (a, b) {
        for (
          var d, e = [], c = 0, f = /\$\{([A-Za-z0-9_\.]+)\}/g, a = a || "";
          (d = f.exec(a));

        )
          e.push(a.substring(c, d.index)),
            (d = b[d[1]]),
            e.push(void 0 !== d ? d : ""),
            (c = f.lastIndex);
        e.push(a.substring(c));
        return e.join("");
      },
      browser: c.browser,
      whichBrowser: function () {
        var a = navigator.userAgent,
          b,
          d =
            a.match(
              /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
            ) || [];
        if (/trident/i.test(d[1])) return "IE";
        if (
          "Chrome" === d[1] &&
          ((b = a.match(/\b(OPR|Edge)\/(\d+)/)), null != b)
        )
          return b.slice(1, 2).replace("OPR", "Opera");
        d = d[2]
          ? [d[1], d[2]]
          : [navigator.appName, navigator.appVersion, "-?"];
        null != (b = a.match(/version\/(\d+)/i)) && d.splice(1, 1, b[1]);
        return d[0];
      },
      surveyClicked: function (a) {
        var b = document,
          d = b.getElementById("gh-svyForm"),
          a = c(a.currentTarget);
        d ||
          (c("body").append(
            '<form id=gh-svyForm action="#" method=post target=eBaySurvey class="gh-none g-hdn"><input name=domContent value=""></form>'
          ),
          (d = b.getElementById("gh-svyForm")));
        if (d && a)
          return (
            window.open(
              "",
              "eBaySurvey",
              "location=0,menubar=0,status=0,resizable=1,scrollbars=1,top=" +
                Math.round((screen.height - 800) / 2) +
                ",left=" +
                Math.round((screen.width - 800) / 2) +
                ",width=800,height=800"
            ),
            a.attr("target", "eBaySurvey"),
            c(d).attr("action", a.attr("href")),
            b.location && "https:" != b.location.protocol
              ? ((d.elements[0].value = encodeURIComponent(
                  "<html>" +
                    b.getElementsByTagName("html")[0].innerHTML +
                    "</html>"
                )),
                d.submit(),
                !1)
              : !0
          );
      },
      execute_on_windowload: function () {
        "static" === c(".gh-acc-exp-div").css("position") &&
          l.cTImg(
            GH.ghiIMP +
              "92%26gh1g%3D" +
              encodeURIComponent(document.location.href) +
              "%26gh2g%3D " +
              encodeURIComponent(navigator.userAgent)
          );
      },
      execute_immediately: function () {
        l = this;
        l.initPluggins();
        l.initCookie();
        n = r("_GlobalNavHeaderSrcPageId")
          ? (GH.C.pageId = _GlobalNavHeaderSrcPageId)
          : (_GlobalNavHeaderSrcPageId = GH.C.pageId);
        ~~n ||
          ((GH.C.pageId = n = l.computePageId()),
          typeof n != GH.undefinedStr && (_GlobalNavHeaderSrcPageId = n));
        GH.ghiIMP =
          "/roverimp/0/0/9?imp=2046301&trknvp=cp%3D" + n + "%26ghi%3D";
      },
      eZ: function (a) {
        return !a
          ? a
          : a
              .replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#39;")
              .replace(/\//g, "&#x2F;");
      },
      ajxC: function (a, b, d, e) {
        1 == c(a + " .gh-o-l").length &&
          (c(a).html(
            "<div class=gh-o-err><span class=gh-o-errb>" +
              (e || q.errL10n) +
              "</span></div>"
          ),
          (b = d));
        b && (c(a).data("ghi", b), l.cTImg(GH.ghiIMP + b));
      },
      addSignin: function (a) {
        return a.replace(
          /\#URL\#/,
          l.getHref(q.signinURL) + "&ru=" + l.addRU()
        );
      },
      showOverlay: function (a) {
        a = c(a);
        GH.Util.hideOverlays();
        a.gshow();
        a.data("ghi") && l.cTImg(GH.ghiIMP + a.data("ghi"));
      },
      getTarget: function (a) {
        return a.attr("aria-controls") || a.attr("data-controlTarget");
      },
      openOverlay: function (a) {
        GH.Util.hideOverlays();
        a.attr("aria-expanded", "true");
        var b = l.getTarget(a),
          d = document.querySelector("#gh-ul-nav");
        c("#" + b).show();
        d.removeAttribute("role");
        a.data("ghi") && l.cTImg(GH.ghiIMP + a.data("ghi"));
      },
      closeOverlay: function (a) {
        a.each(function () {
          var a = c(this);
          a[0].hasAttribute("aria-expanded") &&
            a.attr("aria-expanded", "false");
          a = l.getTarget(a);
          "gh-eb-My-o" === a &&
            document
              .querySelector("#gh-ul-nav")
              .setAttribute("role", "navigation");
          c("#" + a).hide();
        });
      },
      toggleOverlay: function (a) {
        var b = l.getTarget(a),
          b = c("#" + b);
        GH.Util[b.is(":hidden") ? "openOverlay" : "closeOverlay"](a);
      },
      hideOverlays: function (a) {
        GH.Greeting && GH.Greeting.hideUserOverlay();
        GH.Util.closeOverlay(
          c(
            "#gh-ug, #gf-fbtn, .gh-dd .gh-control," +
              (GH.ShopByCat || {}).controlID
          )
        );
        GH.alerts &&
          "function" == typeof GH.alerts.closeOverlay &&
          GH.alerts.closeOverlay(c("#gh-eb-Alerts"), !1);
        c("#gh-shop, .gh-eb-active").removeClass("gh-shop-active gh-eb-active");
        GH.isSelectOptionsBoxShown &&
          !a &&
          c(GH.CategorySelect.controlID).blur();
        if (
          28 > (GH.userAgent.match(/Chrome\/([0-9]+)/) || [0, 28])[1] &&
          !/Macintosh/.test(GH.userAgent)
        )
          c(GH.CategorySelect.controlID).ghide(),
            setTimeout(function () {
              c(GH.CategorySelect.controlID).gshow();
            }, 10);
        GH.Geo && GH.Geo.hideMsgOverlay();
      },
      createEBO: function (a, b) {
        var d = "#gh-eb-" + a,
          e = c(d + " .gh-eb-li-a").outerWidth() - 8;
        GH.Util.hideOverlays();
        c(d).append(
          "<div id=gh-eb-" +
            a +
            "-o class='gh-eb-o'" +
            (b ? " aria-busy=true aria-live=polite" : "") +
            " style='" +
            (180 < e ? "min-width:" + e + "px" : "") +
            "' aria-hidden=false><div class=gh-o-l>" +
            q.msg_loading +
            "</div></div>"
        );
      },
      createOverlay: function (a, b, d) {
        var e = "#gh-eb-" + a,
          h = c(e + " .gh-eb-li-a").outerWidth() - 8;
        GH.Util.hideOverlays();
        c(e).append(
          "<div id=gh-eb-" +
            a +
            "-o class='gh-eb-o'" +
            (b ? " aria-busy=true aria-live=polite" : "") +
            " style='" +
            (180 < h ? "min-width:" + h + "px" : "") +
            "'><div class=gh-o-l " +
            (d ? "tabindex=0" : "") +
            " >" +
            GH.L10N.msg_loading +
            "</div></div>"
        );
        d && c("#gh-eb-" + a + "-o .gh-o-l").focus();
      },
      getHref: function (a) {
        return c(a).attr("href");
      },
      redirect: function (a) {
        document.location = a;
      },
      getSecURL: function (a, b, d) {
        var c = "^";
        d && (c = "");
        d = RegExp(c + "http:");
        GH.sec &&
          ((a = a.replace(d, "https:")),
          b &&
            ((b = RegExp(c + "https://ir.")),
            (c = RegExp(c + "https://pics.")),
            (a = a.replace(b, "https://secureir.")),
            (a = a.replace(c, "https://securepics."))));
        return a;
      },
      addPrefixPoolURL: function (a) {
        var b = GH.GHSW.pool ? GH.GHSW.pool : null,
          d = c.isArray(a),
          e = "string" === typeof a,
          h = [0, 31, 46, 213, 215, 248, 223, 136, 224, 202, 226, 206, 900],
          f = GH.siteSpecific.maprules.regex,
          h =
            GH.siteSpecific.maprules[
              "function" == typeof h.indexOf &&
              -1 >= h.indexOf(parseInt(GH.C.siteId)) &&
              b &&
              "qa" == b
                ? "paradise"
                : b
            ];
        if ("undefined" !== typeof JSON && b && f && h) {
          if (d || e)
            a = {
              d: a,
            };
          a = JSON.parse(JSON.stringify(a).replace(f, h));
          if (d || e) a = a.d;
        }
        return a;
      },
      cTId: function (a) {
        return (n ? "p" + n + "." : "") + "m570" + (a ? ".l" + a : "");
      },
      cTImg: function (a) {
        c("body").append(
          '<img src="' +
            GH.Util.getRoverUrl() +
            a +
            (0 < a.indexOf("?") ? "&" : "?") +
            new Date().getTime() +
            '" width=1 height=1 border=0 alt="">'
        );
      },
      externalLinkTracking: function (a) {
        var b = c(a.target).attr("href");
        c.getScript(
          GH.Util.getRoverUrl() +
            "/roverclk/0/0/9?trknvp=sid%3Dp" +
            n +
            "." +
            c(a.target).attr("_exsp"),
          function () {
            document.location = b;
          }
        );
        a.preventDefault();
        GH.Util.clrTimer(GH.clickTimer);
        GH.clickTimer = setTimeout("document.location = '" + b + "'", 500);
      },
      getRoverUrl: function () {
        return (GH.Util.getSecURL(GH.Util.getHref(q.roverurl)) || "").replace(
          /\/+$/,
          ""
        );
      },
      isTouchDevice: function () {
        return "ontouchstart" in document.documentElement;
      },
      clrTimer: function (a) {
        clearTimeout(a);
      },
      getCurrentTime: function () {
        return ~~(new Date().getTime() / 1e3);
      },
      addRU: function () {
        var a = document.location.href;
        return 0 < a.indexOf("SignOutConfirm") ||
          0 < a.indexOf("logout/confirm")
          ? ""
          : encodeURIComponent(a);
      },
      base64decode: function (a) {
        var b = "",
          d,
          c,
          h,
          f,
          j,
          k = 0,
          m = a.length;
        if (/[^A-Za-z0-9\+\/\=\*]/g.exec(a)) return "";
        for (; k < m; )
          (d =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=*".indexOf(
              a.charAt(k++)
            )),
            (c =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=*".indexOf(
                a.charAt(k++)
              )),
            (f =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=*".indexOf(
                a.charAt(k++)
              )),
            (j =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=*".indexOf(
                a.charAt(k++)
              )),
            (d = (d << 2) | (c >> 4)),
            (c = ((c & 15) << 4) | (f >> 2)),
            (h = ((f & 3) << 6) | j),
            (b += String.fromCharCode(d)),
            64 <= f || (b += String.fromCharCode(c)),
            64 <= j || (b += String.fromCharCode(h));
        return b;
      },
      computePageId: function () {
        var a = 0;
        try {
          var b = c('*[_sp^="p"]').filter(":first");
          if (b) {
            var d = b.attr("_sp");
            if (void 0 !== d) {
              var e = d.match(/p[\d]+/);
              e && 0 < e.length && (a = e[0].substring(1));
            }
          }
        } catch (h) {}
        return a;
      },
      tabHidden: function (a) {
        var b = {},
          d = function () {
            var a = ["webkit", "moz", "ms", "o"];
            if ("hidden" in document) return "hidden";
            for (var b = 0; b < a.length; b++)
              if (a[b] + "Hidden" in document) return a[b] + "Hidden";
            return null;
          },
          e = function () {
            var a;
            a = (a = d()) ? document[a] : !1;
            a ? b.hidden() : b.visible();
          },
          h = d(),
          b = c.extend(b, a);
        h &&
          ((a = h.replace(/[H|h]idden/, "") + "visibilitychange"),
          document.addEventListener(a, e));
      },
      loadScript: function (a, b) {
        var b = "undefined" !== typeof b ? b : !0,
          d,
          c,
          h,
          f = document.createElement("iframe");
        d = new Date().getTime();
        b && (a = a + "&_=" + d);
        (f.frameElement || f).style.cssText = "width: 0; height: 0; border: 0";
        d = document.getElementsByTagName("script");
        d = d[d.length - 1];
        d.parentNode.insertBefore(f, d);
        f.setAttribute("tabindex", "-1");
        f.setAttribute("aria-hidden", "true");
        try {
          c = f.contentWindow.document;
        } catch (j) {
          (h = document.domain),
            (f.src =
              "javascript:var d=document.open();d.domain='" + h + "';void(0);"),
            (c = f.contentWindow.document);
        }
        c.open()._l = function () {
          var k = this.createElement("script");
          h && (this.domain = h);
          k.id = "js-iframe-async";
          k.src = a;
          this.body.appendChild(k);
        };
        c.write('<body onload="document._l();">');
        c.close();
      },
      initCookie: function () {
        var a = GH,
          b = {
            COOKIELET_DELIMITER: "^",
            NAME_VALUE_DELIMITER: "/",
            escapedValue: !0,
          },
          c = {
            COOKIELET_DELIMITER: "^",
            NAME_VALUE_DELIMITER: "/",
            bUseExp: !0,
            startDelim: "b",
          },
          e = {
            COOKIELET_DELIMITER: "^",
            NAME_VALUE_DELIMITER: "=",
            escapedValue: !0,
            startDelim: "^",
          },
          h = {
            reg: ["dp1", "reg"],
            recent_vi: ["ebay", "lvmn"],
            ebaysignin: ["ebay", "sin"],
            p: ["dp1", "p"],
            etfc: ["dp1", "etfc"],
            keepmesignin: ["dp1", "kms"],
            ItemList: ["ebay", "wl"],
            BackToList: ["s", "BIBO_BACK_TO_LIST"],
          },
          f = {
            r: b,
            dp1: c,
            npii: c,
            ebay: e,
            reg: e,
            apcCookies: e,
            ds2: {
              COOKIELET_DELIMITER: "^",
              NAME_VALUE_DELIMITER: "/",
            },
          },
          j =
            -1 < document.domain.indexOf(".ebay.")
              ? document.domain.substring(document.domain.indexOf(".ebay."))
              : ".ebay.com";
        a.vCJar = {
          readCookie: function (a, m) {
            var b = this.readCookieObj(a, m).value;
            return b ? decodeURIComponent(b) : "";
          },
          createDefaultCookieBean: function (a, m) {
            var b = {};
            b.name = a;
            b.cookieletname = m;
            b.value = "";
            b.maxage = 0;
            b.rawcookievalue = "";
            b.mode = "";
            return b;
          },
          readCookieObj: function (a, m) {
            var b = this.createDefaultCookieBean(a, m);
            this.update();
            this.checkConversionMap(b);
            b.rawcookievalue = this.aCookies[b.name];
            !b.name || !b.rawcookievalue
              ? (b.value = "")
              : b.cookieletname
              ? this.readCookieletInternal(b)
              : this.readCookieInternal(b);
            var g = m && m.match(/guid$/),
              c = "undefined" != typeof b ? b : "";
            c &&
              g &&
              32 < b.value.length &&
              (b.value = b.value.substring(0, 32));
            return c;
          },
          checkConversionMap: function (a) {
            var b = h[a.name];
            b &&
              ((a.mode = this.getMode(a.name)),
              (a.name = b[0]),
              (a.cookieletname = b[1]));
          },
          readCookieInternal: function (a) {
            a.value = a.rawcookievalue;
            return a;
          },
          readCookieletInternal: function (a) {
            var b = this.getCookielet(
                a.name,
                a.cookieletname,
                a.rawcookievalue
              ),
              c = this.getFormat(a.name);
            b &&
              c.bUseExp &&
              ((c = b),
              (b = b.substring(0, b.length - 8)),
              8 < c.length && (a.maxage = c.substring(c.length - 8)));
            a.value = b;
            "10" == a.mode && (a.value = a.rawcookievalue);
            return a;
          },
          readMultiLineCookie: function (a, b) {
            if (!a || !b) return "";
            var c,
              g = "",
              d = h[a];
            d && (c = this.readCookieObj(d[0], d[1]).value || "");
            c && (g = this.getCookielet(a, b, c) || "");
            return "undefined" != typeof g ? g : "";
          },
          writeCookie: function (a, b, c) {
            var g = h[a];
            g
              ? this.writeCookielet(g[0], g[1], b, c)
              : ((g = this.getFormat(a)),
                b && g.escapedValue && (b = encodeURIComponent(b)),
                this.writeRawCookie(a, b, c));
          },
          writeRawCookie: function (a, b, c) {
            if (
              a &&
              void 0 !== b &&
              ((isNaN(b) && 4e3 > b.length) || 4e3 > (b + "").length)
            ) {
              "number" == typeof c && (c = this.getExpDate(c));
              var g = c ? new Date(c) : new Date(this.getExpDate(730)),
                d = this.getFormat(a);
              document.cookie &&
                (document.cookie =
                  a +
                  "=" +
                  (b || "") +
                  (c || d.bUseExp ? "; expires=" + g.toGMTString() : "") +
                  "; domain=" +
                  j +
                  "; path=/");
            }
          },
          writeCookieEx: function (a, b, c) {
            this.writeCookie(a, b, this.getExpDate(c));
          },
          writeCookielet: function (a, b, c, g, d) {
            a &&
              b &&
              (this.update(),
              this.getFormat(a).bUseExp &&
                c &&
                ("number" == typeof g && (g = this.getExpDate(g)),
                (g = g ? new Date(g) : new Date(this.getExpDate(730))),
                (g = Date.UTC(
                  g.getUTCFullYear(),
                  g.getUTCMonth(),
                  g.getUTCDate(),
                  g.getUTCHours(),
                  g.getUTCMinutes(),
                  g.getUTCSeconds()
                )),
                (g = Math.floor(g / 1e3)),
                (c += parseInt(g, 10).toString(16))),
              (b = this.createCookieValue(a, b, c)),
              this.writeRawCookie(a, b, d));
          },
          writeMultiLineCookie: function (a, b, c, g, d) {
            this.update();
            if ((b = this.createCookieValue(a, b, c)))
              (a = h[a]) && this.writeCookielet(a[0], a[1], b, g, d);
          },
          getBitFlagOldVersion: function (a, b) {
            var c = parseInt(a, 10),
              g = c.toString(2);
            return "1" == (c ? g.charAt(g.length - b - 1) : "") ? 1 : 0;
          },
          setBitFlagOldVersion: function (a, b, c) {
            var g = "",
              d;
            (a = parseInt(a + "", 10)) && (g = a.toString(2));
            a = g.length;
            if (a < b) {
              d = b - a;
              for (a = 0; a <= d; a++) g = "0" + g;
            }
            b = g.length - b - 1;
            return parseInt(g.substring(0, b) + c + g.substring(b + 1), 2);
          },
          getBitFlag: function (a, b) {
            if (null != a && 0 < a.length && "#" == a.charAt(0)) {
              var c = b % 4,
                g = a.length - (Math.floor(b / 4) + 1),
                g = parseInt(a.substring(g, g + 1), 16),
                c = 1 << c;
              return (g & c) == c ? 1 : 0;
            }
            return this.getBitFlagOldVersion(a, b);
          },
          setBitFlag: function (a, b, c) {
            if (null != a && 0 < a.length && "#" == a.charAt(0)) {
              var g = a.length,
                d = b % 4,
                b = Math.floor(b / 4) + 1;
              if (g <= b) {
                if (1 != c) return a;
                for (var e = b - g + 1, a = a.substring(1, g); 0 < e; )
                  (a = "0" + a), e--;
                a = "#" + a;
                g = a.length;
              }
              b = g - b;
              e = parseInt(a.substring(b, b + 1), 16);
              d = 1 << d;
              e = 1 == c ? e | d : e & ~d;
              return (a =
                a.substring(0, b) + e.toString(16) + a.substring(b + 1, g));
            }
            return 31 < b ? a : this.setBitFlagOldVersion(a, b, c);
          },
          createCookieValue: function (a, b, c) {
            var d = h[a],
              e = this.getFormat(a),
              f = this.getMode(a),
              a =
                d && ("00" == f || "01" == f)
                  ? this.readCookieObj(d[0], d[1]).value || ""
                  : this.aCookies[a] || "";
            if (e) {
              a = this.getCookieletArray(a, e);
              a[b] = c;
              var b = "",
                j;
              for (j in a)
                a.hasOwnProperty(j) &&
                  (b +=
                    j + e.NAME_VALUE_DELIMITER + a[j] + e.COOKIELET_DELIMITER);
              b && e.startDelim && (b = e.startDelim + b);
              a = b;
              e.escapedValue && (a = encodeURIComponent(a));
            }
            return a;
          },
          update: function () {
            var a = document.cookie.split("; ");
            this.aCookies = {};
            for (var b = /^"(.*)"$/, c = 0; c < a.length; c++) {
              var d = a[c].split("="),
                e = this.getFormat(d[0]),
                f = d[1];
              (e = e.startDelim) &&
                f &&
                0 === f.indexOf(e) &&
                (d[1] = f.substring(e.length, f.length));
              d[1] &&
                d[1].match(b) &&
                (d[1] = d[1].substring(1, d[1].length - 1));
              this.aCookies[d[0]] = d[1];
            }
          },
          getCookielet: function (a, b, c) {
            a = this.getFormat(a);
            return this.getCookieletArray(c, a)[b] || "";
          },
          getFormat: function (a) {
            return f[a] || b;
          },
          getCookieletArray: function (a, b) {
            var c = [],
              d = a || "";
            b.escapedValue && (d = decodeURIComponent(d));
            for (
              var d = d.split(b.COOKIELET_DELIMITER), e = 0;
              e < d.length;
              e++
            ) {
              var f = d[e].indexOf(b.NAME_VALUE_DELIMITER);
              0 < f && (c[d[e].substring(0, f)] = d[e].substring(f + 1));
            }
            return c;
          },
          getExpDate: function (a) {
            var b;
            "number" == typeof a &&
              0 <= a &&
              ((b = new Date()),
              b.setTime(b.getTime() + 864e5 * a),
              (b = b.toGMTString()));
            return b;
          },
          getMode: function (a) {
            var b = this.readCookieObj("ebay", "cv").value,
              c;
            if (!(a in h)) return null;
            if (!b) return "";
            if (0 === b) return "00";
            if (b && "0" != b) {
              if (-1 != b.indexOf("."))
                for (var d = b.split("."), b = 0; b < d.length; b++)
                  c = parseInt(d[b], 16).toString(2) + c;
              else c = parseInt(b, 16).toString(2);
              var b = 0,
                d = c.length,
                e,
                f;
              for (f in h) {
                e = d - 2 * (b + 1);
                e = c.substring(e, e + 2).toString(10);
                e = !e ? "00" : e;
                if (a == f) return 1 == e.length ? "0" + e : e;
                b++;
              }
            }
            return null;
          },
          getMulti: function (a, b, c) {
            var d = "",
              e;
            for (e = 0; e < c; e++) d = this.getBitFlag(a, b + e) + d;
            return parseInt(d, 2);
          },
          setMulti: function (a, b, c, d) {
            var e = 0,
              f,
              d = d.toString(2).substring(0, c);
            f = d.length;
            if (f < c) {
              c -= f;
              for (e = 0; e < c; e++) d = "0" + d;
              f += c;
            }
            for (e = 0; e < f; e++)
              a = this.setBitFlag(a, b + e, d.substring(f - e - 1, f - e));
            return a;
          },
          setJsCookie: function () {
            this.writeCookielet("ebay", "js", "1");
          },
        };
      },
      initLegacyVJO: function () {
        if (GH.oldDT && !r("noStandardCSS")) {
          var a = "ebay",
            b =
              "forums. chatboards answercenter http://vi. http://ivi. events.".split(
                " "
              ),
            d = !1;
          for (i = 0; i < b.length; i++)
            if (-1 < document.domain.indexOf(b[i])) {
              d = !0;
              break;
            }
          if (r("nodefaultcss") || d) a += "-nodefault";
          if (
            GH.Util.browser.mozilla ||
            GH.Util.browser.webkit ||
            (GH.isIE && d)
          )
            a += "-ns";
          a =
            (l.sec ? "https://secureinclude" : "http://include") +
            ".ebaystatic.com/css/v/us/legacy/" +
            a +
            ".css";
          c.getCSS(a);
        }
      },
      initPluggins: function () {
        c.getCSS = function (a, b) {
          document.getElementsByTagName("head")[0].appendChild(
            jQuery(document.createElement("link")).attr({
              href: a,
              media: b || "screen",
              type: "text/css",
              rel: "stylesheet",
            })[0]
          );
        };
        c.cachedScript = function (a) {
          return c.ajax({
            dataType: "script",
            cache: !0,
            url: a,
          });
        };
        c.fn.scrollLock = function (a) {
          if (c.isFunction(c.fn.on))
            return c(this).on(
              "DOMMouseScroll." + a + " mousewheel." + a,
              function (a) {
                var d = c(this),
                  e = this.scrollTop,
                  h = this.scrollHeight,
                  f = d.height(),
                  j =
                    "DOMMouseScroll" == a.type
                      ? -40 * a.originalEvent.detail
                      : a.originalEvent.wheelDelta,
                  k = 0 < j,
                  m = function () {
                    a.stopPropagation();
                    a.preventDefault();
                    return (a.returnValue = !1);
                  };
                if (!k && -j > h - f - e) return d.scrollTop(h), m();
                if (k && j > e) return d.scrollTop(0), m();
              }
            );
        };
        c.fn.scrollRelease = function (a) {
          return c(this).off("DOMMouseScroll." + a + " mousewheel." + a);
        };
        c.fn.ghide = function () {
          return this.attr("aria-hidden", "true").hide();
        };
        c.fn.gshow = function () {
          return this.attr("aria-hidden", "false").show();
        };
        c.fn.ghidden = function () {
          return this.attr("aria-hidden", "true").css("visibility", "hidden");
        };
        c.fn.gvisible = function () {
          return this.attr("aria-hidden", "false").css("visibility", "visible");
        };
        c.fn.gtoggle = function () {
          c(this)[this.is(":hidden") ? "gshow" : "ghide"]();
        };
        c.fn.ghellipsis = function (a) {
          a = c.extend(
            {
              row: 1,
              onlyFullWords: !1,
              char: "...",
              callback: function () {},
            },
            a
          );
          this.each(function () {
            var b = c(this),
              d = b.text(),
              e = b.height();
            if (!b.hasClass("ghellip")) {
              b.addClass("ghellip");
              b.text("a");
              var h = parseFloat(b.css("lineHeight"), 10),
                f = b.height(),
                h = (h > f ? h - f : 0) * (a.row - 1) + f * a.row;
              e >= h && b.parents(".coupon-itm").addClass("coupon-itm__tall");
              if (!(e <= h)) {
                for (var e = 1, f = 0, j = d.length; e < j; )
                  (f = Math.ceil((e + j) / 2)),
                    b.text(d.slice(0, f) + a["char"]),
                    b.height() <= h ? (e = f) : (j = f - 1);
                d = d.slice(0, e);
                a.onlyFullWords &&
                  (d = d.replace(/[\u00AD\w\uac00-\ud7af]+$/, ""));
                d += a["char"];
              }
              b.text(d);
              a.callback.call(this);
            }
          });
          return this;
        };
        c.fn.ghellipsisDetails = function (a) {
          a = c.extend(
            {
              row: 1,
              char: "...",
              callback: function () {},
            },
            a
          );
          this.each(function () {
            var b = c(this),
              d = b.parent(),
              e = b.text(),
              h = e,
              f = b.height();
            if (!b.hasClass("ghellip")) {
              b.addClass("ghellip");
              b.text("a");
              var j = parseFloat(d.css("lineHeight"), 10),
                k = d.height() - 2,
                j = j > k ? j - k : 0;
              Math.floor(f) >= Math.floor(k) &&
                (b.parents(".coupon-itm").addClass("coupon-itm__tall-details"),
                b.text(h),
                (f = d.height()),
                b.text("a"));
              k = d.height();
              k = j * (a.row - 1) + k * a.row;
              if (f <= k) b.text(e);
              else {
                for (var f = 1, j = 0, m = e.length; f < m; )
                  (j = Math.ceil((f + m) / 2)),
                    b.text(e.slice(0, j) + a["char"]),
                    d.height() <= k ? (f = j) : (m = j - 1);
                e = e.slice(0, f);
                e += a["char"];
                b.text(e);
                b.prop("title", h);
              }
              a.callback.call(this);
            }
          });
          return this;
        };
        c.fn.hoverIntent = function (a, b) {
          var d,
            e,
            h,
            f,
            j = function (a) {
              d = a.pageX;
              e = a.pageY;
            },
            k = {
              sensitivity: 15,
              interval: 100,
              timeout: 150,
            },
            m = function (a, b) {
              b.hoverIntent_t = GH.Util.clrTimer(b.hoverIntent_t);
              if (Math.abs(h - d) + Math.abs(f - e) < k.sensitivity)
                return (
                  c(b).unbind("mousemove", j),
                  (b.hoverIntent_s = 1),
                  k.over.apply(b, [a])
                );
              h = d;
              f = e;
              b.hoverIntent_t = setTimeout(function () {
                m(a, b);
              }, k.interval);
            },
            l = function (a) {
              var b = jQuery.extend({}, a),
                d = this;
              d.hoverIntent_t &&
                (d.hoverIntent_t = GH.Util.clrTimer(d.hoverIntent_t));
              "mouseover" == a.type
                ? ((h = b.pageX),
                  (f = b.pageY),
                  c(d).bind("mousemove", j),
                  1 != d.hoverIntent_s &&
                    (d.hoverIntent_t = setTimeout(function () {
                      m(b, d);
                    }, k.interval)))
                : (c(d).unbind("mousemove", j),
                  1 == d.hoverIntent_s &&
                    (d.hoverIntent_t = setTimeout(function () {
                      d.hoverIntent_t = GH.Util.clrTimer(d.hoverIntent_t);
                      d.hoverIntent_s = 0;
                      k.out.apply(d, [b]);
                    }, k.timeout)));
            },
            k = c.extend(
              k,
              b
                ? {
                    over: a,
                    out: b,
                  }
                : a
            );
          return this.bind("mouseover", l)
            .bind("mouseout", l)
            .bind("focusin", function (a) {
              var b = jQuery.extend({}, a),
                c = this;
              k.addFocus &&
                setTimeout(function () {
                  k.over.apply(c, [b]);
                }, 50);
            });
        };
      },
    };
  });
})(GH.jQ);
GH.siteSpecific = {
  maprules: {
    regex: /ebay\.(\w{1,3})/g,
    qa: "qa.ebay.com",
    paradise: "$1.paradise.qa.ebay.com",
    latest: "latest.ebay.$1",
    greatest: "greatest.ebay.$1",
    sandbox: "sandbox.ebay.$1",
    xstage: "xstage.ebay.$1",
  },
  rtmFtrMap: {
    s: "main",
    e: "qa.",
  },
};
(function (a) {
  GH.add("Doodle", function () {
    return {
      init: function () {
        var b,
          c,
          d,
          e = a("#gh-ti");
        0 < a("#gh-doodleS").length &&
          ((b = a(window).width()),
          (c = a("body").hasClass("sz980")),
          (d = a("body").hasClass("sz1200")),
          GH.C.largeDoodle &&
          ((d && 1400 < b) || (c && 1200 < b) || (!c && !d && 1200 < b))
            ? (a(GH.componentID).prepend(
                '<b id=gh-doodleL style="display:block"><a _sp=m570.l2920 href="' +
                  a("#gh-doodleS").attr("href") +
                  '"><img src="' +
                  GH.C.largeDoodle +
                  '" border=0 alt="' +
                  (a("#gh-hsi").attr("alt") || "") +
                  '"></a></b>'
              ),
              GH.Util.cTImg(GH.ghiIMP + 19),
              e.remove())
            : e.removeClass("gh-hdn"));
      },
    };
  });
})(GH.jQ);
(function (b) {
  GH.add("TopBar", function () {
    var e = !1;
    return {
      addCSSShadow: function () {
        var c = GH.GHSW;
        ("undefined" !== typeof c && "true" === c.SEARCH_PROM) ||
          b("#gh-gb").addClass("gh-gb-shadow");
      },
      removeCSSShadow: function () {
        e && b("#gh-gb").removeClass("gh-gb-shadow");
      },
      init: function () {
        var c = document.body.style,
          f = window.getComputedStyle,
          d;
        b(GH.componentID).removeClass("gh-pre-js");
        var a = GH.GHSW,
          a = "undefined" !== typeof a && "true" === a.SEARCH_PROM;
        f &&
          c &&
          !a &&
          ((e = !0),
          (d = f(document.body)),
          (c.backgroundImage =
            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAKCAYAAAB10jRKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADBJREFUeNpEyqERADAIBMGbbwSH+qhA/6URXMyqBUhFBLIP6ip0ezk2zExqC58nwACVZwX67tO41gAAAABJRU5ErkJggg==')," +
            (d.backgroundImage || "")),
          (document.body.style.backgroundRepeat =
            "repeat-x," + (d.backgroundRepeat || "")),
          (document.body.style.backgroundPosition =
            "0 30px," + (d.backgroundPosition || "")));
        b("body").prepend(
          "<div id=gh-gb class=" +
            (a ? "gh-sch-prom" : "") +
            " tabindex='-1' " +
            ((!d && !a) || b("body.RTMPushdown").length
              ? "class='gh-gb-shadow'"
              : "") +
            "></div>"
        );
      },
    };
  });
})(GH.jQ);
(function (c) {
  GH.add("Flex", function () {
    var d;
    return {
      execute_immediately: function () {
        d = this;
        d.execute_on_load_or_resize();
      },
      execute_on_load_or_resize: function () {
        var e = c("body"),
          f = c(window);
        f.unbind("resize.gh", d.execute_on_load_or_resize);
        c(".gh-w").removeClass("gh-flex");
        e.removeClass(
          "gh-1199 gh-979 gh-939 gh-899 gh-799 gh-699 gh-599 gh-479 gh-flex"
        );
        e.addClass(function () {
          var b = c(".gh-w").width(),
            a = "";
          1200 > b && (a += "gh-1199");
          980 > b && (a += " gh-979");
          940 > b && (a += " gh-939");
          900 > b && (a += " gh-899");
          800 > b && (a += " gh-799");
          700 > b && (a += " gh-699");
          600 > b && (a += " gh-599");
          480 > b && (a += " gh-479");
          return a;
        });
        c(document).width() - f.width() <= (GH.isIE ? 20 : 0) &&
          e.addClass("gh-flex");
        setTimeout(function () {
          f.on("resize.gh", d.execute_on_load_or_resize);
        }, 60);
      },
    };
  });
})(GH.jQ);
(function (a) {
  GH.add("FooterBuyerProtection", function () {
    return {
      init: function () {
        a("#gf-bp").addClass("gf-bp-bg");
      },
    };
  });
})(GH.jQ);
ebayContent["GlobalHeaderWeb/FooterJavascriptContent"] = {
  mftrLinkURL: '<a href="http://www.m.ebay.com"></a>',
  mftrLinkURLUnified: '<a href="http://www.ebay.com"></a>',
};
(function (a) {
  GH.add("Accessibility", function () {
    return {
      init: function () {
        var c = a("h1:not(#gh-l-h1):first"),
          e = a("[name=mainContent]"),
          f = a("#mainContent");
        a("#gh-hdn-stm").click(function () {
          GH.Util.cTImg(GH.ghiIMP + 93);
        });
        !e.length &&
          !f.length &&
          (c.length
            ? c.before("<a tabindex='-1' id='mainContent'></a>")
            : a("#gh-hdn-stm").parent().remove());
        a(".gh-acc-exp-a").click(function () {
          var b = a(this).closest("li"),
            d = b.closest("li").attr("data-imp");
          GH.Dropdown.activate(b, d);
          a(this)
            .trigger("click.hideLink")
            .closest("li")
            .find(".gh-submenu a:first")
            .focus();
          return !1;
        });
        a(GH.componentID)
          .delegate(
            ".gh-submenu,.gh-sublayer, .gh-eb-o, #gh-sbc-o",
            "keydown",
            function (b) {
              if (27 == b.keyCode)
                return (
                  "gh-eb-My" == a(this).closest("li").attr("id")
                    ? a(this).closest(".gh-menu").find("a:first").focus()
                    : a(".gh-control[aria-controls='" + this.id + "']").focus(),
                  GH.Util.hideOverlays(),
                  !1
                );
            }
          )
          .delegate("a.gh-acc-a2", "focus", function () {
            GH.Util.hideOverlays();
          });
        a(document).on("mouseup.gh touchend.gh", function (b) {
          var d = !1,
            c = a("#gh-eb-u,.gh-dd,.gh-layer,#gh-shop");
          !c.is(b.target) && 0 === c.has(b.target).length && (d = !0);
          d && GH.Util.hideOverlays(!0);
        });
        a("#gh-eb-Alerts , #gh-shop,#gh-eb-u ").on(
          "keydown",
          ".gh-control",
          function (b) {
            if (13 == b.keyCode || 32 === b.keyCode)
              a(this).trigger("click", !0), b.preventDefault();
          }
        );
      },
    };
  });
})(GH.jQ);
(function (a) {
  GH.add("Footer", function () {
    var b,
      e = GH.GHSW;
    return {
      init: function () {
        b = this;
        document.implementation.hasFeature(
          "http://www.w3.org/TR/SVG11/feature#BasicStructure",
          "1.1"
        ) || a("#glbfooter").addClass("gf-nosvg");
        e.sandbox &&
          a(GH.componentID).prepend(
            '<img style="position:absolute;top:32px;left:40px" src="' +
              GH.pi +
              'globalHeader/imgSandbox.png">'
          );
        a("#gf-BIG a[_exsp]").bind("click", GH.Util.externalLinkTracking);
        !e.hideMobile &&
          GH.userAgent.match(
            /android.*mobile|bntv|blackberry|bb10|webos|iemobile|silk|cloud9|iphone/i
          ) &&
          !GH.userAgent.match(/kindle|Nexus 7|NOOK|BNTV/i) &&
          a.cachedScript(
            GH.Util.getSecURL(
              "https://ir.ebaystatic.com/cr/v/c01/mFtrLnk-min-v1.js",
              !0
            )
          );
        e.telDE &&
          (a("#gh-eb-contact a")
            .appendTo("body")
            .attr("id", "gh-ctab")
            .removeClass("gh-eb-li-a"),
          a("#gh-eb-contact").remove());
        a(".gf-flags-wpr").removeClass("gh-hvr");
        a("#gf-f-trans").remove();
        a("#gf-fbtn").bind("click mouseover", function (a) {
          b.showFlagsOverlay(a);
        });
        a("#gf-fbtn").bind("keydown", function (a) {
          32 == (a.keyCode ? a.keyCode : a.charCode) && b.showFlagsOverlay(a);
        });
        a("#gf-f").mouseover(function (a) {
          b.showFlagsOverlay(a);
        });
        a("#gf-fbtn, #gf-f").mouseout(function () {
          GH.flagTimeoutId = setTimeout(GH.Util.hideOverlays, 300);
        });
        a("#gf-fbtn-arr").addClass("gh-sprRetina");
        a("#gf-f").bind("keydown", function (c) {
          var f = c.keyCode ? c.keyCode : c.charCode,
            d = a("#gf-f a").get(),
            b = c.target;
          if (
            27 == f ||
            (9 == f && b == d[d.length - 1]) ||
            (9 == f && c.shiftKey && b == d[0])
          )
            a("#gf-fbtn").focus(), GH.Util.closeOverlay(a("#gf-fbtn"));
        });
        0 < navigator.userAgent.indexOf("Trident/4.0") &&
          a.getScript(GH.Util.getSecURL(GH.urls.ie8_js));
      },
      showFlagsOverlay: function (c) {
        var b = a("#gf-f"),
          d = a("#gf-f a"),
          e = "click" == c.type;
        GH.Util.clrTimer(GH.flagTimeoutId);
        a("#gf-BIG").mouseenter();
        e && b.is(":visible")
          ? GH.Util.hideOverlays()
          : (GH.Util.openOverlay(a("#gf-fbtn")),
            d && d.get(0) && d.get(0).focus());
        c.preventDefault();
      },
    };
  });
})(GH.jQ);
(function (a) {
  GH.add("Logo", function () {
    return {
      init: function () {
        !GH.GHSW.raptor &&
          GH.oldDT &&
          GH.isIE &&
          window.performance &&
          10 > ~~GH.Util.browser.version &&
          a("#gh-la").css("position", "static");
        a("#gh-l-h1").length && 1 < a("h1").length && a("#gh-la").unwrap();
      },
    };
  });
})(GH.jQ);
(function (a) {
  GH.add("ShopByCat", function () {
    var b,
      g = function () {
        return 0 < a("#gh-sbc-o li").length;
      },
      m;
    return {
      controlID: "#gh-shop-a",
      init: function () {
        b = this;
        b.assignControlClickHandler("#gh-shop");
        a(window).on("load.gh", function () {
          window.setTimeout(function () {
            g() || a("#gh-sbc-o").append(b.buildOverlayHTML()).addClass("gh-o");
          }, 1);
        });
        a("#gh-shop").hoverIntent({
          over: function () {},
          out: function () {
            GH.Util.closeOverlay(a(b.controlID));
            a("#gh-shop").removeClass("gh-shop-active");
          },
          sensitivity: 30,
          interval: 100,
          timeout: 150,
        });
        a("#gh-shop").bind("focusout", function (i) {
          100 < Date.now() - m &&
            !(0 < a(i.target).closest("#gh-shop").length) &&
            g() &&
            (GH.Util.toggleOverlay(a(b.controlID)),
            a("#gh-shop").toggleClass("gh-shop-active"));
        });
      },
      assignControlClickHandler: function (i) {
        a(i).click(function (i, h) {
          m = Date.now();
          (!g() || a("#gh-sbc-o").is(":hidden")) && GH.Util.hideOverlays();
          0 < a(i.target).closest("#gh-sbc-o").length ||
            (g()
              ? (GH.Util.toggleOverlay(a(b.controlID)),
                a("#gh-shop").toggleClass("gh-shop-active"),
                a("#gh-sbc-o").is(":hidden") ||
                  (GH.Util.cTImg(GH.ghiIMP + 34),
                  setTimeout(function () {
                    a("#gh-sbc-o a:first").focus();
                  }, 100),
                  h && a("#gh-sbc-o a:first").focus()))
              : (a("#gh-sbc-o").append(b.buildOverlayHTML()).addClass("gh-o"),
                GH.Util.cTImg(GH.ghiIMP + 34),
                GH.Util.openOverlay(a(b.controlID)),
                a("#gh-shop").addClass("gh-shop-active"),
                setTimeout(function () {
                  a("#gh-sbc-o a:first").focus();
                }, 100),
                h && a("#gh-sbc-o a:first").focus()),
            i.preventDefault());
        });
      },
      buildOverlayHTML: function () {
        var a = ['<table id="gh-sbc" role="presentation"><tbody><tr>'],
          b = 0,
          h,
          g = [];
        GH.getShopByCatData &&
          ((h = GH.getShopByCatData()),
          (g = GH.Util.addPrefixPoolURL(h.data)),
          (h = h.itemsPerColumn || 3));
        for (var n = 0, m = g.length; n < m; n++) {
          var k = g[n],
            c = k.parent,
            e = c.id,
            j = c.title || "",
            d = c.url || "javascript:;",
            l = c.txt,
            f = c.sp ? "_sp=" + c.sp : "",
            o = c.id ? "id=" + c.id : "";
          0 < d.indexOf("/sch/allcategories/all-categories") ||
            0 < d.indexOf("immo.ebay.be/fr/") ||
            (d = GH.Util.getHTTPSURL(d));
          if (
            e &&
            ("gh-shop-col-link" == e ||
              "gh-shop-see-all" == e ||
              "gh-shop-see-all-center" == e ||
              "gh-shop-by-brand" == e ||
              "gh-shop-by-sale" == e)
          )
            a.push(
              '<h3 class="gh-sbc-parent"><a title="' +
                j +
                '" href="' +
                d +
                '" ' +
                f +
                " " +
                o +
                ">" +
                l +
                '<i class="gh-sbc-h3i gh-sprRetina"></i></a></h3>'
            );
          else {
            0 == b % h &&
              ((e = "</td><td>"), 0 == b && (e = "<td>"), a.push(e));
            a.push(
              '<h3 class="gh-sbc-parent">' +
                (c.url
                  ? '<a title="' +
                    j +
                    '" href="' +
                    d +
                    '" ' +
                    f +
                    " " +
                    o +
                    ">" +
                    l +
                    '<i class="chevron-right"></i></a>'
                  : l) +
                "</h3>"
            );
            c = (k = k.children) ? k.length : 0;
            if (0 < c) {
              a.push("<ul>");
              for (j = 0; j < c; j++)
                (f = k[j]),
                  (d = f.url),
                  (l = f.txt),
                  (f = f.sp ? "_sp=" + f.sp : ""),
                  0 < d.indexOf("/sch/allcategories/all-categories") ||
                    0 < d.indexOf("immo.ebay.be/fr/") ||
                    (d = GH.Util.getHTTPSURL(d)),
                  a.push(
                    '<li><a class="scnd" href="' +
                      d +
                      '" ' +
                      f +
                      ">" +
                      l +
                      "</a></li>"
                  );
              a.push("</ul>");
            }
            b++;
          }
        }
        a.push("</td></tr></table>");
        return a.join("");
      },
    };
  });
})(GH.jQ);
GH.getShopByCatData = function () {
  return {
    itemsPerColumn: 3,
    data: [
      {
        parent: {
          sp: "m570.l3410",
          url: "https://www.ebay.com/b/Collectibles-Art/bn_7000259855",
          txt: "\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0442\u043e\u0432\u0430\u0440\u044b",
        },
        children: [
          {
            sp: "m570.l3638",
            url: "https://www.ebay.com/b/Collectibles/1/bn_1858810",
            txt: "\u0420\u0430\u0440\u0438\u0442\u0435\u0442\u044b",
          },
          {
            sp: "m570.l3637",
            url: "https://wwww.ebay.com/b/Coins-Paper-Money/11116/bn_1857806",
            txt: "\u041c\u043e\u043d\u0435\u0442\u044b \u0438 \u0431\u0430\u043d\u043a\u043d\u043e\u0442\u044b",
          },
          {
            sp: "m570.l45091",
            url: "https://www.ebay.com/b/Collectible-Postcards/914/bn_1865516",
            txt: "\u041e\u0442\u043a\u0440\u044b\u0442\u043a\u0438",
          },
          {
            sp: "m570.l3639",
            url: "https://www.ebay.com/b/Sports-Memorabilia-Fan-Shop-Sports-Cards/64482/bn_1857919",
            txt: "\u0421\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u044b\u0435 \u0441\u0443\u0432\u0435\u043d\u0438\u0440\u044b",
          },
        ],
      },
      {
        parent: {
          sp: "m570.l3413",
          url: "https://www.ebay.com/b/Electronics/bn_7000259124",
          txt: "\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u0438\u043a\u0430",
        },
        children: [
          {
            sp: "m570.l3653",
            url: "https://www.ebay.com/b/Computers-Tablets-Network-Hardware/58058/bn_1865247",
            txt: "\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u044b \u0438 \u043f\u043b\u0430\u043d\u0448\u0435\u0442\u044b",
          },
          {
            sp: "m570.l3654",
            url: "https://www.ebay.com/b/Cameras-Photo/625/bn_1865546",
            txt: "\u0412\u0438\u0434\u0435\u043e-\u0438 \u0444\u043e\u0442\u043e\u0442\u0435\u0445\u043d\u0438\u043a\u0430",
          },
          {
            sp: "m570.l3655",
            url: "https://www.ebay.com/b/TV-Video-Home-Audio-Electronics/32852/bn_1648392",
            txt: "\u0422\u0412, \u0430\u0443\u0434\u0438\u043e \u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f",
          },
          {
            sp: "m570.l3652",
            url: "https://www.ebay.com/b/Cell-Phones-Smart-Watches-Accessories/15032/bn_1865441",
            txt: "\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u044b \u0438 \u0430\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b",
          },
        ],
      },
      {
        parent: {
          sp: "m570.l3649",
          url: "https://www.ebay.com/b/Entertainment-Memorabilia/45100/bn_1859756",
          txt: "\u041c\u0438\u0440 \u043a\u0438\u043d\u043e, \u043c\u0443\u0437\u044b\u043a\u0438 \u0438 \u0432\u0438\u0434\u0435\u043e\u0438\u0433\u0440",
        },
        children: [
          {
            sp: "m570.l3275",
            url: "https://www.ebay.com/b/Video-Games-Consoles/1249/bn_1850232",
            txt: "\u0412\u0438\u0434\u0435\u043e\u0438\u0433\u0440\u044b \u0438 \u043f\u0440\u0438\u0441\u0442\u0430\u0432\u043a\u0438",
          },
          {
            sp: "m570.l45092",
            url: "https://www.ebay.com/b/Video-Game-Accessories/54968/bn_1642249",
            txt: "\u0410\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b \u0434\u043b\u044f \u043a\u043e\u043d\u0441\u043e\u043b\u0435\u0439",
          },
          {
            sp: "m570.l3771",
            url: "https://www.ebay.com/b/Original-Autographed-Music-Memorabilia/29860/bn_2311367",
            txt: "\u041c\u0443\u0437\u044b\u043a\u0430 \u0438 \u0430\u0432\u0442\u043e\u0433\u0440\u0430\u0444\u044b",
          },
          {
            sp: "m570.l4133",
            url: "https://www.ebay.com/b/Movie-Memorabilia/196/bn_1865243",
            txt: "\u041a\u0438\u043d\u043e \u0438 \u0441\u0443\u0432\u0435\u043d\u0438\u0440\u044b",
          },
        ],
      },
      {
        parent: {
          sp: "m570.l3409",
          url: "https://www.ebay.com/b/Fashion/bn_7000259856",
          txt: "\u041c\u043e\u0434\u0430",
        },
        children: [
          {
            sp: "m570.l3632",
            url: "https://www.ebay.com/b/Womens-Clothing/15724/bn_661783",
            txt: "\u0414\u043b\u044f \u0436\u0435\u043d\u0449\u0438\u043d",
          },
          {
            sp: "m570.l3633",
            url: "https://www.ebay.com/b/Mens-Clothing/1059/bn_696958",
            txt: "\u0414\u043b\u044f \u043c\u0443\u0436\u0447\u0438\u043d",
          },
          {
            sp: "m570.l3634",
            url: "https://www.ebay.com/b/Watches-Parts-Accessories/14324/bn_2408535",
            txt: "\u0427\u0430\u0441\u044b",
          },
          {
            sp: "m570.l3635",
            url: "https://www.ebay.com/b/Shoes/bn_7000259122",
            txt: "\u041e\u0431\u0443\u0432\u044c",
          },
        ],
      },
      {
        parent: {
          sp: "m570.l3412",
          url: "https://www.ebay.com/b/Home-Garden/11700/bn_1853126",
          txt: "\u0414\u043e\u043c \u0438 \u0441\u0430\u0434",
        },
        children: [
          {
            sp: "m570.l3646",
            url: "https://www.ebay.com/b/Yard-Garden-Outdoor-Living-Items/159912/bn_1853607",
            txt: "\u0414\u0432\u043e\u0440, \u0441\u0430\u0434, \u043e\u0442\u0434\u044b\u0445",
          },
          {
            sp: "m570.l3647",
            url: "https://www.ebay.com/b/Art-Craft-Supplies/14339/bn_1851051",
            txt: "\u0420\u0443\u043a\u043e\u0434\u0435\u043b\u0438\u0435",
          },
          {
            sp: "m570.l4131",
            url: "https://www.ebay.com/b/Home-Improvement/159907/bn_1851980",
            txt: "\u041e\u0431\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0434\u043e\u043c\u0430",
          },
          {
            sp: "m570.l3773",
            url: "https://www.ebay.com/b/Pet-Supplies/1281/bn_1853597",
            txt: "\u0422\u043e\u0432\u0430\u0440\u044b \u0434\u043b\u044f \u0436\u0438\u0432\u043e\u0442\u043d\u044b\u0445",
          },
        ],
      },
      {
        parent: {
          sp: "m570.l45093",
          url: "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2050601.m570.l1313.TR0.TRC0.A0.H1.X\u0437\u0430\u043f\u0447\u0430\u0441\u0442\u0438.TRS3&_nkw=\u0437\u0430\u043f\u0447\u0430\u0441\u0442\u0438&_sacat=0",
          txt: "\u0410\u0432\u0442\u043e\u0437\u0430\u043f\u0447\u0430\u0442\u0438 \u0438 \u0430\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b",
        },
        children: [
          {
            sp: "m570.l45094",
            url: "https://www.ebay.com/b/Car-GPS-Units/156955/bn_887051",
            txt: "GPS-\u043d\u0430\u0432\u0438\u0433\u0430\u0442\u043e\u0440\u044b",
          },
          {
            sp: "m570.l45095",
            url: "https://www.ebay.com/b/Car-Radar-Laser-Detectors/14935/bn_887006",
            txt: "\u0412\u0438\u0434\u0435\u043e\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u044b",
          },
          {
            sp: "m570.l45096",
            url: "https://www.ebay.com/b/Automotive-Care-Detailing/179448/bn_1880904",
            txt: "\u0427\u0438\u0441\u0442\u043a\u0430 \u0438 \u0443\u0445\u043e\u0434",
          },
          {
            sp: "m570.l45097",
            url: "https://www.ebay.com/b/Scooter-Parts-Accessories/84149/bn_16582008",
            txt: "\u0417\u0430\u043f\u0447\u0430\u0441\u0442\u0438 \u0434\u043b\u044f \u0441\u043a\u0443\u0442\u0435\u0440\u043e\u0432",
          },
        ],
      },
      {
        parent: {
          sp: "m570.l3414",
          url: "https://www.ebay.com/b/Sporting-Goods/888/bn_1865031",
          txt: "\u0421\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u044b\u0435 \u0442\u043e\u0432\u0430\u0440\u044b",
        },
        children: [
          {
            sp: "m570.l3648",
            url: "https://www.ebay.com/b/Outdoor-Sports/159043/bn_1855398",
            txt: "\u0421\u043f\u043e\u0440\u0442 \u043d\u0430 \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u043c \u0432\u043e\u0437\u0434\u0443\u0445\u0435",
          },
          {
            sp: "m570.l4135",
            url: "https://www.ebay.com/b/Team-Sports/159049/bn_1865097",
            txt: "\u041a\u043e\u043c\u0430\u043d\u0434\u043d\u044b\u0435 \u0432\u0438\u0434\u044b \u0441\u043f\u043e\u0440\u0442\u0430",
          },
          {
            sp: "m570.l3650",
            url: "https://www.ebay.com/b/Fitness-Running-Yoga-Equipment/15273/bn_1855426",
            txt: "\u0411\u0435\u0433, \u0439\u043e\u0433\u0430, \u0444\u0438\u0442\u043d\u0435\u0441",
          },
          {
            sp: "m570.l45098",
            url: "https://www.ebay.com/b/Tennis-Racquet-Sports/159134/bn_1865461",
            txt: "\u0422\u0435\u043d\u043d\u0438\u0441",
          },
        ],
      },
      {
        parent: {
          sp: "m570.l3645",
          url: "https://www.ebay.com/b/Toys-Hobbies/220/bn_1865497",
          txt: "\u0418\u0433\u0440\u0443\u0448\u043a\u0438 \u0438 \u0445\u043e\u0431\u0431\u0438",
        },
        children: [
          {
            sp: "m570.l1615",
            url: "https://www.ebay.com/b/Action-Figures/246/bn_1648288",
            txt: "\u042d\u043a\u0448\u043d-\u0444\u0438\u0433\u0443\u0440\u043a\u0438",
          },
          {
            sp: "m570.l45099",
            url: "https://www.ebay.com/b/Building-Toys/183446/bn_1865257",
            txt: "\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440",
          },
          {
            sp: "m570.l45100",
            url: "https://www.ebay.com/b/RC-Model-Vehicles-Toys-Control-Line/2562/bn_1851704",
            txt: "\u0420\u0430\u0434\u0438\u043e\u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435 \u0438\u0433\u0440\u0443\u0448\u043a\u0438",
          },
          {
            sp: "m570.l4186",
            url: "https://www.ebay.com/b/Dolls-Teddy-Bears/237/bn_1865477",
            txt: "\u041a\u0443\u043a\u043b\u044b \u0438 \u043c\u0438\u0448\u043a\u0438",
          },
        ],
      },
      {
        parent: {
          sp: "m570.l3416",
          url: "https://www.ebay.com/n/all-categories",
          txt: "\u0434\u0440\u0443\u0433\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",
        },
        children: [
          {
            sp: "m570.l45101",
            url: "https://www.ebay.com/b/Kids-Clothing-Shoes-Accessories/171146/bn_1642843",
            txt: "\u0422\u043e\u0432\u0430\u0440\u044b \u0434\u043b\u044f \u0434\u0435\u0442\u0435\u0439",
          },
          {
            sp: "m570.l3420",
            url: "https://www.ebay.com/b/Beauty/bn_7000259123",
            txt: "\u041f\u0430\u0440\u0444\u044e\u043c\u0435\u0440\u0438\u044f \u0438 \u043a\u043e\u0441\u043c\u0435\u0442\u0438\u043a\u0430",
          },
          {
            sp: "m570.l45102",
            url: "https://www.ebay.com/b/Office-Supplies/58271/bn_2314014",
            txt: "\u0422\u043e\u0432\u0430\u0440\u044b \u0434\u043b\u044f \u043e\u0444\u0438\u0441\u0430",
          },
          {
            sp: "m570.l3772",
            url: "https://www.ebay.com/b/Musical-Instruments-Gear/619/bn_1865601",
            txt: "\u041c\u0443\u0437\u044b\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0438 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435",
          },
        ],
      },
      {
        parent: {
          id: "gh-shop-see-all",
          sp: "m570.l3601",
          url: "https://www.ebay.com/n/all-categories",
          txt: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",
        },
        children: [],
      },
    ],
  };
};
(function (a) {
  GH.add("SearchBox", function () {
    var b;
    return {
      controlID: "#gh-ac",
      formID: "#gh-f",
      btnID: "#gh-btn",
      outerBoxID: "#gh-ac-box",
      innerBoxID: "#gh-ac-box2",
      setFocus: function () {
        a(b.controlID).focus();
      },
      init: function () {
        b = this;
        0 === a(b.formID + " input[name='_from']").length &&
          a(b.formID).append("<input type=hidden name='_from' value='R40'>");
        a(b.formID + "input[name=_trksid]").val(GH.Util.cTId("1313"));
        GH.isIE &&
          (8 > GH.docMode || 7 == GH.Util.browser.version) &&
          a(GH.ghAC_id).bind("keyup", function () {
            20 < a(this).attr("value").length &&
              (a(GH.ghAC_id).css(
                "width",
                a(GH.ghAC_id + "-box2").width() - 25 + "px"
              ),
              a(this).unbind("keyup"));
          });
        a(b.controlID)
          .focus(function () {
            a(GH.componentID).addClass("gh-sch-focus");
            GH.Util.hideOverlays();
          })
          .blur(function () {
            0 === a(b.controlID).val().length &&
              (a(GH.ghAC_id + "-box").removeClass("gh-ac-box-focus"),
              a(GH.componentID).removeClass("gh-sch-focus"));
          });
        a(b.formID).bind("submit", function () {
          a(b.formID + " input[type=hidden][name=_sacat]").val(0);
          GH.Util.cTImg(GH.ghiIMP + "31");
        });
      },
    };
  });
})(GH.jQ);
(function (a) {
  GH.add("CategorySelect", function () {
    var b;
    return {
      controlID: "#gh-cat",
      init: function () {
        var c = this;
        b = this;
        a(b.controlID).length &&
          (a(b.controlID).bind("blur", function () {
            GH.acPrevCatID = a(b.controlID).val();
            GH.isSelectOptionsBoxShown = !1;
          }),
          a(b.controlID).on("click keypress", function (a) {
            if (13 == a.which || "click" == a.type)
              GH.isSelectOptionsBoxShown = !0;
            c.selectCat();
          }),
          a(b.controlID)
            .focus(function () {
              a("#gh-cat-box").addClass("gh-cat-box-focus");
            })
            .blur(function () {
              a("#gh-cat-box").removeClass("gh-cat-box-focus");
            }),
          1 < a(b.controlID + " option").length ||
            (c.buildCatSelect(),
            (~~GH.C.catId ||
              ~~GH.C.selectedCatId ||
              GH.userAgent.match(/iPad/i)) &&
              a(GH.SearchBox.formID).mouseenter()));
      },
      selectCat: function () {
        document.getElementById("gh-cat");
        GH.Events.publish("stores", {
          formID: "gh-f",
          dropDownID: "gh-cat",
        });
        GH.Events.subscribe("stores", function (a) {
          return a;
        });
      },
      buildCatSelect: function () {
        var c,
          f,
          d,
          g = [],
          e = b.controlID,
          h = GH.C.selectedCatId || GH.C.catId || 0;
        if (typeof GH.getCategories == GH.functionStr) {
          c = GH.getCategories();
          f = c.length;
          if (
            4340 == GH.C.pageId ||
            2047675 == GH.C.pageId ||
            2332490 == GH.C.pageId
          )
            h = 0;
          if (2 > a(e + " option").length) {
            for (d = 0; d < f; d++)
              g.push(
                "<option value='" +
                  c[d].i +
                  "'" +
                  (c[d].i == h ? " selected" : "") +
                  ">" +
                  c[d].v +
                  "</option>"
              );
            a(e).html(a(e).html() + g.join(""));
          }
          GH.isIE && 8 > GH.docMode && a(e).css("position", "static");
          GH.acPrevCatID = a(e).val();
        }
      },
    };
  });
})(GH.jQ);
GH.getCategories = function () {
  return [
    {
      i: 20081,
      v: "\u0410\u043d\u0442\u0438\u043a\u0432\u0430\u0440\u0438\u0430\u0442",
    },
    {
      i: 12576,
      v: "\u0411\u0438\u0437\u043d\u0435\u0441 \u0438 \u043f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u044c",
    },
    {
      i: 1305,
      v: "\u0411\u0438\u043b\u0435\u0442\u044b",
    },
    {
      i: 293,
      v: "\u0411\u044b\u0442\u043e\u0432\u0430\u044f \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u0430\u043f\u043f\u0430\u0440\u0430\u0442\u0443\u0440\u0430",
    },
    {
      i: 1249,
      v: "\u0412\u0438\u0434\u0435\u043e\u0438\u0433\u0440\u044b \u0438 \u043f\u0440\u0438\u0441\u0442\u0430\u0432\u043a\u0438",
    },
    {
      i: 11232,
      v: "DVD \u0438 \u0444\u0438\u043b\u044c\u043c\u044b",
    },
    {
      i: 2984,
      v: "\u0414\u0435\u0442\u0441\u043a\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u044b",
    },
    {
      i: 6e3,
      v: "\u0414\u043b\u044f \u0430\u0432\u0442\u043e\u043b\u044e\u0431\u0438\u0442\u0435\u043b\u0435\u0439",
    },
    {
      i: 26395,
      v: "\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435 \u0438 \u043a\u0440\u0430\u0441\u043e\u0442\u0430",
    },
    {
      i: 220,
      v: "\u0418\u0433\u0440\u0443\u0448\u043a\u0438 \u0438 \u0443\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f",
    },
    {
      i: 870,
      v: "\u0418\u0437\u0434\u0435\u043b\u0438\u044f \u0438\u0437 \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0438 \u0438 \u0441\u0442\u0435\u043a\u043b\u0430",
    },
    {
      i: 550,
      v: "\u0418\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u043e",
    },
    {
      i: 267,
      v: "\u041a\u043d\u0438\u0433\u0438",
    },
    {
      i: 58058,
      v: "\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u044b/\u043f\u043b\u0430\u043d\u0448\u0435\u0442\u043d\u044b\u0435 \u041f\u041a \u0438 \u0441\u0435\u0442\u0438",
    },
    {
      i: 237,
      v: "\u041a\u0443\u043a\u043b\u044b \u0438 \u043c\u044f\u0433\u043a\u0438\u0435 \u0438\u0433\u0440\u0443\u0448\u043a\u0438",
    },
    {
      i: 260,
      v: "\u041c\u0430\u0440\u043a\u0438",
    },
    {
      i: 11116,
      v: "\u041c\u043e\u043d\u0435\u0442\u044b \u0438 \u0431\u0430\u043d\u043a\u043d\u043e\u0442\u044b",
    },
    {
      i: 11233,
      v: "\u041c\u0443\u0437\u044b\u043a\u0430",
    },
    {
      i: 619,
      v: "\u041c\u0443\u0437\u044b\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0438 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435",
    },
    {
      i: 10542,
      v: "\u041d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u044c",
    },
    {
      i: 11450,
      v: "\u041e\u0434\u0435\u0436\u0434\u0430,  \u043e\u0431\u0443\u0432\u044c \u0438 \u0430\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b",
    },
    {
      i: 172008,
      v: "\u041f\u043e\u0434\u0430\u0440\u043e\u0447\u043d\u044b\u0435 \u043a\u0430\u0440\u0442\u044b \u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b",
    },
    {
      i: 1,
      v: "\u041f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",
    },
    {
      i: 99,
      v: "\u0420\u0430\u0437\u043d\u043e\u0435",
    },
    {
      i: 45100,
      v: "\u0420\u0435\u043b\u0438\u043a\u0432\u0438\u0438 \u0438 \u0441\u0443\u0432\u0435\u043d\u0438\u0440\u044b",
    },
    {
      i: 15032,
      v: "\u0421\u043e\u0442\u043e\u0432\u044b\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u044b \u0438 \u0430\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b",
    },
    {
      i: 316,
      v: "\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0443\u0441\u043b\u0443\u0433\u0438",
    },
    {
      i: 64482,
      v: "\u0421\u043f\u043e\u0440\u0442. \u0441\u0443\u0432\u0435\u043d\u0438\u0440\u044b \u0438 \u0442\u043e\u0432. \u0434\u043b\u044f \u0431\u043e\u043b\u0435\u043b\u044c\u0449\u0438\u043a\u043e\u0432",
    },
    {
      i: 382,
      v: "\u0421\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u044b\u0435 \u0442\u043e\u0432\u0430\u0440\u044b",
    },
    {
      i: 11700,
      v: "\u0422\u043e\u0432\u0430\u0440\u044b \u0434\u043b\u044f \u0434\u043e\u043c\u0430 \u0438 \u0441\u0430\u0434\u0430",
    },
    {
      i: 3252,
      v: "\u0422\u043e\u0432\u0430\u0440\u044b \u0434\u043b\u044f \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0439",
    },
    {
      i: 14339,
      v: "\u0422\u043e\u0432\u0430\u0440\u044b \u0434\u043b\u044f \u0440\u0443\u043a\u043e\u0434\u0435\u043b\u0438\u044f",
    },
    {
      i: 1281,
      v: "\u0422\u043e\u0432\u0430\u0440\u044b \u0434\u043b\u044f \u0443\u0445\u043e\u0434\u0430 \u0437\u0430 \u0434\u043e\u043c\u0430\u0448\u043d\u0438\u043c\u0438 \u0436\u0438\u0432\u043e\u0442\u043d\u044b\u043c\u0438",
    },
    {
      i: 625,
      v: "\u0424\u043e\u0442\u043e\u0430\u043f\u043f\u0430\u0440\u0430\u0442\u044b \u0438 \u0432\u0438\u0434\u0435\u043e\u043a\u0430\u043c\u0435\u0440\u044b",
    },
    {
      i: 281,
      v: "\u042e\u0432\u0435\u043b\u0438\u0440\u043d\u044b\u0435 \u0443\u043a\u0440\u0430\u0448\u0435\u043d\u0438\u044f \u0438 \u0447\u0430\u0441\u044b",
    },
  ];
};
ebayContent["GlobalHeaderWeb/GreetingsJavascriptContent"] = {
  greetingDefault:
    '\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435! <a href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&amp;ru=ru" _sp="m570.l1524">\u0412\u043e\u0439\u0434\u0438\u0442\u0435</a>\u00a0<span>\u0438\u043b\u0438 <a href="https://signup.ebay.com/pa/crte?ru=ru2" _sp="m570.l2621">\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c</a></span>',
  greetingRecognized:
    '\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, <b>${username}</b> (<a href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&amp;ru=ru" _sp="m570.l2620">\u0412\u043e\u0439\u0434\u0438\u0442\u0435</a>)',
  greetingAuthenticated:
    "\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, <b>${username}</b>!",
  greetingOverlaySignout:
    '<a href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&amp;lgout=1" _sp="m570.l2622">\u0412\u044b\u0445\u043e\u0434</a>',
  profile_mycollections:
    '<a href="http://www.ebay.com/cln/_mycollections">\u041c\u043e\u0438 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438</a>',
  profile_accountsettings:
    '<a href="https://accountsettings.ebay.com/uas">\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0443\u0447\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438</a>',
  profile_myworld: '<a href="https://www.ebay.com/usr/@@">@#@</a>',
  profile_feedback:
    '<a title="\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043e\u0442\u0437\u044b\u0432\u043e\u0432" href="https://www.ebay.com/fdbk/feedback_profile/@@"></a>',
  profile_loginUserL10n:
    '<a href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&amp;ru=ru">\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443</a>, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u0432\u043e\u0438 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435',
  profile_userAltTxt:
    "\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u0432 \u043f\u0440\u043e\u0444\u0438\u043b\u0435 - ",
  rating_1:
    "\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043e\u0442\u0437\u044b\u0432\u043e\u0432 \u043e\u0442 10 \u0434\u043e 49 \u043e\u0447\u043a\u043e\u0432 \u043e\u0442\u043c\u0435\u0447\u0430\u0435\u0442\u0441\u044f \u0436\u0435\u043b\u0442\u043e\u0439 \u0437\u0432\u0435\u0437\u0434\u043e\u0447\u043a\u043e\u0439",
  rating_2:
    "\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043e\u0442\u0437\u044b\u0432\u043e\u0432 \u043e\u0442 50 \u0434\u043e 99 \u043e\u0447\u043a\u043e\u0432 \u043e\u0442\u043c\u0435\u0447\u0430\u0435\u0442\u0441\u044f \u0433\u043e\u043b\u0443\u0431\u043e\u0439 \u0437\u0432\u0435\u0437\u0434\u043e\u0447\u043a\u043e\u0439",
  rating_3:
    "\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043e\u0442\u0437\u044b\u0432\u043e\u0432 \u043e\u0442 100 \u0434\u043e 499 \u043e\u0447\u043a\u043e\u0432 \u043e\u0442\u043c\u0435\u0447\u0430\u0435\u0442\u0441\u044f \u0431\u0438\u0440\u044e\u0437\u043e\u0432\u043e\u0439 \u0437\u0432\u0435\u0437\u0434\u043e\u0447\u043a\u043e\u0439",
  rating_4:
    "\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043e\u0442\u0437\u044b\u0432\u043e\u0432 \u043e\u0442 500 \u0434\u043e 999 \u043e\u0447\u043a\u043e\u0432 \u043e\u0442\u043c\u0435\u0447\u0430\u0435\u0442\u0441\u044f \u0444\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u043e\u0439 \u0437\u0432\u0435\u0437\u0434\u043e\u0447\u043a\u043e\u0439",
  rating_5:
    "\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043e\u0442\u0437\u044b\u0432\u043e\u0432 \u043e\u0442 1 000 \u0434\u043e 4 999 \u043e\u0447\u043a\u043e\u0432 \u043e\u0442\u043c\u0435\u0447\u0430\u0435\u0442\u0441\u044f \u043a\u0440\u0430\u0441\u043d\u043e\u0439 \u0437\u0432\u0435\u0437\u0434\u043e\u0447\u043a\u043e\u0439",
  rating_6:
    "\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043e\u0442\u0437\u044b\u0432\u043e\u0432 \u043e\u0442 5 000 \u0434\u043e 9 999 \u043e\u0447\u043a\u043e\u0432 \u043e\u0442\u043c\u0435\u0447\u0430\u0435\u0442\u0441\u044f \u0437\u0435\u043b\u0435\u043d\u043e\u0439 \u0437\u0432\u0435\u0437\u0434\u043e\u0447\u043a\u043e\u0439",
  rating_7:
    "\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043e\u0442\u0437\u044b\u0432\u043e\u0432 \u043e\u0442 10 000 \u0434\u043e 24 999 \u043e\u0447\u043a\u043e\u0432 \u043e\u0442\u043c\u0435\u0447\u0430\u0435\u0442\u0441\u044f \u0436\u0435\u043b\u0442\u043e\u0439 \u043c\u0435\u0440\u0446\u0430\u044e\u0449\u0435\u0439 \u0437\u0432\u0435\u0437\u0434\u043e\u0447\u043a\u043e\u0439",
  rating_8:
    "\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043e\u0442\u0437\u044b\u0432\u043e\u0432 \u043e\u0442 25 000 \u0434\u043e 24 999 \u043e\u0447\u043a\u043e\u0432 \u043e\u0442\u043c\u0435\u0447\u0430\u0435\u0442\u0441\u044f \u0431\u0438\u0440\u044e\u0437\u043e\u0432\u043e\u0439 \u043c\u0435\u0440\u0446\u0430\u044e\u0449\u0435\u0439 \u0437\u0432\u0435\u0437\u0434\u043e\u0447\u043a\u043e\u0439",
  rating_9:
    "\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043e\u0442\u0437\u044b\u0432\u043e\u0432 \u043e\u0442 50 000 \u0434\u043e 99 999 \u043e\u0447\u043a\u043e\u0432 \u043e\u0442\u043c\u0435\u0447\u0430\u0435\u0442\u0441\u044f \u0444\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u043e\u0439 \u043c\u0435\u0440\u0446\u0430\u044e\u0449\u0435\u0439 \u0437\u0432\u0435\u0437\u0434\u043e\u0447\u043a\u043e\u0439",
  rating_10:
    "\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043e\u0442\u0437\u044b\u0432\u043e\u0432 \u043e\u0442 100 000 \u0434\u043e 499 999 \u043e\u0447\u043a\u043e\u0432 \u043e\u0442\u043c\u0435\u0447\u0430\u0435\u0442\u0441\u044f \u043a\u0440\u0430\u0441\u043d\u043e\u0439 \u043c\u0435\u0440\u0446\u0430\u044e\u0449\u0435\u0439 \u0437\u0432\u0435\u0437\u0434\u043e\u0447\u043a\u043e\u0439",
  rating_11:
    "\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043e\u0442\u0437\u044b\u0432\u043e\u0432 \u043e\u0442 500 000 \u0434\u043e 999 999 \u043e\u0447\u043a\u043e\u0432 \u043e\u0442\u043c\u0435\u0447\u0430\u0435\u0442\u0441\u044f \u0437\u0435\u043b\u0435\u043d\u043e\u0439 \u043c\u0435\u0440\u0446\u0430\u044e\u0449\u0435\u0439 \u0437\u0432\u0435\u0437\u0434\u043e\u0447\u043a\u043e\u0439",
  rating_12:
    "\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043e\u0442\u0437\u044b\u0432\u043e\u0432 \u043e\u0442 1 000 000 \u043e\u0447\u043a\u043e\u0432 \u0438 \u0432\u044b\u0448\u0435 \u043e\u0442\u043c\u0435\u0447\u0430\u0435\u0442\u0441\u044f \u0441\u0435\u0440\u0435\u0431\u0440\u0438\u0441\u0442\u043e\u0439 \u043c\u0435\u0440\u0446\u0430\u044e\u0449\u0435\u0439 \u0437\u0432\u0435\u0437\u0434\u043e\u0447\u043a\u043e\u0439",
  profile_memberAltTxt: "\u041b\u043e\u0433\u0438\u043d",
  profile_feedbackscore:
    '<a href="http://my.ebay.com/ws/eBayISAPI.dll?GetGHNotificationsCommand&amp;ghud=1"></a>',
  profile_feedbackscore_new:
    '<a href="http://gha.ebay.com/nproxy/notification/v1/getMinProfile"></a>',
  feedbackTitle:
    "\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043e\u0442\u0437\u044b\u0432\u043e\u0432 ${feedback}",
};
ebayContent["GlobalHeaderWeb/HiddenFromL10NTeamContent"] = {};
(function (b) {
  GH.add("Greeting", function () {
    var m = b.extend(
        GH.Util.getBundle("GreetingsJavascriptContent"),
        GH.Util.getBundle("HiddenFromL10NTeamContent")
      ),
      n = GH.undefinedStr;
    return {
      init: function () {
        var e = this,
          a,
          c,
          d = m.greetingDefault,
          f,
          g,
          i,
          j,
          h = GH.vCJar,
          d = d.replace("<span", '<span id="gh-ug-flex"');
        a = decodeURIComponent(
          GH.C.id || escape(GH.Util.base64decode(h.readCookie("dp1", "u1p")))
        );
        c = GH.C.fn || h.readCookieObj("dp1", "u1f").value;
        try {
          c = decodeURI(c);
        } catch (l) {}
        try {
          c = decodeURIComponent(c);
        } catch (k) {
          c = decodeURIComponent(unescape(c));
        }
        c = c.replace(/\+/g, " ");
        typeof c !== n && 0 <= c.indexOf("?") && (c = null);
        var p = GH.C.sin,
          o =
            "undefined" !== typeof window.supressUserGreeting &&
            window.supressUserGreeting;
        !(0 === GH.C.sin && GH.C.id) &&
          typeof a !== n &&
          "" !== a &&
          0 > a.indexOf("@@__@@__@@") &&
          ((d = m.greetingRecognized),
          (GH.userRecog = !0),
          (GH.userID = a),
          (GH.userFN = c),
          GH.C.cgi || GH.C["static"]
            ? (f = h.readCookie("dp1", "pcid"))
              ? ((g = i = decodeURIComponent(h.readCookie("cid"))),
                (j = g.indexOf("#")),
                (-1 === j && 8 < g.length) ||
                  (-1 !== j && (i = g.substring(j + 1, g.length)),
                  i === f &&
                    (b(window).on("load.gh", function () {
                      h.writeCookie("cid", g, 365);
                    }),
                    (GH.userAuth = !0))))
              : (GH.userAuth = !0)
            : 1 === GH.C.sin && (GH.userAuth = !0),
          GH.userAuth && (d = m.greetingAuthenticated),
          !GH.userAuth &&
            "function" === typeof h.getBitFlag &&
            1 == h.getBitFlag(h.readCookie("dp1", "pbf"), 98) &&
            ((GH.userRecog = !1), (d = m.greetingDefault)),
          (a = 77 == GH.C.siteId ? a || c : c || a),
          13 < a.length && (a = a.substring(0, 12) + "..."),
          (d =
            !o || (o && 1 === p)
              ? GH.Util.mergeContent(d, {
                  username: GH.Util.eZ(a),
                })
              : GH.Util.mergeContent(d, {
                  username: "",
                })));
        d = d
          .replace(/ru=ru2/g, "ru=" + GH.Util.addRU())
          .replace(/&amp;ru=ru/g, "&ru=" + GH.Util.addRU());
        GH.userAuth
          ? (b("#gh-eb-u").html(
              '<button id=gh-ug class="gh-ua gh-control" aria-expanded=false aria-controls=gh-eb-u-o role=button>' +
                d +
                '<b class="gh-eb-arw gh-sprRetina"></b></button><div id="gh-eb-u-o" data-view-state="empty" style="display: none;"></div>'
            ),
            b("#gh-ug").click(function (a, c) {
              var d = b("#gh-eb-u").data("mo"),
                f = b("#gh-eb-u").data("t"),
                g = new Date().getTime();
              b("#gh-eb-u").removeData("mo");
              if (d || !(f && 400 > g - f))
                if (
                  (a.preventDefault(),
                  b("#gh-eb-u-o").length &&
                    "empty" === b("#gh-eb-u-o").attr("data-view-state"))
                )
                  b("#gh-eb-u-o").remove(),
                    GH.Util.createOverlay("u", 0, c),
                    b("#gh-eb-u-o").data("ghi", 41),
                    GH.Util.openOverlay(b("#gh-ug")),
                    b("#gh-eb-u").addClass("gh-eb-active"),
                    GH.alerts.collectData && GH.Util.cTImg(GH.ghiIMP + 79),
                    (ajaxURL =
                      "/gh/user_profile?modules=USER_PROFILE&behavior=GET_PROFILE&moduleType=USER_PROFILE"),
                    "HttpClient" in window &&
                      ((d = new window.HttpClient(
                        ajaxURL,
                        "GET",
                        {
                          correlation:
                            window.trkCorrelationSessionInfo &&
                            "function" ===
                              typeof window.trkCorrelationSessionInfo
                                .getTrackingCorrelationSessionInfo &&
                            window.trkCorrelationSessionInfo.getTrackingCorrelationSessionInfo(),
                        },
                        null,
                        {
                          shouldRetry: !0,
                          timeout: 1e4,
                        }
                      )),
                      d.handlers({
                        onload: function (a) {
                          if (
                            a instanceof ProgressEvent &&
                            ((a = a.target || a.currentTarget),
                            a instanceof XMLHttpRequest)
                          )
                            try {
                              var b = JSON.parse(a.responseText),
                                d = e.parseResponse(b);
                              e.buildGreetingOverlay_nproxy(d, !1, c);
                            } catch (f) {}
                        },
                        onerror: function () {
                          e.buildGreetingOverlay_nproxy({}, !0, c);
                        },
                      }),
                      d.initializeAndTrigger());
                else
                  e[
                    b("#gh-eb-u-o").is(":hidden")
                      ? "showUserOverlay"
                      : "hideUserOverlay"
                  ](c);
            }),
            b("#gh-eb-u").hoverIntent({
              over: function () {
                b("#gh-eb-u-o").is(":visible") ||
                  (b("#gh-eb-u").data({
                    mo: 1,
                    t: new Date().getTime(),
                  }),
                  b("#gh-ug").click());
              },
              out: function () {
                e.hideUserOverlay();
              },
              timeout: "500",
            }))
          : b("#gh-eb-u").html(
              "<span id=gh-ug class=gh-ug-guest>" + d + "</span>"
            );
        b("#gh-topl").show();
      },
      parseResponse: function (b) {
        var a =
            (b &&
              b.content &&
              b.content.response &&
              b.content.response.modules &&
              b.content.response.modules.USER_PROFILE) ||
            {},
          c = {};
        c.d =
          (a &&
            a.userId &&
            a.userId.textSpans &&
            a.userId.textSpans[0] &&
            a.userId.textSpans[0].text) ||
          "";
        c.p = (a && a.image && a.image.URL) || "";
        c.r =
          (a &&
            a.feedbackRating &&
            a.feedbackRating.textSpans &&
            a.feedbackRating.textSpans[1] &&
            a.feedbackRating.textSpans[1].text) ||
          "";
        c.u =
          (a &&
            a.fullName &&
            a.fullName.textSpans &&
            a.fullName.textSpans[0] &&
            a.fullName.textSpans[0].text) ||
          "";
        b &&
          b.error &&
          "auth_required" === b.error &&
          (c.error = "auth_required");
        return c;
      },
      nproxy_ajax: function (e) {
        var a = this,
          c = GH.Util.getSecURL(
            GH.Util.getHref(
              GH.GHSW.newprofile || GH.GHSW.desktop_new_profile_service
                ? m.profile_feedbackscore_new
                : m.profile_feedbackscore
            )
          );
        b.ajax(c, {
          dataType: "jsonp",
          jsonpCallback: "GH_alertData",
          timeout: 4e3,
          success: function (b) {
            a.buildGreetingOverlay_nproxy(b, !1, e);
          },
          error: function () {
            a.buildGreetingOverlay_nproxy({}, !0, e);
          },
        });
      },
      showUserOverlay: function (e) {
        var a = b("#gh-eb-u-o").data("ghi");
        GH.Util.hideOverlays();
        GH.Util.openOverlay(b("#gh-ug"));
        b("#gh-eb-u").addClass("gh-eb-active");
        e && b("#gh-ui a:first").focus();
        a && GH.Util.cTImg(GH.ghiIMP + a);
      },
      hideUserOverlay: function () {
        GH.Util.closeOverlay(b("#gh-ug"));
        b("#gh-eb-u").removeClass("gh-eb-active");
      },
      buildGreetingOverlay_nproxy: function (e, a, c) {
        var d = GH.Util.getBundle("GreetingsJavascriptContent"),
          f,
          g = b("#gh-eb-u-o"),
          i = 12,
          j,
          h,
          l = GH.userID,
          k = GH.userFN;
        typeof e === n && GH.userAuth && (e = {});
        (typeof e === n && !a) || (e && e.error && "auth_required" === e.error)
          ? ((f =
              "<div class=gh-o-err><span class=gh-o-errb>" +
              d.profile_loginUserL10n.replace(
                /&amp;ru=ru/g,
                "&ru=" + GH.Util.addRU()
              ) +
              "</span></div>"),
            g.data("ghi", 40),
            g.html(f))
          : ((j = e.r || 0),
            b.each(
              [10, 50, 100, 500, 1e3, 5e3, 1e4, 25e3, 5e4, 1e5, 5e5, 1e6],
              function (a, b) {
                if (j < b) return (i = a), !1;
              }
            ),
            (f = e.p
              ? e.p.replace(/http:.*pics\//, GH.pi)
              : GH.pi + "social/profile_avatar_60x60.png"),
            (h = 77 == GH.C.siteId ? l || k : k || l),
            (f =
              "<ul id=gh-uu><li id=gh-up><a aria-hidden=true tabindex=-1 _sp=m570.l3331 href='" +
              GH.Util.getHref(d.profile_myworld).replace("@@", e.d || l) +
              "'><img id=gh-upi src='" +
              f +
              "' alt='" +
              d.profile_userAltTxt +
              h +
              "'></a></li>"),
            (f +=
              "<li id=gh-un>" + (e.u || k || "&nbsp;") + "</li><li id=gh-ui>"),
            (k = d.profile_myworld.replace(
              '@@"',
              (e.d || l) + '"_sp=m570.l3332 id="gh-uid"'
            )),
            (k = k.replace(
              "@#@",
              l + "<i class=gh-ar-hdn>" + d.profile_memberAltTxt + "</i> "
            )),
            (f +=
              k +
              (!a && GH.userAuth && "undefined" !== typeof e.r
                ? " (" +
                  d.profile_feedback.replace('@@"', '"_sp=m570.l3333') +
                  ")"
                : "") +
              "</li>"),
            (f +=
              "<li id=gh-uac>" +
              d.profile_accountsettings.replace(
                "href=",
                "_sp=m570.l3399 href="
              ) +
              "</li><li id=gh-uo>" +
              (GH.userAuth
                ? d.greetingOverlaySignout
                : d.greetingRecognized
                    .replace(/.*(<a.*a>).*/, "$1")
                    .replace(/&amp;ru=ru/g, "&ru=" + GH.Util.addRU())) +
              "</li></ul>"),
            g.data("ghi", a ? 41 : 39),
            a && g.addClass("gh-eb-o-err"),
            g.html(f),
            c &&
              setTimeout(function () {
                b("#gh-ui a:first").focus();
              }, 50),
            (f = b("#gh-uu a[_sp='m570.l3333']").html(
              j +
                "<span class='gh-ar-hdn'>" +
                GH.Util.mergeContent(d.feedbackTitle, {
                  feedback: "",
                }) +
                "</span>" +
                (0 < i
                  ? "<i id=gh-ur role=img style='background-position:" +
                    -[-3, 16, 35, 54, 73, 92, 113, 135, 157, 179, 201, 224][
                      i - 1
                    ] +
                    "px " +
                    (7 > i ? "-1px; margin:0 -4px 0 -2px;" : "-2px;") +
                    "' />"
                  : "")
            )),
            b("#gh-ur").attr("aria-label", d["rating_" + i]),
            f.attr("href", f.attr("href") + (e.d || l)),
            f.removeAttr("title"));
        GH.Util.cTImg(GH.ghiIMP + g.data("ghi"));
      },
    };
  });
})(GH.jQ);
(function () {
  function b(b, a) {
    var a = a || {
        bubbles: !1,
        cancelable: !1,
        detail: null,
      },
      c = document.createEvent("CustomEvent");
    c.initCustomEvent(b, a.bubbles, a.cancelable, a.detail);
    return c;
  }
  if ("function" === typeof window.CustomEvent) return !1;
  b.prototype = window.Event.prototype;
  window.CustomEvent = b;
})();
(function (a) {
  function c() {
    k.focus();
  }
  function e() {
    l.focus();
  }
  var d = a('<div tabindex="0" class="keyboard-trap-boundary">'),
    f = a('<div tabindex="0" class="keyboard-trap-boundary">'),
    g = a('<div tabindex="0" class="keyboard-trap-boundary">'),
    h = a('<div tabindex="0" class="keyboard-trap-boundary">'),
    i = a('<div tabindex="0" class="keyboard-trap-boundary">'),
    j = a('<div tabindex="0" class="keyboard-trap-boundary">'),
    b,
    k,
    l;
  d.on("focus", c);
  f.on("focus", c);
  g.on("focus", e);
  h.on("focus", c);
  i.on("focus", e);
  j.on("focus", e);
  a.trapKeyboard = function (c) {
    a.untrapKeyboard();
    b = a(c);
    c = b.focusable();
    k = c.first();
    l = c.last();
    a("body").prepend(d);
    f.insertBefore(b);
    b.prepend(g);
    b.append(h);
    i.insertAfter(b);
    a("body").append(j);
    b.addClass("keyboard-trap--active");
    b.trigger("keyboardTrap");
    return b;
  };
  a.untrapKeyboard = function () {
    void 0 !== b &&
      (d.detach(),
      f.detach(),
      g.detach(),
      h.detach(),
      i.detach(),
      j.detach(),
      b.off("focusExit"),
      b.removeClass("keyboard-trap--active"),
      b.trigger("keyboardUntrap"));
    return b;
  };
})(jQuery, window, document);
(function (a) {
  var c = {
    findNegativeTabindex: !0,
    findPositiveTabindex: !0,
  };
  a.fn.focusable = function (e) {
    var d = a.extend({}, c, e);
    return a(this)
      .first()
      .find(
        "a[href],button:not([disabled]),area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),iframe,object,embed,*[tabindex],*[contenteditable]"
      )
      .filter(function () {
        return d.findNegativeTabindex || "-1" !== a(this).attr("tabindex");
      })
      .filter(function () {
        return d.findPositiveTabindex || !1 === 0 < a(this).attr("tabindex");
      });
  };
})(jQuery, window, document);
(function (b) {
  var d, a, e;
  b.trapScreenreader = function (c) {
    d = b("main, [role=main]");
    b.untrapScreenreader();
    d.attr("role", "presentation");
    a = b(c);
    var c = a.siblings(":not(script, [aria-hidden=true])"),
      f = a.parents(":not(html, body)"),
      g = a
        .parents(":not(html, body)")
        .siblings(":not(script, [aria-hidden=true])");
    a.attr("aria-hidden", "false");
    c.attr("aria-hidden", "true");
    f.attr("aria-hidden", "false");
    g.attr("aria-hidden", "true");
    e = a.add(c).add(f).add(g);
    a.trigger("screenreaderTrap");
  };
  b.untrapScreenreader = function () {
    a &&
      (e.removeAttr("aria-hidden"),
      a.trigger("screenreaderUntrap"),
      d.attr("role", "main"),
      (a = null));
  };
})(jQuery, window, document);
(function () {
  window.GHUserAcquisitionAjaxHandler = function () {
    this.getAjaxContent = function (h, d, b, a, c, e) {
      var f = this,
        g = e || 5,
        i = 0;
      "HttpClient" in window
        ? ((e = new window.HttpClient(
            h,
            "GET",
            {
              correlation:
                window.trkCorrelationSessionInfo &&
                "function" ===
                  typeof window.trkCorrelationSessionInfo
                    .getTrackingCorrelationSessionInfo &&
                window.trkCorrelationSessionInfo.getTrackingCorrelationSessionInfo(),
            },
            null,
            {
              shouldRetry: a,
              timeout: c,
            }
          )),
          e.handlers({
            onload: function (a) {
              if (
                a instanceof ProgressEvent &&
                ((a = a.target || a.currentTarget), a instanceof XMLHttpRequest)
              )
                try {
                  var b = JSON.parse(a.responseText);
                  d(b);
                } catch (c) {}
            },
            onerror: function (a) {
              b(a);
            },
            ontimeout: function (a) {
              b(a);
            },
          }),
          e.initializeAndTrigger())
        : i < g &&
          setTimeout(function () {
            i++;
            f.getAjaxContent.call(f, h, d, b, a, c, g);
          }, 200 * i);
    };
    this.parseInlineResources = function (h, d) {
      var b = "",
        a = "";
      window.widget_platform_renderedComponents = d;
      var c = h.querySelectorAll("script");
      if (c && 0 < c.length) {
        for (var e = c.length, f = 0; f < e; f++) {
          var g = c[f];
          "nb_script" === g.id
            ? (b += " ; " + g.innerHTML)
            : (a += " ; " + g.innerHTML);
        }
        b = document.createTextNode(b + a);
        a = document.createElement("script");
        a.type = "text/javascript";
        a.appendChild(b);
        document.body.appendChild(a);
      }
      "function" === typeof window.markoInitForOnDemand
        ? window.markoInitForOnDemand(d)
        : "function" === typeof window.markoInitComponents &&
          window.markoInitComponents(d);
    };
  };
})();
(function (c) {
  var d = document;
  GH.add("GHModal", function () {
    return {
      init: function (a) {
        "undefined" !== typeof a &&
          (this.initValues(a),
          this.initDependentComponents(),
          this.addDomEvents(),
          this.addCustomEvents());
      },
      initValues: function (a) {
        this.isTrapped = this.fetchingContent = this.modalContentLoaded = !1;
        this.layerOpenTime = null;
        this.ajaxURL = a.ajaxURL;
        this.maxTimeOut = a.fetchMaxTimeOut;
        this.modalTitleId = a.modalTitleId;
        this.triggerId = a.clickTriggerId;
        this.maskId = this.triggerId + "-mask";
        this.bodyCntId = this.triggerId + "-body-cnt";
        this.bodyId = this.triggerId + "-body";
        this.modalId = this.triggerId + "-modal";
        this.triggerElement = d.getElementById(this.triggerId);
        this.buttonElement = this.triggerElement.querySelector("button");
        this.modalBodyCntElement = d.getElementById(this.bodyCntId);
        this.modalElement = d.getElementById(this.modalId);
        this.modalBodyElement = d.getElementById(this.bodyId);
        this.modalMaskElement = d.getElementById(this.maskId);
        this.acquisitionAjaxHandler = window.GHUserAcquisitionAjaxHandler
          ? new window.GHUserAcquisitionAjaxHandler()
          : {};
      },
      initDependentComponents: function () {
        "function" === typeof GHThrobber &&
          (this.throbberInstance = new GHThrobber(this.bodyId));
        "function" === typeof GHMessage &&
          (this.messageInstance = new GHMessage(this.bodyId));
      },
      addDomEvents: function () {
        this.buttonElement.addEventListener(
          "click",
          this.modalOpenHandler.bind(this),
          !1
        );
        this.buttonElement.addEventListener(
          "keydown",
          this.modalOpenHandler.bind(this),
          !1
        );
        this.modalMaskElement.addEventListener(
          "click",
          this.modalCloseHandler.bind(this),
          !1
        );
      },
      addCustomEvents: function () {
        var a = this;
        document.addEventListener(
          "GH_MODAL_CLOSE",
          function (b) {
            a.closeModal(b);
          },
          !1
        );
      },
      modalOpenHandler: function (a) {
        var b = c(this.modalElement);
        this.isValidClickOrKeyDown(a) &&
          (this.getEventTarget(a).id === this.maskId
            ? this.hideModal()
            : ((this.layerOpenTime = Date.now()),
              this.showModalContent(),
              b.attr("role", "dialog"),
              this.stopDefaultEventPropagation(a)));
      },
      modalCloseHandler: function (a) {
        this.isValidClickOrKeyDown(a) && this.closeModal(a);
        this.modalPostCloseOperations();
      },
      closeModal: function (a) {
        this.hideModalContent();
        c(this.triggerElement).find(".gh-icon").focus();
        this.unTrapKeyBoardAndScreenReader();
        this.stopDefaultEventPropagation(a);
      },
      modalPostCloseOperations: function () {
        d.dispatchEvent(this.createCustomEvent("GH_MODAL_CLOSE_MSG", {}));
        this.addCloseTracking();
      },
      addCloseTracking: function () {
        if (!this.modalContentLoaded) {
          var a = {
              eventFamily: "GBHEADER",
              eventAction: "ACTN",
              actionKind: "HIDEDIALOG",
              flushImmediately: !1,
              eventProperty: {
                moduledtl:
                  "mi:45019|iid:1|li:46732|uxcg:SHIP_TO_LOCATION|dur:" +
                  (Date.now() - this.layerOpenTime),
              },
            },
            a = [
              a,
              {
                actionKind: a.actionKind,
              },
            ];
          c(document).trigger("pulsar", a);
        }
      },
      showOrHideThrobber: function (a) {
        a
          ? (this.showOrHideContent(!1),
            this.showOrHideErrorMsg(!1),
            this.throbberInstance.showThrobber(),
            this.throbberInstance.setFocusThrobberStatus())
          : this.throbberInstance.hideThrobber();
      },
      showOrHideErrorMsg: function (a) {
        a
          ? (this.showOrHideThrobber(!1),
            c(this.modalElement).attr(
              "aria-labelledby",
              this.bodyId + "-status"
            ),
            this.messageInstance.showMessage())
          : (c(this.modalElement).attr("aria-labelledby", this.modalTitleId),
            this.messageInstance.hideMessage());
      },
      showOrHideContent: function (a) {
        var b = c(this.modalBodyElement).find(this.bodyCntId);
        a ? b.show() : b.hide();
      },
      showModal: function (a) {
        var b = this.getEventTarget(a);
        this.stopDefaultEventPropagation(a);
        b.id === this.maskId ? this.hideModal() : this.showModalContent();
      },
      showModalContent: function () {
        c(this.triggerElement).addClass("gh-modal-active");
        this.modalContentLoaded
          ? (this.showOrHideThrobber(!1),
            this.setContentFocus(),
            this.trapKeyBoardAndScreenReader(),
            d.dispatchEvent(
              this.createCustomEvent("GH_MODAL_OPEN", {
                moduleId: "GH_SHIPTO",
                showTimer: this.layerOpenTime,
              })
            ))
          : (this.showOrHideThrobber(!0), this.getModalContent());
      },
      hideModal: function (a) {
        var b = this;
        clearTimeout(this.hideTimeOut);
        if (a && "keydown" == a.type) {
          if (13 !== a.keyCode && 32 !== a.keyCode) return;
          b.unTrapKeyBoardAndScreenReader();
        }
        this.hideTimeOut = setTimeout(function () {
          b.hideModalContent();
        }, 150);
      },
      hideModalContent: function () {
        c(this.triggerElement).removeClass("gh-modal-active");
        this.showOrHideContent(!1);
        this.showOrHideErrorMsg(!1);
      },
      successHandler: function (a) {
        this.showOrHideThrobber(!1);
        "object" !== typeof a || "undefined" === typeof a.html
          ? this.errorHandler()
          : ((this.modalContentLoaded = !0),
            (this.fetchingContent = !1),
            (this.modalBodyCntElement.innerHTML = a.html),
            this.acquisitionAjaxHandler.parseInlineResources(
              this.modalBodyCntElement,
              a.renderedComponents
            ),
            this.showOrHideContent(!0),
            d.dispatchEvent(
              this.createCustomEvent("GH_MODAL_CONTENT_PAINTED", {
                moduleId: "GH_SHIPTO",
                showTimer: this.layerOpenTime,
              })
            ),
            this.setContentFocus(),
            this.trapKeyBoardAndScreenReader());
      },
      errorHandler: function () {
        this.showOrHideErrorMsg(!0);
        this.trapKeyBoardAndScreenReader();
        this.fetchingContent = this.modalContentLoaded = !1;
      },
      getModalContent: function () {
        this.fetchingContent = !0;
        this.acquisitionAjaxHandler.getAjaxContent(
          this.ajaxURL,
          this.successHandler.bind(this),
          this.errorHandler.bind(this),
          !1,
          this.maxTimeOut
        );
      },
      setContentFocus: function () {
        d.dispatchEvent(
          this.createCustomEvent("GH_MODAL_SET_DEFAULT_FOCUS", {
            wrapperId: this.bodyId,
          })
        );
      },
      trapKeyBoardAndScreenReader: function () {
        this.isTrapped && this.unTrapKeyBoardAndScreenReader();
        this.trapOrUntrapKeyBoardAndScreenReader(!0);
        this.isTrapped = !0;
      },
      unTrapKeyBoardAndScreenReader: function () {
        this.trapOrUntrapKeyBoardAndScreenReader(!1);
        this.isTrapped = !1;
      },
      trapOrUntrapKeyBoardAndScreenReader: function (a) {
        var b = c(this.modalElement);
        a
          ? (c.trapKeyboard(b), c.trapScreenreader(b))
          : (c.untrapKeyboard(b), c.untrapScreenreader(b));
      },
      createCustomEvent: function (a, b) {
        return new CustomEvent(a, {
          detail: b,
        });
      },
      getEventTarget: function (a) {
        var b;
        a.target ? (b = a.target) : a.srcElement && (b = a.srcElement);
        3 == b.nodeType && (b = b.parentNode);
        return b;
      },
      isValidClickOrKeyDown: function (a) {
        return a
          ? ("keydown" === a.type && (13 === a.keyCode || 32 === a.keyCode)) ||
              "click" === a.type
          : !1;
      },
      stopDefaultEventPropagation: function (a) {
        a && (a.stopPropagation(), a.preventDefault());
      },
    };
  });
})(GH.jQ);
(function () {
  function b(b, a) {
    var a = a || {
        bubbles: !1,
        cancelable: !1,
        detail: null,
      },
      c = document.createEvent("CustomEvent");
    c.initCustomEvent(b, a.bubbles, a.cancelable, a.detail);
    return c;
  }
  if ("function" === typeof window.CustomEvent) return !1;
  b.prototype = window.Event.prototype;
  window.CustomEvent = b;
})();
(function (c) {
  var d = document;
  GH.add("GHShipTo", function () {
    return {
      init: function (a) {
        "undefined" !== typeof a &&
          (this.isShipToEnabled(a)
            ? (this.initValues(a), this.addEvents())
            : c("#" + a.clickTriggerId).hide());
      },
      isShipToEnabled: function () {
        var a = null;
        GH &&
          GH.vCJar &&
          "function" === typeof GH.vCJar.readCookie &&
          (a = GH.vCJar.readCookie("dp1", "bl"));
        return a && "IN" === a ? !1 : !0;
      },
      initValues: function (a) {
        this.callProcessing = !1;
        this.preShiptoVal = null;
        this.triggerId = a.clickTriggerId;
        this.wrapperId = this.triggerId + "-body";
        this.bodyCntId = this.triggerId + "-body-cnt";
        this.modalBodyElement = d.getElementById(this.wrapperId);
        this.triggerElement = d.getElementById(this.triggerId);
      },
      addEvents: function () {
        this.addCustomEvents();
        this.addDomEvents();
      },
      addCustomEvents: function () {
        var a = this;
        d.addEventListener(
          "GH_SHIPTO_UPDATE_VALUE",
          function (b) {
            if (b && b.detail && b.detail.selectedAlpha2CountryCode) {
              var e = b.detail.selectedAlpha2CountryCode.toLowerCase();
              a.updateFlag(e);
              a.accessFlagLocalInLocalStorage(e);
              b.detail.countryName &&
                a.updateShipToAccessibility(
                  b.detail.countryName,
                  b.detail.shipTo || null
                );
            }
          },
          !1
        );
        d.addEventListener(
          "GH_MODAL_SET_DEFAULT_FOCUS",
          function (b) {
            a.isValidDetail(b) && a.setDefaultFocus();
          },
          !1
        );
      },
      updateShipToAccessibility: function (a, b) {
        var e =
            b ||
            document.querySelector(".gh-eb-li-a,.gh-icon").children[1]
              .textContent ||
            "",
          c = document.querySelector(".gh-eb-li-a,.gh-icon");
        c && c.setAttribute("aria-label", e + " " + a);
      },
      addDomEvents: function () {
        var a = this;
        c(window).on("load", function () {
          a.updateFlag(a.accessFlagLocalInLocalStorage());
        });
      },
      updateFlag: function (a) {
        if (a && (!this.preShiptoVal || this.preShiptoVal != a)) {
          var b = c(this.triggerElement).find(".gh-icon i");
          b && (b[0].className = "flgspr gh-flag-bg fla" + a);
          this.preShiptoVal = a;
        }
      },
      accessFlagLocalInLocalStorage: function (a) {
        var b = window.localStorage;
        try {
          if (b)
            if (a) b.setItem("GH_SHIP_TO_COUNTRY", a);
            else return b.getItem("GH_SHIP_TO_COUNTRY");
        } catch (c) {}
      },
      setDefaultFocus: function () {
        var a = c("#" + this.wrapperId),
          b = a.find(".shipto__country-list button");
        0 < b.length ? b.focus() : a.find("button")[0].focus();
      },
      isValidDetail: function (a) {
        return a &&
          a.detail &&
          a.detail.wrapperId &&
          a.detail.wrapperId === this.wrapperId
          ? !0
          : !1;
      },
      createCustomEvent: function (a, b) {
        return new CustomEvent(a, {
          detail: b,
        });
      },
    };
  });
})(GH.jQ);
(function () {
  function b(b, a) {
    var a = a || {
        bubbles: !1,
        cancelable: !1,
        detail: null,
      },
      c = document.createEvent("CustomEvent");
    c.initCustomEvent(b, a.bubbles, a.cancelable, a.detail);
    return c;
  }
  if ("function" === typeof window.CustomEvent) return !1;
  b.prototype = window.Event.prototype;
  window.CustomEvent = b;
})();
(function (a) {
  window.GHThrobber = function (b) {
    this.init = function () {
      this.wrapperElement = a("#" + b);
    };
    this.showThrobber = function () {
      this.wrapperElement.find(".gh-throbber").css("display", "flex");
    };
    this.hideThrobber = function () {
      this.wrapperElement.find(".gh-throbber").hide();
    };
    this.setFocusThrobberStatus = function () {
      this.wrapperElement.find(".gh-throbber .gh-state").focus();
    };
    this.init();
    return this;
  };
})(GH.jQ);
(function () {
  function b(b, a) {
    var a = a || {
        bubbles: !1,
        cancelable: !1,
        detail: null,
      },
      c = document.createEvent("CustomEvent");
    c.initCustomEvent(b, a.bubbles, a.cancelable, a.detail);
    return c;
  }
  if ("function" === typeof window.CustomEvent) return !1;
  b.prototype = window.Event.prototype;
  window.CustomEvent = b;
})();
(function (c) {
  window.GHMessage = function (a) {
    var b = document;
    this.init = function () {
      this.initValues();
      this.attachDOMEvents();
    };
    this.initValues = function () {
      this.wrapperElement = c("#" + a);
      this.exitElement = b.getElementById(a + "-status-exit");
    };
    this.attachDOMEvents = function () {
      this.exitElement &&
        this.exitElement.addEventListener(
          "click",
          this.broadcastExitMessage.bind(this),
          !1
        );
    };
    this.broadcastExitMessage = function () {
      b.dispatchEvent(new CustomEvent("GH_MODAL_CLOSE", {}));
    };
    this.showMessage = function () {
      var a = this.wrapperElement;
      a.find(".gh-status").css("display", "flex");
      a.find(".gh-status .status_cnt").focus();
    };
    this.hideMessage = function () {
      this.wrapperElement.find(".gh-status").hide();
    };
    this.init();
    return this;
  };
})(GH.jQ);
(function (b) {
  GH.add("Geo", function () {
    var f = GH.Util.getBundle("GEOLanguageToggleJavascriptContent"),
      g = GH.Util;
    return {
      init: function () {
        if ("undefined" !== typeof JSON) {
          var a,
            c = GH.vCJar;
          if (
            !c ||
            !b("#gh-eb").length ||
            !GH.C.langs ||
            !GH.C.geoLang ||
            !(GH.C.geoLang || []).length ||
            !(a = c.readCookie("dp1", "bl") || GH.C.geoul)
          )
            b("#gh-eb-Geo").remove();
          else {
            GH.Util.geo = !0;
            a && 2 < a.length && (a = a.substring(2));
            if (a && (2 == a.length || (GH.C.lng && a != GH.C.lng)))
              a = GH.C.lng ? GH.C.lng : "en-US";
            if ("en-US" == a) {
              var d = b("#gh-eb-Geo-a-en .gh-eb-Geo-txt").html(),
                e = b("#gh-eb-Geo-a-default .gh-eb-Geo-txt").html();
              b("#gh-eb-Geo-a-en .gh-eb-Geo-txt").html(e);
              b("#gh-eb-Geo-a-default .gh-eb-Geo-txt").html(d);
            }
            b("#gh-eb-Geo-a-default .gh-eb-Geo-flag").html(function (a, c) {
              return c.replace(
                /-LANG-/,
                b("#gh-eb-Geo-a-default .gh-eb-Geo-txt").html()
              );
            });
            d = b.extend([], JSON.parse(GH.C.geoLang));
            d.splice(b.inArray(a, d), 1);
            b("#gh-eb-Geo-o ul >li").attr("lang", d[0]);
            b("#gh-eb-Geo-o ul >li").bind("click", GH.Geo.updateLang);
            b("#gh-eb-Geo").removeClass("gh-hdn");
            1 === c.getBitFlag(c.readCookie("dp1", "pbf"), 95) &&
              (GH.Geo.updateCookieBitFlag("dp1", "pbf", 0),
              GH.userAuth &&
              (!GH.C.suppressGeoUserUpdateInfo ||
                "false" === GH.C.suppressGeoUserUpdateInfo)
                ? b.getScript(
                    g.getSecURL(g.getHref(f.geoUpdateUserInfoCmdUrl)) +
                      "&cb=GH.Geo.initMsgOverlay"
                  )
                : GH.Geo.initMsgOverlay());
          }
        }
      },
      hideMsgOverlay: function () {
        b("#gh-msgOverlay").ghide();
      },
      disableOverlay: function () {
        GH.Geo.hideMsgOverlay();
        GH.Geo.updateCookieBitFlag("dp1", "pbf", 0);
      },
      updateLang: function (a) {
        var c = GH.vCJar.readCookie("dp1", "bl").substr(0, 2),
          a = b(a.currentTarget).attr("lang");
        c &&
          a &&
          (GH.vCJar.writeCookielet("dp1", "bl", c + a),
          GH.Geo.updateCookieBitFlag("dp1", "pbf", 1));
        setTimeout(function () {
          window.location.reload();
        }, 0);
      },
      createFlag: function (a) {
        return "<span class='gh-eb-Geo-" + a + "'></span>";
      },
      updateCookieBitFlag: function (a, b, d) {
        var e = GH.vCJar,
          f = e.readCookie(a, b);
        f && e.writeCookielet(a, b, e.setBitFlag(f, 95, d), "", "");
      },
      positionOverlay: function (a, c) {
        var d = b("#gh-eb"),
          e = d.position();
        e &&
          b(".gh-myOverlay").css({
            top: e.top + d[0].offsetHeight + (c || 10) + "px",
            left: e.left + (a || 9) + "px",
          });
      },
      initMsgOverlay: function (a) {
        a =
          GH.userAuth && a
            ? "Success" === a.status
              ? f.geoLangPref
              : f.geoDbErr
            : f.geoSignedOut;
        a += "<br/>" + f.geoLearnMoreUrl;
        b("#gh-top").append(
          "<div id=gh-msgOverlay class='gh-o gh-myOverlay'><div class=gh-ovPointer></div><div class='gh-ovClose'></div><div class=gh-ovContent>" +
            a +
            "</div></div>"
        );
        b(".gh-ovClose").bind("click", GH.Geo.disableOverlay);
        b("#gh-msgOverlay").mouseover(function () {
          "" !== GH.geoTimeoutId && g.clrTimer(GH.geoTimeoutId);
        });
        b("#gh-msgOverlay").mouseout(function () {
          GH.geoTimeoutId = setTimeout(GH.Geo.disableOverlay, 4e3);
        });
        GH.Geo.positionOverlay(9, 10);
        setTimeout(GH.Geo.positionOverlay, 150);
        setTimeout(GH.Geo.positionOverlay, 750);
        setTimeout(GH.Geo.positionOverlay, 1500);
        b("#gh-msgOverlay").gshow();
        GH.geoTimeoutId = setTimeout(GH.Geo.disableOverlay, 4e3);
      },
    };
  });
})(GH.jQ);
(function (b) {
  GH.add("Dropdown", function () {
    var g,
      h = GH.ghEBActive_id;
    return {
      init: function () {
        g = this;
        b("#gh-eb").length &&
          b(".gh-dd").each(function () {
            var c = this,
              a = b(c),
              d = a.find(".gh-submenu"),
              e = a.find(".gh-control");
            a.attr("id");
            var f = a.attr("data-imp"),
              j,
              k = a.position().left,
              l = b("#gh-eb").outerWidth() + 10;
            a.removeClass("gh-hvr");
            GH.Util.isTouchDevice() && !a.hasClass("gh-dd-click")
              ? a.bind("click", function (i) {
                  i.preventDefault();
                  if (d.is(":visible")) {
                    if ((i = b(i.target).attr("href")))
                      a.removeClass(h),
                        GH.Util.closeOverlay(e),
                        (document.location = i);
                  } else g.activate(c, f);
                })
              : a.hoverIntent({
                  over: function () {
                    b(".gh-479").length || g.activate(c, f);
                  },
                  out: function () {
                    a.removeClass(h);
                    GH.Util.closeOverlay(e);
                  },
                  timeout: 150,
                  addFocus: !1,
                });
            a.hasClass("gh-dd-click") &&
              a.click(function () {
                var b = a.find(".gh-submenu");
                b.is(":hidden") || "hidden" == b.css("visibility")
                  ? (g.activate(c, f), d.find("a").focus())
                  : (a.removeClass(h), GH.Util.closeOverlay(e));
              });
            a.closest("#gh-eb").length &&
              ((j = d.outerWidth()),
              k + j > l &&
                d.css({
                  right: "0px",
                  left: "auto",
                }));
          });
      },
      activate: function (c, a) {
        var d = b(c).find(".gh-submenu"),
          e = b(c).find(".gh-control"),
          f;
        if (d.is(":hidden") || "hidden" == d.css("visibility"))
          GH.Util.openOverlay(e),
            (f = d.parents("li").get(0).id) && e.trigger(f + "-opened");
        b(c).addClass(h);
        document.addEventListener("keydown", function (a) {
          var d = c.classList.toString().indexOf("gh-eb-active"),
            e = document.querySelector(".gh-submenu");
          27 === a.keyCode &&
            -1 !== d &&
            ((e.style.display = "none"), b(c).removeClass("gh-eb-active"));
        });
        "undefined" !== typeof a && GH.Util.cTImg(GH.ghiIMP + a);
      },
    };
  });
})(GH.jQ);
ebayContent["GlobalHeaderWeb/GEOLanguageToggleJavascriptContent"] = {
  geoLangPref:
    "\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a \u0431\u044b\u043b \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d \u0432 \u044f\u0437\u044b\u043a\u043e\u0432\u044b\u0445 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445. \u041d\u0435 \u0432\u0441\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0431\u0443\u0434\u0443\u0442 \u043f\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u043d\u044b.",
  geoDbErr:
    "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u044f\u0437\u044b\u043a\u043e\u0432\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0434\u043d\u0435\u0435. \u041d\u0435 \u0432\u0441\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0431\u0443\u0434\u0443\u0442 \u043f\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u043d\u044b.",
  geoSignedOut:
    "\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0431\u0443\u0434\u0443\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u043f\u043e\u0441\u043b\u0435 \u0432\u0445\u043e\u0434\u0430 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443. \u041d\u0435 \u0432\u0441\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0431\u0443\u0434\u0443\u0442 \u043f\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u043d\u044b.",
  geoLearnMoreUrl:
    '<a href="https://pages.ebay.com/ru/ru-ru/help/buy/language.html">\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435</a>',
  geoUpdateUserInfoCmdUrl:
    '<a href="http://my.ebay.com/ws/eBayISAPI.dll?UpdateUserInfo"></a>',
};
(function (e) {
  window.GHFlyout = function (j, f, k) {
    var g = document;
    this.init = function () {
      this.isClick = !1;
      this.ajaxURL = j;
      "" !== f && (this.isClick = !0);
      var a = (this.triggerId = this.isClick ? f : k);
      this.isWatchList = "gh-wl-click" === f;
      this.isMiniCart = isMiniCart = "gh-minicart-hover" === this.triggerId;
      if (!isMiniCart || !this.detectTouchscreen())
        (this.triggerElement = g.getElementById(this.triggerId)),
          (this.keyboardTriggerElement =
            this.triggerElement.getElementsByClassName("gh-acc-exp-a")),
          this.isClick &&
            (this.triggerElement =
              (this.clickTrigger = this.triggerElement) &&
              this.triggerElement.getElementsByClassName("gh-eb-li-a")[0]),
          0 < this.keyboardTriggerElement.length &&
            (this.keyboardTriggerElement = this.keyboardTriggerElement[0]),
          (this.ghEyebrowBarElement = document.getElementById("gh-top")),
          (this.flyoutContent = null),
          (this.maskId = a + "-mask"),
          a &&
            ((this.flyoutElement = g.getElementById(a + "-flyout")),
            (this.flyoutMaskElement = this.addMaskLayer(this.maskId)),
            (this.flyoutCloseElement = g.getElementById(a + "-close")),
            (this.flyoutBodyElement = g.getElementById(a + "-body"))),
          (this.hidefn = this.hideFlyout.bind(this)),
          (this.showfn = this.showFlyout.bind(this)),
          (this.renderType = isMiniCart ? "minicart" : "rvi"),
          this.isMiniCart && e(this.flyoutElement).attr("aria-modal", "true"),
          this.addEvents();
    };
    this.addEvents = function () {
      this.flyoutCloseElement.addEventListener(
        "click",
        this.hideFlyoutClick.bind(this),
        !1
      );
      this.flyoutCloseElement.addEventListener(
        "keydown",
        this.hideFlyout.bind(this),
        !1
      );
      this.keyboardTriggerElement &&
        (this.keyboardTriggerElement.addEventListener(
          "click",
          this.keyboardEventHandler.bind(this),
          !1
        ),
        this.keyboardTriggerElement.addEventListener(
          "keydown",
          this.keyboardEventHandler.bind(this),
          !1
        ));
      window.addEventListener("resize", this.positionFlyout.bind(this), !1);
      this.isClick
        ? this.triggerElement.addEventListener(
            "click",
            this.showFlyout.bind(this),
            !1
          )
        : this.isMiniCart &&
          this.triggerElement.addEventListener(
            "click",
            this.handleCartClick.bind(this),
            !1
          );
      this.addRemoveMouseEvents(!0);
    };
    this.handleCartClick = function (a) {
      this.flyoutElement.contains(a.target) ||
        (this.hidefn(), this.addRemoveMouseEvents(!1));
    };
    this.detectTouchscreen = function () {
      var a = !1;
      "ontouchstart" in window && (a = !0);
      return a;
    };
    this.addRemoveMouseEvents = function (a) {
      a
        ? (this.flyoutMaskElement.addEventListener(
            "mouseover",
            this.hidefn,
            !1
          ),
          this.triggerElement.addEventListener("mouseout", this.hidefn, !1),
          this.flyoutElement.addEventListener("mouseover", this.showfn, !1),
          this.flyoutElement.addEventListener("mouseout", this.hidefn, !1),
          this.isClick ||
            this.triggerElement.addEventListener("mouseover", this.showfn, !1))
        : (this.flyoutMaskElement.removeEventListener(
            "mouseover",
            this.hidefn,
            !1
          ),
          this.triggerElement.removeEventListener("mouseout", this.hidefn, !1),
          this.flyoutElement.removeEventListener("mouseover", this.showfn, !1),
          this.flyoutElement.removeEventListener("mouseout", this.hidefn, !1),
          this.isClick ||
            this.triggerElement.removeEventListener(
              "mouseover",
              this.showfn,
              !1
            ));
    };
    this.keyboardUserURL = function (a) {
      a && a.stopPropagation();
      if (!a || !(13 !== a.keyCode && 32 !== a.keyCode))
        (a =
          this.triggerElement &&
          this.triggerElement.getElementsByTagName("a")[0].href),
          (window.location.href = a);
    };
    this.showFlyout = function (a) {
      clearTimeout(this.hideTimeOut);
      var b = this,
        c =
          a.srcElement &&
          "string" === typeof a.srcElement.className &&
          -1 < a.srcElement.className.indexOf("gh-eb-li-a");
      if (
        this.isClick &&
        (a.preventDefault(),
        e(this.clickTrigger).hasClass("gh-flyout-active") && c)
      ) {
        this.hideFlyout();
        a && a.stopPropagation();
        return;
      }
      clearTimeout(this.showTimeOut);
      a.target.id === this.maskId
        ? (this.hideFlyout(), a && a.stopPropagation())
        : (this.showTimeOut = setTimeout(function () {
            if (b.ghEyebrowBarElement) {
              var c = b.ghEyebrowBarElement.getBoundingClientRect().bottom;
              b.flyoutMaskElement.style.top = c + "px";
            }
            b.loadStart = Date.now();
            b.showHideFlyout.call(b, !0, a);
          }, 150));
    };
    this.durationTimer = null;
    this.triggerShowHideTracking = function (a) {
      var b = a ? "data-show-track" : "data-hide-track",
        c = null;
      a
        ? (this.durationTimer = Date.now())
        : this.durationTimer &&
          ((c = Date.now() - this.durationTimer), (this.durationTimer = null));
      b =
        this.flyoutBodyElement &&
        this.flyoutBodyElement.getElementsByTagName("div") &&
        this.flyoutBodyElement.getElementsByTagName("div")[0] &&
        this.flyoutBodyElement.getElementsByTagName("div")[0]
          .firstElementChild &&
        this.flyoutBodyElement
          .getElementsByTagName("div")[0]
          .firstElementChild.getAttribute(b);
      if (c && b && !a) {
        b = b.replace("dur:", "dur:" + c);
        try {
          if (
            (b = JSON.parse(b)) &&
            b.eventProperty &&
            b.eventProperty.moduledtl
          )
            (b.eventProperty.moduledtl =
              b.eventProperty.moduledtl + "|loadDur:" + this.loadEndTimeStamp),
              (b = JSON.stringify(b));
        } catch (d) {
          console.debug("tracking data parse errored");
        }
      }
      if ("string" === typeof b)
        try {
          (b = JSON.parse(b)),
            b.actionKind &&
              (b = [
                b,
                {
                  actionKind: b.actionKind,
                },
              ]),
            e(document).trigger("pulsar", b);
        } catch (h) {}
    };
    this.showHideFlyout = function (a, b) {
      var c = e(this.triggerElement),
        d = c[0].classList.toString(),
        h = g.querySelectorAll(".gh-acc-exp-a");
      -1 !== d.indexOf("watchlist-menu") &&
        (a
          ? h[0] && h[0].setAttribute("tabindex", "-1")
          : h[0] && h[0].setAttribute("tabindex", ""));
      c = this.isClick ? e(this.clickTrigger) : c;
      d = c.hasClass("gh-flyout-active");
      if (!a ? d : !d)
        this.flyoutContent ||
          ((this.flyoutElement.style.display = "block"),
          this.positionFlyout(),
          this.getFlyoutContent()),
          this.keyboardTriggerElement.setAttribute(
            "aria-expanded",
            a.toString()
          ),
          a
            ? c.addClass("gh-flyout-active")
            : c.removeClass("gh-flyout-active"),
          this.triggerShowHideTracking(a);
      b &&
        "mouseover" == b.type &&
        ((c = e(this.flyoutElement)),
        c.attr("role", "dialog"),
        document.body.classList.add("gh_flyout_keyboard"),
        e.trapKeyboard(c),
        e.trapScreenreader(c),
        b && b.stopPropagation());
    };
    this.isWithinFlyoutDOM = function (a, b) {
      for (; a && a.parentElement; ) {
        if (a && a.id === b) return !0;
        a = a.parentElement;
      }
      return !1;
    };
    this.hideFlyoutClick = function (a) {
      e.untrapKeyboard();
      e.untrapScreenreader();
      document.body.classList.remove("gh_flyout_keyboard");
      this.flyoutCloseElement.style.display = "none";
      a && a.stopPropagation();
      clearTimeout(this.hideTimeOut);
      clearTimeout(this.showTimeOut);
      this.showHideFlyout(!1);
      this.addRemoveMouseEvents(!0);
    };
    this.hideFlyout = function (a) {
      var b = this.triggerElement;
      this.clearTimedOut = setTimeout(function () {
        a && "keydown" === a.type && 13 === a.keyCode && b.focus();
      }, 500);
      var c = a && a.toElement;
      null === c && (c = document.activeElement);
      if (
        this.isWithinFlyoutDOM(c, this.triggerId + "-flyout") &&
        a &&
        "keydown" !== a.type
      )
        a && a.stopPropagation(), clearTimeout(this.hideTimeOut);
      else {
        var d = this;
        if (
          (a && "keydown" == a.type) ||
          ("mouseout" == a.type && a.target.closest("#gh-minicart-hover"))
        ) {
          if ("keydown" == a.type && 13 !== a.keyCode && 32 !== a.keyCode)
            return;
          b.focus();
          "keydown" == a.type &&
            "gh-minicart-hover" === b.id &&
            document
              .querySelector(".gh-flyout-active  .gh-menu .gh-rvi-menu")
              .focus();
          e.untrapKeyboard();
          e.untrapScreenreader();
          document.body.classList.remove("gh_flyout_keyboard");
          this.flyoutCloseElement.style.display = "none";
        }
        a && a.stopPropagation();
        clearTimeout(this.hideTimeOut);
        clearTimeout(this.showTimeOut);
        a && "keydown" == a.type
          ? (this.showHideFlyout(!1), this.addRemoveMouseEvents(!0))
          : (this.hideTimeOut = setTimeout(function () {
              d.showHideFlyout.call(d, !1);
            }, 275));
        clearTimeout(this.clearTimedOut);
      }
    };
    this.addMaskLayer = function (a) {
      var b = document.createElement("div");
      b.id = a;
      b.className = "gh-flyout__mask";
      this.flyoutElement.parentNode.appendChild(b);
      return b;
    };
    this.HttpClientRetryCounter = 1;
    this.getFlyoutContent = function () {
      var a = this;
      if ("HttpClient" in window) {
        var b = new window.HttpClient(
          a.ajaxURL,
          "GET",
          {
            correlation:
              window.trkCorrelationSessionInfo &&
              "function" ===
                typeof window.trkCorrelationSessionInfo
                  .getTrackingCorrelationSessionInfo &&
              window.trkCorrelationSessionInfo.getTrackingCorrelationSessionInfo(),
          },
          null,
          {
            shouldRetry: !1,
            timeout: 5e3,
          }
        );
        b.handlers({
          onload: function (b) {
            if (
              b instanceof ProgressEvent &&
              ((b = b.target || b.currentTarget), b instanceof XMLHttpRequest)
            )
              try {
                var d = JSON.parse(b.responseText);
                void 0 === d.html || (d.error && "auth_required" == d.error)
                  ? ("minicart" === a.renderType &&
                      d.error &&
                      "auth_required" == d.error &&
                      window.GH &&
                      window.GH.resetCart &&
                      window.GH.resetCart(0),
                    a.paintMinicartError(!0))
                  : a.paintFlyoutContent(d);
              } catch (e) {}
          },
          onerror: function () {
            a.paintMinicartError();
          },
        });
        b.initializeAndTrigger();
      } else
        6 > this.HttpClientRetryCounter &&
          setTimeout(function () {
            a.HttpClientRetryCounter++;
            a.getFlyoutContent.call(a);
          }, 200 * this.HttpClientRetryCounter);
    };
    this.paintFlyoutContent = function (a) {
      this.flyoutContent = a;
      this.flyoutBodyElement.innerHTML = a.html;
      this.parseInlineResources(this.flyoutBodyElement, a.renderedComponents);
      "function" === typeof window.markoInitForOnDemand &&
      (this.isWatchList || this.isMiniCart)
        ? window.markoInitForOnDemand(a.renderedComponents)
        : "function" === typeof window.markoInitComponents &&
          window.markoInitComponents(a.renderedComponents);
      this.positionFlyout();
      this.loadEndTimeStamp = Date.now() - this.loadStart;
      this.triggerShowHideTracking(!0);
    };
    this.paintMinicartError = function (a) {
      var b = document.querySelector("." + this.triggerId + "-gen-error"),
        c;
      b &&
        b.parentElement &&
        0 < b.parentElement.children.length &&
        (c = b.parentElement.children[0]);
      a &&
        ((a = GH.Util.getBundle("GreetingsJavascriptContent")),
        (b.innerHTML = a.profile_loginUserL10n.replace(
          /&amp;ru=ru/g,
          "&ru=" + GH.Util.addRU()
        )));
      b.classList.add("gh-flyout-error");
      c.classList.add("gh-flyout-error");
      this.positionFlyout();
    };
    this.parseInlineResources = function (a, b) {
      var c = "",
        d = "";
      window.widget_platform_renderedComponents = b;
      var e = a.querySelectorAll("script");
      if (e && 0 < e.length) {
        for (var g = e.length, f = 0; f < g; f++) {
          var i = e[f];
          "nb_script" === i.id
            ? (c += " ; " + i.innerHTML)
            : (d += " ; " + i.innerHTML);
        }
        c = document.createTextNode(c + d);
        d = document.createElement("script");
        d.type = "text/javascript";
        d.appendChild(c);
        document.body.appendChild(d);
      }
    };
    this.keyboardEventHandler = function (a) {
      var b = e(this.flyoutElement),
        c = this.flyoutCloseElement;
      if (13 === a.keyCode || 32 === a.keyCode || "click" === a.type)
        this.addRemoveMouseEvents(!1),
          b.attr("role", "dialog"),
          document.body.classList.add("gh_flyout_keyboard"),
          (this.flyoutCloseElement.style.display = "block"),
          this.showFlyout(a),
          setTimeout(function () {
            c && c.focus();
          }, 500),
          c.focus(),
          e.trapKeyboard(b),
          e.trapScreenreader(b),
          a && a.stopPropagation();
    };
    this.positionFlyout = function () {
      var a = this.flyoutElement;
      a.style.display = "block";
      a.style.width = "auto";
      a.style.right = "auto";
      a.style.left = "0px";
      if (this.ghEyebrowBarElement) {
        var b = this.ghEyebrowBarElement.getBoundingClientRect();
        this.flyoutElement.getBoundingClientRect();
        var c = this.triggerElement.getBoundingClientRect(),
          d = b.width,
          b = b.left,
          e = a.offsetWidth;
        e >= d && 0 !== d && (a.style.width = d + "px");
        b + e >= c.right
          ? ((a.style.left = -(c.left - b) + "px"), (a.style.right = "auto"))
          : ((a.style.right = "0px"), (a.style.left = "auto"));
      }
    };
    this.init();
  };
})(GH.jQ);
!(function (a) {
  function d() {
    e.focus();
  }
  function c() {
    g.focus();
  }
  var b,
    e,
    g,
    f = a('<div tabindex="0" class="keyboard-trap-boundary">'),
    h = a('<div tabindex="0" class="keyboard-trap-boundary">'),
    i = a('<div tabindex="0" class="keyboard-trap-boundary">'),
    j = a('<div tabindex="0" class="keyboard-trap-boundary">'),
    k = a('<div tabindex="0" class="keyboard-trap-boundary">'),
    l = a('<div tabindex="0" class="keyboard-trap-boundary">');
  f.on("focus", d);
  h.on("focus", d);
  i.on("focus", c);
  j.on("focus", d);
  k.on("focus", c);
  l.on("focus", c);
  a.trapKeyboard = function (c) {
    var d;
    return (
      a.untrapKeyboard(),
      (d = (b = a(c)).focusable()),
      (e = d.first()),
      (g = d.last()),
      a("body").prepend(f),
      h.insertBefore(b),
      b.prepend(i),
      b.append(j),
      k.insertAfter(b),
      a("body").append(l),
      b.addClass("keyboard-trap--active"),
      b.trigger("keyboardTrap"),
      b
    );
  };
  a.untrapKeyboard = function () {
    return (
      void 0 !== b &&
        (f.detach(),
        h.detach(),
        i.detach(),
        j.detach(),
        k.detach(),
        l.detach(),
        b.off("focusExit"),
        b.removeClass("keyboard-trap--active"),
        b.trigger("keyboardUntrap")),
      b
    );
  };
})(jQuery, window, document);
(function (a) {
  var d = {
    findNegativeTabindex: !0,
    findPositiveTabindex: !0,
  };
  a.fn.focusable = function (c) {
    var b = a.extend({}, d, c);
    return a(this)
      .first()
      .find(
        "a[href],button:not([disabled]),area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),iframe,object,embed,*[tabindex],*[contenteditable]"
      )
      .filter(function () {
        return b.findNegativeTabindex || "-1" !== a(this).attr("tabindex");
      })
      .filter(function () {
        return b.findPositiveTabindex || !1 == 0 < a(this).attr("tabindex");
      });
  };
})(jQuery, window, document);
(function (a) {
  var d, c, b;
  a.trapScreenreader = function (e) {
    d = a("main, [role=main]");
    a.untrapScreenreader();
    d.attr("role", "presentation");
    var e = (c = a(e)).siblings(":not(script, [aria-hidden=true])"),
      g = c.parents(":not(html, body)"),
      f = c
        .parents(":not(html, body)")
        .siblings(":not(script, [aria-hidden=true])");
    c.attr("aria-hidden", "false");
    e.attr("aria-hidden", "true");
    g.attr("aria-hidden", "false");
    f.attr("aria-hidden", "true");
    b = c.add(e).add(g).add(f);
    c.trigger("screenreaderTrap");
  };
  a.untrapScreenreader = function () {
    c &&
      (b.removeAttr("aria-hidden"),
      c.trigger("screenreaderUntrap"),
      d.attr("role", "main"),
      (c = null));
  };
})(jQuery, window, document);
(function (f) {
  GH.add("Coupon", function () {
    var d = GH.Util.getBundle("CouponJavascriptContent"),
      a = GH.Util,
      g = "<a _sp=m570.l2735 href='" + a.getHref(d.CL10N) + "'>",
      h = "<a _sp=m570.l2634 href='" + a.getHref(d.BL10N) + "'>",
      i = "<a _sp=m570.l2634 href='" + a.getHref(d.BOL10N) + "'>",
      j = "<a _sp=m570.l2734 href='" + a.getHref(d.JL10N) + "'>";
    return {
      init: function () {
        var c = GH.C.userMsgConfig,
          b,
          e,
          a;
        GH.userAuth &&
          c &&
          ((e = "string" == typeof c ? c : c[0]),
          "undefined" !== typeof d[e] &&
            ((b = d[e]
              .replace(/-C-/, g)
              .replace(/-B-/, h)
              .replace(/-J-/, j)
              .replace(/-O-/, i)
              .replace(/-A-/, "</a>")
              .replace(/\[/g, "<")
              .replace(/\]/g, ">")),
            c[1] && (b = b.replace(/51/, c[1])),
            c[2] && (b = b.replace(/52/, c[2])),
            18 == e && (b = b.replace(/'>Join/, GH.Util.addRU() + "'>Join")),
            b &&
              (0 < e && 16 > e ? (a = "cpn") : (a = "bucks"),
              f("#gh-eb-sub-li-cpn")
                .addClass("gh-" + a)
                .append(
                  "<b class=gh-spr id=gh-" + a + "-ttl></b>" + b + "</li>"
                ))));
      },
    };
  });
})(GH.jQ);
ebayContent["GlobalHeaderWeb/CouponJavascriptContent"] = {
  0: "",
  1: "",
  2: "\u0421\u0440\u043e\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0432\u0430\u0448\u0435\u0439 \u0441\u043a\u0438\u0434\u043a\u0438 \u043f\u043e -C- \u043a\u0443\u043f\u043e\u043d\u0443 -A \u0438\u0441\u0442\u0435\u043a\u0430\u0435\u0442 \u043c\u0435\u043d\u0435\u0435 \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 \u0447\u0430\u0441.",
  3: "\u0421\u0440\u043e\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0432\u0430\u0448\u0435\u0439 \u0441\u043a\u0438\u0434\u043a\u0438 -C-51% \u043f\u043e \u043a\u0443\u043f\u043e\u043d\u0443-A- \u0438\u0441\u0442\u0435\u043a\u0430\u0435\u0442 \u043c\u0435\u043d\u0435\u0435 \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 \u0447\u0430\u0441.",
  4: "\u0421\u0440\u043e\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0432\u0430\u0448\u0435\u0439 \u0441\u043a\u0438\u0434\u043a\u0438 -C-51 \u043f\u043e \u043a\u0443\u043f\u043e\u043d\u0443-A \u0438\u0441\u0442\u0435\u043a\u0430\u0435\u0442 \u043c\u0435\u043d\u0435\u0435 \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 \u0447\u0430\u0441.",
  5: "\u0421\u0440\u043e\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0432\u0430\u0448\u0435\u0433\u043e -C-\u043a\u0443\u043f\u043e\u043d\u0430-A- \u0438\u0441\u0442\u0435\u043a\u0430\u0435\u0442 \u0447\u0435\u0440\u0435\u0437 51 \u0447.",
  6: "\u0421\u0440\u043e\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0432\u0430\u0448\u0435\u0439 \u0441\u043a\u0438\u0434\u043a\u0438 -C-51% \u043f\u043e \u043a\u0443\u043f\u043e\u043d\u0443-A- \u0438\u0441\u0442\u0435\u043a\u0430\u0435\u0442 \u0447\u0435\u0440\u0435\u0437 52 \u0447.",
  7: "\u0421\u0440\u043e\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0432\u0430\u0448\u0435\u0439 \u0441\u043a\u0438\u0434\u043a\u0438 -C-51 off \u043f\u043e \u043a\u0443\u043f\u043e\u043d\u0443-A- \u0438\u0441\u0442\u0435\u043a\u0430\u0435\u0442 \u0447\u0435\u0440\u0435\u0437 52 \u0447.",
  8: "\u0412\u0430\u0448 -C-\u043a\u0443\u043f\u043e\u043d-A- \u0441\u043a\u043e\u0440\u043e \u0438\u0441\u0442\u0435\u043a\u0430\u0435\u0442.",
  9: "\u0412\u0430\u0448\u0430 \u0441\u043a\u0438\u0434\u043a\u0430 -C-51% \u043f\u043e \u043a\u0443\u043f\u043e\u043d\u0443-A- \u0441\u043a\u043e\u0440\u043e \u0438\u0441\u0442\u0435\u043a\u0430\u0435\u0442.",
  10: "\u0412\u0430\u0448\u0430 \u0441\u043a\u0438\u0434\u043a\u0430 -C-51 \u043f\u043e \u043a\u0443\u043f\u043e\u043d\u0443-A- \u0441\u043a\u043e\u0440\u043e \u0438\u0441\u0442\u0435\u043a\u0430\u0435\u0442.",
  11: "\u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c -C-\u043a\u0443\u043f\u043e\u043d\u043e\u0432-A-: 51",
  12: "\u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c -C-\u043a\u0443\u043f\u043e\u043d-A-.",
  13: "\u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c -C-51% \u0441\u043a\u0438\u0434\u043a\u0430 \u043f\u043e \u043a\u0443\u043f\u043e\u043d\u0443-A-.",
  14: "\u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0441\u043a\u0438\u0434\u043a\u0430 -C-51 \u043f\u043e \u043a\u0443\u043f\u043e\u043d\u0443-A-.",
  15: "\u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c -C-\u043a\u0443\u043f\u043e\u043d\u044b-A-.",
  16: "",
  17: "",
  18: "",
  19: "",
  20: "",
  21: "",
  22: "",
  23: "",
  24: "",
  25: "",
  26: "",
  27: "",
  28: "",
  29: "",
  30: "",
  31: "",
  32: "",
  BL10N: "",
  BOL10N: "",
  JL10N: "",
  CL10N:
    '<a href="https://my.ebay.com/ws/eBayISAPI.dll?MyeBay&amp;CurrentPage=MyeBayIncentives&amp;gbh=1"></a>',
};
ebayContent["GlobalHeaderWeb/NotificationsJavascriptContent"] = {
  zeroAlertsL10n:
    "\u0412\u0441\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0430, \u043d\u043e\u0432\u044b\u0445 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0439 \u043d\u0435\u0442.",
  loginAlertL10n:
    '<a href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&amp;ru=ru" _sp="m570.l2881">\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443</a> \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0439.',
  errorAlertL10n:
    "\u0412 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b",
  alertHeader:
    "\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f",
  dataURL:
    '<a href="http://my.ebay.com/ws/eBayISAPI.dll?GetGHNotificationsCommand"></a>',
  clickURL:
    '<a href="http://my.ebay.com/ws/eBayISAPI.dll?SetGHNotificationsReadTSCommand"></a>',
  one: "\u0423 \u0432\u0430\u0441 ${itemcount} \u043d\u043e\u0432\u043e\u0435 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435",
  many: "\u0423 \u0432\u0430\u0441 \u043d\u043e\u0432\u044b\u0435 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f (${itemcount}).",
  zero: "\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435",
  timer:
    "\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 ${timeleft}",
  second: "\u0441\u0435\u043a\u0443\u043d\u0434\u0430",
  seconds: "\u0441\u0435\u043a.",
  hours: "\u0447.",
  hour: "\u0447.",
  minute: "\u043c\u0438\u043d\u0443\u0442\u0430",
  minutes: "\u043c\u0438\u043d.",
  removeNotif:
    "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435",
  newNotif:
    "\u041d\u043e\u0432\u043e\u0435 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435",
  unreadNotif:
    "\u041d\u0435\u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u043e\u0435 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435",
  countDownDay: "\u0434\u043d.",
  countDownHour: "\u0447.",
  countDownMinute: "\u043c\u0438\u043d.",
  countDownSecond: "c\u0435\u043a.",
  countDownEnded: "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043e",
  survey:
    "\u041f\u043e\u043c\u043e\u0433\u0430\u044e\u0442 \u043b\u0438 \u0432\u0430\u043c \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f?",
  proxyURL: '<a href="http://gha.ebay.com"></a>',
  latestproxyURL: '<a href="http://www.gha.pp.stratus.ebay.com"></a>',
};
ebayContent["GlobalHeaderWeb/SYMBAnJavascriptContent"] = {
  1: "\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c ${itemcount} \u0442\u043e\u0432.",
  3: "\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c ${itemcount} \u0442\u043e\u0432.",
  6: "\u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f (${itemcount}).",
  7: "\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e ${itemcount} \u0442\u043e\u0432.",
  loginAlertL10n:
    '<a href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&amp;ru=ru" _sp="m570.l2881"><span>\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443</span> \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0439.</a>',
};
function GHalertConf() {
  var d =
      (function (a) {
        return "undefined" !== typeof this[a];
      })("localStorage") && null !== localStorage
        ? localStorage
        : 0,
    b = GH.Util,
    a = GH.Util.getBundle("NotificationsJavascriptContent"),
    c = GH.Util.getBundle("SYMBAnJavascriptContent"),
    e = {
      pollingFrequency: {
        defaultPolling: GH.userRecog && !GH.userAuth ? 60 : 30,
        aggressivePolling: 10,
        zeroNotifPolling: 180,
        nonActivePolling: -1,
      },
      activeFlag: !0,
      bidFlag: !1,
      zeroFlag: !1,
      secListenActivity: 90,
      secWaitActivity: 90,
      waitTimer: "",
      listenUserActivityTimer: "",
      intervalRefreshData: 4,
      countPolling: 0,
    },
    c = c.loginAlertL10n || a.loginAlertL10n,
    c = {
      loginUserL10n: GH.Util.getBundle(
        "GreetingsJavascriptContent"
      ).profile_loginUserL10n.replace(/&amp;ru=ru/g, "&ru=" + GH.Util.addRU()),
      zeroAlertsL10n:
        "undefined" !== typeof a.zeroAlertsL10n ? a.zeroAlertsL10n : "",
      loginAlertL10n:
        "undefined" !== typeof c
          ? c.replace(/&amp;ru=ru/g, "&ru=" + GH.Util.addRU())
          : "",
      errorAlertL10n:
        "undefined" !== typeof a.errorAlertL10n ? a.errorAlertL10n : "",
      removeNotif: void 0 !== a.removeNotif ? a.removeNotif : "",
      newNotif: void 0 !== a.newNotif ? a.newNotif : "",
      survey: a.survey,
      one: a.one,
      many: a.many,
      zero: a.zero,
      timer: a.timer,
      minutes: a.minutes,
      minute: a.minute,
      seconds: a.seconds,
      second: a.second,
      hours: a.hours,
      hour: a.hour,
    },
    f = {
      d: a.countDownDay,
      h: a.countDownHour,
      m: a.countDownMinute,
      s: a.countDownSecond,
      e: a.countDownEnded,
    },
    b = {
      alertDataURL: b.getSecURL(b.getHref(a.dataURL)),
      alertClickURL: b.getSecURL(b.getHref(a.clickURL)),
      alertL10nURL: b.getSecURL(GH.GH_NOTIF_TMPL_LINK, !0),
    };
  return {
    newalertsasync: 1,
    design: "1",
    lastMinuteNotif: 0,
    secLastMinuteNotif: 300,
    secCountDown: 300,
    groupType: {},
    group: 1,
    minRenderHorizontal: 3,
    fixPDSTimeout: 1,
    polling: e,
    enableLocalStorage: 1,
    undefinedStr: "undefined",
    GHlocalStorage: d,
    messageAlertL10N: c,
    tlf: f,
    alertURL: b,
    refreshAllDataFlag: 0,
  };
}
GH.GHN_SURVEY_HTML = "";
GH.GH_NOTIF_TMPL_LINK =
  "https://ir.ebaystatic.com/cr/v/c1/b12f4704f37b2489196b7d66986a2bad3.js";
(function () {
  GH.commonAlertTemplate = {
    tmpl_cpn:
      "<li data-id='#ITEMID#' data-uid='#UID#' data-cpn-code='#C_CODE#' class='ghn-li-itm #NEW#' #P# ><div class='ghn-div-itm coupon-itm #LARGEC#'><div class='ghn-pop-new' tabindex='0' aria-label='#newNotif#'><i class='ghn-new-ic'></i></div><div class='ghn-off'><div class='ghn-div-off'><div class='ghn-div-off__val'>#C_VAL#</div><div class='ghn-div-off__off'>#C_OFF#</div></div></div><div class='ghn-desc'><span class='ghn-desc-t' style=''>#L10N_t# </span><span  class='ghn-desc-o'>#L10N_s#</span><div class='ghn-desc__min'><span class='ghn-desc__min_details'>#L10N_min#</span><a class='ghn-desc__min_see_details' href='#SEE_LNK#' target=\"_blank\">#SEE_LAB#</a></div></div><div class='cpn-btn'><button class='cpn-btn__copy'>#BTN1#</button><div class='cpn-btn__conf hid'><button class='cpn-btn__copied'><svg aria-hidden='true' class='svg-icon'><use xlink:href='#icon-check'></use></svg>#BTN2#</button></div></div></div><button aria-label='#rmv#' class='ghn-pop-rmv'><i class='ghn-pop-rmv-ic'></i></button></li>",
  };
})();
function GHalertServiceConf() {
  var b = GH.Util,
    a = GH.Util.getBundle("NotificationsJavascriptContent"),
    a = GH.Util.getBundle("NotificationsJavascriptContent"),
    c = GH.Util,
    f = {
      3: "en-GB",
      77: "de-DE",
      23: "fr-FR",
      123: "nl-BE",
      212: "pl-PL",
      146: "nl-NL",
      201: "zh-HK",
      16: "de-DE",
      193: "de-DE",
      203: "en-IN",
      71: "fr-FR",
      186: "es-ES",
      101: "it-IT",
      2: "en-CA",
      210: "fr-CA",
      15: "en-AU",
      215: "ru-RU",
      22: "ru-RU",
      107: "ru-RU",
      12: "es-CO",
      28: "es-CO",
      44: "es-CO",
      46: "es-CO",
      51: "es-CO",
      60: "es-CO",
      61: "es-CO",
      63: "es-CO",
      85: "es-CO",
      91: "es-CO",
      136: "es-CO",
      150: "es-CO",
      158: "es-CO",
      160: "es-CO",
      214: "es-CO",
      225: "es-CO",
      252: "es-CO",
      248: "es-CO",
      31: "pt-BR",
      213: "pt-BR",
      223: "zh-CN",
    },
    d = GH.C.siteId,
    e = "";
  "qa" === GH.GHSW.pool || "dev" === GH.GHSW.pool
    ? (a = c.getSecURL(c.getHref(a.proxyURL)))
    : "latest" === GH.GHSW.pool
    ? ((a = c.getSecURL(c.getHref(a.latestproxyURL))),
      (a = a.replace("latest.", "")))
    : (a = c.getSecURL(c.getHref(a.proxyURL)));
  b = {
    alertDataURL: b.getSecURL(
      a + "/nproxy/notification/v1/getNotification?variation=dweb&GH"
    ),
    alertClickURL: b.getSecURL(
      a + "/nproxy/notification/v1/setNotification?GH"
    ),
    alertL10nURL: b.getSecURL(
      "undefined" !== typeof GHN_TMPL_CONF
        ? GHN_TMPL_CONF
        : GH.GH_NOTIF_TMPL_LINK,
      !0
    ),
  };
  void 0 !== GH.C.lng && "en-US" !== GH.C.lng
    ? (e = "&lang=" + GH.C.lng)
    : void 0 !== d && void 0 !== f[d] && (e = "&lang=" + f[d]);
  b.alertDataURL += e;
  return {
    alertURL: b,
    ajaxProperties: {
      dataType: "jsonp",
      jsonp: !1,
      jsonpCallback: "GH_alertData",
      cache: !1,
      timeout: 2500,
    },
    ajaxUpdateProperties: {
      dataType: "jsonp",
      jsonp: !1,
      jsonpCallback: "GH_alertData",
      cache: !1,
      timeout: 1500,
    },
    retryAjaxUpdate: 3,
    backendDomain: a,
    group: 1,
    tracking: {
      OUTBID: 34,
      BIDITEM: 35,
      WATCHITM: 36,
      SHOPCARTITM: 37,
      ITMWON: 38,
      ITMSOLD: 39,
      COCMPLT: 40,
      ITMSHPD: 41,
      BESTOFR: 42,
      BODECLND: 43,
      CNTROFFR: 44,
      BOACCPTD: 45,
      COACCPTED: 46,
      CODECLND: 47,
      OFREXPIRED: 48,
      OFRDCLNDACPT: 49,
      OFRRETRACTED: 50,
      MSGM2MMSGHDR: 51,
      1: 52,
      3: 53,
      6: 54,
      7: 55,
      UCI: 56,
      SVDSRCH: 57,
      TargetedCoupons: 58,
      SellerInitiatedOffer: 59,
    },
    trackingUserType: {
      CNTROFFR: {
        B: 101,
        S: 102,
      },
      COACCPTED: {
        B: 103,
        S: 104,
      },
      CODECLND: {
        B: 105,
        S: 106,
      },
    },
    STATUS: {
      NEW: 1,
      READ: 2,
      DELETED: 4,
      1: "NEW",
      2: "READ",
      4: "DELETED",
    },
    countdownType: {},
    secCountDown: 900,
    refreshAllDataFlag: 0,
    updateNewItemHTML: 1,
    enablePagination: 1,
    percentPagination: 20,
    maxLoadOldNotificaiton: 4,
    NOTIFTYPE: {
      notif: "NOTIFICATION",
      msg: "REMINDER",
    },
  };
}
(function (g) {
  var h = [],
    d = {
      ITMWON: "1",
      COCMPLT: "3",
      MSGM2MMSGHDR: "6",
      ITMSHPD: "7",
    },
    e = 0,
    c = {},
    f = 0;
  totalCurrentTypeCount = 0;
  GH.alertsGroup = {
    init: function (a) {
      e = a.group;
      h = GH.Util.getBundle("SYMBAnJavascriptContent");
      this.resetGroupItems();
    },
    getTotalCurrentTypeCount: function () {
      return totalCurrentTypeCount;
    },
    setTotalCurrentTypeCount: function (a) {
      totalCurrentTypeCount = a;
    },
    getTotalTypeCount: function () {
      return f;
    },
    getGroup: function () {
      return e;
    },
    setGroup: function (a) {
      e = a;
    },
    deleteGroupItem: function (a) {
      a = d[a.mdnsName];
      totalCurrentTypeCount -= c[a].count;
      c[a] = {
        count: 0,
        total: 0,
        notificationId: void 0,
        isShown: !1,
        isDeleted: !0,
        shouldGroup: !1,
      };
    },
    getGroupNotif: function () {
      return c;
    },
    getGroupId: function (a) {
      return d[a];
    },
    getCount: function (a) {
      return c[d[a]].count;
    },
    getTotal: function (a) {
      return c[d[a]].total;
    },
    shouldRemoveItem: function (a) {
      var b;
      if (!e) return !1;
      b = d[a.mdnsName];
      if (void 0 === b) return !1;
      if (c[b].isDeleted) return !0;
      c[b].count++;
      totalCurrentTypeCount++;
      if (!c[b].shouldGroup) return !1;
      if (c[b].isShown) return !0;
      c[b].isShown = !0;
      c[b].notificationId = a.notificationId;
      a.ghGroup = "" + b;
      return !1;
    },
    getContent: function (a) {
      var b = h[this.getGroupId(a)],
        a = this.getTotal(a);
      return GH.Util.mergeContent(b, {
        itemcount: "<span class='ghn-o-g-num'>" + a + "</span>",
      });
    },
    isItemGroup: function (a) {
      if (!e || void 0 === a) return !1;
      a = d[a];
      return void 0 === a ? !1 : c[a].shouldGroup;
    },
    isItemCoupon: function (a) {
      return "TargetedCoupons" === a.mdnsName;
    },
    filterGroup: function (a) {
      return g.grep(a, function (a) {
        return void 0 !== d[a.mdnsName];
      });
    },
    resetGroupItems: function () {
      g.each(d, function (a, b) {
        c["" + b] = {
          count: 0,
          total: 0,
          notificationId: void 0,
          isShown: !1,
          isDeleted: !1,
          shouldGroup: !1,
        };
      });
      totalCurrentTypeCount = f = 0;
    },
    updateGroupItem: function (a) {
      var b = d[a.mdnsName];
      c[b].total += a.totalCountByEvent;
      f += c[b].total;
      3 <= c[b].total && (c[b].shouldGroup = !0);
    },
    setGroupItems: function (a) {
      if (e && void 0 !== a) {
        var b = this,
          a = b.filterGroup(a);
        this.resetGroupItems();
        g.each(a, function (a, c) {
          b.updateGroupItem(c);
        });
      }
    },
  };
})(GH.jQ);
function GHalertObjData(e, M) {
  var i = M.Conf,
    E = function (a) {
      return (void 0 !== a || void 0 !== a.errorMessage) &&
        void 0 !== a.errorMessage &&
        void 0 !== a.errorMessage.error
        ? a.errorMessage.error
        : !1;
    },
    X = i.ajaxUpdateProperties,
    o = {},
    t = GH.alertsGroup,
    s = i.alertURL,
    C = void 0,
    m = i.undefinedStr,
    v = i.STATUS,
    Y = i.NOTIFTYPE,
    x = M.Util,
    F = 0,
    Z = i.tracking,
    j = {},
    $ = i.countdownType,
    G = -1,
    n = "",
    d = void 0,
    y = !1,
    N = !1,
    O = -1,
    H = function (a) {
      return a.notificationType !== Y.notif || typeof Z[p(a)] === m ? !1 : !0;
    },
    P = function (a) {
      return v[a.status] == v.NEW || a.popup ? !0 : !1;
    },
    z = function (a) {
      var b = 0,
        c = function (a) {
          var a = E(a),
            c = !1;
          !1 !== a &&
            (e.each(a, function (a, b) {
              if ("RETRY" === b.actionToTake) return (c = !0), !1;
            }),
            c && (b++, f()));
        },
        g = function () {
          b++;
          f();
        },
        l = e.extend(X, {
          success: c,
          error: g,
        }),
        f = function () {
          b < i.retryAjaxUpdate && e.ajax(a, l);
        };
      return {
        put: f,
        successCB: c,
        errorCB: g,
      };
    },
    A,
    B = !1,
    Q = function (a, b) {
      B = !1;
      d = void 0;
      y = !1;
      e(a).off("scroll.ghn-pagination");
      e(a + " li.ghn-o-l").remove();
      void 0 !== b && b(e(a + " li").length);
    };
  A = {
    getIsLoading: function () {
      return B;
    },
    getOldNotification: function (a, b, c, g, l, f) {
      B ||
        ((B = !0),
        (ajaxProperties = e.extend(i.ajaxProperties, {
          success: function (k) {
            var h = 0;
            !1 !== E(k)
              ? Q(b, f)
              : (F++,
                (k.notifications = e.grep(k.notifications, function (a) {
                  return !GH.alertsGroup.shouldRemoveItem(a);
                })),
                (h = k.notifications.length),
                c
                  ? g(k, c)
                  : ((k.notifications = e.grep(k.notifications, function (a) {
                      return !H(a) ? !1 : !0;
                    })),
                    (a = a.concat(k.notifications))),
                (d = void 0 !== k.next ? i.backendDomain + k.next : void 0),
                F >= i.maxLoadOldNotificaiton &&
                  ((d = void 0), e(b).off("scroll.ghn-pagination"), (y = !1)),
                setTimeout(function () {
                  B = !1;
                  ((void 0 !== GH.alerts.getData() &&
                    6 >= GH.alerts.getData().length) ||
                    0 === h) &&
                  void 0 !== d
                    ? A.getOldNotification(a, b, c, g, l, f)
                    : void 0 !== l && l(a);
                }, 500));
          },
          error: function () {
            Q(b, f);
          },
        })),
        e.ajax(s.alertDataURL + R(d), ajaxProperties));
    },
  };
  var R = function (a, b) {
      var c = a.split("?");
      return b ? c[1] : "&" + c[1];
    },
    S = function (a, b) {
      var c;
      if (void 0 === a.notifications)
        if (void 0 === a.errorMessage && void 0 !== a.d) a.notifications = a.d;
        else return;
      GH.alertsGroup.setGroupItems(a.eventInformation);
      C = a.badgeCount;
      c = a.notifications;
      if (0 == c.length || 0 == a.total) return c;
      n = a.latestNotificationTime.value;
      G = new Date(a.latestNotificationTime.value).getTime() / 1e3;
      currentNumberItems = c.length - C;
      void 0 !== a.next && (d = i.backendDomain + a.next);
      return e.grep(c, function (a) {
        return !H(a) ||
          GH.alertsGroup.shouldRemoveItem(a) ||
          typeof b[a.i] !== m
          ? !1
          : !0;
      });
    },
    p = function (a) {
      return "" + a.mdnsName;
    },
    T = function (a) {
      return GH.alertsGroup.isItemCoupon(a);
    },
    U = function (a) {
      if (void 0 !== a.e && !isNaN(a.e) && null !== a.e) return a.e;
      try {
        if (
          ((a.e =
            new Date(a.subject.listing.scheduledEndDate.value).getTime() / 1e3),
          isNaN(a.e) || null === a.e)
        )
          return;
      } catch (b) {
        return;
      }
      return a.e;
    },
    D = function (a) {
      return "MSGM2MMSGHDR" === p(a)
        ? a.subject.message.messageId
        : "undefined" !== typeof a.subject.listing
        ? a.subject.listing.listingId
        : "";
    },
    q = function (a) {
      return null == a || "undefined" == typeof a ? !1 : !0;
    },
    I = function (a) {
      return q(a) && "SellerInitiatedOffer" === p(a);
    },
    V = function (a) {
      return I(a) && q(a.subject) && q(a.subject.listing)
        ? a.subject.listing.bestOfferId
        : "";
    },
    J = function (a) {
      if (I(a) && q(a.subject) && q(a.subject.listing))
        return a.subject.listing.siov2;
    },
    K = function (a) {
      return J(a) && q(a.subject) && q(a.subject.listing)
        ? a.subject.listing.negotiationId
        : "-1";
    },
    L = function (a) {
      return v[a.status];
    },
    W = function (a, b) {
      return (
        "http" +
        (a ? "s" : "") +
        "://" +
        (a & !GH.C.qapool ? "secureimg" : "i") +
        (GH.C.qapool ? ".qa" : "") +
        ".ebayimg.com/images/i/" +
        b +
        "-0-0/s-l67/p.jpg"
      );
    };
  t.init(i);
  return {
    PUTWrapper: z,
    getBucket: function () {
      return j;
    },
    resetBucket: function () {
      j = {};
    },
    isZeroFlag: function (a) {
      return 0 ===
        (void 0 === a.notifications ? a.d.length : a.notifications.length)
        ? !0
        : !1;
    },
    convertItemType: function (a) {
      var b = !1,
        c;
      typeof a.d !== m ? ((c = a.d), (b = !0)) : (c = a);
      return b ? ((a.d = c), a) : c;
    },
    processNotifData: function (a, b, c) {
      b = S(a, c);
      void 0 !== a.groupCurrentCount &&
        GH.alertsGroup.setTotalCurrentTypeCount(a.groupCurrentCount);
      return b;
    },
    getItemKey: p,
    isItemCoupon: T,
    getItemKeyName: function (a) {
      return "" + a.name;
    },
    getItemId: D,
    getItemCreatedTime: function (a) {
      if (void 0 !== a.ct) return a.ct;
      try {
        a.ct = new Date(a.creationDate.value).getTime();
      } catch (b) {
        return;
      }
      return a.ct;
    },
    getItemEndTime: U,
    getItemGroup: function (a) {
      return GH.alertsGroup.getGroupId(a.mdnsName);
    },
    getItemStatus: L,
    isGroup: function (a) {
      return t.isItemGroup(a.mdnsName);
    },
    setItemStatus: function (a, b) {
      a.status = v["" + b];
      return a;
    },
    isValidObject: q,
    isItemSIO: I,
    getOfferId: V,
    isSIOV2: J,
    getNegotiationId: K,
    getUniqueId: function (a) {
      return a.notificationId;
    },
    sortData: function (a) {
      return a;
    },
    addPrToData: function (a) {
      return a;
    },
    isNewOrPopUp: P,
    isZeroData: function (a) {
      return 0 ===
        (void 0 === a.notifications ? a.d.length : a.notifications.length)
        ? !0
        : !1;
    },
    isNewDataValid: function (a) {
      if ("undefined" !== typeof a)
        return (
          (a = void 0 === a.notifications ? a.d : a.notifications),
          typeof a === m || "object" !== typeof a ? !1 : !0
        );
    },
    updateBucket: function (a) {
      var b;
      void 0 !== a.g &&
        ((b = "" + a.g),
        typeof j[b] === m
          ? (j[b] = {
              c: 1,
              n: 0,
              t: a.ct,
            })
          : (j[b].c++, j[b].t < a.ct && (j[b].t = a.ct)),
        P(a) && (j[b].n = 1));
    },
    verifyNewData: function (a, b, c, g) {
      var l = !1;
      C = b.badgeCount;
      void 0 !== b.latestNotificationTime &&
        ((n = b.latestNotificationTime.value),
        (G = new Date(b.latestNotificationTime.value).getTime() / 1e3));
      b = b.notifications;
      b = e.grep(b, function (b) {
        return !H(b)
          ? ((a = e.grep(a, function (a) {
              if (a.notificationId != b.notificationId) return !0;
              l = !0;
              return !1;
            })),
            !1)
          : typeof c[b.notificationId] !== m
          ? !1
          : !0;
      });
      l && g();
      return b;
    },
    isDuplicate: function (a, b, c) {
      if (c && void 0 !== c) {
        if (a.notificationId == b.notificationId) return !0;
      } else if (
        a.notificationId == b.notificationId &&
        a.popup == b.popup &&
        p(a) == p(b) &&
        L(a) == L(b)
      )
        return !0;
      return !1;
    },
    decreseBucket: function (a) {
      void 0 !== a.g && j["" + a.g].c--;
    },
    createOverlyHtml: function (a, b, c) {
      var g,
        l = a.length,
        f,
        e = x.getCurrentTime(),
        h = "";
      for (f = 0; f < l; f++)
        (g = !1),
          GH.alertsGroup.isItemGroup(a[f].mdnsName)
            ? ((g = !0), (h += b(a[f], 1, e, 1)))
            : (h = GH.alertsGroup.isItemCoupon(a[f])
                ? h + b(a[f], 3, e)
                : h + b(a[f], 0, e)),
          c(a[f], g);
      return h;
    },
    setTmplL10N: function (a) {
      o = a;
    },
    getParamMap: function (a, b, c) {
      var g = !1,
        l = GH.Util.isTouchDevice(),
        f = "",
        k = "&transactionId",
        c = p(a),
        h = c + "l",
        d = c + "lp",
        j = "",
        q = "ghn-cd",
        n = "MSGM2MMSGHDR" === p(a) ? !0 : !1,
        s,
        r;
      r = "";
      r = "https:" == document.location.protocol ? !0 : !1;
      var u,
        w,
        c = t.isItemGroup(a.mdnsName);
      void 0 !== a.subject.listing && (u = a.subject.listing);
      typeof b === m && (b = x.getCurrentTime());
      n || "" === D(a)
        ? ((s = a.notificationURL),
          n &&
            ((w = a.subject.message),
            "undefined" === typeof w.listingId
              ? (g = !0)
              : (s = W(r, w.listingId))))
        : (s = W(r, D(a)));
      void 0 !== a.buyerNotification &&
        null !== a.buyerNotification &&
        (a.buyerNotification
          ? (void 0 !== o[h + "_B"] && (h += "_B"),
            void 0 !== o[d + "_B"] && (d += "_B"))
          : (void 0 !== o[h + "_S"] && (h += "_S"),
            void 0 !== o[d + "_S"] && (d += "_S")));
      typeof $[p(a)] !== m &&
        !c &&
        ((r = U(a)),
        void 0 !== r &&
          ((j = x.getTimeDiff(r, b)),
          j === x.tlf.e
            ? ((r = x.tlf.e),
              (j =
                "<div class='ghn-cd-div'><span  class='" +
                (q + " ghn-cd-end") +
                "'>" +
                r +
                "</span></div>"))
            : ((b =
                "<span class='ghn-acc-txt'>" +
                i.messageAlertL10N.timer +
                "</span>"),
              (r =
                "<span class='ghn-cd-sub0' aria-hidden='true'>" +
                j.t0 +
                "</span><span class='ghn-acc-txt ghn-cd-sub1'>" +
                j.t1 +
                "</span>"),
              (j =
                "<div class='ghn-cd-div'>" +
                GH.Util.mergeContent(b, {
                  timeleft: "<span  class='" + q + "'>" + r + "</span>",
                }) +
                "</div>"))));
      "ITMSHPD" === p(a) && (k = "&transId");
      c
        ? ((f = t.getContent(a.mdnsName)), (h = t.getGroupId(a.mdnsName)))
        : typeof a.content !== m &&
          (f = a.content.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
      J(a) &&
        "-1" !== K(a) &&
        void 0 !== o[h + "_S"] &&
        ((h += "_S"), (d += "_S"));
      g = {
        "#L10N_t#":
          typeof a.shortTitle.content !== m
            ? a.shortTitle.content
                .toUpperCase()
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
            : "",
        "#LINK#": o[h] || o.iLink,
        "#LINKP#": o[d] || o.iLink,
        "#L10N_s#": f,
        "#L10N_d#": "",
        "#L10N_a#": "",
        "#iLink#": o.iLink,
        "#IC#": "",
        "#TOUCH#": l ? "ghn-touch" : "",
        "#UI#": void 0 !== a.group ? "ghn_" + a.group : "",
        "#TRID#":
          void 0 !== u && typeof u.transactionId !== m
            ? k + "=" + a.subject.listing.transactionId
            : "",
        "#TRID_e#":
          void 0 !== u && typeof u.transactionId !== m
            ? "-" + a.subject.listing.transactionId
            : "",
        "#GROUPID#": c ? t.getGroupId(a.mdnsName) : "",
        "#TYPE#": n ? "ghn_msg" : "",
        ghn_msg: g ? "ghn_msg ghn_avt" : "ghn_msg",
        "#NEW#": v[a.status] == v.NEW ? "ghn-new" : "",
        "#ITEMID#": D(a),
        "#UID#": a.notificationId,
        "#OFFERID#": V(a),
        "#NEGOID#": K(a),
        "#DIFF#": j,
        "#NUM#": c ? t.getTotal(a.mdnsName) : "",
        "#imgsrc#": "#src#' alt='",
        "#src#": s,
        "ghn-i": n ? "'ghn-i ghn-i-m'" : "ghn-i",
        "#MSGID#": n ? w.messageId : "",
      };
      T(a) &&
        ((l = this.getObjectValue(a.additionalText, "COUPON_VALUE")),
        (f = this.getObjectValue(a.additionalText, "COUPON_OFF")),
        (k = this.getObjectValue(a.additionalText, "SEE_DETAILS")),
        (h = this.getObjectValue(a.additionalText, "SEE_DETAILS", "url")),
        (u = this.getObjectValue(a.additionalText, "CONDITION")),
        (w = a.action.title.content),
        (c = a.action.fallbackName),
        (a = a.action.fallbackURL),
        (d = ""),
        4 < f.length && ((d = "large-c4"), 6 < f.length && (d = "large-c6")),
        e.extend(g, {
          "#C_VAL#": l,
          "#C_OFF#": f,
          "#SEE_LAB#": k,
          "#SEE_LNK#": h,
          "#L10N_min#": u,
          "#BTN1#": w,
          "#BTN2#": c,
          "#C_CODE#": a,
          "#LARGEC#": d,
        }));
      return g;
    },
    getObjectValue: function (a, b, c) {
      var c = "undefined" !== typeof c ? c : "content",
        a = a.find(function (a) {
          return a.name === b;
        }),
        g = "";
      null !== a &&
        "object" === typeof a &&
        (g = "undefined" !== typeof a[c] ? a[c] : "");
      return g;
    },
    isSYMBAnError: E,
    getTotalNumNotifs: function () {
      return C;
    },
    getServiceName: function () {
      return "proxy";
    },
    isShowTimeDiff: function () {
      return !1;
    },
    isTransactionNotValid: function () {
      return !1;
    },
    isHubCampaign: function (a) {
      return a && a.subject && a.subject.campaign;
    },
    getActionUrl: function (a) {
      var b = "";
      a &&
        a.action &&
        a.action.title &&
        a.action.title.content &&
        (b = a.action.title.content);
      return b;
    },
    sendUpdateViewItem: function (a) {
      z(s.alertClickURL + "&op=1&ts=" + n).put();
      a.badgeCount = 0;
    },
    sendDeleteItems: function (a, b) {
      var c = void 0;
      e.each(a, function (a, d) {
        !1 !== d
          ? z(s.alertClickURL + "&op=3&n=" + d + "&ts=" + n).put()
          : ((c = void 0 === c ? a : c + "," + a), d <= O && O--);
        b[a] = d;
      });
      void 0 !== c && z(s.alertClickURL + "&op=0&i=" + c + "&ts=" + n).put();
      return b;
    },
    conf: i,
    getLastUpdateTimeStamp: function () {
      return G;
    },
    sendSetItemNew: function (a) {
      z(s.alertClickURL + ("&op=2&ts=" + n + "&i=" + a.notificationId)).put();
    },
    setPopup: function (a, b) {
      a.popup = b;
      return a;
    },
    setPopupShow: function (a) {
      a.popup = !1;
      return a;
    },
    clickPopUp: function (a, b) {
      b();
    },
    isPopUp: function (a) {
      return a.popup ? !0 : !1;
    },
    isBidFlag: function (a) {
      return "BIDITEM" === p(a) ? !0 : !1;
    },
    addNewData: function (a, b, c) {
      void 0 !== c && c ? a.push(b) : a.unshift(b);
    },
    handleNewNotif: function (a, b) {
      e.isArray(b) && (b.length = 0);
      F = 0;
      return S(a, {});
    },
    addScrollEvent: function (a, b) {
      i.enablePagination &&
        void 0 !== d &&
        ((y = !0),
        e(a).on("scroll.ghn-pagination", function () {
          var c = e(a),
            g = c[0].scrollHeight - c.scrollTop() - c.height(),
            c = Math.floor(100 * (g / c[0].scrollHeight));
          A.getIsLoading() ||
            (void 0 === d
              ? (e(a).off("scroll.ghn-pagination"), (y = !1))
              : (c <= i.percentPagination || N) &&
                A.getOldNotification(void 0, a, !0, b));
        }));
    },
    getNextURL: function (a) {
      return void 0 === d ? d : a ? d.replace(i.backendDomain, "") : d;
    },
    setNextURL: function (a) {
      d = a;
    },
    getIsScrollEventAdded: function () {
      return y;
    },
    getNexParamsFromURL: R,
    loadMoreNotifs: function (a, b, c, g, e) {
      void 0 !== d ? A.getOldNotification(a, b, !1, c, g, e) : g();
    },
    isHandleNotifNeedUpdated: function () {
      return !0;
    },
    setForceScrolling: function (a) {
      N = a;
    },
  };
}
function GH_alertData() {}
function GHalertObj(e, Ua, Va) {
  var c = e.jQ,
    P = Va(Ua, c),
    g = GHalertObjData(c, P),
    pa = g.isNewDataValid,
    Ea = g.setNextURL,
    G = g.getNextURL,
    Wa = g.getItemKey,
    x = g.getUniqueId,
    Fa = g.getItemId,
    Ga = g.getItemEndTime,
    Xa = g.isDuplicate,
    qa = g.setItemStatus,
    ra = g.isNewOrPopUp,
    Q = g.loadMoreNotifs,
    Ya = g.getItemKeyName,
    Ha,
    B,
    t,
    Ia,
    i = null,
    ba = "",
    ca = "",
    C = null,
    R = null,
    Ja = null,
    H = 0,
    Za = P.Const,
    m = g.conf,
    $a = m.GHlocalStorage,
    o = m.undefinedStr,
    n = P.Util,
    p = P.Tracking(m, g),
    ab = P.Storage,
    bb = Za.TITLE,
    sa = m.newalertsasync,
    da = m.design,
    u = {
      size: 115,
      startPosition: c("#gh").outerHeight(),
      position: c("#gh").outerHeight(),
      count: 0,
    },
    S = m.lastMinuteNotif,
    cb = m.countdownType,
    Ka = m.secCountDown,
    T = m.STATUS,
    y = m.messageAlertL10N,
    db = void 0 !== m.tlf.e ? m.tlf : void 0,
    ea = {
      2: e.Util.addSignin(y.loginAlertL10n),
      4: y.zeroAlertsL10n,
      6: y.errorAlertL10n,
      3: y.errorAlertL10n,
    },
    I = m.alertURL,
    ta = "0",
    fa = m.refreshAllDataFlag,
    f = m.polling,
    ua = f.secWaitActivity,
    ga = {},
    d = null,
    U = [],
    l = null,
    va = null,
    V = 0,
    r = {},
    ha = {},
    w = !1,
    wa = !1,
    W = !1,
    ia = null,
    s = null,
    D = {},
    J = {},
    La,
    q = 0,
    X = -1,
    K = -1,
    xa = !1,
    Y = !1,
    ja = !1,
    eb = void 0 !== y.survey ? y.survey : "",
    Ma = e.GHN_SURVEY_HTML
      ? e.Util.addPrefixPoolURL(
          e.GHN_SURVEY_HTML.replace(
            "#DESIGN#",
            "2" === da ? "Priority" : "Recency"
          ).replace("#SVTXT#", eb)
        )
      : "",
    E = !~~(100 * Math.random()),
    Na = typeof JSON === o ? 0 : m.enableLocalStorage,
    j = $a && n.isLocalStorageSupported && Na ? ab : null,
    Z = !1,
    A = function (a) {
      typeof a !== o
        ? (ga = setTimeout(L, 1e3 * a))
        : ((a = 30),
          xa || ((a = ka()), 0 <= a && (ga = setTimeout(L, 1e3 * a))));
    },
    L = function () {
      var a = 103;
      if (w)
        if (Ja()) A(3);
        else {
          E &&
            (f.zeroFlag
              ? (a = 104)
              : f.activeFlag
              ? f.bidFlag && (a = 102)
              : (a = 101),
            e.userAuth && (a += 10),
            e.Util.cTImg(e.ghiIMP + a));
          f.countPolling++;
          if (0 === f.countPolling % f.intervalRefreshData || fa)
            if (void 0 === fa || fa) (X = -1), (ta = "1");
          a = c.extend(m.ajaxProperties, {
            success: function (a) {
              X = g.getLastUpdateTimeStamp();
              K = n.getCurrentTime();
              if ("undefined" === typeof a || pa(a))
                "undefined" !== typeof a &&
                  ("1" === ta
                    ? (M(a), fa || (ta = "0"))
                    : !1 === g.isSYMBAnError(a) && Oa(a)),
                  A();
            },
          });
          c.ajax(I.alertDataURL + "&up=1&ts=" + X, a);
        }
      else A();
    },
    ka = function () {
      var a = 30,
        b = typeof f !== o ? f.pollingFrequency : 0;
      b &&
        (a = f.activeFlag
          ? f.bidFlag
            ? b.aggressivePolling
            : f.zeroFlag
            ? b.zeroNotifPolling
            : b.defaultPolling
          : b.nonActivePolling);
      return a;
    },
    v = function (a, b) {
      var c = 30,
        h;
      j &&
        (a
          ? ((h = K - j.timestamp),
            (c = ka()),
            0 > h || 0 > K || (0 > c && (c = 0), (j.timestamp = K + c)),
            b
              ? j.setDataLocalStorage(s, d, !0)
              : j.setDataLocalStorage(s, d, !1))
          : j.setDataLocalStorage(s, d, !0));
    },
    la = function () {
      c(document).one("mousemove.ghn keydown.ghn", function () {
        clearTimeout(f.listenUserActivityTimer);
        clearTimeout(f.waitTimer);
        f.waitTimer = setTimeout(la, 1e3 * ua);
        f.activeFlag ||
          (E && e.Util.cTImg(e.ghiIMP + 86), clearTimeout(ga), L());
        f.activeFlag = !0;
      });
      f.listenUserActivityTimer = setTimeout(function () {
        f.activeFlag = !1;
        E && e.Util.cTImg(e.ghiIMP + 85);
      }, 1e3 * f.secListenActivity);
    },
    Pa = function () {
      var a;
      q = 0;
      g.resetBucket();
      for (a in r) typeof r[a] !== o && clearInterval(r[a].id);
      for (a in ha) clearInterval(ha[a]);
      f.waitTimer = setTimeout(la, 1e3 * ua);
    },
    ma = function () {
      null !== d &&
        (c.each(d, function (a) {
          ra(d[a]) && (d[a] = qa(d[a], T.READ));
        }),
        0 < q && g.sendUpdateViewItem(s),
        v(!1),
        (q = 0),
        N(q));
    },
    ya = function (a) {
      var b;
      b = n.getCurrentTime();
      var c;
      typeof cb[Wa(a)] !== o &&
        ((b = Ga(a) - b),
        (c = 1e3 * (b - Ka)),
        b >= Ka
          ? setTimeout(function () {
              F(function () {
                Qa(a);
              });
            }, c)
          : F(function () {
              Qa(a);
            }));
    },
    Ra = function (a) {
      var b = "data-id",
        k = x(a),
        a = Fa(a);
      C() &&
        (k != a && (b = "data-uid"),
        c(B + " li[" + b + "=" + k + "] .ghn-cd")
          .addClass("ghn-lm ghn-cd-end")
          .text(n.tlf.e));
    },
    Qa = function (a) {
      var b = x(a),
        k = Fa(a),
        h = Ga(a);
      typeof r["" + b] !== o && (clearInterval(r["" + b].id), delete r["" + b]);
      n.getTimeDiff(h) == n.tlf.e
        ? Ra(a)
        : (g.isBidFlag(a) && (f.bidFlag = !0),
          (r["" + b] = {
            id: setInterval(function () {
              var e = n.getTimeDiff(h),
                d = "data-id",
                i = "ghn-lm";
              C() &&
                (b != k && (d = "data-uid"),
                e == n.tlf.e
                  ? c(B + " li[" + d + "=" + b + "] .ghn-cd")
                      .addClass(i + " ghn-cd-end")
                      .text(e)
                  : c(B + " li[" + d + "=" + b + "] .ghn-cd")
                      .addClass(i)
                      .find(".ghn-cd-sub0")
                      .text(e.t0)
                      .end()
                      .find(".ghn-cd-sub1")
                      .text(e.t1));
              if (e == n.tlf.e)
                if (
                  (Ra(a),
                  clearInterval(r["" + b].id),
                  delete r["" + b],
                  c.isEmptyObject(r))
                )
                  f.bidFlag = !1;
                else
                  for (d in ((f.bidFlag = !1), r))
                    if (g.isBidFlag(r[d].item)) {
                      f.bidFlag = !0;
                      break;
                    }
            }, 1e3),
            item: a,
          }));
    },
    za = function (a) {
      "true" !== e.GHSW.NEWALERT_POPUPOFF &&
        g.isPopUp(a) &&
        (c(ba + ca).length
          ? setTimeout(function () {
              za(a);
            }, 3e3)
          : ((a = g.setPopupShow(a)),
            F(function () {
              var b = a,
                k = $(b, 2),
                k = c("<div class='ghn-pop-wrap'>" + k + "</div>"),
                h = "#ghn-pop-" + x(b),
                d = !1,
                f = !1;
              e.Util.cTImg(
                e.ghiIMP + 54 + "&_trkparms=" + p.rowTrack("gh1g", b)
              );
              0 < c(h).length && c(h).parent().hide("slow").remove();
              c(ba + ca).length
                ? O()
                : (c(k).appendTo("body"),
                  c.fn.ghellipsis &&
                    c(h + " .ghn-desc-o").ghellipsis({
                      row: 2,
                    }),
                  c(k)
                    .css({
                      top: u.position + "px",
                    })
                    .animate(
                      {
                        right: "0px",
                      },
                      function () {
                        c(ba + ca).length && O();
                      }
                    ),
                  c(h + " img.ghn-i").each(function (a, b) {
                    n.createImage(b);
                  }),
                  (b = qa(b, T.NEW)),
                  Z || (g.sendSetItemNew(b), (Z = !0)),
                  c(h + " .ghn-pop-rmv").on("click", function (a) {
                    O(h);
                    e.Util.cTImg(
                      e.ghiIMP + 55 + "&_trkparms=" + p.rowTrack("gh1g", b)
                    );
                    a.stopPropagation();
                    return !1;
                  }),
                  c(h + " a.ghn-a-itm").click(function (a) {
                    var k = c(this).attr("href");
                    a.preventDefault();
                    g.clickPopUp(b, function () {
                      e.Util.redirect(k);
                    });
                    setTimeout(function () {
                      e.Util.redirect(k);
                    }, 2e3);
                    e.Util.redirect(k);
                  }),
                  c(h).hoverIntent({
                    over: function () {
                      d = !0;
                    },
                    out: function () {
                      d = !1;
                      f && O(h);
                    },
                    sensitivity: 1,
                    interval: 150,
                  }),
                  setTimeout(function () {
                    d ||
                      (O(h),
                      e.Util.cTImg(
                        e.ghiIMP + 56 + "&_trkparms=" + p.rowTrack("gh1g", b)
                      ));
                    f = !0;
                  }, 7e3),
                  u.count++,
                  (u.position += u.size));
            })));
    },
    O = function (a) {
      typeof a === o
        ? (c(".ghn-pop-wrap").remove(),
          (u.count = 0),
          (u.position = u.startPosition))
        : c(a)
            .stop(!0, !0)
            .fadeOut("slow", function () {
              c(this).parent().remove();
              u.count--;
              0 === u.count && (u.position = u.startPosition);
            });
    },
    N = function (a) {
      var b = y.many,
        k = ("" + a).length,
        k = 3 < k ? 3 : k,
        h = (i && i.ghEBAlerts_id) || this.ghEBAlerts_id,
        g = (i && i.ebAClass) || this.ebAClass,
        d = "undefined" === typeof newNotifFlag ? 0 < k : newNotifFlag;
      c(h + " i.ghn-num").remove();
      a
        ? (c(h + " " + g).append(
            "<i aria-hidden='true' " +
              (d ? "class='ghn-new ghn-num'" : "class=' ghn-num'") +
              " id=gh-eb-Alerts-n" +
              k +
              ">" +
              (99 < a ? "99+" : a) +
              "</i>"
          ),
          1 == a && (b = y.one),
          (b = e.Util.mergeContent(b, {
            itemcount: a,
          })))
        : ((k = 0), (b = y.zero));
      c("#gh-Alerts-i").text(b);
      c("#gh-Alerts-i").parent().attr("aria-label", b);
      c(h)
        .removeClass(
          " gh-eb-Alerts-tab-0 gh-eb-Alerts-tab-1 gh-eb-Alerts-tab-2 gh-eb-Alerts-tab-3"
        )
        .addClass(" gh-eb-Alerts-tab-" + k);
    },
    na = function (a, b) {
      c.each(d, function (a, b) {
        p.addTotalByTrackId(b, g.isGroup(b));
        ra(b) && q++;
        ya(b);
        za(d[a]);
      });
      v(!0, !0);
      C() && !R() && b && z();
    },
    M = function (a) {
      Y = Z = !1;
      Pa();
      void 0 !== a &&
        void 0 !== a.currentTimeDiff &&
        n.setCurrentTimeDiff(a.currentTimeDiff);
      s = a;
      Ea(void 0);
      q = 0;
      wa = !0;
      if (typeof a === o || void 0 !== a.errorMessage)
        void 0 !== a &&
          void 0 !== a.errorMessage &&
          void 0 !== a.errorMessage.error[0] &&
          (La = a.errorMessage.error[0].errorId),
          (w = !1);
      else if (
        ((f.zeroFlag = g.isZeroFlag(a)),
        (d = g.processNotifData(a, d, J)),
        d.length <= H && m.group && "function" === typeof Q && void 0 !== G(!0)
          ? (Y = !0)
          : na(S, !0),
        v(!0, !0),
        (w = !0),
        (a = g.getTotalNumNotifs()),
        void 0 !== a && (q = a),
        (newNotifFlag = q),
        C() && !R() && z(),
        !p.dataloadSojDropped &&
          ((a = "%26gh1g%3dT" + d.length),
          (a += ".N" + q),
          (a += p.getSojItemsStr())))
      )
        (p.dataloadSojDropped = 1),
          0.1 >= Math.random() && e.Util.cTImg(e.ghiIMP + 1 + a);
      N(q);
    },
    $ = function (a, b, c, h) {
      var d,
        f,
        b = [l.tmpl_i, l.tmpl_g, l.tmpl_p, l.tmpl_cpn][b],
        b =
          !h && g.isShowTimeDiff(a)
            ? b.replace("#H#", l.s0h)
            : b.replace("#H#", ""),
        b = h
          ? b.replace("#BMI#", "<div class='ghn-bmi'></div>")
          : b.replace("#BMI#", ""),
        b = b.replace("#rmv#", y.removeNotif),
        b = b.replace("#newNotif#", y.newNotif);
      f = g.getParamMap(a, c, h);
      for (d in f) {
        c = f[d];
        typeof c === o && (c = "");
        if ("#LINK#" == d || "#LINKP#" == d)
          "#LINK#" == d &&
          !h &&
          typeof l.iLink !== o &&
          g.isTransactionNotValid(a)
            ? (c = c.replace(/.*(_trksid=.*)/, l.iLink + "&$1"))
            : g.isHubCampaign(a) && (c = g.getActionUrl(a)),
            (c += "&_trkparms=" + p.rowTrack("gh1g", a, h));
        b =
          "#ITEMID#" == d || "#DIFF#" == d || "#UID#" == d
            ? b.replace(RegExp(d, "g"), c)
            : b.replace(d, c);
      }
      b = b.replace("=m570", "=p" + e.C.pageId + ".m570");
      "1" === da && (b = b.replace("#P#", ""));
      return b;
    },
    Aa = function (a, b) {
      var k,
        h,
        f,
        i = "",
        j = c.isArray(a) ? !1 : !0,
        m = "%26",
        o = !1,
        l = c(t + " li").length;
      s = a;
      if (j) {
        if (!pa(a)) return;
        a = g.convertItemType(a);
        a = g.verifyNewData(d, a, J, function () {});
      }
      Z = !1;
      h = a.length;
      for (k = 0; k < h; k++)
        (f = !1),
          (newItem = a[k]),
          j &&
            c.each(d, function (a, b) {
              if ((f = Xa(b, newItem, !0))) return !1;
            }),
          f ||
            (g.isPopUp(newItem) &&
              ((newItem = g.setPopupShow(newItem)), g.sendSetItemNew(newItem)),
            j && g.addNewData(d, newItem, !0),
            !1 !== b &&
              (ya(a[k]),
              (i = e.alertsGroup.isItemGroup(newItem.mdnsName)
                ? i + $(newItem, 1, void 0, 1)
                : i + $(newItem, 0)),
              l++,
              void 0 === p.notifIdSojDropped[x(newItem)] &&
                ((o = !0),
                (m += p.rowTrack("ghn" + l + "r", newItem, !1) + "%26"),
                (p.notifIdSojDropped[x(newItem)] = 1))));
      v(!0, !0);
      !1 !== b &&
        (0 < i.length &&
          (c(t).append(i),
          c.fn.ghellipsis &&
            c(B).is(":visible") &&
            c(".ghn-desc-o").ghellipsis({
              row: 2,
            }),
          o &&
            (e.Util.cTImg(e.ghiIMP + 5 + m), (p.overlayLastIdxSojDropped = l))),
        c(".ghn-i").each(function (a, b) {
          n.createImage(b);
        }));
    },
    z = function (a) {
      var b = "",
        k = "%26",
        h = 0,
        f = B,
        b = 0,
        j = i.overlayTemplate;
      typeof d === o || !1 === w
        ? 30016 === La
          ? aa(f, 2)
          : aa(f, 3)
        : ((b = g.createOverlyHtml(d, $, function (a, b) {
            h++;
            k += p.rowTrack("ghn" + h + "r", a, b) + "%26";
            p.notifIdSojDropped[x(a)] = 1;
          })),
          (k += "ghntnd%3D" + h + "%26"),
          a &&
            d.length < H &&
            (b += "<li class='ghn-o-l'><div class='gh-o-l'></div></li>"),
          0 >= b.length
            ? aa(f, 4)
            : ((b = j.replace("#TEXT#", b).replace("#SURVEY#", Ma)),
              c(f).html(b),
              U.length && Aa(U),
              c.fn.ghellipsis &&
                c(f).is(":visible") &&
                c(".ghn-desc-o").ghellipsis({
                  row: 2,
                }),
              c.fn.ghellipsisDetails &&
                c(f).is(":visible") &&
                c(".ghn-desc__min_details").ghellipsisDetails({
                  row: 2,
                }),
              (b = c(t + " li").length),
              (a =
                b >= H
                  ? i.overlayHeight
                  : b * i.itemHeight +
                    c(".coupon-itm").length * i.itemLargeHeight +
                    10 * c(".coupon-itm.coupon-itm__tall").length),
              c.fn.scrollLock &&
                c(t)
                  .css("height", a + "px")
                  .scrollLock("ghn"),
              c(Ia + " .gh-survey").click(e.Util.surveyClicked),
              c(".ghn-i").each(function (a, b) {
                n.createImage(b);
              }),
              c(t).on("scroll.ghn_soj", function () {
                e.Util.cTImg(
                  e.ghiIMP +
                    53 +
                    "%26gh1g%3DTR" +
                    c(t + " li.ghn-li-itm").length
                );
                c(t).off("scroll.ghn_soj");
              }),
              "function" === typeof g.addScrollEvent && g.addScrollEvent(t, Aa),
              c(f).data("ghi", 5 + k),
              p.overlaySojDropped ||
                ((p.overlaySojDropped = 1),
                e.Util.cTImg(e.ghiIMP + c(f).data("ghi")))));
    },
    oa = function (a, b, d) {
      a <= H &&
        0 < a &&
        ((a =
          a * i.itemHeight +
          ("undefined" !== typeof b ? b : 0) * i.itemLargeHeight +
          10 * ("undefined" !== typeof d ? d : 0)),
        c(t).animate({
          height: a + "px",
        }));
    },
    Oa = function (a, b) {
      var e = !1,
        h,
        i = !1;
      h = !1;
      var j, l;
      Y = !1;
      s = a;
      if (b || g.isHandleNotifNeedUpdated(a))
        if ((Pa(), pa(a)))
          if (
            (g.isZeroData(a)
              ? ((h = !0), b ? v(!1) : v(!0, !1), (f.zeroFlag = !0))
              : (f.zeroFlag = !1),
            (a = g.convertItemType(a)),
            b ||
              (Ea(a.next),
              (U = []),
              void 0 !== G() &&
                (g.getIsScrollEventAdded() || g.addScrollEvent())),
            void 0 !== g.handleNewNotif && (a = g.handleNewNotif(a, d)),
            h)
          )
            C() && !R() && z();
          else {
            d = a;
            d.length <= H && m.group && "function" === typeof Q
              ? Q(
                  a,
                  t,
                  void 0,
                  function (a) {
                    void 0 !== a && (d = a);
                    na(S, !0);
                    void 0 === G(!0)
                      ? void 0 !== s.next && delete s.next
                      : (s.next = G(!0));
                    v(!0, !0);
                  },
                  oa
                )
              : (na(S, !0), v(!0, !0));
            Z = !1;
            j = a.length;
            for (h = 0; h < j; h++)
              (l = d[h]),
                typeof r["" + x(a[h])] !== o &&
                  1 == S &&
                  typeof b === o &&
                  clearInterval(r["" + x(a[h])].id),
                ya(d[h]),
                za(d[h]),
                ra(l) && ((i = e = !0), q++),
                g.updateBucket(l);
            i && ((d = g.addPrToData(d)), "2" == da && (d = g.sortData(d)));
            C() && !R() && z();
            b ? v(!1) : v(!0, !0);
            c(".ghn-i").each(function (a, b) {
              n.createImage(b);
            });
            e && (newNotifFlag = !0);
            e = g.getTotalNumNotifs();
            void 0 !== e && (q = e);
            N(q);
          }
    },
    Ba = function (a) {
      void 0 === n.tlf && (n.tlf = l.tlf);
      a();
    },
    F = function (a) {
      l
        ? (void 0 === n.tlf && (n.tlf = l.tlf), a())
        : typeof GH_NOTIFICATION_TMPL !== o
        ? ((l = e.Util.addPrefixPoolURL(GH_NOTIFICATION_TMPL)), Ba(a))
        : va
        ? setTimeout(function () {
            F(a);
          }, 999 + ~~(999 * Math.random()))
        : ((va = 1),
          c.ajax(I.alertL10nURL, {
            dataType: "jsonp",
            cache: !0,
            jsonp: !1,
            jsonpCallback: "GH_alertTemplate",
            timeout: 4e3,
            success: function (b) {
              l = e.Util.addPrefixPoolURL(b);
              l = c.extend(e.commonAlertTemplate, l);
              g.setTmplL10N(l);
              Ba(a);
            },
          }));
    },
    aa = function (a, b, d) {
      var h = d,
        g = i.errorTemplate;
      typeof d === o &&
        ((d = ea[b]),
        (h = g.replace("#TEXT#", d)),
        2 === b && (h = h.replace("ghn-errb", "ghn-errb ghn-errb-a")));
      c(a).data("ghi", b);
      p.overlaySojDropped ||
        ((p.overlaySojDropped = 1), e.Util.cTImg(e.ghiIMP + c(a).data("ghi")));
      h = h.replace("#SURVEY#", Ma);
      c(a).html(h);
      a = c("#ghn-err a");
      a.length
        ? a.click(function (a) {
            a.stopPropagation();
          })
        : c("#ghn-err").attr("tabindex", 0);
    },
    Da = function (a, b) {
      wa = !1;
      V = 0;
      W = !1;
      b && void 0 !== b && ((w = !1), (d = null));
      Ca(
        !1,
        function () {
          N(q);
          z();
          ma();
        },
        function () {
          var b = B;
          a && aa(b, 6);
        }
      );
    },
    Ca = function (a, b, f) {
      var h,
        i = !1,
        j = function () {
          W = !0;
          V = 0;
          ia = null;
          typeof f !== o && f();
        },
        l = function (a, b) {
          W = !1;
          void 0 !== a &&
            void 0 !== a.ProxyTime &&
            (a.currentTimeDiff = n.getCurrentTime() - ~~(a.ProxyTime / 1e3));
          X = g.getLastUpdateTimeStamp();
          K = n.getCurrentTime();
          M(a);
          V = 0;
          ia = null;
          b();
        };
      null === ia &&
        (null === d && !w && !wa && !W
          ? V
            ? setTimeout(function () {
                Ca(a, b);
              }, 999 + ~~(999 * Math.random()))
            : ((V = 1),
              E && e.Util.cTImg(e.ghiIMP + 81),
              a
                ? ((window.GH_alertDataNB = function (a) {
                    l(a, b);
                    i = !0;
                  }),
                  !e.NotificationsMock || !e.NotificationsMock.useMock
                    ? (e.Util.loadScript(I.alertDataURL + "&nb=1"),
                      setTimeout(function () {
                        window.GH_alertDataNB = function () {};
                        i || j();
                      }, 2500))
                    : e.Util.loadScript(e.NotificationsMock.mockDataUrl, !1))
                : ((h = c.extend(m.ajaxProperties, {
                    success: function (a) {
                      l(a, b);
                    },
                    error: function () {
                      j();
                    },
                  })),
                  (ia = c.ajax(I.alertDataURL, h))))
          : W
          ? typeof f !== o && f()
          : b());
    },
    Sa = function (a) {
      c.isEmptyObject(D) || ((J = g.sendDeleteItems(D, J, d)), (D = {}));
      typeof a !== o && a();
    },
    Ta = function () {
      null === i && (i = this);
      n.tlf = db;
      ba = i.ebLiClass;
      ca = i.ebLiActiveClass;
      C = i.doOverlayExist;
      Ja = i.isOverlayOpen;
      R = i.isError;
      H = i.maxItems;
      Ha = i.ghEBAlerts_id;
      B = i.overlay_o;
      t = i.itemContainerId;
      Ia = i.surverDivId;
    };
  return {
    setDesign: function (a) {
      da = a;
    },
    totalNumNotifs: q,
    getData: function () {
      return d;
    },
    setData: function (a) {
      d = a;
    },
    setOldData: function (a) {
      U = a;
    },
    getOldData: function () {
      return U;
    },
    triggerCountdown: ha,
    getTriggerCountdown: function (a) {
      return ha[a];
    },
    isInit: w,
    newNotifFlag: !1,
    setIsInit: function (a) {
      w = a;
    },
    getIsInit: function () {
      return w;
    },
    getL10N: F,
    setL10N: function (a) {
      l = a;
    },
    handleL10N: Ba,
    insertHTMLTemplate: $,
    itemTemplate: 0,
    popupTemplate: 2,
    itemGroupTemplate: 1,
    L10N: l,
    setL10Nrequested: function (a) {
      va = a;
    },
    getL10NTemplate: function () {
      return l;
    },
    getTotalNumNotifs: function () {
      return q;
    },
    handleNewNotifItem: Oa,
    handleOldNotifItem: Aa,
    getIsBusyloadMoreNotifs: function () {
      return ja;
    },
    getAlreadyRemovedItems: function () {
      return J;
    },
    setAlreadyRemovedItems: function (a) {
      J = a;
    },
    getRemovedItems: function () {
      return D;
    },
    setErrorCode: function (a) {
      ea = a;
    },
    getErrorCode: function () {
      return ea;
    },
    setAlertURL: function (a) {
      I = a;
    },
    getAlertURL: function () {
      return I;
    },
    getObjData: function () {
      return g;
    },
    getConf: function () {
      return m;
    },
    setConf: function (a) {
      m = a;
    },
    getRawData: function () {
      return s;
    },
    setCollectData: function () {
      E = !0;
    },
    collectData: E,
    popUpPosition: u,
    isTabHidden: xa,
    removedItems: D,
    polling: f,
    enableLocalStorage: Na,
    lastUpdateTimeStamp: X,
    undefinedStr: o,
    storage: j,
    conf: m,
    setOverlayHeight: oa,
    clickconfirmButton: function (a, b, g) {
      var h;
      c.each(d, function () {
        if (x(this) == b) return (h = this), !1;
      });
      typeof h !== o &&
        ((D[b] = !1),
        typeof g !== o && ((D[b] = Ya(h)), e.alertsGroup.deleteGroupItem(h)),
        (d = c.grep(d, function (a) {
          return typeof D[x(a)] !== o ? !1 : !0;
        })),
        e.Util.cTImg(e.ghiIMP + 115 + "&_trkparms=" + p.rowTrack("gh1g", h)),
        v(!1),
        a());
    },
    clickItem: function (a, b) {
      var f = null;
      c.each(d, function () {
        if (x(this) == a) return (f = this), !0;
      });
      f &&
        void 0 != T.CLICKED &&
        g.getItemStatus(f) != T.CLICKED &&
        ((f = qa(f, T.CLICKED)), v(!1));
      Sa(function () {
        e.Util.redirect(b);
      });
    },
    processNotifData: M,
    visibleTab: function () {
      var a;
      a = ka();
      var b;
      xa = !1;
      c(document).unbind(".ghn");
      clearTimeout(f.listenUserActivityTimer);
      clearTimeout(f.waitTimer);
      f.waitTimer = setTimeout(la, 1e3 * ua);
      clearTimeout(ga);
      f.activeFlag
        ? (null === j
            ? (0 > a && (a = 0), (a = K + a - n.getCurrentTime()))
            : (a = j.timestamp - n.getCurrentTime()),
          0 < a
            ? (j &&
                ((b = j.getValue("updatedTimestamp")),
                b > j.updatedTimestamp &&
                  ((j.data = j.getValue()),
                  M(j.data),
                  (j.updatedTimestamp = b))),
              A(a))
            : L())
        : L();
      f.activeFlag = !0;
    },
    removePopUp: O,
    removeItem: Sa,
    getDataAndShowOverlay: function () {
      var a = function (a) {
        void 0 !== a && (d = a);
        na(S, !0);
        void 0 === G(!0)
          ? void 0 !== s.next && delete s.next
          : (s.next = G(!0));
        ja = !1;
        v(!0, !0);
      };
      w && !l
        ? F(function () {
            N(q);
            Y ? (z(!0), (ja = !0), Q(d, t, void 0, a, oa)) : z();
            ma();
          })
        : !w && l
        ? Da(!0)
        : !w && !l
        ? F(function () {
            Da(!0);
          })
        : (Y ? (z(!0), (ja = !0), Q(d, t, void 0, a, oa)) : z(), ma());
    },
    getAlertData: L,
    scheduleNextAlertPoll: A,
    createUserListener: la,
    init: function () {
      var a = function (a) {
        Ca(
          a,
          function () {
            A();
          },
          function () {
            j && j.data ? M(j.data) : C() && z();
            A();
          }
        );
      };
      i = this;
      Ta();
      GH_SetGHNotifs = function () {};
      c(Ha + " .gh-eb-li-a").bind("click.ghn", function (a) {
        e.Util.cTImg(e.ghiIMP + (c(B).is(":hidden") ? 87 : 88));
        a.preventDefault();
      });
      i.addShowEventOnOverlay();
      if (e.userRecog) {
        typeof j !== o && j && j.init(g.getServiceName());
        if (null === j)
          if (sa) a(!0);
          else
            c(window).on("load.gh", function () {
              a(!1);
            });
        else {
          var b = j.timestamp - n.getCurrentTime();
          if (0 >= b || e.NotificationsMock)
            if (sa) a(!0);
            else
              c(window).on("load.gh", function () {
                a(!1);
              });
          else {
            E && e.Util.cTImg(e.ghiIMP + 80);
            M(j.data);
            var d = n.getCurrentTime();
            if (sa) {
              var f = n.getCurrentTime() - d,
                b = b - f;
              A(b);
            } else
              c(window).on("load.gh", function () {
                var a = n.getCurrentTime() - d;
                b -= a;
                A(b);
              });
          }
        }
        i.addEvent();
      }
    },
    initData: Ta,
    addError: aa,
    retryInitData: Da,
    afterViewItem: ma,
    updateNotifOverlay: z,
    getPollingSec: ka,
    errorCode: ea,
    notificationText: bb,
    updateNotifNum: N,
  };
}
function GHalertBase() {
  var r = null,
    n = null,
    w = GH.Util.getBundle("NotificationsJavascriptContent"),
    t = GHalertObj,
    q = function (l, h) {
      if (null === r) {
        var k =
            (function (c) {
              return "undefined" !== typeof this[c];
            })("localStorage") && null !== localStorage
              ? localStorage
              : 0,
          o = GHalertConf(),
          o = h.extend(o, GHalertServiceConf()),
          p,
          n = 0,
          q = function () {
            return ~~(new Date().getTime() / 1e3) - n;
          },
          u = function () {
            var c = h(this.e);
            c.css("display", "block");
            (this.width < this.height ||
              (c.hasClass("ghn-i-m") && this.width > this.height)) &&
              c.addClass("ghn-i-n");
          },
          s;
        var v = window.sessionStorage;
        try {
          v.setItem("gh_testKey", "1"), v.removeItem("gh_testKey"), (s = !0);
        } catch (t) {
          s = !1;
        }
        p = {
          tlf: null,
          getTimeDiff: function (c, a) {
            var b,
              i = p.tlf,
              j = {},
              m = "",
              d = "",
              e = "",
              d = "",
              f,
              g = o.messageAlertL10N;
            "undefined" === typeof a && (a = q());
            b = c - a;
            if (0 >= b) return i.e;
            m = Math.floor(b / 86400);
            f = Math.floor(b % 60);
            b %= 86400;
            e = Math.floor(b / 3600);
            b = Math.floor((b % 3600) / 60);
            0 < m
              ? (m = m + i.d + (0 < e ? " " + e + i.h : ""))
              : 0 < e
              ? ((m = e + i.h + (0 < b ? " " + b + i.m : "")),
                (d = g.hours),
                1 === e && (d = g.hour),
                (d = e + " " + d),
                0 < b &&
                  ((e = g.minutes),
                  1 === b && (e = g.minute),
                  (d = d + " " + b + " " + e)))
              : 0 < b
              ? ((m = b + i.m + (0 < f ? " " + f + i.s : "")),
                (d = g.minutes),
                1 === b && (d = g.minute),
                (d = b + " " + d),
                0 < f &&
                  ((e = g.seconds),
                  1 === f && (e = g.second),
                  (d = d + " " + f + " " + e)))
              : ((m = f + i.s),
                (d = g.seconds),
                1 === f && (d = g.second),
                (d = f + " " + d));
            j.t0 = m;
            j.t1 = d;
            return j;
          },
          sizeCheck: u,
          sort: function (c, a, b, i) {
            c = 0 === b ? c - a : a - c;
            return 0 !== c ? c : i();
          },
          setCurrentTimeDiff: function (c) {
            n = c;
          },
          createImage: function (c) {
            var a = new Image();
            a.e = c;
            a.onload = u;
            a.src = h(c).attr("src");
          },
          isLocalStorageSupported: s,
          getCurrentTime: q,
        };
        r = {
          Const: {
            TITLE: w.alertHeader,
          },
          Conf: o,
          Util: p,
          Tracking: function (c, a) {
            var b = {},
              i = c.tracking,
              j = c.trackingUserType;
            h.each(i, function (a, d) {
              b["" + d] = {};
            });
            h.each(j, function (a, d) {
              b["" + d.B] = {};
              b["" + d.S] = {};
            });
            return {
              totalByType: {},
              totalNewByType: {},
              lookup: i,
              dataloadSojDropped: 0,
              overlaySojDropped: 0,
              notifIdSojDropped: {},
              addTotalByTrackId: function (c, d) {
                var e;
                e = a.getItemKey(c);
                var f = i[e],
                  g = c.buyerNotification;
                !d &&
                  void 0 !== g &&
                  void 0 !== j[e] &&
                  (g && void 0 !== j[e].B
                    ? (f = j[e].B)
                    : !g && void 0 !== j[e].S && (f = j[e].S));
                d && ((e = a.getItemGroup(c)), (f = i[e]));
                void 0 !== f &&
                  ((b[f].d = ~~b[f].d + 1),
                  a.isNewOrPopUp(c) && (b[f].n = ~~b[f].n + 1));
              },
              getSojItemsStr: function () {
                var a = "";
                h.each(b, function (d, c) {
                  var b = c.d,
                    g = c.n;
                  if (b || g) a += "%26ghn" + d + "r%3d";
                  a += g ? "N" + g + "." : "";
                  a += b ? "T" + b : "";
                });
                return a;
              },
              rowTrack: function (c, d, b) {
                var f = a.getItemKey(d),
                  g = a.getItemGroup(d),
                  h;
                void 0 !== j &&
                  void 0 !== d.buyerNotification &&
                  (b ||
                    (void 0 !== j[f] &&
                      (h = d.buyerNotification ? j[f].B : j[f].S)));
                void 0 === h && (h = i[b ? g : f || g]);
                b = "";
                a.isItemCoupon(d) &&
                  (d.notificationId && (b += ".notifid" + d.notificationId),
                  d.subject &&
                    d.subject.campaign &&
                    d.subject.campaign.campaignId &&
                    (b += ".cid" + d.subject.campaign.campaignId));
                return (
                  c +
                  "%3DI" +
                  a.getItemId(d) +
                  ".N" +
                  h +
                  ".S" +
                  a.getItemStatus(d) +
                  ".type" +
                  d.name +
                  b +
                  (d.e ? ".M" + ~~((d.e - p.getCurrentTime()) / 60) : "")
                );
              },
            };
          },
          Storage: {
            timestamp: -1,
            updatedTimestamp: -1,
            data: null,
            key: "ghn_data",
            lData: {},
            lKey: "ghn_ldata",
            userID: l,
            refreshLocalStorage: 30,
            removeLocalStorage: function () {
              k.removeItem(this.key);
            },
            setDataLocalStorage: function (c, a, b) {
              try {
                h.isArray(a) &&
                  (void 0 !== c.d ? (c.d = a) : (c.notifications = a), (a = c)),
                  (a.timestamp = this.timestamp),
                  (a.userID = this.userID),
                  b && (this.updatedTimestamp = p.getCurrentTime()),
                  (a.updatedTimestamp = this.updatedTimestamp),
                  (a.groupCurrentCount =
                    GH.alertsGroup.getTotalCurrentTypeCount()),
                  k.setItem(this.key, JSON.stringify(a)),
                  (this.data = a),
                  (this.timestamp = a.timestamp);
              } catch (i) {}
            },
            init: function (c) {
              var a;
              this.key = this.key + "_" + c;
              this.lKey = this.lKey + "_" + c;
              if (
                null !== k.getItem(this.key) &&
                ((c = JSON.parse(k.getItem(this.key))),
                c.userID == l &&
                  ((this.timestamp = c.timestamp),
                  (this.data = c),
                  (this.updatedTimestamp = c.updatedTimestamp),
                  null !== k.getItem(this.lKey) &&
                    ((a = JSON.parse(k.getItem(this.lKey))), a.userID == l)))
              ) {
                var b = p.getCurrentTime();
                h.each(a.d, function (c) {
                  b > a.d[c] && delete a.d[c];
                });
                this.lData = a.d;
                this.setlDataLocalStorage();
              }
            },
            setlDataLocalStorage: function () {
              h.isEmptyObject(this.lData)
                ? k.removeItem(this.lKey)
                : k.setItem(
                    this.lKey,
                    JSON.stringify({
                      userID: l,
                      d: this.lData,
                    })
                  );
            },
            getValue: function (c, a) {
              var b;
              typeof a === o.undefinedStr && (a = this.key);
              if (null !== k.getItem(a))
                return (
                  (b = JSON.parse(k.getItem(a))),
                  typeof b[c] !== o.undefinedStr ? b[c] : b
                );
            },
          },
        };
      }
      return r;
    },
    x = {
      getCore: q,
      getAlertObj: function (l, h) {
        null === n && (n = t(l, h, q));
        return n;
      },
    };
  return {
    require: function (l, h) {
      var k = x["get" + l];
      if ("function" === typeof k) return k.apply(this, h);
    },
  };
}
function GHalertDesktop(k, g, h, a) {
  var c = k(a).require("AlertObj", [g, h]),
    j = g.ghEBActive_id,
    k = "." + j,
    i = a("#gh-eb-Alerts"),
    l = !1,
    m = 0;
  onRemoveNotiifcation = function (b, d) {
    var e, f, n;
    if (c.getIsBusyloadMoreNotifs() && 10 >= m)
      return (
        m++,
        setTimeout(function () {
          onRemoveNotiifcation(b, d);
        }, 200),
        b.stopPropagation(),
        b.preventDefault(),
        !1
      );
    e = a("li[data-uid=" + d + "] .ghn-pop-rmv");
    f = a(e).closest("li");
    if ("none" === a(e).find("i").css("display"))
      return (
        b.stopPropagation(),
        b.preventDefault(),
        f.find("a.ghn-a-itm").trigger(b.type),
        !1
      );
    if (f.find(".ghn-confirm").length)
      a(e)
        .closest("li")
        .find(".ghn-a-itm")
        .addClass("disable")
        .end()
        .find(".ghn-desc")
        .hide()
        .end()
        .find(".ghn-confirm")
        .show();
    else {
      var d = f.attr("data-uid") || li.attr("data-id"),
        h = f.attr("data-groupid");
      b.preventDefault();
      c.clickconfirmButton(
        function () {
          var b;
          a(e).is(":focus") &&
            ((b = f.next()),
            b.length
              ? b.children(":first").focus()
              : ((b = f.prev()),
                b.length
                  ? b.children(":first").focus()
                  : i.find("a:first").focus()),
            c.removeItem());
          c.removeItem();
          f.slideUp(function () {
            a(this).remove();
            var b = g.alerts.getObjData(),
              d,
              e;
            e = 0;
            d = a("#ghn-ul li.ghn-li-itm:not([data-groupid])").length;
            e = g.alertsGroup.getTotalCurrentTypeCount();
            e = d + e;
            b.getNextURL();
            void 0 !== b.getNextURL() &&
              ((d = b.getNextURL()),
              (d = d.replace(
                b.getNexParamsFromURL(d, !0),
                "offset=" + e + "&limit=20"
              )),
              b.setNextURL(d),
              10 === a("#ghn-ul li.ghn-li-itm").length &&
                (b.setForceScrolling(!0),
                a("#ghn-ul").trigger("scroll.ghn-pagination"),
                b.setForceScrolling(!1)));
            a("#ghn-ul li").length || c.addError("#gh-eb-Alerts-o", 4);
          });
          n = a("#ghn-ul li").length;
          setTimeout(function () {
            var b = a(".coupon-itm").length;
            f.find(".coupon-itm").length &&
              (b =
                0 < a(".coupon-itm").length ? a(".coupon-itm").length - 1 : 0);
            var d = a(".coupon-itm.coupon-itm__tall").length;
            f.find(".coupon-itm.coupon-itm__tall").length &&
              (d =
                0 < a(".coupon-itm.coupon-itm__tall").length
                  ? a(".coupon-itm.coupon-itm__tall").length - 1
                  : 0);
            c.setOverlayHeight(n - 1, b, d);
          }, 100);
        },
        d,
        h
      );
      b.stopPropagation();
    }
    return !1;
  };
  onClickCouponButton = function (b, a) {
    var c = document.createElement("textarea");
    c.setAttribute(
      "style",
      "font-size: initial;  border: 0; padding: 0; margin: 0; position: absolute; top: " +
        (window.pageYOffset || document.documentElement.scrollTop) +
        "px;"
    );
    c.setAttribute("readonly", "");
    c.value = a;
    document.body.appendChild(c);
    c.select();
    c.setSelectionRange(0, c.value.length);
    document.execCommand("copy");
    document.body.removeChild(c);
    g.Util.cTImg(
      g.ghiIMP +
        116 +
        "%26sid%3Dp" +
        g.C.pageId +
        ".l46332%26type%3DTargetedCoupons"
    );
    return !1;
  };
  addEventOnOverlay = function () {
    i.delegate("input, .ghn-pop-rmv", "mousedown", function (a) {
      a.stopPropagation();
      a.preventDefault();
      return !1;
    });
    i.delegate(
      " .ghn-pop-rmv",
      "click touchend mouseenter mouseleave",
      function (b) {
        var c = a(this).closest("li").attr("data-uid");
        "click" === b.type || "touchend" === b.type
          ? ((m = 0), onRemoveNotiifcation(b, c))
          : "mouseenter" === b.type
          ? a(this).parent().find(".ghn-rmv-popover").show()
          : a(this).parent().find(".ghn-rmv-popover").hide();
      }
    );
    i.delegate(" .coupon-itm", "click touchend focusout", function (b) {
      if ("a" !== b.target.tagName.toLowerCase()) {
        b.stopPropagation();
        b.preventDefault();
        var c = a(this).closest("li").attr("data-cpn-code");
        if ("click" === b.type || "touchend" === b.type)
          onClickCouponButton(b, c),
            a(".coupon-itm .cpn-btn__copy").show(),
            a(".coupon-itm .cpn-btn__conf").addClass("hid"),
            ($copybtn = a(this).find(".cpn-btn__copy")),
            $copybtn.hide(),
            $copybtn.siblings(".cpn-btn__conf").removeClass("hid");
      } else "click" === b.type && g.Util.cTImg(g.ghiIMP + 117 + "%26sid%3Dp" + g.C.pageId + ".l47195");
    });
    i.delegate("#gh-eb-Alerts-o a.ghn-a-itm", "touchmove", function () {
      l = !0;
    });
    i.delegate("#gh-eb-Alerts-o a.ghn-a-itm", "click touchend", function (b) {
      var d = a(this).parent(),
        e = d.attr("data-uid"),
        f = d.attr("data-id");
      void 0 === e && (e = f);
      b.preventDefault();
      if (a(this).hasClass("disable") || l) return (l = !1);
      a(this).attr(
        "href",
        a(this).attr("href") +
          ".R" +
          (a("#ghn-ul li.ghn-li-itm").index(d) + 1 || -1) +
          ".TR" +
          a("#ghn-ul li.ghn-li-itm").length
      );
      b = a(this).attr("href");
      c.clickItem(e, b);
      return !1;
    });
  };
  addTabEvent = function () {
    g.Util.tabHidden({
      hidden: function () {
        c.isTabHidden = !0;
      },
      visible: function () {
        c.visibleTab();
      },
    });
  };
  addEvent = function () {
    addEventOnOverlay();
    addTabEvent();
  };
  var h = {
      addEvent: addEvent,
    },
    o = function (b, c) {
      25 < c
        ? a("#gh-eb-Alerts .gh-control").focus()
        : setTimeout(function () {
            var e = a("#gh-eb-Alerts-o a:first"),
              f = a("#ghn-err");
            e.length
              ? e.focus()
              : f.length
              ? a("#ghn-err").focus()
              : (c++, o(b, c));
          }, b);
    };
  return a.extend(c, {
    addShowEventOnOverlay: function () {
      var b = a("#gh-eb-Alerts");
      a("#gh-eb-Alerts").removeClass("gh-hvr");
      b.hoverIntent({
        over: function () {
          a("#gh-eb-Alerts .gh-eb-li-a").unbind("click.preventEB_Click");
          setTimeout(function () {
            c.preventEB_Click("#gh-eb-Alerts", b);
          }, 300);
          c.removePopUp();
          c.openOverlay(b, "#gh-eb-Alerts-o");
        },
        out: function () {
          c.removeItem();
          c.closeOverlay(b);
        },
      });
      c.preventEB_Click("#gh-eb-Alerts", b);
    },
    openOverlay: function (b, d, e) {
      var f = a(d);
      c.doOverlayExist()
        ? (g.userRecog &&
            (c.isError() &&
              (c.isProcessData && !c.isInit
                ? c.retryInitData()
                : c.updateNotifOverlay()),
            c.afterViewItem()),
          a(d).is(":hidden") && c.showOverlay())
        : (c.createEBO(e),
          f.data("ghi", 5),
          g.userRecog
            ? c.getDataAndShowOverlay()
            : (typeof c.storage !== c.undefinedStr &&
                c.storage &&
                c.storage.removeLocalStorage(),
              (e =
                "<div id='ghn-err'><span class='ghn-errb'>#TEXT#</span></div>".replace(
                  "#TEXT#",
                  c.errorCode[2]
                )),
              (e = e.replace("ghn-errb", "ghn-errb ghn-errb-a")),
              c.addError(d, 2, e)),
          c.showOverlay());
      a.fn.ghellipsis &&
        a.fn.ghellipsisDetails &&
        a(d).is(":visible") &&
        a(".ghn-desc-o").ghellipsis({
          row: 2,
        });
      a.fn.ghellipsisDetails &&
        a(d).is(":visible") &&
        a(".ghn-desc__min_details ").ghellipsisDetails({
          row: 2,
        });
      b.addClass(j);
    },
    closeOverlay: function (b, c) {
      b.removeClass(j);
      g.Util.closeOverlay(a("#gh-eb-Alerts .ghn-b"));
      (void 0 === c || c) &&
        a("#gh-eb-Alerts li[data-id]").removeClass("ghn-new");
    },
    isError: function () {
      return 0 === a("#ghn-err").length ? !1 : !0;
    },
    doOverlayExist: function () {
      return 0 === a("#gh-eb-Alerts-o").length ||
        0 === a("#gh-eb-Alerts-o").children().length
        ? !1
        : !0;
    },
    isOverlayOpen: function () {
      return a("#gh-eb-Alerts-o").is(":visible") ? !0 : !1;
    },
    dom: h,
    createEBO: function (b) {
      var c = a("#gh-eb-Alerts .gh-sublayer .ghn-b").outerWidth() - 8;
      a("#gh-eb-Alerts-o").length && a("#gh-eb-Alerts-o").remove();
      g.Util.hideOverlays();
      a("#gh-eb-Alerts .gh-sublayer").append(
        "<div id=gh-eb-Alerts-o class='gh-eb-o' style='" +
          (180 < c ? "min-width:" + c + "px" : "") +
          "'><div class=gh-o-l " +
          (b ? "tabindex=0" : "") +
          " >" +
          g.L10N.msg_loading +
          "</div></div>"
      );
      b && a("#gh-eb-Alerts-o .gh-o-l").focus();
    },
    preventEB_Click: function (b) {
      var d = a(b);
      a(b + " .gh-eb-li-a").bind("click.preventEB_Click", function (e, f) {
        var h = !0,
          i = 0;
        e.preventDefault();
        c.doOverlayExist()
          ? "none" === a(b + "-o").css("display")
            ? (c.showOverlay(), a(b).addClass("gh-eb-active"))
            : (a(b).removeClass("gh-eb-active"),
              g.Util.closeOverlay(a(b + " .ghn-b")),
              (h = !1))
          : (c.openOverlay(d, "#gh-eb-Alerts-o", f), (i = 200));
        f && h && o(i, 0);
      });
    },
    showOverlay: function () {
      g.Util.openOverlay(a("#gh-eb-Alerts .ghn-b"));
    },
    overlayTemplate: "<ul id='ghn-ul'>#TEXT#</ul>#SURVEY#",
    errorTemplate:
      "<div id='ghn-err'><span class='ghn-errb'>#TEXT#</span></div>",
    overlayHeight: 635,
    maxItems: 6,
    itemHeight: 106,
    itemLargeHeight: 57,
    ghEBAlerts_id: "#gh-eb-Alerts",
    overlay_o: "#gh-eb-Alerts-o",
    itemContainerId: "#ghn-ul",
    surverDivId: "#ghn-f",
    addEvent: h.addEvent,
    ebAClass: ".gh-eb-li-a",
    ebLiClass: ".gh-eb-li",
    ebLiActiveClass: k,
    ebLiActiveClassName: j,
  });
}
function GadgetNotification(m, f, l, b) {
  var c = m(b).require("AlertObj", [f, l]),
    j = f.ghEBActive_id,
    m = "." + j,
    i = b("#gh-eb-Alerts"),
    n = !1,
    o = 0;
  onRemoveNotiifcation = function (a, e) {
    var d, g, k;
    if (c.getIsBusyloadMoreNotifs() && 10 >= o)
      return (
        o++,
        setTimeout(function () {
          onRemoveNotiifcation(a, e);
        }, 200),
        a.stopPropagation(),
        a.preventDefault(),
        !1
      );
    d = b("li[data-uid=" + e + "] .ghn-pop-rmv");
    g = b(d).closest("li");
    if ("none" === b(d).find("i").css("display"))
      return (
        a.stopPropagation(),
        a.preventDefault(),
        g.find("a.ghn-a-itm").trigger(a.type),
        !1
      );
    if (g.find(".ghn-confirm").length)
      b(d)
        .closest("li")
        .find(".ghn-a-itm")
        .addClass("disable")
        .end()
        .find(".ghn-desc")
        .hide()
        .end()
        .find(".ghn-confirm")
        .show();
    else {
      var e = g.attr("data-uid") || li.attr("data-id"),
        h = g.attr("data-groupid");
      a.preventDefault();
      c.clickconfirmButton(
        function () {
          var a;
          b(d).is(":focus") &&
            ((a = g.next()),
            a.length
              ? a.children(":first").focus()
              : ((a = g.prev()),
                a.length
                  ? a.children(":first").focus()
                  : i.find("a:first").focus()),
            c.removeItem());
          c.removeItem();
          g.slideUp(function () {
            b(this).remove();
            var a = f.alerts.getObjData(),
              e,
              d;
            d = 0;
            e = b("#ghn-ul li.ghn-li-itm:not([data-groupid])").length;
            d = f.alertsGroup.getTotalCurrentTypeCount();
            d = e + d;
            a.getNextURL();
            void 0 !== a.getNextURL() &&
              ((e = a.getNextURL()),
              (e = e.replace(
                a.getNexParamsFromURL(e, !0),
                "offset=" + d + "&limit=20"
              )),
              a.setNextURL(e),
              10 === b("#ghn-ul li.ghn-li-itm").length &&
                (a.setForceScrolling(!0),
                b("#ghn-ul").trigger("scroll.ghn-pagination"),
                a.setForceScrolling(!1)));
            b("#ghn-ul li").length || c.addError("#gh-eb-Alerts-o", 4);
          });
          k = b("#ghn-ul li").length;
          setTimeout(function () {
            var a = b(".coupon-itm").length;
            g.find(".coupon-itm").length &&
              (a =
                0 < b(".coupon-itm").length ? b(".coupon-itm").length - 1 : 0);
            var e = b(".coupon-itm.coupon-itm__tall").length;
            g.find(".coupon-itm.coupon-itm__tall").length &&
              (e =
                0 < b(".coupon-itm.coupon-itm__tall").length
                  ? b(".coupon-itm.coupon-itm__tall").length - 1
                  : 0);
            c.setOverlayHeight(k - 1, a, e);
          }, 100);
        },
        e,
        h
      );
      a.stopPropagation();
    }
    return !1;
  };
  onClickCouponButton = function (a, e) {
    var b = document.createElement("textarea");
    b.setAttribute(
      "style",
      "font-size: initial;  border: 0; padding: 0; margin: 0; position: absolute; top: " +
        (window.pageYOffset || document.documentElement.scrollTop) +
        "px;"
    );
    b.setAttribute("readonly", "");
    b.value = e;
    document.body.appendChild(b);
    b.select();
    b.setSelectionRange(0, b.value.length);
    document.execCommand("copy");
    document.body.removeChild(b);
    f.Util.cTImg(
      f.ghiIMP +
        116 +
        "%26sid%3Dp" +
        f.C.pageId +
        ".l46332%26type%3DTargetedCoupons"
    );
    return !1;
  };
  addEventOnOverlay = function () {
    document.addEventListener(
      "GH_NOTIF_DISPLAY_UPDATE",
      function (a) {
        c.updateNotifNum((a && a.detail) || 0);
      },
      !1
    );
    i.delegate("input, .ghn-pop-rmv", "mousedown", function (a) {
      a.stopPropagation();
      a.preventDefault();
      return !1;
    });
    i.delegate(
      " .ghn-pop-rmv",
      "click touchend mouseenter mouseleave",
      function (a) {
        var e = b(this).closest("li").attr("data-uid");
        "click" === a.type || "touchend" === a.type
          ? ((o = 0), onRemoveNotiifcation(a, e))
          : "mouseenter" === a.type
          ? b(this).parent().find(".ghn-rmv-popover").show()
          : b(this).parent().find(".ghn-rmv-popover").hide();
      }
    );
    i.delegate(" .coupon-itm", "click touchend focusout", function (a) {
      if ("a" !== a.target.tagName.toLowerCase()) {
        a.stopPropagation();
        a.preventDefault();
        var e = b(this).closest("li").attr("data-cpn-code");
        if ("click" === a.type || "touchend" === a.type)
          onClickCouponButton(a, e),
            b(".coupon-itm .cpn-btn__copy").show(),
            b(".coupon-itm .cpn-btn__conf").addClass("hid"),
            ($copybtn = b(this).find(".cpn-btn__copy")),
            $copybtn.hide(),
            $copybtn.siblings(".cpn-btn__conf").removeClass("hid");
      } else "click" === a.type && f.Util.cTImg(f.ghiIMP + 117 + "%26sid%3Dp" + f.C.pageId + ".l47195");
    });
    i.delegate("#gh-eb-Alerts-o a.ghn-a-itm", "touchmove", function () {
      n = !0;
    });
    i.delegate("#gh-eb-Alerts-o a.ghn-a-itm", "click touchend", function (a) {
      var e = b(this).parent(),
        d = e.attr("data-uid"),
        g = e.attr("data-id");
      void 0 === d && (d = g);
      a.preventDefault();
      if (b(this).hasClass("disable") || n) return (n = !1);
      b(this).attr(
        "href",
        b(this).attr("href") +
          ".R" +
          (b("#ghn-ul li.ghn-li-itm").index(e) + 1 || -1) +
          ".TR" +
          b("#ghn-ul li.ghn-li-itm").length
      );
      a = b(this).attr("href");
      c.clickItem(d, a);
      return !1;
    });
  };
  addTabEvent = function () {
    f.Util.tabHidden({
      hidden: function () {
        c.isTabHidden = !0;
      },
      visible: function () {
        c.visibleTab();
      },
    });
  };
  addEvent = function () {
    addEventOnOverlay();
    addTabEvent();
  };
  var l = {
      addEvent: addEvent,
    },
    p = function (a, e) {
      25 < e
        ? b("#gh-eb-Alerts .gh-control").focus()
        : setTimeout(function () {
            var d = b("#gh-eb-Alerts-o a:first"),
              c = b("#ghn-err");
            d.length
              ? d.focus()
              : c.length
              ? b("#ghn-err").focus()
              : (e++, p(a, e));
          }, a);
    };
  return b.extend(c, {
    triggerViewTracking: function (a) {
      var e = (f && f.C && f.C.pageId) || "2380424",
        d = JSON.parse(
          JSON.stringify({
            eventFamily: "NOTF",
            eventAction: "VIEW",
            operationId: "",
            flushImmediately: !1,
            eventProperty: {
              sid: "",
              moduledtl: "mi:1",
              trkp: "",
            },
          })
        );
      d.operationId = e;
      d.eventProperty.sid = "p" + e + ".m1";
      d.eventProperty.trkp = "ni_error%3A" + a;
      window.jQuery
        ? b(document).trigger("pulsar", d)
        : window.triggerTracking && window.triggerTracking("pulsar", d);
    },
    makeGadgetCall: function (a) {
      var b = this;
      if ("HttpClient" in window) {
        var d = new window.HttpClient(
          "/gh/globalheaderonload?modules=NOTIFICATION_DWEB_OVERLAY_CONTENT&skipimp=true",
          "GET",
          {
            correlation:
              window.trkCorrelationSessionInfo &&
              "function" ===
                typeof window.trkCorrelationSessionInfo
                  .getTrackingCorrelationSessionInfo &&
              window.trkCorrelationSessionInfo.getTrackingCorrelationSessionInfo(),
          },
          null,
          {
            shouldRetry: !1,
            timeout: 5e3,
          }
        );
        d.handlers({
          onload: function (d) {
            if (
              d instanceof ProgressEvent &&
              ((d = d.target || d.currentTarget), d instanceof XMLHttpRequest)
            )
              try {
                var c = JSON.parse(d.responseText);
                c &&
                  0 == Object.keys(c).length &&
                  ((c.html = void 0), b.triggerViewTracking("1"));
                void 0 === c.html || (c.error && "auth_required" == c.error)
                  ? (c.error &&
                      "auth_required" == c.error &&
                      b.paintGadgetNotificationError(2, a),
                    b.paintGadgetNotificationError(6, a))
                  : b.paintFlyoutContent(c, a);
              } catch (f) {
                b.triggerViewTracking("4"),
                  b.paintGadgetNotificationError(6, a);
              }
          },
          onerror: function () {
            b.triggerViewTracking("2");
            b.paintGadgetNotificationError(6, a);
          },
        });
        d.initializeAndTrigger();
      }
    },
    parseInlineResources: function (a) {
      var b = "",
        d = "";
      if ((a = a.querySelectorAll("script")) && 0 < a.length) {
        for (var c = a.length, f = 0; f < c; f++) {
          var h = a[f];
          "nb_script" === h.id
            ? (b += " ; " + h.innerHTML)
            : (d += " ; " + h.innerHTML);
        }
        b = document.createTextNode(b + d);
        d = document.createElement("script");
        d.type = "text/javascript";
        d.appendChild(b);
        document.body.appendChild(d);
      }
    },
    paintGadgetNotificationError: function (a, b) {
      a || (a = 2);
      var d =
          "<div id='ghn-err'><span class='ghn-errb'>#TEXT#</span></div>".replace(
            "#TEXT#",
            c.errorCode[a]
          ),
        d = d.replace("ghn-errb", "ghn-errb ghn-errb-a");
      c.addGadgetError(b, a, d);
    },
    paintFlyoutContent: function (a, e) {
      b(e).html(a && a.html);
      this.parseInlineResources(b(e)[0], a && a.renderedComponents);
      "function" === typeof window.markoInitForOnDemand
        ? window.markoInitForOnDemand(a && a.renderedComponents)
        : "function" === typeof window.markoInitComponents &&
          window.markoInitComponents(a && a.renderedComponents);
    },
    addShowEventOnOverlay: function () {
      var a = b("#gh-eb-Alerts");
      b("#gh-eb-Alerts").removeClass("gh-hvr");
      a.hoverIntent({
        over: function () {
          b("#gh-eb-Alerts .gh-eb-li-a").unbind("click.preventEB_Click");
          setTimeout(function () {
            c.preventEB_Click("#gh-eb-Alerts", a);
          }, 300);
          c.removePopUp();
          c.openGadgetOverlay(a, "#gh-eb-Alerts-o");
          window.gadgetNotificationOverlayVisible = !0;
          var e = new CustomEvent("NOTIFICATION_OVERLAY_OPENED", {
            detail: "userHoverOver",
          });
          document.dispatchEvent(e);
        },
        out: function () {
          c.removeItem();
          c.closeOverlay(a);
          window.gadgetNotificationOverlayVisible = !1;
          var b = new CustomEvent("NOTIFICATION_OVERLAY_CLOSED", {
            detail: "userHoverOut",
          });
          document.dispatchEvent(b);
        },
      });
      c.preventEB_Click("#gh-eb-Alerts", a);
    },
    openOverlay: function (a, e, d) {
      var g = b(e);
      c.doOverlayExist()
        ? (f.userRecog &&
            (c.isError() &&
              (c.isProcessData && !c.isInit
                ? c.retryInitData()
                : c.updateNotifOverlay()),
            c.afterViewItem()),
          b(e).is(":hidden") && c.showOverlay())
        : (c.createEBO(d),
          g.data("ghi", 5),
          f.userRecog
            ? c.getDataAndShowOverlay()
            : (typeof c.storage !== c.undefinedStr &&
                c.storage &&
                c.storage.removeLocalStorage(),
              (d =
                "<div id='ghn-err'><span class='ghn-errb'>#TEXT#</span></div>".replace(
                  "#TEXT#",
                  c.errorCode[2]
                )),
              (d = d.replace("ghn-errb", "ghn-errb ghn-errb-a")),
              c.addError(e, 2, d)),
          c.showOverlay());
      b.fn.ghellipsis &&
        b.fn.ghellipsisDetails &&
        b(e).is(":visible") &&
        b(".ghn-desc-o").ghellipsis({
          row: 2,
        });
      b.fn.ghellipsisDetails &&
        b(e).is(":visible") &&
        b(".ghn-desc__min_details ").ghellipsisDetails({
          row: 2,
        });
      a.addClass(j);
    },
    openGadgetOverlay: function (a, e, d) {
      var g = b(e);
      c.doOverlayExist() ||
        (c.createEBO(d),
        g.data("ghi", 5),
        f.userAuth
          ? this.makeGadgetCall(e)
          : (this.triggerViewTracking("3"),
            (d =
              "<div id='ghn-err'><span class='ghn-errb'>#TEXT#</span></div>".replace(
                "#TEXT#",
                c.errorCode[2]
              )),
            (d = d.replace("ghn-errb", "ghn-errb ghn-errb-a")),
            c.addGadgetError(e, 2, d)));
      c.showOverlay();
      a.addClass(j);
    },
    closeOverlay: function (a, c) {
      a.removeClass(j);
      f.Util.closeOverlay(b("#gh-eb-Alerts .ghn-b"));
      (void 0 === c || c) &&
        b("#gh-eb-Alerts li[data-id]").removeClass("ghn-new");
    },
    isError: function () {
      return 0 === b("#ghn-err").length ? !1 : !0;
    },
    doOverlayExist: function () {
      return 0 === b("#gh-eb-Alerts-o").length ||
        0 === b("#gh-eb-Alerts-o").children().length
        ? !1
        : !0;
    },
    isOverlayOpen: function () {
      return b("#gh-eb-Alerts-o").is(":visible") ? !0 : !1;
    },
    dom: l,
    createEBO: function (a) {
      var c = b("#gh-eb-Alerts .gh-sublayer .ghn-b").outerWidth() - 8;
      b("#gh-eb-Alerts-o").length && b("#gh-eb-Alerts-o").remove();
      f.Util.hideOverlays();
      b("#gh-eb-Alerts .gh-sublayer").append(
        "<div id=gh-eb-Alerts-o class='gh-eb-o' style='" +
          (180 < c ? "min-width:" + c + "px" : "") +
          "'><div class=gh-o-l " +
          (a ? "tabindex=0" : "") +
          " >" +
          f.L10N.msg_loading +
          "</div></div>"
      );
      a && b("#gh-eb-Alerts-o .gh-o-l").focus();
    },
    preventEB_Click: function (a) {
      var e = b(a);
      b(a + " .gh-eb-li-a").bind("click.preventEB_Click", function (d, g) {
        var k = !0,
          h = 0;
        d.preventDefault();
        c.doOverlayExist()
          ? "none" === b(a + "-o").css("display")
            ? (c.showOverlay(), b(a).addClass("gh-eb-active"))
            : (b(a).removeClass("gh-eb-active"),
              f.Util.closeOverlay(b(a + " .ghn-b")),
              (k = !1))
          : (c.openGadgetOverlay(e, "#gh-eb-Alerts-o", g), (h = 200));
        g && k && p(h, 0);
      });
    },
    showOverlay: function () {
      f.Util.openOverlay(b("#gh-eb-Alerts .ghn-b"));
    },
    overlayTemplate: "<ul id='ghn-ul'>#TEXT#</ul>#SURVEY#",
    errorTemplate:
      "<div id='ghn-err'><span class='ghn-errb'>#TEXT#</span></div>",
    overlayHeight: 635,
    maxItems: 6,
    itemHeight: 106,
    itemLargeHeight: 57,
    ghEBAlerts_id: "#gh-eb-Alerts",
    overlay_o: "#gh-eb-Alerts-o",
    itemContainerId: "#ghn-ul",
    surverDivId: "#ghn-f",
    addEvent: l.addEvent,
    ebAClass: ".gh-eb-li-a",
    ebLiClass: ".gh-eb-li",
    ebLiActiveClass: m,
    ebLiActiveClassName: j,
    initGadget: function (a) {
      b("#gh-eb-Alerts .gh-eb-li-a").bind("click.ghn", function (a) {
        f.Util.cTImg(f.ghiIMP + (b("#gh-eb-Alerts-o").is(":hidden") ? 87 : 88));
        a.preventDefault();
      });
      this.addShowEventOnOverlay();
      if (f.userAuth || a)
        this.makeGadgetCall("#gh-eb-Alerts-o"), this.addEvent();
    },
    addGadgetError: function (a, e, d) {
      var f = d;
      "undefined" === typeof d &&
        (f =
          "<div id='ghn-err'><span class='ghn-errb'>#TEXT#</span></div>".replace(
            "#TEXT#",
            c.errorCode[e]
          ));
      b(a).html(f);
      b("#ghn-err a").click(function (a) {
        a.stopPropagation();
      });
    },
  });
}
(function (b) {
  GH.add("Notifications", function () {
    return {
      init: function () {
        var c =
            location &&
            location.search &&
            location.search.includes("mock=NOTIFICATION_DWEB_") &&
            GH &&
            GH.C &&
            "production" !== GH.C.env,
          a = GadgetNotification(GHalertBase, GH, GH.userID, b);
        a.initGadget(c);
        GH.alerts = a;
      },
    };
  });
})(GH.jQ);
(function (f) {
  GH.add("Cart", function () {
    var d = GH.vCJar,
      a = GH.C.ct,
      e = f("#gh-cart a"),
      g = f("#gh-minicart-hover .gh-eb-li-a"),
      h = GH.Util.getBundle("Cart");
    return {
      init: function () {
        var b = this;
        GH.resetCart = function (a) {
          b.appendCart(~~a);
        };
        d &&
          !GH.disablePDS &&
          (a instanceof Array && (a = a[2] || 0),
          GH.C.cgi ||
          GH.C["static"] ||
          203 == GH.C.siteId ||
          typeof oDoc !== GH.undefinedStr
            ? ((a = ~~d.readCookie("dp1", "cq")),
              b.appendCart(a),
              203 == GH.C.siteId &&
                b.appendCart(
                  ~~(/^(\d+):?/.exec(d.readCookie("dp1", "exc")) || [
                    0, 0,
                  ])[1] || a
                ))
            : typeof a != GH.undefinedStr &&
              (b.appendCart(~~a), d.writeCookielet("dp1", "cq", ~~a)));
      },
      appendCart: function (b) {
        var a = !e.length ? g : e;
        if (a.length) {
          f("#gh-cart-n").remove();
          cartObj = !e.length ? g : e;
          var c = h[0 == b ? "zero" : 1 == b ? "one" : "many"];
          c &&
            ((c = GH.Util.mergeContent(c, {
              itemcount: b,
            })),
            cartObj.attr({
              alt: c,
              "aria-label": c,
            }));
          0 < b &&
            (a.append(
              "<i id=gh-cart-n aria-hidden=true>" +
                (99 < b ? "99+" : b) +
                "</i>"
            ),
            a.addClass("gh-cart-count-" + (99 < b ? 3 : 9 < b ? 2 : 1)));
        }
      },
    };
  });
})(GH.jQ);
ebayContent["GlobalHeaderWeb/Cart"] = {
  one: "\u0412 \u0432\u0430\u0448\u0435\u0439 \u043a\u043e\u0440\u0437\u0438\u043d\u0435 ${itemcount} \u0442\u043e\u0432\u0430\u0440",
  many: "\u0412 \u0432\u0430\u0448\u0435\u0439 \u043a\u043e\u0440\u0437\u0438\u043d\u0435 ${itemcount} \u0442\u043e\u0432.",
  zero: "\u0412\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430",
  genericError:
    "\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u0427\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435, \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043a\u043e\u0440\u0437\u0438\u043d\u0443.",
};
ebayContent["GlobalHeaderWeb/AutocompleteJavascriptContent"] = {
  acNoSuggestions:
    "\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442",
  acHideSuggestions:
    "\u0421\u043a\u0440\u044b\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b eBay",
  acShowSuggestions:
    "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u043d\u0430\u0442\u044b \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043f\u043e\u0438\u0441\u043a\u0430",
  acPopularProducts:
    "\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0442\u043e\u0432\u0430\u0440\u044b",
  acSuggCategory: "${suggestion} <u>\u2013</u> <i>${category}</i>",
  acCatalog: '<a href="http://www.ebay.com/ctg/?_pid=#P#&amp;_trksid="></a>',
  acAllCategories:
    "\u0412\u0441\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",
  acViewAllSaved:
    '<a href="/myb/SavedSearches">\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0441\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435<em>&gt;</em></a>',
  acSuggCategoryIn:
    "${suggestion} <u>\u2013</u> <u>\u0432</u> <i>${category}</i>",
  acSuggCategorySaved:
    "${suggestion} <u>\u0432</u> <i>${category}</i><em>|</em> <span>\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435</span>",
  acSuggSaved:
    "${suggestion} <span>\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435</span>",
  acSuggCategoryRecent:
    "${suggestion} <u>\u0432</u> <i>${category}</i><em>|</em> <span>\u041d\u0435\u0434\u0430\u0432\u043d\u0438\u0435</span>",
  acSuggRecent:
    "${suggestion} <span>\u041d\u0435\u0434\u0430\u0432\u043d\u0438\u0435</span>",
  acSuggStore:
    "${suggestion} <u>\u2013</u> <u>\u0432</u><i>\u041c\u0430\u0433\u0430\u0437\u0438\u043d\u044b eBay</i>",
  acSuggCategoryInAria:
    "${suggestion} \u0432 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 ${category}",
  acViewAllSavedAria:
    "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0441\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435",
  acHedSavedSearch:
    "\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043f\u043e\u0438\u0441\u043a\u0430",
  acHedSavedSeller:
    "\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u043e\u0434\u0430\u0432\u0446\u044b",
  acHedRecentSearch:
    "\u041d\u0435\u0434\u0430\u0432\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043f\u043e\u0438\u0441\u043a\u0430",
  acHedPopularSearch:
    "\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043f\u043e\u0438\u0441\u043a\u0430",
  acResultsAccessibility:
    "${count} \u0440\u0435\u0437\u0443\u043b\u044c\u0442.; \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u0441\u0442\u0440\u0435\u043b\u043a\u0430\u043c\u0438 \u0432\u0432\u0435\u0440\u0445 \u0438 \u0432\u043d\u0438\u0437 \u0438\u043b\u0438 \u043f\u0440\u043e\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u043b\u044c\u0446\u0435\u043c \u0432\u043b\u0435\u0432\u043e \u0438 \u0432\u043f\u0440\u0430\u0432\u043e \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445 \u0441\u0435\u043d\u0441\u043e\u0440\u043d\u043e\u0433\u043e \u0432\u0432\u043e\u0434\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438.",
  acNewnessIndicator:
    "\u043d\u043e\u0432\u044b\u0439(\u044b\u0445) \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442.",
};
(function (d) {
  function i(g, c) {
    d.ajax(g, {
      dataType: "jsonp",
      cache: !0,
      jsonp: !1,
      complete: c,
      error: function (d) {
        200 != d.status && GH.Util.cTImg(GH.ghiIMP + 30);
      },
    });
  }
  var l = {
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
  };
  GH.add("SearchBox_AutoComplete", function () {
    var g;
    return {
      acDisabledClass: "gh-acHidden",
      init: function (c) {
        function j() {
          d(this).unbind("focusin keydown", j);
          window.performance &&
            window.localStorage &&
            (localStorage.removeItem("ac_first_interact_timer"),
            performance.mark("ac_first_interact_timer_start"));
        }
        var b = GH.vCJar,
          f = GH.Util.getBundle("AutocompleteJavascriptContent");
        g = this;
        if (!c && b && 1 == b.getBitFlag(b.readCookie("dp1", "pbf"), 29))
          d(GH.ghAC_id).after(
            "<a id=ghAC-show class='gh-spr icas' title='" +
              f.acShowSuggestions +
              "' href='#'></a>"
          ),
            d(GH.componentID).addClass(g.acDisabledClass),
            d(GH.ghAC_id)
              .attr({
                autocomplete: "on",
                "aria-haspopup": "false",
              })
              .removeAttr("autocapitalize autocorrect spellcheck"),
            d("#ghAC-show").bind("click", function (a) {
              var c,
                b = GH.vCJar;
              a.preventDefault();
              b &&
                ((a = b.readCookie("dp1", "pbf")),
                b.writeCookielet("dp1", "pbf", b.setBitFlag(a, 29, 0)));
              d(GH.componentID).removeClass(g.acDisabledClass);
              GH.Util.cTImg(
                "/roverclk/0/0/9?trknvp=sid%3D" + GH.Util.cTId("1315")
              );
              GH.SearchBox_AutoComplete.init(!0);
              d("#ghAC-show").remove();
              d(GH.ghAC_id).mouseenter();
              c = function () {
                typeof d(GH.ghAC_id).autocomplete == GH.functionStr
                  ? d(GH.ghAC_id).autocomplete("search").focus()
                  : setTimeout(c, 300);
              };
              setTimeout(c, 300);
            });
        else {
          d(GH.ghAC_id).bind("focusin keydown", j);
          var e = window.localStorage,
            b = e.getItem("autocomplete_dweb_last_updated"),
            c = e.getItem("autocomplete_dweb_url"),
            b = b && c && 18e5 > Date.now() - b,
            f = e.getItem("autocomplete_last_user"),
            h = (window.GH.userAuth && window.GH.userID) || "";
          if (null === f || f !== h)
            (b = !1), e.setItem("autocomplete_last_user", h);
          if (b) i(c);
          else {
            var c = window.location.origin,
              a = window.GH.Util.getSiteID(),
              b = /localhost/.test(c),
              f = /\.stratus\.qa\./.test(c),
              h = /\.qa\./.test(c),
              m = /\.latest\./.test(c),
              a = l["_" + a],
              k =
                (f
                  ? c
                  : h || b
                  ? a && a.cc
                    ? "https://www." + a.cc + ".paradise.qa.ebay.com"
                    : "https://www.qa.ebay.com"
                  : m
                  ? a && a.hasSubdomain
                    ? "https://www." + a.cc + ".latest." + a.domain
                    : a
                    ? "https://www.latest." + a.domain
                    : "https://www.latest.ebay.com"
                  : a && a.hasSubdomain
                  ? "https://www." + a.cc + "." + a.domain
                  : a
                  ? "https://www." + a.domain
                  : "https://www.ebay.com") + "/sch/ajax/autocomplete";
            d.ajax(k, {
              xhrFields: {
                withCredentials: !0,
              },
              success: function (a) {
                try {
                  var c = a.url,
                    b = a.activeFactors;
                  c &&
                    b &&
                    (e.setItem("autocomplete_dweb_last_updated", Date.now()),
                    e.setItem("autocomplete_dweb_url", c),
                    e.setItem("autocomplete_active_factors", JSON.stringify(b)),
                    i(c, function () {
                      if (window.performance && performance.getEntriesByName) {
                        var a = performance.getEntriesByName(k)[0],
                          b = performance.getEntriesByName(c)[0];
                        a &&
                          b &&
                          (e.setItem("ac_loader_timer", a.duration),
                          e.setItem("ac_js_timer", b.duration));
                      }
                    }));
                } catch (d) {
                  console.error(d);
                }
              },
              error: console.error,
            });
          }
        }
      },
    };
  });
})(GH.jQ);
(function (b) {
  GH.add("TMX", function () {
    var a;
    return {
      execute_immediately: function () {
        a = this;
        a.tmxEnabled = !0;
        if (GH.C.tmx) {
          var c = function () {
            GH.userAuth &&
              a.tmxEnabled &&
              (b("body").append(
                '<iframe src="' +
                  GH.C.tmx +
                  '" style="display:none;" tabindex="-1"></iframe>'
              ),
              (a.tmxEnabled = !1),
              0.1 >= Math.random() && GH.Util.cTImg(GH.ghiIMP + 142));
          };
          b(document).on("gh_tmx_stop", function () {
            a.tmxEnabled = !1;
            b(window).off("load.ght");
          });
          b(document).on("gh_tmx_load", function () {
            a.tmxEnabled = !0;
            c();
          });
          b(window).on("load.ght", function () {
            c();
          });
        }
      },
    };
  });
})(GH.jQ);
GH.getWidgetDeliveryPlatform = function () {
  return {
    base_path: "/gh",
    new_buyer_acquistion: "/useracquisition",
  };
};
(function () {
  GH.add("WIDGET_DELIVERY_PLATFORM", function () {
    function a() {
      if (b) {
        var a = document.createElement("script");
        a.src = b;
        a.async = !0;
        document.body.appendChild(a);
      }
    }
    var b =
      GH.urls.widget_delivery_platform &&
      GH.Util.getSecURL(GH.urls.widget_delivery_platform);
    return {
      execute_immediately: function () {
        window.addEventListener("load", function () {
          b &&
            ("requestIdleCallback" in window
              ? window.requestIdleCallback(a)
              : "requestAnimationFrame" in window
              ? window.requestAnimationFrame(a)
              : a());
        });
      },
    };
  });
})(GH.jQ);
(function () {
  GH.add("ABDETECTION", function () {
    var a;
    return {
      cfg: {},
      postDetectionActionsCompleted: !1,
      init: function () {
        a = this;
        a.cfg = window.GH_ABD && window.GH_ABD.cfg;
        window.addEventListener("load", a.onLoad.bind(a));
        window.addEventListener("beforeunload", a.onUnload.bind(a));
      },
      onLoad: function () {
        window.GH_ABD &&
          window.GH_ABD.detectionCompleted &&
          this.postDetectionActions();
      },
      onUnload: function () {
        this.postDetectionActionsCompleted || this.postDetectionActions();
      },
      postDetectionActions: function () {
        this.postDetectionActionsCompleted = !0;
        window &&
        window.GH_ABD &&
        (window.GH_ABD.bannerCollapsed ||
          "undefined" === typeof window.GH_ABD.externaJs ||
          !1 === window.GH_ABD.externaJs)
          ? this.setCookieAndTrack(1)
          : this.setCookieAndTrack(0);
      },
      setCookieAndTrack: function (b) {
        try {
          a.readCookieValue().toString() !== b.toString()
            ? (a.writeToCookie(a.cfg.ckbit, b),
              0 === b
                ? a.triggerEvent({
                    state: "JUST_DISABLED",
                  })
                : 1 === b &&
                  a.triggerEvent({
                    state: "JUST_ENABLED",
                  }))
            : 1 === b &&
              a.triggerEvent({
                state: "ALREADY_ENABLED",
              });
        } catch (e) {}
      },
      readCookieValue: function () {
        if (GH && GH.vCJar) {
          var b = GH.vCJar.readCookie("dp1", "pbf");
          return GH.vCJar.getBitFlag(b, a.cfg.ckbit);
        }
      },
      writeToCookie: function (a, e) {
        var c;
        if (GH && GH.vCJar && a) {
          c = GH.vCJar;
          var d = c.readCookie("dp1", "pbf"),
            d = c.setBitFlag(d || "#", a, e || 0);
          c.writeCookielet("dp1", "pbf", d, "", "");
        }
      },
      triggerEvent: function (a) {
        "function" === typeof document.dispatchEvent &&
          "function" === typeof window.CustomEvent &&
          document.dispatchEvent(
            new CustomEvent("GH_ABD_STATUS", {
              detail: a,
            })
          );
      },
    };
  });
})();
(function () {
  GH.add("WEB_RESOURCE_TRACKER", function () {
    function b() {
      if (c) {
        var a = document.createElement("script");
        a.src = c;
        a.async = !1;
        document.body.appendChild(a);
      }
    }
    var c =
      GH.urls.web_resource_tracker &&
      GH.Util.getSecURL(GH.urls.web_resource_tracker);
    return {
      execute_immediately: function () {
        window.addEventListener("load", function () {
          if (c) {
            var a = new Date().getTime();
            "undefined" !== typeof $ssgST &&
              0 === a % 10 &&
              ("requestIdleCallback" in window
                ? window.requestIdleCallback(b)
                : "requestAnimationFrame" in window
                ? window.requestAnimationFrame(b)
                : b());
          }
        });
      },
    };
  });
})(GH.jQ);
(function () {
  GH &&
    GH.add("AUTO_TRACKING_WIDGET", function () {
      function c() {
        if (b) {
          var a = document.createElement("script");
          a.src = b;
          a.async = !0;
          document.body.appendChild(a);
        }
      }
      var b = null;
      GH.urls &&
        (b =
          GH.urls.auto_tracking_widget &&
          GH.Util.getSecURL(GH.urls.auto_tracking_widget));
      return {
        execute_immediately: function () {
          window.addEventListener("load", function () {
            if (b) {
              window._eaTrks = window._eaTrks || [];
              var a = function () {
                window._eaTrks.push(arguments);
              };
              a("config", "eventFamily", "AUTO_TRACKING");
              a("start");
              "requestIdleCallback" in window
                ? window.requestIdleCallback(c)
                : "requestAnimationFrame" in window
                ? window.requestAnimationFrame(c)
                : c();
            }
          });
        },
      };
    });
})(GH.jQ);
ebayContent["GlobalHeaderWeb/InflowJSContent"] = {
  url: '<a href="http://www.ebay.com/ifh/inflowcomponent?callback=Inflow.cb"></a>',
};
(function () {
  GH.add("Inflow", function () {
    return {
      init: function () {
        window.addEventListener("load", function () {
          var a = document.getElementById("gh-ihelp"),
            a = a && "" !== a.innerHTML ? a.innerHTML : "{}",
            a = /^[\],:{}\s]*$/.test(
              a
                .replace(/\\["\\\/bfnrtu]/g, "@")
                .replace(
                  /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                  "]"
                )
                .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
            )
              ? JSON.parse(a)
              : {};
          setTimeout(function () {
            var a = GH.Util.getSecURL(
              GH.Util.getHref(GH.Util.getBundle("InflowJSContent").url)
            );
            a &&
              GH.Inflow.loadScript(
                a +
                  "&fromGH=true&input=" +
                  encodeURIComponent(JSON.stringify(GH.Inflow.getData()))
              );
          }, a.delay || 300);
        });
      },
      getData: function () {
        var a = [
            31, 215, 248, 900, 107, 22, 206, 12, 28, 44, 46, 51, 60, 61, 63, 85,
            91, 136, 150, 158, 160, 214, 225, 252, 213, 223,
          ],
          a =
            "function" == typeof a.indexOf &&
            -1 < a.indexOf(parseInt(GH.C.siteId));
        return GH.Inflow.extend(
          JSON.parse(
            (document.getElementById("inflowparameters") || []).value || "{}"
          ),
          {
            pageId: GH.C.pageId,
            gbhEnabled: a,
          },
          a
            ? {
                gbhSiteId: parseInt(GH.C.siteId),
                gbhLanguage: GH.C.lng || "",
              }
            : {}
        );
      },
      extend: function () {
        for (var a = 1; a < arguments.length; a++)
          for (var b in arguments[a])
            arguments[a].hasOwnProperty(b) &&
              (arguments[0][b] = arguments[a][b]);
        return arguments[0];
      },
      loadScript: function (a) {
        var b = document.createElement("script");
        b.type = "text/javascript";
        b.src = a;
        document.body.appendChild(b);
      },
    };
  });
})();
ebayContent["GlobalHeaderWeb/BackToTopJavascriptContent"] = {
  arrowImage:
    '<img title="\u041a \u043d\u0430\u0447\u0430\u043b\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b" src="http://ir.ebaystatic.com/pictures/aw/pics/globalheader/btt.png" alt="\u041a \u043d\u0430\u0447\u0430\u043b\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b" border="0" height="76" width="33" _id="gh-bti"/>',
};
(function (c) {
  GH.add("BackToTop", function () {
    var a,
      e = GH.Util.getBundle("BackToTopJavascriptContent");
    return {
      bttWindow: GH.jQ(window),
      init: function () {
        a = this;
        GH.jQ(".sp-tp").remove();
        a.bttWindow.on("scroll.gh", a.rerun);
      },
      rerun: function () {
        a.bttWindow.off("scroll.gh", a.rerun);
        window.setTimeout(function () {
          var b = a.bttWindow.scrollTop(),
            d = 350 < b;
          if (
            void 0 !== GH.previousTopPosition &&
            GH.previousTopPosition === b
          ) {
            if (!GH.$ghbt) {
              GH.$ghbt = GH.jQ("<button/>").attr({
                id: "gh-bt",
                class: "gh-hide-if-nocss",
              });
              var f = c(GH.Util.getSecURL(e.arrowImage, !0, !0)).attr(
                "id",
                "gh-bti"
              );
              GH.$ghbt.append(f);
              GH.jQ("body").append(GH.$ghbt);
              GH.$ghbt.click(function (a) {
                a.preventDefault();
                GH.jQ("body,html").animate(
                  {
                    scrollTop: 0,
                  },
                  /iPad/i.test(GH.userAgent) ? 0 : 150,
                  function () {
                    c("#gh-gb").focus();
                  }
                );
                GH.Util.cTImg(GH.ghiIMP + 43);
              });
            }
            GH.$ghbt.animate(
              {
                right: d ? -1 : -1 * GH.$ghbt.outerWidth(),
              },
              d ? 500 : 50,
              function () {
                if (b === a.bttWindow.scrollTop())
                  a.bttWindow.on("scroll.gh", a.rerun);
                else
                  (GH.previousTopPosition = a.bttWindow.scrollTop()), a.rerun();
              }
            );
          } else (GH.previousTopPosition = b), a.rerun();
        }, 100);
      },
    };
  });
})(GH.jQ);
(function (e) {
  GH.add("PulsarPolyfill", function () {
    return {
      init: function () {
        function f(c, b) {
          c = c || {};
          if ("object" === typeof b)
            for (var a in b)
              if (b.hasOwnProperty(a)) {
                var d = g[a] ? g[a] : a;
                "object" === typeof b[a]
                  ? 0 < b[a].length
                    ? (c[d] = b[a].join(","))
                    : f(c, b[a])
                  : ("moduledtl" === d && (b[a] = decodeURIComponent(b[a])),
                    (c[d] = b[a]));
              }
          return c;
        }
        var i = "object" === typeof _plsUBTTQ,
          h = !1;
        try {
          (h =
            "object" === typeof raptor &&
            "function" === typeof raptor.require &&
            "function" ===
              typeof raptor.require("raptor.tracking.core.Tracker")),
            raptor.require("raptor.tracking.core.Tracker");
        } catch (j) {}
        var g = {
          eventAction: "eactn",
          eventFamily: "efam",
          operationId: "cp",
        };
        if (!i && h)
          e(document).on("pulsar", function (c, b) {
            var a =
              f(
                {},
                b ||
                  (c &&
                    c.originalEvent &&
                    c.originalEvent.detail &&
                    c.originalEvent.detail[0]) ||
                  {}
              ) || {};
            a.imp = "2208336";
            a && e(document).trigger("rover", a);
          });
      },
    };
  });
})(GH.jQ);
