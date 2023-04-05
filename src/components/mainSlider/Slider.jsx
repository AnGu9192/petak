import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import "./SliderContent.css";
import imageSlider from "./imageSlider";
import {motion} from 'framer-motion'

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const len = imageSlider.length - 1;
   useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
}, [activeIndex]); 
  
  return (
  <motion.div className="slider-container">

    <SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />
  
    
     <Dots
        activeIndex={activeIndex}
        imageSlider={imageSlider}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />  
    </motion.div>
  );
}

export default Slider;
