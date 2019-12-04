import React, { useState } from "react";

const Registration = () => {
  const [newUser, setNewUser] = useState([]);

  const registrationList = [
    { name: "username" },
    { name: "password" },
    { name: "email" }
  ];

  return (
    <div className="container">
      <form className="col s12 z-depth-3">
        <div className="row">
          <div className="col s12">
            <h4>Registration</h4>
            {registrationList.map(item => (
              <div className="input-field" key={item.name}>
                <input type="text" name={item.name} required />
                <label>{item.name}</label>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;
