import React from "react";

export default function CurrentDateAndTime(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.unformattedDate.getDay()];

  let date = props.unformattedDate.getDate();
  if (date < 10) {
    date = `0${date}`;
  }

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.unformattedDate.getMonth()];

  let year = props.unformattedDate.getFullYear();

  let hours = props.unformattedDate.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.unformattedDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="CurrentDateAndTime">
      <div className="current-day">{day}</div>
      <div className="current-date">
        {date} {month} {year}
      </div>
      <div className="current-time">
        {hours} : {minutes}
      </div>
    </div>
  );
}
