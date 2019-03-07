import React,{Fragment} from 'react';
import {NavLink} from 'react-router-dom' ;
import mainlogo from '../images/whitetrans2x.png';
//css 
import '../css/header.css';
import Logout from './Logout'
import Settings from './Settings'
const  Header = ({session})=> {
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
    const LinkWithLogin = ({session}) =>(
        <Fragment>
            <NavLink className="activeNavLink" to="/profile">sign in with {session.activeUser.fullname}</NavLink>
            <Settings/>
            <Logout/>
        </Fragment>   
)

    const LinkWithUnLogin = () =>(
        <Fragment>  
            <div className="rightLoginRegister">
                {/* <NavLink className="navlink" to="/">Home</NavLink> */}
                <NavLink className="navlink-login" to="/login">Login</NavLink>
                <NavLink className="navlink-register" to="/register">Register</NavLink>
                {/* <i class="fab fa-github fa-lg"></i> */}
             </div>
        </Fragment>

)



export default Header;