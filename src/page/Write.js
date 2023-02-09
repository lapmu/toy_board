import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackSpace from "../components/UI/BackSpace";
import Button from "../components/UI/Button";
import { useDispatch } from "react-redux";
import { addGuest_Write } from "../action/action";

import classes from "./Write.module.css";

// 방명록 글쓰기
const Write = () => {
  // 값이 변경될 때마다 실행
  // input, textarea에서 입력한 값을 value라는 값으로 Write가 가지고 있는 상태
  const [author, setValueName] = useState("");
  const [text, setValueText] = useState("");
  const navigate = useNavigate();

  //Redux
  const dispatch = useDispatch();

  // input이 변경될 때마다 실행
  const onChangeName = (e) => {
    setValueName(e.target.value);
  };

  // textarea이 변경될 때마다 실행
  const onChangeText = (e) => {
    setValueText(e.target.value);
  };

  // 새로고침 방지 & 내용 비우기 & 상태 끌어올리기?
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "" || author === "") {
      return alert("빈 칸을 작성해 주세요");
    } else {
      dispatch(addGuest_Write(author, text));
      setValueName("");
      setValueText("");
      navigate("/guest");
    }
  };

  return (
    <div className={classes.main}>
      <div className={classes.BackSpaceDiv}>
        <BackSpace to="/guest" />
      </div>
      <form className={classes.form} onSubmit={onSubmit}>
        <div className={classes.backsubmit}>
          <Link to="/draw">
            <div className={classes.draw}>Draw In Canvas</div>
          </Link>
        </div>
        <input
          className={classes.input}
          placeholder="Name"
          onChange={onChangeName}
          value={author}
        ></input>
        <textarea
          className={classes.textarea}
          placeholder="New Text"
          onChange={onChangeText}
          value={text}
        ></textarea>
      </form>
      <Button type="submit" onClick={onSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default Write;
