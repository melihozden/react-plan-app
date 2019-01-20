import React, { Component } from 'react';
import '../css/profile.css'
import ProfileForm from '../components/ProfileForm' ;
import Moment from 'react-moment';
import { Query } from 'react-apollo';
import {GET_ACTIVE_USER} from '../queries/index';

class Todo extends Component {
    render() {
        return (
            <div className="outdiv">
               In Progress Section
               <ProfileForm text2="inprogress"/>       
               <Query query={GET_ACTIVE_USER}>
                {
                    ({data,loading,error}) =>{
                        if(loading) return <div>Loading Progresses</div>
                        if(error) return <div>Progresses Error</div>
                        console.log(data)
                       return (
                        <ul className="ul-field">
                            {
                                data.activeUser.progresses.map(progress =>(
                                    <li key={progress.id} className="li-field">
                                        <div className="text">{progress.progressPlan}
                                            <div className="date">
                                                <Moment fromNow>{progress.createdAt}</Moment>
                                            </div>
                                        </div>
                                    </li>
                                )
                                )
                            }
                            <div className="post">{data.activeUser.progresses.length} progress(es)</div>
                        </ul>
                       )
                    }
                }
            </Query>     
            </div>
        );
    }
}

export default Todo;