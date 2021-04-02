import React from 'react';

const Comment = (props) =>
{
    return (
        <div>
            <div><h4>{props.author}</h4></div>
            <div>This is a Sample Comment <span style={{color : 'red'}}> Today 20:40</span></div>
        </div>
    );
};

export default Comment;
