import {
  Box,
  CardContent,
  Grid2 as Grid,
  Stack,
  CircularProgress,
  Alert,
  Typography,
  CardProps,
} from '@mui/material';

import Title from '../title';
import Card from '../card';
import Carousel from '../carousel';
import { getWeatherIcon, getDailyWeatherIcon } from './weatherIcons';

import { fetchWeatherData } from '../../hooks/useWeather';

import { getDateNow } from '../../utils/functions/getDateNow';
import fahrenheitToCelsius from '../../utils/functions/fahrenheitToCelsius';

export default function Weather(props: CardProps) {
  const { weather, isLoading, error } = fetchWeatherData();

  const { dateNow, hours } = getDateNow();

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

  const weatherIcon = getWeatherIcon(mainData);
  const dailyWeatherIcon = getDailyWeatherIcon(hours);

  // Exibir loader circular enquanto os dados estão sendo carregados
  if (isLoading) return <CircularProgress />;

  // Caso a API tenha retornado um erro
  if (error) return <Alert severity="error">{error}</Alert>;

  const contents = [
    <Typography variant="h2" sx={{ display: 'flex', justifyContent: 'center', mt: '0.5em' }}>
      {weatherTemperature} °C
    </Typography>,
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>{weatherIcon}</Box>,
  ];

  // Renderizar o componente apenas após os dados serem carregados
  return (
    // <Grid size={{ xs: 12, md: 6, lg: 9 }}>
    <Card sx={{ padding: '1rem 0.5rem' }} {...props}>
      <CardContent>
        <Stack direction="row" spacing={1} sx={{ justifyContent: 'center' }}>
          <Title>{dateNow}</Title> {/* Exibir a data atual */}
        </Stack>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: 150, margin: '0 auto' }}>
          {/* carrousel: nuvem e temperatura */}
          <Carousel contents={contents} />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
          {weatherCity + ' ' + weatherCountry}
          {dailyWeatherIcon}
        </Box>
      </CardContent>
    </Card>
    // </Grid>
  );
}
