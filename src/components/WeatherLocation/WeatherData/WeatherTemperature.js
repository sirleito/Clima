import React from "react"
import WeatherIcons from "react-weathericons"
import PropTypes from "prop-types"
import "./style.css"
// const stateToIconName = weatherState =>{
// 	switch(weatherState){
// 		case "cloud":
// 			return("cloud")
// 		case "day-sunny":
// 			return("day-sunny")
// 		case "rain":
// 			return("rain")
// 		case "snow":
// 			return("snow")
// 		case "windy":
// 			return("windy")
// 		default:
// 			return("day-sunny")
// 	}
// }

const getWeatherIcon = weatherState =>{
	return(<WeatherIcons className="icono" name={weatherState} size="4x" />) 
}
const WeatherTemperature = ({temperature, weatherState}) =>(
	<div className="weatherTemperatureCont">
		{getWeatherIcon(weatherState)}
		<span className="temperature">{`${temperature}`}</span>
		<span className="temperatureCe">Cº</span>

	</div>
)

WeatherTemperature.propTypes = {
	temperature : PropTypes.number.isRequired,
	weaterState : PropTypes.string
}

export default WeatherTemperature