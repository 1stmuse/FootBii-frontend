import React from 'react';

const Button = (props) => {

    let styles ={
        backgroundColor: props.bck,
        color: props.color,
        padding:props.pad
    }
    return (
        <div style={styles} className='btn' >
            {props.text}
        </div>
    );
};

export default Button;