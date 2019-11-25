import React from "react";

const UserList = () => {
  return (
    <div className="container">
      <div className="col s4 m2 ">
        <div className="card">
          <div className="card-image">
            <img src="https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png" />
            <span className="card-title">Card Title</span>
          </div>
          <div className="card-content">
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
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
