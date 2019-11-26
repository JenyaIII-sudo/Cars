import React from "react";
import { Link } from "react-router-dom";

const About = props => {
  return (
    <div className="container section">
      {props.data
        .filter(item => item.id === +props.match.params.id)
        .map(item => (
          <div className="row">
            <div class="card horizontal">
              <div class="col s12 m4 l2 card-image">
                <img src="https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png" />
                <span className="card-title">
                  {item.Firstname} {item.Lastname}
                </span>
              </div>
              <div class="col s12 m8 l10">
                <div class="card-stacked">
                  <div class="card-content">
                    <div className="container-inputs">
                      <div className="input-field col s12 m8">
                        <input type="text" required value={item.Skype} />
                        <label>Skype</label>
                      </div>
                      <div className="input-field col s12 m8">
                        <input type="text" required value={item.Email} />
                        <label>E-mail</label>
                      </div>
                      <div className="input-field col s12 m8">
                        <input type="text" required value={item.Telephone} />
                        <label>Telephone</label>
                      </div>
                    </div>

                    <div className="input-field col s12 m8">
                      <textarea
                        placeholder="about text ...."
                        type="text"
                        value={item.About}
                      />
                    </div>
                  </div>
                  <div class="card-action">
                    <Link to="/UserList">USER LIST</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default About;
