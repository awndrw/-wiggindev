import { EventName, EventListener } from '@wiggindev/utils';
export declare const useWindowEventListener: <
    K extends EventName<WindowEventMap>
>(
    eventName: K,
    listener: EventListener<WindowEventMap, K>
) => void;
