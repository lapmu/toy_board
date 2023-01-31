import React from "react";

import classes from "./List.module.css";

const List = ({ data }) => {
  return (
    <div>
      {data.map((el, idx) => {
        return (
          <li key={idx} className={classes.content}>
            <a>{el.title}</a>
          </li>
        );
      })}
    </div>
  );
};

export default List;
