import moment from 'moment';

const defaultFilterState = {
	text: '',
	sortBy: 'date',
	startDate: moment().startOf('month'),
	endDate: moment().endOf('month')
};

export default ( state = defaultFilterState, action) => {
	switch(action.type) {
		case 'SET_TEXT':
			return {...state, text: action.value};
		case 'SORT_BY_AMOUNT':
			return {...state, sortBy: action.sortValue}
		case 'SORT_BY_DATE':
			return {...state, sortBy: action.sortValue}
		case 'SET_START_DATE':
			return {...state, startDate: action.startDate}
		case 'SET_END_DATE':
			return {...state, endDate: action.endDate}
		default:
			return state;
	}
}