import React, { useState } from "react";

export default function CurrentTemperature(props) {
  const [unit, setUnit] = useState("metric");
  let fahrenheitTemperature = Math.round(
    (props.celsiusTemperature * 9) / 5 + 32
  );

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  if (unit === "metric") {
    return (
      <h2>
        <span className="temperature celsius">{props.celsiusTemperature}</span>{" "}
        <span className="temperature-units-conversion">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </h2>
    );
  } else {
    return (
      <h2>
        <span className="temperature celsius">{fahrenheitTemperature}</span>{" "}
        <span className="temperature-units-conversion">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </h2>
    );
  }
}
