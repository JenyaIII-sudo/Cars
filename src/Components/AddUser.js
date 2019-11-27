import React, { useState } from "react";

const AddUser = props => {
  const initialValue = {
    Firstname: "",
    Lastname: "",
    Telephone: "",
    Skype: "",
    Email: "",
    About: "",
    Project: ""
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
    { name: "Email" }
  ];

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="col s6">
        <div className="row">
          {formList.map(item => (
            <div className="input-field col s12" key={item.name}>
              <input
                onChange={handleChangeInput}
                type="text"
                name={item.name}
                key={data.name}
                required
              />
              <label>{item.name}</label>
            </div>
          ))}
          <div className="rows">
            <div className="input-field col s12">
              <textarea
                onChange={handleChangeInput}
                id="textarea1"
                name="About"
                className="materialize-textarea"
              ></textarea>
              <label htmlFor="textarea1">Textarea</label>
            </div>
          </div>
          <div className="rows">
            <div className="input-field col s12">
              <textarea
                onChange={handleChangeInput}
                id="textarea1"
                name="Project"
                className="materialize-textarea"
              ></textarea>
              <label htmlFor="textarea1">Project</label>
            </div>
          </div>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddUser;
