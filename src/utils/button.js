import React from 'react';

const Button = (props) => {

    let styles ={
        backgroundColor: props.bck,
        color: props.color,
        padding:props.pad,
        width:props.width,
        margin:props.margin,
        cursor:props.cursor,
        boxShadow:props.shadow
    }
    return (
        <div style={styles} className='btn' >
            {props.children}
        </div>
    );
};

export default Button;