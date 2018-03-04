import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';
let removeExpense, editExpense, id, history, wrapper;

beforeEach(() => {
	id = {params: {id:2}};
	history = {push: jest.fn()};
	editExpense = jest.fn();
	removeExpense = jest.fn();
	wrapper = shallow(<EditExpensePage 
					editExpense = {editExpense} 
					removeExpense = {removeExpense} 
					expense = {expenses[0]}
					match = {id}
					history = {history}/>);
});

test(`Should render EditExpensePage correctly`, () => {
	expect(wrapper).toMatchSnapshot();
});

test(`Should call removeExpense correctly`, () => {
	wrapper.find('button').simulate('click', 1);
	expect(removeExpense).toHaveBeenCalledWith(2);
});

test(`Should call onSubmit correctly`, () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
	expect(editExpense).toHaveBeenCalledWith(2,expenses[1]);
});

test(`Should call history correctly`, () => {	
	wrapper.find('button').simulate('click', 1);
	expect(history.push).toHaveBeenCalledWith('/');
});