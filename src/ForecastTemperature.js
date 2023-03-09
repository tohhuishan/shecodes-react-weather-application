import React from "react";

export default function ForecastTemperature(props) {
  let minimumTemperature = Math.round(props.minimumTemperature);
  let maximumTemperature = Math.round(props.maximumTemperature);

  return (
    <div className="ForecastTemperature">
      <span>
        {minimumTemperature}° {maximumTemperature}°
      </span>
    </div>
  );
}
