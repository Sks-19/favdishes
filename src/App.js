import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Votes from "./vote";
import Login from "./login";
import Dishes from "./dishes";
import Result from "./pollResult";

function App() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const getDishes = async () => {
      let reqData = await fetch(
        `https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json`
      );
      let resData = await reqData.json();

      setDishes(resData);
    };
    getDishes();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login dishes={dishes} />} />
        <Route path="/home" element={<Dishes dishes={dishes} />} />
        <Route path="/poll" element={<Votes dishes={dishes} />} />
        <Route path="/pollresult" element={<Result dishes={dishes} />} />
      </Routes>
    </>
  );
}

export default App;
