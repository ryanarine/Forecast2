import React, { Component } from 'react'

const values = ["toronto",
"brampton",
"mississauga", 
"richmondhill", 
"kitchener", 
"waterloo", 
"markham", 
"ottawa", 
"hamilton",
"vaughan",
"oshawa"];

const cityNames = ["Toronto",
"Brampton",
"Mississauga", 
"Richmond Hill", 
"Kitchener", 
"Waterloo", 
"Markham", 
"Ottawa", 
"Hamilton",
"Vaughan",
"Oshawa"];

class CitySelectBox extends Component {
    constructor(props){
        super();
        this.state  = {
            city: 'toronto',
            name: props.name
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
		if (event.target.value !== this.state.city) {
			this.setState({city: event.target.value});
		}
	}
    
    render() {
        const cities = values.map((value, index) => 
            <option key={index} value={value}>{cityNames[index]}</option>
        )
        return (
            <select value={this.state.city} onChange={this.handleChange} name={this.state.name}>
                {cities}
			</select>
        )
    }
}

export default CitySelectBox