
//setText

export const setTextFilter = (value = "") => ({
	type: 'SET_TEXT',
	value
});

//sort by amount
export const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT',
	sortValue: 'amount'
});

//sort by date
export const sortByDate = () => ({
	type: 'SORT_BY_DATE',
	sortValue: 'date'
});

//set start date

export const setStartDate = (startDate) => ({
	type: 'SET_START_DATE',
	startDate
});

//setEndDate

export const setEndDate = (endDate) => ({
	type: 'SET_END_DATE',
	endDate
});