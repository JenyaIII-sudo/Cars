import React, { useState, useRef } from "react";

const AddUser = props => {
  const initialValue = {
    username: "",
    telephone: "",
    skype: "",
    email: "",
    about: ""
  };
  const fileInput = useRef(null);

  const [data, setData] = useState(initialValue);

  const initialAvatar = {
    file:
      "https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png"
  };
  const [avatar, setAvatar] = useState(initialAvatar);

  const fileSelectedHandler = event => {
    console.log(event.target.files[0]);
    const imagePath = URL.createObjectURL(event.target.files[0]);
    setAvatar({ [event.target.name]: imagePath });
    setData({ ...data, [event.target.name]: imagePath });
    console.log(avatar);
  };

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
    { name: "telephone" },
    { name: "skype" },
    { name: "email" }
  ];

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="col s12">
        <div className="row">
          <h4>New user</h4>
          <div className="col s8">
            {formList.map(item => (
              <div className="input-field col s12 " key={item.name}>
                <input
                  onChange={handleChangeInput}
                  type="text"
                  name={item.name}
                  key={data.name}
                  value={data[item.name]}
                  required
                />
                <label>{item.name}</label>
              </div>
            ))}
            <div className="input-field col s12">
              <textarea
                onChange={handleChangeInput}
                id="textarea1"
                name="about"
                className="materialize-textarea"
                value={data.about}
              ></textarea>
              <label htmlFor="textarea1">about</label>
            </div>
          </div>

          <div className="col s12 m8 l4">
            <input
              className="file-input"
              style={{ display: "none" }}
              type="file"
              name="file"
              onChange={event => fileSelectedHandler(event)}
              ref={fileInput}
            />
            <div className="user-avatar">
              <img
                className="avatar-image"
                onClick={() => fileInput.current.click()}
                src={avatar.file}
              />
            </div>
          </div>
        </div>

        <button
          className="col s12 m8 l8 waves-effect waves-light btn backuserlist"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddUser;
