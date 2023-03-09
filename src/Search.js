import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import "./Search.css";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
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

  function retrieveData() {
    const apiKey = "o65149f37004a818054t1c639bd4becf";
    const units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    retrieveData();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  let searchEngine = (
    <div>
      <form className="row" onSubmit={handleSubmit}>
        <div className="col-md-8">
          <input
            className="form-control input-city"
            type="search"
            placeholder="Search city..."
            autoComplete="off"
            autoFocus="on"
            onChange={handleChange}
          />
        </div>

        <div className="col-md-4">
          <button
            className="form-control search-button btn btn-primary w-100"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );

  if (currentWeatherData.ready) {
    return (
      <div className="Search">
        {searchEngine}
        <CurrentWeather data={currentWeatherData} />
      </div>
    );
  } else {
    retrieveData();

    return (
      <div className="Search">
        {searchEngine}
        <p>Retreiving weather data...</p>
      </div>
    );
  }
}
