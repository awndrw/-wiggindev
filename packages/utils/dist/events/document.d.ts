import { EventListener, EventName } from './eventTypes';
export declare const on: <E extends EventName<DocumentEventMap>>(
    event: E,
    listener: EventListener<DocumentEventMap, E>
) => void;
export declare const off: <E extends EventName<DocumentEventMap>>(
    event: E,
    listener: EventListener<DocumentEventMap, E>
) => void;
export declare const once: <E extends EventName<DocumentEventMap>>(
    event: E,
    listener: EventListener<DocumentEventMap, E>
) => void;
export declare const trigger: (event: string) => void;
