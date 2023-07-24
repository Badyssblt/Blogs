import { GET_POST } from "../actions/post.action";

const initalState = {};

export default function postReducer(state = initalState, action) {
  switch (action.type) {
    case GET_POST:
      return action.payload;

    default:
      return state;
  }
}
