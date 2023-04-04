import React from "react";


export const CarsItems = ({ image, model }) => {
  return (

    <div className="carItem">
    <div style={{ backgroundImage: `url(${image})` }} className="carItem__image"> </div>
    <h3> {model} </h3>
  </div>
  );
};
