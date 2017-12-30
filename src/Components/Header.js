import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../Actions/auth';

export const Header = ({ startLogout }) => (
  <header>
			<h1> Expenszes </h1>
			<NavLink to='/' activeClassName={"is-active"} exact>Home</NavLink>
			<br />
			<NavLink to='/create' activeClassName={"is-active"} >New Expense</NavLink>
			<br />
			<button onClick={startLogout}>Logout</button> 
			<div> </div>
		</header>
);

const mapDispatchToProps = dispatch => ({
	startLogout: () => dispatch(startLogout())
});
export default  connect(undefined, mapDispatchToProps)(Header);

