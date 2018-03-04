import uuid from 'uuid';

//Action generators
//ADD_EXPENSE
export const addExpense  = ({createdAt = 0, description = '', notes = '', amount = 0} = {}) => ({
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

export const removeExpense = ({removeExpenseId = -1} = {}) => ({
	type: 'REMOVE_EXPENSE',
	removeExpenseId
});

//Edit expense
export  const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});