import React from "react";
import "./FindCurrentLocationSection.css";

export default function FindCurrentLocationSection() {
  return (
    <div className="FindCurrentLocationSection find-current-location">
      <h2>
        Don't know your current location? Click icon to check the weather here
      </h2>
      <button className="current-location-button">
        <i
          className="fa-solid fa-location-dot location-icon"
          id="current-location-icon-in-button"
        ></i>
      </button>
    </div>
  );
}
