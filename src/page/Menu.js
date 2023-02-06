import React from "react";
import { Link } from "react-router-dom";

import classes from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={classes.main}>
      <article className={classes.name}>
        <div className={classes.moo}>
          <h1>Moo</h1>
          <a href="https://github.com/lapmu" target={"_blank"} rel="noreferrer">
            Github
          </a>
          <a
            href="https://mylearningcoding.tistory.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            Blog
          </a>
          <a
            href="https://www.instagram.com/l_apmu/"
            target={"_blank"}
            rel="noreferrer"
          >
            Insta
          </a>
          <span>antjdgkdl@gmail.com</span>
        </div>
        <div className={classes.min}>
          <h1>Min</h1>
          <a
            href="https://github.com/dding-v/"
            target={"_blank"}
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://dding-v.tistory.com"
            target={"_blank"}
            rel="noreferrer"
          >
            Blog
          </a>
          <a
            href="https://www.instagram.com/mxnxeong/"
            target={"_blank"}
            rel="noreferrer"
          >
            Insta
          </a>
          <span>v.dding.v@gmail.com</span>
        </div>
      </article>
      <article className={classes.board}>
        <Link to='/aboutus'>
            <p>About Us</p>
        </Link>
        <Link to='/work'>
            <p>Case Study</p>
        </Link>
        <Link to='/guest'>
            <p>Guest Book</p>
        </Link>
      </article>
    </div>
  );
};

export default Menu;
