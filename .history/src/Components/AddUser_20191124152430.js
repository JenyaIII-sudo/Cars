import React from "react";

const AddUser = () => {
  return (
    <div class="row">
      <form className="col s6">
        <div className="row">
          <div className="input-field col s6">
            <i className="material-icons prefix">account_circle</i>
            <input id="icon_prefix" type="text" className="validate" />
            <label for="icon_prefix">First Name</label>
          </div>
          <div className="input-field col s6">
            <i className="material-icons prefix">phone</i>
            <input id="icon_telephone" type="tel" className="validate" />
            <label for="icon_telephone">Telephone</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
