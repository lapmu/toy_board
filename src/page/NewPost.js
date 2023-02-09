import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useDispatch } from "react-redux";
import { addPost } from "../action/action";

import classes from "./NewPost.module.css";
import Button from "../components/UI/Button";
import BackSpace from "../components/UI/BackSpace";

const NewPost = () => {
  const [isbody, setbody] = useState("");
  const [istitle, setTitle] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const titleChangeHandle = (e) => {
    setTitle(e.target.value);
  };

  const buttonClickHandle = () => {
    if (isbody === "" || istitle === "") {
      alert("빈 칸을 작성해 주세요");
    } else {
      dispatch(addPost(isbody, istitle));
      navigate("/work");
    }
  };
  return (
    <div className={classes.newPost}>
      <BackSpace to="/work" />
      <div className={classes.newPost}>
        <input
          type="text"
          placeholder="Title"
          className={classes.title}
          onChange={titleChangeHandle}
        ></input>
        <CKEditor
          editor={ClassicEditor}
          onChange={(event, editor) => {
            const data = editor.getData();
            setbody(data);
          }}
        />
      </div>
      <Button onClick={buttonClickHandle}>Submit</Button>
    </div>
  );
};

export default NewPost;
