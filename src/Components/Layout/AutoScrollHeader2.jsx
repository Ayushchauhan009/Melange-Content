import React from "react";
// import { useSpring, animated } from "react-spring";

const AutoScrollHeader1 = ({ images, title }) => {
  return (
    <div className="pt-[20px] ">
      
      <div className="marquee">
        <div className="marqueeGroupSec">
          {images.map((el, index) => (
            <div key={index} className="imageGroup1">
              <img src={el} className="imaGe" />
            </div>
          ))}
        </div>
        <div className="marqueeGroupSec">
          {images.map((el, index) => (
            <div key={index} className="imageGroup1">
              <img src={el} className="imaGe" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoScrollHeader1;
