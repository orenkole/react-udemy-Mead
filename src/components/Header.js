import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink exact={true} activeClassName="is-active" to="/">Dashboard</NavLink>
    <NavLink exact={true} activeClassName="is-active" to="/help">Help</NavLink>
    <NavLink exact={true} activeClassName="is-active" to="/create">Create Expense</NavLink>
  </header>
);
export default Header;