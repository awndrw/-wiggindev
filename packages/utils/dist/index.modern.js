const e = (e, n) => {
        document.addEventListener(e, n);
    },
    n = (e, n) => {
        document.removeEventListener(e, n);
    },
    t = (e, n) => {
        window.addEventListener(e, n);
    },
    o = (e, n) => {
        window.removeEventListener(e, n);
    },
    r = (e, n, t) => {
        e.addEventListener(n, t);
    },
    s = (e, n, t) => {
        e.removeEventListener(n, t);
    },
    d = {
        document: {
            __proto__: null,
            on: e,
            off: n,
            once: (t, o) => {
                const r = e => {
                    o(e), n(t, r);
                };
                e(t, r);
            },
            trigger: e => {
                const n = new CustomEvent(e);
                document.dispatchEvent(n);
            },
        },
        window: {
            __proto__: null,
            on: t,
            off: o,
            once: (e, n) => {
                const r = t => {
                    n(t), o(e, r);
                };
                t(e, r);
            },
            trigger: e => {
                const n = new CustomEvent(e);
                window.dispatchEvent(n);
            },
        },
        element: {
            __proto__: null,
            on: r,
            off: s,
            once: (e, n, t) => {
                const o = r => {
                    t(r), s(e, n, o);
                };
                r(e, n, o);
            },
            trigger: (e, n) => {
                const t = new CustomEvent(n);
                e.dispatchEvent(t);
            },
        },
    },
    i = (e, n) => {
        let t, o;
        return (...r) => (
            t ||
                ((t = !0),
                setTimeout(() => (t = !1), n),
                (o = e.apply(void 0, r))),
            o
        );
    },
    c = () => {};
export { d as events, c as noop, i as throttle };
//# sourceMappingURL=index.modern.js.map
