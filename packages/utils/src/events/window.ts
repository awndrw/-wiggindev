import { EventListener, EventName, DomEventListener } from './eventTypes';

export const on = <E extends EventName<WindowEventMap>>(
    event: E,
    listener: EventListener<WindowEventMap, E>
) => {
    window.addEventListener(event, listener as DomEventListener);
};

export const off = <E extends EventName<WindowEventMap>>(
    event: E,
    listener: EventListener<WindowEventMap, E>
) => {
    window.removeEventListener(event, listener as DomEventListener);
};

export const once = <E extends EventName<WindowEventMap>>(
    event: E,
    listener: EventListener<WindowEventMap, E>
) => {
    const wrappedListener: EventListener<WindowEventMap, E> = e => {
        listener(e);
        off(event, wrappedListener);
    };
    on(event, wrappedListener);
};

export const trigger = (event: string) => {
    const customEvent = new CustomEvent(event);
    window.dispatchEvent(customEvent);
};
