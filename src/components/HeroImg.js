import "./HeroImg.css";

import React from "react";
import Intro from "../assets/img-9.jpg";
import { Link } from "react-router-dom";


const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={Intro} alt="introimage" />
      </div>
      <div className="content">
        <p>Hi, I'M A FREELANCER.</p>
        <h1>React Developer</h1>

        <div>
          <Link to="/project" className="btn">
            Project
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>

        
      </div>
    </div>
  );
};

export default HeroImg;
