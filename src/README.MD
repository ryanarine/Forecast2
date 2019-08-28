This application consists of 4 React components: Forecast, WeatherCard, Map, and DayCast (index.js serves an entry point). <br>

Forecast is the main component and at the start, it contains 5 WeatherCard components and 1 Map component. Each WeatherCard contains the main forecast for one of the 5 days. <br>

When you click on a WeatherCard, the forecast component renders a single corresponding DayCast component. Each DayCast is like a WeatherCard except it contains more information, such as the condition at every tri-hourly timeslot.

The Map component is a Google Map that allows users to choose a location anywhere in the world and retrieve the forecast there by determining the latitude and longitude of the clicked point.

Data.js contains helper functions that parse the data retrieved from the weather API.

