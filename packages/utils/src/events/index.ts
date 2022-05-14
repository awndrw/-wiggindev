import * as documentEvents from './document';
import * as windowEvents from './window';
import * as elementEvents from './element';

export const events = {
    document: documentEvents,
    window: windowEvents,
    element: elementEvents,
};

export type { EventListener, EventName } from './eventTypes';
