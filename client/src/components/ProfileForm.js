import React from 'react';
import '../css/profileform.css'

const ProfileForm = (props) =>{
   return( 
   <div className="profile-design">
        <input className="todo-input" type="text" placeholder="let's go"/>
        <button className="form-button"><i className="fas fa-plus fa-2x"></i></button>
        <hr/>
    </div>
   )
}

       
export default ProfileForm;