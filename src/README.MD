This application consists of 4 React components: Forecast, WeatherCard, DayCast, Map and CitySelectBox (index.js serves an entry point, Data.js and Images.js contain helper functions). <br>

## Forecast 
The main component. At the start of the application it contains 5 WeatherCards, 1 CitySelectBox and 1 Map. Apart from choosing what to render, it is responsible for determining the request to send to the weather API, given user inputs from its child components. <br>

### WeatherCard
Each WeatherCard contains basic forecast data for a single day, such as the high and low temperatures.

### DayCast
When you click on a WeatherCard, the forecast component renders a single corresponding DayCast component. Each DayCast is like a WeatherCard except it contains forecast data in every 3 hour timeslot (starting from midnight) for that day.

### Map
The Map component is a Google Map that allows users to choose a location anywhere in the world. It is responsible for determining the latitude and longitude of the clicked point and sending that to the Forecast component.

### CitySelectBox
This component is just a select tag containing the names of all the default Ontario cities and is responsible for keeping track of the value of the select box and sending that to the Forecast component.

### Helper Functions
Data.js contains helper functions that parse the data retrieved from the weather API, while Images.js returns a background image given a condition. For example, if a WeatherCard says that the condition is "Snow" Images.js will return a "Snowy" background image.

