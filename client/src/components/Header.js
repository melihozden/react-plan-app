/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
// import { NavLink } from 'react-router-dom';
import mainlogo from '../images/whitetrans2x.png';
//css 
import '../css/header.css';
import Logout from './Logout'
// import Settings from './Settings'

// import { Nav, NavItem } from 'reactstrap';

const Header = ({ session }) => {
    //console.log(session)
    return (
        <div className="outer-div">
            {
              session.activeUser ? <LinkWithLogin session={session} /> : <LinkWithUnLogin />
            }
        </div>
    );
}
const LinkWithLogin = ({ session }) => (
    <Fragment>
      
        <div class="container">
          <div id="logo-box">
                <a href="/" class="logo">
                    <img src={mainlogo} alt="Freelancer" />
                </a>
            </div>
            <div id="nav-links">
                <ul>
                    <li class="nav-item">
                        <a href="#" className="activeNavLink">sign in with {session.activeUser.fullname}</a>
                    </li>
                    <li>
                        <Logout />
                    </li>
                </ul>
            </div>
        </div>

            {/* <NavLink className="activeNavLink" to="/profile">sign in with {session.activeUser.fullname}</NavLink> */}
          {/* <NavItem>
              <Settings />
          </NavItem> */}
      {/* <Nav>
          <NavItem>
            <NavLink className="activeNavLink" to="/profile">sign in with {session.activeUser.fullname}</NavLink>
          </NavItem> */}
          {/* <NavItem>
              <Settings />
          </NavItem> */}
          {/* <NavItem>
            <Logout />
          </NavItem>
        </Nav> */}

    </Fragment>
)

const LinkWithUnLogin = () => (
    <Fragment>
        <div className="container">
          <div id="logo-box">
            <a href="/" className="logo">
              <img src={mainlogo} alt="Freelancer"/>
            </a>
          </div>
        <div id="nav-links">
            <ul>
                <li class="nav-item">
                    <a href="/login" className="nav-link" to="/login">Login</a>
                </li>
                <li class="nav-item">
                    <a href="/register" className="nav-link navlink-register" to="/register">Join</a>
                </li>
            </ul>
          </div>
        </div>
      {/* <Nav>
          <NavItem>
            <NavLink className="navlink-login" to="/login">Sign in</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navlink-register" to="/register">Sign up</NavLink>
          </NavItem>
        </Nav> */}
    </Fragment>
)



export default Header;