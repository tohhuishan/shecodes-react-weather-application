import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import ForecastTemperature from "./ForecastTemperature";
import "./ForecastWeather.css";

export default function ForecastWeather(props) {
  const [forecastWeatherData, setForecastWeatherData] = useState({
    ready: false,
  });

  function handleResponse(response) {
    console.log(response.data);

    setForecastWeatherData({
      ready: true,
      day: new Date(response.data.daily[0].time * 1000),
      icon: response.data.daily[0].condition.icon,
      iconUrl: response.data.daily[0].condition.icon_url,
      minimumTemperature: response.data.daily[0].temperature.minimum,
      maximumTemperature: response.data.daily[0].temperature.maximum,
    });
  }

  if (forecastWeatherData.ready) {
    return (
      <div className="ForecastWeather row">
        <div className="col-4">
          <ForecastDay unformattedDay={forecastWeatherData.day} />
          <div>
            <img
              src={forecastWeatherData.iconUrl}
              alt={forecastWeatherData.icon}
              className="forecast-weather-icon"
            />
          </div>
          <ForecastTemperature
            minimumTemperature={forecastWeatherData.minimumTemperature}
            maximumTemperature={forecastWeatherData.maximumTemperature}
          />
        </div>
      </div>
    );
  } else {
    const apiKey = "o65149f37004a818054t1c639bd4becf";
    const units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }
}
