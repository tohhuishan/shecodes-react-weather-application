import React from "react";
import ForecastDay from "./ForecastDay";
import ForecastTemperature from "./ForecastTemperature";

export default function DailyForecastWeather(props) {
  let day = new Date(props.dailyForecast.time * 1000);
  let icon = props.dailyForecast.condition.icon;
  let iconUrl = props.dailyForecast.condition.icon_url;
  let minimumTemperature = props.dailyForecast.temperature.minimum;
  let maximumTemperature = props.dailyForecast.temperature.maximum;

  return (
    <div className>
      <ForecastDay unformattedDay={day} />
      <div>
        <img src={iconUrl} alt={icon} className="forecast-weather-icon" />
      </div>
      <ForecastTemperature
        minimumTemperature={minimumTemperature}
        maximumTemperature={maximumTemperature}
      />
    </div>
  );
}
