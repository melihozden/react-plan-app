import React, { Component } from 'react';
import '../css/profile.css';
import ProfileForm from '../components/ProfileForm' ;
import Moment from 'react-moment';
import { Query } from 'react-apollo';
import {GET_ACTIVE_USER} from '../queries/index'

class Todo extends Component {
    render() {
        return (
            <div className="outdiv">
               Todo Section
                <ProfileForm text1="todo"/>
            <Query query={GET_ACTIVE_USER}>
                {
                    ({data,loading,error}) =>{
                        if(loading) return <div>Loading Todos</div>
                        if(error) return <div>Todo Error</div>
                        console.log(data)
                       return (
                        <ul className="ul-field" id="ul-deger">
                            {
                               // https://yuilibrary.com/yui/docs/dd/scroll-list.html
                                data.activeUser.todos.map(todos =>(
                                    <li key={todos.id} className="li-field">
                                        <div className="text">{todos.todoPlan}
                                            <div className="date">
                                                <Moment fromNow>{todos.createdAt}</Moment>
                                            </div>
                                        </div>
                                    </li>
                                )
                                )
                            }
                            <div className="post">{data.activeUser.todos.length} todo(s)</div>
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