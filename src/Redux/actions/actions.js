import { ADD_USER, ADD_PROJECT, GET_PROJECTS, GET_USERS } from "./actionsTypes";
import Axios from "axios";

export const getProjects = () => async dispatch => {
  try {
    const { data } = await Axios.get("http://localhost:5000/projects/projs");
    dispatch({
      type: GET_PROJECTS,
      payload: data
    });
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const getUsers = () => async dispatch => {
  try {
    const { data } = await Axios.get("http://localhost:5000/developers/devs");
    dispatch({
      type: GET_USERS,
      payload: data
    });
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const addUser = obj => async dispatch => {
  await Axios.post("http://localhost:5000/developers/developerAdd", obj);
  dispatch({
    type: ADD_USER,
    payload: obj
  });
};

export const addProject = obj => async dispatch => {
  console.log("ADD PROJECT ACTION");
  console.log("Pay load add project:", obj);
  await Axios.post("http://localhost:5000/projects/projectAdd", obj);
  dispatch({
    type: ADD_PROJECT,
    payload: obj
  });
};

// const addProject = async obj => {
//   obj.id = Date.now();
//   await Axios.post("http://localhost:5000/projects/projectAdd", obj);
//   setProjectData([...projectData, obj]);
//   console.log("PROJS", obj);
// };

// const addUser = async obj => {
//   obj.id = Date.now();
//   obj.pic =
//     "https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png";

//   await Axios.post("http://localhost:5000/developers/developerAdd", obj);
//   setData([...data, obj]);
// };
