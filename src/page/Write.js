import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Write.module.css";

// 방명록 글쓰기
const Write = () => {
  // 값이 변경될 때마다 실행
  // textarea에서 입력한 값을 value라는 값으로 NewPost가 가지고 있는 상태
  const [value, setValue] = useState("");

  // textarea이 변경될 때마다 실행
  const onChange = (e) => {
    setValue(e.target.value);
  };

  // 새로고침 방지
  const onSubmit = (e) => {
    e.preventDefault();
    setValue("");
  };

  return (
    <div className={classes.main}>
      <form className={classes.form} onSubmit={onSubmit}>
        <div className={classes.backsubmit}>
          <Link to="/guest">
            <p className={classes.p}>{"<"}</p>
          </Link>
          <button className={classes.button} type="submit">
            Submit
          </button>
        </div>
        <textarea
          className={classes.textarea}
          placeholder="Text"
          onChange={onChange}
          value={value}
        ></textarea>
      </form>
    </div>
  );
};

export default Write;
