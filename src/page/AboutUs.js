import React from "react";

import moo from "../img/moo.png";
import min from "../img/min.png";

import classes from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={classes.main}>
      <section className={classes.section_1}>
        <div className={classes.title}>
          <p>ㅡ About MOOMINZ</p>
          <h1>MMZ</h1>
        </div>
      </section>

      <section className={classes.section_2}>
        <div className={classes.moo_img}>
          <img src={moo} alt="moo" className={classes.moo} />
          <div className={classes.moo_text}>
            <h1>Moo</h1>
            <ul>
              <li>Web CSS</li>
              <li>Main Display</li>
              <li>About Us</li>
              <li>Case Study</li>
              <ul>
                <li>work</li>
                <li>list</li>
              </ul>
              <li>Cuest Book</li>
              <ul>
                <li>write</li>
              </ul>

              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>

        <div className={classes.min_img}>
          <img src={min} alt="moo" className={classes.min} />
          <div className={classes.min_text}>
            <h1>Min</h1>
            <ul>
              <li>Web CSS</li>
              <li>Main Display</li>
              <li>About Us</li>
              <li>Case Study</li>
              <ul>
                <li>work</li>
                <li>list</li>
              </ul>
              <li>Cuest Book</li>
              <ul>
                <li>write</li>
              </ul>

              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
