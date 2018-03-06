import React from 'react';
import { connect } from 'react-redux';
import getExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/visibleExpenses';

export const ExpensesSummary = (props) => (
	<div>
		{`Viewing ${props.expenses.length} totalling ${getExpensesTotal(props.expenses)}`}
	</div>	
);

const mapStateToProps = (state) => ({
	expenses: getVisibleExpenses(state.expenses, state.filters)
}); 
export default connect(mapStateToProps)(ExpensesSummary);