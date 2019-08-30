const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/*
-The following are functions that parse the json data
-The data comes in as an array of 40 entries
-Each entry represents the weather during a 3 hour time period
-Roughly every 3 hours the API updates the data, so a new time period is entered
but the oldest one is removed
-Since this is a 5-day forecast, the data for the 6th day (if there is one)
is ignored
-The missing data for the 1st day is compensated for by inserting the string
'N/A' for the missing time periods
*/

// Get the name of the city and return header string
function getCityHeader(data) {
	let name = data.city.name;
	if (name){
		return name + "'s Forecast";
	}
	return "Forecast of Unknown City";
}

// Get the names of the 5 days
function getDays(data) {
	var arr = [];
	for (let i = 0; i < 40; i+=8){
		arr.push(days[(new Date(data.list[i].dt_txt.slice(0,10)).getDay() + 1) % 7]);
	}
	return arr;
}

// Get the main conditions of each day	
function getConditions(conds, starts) {
	var arr = [];
	var day = [];
	// Weight value is based how important a timeslot is to a normal working citizen
	// For example the weather at 3AM is significantly less important 
	// than the weather at 3PM to a normal working citizen
	// In other words, working hours have a larger weight than sleeping/resting hours
  const weights = [1, 1, 2, 3, 3, 3, 2, 1];
	for (let i = 0; i < 5; i++){
		day = {maxValue: 0, maxCondition: "N/A"};
		for(let j = 8 * i; j < 8 * (i+1); j++){
			let cond = conds[j]
			if (cond === "N/A") continue;
			day[cond] = day[cond]+weights[j % 8] || weights[j % 8];
			if (day[cond] > day.maxValue){
				day.maxValue = day[cond];
				day.maxCondition = cond;
			}
		}
		arr.push(day.maxCondition);
	}
	return arr;
}

// Get the high and low temperatures of each day
function getHighLows(data, starts) {
	var lows = [];
	var highs = [];
	for (let i = 0; i < starts.length - 1; i++){
		var high = 0; // Temperatures in Kelvin cannot go below or at 0
		var low = Number.MAX_SAFE_INTEGER;
		var start = starts[i];
		var end = starts[i + 1];
		for (let j = start; j < end; j++){
			high = Math.max(high, data.list[j].main.temp_max);
			low = Math.min(low, data.list[j].main.temp_min);
		}
		highs.push((high - 273.15).toFixed(2));
		lows.push((low - 273.15).toFixed(2));
	}
	return {highs: highs, lows: lows};
}

// Get the ending index of the data array that corresponds to the first day
function getEnd(entry1) {
	return (24 - new Date(entry1.dt_txt).getHours()) / 3;
}

// Get the starting index of the data array that corresponds to each day
function getStarts(data) {
	var arr = [];
	let end = getEnd(data[0]);
	arr.push(0);
	for (let i = end; i <= 40; i+=8){
		arr.push(i);
	}
	return arr;
}

// Get the data (temperature, condition, condition description) for each time period
function getHourly(arr, starts){
	var start = starts[1];
		var temps = [];
		var conds = [];
		var descs = [];
		// All of the data for the first day may not be present
		// Push all the N/A data
		for (let i = 0; i < 8-start; i++){
			temps.push("N/A");
			conds.push("N/A");
			descs.push("N/A");
		}	
		for (let i = 0; i < (40 - 8 + start); i++){
			temps.push((arr[i].main.temp - 273.15).toFixed(2) + "°C");
			conds.push(arr[i].weather[0].main);
			descs.push(arr[i].weather[0].description);
		}
		return {temps, conds, descs};
}

// Get all the relevant data
async function getEverything(url){
	var response = await fetch(url);
		if (response.status === 429){return -1;} // Too many requests
		var forecast =  await response.json();
		var starts = getStarts(forecast.list);
		var info = {};
		info.header = getCityHeader(forecast);
		info.days = getDays(forecast);
		var highLows = getHighLows(forecast, starts);
		var hourlyData = getHourly(forecast.list, starts);
		info.conditions = getConditions(hourlyData.conds, starts);
		info.highs = highLows.highs;
		info.lows = highLows.lows;
		info.hourly  = hourlyData.temps;
		info.hourlyConditions = hourlyData.conds;
		info.descriptions = hourlyData.descs;
		return await info;
}

export default getEverything;