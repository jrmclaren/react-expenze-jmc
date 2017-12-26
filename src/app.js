import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ID } from './utils';
import AppRouter from './Routers/AppRouter';
import configureStore from './Store/configureStore';
import { addExpense } from './Actions/expenses';
import { setTextFilter } from './Actions/filters';
import getVisibleExpenses from './Selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({
  description: 'Water Bill',
  amount: 2345,
  startDate: 244,
  endDate: 245
}));
store.dispatch(addExpense({
  description: 'Gas Bill',
  amount: 8909,
  createdAt: 1000
}));
store.dispatch(addExpense({
  description: 'Rent',
  amount: 23324345,
  startDate: 244,
  endDate: 245
}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
store.subscribe(() => ( console.log(visibleExpenses) ));

const jsx = (
<Provider store={store}>
			<AppRouter />
</Provider>
);
ReactDOM.render(jsx, ID('app'));