import React from 'react'

const Input = ({ handleChange, value, title, name, color} ) => {
  return (
    <label htmlFor="" className="sidebar-label-container" style={{color:'#ffcefc'}}>
          <input onChange={handleChange} type="radio" value={value} name={name} />
          <span className="checkmark" style={{ backgroundColor: color }}></span>{title}
        </label>
  )
}

export default Input