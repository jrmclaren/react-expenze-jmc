import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../Components/ExpenseDashboardPage';
import AddExpensePage from '../Components/AddExpensePage';
import EditExpensePage from '../Components/EditExpensePage';
import HelpPage from '../Components/HelpPage';
import NotFoundPage from '../Components/NotFoundPage';
import LoginPage from '../Components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
		<div>
			<Switch>
				<PublicRoute path="/" component={ LoginPage } exact={true} /> 
				<PrivateRoute path="/dashboard" component={ ExpenseDashboardPage }  /> 
				<PrivateRoute path="/create" component={ AddExpensePage } />
				<PrivateRoute path="/edit/:id" component={ EditExpensePage } />
				<Route path="/help" component={ HelpPage } />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
);
export default AppRouter;
