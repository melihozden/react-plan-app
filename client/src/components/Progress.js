import React, { Component } from 'react';
import '../css/profile.css'
// import ProfileForm from '../components/ProfileForm' ;
import Moment from 'react-moment';
import { Query } from 'react-apollo';
import {GET_ACTIVE_USER} from '../queries/index';

class Todo extends Component {
    render() {
        return (
            <div className="outdiv">
              <div className="div-header">
               <span className="quantity">{this.props.quantity}</span> In Progress
                    <button className="form-button"><i className="fas fa-plus fa-2x"></i></button>
            </div>
               <Query query={GET_ACTIVE_USER}>
                {
                    ({data,loading,error}) =>{
                        if (this.props.quantity === 0 )        
                        {
                            return(
                                <div className="no-content">
                                    You have no in progress <i class="far fa-frown fa-2x"></i>
                                </div>
                            )
                        }
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