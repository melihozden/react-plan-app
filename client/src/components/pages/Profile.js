import React from 'react';
import Todo from '../Todo';
import Progress from '../Progress';
import Done from '../Done';
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
                    Created At : <Moment date={session.activeUser.createdAt} format="DD/MM/YYYY"/>
                </div>
                    <Todo/>
                    <Progress/>
                    <Done/>
            </div>
);
export default auth(session => session && session.activeUser)(Profile);