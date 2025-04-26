import React from 'react'
import {NavLink} from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='nav'>
      <NavLink className='nav-item' to="/">Home</NavLink>
      <NavLink className='nav-item' to="/About">About</NavLink> 
      <NavLink className='nav-item' to="/Skills">Skills</NavLink> 
      <NavLink className='nav-item' to="/Projects">Projects</NavLink> 
      <NavLink className='nav-item' to="/Contact">Contacts</NavLink>  
    </div>

  )}
