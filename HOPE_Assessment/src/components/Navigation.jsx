import { Link } from "react-router-dom";
import "../css/Nav.css";

const Navigation = () => (
  <nav>
    <ul id="navbar">
      <li className="nav-items">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-items">
        <Link to="/form">Form</Link>
      </li>
      <li className="nav-items">
        <Link to="/items">All items</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
