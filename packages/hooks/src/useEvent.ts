import React from 'react';
import { Callback } from '@wiggindev/utils';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export const useEvent = <C extends Callback>(callback: C): C => {
    const callbackRef = React.useRef(callback);
    useIsomorphicLayoutEffect(() => {
        callbackRef.current = callback;
    });
    return React.useMemo(() => callbackRef.current, []);
};
