import React from 'react';
import './CityCatalog.css'
import PropTypes from 'prop-types'
import ListCityWeather from '../ListCityWeather/ListCityWeather'

const CityCatalog =({cityArray, selectedSities, setSelectedSities})  => {
   
    const getSelectedCity = () => {
        const valuesInit = document.querySelectorAll('#select option:checked')
        const values = []
        valuesInit.forEach(element =>{
            values.push(element.value)
        })
        setSelectedSities(values)
    }

    const getListOfOptions = () => {
        const countriesList = cityArray.map((sity, i) => {
            return (
                <option key={i} value={sity.id}>{sity.name}</option>
            )
            }, this)
            return countriesList
    }  

    const onSubmit = e => {
        e.preventDefault()
        getSelectedCity()
    }

    const onChange = e => {
        setSelectedSities([])
    }

    return (
        <div>
            <div className="sitiesList">
                <form id="sities" onSubmit={onSubmit}>
                    <div className="frameCover">
                        <div className="selectList">
                        <select id="select" multiple="multiple" className="select" onChange={onChange} form="sities">
                        {getListOfOptions()}
                        </select>
                        </div>
                    </div>
                    <button className="selectbutton" target="_blank" rel="nofollow noopener">Show weather</button>
                  </form>
                </div>
                <ListCityWeather selectedSitiesArray={selectedSities}/> 
        </div>
    )  
   }

CityCatalog.propTypes = {
    cityArray: PropTypes.arrayOf(PropTypes.object).isRequired,
}
  
export default CityCatalog


 