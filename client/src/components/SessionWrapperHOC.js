import React from 'react';
import {Query} from 'react-apollo';
import { GET_ACTIVE_USER } from '../queries/index';


const SessionWrapperHOC = Component => props =>(
    <Query query={GET_ACTIVE_USER}>
        {
            ({data,loading,refetch}) => {
                console.log(data)
                if(loading) return <div style={{textAlign:'center'}}>Loading...</div>
                return <Component {...props} refetch={refetch} session={data} />
            }
        }
    </Query>
)
export default SessionWrapperHOC;