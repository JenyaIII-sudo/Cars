import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserList from "./Components/UserList";
import Home from "./Components/HomePage/Home";
import AddUser from "./Components/Forms/AddUser";
import About from "./Components/About";
import ProjectTable from "./Components/ProjecTable/ProjectTable";
import UserTable from "./Components/UserTable/UserTable";
import AddProject from "./Components/Forms/AddProject";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import EditForm from "./Components/Forms/EditProjectForm";
import EditUser from "./Components/Forms/EditUserForm";
import Axios from "axios";

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
  const updateProject = async (id, updatedProject) => {
    setEditing(false);
    setProjectData(
      projectData.map(item => (item.id === id ? updatedProject : item))
    );
    await Axios.put(
      "http://localhost:5000/projects/update/" + id,
      updatedProject
    );
  };
  const updateUser = async (id, updatedUser) => {
    setEditingUser(false);
    setData(data.map(item => (item.id === id ? updatedUser : item)));
    await Axios.put(
      "http://localhost:5000/developers/update/" + id,
      updatedUser
    );
  };

  useEffect(() => {
    const request = async () => {
      try {
        const devlist = await Axios.get(
          "http://localhost:5000/developers/devs"
        );
        const projlist = await Axios.get(
          "http://localhost:5000/projects/projs"
        );
        setData(devlist.data);
        setProjectData(projlist.data);
      } catch (err) {
        console.log("Error: ", err);
      }
    };
    request();
  }, []);

  const addUser = async obj => {
    obj.id = Date.now();
    obj.pic =
      "https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png";

    await Axios.post("http://localhost:5000/developers/developerAdd", obj);
    setData([...data, obj]);
  };

  const addProject = async obj => {
    obj.id = Date.now();
    await Axios.post("http://localhost:5000/projects/projectAdd", obj);
    setProjectData([...projectData, obj]);
    console.log("PROJS", obj);
  };
  console.log("DEV", data);

  const userRegister = obj => {
    obj.pic =
      "https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png";
    setRegData([...regData, obj]);
  };
  console.log("SUUUUBMIT", regData);

  const deleteProject = async id => {
    await Axios.delete("http://localhost:5000/projects/delete/" + id);
    setProjectData(projectData.filter(item => item.id !== id));
  };
  const deleteUser = async id => {
    await Axios.delete("http://localhost:5000/developers/delete/" + id);
    setData(data.filter(item => item.id !== id));
  };

  return (
    <Router>
      <div className="row container-fluid">
        <NavBar setEditing={setEditing} />
        <Route path="/Home" component={Home} />
        <Route
          path="/Add"
          render={props => (
            <AddUser {...props} addUser={addUser} regData={regData} />
          )}
        />
        <Route
          exact
          path="/UserList"
          render={props => <UserList {...props} data={data} />}
        />
        <Route
          path="/UserList/:id"
          render={props => <About {...props} data={data} />}
        />
        <Route
          path="/ProjectTable"
          render={props => (
            <ProjectTable
              {...props}
              projectData={projectData}
              deleteProject={deleteProject}
              editRow={editRow}
            />
          )}
        />
        <Route
          path="/UserTable"
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
          path="/Registration"
          render={props => (
            <Registration {...props} userRegister={userRegister} />
          )}
        />
        <Route
          path="/Login"
          render={props => <Login {...props} regData={regData} />}
        />
        <Route
          path="/AddProject"
          render={props => (
            <AddProject
              {...props}
              addProject={addProject}
              data={data}
              projectData={projectData}
            />
          )}
        />
        {editing ? (
          <EditForm
            data={data}
            currentProject={currentProject}
            updateProject={updateProject}
            setEditing={setEditing}
          />
        ) : (
          ""
        )}
        {editingUser ? (
          <EditUser
            data={data}
            currentUser={currentUser}
            setEditingUser={setEditingUser}
            updateUser={updateUser}
          />
        ) : (
          ""
        )}
      </div>
    </Router>
  );
};

export default App;
