import { EventListener, EventName, DomEventListener } from './eventTypes';

export const on = <E extends EventName<DocumentEventMap>>(
    event: E,
    listener: EventListener<DocumentEventMap, E>
) => {
    document.addEventListener(event, listener as DomEventListener);
};

export const off = <E extends EventName<DocumentEventMap>>(
    event: E,
    listener: EventListener<DocumentEventMap, E>
) => {
    document.removeEventListener(event, listener as DomEventListener);
};

export const once = <E extends EventName<DocumentEventMap>>(
    event: E,
    listener: EventListener<DocumentEventMap, E>
) => {
    const wrappedListener: EventListener<DocumentEventMap, E> = e => {
        listener(e);
        off(event, wrappedListener);
    };
    on(event, wrappedListener);
};

export const trigger = (event: string) => {
    const customEvent = new CustomEvent(event);
    document.dispatchEvent(customEvent);
};
