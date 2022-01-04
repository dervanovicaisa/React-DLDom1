import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="blue-grey lighten-5">
        <div className="nav-wrapper p-4">
          <Link to="/" className="brand-logo blue-text">
            Blog
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="btn blue">
              <Link to="/add-post">Add post</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
