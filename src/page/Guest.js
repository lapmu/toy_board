import React from "react";
import { Link } from "react-router-dom";
import classes from './Guest.module.css'

const Guest = ({Guest}) => {
    return(
        <div className={classes.Guest}>
            <div className={classes.newGuest}>
                <Link to="/write">
                    <div>New Guest</div>
                </Link>
            </div>
            <div className={classes.dataGuest}>
                {Guest.map((el, idx) => {
                    
                    return(
                        <div key ={idx} className={classes.content}>
                            <div>{el.title}</div>
                            <div>{el.author}</div>
                        </div>
                    )
                })}
            </div>
        </div>
        )}

export default Guest;