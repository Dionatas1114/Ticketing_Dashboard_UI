import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { ticketApi as api, socket } from '../api';

import { HttpStatusCode } from '../enum/httpStatus';
import toastError from '../utils/toastError';
import { i18n } from '../translate/i18n';

type RefreshTokenType = Partial<LoginReturnType>; // campos do LoginReturnType só que opcionais

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

type UseAuthProps = {
  user: User | {};
  loading: boolean;
  isAuth: boolean;
};

const initialValues = {
  user: {} as User,
  loading: true,
  isAuth: false,
};

const useAuth = () => {
  const [state, setState] = useState<UseAuthProps>(initialValues);

  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        // config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
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

        const { data } = await api.post<RefreshTokenType>('/auth/refresh_token');
        if (data) {
          localStorage.setItem('token', JSON.stringify(data?.token));
          api.defaults.headers.common['Authorization'] = `Bearer ${data?.token}`;
        }
        return api(originalRequest);
      }
      if (error?.response?.status === HttpStatusCode.UNAUTHORIZED) {
        localStorage.removeItem('token');
        api.defaults.headers.common['Authorization'] = '';
        setState((prev) => ({ ...prev, isAuth: false }));
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    const token = localStorage.getItem('token');
    const refreshToken = async () => {
      if (token) {
        try {
          const { data } = await api.post<RefreshTokenType>('/auth/refresh_token');
          api.defaults.headers.common['Authorization'] = `Bearer ${data?.token}`;
          setState((prev) => ({ ...prev, user: data?.user ?? {}, isAuth: true }));
        } catch (err) {
          toastError(err);
        }
      }
      setState((prev) => ({ ...prev, loading: false }));
    };

    refreshToken();
  }, []);

  useEffect(() => {
    socket.on('user', (data) => {
      // if (data.action === 'update' && data.user.id === user.id) {
      //   setUser(data.user);
      // }
      console.log('TODO');
    });

    return () => {
      socket.disconnect();
    };
  }, [state.user]);

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
      localStorage.setItem('token', JSON.stringify(token));
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setState((prev) => ({ ...prev, user, isAuth: true, loading: false }));
      toast.success(i18n.t('auth.toasts.success'));
      // console.log({ token, user, status });
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

  const signFunctions = { HandleSignUp, HandleLogin, HandleLogout, HandleChangePassword };
  return { ...state, ...signFunctions };
};

export default useAuth;
