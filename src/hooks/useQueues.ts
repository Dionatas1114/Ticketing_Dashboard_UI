import { useState, useEffect, useCallback } from 'react';
import { ticketApi as api } from '../api';
import toastError from '../utils/toastError';
import convertByTimeZone from '../utils/functions/convertByTimeZone';

type UseQueuesReturn = {
  queues: Queue[];
  loading: boolean;
  hasMore: boolean;
};

const initialState = {
  queues: [] as Queue[],
  loading: true,
  hasMore: false,
};

const useQueues = (): UseQueuesReturn => {
  const [state, setState] = useState(initialState);

  const fetchQueues = useCallback(async () => {
    try {
      const { data } = await api.get<Queue[]>('/queues');
      const queues = data.map((queue: Queue) => ({
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

  useEffect(() => {
    const timeoutId = setTimeout(() => fetchQueues(), 500);
    return () => clearTimeout(timeoutId);
  }, [fetchQueues]);

  return state;
};

export default useQueues;
