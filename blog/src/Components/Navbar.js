import React from "react";
import logo from "../img/blog.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="white">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo blue-text">
            <img src={logo} alt="logo" className="responsive-img" width="40" />
          </Link>
          <ul id="nav-mobile" className="right">
            <Link to="/add-post">
              <li className="btn ">Add post</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
