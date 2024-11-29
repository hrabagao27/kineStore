import React from 'react'
import './Price.css'
import Input from '../../components/Input'

const Price = ({handleChange}) => {
  return (
    <div className='ml'>
      <h2 className="sidebar-title price-title">Precio</h2>
      <div>

      <label className="sidebar-label-container " style={{color:'#ffcefc'}}>
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>Todos
        </label>

      <Input 
      handleChange={handleChange}
      value={50}
      title="&gt;50"
      name="test2"
      />
      <Input 
      handleChange={handleChange}
      value={60}
      title="$50 - $60"
      name="test2"
      />
      <Input 
      handleChange={handleChange}
      value={70}
      title="$60 - $70"
      name="test2"
      />
      <Input 
      handleChange={handleChange}
      value={80}
      title="$70 - $80"
      name="test2"
      />
      <Input 
      handleChange={handleChange}
      value={90}
      title="&lt;$80"
      name="test2"
      />



      </div>
    </div>
  )
}

export default Price