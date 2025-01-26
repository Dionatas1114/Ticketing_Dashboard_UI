import * as React from 'react';
import { weatherApi, weatherKey, city } from '../../api';

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

export const fetchWeatherData = () => {
  const [weather, setWeather] = React.useState<WeatherProps | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: weatherData }: any = await weatherApi.get(
          `/weather?q=${city}&units=imperial&APPID=${weatherKey}`
        );
        setWeather(weatherData);
      } catch (error) {
        setError('Não foi possível carregar os dados do clima. Tente novamente mais tarde.');
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { weather, isLoading, error };
};

export const fetchForecastData = () => {
  const [forecast, setForecast] = React.useState<ForecastProps | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: forecastData }: any = await weatherApi.get(
          `/forecast?q=${city}&units=imperial&APPID=${weatherKey}`
        );
        setForecast(forecastData);
      } catch (error) {
        setError('Não foi possível carregar os dados do clima. Tente novamente mais tarde.');
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { forecast, isLoading, error };
};
