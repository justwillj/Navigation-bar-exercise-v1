import NavBar from "../navBar/NavBar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Food from "../food/Food";
import { useState } from "react";

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
