import n from 'react';
import { events as e } from '@wiggindev/utils';
var t = 'undefined' != typeof window ? n.useLayoutEffect : n.useEffect,
    r = function (e) {
        var r = n.useRef(e);
        return (
            t(function () {
                r.current = e;
            }),
            n.useMemo(function () {
                return r.current;
            }, [])
        );
    },
    u = function (t, u, f) {
        var o = r(u);
        n.useEffect(
            function () {
                var n = f.current;
                if (n && n.addEventListener)
                    return (
                        e.element.on(n, t, o),
                        function () {
                            return e.element.off(n, t, o);
                        }
                    );
            },
            [f, t, o]
        );
    },
    f = function (t, u) {
        var f = r(u);
        n.useEffect(
            function () {
                if (document && document.addEventListener)
                    return (
                        e.document.on(t, f),
                        function () {
                            return e.document.off(t, f);
                        }
                    );
            },
            [t, f]
        );
    },
    o = function (t, u) {
        var f = r(u);
        n.useEffect(
            function () {
                if (window && window.addEventListener)
                    return (
                        e.window.on(t, f),
                        function () {
                            return e.window.off(t, f);
                        }
                    );
            },
            [t, f]
        );
    },
    i = function (e) {
        var t = n.useRef();
        return (
            n.useEffect(
                function () {
                    t.current = e;
                },
                [e]
            ),
            t.current
        );
    };
export {
    f as useDocumentEventListener,
    r as useEvent,
    u as useEventListener,
    t as useIsomorphicLayoutEffect,
    i as usePrevious,
    o as useWindowEventListener,
};
//# sourceMappingURL=index.module.js.map
