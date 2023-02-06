import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./PostItem.module.css";

import BackSpace from "../components/UI/BackSpace";
import Button from "../components/UI/Button";

const PostItem = ({ data, onRemovePost, selectedPost }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const onBackSpace = (e) => {
    navigate("/work");
  };

  useEffect(() => {
    if (selectedPost) {
      setValue(selectedPost.id);
    }
  }, [selectedPost]);

  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <BackSpace to="/work" />
        <div>
          <div className={classes.title}>{data.title}</div>

          <div
            className={classes.body}
            dangerouslySetInnerHTML={{ __html: data.body }}
          />

          <div className={classes.createAt}>{data.createAt}</div>
        </div>

        <div className={classes.backsubmit}>
          <Button type="submit" value={value}>
            edit
          </Button>
          <Button
            type="submit"
            value={value}
            onClick={() => {
              onRemovePost(selectedPost.post.id);
            }}
          >
            delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
