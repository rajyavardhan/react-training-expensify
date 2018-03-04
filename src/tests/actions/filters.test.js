import {setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters';
import moment from 'moment';
test("Should generate start Date action generator", () => {
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		type: 'SET_START_DATE',
		startDate: moment(0)
	});
});
test("Should generate end date action generator", () => {
	const action = setEndDate(moment(0));
	expect(action).toEqual({
		type: 'SET_END_DATE',
		endDate: moment(0)
	});
});
test("Should generate text filter action generator", ()=> {
	const action = setTextFilter('bill');
	expect(action).toEqual({
		type: 'SET_TEXT',
		value: 'bill'
	});
});

test("Should generate text filter action generator with default values", () => {
	const action = setTextFilter();
	expect(action).toEqual({
		type: 'SET_TEXT',
		value: ''
	});
});

test("Should generate sort by amount action generator", ()=> {
	const action = sortByAmount();
	expect(action).toEqual({
		type: 'SORT_BY_AMOUNT',
		sortValue: 'amount'
	});
});

test("Should generate sort by date action generateor", () => {
	const action = sortByDate();
	expect(action).toEqual({
		type: 'SORT_BY_DATE',
		sortValue: 'date'
	})
});