import React from "react";

import classes from "./List.module.css";

const List = ({ data }) => {
  return (
    <div>
      {data.map((el, idx) => {
        return (
          <section key={idx} className={classes.main}>
            <div className={classes.idx}>{data.length - idx}</div>
            <div className={classes.text}>{el.title}</div>
            <div>{el.createAt}</div>
          </section>
        );
      })}
    </div>
  );
};

export default List;
