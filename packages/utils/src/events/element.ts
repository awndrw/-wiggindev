import { EventListener, EventName, DomEventListener } from './eventTypes';

export const on = <E extends EventName<HTMLElementEventMap>>(
    element: HTMLElement,
    event: E,
    listener: EventListener<HTMLElementEventMap, E>
) => {
    element.addEventListener(event, listener as DomEventListener);
};

export const off = <E extends EventName<HTMLElementEventMap>>(
    element: HTMLElement,
    event: E,
    listener: EventListener<HTMLElementEventMap, E>
) => {
    element.removeEventListener(event, listener as DomEventListener);
};

export const once = <E extends EventName<HTMLElementEventMap>>(
    element: HTMLElement,
    event: E,
    listener: EventListener<HTMLElementEventMap, E>
) => {
    const wrappedListener: EventListener<HTMLElementEventMap, E> = e => {
        listener(e);
        off(element, event, wrappedListener);
    };
    on(element, event, wrappedListener);
};

export const trigger = (element: HTMLElement, event: string) => {
    const customEvent = new CustomEvent(event);
    element.dispatchEvent(customEvent);
};
