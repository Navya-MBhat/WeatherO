import React, { useState } from 'react'
import './WeatherApp.css'

import search_icon from "../Assets/icons8-search-48.png";
import cloud_icon from "../Assets/icons8-cloud-94.png";
import rain_icon from "../Assets/icons8-heavy-rain-64.png";
import snow_icon from "../Assets/icons8-snow-94.png";
import windy_icon from "../Assets/icons8-windy-weather-96.png";
import drizzle_icon from "../Assets/icons8-drizzle-96.png";
import humid_icon from "../Assets/icons8-humidity-96.png";
import weather_icon from "../Assets/icons8-weather-96.png";
import sun_icon from "../Assets/icons8-sun-94.png"

import forecast_icon from "../Assets/icons8-weather-forecast-96.png";

export const WeatherApp = () => {

  let api_key = "4ac7f0621c4e65e12babae70f9184c7d";
  const [wicon,setWicon] = useState(cloud_icon);
  const search= async() => {
    const element = document.getElementsByClassName("cityInput")
    if(element[0].value ==="")
    {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity+"%";
    wind[0].innerHTML = data.wind.speed+"km/h";
    temperature[0].innerHTML = data.main.temp+"°c";
    location[0].innerHTML = data.name;

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n")
    {
      setWicon(sun_icon);
    }
    else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n")
    {
      setWicon(cloud_icon);
    } 
    else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n")
    {
      setWicon(cloud_icon);
    } 
    else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n")
    {
      setWicon(drizzle_icon);
    } 
    else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n")
    {
      setWicon(rain_icon);
    } 
    else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n")
    {
      setWicon(rain_icon);
    } 
    else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n")
    {
      setWicon(snow_icon);
    } 
    else{
      setWicon(weather_icon);
    }
  }

  return (
    <div className='Container'>
      <div className='top-bar'>
        <input type='text' className='cityInput' placeholder='Search '/>
        <div className='search-icon' onClick={()=>{search()}}>
          <img src={search_icon} alt='search city'/>
        </div>
      </div>
      <div className='weather-image'>
        <img src={wicon} alt=''/>
      </div>
      <div className='weather-temp'>24°c</div>
      <div className='weather-location'>London</div>
      <div className='data-container'>
        <div className='element'>
          <img src={humid_icon} alt='' className='icon'/>
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className='element'>
          <img src={windy_icon} alt='' className='icon'/>
          <div className="data">
            <div className="wind-rate">18 km/h</div>
            <div className="text">Wind speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default WeatherApp