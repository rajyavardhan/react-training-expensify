import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test(`Should render ExpenseForm correctly`, () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
});

test(`Should render ExpenseForm form with expense data`, () => {
	const wrapper = shallow(<ExpenseForm expense = {expenses[1]}/>);
	expect(wrapper).toMatchSnapshot()
});

test(`Should render invalid form submission`, () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper.find('p').length).toBe(0);
	expect(wrapper.state('errorState')).toBe(false);
	expect(wrapper).toMatchSnapshot();
	wrapper.find('form').simulate('submit',{preventDefault: () => (0)});
	expect(wrapper.find('p').length).toBe(1);
	expect(wrapper.state('errorState')).toBe(true);
	expect(wrapper).toMatchSnapshot();
});

test(`Should set description on input change`, () => {
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(0).simulate('change',{target:{value: 'GasBill'}});
	expect(wrapper.state('description')).toBe('GasBill');
});

test(`Should set note on textarea change`,() => {
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('textarea').simulate('change',
		{
			target: {
				value: 'Bills are not permanant'
			}
		});
	expect(wrapper.state('notes')).toBe('Bills are not permanant');
});

test(`Should set amount if valid input`, () => {
	const amount = '23.34';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(1).simulate('change',{
		target: {
			value: amount
		}
	});
	expect(wrapper.state('amount')).toBe(amount);
});

test(`Should set amount if invalid input`, () => {
	const amount = '23.341';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(1).simulate('change',{
		target: {
			value: amount
		}
	});
	expect(wrapper.state('amount')).toBe('');
});

test(`Should call on submit form for valid form submission`, () => {
	const onSubmitSpy = jest.fn();
	const wrapper = shallow(<ExpenseForm expense = {expenses[0]} onSubmit = {onSubmitSpy}/>);
	wrapper.find('form').simulate('submit',{preventDefault: () => (0)});
	expect(onSubmitSpy).toHaveBeenLastCalledWith({
		description: expenses[0].description,
		notes: expenses[0].notes,
		amount: expenses[0].amount*100,
		createdAt: expenses[0].createdAt
	});
});

test(`Should set new date on date change`, () => {
	const now = moment();
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('SingleDatePicker').prop('onDateChange')(now);
	expect(wrapper.state('createdAt')).toEqual(now);
});

test(`Should set new date on date change`, () => {
	const focused = true;
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
	expect(wrapper.state('calenderFocused')).toBe(focused);
});





