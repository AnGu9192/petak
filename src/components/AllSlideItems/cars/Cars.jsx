import React from 'react'
import './Cars.css'
import {AiOutlineRight} from "react-icons/ai"
import { CarsItems } from './CarsItems';
import { CarsItemsList } from './CarsItemsList';
import seeAll from './../../../assets/seeAll.png';
import arrowRight from './../../../assets/arrow-right.png'



const Cars = () => {
  return (
    <div className='cars'>
    <div className='cars__arrow'>
        Cars<img src={arrowRight} alt="arrow" />
        </div>

         <div className="carList">
        {CarsItemsList.map((carsItem, id) => {
          return (
            <CarsItems
            key={id}
            image={carsItem.image}
            model={carsItem.model}
            />
          );
        })}
      </div>
      <div className='seeAll'>
        <div className='seeall_text'>See All</div>
        <div className='seeall_img'><img src={seeAll} /></div>
      </div>
    </div>
       
  )
}

export default Cars