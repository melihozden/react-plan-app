import React, { Component } from 'react';
import '../../css/activate.css';
class Activate extends Component {

    componentDidMount = () => {
        // mongodb update isActivate section
    }

    render() {
        return (
            <div className="activate-div-in">
                <div>
                    Your account has been activated :)
                </div>
            </div>
        );
    }
}

export default Activate;