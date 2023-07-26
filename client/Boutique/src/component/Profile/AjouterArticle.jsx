import React, { useState } from "react";
import "../../styles/ProfilComp.css";
import axios from "axios";

const AjouterArticle = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name === "") {
      const request = await axios({
        method: "post",
        url: "http://localhost:5000/post",
        data: {
          name: name,
          image: image,
          description: description,
          price: price,
        },
      });
    }
  };
  return (
    <div>
      <h1 className="title-form">Ajouter un article</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="form-post">
        <input
          className="input-form"
          type="text"
          name="name"
          placeholder="Nom de l'article"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input-form"
          type="text"
          name="image"
          placeholder="URL de l'image"
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          className="input-form"
          name="description"
          placeholder="Description de l'article"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="input-form"
          type="number"
          name="price"
          placeholder="Prix"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className="submit-form input-form"
          type="submit"
          value="Ajouter"
        />
      </form>
    </div>
  );
};

export default AjouterArticle;
