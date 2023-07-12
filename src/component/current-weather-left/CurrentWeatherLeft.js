import React from 'react'
import "./CurrentWeatherLeft.css"
import { getCurrentWeather } from '../../store/currentWeatherSlice'
import { useSelector } from 'react-redux'
import formatDateToString from '../../utils/formatDateToString'
import getIcon from '../../utils/getIcon'

const CurrentWeatherLeft = () => {
    const currentWeatherData = useSelector(getCurrentWeather) 
    const icon = getIcon(currentWeatherData.icon)

    const date = new Date(currentWeatherData.date * 1000)
    const dateString = formatDateToString(date)
    return (
        <div className="current-weather__left">
          <div className="current-temperature__icon-container">
            <img
              src={icon}
              className="current-temperature__icon"
              alt=""
            />
          </div>
    
          <div className="current-temperature__summary">{currentWeatherData.summary}</div>
    
          <div className="location-and-date__location">{currentWeatherData.location}</div>
    
          <div className="current-temperature__value">{currentWeatherData.temperature}&deg;C</div>
    
          <div className="location-and-date__date">{dateString}</div>
        </div>
      );
}

export default CurrentWeatherLeft