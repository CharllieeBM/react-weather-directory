import React from "react";
import "./Weather.css";

export default function Weather() {
  return  <div className="Weather">
  <form>
    <input type="search" placeholder="Enter a city.." className="form-control" />
    <input type="submit" value="Search" className="btn btn-primary" />
  </form>
    <h1>Toronto</h1>
    <ul>
      <li>Monday 10:00</li>
      <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny"
          />
          <span className="temperature">25</span>
          <span className="units">
            °C | <a href="/">°F</a>
          </span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 60%</li>
            <li>Wind: 10 km/h</li>
          </ul>
        </div>
      </div>
  </div>;
}
