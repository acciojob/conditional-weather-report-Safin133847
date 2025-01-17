import React, { useState, useEffect } from "react";
import './../styles/App.css';

const App = () => {
  const [weather, setWeather] = useState({ temperature: 25, conditions: "Sunny" });

  const tempColor = weather.temperature > 20 ? "rgb(255, 0, 0)" : "rgb(0, 0, 255)";

  useEffect(() => {
    setWeather(prevState => ({
      ...prevState,
      conditions: "Sunny"  
    }));
  }, []); 

  return (
    <div>
      <div className="weather-display">
        <p style={{ color: tempColor }}>
          Temperature: {weather.temperature}
        </p>
        <p></p>
        <span style={{ color: tempColor }}>Conditions: {weather.conditions}</span>
      </div>
    </div>
  );
}

export default App;
