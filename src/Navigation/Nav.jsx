import React from 'react'
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { SiNike } from "react-icons/si";

import './Nav.css'
const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
      <SiNike  className='nike-logo'/>
      <div className="center">
      <input type="text"  
        placeholder='Busca algun artículo en especifico...'
        className='search-input'
        onChange={handleInputChange}
          value={query}
        />
      </div>
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  )
}

export default Nav