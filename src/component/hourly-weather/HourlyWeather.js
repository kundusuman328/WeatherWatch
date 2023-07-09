import React from 'react'
import "./HourlyWeather.css"
import { useSelector } from 'react-redux';
import { selectAllHourlyWeatherItems } from '../../store/hourlyWeatherSlice';
import HourlyWeatherItem from './hourly-weather-item/HourlyWeatherItem';
import getIcon from '../../utils/getIcon';
import Spinner from '../Spinner/Spinner';

const HourlyWeather = () => {
    const hourlyWeather = useSelector((state => state.hourlyWeather))
    let content;
    if(hourlyWeather.status === "loading"){
      content = <Spinner/>
    }else if(hourlyWeather.status === "succeeded"){
      content = (
        <>
        <div className="weather-by-hour">
          <h2 className="weather-by-hour__heading">Next 24 hours</h2>
          <div className="weather-by-hour__container">{ 
          hourlyWeather.data.map((item, index) => (
        <HourlyWeatherItem
          key={index}
          time={item.time}
          icon={getIcon(item.icon)}
          temperature={item.temperature}
        />
      ))
      }</div>
        </div>
        </>
      )
    }else if(hourlyWeather.status === "failed"){
      content = hourlyWeather.error
    }

    
    
      return (
        <>
        {content}
        </>
      );
}

export default HourlyWeather