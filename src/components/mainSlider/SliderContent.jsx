import React from "react";

function SliderContent({ activeIndex, imageSlider}) {
  return (
    <section>
      <div
         drag='x'
         dragConstraints={{right:0}}
         draggable='true'
         
         >
      {imageSlider.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <div>
          <img className="slide-image" src={slide.urls} alt={slide.title} />
          
          <h2 className="slide-title">{slide.title}</h2>
          <button className="slide-button">{slide.buttontext}</button>
          </div>
         
        </div>
      ))}
      </div>
     
    </section>
  );
}

export default SliderContent;
