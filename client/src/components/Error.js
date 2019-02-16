import React from 'react';
import '../css/error.css'

const Error = props => {
    const {message} = props.error
    // console.log(props)
    return (
        <div className="error-design">
            {message}
        </div>
    );
};

export default Error;