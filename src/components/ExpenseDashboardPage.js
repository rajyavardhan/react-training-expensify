import React from 'react';
import ExpenseList from './ExpensesList';
import ExpenseListFilters from './ExpenseListFilters';
const ExpenseDashboardPage = (props) => (
	<div>
		<ExpenseListFilters />
		<ExpenseList history = {props.history} store = {props.store}/>
	</div>
);
export default ExpenseDashboardPage;