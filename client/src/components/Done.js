import React, { Component } from 'react';
import '../css/profile.css';
import ProfileForm from '../components/ProfileForm' ;
import Moment from 'react-moment';
import { Query } from 'react-apollo';
import {GET_ACTIVE_USER} from '../queries/index';


class Todo extends Component {
    render() {
        return (
            <div className="outdiv">
                <div className="div-header">
               <span className="quantity">{this.props.quantity}</span> Progress Section
                    <button className="form-button"><i className="fas fa-plus fa-2x"></i></button>
            </div>
               <Query query={GET_ACTIVE_USER}>
                {
                    ({data,loading,error}) =>{
                        if(loading) return <div>Loading Dones</div>
                        if(error) return <div>Done Error</div>
                        console.log(data)
                       return (
                        <ul className="ul-field">
                            {
                                data.activeUser.dones.map(done =>(
                                    <li key={done.id} className="li-field">
                                        <div className="text">{done.donePlan}
                                            <div className="date">
                                                <Moment fromNow>{done.createdAt}</Moment>
                                            </div>
                                        </div>
                                    </li>
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