import React from 'react';
import WeatherCard from './WeatherCard.js';
import DayCast from './DayCast.js';
import './Forecast.css';


/* Global variables */
const key = "54a84a123d401ac68736a6bca89f4301";

const ids = {6167865: "Toronto",
5907364: "Brampton",
6075357: "Mississauga",
6122091: "Richmond Hill",
5992996: "Kitchener",
6176823: "Waterloo",
6066513: "Markham",
6094817: "Ottawa",
5969782: "Hamilton",
6173577: "Vaughan",
6094578: "Oshawa",
5967690: "Guildwood Village"};

const codes = {toronto: '6167865',
brampton: '5907364',
mississauga: '6075357',
richmondhill: '6122091',
kitchener: '5992996',
waterloo: '6176823', 
markham: '6066513',
ottawa: '6094817',
hamilton: '5969782', 
vaughan: '6173577', 
oshawa: '6094578',
guildwoodvillage: '5967690'};

var url = "https://api.openweathermap.org/data/2.5/forecast?id=6167865&appid=" + key;

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


/* Styles */
const daycastStyle = {
	minWidth: "500px + 3vh"
};

/* Helper Functions */
function changeURL(city){
	url = "https://api.openweathermap.org/data/2.5/forecast?id=" + codes[city] + "&appid=" + key;
}

function getDays(data) {
	var arr = [];
	for (let i = 0; i < 40; i+=8){
		arr.push(days[(new Date(data.list[i].dt_txt.slice(0,10)).getDay() + 1) % 7]);
	}
	return arr;
}
	
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

function getHighLows(data, starts) {
	var lows = [];
	var highs = [];
	for (let i = 0; i < starts.length - 1; i++){
		var high = 0;
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
	const result = {highs: highs, lows: lows};
	return result;
}

function getEnd(entry1) {
	return (24 - new Date(entry1.dt_txt).getHours()) / 3;
}

function getStarts(data) {
	var arr = [];
	let end = getEnd(data[0]);
	arr.push(0);
	for (let i = end; i <= 40; i+=8){
		arr.push(i);
	}
	return arr;
}

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

async function getEverything(){
	var response = await fetch(url);
		if (response.status === 429){return -1;} //Too many requests
		var forecast =  await response.json();
		var starts = getStarts(forecast.list);
		var info = {};
		info.days = getDays(forecast);
		var highLows = getHighLows(forecast, starts);
		var hourlyData = getHourly(forecast.list, starts);
		info.conditions = getConditions(hourlyData.conds, starts);
		info.highs = highLows.highs;
		info.lows = highLows.lows;
		info.starts = starts;
		info.hourly  = hourlyData.temps;
		info.hourlyConditions = hourlyData.conds;
		info.descriptions = hourlyData.descs;
		return await info;
}


/* The Component */
class Forecast extends React.Component {
	constructor(props) {
		super(props);
		this.state = {days: 0,
		highs: 0,
		lows: 0,
		conds: 0,
		formCity: 'toronto',
		city: 'toronto',
		code: '6167865',
		status: 200,
		starts: [],
		hourly: [],
		hourlyConds: [],
		descriptions: [],
		dayIndex: -1,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.dayFocus = this.dayFocus.bind(this);
	}
	
	handleChange(event) {
		this.setState({formCity: event.target.value});
	}
	
	handleSubmit(event) {
		if (this.state.formCity !== this.state.city) {
			this.setState({city: this.state.formCity, code: codes[this.state.formCity]}, () => this.componentDidMount());
		}
    event.preventDefault();
  }
	
	dayFocus(index){
		this.setState({dayIndex: index});
	}
	
	render(){
		if (this.state.days === 0){
			return (<h1>{"The Forecast is loading, please wait"}</h1>);
		}
		if (this.state.status === 429){
			return (<h1>{"Too many forecast requests have been made. Please come back in an hour."}</h1>);
		}
		if (this.state.dayIndex !== -1){
			return <div style = {daycastStyle}>
			<DayCast day={this.state.days[this.state.dayIndex]}
			values={this.state.hourly}
			start={this.state.dayIndex*8}
			conditions={this.state.hourlyConds}
			descriptions={this.state.descriptions}
			mainCondition={this.state.conds[this.state.dayIndex]}/>
			<button onClick={() => this.dayFocus(-1)}>Back</button>
			</div>;
		}
		else {
			return (
			<div>
			<h1>{ids[this.state.code] + "'s Forecast"}</h1>
      <div id="cardContainer">
      <div onClick={() => this.dayFocus(0)} id={"Card1"}> <WeatherCard day={this.state.days[0]} high={this.state.highs[0]} low={this.state.lows[0]} condition={this.state.conds[0]} /> </div>
			<div onClick={() => this.dayFocus(1)} id={"Card2"}> <WeatherCard day={this.state.days[1]} high={this.state.highs[1]} low={this.state.lows[1]} condition={this.state.conds[1]}/> </div>
			<div onClick={() => this.dayFocus(2)} id={"Card3"}> <WeatherCard day={this.state.days[2]} high={this.state.highs[2]} low={this.state.lows[2]} condition={this.state.conds[2]}/> </div>
			<div onClick={() => this.dayFocus(3)} id={"Card4"}> <WeatherCard day={this.state.days[3]} high={this.state.highs[3]} low={this.state.lows[3]} condition={this.state.conds[3]}/> </div>
			<div onClick={() => this.dayFocus(4)} id={"Card5"}> <WeatherCard day={this.state.days[4]} high={this.state.highs[4]} low={this.state.lows[4]} condition={this.state.conds[4]}/> </div>
			</div>
			<form onSubmit={this.handleSubmit}>
        <label>
          Choose a city to display its forecast <br></br>
          <select value={this.state.formCity} onChange={this.handleChange}>
            <option value="toronto">Toronto</option>
            <option value="brampton">Brampton</option>
						<option value="mississauga">Mississauga</option>
						<option value="richmondhill">Richmond Hill</option>
						<option value="kitchener">Kitchener</option>
						<option value="waterloo">Waterloo</option>
						<option value="markham">Markham</option>
						<option value="ottawa">Ottawa</option>
						<option value="hamilton">Hamilton</option>
						<option value="vaughan">Vaughan</option>
						<option value="oshawa">Oshawa</option>
						<option value="guildwoodvillage">Guildwood Village</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
			</div>
			);
		}
	}
	
	async componentDidMount(){
		changeURL(this.state.city);
		var info = await getEverything();
		if (info === -1){
			this.setState({status: 429});
		}
		else {
		this.setState({days: info.days, highs: info.highs,
		lows: info.lows, conds: info.conditions, starts: info.starts, hourly: info.hourly, hourlyConds: info.hourlyConditions, descriptions: info.descriptions});
		}
	}
}
	
export default Forecast;