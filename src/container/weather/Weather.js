import React, { useEffect } from "react";

import "./Weather.css";


import LocationAndDate from "../../component/location-and-date/LocationAndDate";
import CurrentWeather from "../../component/current-weather/CurrentWeather";
import { useDispatch } from "react-redux";
import { initCurrentWeather } from "../../store/currentWeatherSlice";

const Weather = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(initCurrentWeather({
          lat:position.coords.latitude,
          lng:position.coords.longitude
        }))
      });
    }
  }, [dispatch])
  
  return (
    <div className="body">
        <div className="main-container">
          <LocationAndDate />
          <CurrentWeather />
        </div>
      </div>
  )
}

export default Weather