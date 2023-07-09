import React from "react";

import "./CurrentWeather.css";
import convertDegreeToDirection from "../../utils/convertDegreeToDirection"
import { getCurrentWeather } from "../../store/currentWeatherSlice";
import { useSelector } from "react-redux";
import getIcon from "../../utils/getIcon";
import Spinner from "../Spinner/Spinner";



const CurrentWeather = () => {
    const currentWeatherData = useSelector(getCurrentWeather) 

    const icon = getIcon(currentWeatherData.icon)

    const sunriseDate = new Date(currentWeatherData.sunrise * 1000)
    const sunriseTime = sunriseDate.toLocaleTimeString('en-US')
    const sunsetDate = new Date(currentWeatherData.sunset * 1000)
    const sunsetTime = sunsetDate.toLocaleTimeString('en-US')

    const direction = convertDegreeToDirection(currentWeatherData.direction)
    
    let content;
    if(currentWeatherData.status === "loading"){
      content = <Spinner/>
    }else if(currentWeatherData.status === "succeeded"){
      content = (
        <>
        <div className="current-temperature">
        <div className="current-temperature__icon-container">
          <img src={icon} className="current-temperature__icon" alt="" />
        </div>
        <div className="current-temperature__content-container">
          <div className="current-temperature__value">{currentWeatherData.temperature}&deg;</div>
          <div className="current-temperature__summary">{currentWeatherData.summary}</div>
        </div>
      </div>

      <div className="current-stats">
        <div>
          <div className="current-stats__value">{currentWeatherData.feels_like}&deg;</div>
          <div className="current-stats__label">Feels like</div>
          <div className="current-stats__value">{currentWeatherData.rain}%</div>
          <div className="current-stats__label">Rain</div>
        </div>
        <div>
          <div className="current-stats__value">{currentWeatherData.wind}kmph</div>
          <div className="current-stats__label">Wind</div>
          <div className="current-stats__value">{direction}</div>
          <div className="current-stats__label">Direction</div>
        </div>
        <div>
          <div className="current-stats__value">{sunriseTime}</div>
          <div className="current-stats__label">Sunrise</div>
          <div className="current-stats__value">{sunsetTime}</div>
          <div className="current-stats__label">Sunset</div>
        </div>
      </div>
      </>
      )
    }else if(currentWeatherData.status === "failed"){
      content = currentWeatherData.error
    }


  return (<>{content}</>);
};

export default CurrentWeather;