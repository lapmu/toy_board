import React, { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Write.module.css";

// 방명록 글쓰기
const Write = () => {
  // 값이 변경될 때마다 실행
  // input, textarea에서 입력한 값을 value라는 값으로 가 가지고 있는 상태
  const [valueName, setValueName] = useState("");
  const [valueText, setValueText] = useState("");

  // input이 변경될 때마다 실행
  const onChangeName = (e) => {
      setValueName(e.target.value);
    };
    
  // textarea이 변경될 때마다 실행
  const onChangeText = (e) => {
    setValueText(e.target.value);
  };

  // 새로고침 방지 & 내용 비우기
  const onSubmit = (e) => {
    e.preventDefault();
    setValueName("");
    setValueText('')
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
        <input
          className={classes.input}
          placeholder="Name"
          onChange={onChangeName}
          value={valueName}
        ></input>
        <textarea
          className={classes.textarea}
          placeholder="New Text"
          onChange={onChangeText}
          value={valueText}
        ></textarea>
      </form>
    </div>
  );
};

export default Write;
