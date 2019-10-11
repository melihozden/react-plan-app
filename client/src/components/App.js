import React, { Component, Fragment } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
//css
import '../css/App.css';
import SessionWrapperHOC from './SessionWrapperHOC';
//pages
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import HomeScreen from './pages/HomeScreen';
import Activate from './pages/Activate';
import Header from './Header';
import ForgotPassword from './pages/ForgotPassword';
// import Footer from './Footer';

const Root = ({ refetch, session }) => (
  <Router>
    <Fragment>
      {/* Props given down */}
      <Header session={session} />  
      <Switch>
        {/* <Link to="/login">Login</Link><br/><br/>
      <Link to="/register">Register</Link> */}
        <Route path="/login" render={() => <Login refetch={refetch} />} />
        <Route path="/register" render={() => <Register refetch={refetch} />} />
        <Route path="/profile" render={() => <Profile session={session} />} />
        <Route path="/activate" render={() => <Activate refetch={refetch} />} />
        <Route path="/forgotpassword" render={() => <ForgotPassword refetch={refetch} />} />

        <Route path="/" render={() => <HomeScreen refetch={refetch} />} />
        <Redirect to="/login" />
        {/*<Home/>   if everything goes correct (user logged in completely) */}
      </Switch>
      {/* <Footer/> */}
    </Fragment>
  </Router>
)

const RootWithSessionWrapper = SessionWrapperHOC(Root);

class App extends Component {
  render() {
    return (
      <div>
        <RootWithSessionWrapper />
      </div>
    )
  }
}

export default App;
