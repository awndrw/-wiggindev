import { Callback } from './types';
declare type ThrottledFunction<C extends Callback> = (
    ...args: Parameters<C>
) => ReturnType<C>;
export declare const throttle: <C extends Callback>(
    callback: C,
    limit: number
) => ThrottledFunction<C>;
export {};
