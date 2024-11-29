import React from 'react'
import Articles from './Articles/Articles'
import Color from './Color/Color'
import Price from './Price/Price'
import './Sidebar.css'

const Sidebar = ({ handleChange }) => {
  return (
    <>
    <section className="sidebar">
        <div className="logo-container"></div>
    <Articles handleChange={handleChange} />
    <Price handleChange={handleChange} />
    <Color handleChange={handleChange} />
    </section>
    </>
  )
}

export default Sidebar