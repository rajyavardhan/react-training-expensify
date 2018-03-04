import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test("Should setup default filter values", () => {
	const state = filtersReducer(undefined, {type: '@@INIT'});
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	})
});

test("Should sort by amount", () => {
	const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT', sortValue: 'amount'});
	expect(state.sortBy).toBe('amount');
});

test("Should sort by date", () => {
	const currentState = {
		text: '',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	}

	const state = filtersReducer(currentState, {type: 'SORT_BY_DATE', sortValue: 'date'});
	expect(state.sortBy).toBe('date');
});

test("Should set Text value for filter", () => {
	const currentState = {
		text: '',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	}
	const state = filtersReducer(currentState, {type: 'SET_TEXT', value: 'e'});
	expect(state.text).toBe('e');
});

test("Should set start Date", () => {
		const currentState = {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined
	}
	const state = filtersReducer(currentState, {type: 'SET_START_DATE', startDate: moment(0)});
	expect(state.startDate.valueOf()).toBe(moment(0).valueOf());
});

test("Should set start Date", () => {
		const currentState = {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined
	}
	const state = filtersReducer(currentState, {type: 'SET_END_DATE', endDate: moment(0)});
	expect(state.endDate.valueOf()).toBe(moment(0).valueOf());
});













