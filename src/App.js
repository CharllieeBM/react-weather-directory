import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <h2>Weather App</h2>
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/CharllieeBM/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Charllotte Blackwell-Maleshkov
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/CharllieeBM/react-weather-directory"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
