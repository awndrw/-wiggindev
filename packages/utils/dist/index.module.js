var n = function (n, t) {
        document.addEventListener(n, t);
    },
    t = function (n, t) {
        document.removeEventListener(n, t);
    },
    e = function (n, t) {
        window.addEventListener(n, t);
    },
    o = function (n, t) {
        window.removeEventListener(n, t);
    },
    i = function (n, t, e) {
        n.addEventListener(t, e);
    },
    u = function (n, t, e) {
        n.removeEventListener(t, e);
    },
    c = {
        document: {
            __proto__: null,
            on: n,
            off: t,
            once: function (e, o) {
                n(e, function n(i) {
                    o(i), t(e, n);
                });
            },
            trigger: function (n) {
                var t = new CustomEvent(n);
                document.dispatchEvent(t);
            },
        },
        window: {
            __proto__: null,
            on: e,
            off: o,
            once: function (n, t) {
                e(n, function e(i) {
                    t(i), o(n, e);
                });
            },
            trigger: function (n) {
                var t = new CustomEvent(n);
                window.dispatchEvent(t);
            },
        },
        element: {
            __proto__: null,
            on: i,
            off: u,
            once: function (n, t, e) {
                i(n, t, function o(i) {
                    e(i), u(n, t, o);
                });
            },
            trigger: function (n, t) {
                var e = new CustomEvent(t);
                n.dispatchEvent(e);
            },
        },
    },
    r = function (n, t) {
        var e, o;
        return function () {
            return (
                e ||
                    ((e = !0),
                    setTimeout(function () {
                        return (e = !1);
                    }, t),
                    (o = n.apply(void 0, [].slice.call(arguments)))),
                o
            );
        };
    },
    f = function () {};
export { c as events, f as noop, r as throttle };
//# sourceMappingURL=index.module.js.map
