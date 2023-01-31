import React from "react";
import { Link } from "react-router-dom";
import List from "../components/List";

import classes from "./Work.module.css";

const Work = ({ data }) => {
  return (
    <div className={classes.main}>
      <div className={classes.buttonContent}>
        <Link to="/newpost">
          <button type="submit" className={classes.button}>
            Submit
          </button>
        </Link>
      </div>
      <List data={data} />
    </div>
  );
};

export default Work;
