import { GET_USER, UPDATE_LIKES } from "../actions/user.action";

const initalState = {};

export default function userReducer(state = initalState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;

    case UPDATE_LIKES:
      return {
        ...state,
        likes: [...state.likes, action.payload.likes],
      };

    default:
      return state;
  }
}
