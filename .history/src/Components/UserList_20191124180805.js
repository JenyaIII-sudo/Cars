import React from "react";

const UserList = () => {
  return (
    <div className="container">
      <div className="col s4 pull-l3">
        <div className="card">
          <div className="card-image">
            <img src="https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png" />
            <span className="card-title">Ferstname Lastname</span>
          </div>
          <div className="card-content">
            <p>
              Skype: <br />
              Telephone: <br />
              E-mail:
            </p>
          </div>
          <div className="card-action">
            <a href="#">Project</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
