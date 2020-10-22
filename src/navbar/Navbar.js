import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar_group">
        <Link className="home_text" to="/">
          Home
        </Link>
        <Link className="about_text" to="/about">
          About us
        </Link>
        <Link className="shop_text" to="/shop">
          Shop now
        </Link>
      </div>
    </>
  );
};

export default Navbar;
