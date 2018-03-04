import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
test("Should setup default state", () => {
	const state = expensesReducer(undefined, {type: '@@INIT'});
	expect(state).toEqual([]);
});

test("Should remove expense id", () => {
	const action = {type: 'REMOVE_EXPENSE', removeExpenseId: expenses[0].id};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[1], expenses[2]]);
});

test("Should not remove the unidentified id", () => {
	const action = {type: 'REMOVE_EXPENSE', removeExpenseId: -1};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test("Should add an expense", () => {
	const expense = {id: 56, description: 'something', amount: 1300}
	const action = {type: 'ADD_EXPENSE', expense};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([...expenses, expense]);
});

test("Should edit an expense", () => {
	const action = {type: 'EDIT_EXPENSE', id: expenses[0].id, updates: {description: 'phone'}};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([{...expenses[0], description: 'phone'},expenses[1], expenses[2]]);
});

test("Should not edit an expense on wrong id", () => {
	const action = {type: 'EDIT_EXPENSE', id: -1, updates: {description: 'phone'}};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});