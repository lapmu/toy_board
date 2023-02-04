import React from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./PpstItem.module.css";

const PostItem = ({ data }) => {
  const navigate = useNavigate();

  const onBackSpace = (e) => {
    navigate("/");
  };

  return (
    <div className={classes.main}>
      <div className={classes.backsubmit}>
        <Link to="/">
          <p className={classes.p}>{"<"}</p>
        </Link>
        <div>
          {" "}
          {/* 추후 아이콘으로 바꿀 거 고려해 보기 */}
          <button className={classes.button} type="submit">
            edit
          </button>
          <button className={classes.button} type="submit">
            delete
          </button>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.title}>{data.title}</div>
        <div
          className={classes.body}
          dangerouslySetInnerHTML={{ __html: data.body }}
        ></div>
        <div className={classes.createAt}>{data.createAt}</div>
      </div>
    </div>
  );
};

export default PostItem;
