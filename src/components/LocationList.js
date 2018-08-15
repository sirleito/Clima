import React from "react"
import PropTypes from 'prop-types'
import WeaterLocation from './WeatherLocation' 

const LocationList = ({cities,onSelectedLocation}) =>{
	const handleWeaterLocationClick=city=>{
		console.log("handleWeaterLocationClick")
		onSelectedLocation(city)
	}
	const strToComponent = cities =>(
		cities.map(city=>(<WeaterLocation key={city} city={city} onWeaterLocationClick={()=>handleWeaterLocationClick(city)}/>))
	)
	return(<div>
			{strToComponent(cities)}
		</div>)
}
LocationList.propTypes = {
	cities: PropTypes.array.isRequired,
	onSelectedLocation: PropTypes.func
}

export default LocationList

