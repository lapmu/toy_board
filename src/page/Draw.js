import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./Draw.module.css";

const Draw = ({ onDraw }) => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  // getCtx
  const [getCtx, setGetCtx] = useState(null);
  // painting state
  const [painting, setPainting] = useState(false);

  useEffect(() => {
    // canvas useRef
    const canvas = canvasRef.current;
    canvas.width = 1000;
    canvas.height = 500;
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
    const drawimg = canvasRef.current.toDataURL();
    onDraw("kim", drawimg);
    navigate("/guest");
  };

  const changeColor = (e) => {
    if (e.target.textContent === "red") {
      getCtx.strokeStyle = "#ff0000";
    } else if (e.target.textContent === "black") {
      getCtx.strokeStyle = "#000000";
    } else if (e.target.textContent === "orange") {
      getCtx.strokeStyle = "#ffaf00";
    } else if (e.target.textContent === "yellow") {
      getCtx.strokeStyle = "#ffff00";
    } else if (e.target.textContent === "green") {
      getCtx.strokeStyle = "#00ff00";
    } else if (e.target.textContent === "blue") {
      getCtx.strokeStyle = "#0000ff";
    } else if (e.target.textContent === "puple") {
      getCtx.strokeStyle = "#9900ff";
    } else if (e.target.textContent === "white") {
      getCtx.strokeStyle = "#ffffff";
    }
  };

  return (
    <div className="view">
      <div className={classes.backsubmit}>
        <Link to="/guest">
          <p className={classes.p}>{"<"}</p>
        </Link>
        <Link to="/write">
          <div className={classes.draw}>Write</div>
        </Link>
        <button className={classes.button} onClick={buttonClickHandle}>
          Submit
        </button>
      </div>
      <div className="canvasWrap">
        <canvas
          className="canvas"
          ref={canvasRef}
          onMouseDown={() => setPainting(true)}
          onMouseUp={() => setPainting(false)}
          onMouseMove={(e) => drawFn(e)}
          onMouseLeave={() => setPainting(false)}
        ></canvas>
      </div>
      <button onClick={changeColor}>{"red"}</button>
      <button onClick={changeColor}>{"orange"}</button>
      <button onClick={changeColor}>{"yellow"}</button>
      <button onClick={changeColor}>{"green"}</button>
      <button onClick={changeColor}>{"blue"}</button>
      <button onClick={changeColor}>{"puple"}</button>
      <button onClick={changeColor}>{"white"}</button>
      <button onClick={changeColor}>{"black"}</button>
    </div>
  );
};

export default Draw;
