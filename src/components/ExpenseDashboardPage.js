import React from 'react';
import ExpenseList from './ExpensesList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = (props) => (
	<div>
		<ExpensesSummary />
		<ExpenseListFilters />
		<ExpenseList history = {props.history} store = {props.store}/>
	</div>
);
export default ExpenseDashboardPage;