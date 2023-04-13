import React from 'react';
import { Link } from 'react-router-dom';
import "./NavigationBar.css"

const NavigationBar = () => {
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Google Developers Student Clubs</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Registration">Registration</Link>
        </li>
        <li>
          <Link to="/SignIn">SignIn</Link>
        </li>
        <li>
          <Link to="/AdminReg">Admin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
