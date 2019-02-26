import React, { Component } from 'react';
import '../../css/homescreen.css'

class HomeScreen extends Component {
    render() {
        return (
            <div className="all-jumbotron">
                <div className="jumbotron-out-div">
                    <div className="jumbotron-in-div">
                        <h1>Todo</h1>
                        <div className="jumbotron-todo">
                            <p>
                                Note your plan
                            </p>
                        </div>
                    </div>
                    <div className="jumbotron-in-div">
                        <h1>In Progress...</h1>
                        <div className="jumbotron-progress">
                            <p>
                                Get them line
                            </p>
                        </div>
                    </div>
                    <div className="jumbotron-in-div">
                        <h1>Done!</h1>
                        <div className="jumbotron-done">
                            <p>
                                And done it! 
                            </p>
                        </div>

                    </div>
                 </div>
            </div>
        );
    }
}

export default HomeScreen;