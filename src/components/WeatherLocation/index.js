import React, {Component} from 'react';
import CircularProgress from "material-ui/CircularProgress"
import PropTypes from 'prop-types'
import TransformWeather from "./../../services/transformWeather"
import Location from "./location"
import WeatherData from "./WeatherData"
import "./style.css"

const api_key = "c25acf058bb37f55a743b2337e6eefa3"

class WeatherLocation extends Component { 

	constructor({city}){
		super()
		this.state ={
			city,
			data:null
		}
	}
	
	
	componentWillMount() {
		const {city} = this.state
		const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
		fetch(api_weather).then(data =>{
			return data.json()
		}).then(
			weather_data =>{
				const data = TransformWeather(weather_data)
				this.setState({data})
				
			}
		)
	}

	// componentWillMount() {
	// 	//SE EJECUTA UNA VEZ, JUSTO DESPUES DEL CONSTRUCTOR
	// }
	// componentDidMount() {
	// 	//SE EJECUTA UNA VEZ, DESPUES DEL RENDER
	// }
	// componentWillUpdate(nextProps, nextState) {
	// 	//NO SE EJECUTA LA PRIMERA VEZ, Y DESOUES LO HACE JUSTO ANTES DEL RENDER
	// }
	// componentDidUpdate(){
	// 	//NO SE EJECUTA LA PRIMERA VEZ, Y DESOUES LO HACE JUSTO DESPUES DEL RENDER
	// }

	render = () =>{
		const {onWeatherLocationClick} = this.props
		const {city,data} = this.state
		return(
			<div className="WeatherLocationCont" >
				<Location city={city} onClick={onWeatherLocationClick}/>
				{data ? <WeatherData data={data} /> : <CircularProgress size={60} thickness={7}/>}	
			</div>)
		}
}
WeatherLocation.propTypes = {
	city: PropTypes.string,
	onWeatherLocationClick: PropTypes.func
}
export default WeatherLocation;




