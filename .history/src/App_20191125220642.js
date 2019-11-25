import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserList from "./Components/UserList";
import Home from "./Components/Home";
import AddUser from "./Components/AddUser";

const App = () => {
  const [data, setData] = useState([]);

  const addUser = obj => {
    obj.id = Date.now();
    obj.pic =
      "https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png";
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
          exact="/UserList"
          render={props => <UserList {...props} data={data} />}
        />
        <Route path="/UserList/"
      </div>
    </Router>
  );
};

export default App;
