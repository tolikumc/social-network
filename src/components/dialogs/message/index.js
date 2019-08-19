import React from "react";


export const Message = (props) => {
    const {message} = props;
    return (
        <div className='d-message'>
            {message}
        </div>
    )
};
