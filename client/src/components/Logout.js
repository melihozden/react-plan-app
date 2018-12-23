import React from 'react';
import {ApolloConsumer} from 'react-apollo';
import '../css/profile.css';
import { withRouter } from 'react-router-dom';
import '../css/logout.css' ;

const onClick = (history,client) =>{
    localStorage.removeItem('token','');
    history.push('/');
    client.resetStore();
}

const logout = ({history}) =>(
    <ApolloConsumer>
    {
        (client) =>{
            // console.log(client)
            return <button className="logout-button" onClick={()=>onClick(history,client)}>logout</button>
        }
    }
    </ApolloConsumer>
)

export default withRouter(logout);