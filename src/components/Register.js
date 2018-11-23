import React, { Component } from 'react';
import "../css/register.css"; 
import logo from "../images/whitetrans2x.png"
import logo2 from "../images/blacktransx.png"


class Register extends Component {
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
        <input  type="email" placeholder="Email"/>
      </div>

      <div className="u-form-group">
        <input type="password" placeholder="Password"/>
      </div>

      <div className="u-form-group">
        <input type="password" placeholder="Confirm Password"/>
      </div>

      <div className="u-form-group">
        <button>Login</button><br/><br/>
      </div>
     
      <hr className="seperator"/>
     
      <p className="login-with">-Or register with-</p>
     
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

export default Register;