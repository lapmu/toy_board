import React from "react";
import { Link } from "react-router-dom";
import GuestItem from "../components/GuestItem";
import Button from "../components/UI/Button";
import classes from "./Guest.module.css";
import { useSelector } from "react-redux";

// guest 페이지
const Guest = () => {
  const state = useSelector((state) => state.guest);
  return (
    <div className={classes.Guest}>
      <div className={classes.title}>
        <p>Guest Book</p>
      </div>
      <div className={classes.newGuest}>
        <p>Total {state.length}</p>
      </div>
      <Link to="/write">
        <Button>New Guest</Button>
      </Link>
      <div className={classes.dataGuest}>
        {/* 방명록 뿌리기 */}
        {state.map((el, idx) => {
          return <GuestItem key={idx} idx={idx}></GuestItem>;
        })}
      </div>
    </div>
  );
};

export default Guest;
