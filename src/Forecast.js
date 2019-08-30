import React from 'react';
import WeatherCard from './WeatherCard';
import DayCast from './DayCast';
import './Forecast.css';
import Map from './Map';
import getEverything from './Data';
import CitySelectBox from './CitySelectBox';


/* Global variables */
const key = "54a84a123d401ac68736a6bca89f4301";
const citySelectName = "box"; // name of select tag  in CitySelectBox component

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
		highs: 0, // high temperatures for each day
		lows: 0, //  low temperatures for each day
		conditions: 0, // conditions for each day
		header: "Toronto's Forecast", // main header for application
		status: 200, // status of fetch calls
		hourly: [], // temperatures for each 3-hour time period
		hourlyConditions: [], // conditions for each 3-hour time period
		descriptions: [], // descriptions of the conditions for each 3-hour time period
		dayIndex: -1, // index of which weather card is currently being focused on
		// -1 means no weather card is being focused on i.e main forecast is displayed
		};
		this.handleMapSubmit = this.handleMapSubmit.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.dayFocus = this.dayFocus.bind(this);
	}

	// Executes when coordinates are submitted
	handleMapSubmit(lat, lon) {
		if (changeURLByCoords(lat, lon)) {
			this.componentDidMount();
		}
	}
	
	// Executes when one of the given Ontario cities are submitted
	handleSubmit(event) {
		event.preventDefault();
		if (changeURLByCity(event.target.elements[citySelectName].value)){
			this.componentDidMount();
		}
  	}
	
	// Executes when a single WeatherCards gets clicked on
	// index indicates which WeatherCard was clicked
	dayFocus(index){
		this.setState({dayIndex: index});
	}
	
	render(){
		// Default render
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
			conditions={this.state.hourlyConditions}
			descriptions={this.state.descriptions}
			mainCondition={this.state.conditions[this.state.dayIndex]}/>
			<button style={{backgroundColor: 'red'}}className="cardButton"onClick={() => this.dayFocus((this.state.dayIndex + 4) % 5)}>Previous</button> 
			<button style={{backgroundColor: 'dodgerblue'}}className="cardButton"onClick={() => this.dayFocus(-1)}>Back</button>
			<button style={{backgroundColor: 'forestgreen'}}className="cardButton"onClick={() => this.dayFocus((this.state.dayIndex + 1) % 5)}>Next</button>
			</div>;
		}
		// render basic forecast for 5 days
		else {
			const cards = [0,1,2,3,4].map(i => <div onClick={() => this.dayFocus(i)} className={"Card"} key={i}>
					<WeatherCard 
							day={this.state.days[i]}
							high={this.state.highs[i]}
							low={this.state.lows[i]} 
							condition={this.state.conditions[i]}
					/>
				</div> 
			);
			return (
				<div>
					<h1>{this.state.header}</h1>

					<div id="cardContainer">
						{cards}
					</div>

					<form onSubmit={this.handleSubmit}>
						<label>
							Choose a city to display its forecast <br></br>
							<CitySelectBox name={citySelectName} />
						</label>
						<input type="submit" value="Submit" />
					</form>

					<Map submit={this.handleMapSubmit} />			
				</div>
			);
		}
	}
	
	// Data gets fetched here
	async componentDidMount(){
		var info = await getEverything(url);
		(info === -1) ? this.setState({status: 429}) : this.setState({...info});
	}
}
	
export default Forecast;