import React, {Fragment, useState, useEffect} from 'react';
import CityCatalog from './CityCatalog/CityCatalog'
import WeatherAnimation from './WeatherAnimation/WeatherAnimation'
import About from './About/About'
import MapApp from './Map/MapApp'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import axios from 'axios'
import Context from './context'


const App = () =>{

const [selectedSities, setSelectedSities] = useState([]);
const [sitiesData, setSitiesData] = useState([]);

const cityArray = [
            {"id": 703448, "name": "Kyiv", "country": "UA"},
            {"id": 698740, "name": "Odessa", "country": "UA"},
            {"id": 702550, "name": "Lviv", "country": "UA"},
            {"id": 706483, "name": "Kharkiv", "country": "UA"},
            {"id": 709930, "name": "Dnipro", "country": "UA"},
            {"id": 689558, "name": "Vinnytsia", "country": "UA"},
            {"id": 702569, "name": "Lutsk", "country": "UA"},
            {"id": 709717, "name": "Donetsk", "country": "UA"},
            {"id": 686967, "name": "Zhytomyr", "country": "UA"},
            {"id": 697107, "name": "Zaporozhe", "country": "UA"},
            {"id": 707471, "name": "Ivano-Frankivsk", "country": "UA"},
            {"id": 705812, "name": "Kropyvnytskyi", "country": "UA"},
            {"id": 696643, "name": "Poltava", "country": "UA"},
            {"id": 695594, "name": "Rivne", "country": "UA"},
            {"id": 692194, "name": "Sumy", "country": "UA"},
            {"id": 691650, "name": "Ternopil", "country": "UA"},
            {"id": 706448, "name": "Kherson", "country": "UA"},
            {"id": 706369, "name": "Khmelnytskyi", "country": "UA"},
            {"id": 710791, "name": "Cherkasy", "country": "UA"},
            {"id": 710735, "name": "Chernihiv", "country": "UA"},
            {"id": 710719, "name": "Chernivtsi", "country": "UA"},
            {"id": 693805, "name": "Simferopol", "country": "UA"},
            {"id": 703845, "name": "Kryvyi Rih", "country": "UA"},
            {"id": 700569, "name": "Mykolayiv", "country": "UA"},
            {"id": 702658, "name": "Luhansk", "country": "UA"}
    ]
   
            
        
       useEffect(()=>{
            axios.all([
                axios.post('http://api.openweathermap.org/data/2.5/weather?id='+cityArray[0].id+'&appid='+process.env.REACT_APP_OPENWEATHER_API_KEY),
                axios.post('http://api.openweathermap.org/data/2.5/weather?id='+cityArray[1].id+'&appid='+process.env.REACT_APP_OPENWEATHER_API_KEY),
                axios.post('http://api.openweathermap.org/data/2.5/weather?id='+cityArray[2].id+'&appid='+process.env.REACT_APP_OPENWEATHER_API_KEY),
                axios.post('http://api.openweathermap.org/data/2.5/weather?id='+cityArray[3].id+'&appid='+process.env.REACT_APP_OPENWEATHER_API_KEY),
                axios.post('http://api.openweathermap.org/data/2.5/weather?id='+cityArray[4].id+'&appid='+process.env.REACT_APP_OPENWEATHER_API_KEY),
                axios.post('http://api.openweathermap.org/data/2.5/weather?id='+cityArray[5].id+'&appid='+process.env.REACT_APP_OPENWEATHER_API_KEY),
                axios.post('http://api.openweathermap.org/data/2.5/weather?id='+cityArray[6].id+'&appid='+process.env.REACT_APP_OPENWEATHER_API_KEY),
                axios.post('http://api.openweathermap.org/data/2.5/weather?id='+cityArray[7].id+'&appid='+process.env.REACT_APP_OPENWEATHER_API_KEY),
                axios.post('http://api.openweathermap.org/data/2.5/weather?id='+cityArray[8].id+'&appid='+process.env.REACT_APP_OPENWEATHER_API_KEY),
                axios.post('http://api.openweathermap.org/data/2.5/weather?id='+cityArray[9].id+'&appid='+process.env.REACT_APP_OPENWEATHER_API_KEY),
                axios.post('http://api.openweathermap.org/data/2.5/weather?id='+cityArray[10].id+'&appid='+process.env.REACT_APP_OPENWEATHER_API_KEY),
                axios.post('http://api.openweathermap.org/data/2.5/weather?id='+cityArray[11].id+'&appid='+process.env.REACT_APP_OPENWEATHER_API_KEY),
                axios.post('http://api.openweathermap.org/data/2.5/weather?id='+cityArray[12].id+'&appid='+process.env.REACT_APP_OPENWEATHER_API_KEY),
                axios.post('http://api.openweathermap.org/data/2.5/weather?id='+cityArray[13].id+'&appid='+process.env.REACT_APP_OPENWEATHER_API_KEY),
                axios.post('http://api.openweathermap.org/data/2.5/weather?id='+cityArray[14].id+'&appid='+process.env.REACT_APP_OPENWEATHER_API_KEY),
                axios.post('http://api.openweathermap.org/data/2.5/weather?id='+cityArray[15].id+'&appid='+process.env.REACT_APP_OPENWEATHER_API_KEY),
                axios.post('http://api.openweathermap.org/data/2.5/weather?id='+cityArray[16].id+'&appid='+process.env.REACT_APP_OPENWEATHER_API_KEY),
                axios.post('http://api.openweathermap.org/data/2.5/weather?id='+cityArray[17].id+'&appid='+process.env.REACT_APP_OPENWEATHER_API_KEY),
                axios.post('http://api.openweathermap.org/data/2.5/weather?id='+cityArray[18].id+'&appid='+process.env.REACT_APP_OPENWEATHER_API_KEY),
                axios.post('http://api.openweathermap.org/data/2.5/weather?id='+cityArray[19].id+'&appid='+process.env.REACT_APP_OPENWEATHER_API_KEY),
                axios.post('http://api.openweathermap.org/data/2.5/weather?id='+cityArray[20].id+'&appid='+process.env.REACT_APP_OPENWEATHER_API_KEY),
                axios.post('http://api.openweathermap.org/data/2.5/weather?id='+cityArray[21].id+'&appid='+process.env.REACT_APP_OPENWEATHER_API_KEY),
                axios.post('http://api.openweathermap.org/data/2.5/weather?id='+cityArray[22].id+'&appid='+process.env.REACT_APP_OPENWEATHER_API_KEY),
                axios.post('http://api.openweathermap.org/data/2.5/weather?id='+cityArray[23].id+'&appid='+process.env.REACT_APP_OPENWEATHER_API_KEY),
                axios.post('http://api.openweathermap.org/data/2.5/weather?id='+cityArray[24].id+'&appid='+process.env.REACT_APP_OPENWEATHER_API_KEY)
                
            ])
                .then(axios.spread((s0, s1, s2, s3, s4 , s5, s6, s7, s8, s9, s10 ,s11, s12 ,s13, s14 ,s15, s16 ,s17, s18 ,s19, s20, s21, s22, s23, s24) => {
                    
                    let sitiesDataResults=[]
                    sitiesDataResults = sitiesDataResults.concat(s0.data).concat(s1.data).concat(s2.data).concat(s3.data).concat(s4.data).concat(s5.data).
                    concat(s6.data).concat(s7.data).concat(s8.data).concat(s9.data).concat(s10.data).concat(s11.data).concat(s12.data).concat(s13.data).
                    concat(s14.data).concat(s15.data).concat(s16.data).concat(s17.data).concat(s18.data).concat(s19.data).concat(s20.data).concat(s21.data)
                    .concat(s22.data).concat(s23.data).concat(s24.data)
                    setSitiesData(sitiesDataResults)
                    //console.log(sitiesDataResults)
                }))
                .catch(error => console.log(error));
        }, [])


        const removeSityWeather = (Sityid) => {
            setSelectedSities(selectedSities.filter(element => element !== Sityid.toString()));
        }
    
        return (
            <Context.Provider value={{removeSityWeather, sitiesData}}>
            <Router> 
                <div>
                    <WeatherAnimation />
                    <Switch>
                        <Route exact path='/' render={props => ( 
                        <Fragment>
                            <CityCatalog 
                             cityArray={cityArray}
                             selectedSities={selectedSities}
                             setSelectedSities={setSelectedSities}

                            />
                        </Fragment>
                       )} /> 
                        <Route exact path='/about' component={About}/>
                        <Route exact path='/map' render={props => ( 
                            <Fragment>
                            <MapApp 
                            sitiesData={sitiesData}
                            />
                        </Fragment>
                        )} />
                    </Switch>
                </div>
            </Router>
            </Context.Provider>
        )
   }

export default App;
