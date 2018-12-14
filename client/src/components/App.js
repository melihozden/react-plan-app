import React, { Component,Fragment } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
  Redirect} from 'react-router-dom'
  //css
import '../css/App.css';  
  //pages
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Header from './Header';

const Root = () =>(

<Router>
  <Fragment>
      <Header/>
    <Switch>
      {/* <Link to="/login">Login</Link><br/><br/>
      <Link to="/register">Register</Link> */}
      <Route path="/login" component = {Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/home" component={Home}/>
      <Redirect to="/login"/>
      {/*<Home/>   if everything goes correct (user logged in completely) */}   
    </Switch>
      </Fragment>
  </Router>
)

class App extends Component {
  render() {
    return (
    <div>
      <Root/>
    </div>
    )
  }
}

export default App;
