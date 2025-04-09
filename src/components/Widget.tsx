import {
  WidgetContainer,
  WidgetItemColumn,
  WidgetItemRow,
  WeatherIcon,
} from '../styles/Widget.styles';
import { FiSettings } from 'react-icons/fi';
import { BsCloudHaze2 } from 'react-icons/bs';
import { MdCurrencyExchange } from 'react-icons/md';

const Widget = () => {
  return (
    <WidgetContainer>
      {/* Weather */}
      <WidgetItemColumn>
        <div>Gurugram</div>
        <WidgetItemRow>
          <div>30°</div>
          <WeatherIcon src="weather-icon-url" alt="weather" />
        </WidgetItemRow>
      </WidgetItemColumn>

      {/* AQI */}
      <WidgetItemColumn>
        <div>Air Quality · 170</div>
        <WidgetItemRow>
          <div>Moderate</div>
          <WeatherIcon as={BsCloudHaze2} />
        </WidgetItemRow>
      </WidgetItemColumn>

      {/* Stock Market */}
      <WidgetItemColumn>
        <div>NIFTY 50</div>
        <WidgetItemRow>
          <div>22,670</div>
          <WeatherIcon as={MdCurrencyExchange} />
        </WidgetItemRow>
      </WidgetItemColumn>

      {/* Settings */}
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
