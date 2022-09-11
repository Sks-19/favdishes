import React from "react";
import { NavLink } from "react-router-dom";
import "./vote.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

let firstChoice;
let secondChoice;
let thirdChoice;

const favDishes = (e) => {
  e.preventDefault();
  firstChoice = document.querySelector(".firstChoice").value;
  secondChoice = document.querySelector(".secondChoice").value;
  thirdChoice = document.querySelector(".thirdChoice").value;
  console.log(firstChoice, secondChoice, thirdChoice);

  document.querySelector(".thanksMessage").classList.remove("hidden");
};

const Votes = ({ dishes }) => {
  return (
    <>
      <h2 className="m-4">What's Your All-Time-Favorite Food?</h2>
      <div className="row px-4">
        <div className="col">
          <h3>List of Dishes:</h3>
          {dishes.map((dish) => {
            return (
              <>
                <p>
                  <span>{dish.id}. </span>
                  {dish.dishName}
                </p>
              </>
            );
          })}
        </div>
        <div className="col">
          <h3>Choose your top 3 favorite dishes:</h3>
          <form onSubmit={favDishes}>
            <div className="form-group">
              <input
                type="text"
                name="firstFav"
                className="firstChoice form-control my-2"
                placeholder="Enter your first fav.."
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="secondFav"
                className="secondChoice form-control my-2"
                placeholder="Enter your second fav.."
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="thirdFav"
                className="thirdChoice form-control my-2"
                placeholder="Enter your third fav.."
              />
            </div>
            <button
              type="submit"
              className="btn btn-outline-primary w-100 my-4"
            >
              Vote!
            </button>
            <div className="thanksMessage hidden">
              <p className="thanks" style={{ color: "green" }}>
                Thanks for voting!
              </p>
              <NavLink
                to="/pollresult"
                type="button"
                className="btn btn-outline-primary w-100 "
              >
                See your result here
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Votes;
export { firstChoice, secondChoice, thirdChoice };
