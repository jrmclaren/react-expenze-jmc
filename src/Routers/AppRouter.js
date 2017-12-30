import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../Components/ExpenseDashboardPage';
import AddExpensePage from '../Components/AddExpensePage';
import EditExpensePage from '../Components/EditExpensePage';
import HelpPage from '../Components/HelpPage';
import NotFoundPage from '../Components/NotFoundPage';
import Header from '../Components/Header';
import LoginPage from '../Components/LoginPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
		<div>
			<Header /> 
			<Switch>
				<Route path="/" component={ LoginPage } exact={true} /> 
				<Route path="/dashboard" component={ ExpenseDashboardPage }  /> 
				<Route path="/create" component={ AddExpensePage } />
				<Route path="/edit/:id" component={ EditExpensePage } />
				<Route path="/help" component={ HelpPage } />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
);
export default AppRouter;
