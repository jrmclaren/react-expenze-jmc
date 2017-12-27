import React from 'react';
import ExpensesSummary from '../../Components/ExpensesSummary';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<ExpensesSummary expenses={expenses}/>);
});

test('should render default message correctly', () => {
  wrapper.setProps({
    expenses: {}
  });
  expect(wrapper).toMatchSnapshot();
});

test('should render single expense sumarry correctly', () => {
  let expense = [expenses[0]]
  wrapper.setProps({
    expenses: expense
  });
  expect(wrapper).toMatchSnapshot();
});

test('should render multiple expense summary correctly', () => {
  expect(wrapper).toMatchSnapshot();
});