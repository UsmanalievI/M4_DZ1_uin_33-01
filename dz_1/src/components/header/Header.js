import React from "react";
import classes from './Header.module.css'

const Header=({navbar})=>{
    return (
        <ul className={classes.list}>{
            navbar.map((item, index)=>
            <li className={classes.item}>{item}</li>
            )}
        </ul>
    )
}

export default Header;