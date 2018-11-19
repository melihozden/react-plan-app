import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
<Router>
     <div>
       <Link to="/login">Login</Link>
       <Route path="/login" exact render={
         ()=>{
          return (<Login/>)
         }
       }/>
      </div> 
</Router>
    )
  }
}

export default App;
