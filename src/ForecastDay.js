import React from "react";

export default function ForecastDay(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = props.unformattedDay.getDay();

  return <div className="ForecastDay">{days[day]}</div>;
}
