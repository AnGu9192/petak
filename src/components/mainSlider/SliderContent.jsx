import React from "react";

function SliderContent({ activeIndex, imageSlider }) {
  return (
    <section>
      <div>
      {imageSlider.map((slide, index) => (
        <div
        
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt={slide.title} />
          
          <h2 className="slide-title">{slide.title}</h2>
          <button className="slide-button">{slide.buttontext}</button>
        </div>
      ))}
      </div>
     
    </section>
  );
}

export default SliderContent;
