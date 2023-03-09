import React from "react";
import "./ForecastTemperature.css";

export default function ForecastTemperature(props) {
  let minimumCelsiusTemperature = Math.round(props.minimumTemperature);
  let maximumCelsiusTemperature = Math.round(props.maximumTemperature);
  let minimumFahrenheitTemperature = Math.round(
    (props.minimumTemperature * 9) / 5 + 32
  );
  let maximumFahrenheitTemperature = Math.round(
    (props.maximumTemperature * 9) / 5 + 32
  );

  return (
    <div className="ForecastTemperature">
      <div>
        <span className="minimum-temperature">
          {minimumCelsiusTemperature}°C
        </span>{" "}
        <span className="maximum-temperature">
          {maximumCelsiusTemperature}°C
        </span>
      </div>
      <div>
        <span className="minimum-temperature">
          {minimumFahrenheitTemperature}°F
        </span>{" "}
        <span className="maximum-temperature">
          {maximumFahrenheitTemperature}°F
        </span>
      </div>
    </div>
  );
}
