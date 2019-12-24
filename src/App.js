import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
import Footer from "./Components/Footer/Footer";
import { getProjects, getUsers, updateProject } from "./Redux/actions/actions";

const App = () => {
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

  const token = localStorage.getItem("Token");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
    token && dispatch(getUsers());
  }, []);

  return (
    <Router>
      <div className="row container-fluid">
        <NavBar setEditing={setEditing} />
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path="/add" render={props => <AddUser {...props} />} />
        <Route exact path="/userlist" component={UserList} />
        <Route path="/about/:id" component={About} />
        <Route
          path="/projecttable"
          render={props => <ProjectTable {...props} editRow={editRow} />}
        />
        <Route
          path="/usertable"
          render={props => <UserTable {...props} editRoww={editRoww} />}
        />
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/addproject" render={props => <AddProject {...props} />} />
        {editing ? (
          <EditForm
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
      <Footer />
    </Router>
  );
};

export default App;
