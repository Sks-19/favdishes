import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dishes.scss";
import Navbar from "./navbar";
import { useDispatch } from "react-redux";
import { selActions } from "./store/selected";

const Dishes = (props) => {
  const dispatch = useDispatch();

  const [dishesVal, setDishesVal] = useState(props.dishes);
  const [disable, setDisable] = useState(true);
  const [storedDishes, setStoredDishes] = useState([]);

  const handleSelectRank = (id, rankId) => {
    let result;
    if (rankId === "rank1") {
      result = dishesVal.map((data) => {
        if (data.id === id) {
          return {
            ...data,
            isRank1: true,
            isRank2: false,
            isRank3: false,
          };
        }
        return { ...data, isRank1: false };
      });
    } else if (rankId === "rank2") {
      result = dishesVal.map((data) => {
        if (data.id === id) {
          return {
            ...data,
            isRank2: true,
            isRank1: false,
            isRank3: false,
          };
        }
        return { ...data, isRank2: false };
      });
    } else {
      result = dishesVal.map((data) => {
        if (data.id === id) {
          return {
            ...data,
            isRank3: true,
            isRank2: false,
            isRank1: false,
          };
        }
        return { ...data, isRank3: false };
      });
    }

    const filteredResult = result.filter(
      (res) => res.isRank1 || res.isRank2 || res.isRank3
    );

    if (filteredResult.length === 3) {
      setDisable(false);
    }

    setDishesVal(result);
  };

  useEffect(() => {
    setStoredDishes(JSON.parse(localStorage.getItem("dishes")));
  }, []);

  const handleSubmit = () => {
    const selectedDishesId = dishesVal
      .filter((dish) => dish.isRank1 || dish.isRank2 || dish.isRank3)
      .map((dish) => dish.id);

    dispatch(selActions.addSelected(selectedDishesId));

    const updatedDishes = storedDishes.map((dish) => {
      if (selectedDishesId.includes(dish.id)) {
        const dishFromSelection = dishesVal.find((d) => d.id === dish.id);
        return {
          ...dish,
          points: dishFromSelection.isRank1
            ? +dish.points + 30
            : dishFromSelection.isRank2
            ? +dish.points + 20
            : +dish.points + 10,
        };
      }
      return dish;
    });

    localStorage.setItem("dishes", JSON.stringify(updatedDishes));
  };

  const handleEditResponse = () => {
    const selectedDishesId = dishesVal
      .filter((dish) => dish.isRank1 || dish.isRank2 || dish.isRank3)
      .map((dish) => dish.id);

    const updatedDishes = storedDishes.map((dish) => {
      if (selectedDishesId.includes(dish.id)) {
        const dishFromSelection = dishesVal.find((d) => d.id === dish.id);
        return {
          ...dish,
          points: dishFromSelection.isRank1
            ? +dish.points - 30
            : dishFromSelection.isRank2
            ? +dish.points - 20
            : +dish.points - 10,
        };
      }
      return dish;
    });
    setDisable(true);

    localStorage.setItem("dishes", JSON.stringify(updatedDishes));
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="d-flex row justify-content-between p-4">
          <div style={{ textAlign: "center" }}>
            <h2>List of Foods</h2>
          </div>
          <div style={{ textAlign: "center" }}>
            <button
              className="btn btn-outline-primary p-2 px-4 m-4 text-dark fw-bold roundeed-3"
              disabled={disable}
              onClick={handleEditResponse}
            >
              Edit
            </button>
            <button
              className="btn btn-outline-success p-2 px-4 m-4 text-dark fw-bold roundeed-3"
              disabled={disable}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        {dishesVal.map((dish) => {
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
                    <p className="card-text text-dark">{dish.description}</p>

                    <div
                      className="btn-group text-center d-block mx-2"
                      role="group"
                    >
                      <input
                        type="radio"
                        disabled={!disable}
                        className="btn-check"
                        checked={dish.isRank1}
                      />
                      <label
                        className="btn btn-outline-danger"
                        style={{ fontSize: "12px" }}
                        onClick={() => handleSelectRank(dish.id, "rank1")}
                      >
                        Rank 1
                      </label>
                      <input
                        type="radio"
                        disabled={!disable}
                        className="btn-check"
                        checked={dish.isRank2}
                      />
                      <label
                        className="btn btn-outline-primary"
                        style={{ fontSize: "12px" }}
                        onClick={() => handleSelectRank(dish.id, "rank2")}
                      >
                        Rank 2
                      </label>

                      <input
                        type="radio"
                        disabled={!disable}
                        className="btn-check"
                        checked={dish.isRank3}
                      />
                      <label
                        className="btn btn-outline-success"
                        style={{ fontSize: "12px" }}
                        onClick={() => handleSelectRank(dish.id, "rank3")}
                      >
                        Rank 3
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        ;
      </div>
    </>
  );
};

export default Dishes;
