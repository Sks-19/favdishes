import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pollResult.css";
import DishesData from "./dishesData";
import { firstChoice, secondChoice, thirdChoice } from "./vote";

const PollResult = () => {
  let first = DishesData.findIndex((obj) => obj.dishName === firstChoice);
  let second = DishesData.findIndex((obj) => obj.dishName === secondChoice);
  let third = DishesData.findIndex((obj) => obj.dishName === thirdChoice);
  DishesData[first].value += 30;
  DishesData[second].value += 20;
  DishesData[third].value += 10;

  return (
    <>
      <div className="container p-4">
        <NavLink
          to="/"
          type="button"
          className="btn btn-outline-danger btnLogout my-1"
        >
          Logout
        </NavLink>

        <h1 style={{ textAlign: "center" }} className="my-4">
          Favorite Dish Poll Result
        </h1>
        {DishesData.sort((a, b) =>
          a.value < b.value ? 1 : b.value < a.value ? -1 : 0
        ).map((val) => {
          return (
            <>
              <div className="m-2">
                <label>{val.dishName}</label>
                <div className="progress my-2">
                  <div
                    id="progressbar-1"
                    className="progress-bar progress-bar-primary"
                    role="progressbar"
                    style={{ width: `${val.value}px` }}
                  >
                    {val.value}
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
