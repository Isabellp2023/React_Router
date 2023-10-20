import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="logo">
        <img className="muñeco" src="public/logo/portada5.png" alt="el logo de la portada" />
      </div>
      <div className="title">
        <h1>REACT-ROUTER</h1>
      </div>
      <div className="ancos">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Palette</NavLink>
            </li>
            <li>
              <NavLink to="/botones">Botones</NavLink>
            </li>
            <li>
              <NavLink to="/simbolo">Simbolo</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

