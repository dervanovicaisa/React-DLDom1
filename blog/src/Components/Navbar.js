import React from "react";
import logo from "../img/blog.png"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="white">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo blue-text">
            <img src={logo} alt="logo" className="responsive-img" width="40" />
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
