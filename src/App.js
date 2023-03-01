import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is a React App :D</h1>
        <Weather city="Paris" />
      </header>
    </div>
  );
}

export default App;
