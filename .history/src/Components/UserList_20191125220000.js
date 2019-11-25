import React from "react";

const UserList = props => {
  return (
    <div className="container section">
      {props.data.map(item => (
        <div className="col s12 m4 l3  pull-l2">
          <div className="card">
            <div className="card-image">
              <img src="https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png" />
              <span className="card-title">
                {item.Firstname} {item.Lastname}
              </span>
            </div>
            <div className="card-content">
              <p>
                Skype: {item.Skype} <br />
                Telephone: {item.Telephone}
                <br />
                E-mail: {item.Email}
              </p>
            </div>
            <div className="card-action">
              <Link>About</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
