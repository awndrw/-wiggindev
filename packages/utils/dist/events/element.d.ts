import { EventListener, EventName } from './eventTypes';
export declare const on: <E extends EventName<HTMLElementEventMap>>(
    element: HTMLElement,
    event: E,
    listener: EventListener<HTMLElementEventMap, E>
) => void;
export declare const off: <E extends EventName<HTMLElementEventMap>>(
    element: HTMLElement,
    event: E,
    listener: EventListener<HTMLElementEventMap, E>
) => void;
export declare const once: <E extends EventName<HTMLElementEventMap>>(
    element: HTMLElement,
    event: E,
    listener: EventListener<HTMLElementEventMap, E>
) => void;
export declare const trigger: (element: HTMLElement, event: string) => void;
