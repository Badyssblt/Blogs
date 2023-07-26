import React, { useEffect } from "react";
import "../styles/ProfilComp.css";
import { useState } from "react";
import Account from "./Profile/Account";
import Paramètre from "./Profile/Paramètre";
import Sécurité from "./Profile/Sécurité";
import AjouterArticle from "./Profile/AjouterArticle";
import { useSelector } from "react-redux";

const ProfilComp = () => {
  const [component, setComponent] = useState("account");
  const userData = useSelector((state) => state.userReducer);
  const [admin, setAdmin] = useState(false);

  const isAdmin = () => {
    if (userData.admin) setAdmin(true);
  };
  useEffect(() => {
    isAdmin();
  }, [userData, isAdmin]);

  const handleChange = (comp) => {
    setComponent(comp);
  };

  return (
    <div className="container">
      <div className="left-nav">
        <ul>
          <li className="item" onClick={() => handleChange("account")}>
            Mon compte
          </li>
          <li className="item" onClick={() => handleChange("parameter")}>
            Paramètre
          </li>
          <li className="item" onClick={() => handleChange("security")}>
            Sécurité
          </li>
          {admin && (
            <li className="item" onClick={() => handleChange("add")}>
              Ajouter un article
            </li>
          )}
        </ul>
      </div>
      <div className="main-container">
        {component === "account" ? (
          <Account />
        ) : component === "parameter" ? (
          <Paramètre />
        ) : component === "security" ? (
          <Sécurité />
        ) : (
          component === "add" && <AjouterArticle />
        )}
      </div>
    </div>
  );
};

export default ProfilComp;
