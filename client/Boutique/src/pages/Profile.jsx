import React, { useContext, useState } from "react";
import Navbar from "../component/Navbar";
import Log from "../component/Log";
import Register from "../component/Register";
import { UidContext } from "../component/AppContext";

const Profile = () => {
  const uid = useContext(UidContext);
  const [signUpModal, setSignUpModal] = useState(true);
  const [signInModal, setSignInModal] = useState(false);
  const [titleSideForm, setTitleSideForm] = useState("Bon retour !");

  const handleModals = (e) => {
    if (e.target.id === "register") {
      setSignUpModal(true);
      setTitleSideForm("Bienvenue !");
      setSignInModal(false);
    } else if (e.target.id === "login") {
      setSignUpModal(false);
      setTitleSideForm("Bon retour !");
      setSignInModal(true);
    }
  };

  return (
    <div className="profil-page">
      <Navbar />
      {uid ? (
        <h1>UPDATE PAGE</h1>
      ) : (
        <div className="log-container">
          <div className="sideForm">
            <h1 className="titleSideForm">{titleSideForm}</h1>
            <div className="registerDiv">
              <a onClick={handleModals} id="register" className="registerbtn">
                S'inscrire
              </a>
              <a onClick={handleModals} id="login" className="registerbtn">
                Se connecter
              </a>
            </div>
          </div>
          {signUpModal && <Register />}
          {signInModal && <Log />}
        </div>
      )}
    </div>
  );
};

export default Profile;
