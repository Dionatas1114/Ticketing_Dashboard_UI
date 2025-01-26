export const api = {
  city: import.meta.env.VITE_APP_WEATHER_API_CITY || 'Parobe',
  key: import.meta.env.VITE_APP_WEATHER_API_KEY,
  baseURL: import.meta.env.VITE_APP_WEATHER_API_URL,
};

export const fetchWeatherData = async (query: string) => {
  const response = await fetch(`${api.baseURL}/weather?q=${query}&units=imperial&APPID=${api.key}`);
  return response.json();
};

export const fetchForecastData = async (query: string) => {
  const response = await fetch(
    `${api.baseURL}/forecast?q=${query}&units=imperial&APPID=${api.key}`
  );
  return response.json();
};
