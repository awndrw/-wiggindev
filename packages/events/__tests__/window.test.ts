/* eslint-disable @typescript-eslint/unbound-method */
import events, { EventName, EventListener } from '../src';
import { noop } from '@wiggindev/utils';

type WindowEventName = EventName<WindowEventMap>;
type WindowEventListener = EventListener<WindowEventMap, WindowEventName>;
type EventMap = Partial<Record<WindowEventName, WindowEventListener>>;

describe('window', () => {
    let eventMap: EventMap = [] as unknown as EventMap;

    beforeEach(() => {
        eventMap = [] as unknown as EventMap;
        // @ts-expect-error idk
        window.addEventListener = jest.fn(
            (event: WindowEventName, listener: WindowEventListener) =>
                (eventMap[event] = listener)
        );
        window.removeEventListener = jest.fn(
            (event: WindowEventName) => delete eventMap[event]
        );
        window.dispatchEvent = jest.fn((event: Event) => {
            eventMap[event.type]?.(event);
            return true;
        });
    });

    it('should add an event listener to the window', () => {
        jest.spyOn(window, 'addEventListener');
        events.window.on('testEvent', noop);
        expect(eventMap['testEvent']).toBeDefined();
        expect(window.addEventListener).toHaveBeenCalled();
    });

    it('should remove event listener from window', () => {
        jest.spyOn(window, 'removeEventListener');
        events.window.off('testEvent', noop);
        expect(eventMap['testEvent']).toBeUndefined();
        expect(window.removeEventListener).toHaveBeenCalled();
    });

    it('should trigger an event on the window', () => {
        const fn = jest.fn();
        events.window.on('testEvent', fn);
        events.window.trigger('testEvent');
        expect(fn).toHaveBeenCalled();
    });

    it('should only be called once when .once is used', () => {
        const fn = jest.fn();
        events.window.once('testEvent', fn);
        events.window.trigger('testEvent');
        events.window.trigger('testEvent');
        expect(fn).toHaveBeenCalledTimes(1);
    });
});
