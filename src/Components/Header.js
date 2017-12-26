import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (
  <header>
			<h1> Expenszes </h1>
			<NavLink to='/' activeClassName={"is-active"} exact>Home</NavLink>
			<br />
			<NavLink to='/create' activeClassName={"is-active"} >New Expense</NavLink>
			<br />
			
			<div> </div>
		</header>
);
export default Header;

