import NavBar from "../navBar/NavBar";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Food from "../food/Food";
import Stuff from "../stuff/Stuff";
import { useState } from "react";
import Item from "../item/Item";
import PageNotFound from "../pageNotFound/PageNotFound";
import Home from "../home/Home";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const [foodPageStatus, setFoodPageStatus] = useState(false);

  const [stuffPageStatus, setStuffPageStatus] = useState(false);

  const loginIn = () => {
    setLoggedIn(true);
    setFoodPageStatus(true);
    setStuffPageStatus(false);
  };

  const signOut = () => {
    setLoggedIn(false);
  };

  const stuffPageActive = () => {
    setStuffPageStatus(true);
    setFoodPageStatus(false);
  };

  return (
    <BrowserRouter>
      <div>
        <NavBar
          onClick={loginIn}
          logStatus={loggedIn}
          pageStatus={foodPageStatus}
          stuffPageStatus={stuffPageStatus}
          logout={signOut}
          stuffPage={stuffPageActive}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food" element={<Food />} />
          <Route path="/Stuff" element={<Stuff />} />
          <Route path="/stuff/:item" element={<Item />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
