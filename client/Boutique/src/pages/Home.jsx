import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Articles from "../component/Articles";
import { useDispatch } from "react-redux";
import { getPosts } from "../actions/post.action";
import axios from "axios";

const Home = () => {
  const [load, setLoad] = useState(true);
  const dispatch = useDispatch();

  const url = "http://localhost:5000/post";

  axios
    .get(url)
    .then((response) => {
      console.log("Données récupérées avec succès :", response.data);
      // Vous pouvez faire ce que vous voulez avec les données ici,
      // par exemple, les stocker dans le state Redux ou les afficher dans votre composant React.
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des données :", error);
      // Traitez l'erreur ici, par exemple, affichez un message d'erreur à l'utilisateur.
    });
  console.log("Chargemnt");

  return (
    <div>
      <Navbar />
      <Articles />
    </div>
  );
};

export default Home;
