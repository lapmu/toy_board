import React, { useState } from "react";
import { RxTrash, RxCross1 } from "react-icons/rx";
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
              <div onClick={deleteGuestHandle}>
                <RxTrash className={classes.icon} />
              </div>
              <div className={classes.modal_close} onClick={modalHandle}>
                <RxCross1 className={classes.icon} />
              </div>
            </div>
            {el.img === "none" ? (
              <div className={classes.modal_text}>{el.text}</div>
            ) : (
              <img src={el.img} className={classes.modal_img} alt="그림" />
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
          <img src={el.img} className={classes.content_img} alt="그림" />
        )}
      </div>
    </>
  );
};

export default GuestItem;
