import React from 'react';
import {connect} from 'react-redux';
import ExpensesListItem from './ExpensesListItem';
import getVisibileExpenses from '../selectors/visibleExpenses';

export const ExpensesList = (props) => (
	<div>
		<h1>Expense List</h1>
		{props.expenses.length == 0? (<p> There are no Items</p>):(props.expenses.map((expense) => (<ExpensesListItem history = {props.history} key = {expense.id} {...expense}/>))

		)}
		
	</div>
);
const mapStateToProps = (state) => {
	return {
		expenses: getVisibileExpenses(state.expenses, state.filters)
	}
};
export default connect(mapStateToProps)(ExpensesList);
