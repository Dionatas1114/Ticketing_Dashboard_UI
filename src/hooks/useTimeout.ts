import { useEffect } from 'react';

const TimeOut = (fetch: () => Promise<void>) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => fetch(), 500);
    return () => clearTimeout(timeoutId);
  }, [fetch]);
};

export const useTimeout = (fetch: () => Promise<void>) => TimeOut(fetch);
