import {
  WidgetContainer,
  WidgetItemColumn,
  WidgetItemRow,
  WidgetIcon,
  AqiIcon,
  StyledSpan,
  SettingsBox,
  SettingsTitle,
  SettingsTopRow,
  SettingsText
} from '../styles/Widget.styles';
import { FiSettings } from 'react-icons/fi';
import { BsCloudHaze2 } from 'react-icons/bs';
import { FaArrowCircleDown } from "react-icons/fa";
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

  {/* Weather Widget */ }
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

  {/* AQI widget */ }
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



  const generateDisplayAQI = (level: number) => {
    switch (level) {
      case 1: return Math.floor(Math.random() * 51);            // 0–50
      case 2: return Math.floor(Math.random() * 50) + 51;       // 51–100
      case 3: return Math.floor(Math.random() * 100) + 101;     // 101–200
      case 4: return Math.floor(Math.random() * 100) + 201;     // 201–300
      case 5: return Math.floor(Math.random() * 200) + 301;     // 301–500
      default: return 0;
    }
  };

  const getAqiColor = (value: number) => {
    if (value <= 50) return '#00e400';        // Good - Green
    if (value <= 100) return '#ffff00';       // Fair - Yellow
    if (value <= 200) return '#ff7e00';        // Moderate - Orange
    if (value <= 300) return '#ff0000';        // Poor - Red
    return '#8f3f97';                         // Very Poor - Purple
  };

  const realAQI = aqiData?.list[0]?.main.aqi;
  const displayAQI = generateDisplayAQI(realAQI ?? 0);


  const getAqiLabel = (value: number) => {
    if (value <= 50) return "Good";
    if (value <= 100) return "Fair";
    if (value <= 200) return "Moderate";
    if (value <= 300) return "Poor";
    return "Very Poor"; // >300
  };

  const aqiLabel = getAqiLabel(displayAQI);






  return (
    <WidgetContainer>
      {/* Weather widget */}
      <WidgetItemColumn>
        <div>{weatherData?.name}</div>
        <WidgetItemRow>
          <div>{weatherData?.main.temp}</div>
          <WidgetIcon
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
          <AqiIcon bg={getAqiColor(displayAQI)}>
            <WidgetIcon as={BsCloudHaze2} size={18} color="black" />
          </AqiIcon>

        </WidgetItemRow>
      </WidgetItemColumn>

      {/* Stock Market widget */}
      <WidgetItemColumn>
        <div>NIFTY 50 <StyledSpan>-1.65%</StyledSpan></div>
        <WidgetItemRow>
          <div>22,670</div>
          <WidgetIcon as={FaArrowCircleDown} color='#f24c4c' />
        </WidgetItemRow>
      </WidgetItemColumn>

      <SettingsBox>
  <SettingsTopRow>
    <FiSettings size={18} color="#72b7d7" />
    <SettingsTitle>Settings</SettingsTitle>
  </SettingsTopRow>
  <SettingsText>Customize your space</SettingsText>
</SettingsBox>


    </WidgetContainer>
  );
};

export default Widget;
