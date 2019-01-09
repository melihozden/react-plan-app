import React, { Component } from 'react';
import '../css/profile.css'
import ProfileForm from '../components/ProfileForm' ;

class Todo extends Component {
    render() {
        return (
            <div className="outdiv">
               In Progress Section
               <ProfileForm text2="inprogress"/>            
            </div>
        );
    }
}

export default Todo;