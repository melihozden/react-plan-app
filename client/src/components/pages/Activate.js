import React, { Component } from 'react';
import '../../css/activate.css';
import { Button,Dropdown } from 'react-bootstrap';
class Activate extends Component {

    componentDidMount = () =>{

    }

    render() {
        return (
                    <div className="activate-div-in">
                        <div>
                        Your account has been activated :)
                        </div>
                        <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    </div>
        );
    }
}

export default Activate;