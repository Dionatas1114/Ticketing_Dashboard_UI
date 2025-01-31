import React from 'react';

import useAuth from '../hooks/useAuth';

type User = {
  id?: number;
  name?: string;
  email?: string;
  customer?: string;
};

type AuthContextProps = {
  loading: boolean;
  isAuth: boolean;
  // token: string | undefined;
  // setToken: React.Dispatch<string>;
  // handleLogin: (data: FormData) => Promise<boolean>;
  user?: User;
};

const DEFAULT_VALUE: AuthContextProps = {
  loading: false,
  isAuth: false,
  // token: undefined,
  // setToken: () => {},
  // handleLogin: ({email: '', password: ''}) => {return false},
  user: {},
};

const AuthContext = React.createContext<AuthContextProps>(DEFAULT_VALUE);

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const { loading, user, isAuth } = useAuth();

  return <AuthContext.Provider value={{ loading, user, isAuth }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
