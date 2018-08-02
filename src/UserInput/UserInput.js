import React from 'react';

const userInput = (props) => {
    const styleInput = {
        border:'2px solid red'
    };

    return (
        <input type="text" style={styleInput} onChange={props.change} value={props.value}/>
    )

}

export default userInput;