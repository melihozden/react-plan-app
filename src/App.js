import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import Register from './components/Register';

class App extends Component {
  render() {
    return (
<Router>
     <div>
       <Link to="/login">Login</Link><br/><br/>
       <Link to="/register">Register</Link>
       <Route path="/login" exact render={
         ()=>{
          return (<Login/>)
         }
       }/>
       <Route path="/register" exact render={
         ()=>{
          return (<Register/>)
         }
       }/>
      </div> 
</Router>
    )
  }
}

export default App;
