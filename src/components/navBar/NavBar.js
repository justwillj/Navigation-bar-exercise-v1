import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = ({
  logStatus,
  pageStatus,
  onClick,
  logout,
  stuffPageStatus,
  stuffPage,
}) => {
  return (
    <nav>
      <div className="header">
        <img src="/logo192.png" alt="logo"></img>
        <h2>The Best Company</h2>
      </div>
      <ul>
        <Link to="/food">
          {!logStatus ? <li onClick={onClick}>Login</li> : null}
        </Link>
        <Link to="/food">
          {logStatus ? (
            <li onClick={onClick} className={pageStatus ? "active" : null}>
              Food
            </li>
          ) : null}
        </Link>
        <Link to="/stuff">
          {logStatus ? (
            <li
              onClick={stuffPage}
              className={stuffPageStatus ? "active" : null}
            >
              Stuff
            </li>
          ) : null}
        </Link>
        <Link to="/">
          {logStatus ? <li onClick={logout}>Logout</li> : null}
        </Link>
      </ul>
    </nav>
  );
};
export default NavBar;
