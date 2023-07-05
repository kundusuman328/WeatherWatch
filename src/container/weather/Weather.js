import React from "react";

import "./Weather.css";


import LocationAndDate from "../../component/location-and-date/LocationAndDate";
import CurrentWeather from "../../component/current-weather/CurrentWeather";

class Weather extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="main-container">
          <LocationAndDate />
          <CurrentWeather />
        </div>
      </div>
    );
  }
}

export default Weather;