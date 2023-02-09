import React, { useState } from "react";
import { RxTrash, RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { deleteGuest } from "../action/action";
import classes from "./GuestItem.module.css";

const GuestItem = ({ idx }) => {
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.guest[idx]);

  const modalHandle = () => {
    setModal(!modal);
  };

  const deleteGuestHandle = () => {
    dispatch(deleteGuest(idx));
    setModal(!modal);
  };

  const prevendEventPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {modal ? (
        <div className={classes.modal} onClick={modalHandle}>
          <div className={classes.modal_body} onClick={prevendEventPropagation}>
            <div className={classes.modal_header}>
              <div onClick={deleteGuestHandle}>
                <RxTrash className={classes.icon} />
              </div>
              <div className={classes.modal_close} onClick={modalHandle}>
                <RxCross1 className={classes.icon} />
              </div>
            </div>
            {state.img === "none" ? (
              <div className={classes.modal_text}>{state.text}</div>
            ) : (
              <img src={state.img} className={classes.modal_img} alt="그림" />
            )}
            <div className={classes.modal_author}>{state.author}</div>
          </div>
        </div>
      ) : null}
      <div className={classes.content} onClick={modalHandle}>
        <div className={classes.content_author}>{state.author}</div>
        {state.img === "none" ? (
          <div className={classes.content_text}>{state.text}</div>
        ) : (
          <img src={state.img} className={classes.content_img} alt="그림" />
        )}
      </div>
    </>
  );
};

export default GuestItem;
