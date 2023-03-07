import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="Search search-city">
      <form>
        <div className="col-8">
          <input
            className="form-control input-city"
            type="text"
            placeholder="Search city..."
            autoComplete="off"
            autoFocus="on"
          />
        </div>

        <div className="col-4">
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
}
