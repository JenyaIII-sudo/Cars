import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";

const EditUserForm = ({ currentUser, updateUser, setEditing }) => {
  const [status, setStatus] = useState({ currentUser });
  useEffect(() => {
    setStatus({ currentUser });
  });

  const handleSubmit = e => {
    e.preventDefault();
    updateUser(status.id, status);
  };

  const handleStatusChange = e => {
    const { name, value } = e.target;
    setStatus({ ...status, [name]: value });
  };
  const options = [
    "Select an developer status",
    "In discussion",
    "In work",
    "Completed",
    "Draft"
  ];
  const defaultOption = options[0];

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="col s12">
        <div>
          <Dropdown
            onChange={handleStatusChange}
            options={options}
            value={defaultOption}
            name="name"
          />
        </div>
        <button
          className="col s12 m12 l12 waves-effect waves-light btn backuserlist"
          type="submit"
        >
          Save
        </button>
        <button
          className="col s12 m12 l12 waves-effect waves-light btn backuserlist"
          onClick={setEditing(false)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditUserForm;
