import React from "react";

import Button from "../components/UI/Button";
import BackSpace from '../components/UI/BackSpace'

const AboutUs = () => {
  return (
    <div>
        <div>
        About Us 
        </div>
        <Button>New</Button>
        <BackSpace to='/work'/>
    </div>
  );
};

export default AboutUs;
