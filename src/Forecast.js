import React from 'react';
import WeatherCard from './WeatherCard.js';
import DayCast from './DayCast.js';
import './Forecast.css';
import Map from './Map';
import getEverything from './Data';


/* Global variables */
const key = "54a84a123d401ac68736a6bca89f4301";

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
oshawa: '6094578'};

var url = "https://api.openweathermap.org/data/2.5/forecast?id=6167865&appid=" + key;

/* Styles */
const daycastStyle = {
	minWidth: "500px + 3vh"
};

/* Helper Functions */
function changeURLByCity(city){
	let newurl = "https://api.openweathermap.org/data/2.5/forecast?id=" + codes[city] + "&appid=" + key;
	return changeURL(newurl);
}

function changeURLByCoords(lat, lon){
	let newurl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + key;
	return changeURL(newurl);
}

// return whether or not url changed
function changeURL(newurl){
	if (newurl === url){
		return false;
	}
	url = newurl;
	return true;
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
		cityName: 'Toronto',
		status: 200,
		starts: [],
		hourly: [],
		hourlyConds: [],
		descriptions: [],
		dayIndex: -1,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleMapSubmit = this.handleMapSubmit.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.dayFocus = this.dayFocus.bind(this);
	}
	
	handleChange(event) {
		this.setState({formCity: event.target.value});
	}
	
	handleMapSubmit(lat, lon) {
		if (changeURLByCoords(lat, lon)) {
			this.componentDidMount();
		}
	}
	
	handleSubmit(event) {
		if (changeURLByCity(this.state.formCity)){
			this.setState({city: this.state.formCity}, () => this.componentDidMount());
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
		// API only allows 60 requests per minute
		if (this.state.status === 429){
			return (<h1>{"Too many forecast requests have been made. Please come back in an hour."}</h1>);
		}
		// render detailed forecast for single day
		if (this.state.dayIndex !== -1){
			return <div style = {daycastStyle}>
			<DayCast day={this.state.days[this.state.dayIndex]}
			values={this.state.hourly}
			start={this.state.dayIndex*8}
			conditions={this.state.hourlyConds}
			descriptions={this.state.descriptions}
			mainCondition={this.state.conds[this.state.dayIndex]}/>
			<button id="backbtn"onClick={() => this.dayFocus(-1)}>Back</button>
			</div>;
		}
		// render basic forecast for 5 days
		else {
			return (
			<div>
			<h1>{this.state.cityName}</h1>
      <div id="cardContainer">
      <div onClick={() => this.dayFocus(0)} className={"Card"}> <WeatherCard day={this.state.days[0]} high={this.state.highs[0]} low={this.state.lows[0]} condition={this.state.conds[0]} /> </div>
			<div onClick={()	 => this.dayFocus(1)} className={"Card"}> <WeatherCard day={this.state.days[1]} high={this.state.highs[1]} low={this.state.lows[1]} condition={this.state.conds[1]}/> </div>
			<div onClick={() => this.dayFocus(2)} className={"Card"}> <WeatherCard day={this.state.days[2]} high={this.state.highs[2]} low={this.state.lows[2]} condition={this.state.conds[2]}/> </div>
			<div onClick={() => this.dayFocus(3)} className={"Card"}> <WeatherCard day={this.state.days[3]} high={this.state.highs[3]} low={this.state.lows[3]} condition={this.state.conds[3]}/> </div>
			<div onClick={() => this.dayFocus(4)} className={"Card"}> <WeatherCard day={this.state.days[4]} high={this.state.highs[4]} low={this.state.lows[4]} condition={this.state.conds[4]}/> </div>
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
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
			<Map submit={this.handleMapSubmit} />			
			</div>
			);
		}
	}
	
	async componentDidMount(){
		var info = await getEverything(url);
		if (info === -1){
			this.setState({status: 429});
		}
		else {
		this.setState({days: info.days, highs: info.highs,
		lows: info.lows, conds: info.conditions,
		starts: info.starts, hourly: info.hourly,
		hourlyConds: info.hourlyConditions, descriptions: info.descriptions,
		cityName: info.city});
		}
	}
}
	
export default Forecast;