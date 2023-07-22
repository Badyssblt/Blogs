import React, { useState } from "react";
import "../styles/Log.css";
import axios from "axios";

const Log = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");
    console.log(emailError);
    const passwordError = document.querySelector(".password.error");
    axios({
      method: "post",
      url: `http://localhost:5000/auth/login`,
      withCredentials: true,
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        if (res.data.errors) {
          emailError.innerHTML = "L'email ou le pseudo ne correspond pas !";
          passwordError.innerHTML = res.data.errors.password;
          console.log(res);
        } else {
          window.location = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mainForm">
      <div className="contentForm">
        <h1 className="titleForm">Se connecter</h1>
        <form className="form" onSubmit={handleLogin} id="signUpForm">
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="btn"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div className="email error"></div>
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            className="btn"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="password"
          />
          <div className="password error"></div>
          <button type="submit" className="btn">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Log;
