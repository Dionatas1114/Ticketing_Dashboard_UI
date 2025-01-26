import * as React from 'react';
import { Box, CardContent, Grid2 as Grid, Stack, CircularProgress, Alert } from '@mui/material';

import SunnyIcon from '@mui/icons-material/WbSunny'; // ensolarado
import MoonIcon from '@mui/icons-material/Bedtime'; // luar
import CloudIcon from '@mui/icons-material/WbCloudy'; // nublado
import RainIcon from '@mui/icons-material/Thunderstorm'; // chuva ou tempestade

import Title from '../title';
import Card from '../card';
import WeatherCarousel from './carousel';
import { getDateNow } from './getDateNow';

import { city, fetchWeatherData, fetchForecastData } from '../../hooks/weather/fetchWeather';

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

const fahrenheitToCelsius = (fahrenheit: number): number => Math.round(((fahrenheit - 32) * 5) / 9);

export default function Weather() {
  const [weather, setWeather] = React.useState<WeatherProps | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  const { dateNow, hours } = getDateNow();

  const dailyWeatherIcons = {
    night: <MoonIcon sx={{ fontSize: 30, color: 'white' }} />,
    day: <SunnyIcon sx={{ fontSize: 30, color: 'orange' }} />,
  };

  function getPeriodByHour(hour: number): keyof typeof dailyWeatherIcons {
    if (hour >= 18 || hour < 6) return 'night';
    return 'day';
  }

  function getDailyWeatherIconByHour(hour: number) {
    const period = getPeriodByHour(hour);
    return dailyWeatherIcons[period];
  }

  const weatherIcons = {
    rain: <RainIcon sx={{ fontSize: 80, color: 'white' }} />,
    cloudy: <CloudIcon sx={{ fontSize: 80, color: 'white' }} />,
    clear: <SunnyIcon sx={{ fontSize: 80, color: 'orange' }} />,
  };

  const getWeatherIcon = (main: string) => {
    if (['Rain', 'Drizzle', 'Thunderstorm'].includes(main)) return 'rain';
    if (['Clouds'].includes(main)) return 'cloudy';
    return 'clear';
  };

  const { name, sys, main, coord, weather: weatherData = [] } = weather || {};
  const weatherCity = name || '';
  const weatherCountry = sys?.country || '';
  const weatherTemperature = main?.temp ? fahrenheitToCelsius(main.temp) : 0;
  // const lon = coord?.lon || 0;
  // const lat = coord?.lat || 0;
  // const pressure = main?.pressure || 0;
  // const humidity = main?.humidity || 0;
  // const wind = weather?.wind?.speed || 0;
  // const feelsLike = main?.feels_like ? fahrenheitToCelsius(main.feels_like) : 0; // Sensação termica
  const mainData = weatherData[0]?.main || '';

  const weatherIcon = weatherIcons[getWeatherIcon(mainData)];
  const dailyWeatherIcon = getDailyWeatherIconByHour(hours);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherData = await fetchWeatherData(city);
        // const foreCastData = await fetchForecastData(city);
        // console.log('🚀 ~ fetchData ~ foreCastData:', foreCastData);
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

  // Exibir loader ou mensagem enquanto os dados estão sendo carregados
  if (isLoading) return <CircularProgress />;

  // Caso os dados da API tenha retornado um erro
  if (error) return <Alert severity="error">{error}</Alert>;

  // Renderizar o componente apenas após os dados serem carregados
  return (
    <Grid size={{ xs: 12, md: 6, lg: 9 }}>
      <Card sx={{ padding: '1rem 0.5rem' }}>
        <CardContent>
          <Stack direction="row" spacing={1} sx={{ justifyContent: 'center' }}>
            <Title>{dateNow}</Title> {/* Exibir a data atual */}
          </Stack>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {/* carrousel: nuvem e temperatura */}
            <WeatherCarousel {...{ weatherTemperature, weatherIcon }} />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
            {weatherCity + ' ' + weatherCountry}
            {dailyWeatherIcon}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}
