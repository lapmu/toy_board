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
        </div>

        <div className={classes.min_img}>
          <img src={min} alt="moo" className={classes.min} />
        </div>


        <div className={classes.moo_text}>
          <h1>Moo</h1>
          <p>blog</p>
        </div>
        
        <div  className={classes.min_text}>
          <div className={classes.minText}>Min</div>
        </div>

      </section>
    </div>
  );
};

export default AboutUs;
