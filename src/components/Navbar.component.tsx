import React, { useState } from 'react'

import { navbarStyles } from '../styles'; 
import { icon } from '../assets';

export const Navbar: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={navbarStyles.nav}>
        <div className={navbarStyles.navbar}>
          <button className={navbarStyles.menuToggle} onClick={handleToggleMenu}>
          ☰
          </button>
          <ul className={`${navbarStyles.menu} ${isMenuOpen ? navbarStyles.open : ''}`}>
              <li onClick={handleToggleMenu}><a href="#profile">
                <img className={navbarStyles.icon} src={icon} alt="Page Icon" />  
              </a></li>
              <li onClick={handleToggleMenu}><a href="#experience">Experience</a></li>
              <li onClick={handleToggleMenu}><a href="#projects">Projects</a></li>
          </ul>
      </div>
    </nav>
  )
}
