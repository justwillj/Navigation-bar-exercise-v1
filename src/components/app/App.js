import NavBar from "../navBar/NavBar";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <h1>Test</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
