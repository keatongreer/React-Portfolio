import { Link, useLocation } from "react-router-dom";
import "../styles/Navigation.css";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
export default function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="navigation">
      <li className="navItem">
        <Link to="/" className={currentPage === "/" ? "link active" : "link"}>
          About Me
        </Link>
      </li>
      <li className="navItem">
        <Link
          to="/Portfolio"
          className={currentPage === "/Portfolio" ? "link active" : "link"}
        >
          Portfolio
        </Link>
      </li>
      <li className="navItem">
        <Link
          to="/Contact"
          className={currentPage === "/Contact" ? "link active" : "link"}
        >
          Contact
        </Link>
      </li>
      <li className="navItem">
        <Link
          to="/Resume"
          className={currentPage === "/Resume" ? "link active" : "link"}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}
