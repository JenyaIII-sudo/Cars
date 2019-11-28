import React, { useState } from "react";

const AddUser = props => {
  const initialValue = {
    username: "",
    projectname: "",
    telephone: "",
    skype: "",
    email: "",
    about: "",
    projectInfo: ""
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
    { name: "username" },
    { name: "projectname" },
    { name: "telephone" },
    { name: "skype" },
    { name: "email" }
  ];

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="col s6">
        <div className="row">
          <h4>Add new user</h4>
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
                name="about"
                className="materialize-textarea"
              ></textarea>
              <label htmlFor="textarea1">about</label>
            </div>
          </div>
          <div className="rows">
            <div className="input-field col s12">
              <textarea
                onChange={handleChangeInput}
                id="textarea1"
                name="projectInfo"
                className="materialize-textarea"
              ></textarea>
              <label htmlFor="textarea1">projectInfo</label>
            </div>
          </div>
        </div>
        <button
          className="col s12 waves-effect waves-light btn backuserlist"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddUser;
