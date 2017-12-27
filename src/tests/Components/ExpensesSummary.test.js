import React from 'react';
import { ExpensesSummary } from '../../Components/ExpensesSummary';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('should render single expense summary correctly', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />)
  expect(wrapper).toMatchSnapshot();
});

test('should render multiple expense summary correctly', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={234929394829} />)
  expect(wrapper).toMatchSnapshot();
});