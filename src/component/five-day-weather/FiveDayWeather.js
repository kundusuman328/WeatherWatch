import React from "react";
import FiveDayWeatherItem from "./five-day-weather-item/FiveDayWeatherItem";
import getIcon from "../../utils/getIcon";

import "./FiveDayWeather.css";
import { useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";

const FiveDayWeather = () => {
  const data = useSelector((state) => state.hourlyWeather);

  const weatherItems = data.fiveDayData.map((item) => (
    <FiveDayWeatherItem
      date={item.date}
      icon={getIcon(item.icon)}
      low={item.low}
      high={item.high}
      rain={item.rain}
      wind={item.wind}
    />
  ));

  let content;
  if (data.status === "loading") {
    content = <Spinner />;
  } else if (data.status === "succeeded") {
    content = (
      <>
        <div className="next-5-days">
          <h2 className="next-5-days__heading">Next 5 days</h2>
          <div className="next-5-days__container">
            {weatherItems}
          </div>
        </div>
      </>
    );
  } else if (data.status === "failed") {
    content = data.error;
  }

  return <>{content}</>;
};

export default FiveDayWeather;
