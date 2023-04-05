import React, {useState} from 'react'
import Logo from '../../assets/logo.png'
import './Header.css'
import person from '../../assets/person.png'
import vectorHearth from '../../assets/vectorHearth.png'
import arrowLang from '../../assets/arrowLang.png'
import search from '../../assets/search.png'
import {FiChevronDown } from "react-icons/fi";
import {AiOutlineHeart} from "react-icons/ai"



function Header() {
  const [langState, setLangState] = useState("");
  return (
  
    <div className='header__content'>
      <div className='header__logo'>
          <img src={Logo} alt="logo" />
      </div>
      <div className='header__search'>
        <img src={search} alt="search" className='searchIcon '/>
        <input placeholder="Search" className='search__input'  />
      </div>
      <div className='header__enter'>
      <div className='header__login'>
       <button className='header__login-button'><a href="#">Log In</a></button>
      </div>
      <div className='header__signUp active'>
       <button className='header__signUp-button'><a href="#">SignUp</a></button>
      </div>
      </div>
   <div className='header__end'>
   <div className='header__person'>
        <img src={person} alt="person" />
      </div>
      <div className='header__heart'>
        <img src={vectorHearth} alt="" className='header__heart-img' />
      </div>
      <div className='header__lang'> 
        <select className='lang__select' onChange={() =>{
          const selecetedLang= e.target.value;
          setLangState(selecetedLang)
        }}>
          <option value="eng">Eng</option>
          <option value="arm">Arm</option>
        </select>
         {langState}
      </div>
   </div>

    </div>
  
  )
}

export default Header
