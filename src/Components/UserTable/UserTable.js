import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import UserStatus from "./UserStatus";

const Table = ({ data, deleteUser, editRoww }) => {
  const [keyWord, setKeyWord] = useState("");

  const filteredProject = data.filter(item =>
    item.devname.toLowerCase().includes(keyWord.toLowerCase())
  );

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
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredProject.length
            ? filteredProject.map(item => (
                <tr key={item.id}>
                  <td>
                    <Link to={`/UserList/${item.id}`}>{item.devname}</Link>
                  </td>
                  <td>{item.email}</td>
                  <td>{item.skype}</td>
                  <td>{item.telephone}</td>
                  <td>
                    <UserStatus item={item.status} />
                  </td>
                  <td>
                    <button
                      onClick={() => editRoww(item)}
                      className="btn-floating btn-small waves-effect waves-light
                      red"
                    >
                      <i className="large material-icons">create</i>
                    </button>
                    <span> </span>
                    <button
                      onClick={() => deleteUser(item.id)}
                      className="btn-floating btn-small waves-effect waves-light red"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
