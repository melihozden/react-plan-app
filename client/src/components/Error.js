import React from 'react';
import '../css/error.css'

const Error = props => {
    let { message } = props.error
    if (message === "GraphQL error: User already exists.") {
        message = "User Already Exists"
    }


    // console.log(props)
    return (
        <div className="error-design">
            {message}
        </div>
    );
};

export default Error;