import React from "react";
import { Link } from "react-router-dom";

import classes from "./BackSpace.module.css";

const BackSpace = (props) => {
  return (
    <Link to={props.to}>
        <div className={classes.backspace}>{"<"}</div>
    </Link>
  );
};

export default BackSpace;
