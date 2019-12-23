import React, { useState } from "react";
import { Link } from "react";
import { useDispatch } from "react-redux";
import { loginUser, getUsers } from "../Redux/actions/actions";

const Login = () => {
  const initialValue = {
    email: "",
    password: ""
  };

  const dispatch = useDispatch();

  const [login, setLogin] = useState(initialValue);

  const handleChange = e => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser(login));
    dispatch(getUsers());
    setLogin(initialValue);
  };

  console.log("loginDATAATAT", login);

  return (
    <div className="container login-container">
      <div className="row">
        <form
          className="login-form col s12 m8 l12 z-depth-3"
          onSubmit={handleSubmit}
        >
          <div className="row login-row">
            <div className="center">
              <h5>Sign in</h5>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">account_circle</i>
              <input
                id="icon_prefix"
                type="email"
                className="validate"
                name="email"
                onChange={handleChange}
              />
              <label htmlFor="icon_prefix">E-mail</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">vpn_key</i>
              <input
                id="icon_telephone"
                type="password"
                className="validate"
                name="password"
                onChange={handleChange}
              />
              <label htmlFor="icon_telephone">Password</label>
            </div>
            <div className="center">
              <button className="waves-effect waves-light btn-large">
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
