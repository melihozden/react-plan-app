import React from 'react';
import '../css/error.css'

const Error = props => {
    let { message } = props.error
    if (message === "GraphQL error: User already exists.") {
        message = "User Already Exists"
    }
    else if(message === "GraphQL error: User could not find!") {
        message = "User could not find"
    }
    // console.log(props)
    return (
        <div className="error-design">
            {message}
        </div>
    );
};

export default Error;