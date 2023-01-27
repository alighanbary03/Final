import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../Style/ImgSlide.css";
import Img1 from "../assets/images/1.jpg";
import Img2 from "../assets/images/img_lights_wide.jpg";

const Example = () => {
  const images = [
    "https://media.vogue.co.uk/photos/620b82ceca2fb3165488dc5e/4:3/w_1919,h_1439,c_limit/Colour%20pop%20accessory.jpeg",
    "https://images.ctfassets.net/ydv6sq0kb5bw/2BWsefFZqWE3gCM8DCSICu/b8c1a793a12af458e37fafd8776db600/shutterstock_1634347555__1_.jpg",
  ];

  return (
    <Slide>
      <div className="each-slide-effect">
        <div>
          <img src={Img1} />
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[0]})` }}></div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[1]})` }}></div>
      </div>
    </Slide>
  );
};

export default Example;
