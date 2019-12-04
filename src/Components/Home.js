import React, { useState } from "react";

const Home = () => {
  const searchValue = [
    {
      projectname: "code3",
      developer: "KOLYA",
      hoursperweek: "35",
      rate: "25$"
    },
    {
      projectname: "AFAS",
      developer: "asasda",
      hoursperweek: "235",
      rate: "20$"
    },
    {
      projectname: "juja",
      developer: "keka",
      hoursperweek: "45",
      rate: "234$"
    }
  ];
  const [searchData, setSearchData] = useState(searchValue);

  const [keyWord, setKeyWord] = useState("");

  const filteredProject = searchData.filter(item =>
    item.projectname.toLowerCase().includes(keyWord.toLowerCase())
  );

  const handleChange = e => {
    setKeyWord(e.target.value);
  };
  console.log("KEY", keyWord);

  return (
    <div className="container search">
      <h5>SEARCH PROJECT</h5>
      <nav>
        <div class="nav-wrapper">
          <form>
            <div class="input-field">
              <input
                onChange={handleChange}
                name="search"
                id="search"
                type="search"
                required
              />
              <label class="label-icon" for="search">
                <i class="material-icons">search</i>
              </label>
              <i class="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
      <h4 className="center">PROJECTS</h4>
      <table className="highlight centered z-depth-4">
        <thead>
          <tr>
            <th>Developer</th>
            <th>Current project</th>
            <th>Hours per week</th>
            <th>Rate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredProject.length
            ? filteredProject.map(item => (
                <tr>
                  <td>{item.developer}</td>
                  <td>{item.projectname}</td>
                  <td>{item.hoursperweek}</td>
                  <td>{item.rate}</td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
