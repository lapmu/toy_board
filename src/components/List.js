import React from "react";

import classes from "./List.module.css";

const List = ({ data }) => {
  return (
    <div>
      {data.map((el, idx) => {
        return (
          <li key={idx} className={classes.li}>
            <p className={classes.p}>{data.length - idx}</p>
            <a className={classes.a}>{el.title}</a>
            <p>날짜 나오면 좋겠는데</p>
          </li>
        );
      })}
    </div>
  );
};

export default List;
