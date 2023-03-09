import React from "react";
import "./App.css";
import Search from "./Search";
import FindCurrentLocationSection from "./FindCurrentLocationSection";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <Search defaultCity="Bangkok" />

            <FindCurrentLocationSection />
          </div>
        </div>
      </div>

      <footer>
        <a
          href="https://github.com/tohhuishan/shecodes-react-weather-application"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Toh Hui Shan
      </footer>
    </div>
  );
}
