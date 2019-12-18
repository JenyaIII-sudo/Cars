import {
  ADD_USER,
  ADD_PROJECT,
  GET_PROJECTS,
  GET_USERS,
  UPDATE_PROJECT,
  UPDATE_USER,
  DELETE_PROJECT
} from "./actionsTypes";
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
  try {
    await Axios.post("http://localhost:5000/developers/developerAdd", obj);
    dispatch({
      type: ADD_USER,
      payload: obj
    });
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const addProject = obj => async dispatch => {
  console.log("ADD PROJECT ACTION");
  console.log("Pay load add project:", obj);
  try {
    await Axios.post("http://localhost:5000/projects/projectAdd", obj);
    dispatch({
      type: ADD_PROJECT,
      payload: obj
    });
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const updateProject = (id, updatedProject) => async dispatch => {
  try {
    await Axios.put(
      "http://localhost:5000/projects/update/" + id,
      updatedProject
    );
    dispatch({
      type: UPDATE_PROJECT,
      payload: updatedProject
    });
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const updateUser = (id, updatedUser) => async dispatch => {
  try {
    await Axios.put(
      "http://localhost:5000/developers/update/" + id,
      updatedUser
    );
    dispatch({
      type: UPDATE_USER,
      payload: updatedUser
    });
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const deleteProject = (id, obj) => async dispatch => {
  try {
    await Axios.delete("http://localhost:5000/projects/delete/" + id);
    dispatch({
      type: DELETE_PROJECT,
      payload: obj
    });
  } catch (err) {
    console.log("Error: " + err);
  }
};
