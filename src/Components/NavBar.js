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
            <Link to="/Add">ADDCARS</Link>
          </li>
          <li>
            <Link to="/Cars">CARS</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
