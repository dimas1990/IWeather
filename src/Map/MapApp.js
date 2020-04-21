import React, {useState}  from "react";
import {withGoogleMap,withScriptjs,GoogleMap,Marker,InfoWindow} from "react-google-maps";


const MapApp = ({sitiesData}) => {

const Map = () => {
  
  const [selectedSity, setSelectedSity] = useState();

  return (
    <GoogleMap
      defaultZoom={6.2}
      defaultCenter={{ lat: 46.55, lng: 32 }}
    >
      {sitiesData.length && (
            sitiesData.map((sityData, index) => {
              return <Marker 
              key={index} 
              position = {{lat: sityData.coord.lat, lng: sityData.coord.lon}}
              icon={{
                url: 'http://openweathermap.org/img/wn/'+sityData.weather[0].icon+'@2x.png',
                scaledSize: new window.google.maps.Size(100,100)
              }}
              onClick={()=>{
                setSelectedSity(sityData);
              }}
              />
            }))}
            
            {selectedSity && (
            <InfoWindow
            position = {{lat: selectedSity.coord.lat, lng: selectedSity.coord.lon}}
            onCloseClick={()=>{
              setSelectedSity(null);
            }}
            >
              <div>
                <h2>{selectedSity.name}</h2>
                <h3>{selectedSity.weather[0].description}</h3>
                <p>Temperature: {Math.round(selectedSity.main.temp - 273.15)}°C</p>
                <p>Wind: {selectedSity.wind.speed} m/c</p>
                <p>Humidity: {selectedSity.main.humidity} %</p>
                <p>Pressure: {selectedSity.main.pressure} hPa</p>
              </div>
          </InfoWindow>
          )}
      </GoogleMap>
  )}

const WrappedMap = withScriptjs(withGoogleMap(Map));
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <WrappedMap
        googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key='+process.env.REACT_APP_GOOGLEMAP_API_KEY}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}  
export default MapApp;

