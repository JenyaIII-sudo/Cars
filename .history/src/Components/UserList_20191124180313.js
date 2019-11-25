import React from "react";

const UserList = () => {
  return (
    <div className="container">
      <div className="col s4 ">
        <div className="card">
          <div className="card-image">
            <img src="https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png" />
            <span className="card-title">Name</span>
          </div>
          <div className="card-content">
            <p>Firs name: Last name: Skype: Telephone: E-mail</p>
          </div>
          <div className="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
