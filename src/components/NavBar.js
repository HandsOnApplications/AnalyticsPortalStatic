import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => (
  <nav className="column is-2 menu">
    <p className="menu-label">Menu</p>
    <ul className="menu-list">
      <NavLink to="/tileReports" activeClassName="active-link">
        Reports
      </NavLink>
      {/* <NavLink to="/products" activeClassName="active-link">
        Products
      </NavLink>
      <NavLink to="/about" activeClassName="active-link">
        About
      </NavLink> */}
    </ul>
    {props.children}
  </nav>
);

export default NavBar;
