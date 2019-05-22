import React from 'react';
import Todo from '../Todo';
import Progress from '../Progress';
import Done from '../Done';
import Moment from 'react-moment';
import { Alert } from 'react-bootstrap';
import '../../css/profile.css'

// import { Query } from 'react-apollo';
// import {GET_TODOS, GET_INPROGRESS, GET_DONE} from '../../queries/index'

import auth from '../auth';

const Profile = ({ session }) => (
    <div>
        <Alert dismissible variant="danger">
            <Alert.Heading className="center">Oh snap! You didn't activate account yet!</Alert.Heading>
            <p className="center"> 
                Please activate your account. We sent you a mail to activate your account.
            </p>
        </Alert>
        <div className="welcome-div">
            Welcome back {session.activeUser.fullname}
        </div>
        <div className="createdat-div">
            Created At : <Moment date={session.activeUser.createdAt} format="DD/MM/YYYY" />
        </div>

        {/* */}
        <div className="all-div">
            <Todo quantity={session.activeUser.todos.length} id={session.activeUser.id} />
            <Progress quantity={session.activeUser.progresses.length} id={session.activeUser.id} />
            <Done quantity={session.activeUser.dones.length} id={session.activeUser.id} />
        </div>
    </div>
);
export default auth(session => session && session.activeUser)(Profile);