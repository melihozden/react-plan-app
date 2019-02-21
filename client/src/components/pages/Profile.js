import React from 'react';
import Todo from '../Todo';
import Progress from '../Progress';
import Done from '../Done';
import Moment from 'react-moment';

import '../../css/profile.css'

// import { Query } from 'react-apollo';
// import {GET_TODOS, GET_INPROGRESS, GET_DONE} from '../../queries/index'

import auth from '../auth';

const Profile = ({session}) => (
            <div>
                <div className="welcome-div">
                    Welcome back {session.activeUser.fullname}
                </div>
                <div className="createdat-div">
                    Created At : <Moment date={session.activeUser.createdAt} format="DD/MM/YYYY"/>
                </div>

                {/* */}
                <div className="all-div">
                    <Todo quantity={session.activeUser.todos.length} />
                    <Progress quantity={session.activeUser.progresses.length} />
                    <Done quantity={session.activeUser.dones.length} />
                </div>
            </div>
);
export default auth(session => session && session.activeUser)(Profile);