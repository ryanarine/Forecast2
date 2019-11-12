import React from "react";
import WeatherCard from "./WeatherCard";
import DayCast from "./DayCast";
import "./Forecast.css";
import Map from "./Map";
import getEverything from "./Data";

/* Global variables */
const key = "54a84a123d401ac68736a6bca89f4301";

var url = "https://api.openweathermap.org/data/2.5/forecast?id=6167865&appid=" + key;

// return whether or not url changed
function changeURL(lat, lon) {
  let newurl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + key;
  if (newurl === url) {
    return false;
  }
  url = newurl;
  return true;
}

/* The Component */
class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      highs: 0, // high temperatures for each day
      lows: 0, //  low temperatures for each day
      conditions: 0, // conditions for each day
      header: "Toronto's Forecast", // main header for application
      status: 200, // status of fetch calls
      hourly: [], // temperatures for each 3-hour time period
      hourlyConditions: [], // conditions for each 3-hour time period
      descriptions: [], // descriptions of the conditions for each 3-hour time period
      humidities: [], // humidity percentage for each 3-hour time period
      cloudiness: [], // percentage of clouds for each 3-hour time period
      windSpeeds: [], // wind speed for each 3-hour time period
      dayIndex: -1 // index of which weather card is currently being focused on
      // -1 means no weather card is being focused on i.e main forecast is displayed
    };
    this.handleMapSubmit = this.handleMapSubmit.bind(this);
    this.dayFocus = this.dayFocus.bind(this);
  }

  // Executes when coordinates are submitted
  handleMapSubmit(lat, lon) {
    if (changeURL(lat, lon)) {
      this.componentDidMount();
    }
  }

  // Executes when a single WeatherCards gets clicked on
  // index indicates which WeatherCard was clicked
  dayFocus(index) {
    this.setState({ dayIndex: index });
  }

  render() {
    // Default render
    if (this.state.days === 0) {
      return <h1>{"The Forecast is loading, please wait"}</h1>;
    }
    // API only allows 60 requests per minute
    if (this.state.status === 429) {
      return <h1>{"Too many forecast requests have been made. Please come back in an hour."}</h1>;
    }
    // render detailed forecast for single day
    if (this.state.dayIndex !== -1) {
      return (
        <div style={{ width: "fit-content", margin: "auto" }}>
          <DayCast
            day={this.state.days[this.state.dayIndex]}
            values={this.state.hourly}
            start={this.state.dayIndex * 8}
            conditions={this.state.hourlyConditions}
            descriptions={this.state.descriptions}
            humidities={this.state.humidities}
            cloudiness={this.state.cloudiness}
            windSpeeds={this.state.windSpeeds}
            mainCondition={this.state.conditions[this.state.dayIndex]}
          />
          <button id="prevbtn" className="cardButton" onClick={() => this.dayFocus((this.state.dayIndex + 4) % 5)}>
            Previous
          </button>
          <button id="backbtn" className="cardButton" onClick={() => this.dayFocus(-1)}>
            Back
          </button>
          <button id="nextbtn" className="cardButton" onClick={() => this.dayFocus((this.state.dayIndex + 1) % 5)}>
            Next
          </button>
        </div>
      );
    }
    // render basic forecast for 5 days
    else {
      const cards = [0, 1, 2, 3, 4].map(i => (
        <div onClick={() => this.dayFocus(i)} className={"Card"} key={i}>
          <WeatherCard
            day={this.state.days[i]}
            high={this.state.highs[i]}
            low={this.state.lows[i]}
            condition={this.state.conditions[i]}
          />
        </div>
      ));
      return (
        <div>
          <h1>{this.state.header}</h1>
          <div id="cardContainer">{cards}</div>
          <Map submit={this.handleMapSubmit} />
        </div>
      );
    }
  }

  // Data gets fetched here
  async componentDidMount() {
    var info = await getEverything(url);
    info === -1 ? this.setState({ status: 429 }) : this.setState({ ...info });
  }
}

export default Forecast;
