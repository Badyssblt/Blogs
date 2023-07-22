import React, { useState } from "react";
import axios from "axios";
import Log from "./Log";

const Register = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const error = document.querySelector(".error");

    await axios({
      method: "post",
      url: "http://localhost:5000/auth/signup",
      data: {
        name: pseudo,
        email: email,
        password: password,
      },
    })
      .then((res) => {
        setFormSubmit(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {formSubmit ? (
        <Log />
      ) : (
        <div className="mainForm">
          <div className="contentForm">
            <h1 className="titleForm">S'inscrire</h1>
            <form className="form" onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Nom"
                className="btn"
                onChange={(e) => {
                  setPseudo(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Email"
                className="btn"
                onChange={(e) => {
                  setEmail(e.target.value);
                  console.log(email);
                }}
              />
              <input
                type="password"
                name=""
                placeholder="Mot de passe"
                className="btn"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <input type="submit" className="btn" value="S'inscrire" />
              <div className="errors"></div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
