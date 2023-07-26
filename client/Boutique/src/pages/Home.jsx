import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Articles from "../component/Articles";
import { useDispatch } from "react-redux";
import { getPosts } from "../actions/post.action";
import axios from "axios";
import Discover from "../component/Discover";

const Home = () => {
  const [load, setLoad] = useState(true);
  const dispatch = useDispatch();
  dispatch(getPosts());

  return (
    <div>
      <Navbar />
      <Discover />
      <Articles />
    </div>
  );
};

export default Home;
