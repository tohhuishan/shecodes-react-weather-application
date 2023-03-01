import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The temperature is the ${response.data.main.temp} in ${response.data.name}`
    );
  }

  let units = "metric";
  let apiKey = "001bc651977f4b024af4d84282b0f02a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);

  return <h2>Greetings from Weather!</h2>;
}
