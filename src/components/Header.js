import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () => (
	<header>
		<h1>Expensify</h1>
		<NavLink to = "/" activeClassName = "is-active" exact = {true}>HOME</NavLink>
		<NavLink to = "/create" activeClassName = "is-active">CREATE</NavLink>
		<NavLink to = "/HELP" activeClassName = "is-active">HELP</NavLink>
	</header>
);
export default Header;