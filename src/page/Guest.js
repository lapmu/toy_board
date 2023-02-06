import React from "react";
import { Link } from "react-router-dom";
import GuestItem from "../components/GuestItem";
import classes from "./Guest.module.css";

// guest 페이지
const Guest = ({ Guest, onRemoveGuest }) => {
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
            <GuestItem
              key={idx}
              idx={idx}
              el={el}
              onRemoveGuest={onRemoveGuest}
            ></GuestItem>
          );
        })}
      </div>
    </div>
  );
};

export default Guest;
