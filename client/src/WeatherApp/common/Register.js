import React from "react";
import RegisterForm from "./RegisterForm";
import Axios from "axios";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.register = this.register.bind(this);
    this.onChangeuser = this.onChangeuser.bind(this);
    this.onChangepass = this.onChangepass.bind(this);
  }

  onChangeuser(event) {
    let userinfo = event.target.value;
    this.setState({ username: userinfo });
  }
  onChangepass(event) {
    let passinfo = event.target.value;
    this.setState({ password: passinfo });
  }

  register(event) {
    event.preventDefault();
    var self = this;
    Axios.post("/auth/register", this.state)
      .then(function(respone) {
        debugger;
        self.setState({
          username: "",
          password: ""
        });
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
                  Welcome back {this.state.username}

        <RegisterForm
          register={this.register}
          password={this.state.password}
          username={this.state.username}
          onChangeuser={this.onChangeuser.bind(this)}
          onChangepass={this.onChangepass.bind(this)}
        />
      </div>
    );
  }
}

export default Register;
