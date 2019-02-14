import React from 'react';
import '../css/error.css'

const Error = props => {
    const {message} = props.error
    // console.log(props)
    return (
        <div className="error-design">
            Please check your email/password again
        </div>
    );
};

export default Error;