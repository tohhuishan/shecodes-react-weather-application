import React from "react";
import CurrentDateAndTime from "./CurrentDateAndTime";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather row">
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
            <h2>
              <span className="temperature celsius">
                {Math.round(props.data.temperature)}
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

        <CurrentDateAndTime unformattedDate={props.data.date} />

        <div className="current-humidity">
          <h3>
            Humidity:{" "}
            <span className="current-humidity">{props.data.humidity}</span> %
          </h3>
        </div>

        <div className="current-wind">
          <h3>
            Wind:{" "}
            <span className="current-wind">{Math.round(props.data.wind)}</span>{" "}
            m/s
          </h3>
        </div>
      </div>
    </div>
  );
}
