import React from "react";
import { motion } from "framer-motion";

function SliderContent({ activeIndex, imageSlider }) {
  return (
    <motion.section>
      <motion.div>
      {imageSlider.map((slide, index) => (
        <motion.div
          drag="x"
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <motion.div>
          <img className="slide-image" src={slide.urls} alt={slide.title} />

          </motion.div>

          
          <h2 className="slide-title">{slide.title}</h2>
          <button className="slide-button">{slide.buttontext}</button>
        </motion.div>
      ))}
      </motion.div>
     
    </motion.section>
  );
}

export default SliderContent;
