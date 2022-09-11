import React from "react";
import Navbar from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dishes.scss";

const Dishes = ({ dishes }) => {
  return (
    <>
      <Navbar />
      {dishes.map((dish) => {
        return (
          <>
            <div className="cardBox">
              <div className="card myCard mx-4" style={{ width: "250px" }}>
                <img
                  className="card-img-top"
                  src={dish.image}
                  alt="dishes.jpg"
                />
                <div className="card-body">
                  <h5 className="card-title">{dish.dishName}</h5>
                  <p className="card-text">{dish.description}</p>
                </div>
              </div>
            </div>
          </>
        );
      })}
      ;
    </>
  );
};
export default Dishes;
