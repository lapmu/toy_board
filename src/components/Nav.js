import React from "react";
import { Link } from "react-router-dom";

import { GiHamburgerMenu, GiHearts } from "react-icons/gi";
import classes from "./Nav.module.css";

const Nav = ({ onBackgroundHandler }) => {
  return (
    <section className={classes.section}>
      <Link to="/">
        <p className={classes.p}>MMZ</p>
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
      <div className={classes.mainMenu}>
        <div>
         <GiHearts onClick={onBackgroundHandler} className={classes.bg} />
        </div>
        <Link to="/menu">
          <GiHamburgerMenu className={classes.menu} />
        </Link>
      </div>
    </section>
  );
};

export default Nav;
