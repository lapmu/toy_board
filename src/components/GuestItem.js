import React, { useState } from "react";
import classes from "./GuestItem.module.css";

const GuestItem = ({ el, idx, onRemoveGuest }) => {
  const [modal, setModal] = useState(false);

  const modalHandle = () => {
    setModal(!modal);
  };

  const deleteGuestHandle = () => {
    onRemoveGuest(idx);
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
              <div onClick={deleteGuestHandle}>🗑</div>
              <div className={classes.modal_close} onClick={modalHandle}>
                🗙
              </div>
            </div>
            {el.img === "none" ? (
              <div className={classes.modal_text}>{el.text}</div>
            ) : (
              <img src={el.img} className={classes.modal_img}></img>
            )}
            <div className={classes.modal_author}>{el.author}</div>
          </div>
        </div>
      ) : null}
      <div className={classes.content} onClick={modalHandle}>
        <div className={classes.content_author}>{el.author}</div>
        {el.img === "none" ? (
          <div className={classes.content_text}>{el.text}</div>
        ) : (
          <img src={el.img} className={classes.content_img}></img>
        )}
      </div>
    </>
  );
};

export default GuestItem;
