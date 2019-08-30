import React from 'react';
import getBgImg from './Images';

function WeatherCard(props) {
	return (<div className="weatherCard" style={{backgroundImage: "url(" + getBgImg(props.condition) + ")"}}>
		<h2 className="mainh2">{props.day}</h2>
		<h2 className="mainh2">{props.condition}</h2>
		<h2 className="highh2">{"High: " + props.high + "°C"}</h2>
		<h2 className="lowh2">{"Low: " + props.low + "°C"}</h2>
	</div>);
}

export default WeatherCard

