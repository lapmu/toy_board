import React from "react";
import { Link } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import classes from "./NewPost.module.css";

const NewPost = () => {
  return (
    <div className={classes.newPost}>
      <div className={classes.backsubmit}>
        <Link to="/">
          <p className={classes.p}>{"<"}</p>
        </Link>
        <button className={classes.button}>Submit</button>
      </div>
      <label>제목</label>
      <input type="text" className={classes.title}></input>
      <label>내용</label>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
};

export default NewPost;
