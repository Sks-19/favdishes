import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { resultActions } from "./store/result";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleHome = () => {
    dispatch(resultActions.home());
  };
  const handleResult = () => {
    dispatch(resultActions.result());
  };

  return (
    <>
      <nav className="navbar row navbar-dark bg-dark px-4">
        <h3 style={{ textAlign: "center", color: "#fff" }}>
          Vote for your Favorite Dishes!
        </h3>

        <div style={{ textAlign: "center" }}>
          <button
            onClick={handleHome}
            className="btn btn-outline-success m-4 my-sm-0"
            type="button"
          >
            Vote
          </button>

          <button
            onClick={handleResult}
            className="btn btn-outline-danger m-4 my-sm-0"
            type="button"
          >
            Result
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
