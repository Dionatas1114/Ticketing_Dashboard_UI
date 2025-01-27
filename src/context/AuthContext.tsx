import React from 'react';

import useAuth from '../hooks/useAuth';

interface User {
  id?: number;
  name?: string;
  email?: string;
  customer?: string;
}

interface AuthProps {
  loading: boolean;
  isAuth: boolean;
  token: string | undefined;
  // setToken: React.Dispatch<string>;
  // handleLogin: (data: FormData) => Promise<boolean>;
  user?: User;
}

const DEFAULT_VALUE: AuthProps = {
  loading: false,
  isAuth: false,
  token: undefined,
  // setToken: () => {},
  // handleLogin: ({email: '', password: ''}) => {return false},
  user: {
    id: undefined,
    name: '',
    email: '',
    customer: '',
  },
};

const AuthContext = React.createContext(DEFAULT_VALUE);

const AuthProvider = (children: React.ReactElement) => {
  const [token, setToken] = React.useState(DEFAULT_VALUE.token);

  const { loading, user, isAuth } = useAuth();

  return (
    <AuthContext.Provider value={{ loading, user, isAuth, token }}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
