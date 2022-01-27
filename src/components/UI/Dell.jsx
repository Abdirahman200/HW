import React from 'react';
import classes from "./Button.module.css"

const Dell = (props) => {
        return (
        <button id={props.id} className={`${classes.button} ${props.className}`} type={props.type || "button"} onClick={props.onClick} >
            {props.children}
        </button>
    );
};

export default Dell;