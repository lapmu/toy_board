import React from "react";
import Logo from "../img/moomin_logo.png";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.main}>
      <div className={classes.div1}>
        <img className={classes.img} src={Logo} alt="logo" />
      </div>
      <div className={classes.div2}></div>
    </div>
  );
};

export default Header;
