
import React, {useState} from 'react'
import SubMenu from './SubMenu'
import MenuItems from './menuData'


const Menu = () => {
  const [toggle, setToggle] = useState(false)  

  const clickHandler = () => {
    console.log(`clicked`)  
    setToggle(!toggle)
  }

  return (
    <nav>
        <ul>
          {
              MenuItems.map((item) => {
                  return (
                    <li key={item.menuname} onClick={item.submenu && clickHandler}>
                      {item.menuname}
                      {item.submenu && toggle ? <SubMenu dropDownItem={item.submenu} /> : null}
                      </li>
                    )
              })
          }
        </ul>
    </nav>
  )
}

export default Menu