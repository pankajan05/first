import React from 'react';

function Confirm (props) {
    return (
        <div style={{ border: 'black', backgroundColor: 'gray', textAlign: 'center'}}>
            <div>
                {props.children}
            </div>
            <div>
                <button style={{backgroundColor:'green'}}>Accept</button>
                <button style={{backgroundColor:'red'}}>Delete</button>
            </div>
        </div>
    );
}

export default Confirm;
