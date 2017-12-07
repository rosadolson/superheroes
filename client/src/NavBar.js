import React from 'react'
import {
  Link
} from 'react-router-dom'

const NavBar = () => 
  <nav>
    <Link to='/'> Home </Link>
    <Link to='/heroes'> Heroes </Link>
  </nav>

export default NavBar
