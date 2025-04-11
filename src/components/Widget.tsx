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
  const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const { location } = useGeolocation();

  interface WeatherData {
    name: string;
    main: { temp: number };
    weather: Array<{ icon: string; description: string }>;
  }

  interface AqiData {
    list: Array<{ main: { aqi: number } }>;
  }

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [aqiData, setAqiData] = useState<AqiData | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch weather
  useEffect(() => {
    if (location) {
      const fetchWeatherData = async () => {
        try {
          setLoading(true);
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${WEATHER_API_KEY}&units=metric`
          );
          if (!response.ok) throw new Error("Weather fetch failed");
          const data = await response.json();
          setWeatherData(data);
        } catch (err) {
          setErrorMessage("Failed to fetch weather data");
        } finally {
          setLoading(false);
        }
      };
      fetchWeatherData();
    }
  }, [location]);

  // Fetch AQI
  useEffect(() => {
    const fetchAqiData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/air_pollution?lat=${location?.lat}&lon=${location?.lon}&appid=${WEATHER_API_KEY}`
        );
        if (!response.ok) throw new Error("AQI fetch failed");
        const data = await response.json();
        setAqiData(data);
      } catch (err) {
        setErrorMessage("Failed to fetch AQI data");
      }
    };
    if (location) fetchAqiData();
  }, [location]);

  const generateDisplayAQI = (level: number) => {
    switch (level) {
      case 1: return Math.floor(Math.random() * 51);
      case 2: return Math.floor(Math.random() * 50) + 51;
      case 3: return Math.floor(Math.random() * 100) + 101;
      case 4: return Math.floor(Math.random() * 100) + 201;
      case 5: return Math.floor(Math.random() * 200) + 301;
      default: return 0;
    }
  };

  const getAqiColor = (value: number) => {
    if (value <= 50) return '#00e400';
    if (value <= 100) return '#ffff00';
    if (value <= 200) return '#ff7e00';
    if (value <= 300) return '#ff0000';
    return '#8f3f97';
  };

  const getAqiLabel = (value: number) => {
    if (value <= 50) return "Good";
    if (value <= 100) return "Fair";
    if (value <= 200) return "Moderate";
    if (value <= 300) return "Poor";
    return "Very Poor";
  };

  const realAQI = aqiData?.list[0]?.main.aqi ?? 0;
  const displayAQI = generateDisplayAQI(realAQI);
  const aqiLabel = getAqiLabel(displayAQI);

  // 🔄 Loading and ❌ Error Handling
  if (loading) return <WidgetContainer><div style={{ fontSize: "1rem", color: "#bbb" , display: "flex", justifyContent: "center" }}>Loading...</div></WidgetContainer>;
  if (errorMessage) return <WidgetContainer><div style={{ fontSize: "1rem", color: "#bbb", display: "flex", justifyContent: "center" }}>{errorMessage}</div></WidgetContainer>;

  return (
    <WidgetContainer>
      {/* Weather Widget */}
      <WidgetItemColumn>
        <div>{weatherData?.name}</div>
        <WidgetItemRow>
          <div>{weatherData?.main.temp}°C</div>
          <WidgetIcon
            src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
            alt={weatherData?.weather[0].description}
          />
        </WidgetItemRow>
      </WidgetItemColumn>

      {/* AQI Widget */}
      <WidgetItemColumn>
        <div>Air quality · {displayAQI}</div>
        <WidgetItemRow>
          <div>{aqiLabel}</div>
          <AqiIcon bg={getAqiColor(displayAQI)}>
            <WidgetIcon as={BsCloudHaze2} size={18} color="black" />
          </AqiIcon>
        </WidgetItemRow>
      </WidgetItemColumn>

      {/* Stock Market Widget */}
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


