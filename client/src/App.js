import React from "react";
import ReactDom from "react-dom";
import Header from "./WeatherApp/common/Header";
import Routesss from "./Routes";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        _id: null
      }
    };
    this.setUser = this.setUser.bind(this);
  }

  setUser(user) {
    this.setState({ user: user });
  }


 componentDidMount(){
   //ajaxcall - setuser if needed.
 }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header user={this.state.user} />
          <div className="container">
            <Routesss setUser={this.setUser} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDom.render(<App />, document.getElementById("react-app"));
