import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiAlignLeft,  FiChevronDown } from "react-icons/fi";
import {AiOutlineClose} from "react-icons/ai"

import './Navbar.css'

const Navbar = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };
 
  let boxClass = ["main-menu"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }
  return (
    <header className="header__navbar">
      <div className="container">
        <div className="row">
          <div className="header__navbar__menus">
            <nav className="main-nav ">
              {/* Responsive Menu Button */}
              {isResponsiveclose === true ? (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    <AiOutlineClose />
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                
                    <FiAlignLeft />
                  </span>
                </>
              )}

              <ul className={boxClass.join(" ")}>
              <li
                  onClick={toggleSubmenu}
                  className="menu-item sub__menus__arrows"
                >
              
                  <Link to="#">
              
                    All Categories <FiChevronDown />
                  </Link>
                  <ul className={boxClassSubMenu.join(" ")}>
                    <li>
        
                      <NavLink
                        onClick={toggleClass}
                        activeclassname="is-active"
                        to={`/Aaaa`}
                      >

                        Aaaa
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeclassname="is-active"
                        to={`/Bbbb`}
                      >
                        Bbbb
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-first">
                  <NavLink
                    activeClassName="is-active"
                    onClick={toggleClass}
                    to={`/`}
                  >
                    Jobs
                  </NavLink>
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                     activeClassName="is-active"
                     to={`/Service`}
                  >

                    Service
                  </NavLink>
                </li>

                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                     activeClassName="is-active"
                    to={`/RealEstate`}
                  >
              
                    Real Estate
                  </NavLink>
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}                    
                    activeClassName="is-active"
                     to={`/Electronics`}
                  >
                
                    Electronics
                  </NavLink>
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/ClothingFashion`}
                  >
                    Cloting and Fashion
                  </NavLink>
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}                    
                     activeClassName="is-active"
                     to={`/HomeGarden`}
                  > 
                    Home and Garden
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
