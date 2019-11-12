import React, { Component } from "react";
import OlMap from "ol/Map";
import OlView from "ol/View";
import OlLayerTile from "ol/layer/Tile";
import OlSourceOSM from "ol/source/OSM";
import { toLonLat, fromLonLat } from "ol/proj";

var startingLat = 43.59;
var startingLon = -79.7;
var startingZoom = 8;
var prevLat = startingLat;
var prevLon = startingLon;

class Map extends Component {
  constructor() {
    super();
    this.state = { lat: prevLat, lon: prevLon };
    this.map = new OlMap({
      target: null,
      layers: [
        new OlLayerTile({
          source: new OlSourceOSM()
        })
      ],
      view: new OlView({
        center: fromLonLat([startingLon, startingLat]),
        zoom: [startingZoom]
      })
    });
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.submit(this.state.lat, this.state.lon);
  }

  render() {
    return (
      <React.Fragment>
        <label>Click on the map to see the forecast there</label> <br></br>
        <label>
          Latitude: {this.state.lat} Longitude: {this.state.lon}
        </label>
        <br></br>
        <input type="submit" value="Submit Coordinates" onClick={this.handleSubmit} />
        <div id="map"></div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.map.setTarget("map");
    this.map.on("click", e => {
      let center = toLonLat(e.coordinate);
      this.setState({ lon: center[0], lat: center[1] });
    });
  }

  // Change started configuration to the previous configuration
  componentWillUnmount() {
    [startingLon, startingLat] = toLonLat(this.map.getView().getCenter());
    startingZoom = this.map.getView().getZoom();
    [prevLon, prevLat] = [this.state.lon, this.state.lat];
  }
}

export default Map;
