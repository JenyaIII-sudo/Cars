import React from "react";

const Home = () => {
  return (
    <div className="about">
      <div className="row">
        <div className="container">
          <div className="items col s12">
            <ul className="collection z-depth-4">
              <li className="collection-header center">
                <h4>About Project</h4>
              </li>
              <li className="collection-item ">
                <textarea
                  className="textarea-project"
                  cols="80"
                  rows="20"
                  defaultValue="KEK"
                />
              </li>
            </ul>
            <button className="col s12 center waves-effect waves-light btn">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
