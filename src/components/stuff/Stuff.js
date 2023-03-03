import { useState } from "react";
import "./Stuff.css";
import { Link } from "react-router-dom";
const Stuff = () => {
  const [stuff, setStuff] = useState(["PC", "Laptop", "Car", "Truck", "Mouse"]);
  return (
    <div>
      <h1>Stuff Page</h1>
      {stuff.map((item, index) => (
        <Link key={index} to={`/stuff/${item}`}>
          <h1>{item}</h1>
        </Link>
      ))}
    </div>
  );
};
export default Stuff;
