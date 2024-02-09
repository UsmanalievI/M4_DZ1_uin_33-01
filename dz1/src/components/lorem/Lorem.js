import React from "react";
import classes from './Lorem.module.css'

const Lorem=({children})=>{
    return (
        <>
            <div className={classes.list}>
                {children}
            </div>
        </>
        
    )
}

export default Lorem;