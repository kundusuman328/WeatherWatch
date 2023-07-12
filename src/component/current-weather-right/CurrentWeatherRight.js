import React from 'react'
import "./CurrentWeatherRight.css"
import { useSelector } from 'react-redux'
import { getCurrentWeather } from '../../store/currentWeatherSlice'
import convertDegreeToDirection from '../../utils/convertDegreeToDirection'
import { airPressure, humidity, rain, wind } from '../../svg'

const CurrentWeatherRight = () => {
    const currentWeatherData = useSelector(getCurrentWeather) 
    return (
      <div className="current-stats">
      <div className="current-stats___conatiner">
        <div className="current-stat">
          <div className="current-stat__icon">
            <img src={humidity} alt=""/>
          </div>
          <div className="current-stat_annot">
            <div className="current-stat__label">Humidity</div>
            <div className="current-stat__value">{currentWeatherData.humidity} %</div>
          </div>
        </div>

        <div className="current-stat">
          <div className="current-stat__icon">
            <img src={airPressure} alt=""/>
          </div>
          <div className="current-stat_annot">
            <div className="current-stat__label">Air Pressure</div>
            <div className="current-stat__value">{currentWeatherData.airPressure} PS</div>
          </div>
        </div>

        <div className="current-stat">
          <div className="current-stat__icon">
            <img src={rain} alt=""/>
          </div>
          <div className="current-stat_annot">
            <div className="current-stat__label">Chance of Rain</div>
            <div className="current-stat__value">{currentWeatherData.rain} %</div>
          </div>
        </div>

        <div className="current-stat">
          <div className="current-stat__icon">
            <img src={wind} alt=""/>
          </div>
          <div className="current-stat_annot">
            <div className="current-stat__label">Wind Speed</div>
            <div className="current-stat__value">{currentWeatherData.wind} km/h</div>
          </div>
        </div>
      </div>
    </div>
      );
}

export default CurrentWeatherRight