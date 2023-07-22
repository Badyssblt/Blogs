import React from "react";
import axios from "axios";
import cookie from "js-cookie";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: 1 });
    }
  };
  const logout = async () => {
    try {
      await axios({
        method: "get",
        url: "http://localhost:5000/auth/logout",
        withCredentials: true,
      }).then(() => {
        removeCookie("jwt");
      });
      window.location = "/";
    } catch (err) {
      console.log(err);
    }
  };

  return <li onClick={logout}>Se déconnecter</li>;
};

export default Logout;
