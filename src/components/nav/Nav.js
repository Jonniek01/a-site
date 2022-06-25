import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
      <div className='logo'>
      <Link className='link' to="/">ARTSITE</Link>
      </div>
      <div className='links'>
      <Link className='link' to="/paintings">PAINTINGS</Link>
      <Link className='link' to="/drawings">DRAWINGS</Link>
      <Link className='link' to="/sculpture">SCULPTURE</Link>
      <Link className='link' to="/account">ACCOUNT</Link>
      <Link className='link' to="/about">ABOUT</Link>
      </div>


    </div>
  )
}

export default Nav