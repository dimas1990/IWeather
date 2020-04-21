import React from 'react';

const About = () =>{
    
        const pjson = require('../../package.json');
      
        return (
            <div style={{marginLeft: '20px'}}> 
                    <h1 >About this App</h1>
                    <p>App for searching Ukrainian weather</p>
                    <p>With the support: <span><a href="https://openweathermap.org/">OpenWeatherMap</a></span> and <span><a href="https://www.google.com/maps/">GoogleMaps</a></span></p>
                    <p>Version: {pjson.version}</p>
            </div>
        )
   }

export default About;
