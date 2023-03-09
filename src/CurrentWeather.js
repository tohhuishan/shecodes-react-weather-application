import React from "react";
import CurrentTemperature from "./CurrentTemperature";
import CurrentDateAndTime from "./CurrentDateAndTime";
import ForecastWeather from "./ForecastWeather";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div>
      <div className="CurrentWeather">
        <div className="row">
          <div className="col-md-9 left-side">
            <div className="displayed-location-with-icon">
              <h1>
                <i className="fa-solid fa-location-dot location-icon"></i>{" "}
                <span className="searched-location">
                  {props.data.city} in {props.data.country}
                </span>
              </h1>
            </div>

            <div className="row current-weather-and-temperature">
              <div className="col-md-6 current-weather">
                <img
                  src={props.data.iconUrl}
                  alt={props.data.icon}
                  className="current-weather-icon"
                />
              </div>

              <div className="col-md-6 current-temperature">
                <CurrentTemperature
                  celsiusTemperature={Math.round(props.data.temperature)}
                />
              </div>
            </div>
          </div>

          <div className="col-md-3 right-side">
            <div className="last-updated">
              <h3>Last updated:</h3>
            </div>

            <CurrentDateAndTime unformattedDate={props.data.date} />

            <div className="current-humidity">
              <h3>
                Humidity:{" "}
                <span className="current-humidity">{props.data.humidity}</span>{" "}
                %
              </h3>
            </div>

            <div className="current-wind">
              <h3>
                Wind:{" "}
                <span className="current-wind">
                  {Math.round(props.data.wind)}
                </span>{" "}
                m/s
              </h3>
            </div>
          </div>
        </div>
      </div>

      <ForecastWeather city={props.data.city} />
    </div>
  );
}
