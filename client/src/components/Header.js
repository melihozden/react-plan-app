import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import mainlogo from '../images/whitetrans2x.png';
//css 
import '../css/header.css';
import Logout from './Logout'
import Settings from './Settings'

import { Nav, NavItem } from 'reactstrap';

const Header = ({ session }) => {
    //console.log(session)
    return (
        <div className="horizontal_menu">
            <img className="mainlogo" src={mainlogo} alt="logo" height="35" width="60" />
            {
                session.activeUser ? <LinkWithLogin session={session} /> : <LinkWithUnLogin />
            }
        </div>
    );
}
const LinkWithLogin = ({ session }) => (
    <Fragment>
        <div className="activeRightHeader">
        <Nav>

          <NavItem>
            <NavLink className="activeNavLink" to="/profile">sign in with {session.activeUser.fullname}</NavLink>
          </NavItem>

          {/* <NavItem>
              <Settings />
          </NavItem> */}

          <NavItem>
            <Logout />
          </NavItem>
        </Nav>
      </div>


    </Fragment>
)

const LinkWithUnLogin = () => (
    <Fragment>
        <div className="rightLoginRegister">
        <Nav>
          <NavItem>
            <NavLink className="navlink-login" to="/login">Sign in</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navlink-register" to="/register">Sign up</NavLink>
          </NavItem>
        </Nav>
      </div>
    </Fragment>
)



export default Header;