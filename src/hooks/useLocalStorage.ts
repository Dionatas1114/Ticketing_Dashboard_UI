import { useState, useEffect } from 'react';
import toastError from '../utils/toastError';

const storageKey = 'data';

export type DataProps = {
  user: User;
  token: string;
};

export function useLocalStorage() {
  const [data, setData] = useState<string | null>(() => {
    try {
      return localStorage.getItem(storageKey);
    } catch (error) {
      toastError(error);
      return null;
    }
  });

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === storageKey) setData(e.newValue || null);
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const getValue = (): string | null => {
    try {
      return localStorage.getItem(storageKey);
    } catch (error) {
      toastError(error);
      return null;
    }
  };

  const setValue = (value: string): void => {
    try {
      localStorage.setItem(storageKey, value);
      setData(value);
    } catch (error) {
      toastError(error);
    }
  };

  const clear = (): void => {
    try {
      localStorage.removeItem(storageKey);
      setData(null);
    } catch (error) {
      toastError(error);
    }
  };

  return { getValue, setValue, clear };
}
