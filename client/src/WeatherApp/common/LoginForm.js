import React from "react";

const LoginForm = props => {
  return (
    <div>
      <h3>Login Here</h3>
      <form action="#" id="loginForm">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            id="loginusername"
            placeholder="User Name"
            required
          />
          <input
            type="text"
            className="form-control"
            id="loginpassword"
            placeholder="Enter Password"
            required
          />
          <span className="input-group-btn">
            <button
              onClick={() => props.login(props)}
              className="btn btn-default"
              type="submit"
            >
              Login!
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
