import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
    <div className="Navbar">
        <Link target='#' to="https://github.com/codeomi">Source</Link>
        <Link target='#' to="https://github.com/codeomi">About Me</Link>
    </div>
   
   </>
  )
}

export default Navbar
