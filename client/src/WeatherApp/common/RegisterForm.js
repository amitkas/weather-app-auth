import React from "react";

const RegisterForm = props => {
  return (
    <div>
      <h3>Register Here</h3>
      <form action="#" id="registerForm" onSubmit={props.register}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            id="registerusername"
            placeholder="User Name"
            value= {props.username}
            required
            onChange={props.onChangeuser}          />
          <input
            type="text"
            className="form-control"
            id="registerpassword"
            placeholder="Enter Password"
            value = {props.password}
            required
            onChange={props.onChangepass}          />
          <span className="input-group-btn">
            <button
              className="btn btn-default"
              type="submit"
              
              
            >
              Register!
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
