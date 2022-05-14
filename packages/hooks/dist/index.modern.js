import e from 'react';
import { events as t } from '@wiggindev/utils';
const n = 'undefined' != typeof window ? e.useLayoutEffect : e.useEffect,
    o = t => {
        const o = e.useRef(t);
        return (
            n(() => {
                o.current = t;
            }),
            e.useMemo(() => o.current, [])
        );
    },
    r = (n, r, f) => {
        const u = o(r);
        e.useEffect(() => {
            const e = f.current;
            if (e && e.addEventListener)
                return t.element.on(e, n, u), () => t.element.off(e, n, u);
        }, [f, n, u]);
    },
    f = (n, r) => {
        const f = o(r);
        e.useEffect(() => {
            if (document && document.addEventListener)
                return t.document.on(n, f), () => t.document.off(n, f);
        }, [n, f]);
    },
    u = (n, r) => {
        const f = o(r);
        e.useEffect(() => {
            if (window && window.addEventListener)
                return t.window.on(n, f), () => t.window.off(n, f);
        }, [n, f]);
    },
    c = t => {
        const n = e.useRef();
        return (
            e.useEffect(() => {
                n.current = t;
            }, [t]),
            n.current
        );
    };
export {
    f as useDocumentEventListener,
    o as useEvent,
    r as useEventListener,
    n as useIsomorphicLayoutEffect,
    c as usePrevious,
    u as useWindowEventListener,
};
//# sourceMappingURL=index.modern.js.map
