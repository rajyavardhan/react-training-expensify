import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesList} from '../../components/ExpensesList';
import expenses from '../fixtures/expenses';

test("Should Render expense List with expenses", () => {
	const wrapper = shallow(<ExpensesList expenses = {expenses}/>);
	expect(wrapper).toMatchSnapshot();
});
test("Should render expense list with empty array", ()=> {
	const wrapper = shallow(<ExpensesList expenses = {[]}/>);
	expect(wrapper).toMatchSnapshot();
});