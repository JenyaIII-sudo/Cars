import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Table = ({ data, deleteUser }) => {
  const [keyWord, setKeyWord] = useState("");

  const filteredProject = data.filter(item =>
    item.username.toLowerCase().includes(keyWord.toLowerCase())
  );

  console.log("PROPS", data);

  return (
    <div className="container">
      <h5 className="center">USERS</h5>
      <SearchBar keyWord={keyWord} setKeyWord={setKeyWord} />
      <table className="highlight centered z-depth-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Skype</th>
            <th>Telephone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredProject.length
            ? filteredProject.map(item => (
                <tr key={item.id}>
                  <td>
                    <Link to={`/UserList/${item.id}`}>{item.username}</Link>
                  </td>
                  <td>{item.email}</td>
                  <td>{item.skype}</td>
                  <td>{item.telephone}</td>
                  <td>
                    <a
                      onClick={() => deleteUser(item.id)}
                      className="btn-floating btn-small waves-effect waves-light red"
                    >
                      X
                    </a>
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
