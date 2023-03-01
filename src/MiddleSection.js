import React from "react";

import "./MiddleSection.css";

export default function Middle() {
  return (
    <div className="MiddleSection row current-conditions middle-section">
      <div className="col-md-9 left-side">
        <div className="displayed-location-with-icon">
          <h1>
            <i className="fa-solid fa-location-dot location-icon"></i>
            <span className="searched-location"> Bangkok</span>
          </h1>
        </div>

        <div className="row current-weather-and-temperature">
          <div className="col-md-6 current-weather">
            <img src="" alt="" className="current-weather-icon" />
          </div>

          <div className="col-md-6 current-temperature">
            <h2>
              <span className="temperature celsius">27</span>
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

        <div className="current-day">
          <h3>Thursday</h3>
        </div>

        <div className="current-date">
          <h3>
            <span className="current-date-number">16 </span>
            <span className="current-month">February </span>
            <span className="current-year">2023</span>
          </h3>
        </div>

        <div className="current-time">
          <h3>
            <span className="current-hour">09 </span>:
            <span className="current-minute"> 30</span>
          </h3>
        </div>

        <div className="current-humidity">
          <h3>
            Humidity:
            <span className="current-humidity"> 80</span> %
          </h3>
        </div>

        <div className="current-wind">
          <h3>
            Wind: <span className="current-wind">4</span> m/s
          </h3>
        </div>
      </div>
    </div>
  );
}
