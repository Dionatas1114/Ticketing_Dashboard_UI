import { useState, useCallback, useContext } from 'react';
import { ticketApi as api } from '../api';
import toastError from '../utils/toastError';
import convertByTimeZone from '../utils/functions/convertByTimeZone';
import { AuthContext } from '../context/AuthContext';
import { useTimeout } from './useTimeout';
import useAuth from './useAuth';

type Props = {
  contacts: Contact[];
  count: number;
  hasMore: boolean;
};

type UseContactsReturn = {
  contacts: Contact[];
  loading: boolean;
  hasMore: boolean;
};

const initialState: UseContactsReturn = {
  contacts: [],
  loading: true,
  hasMore: false,
};

//! For testing
// const contactsMocked: Contact[] = [
//   { id: 1, name: 'queue1', number: 'red' },
//   { id: 2, name: 'queue2', number: 'green' },
// ];

const getTicketUserId = (contact: Contact) => contact?.tickets?.[0]?.userId;

const useContacts = (): UseContactsReturn => {
  const { verifyIsMaster } = useAuth();
  const { user } = useContext(AuthContext);
  const [state, setState] = useState(initialState);

  const isMaster = verifyIsMaster(user as User);

  const fetchContacts = useCallback(async () => {
    try {
      const { data } = await api.get<Props>('/contacts');
      const { contacts: allContacts, count, hasMore } = data;
      const contacts = allContacts
        .filter((contact) => {
          const ticketUserId = getTicketUserId(contact);
          return (
            ticketUserId &&
            (isMaster || ticketUserId === user?.id || ticketUserId?.toString() === user?.customer)
          );
        })
        .map((contact) => ({
          ...contact,
          createdAt: convertByTimeZone(contact.createdAt),
          updatedAt: convertByTimeZone(contact.updatedAt),
        }));
      setState({
        contacts,
        loading: false,
        hasMore: contacts.length > 0,
      });
    } catch (err) {
      setState((prev) => ({ ...prev, loading: false }));
      toastError(err);
    }
  }, []);

  useTimeout(fetchContacts);

  return state;
};

export default useContacts;
