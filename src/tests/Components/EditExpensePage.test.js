import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../Components/EditExpensePage';
import expenses from '../fixtures/expenses';

// Part two  
// Make test file
// should render edit expense page, snapshot
// show handle editExpense
// spies
// should handle removeExpense
// spies

let editExpense,
  removeExpense,
  wrapper,
  history
beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = {
    push: jest.fn()
  };
  wrapper = shallow(<EditExpensePage onSubmit={editExpense} removeExpense={removeExpense} history={history} expense={expenses[1]} />);
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
  expect(removeExpense).toHaveBeenLastCalledWith({
    id: id
  });
});