import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ setEditing }) => {
  return (
    <nav>
      <div className="nav-wrapper col s12 m4 l7">
        <span className="brand-logo">Logo</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/Home" onClick={() => setEditing(false)}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/Add" onClick={() => setEditing(false)}>
              ADD_USER
            </Link>
          </li>
          <li>
            <Link to="/AddProject" onClick={() => setEditing(false)}>
              ADD_PROJECT
            </Link>
          </li>
          <li>
            <Link to="/UserList" onClick={() => setEditing(false)}>
              USERLIST
            </Link>
          </li>
          <li>
            <Link to="/ProjectTable">PROJECTS</Link>
          </li>
          <li>
            <Link to="/UserTable" onClick={() => setEditing(false)}>
              USERS
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/Registration" onClick={() => setEditing(false)}>
              Registration
            </Link>
          </li>
          <li>
            <Link to="/Login" onClick={() => setEditing(false)}>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
