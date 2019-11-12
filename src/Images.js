/* Handles condition to image mapping */
import rainy from "./images/Rainy.webp";
import rainyjpg from "./images/Rainy.jpg";
import snowy from "./images/Snowy.webp";
import snowyjpg from "./images/Snowy.jpg";
import cloudy from "./images/Cloudy.webp";
import cloudyjpg from "./images/Cloudy.jpg";
import clear from "./images/Clear.webp";
import clearjpg from "./images/Clear.jpg";
import storm from "./images/Thunderstorm.webp";
import stormjpg from "./images/Thunderstorm.jpg";
import drizzle from "./images/Drizzle.webp";
import drizzlejpg from "./images/Drizzle.jpg";
import fog from "./images/Fog.webp";
import fogjpg from "./images/Fog.jpg";

function canUseWebP() {
  var e = document.createElement("canvas");
  if (!!(e.getContext && e.getContext("2d"))) {
    return e.toDataURL("image/webp").indexOf("data:image/webp") === 0;
  }
  return false;
}

const webp = canUseWebP();

const map = {
  Rain: rainy,
  Snow: snowy,
  Clouds: cloudy,
  Clear: clear,
  Thunderstorm: storm,
  Drizzle: drizzle,
  Rainjpg: rainyjpg,
  Snowjpg: snowyjpg,
  Cloudsjpg: cloudyjpg,
  Clearjpg: clearjpg,
  Thunderstormjpg: stormjpg,
  Drizzlejpg: drizzlejpg
};

function getBgImg(condition) {
  if (map[condition]) {
    return webp ? map[condition] : map[condition + "jpg"];
  }
  return webp ? fog : fogjpg;
}

export default getBgImg;
