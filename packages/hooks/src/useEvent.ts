import React from 'react';
import { AnyFunction } from '@wiggindev/utils';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export function useEvent<C extends AnyFunction>(callback: C): C {
    const latestRef = React.useRef<C>(
        throwInvokedBeforeMountError as unknown as C
    );
    useIsomorphicLayoutEffect(() => {
        latestRef.current = callback;
    }, [callback]);

    const stableRef = React.useRef<C>(null as unknown as C);
    if (!stableRef.current) {
        stableRef.current = latestRef.current;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return stableRef.current;
}

const throwInvokedBeforeMountError = () => {
    throw new Error(
        'INVALID_USEEVENT_INVOCATION: the callback from useEvent cannot be invoked before the component has mounted.'
    );
};
