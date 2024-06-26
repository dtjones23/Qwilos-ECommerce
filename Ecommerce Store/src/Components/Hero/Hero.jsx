import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import my_image from "../Assets/my_image.jpeg";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>ONLY NEW GOODS MANE</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="hand-icon" />
          </div>
          <p>collections for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={my_image} alt="hero-image" />
      </div>
    </div>
  );
}

export default Hero;
