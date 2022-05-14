import { LiteralUnion } from '../types/LiteralUnion';
declare type EventMap = WindowEventMap | DocumentEventMap | HTMLElementEventMap;
export declare type EventName<M extends EventMap> = LiteralUnion<
    keyof M,
    string
>;
export declare type EventListener<
    M extends EventMap,
    N extends EventName<M>
> = (event: N extends keyof M ? M[N] : Event) => void;
export declare type DomEventListener = (event: Event) => void;
export {};
