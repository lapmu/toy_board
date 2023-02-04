import React from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./List.module.css";

const List = ({ data }) => {
  // id, title, body, createAt

  return (
    <div>
      {data.map((el, idx) => {
        return (
          <Link to={"/postitem" + idx} key={idx}>
            <section className={classes.main}>
              <div className={classes.idx}>{data.length - idx}</div>
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

// card 누르면 PostItem 열리게 하기 onClick={}
// 내려주는 함수에 라우터를 걸어야 하나?
// 라우터 걸어서 열고
// 프롭스 내려 주고
//
