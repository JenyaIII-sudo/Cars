import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cars from "./Components/Cars";
import Home from "./Components/Home";
import AddUser from "./Components/AddUser";

const App = () => {
  const rowData = [];

  const [datas, setDatas] = useState(rowData);

  const addUser = data => {
    data.id = Date.now();
    setDatas([...datas, data]);
  };

  return (
    <Router>
      <div className="row container-fluid">
        <NavBar />
        <Route path="/Home" component={Home} />
        <Route
          path="/Add"
          render={props => <AddUser {...props} addUser={addUser} />}
        />
        <Route path="/Cars" component={Cars} />
      </div>
    </Router>
  );
};

export default App;
