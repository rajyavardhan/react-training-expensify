import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeraljs';

const ExpenseListItem = ({id, description, amount, createdAt}) => (
	<div>
		<Link to = {`/edit/${id}`}>
			<h2> {description} </h2>
		</Link>
		<p> {numeral(amount).format('$0,0.00')} 
				-
			{moment(createdAt).format('MMM Do YYYY')} 
		</p>
	</div>
);

export default ExpenseListItem;
		// <button
		// 	onClick = {() => {props.history.push('/edit/' +  props.id)}}
		// >
		// 	Edit
		// </button>