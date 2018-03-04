import React from 'react';
import {connect} from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import {DateRangePicker} from 'react-dates';

export class ExpenseListFilters extends React.Component {
	state = {
		calenderFocused: null
	}
	onDatesChange = ({startDate, endDate}) => {
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
	}
	onFocusChange = (calenderFocused) => {
		this.setState(()=>({
			calenderFocused
		}));
	}
	onInputChange = (e) => {
		this.props.setTextFilter(e.target.value);
	}
	onSelectChange = (e) => {
		if(e.target.value == 'date') {
			this.props.sortByDate();
		} else if(e.target.value == 'amount') {
			this.props.sortByAmount();
		}					
	}
	render() {
		return (
			<div>
				<input type = 'text' value = {this.props.filters.text}
					onChange = {this.onInputChange}
				/>
				<select value = {this.props.filters.sortBy} onChange = {this.onSelectChange}>
					<option value = 'date'>Date</option>
					<option value = 'amount'>Amount</option>
				</select>
				<DateRangePicker 
				 startDate = {this.props.filters.startDate}
				 endDate = {this.props.filters.endDate}
				 onDatesChange = {this.onDatesChange}
				 focusedInput = {this.state.calenderFocused}
				 onFocusChange = {this.onFocusChange}
				 showClearDates = {true}
				 numberOfMonths = {1}
				 isOutsideRange = {() => false}
				/>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
	setStartDate: (startDate) => dispatch(setStartDate(startDate)),
	setEndDate: (endDate) => dispatch(setEndDate(endDate)),
	setTextFilter: (value) => dispatch(setTextFilter(value)),
	sortByDate: () => dispatch(sortByDate()),
	sortByAmount: () => dispatch(sortByAmount())
});
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);