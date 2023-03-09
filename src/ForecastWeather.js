import React, { useState } from "react";
import axios from "axios";
import DailyForecastWeather from "./DailyForecastWeather";
import "./ForecastWeather.css";

export default function ForecastWeather(props) {
  const [forecastWeatherData, setForecastWeatherData] = useState({
    ready: false,
  });

  function handleResponse(response) {
    setForecastWeatherData({
      ready: true,
      forecast: response.data.daily,
    });
  }

  if (forecastWeatherData.ready) {
    return (
      <div className="ForecastWeather row">
        {forecastWeatherData.forecast.map(function (dailyForecast, index) {
          if (index < 6) {
            return (
              <div className="col-4" key={index}>
                <DailyForecastWeather dailyForecast={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    const apiKey = "o65149f37004a818054t1c639bd4becf";
    const units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }
}
