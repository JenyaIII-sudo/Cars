import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Autocomplete from "../Autocomplete";
import { addProject } from "../../Redux/actions/actions";
import store from "../../Redux/store";

const AddProject = ({ data, projectData }) => {
  const initialValue = {
    developers: "",
    projectname: "",
    rate: "",
    hoursperweek: "",
    status: "",
    projectinfo: ""
  };
  const dispatch = useDispatch();

  const [project, setProject] = useState(initialValue);

  const handleChangeInput = event => {
    setProject({ ...project, [event.target.name]: event.target.value });
  };

  const autoComplete = val => {
    setProject({ ...project, developers: val.length && val.join(", ") });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("Submit project", project);
    dispatch(addProject(project));
    setProject(initialValue);
  };
  store.subscribe(() => console.log(store.getState()));

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

export default AddProject;
