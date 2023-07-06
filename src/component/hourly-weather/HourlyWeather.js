import React from 'react'
import "./HourlyWeather.css"
import { useSelector } from 'react-redux';
import { getHourlyWeather } from '../../store/hourlyWeatherSlice';
import HourlyWeatherItem from './hourly-weather-item/HourlyWeatherItem';
import getIcon from '../../utils/getIcon';

const HourlyWeather = () => {
    const HourlyWeatherData = useSelector(getHourlyWeather)
    const weatherItems = HourlyWeatherData.data.map((item, index) => (
        <HourlyWeatherItem
          key={index}
          time={item.time}
          icon={getIcon(item.icon)}
          temperature={item.temperature}
        />
      ));
    
      return (
        <div className="weather-by-hour">
          <h2 className="weather-by-hour__heading">Today's weather</h2>
          <div className="weather-by-hour__container">{weatherItems}</div>
        </div>
      );
}

export default HourlyWeather