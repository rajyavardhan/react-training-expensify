const getExpensesTotal = (expenses) => {
	return Array.isArray(expenses)? expenses
									.map((expense) => expense.amount)
									.reduce((amount1, amount2) => (amount1 + amount2),0) : ''
}
export default getExpensesTotal;