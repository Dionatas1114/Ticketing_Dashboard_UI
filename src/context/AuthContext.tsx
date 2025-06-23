import React from 'react';

import useAuth from '../hooks/useAuth';
import { useLocalStorage } from '../hooks/useLocalStorage';

type AuthContextProps = {
  loading: boolean;
  isAuth: boolean;
  // token: string | undefined;
  // setToken: React.Dispatch<string>;
  // handleLogin: (data: FormData) => Promise<boolean>;
  user?: User;
  isMaster: boolean;
  isAdmin: boolean;
};

const initialValue: AuthContextProps = {
  loading: false,
  isAuth: false,
  // token: undefined,
  // setToken: () => {},
  // handleLogin: ({email: '', password: ''}) => {return false},
  user: {} as User,
  isMaster: false,
  isAdmin: false,
};

const AuthContext = React.createContext<AuthContextProps>(initialValue);

const AuthProvider = ({ children }: ChildrenProps) => {
  const { loading, user, isAuth } = useAuth();
  const { getValue } = useLocalStorage();

  const isAdmin = getValue('customer') === 'admin';

  return (
    <AuthContext.Provider
      value={{ loading, user, isAuth, isMaster: false, isAdmin }}
      children={children}
    />
  );
};

export { AuthContext, AuthProvider };
