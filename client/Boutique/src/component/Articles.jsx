import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/Articles.css";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../Utils/Utils";
import { getUser, updateLikes } from "../actions/user.action";

const Articles = () => {
  const posts = useSelector((state) => state.postReducer);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const handleLikes = async (userId, id) => {
    try {
      const response = await axios({
        method: "patch",
        url: `http://localhost:5000/auth/likes/${userId}`,
        withCredentials: true,
        data: { likes: id },
      });
      const updateLike = response.data.like;
      dispatch(updateLikes(updateLike));
      window.location = "/";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="articles">
      {!isEmpty(posts) &&
        posts.map((post) => (
          <div className="article" key={post._id}>
            <img src={post.image} alt="" />
            <h1>{post.name}</h1>
            <h1
              onClick={() => {
                handleLikes(userData._id, post._id);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 576 512"
              >
                <path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
              </svg>
            </h1>
          </div>
        ))}
    </div>
  );
};

export default Articles;
