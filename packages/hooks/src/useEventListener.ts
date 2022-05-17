import React from 'react';
import events from '@wiggindev/events';
import type { EventName, EventListener } from '@wiggindev/events';
import { useEvent } from './useEvent';

export const useEventListener = <
    K extends EventName<HTMLElementEventMap>,
    E extends HTMLElement
>(
    eventName: K,
    listener: EventListener<HTMLElementEventMap, K>,
    element: React.RefObject<E>
) => {
    const stableListener = useEvent(listener);
    React.useEffect(() => {
        const node = element.current;
        if (!node || !node.addEventListener) {
            return;
        }
        events.element.on(node, eventName, stableListener);
        return () => events.element.off(node, eventName, stableListener);
    }, [element, eventName, stableListener]);
};
