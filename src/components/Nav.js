import React from "react";
import { Link } from "react-router-dom";

import classes from './Nav.module.css'

const Nav = () => {
  return (
    <section className={classes.section}>
      <Link to="/">
        <div className={classes.text}>Work</div>
      </Link>
      <Link to="/guest">
        <div className={classes.text}>Guest</div>
      </Link>
    </section>
  );
};

export default Nav;