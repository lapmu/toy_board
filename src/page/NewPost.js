import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import classes from "./NewPost.module.css";

const NewPost = ({ onPost }) => {
  const [isbody, setbody] = useState("");
  const [istitle, setTitle] = useState("");
  const navigate = useNavigate();

  const titleChangeHandle = (e) => {
    setTitle(e.target.value);
  };

  const buttonClickHandle = () => {
    if (isbody === "" || istitle === "") {
      alert("빈 칸을 적어주세요");
    } else {
      onPost(isbody, istitle);
      navigate("/");
    }
  };
  return (
    <div className={classes.newPost}>
      <div className={classes.backsubmit}>
        <Link to="/">
          <p className={classes.p}>{"<"}</p>
        </Link>
        <button className={classes.button} onClick={buttonClickHandle}>
          Submit
        </button>
      </div>
      {/* <label>제목</label> */}
      <input
        type="text"
        placeholder="Title"
        className={classes.title}
        onChange={titleChangeHandle}
      ></input>
      {/* <label>내용</label> */}
      <CKEditor
        editor={ClassicEditor}
        onChange={(event, editor) => {
          const data = editor.getData();
          setbody(data);
        }}
      />
    </div>
  );
};

export default NewPost;
