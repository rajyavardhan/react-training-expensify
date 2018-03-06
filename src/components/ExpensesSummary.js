import React from 'react';
import { connect } from 'react-redux';
import getExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/visibleExpenses';
import numeral from 'numeraljs'

export const ExpensesSummary = (props) => (
	<div>
		{`Viewing ${props.expenses.length} totalling ${numeral(getExpensesTotal(props.expenses)).format('$0.00')}`}
	</div>	
);

const mapStateToProps = (state) => ({
	expenses: getVisibleExpenses(state.expenses, state.filters)
}); 
export default connect(mapStateToProps)(ExpensesSummary);