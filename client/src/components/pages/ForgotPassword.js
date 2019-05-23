import React, { Component } from 'react'
import "../../css/forgotpsw.css"




export default class ForgotPassword extends Component {

    state = {
        email: ""
    }

    render() {
        return (
            <div className="forgot-group">
                <input className="forgot-email" type="email" name="email" placeholder="enter your mail address here" />
            </div>
        )
    }
}
