import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Login from "./login";
import Dishes from "./dishes";
import Result from "./pollResult";
import dishesData from "./database/db.json";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [dishes, setDishes] = useState([]);

  const getDishes = () => {
    axios
      .get(
        `https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json`
      )
      .then((res) => {
        setDishes(
          res.data.map((data) => ({
            ...data,
            isRank1: false,
            isRank2: false,
            isRank3: false,
          }))
        );
      });
  };

  useEffect(() => {
    getDishes();
    if (!localStorage.getItem("dishes")) {
      localStorage.setItem(
        "dishes",
        JSON.stringify(dishesData.map((dish) => ({ ...dish, points: 0 })))
      );
    }
  }, []);

  return (
    <>
      {!isLoggedIn && <Login dishes={dishes} />}
      {/* {isLoggedIn && <Dishes dishes={dishes} />} */}
      <Routes>
        <Route path="/favdishes" element={<Login dishes={dishes} />} />
        {isLoggedIn && (
          <Route path="/home" element={<Dishes dishes={dishes} />} />
        )}
        <Route path="/pollresult" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
