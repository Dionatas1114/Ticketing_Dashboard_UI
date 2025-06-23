import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { ticketApi as api, socket } from '../api';

import { HttpStatusCode } from '../enum/httpStatus';
import toastError from '../utils/toastError';
import { i18n } from '../translate/i18n';

import { useLocalStorage } from './useLocalStorage';

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

const initialValues: UseAuthProps = {
  user: {} as User,
  loading: false,
  isAuth: false,
};

const useAuth = () => {
  const { getValue, setValue } = useLocalStorage();
  const [state, setState] = useState<UseAuthProps>(initialValues);

  api.interceptors.request.use(
    (config) => {
      const token = getValue('token');
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
        setState((prev) => ({ ...prev, isAuth: true }));
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error?.response?.status === HttpStatusCode.FORBIDDEN && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const { data } = await api.post<RefreshTokenType>('/auth/refresh_token');
          if (data?.token) {
            localStorage.setItem('token', data.token);
            api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
            originalRequest.headers.Authorization = `Bearer ${data.token}`;
            return api(originalRequest);
          }
        } catch (refreshErr) {
          // localStorage.removeItem('token');
          api.defaults.headers.common['Authorization'] = '';
          setState((prev) => ({ ...prev, isAuth: false }));
          toastError(refreshErr);
          return Promise.reject(refreshErr);
        }
      }

      if (error?.response?.status === HttpStatusCode.UNAUTHORIZED) {
        // localStorage.removeItem('token');
        api.defaults.headers.common['Authorization'] = '';
        setState((prev) => ({ ...prev, isAuth: false }));
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
  //         api.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;

  //         const { data } = await api.post<RefreshTokenType>('/auth/refresh_token');

  //         if (data?.token) {
  //           // Armazene o novo token diretamente
  //           localStorage.setItem('token', data.token);
  //           api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
  //           setState({
  //             user: data.user,
  //             isAuth: true,
  //             loading: false,
  //           });
  //         }
  //       } catch (err) {
  //         // localStorage.removeItem('token');
  //         api.defaults.headers.common['Authorization'] = '';
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
    socket.on('user', () => {
      // if (data.action === 'update' && data.user.id === user.id) {
      //   setUser(data.user);
      // }
      console.log('TODO');
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

  const HandleSignUp = async (userData: SignUpType) => {
    try {
      await api.post('/auth/signup', userData);
    } catch (err) {
      toastError(err);
      throw new Error(err.message);
    }
    toast.success(i18n.t('signup.toasts.success'));
  };

  const HandleLogin = async (userData: SignInType) => {
    setState((prev) => ({ ...prev, loading: true }));

    try {
      const {
        data: { token, user },
        status,
      } = await api.post<LoginReturnType>('/auth/login', userData);

      setValue('token', token);
      setValue('customer', user.profile || '');

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setState((prev) => ({ ...prev, user, isAuth: true, loading: false }));
      toast.success(i18n.t('auth.toasts.success'));
    } catch (err) {
      toastError(err);
      setState((prev) => ({ ...prev, loading: false }));
      throw new Error(err.message || 'An unexpected error occurred.');
    }
  };

  const HandleLogout = async () => {
    console.log('🚀 ~ file: signFunctions.ts:53 ~ HandleLogout');
    // setLoading(true);

    // try {
    //   await api.delete('/auth/logout');
    //   setIsAuth(false);
    //   setUser({});
    //   localStorage.removeItem('token');
    //   api.defaults.headers.common['Authorization'] = '';
    //   setLoading(false);
    //   useNavigate()('/login');
    // } catch (err) {
    //   toastError(err);
    //   setLoading(false);
    // }
  };

  const HandleChangePassword = async (userData: ChangePasswordType) => {
    console.log(userData);

    try {
      await api.post('/changePassword/login', userData);
      toast.success(i18n.t('changePassword.toasts.success'));
    } catch (err) {
      toastError(err);
      throw new Error(err.message);
    }
    return true; // success
  };

  return {
    ...state,
    ...{
      HandleSignUp,
      HandleLogin,
      HandleLogout,
      HandleChangePassword,
    },
  };
};

export default useAuth;
