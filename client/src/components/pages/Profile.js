import React from 'react';
import Todo from '../Todo';
import Moment from 'react-moment';

import auth from '../auth';
const style = {
    color: "white",
    marginLeft: "35px"
}



const Profile = ({session}) => (
            <div>
                <div style={style}>
                    {session.activeUser.email} <br/>
                    Created At : <Moment date={session.activeUser.createdAt} format="YYYY/MM/DD"/>
                </div>
                    <Todo/>
                
            </div>
            
);

export default auth(session => session && session.activeUser)(Profile);