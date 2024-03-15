import { Link } from "react-router-dom";
import "./_Nav.scss";

export default function Nav() {
  return (
    <nav>
      <div className="navLinkContainer">
        <Link to={"/"} className="linkcustom">
          Current Employees
        </Link>
      </div>
      <div className="navLinkContainer">
        <Link to={"/create"} className="linkcustom">
          Add Employee
        </Link>
      </div>
    </nav>
  );
}
