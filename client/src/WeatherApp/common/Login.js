import React from "react";
import LoginForm from "./LoginForm";
import Axios from "axios";
import {Redirect} from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      logedIn:false
    };
    this.login = this.login.bind(this);
    // this.onChangeuser = this.onChangeuser.bind(this);
    // this.onChangepass = this.onChangepass.bind(this);
  }

  changeLoginUser(event) {
    let userinfo = event.target.value;
    this.setState({ username: userinfo });
  }
  changeLoginPass(event) {
    let passinfo = event.target.value;
    this.setState({ password: passinfo });
  }


  login(event) {
    event.preventDefault();
    Axios.post("/auth/login", this.state)
      .then((respone) => {
        console.log(respone.data.username);
        let theUser = respone.data;
        this.setState({logedIn:true});
        this.props.setUser(theUser);
        // self.setState({
        //   username: "",
        //   password: ""
        // });
      })
      .catch(function(err) {
        console.log(err);
      });
  }
  
  render() {
    if (this.state.logedIn){
      return <Redirect to="/"/>
    }
    return (
      <div>
        <h4>
          Welcome back {this.state.user}
        </h4>

        <LoginForm
          login={this.login}
          password={this.state.password}
          username={this.state.login}
          changeLoginUser={this.changeLoginUser.bind(this)}
          changeLoginPass={this.changeLoginPass.bind(this)}
        />
      </div>
    );
  }
}

export default Login;
