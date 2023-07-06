import React from "react";

import "./LocationAndDate.css";
import { getCurrentWeather } from "../../store/currentWeatherSlice";
import { useSelector } from "react-redux";
import formatDateToString from "../../utils/formatDateToString";

const LocationAndDate = () => {
  const currentWeatherData = useSelector(getCurrentWeather) 
  const date = new Date(currentWeatherData.date * 1000)
  console.log(date)
  const dateString = formatDateToString(date)
  return (
    <div className="location-and-date">
      <h1 className="location-and-date__location">{currentWeatherData.location}</h1>
      <div>{dateString}</div>
    </div>
  );
};

export default LocationAndDate;