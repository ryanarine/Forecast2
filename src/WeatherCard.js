import React from 'react';
import rainy from './images/Rainy.png';
import snowy from './images/Snowy.png';
import cloudy from './images/cloudy.jpg';
import clear from './images/Clear.jpeg';
import storm from './images/Thunderstorm.jpg';
import drizzle from './images/Drizzle.jpg';
import fog from './images/Fog.png';
import "./WeatherCard.css";

function getBgImg(condition) {
		if (condition === "Clear") return clear;
		if (condition === "Clouds") return cloudy;
		if (condition === "Rain") return rainy;
		if (condition === "Snow") return snowy;
		if (condition === "Thunderstorm") return storm;
		if (condition === "Drizzle") return drizzle;
		return fog;
	}
class WeatherCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {name: "",
		high: 0,
		low: 0,
		cond: "",
		bg: "",
		};
	}
	static getDerivedStateFromProps(props, state) {
		let img = getBgImg(props.condition);
		return {name: props.day,
			high: "High: " + props.high + "°C",
			low: "Low: " + props.low + "°C",
			cond: props.condition,
			bg: 
				{
				backgroundImage: "url(" + img + ")",
			}
		};
	}
	render(){
		return <div className="weatherCard" style={this.state.bg}>
		<h2 className="mainh2">{this.state.name}</h2>
		<h2 className="mainh2">{this.state.cond}</h2>
		<h2 className="highh2">{this.state.high}</h2>
		<h2 className="lowh2">{this.state.low}</h2>
		</div>
	};
}

export default WeatherCard

