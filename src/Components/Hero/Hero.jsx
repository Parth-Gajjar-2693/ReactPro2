import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/images/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero ">
      <div className="hero-text">
        <h1>We ensure better education for a better world</h1>
        <p>|| विद्या सर्वस्य भूषणम् ||</p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
