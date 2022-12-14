import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar";
import "./pollResult.css";
import { useDispatch } from "react-redux";
import { authActions } from "./store/auth";
import { resultActions } from "./store/result";

const PollResult = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
    dispatch(resultActions.home());
  };

  const votedDishes = JSON.parse(localStorage.getItem("dishes"));

  return (
    <>
      <Navbar />
      <div className="container p-4">
        <div className="row">
          <div className="col col-8">
            <h1 style={{ textAlign: "center" }} className="m-4">
              Poll Result
            </h1>
          </div>
          <div className="col col-4">
            <button
              type="button"
              className="btn btn-outline-danger btnLogout m-4"
              onClick={logoutHandler}
            >
              Logout
            </button>
          </div>
        </div>
        {votedDishes
          .sort((a, b) =>
            a.points < b.points ? 1 : b.points < a.points ? -1 : 0
          )
          .map((val) => {
            return (
              <>
                <div className="m-2" key={val.id}>
                  <label id={`highlighted${val.id}`}>{val.dishName}</label>
                  <div className="progress my-2">
                    <div
                      id="progressbar-1"
                      className="progress-bar progress-bar-success"
                      role="progressbar"
                      style={{ width: `${val.points}px` }}
                    >
                      {val.points} points
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default PollResult;
