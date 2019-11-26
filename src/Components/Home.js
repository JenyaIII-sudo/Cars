import React from "react";

const Home = () => {
  return (
    <div className="container section">
      <div className="row">
        <div class="card horizontal">
          <div class="col s12 m4 l2 card-image">
            <img src="https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png" />
            <span className="card-title">Keka Koka</span>
          </div>
          <div class="col s12 m8 l10">
            <div class="card-stacked">
              <div class="card-content">
                <div className="container-inputs">
                  <div className="input-field col s12 m8">
                    <input type="text" required />
                    <label>Telephone</label>
                  </div>
                  <div className="input-field col s12 m8">
                    <input type="text" required />
                    <label>E-mail</label>
                  </div>
                  <div className="input-field col s12 m8">
                    <input type="text" required />
                    <label>Telephone</label>
                  </div>
                </div>

                <div className="input-field col s12 m8">
                  <textarea placeholder="about text ...." type="text" />
                </div>
              </div>
              <div class="card-action">
                <a href="#">USER LIST</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
