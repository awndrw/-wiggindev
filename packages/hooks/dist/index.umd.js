!(function (e, n) {
    'object' == typeof exports && 'undefined' != typeof module
        ? n(exports, require('react'), require('@wiggindev/utils'))
        : 'function' == typeof define && define.amd
        ? define(['exports', 'react', '@wiggindev/utils'], n)
        : n(((e || self).hooks = {}), e.react, e.utils);
})(this, function (e, n, t) {
    function u(e) {
        return e && 'object' == typeof e && 'default' in e ? e : { default: e };
    }
    var f = /*#__PURE__*/ u(n),
        o =
            'undefined' != typeof window
                ? f.default.useLayoutEffect
                : f.default.useEffect,
        r = function (e) {
            var n = f.default.useRef(e);
            return (
                o(function () {
                    n.current = e;
                }),
                f.default.useMemo(function () {
                    return n.current;
                }, [])
            );
        };
    (e.useDocumentEventListener = function (e, n) {
        var u = r(n);
        f.default.useEffect(
            function () {
                if (document && document.addEventListener)
                    return (
                        t.events.document.on(e, u),
                        function () {
                            return t.events.document.off(e, u);
                        }
                    );
            },
            [e, u]
        );
    }),
        (e.useEvent = r),
        (e.useEventListener = function (e, n, u) {
            var o = r(n);
            f.default.useEffect(
                function () {
                    var n = u.current;
                    if (n && n.addEventListener)
                        return (
                            t.events.element.on(n, e, o),
                            function () {
                                return t.events.element.off(n, e, o);
                            }
                        );
                },
                [u, e, o]
            );
        }),
        (e.useIsomorphicLayoutEffect = o),
        (e.usePrevious = function (e) {
            var n = f.default.useRef();
            return (
                f.default.useEffect(
                    function () {
                        n.current = e;
                    },
                    [e]
                ),
                n.current
            );
        }),
        (e.useWindowEventListener = function (e, n) {
            var u = r(n);
            f.default.useEffect(
                function () {
                    if (window && window.addEventListener)
                        return (
                            t.events.window.on(e, u),
                            function () {
                                return t.events.window.off(e, u);
                            }
                        );
                },
                [e, u]
            );
        });
});
//# sourceMappingURL=index.umd.js.map
