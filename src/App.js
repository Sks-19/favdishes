import { useEffect, useState } from "react";
import axios from "axios";
import Login from "./login";
import Dishes from "./dishes";
import Result from "./pollResult";
import dishesData from "./database/db.json";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isResult = useSelector((state) => state.result.isResult);
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
      {isLoggedIn && !isResult && <Dishes dishes={dishes} />}
      {isResult && <Result dishes={dishes} />}
    </>
  );
}

export default App;
