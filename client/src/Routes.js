import React from 'react';
import WeatherApp from './WeatherApp';
import About from './weatherApp/common/About';
import Register from './weatherApp/common/Register';
import Login from './weatherApp/common/Login';
import Page404 from './weatherApp/common/404';
import {Switch, Route} from 'react-router-dom';

const Routesss = (props) => {
    console.log(props.setUser);
    return (
    <div className="container">
         <Switch>
            <Route name="home" exact path='/' component={WeatherApp} />
            <Route name="about" exact path='/about' component={About} />
            <Route name="register" exact path='/register' render={()=> <Register setUser={props.setUser}/>} />
            <Route name="login" exact path='/login' render={()=><Login setUser={props.setUser}/>}/>

            <Route path="*" component={Page404}/>
        </Switch>
    </div>
)
}
export default Routesss;
