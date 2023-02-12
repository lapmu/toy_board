import React from "react";

import classes from "./Main.module.css";

import logo from "../img/mnmz_logo.png";

const Main = () => {
  return (
    <div className={classes.main}>
      <div className={classes.title}>M&MZ</div>
      <div className={classes.title_2}>
        <span>
          When you have faults, do not fear to abandon them. – Confucius
        </span>
      </div>
    </div>
  );
};

export default Main;
