import React from "react";
import { motion } from 'framer-motion';

function SliderContent({ activeIndex, imageSlider}) {
  return (
    <section>
      <motion.div
         drag='x'
         dragConstraints={{right:0}}
         draggable='true'
         
         >
      {imageSlider.map((slide, index) => (
        <motion.div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <motion.div>
          <img className="slide-image" src={slide.urls} alt={slide.title} />
          
          <h2 className="slide-title">{slide.title}</h2>
          <button className="slide-button">{slide.buttontext}</button>
          </motion.div>
         
        </motion.div>
      ))}
      </motion.div>
     
    </section>
  );
}

export default SliderContent;
