import React, { useState } from "react";
import Autocomplete from "./Autocomplete";

const AddProject = props => {
  const initialValue = {
    developer: "",
    projectname: "",
    rate: "",
    hoursperweek: "",
    projectinfo: ""
  };

  const [project, setProject] = useState(initialValue);

  const handleChangeInput = event => {
    setProject({ ...project, [event.target.name]: event.target.value });
  };

  const test = val => {
    console.log("VAAAAAAAAALL", val);
    setProject({ ...project, developer: val });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.addProject(project);
    setProject(initialValue);
    console.log("PROPS", props.projectData);
  };

  const formList = [
    { name: "projectname" },
    { name: "rate" },
    { name: "hoursperweek" }
  ];

  console.log("Projeeeeect", project);

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="col s12">
        <div className="row">
          <h4>Project</h4>
          <div className="col s8">
            {formList.map(item => (
              <div className="input-field col s12" key={item.id}>
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
            <div className="input-field col s12">
              <textarea
                onChange={handleChangeInput}
                id="textarea1"
                name="projectinfo"
                className="materialize-textarea"
                value={project.projectinfo}
              ></textarea>
              <label htmlFor="textarea1">projectinfo</label>
            </div>
            <div className="input-field col s12">
              <Autocomplete
                test={test}
                suggestion={props.data}
                inputChange={handleChangeInput}
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

export default AddProject;
