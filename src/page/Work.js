import React from "react";
import { Link } from "react-router-dom";

import classes from "./Work.module.css";

import List from "../components/List";
import Button from "../components/UI/Button";

const Work = ({ data, onChangeSearch, search }) => {
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
        <p>Total {data.length}</p>
      </div>
        <Link to="/newpost">
          <Button type="submit" className={classes.button}>
            New Post
          </Button>
        </Link>
        <div className={classes.body}>
          <List data={data} search={search} />
        </div>
    </div>
  );
};

export default Work;
