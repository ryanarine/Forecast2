import React from 'react';
import rainy from './images/Rainy.png';
import snowy from './images/Snowy.png';
import cloudy from './images/cloudy.jpg';
import clear from './images/Clear.jpeg';
import storm from './images/Thunderstorm.jpg';
import drizzle from './images/Drizzle.jpg';
import fog from './images/Fog.png';

/* Styles  */
const textStyle = {
	fontFamily: "Arial",
	color: "white",
	fontWeight: 300,
	margin: "10px",
	fontSize: "calc(25px + 1vw)"
};
const highText = {
	fontFamily: "Arial",
	color: "orange",
	fontWeight: 200,
	fontSize: "calc(25px + 1vw)"
};

const lowText = {
	fontFamily: "Arial",
	color: "skyblue",
	fontWeight: 200,
	fontSize: "calc(25px + 1vw)"
};

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
				{backgroundSize: "cover",
				backgroundImage: "url(" + img + ")",
				backgroundColor: "powderblue",
				width: "calc(100% - 12px)",
				float: "left",
				height: "calc(400px + 10vw)",
				textAlign: "center",
				border: "4px solid black",
				marginLeft: "6px"
			}
		};
	}
	render(){
		return <div style={this.state.bg}>
		<h2 style={textStyle}>{this.state.name}</h2>
		<h2 style={textStyle}>{this.state.cond}</h2>
		<h2 style={highText}>{this.state.high}</h2>
		<h2 style={lowText}>{this.state.low}</h2>
		</div>
	};
}

export default WeatherCard

