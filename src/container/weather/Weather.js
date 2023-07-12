import React, { useEffect } from "react";

import "./Weather.css";

import { useDispatch } from "react-redux";
import { initCurrentWeather } from "../../store/currentWeatherSlice";
import HourlyWeather from "../../component/hourly-weather/HourlyWeather";
import FiveDayWeather from "../../component/five-day-weather/FiveDayWeather";
import { initHourlyWeather } from "../../store/hourlyWeatherSlice";
import CurrentWeatherLeft from "../../component/current-weather-left/CurrentWeatherLeft";
import CurrentWeatherRight from "../../component/current-weather-right/CurrentWeatherRight";

const Weather = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(initCurrentWeather({
          lat:position.coords.latitude,
          lng:position.coords.longitude
        }))
        dispatch(initHourlyWeather({
          lat:position.coords.latitude,
          lng:position.coords.longitude
        }))
      });
      
    }
  }, [dispatch])
  
  return (
    <div className="body">
        <div className="background"></div>
        <div className="main-container">
          <div className="top-container">
            <CurrentWeatherLeft />
            <CurrentWeatherRight />
          </div>
          <HourlyWeather />
          <FiveDayWeather />
        </div>
      </div>
  )
}

export default Weather