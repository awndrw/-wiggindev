import React from 'react';
import { throttle } from '@wiggindev/utils';
import { useWindowEventListener } from './useWindowEventListener';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';
import { useEvent } from './useEvent';

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
};

export const useWindowDimensions = (throttleLimit = 250) => {
    const [windowDimensions, setWindowDimensions] = React.useState({
        width: 0,
        height: 0,
    });

    const updateWindowDimensions = () =>
        setWindowDimensions(getWindowDimensions());
    const handleResize = useEvent(
        throttle(updateWindowDimensions, throttleLimit)
    );

    useWindowEventListener('resize', handleResize);

    useIsomorphicLayoutEffect(() => {
        updateWindowDimensions();
    }, []);

    return windowDimensions;
};
