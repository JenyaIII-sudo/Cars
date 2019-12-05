import React, { useState } from "react";
import Autocomplete from "./Autocomplete";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const AddProject = ({ addProject, data, projectData }) => {
  const initialValue = {
    developer: "",
    projectname: "",
    rate: "",
    hoursperweek: "",
    status: "",
    projectinfo: ""
  };

  const [project, setProject] = useState(initialValue);

  const handleChangeInput = event => {
    setProject({ ...project, [event.target.name]: event.target.value });
  };

  const autoComplete = val => {
    setProject({ ...project, developer: val.join(", ") });
  };

  const handleSubmit = event => {
    event.preventDefault();
    addProject(project);
    setProject(initialValue);
  };
  const handleStatusChange = e => {
    setProject({ ...project, status: e.value });
    console.log(e);
  };

  const formList = [
    { name: "projectname" },
    { name: "rate" },
    { name: "hoursperweek" }
  ];
  const options = [
    "Select an developer status",
    "In discussion",
    "In work",
    "Completed"
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
              />
            </div>
            <div>
              <Dropdown
                onChange={handleStatusChange}
                options={options}
                value={defaultOption}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
