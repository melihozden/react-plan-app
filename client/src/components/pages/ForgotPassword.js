import React, { Component } from 'react'
import "../../css/forgotpsw.css"

export default class ForgotPassword extends Component {

    state = {
        email: ""
    }

    render() {
        return (
            // TODO 
            // enter your mail address center positioning
            <div>
                <div className="center m-10 s-24">Find your PlanApp Account</div>
                <label className="center s-12 w-500">Please enter your email address.</label>
                <div className="forgot-group">
                    <input className="forgot-email" type="email" name="email" />
                </div>
                <div className="forgot-group">
                    <button className="resetbutton center">Reset</button>
                </div>
            </div>
        )
    }
}
