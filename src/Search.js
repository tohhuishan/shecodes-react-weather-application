import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="Search search-city">
      <form action="submit" className="form-group row search-input-form">
        <div className="col-10">
          <input
            className="form-control input-city"
            type="text"
            placeholder="Search city..."
            autoComplete="off"
            autoFocus="on"
          />
        </div>

        <div className="col-2">
          <button className="form-control search-button" type="submit">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
