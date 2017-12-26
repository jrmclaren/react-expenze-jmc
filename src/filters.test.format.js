import moment from 'moment';
//src/Reducers/filters.js
import filtersReducer from '../../Reducers/filters.js';

test('should setup default filter values ', () => {
  const state = filtersReducer(undefined, {
    type: '@@INIT'
  });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, {
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
  });
  expect(state.sortBy).toBe('amount')
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: null,
    endDate: null,
    sortBy: 'amount'
  };
  const action = {
    type: 'SORT_BY_DATE',
    sortBy: 'date'
  };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const text = 'test';
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  }
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});
test('should set startDate filter ', () => {
  const startDate = moment(0);
  const action = {
    type: 'SET_START_DATE',
    startDate
  }
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(startDate);
});
test('should set endDate filter', () => {
  const endDate = moment(0);
  const action = {
    type: 'SET_END_DATE',
    endDate: endDate
  }
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(endDate);
});