import {
  ADD_USER,
  ADD_PROJECT,
  GET_PROJECTS,
  GET_USERS
} from "../actions/actionsTypes";

const initialState = {
  users: [],
  projects: []
};

export default function(state = initialState, action) {
  console.log("PostReducer");
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: action.payload
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: action.payload
      };
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
}
