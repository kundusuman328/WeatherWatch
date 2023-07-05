import React from "react";

import "./LocationAndDate.css";
import { getCurrentWeather } from "../../store/currentWeatherSlice";
import { useSelector } from "react-redux";

const LocationAndDate = () => {
  const currentWeatherData = useSelector(getCurrentWeather) 
  return (
    <div className="location-and-date">
      <h1 className="location-and-date__location">{currentWeatherData.location}</h1>
      <div>{currentWeatherData.date}</div>
    </div>
  );
};

export default LocationAndDate;