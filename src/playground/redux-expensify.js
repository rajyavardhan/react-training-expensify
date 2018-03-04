import {createStore, combineReducers} from 'redux'; 
import uuid from 'uuid';

//Action generators
//ADD_EXPENSE
const addExpense  = ({createdAt = 0, description = '', notes = '', amount = 0} = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		notes,
		amount,
		description,
		createdAt
	}
});

//REMOVE EXPENSE

const removeExpense = ({removeExpenseId = -1} = {}) => ({
	type: 'REMOVE_EXPENSE',
	removeExpenseId
});

//Edit expense
const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});


//setText

const setTextFilter = (value = "") => ({
	type: 'SET_TEXT',
	value
});

//sort by amount
const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT',
	sortValue: 'amount'
});

//sort by date
const sortByDate = () => ({
	type: 'SORT_BY_DATE',
	sortValue: 'date'
});

//set start date

const setStartDate = (startDate) => ({
	type: 'SET_START_DATE',
	startDate
});

//setEndDate

const setEndDate = (endDate) => ({
	type: 'SET_END_DATE',
	endDate
});
//expenses Reducer

const defaultExpensesState = [];

const expensesReducer = (state = defaultExpensesState, action) => {
	switch(action.type) {
		case 'ADD_EXPENSE':
			return [...state, action.expense];
		case 'REMOVE_EXPENSE':
			return state.filter(({id})=> id !== action.removeExpenseId);
		case 'EDIT_EXPENSE':
			return state.map((expense) => expense.id === action.id? {...expense, ...action.updates}: expense);
		default:
			return state;
	}
}

//filters Reducer

const defaultFilterState = {text: '', sortBy: 'date', startDate: undefined, endDate: undefined};

const filterReducerer = ( state = defaultFilterState, action) => {
	switch(action.type) {
		case 'SET_TEXT':
			return {...state, text: action.value};
		case 'SORT_BY_AMOUNT':
			return {...state, sortBy: action.sortValue}
		case 'SORT_BY_DATE':
			return {...state, sortBy: action.sortValue}
		case 'SET_START_DATE':
			return {...state, startDate: action.startDate}
		case 'SET_END_DATE':
			return {...state, endDate: action.endDate}
		default:
			return state;
	}
}

const getVisibleExpenses = (expenses, {text, startDate, endDate, sortBy}) => {

	return expenses.filter((expense)=> {
		//const startDateMatch = typeof startDate !== 'number' || startDate <= expense.createdAt;
		//const endDateMatch = typeof endDate !== 'number' || endDate >= expense.createdAt;
		//console.log(expense.description);
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
		return textMatch;
	}).sort((expense1, expense2)=>{
		if(sortBy == 'date') return expense1.createdAt < expense2.createdAt;
		if(sortBy == 'amount') return expense1.amount > expense2.amount;
	})
}

const store = createStore (
	combineReducers({
		expenses: expensesReducer,
		filter: filterReducerer
	})
);

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
	console.log(visibleExpenses);
})

const expense1 = store.dispatch(addExpense({
		description: 'January rent',
		notes: 'This was the final payment for the address',
		amount: 10000,
		createdAt: 1000
}));
const expense2 = store.dispatch(addExpense({
	description: 'Beer',
	notes: 'This is weekend special',
	amount: 100,
	createdAt: -100
}));

const expense3 = store.dispatch(addExpense({
	description: 'ToothBrush',
	notes: 'Dental hygeine is more important',
	amount: 120,
	createdAt: 2000
}));

//store.dispatch(removeExpense({removeExpenseId: expense2.expense.id}));
//store.dispatch(editExpense(expense1.expense.id, {amount: 3000}));
//store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter(""));
store.dispatch(sortByAmount());
store.dispatch(sortByDate());

//store.dispatch(setStartDate(125));
//store.dispatch(setEndDate(150))












const demoState = {
	expenses:[{
		id:' _ahoujaoltml',
		description: 'January rent',
		note: 'This was the final payment for the address',
		amount: 10000,
		createdAt: 0
	}],

	filters: {
		text: 'rent',
		sortBy: 'date',  //date or amount
		startDate: undefined,
		endDate: undefined
	}
}
