import React, { Component } from 'react';
import "../../css/login.css"
import logo2 from "../../images/blacktransx.png"

// import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';
//queries 
import { SIGNIN_USER } from '../../queries/index';
// error component
import Error  from '../Error';

const initialState = {
  email: '',
  password: '',
}
// const modalState = {
//   modalOpen: false
// }


class Login extends Component {

  state = {
    ...initialState,
    // ...modalState
  };

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })
  
  handleChange = (e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  handleSubmit = (e, signinUser)=> {
    e.preventDefault();
    signinUser().then(async({data})=>{
      console.log(data)
      localStorage.setItem('token',data.signIn.token)
      await this.props.refetch() ;
      this.resetState()
      this.props.history.push('/profile');
    })
  }
  formValidate = () =>{
    const {email,password} = this.state ;
    // null email,password,confirm also password must equals to confirm
      return (!email || !password)
    }

    resetState = () =>{
      this.setState({
        ...initialState
      })
    } 
    render() {
      const {email,password} = this.state ;
        return (
  <div className="login-box-2">
    <div className="login-div">
      <img className="logo-des" src={logo2} alt="logo" height="50" width="75" />    
      <h3 className="title-name">Welcome to Planet App</h3>
    <Mutation mutation={SIGNIN_USER} variables={{email,password}}>
          {(signinUser,{loading,error})=>(
            <form className="email-login" onSubmit={e =>{
              this.handleSubmit(e,signinUser)
            }}>
               {loading && <div>loading...</div>}
               {error && <Error error={error} />}
              <div className="u-form-group">
                <input className="login-email-text" value={email}  type="email" name="email" placeholder="abc@example.com" onChange={this.handleChange} autoComplete="true"/>
              </div>

              <div className="u-form-group">
                <input className="login-password-text" value={password}  type="password" name="password" placeholder="Enter your password" onChange={this.handleChange} autoComplete="true"/>
              </div>

              <div className="u-form-group">
                <input type="checkbox" className="remember-me" name="scales"/>
                <label>Remember me</label>
                <a href=" " className="forgot-password">Forgot password?</a>
              </div>

              <div className="u-form-group">
                <button disabled={loading || this.formValidate()}>Login</button>
                <p>Don't have an account? <a href="/register" className="forgot-tag">Sign Up</a></p>
              </div>

              <hr className="seperator"/>

              <p className="login-with">-Or connect with-</p>

              <div className="u-form-group">
                <button className="google-button"><i className="fab fa-google-plus-g fa-2x"></i></button>
                <button className="facebook-button"><i className="fab fa-facebook fa-2x"></i></button>
                <button className="twitter-button"><i className="fab fa-twitter fa-2x"></i></button>
              </div>
</form>
          )}
    </Mutation>
    
    </div>
          </div>
        );
    }
}

export default withRouter(Login);