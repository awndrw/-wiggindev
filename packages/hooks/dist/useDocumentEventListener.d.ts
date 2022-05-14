import { EventName, EventListener } from '@wiggindev/utils';
export declare const useDocumentEventListener: <
    K extends EventName<DocumentEventMap>
>(
    eventName: K,
    listener: EventListener<DocumentEventMap, K>
) => void;
