var e=require("react"),t=require("@wiggindev/utils");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=/*#__PURE__*/n(e),r="undefined"!=typeof window?u.default.useLayoutEffect:u.default.useEffect,f=function(e){var t=u.default.useRef(e);return r(function(){t.current=e}),u.default.useMemo(function(){return t.current},[])};exports.useDocumentEventListener=function(e,n){var r=f(n);u.default.useEffect(function(){if(document&&document.addEventListener)return t.events.document.on(e,r),function(){return t.events.document.off(e,r)}},[e,r])},exports.useEvent=f,exports.useEventListener=function(e,n,r){var o=f(n);u.default.useEffect(function(){var n=r.current;if(n&&n.addEventListener)return t.events.element.on(n,e,o),function(){return t.events.element.off(n,e,o)}},[r,e,o])},exports.useIsomorphicLayoutEffect=r,exports.usePrevious=function(e){var t=u.default.useRef();return u.default.useEffect(function(){t.current=e},[e]),t.current},exports.useWindowEventListener=function(e,n){var r=f(n);u.default.useEffect(function(){if(window&&window.addEventListener)return t.events.window.on(e,r),function(){return t.events.window.off(e,r)}},[e,r])};
//# sourceMappingURL=index.cjs.map
