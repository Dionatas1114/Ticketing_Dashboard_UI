import openSocket from 'socket.io-client';
import axios from 'axios';

const { VITE_API_URL } = import.meta.env;

const baseURL = VITE_API_URL || 'https://localhost:3000/';

const socket = openSocket();

const clientInstance = (
  baseURL: string,
  responseType?: XMLHttpRequestResponseType,
  auth?: string
) =>
  axios.create({
    baseURL,
    params: {
      apikey: auth,
    },
    responseType,
  });

const brapiApi = clientInstance(baseURL);
// const mediaBlobApi = clientInstance(mediaBaseURL, 'blob');

export { brapiApi, baseURL, socket };
