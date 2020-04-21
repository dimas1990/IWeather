import React, {useState, useContext } from "react";
import './BriefCityWeatherUnit.css'
import PropTypes from 'prop-types'
import Loader from '../Loader/Loader'
import Context from '../context'

const BriefCityWeatherUnit = ({sityData}) =>{
  
//console.log(sityData)  

const [loading, setLoading] = useState(true);

const {removeSityWeather} = useContext(Context)

setTimeout(()=>{
   setLoading(false)   
}, 1000)

  /*  {
        "coord":{
           "lon":145.77,
           "lat":-16.92
        },
        "weather":[
           {
              "id":802,
              "main":"Clouds",
              "description":"scattered clouds",
              "icon":"03n"
           }
        ],
        "base":"stations",
        "main":{
           "temp":300.15,
           "pressure":1007,
           "humidity":74,
           "temp_min":300.15,
           "temp_max":300.15
        },
        "visibility":10000,
        "wind":{
           "speed":3.6,
           "deg":160
        },
        "clouds":{
           "all":40
        },
        "dt":1485790200,
        "sys":{
           "type":1,
           "id":8166,
           "message":0.2064,
           "country":"AU",
           "sunrise":1485720272,
           "sunset":1485766550
        },
        "id":2172797,
        "name":"Cairns",
        "cod":200
     }

     */

    const objToday = new Date()
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const dayOfWeek = weekday[objToday.getDay()]
    const domEnder = function() { let a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th" }()
    const dayOfMonth = ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const curMonth = months[objToday.getMonth()]
    const curYear = objToday.getFullYear()
    const curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours())
    const curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes()
    //const curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds()
    const curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
    const today = dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear
    const time = curHour + ":" + curMinute + " " + curMeridiem
  
    return (
    <div className ="listyle">
           {loading ? <Loader/> : (
           <div>
               <div className="buttonDell">
                     <button className="rm" onClick={()=>removeSityWeather(sityData[0].id)}>&times;</button>
               </div>
           <div className="element">  
           <div className="location-and-date">  
                   <h2 className="location-and-date__location">{sityData[0].name}</h2>
                   <div>{today}</div> 
                   <div>{time}</div>
           </div>  
           <div className="current-temperature">  
                    <div className="current-temperature-value">
                       <h1>{Math.round(sityData[0].main.temp - 273.15)}°C</h1>
                    </div> 
                    <div className="current-temperature-icon">  
                         <img src={'http://openweathermap.org/img/wn/'+sityData[0].weather[0].icon+'@2x.png'} alt=""/>  
                    </div>   
           </div>
           <div className="current-temperature__summary">{sityData[0].weather[0].description}</div>  
           <div className="details">  
                <h3 style={{textDecoration: 'underline'}}>Details</h3>
                <div className="detailsList">    
                <p>Wind: {sityData[0].wind.speed} m/c</p>
                <p>Humidity: {sityData[0].main.humidity} %</p>
                <p>Pressure: {sityData[0].main.pressure} hPa</p>
                </div>
          </div>  
          </div> 
          </div>     
            )}
      </div>
     )
}

BriefCityWeatherUnit.propTypes = {
   sityData: PropTypes.object.isRequired
}
  
export default BriefCityWeatherUnit
