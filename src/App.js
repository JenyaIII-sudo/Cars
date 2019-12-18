import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Axios from "axios";
import "./App.css";
import NavBar from "./Components/NavBar";
import UserList from "./Components/UserList";
import Home from "./Components/HomePage/Home";
import AddUser from "./Components/Forms/AddUser";
import About from "./Components/About";
import ProjectTable from "./Components/ProjecTable/ProjectTable";
import UserTable from "./Components/DeveloperTable/UserTable";
import AddProject from "./Components/Forms/AddProject";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import EditForm from "./Components/Forms/EditProjectForm";
import EditUser from "./Components/Forms/EditUserForm";
import { getProjects, getUsers, updateProject } from "./Redux/actions/actions";

const App = () => {
  const [data, setData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [regData, setRegData] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editingUser, setEditingUser] = useState(false);

  const initialFormState = {
    id: null,
    developers: "",
    projectname: "",
    rate: "",
    hoursperweek: "",
    status: "",
    projectinfo: ""
  };
  const initialCurrentUser = {
    id: null,
    devname: "",
    telephone: "",
    skype: "",
    email: "",
    about: "",
    status: ""
  };
  const [currentProject, setCurrentProject] = useState(initialFormState);
  const [currentUser, setCurrentUser] = useState(initialCurrentUser);

  const editRow = obj => {
    setEditing(true);
    setCurrentProject({
      id: obj.id,
      projectname: obj.projectname,
      rate: obj.rate,
      hoursperweek: obj.hoursperweek,
      status: obj.status,
      projectinfo: obj.projectinfo
    });
  };
  const editRoww = obj => {
    setEditingUser(true);
    setCurrentUser({
      id: obj.id,
      devname: obj.devname,
      telephone: obj.telephone,
      skype: obj.telephone,
      email: obj.email,
      about: obj.about,
      status: obj.status
    });
  };
  // const projects = useSelector(state => state.postReducer.projects);
  // const updateProject = async (id, updatedProject) => {
  //   setEditing(false);

  //     projectData.map(item => (item.id === id ? updatedProject : item))
  //   );
  //   await Axios.put(
  //     "http://localhost:5000/projects/update/" + id,
  //     updatedProject
  //   );
  // };
  // const updateUser = async (id, updatedUser) => {
  //   setEditingUser(false);
  //   setData(data.map(item => (item.id === id ? updatedUser : item)));
  //   await Axios.put(
  //     "http://localhost:5000/developers/update/" + id,
  //     updatedUser
  //   );
  // };
  const dispatch = useDispatch();
  useEffect(() => {
    // const request = async () => {
    //   try {
    //     const devlist = await Axios.get(
    //       "http://localhost:5000/developers/devs"
    //     );
    //     const projlist = await Axios.get(
    //       "http://localhost:5000/projects/projs"
    //     );
    //     setData(devlist.data);
    //     setProjectData(projlist.data);
    //   } catch (err) {
    //     console.log("Error: ", err);
    //   }
    // };
    // request();
    dispatch(getProjects());
    dispatch(getUsers());
    dispatch(updateProject());
  }, []);

  console.log("DEV", data);

  const userRegister = obj => {
    obj.pic =
      "https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png";
    setRegData([...regData, obj]);
  };
  console.log("SUUUUBMIT", regData);

  // const deleteProject = async id => {
  //   await Axios.delete("http://localhost:5000/projects/delete/" + id);
  //   setProjectData(projectData.filter(item => item.id !== id));
  // };
  const deleteUser = async id => {
    await Axios.delete("http://localhost:5000/developers/delete/" + id);
    setData(data.filter(item => item.id !== id));
  };

  return (
    <Router>
      <div className="row container-fluid">
        <NavBar setEditing={setEditing} />
        <Route
          exact
          path="/"
          render={props => <Home {...props} data={data} />}
        />
        <Route
          path="/add"
          render={props => <AddUser {...props} regData={regData} />}
        />
        <Route
          exact
          path="/userlist"
          render={props => <UserList {...props} data={data} />}
        />
        <Route
          path="/about/:id"
          render={props => <About {...props} data={data} />}
        />
        <Route
          path="/projecttable"
          render={props => (
            <ProjectTable
              {...props}
              projectData={projectData}
              editRow={editRow}
            />
          )}
        />
        <Route
          path="/usertable"
          render={props => (
            <UserTable
              {...props}
              data={data}
              deleteUser={deleteUser}
              editRoww={editRoww}
            />
          )}
        />

        <Route
          path="/registration"
          render={props => (
            <Registration {...props} userRegister={userRegister} />
          )}
        />
        <Route
          path="/login"
          render={props => <Login {...props} regData={regData} />}
        />
        <Route
          path="/addproject"
          render={props => (
            <AddProject {...props} data={data} projectData={projectData} />
          )}
        />
        {editing ? (
          <EditForm
            data={data}
            currentProject={currentProject}
            setEditing={setEditing}
            updateProject={updateProject}
          />
        ) : (
          ""
        )}
        {editingUser ? (
          <EditUser currentUser={currentUser} setEditingUser={setEditingUser} />
        ) : (
          ""
        )}
      </div>
    </Router>
  );
};

export default App;
