!(function (n, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? t(exports)
        : 'function' == typeof define && define.amd
        ? define(['exports'], t)
        : t(((n || self).utils = {}));
})(this, function (n) {
    var t = function (n, t) {
            document.addEventListener(n, t);
        },
        e = function (n, t) {
            document.removeEventListener(n, t);
        },
        o = function (n, t) {
            window.addEventListener(n, t);
        },
        i = function (n, t) {
            window.removeEventListener(n, t);
        },
        u = function (n, t, e) {
            n.addEventListener(t, e);
        },
        f = function (n, t, e) {
            n.removeEventListener(t, e);
        },
        c = void 0;
    (n.events = {
        document: {
            __proto__: null,
            on: t,
            off: e,
            once: function (n, o) {
                t(n, function t(i) {
                    o(i), e(n, t);
                });
            },
            trigger: function (n) {
                var t = new CustomEvent(n);
                document.dispatchEvent(t);
            },
        },
        window: {
            __proto__: null,
            on: o,
            off: i,
            once: function (n, t) {
                o(n, function e(o) {
                    t(o), i(n, e);
                });
            },
            trigger: function (n) {
                var t = new CustomEvent(n);
                window.dispatchEvent(t);
            },
        },
        element: {
            __proto__: null,
            on: u,
            off: f,
            once: function (n, t, e) {
                u(n, t, function o(i) {
                    e(i), f(n, t, o);
                });
            },
            trigger: function (n, t) {
                var e = new CustomEvent(t);
                n.dispatchEvent(e);
            },
        },
    }),
        (n.noop = function () {}),
        (n.throttle = function (n, t) {
            var e, o;
            return function () {
                return (
                    e ||
                        ((e = !0),
                        setTimeout(function () {
                            return (e = !1);
                        }, t),
                        (o = n.apply(c, [].slice.call(arguments)))),
                    o
                );
            };
        });
});
//# sourceMappingURL=index.umd.js.map
