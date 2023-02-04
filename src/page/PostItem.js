import React from "react";

import classes from './PpstItem.module.css'

const PostItem = ({ data }) => {
  return (
    <>
      <div>{data.title}</div>
      <div>{data.body}</div>
      <div>{data.createAt}</div>
    </>
  );
};

export default PostItem;
