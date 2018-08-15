import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import LocationList from './components/LocationList.js'
import './App.css';

const cities = ["Buenos Aires,ar","Bogotá,col","Montevideo,uy","Madrid,es"]

class App extends Component {
	handleSelectedLocation=city=>{
		console.log("handleSelectedLocation")
	}
  render() {
    return (
    <MuiThemeProvider>
    	<div className="App">
    		<LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}></LocationList>
    	</div>
    </MuiThemeProvider>
    );
  }
}

export default App;
