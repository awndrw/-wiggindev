/* eslint-disable @typescript-eslint/unbound-method */
import events, { EventName, EventListener } from '../src';
import { noop } from '@wiggindev/utils';

type DocumentEventName = EventName<DocumentEventMap>;
type DocumentEventListener = EventListener<DocumentEventMap, DocumentEventName>;
type EventMap = Partial<Record<DocumentEventName, DocumentEventListener>>;

describe('document', () => {
    let eventMap: EventMap = [] as unknown as EventMap;

    beforeEach(() => {
        eventMap = [] as unknown as EventMap;
        document.addEventListener = jest.fn(
            (event: DocumentEventName, listener: DocumentEventListener) =>
                (eventMap[event] = listener)
        );
        document.removeEventListener = jest.fn(
            (event: DocumentEventName) => delete eventMap[event]
        );
        document.dispatchEvent = jest.fn((event: Event) => {
            eventMap[event.type]?.(event);
            return true;
        });
    });

    it('should add an event listener to the document', () => {
        jest.spyOn(document, 'addEventListener');
        events.document.on('testEvent', noop);
        expect(eventMap['testEvent']).toBeDefined();
        expect(document.addEventListener).toHaveBeenCalled();
    });

    it('should remove event listener from document', () => {
        jest.spyOn(document, 'removeEventListener');
        events.document.off('testEvent', noop);
        expect(eventMap['testEvent']).toBeUndefined();
        expect(document.removeEventListener).toHaveBeenCalled();
    });

    it('should trigger an event on the document', () => {
        const fn = jest.fn();
        events.document.on('testEvent', fn);
        events.document.trigger('testEvent');
        expect(fn).toHaveBeenCalled();
    });

    it('should only be called once when .once is used', () => {
        const fn = jest.fn();
        events.document.once('testEvent', fn);
        events.document.trigger('testEvent');
        events.document.trigger('testEvent');
        expect(fn).toHaveBeenCalledTimes(1);
    });
});
