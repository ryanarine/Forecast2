/* Handles condition to image mapping */
import rainy from "./images/Rainy.jpg";
import snowy from "./images/Snowy.jpg";
import cloudy from "./images/Cloudy.jpg";
import clear from "./images/Clear.jpg";
import storm from "./images/Thunderstorm.jpg";
import drizzle from "./images/Drizzle.jpg";
import fog from "./images/Fog.jpg";
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

export default getBgImg;
