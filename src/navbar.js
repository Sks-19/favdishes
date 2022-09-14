import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar row navbar-dark bg-dark px-4">
        <h3 style={{ textAlign: "center" }}>Vote for your Favorite Dishes!</h3>

        <div style={{ textAlign: "center" }}>
          <NavLink
            to="/home"
            className="btn btn-outline-success m-4 my-sm-0"
            type="button"
          >
            Vote
          </NavLink>

          <NavLink
            to="/pollresult"
            className="btn btn-outline-danger m-4 my-sm-0"
            type="button"
          >
            Result
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
