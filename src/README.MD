This application consists of 3 React components: Forecast, WeatherCard, and DayCast (index.js serves an entry point). <br>

Forecast is the main component and at the start, it contains 5 WeatherCard components. Each WeatherCard contains the main forecast for one of the 5 days. <br>

When you click on a WeatherCard, the forecast component renders a single corresponding DayCast component. Each DayCast is like a WeatherCard except it contains more information, such as the condition at every tri-hourly timeslot.

