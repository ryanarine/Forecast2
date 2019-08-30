import React from 'react';
import getBgImg from './Images';

function DayCast(props) {
	const style = {backgroundColor: "mediumaquamarine",
	backgroundImage: "url(" + getBgImg(props.mainCondition) + ")",
	backgroundSize: "cover"}

	const timeSlots = ["12 AM", "3 AM", "6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM"];
	const tableEntries = [0,1,2,3,4,5,6,7].map(i => 
		<tr key={i}>
			<td>{timeSlots[i]}</td>
			<td>{props.values[props.start + i]}</td>
			<td>{props.conditions[props.start + i]}</td>
			<td>{props.descriptions[props.start + i]}</td>
		</tr>
	);

	return(<table align={"center"} style={style}>
		<tbody>
			<tr><th colSpan="4">{props.day}</th></tr>
			<tr>
			<th>{"Time"}</th>
			<th>{"Temperature"}</th>
			<th>{"Condition"}</th>
			<th>{"Description"}</th>
			</tr>		
			{tableEntries}
		</tbody>
	</table>);
}

export default DayCast