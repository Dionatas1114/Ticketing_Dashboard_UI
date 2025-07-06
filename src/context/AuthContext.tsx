import React from 'react';

import useAuth from '../hooks/useAuth';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { decrypt } from '../utils/functions/crypto';

type AuthContextProps = {
  loading: boolean;
  isAuth: boolean;
  token: string;
  // setToken: React.Dispatch<string>;
  // handleLogin: (data: FormData) => Promise<boolean>;
  user: User;
  isMaster: boolean;
  isAdmin: boolean;
};

const initialValue: AuthContextProps = {
  loading: false,
  isAuth: false,
  token: '',
  // setToken: () => {},
  // handleLogin: ({email: '', password: ''}) => {return false},
  user: {} as User,
  isMaster: false,
  isAdmin: false,
};

export type DataProps = {
  user: User;
  token: string;
};

const AuthContext = React.createContext<AuthContextProps>(initialValue);

const useAuthContext = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }
  return context;
};

const AuthProvider = ({ children }: ChildrenProps) => {
  const { loading, isAuth } = useAuth();

  const { getValue } = useLocalStorage();
  const data = getValue()!;

  const { user, token }: DataProps = data ? JSON.parse(decrypt(data)) : ({} as DataProps);

  const isAdmin = user?.profile === 'admin';

  return (
    <AuthContext.Provider
      value={{ loading, user, token, isAuth, isMaster: false, isAdmin }} // TODO: implement isMaster
      children={children}
    />
  );
};

export { useAuthContext, AuthProvider, AuthContext };
