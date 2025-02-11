import * as React from 'react';
import { weatherApi, weatherKey, city } from '../api';

export type WeatherProps = {
  coord: {
    lon: number;
    lat: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    description: string;
    icon: string;
    main: string;
  }[];
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    feels_like: number;
  };
  sys: {
    country: string;
  };
  name: string;
};

export type ForecastProps = {
  list: {
    dt: number;
    main: {
      temp: number;
    };
    weather: {
      description: string;
      icon: string;
      main: string;
    }[];
  }[];
};

export type CommonProps = {
  isLoading: boolean;
  error: string | null;
};

export type WeatherState = {
  weather: WeatherProps | null;
} & CommonProps;

const weatherInitialState: WeatherState = {
  weather: null as WeatherProps | null,
  isLoading: true,
  error: null,
};

export const fetchWeatherData = () => {
  const [state, setState] = React.useState(weatherInitialState);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `/weather?q=${city}&units=imperial&APPID=${weatherKey}`;
        const { data: weatherData } = await weatherApi.get<WeatherProps>(url);
        setState((prev) => ({ ...prev, weather: weatherData }));
      } catch (error) {
        const errorMessage = 'Erro ao obter dados do clima. Tente novamente mais tarde.';
        setState((prev) => ({ ...prev, error: errorMessage }));
        console.error(error);
      } finally {
        setState((prev) => ({ ...prev, isLoading: false }));
      }
    };

    fetchData();
  }, []);

  return state;
};

export type ForecastState = {
  forecast: ForecastProps | null;
} & CommonProps;

const forecastInitialState: ForecastState = {
  forecast: null as ForecastProps | null,
  isLoading: true,
  error: null,
};

export const fetchForecastData = () => {
  const [state, setState] = React.useState(forecastInitialState);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `/forecast?q=${city}&units=imperial&APPID=${weatherKey}`;
        const { data: forecastData } = await weatherApi.get<ForecastProps>(url);
        setState((prev) => ({ ...prev, forecast: forecastData }));
      } catch (error) {
        const errorMessage = 'Erro ao obter dados do clima. Tente novamente mais tarde.';
        setState((prev) => ({ ...prev, error: errorMessage }));
        console.error(error);
      } finally {
        setState((prev) => ({ ...prev, isLoading: false }));
      }
    };

    fetchData();
  }, []);

  return state;
};
