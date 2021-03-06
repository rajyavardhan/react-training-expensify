import selectExpenses from '../../selectors/visibleExpenses';
import moment from 'moment';
import expenses from '../fixtures/expenses'
test("Should filter by text value", () => {
	const filters = {
		text: 'e',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined
	}
	const result = selectExpenses(expenses, filters)
	expect(result).toEqual([
		expenses[2],
		expenses[1]
	]);
});

test("Should filter by Start Date", () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: moment(0),
		endDate: undefined
	}
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([
		expenses[2],
		expenses[0],
	]);

});
test("Should filter by Start Date", () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: moment(0)
	}
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([
		expenses[0],
		expenses[1]
	]);

});
test("Should filter by Start Date and End date", () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: moment(0).subtract(3, 'days'),
		endDate: moment(0).add(3, 'days')
	}
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([
		expenses[0]
	]);

});

test("Should filter by amount", () => {
	const filters = {
		text: '',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	}
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([
		expenses[1],
		expenses[0],
		expenses[2]
	]);	
})