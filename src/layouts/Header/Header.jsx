import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Nav from "../Nav/Nav";
import "./_Header.scss";

export default function Header() {
  return (
    <header>
      <div className="logoContainer">
        <Link to={"/"}>
          <div className="logo">
            <img src={Logo} alt="Logo Wealth Health" />
          </div>
          <div className="name">
            Wealth Health - <span>HRnet</span>
          </div>
        </Link>
      </div>
      <div className="navContainer">
        <Nav />
      </div>
    </header>
  );
}
