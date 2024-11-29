import React from 'react'
import './Articles.css'
import Input from '../../components/Input'
const Articles = ({handleChange}) => {
  return (
    <div>
      <h2 className="sidebar-title">Articulos</h2>
      <div>
        <label className="sidebar-label-container" style={{color:'#ffcefc'}}>
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>Todos
        </label>
        <Input 
        handleChange={handleChange}
        value="camisas"
        title="Camisas"
        name="test1"
        />
        <Input 
        handleChange={handleChange}
        value="pantalones"
        title="Pantalones"
        name="test1"
        />
        <Input 
        handleChange={handleChange}
        value="suetas"
        title="Sueters o abrigos"
        name="test1"
        />
        <Input 
        handleChange={handleChange}
        value="zapatos"
        title="Calzado"
        name="test1"
        />
        </div>
    </div>
  )
}

export default Articles