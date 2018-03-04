import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import expenses from '../fixtures/expenses';
import moment from 'moment';
import {filters, altFilters} from '../fixtures/filters';

let setStartDate, setEndDate, wrapper, startDate, endDate, setTextFilter, sortByDate, sortByAmount;

beforeEach(() => {
	startDate = moment(200);
	endDate = moment(500);
	setStartDate = jest.fn();
	setEndDate = jest.fn();
	setTextFilter = jest.fn();
	sortByDate = jest.fn();
	sortByAmount = jest.fn();

	//filters = {text: '', sortBy: 'amount', startDate: moment(100), endDate: moment(2000)}	
	wrapper = shallow(<ExpenseListFilters 
			filters = {filters}
			setStartDate = {setStartDate}
			setEndDate = {setEndDate}
			setTextFilter = {setTextFilter}
			sortByAmount = {sortByAmount}
			sortByDate = {sortByDate}

	/>);
});
test('Should Render ExpenseListFilters correctly', () => {
	expect(wrapper).toMatchSnapshot();
});
test('Should Render ExpenseListFilters with alt data correctly', () => {
	wrapper.setProps({
		filters: altFilters
	});
	expect(wrapper).toMatchSnapshot();
});
test('Should call setStartDate', () => {
	wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
	expect(setStartDate).toHaveBeenLastCalledWith(startDate);
});
test('Should call setEndDate', () => {
	wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
	expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('On Focus Change should set the focus state', () => {
	wrapper.find('DateRangePicker').prop('onFocusChange')('endDate');
	expect(wrapper.state('calenderFocused')).toBe('endDate');
});

test("Should call setTextFilter", () => {
	wrapper.find('input').simulate('change',{target:{value: 'bill'}});
	expect(setTextFilter).toHaveBeenLastCalledWith('bill');
});

test("Should call sortByAmount", () => {
	wrapper.find('select').simulate('change',{target:{value: 'amount'}});
	expect(sortByAmount).toHaveBeenCalled();
});
test("Should call sortByDate", () => {
	wrapper.find('select').simulate('change',{target:{value: 'date'}});
	expect(sortByDate).toHaveBeenCalled();
});