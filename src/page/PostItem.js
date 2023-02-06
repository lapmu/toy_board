import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./PpstItem.module.css";

const PostItem = ({ data, onRemovePost, selectedPost }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState('')

  const onBackSpace = (e) => {
    navigate("/");
  };

  useEffect(() => {
    if (selectedPost) {
      setValue(selectedPost.id)
    }
  }, [selectedPost])

  return (
    <div className={classes.main}>
      <div className={classes.backsubmit}>
        <Link to="/work">
          <p className={classes.p}>{"<"}</p>
        </Link>
        <div>
          {" "}
          {/* 추후 아이콘으로 바꿀 거 고려해 보기 */}
          <button className={classes.button} type="submit" value={value}>
            edit
          </button>
          <button className={classes.button} type="submit" value={value} onClick={() => {onRemovePost(selectedPost.post.id)}}>
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
