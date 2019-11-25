import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddCars from "./Components/AddCars";
import Cars from "./Components/Cars";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <div className="row container-fluid">
        <NavBar />
        <Route path="/Home" component={Home} />
        <Route path="/Add" component={AddCars} />
        <Route path="/Cars" component={Cars} />
      </div>
    </Router>
  );
}

export default App;
