import "./App.css";

import TopSection from "./TopSection";
import MiddleSection from "./MiddleSection";
import BottomSection from "./BottomSection";
import FindCurrentLocationSection from "./FindCurrentLocationSection";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <TopSection />

            <MiddleSection />

            <BottomSection />

            <FindCurrentLocationSection />
          </div>
        </div>
      </div>

      <footer>
        <a
          href="https://github.com/tohhuishan/shecodes-weather-application"
          rel="noreferrer"
          target="_blank"
          className="open-source-code"
        >
          Open-source code
        </a>

        <span className="developer-name"> by Toh Hui Shan </span>
      </footer>
    </div>
  );
}
