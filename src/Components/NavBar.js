import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper col s12 m4 l7">
        <span className="brand-logo">Logo</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/Home">HOME</Link>
          </li>
          <li>
            <Link to="/Add">ADD_USER</Link>
          </li>
          <li>
            <Link to="/AddProject">ADD_PROJECT</Link>
          </li>
          <li>
            <Link to="/UserList">USERLIST</Link>
          </li>
          <li>
            <Link to="/ProjectTable">PROJECTS</Link>
          </li>
          <li>
            <Link to="/UserTable">USERS</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
