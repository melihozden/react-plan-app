import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import '../../css/homescreen.css'

class HomeScreen extends Component {
    render() {
        return (
            <div className="all-div">
                <div className="jumbotron-out-div">
                    <div className="jumbotron-in-div">
                        <Jumbotron>
                        <h1>Hello, world!</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                        </Jumbotron>
                    </div>
                    <div className="jumbotron-in-div">
                        <Jumbotron>
                        <h1>Hello, world!</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                        </Jumbotron>
                    </div>
                    <div className="jumbotron-in-div">
                        <Jumbotron>
                        <h1>Hello, world!</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                        </Jumbotron>
                    </div>
                 </div>
            </div>
        );
    }
}

export default HomeScreen;