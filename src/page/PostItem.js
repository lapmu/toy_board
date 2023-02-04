import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./PpstItem.module.css";

const PostItem = ({ data }) => {
  const navigate = useNavigate();

  const onBackSpace = (e) => {
    navigate("/");
  };

  return (
    <>
      <div onClick={onBackSpace}>{"<"}</div>
      <div>{data.createAt}</div>
      <div>{data.title}</div>
      {/* <div>{data.body}</div> */}
      <div dangerouslySetInnerHTML={{ __html: data.body }}></div>
    </>
  );
};

export default PostItem;
