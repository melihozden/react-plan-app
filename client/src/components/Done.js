import React, { Component } from 'react';
import '../css/profile.css';
import ProfileForm from '../components/ProfileForm' ;

class Todo extends Component {
    render() {
        return (
            <div className="outdiv">
               Done Section
               <ProfileForm text3="done"/>

            </div>
        );
    }
}

export default Todo;