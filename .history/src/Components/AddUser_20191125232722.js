import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddUser = props => {
  const initialValue = {
    Firstname: "",
    Lastname: "",
    Telephone: "",
    Skype: "",
    Email: ""
  };
  const [data, setData] = useState(initialValue);

  const handleChangeInput = event => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.addUser(data);
    setData(initialValue);
  };

  const formList = [
    { name: "Firstname" },
    { name: "Lastname" },
    { name: "Telephone" },
    { name: "Skype" },
    { name: "Email" },
    { name: "About" }
  ];

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="col s6">
        <div className="row">
          {formList.map(item => (
            <div className="input-field col s12">
              <input
                onChange={handleChangeInput}
                type="text"
                name={item.name}
                key={data.id}
                required
              />
              <label>{item.name}</label>
            </div>
          ))}
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddUser;
