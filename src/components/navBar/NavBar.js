import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = ({ test }) => {
  return (
    <nav>
      <div className="header">
        <img src="/logo192.png" alt="logo"></img>
        <h1>The Best Company</h1>
      </div>
      <ul>
        <Link to="/food">
          <li>Login</li>
        </Link>
        {test ? <li>Food</li> : null}
        {test ? <li>Food</li> : null}
      </ul>
    </nav>
  );
};
export default NavBar;
