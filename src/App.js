import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserList from "./Components/UserList";
import Home from "./Components/Home";
import AddUser from "./Components/AddUser";
import About from "./Components/About";
import ProjectTable from "./Components/ProjecTable/ProjectTable";
import UserTable from "./Components/UserTable";
import AddProject from "./Components/AddProject";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import EditUserForm from "./Components/EditUserForm";

const App = () => {
  const [data, setData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [regData, setRegData] = useState([]);
  const [editing, setEditing] = useState(false);

  const initialFormState = { id: null, status: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = dev => {
    setEditing(true);
    setCurrentUser({ id: projectData.id, status: projectData.status });
  };
  const updateUser = (id, updateUser) => {
    setEditing(false);
    setProjectData(
      projectData.map(item => (item.id === id ? updateUser : item))
    );
  };

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

  const userRegister = obj => {
    obj.pic =
      "https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png";
    setRegData([...regData, obj]);
  };
  console.log("SUUUUBMIT", regData);

  const deleteProject = id =>
    setProjectData(projectData.filter(item => item.id !== id));

  const deleteUser = id => setData(data.filter(item => item.id !== id));

  return (
    <Router>
      <div className="row container-fluid">
        <NavBar />
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
            <UserTable {...props} data={data} deleteUser={deleteUser} />
          )}
        />
        {/* <Route
          path="/AddProject"
          render={props => (
            <AddProject
              {...props}
              addProject={addProject}
              data={data}
              projectData={projectData}
            />
          )}
        /> */}
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
        {editing.length ? (
          <div>
            <h2>Edit user</h2>
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
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
        )}
      </div>
    </Router>
  );
};

export default App;
