import React from 'react';

export const usePrevious = <T>(value: T) => {
    const stateRef = React.useRef<T>();
    React.useEffect(() => {
        stateRef.current = value;
    }, [value]);
    return stateRef.current;
};
