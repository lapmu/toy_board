import React from "react";
import { Link } from "react-router-dom";
import List from "../components/List";

import classes from "./Work.module.css";

const Work = ({ data }) => {
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
      <div className={classes.body}>
        <List data={data} />
      </div>
    </div>
  );
};

export default Work;
