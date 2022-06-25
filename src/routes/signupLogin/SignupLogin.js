import React from 'react'
import { Link } from 'react-router-dom'
import './SignupLogin.css'

function SignUpLogIn() {
  return (
    <div className='signup-login' >
      <div className='sl-content'>
        <Link className='sl-head' to="/">ARTSITE</Link>
        <Link className='sl-log' to="/login">LOG IN</Link>
        <Link className='sl-sign' to="/signup">SIGN UP</Link>
      </div>
      

    </div>
  )
}

export default SignUpLogIn