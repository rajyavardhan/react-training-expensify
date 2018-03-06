import getExpensesTotal from '../../selectors/expenses-total';
import moment from 'moment';
import {altExpenses} from '../fixtures/expenses';

test("Should add 3 expenses and return the value", () => {
	const totalExpenses = getExpensesTotal(altExpenses);
	expect(totalExpenses).toBe(6);
});

test("Should take 1 expense and return the value", () => {
	const totalExpenses = getExpensesTotal([altExpenses[1]]);
	expect(totalExpenses).toBe(2);
});

test("Should take 1 expense non-array and return empty string", () => {
	const totalExpenses = getExpensesTotal(altExpenses[1]);
	expect(totalExpenses).toBe('');
});
test("Should take empty array and return 0", () => {
	const totalExpenses = getExpensesTotal([]);
	expect(totalExpenses).toBe(0);
});