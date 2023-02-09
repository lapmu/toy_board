import React from "react";

import min from "../img/real_min.jpg";
import moo from "../img/real_moo.jpg";

import classes from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={classes.main}>
      <section className={classes.section_1}>
        <div className={classes.title}>
          <p>ㅡ About MOOMINZ</p>
          <h1>M&MZ</h1>
        </div>
      </section>

      <section className={classes.section_2}>
        <div className={classes.moo_img}>
          <img src={moo} alt="moo" className={classes.moo} />
          <div className={classes.moo_text}>
            <h1>Moo</h1>
            <ul>
              <li>Background</li>
              <li>Case Study</li>
              <ul>
                <li>newpost</li>
              </ul>
              <li>Guest Book</li>
              <ul>
                <li>guest</li>
                <li>modal</li>
                <li>draw</li>
                <li>guestitem</li>
              </ul>
            </ul>
          </div>
        </div>

        <div className={classes.min_img}>
          <img src={min} alt="moo" className={classes.min} />
          <div className={classes.min_text}>
            <h1>Min</h1>
            <ul>
              <li>Main</li>
              <li>Nav</li>
              <li>About Us</li>
              <li>Case Study</li>
              <ul>
                <li>filter</li>
                <li>list</li>
                <li>postitem</li>
              </ul>
              <li>Guest Book</li>
              <ul>
                <li>write</li>
              </ul>
              <li>Menu</li>
              <li>Web CSS</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
