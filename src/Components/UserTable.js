import React, { useState } from "react";
import { Link } from "react-router-dom";

const Table = props => {
  console.log("PROPS", props.data);
  return (
    <div className="container">
      <h4 className="center">USERS</h4>
      <table className="highlight centered z-depth-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Skype</th>
            <th>Telephone</th>
          </tr>
        </thead>
        <tbody>
          {props.data.length
            ? props.data.map(item => (
                <tr key={item.id}>
                  <td>
                    <Link to={`/UserList/${item.id}`}>{item.username}</Link>
                  </td>
                  <td>{item.email}</td>
                  <td>{item.skype}</td>
                  <td>{item.telephone}</td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
