import React from "react";
import { Link } from "react-router-dom";

const About = ({ data, match }) => {
  const info = data.filter(item => item.id === +match.params.id);
  const { devname, telephone, skype, email, about, file, pic } = info[0];
  return (
    <div className="about">
      <div className="row">
        <div className="container">
          <div className="about-avatar col s12 m6 l4">
            <img className="avatar-image" src={file || pic} alt={pic} />
          </div>
          <div className="items col s12 m6 l6">
            <ul className="collection z-depth-4">
              <li className="collection-header center">
                <h4>About</h4>
              </li>
              <li className="collection-item name">{devname}</li>
              <li className="collection-item">
                <strong>Telephone:</strong> {telephone}
              </li>
              <li className="collection-item">
                <strong>E-mail:</strong> {email}
              </li>
              <li className="collection-item">
                <strong>Skype:</strong> {skype}
              </li>
              <li className="collection-item ">
                <textarea
                  className="textarea"
                  cols="30"
                  rows="10"
                  defaultValue={about}
                />
              </li>
            </ul>
            <Link to="/UserList">
              <button className="col s12 waves-effect waves-light btn center backuserlist">
                BACK
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
