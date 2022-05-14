import React from 'react';
import { EventName, EventListener } from '@wiggindev/utils';
export declare const useEventListener: <
    K extends EventName<HTMLElementEventMap>,
    E extends HTMLElement
>(
    eventName: K,
    listener: EventListener<HTMLElementEventMap, K>,
    element: React.RefObject<E>
) => void;
