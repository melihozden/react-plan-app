import React from 'react';

const Error = props => {
    const {message} = props.error
    // console.log(props)
    return (
        <div>
            {message}
        </div>
    );
};

export default Error;