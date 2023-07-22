import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { UidContext } from "./AppContext";
import Logout from "./Logout";

const Navbar = () => {
  const iud = useContext(UidContext);

  return (
    <div className="navigation">
      <ul>
        <li className="Logo">
          <NavLink to="/">B</NavLink>
        </li>
        {iud ? (
          <li to="/profil">Profil</li>
        ) : (
          <li>
            <NavLink to="/profil">Se connecter</NavLink>
          </li>
        )}

        <li>
          <NavLink to="/">Panier</NavLink>
        </li>
        <Logout />
      </ul>
    </div>
  );
};

export default Navbar;
