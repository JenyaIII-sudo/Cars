import React from "react";

const Home = () => {
  return (
    <div class="row">
      <div className="container">
        <div className="image  col s12 m6 l4">
          <img src="https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png" />
        </div>
        <div className="items col s12 m6 l6">
          <ul className="collection z-depth-4">
            <li class="collection-header center">
              <h4>About</h4>
            </li>
            <li className="collection-item">Alvin</li>
            <li className="collection-item">Alvin</li>
            <li className="collection-item">Alvin</li>
            <li className="collection-item">
              <textarea cols="30" rows="10">
                {}
              </textarea>
            </li>
          </ul>
          <a class="waves-effect waves-light btn center backuserlist">BACK</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
