import axios from "axios";

export const GET_USER = "GET_USER";
export const UPDATE_LIKES = "UPDATE_LIKES";

export const getUser = (uid) => {
  return (dispatch) => {
    return axios
      .post(`http://localhost:5000/auth/${uid}`)
      .then((res) => dispatch({ type: GET_USER, payload: res.data }))
      .catch((err) => console.log(err));
  };
};

export const updateLikes = (likes) => {
  return {
    type: UPDATE_LIKES,
    payload: { likes },
  };
};
