import React from "react";
import { Link } from "react-router-dom";

const About = props => {
  const info = props.data.filter(item => item.id === +props.match.params.id);
  console.log("INFO", info[0]);
  const { Firstname, Lastname, Telephone, Skype, Email, About } = info[0];
  return (
    <div className="about">
      <div className="row">
        <div className="container">
          <div className="image col s12 m6 l4">
            <img src="https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png" />
          </div>
          <div className="items col s12 m6 l6">
            <ul className="collection z-depth-4">
              <li className="collection-header center">
                <h4>About</h4>
              </li>
              <li className="collection-item name">
                {Firstname} {Lastname}
              </li>
              <li className="collection-item">
                <strong>Telephone:</strong> {Telephone}
              </li>
              <li className="collection-item">
                <strong>E-mail:</strong> {Email}
              </li>
              <li className="collection-item">
                <strong>Skype:</strong> {Skype}
              </li>
              <li className="collection-item ">
                <textarea
                  className="textarea"
                  cols="30"
                  rows="10"
                  defaultValue={About}
                />
              </li>
            </ul>
            <Link to="/UserList">
              {" "}
              <a class="waves-effect waves-light btn center backuserlist">
                BACK
              </a>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
