import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className='navbar'>

    <NavLink to="/home" className={({isActive})=>isActive ? 'selected': 'link'}>
        Home
    </NavLink>
    <NavLink to="/istriangle" className={({isActive})=>isActive ? 'selected': 'link'} >
        IsTriangle
    </NavLink>
    <NavLink to="/quiz" className={({isActive})=>isActive ? 'selected': 'link'}>
        Triangle Quiz
    </NavLink>
    <NavLink to="/hypotenuse" className={({isActive})=>isActive ? 'selected': 'link'}>
        Hypotenuse
    </NavLink>
    <NavLink to="/area" className={({isActive})=>isActive ? 'selected': 'link'}>
        Area of Triangle
    </NavLink>
    
    </div>
    </>
  )
}

export default Navbar