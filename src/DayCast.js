import React from 'react';
import rainy from './images/Rainy.png';
import snowy from './images/Snowy.png';
import cloudy from './images/cloudy.jpg';
import clear from './images/Clear.jpeg';
import storm from './images/Thunderstorm.jpg';
import drizzle from './images/Drizzle.jpg';
import fog from './images/Fog.png';

function getBgImg(condition) {
		if (condition === "Clear") return clear;
		if (condition === "Clouds") return cloudy;
		if (condition === "Rain") return rainy;
		if (condition === "Snow") return snowy;
		if (condition === "Thunderstorm") return storm;
		if (condition === "Drizzle") return drizzle;
		return fog;
	}

class DayCast extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			values: 0,
			day: "",
			start: 0,
			conditions: 0,
			descriptions: 0,
			img: 0
		}
	}
	
	static getDerivedStateFromProps(props,state){
		return ({day: props.day,
		values: props.values,
		start: props.start,
		conditions: props.conditions,
		descriptions: props.descriptions,
		mainCondition: props.mainCondition});
	}
	
	render(){
			return(
			<div>
			<table align={"center"} style={{backgroundColor: "mediumaquamarine",
			backgroundImage: "url(" + getBgImg(this.state.mainCondition) + ")",
			backgroundSize: "cover"}}>
				<tbody>
					<tr><th colSpan="4">{this.state.day}</th></tr>
					<tr>
					<th>{"Time"}</th>
					<th>{"Temperature"}</th>
					<th>{"Condition"}</th>
					<th>{"Description"}</th>
					</tr>
					
					<tr>
					<td>{"12 AM"}</td>
					<td>{this.state.values[this.state.start]}</td>
					<td>{this.state.conditions[this.state.start]}</td>
					<td>{this.state.descriptions[this.state.start]}</td>
					</tr>
	
					<tr>
					<td>{"3 AM"}</td>
					<td>{this.state.values[this.state.start+1]}</td>
					<td>{this.state.conditions[this.state.start+1]}</td>
					<td>{this.state.descriptions[this.state.start+1]}</td>
					</tr>
									
					<tr>
					<td>{"6 AM"}</td>
					<td>{this.state.values[this.state.start+2]}</td>
					<td>{this.state.conditions[this.state.start+2]}</td>
					<td>{this.state.descriptions[this.state.start+2]}</td>
					</tr>
										
					<tr>
					<td>{"9 AM"}</td>
					<td>{this.state.values[this.state.start+3]}</td>
					<td>{this.state.conditions[this.state.start+3]}</td>
					<td>{this.state.descriptions[this.state.start+3]}</td>
					</tr>
										
					<tr>
					<td>{"12 PM"}</td>
					<td>{this.state.values[this.state.start+4]}</td>
					<td>{this.state.conditions[this.state.start+4]}</td>
					<td>{this.state.descriptions[this.state.start+4]}</td>
					</tr>
					
					<tr>
					<td>{"3 PM"}</td>
					<td>{this.state.values[this.state.start+5]}</td>
					<td>{this.state.conditions[this.state.start+5]}</td>
					<td>{this.state.descriptions[this.state.start+5]}</td>
					</tr>
					
					<tr>
					<td>{"6 PM"}</td>
					<td>{this.state.values[this.state.start+6]}</td>
					<td>{this.state.conditions[this.state.start+6]}</td>
					<td>{this.state.descriptions[this.state.start+6]}</td>
					</tr>
					
					<tr>
					<td>{"9 PM"}</td>
					<td>{this.state.values[this.state.start+7]}</td>
					<td>{this.state.conditions[this.state.start+7]}</td>
					<td>{this.state.descriptions[this.state.start+7]}</td>
					</tr>
					
				</tbody>
			</table>
			</div>);
	}
}

export default DayCast