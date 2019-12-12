import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";

const EditUserForm = ({ currentUser, updateUser, setEditing }) => {
  const [status, setStatus] = useState({ currentUser });
  useEffect(() => {
    setStatus({ currentUser });
  }, []);

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
        <div className="row">
          <h4>Project</h4>
          <div className="col s8">
            {formList.map(item => (
              <div className="input-field" key={item.name}>
                <input
                  onChange={handleChangeInput}
                  type="text"
                  name={item.name}
                  key={project.name}
                  value={project[item.name]}
                  required
                />
                <label>{item.name}</label>
              </div>
            ))}
            <div className="input-field ">
              <textarea
                onChange={handleChangeInput}
                id="textarea1"
                name="projectinfo"
                className="materialize-textarea"
                value={project.projectinfo}
              ></textarea>
              <label htmlFor="textarea1">projectinfo</label>
            </div>

            <div className="input-field">
              <Autocomplete
                autoComplete={autoComplete}
                suggest={data}
                inputChange={handleChangeInput}
                project={project}
                setProject={setProject}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditUserForm;
