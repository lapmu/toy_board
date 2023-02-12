import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./List.module.css";

const List = ({ search }) => {
  // id, title, body
  const state = useSelector((state) => state.post);

  const filtered = state.filter((el) => {
    return search.toLowerCase() === ""
      ? el
      : el.title.toLowerCase().includes(search);
  });

  return (
    <div>
      {filtered.map((el, idx) => {
        return (
          <Link to={"/postitem" + idx} key={idx}>
            <section className={classes.main}>
              <div className={classes.idx}>{filtered.length - idx}</div>
              <div className={classes.text}>{el.title}</div>
              <div>{el.createAt}</div>
            </section>
          </Link>
        );
      })}
    </div>
  );
};

export default List;
