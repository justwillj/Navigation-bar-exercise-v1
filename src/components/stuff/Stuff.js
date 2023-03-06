import { useState } from "react";
import "./Stuff.css";
import { Link } from "react-router-dom";
const Stuff = () => {
  const [stuff, setStuff] = useState([
    "PC",
    "Laptop",
    "Car",
    "Truck",
    "Mouse",
    "Hat",
    "Shirt",
    "TV",
    "Chair",
    "Desk",
  ]);
  return (
    <div>
      <h1>Stuff Page</h1>
      <div className="box">
        {stuff.map((item, index) => (
          <Link key={index} to={`/stuff/${item}`}>
            <button>{item}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Stuff;
