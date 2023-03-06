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
  //Keeps track if the user is logged in or not
  const [loggedIn, setLoggedIn] = useState(false);

  //Keeps track if the user is on the food page or not
  const [foodPageStatus, setFoodPageStatus] = useState(false);

  //Keeps track if the user is on the stuff page or not
  const [stuffPageStatus, setStuffPageStatus] = useState(false);

  /**
   * This will log the user in and show the other elements of the navbar
   */
  const loginIn = () => {
    setLoggedIn(true);
    setFoodPageStatus(true);
    setStuffPageStatus(false);
  };

  /**
   * This will take the user back to the main page and hide the other element of the navbar
   */
  const signOut = () => {
    setLoggedIn(false);
  };

  /**
   * This will apply styling to the navbar to let the user know they are on the  Stuff page
   */
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
