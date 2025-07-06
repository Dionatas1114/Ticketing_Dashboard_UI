import { useEffect, useState, useReducer } from 'react';

import { useAuthContext } from '../context/AuthContext';
import { ticketApi } from '../api';

type Connection = {
  id: string;
  status: string;
  updatedAt: string;
  qrcode?: string;
  retries: number;
  userId?: number;
};

type Action =
  | { type: 'LOAD_WHATSAPPS'; payload: Connection }
  | { type: 'UPDATE_WHATSAPPS'; payload: Connection }
  | { type: 'DELETE_WHATSAPPS'; payload: string }
  | { type: 'RESET' };

const initialState: Connection[] = [];

const reducer = (state: Connection[], action: Action): Connection[] => {
  switch (action.type) {
    case 'LOAD_WHATSAPPS':
      return [...state, action.payload];
    case 'UPDATE_WHATSAPPS':
      const whatsApp = action.payload;
      let whatsAppIndex;
      whatsAppIndex = state.findIndex((s) => s.id === whatsApp.id);
      if (whatsAppIndex !== -1) {
        state[whatsAppIndex].status = whatsApp.status;
        state[whatsAppIndex].updatedAt = whatsApp.updatedAt;
        state[whatsAppIndex].qrcode = whatsApp.qrcode;
        state[whatsAppIndex].retries = whatsApp.retries;
        return [...state];
      }
      return [...state];
    case 'DELETE_WHATSAPPS':
      const whatsAppId = action.payload;
      whatsAppIndex = state.findIndex((s) => s.id === whatsAppId);
      if (whatsAppIndex !== -1) {
        state.splice(whatsAppIndex, 1);
      }
      return [...state];
    case 'RESET':
      return [];
    default:
      return state;
  }
};

type ConnectionsFilteredProps = {
  user: User;
  isAdmin: boolean;
  isMaster: boolean;
  connections: Connection[];
};

const connectionsFiltered = ({ user, isAdmin, isMaster, connections }: ConnectionsFilteredProps) =>
  connections.filter(
    (connection) => isMaster || connection.userId === Number(isAdmin ? user.customer : user.id)
  );

const useConnections = () => {
  const [connections, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);
  const { user, isAdmin, isMaster } = useAuthContext();

  useEffect(() => {
    if (loading) {
      const fetchConnections = async () => {
        try {
          // TODO: implement param find by user and admin, if master return all
          const { data: connections } = await ticketApi.get<Connection[]>('/whatsapp/');

          dispatch({ type: 'RESET' });

          console.log(
            '🚀 ~ fetchConnections ~ user: ',
            user,
            ' isAdmin: ',
            isAdmin,
            ' isMaster: ',
            isMaster
          );

          const filteredConnections = connectionsFiltered({ user, isAdmin, isMaster, connections });

          filteredConnections.forEach((connection: Connection) => {
            dispatch({ type: 'LOAD_WHATSAPPS', payload: connection });
          });

          setLoading(false);
        } catch (error) {
          console.error('Error fetching Connections:', error);
          setLoading(false);
        }
      };
      fetchConnections();
    }
  }, [user, isAdmin, isMaster]);

  // const addConnection = async (connectionData: any) => {
  //   try {
  //     const { data } = await ticketApi.post<any>('/whatsapp/', connectionData);
  //     dispatch({ type: 'LOAD_WHATSAPPS', payload: data });
  //   } catch (error) {
  //     console.error('Error adding Connection:', error);
  //   }
  // };

  const updateConnection = async (whatsAppId: string, whatsAppData: any) => {
    try {
      const { data } = await ticketApi.put<any>(`/whatsapp/${whatsAppId}`, whatsAppData);
      dispatch({ type: 'UPDATE_WHATSAPPS', payload: data });
    } catch (error) {
      console.error('Error updating WhatsApp:', error);
    }
  };

  const deleteConnection = async (whatsAppId: string) => {
    try {
      await ticketApi.delete(`/whatsapp/${whatsAppId}`);
      dispatch({ type: 'DELETE_WHATSAPPS', payload: whatsAppId });
    } catch (error) {
      console.error('Error deleting Connection:', error);
    }
  };

  return {
    connections,
    loading,
    hasMore: connections.length > 0,
    // addConnection,
    updateConnection,
    deleteConnection,
  };
};

export default useConnections;
