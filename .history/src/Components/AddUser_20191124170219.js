import React, { useState } from "react";

const AddUser = props => {
  const [data, setData] = useState([]);

  const handleChangeInput = event => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (!data.name) return;
    props.addUser(data);
    setData(data);
  };

  console.log("DATA", data);

  return (
    <div className="container">
      <form className="col s6">
        <div className="row">
          <div className="input-field col s12">
            <input
              onChange={handleChangeInput}
              type="text"
              className="validate"
              name="First name"
            />
            <label for="icon_prefix">First Name</label>
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
            <label for="icon_telephone">Last Name</label>
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
            <label for="icon_telephone">Telephone</label>
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
            <label for="icon_telephone">Skype</label>
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
            <label for="icon_telephone">E-mail</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
