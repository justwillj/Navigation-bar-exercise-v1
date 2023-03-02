import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = ({ test, onClick, logout }) => {
  return (
    <nav>
      <div className="header">
        <img src="/logo192.png" alt="logo"></img>
        <h1>The Best Company</h1>
      </div>
      <ul>
        <Link to="/food">
          {!test ? <li onClick={onClick}>Login</li> : null}
        </Link>
        <Link to="/food">{test ? <li>Food</li> : null}</Link>
        <Link to="/stuffs">{test ? <li>Stuff</li> : null}</Link>
        <Link to="/">{test ? <li onClick={logout}>Logout</li> : null}</Link>
      </ul>
    </nav>
  );
};
export default NavBar;
