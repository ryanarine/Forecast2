import React, { Component } from "react";
import GoogleMap from "google-map-react";

const mapkey = "AIzaSyA5XxXKw44uRve7wAs046c_jGmKNhK6B1Y";
var startingLat = 43.59;
var startingLng = -79.7;
var startingZoom = 8;
var prevLat = startingLat;
var prevLng = startingLng;
var prevZoom = startingZoom;

class Map extends Component {
  constructor() {
    super();
    this.state = { lat: startingLat, lng: startingLng };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(e) {
    this.setState({ lat: e.lat, lng: e.lng });
  }

  handleSubmit() {
    this.props.submit(this.state.lat, this.state.lng);
  }

  render() {
    return (
      <div id="mapContainer">
        <label>Or click on the map to see the forecast there</label> <br></br>
        <label>
          Latitude: {this.state.lat} Longitude: {this.state.lng}
        </label>
        <br></br>
        <input type="submit" value="Submit Coordinates" onClick={this.handleSubmit} />
        <GoogleMap
          bootstrapURLKeys={{ key: mapkey }}
          defaultCenter={{ lat: startingLat, lng: startingLng }}
          defaultZoom={startingZoom}
          onClick={e => this.setState({ lat: e.lat, lng: e.lng })}
          onChange={map => {
            prevLat = map.center.lat;
            prevLng = map.center.lng;
            prevZoom = map.zoom;
          }}
        ></GoogleMap>
      </div>
    );
  }

  // Change started configuration to the previous configuration
  componentWillUnmount() {
    startingLat = prevLat;
    startingLng = prevLng;
    startingZoom = prevZoom;
  }
}

export default Map;
