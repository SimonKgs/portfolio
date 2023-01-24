import React from "react";
import { NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="Menu">
      <NavLink className='Menu__component' to='/'>Home</NavLink>
      <NavLink className='Menu__component' to='/cv'>CV</NavLink>
      <NavLink className='Menu__component' to='/ejemplos'>Ejemplos</NavLink>
      <NavLink className='Menu__component' to='/about'>About</NavLink>
    </div>
  );
};
