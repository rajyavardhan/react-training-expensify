import React from 'react';
import {Link} from 'react-router-dom';
const ExpenseListItem = (props) => (
	<div>
		<Link to = {`/edit/${props.id}`}>
			<h2> {props.description} </h2>
		</Link>
		<span> {props.amount} </span>
		<span> {props.createdAt} </span>
	</div>
);

export default ExpenseListItem;
		// <button
		// 	onClick = {() => {props.history.push('/edit/' +  props.id)}}
		// >
		// 	Edit
		// </button>