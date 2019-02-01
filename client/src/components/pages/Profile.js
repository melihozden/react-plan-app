import React from 'react';
import Todo from '../Todo';
import Progress from '../Progress';
import Done from '../Done';
import Moment from 'react-moment';

// import { Query } from 'react-apollo';
// import {GET_TODOS, GET_INPROGRESS, GET_DONE} from '../../queries/index'

import auth from '../auth';
const style = {
    color: "white",
    marginTop: "10px",
    marginLeft: "20px"
}
const Profile = ({session}) => (
            <div>
                <div style={style}>
                    "Welcome {session.activeUser.fullname}" <br/>
                    Created At : <Moment date={session.activeUser.createdAt} format="DD/MM/YYYY"/>
                </div>

                {/* */}


                    <Todo quantity={session.activeUser.todos.length} />
                    <Progress quantity={session.activeUser.progresses.length} />
                    <Done quantity={session.activeUser.dones.length} />
            </div>
);
export default auth(session => session && session.activeUser)(Profile);