import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import ApolloClient from 'apollo-boost' ;
import {ApolloProvider} from 'react-apollo' ;

const client = new ApolloClient({
    uri: "http://localhost:4001/graphql",
    fetchOptions:{
        credentials:'include'    // for session use same-origin
    },
    request: operation => {
        operation.setContext({
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
    }
})
ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
     document.getElementById('root'));
