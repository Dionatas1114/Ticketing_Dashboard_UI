import openSocket from 'socket.io-client';
import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL || 'https://localhost:3000/';
const weatherKey = import.meta.env.VITE_APP_WEATHER_API_KEY || '';
const weatherBaseURL = import.meta.env.VITE_APP_WEATHER_API_URL || '';
const city = import.meta.env.VITE_APP_WEATHER_API_CITY || 'Parobe';

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

// const mediaBlobApi = clientInstance(mediaBaseURL, 'blob');
const ticketApi = clientInstance(baseURL);
const weatherApi = clientInstance(weatherBaseURL);

export { ticketApi, weatherApi, baseURL, weatherBaseURL, weatherKey, city, socket };
