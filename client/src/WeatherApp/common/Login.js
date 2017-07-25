import React from "react";
import LoginForm from "./LoginForm";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: ""
    };
    this.login = this.login.bind(this);
  }
  login() {
    const loginInfo = {
      user: document.getElementById("loginusername").value,
      password: document.getElementById("loginpassword").value
    } 
    console.log(loginInfo)
  }

  render() {
    return (
      <div>
        <LoginForm login={this.login} />
      </div>
    );
  }
}

export default Login;
