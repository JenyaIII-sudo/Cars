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

  const [data, setData] = useState(initialValue);

  const handleChangeInput = event => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.addProject(data);
    setData(initialValue);
    console.log(props.data);
  };

  const formList = [
    { name: "developer" },
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
              <div className="input-field col s12 " key={item.name}>
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
            <div className="input-field col s12">
              <textarea
                onChange={handleChangeInput}
                id="textarea1"
                name="projectinfo"
                className="materialize-textarea"
              ></textarea>
              <label htmlFor="textarea1">projectinfo</label>
            </div>
            <div>
              <Autocomplete data={props.data} />
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
