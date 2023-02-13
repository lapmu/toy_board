import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackSpace from "../components/UI/BackSpace";
import Button from "../components/UI/Button";
import { useDispatch } from "react-redux";
import { addGuest_Draw } from "../action/action";

import classes from "./Draw.module.css";

const Draw = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const dispatch = useDispatch();
  // getCtx
  const [getCtx, setGetCtx] = useState(null);
  // painting state
  const [painting, setPainting] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    // canvas useRef
    const canvas = canvasRef.current;
    canvas.width = 1500;
    canvas.height = 350;
    const ctx = canvas.getContext("2d");
    ctx.lineJoin = "round";
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = "#000000";
    setGetCtx(ctx);
  }, []);

  const drawFn = (e) => {
    // mouse position
    const mouseX = e.nativeEvent.offsetX;
    const mouseY = e.nativeEvent.offsetY;
    // drawing
    if (!painting) {
      getCtx.beginPath();
      getCtx.moveTo(mouseX, mouseY);
    } else {
      getCtx.lineTo(mouseX, mouseY);
      getCtx.stroke();
    }
  };

  const buttonClickHandle = () => {
    if (name !== "") {
      const drawimg = canvasRef.current.toDataURL();
      dispatch(addGuest_Draw(name, drawimg));
      navigate("/guest");
    } else {
      alert("이름을 입력해 주세요.");
    }
  };

  const changeColor = (e) => {
    if (e.target.textContent === "Red") {
      getCtx.strokeStyle = "#e4491e";
    } else if (e.target.textContent === "Black") {
      getCtx.strokeStyle = "#000000";
    } else if (e.target.textContent === "Orange") {
      getCtx.strokeStyle = "#fba818";
    } else if (e.target.textContent === "Yellow") {
      getCtx.strokeStyle = "#fce72b";
    } else if (e.target.textContent === "Green") {
      getCtx.strokeStyle = "#73d573";
    } else if (e.target.textContent === "Blue") {
      getCtx.strokeStyle = "#48b0ff";
    } else if (e.target.textContent === "Puple") {
      getCtx.strokeStyle = "#9768f6";
    } else if (e.target.textContent === "White") {
      getCtx.strokeStyle = "#ffffff";
    }
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <div className={classes.main}>
      <div className={classes.BackSpaceDiv}>
        <BackSpace to="/guest" />
      </div>
      <div className={classes.backsubmit}>
        <Link to="/write">
          <div className={classes.draw}>Write</div>
        </Link>
      </div>
      <div className="canvasWrap">
        <input
          className={classes.input}
          placeholder="Name"
          onChange={onChangeName}
          value={name}
        ></input>
        <canvas
          className={classes.canvas}
          ref={canvasRef}
          onMouseDown={() => setPainting(true)}
          onMouseUp={() => setPainting(false)}
          onMouseMove={(e) => drawFn(e)}
          onMouseLeave={() => setPainting(false)}
        ></canvas>
      </div>
      <div className={classes.color}>
        <button className={classes.red} onClick={changeColor}>
          {"Red"}
        </button>
        <button className={classes.orange} onClick={changeColor}>
          {"Orange"}
        </button>
        <button className={classes.yellow} onClick={changeColor}>
          {"Yellow"}
        </button>
        <button className={classes.green} onClick={changeColor}>
          {"Green"}
        </button>
        <button className={classes.blue} onClick={changeColor}>
          {"Blue"}
        </button>
        <button className={classes.puple} onClick={changeColor}>
          {"Puple"}
        </button>
        <button className={classes.white} onClick={changeColor}>
          {"White"}
        </button>
        <button className={classes.black} onClick={changeColor}>
          {"Black"}
        </button>
      </div>
      <Button className={classes.button} onClick={buttonClickHandle}>
        Submit
      </Button>
    </div>
  );
};

export default Draw;
