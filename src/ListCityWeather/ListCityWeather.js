import React, {useContext} from 'react';
import PropTypes from 'prop-types'
import BriefCityWeatherUnit from '../BriefCityWeatherUnit/BriefCityWeatherUnit'
import './ListCityWeather.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Context from '../context'


const ListCityWeather = ({selectedSitiesArray}) => {

    //console.log(sitiesData)
    const {sitiesData} = useContext(Context)

    return (
      <div className="container">
                    <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    {selectedSitiesArray.length ? (
                    selectedSitiesArray.map((id, index) => {
                      return <BriefCityWeatherUnit 
                      key={index}
                      sityData={sitiesData.filter(sityData=>sityData.id.toString() === id)}
                  />
                  })
                 ):(<p></p>)
                 }
                 </ReactCSSTransitionGroup>
      </div>
    )
  }
  
  ListCityWeather.propTypes = {
    selectedSitiesArray: PropTypes.arrayOf(PropTypes.string).isRequired
}

  export default ListCityWeather;
  