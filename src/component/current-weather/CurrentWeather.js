import React from "react";

import "./CurrentWeather.css";
import svg1 from "../../svg/01.svg";
import svg2 from "../../svg/02.svg";
import svg3 from "../../svg/03.svg";
import svg4 from "../../svg/04.svg";
import svg9 from "../../svg/09.svg";
import svg10 from "../../svg/10.svg";
import svg11 from "../../svg/11.svg";
import convertDegreeToDirection from "../../utils/convertDegreeToDirection"
import { getCurrentWeather } from "../../store/currentWeatherSlice";
import { useSelector } from "react-redux";

const CurrentWeather = () => {
    const currentWeatherData = useSelector(getCurrentWeather) 
    const iconCode = currentWeatherData.icon.substring(0, 2);
    let icon = null;
    switch (iconCode) {
      case "01":
        icon = svg1;
        break;
      case "02":
        icon = svg2;
        break;
      case "03":
        icon = svg3;
        break;
      case "04":
        icon = svg4;
        break;
      case "09":
        icon = svg9;
        break;
      case "10":
        icon = svg10;
        break;
      case "11":
        icon = svg11;
        break;
      default:
        icon = null;
    }

    const sunriseDate = new Date(currentWeatherData.sunrise * 1000)
    const sunriseTime = sunriseDate.toLocaleTimeString('en-US')
    const sunsetDate = new Date(currentWeatherData.sunset * 1000)
    const sunsetTime = sunsetDate.toLocaleTimeString('en-US')

    const direction = convertDegreeToDirection(currentWeatherData.direction)


  return (
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
  );
};

export default CurrentWeather;