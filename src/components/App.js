import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import '../css/App.css';
import Login from './pages/Login';
import Register from './pages/Register';

class App extends Component {
  render() {
    return (
<Router>
     <div>

       {/*Switch dene sonra */}
       <Link to="/login">Login</Link><br/><br/>
       <Link to="/register">Register</Link>
       <Route path="/login" component = {Login}/>
       <Route path="/register" component={Register}/>
      </div> 
</Router>
    )
  }
}

export default App;
