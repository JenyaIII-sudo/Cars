import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper col s7">
        <a href="#" className="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/Home">HOME</Link>
          </li>
          <li>
            <Link to="/Add">ADDUSER</Link>
          </li>
          <li>
            <Link to="/UserList">USERLIST</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
