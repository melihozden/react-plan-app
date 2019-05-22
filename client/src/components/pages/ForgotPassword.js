import React, { Component } from 'react'
import "../../css/forgotpsw.css"
export default class ForgotPassword extends Component {

    state = {
        email: ""
    }

    render() {
        return (
            <div className="forgot-group">
                <input className="center w" type="email" name="email" placeholder="enter your mail address here" />
            </div>
        )
    }
}
