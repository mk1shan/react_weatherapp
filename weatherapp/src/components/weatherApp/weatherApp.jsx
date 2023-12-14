import React from 'react'
import './weatherApp.css'

import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";


const weatherApp = () => {
  return (
    <div className='container'>
        <div className="top-bar">
            <input type = "text" className="cityInput" placeholder='search'/>
        <div className = "search-icon">
        <img src= {search_icon} alt=""/>
        </div>
        </div>
        <div className="weather-image">
        <img src= {cloud_icon} alt=""/>
        <div classNmae="weather-temp">24°</div>
        <div classNmae="weather-location">lONDON</div>
        <div classNmae="data-container">
            <div className="element">
            <img src={humidity_icon} alt="" className="icon" />
            <div className="data">
                <div className="humidity-percentage">64%</div>
                <div className="text">Humidity</div>
            </div>
            </div>
            <div className="element">
            <img src={wind_icon}  alt="" className="icon" />
            <img src="" alt="" className="icon" />
            <div className="data">
                <div className="humidity-percentage">18kmp</div>
                <div className="text">Wind speed</div>
            </div>
            </div>
    </div>
    </div>
    </div>
    
  )
}

export default weatherApp