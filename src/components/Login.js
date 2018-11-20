import React, { Component } from 'react';
import "../css/login.css"; 
import logo from "../images/whitetrans2x.png"
import logo2 from "../images/blacktransx.png"

// import {BrowserRouter as Router, Route} from 'react-router-dom';
class Login extends Component {




    render() {


        return (
            <div className="login-box">
    <div className="left-div">
        <div className="dark-logo">
          <img className="logo-des" src={logo} alt="logo" height="50" width="75" />
        </div>
    </div>
    <div className="right-div">
      <img className="logo-des-2" src={logo2} alt="logo" height="50" width="75" />    
    <h3 className="title-name">Welcome PlanWork</h3>
    <form className="email-login">
      <div className="u-form-group">
        <input type="email" placeholder="Email"/>
      </div>
      <div className="u-form-group">
        <input type="password" placeholder="Password"/>
      </div>
      <div className="u-form-group">
        <input type="checkbox" className="remember-me" name="scales"/>
        <label>Remember me</label>
        <a href=" " className="forgot-password">Forgot password?</a>
      </div>
      <div className="u-form-group">
        <button>Login</button>
        <p>Don't have an account? <a href=" " className="forgot-tag">Sign Up</a></p>
      </div>
      <hr className="seperator"/>
      <p className="login-with">-Or connect with-</p>
      <div className="u-form-group">
        <button className="google-button"><i className="fab fa-google-plus-g"></i>Google+</button>
        <button className="facebook-button"><i className="fab fa-facebook"></i> Facebook</button>
        <button className="twitter-button"><i className="fab fa-twitter"></i> Twitter</button>
    </div>
    </form>

   


    </div>
    
  </div>
        );
    }
}

export default Login;