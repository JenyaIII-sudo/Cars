import React, { useState } from "react";

const AddUser = props => {
  const [data, setData] = useState([]);

  const handleChangeInput = event => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (data.name) {
      props.addUser(data);
      setData(data);
    }
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit} className="col s6">
        <div className="row">
          <div className="input-field col s12">
            <input
              onChange={handleChangeInput}
              type="text"
              className="validate"
              name="First name"
            />
            <label>First Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              onChange={handleChangeInput}
              name="Last name"
              type="tel"
              className="validate"
            />
            <label>Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              onChange={handleChangeInput}
              name="Telephone"
              type="tel"
              className="validate"
            />
            <label>Telephone</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              onChange={handleChangeInput}
              name="Skype"
              type="tel"
              className="validate"
            />
            <label>Skype</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              onChange={handleChangeInput}
              name="E-mail"
              type="tel"
              className="validate"
            />
            <label>E-mail</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
