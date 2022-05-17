import * as documentEvents from './document';
import * as windowEvents from './window';
import * as elementEvents from './element';

export type { EventListener, EventName } from './eventTypes';

const events = {
    document: documentEvents,
    window: windowEvents,
    element: elementEvents,
};

export default events;
