import * as React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { Box, Typography } from '@mui/material';

type WeatherCarouselProps = {
  weatherTemperature: number;
  weatherIcon: React.JSX.Element;
};

const WeatherCarousel = ({ weatherTemperature, weatherIcon }: WeatherCarouselProps) => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <Box sx={{ width: 150, margin: '0 auto' }}>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <Typography variant="h2" sx={{ display: 'flex', justifyContent: 'center', mt: '0.5em' }}>
            {weatherTemperature} °C
          </Typography>
        </div>
        <div className="keen-slider__slide">
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>{weatherIcon}</Box>
        </div>
      </div>
    </Box>
  );
};

export default WeatherCarousel;
