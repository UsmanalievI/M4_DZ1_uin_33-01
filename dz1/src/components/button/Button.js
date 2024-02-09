import React from "react";
import classes from './Button.module.css'

const Button=({app})=>{
    return(
        <>
            <button className={classes.btn}>{app}</button>
        </>
    )
}

export default Button;