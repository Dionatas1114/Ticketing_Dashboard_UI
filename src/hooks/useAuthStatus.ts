import { useEffect } from 'react';

import { useAuthContext } from '../context/AuthContext';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const useAuthStatus = () => {
  const { isAuth, isAdmin, loading } = useAuthContext();
  const { clear } = useLocalStorage();

  // Se não estiver autenticado, limpa o localStorage
  // useEffect(() => {
  //   if (!isAuth) clear();
  // }, [isAuth, clear]);

  return {
    isAuth,
    isAdmin,
    loading,
    clear,
  };
};
