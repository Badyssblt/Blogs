import axios from "axios";

export const GET_POST = "GET_POST";

export const getPosts = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:5000/post")
      .then((res) => {
        dispatch({ type: GET_POST, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
