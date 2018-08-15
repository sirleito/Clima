import convert from "convert-units"

const getTemp = kelvin =>{
	return Number(convert(kelvin).from("K").to("C").toFixed(2))
}
const getWeatherState = weather =>{
	const {id} = weather[0]
	if(id<300){
		return "day-thunderstorm"
	}else if(id<400){
		return "day-showers"
	}else if(id<600){
		return "rain"
	}else if(id<700){
		return "snow"
	}else if(id===800){
		return "day-sunny"
	}else{
		return "cloudy"
	}
}
const transformWeather = weather_data => {
	const {weather} = weather_data;
	const {humidity, temp} = weather_data.main;
	const {speed} = weather_data.wind;
	const weatherState = getWeatherState(weather);
	const temperature = getTemp(temp);
	
	const data = {
		humidity,
		temperature,
		weatherState,
		wind:`${speed} m/s`
	}
	return data
}

export default transformWeather