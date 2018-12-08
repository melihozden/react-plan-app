import React, { Component } from 'react';
import {NavLink} from 'react-router-dom' ;
import mainlogo from '../images/whitetrans2x.png';
//css 
import '../css/header.css';
class Header extends Component {
    render() {
        return (
            <div className="horizontal_menu">
                 <img className="mainlogo" src={mainlogo} alt="logo" height="35" width="60" />    
                <NavLink className="navlink" to="/">Home</NavLink>
                <NavLink className="navlink" to="/login">SignIn</NavLink>
                <NavLink className="navlink" to="/register">SignUp</NavLink>
            </div>
        );
    }
}

export default Header;