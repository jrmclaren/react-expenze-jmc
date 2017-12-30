import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../Components/EditExpensePage';
import expenses from '../fixtures/expenses';

// Part two  
// Make test file
// should render edit expense page, snapshot
// show handle editExpense
// spies
// should handle startRemoveExpense
// spies

let editExpense,
  startRemoveExpense,
  wrapper,
  history
beforeEach(() => {
  editExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = {
    push: jest.fn()
  };
  wrapper = shallow(<EditExpensePage onSubmit={editExpense} startRemoveExpense={startRemoveExpense} history={history} expense={expenses[1]} />);
});

test('should render edit expense page, correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  const value = 'Test'
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('should handle remove expense', () => {
  const id = expenses[1].id;
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({
    id: id
  });
});