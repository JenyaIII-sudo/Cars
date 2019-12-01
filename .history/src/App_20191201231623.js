import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserList from "./Components/UserList";
import Home from "./Components/Home";
import AddUser from "./Components/AddUser";
import About from "./Components/About";
import Table from "./Components/Table";
import AddProject from "./Components/AddProject";
import Autocomplete from "./Components/Autocomplete";

const App = () => {
  const [data, setData] = useState([]);

  const addUser = obj => {
    obj.id = Date.now();
    obj.pic =
      "https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png";
    setData([...data, obj]);
  };

  const addProject = obj => {
    setData([...data, obj]);
  };

  console.log("DATA", data);

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
          path="/Table"
          render={props => <Table {...props} data={data} />}
        />
        <Route
          path="/AddProject"
          render={props => (
            <AddProject {...props} addProject={addProject} data={data} />
          )}
        />
        <Autocomplete data={data.username} />
      </div>
    </Router>
  );
};

export default App;
