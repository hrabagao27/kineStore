import React from 'react'
import './Color.css'
import Input from '../../components/Input'

const Color = ({ handleChange }) => {
  return (
    <div className='ml'>
      <h2 className="sidebar-title color-title">Color</h2>
      <div>
      <label className="sidebar-label-container " style={{color:'#ffcefc'}}>
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark all"></span>Todos
      </label>
      <Input 
      handleChange={handleChange}
      value="black"
      title="Negro"
      name="test1"
      color="black"
      />
      <Input 
      handleChange={handleChange}
      value="white"
      title="Blanco"
      name="test1"
      color="white"
      />
      <Input 
      handleChange={handleChange}
      value="red"
      title="Rojo"
      name="test1"
      color="red"
      />
      <Input 
      handleChange={handleChange}
      value="blue"
      title="Azul"
      name="test1"
      color="blue"
      />
      </div>
    </div>
  )
}

export default Color