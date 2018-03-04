import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('Should Remove Expense', () => {
	const action =  removeExpense({id: 123});
	expect(removeExpense({removeExpenseId: 123})).toEqual({type: 'REMOVE_EXPENSE', removeExpenseId: 123}); 
});
test('Should Edit the Expense', () => {
	const action = editExpense(123, {description: 'rajya'});
	expect(action).toEqual({type: 'EDIT_EXPENSE', id: 123, updates: {description: 'rajya'}});
});
test('Should set upa Add the expense', () => {
	const expense = {createdAt: 0, notes: 'something', description: 'somethingelse', amount: 100};
	const action = addExpense(expense);
	expect(action).toEqual({type: 'ADD_EXPENSE', 
		expense: {
			id: expect.any(String),
			...expense
		}
	});
});
test('Should set up add Expense with default values',() => {
	expect(addExpense()).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			id: expect.any(String),
			amount: expect.any(Number),
			description: '',
			notes: '',
			createdAt: expect.any(Number)
		}
	});
});