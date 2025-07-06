import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import openSocket from 'socket.io-client';

import { ticketApi, baseURL } from '../api';

import toastError from '../utils/toastError';
import { decrypt, encrypt } from '../utils/functions/crypto';
import { HttpStatusCode } from '../enum/httpStatus';
import { i18n } from '../translate/i18n';

import { useLocalStorage } from './useLocalStorage';
import { DataProps } from '../context/AuthContext';

type SignInType = {
  email: string;
  password: string;
};

type SignUpType = SignInType & { name: string };

type ChangePasswordType = {
  email: string;
  oldPassword: string;
  newPassword: string;
};

type LoginReturnType = {
  token: string;
  user: User;
};

// campos do LoginReturnType só que opcionais
type RefreshTokenType = Partial<LoginReturnType>;

type UseAuthProps = {
  user: User;
  loading: boolean;
  isAuth: boolean;
};

const createEmptyUser = (): User => ({
  id: 0,
  name: '',
  email: '',
  profile: '',
});

const initialValues: UseAuthProps = {
  user: createEmptyUser(),
  loading: false,
  isAuth: false,
};

const useAuth = () => {
  // hooks
  const navigateTo = useNavigate();
  const { getValue, setValue, clear } = useLocalStorage();

  // states
  const [state, setState] = useState<UseAuthProps>(initialValues);

  ticketApi.interceptors.request.use(
    (config) => {
      const data = getValue()!;

      const { token }: DataProps = data ? JSON.parse(decrypt(data)) : ({} as DataProps);

      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
        // setState((prev) => ({ ...prev, isAuth: true }));
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  ticketApi.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error?.response?.status === HttpStatusCode.FORBIDDEN && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const { data } = await ticketApi.post<RefreshTokenType>('/auth/refresh_token');
          if (data?.token) {
            localStorage.setItem('token', data.token);
            ticketApi.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
            originalRequest.headers.Authorization = `Bearer ${data.token}`;
            return ticketApi(originalRequest);
          }
        } catch (refreshErr) {
          // localStorage.removeItem('token');
          ticketApi.defaults.headers.common['Authorization'] = '';
          // setState((prev) => ({ ...prev, isAuth: false }));
          toastError(refreshErr);
          return Promise.reject(refreshErr);
        }
      }

      if (error?.response?.status === HttpStatusCode.UNAUTHORIZED) {
        // localStorage.removeItem('token');
        ticketApi.defaults.headers.common['Authorization'] = '';
        // setState((prev) => ({ ...prev, isAuth: false }));
        toastError(error);
      }

      return Promise.reject(error);
    }
  );

  // useEffect(() => {
  //   const refreshToken = async () => {
  //     const storedToken = localStorage.getItem('token');

  //     if (storedToken) {
  //       try {
  //         // Use o token diretamente, sem parse
  //         ticketApi.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;

  //         const { data } = await ticketApi.post<RefreshTokenType>('/auth/refresh_token');

  //         if (data?.token) {
  //           // Armazene o novo token diretamente
  //           localStorage.setItem('token', data.token);
  //           ticketApi.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
  //           setState({
  //             user: data.user,
  //             isAuth: true,
  //             loading: false,
  //           });
  //         }
  //       } catch (err) {
  //         // localStorage.removeItem('token');
  //         ticketApi.defaults.headers.common['Authorization'] = '';
  //         setState((prev) => ({
  //           ...prev,
  //           isAuth: false,
  //           loading: false,
  //         }));
  //         toastError(err);
  //       }
  //     } else {
  //       setState((prev) => ({
  //         ...prev,
  //         isAuth: false,
  //         loading: false,
  //       }));
  //     }
  //   };

  //   // refreshToken();
  // }, []);

  useEffect(() => {
    const socket = openSocket(baseURL);
    socket.on('connect', () => {
      console.log('Socket connected');
    });
    socket.on('user', (data) => {
      if (data.action === 'update' && data.user.id === state.user.id) {
        setState((prev) => ({ ...prev, user: data.user }));
      }
    });

    return () => {
      socket.disconnect();
    };
  }, [state.user]);

  // useEffect(() => {
  //   let refreshInterval: NodeJS.Timeout;

  //   if (state.isAuth) {
  //     refreshInterval = setInterval(refreshToken, 30 * 60 * 1000); // Refresh a cada 30 minutos
  //   }

  //   return () => {
  //     if (refreshInterval) {
  //       clearInterval(refreshInterval);
  //     }
  //   };
  // }, [state.isAuth]);

  const handleSignUp = async (userData: SignUpType) => {
    try {
      await ticketApi.post('/auth/signup', userData);
    } catch (err) {
      toastError(err);
      throw new Error(err.message);
    }
    toast.success(i18n.t('signup.toasts.success'));
  };

  const handleLogin = async (userData: SignInType) => {
    setState((prev) => ({ ...prev, loading: true }));

    try {
      const { data, status } = await ticketApi.post<LoginReturnType>('/auth/login', userData);

      const encryptedJson = encrypt(JSON.stringify(data));
      setValue(encryptedJson);

      ticketApi.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
      setState((prev) => ({ ...prev, user: data.user, isAuth: true, loading: false }));
      setState((prev) => ({ ...prev, isAuth: true }));
      console.log('🚀 ~ handleLogin ~ isAuth:', state.isAuth);
      toast.success(i18n.t('auth.toasts.success'));
    } catch (err) {
      toastError(err);
      setState((prev) => ({ ...prev, loading: false }));
      throw new Error(err.message || 'An unexpected error occurred.');
    }
  };

  const handleLogout = async () => {
    setState((prev) => ({ ...prev, loading: true }));

    try {
      await ticketApi.delete('/auth/logout');
      clear();
      ticketApi.defaults.headers.common['Authorization'] = '';
      setState((prev) => ({ ...prev, ...initialValues }));
      navigateTo('/login');
    } catch (err) {
      toastError(err);
      setState((prev) => ({ ...prev, loading: false }));
    }
  };

  const handleChangePassword = async (userData: ChangePasswordType) => {
    console.log(userData);

    try {
      await ticketApi.post('/changePassword/login', userData);
      toast.success(i18n.t('changePassword.toasts.success'));
    } catch (err) {
      toastError(err);
      throw new Error(err.message);
    }
    return true; // success
  };

  return { handleSignUp, handleLogin, handleLogout, handleChangePassword, ...state };
};

export default useAuth;
