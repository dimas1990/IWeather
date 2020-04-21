import React from 'react';
import './WeatherAnimation.css'
import {Link} from 'react-router-dom'


const WeatherAnimation = () => {
  return (
    <div id="clouds">
        <button className="selectbuttonT" target="_blank" rel="nofollow noopener"><Link to='/' className="link">Search</Link></button>
        <button className="selectbuttonT" target="_blank" rel="nofollow noopener"><Link to='/map' className="link">Map</Link></button>
        <button className="selectbuttonT" target="_blank" rel="nofollow noopener"><Link to='/about' className="link">About App</Link></button>
        <div className="title"><h1 style={{marginTop: '100px'}}><Link to='/' className="link-main">iWeatherUkraine</Link></h1></div>
        <div className="cloud x1"></div>
        <div className="cloud x2"></div>
        <div className="cloud x3"></div>
        <div className="cloud x4"></div>
        <div className="cloud x5"></div>
    </div>
  )
}

export default WeatherAnimation;
