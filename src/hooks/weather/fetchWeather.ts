const key = import.meta.env.VITE_APP_WEATHER_API_KEY || '';
const baseURL = import.meta.env.VITE_APP_WEATHER_API_URL || '';
export const city = import.meta.env.VITE_APP_WEATHER_API_CITY || 'Parobe';

export const fetchWeatherData = async (query: string) => {
  const response = await fetch(`${baseURL}/weather?q=${query}&units=imperial&APPID=${key}`);
  return response.json();
};

export const fetchForecastData = async (query: string) => {
  const response = await fetch(`${baseURL}/forecast?q=${query}&units=imperial&APPID=${key}`);
  return response.json();
};
