import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleChange = e => {
    // handle key presses
  };

  const handleSubmit = e => {
    e.preventDefault();
    getWeather();
  };
  console.log("this is printing");

  const getWeather = () => {
    // call Open Weather API

    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=London&appid=2a66f21f6cae29aa8bacfb1236e4d109"
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState(data);
      });
  };

  return (
    <div>
      <h1>Hello World!</h1>
      <form>
        <label htmlFor="location"> Location I want information on : </label>
        <input type="text" name="location" />
        <button type="submit" onClick={() => handleSubmit()}>
          Get Weather Info
        </button>
      </form>
    </div>
  );
}
