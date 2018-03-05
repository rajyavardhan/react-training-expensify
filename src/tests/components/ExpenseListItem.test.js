import React from 'react';
import ExpensesListItem from '../../components/ExpensesListItem';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';

test(`Should render ExpensesListItem correctly`, () => {
	const wrapper = shallow(<ExpensesListItem {...expenses[1]} />);
	expect(wrapper).toMatchSnapshot();
});
test(`Should render one paragraph items`, () => {
	const wrapper = shallow(<ExpensesListItem {...expenses[1]}/>);
	expect(wrapper.find('p').length).toBe(1);
});
test(`Should render the span text as 109500`, () => {
	const wrapper = shallow(<ExpensesListItem {...expenses[1]}/>);
	expect(wrapper.find('h2').length).toBe(1);
});