import React from "react";
import { Link } from "react-router-dom";

import logo from "../img/moomin_logo.png";
import { GiHamburgerMenu } from 'react-icons/gi' 
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <section className={classes.section}>
      <Link to="/">
        <p>logo</p>
        {/* <img src={logo} alt="logo" className={classes.img} /> */}
      </Link>
      <div className={classes.mainMenu}>
        <Link to="/aboutus">
          <div className={classes.content}>About Us</div>
        </Link>
        <Link to="/work">
          <div className={classes.content}>Case Study</div>
        </Link>
        <Link to="/guest">
          <div className={classes.content}>Guest Book</div>
        </Link>
      </div>
      <div>
        <Link to='/menu'>
        <GiHamburgerMenu />
        </Link>
      </div>
    </section>
  );
};

export default Nav;
