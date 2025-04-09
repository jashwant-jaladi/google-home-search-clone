import {
  WidgetContainer,
  WidgetItemColumn,
  WidgetItemRow,
  WeatherIcon,
} from '../styles/Widget.styles';
import { FiSettings } from 'react-icons/fi';
import { BsCloudHaze2 } from 'react-icons/bs';
import { MdCurrencyExchange } from 'react-icons/md';
import useGeolocation from '../utils/GeoLocation';
import { useState, useEffect } from 'react';

const Widget = () => {
  const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY
  const { location, error } = useGeolocation();
  interface WeatherData {
    name: string;
    main: {
      temp: number;
    };
    weather: Array<{
      icon: string;
      description: string;
    }>;
  }

  interface AqiData {
    list: Array<{
      main: {
        aqi: number;
      };
    }>;
  }

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [aqiData, setAqiData] = useState<AqiData | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (location) {
      const fetchWeatherData = async () => {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${WEATHER_API_KEY}&units=metric`
          );

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();
          setWeatherData(data);
        } catch (error) {
          setErrorMessage("Failed to fetch weather data");
        } finally {
          setLoading(false);
        }
      };

      fetchWeatherData();
    }
  }, [location]);

  useEffect(() => {
    const fetchAqiData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/air_pollution?lat=${location?.lat}&lon=${location?.lon}&appid=${WEATHER_API_KEY}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setAqiData(data);
      } catch (error) {
        setErrorMessage("Failed to fetch AQI data");
      }
    };

    if (location) {
      fetchAqiData();
    }
  }, [location]);

  const realAQI = aqiData?.list[0]?.main.aqi;
  const displayAQI = realAQI ? realAQI * 100 : Math.floor(Math.random() * 101);

  const getAqiLabel = (level: number) => {
    switch (level) {
      case 1: return 'Good';
      case 2: return 'Fair';
      case 3: return 'Moderate';
      case 4: return 'Poor';
      case 5: return 'Very Poor';
      default: return 'Unknown';
    }
  };

  const aqiLabel = getAqiLabel(realAQI ?? 0);

console.log(aqiData)
  return (
    <WidgetContainer>
      {/* Weather widget */}
      <WidgetItemColumn>
        <div>{weatherData?.name}</div>
        <WidgetItemRow>
          <div>{weatherData?.main.temp}</div>
          <WeatherIcon
            src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
            alt={weatherData?.weather[0].description}
          />
        </WidgetItemRow>
      </WidgetItemColumn>

      {/* AQI widget */}
      <WidgetItemColumn>
        <div>Air quality · {displayAQI}</div>
        <WidgetItemRow>
          <div>{aqiLabel}</div>
          <WeatherIcon as={BsCloudHaze2} />
        </WidgetItemRow>
      </WidgetItemColumn>

      {/* Stock Market widget */}
      <WidgetItemColumn>
        <div>NIFTY 50</div>
        <WidgetItemRow>
          <div>22,670</div>
          <WeatherIcon as={MdCurrencyExchange} />
        </WidgetItemRow>
      </WidgetItemColumn>

      {/* Settings widget */}
      <WidgetItemColumn>
        <div>Customize</div>
        <WidgetItemRow>
          <div>Settings</div>
          <WeatherIcon as={FiSettings} />
        </WidgetItemRow>
      </WidgetItemColumn>
    </WidgetContainer>
  );
};

export default Widget;
