import React from "react";
import { Link } from "react-router-dom";
import classes from "./Guest.module.css";

// guest 페이지
const Guest = ({ Guest }) => {
  return (
    <div className={classes.Guest}>
      <div className={classes.newGuest}>
        <p>Total {Guest.length}</p>
        {/* 새로운 방명록 작성 링크 */}
        <Link to="/write">
          <div>New Guest</div>
        </Link>
      </div>
      <div className={classes.dataGuest}>
        {/* 방명록 뿌리기 */}
        {Guest.map((el, idx) => {
          return (
            <div key={idx} className={classes.content}>
              <div className={classes.content_author}>{el.author}</div>
              <div className={classes.content_text}>{el.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Guest;
