import React from "react";
import { Link } from "react-router-dom";

const UserList = props => {
  return (
    <div className="container section">
      {props.data.length
        ? props.data.map(item => (
            <div className="col s12 m4 l3  pull-l2" key={item.id}>
              <div className="card">
                <div className="card-image">
                  <img src={item.file || item.pic} />
                  <span className="card-title">{item.username}</span>
                </div>
                <div className="card-content">
                  <p>
                    <strong className="card-text">Skype:</strong> {item.skype}{" "}
                    <br />
                    <strong className="card-text">Telephone:</strong>{" "}
                    {item.telephone}
                    <br />
                    <strong className="card-text">E-mail:</strong> {item.email}
                  </p>
                </div>
                <div className="card-action">
                  <Link to={`/UserList/${item.id}`}>About</Link>
                </div>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default UserList;
