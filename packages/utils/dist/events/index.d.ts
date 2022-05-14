import * as documentEvents from './document';
import * as windowEvents from './window';
import * as elementEvents from './element';
export declare const events: {
    document: typeof documentEvents;
    window: typeof windowEvents;
    element: typeof elementEvents;
};
export type { EventListener, EventName } from './eventTypes';
