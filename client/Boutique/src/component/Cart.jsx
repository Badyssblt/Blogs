import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Cart = () => {
  const userData = useSelector((state) => state.userReducer);
  const posts = userData.likes;
  const [data, setData] = useState();

  const getPost = async (posts) => {
    const requests = posts.map((post) =>
      axios.get(`http://localhost:5000/post/${post}`)
    );

    try {
      const responses = await axios.all(requests);
      const datas = responses.map((response) => response.data);
      setData(datas);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPost(posts);
  }, []);

  return <div></div>;
};

export default Cart;
