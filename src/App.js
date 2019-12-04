import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserList from "./Components/UserList";
import Home from "./Components/Home";
import AddUser from "./Components/AddUser";
import About from "./Components/About";
import ProjectTable from "./Components/ProjectTable";
import UserTable from "./Components/UserTable";
import AddProject from "./Components/AddProject";

const App = () => {
  const [data, setData] = useState([]);
  const [projectData, setProjectData] = useState([]);

  const addUser = obj => {
    obj.id = Date.now();
    obj.pic =
      "https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png";
    setData([...data, obj]);
  };

  const addProject = obj => {
    obj.id = Date.now();
    setProjectData([...projectData, obj]);
  };

  const deleteProject = id =>
    setProjectData(projectData.filter(item => item.id !== id));

  const deleteUser = id => setData(data.filter(item => item.id !== id));

  console.log("DATA", data);
  console.log("ProjDATA", projectData);

  return (
    <Router>
      <div className="row container-fluid">
        <NavBar />
        <Route path="/Home" component={Home} />
        <Route
          path="/Add"
          render={props => <AddUser {...props} addUser={addUser} data={data} />}
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
              data={data}
              projectData={projectData}
              deleteProject={deleteProject}
            />
          )}
        />
        <Route
          path="/UserTable"
          render={props => (
            <UserTable {...props} data={data} deleteUser={deleteUser} />
          )}
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
      </div>
    </Router>
  );
};

export default App;
