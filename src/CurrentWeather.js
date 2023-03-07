import React, { useState } from "react";
import axios from "axios";

import CurrentDateAndTime from "./CurrentDateAndTime";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  const [currentWeatherData, setCurrentWeatherData] = useState({
    ready: false,
  });

  function handleResponse(response) {
    setCurrentWeatherData({
      ready: true,
      city: response.data.city,
      country: response.data.country,
      icon: response.data.condition.icon,
      iconUrl: response.data.condition.icon_url,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
    });
  }

  if (currentWeatherData.ready) {
    return (
      <div className="CurrentWeather row">
        <div className="col-md-9 left-side">
          <div className="displayed-location-with-icon">
            <h1>
              <i className="fa-solid fa-location-dot location-icon"></i>{" "}
              <span className="searched-location">
                {currentWeatherData.city} in {currentWeatherData.country}
              </span>
            </h1>
          </div>

          <div className="row current-weather-and-temperature">
            <div className="col-md-6 current-weather">
              <img
                src={currentWeatherData.iconUrl}
                alt={currentWeatherData.icon}
                className="current-weather-icon"
              />
            </div>

            <div className="col-md-6 current-temperature">
              <h2>
                <span className="temperature celsius">
                  {Math.round(currentWeatherData.temperature)}
                </span>{" "}
                <span className="temperature-units-conversion">
                  <a href="/" className="celsius-link active">
                    °C
                  </a>
                  <span className="divider"> | </span>
                  <a href="/" className="fahrenheit-link">
                    °F
                  </a>
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 right-side">
          <div className="last-updated">
            <h3>Last updated:</h3>
          </div>

          <CurrentDateAndTime unformattedDate={currentWeatherData.date} />

          <div className="current-humidity">
            <h3>
              Humidity:{" "}
              <span className="current-humidity">
                {currentWeatherData.humidity}
              </span>{" "}
              %
            </h3>
          </div>

          <div className="current-wind">
            <h3>
              Wind:{" "}
              <span className="current-wind">
                {Math.round(currentWeatherData.wind)}
              </span>{" "}
              m/s
            </h3>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "o65149f37004a818054t1c639bd4becf";
    const units = "metric";
    let city = "Madrid";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);

    return <div className="CurrentWeather">Loading...</div>;
  }
}
