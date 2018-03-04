import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import moment from 'moment';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const expense1 = {
	description: 'water bill',
	notes: 'Last month of the summer',
	amount: 8500,
	createdAt: 1519882741915
}
const expense2 = {
	description: 'gas bill',
	notes: 'Use more public transportation',
	amount: 1500,
	createdAt: moment(0).add(48, 'years').valueOf()
}

store.dispatch(addExpense(expense1));
store.dispatch(addExpense(expense2));
store.dispatch(addExpense({description: 'nailCutter', createdAt: 500, amount: 200}));

const jsx = (
	<Provider store = {store}>
		<AppRouter store = {store}/>
	</Provider>
)


ReactDOM.render(jsx, document.getElementById("root"));


