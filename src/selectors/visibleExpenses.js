import moment from 'moment';
export default (expenses, {text, startDate, endDate, sortBy}) => {
	return expenses.filter((expense)=> {
		const startDateMatch =  startDate? startDate.isSameOrBefore(moment(expense.createdAt), 'day'): true;
		const endDateMatch =  endDate? endDate.isSameOrAfter(moment(expense.createdAt), 'day'): true;
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
		return (textMatch && startDateMatch && endDateMatch);
	}).sort((expense1, expense2)=>{
		if(sortBy == 'date') return expense1.createdAt < expense2.createdAt;
		if(sortBy == 'amount') return expense1.amount > expense2.amount;
	})
}