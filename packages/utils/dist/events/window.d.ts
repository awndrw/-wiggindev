import { EventListener, EventName } from './eventTypes';
export declare const on: <E extends EventName<WindowEventMap>>(
    event: E,
    listener: EventListener<WindowEventMap, E>
) => void;
export declare const off: <E extends EventName<WindowEventMap>>(
    event: E,
    listener: EventListener<WindowEventMap, E>
) => void;
export declare const once: <E extends EventName<WindowEventMap>>(
    event: E,
    listener: EventListener<WindowEventMap, E>
) => void;
export declare const trigger: (event: string) => void;
