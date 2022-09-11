import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark px-4">
        <a className="navbar-brand" href="/">
          Welcome Shubham
        </a>

        <NavLink
          to="/poll"
          className="btn btn-outline-success my-2 my-sm-0"
          type="button"
        >
          Click here to vote
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
