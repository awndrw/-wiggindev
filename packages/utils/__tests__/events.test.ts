import { EventName, events, EventListener, noop } from '../src';

type DocumentEventName = EventName<DocumentEventMap>;
type DocumentEventListener = EventListener<DocumentEventMap, DocumentEventName>;

describe('document events', () => {
    let eventMap: Partial<Record<DocumentEventName, DocumentEventListener>> =
        {};

    beforeEach(() => {
        eventMap = {};

        document.addEventListener = jest.fn(
            (event: DocumentEventName, callback: DocumentEventListener) =>
                (eventMap[event] = callback)
        );
        document.removeEventListener = jest.fn(
            (event: DocumentEventName, callback: DocumentEventListener) =>
                delete eventMap[event]
        );
    });

    it('should add an event listener to the document', () => {
        jest.spyOn(document, 'addEventListener');
        events.document.on('testEvent', noop);
        expect(eventMap['testEvent']).toBeDefined();
        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(document.addEventListener).toHaveBeenCalled();
    });
});
