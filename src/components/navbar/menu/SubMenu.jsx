import React from 'react'

const SubMenu = ({dropDownItem}) => {
  return (
    <div className='drop-down'>
        <ul>
            {dropDownItem.map((item) => {
                return <li key={item.submenuname}>{item.submenuname}</li>
            })}
        </ul>
    </div>
  )
}

export default SubMenu