import {
  WbSunny as SunnyIcon, // ensolarado
  Bedtime as MoonIcon, // luar
  Thunderstorm as RainIcon, // chuva ou tempestade
} from '@mui/icons-material';
import SunWithCloudsIcon from '../../assets/icons/SunWithCloudsIcon'; // sol entre nuvens

function getDailyWeatherIconByHour(hour: number) {
  const dailyWeatherIcons = {
    night: <MoonIcon sx={{ fontSize: 30, color: 'white' }} />,
    day: <SunnyIcon sx={{ fontSize: 30, color: 'orange' }} />,
  };
  const period = hour >= 6 && hour < 18 ? 'day' : 'night';
  return dailyWeatherIcons[period];
}

const weatherIcons = {
  rain: <RainIcon sx={{ fontSize: 80, color: 'white' }} />,
  cloudy: <SunWithCloudsIcon sx={{ fontSize: 80, color: 'orange' }} />,
  clear: <SunnyIcon sx={{ fontSize: 80, color: 'orange' }} />,
};

function findWeatherIcon(main: string) {
  if (['Rain', 'Drizzle', 'Thunderstorm'].includes(main)) return 'rain';
  if (['Clouds'].includes(main)) return 'cloudy';
  return 'clear';
}

const getWeatherIcon = (mainData: string) => weatherIcons[findWeatherIcon(mainData)];
const getDailyWeatherIcon = (hours: number) => getDailyWeatherIconByHour(hours);

export { getWeatherIcon, getDailyWeatherIcon };
