import React from "react";

import classes from "./List.module.css";

const List = ({ data }) => {
  return (
    <div>
      {data.map((el, idx) => {
        return (
          <div key={idx} className={classes.main}>
            <div className={classes.idx}>{data.length - idx}</div>
            <div className={classes.text}>{el.title}</div>
            <p>날짜 나오면 좋겠는데</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
