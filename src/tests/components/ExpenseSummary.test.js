import React from 'react';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import {shallow} from 'enzyme';
import {altExpenses} from '../fixtures/expenses';

test("Should render expenses summary correctly with no data", () => {
	const wrapper = shallow(<ExpensesSummary expenses = {[]}/>);
	expect(wrapper).toMatchSnapshot()
});

test("Should render expenses summary correctly with some data", () => {
	const wrapper = shallow(<ExpensesSummary expenses = {altExpenses} />);
	expect(wrapper).toMatchSnapshot();
});