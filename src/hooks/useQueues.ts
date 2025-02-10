import { useState, useCallback, useContext } from 'react';
import { ticketApi as api } from '../api';
import toastError from '../utils/toastError';
import convertByTimeZone from '../utils/functions/convertByTimeZone';
import { AuthContext } from '../context/AuthContext';
import { useTimeout } from './useTimeout';

type UseQueuesReturn = {
  queues: Queue[];
  loading: boolean;
  hasMore: boolean;
};

const initialState: UseQueuesReturn = {
  queues: [],
  loading: true,
  hasMore: false,
};

//! For testing
// const queuesMocked: Queue[] = [
//   { id: 1, name: 'queue1', color: 'red' },
//   { id: 2, name: 'queue2', color: 'green' },
// ];

const useQueues = (): UseQueuesReturn => {
  const { user } = useContext(AuthContext);

  const [state, setState] = useState(initialState);

  const fetchQueues = useCallback(async () => {
    try {
      const { data } = await api.get<Queue[]>('/queues');
      const queues = data
        .filter((queue) => user?.customer === 'master' || queue?.userId === user?.id)
        .map((queue) => ({
          ...queue,
          createdAt: convertByTimeZone(queue.createdAt),
          updatedAt: convertByTimeZone(queue.updatedAt),
        }));
      setState({
        queues,
        loading: false,
        hasMore: queues.length > 0,
      });
    } catch (err) {
      setState((prev) => ({ ...prev, loading: false }));
      toastError(err);
    }
  }, []);

  useTimeout(fetchQueues);

  return state;
};

export default useQueues;
