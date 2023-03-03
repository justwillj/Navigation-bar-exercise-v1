import NavBar from "../navBar/NavBar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Food from "../food/Food";
import Stuff from "../stuff/Stuff";
import { useState } from "react";
import Item from "../item/Item";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const test = () => {
    setLoggedIn(true);
  };

  const signOut = () => {
    setLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <div>
        <NavBar onClick={test} test={loggedIn} logout={signOut} />
        <Routes>
          <Route onClick={test} path="/food" element={<Food />} />
          <Route onClick={test} path="/Stuff" element={<Stuff />} />
          <Route path="/stuff/:item" element={<Item />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
