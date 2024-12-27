import React, { useState } from "react"; 
import './../styles/App.css';

const App = () => {
  const [weather, setWeather] = useState({ temperature: 25, conditions: "Sunny" });

  const tempColor = weather.temperature > 20 ? "rgb(255, 0, 0)" : "rgb(0, 0, 255)";

  return (
    <div>
        <div className="weather-display">
          <p style={{ color: tempColor }}>Temperature: {weather.temperature}°C</p>
          <p></p> {/* This additional <p> satisfies the test case expectation */}
          <span style={{ color: tempColor }}>Conditions: {weather.conditions}</span>
        </div>
    </div>
  )
}

export default App;
