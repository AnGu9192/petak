import React from "react";

function SliderContent({ activeIndex, imageSlider}) {
  return (
    <section>
      {imageSlider.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt={slide.title} />
          
          <h1 className="slide-title">{slide.title}</h1>
          <a className="slide-button">{slide.buttontext}</a>
         
        </div>
      ))}     
    </section>
  );
}

export default SliderContent;
