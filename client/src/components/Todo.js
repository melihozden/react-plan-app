import React, { Component } from 'react';
import '../css/profile.css';
// import ProfileForm from '../components/ProfileForm' ;
import Moment from 'react-moment';
import { Query } from 'react-apollo';
import {GET_ACTIVE_USER} from '../queries/index'

class Todo extends Component {
    state = {
        isOpen: false            
    }
    render() {
        return (
            
            <div className="outdiv">
            <div className="div-header">
               <span className="quantity">{this.props.quantity}</span> Todo
                    <button className="form-button"><i class="fas fa-ellipsis-h fa-2x"></i></button>
                    <button className="form-button"><i className="fas fa-plus fa-2x"></i></button>
            </div>
            <Query query={GET_ACTIVE_USER}>
                {
                    ({data,loading,error}) =>{
                        
                        if (this.props.quantity === 0 )        
                        {
                            return(
                                <div className="no-content">
                                    You have no plan <i class="far fa-frown fa-2x"></i>
                                    
                                </div>
                            )
                        }
                        if(loading) return <div>Loading Todos</div>
                        if(error) return <div>Todo Error</div>
                        console.log(data)
                        return (
                        <ul className="ul-field" id="ul-deger">
                            {
                               // https://yuilibrary.com/yui/docs/dd/scroll-list.html
                               data.activeUser.todos.map(todos =>(
                                   <div className="out-div-li">
                                    <span className="li-menu">
                                        <button className="li-menu-top-right-button"><i class="fas fa-ellipsis-h fa-lg"></i></button>
                                    </span>
                                    <li key={todos.id} className="li-field">
                                        {todos.todoPlan}
                                    </li>
                                        <span className="date">
                                                <Moment fromNow>{todos.createdAt}</Moment>
                                         </span>
                                    </div>
                                )
                                )
                            }
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