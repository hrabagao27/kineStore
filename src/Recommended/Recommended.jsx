import React from 'react'
import Button from "../components/Buttons";
import './Recommended.css'

const Recommended = ({ handleClick }) => {
  return (
    <>
    <div>
      <h2 className="recommended-title" style={{color:'azure'}}>Recomendados</h2>
      <div className="recommended-flex">
        <Button onClickHandler={handleClick} value="" title="Todos" />
        <Button onClickHandler={handleClick} value="50" title="Mas economicos" />
        <Button onClickHandler={handleClick} value="80" title="Mas exclusivos" />
      </div>
    </div>
    </>
  )
}

export default Recommended