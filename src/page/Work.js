import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./Work.module.css";

import List from "../components/List";
import Button from "../components/UI/Button";

const Work = ({ onChangeSearch, search }) => {
  const state = useSelector((state) => state.post);
  return (
    <div className={classes.main}>
      <div className={classes.title}>
        <p>Case Study</p>
        <form className={classes.inputDiv}>
          <input
            className={classes.input}
            placeholder="search"
            onChange={onChangeSearch}
          ></input>
        </form>
      </div>
      <div className={classes.total}>
        <p>Total {state.length}</p>
      </div>
      <Link to="/newpost">
        <Button type="submit" className={classes.button}>
          New Post
        </Button>
      </Link>
      <div className={classes.body}>
        <List search={search} />
      </div>
    </div>
  );
};

export default Work;
