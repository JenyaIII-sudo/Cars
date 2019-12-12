import React, { useState, useEffect } from "react";
import Autocomplete from "./Autocomplete";

const EditForm = ({ data, currentUser, updateUser, setEditing }) => {
  const [project, setProject] = useState({ currentUser });
  useEffect(() => {
    setProject({ currentUser });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    updateUser(project.id, project);
  };

  const handleStatusChange = e => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const autoComplete = val => {
    setProject({ ...project, developer: val.length && val.join(", ") });
  };

  const formList = [
    { name: "projectname" },
    { name: "rate" },
    { name: "hoursperweek" }
  ];

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="col s12">
        <div className="row">
          <h4>Project</h4>
          <div className="col s8">
            {formList.map(item => (
              <div className="input-field" key={item.name}>
                <input
                  onChange={handleStatusChange}
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
                onChange={handleStatusChange}
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
                inputChange={handleStatusChange}
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

export default EditForm;
