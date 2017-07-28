import React from "react";

const LoginForm = props => {
  return (
    <div>
      <h3>Login Here</h3>
      <form action="#" id="loginForm" onSubmit={props.login}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            id="loginusername"
            placeholder="User Name"
            value= {props.user}
            required
            onChange={props.changeLoginUser}          />
          <input
            type="text"
            className="form-control"
            id="loginpassword"
            placeholder="Enter Password"
            value = {props.password}
            required
            onChange={props.changeLoginPass}          />
          <span className="input-group-btn">
            <button
              className="btn btn-default"
              type="submit"
              
              
            >
              hhhkhk !
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
