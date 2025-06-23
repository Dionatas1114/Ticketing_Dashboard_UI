import { useState, useEffect } from 'react';
import toastError from '../utils/toastError';

// Definir as chaves permitidas usando um array constante
const STORAGE_KEYS = ['token', 'customer', 'i18nextLng', 'theme'] as const;

// Tipo baseado no array constante
export type StorageKey = (typeof STORAGE_KEYS)[number];

// Interface para o retorno do hook
export interface UseLocalStorageReturn {
  getValue: (key: StorageKey) => string | null;
  setValue: (key: StorageKey, value: string) => void;
  clear: () => void;
}

// Hook principal
export function useLocalStorage(): UseLocalStorageReturn {
  const [storage, setStorage] = useState<Record<StorageKey, string | null>>(() => {
    const initial: Record<StorageKey, string | null> = {} as Record<StorageKey, string | null>;
    STORAGE_KEYS.forEach((key) => {
      initial[key] = localStorage.getItem(key);
    });
    return initial;
  });

  // Atualizar estado quando o localStorage mudar
  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key && STORAGE_KEYS.includes(event.key as StorageKey)) {
        const newValue = event.newValue || null;
        setStorage((prev) => ({
          ...prev,
          [event.key as StorageKey]: newValue,
        }));
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const getValue = (key: StorageKey): string | null => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      toastError(error);
      return null;
    }
  };

  const setValue = (key: StorageKey, value: string): void => {
    try {
      localStorage.setItem(key, value);
      setStorage((prev) => ({
        ...prev,
        [key]: value,
      }));
    } catch (error) {
      toastError(error);
    }
  };

  const clear = (): void => {
    try {
      STORAGE_KEYS.forEach((key) => localStorage.removeItem(key));
      setStorage(() => {
        const newStorage: Record<StorageKey, string | null> = {} as Record<
          StorageKey,
          string | null
        >;
        STORAGE_KEYS.forEach((key) => (newStorage[key] = null));
        return newStorage;
      });
    } catch (error) {
      toastError(error);
    }
  };

  return { getValue, setValue, clear };
}
