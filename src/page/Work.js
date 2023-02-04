import React, { useState } from "react";
import { Link } from "react-router-dom";
import List from "../components/List";

import classes from "./Work.module.css";

const Work = ({ data, onChangeSearch, search }) => {

  return (
    <div className={classes.main}>
      <div className={classes.backButton}>
        <p>Total {data.length}</p>
        <Link to="/newpost">
          <button type="submit" className={classes.button}>
            New Post
          </button>
        </Link>
      </div>
      <form className={classes.inputDiv} >
        <input className={classes.input} placeholder="search" onChange={onChangeSearch} ></input>
      </form>
      <div className={classes.body}>
        <List data={data} search={search} />
      </div>
    </div>
  );
};

export default Work;
