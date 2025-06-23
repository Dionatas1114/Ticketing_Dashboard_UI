import { useState, useEffect, useReducer, useContext, useCallback } from 'react';
// import openSocket from "socket.io-client";

import { AuthContext } from '../context/AuthContext';
import { useTimeout } from './useTimeout';
import toastError from '../utils/toastError';

import { ticketApi } from '../api';

// const reducer = (state, action) => {
//   if (action.type === "LOAD_WHATSAPPS") {
//     const whatsApps = action.payload;
//     return [...whatsApps];
//   }

//   if (action.type === "UPDATE_WHATSAPPS") {
//     const whatsApp = action.payload;
//     const whatsAppIndex = state.findIndex(s => s.id === whatsApp.id);

//     if (whatsAppIndex !== -1) {
//       state[whatsAppIndex] = whatsApp;
//       return [...state];
//     } else {
//       return [whatsApp, ...state];
//     }
//   }

//   if (action.type === "UPDATE_SESSION") {
//     const whatsApp = action.payload;
//     const whatsAppIndex = state.findIndex(s => s.id === whatsApp.id);

//     if (whatsAppIndex !== -1) {
//       state[whatsAppIndex].status = whatsApp.status;
//       state[whatsAppIndex].updatedAt = whatsApp.updatedAt;
//       state[whatsAppIndex].qrcode = whatsApp.qrcode;
//       state[whatsAppIndex].retries = whatsApp.retries;
//       return [...state];
//     } else {
//       return [...state];
//     }
//   }

//   if (action.type === "DELETE_WHATSAPPS") {
//     const whatsAppId = action.payload;

//     const whatsAppIndex = state.findIndex(s => s.id === whatsAppId);

//     if (whatsAppIndex !== -1) {
//       state.splice(whatsAppIndex, 1);
//     }
//     return [...state];
//   }

//   if (action.type === "RESET") {
//     return [];
//   }
// };

type Props = {
  connections: Connection[];
  count: number;
  hasMore: boolean;
};

export type UseConnectionsReturn = {
  connections: Connection[];
  loading: boolean;
  hasMore: boolean;
};

const initialState: UseConnectionsReturn = {
  connections: [],
  loading: true,
  hasMore: false,
};

const useConnections = () => {
  // const [whatsApps, dispatch] = useReducer(reducer, []);
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const { user, isMaster } = useContext(AuthContext);

  const fetchConnections = useCallback(async () => {
    try {
      const { data } = await ticketApi.get<Props>('/whatsapp/');
      const { connections: allConnections, count, hasMore } = data;
      const connections = allConnections.filter((connection) => {
        console.log('connection: ', connection);

        // return isMaster ?
      });

      // const whatsAppData = data.filter(allConnections => {
      //   return user?.customer === "master"
      //     ? allConnections
      //     : allConnections?.user?.id === user?.id ||
      //         allConnections?.user?.name === user?.name ||
      //         allConnections?.user?.email === user?.email ||
      //         allConnections?.userId.toString() === user?.customer;
      // });
      // dispatch({ type: "LOAD_WHATSAPPS", payload: whatsAppData });

      setState({
        connections,
        loading: false,
        hasMore: connections.length > 0,
      });
    } catch (err) {
      setState((prev) => ({ ...prev, loading: false }));
      toastError(err);
    }
  }, []);

  useTimeout(fetchConnections);
  // useEffect(() => {
  //   const socket = openSocket(process.env.REACT_APP_BACKEND_URL);

  //   socket.on("whatsapp", data => {
  //     if (data.action === "update") {
  //       dispatch({ type: "UPDATE_WHATSAPPS", payload: data.whatsapp });
  //     }
  //   });

  //   socket.on("whatsapp", data => {
  //     if (data.action === "delete") {
  //       dispatch({ type: "DELETE_WHATSAPPS", payload: data.whatsappId });
  //     }
  //   });

  //   socket.on("whatsappSession", data => {
  //     if (data.action === "update") {
  //       dispatch({ type: "UPDATE_SESSION", payload: data.session });
  //     }
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  // return { whatsApps, loading };
  return state;
};

export default useConnections;
