import React from 'react';
import { events, EventName, EventListener } from '@wiggindev/utils';
import { useEvent } from './useEvent';

export const useWindowEventListener = <K extends EventName<WindowEventMap>>(
    eventName: K,
    listener: EventListener<WindowEventMap, K>
) => {
    const stableListener = useEvent(listener);
    React.useEffect(() => {
        if (!window || !window.addEventListener) {
            return;
        }
        events.window.on(eventName, stableListener);
        return () => events.window.off(eventName, stableListener);
    }, [eventName, stableListener]);
};
