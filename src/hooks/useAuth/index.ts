import { useState, useEffect } from 'react';

import { ticketApi, socket } from '../../api';
import signFunctions from '../../hooks/useAuth/signFunctions';
import toastError from '../../utils/toastError';

type RefreshTokenType = {
  token?: string;
  user?: User;
};

const useAuth = () => {
  const [user, setUser] = useState<User | {}>({});
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  ticketApi.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        // config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
        setIsAuth(true);
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  ticketApi.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (error?.response?.status === 403 && !originalRequest._retry) {
        originalRequest._retry = true;

        const { data } = await ticketApi.post<RefreshTokenType>('/auth/refresh_token');
        if (data) {
          localStorage.setItem('token', JSON.stringify(data?.token));
          ticketApi.defaults.headers.common['Authorization'] = `Bearer ${data?.token}`;
        }
        return ticketApi(originalRequest);
      }
      if (error?.response?.status === 401) {
        localStorage.removeItem('token');
        ticketApi.defaults.headers.common['Authorization'] = '';
        setIsAuth(false);
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    const token = localStorage.getItem('token');
    const refreshToken = async () => {
      if (token) {
        try {
          const { data } = await ticketApi.post<RefreshTokenType>('/auth/refresh_token');
          ticketApi.defaults.headers.common['Authorization'] = `Bearer ${data?.token}`;
          setIsAuth(true);
          setUser(data?.user ?? {});
        } catch (err) {
          toastError(err);
        }
      }
      setLoading(false);
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
  }, [user]);

  return { isAuth, user, loading, ...signFunctions };
};

export default useAuth;
