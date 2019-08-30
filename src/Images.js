/* Handles condition to image mapping */
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

export default getBgImg