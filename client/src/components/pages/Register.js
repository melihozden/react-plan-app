//react 
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';

//css
import "../../css/register.css"; 

//images and logos
import logo2 from "../../images/blacktransx.png"
import registerwall from '../../images/building.png'
// import logo from "../../images/whitetrans2x.png"


//queries 
import { CREATE_USER } from '../../queries/index';

//error
import Error from '../Error';

const initialState = {
    fullname: '',
    email: '',
    password: '',
    confirm: '',
    isConfirm : false
}

class Register extends Component {
    
    state = {
      ...initialState
      };
      handleChange = (event)=> {
        this.setState({
           [event.target.name] : event.target.value
        });
    }
      handleSubmit = (e, createUser)=> {
        e.preventDefault();
        createUser().then(async({data})=>{
          console.log(data)
          localStorage.setItem('token',data.createUser.token)
           await this.props.refetch() ;
          this.resetState()
          this.props.history.push('/profile')
        })
      }
      formValidate = () =>{
      const {fullname,email,password,confirm} = this.state ;
      // null email,password,confirm also password must equals to confirm
        return (!fullname || !email || !password || !confirm || password !== confirm)
      }

      resetState = () =>{
        this.setState({
          ...initialState
        })
      } 

    render() {
      const {fullname,email,password,confirm} = this.state ;
        return (
            <div className="login-box">
            
    <div className="left-div">
    <img className="" src={registerwall} alt="register" height="520" width="350" />    
    </div>
   
    <div className="right-div">
      <img className="logo-des-2" src={logo2} alt="logo" height="50" width="75" />    
      <h3 className="title-name">Welcome to Planet App</h3>
    
    <Mutation mutation={CREATE_USER} variables={{fullname,email,password}}>
    {(createUser,{loading,error}) =>(
       <form className="email-signup" onSubmit={(e)=>{
         this.handleSubmit(e,createUser)
        }}>

       {loading && <div>loading...</div>}
        {error && <Error error={error} />}
       <div className="u-form-group">
         <input className="fullname" value={fullname} type="text" name="fullname" placeholder="Full Name" onChange={this.handleChange} autoComplete="true"/>
       </div>

       <div className="u-form-group">
         <input className="email" value={email} type="email" name="email" placeholder="Email" onChange={this.handleChange} autoComplete="true"/>
       </div>
 
       <div className="u-form-group">
         <input className="password" value={password} type="password" name="password" placeholder="Password" onChange={this.handleChange} autoComplete="true"/>
       </div>
 
       <div className="u-form-group">
         <input className="confirm" value={confirm} type="password" name="confirm" placeholder="Confirm Password" onChange={this.handleChange} autoComplete="true"/>
       </div>
 
       <div className="u-form-group">
         <button disabled={loading || this.formValidate()}>Register</button>
         <p>Already have an account? <a href="/login" className="forgot-tag">Login</a></p>          
       </div>
      
 
       <hr className="seperator"/>
      
       <p className="login-with">-Or sign up with-</p>
      
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

export default withRouter(Register);