import { useState, useCallback, useContext } from 'react';
import { ticketApi as api } from '../api';
import toastError from '../utils/toastError';
import convertByTimeZone from '../utils/functions/convertByTimeZone';
import { AuthContext } from '../context/AuthContext';
import { useTimeout } from './useTimeout';

type UsersBase = {
  users: User[];
  hasMore: boolean;
};

type Props = UsersBase & { count: number };
type UsersReturn = UsersBase & { loading: boolean };

const initialState: UsersReturn = {
  users: [],
  loading: true,
  hasMore: false,
};

//! For testing
const usersMocked: User[] = [
  { id: 1, name: 'user1', email: 'user1@email.com' },
  { id: 2, name: 'user2', email: 'user2@email.com' },
];

const useUsers = (): UsersReturn => {
  const { user: authUser } = useContext(AuthContext);

  const [state, setState] = useState(initialState);

  const fetchUsers = useCallback(async () => {
    try {
      const { data } = await api.get<Props>('/users');
      const { users: usersData, count, hasMore } = data;
      const users = usersData
        // .filter((user) => authUser?.customer === 'master' || user?.id === authUser?.id)
        .map((user) => ({
          ...user,
          createdAt: convertByTimeZone(user.createdAt),
          updatedAt: convertByTimeZone(user.updatedAt),
        }));
      setState({
        users,
        loading: false,
        hasMore: users.length > 0,
      });
    } catch (err) {
      setState((prev) => ({ ...prev, loading: false }));
      toastError(err);
    }
  }, []);

  useTimeout(fetchUsers);

  return state;
};

export default useUsers;
